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
    .setTitle('Weather Service')
    .setDescription('The weather app service API documentation')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .addOAuth2({
      type: 'oauth2',
      flows: {
        implicit: {
          authorizationUrl: `${configService.get(
            'AUTH0_ISSUER_URL',
          )}authorize?audience=${configService.get('AUTH0_AUDIENCE')}`,
          tokenUrl: `${configService.get('AUTH0_ISSUER_URL')}oauth/token`,
          scopes: [],
        },
      },
      description: 'oauth2',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('', app, document, {
    swaggerOptions: {
      oauth2RedirectUrl: `${configService.get(
        'AUTH0_AUDIENCE',
      )}oauth2-redirect.html`,
    },
  });
  await app.listen(configService.get('PORT'));
}
bootstrap();
