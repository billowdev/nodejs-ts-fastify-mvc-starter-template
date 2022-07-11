"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_controller_1 = __importDefault(require("../controllers/article.controller"));
const middlewares_1 = require("../middlewares");
const article_route_schema_1 = require("./swaggerSchema/article.route.schema");
const articleRouter = async (app) => {
    // route api app.method("path", {option}, handler)
    app.get("/", { schema: article_route_schema_1.getAllArticleRouteSchema }, article_controller_1.default.handleGetArticles);
    app.get("/get", { schema: article_route_schema_1.getArticleRouteSchema }, article_controller_1.default.handleGetArticleById);
    app.get("/get/author", { schema: article_route_schema_1.getArticleListRouteSchema }, article_controller_1.default.handleGetByAuthor);
    app.post("/create", { schema: article_route_schema_1.createArticleRouteSchema }, article_controller_1.default.handleCreate);
    app.patch("/update/:id", { schema: article_route_schema_1.updateArticleRouteSchema }, article_controller_1.default.handleUpdate);
    app.delete("/delete/:id", { schema: article_route_schema_1.deleteArticleRouteSchema }, article_controller_1.default.handleDelete);
    // routes want to protect
    const Routes = {
        "/api/articles/get": false,
        "/api/articles": false,
        "/api/articles/get/author": true,
        "/api/articles/create": true,
        "/api/articles/update/:id": true,
        "/api/articles/delete/:id": true,
    };
    // function add hook onRequest -> protectedRoutes(appInstance, Routes you want to protect)
    (0, middlewares_1.protectedRoutes)(app, Routes);
};
exports.default = articleRouter;
