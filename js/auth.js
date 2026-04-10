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
    userBar.innerHTML = `
      <span class="user-greeting">👋 ${escapeHtmlAuth(user.username)}</span>
      <a href="dashboard.html" class="user-bar-btn">📊 Panelim</a>
      <button class="user-bar-btn logout-btn" onclick="handleLogout()">Çıkış</button>
    `;
    userBar.classList.add('logged-in');
  } else {
    userBar.innerHTML = `
      <a href="login.html" class="user-bar-btn login-link">🔑 Giriş Yap</a>
    `;
    userBar.classList.remove('logged-in');
  }
}

async function handleLogout() {
  await logoutUser();
  window.location.reload();
}

function escapeHtmlAuth(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Auto-update user bar on page load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(updateUserBar, 100);
});
