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
    const isDashboard = window.location.pathname.includes('dashboard.html') || window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
    const isLeaderboard = window.location.pathname.includes('leaderboard.html');
    const isProfile = window.location.pathname.includes('profile.html');

    const mainActionBtn = isDashboard
      ? '<a href="index.html" class="user-bar-btn"><span class="settings-btn-icon">🏠</span> Ana Sayfa</a>'
      : '<a href="dashboard.html" class="user-bar-btn"><span class="settings-btn-icon">📊</span> Panelim</a>';

    const lbBtn = isLeaderboard
      ? ''
      : '<a href="leaderboard.html" class="user-bar-btn"><span class="settings-btn-icon">🥇</span> Skor</a>';

    const profileBtn = isProfile
      ? ''
      : '<a href="profile.html?id=' + user.id + '" class="user-bar-btn"><span class="settings-btn-icon">👤</span> Profilim</a>';

    let displayName = user.username || 'Bilinmeyen Kullanıcı';
    let styleStr = user.name_style ? `font-family: ${user.name_style};` : '';

    userBar.innerHTML = `
      <div class="user-greeting">
         👋 <span style="${styleStr} font-size: 1.05rem;">${escapeHtmlAuth(displayName)}</span>
      </div>
      ${lbBtn}
      ${profileBtn}
      ${mainActionBtn}
      <a href="settings.html" class="user-bar-btn"><span class="settings-btn-icon">⚙️</span> Ayarlar</a>
    `;
    userBar.classList.add('logged-in');
  } else {
    userBar.innerHTML = `
      <a href="leaderboard.html" class="user-bar-btn">🏅 Skor</a>
      <a href="login.html" class="user-bar-btn login-link">🔑 Giriş Yap</a>
    `;
    userBar.classList.remove('logged-in');
  }
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
