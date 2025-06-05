import 'dotenv/config';  // load env vars from .env
import { DataSource } from 'typeorm';
import { Listing } from './listing/listing.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Listing],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,    // best to disable for migrations
  ssl: {
    rejectUnauthorized: false,  // If you connect to AWS RDS with SSL and self-signed cert
  },
});
