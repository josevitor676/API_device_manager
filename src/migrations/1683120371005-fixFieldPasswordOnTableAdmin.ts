import { MigrationInterface, QueryRunner } from "typeorm";

export class FixFieldPasswordOnTableAdmin1683120371005 implements MigrationInterface {
    name = 'FixFieldPasswordOnTableAdmin1683120371005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "password" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "password" character varying(40) NOT NULL`);
    }

}
