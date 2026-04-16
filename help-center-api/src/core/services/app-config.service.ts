import { Injectable, Inject } from '@nestjs/common';
import appConfig, { AppConfig } from '../../app.config';

@Injectable()
export class AppConfigService {
  constructor(
    @Inject(appConfig.KEY)
    private readonly config: AppConfig,
  ) {}

  get all(): AppConfig {
    return this.config;
  }

}
