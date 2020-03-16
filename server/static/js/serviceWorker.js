const CACHE_NAME = 'total-rickall-cache-v1'
const urlsToCache = [
    '/',
    '../css/styles.css'
]

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache){
                console.log('Opened cache')
                return cache.addAll(urlsToCache)
            })
    )
  });