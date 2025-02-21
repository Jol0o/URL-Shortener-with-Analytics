import { z } from 'zod';

// Define the Conversation interface
export interface Conversation {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: Date;
}

// Define the Zod schema for Conversation
export const ConversationSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    avatar: z.string().url(),
    lastMessage: z.string().optional(),
    timestamp: z.date().default(() => new Date()),
});
