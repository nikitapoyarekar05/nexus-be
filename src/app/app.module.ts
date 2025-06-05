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
      host: 'localhost',
      database: 'nexus',
      autoLoadEntities: true,
    }),
    ListingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
