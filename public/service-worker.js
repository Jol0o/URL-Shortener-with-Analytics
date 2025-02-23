self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    event.waitUntil(clients.claim());
});

self.addEventListener('push', function (event) {
    console.log('Push event received:', event.data?.text());
    const data = JSON.parse(event.data.text());
    console.log('Push data:', data);
    
    const options = {
        body: data.body || 'New message received',
        icon: '/icon.png',  // Add your icon path
        badge: '/badge.png',  // Add your badge path
        vibrate: [100, 50, 100],
        requireInteraction: true, // Keep notification visible
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title , options)
        .then(() => console.log('Notification shown'))
        .catch(error => console.error('Notification error:', error))
    );
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});