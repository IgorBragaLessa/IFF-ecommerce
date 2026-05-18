"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const user_service_1 = require("../services/user.service");
const user_schema_1 = require("../schemas/user.schema");
const userService = new user_service_1.UserService();
async function createUser(request, reply) {
    const data = user_schema_1.createUserSchema.parse(request.body);
    const user = await userService.create(data);
    return reply.status(201).send(user);
}
async function getUsers(request, reply) {
    const users = await userService.findAll();
    return reply.send(users);
}
async function getUserById(request, reply) {
    const { id } = request.params;
    const user = await userService.findById(id);
    return reply.send(user);
}
async function updateUser(request, reply) {
    const { id } = request.params;
    const data = user_schema_1.updateUserSchema.parse(request.body);
    const user = await userService.update(id, data);
    return reply.send(user);
}
async function deleteUser(request, reply) {
    const { id } = request.params;
    await userService.delete(id);
    return reply.status(204).send();
}
