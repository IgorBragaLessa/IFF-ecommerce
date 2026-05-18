"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_1 = require("../config/prisma");
class UserRepository {
    async create(data) {
        return prisma_1.prisma.user.create({
            data
        });
    }
    async findAll() {
        return prisma_1.prisma.user.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    }
    async findById(id) {
        return prisma_1.prisma.user.findUnique({
            where: { id }
        });
    }
    async findByEmail(email) {
        return prisma_1.prisma.user.findUnique({
            where: { email }
        });
    }
    async update(id, data) {
        return prisma_1.prisma.user.update({
            where: { id },
            data
        });
    }
    async delete(id) {
        return prisma_1.prisma.user.delete({
            where: { id }
        });
    }
}
exports.UserRepository = UserRepository;
