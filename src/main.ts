import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CreateDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  )

  app.setGlobalPrefix('/api/v1')
  // const configService = app.get(ConfigService)
  SwaggerModule.setup('api', app, CreateDocument(app))
  await app.listen(3000);
}
bootstrap();
