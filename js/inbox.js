// ===== INBOX / GELEN KUTUSU =====
(function() {
  'use strict';

  let currentUser = null;
  let activeChatUserId = null;
  let systemAdminId = null;
  let realtimeChannel = null;
  let userProfiles = {}; // Cache for profiles

  // ===== ESCAPE HTML =====
  function escapeHtml(str) {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  // ===== GET AVATAR HTML =====
  function getAvatarHtml(profile, isLarge = false) {
    if (!profile) return isLarge ? '<div class="inbox-chat-avatar">?</div>' : '<div class="inbox-item-avatar">?</div>';
    
    const initial = (profile.username || '?').charAt(0).toUpperCase();
    const bgStyle = profile.avatar_bg ? 'background:' + profile.avatar_bg + ';' : '';
    const avatarClass = isLarge ? 'inbox-chat-avatar' : 'inbox-item-avatar';

    if (profile.avatar && profile.avatar !== 'null' && typeof getAvatarImgTag === 'function') {
      return '<div class="' + avatarClass + '" style="' + bgStyle + '">' + getAvatarImgTag(profile.avatar, 'text', profile.username) + '</div>';
    }
    return '<div class="' + avatarClass + '">' + initial + '</div>';
  }

  // ===== LOAD INBOX LIST =====
  async function loadInboxList() {
    const listEl = document.getElementById('inbox-list');
    const sb = getSupabase();

    if (!currentUser.is_admin) {
      // Normal User: Sadece Yönetim ile mesajlaşabilir
      const { data: admin } = await sb.from('profiles').select('id, username, avatar, avatar_bg').eq('is_admin', true).limit(1).single();
      
      if (!admin) {
        listEl.innerHTML = '<div style="padding:20px; text-align:center; color:var(--text-muted);">Sistemde yönetici bulunamadı.</div>';
        return;
      }
      
      systemAdminId = admin.id;
      userProfiles[admin.id] = admin;
      admin.username = 'Yönetim Ekibi'; // Görünen ismi sabitliyoruz

      // Son mesajı çek
      const { data: lastMsg } = await sb.from('direct_messages')
        .select('content, created_at, is_read, sender_id')
        .or(`and(sender_id.eq.${currentUser.id},receiver_id.eq.${admin.id}),and(sender_id.eq.${admin.id},receiver_id.eq.${currentUser.id})`)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      // Okunmamış mesaj sayısını çek
      const { count: unreadCount } = await sb.from('direct_messages')
        .select('*', { count: 'exact', head: true })
        .eq('receiver_id', currentUser.id)
        .eq('sender_id', admin.id)
        .eq('is_read', false);

      const preview = lastMsg ? (lastMsg.sender_id === currentUser.id ? 'Sen: ' : '') + lastMsg.content : 'Mesajlaşmayı başlatın...';
      const timeStr = lastMsg ? new Date(lastMsg.created_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) : '';
      const unreadBadge = unreadCount > 0 ? `<div class="inbox-unread-badge">${unreadCount}</div>` : '';

      listEl.innerHTML = `
        <div class="inbox-item" id="inbox-item-${admin.id}" onclick="openChat('${admin.id}')">
          ${getAvatarHtml(admin)}
          <div class="inbox-item-info">
            <div class="inbox-item-name">${escapeHtml(admin.username)}</div>
            <div class="inbox-item-preview">${escapeHtml(preview)}</div>
          </div>
          <div class="inbox-item-meta">
            <div class="inbox-item-time">${timeStr}</div>
            ${unreadBadge}
          </div>
        </div>
      `;

      // Otomatik olarak sohbeti aç
      openChat(admin.id);

    } else {
      // Admin: Tüm mesajlaştığı kullanıcıları görebilir
      // Supabase'den bu kullanıcının dahil olduğu son 500 mesajı çekiyoruz
      const { data: messages, error } = await sb.from('direct_messages')
        .select('*, sender:profiles!sender_id(username, avatar, avatar_bg), receiver:profiles!receiver_id(username, avatar, avatar_bg)')
        .or(`sender_id.eq.${currentUser.id},receiver_id.eq.${currentUser.id}`)
        .order('created_at', { ascending: false })
        .limit(500);

      if (error) {
        console.error('Mesajlar çekilirken hata:', error);
        // Fallback if column disambiguation fails, try without alias
        if (error.code === 'PGRST200' || error.code === '404' || error.message.includes('Could not find')) {
          listEl.innerHTML = '<div style="padding:20px; text-align:center; color:var(--accent-red);">Tablo bulunamadı veya yetki hatası. Lütfen SQL scriptini Supabase üzerinde çalıştırdığınızdan emin olun.</div>';
          return;
        }
      }

      if (!messages || messages.length === 0) {
        listEl.innerHTML = '<div style="padding:20px; text-align:center; color:var(--text-muted);">Henüz mesajınız yok.</div>';
        return;
      }

      // Benzersiz kullanıcıları ve onlarla olan son mesajları bul
      const conversations = {};
      
      messages.forEach(msg => {
        const otherUserId = msg.sender_id === currentUser.id ? msg.receiver_id : msg.sender_id;
        const otherProfile = msg.sender_id === currentUser.id ? msg.receiver : msg.sender;
        
        if (!conversations[otherUserId]) {
          userProfiles[otherUserId] = otherProfile;
          conversations[otherUserId] = {
            userId: otherUserId,
            profile: otherProfile,
            lastMsg: msg,
            unreadCount: 0
          };
        }
        
        // Eğer mesaj bana geldiyse ve okunmadıysa sayıyı artır
        if (msg.receiver_id === currentUser.id && !msg.is_read) {
          conversations[otherUserId].unreadCount++;
        }
      });

      let html = '';
      Object.values(conversations).forEach(conv => {
        const preview = (conv.lastMsg.sender_id === currentUser.id ? 'Sen: ' : '') + conv.lastMsg.content;
        const timeStr = new Date(conv.lastMsg.created_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
        const unreadBadge = conv.unreadCount > 0 ? `<div class="inbox-unread-badge">${conv.unreadCount}</div>` : '';
        const name = conv.profile ? conv.profile.username : 'Bilinmeyen Kullanıcı';

        html += `
          <div class="inbox-item" id="inbox-item-${conv.userId}" onclick="openChat('${conv.userId}')">
            ${getAvatarHtml(conv.profile)}
            <div class="inbox-item-info">
              <div class="inbox-item-name">${escapeHtml(name)}</div>
              <div class="inbox-item-preview">${escapeHtml(preview)}</div>
            </div>
            <div class="inbox-item-meta">
              <div class="inbox-item-time">${timeStr}</div>
              ${unreadBadge}
            </div>
          </div>
        `;
      });

      listEl.innerHTML = html;

      // URL param check for direct messaging
      const params = new URLSearchParams(window.location.search);
      const requestedUserId = params.get('user');
      
      if (requestedUserId) {
        if (!conversations[requestedUserId]) {
          // Fetch profile and add to top
          const { data: reqProfile } = await sb.from('profiles').select('username, avatar, avatar_bg').eq('id', requestedUserId).maybeSingle();
          if (reqProfile) {
            userProfiles[requestedUserId] = reqProfile;
            const newHtml = `
              <div class="inbox-item" id="inbox-item-${requestedUserId}" onclick="openChat('${requestedUserId}')">
                ${getAvatarHtml(reqProfile)}
                <div class="inbox-item-info">
                  <div class="inbox-item-name">${escapeHtml(reqProfile.username)}</div>
                  <div class="inbox-item-preview" style="font-style:italic;">Yeni sohbet...</div>
                </div>
                <div class="inbox-item-meta">
                  <div class="inbox-item-time">Şimdi</div>
                </div>
              </div>
            `;
            if (listEl.innerHTML.includes('Henüz mesajınız yok')) {
              listEl.innerHTML = newHtml;
            } else {
              listEl.insertAdjacentHTML('afterbegin', newHtml);
            }
          }
        }
        setTimeout(() => openChat(requestedUserId), 100);
      }
    }
  }

  // ===== OPEN CHAT =====
  window.openChat = async function(userId) {
    if (!userId) return;
    activeChatUserId = userId;
    const profile = userProfiles[userId] || { username: 'Bilinmeyen Kullanıcı' };

    // Update Sidebar UI
    document.querySelectorAll('.inbox-item').forEach(el => el.classList.remove('active'));
    const itemEl = document.getElementById('inbox-item-' + userId);
    if (itemEl) {
      itemEl.classList.add('active');
      const badge = itemEl.querySelector('.inbox-unread-badge');
      if (badge) badge.remove();
    }

    // Update Chat UI
    document.getElementById('inbox-empty-state').style.display = 'none';
    const chatActive = document.getElementById('inbox-active-state');
    chatActive.style.display = 'flex';
    
    // Mobil görünüm için paneli kaydır
    if (window.innerWidth <= 768) {
      document.getElementById('inbox-chat').classList.add('mobile-open');
    }

    // Set Header
    document.getElementById('active-chat-avatar').outerHTML = getAvatarHtml(profile, true);
    document.getElementById('active-chat-name').textContent = profile.username || 'Yönetim';

    // Load Messages
    const msgContainer = document.getElementById('inbox-messages');
    msgContainer.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text-muted);">Yükleniyor...</div>';
    
    const sb = getSupabase();
    
    // Okunmamışları okundu yap
    await sb.from('direct_messages')
      .update({ is_read: true })
      .eq('receiver_id', currentUser.id)
      .eq('sender_id', userId)
      .eq('is_read', false);

    // Mesajları çek
    const { data: msgs } = await sb.from('direct_messages')
      .select('*')
      .or(`and(sender_id.eq.${currentUser.id},receiver_id.eq.${userId}),and(sender_id.eq.${userId},receiver_id.eq.${currentUser.id})`)
      .order('created_at', { ascending: true })
      .limit(100);

    msgContainer.innerHTML = '';
    
    if (!msgs || msgs.length === 0) {
      msgContainer.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text-muted);">Henüz mesaj yok. İlk mesajı sen gönder!</div>';
    } else {
      msgs.forEach(msg => {
        msgContainer.appendChild(renderMessage(msg));
      });
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    // Input focus
    const input = document.getElementById('inbox-input');
    input.value = '';
    input.focus();
  };

  // ===== RENDER MESSAGE =====
  function renderMessage(msg) {
    const isSent = msg.sender_id === currentUser.id;
    const timeStr = new Date(msg.created_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    
    const el = document.createElement('div');
    el.className = 'dm-msg ' + (isSent ? 'sent' : 'received');
    el.innerHTML = `
      <div class="dm-bubble">${escapeHtml(msg.content)}</div>
      <div class="dm-time">${timeStr}</div>
    `;
    return el;
  }

  // ===== SEND MESSAGE =====
  window.sendDirectMessage = async function() {
    const input = document.getElementById('inbox-input');
    const content = input.value.trim();
    if (!content || !activeChatUserId) return;

    const btn = document.getElementById('inbox-send-btn');
    btn.disabled = true;

    try {
      const sb = getSupabase();
      
      // Küfür filtresi
      let finalContent = content;
      if (typeof filterProfanity === 'function') {
        const filterRes = filterProfanity(content);
        if (!filterRes.isClean) {
          finalContent = filterRes.filteredText;
          // Eğer istersek PM'lerde de strike sayısını artırabiliriz, şimdilik sadece sansür uygulayalım
        }
      }

      const insertData = {
        sender_id: currentUser.id,
        receiver_id: activeChatUserId,
        content: finalContent
      };

      const { data, error } = await sb.from('direct_messages').insert(insertData).select().single();
      if (error) throw error;

      // Realtime zaten dinleyip ekliyor, ama biz hız için kendimiz de ekleyebiliriz
      // Ancak çift eklenmemesi için realtime insert eventi içerisinde kontrol yapıyoruz
      
      input.value = '';
      input.style.height = 'auto';

    } catch(e) {
      alert("Mesaj gönderilemedi: " + e.message);
    }

    btn.disabled = false;
    input.focus();
  };

  // ===== AUTO RESIZE INPUT =====
  function setupInput() {
    const input = document.getElementById('inbox-input');
    const sendBtn = document.getElementById('inbox-send-btn');

    input.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
      sendBtn.disabled = !this.value.trim();
    });

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (this.value.trim()) sendDirectMessage();
      }
    });
  }

  // ===== MOBILE CLOSE CHAT =====
  window.closeChatMobile = function() {
    document.getElementById('inbox-chat').classList.remove('mobile-open');
  };

  // ===== REALTIME =====
  function subscribeRealtime() {
    const sb = getSupabase();
    
    realtimeChannel = sb.channel('direct_messages_channel')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'direct_messages'
      }, (payload) => {
        const msg = payload.new;
        
        // Bu mesaj beni ilgilendiriyor mu?
        if (msg.sender_id !== currentUser.id && msg.receiver_id !== currentUser.id) return;

        // Eğer aktif olan sohbet ise ekranda göster
        if ((msg.sender_id === activeChatUserId && msg.receiver_id === currentUser.id) ||
            (msg.receiver_id === activeChatUserId && msg.sender_id === currentUser.id)) {
          
          const msgContainer = document.getElementById('inbox-messages');
          
          // "Henüz mesaj yok" yazısını sil
          if (msgContainer.innerHTML.includes('Henüz mesaj yok')) {
            msgContainer.innerHTML = '';
          }
          
          msgContainer.appendChild(renderMessage(msg));
          msgContainer.scrollTop = msgContainer.scrollHeight;

          // Eğer bana geldiyse okundu olarak işaretle
          if (msg.receiver_id === currentUser.id) {
            sb.from('direct_messages').update({ is_read: true }).eq('id', msg.id).then();
          }
        } else {
          // Listeyi güncelle (yeni mesaj preview ve unread count için)
          loadInboxList();
        }
      })
      .subscribe();
  }

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', async () => {
    const user = await getCurrentUser();
    if (!user) {
      window.location.href = 'login.html';
      return;
    }
    currentUser = user;

    setupInput();
    await loadInboxList();
    subscribeRealtime();
  });

  // ===== CLEANUP =====
  window.addEventListener('beforeunload', () => {
    if (realtimeChannel) {
      const sb = getSupabase();
      sb.removeChannel(realtimeChannel);
    }
  });

})();
