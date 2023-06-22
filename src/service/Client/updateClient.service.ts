import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source"
import { Address, Client } from "../../entities"
import { IReturnClientAddress, IClientAndAddressUpdate } from "../../interfaces/client.interfaces"

const updateClientService = async (dataClient: IClientAndAddressUpdate, idClient: number): Promise<IReturnClientAddress> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    const clientFind: Client | null = await clientRepository.findOne({
        where: {
            id: idClient
        },
        relations: {
            address : true
        }
    });

    const addressFind = await addressRepository.findOne({
        where: {
            id: clientFind!.address.id
        }
    })
    
    const addressUpdate  = addressRepository.create({
        ...addressFind,
        cidade: dataClient.address?.cidade!,
        endereco: dataClient.address?.endereco!,
        numero: dataClient.address?.numero!,
        complemento: dataClient.address?.complemento!
    })

    await addressRepository.save(addressUpdate)

    const clientUpdated = clientRepository.create({
        ...clientFind,
        nome: dataClient?.nome!,
        telefone: dataClient?.telefone!,
        cpf: clientFind?.cpf!,
        address: addressUpdate
    })

    await clientRepository.save(clientUpdated);

    return clientUpdated;
}

export default updateClientService