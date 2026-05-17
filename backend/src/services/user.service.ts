import { AppError } from "../errors/app-error"

import { UserRepository } from "../repositories/user.repository"

import {
  CreateUserDTO,
  UpdateUserDTO
} from "../schemas/user.schema"

export class UserService {
  private repository = new UserRepository()

  async create(data: CreateUserDTO) {
    const emailAlreadyExists =
      await this.repository.findByEmail(data.email)

    if (emailAlreadyExists) {
      throw new AppError("Email já cadastrado", 409)
    }

    return this.repository.create(data)
  }

  async findAll() {
    return this.repository.findAll()
  }

  async findById(id: string) {
    const user = await this.repository.findById(id)

    if (!user) {
      throw new AppError("Usuário não encontrado", 404)
    }

    return user
  }

  async update(id: string, data: UpdateUserDTO) {
    await this.findById(id)

    return this.repository.update(id, data)
  }

  async delete(id: string) {
    await this.findById(id)

    await this.repository.delete(id)
  }
}