"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
const product_service_1 = require("../services/product.service");
const product_schema_1 = require("../schemas/product.schema");
const productService = new product_service_1.ProductService();
async function createProduct(request, reply) {
    const data = product_schema_1.createProductSchema.parse(request.body);
    const product = await productService.create(data);
    return reply.status(201).send(product);
}
async function getProducts(request, reply) {
    const products = await productService.findAll();
    return reply.send(products);
}
async function getProductById(request, reply) {
    const { id } = request.params;
    const product = await productService.findById(id);
    return reply.send(product);
}
async function updateProduct(request, reply) {
    const { id } = request.params;
    const data = product_schema_1.updateProductSchema.parse(request.body);
    const product = await productService.update(id, data);
    return reply.send(product);
}
async function deleteProduct(request, reply) {
    const { id } = request.params;
    await productService.delete(id);
    return reply.status(204).send();
}
