import { Router } from "express";
import { createDeviceController, deleteDeviceByIdController, getAllDeviceController, getDeviceByDateController, getDevicesByClient, softDeleteDeviceController, updateDeviceController,  } from "../controllers/device.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createDeviceSchema, updateDeviceSchema } from "../schemas/device.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureDeviceExistsMiddleware from "../middlewares/ensureDeviceExists.middleware";

const deviceRoutes: Router = Router();

deviceRoutes.post('/:idClient', ensureTokenIsValidMiddleware ,ensureDataIsValidMiddleware(createDeviceSchema) ,createDeviceController);
deviceRoutes.get('/info', ensureTokenIsValidMiddleware ,getDeviceByDateController);
deviceRoutes.get('/', ensureTokenIsValidMiddleware ,getAllDeviceController);
deviceRoutes.get('/:idClient',  ensureTokenIsValidMiddleware, getDevicesByClient);
deviceRoutes.delete('/completed/:id', ensureTokenIsValidMiddleware, ensureDeviceExistsMiddleware ,softDeleteDeviceController);
deviceRoutes.delete('/delete/:id', ensureTokenIsValidMiddleware ,ensureDeviceExistsMiddleware ,deleteDeviceByIdController);
deviceRoutes.patch('/:id', ensureTokenIsValidMiddleware, ensureDeviceExistsMiddleware ,ensureDataIsValidMiddleware(updateDeviceSchema) ,updateDeviceController);

export default deviceRoutes