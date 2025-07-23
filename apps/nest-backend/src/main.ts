import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Environment, EnvironmentVariables } from './config/env';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<EnvironmentVariables, true>);

  const port = configService.get<number>('BACKEND_PORT');
  const env = configService.get<Environment>('NODE_ENV');

  const logger = app.get(Logger);

  if (env !== Environment.PRODUCTION) {
    //* TODO: Switch to "debug" logging when implementing a custom logger
    //* debug logs are not shown in production
    logger.log(`Nest backend running on port: ${port}`);
  }

  await app.listen(port);
}

bootstrap();
