// Create this file at lib/notifications.ts
import { PushSubscription } from 'web-push';

export async function requestNotificationPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
        console.log('This browser does not support notifications');
        return false;
    }

    try {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    } catch (error) {
        console.error('Error requesting notification permission:', error);
        return false;
    }
}

export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
    if (!('serviceWorker' in navigator)) {
        console.log('Service workers are not supported');
        return null;
    }

    try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        return registration;
    } catch (error) {
        console.error('Service worker registration failed:', error);
        return null;
    }
}

export async function subscribeToPush(registration: ServiceWorkerRegistration): Promise<PushSubscription | null> {
    try {
        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
        });
        return subscription;
    } catch (error) {
        console.error('Push subscription failed:', error);
        return null;
    }
}