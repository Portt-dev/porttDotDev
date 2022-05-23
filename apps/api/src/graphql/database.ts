import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Database {
  prisma: PrismaClient
}

export const database: Database = {
  prisma: prisma,
}
