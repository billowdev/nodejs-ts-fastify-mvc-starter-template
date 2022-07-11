"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config")); // this is important!
module.exports = {
    development: {
        username: config_1.default.database.username,
        password: config_1.default.database.password,
        database: config_1.default.database.dbDevelopment,
        host: config_1.default.database.host,
        dialect: config_1.default.database.dialect,
    },
    test: {
        username: config_1.default.database.username,
        password: config_1.default.database.password,
        database: config_1.default.database.dbTest,
        host: config_1.default.database.host,
        dialect: config_1.default.database.dialect,
    },
    production: {
        username: config_1.default.database.username,
        password: config_1.default.database.password,
        database: config_1.default.database.dbProduction,
        host: config_1.default.database.host,
        dialect: config_1.default.database.dialect,
    },
};
