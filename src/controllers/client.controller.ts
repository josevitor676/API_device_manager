import { Request, Response } from "express"
import { ICreateClientAddress } from "../interfaces/client.interfaces"
import createClientService from "../service/Client/createClient.service"
import getAllClientService from "../service/Client/getAllClient.service"
import getClientByNameService from "../service/Client/getClientByName.service"
import updateClientService from "../service/Client/updateClient.service"
import deleteClientByIdService from "../service/Client/deleteClientById.service"

const createClientController = async (req:Request, res:Response): Promise<Response> => {

    const dataClient: ICreateClientAddress = req.body

    const client = await createClientService(dataClient)

    return res.status(201).json(client)
}

const getAllClientController = async (req: Request, res:Response): Promise<Response> => {

    const pagination = req.query;

    const listClient = await getAllClientService(pagination);

    return res.status(200).json(listClient)
}

const getClientByName = async (req: Request, res:Response): Promise<Response> => {

    const clientByName = await getClientByNameService(req.params.name);

    return res.status(200).json(clientByName);
}


const updateClientController = async (req: Request, res: Response): Promise<Response> => {

    const idClient: number = parseInt(req.params.id);
    const dataClient = req.body;

    const updateClient = await updateClientService(dataClient, idClient);

    return res.status(200).json(updateClient)
}

const deleteClientById = async(req:Request, res:Response): Promise<Response> => {

    const idClient: number = parseInt(req.params.id)

    await deleteClientByIdService(idClient)

    return res.status(204).send()
}
export {
    createClientController,
    getAllClientController,
    getClientByName,
    updateClientController,
    deleteClientById,
}