// Minimal service worker so Chrome Android offers full "Install app" (WebAPK)
const CACHE = 'trade-journal-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo192.png',
  './logo512.png',
  './logo-mono.png',
  './hero-bull.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Required for Chrome Android installability criteria
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        // Optionally cache new responses; keep it simple
        return response;
      }).catch(() => cached);
    })
  );
});
