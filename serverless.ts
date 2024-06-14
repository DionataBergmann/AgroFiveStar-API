const serverlessHttp = require("serverless-http");
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./src/app.module');
const express = require('express');
const { ExpressAdapter } = require('@nestjs/platform-express');

const expressApp = express();

async function bootstrap() {
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    await nestApp.init();
    const handler = serverlessHttp(expressApp);
    return handler;
}

module.exports.handler = bootstrap();
