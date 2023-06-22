"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = exports.AppError = void 0;
const zod_1 = require("zod");
class AppError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
const handleErrors = (error, req, res, _) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message
        });
    }
    if (error instanceof zod_1.ZodError) {
        return res.status(401).json(error.flatten().fieldErrors);
    }
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
};
exports.handleErrors = handleErrors;
