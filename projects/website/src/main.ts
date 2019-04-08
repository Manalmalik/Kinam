import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import smoothscroll from 'smoothscroll-polyfill';
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

if (environment.production) {
  enableProdMode();
}

smoothscroll.polyfill();
scrollSnapPolyfill()


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
