import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port = process.env.PORT ?? 3300;
  await app.listen(port, '0.0.0.0'); // ← Bind to all network interfaces!

  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}
bootstrap();
