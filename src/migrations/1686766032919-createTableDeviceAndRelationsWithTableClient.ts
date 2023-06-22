import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableDeviceAndRelationsWithTableClient1686766032919 implements MigrationInterface {
    name = 'CreateTableDeviceAndRelationsWithTableClient1686766032919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "device" ("id" SERIAL NOT NULL, "modelo" character varying(35) NOT NULL, "marca" character varying(35) NOT NULL, "defeito" character varying(150) NOT NULL, "preco" character varying(10) NOT NULL, "completed" boolean NOT NULL DEFAULT false, "dataSaida" date, "dataEntrada" TIMESTAMP NOT NULL DEFAULT now(), "clienteId" integer, CONSTRAINT "PK_2dc10972aa4e27c01378dad2c72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_70582c422bdf50ab2e801f59925" FOREIGN KEY ("clienteId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_70582c422bdf50ab2e801f59925"`);
        await queryRunner.query(`DROP TABLE "device"`);
    }

}
