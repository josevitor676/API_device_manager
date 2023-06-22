import {z} from 'zod'
import { clientSchema } from './client.schemas';

const deviceSchema = z.object({
    id: z.number(),
    modelo: z.string().max(35).min(2),
    marca: z.string().max(35).min(2),
    defeito: z.string().max(150).min(2),
    preco: z.string().max(10).min(2),
    completed: z.boolean(),
    dataSaida: z.string().or(z.date()).nullish(),
    dataEntrada:  z.string().or(z.date())
});

const createDeviceSchema = deviceSchema.omit({id: true, dataSaida: true, dataEntrada: true, completed: true})

const returnAllDeviceWithClient = deviceSchema.extend({
    cliente: clientSchema
}).array();

const returnAllDevices = z.object({
    prev: z.string().nullish(),
    next: z.string().nullish(),
    count: z.number(),
    data: returnAllDeviceWithClient
});

const returnDeviceWithClient = clientSchema.extend({
    devices: deviceSchema.array()
}).array();

const returnDevicesByDate = deviceSchema.array();

const updateDeviceSchema = createDeviceSchema.partial();

export {
    deviceSchema,
    createDeviceSchema,
    returnAllDevices,
    returnDeviceWithClient,
    returnDevicesByDate,
    updateDeviceSchema,
}