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
      <a href="settings.html" class="user-bar-btn">⚙️ Ayarlar</a>
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

window.toggleSettingsDropdown = function(e) {
  if (e) e.stopPropagation();
  const dp = document.getElementById('settings-dropdown');
  if (dp) {
    dp.classList.toggle('show');
  }
};

document.addEventListener('click', function(e) {
  const dp = document.getElementById('settings-dropdown');
  const btn = document.getElementById('settings-btn');
  if (dp && dp.classList.contains('show') && e.target !== btn && !btn.contains(e.target)) {
    dp.classList.remove('show');
  }
});

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
  const { error } = await sb.from('profiles').update({ username: trimmedUsername }).eq('id', user.id);
  if (error) {
    alert("Kullanıcı adı güncellenirken hata oluştu: " + error.message);
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
