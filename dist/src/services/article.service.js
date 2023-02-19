"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchArticles = exports.fetchArticleByAuthor = exports.deleteArticle = exports.updateArticle = exports.fetchArticleById = exports.createArticle = void 0;
const models_1 = __importDefault(require("../models"));
const customError_1 = __importDefault(require("../utils/customError"));
const article_errors_1 = __importDefault(require("../utils/errors/article.errors"));
const createArticle = async (data) => {
    const response = await models_1.default.Article.create(data);
    return response;
};
exports.createArticle = createArticle;
const fetchArticleById = async (id) => {
    const article = await models_1.default.Article.findOne({
        where: { id }, raw: true
    });
    if (article == null) {
        (0, customError_1.default)(article_errors_1.default.ArticleGetFailure);
    }
    return article;
};
exports.fetchArticleById = fetchArticleById;
const updateArticle = async (id, title, text, type, UserId) => {
    const isValid = await models_1.default.Article.findOne({ where: { id }, raw: true });
    if (isValid == null) {
        (0, customError_1.default)(article_errors_1.default.ArticleInvalid);
    }
    const response = await models_1.default.Article.update({ id, title, text, type, UserId }, { where: { id } }).catch((error) => {
        (0, customError_1.default)(article_errors_1.default.ArticleUpdateFailure);
    });
    // delete cache
    // delCache(getArticleCacheKey)
    return response;
};
exports.updateArticle = updateArticle;
const deleteArticle = async (id, UserId) => {
    const response = await models_1.default.Article.destroy({ where: { id, UserId } });
    return response;
};
exports.deleteArticle = deleteArticle;
const fetchArticleByAuthor = async (UserId) => {
    const response = await models_1.default.Article.findAll({ where: { UserId }, raw: true });
    return response;
};
exports.fetchArticleByAuthor = fetchArticleByAuthor;
const fetchArticles = async () => {
    const data = await models_1.default.Article.findAll({
        include: [
            {
                model: models_1.default.User,
                attributes: [
                    'id', 'name', 'surname'
                ]
            }
        ]
    });
    const response = { data: data };
    return response;
};
exports.fetchArticles = fetchArticles;
exports.default = {
    createArticle: exports.createArticle,
    fetchArticleById: exports.fetchArticleById,
    updateArticle: exports.updateArticle,
    deleteArticle: exports.deleteArticle,
    fetchArticleByAuthor: exports.fetchArticleByAuthor,
    fetchArticles: exports.fetchArticles
};
