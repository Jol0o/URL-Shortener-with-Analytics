import type React from "react"
import Sidebar from "@/components/chat/Sidebar"
import { currentUser } from "@clerk/nextjs/server";
import { conversationfetchAllConversationAction } from "@/lib/chat/application/controllers/conversation.fetch-all-conversation.action";
import { Conversation } from './../../lib/chat/domain/entities/chat';

export default async function ChatLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await currentUser(); 
    let conversation = [] as Conversation[];
    
    try {
        if (user) {
            const { data } = await conversationfetchAllConversationAction(user.id);
            // console.log(data);
            if (data) {
                conversation = data;
            }
        } else {
            console.error("No user found");
        }
    } catch (e) {
        console.error("Error fetching conversations:", e)
    }

    return (
        <div className="flex h-screen">
            <Sidebar data={conversation} />
            <main className="flex-1">{children}</main>
        </div>
    )
}