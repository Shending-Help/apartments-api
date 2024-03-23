import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerRunner from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerRunner(app);
  await app.listen(3000);
}
bootstrap();
