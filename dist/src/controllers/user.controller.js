"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUserProfile = void 0;
const services_1 = require("../services");
const handleUserProfile = async (request) => {
    const { UserId } = request;
    const user = await services_1.userService.getUserById(UserId);
    return user;
};
exports.handleUserProfile = handleUserProfile;
exports.default = {
    handleUserProfile: exports.handleUserProfile,
};
