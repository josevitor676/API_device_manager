import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Address, Client } from "../../entities";
import { Repository } from "typeorm";
import { IReturnAllClient } from "../../interfaces/client.interfaces";

const getAllClientService = async (pagination: any): Promise<IReturnAllClient> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    const page: number = Math.abs(Number(pagination.page)) || 1;
    const per_page: number = Math.abs(Number(pagination.per_page)) || 10;


    const allClient = await clientRepository.find({
        take: per_page,
        skip: per_page * (page - 1),
        relations: {
            address: true
        }
    });

    let prev: string | null = `https://device-manager-api.onrender.com/client?page=${page - 1}&per_page=${per_page}`
    let next: string | null = `https://device-manager-api.onrender.com/client?page=${page + 1}&per_page=${per_page}`
    
    const listAllClient = {
        prev: page === 1 ? prev = null : allClient.length === 0 ? prev = null : prev,
        next:allClient.length === 0 ? next = null : next,
        count: allClient.length,
        data: allClient
    }

    return listAllClient;

}

export default getAllClientService