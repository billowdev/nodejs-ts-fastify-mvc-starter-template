"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.validateHeadersAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const customError_1 = __importDefault(require("../utils/customError"));
const config_1 = __importDefault(require("../config/config"));
const auth_errors_1 = __importDefault(require("../utils/errors/auth.errors"));
const validateHeadersAuth = (req) => {
    const header = req.headers.authorization;
    if (!header) {
        (0, customError_1.default)(auth_errors_1.default.AuthMissingHeaders);
    }
    const accessToken = header.split(" ")[1];
    if (!accessToken) {
        (0, customError_1.default)(auth_errors_1.default.AuthMissingHeaders);
    }
    return accessToken;
};
exports.validateHeadersAuth = validateHeadersAuth;
const verifyToken = async (request) => {
    try {
        const token = (0, exports.validateHeadersAuth)(request);
        const decoded = Object((0, jsonwebtoken_1.verify)(token, config_1.default.webtoken));
        request.UserId = decoded.aud;
        return true;
    }
    catch (err) {
        (0, customError_1.default)(auth_errors_1.default.AuthJWTError);
        return false;
    }
};
exports.verifyToken = verifyToken;
exports.default = { verifyToken: exports.verifyToken };
