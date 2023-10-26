import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Console } from 'console';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  app.useGlobalPipes(new ValidationPipe());
  console.log(`API corriendo en ${await app.getUrl()}`);
  
}
bootstrap();
