"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientSchema = exports.updateClientSchema = exports.returnClientByName = exports.returnAllClientSchema = exports.returnClientAndAddress = exports.createClientAndAddress = void 0;
const zod_1 = require("zod");
const address_schemas_1 = require("./address.schemas");
const clientSchema = zod_1.z.object({
    id: zod_1.z.number(),
    nome: zod_1.z.string().min(2),
    telefone: zod_1.z.string().min(7),
    cpf: zod_1.z.string().min(11).max(11),
    createdAt: zod_1.z.string().or(zod_1.z.date())
});
exports.clientSchema = clientSchema;
const createClientAndAddress = clientSchema.extend({
    address: address_schemas_1.createAddressSchema
}).omit({ id: true, createdAt: true });
exports.createClientAndAddress = createClientAndAddress;
const returnClientAndAddress = clientSchema.extend({
    address: address_schemas_1.addressSchema
});
exports.returnClientAndAddress = returnClientAndAddress;
const returnAllClientSchema = zod_1.z.object({
    prev: zod_1.z.string().nullish(),
    next: zod_1.z.string().nullish(),
    count: zod_1.z.number(),
    data: returnClientAndAddress.array()
});
exports.returnAllClientSchema = returnAllClientSchema;
const returnClientByName = returnClientAndAddress.array();
exports.returnClientByName = returnClientByName;
const updateClientSchema = clientSchema.extend({
    address: address_schemas_1.createAddressSchema.partial()
}).omit({ id: true, cpf: true, createdAt: true }).partial();
exports.updateClientSchema = updateClientSchema;
