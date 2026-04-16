import { Module } from '@nestjs/common';
import { discoverProviders } from '@shared/utils/discover-providers.helper';
import path from 'path';

const controllers = discoverProviders('controller', __dirname);
const apiServices = discoverProviders('service', __dirname);

const corePath = path.join(__dirname, '..', '..', 'core', 'services');
const coreServices = discoverProviders('service', corePath);

@Module({
  imports: [],
  controllers: [...controllers],
  providers: [...apiServices, ...coreServices],
  exports: [...apiServices, ...coreServices],
})
export class UserModule {}
