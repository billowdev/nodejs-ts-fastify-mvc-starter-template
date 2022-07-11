"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const config_1 = __importDefault(require("./src/config/config"));
const models_1 = __importDefault(require("./src/models"));
const options = {
    logger: true
};
// Application
const app = (0, app_1.default)(options);
// serve
const PORT = config_1.default.port;
models_1.default.sequelize.sync().then(() => {
    app.listen({ port: Number(PORT) }, (err) => {
        if (err) {
            app.log.error(err);
            process.exit(1);
        }
        app.log.info(`server listening on ${PORT}`);
    });
});
