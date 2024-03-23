import { INestApplication } from '@nestjs/common';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import * as settings from './../../package.json';

const swaggerRunner = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Apartments API')
    .setDescription(
      'Here you can find all the API references for the Apartments API',
    )
    .setVersion('V-' + settings.version)
    .addTag('Apartments')
    .addBearerAuth(
      {
        description: 'Please enter token in following format: <JWT>',
        name: 'authorization',
        bearerFormat: 'Bearer <JWT>',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'authorization',
    )
    .build();

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Apratments Api Docs',
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, customOptions);

  console.log('Swagger is running on /api-docs');
};

export default swaggerRunner;
