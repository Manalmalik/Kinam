import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WebsiteModule } from './app/website.module';
import { environment } from './environments/environment';
import smoothscroll from 'smoothscroll-polyfill';
import scrollSnapPolyfill from 'css-scroll-snap-polyfill';

if (environment.production) {
  enableProdMode();
}

/**
 * Smooth scroll polyfill
 */
smoothscroll.polyfill();
scrollSnapPolyfill();

platformBrowserDynamic()
  .bootstrapModule(WebsiteModule)
  .catch(err => console.error(err));
