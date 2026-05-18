"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = productRoutes;
const product_controller_1 = require("../controllers/product.controller");
async function productRoutes(app) {
    app.post("/products", product_controller_1.createProduct);
    app.get("/products", product_controller_1.getProducts);
    app.get("/products/:id", product_controller_1.getProductById);
    app.put("/products/:id", product_controller_1.updateProduct);
    app.delete("/products/:id", product_controller_1.deleteProduct);
}
