"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouteSchema = void 0;
exports.profileRouteSchema = {
    tags: ["user"],
    security: [{ apiKey: [] }],
    response: {
        200: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'id'
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                name: {
                    type: 'string',
                    format: 'string',
                },
                surname: {
                    type: 'string',
                    format: 'id',
                },
                phone: {
                    type: 'string',
                    format: 'string',
                }
            }
        }
    },
};
exports.default = {
    profileRouteSchema: exports.profileRouteSchema
};
