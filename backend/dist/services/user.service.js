"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const app_error_1 = require("../errors/app-error");
const user_repository_1 = require("../repositories/user.repository");
class UserService {
    constructor() {
        this.repository = new user_repository_1.UserRepository();
    }
    async create(data) {
        const emailAlreadyExists = await this.repository.findByEmail(data.email);
        if (emailAlreadyExists) {
            throw new app_error_1.AppError("Email já cadastrado", 409);
        }
        return this.repository.create(data);
    }
    async findAll() {
        return this.repository.findAll();
    }
    async findById(id) {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new app_error_1.AppError("Usuário não encontrado", 404);
        }
        return user;
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
exports.UserService = UserService;
