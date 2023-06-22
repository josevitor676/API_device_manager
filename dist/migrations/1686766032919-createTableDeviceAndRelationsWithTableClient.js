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
exports.CreateTableDeviceAndRelationsWithTableClient1686766032919 = void 0;
class CreateTableDeviceAndRelationsWithTableClient1686766032919 {
    constructor() {
        this.name = 'CreateTableDeviceAndRelationsWithTableClient1686766032919';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "device" ("id" SERIAL NOT NULL, "modelo" character varying(35) NOT NULL, "marca" character varying(35) NOT NULL, "defeito" character varying(150) NOT NULL, "preco" character varying(10) NOT NULL, "completed" boolean NOT NULL DEFAULT false, "dataSaida" date, "dataEntrada" TIMESTAMP NOT NULL DEFAULT now(), "clienteId" integer, CONSTRAINT "PK_2dc10972aa4e27c01378dad2c72" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_70582c422bdf50ab2e801f59925" FOREIGN KEY ("clienteId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_70582c422bdf50ab2e801f59925"`);
            yield queryRunner.query(`DROP TABLE "device"`);
        });
    }
}
exports.CreateTableDeviceAndRelationsWithTableClient1686766032919 = CreateTableDeviceAndRelationsWithTableClient1686766032919;
