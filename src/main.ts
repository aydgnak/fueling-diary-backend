import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { PORT } from '@config/index';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(PORT);
}

bootstrap();
