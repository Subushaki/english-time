// ===== THEME ENGINE =====
// Aydınlık ve Karanlık mod geçişini yönetir ve localStorage a kaydeder.
// FOUC (Flash of Unstyled Content) engellemek için JS scripti head de çalışmalıdır.

(function() {
  const savedTheme = localStorage.getItem('theme');
  
  // Eğer daha önce kaydedildiyse veya sistem ayarına bakılabiliyorsa
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    // Platformun temeli dark moda dayandığı için varsayılan Dark
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  // Toggle Function
  window.toggleTheme = function() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    
    // UI İkonlarını güncellemek için event fırlat
    window.dispatchEvent(new Event('themeChanged'));
  };

  window.addEventListener('themeChanged', function() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const tb = document.getElementById('theme-toggle-desktop');
    if(tb) tb.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';
    const tbm = document.getElementById('theme-toggle-mobile');
    if(tbm) {
      tbm.querySelector('.burger-nav-icon').textContent = currentTheme === 'light' ? '🌙' : '☀️';
      const textSpan = tbm.querySelector('.theme-text-span');
      if (textSpan) textSpan.textContent = currentTheme === 'light' ? 'Karanlık Mod' : 'Aydınlık Mod';
    }
  });

})();
