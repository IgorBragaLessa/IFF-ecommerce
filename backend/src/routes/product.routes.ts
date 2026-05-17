import { FastifyInstance } from "fastify"

import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct
} from "../controllers/product.controller"

export async function productRoutes(app: FastifyInstance) {
  app.post("/products", createProduct)

  app.get("/products", getProducts)

  app.get("/products/:id", getProductById)

  app.put("/products/:id", updateProduct)

  app.delete("/products/:id", deleteProduct)
}