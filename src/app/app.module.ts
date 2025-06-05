/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { ListingModule } from '../listing/listing.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "my-nexus-db.cr4gy2yuoift.us-east-2.rds.amazonaws.com",
      port: 5432,
      username: "postgres",
      password: "Yogini!2908",
      database: "nexus",
      ssl: process.env.DB_SSL === 'true',
      extra: process.env.DB_SSL === 'true' ? { ssl: { rejectUnauthorized: false } } : {},
      autoLoadEntities: true,
      synchronize: true,
    }),
    ListingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
