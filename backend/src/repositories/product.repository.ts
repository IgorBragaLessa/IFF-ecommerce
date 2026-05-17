import { prisma } from "../config/prisma"

import {
  CreateProductDTO,
  UpdateProductDTO
} from "../schemas/product.schema"

export class ProductRepository {
  async create(data: CreateProductDTO) {
    return prisma.product.create({
      data
    })
  }

  async findAll() {
    return prisma.product.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }

  async findById(id: string) {
    return prisma.product.findUnique({
      where: { id }
    })
  }

  async update(id: string, data: UpdateProductDTO) {
    return prisma.product.update({
      where: { id },
      data
    })
  }

  async delete(id: string) {
    return prisma.product.delete({
      where: { id }
    })
  }
}