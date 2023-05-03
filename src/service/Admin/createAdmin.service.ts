import { Repository } from "typeorm"
import { ICreateAdmin, IReturnAdmin } from "../../interfaces/admin.interfaces"
import { Admin } from "../../entities"
import { AppDataSource } from "../../data-source"
import { returnAdminSchema } from "../../schemas/admin.schemas"

const createAdminService = async (adminData: ICreateAdmin): Promise<IReturnAdmin> => {

    const adminRepository: Repository<Admin> = AppDataSource.getRepository(Admin)

    const admin: Admin = adminRepository.create(adminData)
    await adminRepository.save(admin)

    const newAdmin: IReturnAdmin = returnAdminSchema.parse(admin)

    return newAdmin
}

export default createAdminService