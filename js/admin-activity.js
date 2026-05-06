// ===== ADMIN ACTIVITY LOG JS =====

let currentPage = 1;
const PAGE_SIZE = 50;
let hasMore = true;

document.addEventListener('DOMContentLoaded', async () => {
  const user = await getCurrentUser();
  if (!user || !user.is_admin) {
    window.location.href = 'index.html';
    return;
  }
  
  loadLogs(true);
});

window.changePage = function(delta) {
  if (delta === -1 && currentPage > 1) {
    currentPage--;
    loadLogs(false);
  } else if (delta === 1 && hasMore) {
    currentPage++;
    loadLogs(false);
  }
};

window.loadLogs = async function(reset = false) {
  if (reset) {
    currentPage = 1;
  }
  
  const sb = getSupabase();
  const tbody = document.getElementById('log-table-body');
  tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">Yükleniyor...</td></tr>';
  
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE - 1;
  
  const { data, error, count } = await sb
    .from('user_activity_log')
    .select('*, profiles(username, avatar, avatar_bg)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(startIdx, endIdx);
    
  if (error) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--accent-red);">Hata: ${error.message}</td></tr>`;
    return;
  }
  
  hasMore = count > endIdx + 1;
  document.getElementById('btn-prev').disabled = currentPage === 1;
  document.getElementById('btn-next').disabled = !hasMore;
  document.getElementById('page-info').textContent = `Sayfa ${currentPage}`;
  
  if (!data || data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">Kayıt bulunamadı.</td></tr>';
    return;
  }
  
  tbody.innerHTML = '';
  data.forEach(log => {
    const profile = log.profiles || { username: 'Bilinmiyor', avatar: null };
    
    // Date
    const dateObj = new Date(log.created_at);
    const dateStr = dateObj.toLocaleDateString('tr-TR') + ' ' + dateObj.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    
    // User Badge
    let avatarHtml = '';
    if (profile.avatar && profile.avatar !== 'null') {
      avatarHtml = `<img src="${getAvatarPath(profile.avatar)}" alt="avatar">`;
    } else {
      avatarHtml = profile.username.charAt(0).toUpperCase();
    }
    const bgStyle = profile.avatar_bg ? `style="background: ${profile.avatar_bg};"` : '';
    
    const userHtml = `
      <div class="user-badge" onclick="window.open('profile.html?id=${log.user_id}', '_blank')">
        <div class="user-avatar" ${bgStyle}>${avatarHtml}</div>
        <span>${escapeHtml(profile.username)}</span>
      </div>
    `;
    
    // Action Badge
    let actionCls = 'action-other';
    let actionLabel = log.action;
    if (log.action === 'quiz_completed') { actionCls = 'action-quiz'; actionLabel = 'Quiz Bitti'; }
    else if (log.action === 'avatar_changed') { actionCls = 'action-avatar'; actionLabel = 'Avatar'; }
    else if (log.action === 'data_reset') { actionCls = 'action-reset'; actionLabel = 'Veri Sıfırlama'; }
    else if (log.action === 'account_deleted') { actionCls = 'action-reset'; actionLabel = 'Hesap Silindi'; }
    else if (log.action === 'username_changed') { actionCls = 'action-other'; actionLabel = 'İsim Değişimi'; }
    
    const actionHtml = `<span class="action-badge ${actionCls}">${actionLabel}</span>`;
    
    // Details
    let detailsHtml = '-';
    if (log.details) {
      try {
        const parsed = JSON.parse(log.details);
        detailsHtml = JSON.stringify(parsed, null, 2);
      } catch (e) {
        detailsHtml = log.details;
      }
    }
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="white-space: nowrap;">${dateStr}</td>
      <td>${userHtml}</td>
      <td>${actionHtml}</td>
      <td><div class="details-cell">${escapeHtml(detailsHtml)}</div></td>
      <td style="color: var(--text-muted); font-size: 0.8rem;">${log.page || '-'}</td>
    `;
    tbody.appendChild(tr);
  });
};

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
