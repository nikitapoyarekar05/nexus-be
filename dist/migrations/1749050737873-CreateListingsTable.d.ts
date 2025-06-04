import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateListingsTable1749050737873 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
