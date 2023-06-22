import { Request, Response } from "express"
import { ICreateDevice } from "../interfaces/device.interfaces"
import createDeviceService from "../service/Device/createDevice.service"
import getAllDeviceService from "../service/Device/getAllDevice.service"
import getDevicesByClientService from "../service/Device/getDevicesByClient.service"
import softDeleteDeviceService from "../service/Device/softDeleteDevice.service"
import getDeviceByDateService from "../service/Device/getDeviceByDate.service"
import deleteDeviceByIdService from "../service/Device/deleteDeviceById.service"
import updateDeviceService from "../service/Device/updateDevice.service"

const createDeviceController = async (req:Request, res:Response): Promise<Response> => {

    const idClient: number = parseInt(req.params.idClient)
    const dataDevice: ICreateDevice  = req.body

    const device = await createDeviceService(dataDevice, idClient)

    return res.status(201).json(device)
}

const getAllDeviceController = async (req:Request, res:Response): Promise<Response> => {

    const pagination = req.query;

    const devices = await getAllDeviceService(pagination);

    return res.status(200).json(devices)
}

const getDevicesByClient = async (req:Request, res:Response): Promise<Response> => {

    const idClient: number = parseInt(req.params.idClient);

    const clientWithDevice = await getDevicesByClientService(idClient);

    return res.status(200).json(clientWithDevice);
}

const softDeleteDeviceController = async (req:Request, res:Response): Promise<Response> => {

    const idDevice: number  = parseInt(req.params.id);

    const deviceSoftDeleted = await softDeleteDeviceService(idDevice);

    return res.status(204).json();
}

const getDeviceByDateController = async (req:Request, res: Response): Promise<Response> => {

    const dateQuery = req.query;

    const deviceDate = await getDeviceByDateService(dateQuery);

    return res.status(200).json(deviceDate);
}

const deleteDeviceByIdController = async (req: Request, res:Response): Promise<Response> => {

    const idDevice: number = parseInt(req.params.id);

    const deletedDevice = await deleteDeviceByIdService(idDevice);

    return res.status(204).json();
}

const updateDeviceController = async (req: Request, res:Response): Promise<Response> => {

    const idDevice: number = parseInt(req.params.id);
    const dataDevice = req.body;

    const device = await updateDeviceService(dataDevice, idDevice);

    return res.status(200).json(device);
}


export {
    createDeviceController,
    getAllDeviceController,
    getDevicesByClient,
    softDeleteDeviceController,
    getDeviceByDateController,
    deleteDeviceByIdController,
    updateDeviceController,
}