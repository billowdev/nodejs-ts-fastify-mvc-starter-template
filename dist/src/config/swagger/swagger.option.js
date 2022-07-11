"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
exports.options = {
    routePrefix: "/api/documentation",
    swagger: {
        info: {
            title: "node fastify app init - swagger",
            description: "Testing the Fastify swagger API",
            version: "1.0.0",
        },
        externalDocs: {
            url: "https://swagger.io",
            description: "Find more info here",
        },
        host: `localhost:${config_1.default.port}`,
        schemes: ["http"],
        consumes: ["application/json"],
        produces: ["application/json"],
        tags: [
            { name: "user", description: "User related end-points" },
            { name: "article", description: "article related end-points" },
            { name: "auth", description: "auth related end-points" },
        ],
        securityDefinitions: {
            apiKey: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
                scheme: "bearer",
                bearerFormat: "JWT",
                description: "JWT access token",
            },
        },
    },
    uiConfig: {
        // docExpansion: "full",
        deepLinking: true,
    },
    uiHooks: {
        // @ts-ignore
        onRequest: function (request, reply, next) {
            next();
        },
        preHandler: function (request, reply, next) {
            next();
        },
    },
    staticCSP: true,
    // @ts-ignore
    transformStaticCSP: (header) => header,
    exposeRoute: true,
};
