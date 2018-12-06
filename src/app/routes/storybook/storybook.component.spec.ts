import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { ReactiveFormsModule } from '@angular/forms';

import { StorybookComponent } from './storybook.component';

describe('StorybookComponent', () => {

  let spectator: Spectator<StorybookComponent>;
  const createComponent = createTestComponentFactory({
    component: StorybookComponent,
    imports: [ReactiveFormsModule],
    shallow: true
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});

