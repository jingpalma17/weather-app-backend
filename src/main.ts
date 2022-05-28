import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const basePath = 'api';
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.setGlobalPrefix(basePath);
  app.enableCors({ origin: '*' });
  const config = new DocumentBuilder()
    .setTitle('Admin Service')
    .setDescription('The weather app service API documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('', app, document);
  await app.listen(configService.get('PORT'));
}
bootstrap();
