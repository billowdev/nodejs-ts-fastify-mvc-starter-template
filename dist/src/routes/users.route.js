"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const users_route_schema_1 = require("./swaggerSchema/users.route.schema");
const userRouter = async (app) => {
    app.get("/profile", { schema: users_route_schema_1.profileRouteSchema }, controllers_1.usersController.handleUserProfile);
    // routes want to protect
    const Routes = {
        "/api/users/profile": true,
    };
    // function add hook onRequest -> protectedRoutes(appInstance, Routes you want to protect)
    (0, middlewares_1.protectedRoutes)(app, Routes);
};
exports.userRouter = userRouter;
exports.default = exports.userRouter;
