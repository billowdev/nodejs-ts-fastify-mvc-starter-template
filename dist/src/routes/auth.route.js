"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("middlewares");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_route_schema_1 = require("./swaggerSchema/auth.route.schema");
const authRouter = async (app) => {
    app.post("/login", { schema: auth_route_schema_1.loginRouteSchema }, auth_controller_1.default.handleLogin);
    app.post("/register", { schema: auth_route_schema_1.registerRouteSchema }, auth_controller_1.default.handleRegister);
    app.get("/isauthenticated", {
        schema: auth_route_schema_1.isAuthenticatedRouteSchema,
        preHandler: [middlewares_1.verifyToken],
    }, auth_controller_1.default.isAuthenticated);
};
exports.default = authRouter;
