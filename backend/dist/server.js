"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const product_routes_1 = require("./routes/product.routes");
const user_routes_1 = require("./routes/user.routes");
const error_handler_1 = require("./middlewares/error-handler");
const app = (0, fastify_1.default)({
    logger: true,
});
app.register(cors_1.default, {
    origin: true,
});
app.setErrorHandler(error_handler_1.errorHandler);
app.register(product_routes_1.productRoutes);
app.register(user_routes_1.userRoutes);
app.get("/", async () => {
    return {
        message: "API running",
    };
});
app.listen({
    port: 3333,
}).then(() => {
    console.log("Server running on port 3333");
});
