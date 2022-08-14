import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication) {
    const configuration = new DocumentBuilder()
        .setTitle('DietingFit')
        .setDescription('The API for managing DietingFit stuff.')
        .setVersion('0.1.0')
        .build();

    const document = SwaggerModule.createDocument(app, configuration);

    SwaggerModule.setup('api', app, document);
}
