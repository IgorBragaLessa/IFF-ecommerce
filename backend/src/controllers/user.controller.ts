import { FastifyReply, FastifyRequest } from "fastify"

import { UserService } from "../services/user.service"

import {
  createUserSchema,
  updateUserSchema
} from "../schemas/user.schema"

const userService = new UserService()

export async function createUser(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const data = createUserSchema.parse(request.body)

  const user = await userService.create(data)

  return reply.status(201).send(user)
}

export async function getUsers(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const users = await userService.findAll()

  return reply.send(users)
}

export async function getUserById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params

  const user = await userService.findById(id)

  return reply.send(user)
}

export async function updateUser(
  request: FastifyRequest<{
    Params: { id: string }
  }>,
  reply: FastifyReply
) {
  const { id } = request.params

  const data = updateUserSchema.parse(request.body)

  const user = await userService.update(id, data)

  return reply.send(user)
}

export async function deleteUser(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params

  await userService.delete(id)

  return reply.status(204).send()
}