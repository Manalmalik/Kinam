import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { PresentationComponent } from './presentation.component';

describe('PresentationComponent', () => {

  let spectator: Spectator<PresentationComponent>;
  const createComponent = createTestComponentFactory({
    component: PresentationComponent,
    shallow: true
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});


