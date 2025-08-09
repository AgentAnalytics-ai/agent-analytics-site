// src/lib/db.ts
import { PrismaClient } from "@prisma/client";

const g = globalThis as unknown as { prisma?: PrismaClient };

export function getPrisma() {
  if (g.prisma) return g.prisma;
  const prisma = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
  if (process.env.NODE_ENV !== "production") g.prisma = prisma;
  return prisma;
}
