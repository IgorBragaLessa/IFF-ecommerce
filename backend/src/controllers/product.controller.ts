import { FastifyReply, FastifyRequest } from "fastify"

import { ProductService } from "../services/product.service"

import {
  createProductSchema,
  updateProductSchema
} from "../schemas/product.schema"

const productService = new ProductService()

export async function createProduct(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const data = createProductSchema.parse(request.body)

  const product = await productService.create(data)

  return reply.status(201).send(product)
}

export async function getProducts(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const products = await productService.findAll()

  return reply.send(products)
}

export async function getProductById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params

  const product = await productService.findById(id)

  return reply.send(product)
}

export async function updateProduct(
  request: FastifyRequest<{
    Params: { id: string }
  }>,
  reply: FastifyReply
) {
  const { id } = request.params

  const data = updateProductSchema.parse(request.body)

  const product = await productService.update(id, data)

  return reply.send(product)
}

export async function deleteProduct(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params

  await productService.delete(id)

  return reply.status(204).send()
}