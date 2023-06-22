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
const deleteClientByIdService = (idClient) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const addressRepository = data_source_1.AppDataSource.getRepository(entities_1.Address);
    const clientFind = yield clientRepository.findOne({
        where: {
            id: idClient
        },
        relations: {
            address: true
        }
    });
    const addressFind = yield addressRepository.findOneBy({
        id: clientFind.address.id
    });
    yield clientRepository.remove(clientFind);
    yield addressRepository.remove(addressFind);
});
exports.default = deleteClientByIdService;
