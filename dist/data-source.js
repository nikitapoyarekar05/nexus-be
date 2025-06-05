"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const listing_entity_1 = require("./listing/listing.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [listing_entity_1.Listing],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    ssl: {
        rejectUnauthorized: false,
    },
});
//# sourceMappingURL=data-source.js.map