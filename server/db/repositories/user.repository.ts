import { prisma } from '../prisma'
import type { User } from '@prisma/client'

export const userRepository = {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } })
  },

  async create(data: {
    name: string
    email: string
    password: string
  }): Promise<User> {
    return prisma.user.create({ data })
  },

  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } })
  },
}