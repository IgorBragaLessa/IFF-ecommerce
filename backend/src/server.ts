import Fastify from "fastify"

import cors from "@fastify/cors"

import { productRoutes } from "./routes/product.routes"
import { userRoutes } from "./routes/user.routes"

import { errorHandler } from "./middlewares/error-handler"

const app = Fastify({
  logger: true,
})

app.register(cors, {
  origin: true,
})

app.setErrorHandler(errorHandler)

app.register(productRoutes)
app.register(userRoutes)

app.get("/", async () => {
  return {
    message: "API running",
  }
})

app.listen({
  port: 3333,
}).then(() => {
  console.log("Server running on port 3333")
})