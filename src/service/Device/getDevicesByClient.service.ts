import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities"
import { IReturnDeviceWithClient } from "../../interfaces/device.interfaces";
import { AppError } from "../../errors";

const getDevicesByClientService = async (idClient: number): Promise<IReturnDeviceWithClient> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

    const client = await clientRepository.find({
        where: {
            id: idClient
        },
        relations: {
            devices : true
        }
    });

    if(client.length === 0) {
        throw new AppError('Cliente não encontrado.', 404)
    }


    return client;
}

export default getDevicesByClientService