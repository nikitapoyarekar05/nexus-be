"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
console.log("Loading DataSource...");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const listing_entity_1 = require("./listing/listing.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.DB_SSL === 'true',
    extra: process.env.DB_SSL === 'true' ? { ssl: { rejectUnauthorized: false } } : {},
    entities: [listing_entity_1.Listing],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map