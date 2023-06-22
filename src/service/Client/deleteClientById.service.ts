import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source"
import { Address, Client } from "../../entities"

const deleteClientByIdService = async (idClient: number) => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    const clientFind: Client | null = await clientRepository.findOne({
        where: {
            id : idClient
        },
        relations: {
            address: true
        }
    })

    const addressFind = await addressRepository.findOneBy({
        id: clientFind!.address.id
    })

    await clientRepository.remove(clientFind!)
    
    await addressRepository.remove(addressFind!)

}

export default deleteClientByIdService