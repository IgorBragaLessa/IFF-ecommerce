"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Nome obrigatório"),
    description: zod_1.z.string().optional(),
    price: zod_1.z.number().positive("Preço inválido"),
    stock: zod_1.z.number().int().min(0),
    category: zod_1.z.string().min(1, "Categoria obrigatória"),
    active: zod_1.z.boolean().optional()
});
exports.updateProductSchema = exports.createProductSchema.partial();
