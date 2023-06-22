import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableClientAddFieldCpf1686674640361 implements MigrationInterface {
    name = 'AlterTableClientAddFieldCpf1686674640361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD "cpf" character varying(11) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "cpf"`);
    }

}
