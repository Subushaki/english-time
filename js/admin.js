// ===== ADMIN ANALYTICS ENGINE =====
const POINT_MAP = { first_try: 3, retry: 2, hard: 1, unknown: 0 };
let currentData = [];
let charts = {};

// Akıllı süre formatlayıcı: ms → okunabilir metin
function formatDuration(ms) {
  const totalSec = Math.floor(ms / 1000);
  if (totalSec < 60) return `${totalSec} saniye`;

  const totalMin = Math.floor(totalSec / 60);
  if (totalMin < 60) {
    const remainSec = totalSec % 60;
    return remainSec > 0 ? `${totalMin} dk ${remainSec} sn` : `${totalMin} dakika`;
  }

  const totalHours = Math.floor(totalMin / 60);
  const remainMin = totalMin % 60;
  if (totalHours < 24) {
    return remainMin > 0 ? `${totalHours} saat ${remainMin} dk` : `${totalHours} saat`;
  }

  const totalDays = Math.floor(totalHours / 24);
  const remainHours = totalHours % 24;
  if (totalDays < 365) {
    return remainHours > 0 ? `${totalDays} gün ${remainHours} saat` : `${totalDays} gün`;
  }

  const years = Math.floor(totalDays / 365);
  const remainDays = totalDays % 365;
  return remainDays > 0 ? `${years} yıl ${remainDays} gün` : `${years} yıl`;
}

async function checkAdmin() {
  const user = await getCurrentUser();
  if (!user || user.is_admin !== true) {
    document.body.innerHTML = '<h1 style="text-align: center; color: red; margin-top: 100px;">⛔ ERİŞİM REDDEDİLDİ.</h1>';
    setTimeout(() => window.location.href = 'settings.html', 1500);
    return false;
  }
  return true;
}

function switchTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  
  const controls = document.getElementById('admin-controls');
  
  if (tab === 'general') {
    document.querySelectorAll('.admin-tab')[0].classList.add('active');
    document.getElementById('tab-general').classList.add('active');
    if (controls) controls.style.display = '';
    loadAnalytics();
  } else if (tab === 'users') {
    document.querySelectorAll('.admin-tab')[1].classList.add('active');
    document.getElementById('tab-users').classList.add('active');
    if (controls) controls.style.display = 'none';
    loadUsers();
  } else {
    document.querySelectorAll('.admin-tab')[2].classList.add('active');
    document.getElementById('tab-updates').classList.add('active');
    if (controls) controls.style.display = 'none';
    loadPatchNotes();
  }
}

let allPatchCommits = [];
let patchCommitIndex = 0;
const PATCH_BATCH_SIZE = 3;

async function loadPatchNotes() {
  const container = document.getElementById('patch-timeline');
  if(!container) return;
  container.innerHTML = '<div style="color: var(--text-muted); text-align: center;">Yükleniyor...</div>';
  
  try {
    const res = await fetch('https://api.github.com/repos/Subushaki/english-time/commits?per_page=100');
    const commits = await res.json();
    
    if (!Array.isArray(commits)) throw new Error('API Hatası veya Rate Limit');
    
    allPatchCommits = commits;
    patchCommitIndex = 0;
    container.innerHTML = '';
    renderNextPatches();
    
  } catch (err) {
    container.innerHTML = `<div style="color:var(--accent-red); text-align:center; padding: 20px;">Güncellemeler çekilemedi: ${err.message}</div>`;
  }
}

function renderNextPatches() {
  const container = document.getElementById('patch-timeline');
  if(!container) return;
  
  const loadBtn = document.getElementById('pt-load-btn');
  if (loadBtn) loadBtn.remove();

  const slice = allPatchCommits.slice(patchCommitIndex, patchCommitIndex + PATCH_BATCH_SIZE);
  
  slice.forEach(item => {
    const msgRaw = item.commit.message || 'İsimsiz Yükleme';
    const dateRaw = new Date(item.commit.author.date);
    
    const parts = msgRaw.split('\n');
    let title = parts[0];
    let desc = parts.slice(1).join('<br>').trim();
    
    let tagClass = 'tag-other';
    let tagText = 'UPDATE';
    let accentCol = 'var(--accent-purple)';
    
    if (title.toLowerCase().startsWith('feat')) {
      tagClass = 'tag-feat';
      tagText = 'FEATURE';
      accentCol = 'var(--accent-green)';
    } else if (title.toLowerCase().startsWith('fix')) {
      tagClass = 'tag-fix';
      tagText = 'BUG FIX';
      accentCol = 'var(--accent-red)';
    } else if (title.toLowerCase().startsWith('docs') || title.toLowerCase().startsWith('chore')) {
      tagText = 'SYSTEM';
    }
    
    const day = dateRaw.getDate().toString().padStart(2, '0');
    const month = (dateRaw.getMonth()+1).toString().padStart(2, '0');
    const year = dateRaw.getFullYear();
    const hours = dateRaw.getHours().toString().padStart(2, '0');
    const minutes = dateRaw.getMinutes().toString().padStart(2, '0');
    const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
    
    const div = document.createElement('div');
    div.className = 'pt-item';
    div.style.setProperty('--circle-col', accentCol);
    div.innerHTML = `
      <div class="pt-content" style="border-left: 3px solid ${accentCol}">
        <span class="pt-date">📅 ${formattedDate}</span>
        <span class="pt-tag ${tagClass}">${tagText}</span>
        <div class="pt-title">${title}</div>
        ${desc ? `<div class="pt-desc">${desc}</div>` : ''}
      </div>
    `;
    container.appendChild(div);
  });

  patchCommitIndex += PATCH_BATCH_SIZE;

  if (patchCommitIndex < allPatchCommits.length) {
    const btnBox = document.createElement('div');
    btnBox.id = 'pt-load-btn';
    btnBox.style.textAlign = 'center';
    btnBox.style.marginTop = '30px';
    btnBox.innerHTML = `<button class="btn-secondary" style="display:inline-flex; border-color:var(--glass-border);" onclick="renderNextPatches()">↓ Daha Fazlasını Göster</button>`;
    container.appendChild(btnBox);
  }
}

function getTimeFilterLimit() {
  const v = document.getElementById('time-filter').value;
  if(v === 'all') return null;
  const d = new Date();
  if(v === '24h') d.setHours(d.getHours() - 24);
  if(v === '1d') d.setDate(d.getDate() - 1);
  if(v === '7d') d.setDate(d.getDate() - 7);
  if(v === '30d') d.setDate(d.getDate() - 30);
  if(v === '90d') d.setDate(d.getDate() - 90);
  if(v === '180d') d.setDate(d.getDate() - 180);
  if(v === '365d') d.setDate(d.getDate() - 365);
  return d.toISOString();
}

async function loadAnalytics() {
  const sb = getSupabase();
  let query = sb.from('site_analytics').select('*').order('created_at', { ascending: true });
  
  const limit = getTimeFilterLimit();
  if (limit) query = query.gte('created_at', limit);
  
  const { data, error } = await query;
  if (error || !data) { console.error(error); return; }
  
  currentData = data;
  calculateAndDrawStats(data);
}

function calculateAndDrawStats(data) {
  const pageviews = data.length;
  document.getElementById('tot-pageviews').textContent = pageviews;
  
  let validLoad = data.filter(d => d.load_time_ms > 0);
  const avgLoad = validLoad.length > 0 ? Math.round(validLoad.reduce((sum, d) => sum + d.load_time_ms, 0) / validLoad.length) : 0;
  document.getElementById('avg-load').textContent = avgLoad + ' ms';
  
  let desk = 0, mob = 0;
  data.forEach(d => { if(d.device_type === 'Mobil') mob++; else desk++; });
  const dPct = pageviews > 0 ? Math.round((desk/pageviews)*100) : 0;
  const mPct = pageviews > 0 ? Math.round((mob/pageviews)*100) : 0;
  document.getElementById('dev-ratio').textContent = `${dPct}% / ${mPct}%`;
  
  const uniqueUsers = new Set(data.filter(d => d.user_id).map(d => d.user_id)).size;
  document.getElementById('tot-users').textContent = uniqueUsers;

  // CHARTS
  drawCharts(data);
}

function drawCharts(data) {
  // Destroy old charts to prevent overlapping
  Object.keys(charts).forEach(k => { if(charts[k]) charts[k].destroy(); });

  Chart.defaults.color = "#9898b8";
  Chart.defaults.font.family = "'Inter', sans-serif";

  // Helper for tracking unique visitors instead of pageviews
  const getIdentifier = (d) => d.user_id ? d.user_id : `anon_${d.os}_${d.browser}_${new Date(d.created_at).toLocaleDateString()}`;

  // Line Chart (Ziyaretçi Eğilimi - Tekil Ziyaretçi/Gün)
  const dayUniqueVisitors = {};
  data.forEach(d => {
     const date = new Date(d.created_at).toLocaleDateString('tr-TR');
     if (!dayUniqueVisitors[date]) dayUniqueVisitors[date] = new Set();
     dayUniqueVisitors[date].add(getIdentifier(d));
  });
  const dayGroups = {};
  Object.keys(dayUniqueVisitors).forEach(k => dayGroups[k] = dayUniqueVisitors[k].size);

  charts.line = new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: Object.keys(dayGroups),
      datasets: [{
        label: 'Tekil Ziyaretçi',
        data: Object.values(dayGroups),
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        fill: true, tension: 0.4
      }]
    },
    options: { maintainAspectRatio: false }
  });




  // OS Chart (Doughnut)
  const osSet = {};
  data.forEach(d => { 
      if(!osSet[d.os]) osSet[d.os] = new Set();
      osSet[d.os].add(getIdentifier(d));
  });
  const osGroup = {};
  Object.keys(osSet).forEach(k => osGroup[k] = osSet[k].size);

  charts.os = new Chart(document.getElementById('osChart'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(osGroup),
      datasets: [{
        data: Object.values(osGroup),
        backgroundColor: ['#3b82f6', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b', '#9898b8'],
        borderWidth: 0
      }]
    },
    options: { maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
  });

  // Browser Chart (Doughnut)
  const browserSet = {};
  data.forEach(d => { 
      if(!browserSet[d.browser]) browserSet[d.browser] = new Set();
      browserSet[d.browser].add(getIdentifier(d));
  });
  const browserGroup = {};
  Object.keys(browserSet).forEach(k => browserGroup[k] = browserSet[k].size);

  charts.browser = new Chart(document.getElementById('browserChart'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(browserGroup),
      datasets: [{
        data: Object.values(browserGroup),
        backgroundColor: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#9898b8'],
        borderWidth: 0
      }]
    },
    options: { maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
  });

  // Country Chart (Bar Horizontal)
  const countrySet = {};
  data.forEach(d => { 
     let c = d.country || 'Bilinmiyor';
     if(!countrySet[c]) countrySet[c] = new Set();
     countrySet[c].add(getIdentifier(d));
  });
  const countryGroup = {};
  Object.keys(countrySet).forEach(k => countryGroup[k] = countrySet[k].size);
  
  const sortedCountries = Object.entries(countryGroup).sort((a,b)=>b[1]-a[1]).slice(0, 7);
  charts.country = new Chart(document.getElementById('countryChart'), {
    type: 'bar',
    data: {
      labels: sortedCountries.map(x=>x[0]),
      datasets: [{
        label: 'Tekil Ziyaretçi',
        data: sortedCountries.map(x=>x[1]),
        backgroundColor: '#ef4444'
      }]
    },
    options: { indexAxis: 'y', maintainAspectRatio: false }
  });

  // Bar Chart (Sayfalar - Tekil Ziyaretçi)
  const pathSet = {};
  data.forEach(d => {
    if(!pathSet[d.path]) pathSet[d.path] = new Set();
    pathSet[d.path].add(getIdentifier(d));
  });
  const pathGroup = {};
  Object.keys(pathSet).forEach(k => pathGroup[k] = pathSet[k].size);
  // Sorting paths
  const sortedPaths = Object.entries(pathGroup).sort((a,b)=>b[1]-a[1]).slice(0, 7);
  charts.bar = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: sortedPaths.map(x=>x[0]),
      datasets: [{
        label: 'Tekil Ziyaretçi',
        data: sortedPaths.map(x=>x[1]),
        backgroundColor: '#06b6d4'
      }]
    },
    options: { maintainAspectRatio: false }
  });

  // Network Chart (Bağlantı Türü)
  const netGroup = {};
  data.forEach(d => { netGroup[d.connection_speed] = (netGroup[d.connection_speed] || 0) + 1; });
  charts.speed = new Chart(document.getElementById('speedChart'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(netGroup),
      datasets: [{
        data: Object.values(netGroup),
        backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#9898b8'],
        borderWidth: 0
      }]
    },
    options: { maintainAspectRatio: false }
  });
}

function exportDataToCSV() {
  if (currentData.length === 0) return alert('Dışa aktarılacak veri yok.');
  
  const headers = ['ID', 'Ulke', 'Path', 'Aygit', 'OS', 'Tarayici', 'Hiz_Sectipi', 'SayfaYuku_MS', 'SayfadaGecen_MS', 'Tarih', 'User_ID'];
  const rows = currentData.map(d => [
    d.id, (d.country || 'Bilinmiyor'), d.path, d.device_type, d.os, d.browser, d.connection_speed, d.load_time_ms, d.time_spent_ms, d.created_at, (d.user_id || 'Anonim')
  ]);
  
  let csvContent = "data:text/csv;charset=utf-8," 
    + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
  let encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `analytics_export_${new Date().getTime()}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

async function loadUsers() {
  const container = document.getElementById('users-container');
  const sb = getSupabase();
  const { data, error } = await sb.from('profiles').select('id, username, created_at, is_admin').order('created_at', { ascending: false });
  
  if (error || !data) { container.innerHTML = 'Veri çekilemedi'; return; }
  
  container.innerHTML = '';
  data.forEach(u => {
    const d = new Date(u.created_at).toLocaleDateString('tr-TR');
    const r = u.is_admin ? '<span style="color:var(--accent-yellow); font-size:0.8rem; margin-left:10px;">👑 ADMIN</span>' : '';
    const row = document.createElement('div');
    row.className = 'ul-row';
    row.innerHTML = `
      <div class="ul-name">${u.username} ${r}</div>
      <div class="ul-meta">Kayıt: ${d} | ID: ${u.id.substring(0,8)}...</div>
    `;
    row.onclick = () => openUserModal(u);
    container.appendChild(row);
  });
}

async function openUserModal(userObj) {
  document.getElementById('user-modal').style.display = 'flex';
  document.getElementById('modal-username').textContent = userObj.username;
  document.getElementById('modal-joined').textContent = 'Kayıt Tarihi: ' + new Date(userObj.created_at).toLocaleDateString('tr-TR');
  
  const sb = getSupabase();
  
  // STATS
  const [
     { data: wordResults },
     { data: studyWords },
     { data: analyticsResults }
  ] = await Promise.all([
     sb.from('word_results').select('word_id, result').eq('user_id', userObj.id),
     sb.from('study_words').select('word_id, starred').eq('user_id', userObj.id),
     sb.from('site_analytics').select('path, time_spent_ms').eq('user_id', userObj.id)
  ]);
  
  const bestResults = {};
  if (wordResults && wordResults.length > 0) {
    wordResults.forEach(wr => {
      const priority = { first_try: 1, retry: 2, hard: 3, unknown: 4 };
      if (!bestResults[wr.word_id] || priority[wr.result] < priority[bestResults[wr.word_id]]) {
        bestResults[wr.word_id] = wr.result;
      }
    });
  }

  let first = 0, retry = 0, hard = 0, unknown = 0;
  Object.values(bestResults).forEach(r => {
    if (r === 'first_try') first++;
    else if (r === 'retry') retry++;
    else if (r === 'hard') hard++;
    else if (r === 'unknown') unknown++;
  });
  
  let starredCount = 0;
  if (studyWords) studyWords.forEach(sw => { if (sw.starred) starredCount++; });

  document.getElementById('md-first').textContent = first;
  document.getElementById('md-retry').textContent = retry;
  document.getElementById('md-hard').textContent = hard;
  document.getElementById('md-unknown').textContent = unknown;
  document.getElementById('md-starred').textContent = starredCount;

  // ===== BADGE PROGRESS FOR ADMIN MODAL =====
  const ADMIN_BADGES = [
    { id: 'kurs',    name: 'Kurs Ustası',             icon: '📚', minId: 1,    maxId: 410,  dynamic: false },
    { id: 'genel',   name: 'Genel Bilgi Şampiyonu',   icon: '🌍', minId: 1001, maxId: null, dynamic: true, dataset: (typeof WORDS_A2_GENEL !== 'undefined' ? WORDS_A2_GENEL : []) },
    { id: 'grammar', name: 'Gramer Kralı',             icon: '📝', minId: 5001, maxId: 5050, dynamic: false },
    { id: 'deyimler',name: 'Deyim Ustası',             icon: '💬', minId: 6001, maxId: 6030, dynamic: false },
    { id: 'times_am',name: 'A.M. Zaman Lordu',         icon: '🌅', minId: 2000, maxId: 2719, dynamic: false },
    { id: 'times_pm',name: 'P.M. Zaman Lordu',         icon: '🌙', minId: 2720, maxId: 3439, dynamic: false }
  ];

  function getAdminBadgeIds(badge) {
    if (badge.dynamic && badge.dataset) return badge.dataset.map(w => w.id);
    const ids = [];
    for (let i = badge.minId; i <= badge.maxId; i++) ids.push(i);
    return ids;
  }

  const badgeContainer = document.getElementById('md-badges');
  badgeContainer.innerHTML = '';

  ADMIN_BADGES.forEach(badge => {
    const ids = getAdminBadgeIds(badge);
    const total = ids.length;
    let solved = 0;
    ids.forEach(id => { if (bestResults[id] === 'first_try') solved++; });
    const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
    const isComplete = pct === 100;
    const barColor = isComplete ? 'linear-gradient(90deg, #f59e0b, #fbbf24)' : 'linear-gradient(90deg, var(--accent-purple), var(--accent-blue))';
    const borderCol = isComplete ? 'var(--accent-yellow)' : 'var(--glass-border)';
    const pctColor = isComplete ? 'var(--accent-yellow)' : 'var(--text-primary)';

    const box = document.createElement('div');
    box.className = 'sgm-box';
    box.style.cssText = `border: 1px solid ${borderCol}; padding: 12px 8px; text-align: center;`;
    box.innerHTML = `
      <div style="font-size: 1.3rem; margin-bottom: 4px;">${badge.icon}</div>
      <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 4px;">${badge.name}</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: ${pctColor}; margin-bottom: 6px;">${pct}%</div>
      <div style="width:100%; height:4px; background:rgba(255,255,255,0.06); border-radius:4px; overflow:hidden;">
        <div style="width:${pct}%; height:100%; background:${barColor}; border-radius:4px; transition: width 0.8s ease;"></div>
      </div>
      <div style="font-size: 0.65rem; color: var(--text-muted); margin-top: 4px;">${solved} / ${total}</div>
    `;
    badgeContainer.appendChild(box);
  });

  // TIME SPENT BY ROUTES
  const timeContainer = document.getElementById('modal-time-list');
  timeContainer.innerHTML = '';
  
  if (analyticsResults && analyticsResults.length > 0) {
     const pathTimes = {};
     analyticsResults.forEach(ar => {
        pathTimes[ar.path] = (pathTimes[ar.path] || 0) + (ar.time_spent_ms || 0);
     });
     
     const sortedList = Object.entries(pathTimes).sort((a,b) => b[1]-a[1]);
     let html = '';
     sortedList.forEach(([pathUrl, ms]) => {
        html += `<div class="time-list-item"><span style="color:var(--accent-blue)">/${pathUrl}</span><span style="font-weight:600">${formatDuration(ms)}</span></div>`;
     });
     timeContainer.innerHTML = html || '<div style="color:var(--text-muted)">Sayfa verisi hesaba katılmıyor.</div>';
  } else {
     timeContainer.innerHTML = '<div style="color:var(--text-muted)">Hiç sayfa kaydı bulunamadı.</div>';
  }
}

function closeUserModal() {
  document.getElementById('user-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', async () => {
  const allowed = await checkAdmin();
  if (allowed) {
    const savedScale = localStorage.getItem('admin_view_scale') || 'md';
    const scaleSelect = document.getElementById('view-scale');
    if(scaleSelect) scaleSelect.value = savedScale;
    changeViewScale();
    
    loadAnalytics();
  }
});

function changeViewScale() {
  const scaleSelect = document.getElementById('view-scale');
  if (!scaleSelect) return;
  const scale = scaleSelect.value;
  const grid = document.querySelector('.chart-grid');
  if(!grid) return;
  
  grid.classList.remove('scale-md', 'scale-sm');
  if (scale !== 'lg') grid.classList.add('scale-' + scale);
  localStorage.setItem('admin_view_scale', scale);
  
  setTimeout(() => {
     Object.values(charts).forEach(c => {
         if(c && typeof c.resize === 'function') c.resize();
     });
  }, 350);
}
