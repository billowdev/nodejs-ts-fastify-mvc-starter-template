"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    code;
    statusCode;
    data;
    constructor(message, code, statusCode = 500, data) {
        super(message);
        this.name = "CustomError";
        this.message = message;
        this.code = code;
        this.statusCode = statusCode;
        this.data = data;
    }
}
exports.CustomError = CustomError;
const customError = ({ message, code, statusCode, data, }) => {
    throw new CustomError(message, code, statusCode, data);
};
exports.default = customError;
