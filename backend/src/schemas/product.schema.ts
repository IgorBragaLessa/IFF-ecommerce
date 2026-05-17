import { z } from "zod"

export const createProductSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),

  description: z.string().optional(),

  price: z.number().positive("Preço inválido"),

  stock: z.number().int().min(0),

  category: z.string().min(1, "Categoria obrigatória"),

  active: z.boolean().optional()
})

export const updateProductSchema = createProductSchema.partial()

export type CreateProductDTO = z.infer<typeof createProductSchema>

export type UpdateProductDTO = z.infer<typeof updateProductSchema>