"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesHandler = exports.usersHandler = exports.authHandler = void 0;
const auth_controller_1 = __importDefault(require("./auth.controller"));
exports.authHandler = auth_controller_1.default;
const user_controller_1 = __importDefault(require("./user.controller"));
exports.usersHandler = user_controller_1.default;
const article_controller_1 = __importDefault(require("./article.controller"));
exports.articlesHandler = article_controller_1.default;
