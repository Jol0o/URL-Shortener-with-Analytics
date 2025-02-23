'use client'

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { User } from "@/lib/user/domain/entities/user";
import { conversationCreateNewConversationAction } from "@/lib/chat/application/controllers/conversation.create-new-conversation.action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { requestNotificationPermission, subscribeToPush } from "@/lib/notification/notification";
import { registerServiceWorker } from "@/serviceWorker";


interface UserGridProps {
    data: User[];
    id: string;
}

export default function UserGrid({ data, id }: UserGridProps) {
    const route = useRouter()

    const handleMessage = async (item: User) => {
        try {
            if (item) {
                const { avatar, username, userId } = item;
                const userIds = [userId, id]; // Pass as an array
                const { data } = await conversationCreateNewConversationAction(username, avatar, userIds);
                if (data && data.id) {
                    route.push(`/chat/${data.id}`);
                }
            }
        } catch (err) {
            console.error("Error creating conversation:", err);
        }
    };

    useEffect(() => {
        const setupNotifications = async () => {
            const permissionGranted = await requestNotificationPermission();
            if (!permissionGranted) return;

            const swRegistration = await registerServiceWorker();
            if (!swRegistration) return;

            const pushSubscription = await subscribeToPush(swRegistration);
            if (pushSubscription) {
                console.log("Push subscription successful:", pushSubscription);
                // Save subscription to your backend
                // Use it for sending notifications
            }
        };

        setupNotifications();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((user) => (
                <Card key={user.id} className="flex flex-col justify-between">
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center">
                            <Avatar className="h-24 w-24 mb-4">
                                <AvatarImage src={user.avatar} alt={user.username} />
                                <AvatarFallback>{user.username[0]}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-xl font-semibold mb-2">{user.username}</h2>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={() => handleMessage(user)}>
                            <MessageSquare className="mr-2 h-4 w-4" /> Chat Now
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}