import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"

class AppError extends Error {
    message: string
    statusCode: number

    constructor(message: string, statusCode: number = 400) {
        super(message)
        this.statusCode = statusCode
    }
}

const handleErrors = (error:any, req:Request, res:Response, _:NextFunction) => {

    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message
        })
    }

    if(error instanceof ZodError) {
        return res.status(401).json(error.flatten().fieldErrors)
    }

    console.log(error)

    return res.status(500).json({message: "Internal server error"})

}


export {
    AppError,
    handleErrors
}
