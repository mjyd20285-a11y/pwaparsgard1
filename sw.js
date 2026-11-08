self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // این بخش برای اینکه مرورگر متوجه شود سرویس ورکر فعال است ضروری است
    event.respondWith(fetch(event.request));
});