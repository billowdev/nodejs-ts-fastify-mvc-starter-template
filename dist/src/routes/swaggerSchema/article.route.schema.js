"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticleRouteSchema = exports.updateArticleRouteSchema = exports.createArticleRouteSchema = exports.getAllArticleRouteSchema = exports.getArticleListRouteSchema = exports.getArticleRouteSchema = void 0;
exports.getArticleRouteSchema = {
    tags: ["article"],
    security: [{ apiKey: [] }],
    querystring: {
        id: {
            type: 'string',
            description: "article id for query"
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'id'
                },
                title: {
                    type: 'string',
                    format: 'string',
                },
                text: {
                    type: 'string',
                    format: 'string',
                },
                UserId: {
                    type: 'string',
                    format: 'id',
                },
                createdAt: {
                    type: 'string',
                    format: 'date',
                },
                updatedAt: {
                    type: 'string',
                    format: 'date',
                },
            }
        }
    },
};
exports.getArticleListRouteSchema = {
    tags: ["article"],
    security: [{ apiKey: [] }],
    response: {
        200: {
            "data": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "text": {
                            "type": "string"
                        },
                        "createdAt": {
                            "type": "string"
                        },
                        "updatedAt": {
                            "type": "string"
                        },
                        "UserId": {
                            "type": "string"
                        },
                    }
                }
            }
        }
    },
};
exports.getAllArticleRouteSchema = {
    tags: ["article"],
    security: [{ apiKey: [] }],
    response: {
        200: {
            "data": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        },
                        "text": {
                            "type": "string"
                        },
                        "createdAt": {
                            "type": "string"
                        },
                        "updatedAt": {
                            "type": "string"
                        },
                        "User": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "surname": {
                                    "type": "string"
                                },
                            }
                        },
                    }
                }
            }
        }
    },
};
exports.createArticleRouteSchema = {
    tags: ["article"],
    security: [{ apiKey: [] }],
    body: {
        type: 'object',
        properties: {
            title: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
            type: {
                type: 'string',
            },
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'id'
                },
                title: {
                    type: 'string',
                    format: 'string',
                },
                text: {
                    type: 'string',
                    format: 'string',
                },
                UserId: {
                    type: 'string',
                    format: 'id',
                },
                createdAt: {
                    type: 'string',
                    format: 'date',
                },
                updatedAt: {
                    type: 'string',
                    format: 'date',
                },
            }
        }
    },
};
exports.updateArticleRouteSchema = {
    tags: ["article"],
    security: [{ apiKey: [] }],
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                description: 'the article identifier, as id'
            }
        },
        required: ['id']
    },
};
exports.deleteArticleRouteSchema = {
    tags: ["article"],
    security: [{ apiKey: [] }],
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                description: 'the article identifier, as id'
            }
        },
        required: ['id']
    },
};
exports.default = {
    getArticleRouteSchema: exports.getArticleRouteSchema,
    createArticleRouteSchema: exports.createArticleRouteSchema,
    updateArticleRouteSchema: exports.updateArticleRouteSchema,
    deleteArticleRouteSchema: exports.deleteArticleRouteSchema,
    getArticleListRouteSchema: exports.getArticleListRouteSchema,
    getAllArticleRouteSchema: exports.getAllArticleRouteSchema
};
