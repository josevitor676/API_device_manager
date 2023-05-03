import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const ensureTokenIsValidMiddleware = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> => {

    let token = req.headers.authorization

    if(!token) {
        throw new AppError('Token is Missing.', 404)
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error) {
            throw new AppError(error.message ,401)
        }

        req.admin = {
            id: Number(decoded.sub),
            nomeLoja: decoded.nomeLoja
        }
    })

}

export default ensureTokenIsValidMiddleware