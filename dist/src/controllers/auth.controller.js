"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggedOut = exports.isAuthenticated = exports.handleRegister = exports.handleLogin = void 0;
const services_1 = require("../services");
const auth_errors_1 = __importDefault(require("../utils/errors/auth.errors"));
const customError_1 = __importDefault(require("../utils/customError"));
const handleLogin = async (request) => {
    const { email, password } = request.body;
    const login = await services_1.userService.userLogin(email, password);
    return login;
};
exports.handleLogin = handleLogin;
const handleRegister = async (request) => {
    const { email, password, name, surname, phone } = request.body;
    const user = await services_1.userService
        .createUser({
        email,
        password,
        name,
        surname,
        phone,
    })
        .catch((err) => {
        (0, customError_1.default)(auth_errors_1.default.AuthRegisterFailure);
        throw new Error();
    });
    return user;
};
exports.handleRegister = handleRegister;
const isAuthenticated = async (request) => {
    const { UserId } = request;
    const response = services_1.userService.userSession(UserId);
    return response;
};
exports.isAuthenticated = isAuthenticated;
const loggedOut = async (request) => {
    return request.UserId;
};
exports.loggedOut = loggedOut;
exports.default = {
    handleLogin: exports.handleLogin,
    handleRegister: exports.handleRegister,
    isAuthenticated: exports.isAuthenticated,
    loggedOut: exports.loggedOut
};
