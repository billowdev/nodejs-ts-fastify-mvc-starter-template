"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRegisterFailure = exports.AuthJWTError = exports.AuthMissingHeaders = exports.AuthInvalidPassword = exports.AuthInvalidEmail = void 0;
exports.AuthInvalidEmail = {
    message: "Unauthorized",
    code: "AUTH001",
    statusCode: 401,
};
exports.AuthInvalidPassword = {
    message: "Unauthorized",
    code: "AUTH002",
    statusCode: 401,
};
exports.AuthMissingHeaders = {
    message: "Unauthorized",
    code: "AUTH003",
    statusCode: 401,
};
exports.AuthJWTError = {
    message: "Unauthorized",
    code: "AUTH004",
    statusCode: 401,
};
exports.AuthRegisterFailure = {
    message: "Register Failure",
    code: "AUTH005",
    statusCode: 401,
};
exports.default = {
    AuthInvalidEmail: exports.AuthInvalidEmail,
    AuthInvalidPassword: exports.AuthInvalidPassword,
    AuthMissingHeaders: exports.AuthMissingHeaders,
    AuthJWTError: exports.AuthJWTError,
    AuthRegisterFailure: exports.AuthRegisterFailure,
};
