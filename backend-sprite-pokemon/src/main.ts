import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT ?? 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}
bootstrap();
