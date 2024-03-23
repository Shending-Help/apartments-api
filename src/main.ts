import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerRunner from './config/swagger.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  swaggerRunner(app);
  await app.listen(4000);
}
bootstrap();
