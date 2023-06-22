import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source"
import { Address, Client } from "../../entities";
import { IReturnClientByName } from "../../interfaces/client.interfaces"
import { AppError } from "../../errors";

const getClientByNameService = async (name: string): Promise<IReturnClientByName> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

    const clientLikeName = clientRepository.find({
        where: {
            nome: name
        },
        relations: {
            address : true
        }
    });

    if((await clientLikeName).length === 0) {
        throw new AppError('Client not found', 404)
    }

    return clientLikeName;

}

export default getClientByNameService