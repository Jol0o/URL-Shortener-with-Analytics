import { z } from "zod";

const envSchema = z.object({
    CLERK_PUBLISHABLE_KEY: z.string().nonempty(),
    CLERK_SECRET_KEY: z.string().nonempty(),
    DATABASE_URL: z.string().nonempty(),
    DATABASE_URL_UNPOOLED: z.string().nonempty(),
    PGHOST: z.string().nonempty(),
    PGHOST_UNPOOLED: z.string().nonempty(),
    PGUSER: z.string().nonempty(),
    PGDATABASE: z.string().nonempty(),
    PGPASSWORD: z.string().nonempty(),
    POSTGRES_URL: z.string().nonempty(),
    POSTGRES_URL_NON_POOLING: z.string().nonempty(),
    POSTGRES_USER: z.string().nonempty(),
    POSTGRES_HOST: z.string().nonempty(),
    POSTGRES_PASSWORD: z.string().nonempty(),
    POSTGRES_DATABASE: z.string().nonempty(),
    POSTGRES_URL_NO_SSL: z.string().nonempty(),
    POSTGRES_PRISMA_URL: z.string().nonempty(),
    SIGNING_SECRET: z.string().nonempty(),
});

const env = envSchema.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> { }
    }
}

export type IEnv = z.infer<typeof envSchema>;
export default env;