import { Router } from "express";
import { createClientController, deleteClientById, getAllClientController, getClientByName, updateClientController } from "../controllers/client.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createClientAndAddress, updateClientSchema } from "../schemas/client.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureCpfExistsMiddleware from "../middlewares/ensureCpfExists.middleware";
import ensureCpfNotExistsMiddleware from "../middlewares/ensureCpfNotExists.middleware";

const clientRoutes: Router = Router();

clientRoutes.post('', ensureDataIsValidMiddleware(createClientAndAddress), ensureCpfExistsMiddleware ,ensureTokenIsValidMiddleware ,createClientController);
clientRoutes.get('', ensureTokenIsValidMiddleware ,getAllClientController);
clientRoutes.get('/name/:name', ensureTokenIsValidMiddleware ,getClientByName);
clientRoutes.patch('/:id', ensureTokenIsValidMiddleware ,ensureDataIsValidMiddleware(updateClientSchema), ensureCpfNotExistsMiddleware ,updateClientController);
clientRoutes.delete('/:id', ensureTokenIsValidMiddleware ,ensureCpfNotExistsMiddleware ,deleteClientById);


export default clientRoutes