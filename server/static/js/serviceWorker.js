const CACHE_NAME = 'total-rickall-cache-v1'
const urlsToCache = [
    '/',
    '/css/styles.css'
]

self.addEventListener('install', (event) => {
    console.log('Service worker install event!');
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return cache.addAll(urlsToCache);
        })
    );
  });

  self.addEventListener('activate', (event) => {
    console.log('Servive worker activated!')
  })

  self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(caches.match(event.request)
      .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request);
        })
      );
  });