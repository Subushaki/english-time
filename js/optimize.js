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

// ===== BOT / CRAWLER TESPİTİ =====
function isBot() {
  // 1) Headless browser kontrolü (Vercel build, Puppeteer, Playwright vb.)
  if (navigator.webdriver) return true;

  const ua = navigator.userAgent || '';

  // 2) Bilinen bot/crawler user-agent kalıpları
  const botPatterns = [
    /bot/i, /crawl/i, /spider/i, /slurp/i, /mediapartners/i,
    /Googlebot/i, /Bingbot/i, /Yahoo/i, /Baidu/i, /DuckDuckBot/i,
    /Yandex/i, /Sogou/i, /facebookexternalhit/i, /Twitterbot/i,
    /LinkedInBot/i, /WhatsApp/i, /Discordbot/i, /TelegramBot/i,
    /Vercel/i, /HeadlessChrome/i, /PhantomJS/i, /Lighthouse/i,
    /GTmetrix/i, /PageSpeed/i, /Pingdom/i, /UptimeRobot/i,
    /curl/i, /wget/i, /python-requests/i, /node-fetch/i, /axios/i,
    /Prerender/i, /Renderer/i, /Snap/i, /Bytespider/i, /SemrushBot/i,
    /AhrefsBot/i, /MJ12bot/i, /DotBot/i, /PetalBot/i
  ];
  if (botPatterns.some(p => p.test(ua))) return true;

  // 3) Gerçek ekran yoksa bot olma ihtimali yüksek
  if (!window.screen || window.screen.width === 0 || window.screen.height === 0) return true;

  // 4) User-agent tamamen boşsa
  if (ua.length < 20) return true;

  // 5) Headless Chrome eklenti kontrolü (gerçek tarayıcılarda plugins > 0)
  if (navigator.plugins && navigator.plugins.length === 0 && !/Mobi|Android|iPhone|iPad/i.test(ua)) return true;

  // 6) Linux OS + giriş yapmamış = büyük ihtimalle Vercel CDN/edge crawlerı
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) {
    try {
      const stored = localStorage.getItem('personel_notebook_user');
      if (!stored) return true; // Linux + giriş yok = bot
    } catch(e) { return true; }
  }

  return false;
}

// ===== Personel Notebook CUSTOM ANALYTICS TRACKER =====
let pageVisitId = null;
let pageStartTime = Date.now();
let trackingInitiated = false; // Çift kayıt önleme kilidi

async function trackPageVisit() {
  // Çift kayıt önleme: zaten başlatıldıysa tekrar çalıştırma
  if (trackingInitiated) return;
  trackingInitiated = true;

  // Bot ise izleme yapma
  if (isBot()) return;

  const sb = typeof getSupabase === 'function' ? getSupabase() : null;
  if (!sb) return;
  
  let userId = null;
  try {
    const stored = localStorage.getItem('personel_notebook_user');
    if (stored) {
      const u = JSON.parse(stored);
      userId = u.id;
    }
  } catch(e) {}
  
  const conn = navigator.connection || {};

  // Sayfa yüklenme süresini al
  let loadTime = 0;
  const [entry] = performance.getEntriesByType("navigation");
  if (entry) {
    loadTime = Math.round(entry.duration);
  }

  const payload = {
    path: window.location.pathname.split('/').pop() || 'index.html',
    user_id: userId,
    device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobil' : 'Masaüstü',
    os: getOS(),
    browser: getBrowser(),
    connection_speed: conn.effectiveType || 'Bilinmiyor',
    load_time_ms: loadTime,
    time_spent_ms: 0,
    country: 'Bilinmiyor'
  };
  
  try {
    const { data, error } = await sb.from('site_analytics').insert(payload).select('id').single();
    if (error) {
      console.error("⛔ ANALYTICS RLS VEYA KAYIT HATASI:", error);
      return;
    }
    if (data) {
      pageVisitId = data.id;
      
      // Ülke bilgisini arka planda güncelle
      fetch('https://get.geojs.io/v1/ip/country.json')
        .then(res => res.json())
        .then(ipData => {
           if (ipData && ipData.name) {
              sb.from('site_analytics').update({ country: ipData.name }).eq('id', pageVisitId).then();
           }
        }).catch(() => {});
    }
  } catch(e) { /* silent */ }
}

function getOS() {
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return 'Windows';
  if (/Mac/i.test(ua)) return 'MacOS';
  if (/Android/i.test(ua)) return 'Android';
  if (/iOS|iPhone|iPad/i.test(ua)) return 'iOS';
  if (/Linux/i.test(ua)) return 'Linux';
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

// Sayfa tamamen yüklendiğinde bir kez çalıştır
window.addEventListener('load', () => {
  setTimeout(() => {
    if (typeof getSupabase === 'function') {
      trackPageVisit();
      initPresenceHeartbeat();
    }
  }, 200);
});

// ===== ONLINE STATUS HEARTBEAT =====
let heartbeatInterval = null;

function initPresenceHeartbeat() {
  if (heartbeatInterval) return;
  if (isBot()) return;

  const sb = typeof getSupabase === 'function' ? getSupabase() : null;
  if (!sb) return;

  let userId = null;
  try {
    const stored = localStorage.getItem('personel_notebook_user');
    if (stored) userId = JSON.parse(stored).id;
  } catch(e) {}
  if (!userId) return;

  // İlk heartbeat hemen
  sendHeartbeat(sb, userId);

  // Her 30 saniyede bir güncelle
  heartbeatInterval = setInterval(() => {
    if (document.visibilityState === 'visible') {
      sendHeartbeat(sb, userId);
    }
  }, 30000);

  // Sayfa kapanırken son heartbeat
  window.addEventListener('beforeunload', () => sendHeartbeat(sb, userId));
}

function sendHeartbeat(sb, userId) {
  try {
    sb.from('profiles').update({ last_seen: new Date().toISOString() }).eq('id', userId).then();
  } catch(e) { /* silent */ }
}
