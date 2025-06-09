import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
   const config = new DocumentBuilder()
    .setTitle('Neighbourly API')
    .setDescription('API documentation for the Neighbourly real estate platform')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(process.env.PORT ?? 3300, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log('process.env.DB_USERNAME:', process.env.DB_USERNAME);
}
bootstrap();
