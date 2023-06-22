import {z} from 'zod'
import { createClientAndAddress, returnAllClientSchema, returnClientAndAddress, returnClientByName, updateClientSchema } from '../schemas/client.schemas'
import { DeepPartial } from 'typeorm'

type ICreateClientAddress = z.infer<typeof createClientAndAddress>
type IReturnClientAddress = z.infer<typeof returnClientAndAddress>
type IReturnAllClient = z.infer<typeof returnAllClientSchema>
type IReturnClientByName = z.infer<typeof returnClientByName>

type IUpdateClientAndAddress = z.infer<typeof updateClientSchema>
type IClientAndAddressUpdate = DeepPartial<IUpdateClientAndAddress>

export {
    ICreateClientAddress,
    IReturnClientAddress,
    IReturnAllClient,
    IReturnClientByName,
    IClientAndAddressUpdate
}