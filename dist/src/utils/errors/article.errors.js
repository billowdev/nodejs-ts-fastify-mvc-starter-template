"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleUpdateFailure = exports.ArticleGetFailure = exports.ArticleCreateFailure = exports.ArticleInvalid = void 0;
exports.ArticleInvalid = {
    message: "ARTICLE INVALID REQUEST FAILURE",
    code: "ARTICLE001",
    statusCode: 400,
};
exports.ArticleCreateFailure = {
    message: "CREATE FAILURE",
    code: "ARTICLE002",
    statusCode: 400,
};
exports.ArticleGetFailure = {
    message: "ARTICLE GET FAILURE",
    code: "ARTICLE003",
    statusCode: 400,
};
exports.ArticleUpdateFailure = {
    message: "ARTICLE UPDATE FAILURE",
    code: "ARTICLE004",
    statusCode: 400,
};
exports.default = {
    ArticleInvalid: exports.ArticleInvalid,
    ArticleCreateFailure: exports.ArticleCreateFailure,
    ArticleGetFailure: exports.ArticleGetFailure,
    ArticleUpdateFailure: exports.ArticleUpdateFailure,
};
