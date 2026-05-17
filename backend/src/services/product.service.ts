import { AppError } from "../errors/app-error"

import { ProductRepository } from "../repositories/product.repository"

import {
  CreateProductDTO,
  UpdateProductDTO
} from "../schemas/product.schema"

export class ProductService {
  private repository = new ProductRepository()

  async create(data: CreateProductDTO) {
    return this.repository.create(data)
  }

  async findAll() {
    return this.repository.findAll()
  }

  async findById(id: string) {
    const product = await this.repository.findById(id)

    if (!product) {
      throw new AppError("Produto não encontrado", 404)
    }

    return product
  }

  async update(id: string, data: UpdateProductDTO) {
    await this.findById(id)

    return this.repository.update(id, data)
  }

  async delete(id: string) {
    await this.findById(id)

    await this.repository.delete(id)
  }
}