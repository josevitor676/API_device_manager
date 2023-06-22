"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientById = exports.updateClientController = exports.getClientByName = exports.getAllClientController = exports.createClientController = void 0;
const createClient_service_1 = __importDefault(require("../service/Client/createClient.service"));
const getAllClient_service_1 = __importDefault(require("../service/Client/getAllClient.service"));
const getClientByName_service_1 = __importDefault(require("../service/Client/getClientByName.service"));
const updateClient_service_1 = __importDefault(require("../service/Client/updateClient.service"));
const deleteClientById_service_1 = __importDefault(require("../service/Client/deleteClientById.service"));
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataClient = req.body;
    const client = yield (0, createClient_service_1.default)(dataClient);
    return res.status(201).json(client);
});
exports.createClientController = createClientController;
const getAllClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pagination = req.query;
    const listClient = yield (0, getAllClient_service_1.default)(pagination);
    return res.status(200).json(listClient);
});
exports.getAllClientController = getAllClientController;
const getClientByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientByName = yield (0, getClientByName_service_1.default)(req.params.name);
    return res.status(200).json(clientByName);
});
exports.getClientByName = getClientByName;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClient = parseInt(req.params.id);
    const dataClient = req.body;
    const updateClient = yield (0, updateClient_service_1.default)(dataClient, idClient);
    return res.status(200).json(updateClient);
});
exports.updateClientController = updateClientController;
const deleteClientById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClient = parseInt(req.params.id);
    yield (0, deleteClientById_service_1.default)(idClient);
    return res.status(204).send();
});
exports.deleteClientById = deleteClientById;
