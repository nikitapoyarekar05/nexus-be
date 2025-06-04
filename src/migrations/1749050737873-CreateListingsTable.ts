import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateListingsTable1749050737873 implements MigrationInterface {
    name = 'CreateListingsTable1749050737873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD CONSTRAINT "PK_520ecac6c99ec90bcf5a603cdcb" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "title" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "addressLine1" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "addressLine2" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "city" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "state" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "country" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "zipcode" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "description" text NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "listedBy" json NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "thumbNailUrl" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "propertyImages" json
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "wishlisted" boolean NOT NULL DEFAULT false
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "rent" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "deposit" integer NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "type" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "laundry" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "cooling" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "heating" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "bedrooms" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "baths" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "yearBuilt" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "size" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "parking" character varying
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."listings_status_enum" AS ENUM('AVAILABLE', 'OCCUPIED', 'OFF_MARKET', 'SOLD')
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "status" "public"."listings_status_enum" NOT NULL
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."listings_listingfor_enum" AS ENUM('RENT', 'BUY', 'SELL')
        `);
        await queryRunner.query(`
            ALTER TABLE "listings"
            ADD "listingFor" "public"."listings_listingfor_enum" NOT NULL DEFAULT 'RENT'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "listingFor"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."listings_listingfor_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "status"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."listings_status_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "parking"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "size"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "yearBuilt"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "baths"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "bedrooms"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "heating"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "cooling"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "laundry"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "type"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "deposit"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "rent"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "wishlisted"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "propertyImages"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "thumbNailUrl"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "listedBy"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "description"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "zipcode"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "country"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "state"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "city"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "addressLine2"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "addressLine1"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "title"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP CONSTRAINT "PK_520ecac6c99ec90bcf5a603cdcb"
        `);
        await queryRunner.query(`
            ALTER TABLE "listings" DROP COLUMN "id"
        `);
    }

}
