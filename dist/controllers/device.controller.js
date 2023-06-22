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
exports.updateDeviceController = exports.deleteDeviceByIdController = exports.getDeviceByDateController = exports.softDeleteDeviceController = exports.getDevicesByClient = exports.getAllDeviceController = exports.createDeviceController = void 0;
const createDevice_service_1 = __importDefault(require("../service/Device/createDevice.service"));
const getAllDevice_service_1 = __importDefault(require("../service/Device/getAllDevice.service"));
const getDevicesByClient_service_1 = __importDefault(require("../service/Device/getDevicesByClient.service"));
const softDeleteDevice_service_1 = __importDefault(require("../service/Device/softDeleteDevice.service"));
const getDeviceByDate_service_1 = __importDefault(require("../service/Device/getDeviceByDate.service"));
const deleteDeviceById_service_1 = __importDefault(require("../service/Device/deleteDeviceById.service"));
const updateDevice_service_1 = __importDefault(require("../service/Device/updateDevice.service"));
const createDeviceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClient = parseInt(req.params.idClient);
    const dataDevice = req.body;
    const device = yield (0, createDevice_service_1.default)(dataDevice, idClient);
    return res.status(201).json(device);
});
exports.createDeviceController = createDeviceController;
const getAllDeviceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pagination = req.query;
    const devices = yield (0, getAllDevice_service_1.default)(pagination);
    return res.status(200).json(devices);
});
exports.getAllDeviceController = getAllDeviceController;
const getDevicesByClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClient = parseInt(req.params.idClient);
    const clientWithDevice = yield (0, getDevicesByClient_service_1.default)(idClient);
    return res.status(200).json(clientWithDevice);
});
exports.getDevicesByClient = getDevicesByClient;
const softDeleteDeviceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDevice = parseInt(req.params.id);
    const deviceSoftDeleted = yield (0, softDeleteDevice_service_1.default)(idDevice);
    return res.status(204).json();
});
exports.softDeleteDeviceController = softDeleteDeviceController;
const getDeviceByDateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dateQuery = req.query;
    const deviceDate = yield (0, getDeviceByDate_service_1.default)(dateQuery);
    return res.status(200).json(deviceDate);
});
exports.getDeviceByDateController = getDeviceByDateController;
const deleteDeviceByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDevice = parseInt(req.params.id);
    const deletedDevice = yield (0, deleteDeviceById_service_1.default)(idDevice);
    return res.status(204).json();
});
exports.deleteDeviceByIdController = deleteDeviceByIdController;
const updateDeviceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDevice = parseInt(req.params.id);
    const dataDevice = req.body;
    const device = yield (0, updateDevice_service_1.default)(dataDevice, idDevice);
    return res.status(200).json(device);
});
exports.updateDeviceController = updateDeviceController;
