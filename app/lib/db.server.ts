import { PrismaClient } from '@prisma/client'
// import { PrismaClient } from '@prisma/client/edge' // Use for edge functions
import { withAccelerate } from '@prisma/extension-accelerate';

function makePrisma() {
  return new PrismaClient().$extends(withAccelerate())
}

const globalForPrisma = global as unknown as {
  prisma: ReturnType<typeof makePrisma>
};

export const db = globalForPrisma.prisma ?? makePrisma()

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = makePrisma()