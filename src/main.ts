/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3300, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log('DB_USERNAME:', process.env.DB_USERNAME);
}
bootstrap();
