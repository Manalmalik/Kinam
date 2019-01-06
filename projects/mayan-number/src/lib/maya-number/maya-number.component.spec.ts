import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { MayaNumberComponent } from './maya-number.component';


describe('MayaNumberComponent', () => {

  let spectator: Spectator<MayaNumberComponent>;
  const createComponent = createTestComponentFactory({
    component: MayaNumberComponent,
    shallow: true
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});

