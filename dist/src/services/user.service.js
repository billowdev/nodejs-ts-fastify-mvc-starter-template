"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.userSession = exports.userLogin = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = require("jsonwebtoken");
const customError_1 = __importDefault(require("../utils/customError"));
const auth_errors_1 = __importDefault(require("../utils/errors/auth.errors"));
const config_1 = __importDefault(require("../config/config"));
const models_1 = __importDefault(require("../models"));
const passwordHashing = (password) => {
    const salt = bcrypt_1.default.genSaltSync(10);
    const hashPassword = bcrypt_1.default.hashSync(password, salt);
    return hashPassword;
};
const comparePassword = (password, existsPassword) => {
    const isPasswordCorrect = bcrypt_1.default.compareSync(password, existsPassword);
    if (!isPasswordCorrect) {
        (0, customError_1.default)(auth_errors_1.default.AuthInvalidPassword);
    }
    return true;
};
const createToken = (UserId) => {
    const token = (0, jsonwebtoken_1.sign)({}, config_1.default.webtoken, {
        expiresIn: 3600 * 30,
        audience: String(UserId),
    });
    return token;
};
const mapUserResponseObject = (userId, user, accessToken) => {
    const response = {
        id: userId,
        email: user.email,
        name: user.name || "",
        surname: user.surname || "",
        phone: user.phone || "",
        accessToken,
    };
    return response;
};
const createUser = async (data) => {
    data.password = passwordHashing(data.password);
    const user = await models_1.default.User.create(data);
    return user;
};
exports.createUser = createUser;
const userLogin = async (email, password) => {
    const user = await models_1.default.User.findOne({
        where: { email }, raw: true
    });
    if (user == null) {
        (0, customError_1.default)({
            ...auth_errors_1.default.AuthInvalidEmail,
            data: {
                success: false,
            },
        });
    }
    // console.log("debugging", email, password, user)
    comparePassword(password, user.password);
    const UserId = user.id;
    const accessToken = createToken(UserId);
    const response = mapUserResponseObject(UserId, user, accessToken);
    return response;
};
exports.userLogin = userLogin;
const userSession = async (id) => {
    const user = await models_1.default.User.findOne({
        where: { id }, raw: true
    });
    if (user == null) {
        (0, customError_1.default)({
            ...auth_errors_1.default.AuthJWTError,
            data: {
                success: false,
            },
        });
    }
    const UserId = id;
    const accessToken = createToken(UserId);
    const response = mapUserResponseObject(UserId, user, accessToken);
    return response;
};
exports.userSession = userSession;
const getUserById = async (UserId) => {
    const user = await models_1.default.User.findOne({ where: { id: UserId }, raw: true });
    if (user == null) {
        return (0, customError_1.default)(auth_errors_1.default.AuthJWTError);
    }
    const response = mapUserResponseObject(UserId, user);
    return response;
};
exports.getUserById = getUserById;
exports.default = {
    createUser: exports.createUser,
    userLogin: exports.userLogin,
    getUserById: exports.getUserById,
    createToken,
    userSession: exports.userSession
};
