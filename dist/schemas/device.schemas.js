"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDeviceSchema = exports.returnDevicesByDate = exports.returnDeviceWithClient = exports.returnAllDevices = exports.createDeviceSchema = exports.deviceSchema = void 0;
const zod_1 = require("zod");
const client_schemas_1 = require("./client.schemas");
const deviceSchema = zod_1.z.object({
    id: zod_1.z.number(),
    modelo: zod_1.z.string().max(35).min(2),
    marca: zod_1.z.string().max(35).min(2),
    defeito: zod_1.z.string().max(150).min(2),
    preco: zod_1.z.string().max(10).min(2),
    completed: zod_1.z.boolean(),
    dataSaida: zod_1.z.string().or(zod_1.z.date()).nullish(),
    dataEntrada: zod_1.z.string().or(zod_1.z.date())
});
exports.deviceSchema = deviceSchema;
const createDeviceSchema = deviceSchema.omit({ id: true, dataSaida: true, dataEntrada: true, completed: true });
exports.createDeviceSchema = createDeviceSchema;
const returnAllDeviceWithClient = deviceSchema.extend({
    cliente: client_schemas_1.clientSchema
}).array();
const returnAllDevices = zod_1.z.object({
    prev: zod_1.z.string().nullish(),
    next: zod_1.z.string().nullish(),
    count: zod_1.z.number(),
    data: returnAllDeviceWithClient
});
exports.returnAllDevices = returnAllDevices;
const returnDeviceWithClient = client_schemas_1.clientSchema.extend({
    devices: deviceSchema.array()
}).array();
exports.returnDeviceWithClient = returnDeviceWithClient;
const returnDevicesByDate = deviceSchema.array();
exports.returnDevicesByDate = returnDevicesByDate;
const updateDeviceSchema = createDeviceSchema.partial();
exports.updateDeviceSchema = updateDeviceSchema;
