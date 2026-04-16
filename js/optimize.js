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

// ===== ENGLISH TIME CUSTOM ANALYTICS TRACKER =====
let pageVisitId = null;
let pageStartTime = Date.now();

async function trackPageVisit() {
  const sb = typeof getSupabase === 'function' ? getSupabase() : null;
  if (!sb) return;
  
  let userId = null;
  try {
    const stored = localStorage.getItem('english_time_user');
    if (stored) {
      const u = JSON.parse(stored);
      userId = u.id;
    }
  } catch(e) {}
  
  const conn = navigator.connection || {};
  const payload = {
    path: window.location.pathname.split('/').pop() || 'index.html',
    user_id: userId,
    device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobil' : 'Masaüstü',
    os: getOS(),
    browser: getBrowser(),
    connection_speed: conn.effectiveType || 'Bilinmiyor',
    load_time_ms: 0,
    time_spent_ms: 0,
    country: 'Bilinmiyor'
  };
  
  window.addEventListener('load', async () => {
    setTimeout(async () => {
       const [entry] = performance.getEntriesByType("navigation");
       if (entry) {
         payload.load_time_ms = Math.round(entry.duration);
       }
       
       // Saniyeler icinde hemen ilk Analytics verisini veritabanina gonderelim ki sayfa hizli kapansa da kayip yasanmasin.
       const { data, error } = await sb.from('site_analytics').insert(payload).select('id').single();
       if (error) {
           console.error("⛔ ANALYTICS RLS VEYA KAYIT HATASI:", error);
       }
       if (data) {
           pageVisitId = data.id;
           
           // CORS ve kısıtlamalara (429 Hatası) takılmamak için sınırsız, açık kaynak IP servisi kullanıldı.
           fetch('https://get.geojs.io/v1/ip/country.json')
             .then(res => res.json())
             .then(ipData => {
                if (ipData && ipData.name) {
                   // geoJS "Turkey, United States, Germany vb." İngilizce formatta ülkeyi (ipData.name) yollar.
                   sb.from('site_analytics').update({ country: ipData.name }).eq('id', pageVisitId).then();
                }
             }).catch(() => {});
       }
    }, 100);
  });
}

function getOS() {
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return 'Windows';
  if (/Mac/i.test(ua)) return 'MacOS';
  if (/Linux/i.test(ua)) return 'Linux';
  if (/Android/i.test(ua)) return 'Android';
  if (/iOS|iPhone|iPad/i.test(ua)) return 'iOS';
  return 'Unknown';
}

function getBrowser() {
  const ua = navigator.userAgent;
  if (/Chrome|CriOS/i.test(ua) && !/Edge|Edg|OPR|Opera/i.test(ua)) return 'Chrome';
  if (/Safari/i.test(ua) && !/Chrome|CriOS/i.test(ua)) return 'Safari';
  if (/Firefox|FxiOS/i.test(ua)) return 'Firefox';
  if (/Edge|Edg/i.test(ua)) return 'Edge';
  if (/OPR|Opera/i.test(ua)) return 'Opera';
  return 'Unknown';
}

function updateTimeSpent() {
  if (!pageVisitId) return;
  const sb = typeof getSupabase === 'function' ? getSupabase() : null;
  if (!sb) return;
  const timeSpent = Date.now() - pageStartTime;
  sb.from('site_analytics').update({ time_spent_ms: timeSpent }).eq('id', pageVisitId).then();
}

setInterval(() => {
  if (document.visibilityState === 'visible') updateTimeSpent();
}, 10000);

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') updateTimeSpent();
});
window.addEventListener('beforeunload', () => updateTimeSpent());

function initTracker() {
  if (typeof getSupabase === 'function') {
    trackPageVisit();
  } else {
    // Supabase kutuphanesi CDN'den henuz inmediyse her 300ms'de bir tekrar dene
    setTimeout(initTracker, 300);
  }
}

document.addEventListener('DOMContentLoaded', () => {
   initTracker();
});
