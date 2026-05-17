import Fastify from "fastify"

import { productRoutes } from "./routes/product.routes"

import { errorHandler } from "./middlewares/error-handler"

import { userRoutes } from "./routes/user.routes"

const app = Fastify({
  logger: true
})

app.setErrorHandler(errorHandler)

app.register(productRoutes)

app.get("/", async () => {
  return {
    message: "API running "
  }
})

app.listen({
  port: 3333
}).then(() => {
  console.log("Server running on port 3333")
})

app.register(userRoutes)