"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRoutes = void 0;
const auth_middleware_1 = require("./auth.middleware");
const protectedRoutes = async (app, routesToProtect) => {
    app.addHook("onRequest", async (request, reply) => {
        try {
            const requestPath = request.routerPath;
            if (routesToProtect[requestPath]) {
                await (0, auth_middleware_1.verifyToken)(request);
            }
        }
        catch (error) {
            reply.send(error);
        }
    });
};
exports.protectedRoutes = protectedRoutes;
exports.default = { protectedRoutes: exports.protectedRoutes };
