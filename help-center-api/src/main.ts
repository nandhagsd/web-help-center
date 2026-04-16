import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {initializeApp, logAppStartup, setupHotReload} from "./app.bootstrap";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initializeApp(app);

  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port);

  setupHotReload(app, module);

  logAppStartup({
    appName: 'Article Manager API',
    port,
  });
}
bootstrap();
