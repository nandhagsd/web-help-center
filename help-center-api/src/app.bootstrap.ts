import { INestApplication, Type, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppExceptionFilter } from '@core/app-exception.filter';
import { AdminModule } from '@api/admin/admin.module';
import { UserModule } from '@api/user/user.module';

interface AppStartupLogOptions {
  appName: string;
  port: number;
}

interface SwaggerOptions {
  title: string;
  description: string;
  version: string;
  path: string;
  jsonDocumentUrl: string;
  modules: Type<unknown>[];
}

const swaggerOptionsList: SwaggerOptions[] = [
  {
    title: 'Admin API',
    description: 'Admin APIs for Article manager',
    version: '1.0',
    path: 'api/admin/docs',
    jsonDocumentUrl: 'api/admin/docs-json',
    modules: [AdminModule],
  },
  {
    title: 'User API',
    description: 'User APIs for Article manager',
    version: '1.0',
    path: 'api/user/docs',
    jsonDocumentUrl: 'api/user/docs-json',
    modules: [UserModule],
  },
];

export function initializeApp(app: INestApplication): void {
  app.useGlobalFilters(new AppExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: ['http://localhost:6005', 'https://dev-support.smartdining.co'],
    credentials: true,
  });

  setupSwagger(app);
}

function setupSwagger(app: INestApplication): void {
  for (const options of swaggerOptionsList) {
    setupSingleSwagger(app, options);
  }
}

function setupSingleSwagger(
  app: INestApplication,
  options: SwaggerOptions,
): void {
  const config = new DocumentBuilder()
    .setTitle(options.title)
    .setDescription(options.description)
    .setVersion(options.version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: options.modules,
  });

  SwaggerModule.setup(options.path, app, document, {
    jsonDocumentUrl: options.jsonDocumentUrl,
  });
}

export function setupHotReload(
  app: INestApplication,
  hotModule: {
    hot?: {
      accept: () => void;
      dispose: (callback: () => Promise<void>) => void;
    };
  },
): void {
  if (hotModule?.hot) {
    hotModule.hot.accept();
    hotModule.hot.dispose(() => app.close());
  }
}

export function logAppStartup(options: AppStartupLogOptions): void {
  const nodeEnv = process.env.NODE_ENV ?? '.env';

  console.log(`
              🚀 ${options.appName} running
              --------------------------------------------------
              URL              : http://localhost:${options.port}
              Admin Swagger    : http://localhost:${options.port}/api/admin/docs
              User Swagger     : http://localhost:${options.port}/api/user/docs
              Environment      : ${nodeEnv}
              --------------------------------------------------
              `);
}
