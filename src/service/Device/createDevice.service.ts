import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client, Device } from "../../entities"
import { ICreateDevice, IReturnDevice } from "../../interfaces/device.interfaces"
import { deviceSchema } from "../../schemas/device.schemas"
import { AppError } from "../../errors"

const createDeviceService = async (dataDevice: ICreateDevice, idClient: number): Promise<IReturnDevice> => {

    const deviceRepository: Repository<Device> = AppDataSource.getRepository(Device)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const clientFind = await clientRepository.findOneBy({
        id: idClient
    })

    if(!clientFind) {
        throw new AppError('Cliente not found.', 404)
    }

    const deviceCreate = deviceRepository.create({
        ...dataDevice,
        cliente: clientFind!
    })

    await deviceRepository.save(deviceCreate)

    const deviceReturn = deviceSchema.parse(deviceCreate)

    return deviceReturn;
}

export default createDeviceService