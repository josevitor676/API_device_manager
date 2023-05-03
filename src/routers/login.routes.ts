import { Router } from "express";
import { loginAdminController } from "../controllers/admin.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { loginAdminSchema } from "../schemas/admin.schemas";

const loginRoutes: Router = Router()

loginRoutes.post('', ensureDataIsValidMiddleware(loginAdminSchema) ,loginAdminController)

export default loginRoutes