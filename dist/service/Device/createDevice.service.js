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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const device_schemas_1 = require("../../schemas/device.schemas");
const errors_1 = require("../../errors");
const createDeviceService = (dataDevice, idClient) => __awaiter(void 0, void 0, void 0, function* () {
    const deviceRepository = data_source_1.AppDataSource.getRepository(entities_1.Device);
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const clientFind = yield clientRepository.findOneBy({
        id: idClient
    });
    if (!clientFind) {
        throw new errors_1.AppError('Cliente not found.', 404);
    }
    const deviceCreate = deviceRepository.create(Object.assign(Object.assign({}, dataDevice), { cliente: clientFind }));
    yield deviceRepository.save(deviceCreate);
    const deviceReturn = device_schemas_1.deviceSchema.parse(deviceCreate);
    return deviceReturn;
});
exports.default = createDeviceService;
