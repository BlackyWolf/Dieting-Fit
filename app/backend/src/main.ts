import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { setupSwagger } from './utilities/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    setupSwagger(app);

    await app.listen(3000);
}

bootstrap();
