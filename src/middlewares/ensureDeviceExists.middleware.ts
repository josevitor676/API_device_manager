import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm";
import { Device } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const ensureDeviceExistsMiddleware = async (req:Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const idDevice: number = parseInt(req.params.id);
    const deviceRepository: Repository<Device> = AppDataSource.getRepository(Device);

    const deviceFind = await deviceRepository.findOneBy({
        id: idDevice
    });

    if(!deviceFind) {
        throw new AppError('Device not found.', 404)
    }

    return next();

}

export default ensureDeviceExistsMiddleware