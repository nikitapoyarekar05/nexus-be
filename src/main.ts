import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3300, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
  // console.log('process.env.DB_USERNAME:', process.env.DB_USERNAME);
}
bootstrap();
