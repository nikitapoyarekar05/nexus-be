/* eslint-disable prettier/prettier */
console.log("Loading DataSource...");

import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Listing } from './listing/listing.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port:  5432,
  username:  process.env.DB_USERNAME,
  password:  process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === 'true',
  extra: process.env.DB_SSL === 'true' ? { ssl: { rejectUnauthorized: false } } : {},
  entities: [Listing],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
