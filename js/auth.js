// ===== AUTH HELPER =====
// Simple auth using profiles table directly (no Supabase Auth)

const SESSION_KEY = 'english_time_user';

// Hash password with SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + '_english_time_salt');
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Get current logged-in user from localStorage
async function getCurrentUser() {
  try {
    const stored = localStorage.getItem(SESSION_KEY);
    if (!stored) return null;
    const user = JSON.parse(stored);
    // Verify user still exists in DB
    const sb = getSupabase();
    if (!sb) return user; // offline fallback
    const { data } = await sb.from('profiles').select('*').eq('id', user.id).single();
    return data || null;
  } catch (e) {
    return null;
  }
}

// Register new user
async function registerUser(username, password) {
  const sb = getSupabase();
  if (!sb) return { error: { message: 'Bağlantı hatası' } };

  const trimmedUsername = username.trim();

  // Check if username exists
  const { data: existing } = await sb.from('profiles')
    .select('id').eq('username', trimmedUsername).maybeSingle();

  if (existing) {
    return { error: { message: 'Bu kullanıcı adı zaten kullanılıyor' } };
  }

  // Hash password
  const passHash = await hashPassword(password);

  // Create profile
  const { data, error } = await sb.from('profiles').insert({
    username: trimmedUsername,
    password_hash: passHash
  }).select().single();

  if (error) {
    return { error: { message: 'Kayıt sırasında hata oluştu: ' + error.message } };
  }

  // Save to localStorage
  localStorage.setItem(SESSION_KEY, JSON.stringify(data));
  return { data, error: null };
}

// Login user
async function loginUser(username, password) {
  const sb = getSupabase();
  if (!sb) return { error: { message: 'Bağlantı hatası' } };

  const trimmedUsername = username.trim();
  const passHash = await hashPassword(password);

  const { data, error } = await sb.from('profiles')
    .select('*')
    .eq('username', trimmedUsername)
    .eq('password_hash', passHash)
    .maybeSingle();

  if (error || !data) {
    return { error: { message: 'Kullanıcı adı veya şifre yanlış' } };
  }

  // Save to localStorage
  localStorage.setItem(SESSION_KEY, JSON.stringify(data));
  return { data, error: null };
}

// Logout
async function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}

// Update user bar in navbar
async function updateUserBar() {
  const userBar = document.getElementById('user-bar');
  if (!userBar) return;

  const user = await getCurrentUser();
  if (user && user.username) {
    const isDashboard = window.location.pathname.includes('dashboard.html');
    const isIndex = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
    const isLeaderboard = window.location.pathname.includes('leaderboard.html');
    const isProfile = window.location.pathname.includes('profile.html');
    const isSettings = window.location.pathname.includes('settings.html');
    const isO2 = window.location.pathname.includes('o2.html');

    // Build nav items list (only pages user is NOT currently on)
    let navItems = '';
    if (!isIndex) navItems += '<a href="index.html" class="burger-nav-item"><span class="burger-nav-icon">🏠</span> Ana Sayfa</a>';
    if (!isDashboard) navItems += '<a href="dashboard.html" class="burger-nav-item"><span class="burger-nav-icon">📊</span> Panelim</a>';
    if (!isLeaderboard) navItems += '<a href="leaderboard.html" class="burger-nav-item"><span class="burger-nav-icon">🥇</span> Skor Tablosu</a>';
    if (!isO2) navItems += '<a href="o2.html" class="burger-nav-item"><span class="burger-nav-icon">🔍</span> O₂ Oxygen</a>';
    if (!isProfile) navItems += '<a href="profile.html?id=' + user.id + '" class="burger-nav-item"><span class="burger-nav-icon">👤</span> Profilim</a>';
    if (!isSettings) navItems += '<a href="settings.html" class="burger-nav-item"><span class="burger-nav-icon">⚙️</span> Ayarlar</a>';

    // Desktop buttons (same as before)
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const themeIcon = currentTheme === 'light' ? '🌙' : '☀️';
    const themeText = currentTheme === 'light' ? 'Karanlık Mod' : 'Aydınlık Mod';

    navItems += `<a href="#" class="burger-nav-item theme-mobile-btn" onclick="toggleTheme(); return false;" id="theme-toggle-mobile"><span class="burger-nav-icon">${themeIcon}</span> <span class="theme-text-span">${themeText}</span></a>`;

    const homeBtn = isIndex ? '' : '<a href="index.html" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">🏠</span> Ana Sayfa</a>';
    const panelBtn = isDashboard ? '' : '<a href="dashboard.html" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">📊</span> Panelim</a>';
    const lbBtn = isLeaderboard ? '' : '<a href="leaderboard.html" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">🥇</span> Skor</a>';
    const o2Btn = isO2 ? '' : '<a href="o2.html" class="user-bar-btn desktop-nav" style="border-color: rgba(251,191,36,0.2); color: #fbbf24;"><span class="settings-btn-icon">🔍</span> O₂</a>';
    const profileBtn = isProfile ? '' : '<a href="profile.html?id=' + user.id + '" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">👤</span> Profilim</a>';
    const settingsBtn = isSettings ? '' : '<a href="settings.html" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">⚙️</span> Ayarlar</a>';
    
    const themeBtn = `<button class="user-bar-btn desktop-nav" onclick="toggleTheme()" id="theme-toggle-desktop" title="Temayı Değiştir">${themeIcon}</button>`;

    let displayName = user.username || 'Bilinmeyen Kullanıcı';
    let styleStr = user.name_style ? `font-family: ${user.name_style};` : '';

    let avatarHtml = '';
    if (user.avatar && user.avatar !== 'null') {
      const bgStyle = user.avatar_bg ? `background: ${user.avatar_bg};` : '';
      avatarHtml = `<div class="burger-avatar" style="${bgStyle}"><img src="avatars/${escapeHtmlAuth(user.avatar)}" alt="" onerror="this.parentElement.textContent='${escapeHtmlAuth(displayName).charAt(0).toUpperCase()}'"></div>`;
    } else {
      avatarHtml = `<div class="burger-avatar">${escapeHtmlAuth(displayName).charAt(0).toUpperCase()}</div>`;
    }

    userBar.innerHTML = `
      <div class="user-greeting">
         👋 <span style="${styleStr}">${escapeHtmlAuth(displayName)}</span>
      </div>
      ${homeBtn}
      ${panelBtn}
      ${lbBtn}
      ${o2Btn}
      <span class="nav-divider desktop-nav"></span>
      ${profileBtn}
      ${settingsBtn}
      ${themeBtn}
      <button class="burger-toggle" id="burger-toggle" onclick="toggleBurgerMenu()" aria-label="Menüyü aç">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
      <div class="burger-overlay" id="burger-overlay" onclick="closeBurgerMenu()"></div>
      <div class="burger-panel" id="burger-panel">
        <div class="burger-panel-header">
          ${avatarHtml}
          <div class="burger-user-info">
            <span class="burger-display-name" style="${styleStr}">${escapeHtmlAuth(displayName)}</span>
            <span class="burger-user-sub">Hoş geldin! 👋</span>
          </div>
          <button class="burger-close" onclick="closeBurgerMenu()" aria-label="Menüyü kapat">✕</button>
        </div>
        <div class="burger-nav-list">
          ${navItems}
        </div>
        <div class="burger-panel-footer">
          <span class="burger-footer-text">📚 English Time</span>
        </div>
      </div>
    `;
    userBar.classList.add('logged-in');
  } else {
    userBar.innerHTML = `
      <a href="leaderboard.html" class="user-bar-btn desktop-nav">🏅 Skor</a>
      <a href="o2.html" class="user-bar-btn desktop-nav" style="border-color: rgba(251,191,36,0.2); color: #fbbf24;">🔍 O₂</a>
      <a href="login.html" class="user-bar-btn login-link desktop-nav">🔑 Giriş Yap</a>
      <button class="burger-toggle" id="burger-toggle" onclick="toggleBurgerMenu()" aria-label="Menüyü aç">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
      <div class="burger-overlay" id="burger-overlay" onclick="closeBurgerMenu()"></div>
      <div class="burger-panel" id="burger-panel">
        <div class="burger-panel-header">
          <div class="burger-avatar">?</div>
          <div class="burger-user-info">
            <span class="burger-display-name">Misafir</span>
            <span class="burger-user-sub">Giriş yapmadınız</span>
          </div>
          <button class="burger-close" onclick="closeBurgerMenu()" aria-label="Menüyü kapat">✕</button>
        </div>
        <div class="burger-nav-list">
          <a href="leaderboard.html" class="burger-nav-item"><span class="burger-nav-icon">🏅</span> Skor Tablosu</a>
          <a href="o2.html" class="burger-nav-item"><span class="burger-nav-icon">🔍</span> O₂ Oxygen</a>
          <a href="login.html" class="burger-nav-item burger-nav-login"><span class="burger-nav-icon">🔑</span> Giriş Yap / Kayıt Ol</a>
        </div>
        <div class="burger-panel-footer">
          <span class="burger-footer-text">📚 English Time</span>
        </div>
      </div>
    `;
    userBar.classList.remove('logged-in');
  }
}

// ===== BURGER MENU FUNCTIONS =====
function toggleBurgerMenu() {
  const panel = document.getElementById('burger-panel');
  const overlay = document.getElementById('burger-overlay');
  const toggle = document.getElementById('burger-toggle');
  if (!panel || !overlay) return;

  const isOpen = panel.classList.contains('open');
  if (isOpen) {
    closeBurgerMenu();
  } else {
    panel.classList.add('open');
    overlay.classList.add('open');
    if (toggle) toggle.style.display = 'none';
    document.body.style.overflow = 'hidden';
  }
}

function closeBurgerMenu() {
  const panel = document.getElementById('burger-panel');
  const overlay = document.getElementById('burger-overlay');
  const toggle = document.getElementById('burger-toggle');
  if (panel) panel.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  if (toggle) toggle.style.display = '';
  document.body.style.overflow = '';
}

async function handleLogout() {
  await logoutUser();
  window.location.href = 'index.html';
}

window.promptChangeUsername = async function() {
  const user = await getCurrentUser();
  if (!user) return;
  
  const newName = prompt("Yeni kullanıcı adınızı girin:", user.username);
  if (!newName || newName.trim() === "" || newName.trim() === user.username) {
    return; // İptal edildi, boş bırakıldı veya aynı isim
  }
  const trimmedUsername = newName.trim();
  
  const sb = getSupabase();
  if (!sb) { alert("Bağlantı hatası"); return; }
  
  // Kullanıcı adının başka biri tarafından kullanılıp kullanılmadığını kontrol et
  const { data: existing } = await sb.from('profiles').select('id').eq('username', trimmedUsername).maybeSingle();
  if (existing) {
    alert("Bu kullanıcı adı başka biri tarafından kullanılıyor.");
    return;
  }
  
  // Kullanıcı adını güncelle
  const { data, error } = await sb.from('profiles').update({ username: trimmedUsername }).eq('id', user.id).select();
  if (error || !data || data.length === 0) {
    alert("Bağlantı başarılı fakat veritabanı ismi güncellemedi.\n\nSebep: Supabase 'profiles' tablosunda UPDATE izniniz (RLS Policy) yok. Lütfen Supabase'den profiles tablosuna UPDATE policy ekleyin.");
    return;
  }
  
  // Yerel oturumu güncelle
  user.username = trimmedUsername;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  
  alert("Kullanıcı adınız başarıyla güncellendi.");
  window.location.reload(); // Üst bardaki metnin güncellenmesi için sayfayı yenile
};

window.confirmResetData = async function() {
  if (confirm("Tüm ilerlemenizi, yıldızlı kelimeleri ve geçmiş quiz oturumlarınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz!")) {
    const user = await getCurrentUser();
    if (!user) return;
    const sb = getSupabase();
    if (!sb) { alert("Bağlantı hatası"); return; }
    
    // Yükleniyor görselini vb. araya sokabilirsiniz ama basitçe işlemi başlatalım
    await sb.from('word_results').delete().eq('user_id', user.id);
    await sb.from('study_words').delete().eq('user_id', user.id);
    await sb.from('quiz_sessions').delete().eq('user_id', user.id);
    
    alert('Verileriniz başarıyla sıfırlandı.');
    window.location.reload();
  }
};

window.confirmDeleteAccount = async function() {
  if (confirm("Hesabınızı ve tüm verilerinizi KALICI olarak silmek istediğinize emin misiniz?")) {
    const user = await getCurrentUser();
    if (!user) return;
    const sb = getSupabase();
    if (!sb) { alert("Bağlantı hatası"); return; }
    
    await sb.from('word_results').delete().eq('user_id', user.id);
    await sb.from('study_words').delete().eq('user_id', user.id);
    await sb.from('quiz_sessions').delete().eq('user_id', user.id);
    // Profili son olarak sil
    await sb.from('profiles').delete().eq('id', user.id);
    
    await logoutUser();
    alert('Hesabınız ve tüm verileriniz silindi.');
    window.location.href = 'login.html';
  }
};

function escapeHtmlAuth(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Auto-update user bar on page load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(updateUserBar, 100);
});
