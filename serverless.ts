import serverless from 'serverless-http';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import express, { Express } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

const app: Express = express();

async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(app));
  await nestApp.init();
}

bootstrap();

export const handler = serverless(app);
