"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
console.log("Loading DataSource...");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const listing_entity_1 = require("./listing/listing.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: "my-nexus-db.cr4gy2yuoift.us-east-2.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "Yogini!2908",
    database: "nexus",
    ssl: process.env.DB_SSL === 'true',
    extra: process.env.DB_SSL === 'true' ? { ssl: { rejectUnauthorized: false } } : {},
    entities: [listing_entity_1.Listing],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map