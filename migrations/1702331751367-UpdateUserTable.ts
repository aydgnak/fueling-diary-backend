import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserTable1702331751367 implements MigrationInterface {
    name = 'UpdateUserTable1702331751367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createdAt\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updatedAt\` varchar(50) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

}
