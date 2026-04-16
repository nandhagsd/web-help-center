import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {JwtModule} from "@nestjs/jwt";
import {ApiModule} from "@api/api.module";
import {AppConfigModule} from "@core/modules/config.module";
import {RequestContextModule} from "@shared/request-context/request-context.module";

const jwtModuleConfig = JwtModule.register({
  secret: process.env.JWT_SECRET,
  signOptions: {
    issuer: 'help-center-api',
  },
  global: true,
});

@Module({
  imports: [
    AppConfigModule,
    ApiModule,
    RequestContextModule,
    jwtModuleConfig,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
