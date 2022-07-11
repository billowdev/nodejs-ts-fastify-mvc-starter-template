"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleRouter = exports.authRouter = exports.userRouter = void 0;
const users_route_1 = __importDefault(require("./users.route"));
exports.userRouter = users_route_1.default;
const auth_route_1 = __importDefault(require("./auth.route"));
exports.authRouter = auth_route_1.default;
const article_route_1 = __importDefault(require("./article.route"));
exports.articleRouter = article_route_1.default;
