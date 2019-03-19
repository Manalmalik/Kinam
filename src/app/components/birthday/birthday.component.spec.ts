import { BirthdayComponent } from './birthday.component';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';

describe('BirthdayComponent', () => {

  let spectator: Spectator<BirthdayComponent>;
  const createComponent = createTestComponentFactory({
    component: BirthdayComponent,
    shallow: true
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
