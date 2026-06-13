// ===== GLOBAL CHAT ENGINE =====
(function() {
  'use strict';

  const CONSECUTIVE_TIMEOUT = 5 * 60 * 1000; // 5 dakika

  let currentUser = null;
  let replyToMessage = null;
  let reportTargetMsg = null;
  let forwardTargetMsg = null;
  let realtimeChannel = null;
  let profileCache = {};
  let msgUserMap = {};
  let lastMessageUserId = null;
  let lastMessageTime = null;

  // ===== ESCAPE HTML =====
  function escapeHtml(str) {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  // ===== GET AVATAR HTML =====
  function getAvatarHtml(profile, userId) {
    const clickAttr = userId ? ` onclick="window.location.href='profile.html?id=${userId}'" style="cursor:pointer;"` : '';
    if (profile.avatar && profile.avatar !== 'null' && typeof getAvatarImgTag === 'function') {
      const bgStyle = profile.avatar_bg ? 'background:' + profile.avatar_bg + ';' : '';
      return '<div class="msg-avatar" style="' + bgStyle + '"' + clickAttr + '>' + getAvatarImgTag(profile.avatar, 'text', profile.username) + '</div>';
    }
    const initial = (profile.username || '?').charAt(0).toUpperCase();
    return '<div class="msg-avatar"' + clickAttr + '>' + initial + '</div>';
  }

  // ===== CONSECUTIVE CHECK =====
  function isConsecutiveMsg(msg) {
    if (msg.user_id !== lastMessageUserId) return false;
    if (msg.reply_to) return false;
    if (!lastMessageTime) return false;
    const diff = new Date(msg.created_at) - new Date(lastMessageTime);
    return diff < CONSECUTIVE_TIMEOUT;
  }

  // ===== RENDER MESSAGE =====
  function renderMessage(msg, profile, isConsecutive) {
    const el = document.createElement('div');
    el.className = 'chat-msg' + (isConsecutive ? ' consecutive' : '');
    el.setAttribute('data-msg-id', msg.id);
    el.setAttribute('data-user-id', msg.user_id);

    const nameStyle = profile.name_style ? ' style="font-family:' + profile.name_style + '"' : '';
    const timeStr = new Date(msg.created_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    const dateStr = new Date(msg.created_at).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit' });

    // Reply reference
    let replyHtml = '';
    if (msg.reply_to && msg._replyData) {
      const rp = msg._replyData;
      const rpProfile = rp.profiles || { username: 'Silinmiş' };
      replyHtml = `
        <div class="msg-reply-ref" onclick="scrollToMessage(${rp.id})">
          <span class="reply-author">${escapeHtml(rpProfile.username)}</span>
          <span>${escapeHtml((rp.content || '').substring(0, 80))}${rp.content && rp.content.length > 80 ? '...' : ''}</span>
        </div>
      `;
    }

    el.innerHTML = `
      ${getAvatarHtml(profile, msg.user_id)}
      <div class="msg-body">
        <div class="msg-author-line">
          <span class="msg-author"${nameStyle} onclick="window.location.href='profile.html?id=${msg.user_id}'" style="cursor:pointer;">${escapeHtml(profile.username)}</span>
          <span class="msg-time">${dateStr} ${timeStr}</span>
        </div>
        ${replyHtml}
        <div class="msg-content">${escapeHtml(msg.content)}</div>
      </div>
      <div class="msg-actions">
        <button class="msg-action-btn" title="Yanıtla" onclick="startReply(${msg.id}, '${escapeHtml(profile.username).replace(/'/g,"\\'")}', '${escapeHtml((msg.content||'').substring(0,60)).replace(/'/g,"\\'")}')">↩️</button>
        <button class="msg-action-btn" title="Admin'e İlet" onclick="openForwardModal(${msg.id})">📨</button>
        <div style="position: relative;">
          <button class="msg-action-btn" title="Daha Fazla" onclick="toggleDropdown(this, event)">⋯</button>
          <div class="msg-dropdown">
            ${(currentUser && currentUser.is_admin) ? 
              `<button class="msg-dropdown-item danger" onclick="deleteMessage(${msg.id})">🗑️ Mesajı Sil (Admin)</button>
               <button class="msg-dropdown-item" onclick="window.location.href='inbox.html?user=${msg.user_id}'">✉️ Özel Mesaj (Admin)</button>` : ''}
            <button class="msg-dropdown-item danger" onclick="openReportModal(${msg.id})">🚩 Mesajı Bildir</button>
            <button class="msg-dropdown-item" onclick="copyMessage(${msg.id})">📋 Mesajı Kopyala</button>
          </div>
        </div>
      </div>
    `;

    return el;
  }

  // ===== CLEANUP OLD MESSAGES (24 SAAT) =====
  async function cleanupOldMessages() {
    try {
      const sb = getSupabase();
      const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      await sb.from('chat_messages').delete().lt('created_at', cutoff);
    } catch (e) {
      // Silent — cleanup should never break the app
    }
  }

  // ===== LOAD MESSAGES =====
  async function loadMessages() {
    const container = document.getElementById('chat-messages');
    const sb = getSupabase();

    try {
      // Load last 100 messages (only from last 24h)
      const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const { data, error } = await sb.from('chat_messages')
        .select('*, profiles(username, avatar, avatar_bg, name_style)')
        .eq('is_deleted', false)
        .gte('created_at', cutoff)
        .order('created_at', { ascending: true })
        .limit(100);

      if (error) throw error;

      // Load reply references
      const replyIds = data.filter(m => m.reply_to).map(m => m.reply_to);
      let replyMap = {};
      if (replyIds.length > 0) {
        const { data: replies } = await sb.from('chat_messages')
          .select('id, content, profiles(username)')
          .in('id', replyIds);
        if (replies) replies.forEach(r => replyMap[r.id] = r);
      }

      container.innerHTML = '';

      if (!data || data.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:var(--text-muted); padding: 60px 20px;"><div style="font-size: 3rem; margin-bottom: 12px;">💬</div><p>Henüz mesaj yok. İlk mesajı sen gönder!</p></div>';
        return;
      }

      lastMessageUserId = null;
      lastMessageTime = null;
      data.forEach(msg => {
        const profile = msg.profiles || { username: 'Bilinmiyor', avatar: null };
        profileCache[msg.user_id] = profile;
        msgUserMap[msg.id] = msg.user_id;

        if (msg.reply_to && replyMap[msg.reply_to]) {
          msg._replyData = replyMap[msg.reply_to];
        }

        const consecutive = isConsecutiveMsg(msg);
        container.appendChild(renderMessage(msg, profile, consecutive));
        lastMessageUserId = msg.user_id;
        lastMessageTime = msg.created_at;
      });

      // Scroll to bottom
      container.scrollTop = container.scrollHeight;

    } catch (e) {
      container.innerHTML = '<div style="text-align:center; color:var(--accent-red); padding: 40px;">Mesajlar yüklenirken hata oluştu.</div>';
    }
  }

  // ===== REALTIME SUBSCRIPTION =====
  function subscribeRealtime() {
    const sb = getSupabase();

    // Agresif temizlik: önce eski channel'ı kapat
    if (realtimeChannel) {
      sb.removeChannel(realtimeChannel);
      realtimeChannel = null;
    }

    realtimeChannel = sb
      .channel('chat-global')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'chat_messages'
      }, async (payload) => {
        const msg = payload.new;

        // Don't duplicate own messages
        if (document.querySelector('[data-msg-id="' + msg.id + '"]')) return;

        // Fetch profile if not cached
        let profile = profileCache[msg.user_id];
        if (!profile) {
          const { data } = await sb.from('profiles')
            .select('username, avatar, avatar_bg, name_style')
            .eq('id', msg.user_id)
            .single();
          profile = data || { username: 'Bilinmiyor' };
          profileCache[msg.user_id] = profile;
        }

        // Fetch reply data if needed
        if (msg.reply_to) {
          const { data: replyData } = await sb.from('chat_messages')
            .select('id, content, profiles(username)')
            .eq('id', msg.reply_to)
            .single();
          if (replyData) msg._replyData = replyData;
        }

        const container = document.getElementById('chat-messages');
        const emptyMsg = container.querySelector('[style*="text-align:center"]');
        if (emptyMsg && emptyMsg.textContent.includes('Henüz mesaj yok')) {
          container.innerHTML = '';
        }

        msgUserMap[msg.id] = msg.user_id;
        const consecutive = isConsecutiveMsg(msg);
        container.appendChild(renderMessage(msg, profile, consecutive));
        lastMessageUserId = msg.user_id;
        lastMessageTime = msg.created_at;

        // Auto-scroll if near bottom
        const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 150;
        if (isNearBottom || msg.user_id === currentUser.id) {
          container.scrollTop = container.scrollHeight;
        }
      })
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'chat_messages'
      }, (payload) => {
        const msg = payload.new;
        if (msg.is_deleted) {
          const el = document.querySelector('[data-msg-id="' + msg.id + '"]');
          if (el) el.remove();
        }
      })
      .subscribe();
  }

  // ===== SEND MESSAGE =====
  window.sendMessage = async function() {
    const input = document.getElementById('chat-input');
    let content = input.value.trim();
    if (!content || !currentUser) return;

    const btn = document.getElementById('chat-send-btn');
    btn.disabled = true;

    try {
      const sb = getSupabase();
      
      // Fetch latest user status
      const { data: userStatus } = await sb.from('profiles').select('chat_banned, mute_expires_at, profanity_strikes').eq('id', currentUser.id).single();
      
      if (userStatus) {
        if (userStatus.chat_banned) {
          alert("Sohbetten men edildiniz. Gelen kutusu üzerinden yönetimle iletişime geçebilirsiniz.");
          window.location.reload();
          return;
        }
        if (userStatus.mute_expires_at && new Date(userStatus.mute_expires_at) > new Date()) {
          const remain = Math.ceil((new Date(userStatus.mute_expires_at) - new Date()) / 60000);
          alert(`Susturuldunuz. Kalan süre: ${remain} dakika.`);
          btn.disabled = false;
          return;
        }
      }

      // Profanity check
      let finalContent = content;
      let strikeTriggered = false;
      let newStrikes = 0;
      let systemMsg = null;

      if (typeof filterProfanity === 'function') {
        const filterRes = filterProfanity(content);
        if (!filterRes.isClean) {
           finalContent = filterRes.filteredText;
           strikeTriggered = true;
           
           // Strike logic
           newStrikes = (userStatus?.profanity_strikes || 0) + 1;
           let updates = { profanity_strikes: newStrikes };

           if (newStrikes === 3) {
               updates.mute_expires_at = new Date(Date.now() + 10 * 60000).toISOString();
               systemMsg = `🚨 Sistem: ${currentUser.username} küfür/argo kullanımı sebebiyle 10 dakika susturuldu.`;
           } else if (newStrikes >= 6) {
               updates.chat_banned = true;
               systemMsg = `🚨 Sistem: ${currentUser.username} tekrarlayan kural ihlali sebebiyle sohbetten kalıcı olarak men edildi.`;
           }

           await sb.from('profiles').update(updates).eq('id', currentUser.id);
        }
      }

      const insertData = {
        user_id: currentUser.id,
        age_group: 'global',
        content: finalContent,
        reply_to: replyToMessage ? replyToMessage.id : null
      };

      const { error } = await sb.from('chat_messages').insert(insertData);
      if (error) throw error;

      // If there's a system message, insert it right after the user's message
      if (systemMsg) {
         await sb.from('chat_messages').insert({
             user_id: currentUser.id, 
             age_group: 'global',
             content: systemMsg
         });
      }

      input.value = '';
      input.style.height = 'auto';
      cancelReply();

      // Alert & Reload if they just got muted or banned
      if (strikeTriggered) {
          if (newStrikes === 3) {
              alert("Sistem: Küfür/argo kullanımından dolayı 10 dakika susturuldunuz!");
              window.location.reload();
              return;
          } else if (newStrikes >= 6) {
              alert("Sistem: Tekrarlayan kural ihlallerinizden dolayı sohbetten kalıcı olarak men edildiniz!");
              window.location.reload();
              return;
          }
      }

    } catch (e) {
      alert('Mesaj gönderilemedi: ' + e.message);
    }

    btn.disabled = false;
    input.focus();
  };

  // ===== REPLY SYSTEM =====
  window.startReply = function(msgId, author, preview) {
    replyToMessage = { id: msgId };
    const previewEl = document.getElementById('reply-preview');
    document.getElementById('reply-preview-text').innerHTML = '<strong>' + author + ':</strong> ' + preview;
    previewEl.classList.add('active');
    document.getElementById('chat-input').focus();
  };

  window.cancelReply = function() {
    replyToMessage = null;
    document.getElementById('reply-preview').classList.remove('active');
  };

  // ===== SCROLL TO MESSAGE =====
  window.scrollToMessage = function(msgId) {
    const el = document.querySelector('[data-msg-id="' + msgId + '"]');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.background = 'rgba(59, 130, 246, 0.12)';
      setTimeout(() => { el.style.background = ''; }, 2000);
    }
  };

  // ===== DROPDOWN =====
  window.toggleDropdown = function(btn, e) {
    e.stopPropagation();
    const dropdown = btn.nextElementSibling;
    // Close all other dropdowns
    document.querySelectorAll('.msg-dropdown.open').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    dropdown.classList.toggle('open');
  };

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.msg-dropdown.open').forEach(d => d.classList.remove('open'));
  });

  // ===== COPY MESSAGE =====
  window.copyMessage = function(msgId) {
    const el = document.querySelector('[data-msg-id="' + msgId + '"]');
    if (!el) return;
    const content = el.querySelector('.msg-content')?.textContent || '';
    navigator.clipboard.writeText(content).then(() => {
      // Brief visual feedback
      const btn = el.querySelector('.msg-dropdown .msg-dropdown-item:last-child');
      if (btn) {
        const old = btn.textContent;
        btn.textContent = '✅ Kopyalandı!';
        setTimeout(() => { btn.textContent = old; }, 1500);
      }
    });
    document.querySelectorAll('.msg-dropdown.open').forEach(d => d.classList.remove('open'));
  };

  // ===== DELETE MESSAGE =====
  window.deleteMessage = async function(msgId) {
    document.querySelectorAll('.msg-dropdown.open').forEach(d => d.classList.remove('open'));
    
    if (!confirm('Bu mesajı silmek istediğinize emin misiniz?')) return;

    try {
      const sb = getSupabase();
      const { error } = await sb.from('chat_messages').update({ is_deleted: true }).eq('id', msgId);
      if (error) throw error;
    } catch (e) {
      alert('Mesaj silinemedi: ' + e.message);
    }
  };

  // ===== REPORT MODAL =====
  window.openReportModal = function(msgId) {
    document.querySelectorAll('.msg-dropdown.open').forEach(d => d.classList.remove('open'));

    const el = document.querySelector('[data-msg-id="' + msgId + '"]');
    if (!el) return;

    const author = el.querySelector('.msg-author')?.textContent || '?';
    const content = el.querySelector('.msg-content')?.textContent || '';
    const userId = getMsgUserId(msgId);

    reportTargetMsg = { id: msgId, author, content, userId };

    document.getElementById('report-quote').innerHTML =
      '<div class="chat-modal-quote-author">' + escapeHtml(author) + '</div>' + escapeHtml(content);

    // Reset form
    document.querySelectorAll('.report-reason-item').forEach(i => i.classList.remove('selected'));
    document.querySelectorAll('input[name="report-reason"]').forEach(r => r.checked = false);
    document.getElementById('report-details').value = '';

    document.getElementById('report-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeReportModal = function() {
    document.getElementById('report-modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    reportTargetMsg = null;
  };

  window.selectReason = function(label, value) {
    document.querySelectorAll('.report-reason-item').forEach(i => i.classList.remove('selected'));
    label.classList.add('selected');
  };

  window.submitReport = async function() {
    if (!reportTargetMsg || !currentUser) return;
    const reason = document.querySelector('input[name="report-reason"]:checked');
    if (!reason) { alert('Lütfen bir sebep seçin.'); return; }

    const btn = document.getElementById('report-submit-btn');
    btn.disabled = true;
    btn.textContent = 'Gönderiliyor...';

    try {
      const sb = getSupabase();
      const { error } = await sb.from('chat_reports').insert({
        reporter_id: currentUser.id,
        message_id: reportTargetMsg.id,
        reported_user_id: reportTargetMsg.userId,
        reason: reason.value,
        details: document.getElementById('report-details').value.trim() || null
      });
      if (error) throw error;

      alert('Raporunuz başarıyla gönderildi. Teşekkür ederiz!');
      closeReportModal();
    } catch (e) {
      alert('Rapor gönderilemedi: ' + e.message);
    }

    btn.disabled = false;
    btn.textContent = '🚩 Raporu Gönder';
  };

  // ===== FORWARD TO ADMIN =====
  window.openForwardModal = function(msgId) {
    const el = document.querySelector('[data-msg-id="' + msgId + '"]');
    if (!el) return;

    const author = el.querySelector('.msg-author')?.textContent || '?';
    const content = el.querySelector('.msg-content')?.textContent || '';
    const time = el.querySelector('.msg-time')?.textContent || '';

    forwardTargetMsg = { id: msgId };

    document.getElementById('forward-quote').innerHTML =
      '<div class="chat-modal-quote-author">' + escapeHtml(author) + ' — ' + time + '</div>' + escapeHtml(content);
    document.getElementById('forward-note').value = '';

    document.getElementById('forward-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeForwardModal = function() {
    document.getElementById('forward-modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    forwardTargetMsg = null;
  };

  window.submitForward = async function() {
    if (!forwardTargetMsg || !currentUser) return;
    const note = document.getElementById('forward-note').value.trim();
    if (!note) { alert('Lütfen bir not yazın.'); return; }

    const btn = document.getElementById('forward-submit-btn');
    btn.disabled = true;
    btn.textContent = 'Gönderiliyor...';

    try {
      const sb = getSupabase();
      const { error } = await sb.from('chat_forwards').insert({
        sender_id: currentUser.id,
        message_id: forwardTargetMsg.id,
        note: note
      });
      if (error) throw error;

      alert('Mesaj admin\'e başarıyla iletildi!');
      closeForwardModal();
    } catch (e) {
      alert('İletme başarısız: ' + e.message);
    }

    btn.disabled = false;
    btn.textContent = '📨 Admin\'e Gönder';
  };

  // ===== HELPER: get user_id from rendered message =====
  function getMsgUserId(msgId) {
    const el = document.querySelector('[data-msg-id="' + msgId + '"]');
    if (el) return el.getAttribute('data-user-id');
    return msgUserMap[msgId] || null;
  }

  // ===== AUTO-RESIZE INPUT =====
  function setupInput() {
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send-btn');

    input.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
      sendBtn.disabled = !this.value.trim();
    });

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (this.value.trim()) sendMessage();
      }
    });

    // Mobile keyboard fix: scroll to bottom when input gets focus
    input.addEventListener('focus', function() {
      setTimeout(() => {
        const container = document.getElementById('chat-messages');
        if (container) container.scrollTop = container.scrollHeight;
      }, 350);
    });

    // Visualviewport resize (keyboard open/close) → re-scroll
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => {
        const container = document.getElementById('chat-messages');
        if (container && document.activeElement === input) {
          setTimeout(() => { container.scrollTop = container.scrollHeight; }, 100);
        }
      });
    }
  }

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', async () => {
    const user = await getCurrentUser();
    if (!user) {
      window.location.href = 'login.html';
      return;
    }
    currentUser = user;

    // Set room info
    document.getElementById('room-icon').textContent = '💬';
    document.getElementById('room-name').textContent = 'Global Sohbet';
    document.getElementById('room-online').textContent = 'Bağlandı ✓';

    // Show chat directly — no approval needed
    document.getElementById('chat-room').style.display = 'block';

    // Cleanup old messages (24h) — runs once per session
    cleanupOldMessages();

    setupInput();
    await loadMessages();
    subscribeRealtime();
  });

  // ===== CLEANUP =====
  // Sayfa kapanırken tüm bağlantıları kes
  window.addEventListener('beforeunload', () => {
    const sb = getSupabase();
    if (sb) sb.removeAllChannels();
    realtimeChannel = null;
  });

  // Mobil uyumluluk: pagehide (iOS Safari için kritik)
  window.addEventListener('pagehide', () => {
    const sb = getSupabase();
    if (sb) sb.removeAllChannels();
    realtimeChannel = null;
  });

  // Tab arka plana alındığında bağlantıyı kes, geri gelince yeniden bağlan
  let reconnectTimeout = null;
  document.addEventListener('visibilitychange', () => {
    const sb = getSupabase();
    if (!sb || !currentUser) return;

    if (document.hidden) {
      // Tab pasif → tüm channel'ları kapat
      clearTimeout(reconnectTimeout);
      sb.removeAllChannels();
      realtimeChannel = null;
    } else {
      // Tab aktif → debounce ile tekrar bağlan (hızlı sekme değişiminde spam önlenir)
      clearTimeout(reconnectTimeout);
      reconnectTimeout = setTimeout(() => {
        subscribeRealtime();
      }, 300);
    }
  });

})();
