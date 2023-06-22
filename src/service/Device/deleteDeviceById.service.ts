import { Repository } from "typeorm"
import { Device } from "../../entities"
import { AppDataSource } from "../../data-source"

const deleteDeviceByIdService = async (idDevice: number) => {

    const deviceRepository: Repository<Device> = AppDataSource.getRepository(Device);

    const deviceFind = await deviceRepository.findOneBy({
        id: idDevice
    });

    await deviceRepository.remove(deviceFind!);
}

export default deleteDeviceByIdService