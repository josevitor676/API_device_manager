import { Repository } from "typeorm"
import { ICreateClientAddress, IReturnClientAddress } from "../../interfaces/client.interfaces"
import { Address, Client } from "../../entities"
import { AppDataSource } from "../../data-source"
import { returnClientAndAddress } from "../../schemas/client.schemas"

const createClientService = async (dataClient: ICreateClientAddress): Promise<IReturnClientAddress> => {

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    //Criando e salvando um novo endereço
    const address: Address = addressRepository.create(dataClient.address)
    await addressRepository.save(address)


    //criando um novo usuario e passando o endereço que foi criado na linha de cima
    const client: Client = clientRepository.create({
        ...dataClient,
        address: address
    })
    //salvando o usuario juntamente com seu endereço
    await clientRepository.save(client)


    const newClient = returnClientAndAddress.parse(client)

    return newClient

}

export default createClientService