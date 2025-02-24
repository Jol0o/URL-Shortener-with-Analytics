
'use client'
import { registerServiceWorker } from "@/lib/notification/notification";
import { subscribeToPushNotifications } from "@/serviceWorker";
import { useEffect } from "react";

export default function NotificationSetup() {
    useEffect(() => {
        const setupNotifications = async () => {
            try {
                // Check notification permission first
                if (!('Notification' in window)) {
                    console.log('Notifications not supported');
                    return;
                }

                let permission = Notification.permission;
                if (permission === 'default') {
                    permission = await Notification.requestPermission();
                }

                if (permission !== 'granted') {
                    console.log('Notification permission denied');
                    return;
                }

                // Register service worker
                const registration = await registerServiceWorker();
                if (!registration) {
                    console.error('Failed to register service worker');
                    return;
                }

                // Get push subscription
                const subscription = await subscribeToPushNotifications(registration);
                if (!subscription) {
                    console.error('Failed to get push subscription');
                    return;
                }

                // Save subscription
                localStorage.setItem('pushSubscription', JSON.stringify(subscription));
                console.log('Push notifications setup complete');

            } catch (error) {
                console.error('Push notification setup failed:', error);
            }
        };

        setupNotifications();


        // Cleanup
        return () => {

            // Clean up push subscription
            const subscription = localStorage.getItem('pushSubscription');
            if (subscription) {
                try {
                    JSON.parse(subscription)?.unsubscribe?.();
                    localStorage.removeItem('pushSubscription');
                } catch (error) {
                    console.error('Failed to unsubscribe:', error);
                }
            }
        };

    }, []);
    return null
}