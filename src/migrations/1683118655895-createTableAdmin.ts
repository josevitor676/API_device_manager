import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAdmin1683118655895 implements MigrationInterface {
    name = 'CreateTableAdmin1683118655895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "nomeLoja" character varying(60) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(40) NOT NULL, CONSTRAINT "UQ_de87485f6489f5d0995f5841952" UNIQUE ("email"), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "admin"`);
    }

}
