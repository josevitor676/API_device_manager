import { Request, Response } from "express"
import { ICreateAdmin, ILoginAdmin } from "../interfaces/admin.interfaces"
import createAdminService from "../service/Admin/createAdmin.service"
import loginAdminService from "../service/Admin/loginAdmin.service"

const createAdminController = async (req:Request, res:Response): Promise<Response> => {

    const adminData: ICreateAdmin = req.body

    const admin = await createAdminService(adminData)

    return res.status(201).json(admin)
}

const loginAdminController = async (req:Request, res:Response): Promise<Response> => {

    const loginData: ILoginAdmin = req.body

    const token = await loginAdminService(loginData)

    return res.json({token: token})
}

export {
    createAdminController,
    loginAdminController
}