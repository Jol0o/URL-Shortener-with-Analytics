import { z } from 'zod';

// Define the Conversation interface
export interface Conversation {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: Date;
}

// Define the User interface
export interface User {
    id: string;
    userId: string;
    username: string;
    email: string;
    avatar: string;
    created_at: Date;
    updated_at: Date;
}

// Define the Conversation interface
export interface ConversationData {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: Date;
    users: User[];
}

// Define the Zod schema for User
export const UserSchema = z.object({
    id: z.string().uuid(),
    userId: z.string(),
    username: z.string(),
    email: z.string().email(),
    avatar: z.string().url(),
    created_at: z.date(),
    updated_at: z.date(),
});

// Define the Zod schema for Conversation
export const ConversationSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    avatar: z.string().url(),
    lastMessage: z.string().optional(),
    timestamp: z.date().default(() => new Date()),
    users: z.array(UserSchema),
});