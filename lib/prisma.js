// prisma.js

import { PrismaClient } from "@/lib/generated/prisma"; // Adjust this path based on your setup

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
