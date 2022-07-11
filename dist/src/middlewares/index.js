"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRoutes = exports.verifyToken = void 0;
const auth_middleware_1 = require("./auth.middleware");
Object.defineProperty(exports, "verifyToken", { enumerable: true, get: function () { return auth_middleware_1.verifyToken; } });
const protectedRoutes_middleware_1 = require("./protectedRoutes.middleware");
Object.defineProperty(exports, "protectedRoutes", { enumerable: true, get: function () { return protectedRoutes_middleware_1.protectedRoutes; } });
