"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Smile, Paperclip, Send } from "lucide-react"
import { messageCreateMessageAction } from "@/lib/message/application/controllers/message.create-message.action"
import { Message } from "@/lib/message/domain/entities/message"

interface MessageInputProps {
    userId: string;
    conversationId: string;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>; // Ensure correct type
}

export default function MessageInput({ userId, conversationId, setMessages }: MessageInputProps) {
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!message.trim()) return;

        const messageData = {
            content: message,
            conversationId,
            senderId: userId
        };

        try {
            const { data, error } = await messageCreateMessageAction(messageData);

            console.log("API Response:", data); // Debugging API response

            if (data && Array.isArray(data)) {
                const newMessages: Message[] = data.map(msg => ({
                    id: msg.id,
                    timestamp: new Date(msg.timestamp),
                    content: msg.content,
                    senderId: msg.senderId,
                    conversationId: msg.conversationId,
                }));

                setMessages((prevMessages) => [...prevMessages, ...newMessages]);
            } else {
                console.error("Error:", error);
            }

        } catch (err) {
            console.error("Error sending message:", err);
        } finally {
            setMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-2">
                <Button type="button" size="icon" variant="ghost">
                    <Smile className="h-5 w-5" />
                </Button>
                <Button type="button" size="icon" variant="ghost">
                    <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                    type="text"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                />
                <Button type="submit" size="icon">
                    <Send className="h-5 w-5" />
                </Button>
            </div>
        </form>
    )
}