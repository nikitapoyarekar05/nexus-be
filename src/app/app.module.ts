import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingModule } from '../listing/listing.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [],
      synchronize: true, // Disable in production!
      port: 5432,
      username: 'postgres',
      password: 'Yogini@2908',
      database: 'nexus',
      host: process.env.DB_HOST,
      autoLoadEntities: true,
    }),
    ListingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
