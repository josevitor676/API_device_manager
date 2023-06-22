"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddressSchema = exports.createAddressSchema = exports.addressSchema = void 0;
const zod_1 = require("zod");
const addressSchema = zod_1.z.object({
    id: zod_1.z.number(),
    endereco: zod_1.z.string().min(8).max(80),
    numero: zod_1.z.string().min(1).max(6),
    complemento: zod_1.z.string().nullish(),
    cidade: zod_1.z.string()
});
exports.addressSchema = addressSchema;
const createAddressSchema = addressSchema.omit({ id: true });
exports.createAddressSchema = createAddressSchema;
const updateAddressSchema = createAddressSchema.partial();
exports.updateAddressSchema = updateAddressSchema;
