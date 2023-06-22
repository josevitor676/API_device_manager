import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { Repository } from "typeorm";
import { AppError } from "../errors";

const ensureCpfExistsMiddleware = async (req:Request, res:Response, next: NextFunction): Promise<Response | void> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const cpfClient = req.body.cpf 

    const clientExist = await clientRepository.findOneBy({cpf: cpfClient});

    if(clientExist) {
        throw new AppError('Cliente já existe', 401)
    }

    return next();
}

export default ensureCpfExistsMiddleware;