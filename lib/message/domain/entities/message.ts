import { z } from 'zod';

// Define the Message interface
export interface Message {
    id: string;
    timestamp: Date;
    content: string;
    senderId: string;
    conversationId: string;
}


// Define the Zod schema for Message
export const MessageSchema = z.object({
    id: z.string().uuid(),
    content: z.string(),
    senderId: z.string(),
    conversationId: z.string(),
    timestamp: z.date().default(() => new Date()),
});

export interface MessageData {
    content: string;
    senderId: string;
    conversationId: string;
}

export const MessageDataSchema = z.object({
    content: z.string(),
    senderId: z.string(),
    conversationId: z.string(),
});