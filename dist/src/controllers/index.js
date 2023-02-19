"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesController = exports.usersController = exports.authController = void 0;
const auth_controller_1 = __importDefault(require("./auth.controller"));
exports.authController = auth_controller_1.default;
const user_controller_1 = __importDefault(require("./user.controller"));
exports.usersController = user_controller_1.default;
const article_controller_1 = __importDefault(require("./article.controller"));
exports.articlesController = article_controller_1.default;
