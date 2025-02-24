self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    event.waitUntil(clients.claim());
});


// this will handle the  background sync for offline messages
self.addEventListener('sync', (event) => {
    if (event.tag === 'messages-sync') {
        event.waitUntil(syncMessages());
    }
});

self.addEventListener('push', (event) => {
    const options = {
        body: event.data?.text() || 'New message',
        icon: '/icon-192x192.png',
        badge: '/icon-192x192.png',
        vibrate: [100, 50, 100],
        data: {
            url: '/chat' // URL to open when notification is clicked
        },
        actions: [
            {
                action: 'open',
                title: 'Open Chat'
            },
            {
                action: 'close',
                title: 'Dismiss'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('New Message', options)
    );
});


self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'open' || !event.action) {
        event.waitUntil(
            clients.matchAll({ type: 'window', includeUncontrolled: true })
                .then((clientList) => {
                    if (clientList.length > 0) {
                        return clientList[0].focus();
                    }
                    return clients.openWindow('/chat');
                })
        );
    }
});

// Keep service worker alive
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'KEEP_ALIVE') {
        // Respond to keep-alive ping
        event.ports[0].postMessage('ALIVE');
    }
});