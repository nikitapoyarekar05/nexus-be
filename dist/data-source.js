"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
console.log("Loading DataSource...");
const typeorm_1 = require("typeorm");
const listing_entity_1 = require("./listing/listing.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Yogini@2908',
    database: 'nexus',
    entities: [listing_entity_1.Listing],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map