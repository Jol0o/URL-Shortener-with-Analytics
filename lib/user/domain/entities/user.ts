import { z } from 'zod';

// Define the User interface
export interface User {
    id: string;
    username: string;
    email: string;
    avatar: string;
    userId: string;
}

// Define the Zod schema for User
export const UserSchema = z.object({
    id: z.string().uuid(),
    username: z.string(),
    email: z.string().email(),
    avatar: z.string().url(),
    userId: z.string().uuid(),
});
