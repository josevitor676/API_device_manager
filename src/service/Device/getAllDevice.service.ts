import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source"
import { Device } from "../../entities"
import { IReturnAllDevice } from "../../interfaces/device.interfaces";


const getAllDeviceService = async (pagination:any): Promise<IReturnAllDevice> => {

    const deviceRepository:Repository<Device> = AppDataSource.getRepository(Device);

    const page: number = Math.abs(Number(pagination.page)) || 1;
    const per_page: number = Math.abs(Number(pagination.per_page)) || 10;


    const allDevice = await deviceRepository.find({
        take: per_page,
        skip: per_page * (page - 1),
        relations: {
            cliente: true
        }
    });

    let prev: string | null = `http://localhost:3000/device?page=${page - 1}&per_page=${per_page}`
    let next: string | null = `http://localhost:3000/device?page=${page + 1}&per_page=${per_page}`

    const data = {
        prev: page === 1 ? prev = null : allDevice.length === 0 ? prev = null : prev ,
        next: allDevice.length === 0 ? next = null : next,
        count: allDevice.length,
        data: allDevice
    }

    
    return data

    
}

export default getAllDeviceService