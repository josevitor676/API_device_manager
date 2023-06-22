"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ensureDataIsValidMiddleware = (schema) => (req, res, next) => {
    const validate = schema.parse(req.body);
    req.body = validate;
    return next();
};
exports.default = ensureDataIsValidMiddleware;
