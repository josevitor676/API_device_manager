import {z} from 'zod'
import { addressSchema, createAddressSchema, updateAddressSchema } from './address.schemas'

const clientSchema = z.object({
    id: z.number(),
    nome: z.string().min(2),
    telefone: z.string().min(7),
    cpf: z.string().min(11).max(11),
    createdAt: z.string().or(z.date())
})

const createClientAndAddress = clientSchema.extend({
    address: createAddressSchema
}).omit({id: true, createdAt:true})

const returnClientAndAddress = clientSchema.extend({
    address: addressSchema
})

const returnAllClientSchema = z.object({
    prev: z.string().nullish(),
    next: z.string().nullish(),
    count: z.number(),
    data: returnClientAndAddress.array()
})

const returnClientByName = returnClientAndAddress.array();

const updateClientSchema = clientSchema.extend({
    address: createAddressSchema.partial()
}).omit({id: true, cpf: true, createdAt: true}).partial();

export {
    createClientAndAddress,
    returnClientAndAddress,
    returnAllClientSchema,
    returnClientByName,
    updateClientSchema,
    clientSchema
}
