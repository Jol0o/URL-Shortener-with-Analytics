'use client'
import { conversationFetchLatestConversationAction } from "@/lib/chat/application/controllers/conversation.fetch-latest-conversation.action";
import { registerServiceWorker } from "@/lib/notification/notification";
import { PushNotification } from "@/lib/shared/pushNotification";
import { supabase } from "@/lib/supabase/supabase.client";
import { subscribeToPushNotifications } from "@/serviceWorker";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function NotificationSetup() {
    const { user: currentUser } = useUser();

    useEffect(() => {
        if (!currentUser) return;

        const setupNotifications = async () => {
            try {
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

                const registration = await registerServiceWorker();
                if (!registration) {
                    console.error('Failed to register service worker');
                    return;
                }

                const subscription = await subscribeToPushNotifications(registration);
                if (!subscription) {
                    console.error('Failed to get push subscription');
                    return;
                }

                localStorage.setItem('pushSubscription', JSON.stringify(subscription));
                console.log('Push notifications setup complete');

                const { data } = await conversationFetchLatestConversationAction();

                console.log('Conversation Data', data);
                
                const channel = supabase.channel('messages', {
                    config: {
                        broadcast: { self: true },
                    }
                });

                const supabaseSubscription = channel
                    .on(
                        'postgres_changes',
                        {
                            event: '*',
                            schema: 'public',
                            table: 'Message',
                        },
                        async () => {
                            const { data: conversationData } = await conversationFetchLatestConversationAction();
                            if (!conversationData) return;
                            const lastMessage = conversationData.messages.slice(-1)[0];
                            const otherUsers = conversationData.users.filter(user => user.userId !== currentUser.id);
                            console.log(lastMessage, otherUsers);
                            if (otherUsers.length > 0 && lastMessage && lastMessage.senderId !== currentUser.id && !document.hasFocus()) {
                                otherUsers.forEach(user => {
                                    PushNotification(user.username, lastMessage.content);
                                });
                            }
                        }
                    )
                    .subscribe();

                return () => {
                    supabaseSubscription.unsubscribe();
                };

            } catch (error) {
                console.error('Push notification setup failed:', error);
            }
        };

        setupNotifications();

        return () => {
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

    }, [currentUser]);

    return null;
}