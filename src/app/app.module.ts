import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingModule } from '../listing/listing.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["src/entity/*.ts"],
      migrations: ["src/migrations/*.ts"],
      autoLoadEntities: true,
      synchronize: true, // Disable in production!
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ListingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
