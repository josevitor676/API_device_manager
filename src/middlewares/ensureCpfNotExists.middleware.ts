import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm";
import { Client } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const ensureCpfNotExistsMiddleware = async(req:Request,res:Response,next:NextFunction): Promise<Response | void> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
    const idClient: number = parseInt(req.params.id) ;

    const clientFound =  await clientRepository.findOne({
        where: {
            id: idClient
        }
    })

    if(!clientFound) {
        throw new AppError('Cliente não existe', 404)
    }

    return next()
}


export default ensureCpfNotExistsMiddleware