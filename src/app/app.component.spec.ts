import { Spectator, createTestComponentFactory } from '@netbasal/spectator';

import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let spectator: Spectator<AppComponent>;
  const createComponent = createTestComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule],
    shallow: true
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
