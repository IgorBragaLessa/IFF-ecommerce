"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = userRoutes;
const user_controller_1 = require("../controllers/user.controller");
async function userRoutes(app) {
    app.post("/users", user_controller_1.createUser);
    app.get("/users", user_controller_1.getUsers);
    app.get("/users/:id", user_controller_1.getUserById);
    app.put("/users/:id", user_controller_1.updateUser);
    app.delete("/users/:id", user_controller_1.deleteUser);
}
