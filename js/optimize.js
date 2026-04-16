// Network Optimization / Hız Yönetimi Modülü

function checkNetworkStatus() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!connection) return 'Bilinmiyor';

  // connection.effectiveType: 'slow-2g', '2g', '3g', or '4g'
  const isSlow = ['slow-2g', '2g', '3g'].includes(connection.effectiveType);

  if (isSlow) {
    document.body.classList.add('low-bandwidth');
  } else {
    document.body.classList.remove('low-bandwidth');
  }

  // Ayarlar sayfası elementleri varsa güncelle
  const networkEl = document.getElementById('network-status-text');
  if (networkEl) {
    let typeName = connection.effectiveType.toUpperCase();
    
    if (isSlow) {
      networkEl.innerHTML = `<span style="color: var(--accent-orange)">Zayıf Bağlantı (${typeName}) - Hızlı mod devrede.</span>`;
    } else {
      networkEl.innerHTML = `<span style="color: var(--accent-green)">Hızlı Bağlantı (${typeName}) - Tam performans.</span>`;
    }
  }

  return connection.effectiveType;
}

document.addEventListener('DOMContentLoaded', () => {
  checkNetworkStatus();
  
  if (navigator.connection) {
    navigator.connection.addEventListener('change', checkNetworkStatus);
  }
});
