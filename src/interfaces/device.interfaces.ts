import {z} from 'zod'
import { createDeviceSchema, deviceSchema, returnAllDevices, returnDeviceWithClient, returnDevicesByDate, updateDeviceSchema,  } from '../schemas/device.schemas'
import { DeepPartial } from 'typeorm'

type IReturnDevice = z.infer<typeof deviceSchema>
type ICreateDevice = z.infer<typeof createDeviceSchema>
type IReturnAllDevice = z.infer<typeof returnAllDevices>
type IReturnDeviceWithClient = z.infer<typeof returnDeviceWithClient>
type IReturnDeviceByDate = z.infer<typeof returnDevicesByDate>

type IDeviceUpdate = DeepPartial<typeof updateDeviceSchema> 

export {
    ICreateDevice,
    IReturnDevice,
    IReturnAllDevice,
    IReturnDeviceWithClient,
    IReturnDeviceByDate,
    IDeviceUpdate,
}