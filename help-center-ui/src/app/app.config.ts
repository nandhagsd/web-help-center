import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {provideAngularSvgIcon} from 'angular-svg-icon';
import {provideNglConfig} from '@vallift/ngl';
import {provideNgxMask} from 'ngx-mask';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAngularSvgIcon(),
    provideNglConfig({
      baseApiUrl: '',
      enableUnsavedChangesWarning: true,
      enableDevTools: true
    }),
    provideNgxMask()
  ]
};
