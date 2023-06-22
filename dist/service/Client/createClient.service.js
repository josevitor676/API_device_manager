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
const client_schemas_1 = require("../../schemas/client.schemas");
const createClientService = (dataClient) => __awaiter(void 0, void 0, void 0, function* () {
    const addressRepository = data_source_1.AppDataSource.getRepository(entities_1.Address);
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    //Criando e salvando um novo endereço
    const address = addressRepository.create(dataClient.address);
    yield addressRepository.save(address);
    //criando um novo usuario e passando o endereço que foi criado na linha de cima
    const client = clientRepository.create(Object.assign(Object.assign({}, dataClient), { address: address }));
    //salvando o usuario juntamente com seu endereço
    yield clientRepository.save(client);
    const newClient = client_schemas_1.returnClientAndAddress.parse(client);
    return newClient;
});
exports.default = createClientService;
