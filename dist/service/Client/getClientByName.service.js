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
const getClientByNameService = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const clientLikeName = clientRepository.find({
        where: {
            nome: name
        },
        relations: {
            address: true
        }
    });
    if ((yield clientLikeName).length === 0) {
        throw new errors_1.AppError('Client not found', 404);
    }
    return clientLikeName;
});
exports.default = getClientByNameService;
