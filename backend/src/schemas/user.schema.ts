import { z } from "zod"

export const createUserSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),

  email: z.email("Email inválido"),

  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),

  role: z.enum(["admin", "user"]).optional(),

  active: z.boolean().optional()
})

export const updateUserSchema =
  createUserSchema.partial()

export type CreateUserDTO =
  z.infer<typeof createUserSchema>

export type UpdateUserDTO =
  z.infer<typeof updateUserSchema>