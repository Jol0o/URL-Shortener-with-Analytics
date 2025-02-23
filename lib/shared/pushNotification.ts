import { registerServiceWorker } from "../notification/notification";
import { subscribeToPushNotifications } from '@/serviceWorker';

export const PushNotification = async (title: string, message: string) => {
    try {
        // 1. Register Service Worker
        const registration = await registerServiceWorker();
        if (!registration) {
            console.error('No registration');
            return;
        }
        console.log('SW Registered:', registration);

        // 2. Subscribe to Push
        const subscription = await subscribeToPushNotifications(registration);
        if (!subscription) {
            console.error('No subscription');
            return;
        }
        console.log('Push Subscription:', subscription);

        // 3. Send Test Notification
        const response = await fetch('/api/send-push', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subscription,
                message: {
                    title,
                    body: message
                }
            })
        });

        const result = await response.json();
        console.log('Push Result:', result);
    } catch (error) {
        console.error('Notification Error:', error);
    }
};
