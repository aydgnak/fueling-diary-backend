import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1702054919780 implements MigrationInterface {
    name = 'CreateUserTable1702054919780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(255) NOT NULL, \`created_at\` datetime NOT NULL, \`updated_at\` datetime NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_a95e949168be7b7ece1a2382fe\` (\`uuid\`), UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_a95e949168be7b7ece1a2382fe\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
