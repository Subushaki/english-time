// ===== ADMIN CHAT MANAGEMENT =====
(function() {
  'use strict';

  const MONTHS = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
  const AGE_GROUPS = {
    young:  { label: '🟢 Genç (0-17)', color: '#10b981' },
    adult:  { label: '🔵 Yetişkin (18-32)', color: '#3b82f6' },
    mature: { label: '🟣 Olgun (33+)', color: '#8b5cf6' }
  };

  let adminUser = null;
  let currentView = 'applications';
  let currentAgeFilter = 'all';

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
  window.switchChatView = function(view, ageGroup) {
    currentView = view;
    if (ageGroup) currentAgeFilter = ageGroup;

    // Update tab active states
    document.querySelectorAll('.chat-admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.chat-admin-tab').forEach(t => {
      if (view === 'applications' && t.textContent.includes('Başvurular')) t.classList.add('active');
      if (view === 'reports' && t.textContent.includes('Raporları')) t.classList.add('active');
      if (view === 'forwards' && t.textContent.includes('İletilen')) t.classList.add('active');
    });

    // Show/hide age filter
    document.getElementById('age-filter').style.display = (view === 'reports' || view === 'forwards') ? 'block' : 'none';

    // Update sidebar active
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));

    // Close sidebar on mobile
    if (window.innerWidth < 768) {
      document.getElementById('admin-sidebar').classList.remove('open');
      document.getElementById('sidebar-overlay').classList.remove('open');
    }

    loadContent();
  };

  window.filterAgeGroup = function(group) {
    currentAgeFilter = group;
    document.querySelectorAll('#age-filter .chat-admin-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    loadContent();
  };

  // ===== LOAD CONTENT =====
  async function loadContent() {
    const container = document.getElementById('admin-chat-content');
    container.innerHTML = '<div style="text-align:center; color:var(--text-muted); padding:40px;">Yükleniyor...</div>';

    try {
      if (currentView === 'applications') await loadApplications(container);
      else if (currentView === 'reports') await loadReports(container);
      else if (currentView === 'forwards') await loadForwards(container);
    } catch (e) {
      container.innerHTML = '<div style="text-align:center; color:var(--accent-red); padding:40px;">Hata: ' + e.message + '</div>';
    }
  }

  // ===== LOAD APPLICATIONS =====
  async function loadApplications(container) {
    const sb = getSupabase();
    const { data, error } = await sb.from('chat_applications')
      .select('*, profiles(username, avatar, avatar_bg, name_style)')
      .order('created_at', { ascending: false });

    if (error) throw error;

    if (!data || data.length === 0) {
      container.innerHTML = '<div style="text-align:center; padding:40px; background:var(--bg-card); border-radius:var(--radius-md); border:1px solid var(--glass-border);">Henüz başvuru yok. 📋</div>';
      return;
    }

    // Update sidebar badge
    const pendingCount = data.filter(a => a.status === 'pending').length;
    const badge = document.getElementById('sb-app-count');
    if (badge) { badge.textContent = pendingCount; badge.style.display = pendingCount > 0 ? '' : 'none'; }

    container.innerHTML = '';

    data.forEach(app => {
      const profile = app.profiles || { username: 'Bilinmiyor' };
      const groupInfo = AGE_GROUPS[app.age_group] || AGE_GROUPS.adult;
      const isPending = app.status === 'pending';

      let avatarHtml = '<div class="app-card-avatar">' + (profile.username || '?').charAt(0).toUpperCase() + '</div>';
      if (profile.avatar && profile.avatar !== 'null' && typeof getAvatarImgTag === 'function') {
        const bgS = profile.avatar_bg ? 'background:' + profile.avatar_bg + ';' : '';
        avatarHtml = '<div class="app-card-avatar" style="' + bgS + '">' + getAvatarImgTag(profile.avatar, 'text', profile.username) + '</div>';
      }

      const statusHtml = isPending
        ? '<span style="padding:4px 10px; border-radius:12px; font-size:0.78rem; font-weight:700; background:rgba(245,158,11,0.15); color:var(--accent-orange); border:1px solid rgba(245,158,11,0.3);">Bekliyor</span>'
        : app.status === 'approved'
        ? '<span style="padding:4px 10px; border-radius:12px; font-size:0.78rem; font-weight:700; background:rgba(16,185,129,0.15); color:var(--accent-green); border:1px solid rgba(16,185,129,0.3);">Onaylandı</span>'
        : '<span style="padding:4px 10px; border-radius:12px; font-size:0.78rem; font-weight:700; background:rgba(239,68,68,0.15); color:var(--accent-red); border:1px solid rgba(239,68,68,0.3);">Reddedildi</span>';

      const card = document.createElement('div');
      card.className = 'app-card';
      card.innerHTML = `
        <div class="app-card-header">
          <div class="app-card-user">
            ${avatarHtml}
            <div class="app-card-info">
              <div style="font-weight:700; color:var(--text-primary);">${escapeHtml(profile.username)}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${new Date(app.created_at).toLocaleString('tr-TR')}</div>
            </div>
          </div>
          ${statusHtml}
        </div>

        <div class="app-card-details">
          <div class="app-detail">
            <div class="app-detail-label">🎂 Doğum</div>
            <div class="app-detail-value">${MONTHS[app.birth_month - 1]} ${app.birth_year}</div>
          </div>
          <div class="app-detail">
            <div class="app-detail-label">📅 Yaş</div>
            <div class="app-detail-value">${app.calculated_age} yaş</div>
          </div>
          <div class="app-detail">
            <div class="app-detail-label">🏷️ Grup</div>
            <div class="app-detail-value" style="color:${groupInfo.color}">${groupInfo.label}</div>
          </div>
          <div class="app-detail">
            <div class="app-detail-label">👥 Tercih</div>
            <div class="app-detail-value">${app.same_age_preference ? 'Yaşıtlarıyla' : 'Farketmez'}</div>
          </div>
        </div>

        <div style="margin-bottom:8px; font-size:0.8rem; color:var(--text-muted); font-weight:600;">✍️ Motivasyon:</div>
        <div class="app-motivation">${escapeHtml(app.motivation)}</div>

        ${isPending ? `
          <div class="app-actions">
            <button class="app-action-btn app-approve" onclick="approveApplication('${app.id}', '${app.user_id}', '${app.age_group}')">✅ Onayla</button>
            <button class="app-action-btn app-reject" onclick="rejectApplication('${app.id}', '${app.user_id}')">❌ Reddet</button>
          </div>
        ` : ''}
      `;
      container.appendChild(card);
    });
  }

  // ===== APPROVE / REJECT =====
  window.approveApplication = async function(appId, userId, ageGroup) {
    if (!confirm('Bu başvuruyu onaylamak istediğinize emin misiniz?')) return;

    try {
      const sb = getSupabase();

      // Update application
      await sb.from('chat_applications').update({
        status: 'approved',
        reviewed_by: adminUser.id,
        reviewed_at: new Date().toISOString()
      }).eq('id', appId);

      // Update profile
      await sb.from('profiles').update({
        chat_approved: true,
        chat_age_group: ageGroup
      }).eq('id', userId);

      // Send notification
      await sb.from('notifications').insert({
        user_id: userId,
        title: 'Sohbet Başvurunuz Onaylandı! 🎉',
        message: '<div style="padding:12px; background:rgba(16,185,129,0.08); border-radius:8px; border-left:4px solid var(--accent-green);"><p style="color:var(--text-primary); font-weight:600;">Global sohbete erişiminiz aktif edildi!</p><p style="color:var(--text-muted); font-size:0.9rem; margin-top:8px;">Artık sohbete katılabilirsiniz. Ayarlar sayfasından veya doğrudan <a href="chat.html" style="color:var(--accent-blue);">buradan</a> erişebilirsiniz.</p></div>'
      });

      alert('Başvuru onaylandı ve kullanıcıya bildirim gönderildi!');
      loadContent();

    } catch (e) {
      alert('Hata: ' + e.message);
    }
  };

  window.rejectApplication = async function(appId, userId) {
    const reason = prompt('Red sebebi (isteğe bağlı):');
    if (reason === null) return; // Cancelled

    try {
      const sb = getSupabase();

      await sb.from('chat_applications').update({
        status: 'rejected',
        admin_note: reason || 'Belirtilmedi',
        reviewed_by: adminUser.id,
        reviewed_at: new Date().toISOString()
      }).eq('id', appId);

      // Send notification
      await sb.from('notifications').insert({
        user_id: userId,
        title: 'Sohbet Başvurunuz Hakkında',
        message: '<div style="padding:12px; background:rgba(239,68,68,0.08); border-radius:8px; border-left:4px solid var(--accent-red);"><p style="color:var(--text-primary); font-weight:600;">Başvurunuz şu an için uygun görülmedi.</p>' + (reason ? '<p style="color:var(--text-muted); font-size:0.9rem; margin-top:8px;">Sebep: ' + escapeHtml(reason) + '</p>' : '') + '</div>'
      });

      alert('Başvuru reddedildi.');
      loadContent();

    } catch (e) {
      alert('Hata: ' + e.message);
    }
  };

  // ===== LOAD REPORTS =====
  async function loadReports(container) {
    const sb = getSupabase();

    let query = sb.from('chat_reports')
      .select('*, chat_messages(id, content, age_group, created_at, user_id, profiles(username, avatar, avatar_bg)), reporter:reporter_id(username, avatar, avatar_bg), reported:reported_user_id(username)')
      .order('created_at', { ascending: false });

    const { data, error } = await query;
    if (error) throw error;

    // Filter by age group if needed
    let filtered = data || [];
    if (currentAgeFilter !== 'all') {
      filtered = filtered.filter(r => r.chat_messages?.age_group === currentAgeFilter);
    }

    // Update sidebar badges
    updateReportBadges(data || []);

    if (filtered.length === 0) {
      container.innerHTML = '<div style="text-align:center; padding:40px; background:var(--bg-card); border-radius:var(--radius-md); border:1px solid var(--glass-border);">Bu kategoride rapor bulunmuyor. 🎉</div>';
      return;
    }

    container.innerHTML = '';

    filtered.forEach(report => {
      const msg = report.chat_messages || {};
      const msgProfile = msg.profiles || { username: 'Silinmiş' };
      const reporter = report.reporter || { username: 'Bilinmiyor' };
      const isPending = report.status === 'pending';
      const groupInfo = AGE_GROUPS[msg.age_group] || { label: '?', color: '#888' };

      const reasonLabels = {
        spam: '🚫 Spam / Reklam',
        harassment: '⚠️ Hakaret / Taciz',
        inappropriate: '🔞 Uygunsuz İçerik',
        other: '📌 Diğer'
      };

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
            <div class="app-detail-label">🏷️ Yaş Grubu</div>
            <div class="app-detail-value" style="color:${groupInfo.color}">${groupInfo.label}</div>
          </div>
          <div class="app-detail">
            <div class="app-detail-label">📅 Rapor Tarihi</div>
            <div class="app-detail-value">${new Date(report.created_at).toLocaleString('tr-TR')}</div>
          </div>
          <div class="app-detail">
            <div class="app-detail-label">🕐 Mesaj Tarihi</div>
            <div class="app-detail-value">${msg.created_at ? new Date(msg.created_at).toLocaleString('tr-TR') : '?'}</div>
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

  function updateReportBadges(reports) {
    const groups = { young: 0, adult: 0, mature: 0 };
    reports.forEach(r => {
      if (r.status === 'pending' && r.chat_messages?.age_group) {
        groups[r.chat_messages.age_group] = (groups[r.chat_messages.age_group] || 0) + 1;
      }
    });
    ['young','adult','mature'].forEach(g => {
      const el = document.getElementById('sb-' + g + '-count');
      if (el) { el.textContent = groups[g]; el.style.display = groups[g] > 0 ? '' : 'none'; }
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
      .select('*, chat_messages(id, content, age_group, created_at, profiles(username)), sender:sender_id(username, avatar, avatar_bg)')
      .order('created_at', { ascending: false });

    if (error) throw error;

    let filtered = data || [];
    if (currentAgeFilter !== 'all') {
      filtered = filtered.filter(f => f.chat_messages?.age_group === currentAgeFilter);
    }

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
