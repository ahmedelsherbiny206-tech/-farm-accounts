const CACHE_NAME = 'farm-accounts-v2';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => caches.delete(key)));
    })
  );
  self.clients.claim();
});

// Network Only - مش بنكاش حاجة عشان التطبيق يشتغل صح دايماً
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
