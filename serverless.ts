import serverless from 'serverless-http';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import express, { Express } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

const expressApp: Express = express();

async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await nestApp.init();
  
  return serverless(expressApp);
}

module.exports.handler = bootstrap().then(handler => handler);