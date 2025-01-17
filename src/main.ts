import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`service running at localhost:${port}`)
}
bootstrap();