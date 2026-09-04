// Minimal service worker — exists so browsers reliably offer the "Install"
// prompt on Android and desktop Chrome/Edge. It does not cache anything yet;
// every request just passes straight through to the network unchanged.
// Safe to leave exactly as-is — offline caching can be added later without
// touching anything else about the app.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
