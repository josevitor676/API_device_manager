import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source"
import { Device } from "../../entities"

const softDeleteDeviceService = async (idDevice: number) => {

    const deviceRepository: Repository<Device> = AppDataSource.getRepository(Device);

    const deviceFind = await deviceRepository.findOneBy({
        id: idDevice
    });

    const device = deviceRepository.create({
        ...deviceFind,
        completed: true,
        dataSaida: new Date()
    });

    await deviceRepository.save(device);

    return device;


}

export default softDeleteDeviceService