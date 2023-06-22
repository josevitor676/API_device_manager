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
const getAllDeviceService = (pagination) => __awaiter(void 0, void 0, void 0, function* () {
    const deviceRepository = data_source_1.AppDataSource.getRepository(entities_1.Device);
    const page = Math.abs(Number(pagination.page)) || 1;
    const per_page = Math.abs(Number(pagination.per_page)) || 10;
    const allDevice = yield deviceRepository.find({
        take: per_page,
        skip: per_page * (page - 1),
        relations: {
            cliente: true
        }
    });
    let prev = `http://localhost:3000/device?page=${page - 1}&per_page=${per_page}`;
    let next = `http://localhost:3000/device?page=${page + 1}&per_page=${per_page}`;
    const data = {
        prev: page === 1 ? prev = null : allDevice.length === 0 ? prev = null : prev,
        next: allDevice.length === 0 ? next = null : next,
        count: allDevice.length,
        data: allDevice
    };
    return data;
});
exports.default = getAllDeviceService;
