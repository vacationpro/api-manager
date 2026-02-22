const CACHE_NAME = 'api-manager-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icon.png',
    'https://unpkg.com/vue@3/dist/vue.global.js',
    'https://unpkg.com/echarts@5.4.3/dist/echarts.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
