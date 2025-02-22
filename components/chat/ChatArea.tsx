"use client"

import { useEffect, useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Message } from "@/lib/message/domain/entities/message";
import MessageInput from "./MessageInput";
import { supabase } from "@/lib/supabase/supabase.client";
import { conversationfetchConversationByIdAction } from "@/lib/chat/application/controllers/conversation.fetch-conversation-by-id.action";

interface ChatAreaProps {
    data: {
        messages: Message[];
        userId: string;
    },
    conversationId: string;
}

export default function ChatArea({ data, conversationId }: ChatAreaProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const [messages, setMessages] = useState<Message[]>(data.messages);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        setMessages(data.messages);

        // Create channel with auth
        const channel = supabase.channel('messages', {
            config: {
                broadcast: { self: true },
                presence: { key: data.userId },
            }
        });

        const subscription = channel
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'Message',
                },
                async () => {
                    const { data } = await conversationfetchConversationByIdAction(conversationId);
                    if (!data) return
                    setMessages(data.messages);
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, [data.messages, conversationId, data.userId]);

    useEffect(scrollToBottom, [messages])

    return (
        <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages && messages.map((message) => (
                    <div key={message.id} className={`flex ${message.senderId === data.userId ? "justify-end" : "justify-start"}`}>
                        <div className={`flex ${message.senderId === data.userId ? "flex-row-reverse" : "flex-row"} items-end`}>
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" alt={message.senderId || 'user'} />
                                <AvatarFallback>
                                    {message.senderId ? message.senderId[0].toUpperCase() : '?'}
                                </AvatarFallback>
                            </Avatar>
                            <div
                                className={`max-w-xs mx-2 p-3 rounded-lg ${message.senderId === data.userId ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                            >
                                <p>{message.content}</p>
                                <span className="text-xs text-gray-500 mt-1 block">
                                    {message.timestamp ? new Date(message.timestamp).toLocaleString() : ''}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <MessageInput userId={data.userId} conversationId={conversationId} />
        </>
    )
}