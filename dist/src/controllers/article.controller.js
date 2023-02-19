"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDelete = exports.handleUpdate = exports.handleGetArticleById = exports.handleGetByAuthor = exports.handleGetArticles = exports.handleCreate = void 0;
const services_1 = require("../services");
const customError_1 = __importDefault(require("../utils/customError"));
const article_errors_1 = __importDefault(require("../utils/errors/article.errors"));
const handleCreate = async (request) => {
    const { UserId } = request;
    const { title, text, type } = request.body;
    const article = await services_1.articleService
        .createArticle({ title, text, type, UserId })
        .catch((err) => {
        // console.error(["- DEBUG ERROR ON article -", err, "- DEBUG -"]);
        (0, customError_1.default)(article_errors_1.default.ArticleCreateFailure);
        throw new Error();
    });
    return article;
};
exports.handleCreate = handleCreate;
const handleGetArticles = async () => {
    const response = await services_1.articleService.fetchArticles();
    return response;
};
exports.handleGetArticles = handleGetArticles;
const handleGetByAuthor = async (request) => {
    const { UserId } = request;
    if (UserId) {
        const data = await services_1.articleService.fetchArticleByAuthor(UserId);
        const response = { data: data };
        return response;
    }
};
exports.handleGetByAuthor = handleGetByAuthor;
const handleGetArticleById = async (request) => {
    const id = request.query.id;
    const article = await services_1.articleService.fetchArticleById(id);
    return article;
};
exports.handleGetArticleById = handleGetArticleById;
const handleUpdate = async (request) => {
    const { title, text, type } = request.body;
    const id = request.params.id;
    const { UserId } = request;
    const article = await services_1.articleService.updateArticle(id, title, text, type, UserId);
    return article;
};
exports.handleUpdate = handleUpdate;
const handleDelete = async (request) => {
    const { UserId } = request;
    const id = request.params.id;
    console.log(id);
    const article = await services_1.articleService.deleteArticle(id, UserId);
    return article;
};
exports.handleDelete = handleDelete;
exports.default = {
    handleCreate: exports.handleCreate,
    handleGetArticleById: exports.handleGetArticleById,
    handleUpdate: exports.handleUpdate,
    handleDelete: exports.handleDelete,
    handleGetByAuthor: exports.handleGetByAuthor,
    handleGetArticles: exports.handleGetArticles
};
