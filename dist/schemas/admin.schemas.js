"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdminSchema = exports.returnAdminSchema = exports.createAdminSchema = exports.adminSchema = void 0;
const zod_1 = require("zod");
const adminSchema = zod_1.z.object({
    id: zod_1.z.number(),
    nomeLoja: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
exports.adminSchema = adminSchema;
const createAdminSchema = adminSchema.omit({ id: true });
exports.createAdminSchema = createAdminSchema;
const returnAdminSchema = adminSchema.omit({ password: true });
exports.returnAdminSchema = returnAdminSchema;
const loginAdminSchema = adminSchema.omit({ id: true, nomeLoja: true });
exports.loginAdminSchema = loginAdminSchema;
