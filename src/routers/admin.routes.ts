import { Router } from "express";
import { createAdminController } from "../controllers/admin.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createAdminSchema } from "../schemas/admin.schemas";

const adminRoutes: Router = Router();

adminRoutes.post('', ensureDataIsValidMiddleware(createAdminSchema) ,createAdminController)

export default adminRoutes