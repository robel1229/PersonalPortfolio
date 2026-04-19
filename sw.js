// This is the service worker (sw.js)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // This allows the app to be "installable"
  event.respondWith(fetch(event.request));
});
