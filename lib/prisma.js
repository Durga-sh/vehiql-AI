// prisma.js

import { PrismaClient } from "@/lib/generated/prisma"; // Adjust this path based on your setup

const globalForPrisma = globalThis;

/**
 * Prevent creating multiple instances of PrismaClient in development
 * to avoid exhausting database connections.
 */
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
