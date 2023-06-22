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
const errors_1 = require("../../errors");
const getDeviceByDateService = (dateQuery) => __awaiter(void 0, void 0, void 0, function* () {
    const deviceRepository = data_source_1.AppDataSource.getRepository(entities_1.Device);
    const dataAtual = new Date();
    const dataInicio = dateQuery.dataInicio;
    const dataFim = dateQuery.dataFim;
    if (dataInicio === undefined || dataFim === undefined) {
        throw new errors_1.AppError('Error: Query is empty.', 404);
    }
    const deviceDate = deviceRepository.createQueryBuilder('device').
        select(["device"]).
        where("device.dataEntrada ::TIMESTAMP::DATE >= :dataInicio", { dataInicio: dataInicio }).
        andWhere("device.dataSaida <= :dataFim", { dataFim: dataFim }).
        getMany();
    if ((yield deviceDate).length === 0) {
        throw new errors_1.AppError('No device found', 404);
    }
    return deviceDate;
});
exports.default = getDeviceByDateService;
//"dataEntrada" ::TIMESTAMP::DATE = '2023-06-20' AND "dataSaida" = '2023-06-20';
//     const userRepository = dataSource.getRepository(User);
// const users = await userRepository
//          .createQueryBuilder('user')
//          .where('user.createdAt > :startDate', {startDate: new Date(2019, 5, 3)})
//         .andWhere('user.createdAt < :endDate', {endDate: new Date(2022, 5, 3)})
//         .getMany();
