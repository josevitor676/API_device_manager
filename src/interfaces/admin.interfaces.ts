import {z} from 'zod'
import { createAdminSchema, loginAdminSchema, returnAdminSchema } from '../schemas/admin.schemas'

type ICreateAdmin = z.infer<typeof createAdminSchema>
type IReturnAdmin = z.infer<typeof returnAdminSchema>

type ILoginAdmin = z.infer<typeof loginAdminSchema>
export {
    ICreateAdmin,
    IReturnAdmin,
    ILoginAdmin
}