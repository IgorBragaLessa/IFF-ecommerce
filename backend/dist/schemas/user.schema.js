"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Nome obrigatório"),
    email: zod_1.z.email("Email inválido"),
    password: zod_1.z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    role: zod_1.z.enum(["admin", "user"]).optional(),
    active: zod_1.z.boolean().optional()
});
exports.updateUserSchema = exports.createUserSchema.partial();
