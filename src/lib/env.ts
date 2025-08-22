// src/lib/env.ts
import { z } from "zod";

const schema = z.object({
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url().optional(),
  RESEND_API_KEY: z.string().optional(),
  NEXT_PUBLIC_BASE_URL: z.string().url().optional(),
  NODE_ENV: z.enum(["development","test","production"]).default("development"),
});

let _env: z.infer<typeof schema> | null = null;

export function getEnv() {
  if (_env) return _env;
  const parsed = schema.safeParse({
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  });
  if (!parsed.success) {
    const pretty = JSON.stringify(parsed.error.flatten().fieldErrors, null, 2);
    throw new Error(`Invalid env. Fix variables.\n${pretty}`);
  }
  _env = parsed.data;
  return _env;
}

export function validateEnv() {
  const requiredEnvVars = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  };

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}
  
  



