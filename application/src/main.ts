import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorFilter } from './Filters/error.filter'
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.useGlobalFilters(new ErrorFilter())
  app.setGlobalPrefix('/api/v1')
  await app.listen(configService.get('PORT', '3333'));
}
bootstrap();
