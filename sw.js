const CACHE_NAME = 'english-time-shell-v1';
const DATA_CACHE_NAME = 'english-time-data-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/quiz.html',
  '/login.html',
  '/dashboard.html',
  '/profile.html',
  '/settings.html',
  '/study.html',
  '/chat.html',
  '/inbox.html',
  '/o2.html',
  '/category.html',
  '/leaderboard.html',
  '/avatar-picker.html',
  '/chat-apply.html',
  '/css/global.css',
  '/css/components.css',
  '/css/dashboard.css',
  '/css/theme-light.css',
  '/css/auth.css',
  '/css/chat.css',
  '/css/inbox.css',
  '/css/leaderboard.css',
  '/css/o2.css',
  '/css/profile.css',
  '/css/quiz.css',
  '/css/settings.css',
  '/css/style.css',
  '/js/activity-log.js',
  '/js/app.js',
  '/js/auth.js',
  '/js/avatars.js',
  '/js/chat-apply.js',
  '/js/chat.js',
  '/js/inbox.js',
  '/js/o2-engine.js',
  '/js/optimize.js',
  '/js/profanity.js',
  '/js/quiz.js',
  '/js/supabase-config.js',
  '/js/theme.js',
  '/js/offline-sync.js',
  '/manifest.json',
  '/icons/icon.svg',
  // Supabase CDN Library
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
  // Pre-cached vocab files for initial offline availability
  '/js/words-a2.js',
  '/js/words-a2-saatler-full.js',
  '/js/o2-data.js'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Pre-caching App Shell');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event listener
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET requests, Supabase API calls, and real-time chat socket/APIs
  if (event.request.method !== 'GET' || url.hostname.includes('supabase.co')) {
    return;
  }

  // Strategy 1: Network-First for vocabulary data files (dynamic A2/B1/B2 updates)
  const isVocabFile = url.pathname.includes('/js/words-') || url.pathname.includes('/js/o2-data.js');
  
  if (isVocabFile) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DATA_CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Offline fallback
          return caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If not found in DATA_CACHE, try STATIC_ASSETS cache
            return caches.match(url.pathname);
          });
        })
    );
    return;
  }

  // Strategy 2: Cache-First with Network fallback (Stale-While-Revalidate) for static assets
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Serve from cache, but fetch in background to refresh cache in case of updates
        fetch(event.request).then(networkResponse => {
          if (networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => { /* Ignore background fetch errors */ });

        return cachedResponse;
      }

      // If not in cache, fetch from network and dynamically cache
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200) {
          return response;
        }
        
        // Check if response is cacheable (basic same-origin or jsdelivr CDN files)
        const isCacheable = response.type === 'basic' || (response.type === 'cors' && url.hostname.includes('cdn.jsdelivr.net'));
        if (!isCacheable) {
          return response;
        }

        // Don't cache admin pages or avatars dynamically
        if (url.pathname.includes('admin-') || url.pathname.includes('/avatars/')) {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
