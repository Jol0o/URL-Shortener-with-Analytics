import { z } from "zod";

// Define environment schema
const envSchema = z.object({
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().nonempty("Missing Clerk publishable key"),
    CLERK_SECRET_KEY: z.string().nonempty("Missing Clerk secret key"),
    DATABASE_URL: z.string().nonempty("Missing database URL"),
    DIRECT_URL: z.string().nonempty("Missing direct URL"),
    POSTGRES_PRISMA_URL: z.string().nonempty("Missing Postgres Prisma URL"),
    SUPABASE_URL: z.string().nonempty("Missing Supabase URL"),
    NEXT_PUBLIC_SUPABASE_URL: z.string().nonempty("Missing Supabase public URL"),
    POSTGRES_URL_NON_POOLING: z.string().nonempty("Missing Postgres non-pooling URL"),
    SUPABASE_JWT_SECRET: z.string().nonempty("Missing Supabase JWT secret"),
    POSTGRES_USER: z.string().nonempty("Missing Postgres user"),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().nonempty("Missing Supabase anon key"),
    POSTGRES_PASSWORD: z.string().nonempty("Missing Postgres password"),
    POSTGRES_DATABASE: z.string().nonempty("Missing Postgres database"),
    SUPABASE_SERVICE_ROLE_KEY: z.string().nonempty("Missing Supabase service role key"),
    POSTGRES_HOST: z.string().nonempty("Missing Postgres host"),
});

// Validate and parse environment variables
const env = envSchema.safeParse(process.env);

if (!env.success) {
    console.error("❌ Environment variables validation failed", env.error.format());
    throw new Error("Invalid environment configuration. Please check your .env file.");
}

// Type definition for environment variables
declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> { }
    }
}

export type IEnv = z.infer<typeof envSchema>;
export default env.data;