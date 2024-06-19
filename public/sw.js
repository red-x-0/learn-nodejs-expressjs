// Install event: Cache files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache').then(function(cache) {
      return cache.addAll([
        'icon.png',
      ]).catch(function(error) {
        console.error('Failed to cache:', error);
      });
    })
  );
  console.log('Service Worker: Installed');
});

// Fetch event: Serve from cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
