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
const entities_1 = require("../../entities");
const data_source_1 = require("../../data-source");
const device_schemas_1 = require("../../schemas/device.schemas");
const updateDeviceService = (dataDevice, idDevice) => __awaiter(void 0, void 0, void 0, function* () {
    const deviceRepository = data_source_1.AppDataSource.getRepository(entities_1.Device);
    const deviceFind = yield deviceRepository.findOne({
        where: {
            id: idDevice
        }
    });
    const deviceUpdated = deviceRepository.create(Object.assign(Object.assign({}, deviceFind), dataDevice));
    yield deviceRepository.save(deviceUpdated);
    const returnDeviceUpdated = device_schemas_1.deviceSchema.parse(deviceUpdated);
    return returnDeviceUpdated;
});
exports.default = updateDeviceService;
