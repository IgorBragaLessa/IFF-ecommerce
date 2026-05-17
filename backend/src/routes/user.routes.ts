import { FastifyInstance } from "fastify"

import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser
} from "../controllers/user.controller"

export async function userRoutes(app: FastifyInstance) {
  app.post("/users", createUser)

  app.get("/users", getUsers)

  app.get("/users/:id", getUserById)

  app.put("/users/:id", updateUser)

  app.delete("/users/:id", deleteUser)
}