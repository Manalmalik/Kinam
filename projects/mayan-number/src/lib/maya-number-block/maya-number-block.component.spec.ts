import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { MayaNumberBlockComponent } from './maya-number-block.component';

describe('MayaNumberBlockComponent', () => {

  let spectator: Spectator<MayaNumberBlockComponent>;
  const createComponent = createTestComponentFactory({
    component: MayaNumberBlockComponent,
    shallow: true
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
