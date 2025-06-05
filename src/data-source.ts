/* eslint-disable prettier/prettier */
console.log("Loading DataSource...");

import { DataSource } from 'typeorm';
import { Listing } from './listing/listing.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Yogini@2908',
  database: 'nexus',
  entities: [Listing],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
