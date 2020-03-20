const CORE_CACHE = 1
const CACHE_NAME = `core-cache-v${CORE_CACHE}`

const urlsToCache = [
    '/',
    '/offline',
    '/css/styles.css'
]

self.addEventListener('install', (event) => {
    console.log('Service worker install event!');
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return cache.addAll(urlsToCache).then(() => self.skipWaiting);
        })
    );
  });

  self.addEventListener('activate', (event) => {
    console.log('Servive worker activated!')
    event.waitUntil(clients.claim())
  })

  self.addEventListener('fetch', (event) => {
    console.log('Fetch event: ', event.request)

    if(request.method === 'GET'){
      fetch(request).catch((error) => {
        console.error
      })
    }

    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request)
      })
    )

  })
