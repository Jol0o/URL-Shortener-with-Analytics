"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus } from "lucide-react"
import { Conversation } from "@/lib/chat/domain/entities/chat"
import { useRouter } from "next/navigation"
import { registerServiceWorker } from "@/lib/notification/notification"
import { subscribeToPushNotifications } from "@/serviceWorker"

interface SidebarProps {
    data: Conversation[];
}

export default  function Sidebar({ data }: SidebarProps) {
    const [search, setSearch] = useState("")
    const router = useRouter()
    
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

    return (
        <aside className="w-64 bg-gray-100 border-r border-gray-200 flex flex-col">
            <div className="p-4">
                <div className="flex items-center mb-4">
                    <Input
                        type="text"
                        placeholder="Search conversations"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 mr-2"
                    />
                    <Button size="icon" variant="ghost">
                        <Search className="h-4 w-4" />
                    </Button>
                </div>
                <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> New Chat
                </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
                {data.map((conversation) => (
                    <div key={conversation.id} onClick={() => router.push(`/chat/${conversation.id}`)} className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
                        <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={conversation.avatar} alt={conversation.name} />
                            <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-sm font-medium text-gray-900 truncate">{conversation.name}</h3>
                                <span className="text-xs text-gray-500">{conversation.timestamp.toLocaleString()}</span>
                            </div>
                            <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}