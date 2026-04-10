// ===== AUTH HELPER =====
// Handles login, register, logout, and session state

const AUTH_EMAIL_DOMAIN = 'english-time.app';

// Convert username to email format for Supabase Auth
function usernameToEmail(username) {
  return username.toLowerCase().trim().replace(/\s+/g, '_') + '@' + AUTH_EMAIL_DOMAIN;
}

// Get current logged-in user
async function getCurrentUser() {
  const sb = getSupabase();
  if (!sb) return null;
  try {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return null;
    // Fetch profile
    const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
    return profile ? { ...user, username: profile.username } : user;
  } catch (e) {
    return null;
  }
}

// Register new user
async function registerUser(username, password) {
  const sb = getSupabase();
  if (!sb) return { error: { message: 'Bağlantı hatası' } };

  const email = usernameToEmail(username);

  // 1. Create auth user
  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) {
    if (error.message.includes('already registered')) {
      return { error: { message: 'Bu kullanıcı adı zaten kullanılıyor' } };
    }
    return { error: { message: error.message } };
  }

  // 2. Create profile
  if (data.user) {
    await sb.from('profiles').insert({
      id: data.user.id,
      username: username.trim()
    });
  }

  return { data, error: null };
}

// Login user
async function loginUser(username, password) {
  const sb = getSupabase();
  if (!sb) return { error: { message: 'Bağlantı hatası' } };

  const email = usernameToEmail(username);
  const { data, error } = await sb.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: { message: 'Kullanıcı adı veya şifre yanlış' } };
  }

  return { data, error: null };
}

// Logout
async function logoutUser() {
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
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
