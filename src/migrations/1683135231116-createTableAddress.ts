import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1683135231116 implements MigrationInterface {
    name = 'CreateTableAddress1683135231116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "endereco" character varying(100) NOT NULL, "numero" character varying(10) NOT NULL, "complemento" text, "cidade" character varying(45) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
