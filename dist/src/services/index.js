"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleService = exports.userService = void 0;
const user_service_1 = __importDefault(require("./user.service"));
exports.userService = user_service_1.default;
const article_service_1 = __importDefault(require("./article.service"));
exports.articleService = article_service_1.default;
