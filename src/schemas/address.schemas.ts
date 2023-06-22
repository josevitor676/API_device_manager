import {z} from 'zod'

const addressSchema = z.object({
    id: z.number(),
    endereco: z.string().min(8).max(80),
    numero: z.string().min(1).max(6),
    complemento: z.string().nullish(),
    cidade: z.string()
})

const createAddressSchema = addressSchema.omit({id: true})

const updateAddressSchema = createAddressSchema.partial();

export {
    addressSchema,
    createAddressSchema,
    updateAddressSchema,
}