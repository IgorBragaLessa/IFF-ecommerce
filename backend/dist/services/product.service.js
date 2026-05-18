"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const app_error_1 = require("../errors/app-error");
const product_repository_1 = require("../repositories/product.repository");
class ProductService {
    constructor() {
        this.repository = new product_repository_1.ProductRepository();
    }
    async create(data) {
        return this.repository.create(data);
    }
    async findAll() {
        return this.repository.findAll();
    }
    async findById(id) {
        const product = await this.repository.findById(id);
        if (!product) {
            throw new app_error_1.AppError("Produto não encontrado", 404);
        }
        return product;
    }
    async update(id, data) {
        await this.findById(id);
        return this.repository.update(id, data);
    }
    async delete(id) {
        await this.findById(id);
        await this.repository.delete(id);
    }
}
exports.ProductService = ProductService;
