/* eslint-disable prettier/prettier */
console.log("Loading DataSource...");

import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Listing } from './listing/listing.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: "my-nexus-db.cr4gy2yuoift.us-east-2.rds.amazonaws.com",
  port: 5432,
  username: "postgres",
  password: "Yogini!2908",
  database: "nexus",
  ssl: process.env.DB_SSL === 'true',
  extra: process.env.DB_SSL === 'true' ? { ssl: { rejectUnauthorized: false } } : {},
  entities: [Listing],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Always false in production
});
