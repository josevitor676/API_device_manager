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
const updateClientService = (dataClient, idClient) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
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
    const addressFind = yield addressRepository.findOne({
        where: {
            id: clientFind.address.id
        }
    });
    const addressUpdate = addressRepository.create(Object.assign(Object.assign({}, addressFind), { cidade: (_a = dataClient.address) === null || _a === void 0 ? void 0 : _a.cidade, endereco: (_b = dataClient.address) === null || _b === void 0 ? void 0 : _b.endereco, numero: (_c = dataClient.address) === null || _c === void 0 ? void 0 : _c.numero, complemento: (_d = dataClient.address) === null || _d === void 0 ? void 0 : _d.complemento }));
    yield addressRepository.save(addressUpdate);
    const clientUpdated = clientRepository.create(Object.assign(Object.assign({}, clientFind), { nome: dataClient === null || dataClient === void 0 ? void 0 : dataClient.nome, telefone: dataClient === null || dataClient === void 0 ? void 0 : dataClient.telefone, cpf: clientFind === null || clientFind === void 0 ? void 0 : clientFind.cpf, address: addressUpdate }));
    yield clientRepository.save(clientUpdated);
    return clientUpdated;
});
exports.default = updateClientService;
