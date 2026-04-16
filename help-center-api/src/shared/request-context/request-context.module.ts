import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestContextMiddleware } from './request-context.middleware';
import { RequestContextService } from '@shared/request-context/request-context.service';

@Global()
@Module({
  providers: [RequestContextMiddleware, RequestContextService],
  exports: [RequestContextMiddleware, RequestContextService],
})
export class RequestContextModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
