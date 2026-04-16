// ===== ADMIN ANALYTICS ENGINE =====
const POINT_MAP = { first_try: 3, retry: 2, hard: 1, unknown: 0 };
let currentData = [];
let charts = {};

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
  
  if (tab === 'general') {
    document.querySelectorAll('.admin-tab')[0].classList.add('active');
    document.getElementById('tab-general').classList.add('active');
    loadAnalytics();
  } else {
    document.querySelectorAll('.admin-tab')[1].classList.add('active');
    document.getElementById('tab-users').classList.add('active');
    loadUsers();
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

  // Line Chart (Ziyaretçi Eğilimi)
  // Gün gün gruplayalım
  const dayGroups = {};
  data.forEach(d => {
     const date = new Date(d.created_at).toLocaleDateString('tr-TR');
     dayGroups[date] = (dayGroups[date] || 0) + 1;
  });
  charts.line = new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: Object.keys(dayGroups),
      datasets: [{
        label: 'Ziyaretler',
        data: Object.values(dayGroups),
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        fill: true, tension: 0.4
      }]
    },
    options: { maintainAspectRatio: false }
  });

  // Helper for tracking unique visitors instead of pageviews
  const getIdentifier = (d) => d.user_id ? d.user_id : `anon_${d.os}_${d.browser}_${new Date(d.created_at).toLocaleDateString()}`;

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

  // Bar Chart (Sayfalar)
  const pathGroup = {};
  data.forEach(d => { pathGroup[d.path] = (pathGroup[d.path] || 0) + 1; });
  // Sorting paths
  const sortedPaths = Object.entries(pathGroup).sort((a,b)=>b[1]-a[1]).slice(0, 7);
  charts.bar = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: sortedPaths.map(x=>x[0]),
      datasets: [{
        label: 'Görüntüleme',
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
        let sec = Math.floor(ms / 1000);
        let min = Math.floor(sec / 60);
        let remainSec = sec % 60;
        let displayStr = min > 0 ? `${min} dk ${remainSec} sn` : `${sec} saniye`;
        html += `<div class="time-list-item"><span style="color:var(--accent-blue)">/${pathUrl}</span><span style="font-weight:600">${displayStr}</span></div>`;
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
