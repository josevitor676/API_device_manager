import { Repository } from "typeorm"
import { ILoginAdmin } from "../../interfaces/admin.interfaces"
import { Admin } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { compare } from "bcryptjs"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const loginAdminService = async (loginData: ILoginAdmin): Promise<string> => {

    const adminRepository: Repository<Admin> = AppDataSource.getRepository(Admin)

    const admin: Admin | null = await adminRepository.findOneBy({email: loginData.email})

    if(!admin) {
        throw new AppError('Email or password is wrong!', 404)
    }

    const passwordMatch = await compare(loginData.password, admin.password)

    if(!passwordMatch) {
        throw new AppError('Email or password is wrong!', 404)
    }

    const token = jwt.sign(
        {
            id: admin.id,
            nomeLoja: admin.nomeLoja
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: String(admin.id)
        }
    )

    return token

}

export default loginAdminService