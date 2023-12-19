import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { PORT } from '@config/environment';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(MainModule);
  await app.listen(PORT);
}

bootstrap();
