import { FastifyReply, FastifyRequest } from "fastify"

import { ZodError } from "zod"

import { AppError } from "../errors/app-error"

export async function errorHandler(
  error: any,
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      error: "Validation error",
      details: error.format()
    })
  }

  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      error: error.message
    })
  }

  console.error(error)

  return reply.status(500).send({
    error: "Internal server error"
  })
}