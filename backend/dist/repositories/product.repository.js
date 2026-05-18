"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const prisma_1 = require("../config/prisma");
class ProductRepository {
    async create(data) {
        return prisma_1.prisma.product.create({
            data
        });
    }
    async findAll() {
        return prisma_1.prisma.product.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    }
    async findById(id) {
        return prisma_1.prisma.product.findUnique({
            where: { id }
        });
    }
    async update(id, data) {
        return prisma_1.prisma.product.update({
            where: { id },
            data
        });
    }
    async delete(id) {
        return prisma_1.prisma.product.delete({
            where: { id }
        });
    }
}
exports.ProductRepository = ProductRepository;
