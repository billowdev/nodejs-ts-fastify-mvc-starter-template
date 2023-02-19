"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config")); // this is important!
module.exports = {
    development: {
        username: config_1.default.database.dev.username,
        password: config_1.default.database.dev.password,
        database: config_1.default.database.dev.name,
        host: config_1.default.database.dev.host,
        dialect: config_1.default.database.dialect,
    },
    test: {
        username: config_1.default.database.test.username,
        password: config_1.default.database.test.password,
        database: config_1.default.database.test.name,
        host: config_1.default.database.test.host,
        dialect: config_1.default.database.dialect,
    },
    production: {
        username: config_1.default.database.production.username,
        password: config_1.default.database.production.password,
        database: config_1.default.database.production.name,
        host: config_1.default.database.production.host,
        dialect: config_1.default.database.dialect,
    },
};
