"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const ensureDataIsValid_middleware_1 = __importDefault(require("../middlewares/ensureDataIsValid.middleware"));
const client_schemas_1 = require("../schemas/client.schemas");
const ensureTokenIsValid_middleware_1 = __importDefault(require("../middlewares/ensureTokenIsValid.middleware"));
const ensureCpfExists_middleware_1 = __importDefault(require("../middlewares/ensureCpfExists.middleware"));
const ensureCpfNotExists_middleware_1 = __importDefault(require("../middlewares/ensureCpfNotExists.middleware"));
const clientRoutes = (0, express_1.Router)();
clientRoutes.post('', (0, ensureDataIsValid_middleware_1.default)(client_schemas_1.createClientAndAddress), ensureCpfExists_middleware_1.default, ensureTokenIsValid_middleware_1.default, client_controller_1.createClientController);
clientRoutes.get('', ensureTokenIsValid_middleware_1.default, client_controller_1.getAllClientController);
clientRoutes.get('/name/:name', ensureTokenIsValid_middleware_1.default, client_controller_1.getClientByName);
clientRoutes.patch('/:id', ensureTokenIsValid_middleware_1.default, (0, ensureDataIsValid_middleware_1.default)(client_schemas_1.updateClientSchema), ensureCpfNotExists_middleware_1.default, client_controller_1.updateClientController);
clientRoutes.delete('/:id', ensureTokenIsValid_middleware_1.default, ensureCpfNotExists_middleware_1.default, client_controller_1.deleteClientById);
exports.default = clientRoutes;
