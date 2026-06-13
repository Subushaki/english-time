// ===== ADMIN CHAT MANAGEMENT =====
(function() {
  'use strict';

  let adminUser = null;
  let currentView = 'reports';

  function escapeHtml(str) {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  // ===== SIDEBAR TOGGLE =====
  window.toggleSidebar = function() {
    document.getElementById('admin-sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('open');
  };

  // ===== VIEW SWITCHING =====
  window.switchChatView = function(view) {
    currentView = view;

    // Update tab active states
    document.querySelectorAll('.chat-admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.chat-admin-tab').forEach(t => {
      if (view === 'reports' && t.textContent.includes('Raporları')) t.classList.add('active');
      if (view === 'forwards' && t.textContent.includes('İletilen')) t.classList.add('active');
    });

    // Update sidebar active
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));

    // Close sidebar on mobile
    if (window.innerWidth < 768) {
      document.getElementById('admin-sidebar').classList.remove('open');
      document.getElementById('sidebar-overlay').classList.remove('open');
    }

    loadContent();
  };

  // ===== LOAD CONTENT =====
  async function loadContent() {
    const container = document.getElementById('admin-chat-content');
    container.innerHTML = '<div style="text-align:center; color:var(--text-muted); padding:40px;">Yükleniyor...</div>';

    try {
      if (currentView === 'reports') await loadReports(container);
      else if (currentView === 'forwards') await loadForwards(container);
    } catch (e) {
      container.innerHTML = '<div style="text-align:center; color:var(--accent-red); padding:40px;">Hata: ' + e.message + '</div>';
    }
  }

  // ===== LOAD REPORTS =====
  async function loadReports(container) {
    const sb = getSupabase();

    const { data, error } = await sb.from('chat_reports')
      .select('*, chat_messages(id, content, age_group, created_at, user_id, profiles(username, avatar, avatar_bg)), reporter:reporter_id(username, avatar, avatar_bg), reported:reported_user_id(username)')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const filtered = data || [];

    if (filtered.length === 0) {
      container.innerHTML = '<div style="text-align:center; padding:40px; background:var(--bg-card); border-radius:var(--radius-md); border:1px solid var(--glass-border);">Rapor bulunmuyor. 🎉</div>';
      return;
    }

    container.innerHTML = '';

    const reasonLabels = {
      spam: '🚫 Spam / Reklam',
      harassment: '⚠️ Hakaret / Taciz',
      inappropriate: '🔞 Uygunsuz İçerik',
      other: '📌 Diğer'
    };

    filtered.forEach(report => {
      const msg = report.chat_messages || {};
      const msgProfile = msg.profiles || { username: 'Silinmiş' };
      const reporter = report.reporter || { username: 'Bilinmiyor' };
      const isPending = report.status === 'pending';

      const card = document.createElement('div');
      card.className = 'admin-report-card';
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div style="font-weight:700; color:var(--text-primary);">Rapor #${report.id}</div>
          <span style="padding:4px 10px; border-radius:12px; font-size:0.78rem; font-weight:700; background:${isPending ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.15)'}; color:${isPending ? 'var(--accent-orange)' : 'var(--accent-green)'}; border:1px solid ${isPending ? 'rgba(245,158,11,0.3)' : 'rgba(16,185,129,0.3)'};">${isPending ? 'Bekliyor' : 'Çözüldü'}</span>
        </div>

        <div class="admin-report-msg">
          <div style="font-weight:700; font-size:0.82rem; color:var(--text-primary); margin-bottom:4px;">${escapeHtml(msgProfile.username)}</div>
          ${escapeHtml(msg.content || 'Mesaj silinmiş')}
        </div>

        <div class="admin-report-meta">
          <div class="app-detail">
            <div class="app-detail-label">👤 Yazan</div>
            <div class="app-detail-value">${escapeHtml(msgProfile.username)}</div>
          </div>
          <div class="app-detail">
            <div class="app-detail-label">🚩 Raporlayan</div>
            <div class="app-detail-value">${escapeHtml(reporter.username)}</div>
          </div>
          <div class="app-detail">
            <div class="app-detail-label">📋 Sebep</div>
            <div class="app-detail-value">${reasonLabels[report.reason] || report.reason}</div>
          </div>
          <div class="app-detail">
            <div class="app-detail-label">📅 Rapor Tarihi</div>
            <div class="app-detail-value">${new Date(report.created_at).toLocaleString('tr-TR')}</div>
          </div>
        </div>

        ${report.details ? '<div style="margin-bottom:12px;"><div style="font-size:0.78rem; color:var(--text-muted); font-weight:600; margin-bottom:4px;">Ek Bilgi:</div><div style="color:var(--text-secondary); font-size:0.9rem; padding:8px 12px; background:rgba(0,0,0,0.2); border-radius:6px;">' + escapeHtml(report.details) + '</div></div>' : ''}

        ${isPending ? `
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="app-action-btn app-reject" style="flex:none; padding:8px 14px;" onclick="resolveReport(${report.id}, 'warned', '${msg.user_id || ''}')">⚠️ Uyar</button>
            <button class="app-action-btn app-reject" style="flex:none; padding:8px 14px;" onclick="resolveReport(${report.id}, 'muted', '${msg.user_id || ''}')">🔇 Sustur</button>
            <button class="app-action-btn app-reject" style="flex:none; padding:8px 14px;" onclick="resolveReport(${report.id}, 'banned', '${msg.user_id || ''}')">🚫 Yasakla</button>
            <button class="app-action-btn app-approve" style="flex:none; padding:8px 14px;" onclick="resolveReport(${report.id}, 'none')">✅ Kapat</button>
            <button class="app-action-btn" style="flex:none; padding:8px 14px; background:rgba(239,68,68,0.1); color:var(--accent-red); border:1px solid rgba(239,68,68,0.2);" onclick="deleteMessage(${msg.id}, ${report.id})">🗑️ Mesajı Sil</button>
          </div>
        ` : `
          <div style="font-size:0.82rem; color:var(--text-muted);">Aksiyon: <strong style="color:var(--text-primary);">${report.admin_action || 'Belirtilmedi'}</strong></div>
        `}
      `;
      container.appendChild(card);
    });
  }

  window.resolveReport = async function(reportId, action, userId) {
    const note = prompt('Admin notu (isteğe bağlı):') || '';

    try {
      const sb = getSupabase();
      await sb.from('chat_reports').update({
        status: 'resolved',
        admin_action: action,
        admin_note: note,
        reviewed_by: adminUser.id,
        reviewed_at: new Date().toISOString()
      }).eq('id', reportId);

      // Handle ban
      if (action === 'banned' && userId) {
        await sb.from('profiles').update({ chat_banned: true }).eq('id', userId);
      }

      alert('Rapor çözüldü.');
      loadContent();
    } catch (e) {
      alert('Hata: ' + e.message);
    }
  };

  window.deleteMessage = async function(msgId, reportId) {
    if (!confirm('Bu mesajı silmek istediğinize emin misiniz?')) return;

    try {
      const sb = getSupabase();
      await sb.from('chat_messages').update({ is_deleted: true }).eq('id', msgId);

      if (reportId) {
        await sb.from('chat_reports').update({
          status: 'resolved',
          admin_action: 'message_deleted',
          reviewed_by: adminUser.id,
          reviewed_at: new Date().toISOString()
        }).eq('id', reportId);
      }

      alert('Mesaj silindi ve rapor çözüldü.');
      loadContent();
    } catch (e) {
      alert('Hata: ' + e.message);
    }
  };

  // ===== LOAD FORWARDS =====
  async function loadForwards(container) {
    const sb = getSupabase();
    const { data, error } = await sb.from('chat_forwards')
      .select('*, chat_messages(id, content, created_at, profiles(username)), sender:sender_id(username, avatar, avatar_bg)')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const filtered = data || [];

    if (filtered.length === 0) {
      container.innerHTML = '<div style="text-align:center; padding:40px; background:var(--bg-card); border-radius:var(--radius-md); border:1px solid var(--glass-border);">İletilen mesaj bulunmuyor. 📨</div>';
      return;
    }

    container.innerHTML = '';

    filtered.forEach(fwd => {
      const msg = fwd.chat_messages || {};
      const msgAuthor = msg.profiles || { username: 'Silinmiş' };
      const sender = fwd.sender || { username: 'Bilinmiyor' };

      const card = document.createElement('div');
      card.className = 'admin-report-card';
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div style="font-weight:700; color:var(--text-primary);">📨 İletme #${fwd.id}</div>
          <span style="padding:4px 10px; border-radius:12px; font-size:0.78rem; font-weight:700; background:${fwd.is_read ? 'rgba(16,185,129,0.15)' : 'rgba(59,130,246,0.15)'}; color:${fwd.is_read ? 'var(--accent-green)' : 'var(--accent-blue)'};">${fwd.is_read ? 'Okundu' : 'Yeni'}</span>
        </div>

        <div class="admin-report-msg">
          <div style="font-weight:700; font-size:0.82rem; color:var(--text-primary); margin-bottom:4px;">${escapeHtml(msgAuthor.username)} — ${msg.created_at ? new Date(msg.created_at).toLocaleTimeString('tr-TR', {hour:'2-digit',minute:'2-digit'}) : '?'}</div>
          ${escapeHtml(msg.content || 'Mesaj silinmiş')}
        </div>

        <div class="admin-report-meta">
          <div class="app-detail">
            <div class="app-detail-label">📨 İleten</div>
            <div class="app-detail-value">${escapeHtml(sender.username)}</div>
          </div>
          <div class="app-detail">
            <div class="app-detail-label">📅 Tarih</div>
            <div class="app-detail-value">${new Date(fwd.created_at).toLocaleString('tr-TR')}</div>
          </div>
        </div>

        <div style="margin-bottom:12px;">
          <div style="font-size:0.78rem; color:var(--text-muted); font-weight:600; margin-bottom:4px;">Kullanıcı Notu:</div>
          <div style="color:var(--text-secondary); font-size:0.9rem; padding:10px 12px; background:rgba(0,0,0,0.2); border-radius:6px; border-left:3px solid var(--accent-blue);">${escapeHtml(fwd.note)}</div>
        </div>

        ${!fwd.is_read ? `<button class="app-action-btn app-approve" style="max-width:200px; padding:8px 14px;" onclick="markForwardRead(${fwd.id})">✅ Okundu İşaretle</button>` : ''}
      `;
      container.appendChild(card);
    });
  }

  window.markForwardRead = async function(fwdId) {
    try {
      const sb = getSupabase();
      await sb.from('chat_forwards').update({ is_read: true }).eq('id', fwdId);
      loadContent();
    } catch (e) {
      alert('Hata: ' + e.message);
    }
  };

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', async () => {
    const user = await getCurrentUser();
    if (!user || user.is_admin !== true) {
      document.body.innerHTML = '<h1 style="text-align:center; color:red; margin-top:100px;">⛔ ERİŞİM REDDEDİLDİ.</h1>';
      setTimeout(() => window.location.href = 'settings.html', 1500);
      return;
    }
    adminUser = user;
    loadContent();
  });

})();
