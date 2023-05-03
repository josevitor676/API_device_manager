import {z} from 'zod'

const adminSchema = z.object({
    id: z.number(),
    nomeLoja: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})

const createAdminSchema = adminSchema.omit({id:true})
const returnAdminSchema = adminSchema.omit({password: true})

const loginAdminSchema = adminSchema.omit({id: true, nomeLoja: true})

export {
    adminSchema,
    createAdminSchema,
    returnAdminSchema, 
    loginAdminSchema
}