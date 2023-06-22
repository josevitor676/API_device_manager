import { Repository } from "typeorm"
import { Device } from "../../entities"
import { IDeviceUpdate, IReturnDevice } from "../../interfaces/device.interfaces"
import { AppDataSource } from "../../data-source"
import { deviceSchema } from "../../schemas/device.schemas"

const updateDeviceService = async (dataDevice: IDeviceUpdate, idDevice: number): Promise<IReturnDevice> => {

    const deviceRepository: Repository<Device> = AppDataSource.getRepository(Device);

    const deviceFind = await deviceRepository.findOne({
        where: {
            id: idDevice
        }
    });

    const deviceUpdated = deviceRepository.create({
        ...deviceFind!,
        ...dataDevice
    });

    await deviceRepository.save(deviceUpdated)

    const returnDeviceUpdated = deviceSchema.parse(deviceUpdated)

    return returnDeviceUpdated;
}

export default updateDeviceService