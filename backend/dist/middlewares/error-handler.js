"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const zod_1 = require("zod");
const app_error_1 = require("../errors/app-error");
async function errorHandler(error, request, reply) {
    if (error instanceof zod_1.ZodError) {
        return reply.status(400).send({
            error: "Validation error",
            details: error.format()
        });
    }
    if (error instanceof app_error_1.AppError) {
        return reply.status(error.statusCode).send({
            error: error.message
        });
    }
    console.error(error);
    return reply.status(500).send({
        error: "Internal server error"
    });
}
