"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_2 = require("./config/swagger");
const routes_1 = require("./routes");
const App = (options) => {
    const app = (0, fastify_1.default)(options);
    app.register(require('@fastify/cors'), (instance) => {
        return (req, callback) => {
            const corsOptions = {
                // This is NOT recommended for production as it enables reflection exploits
                origin: true
            };
            // do not include CORS headers for requests from localhost
            if (/^localhost$/m.test(req.headers.origin)) {
                corsOptions.origin = false;
            }
            // callback expects two parameters: error and options
            callback(null, corsOptions);
        };
    });
    // swagger api documentation
    app.register(swagger_1.default, swagger_2.swaggerOption.options);
    app.get("/", async () => "SERVER");
    app.register(routes_1.authRouter, { prefix: "/api/auth" });
    app.register(routes_1.userRouter, { prefix: "/api/users" });
    app.register(routes_1.articleRouter, { prefix: "/api/articles" });
    app.setErrorHandler((error, request, reply) => {
        const customError = error;
        reply.status(customError.statusCode || 500).send({
            error: {
                message: customError.message,
                code: customError.code,
                data: customError.data,
            }
        });
    });
    return app;
};
exports.default = App;
