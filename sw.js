const CACHE = 'dpnc-trails-v2';
const ASSETS = [
  '/dpnc-trail-map/',
  '/dpnc-trail-map/index.html',
  '/dpnc-trail-map/manifest.json',
  '/dpnc-trail-map/icon-192.svg',
  '/dpnc-trail-map/icon-512.svg',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Lora:ital,wght@0,500;1,400&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(cache => cache.put(e.request, clone));
      return res;
    }).catch(() => caches.match('/dpnc-trail-map/index.html')))
  );
});
