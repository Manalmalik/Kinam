import { CalculatorComponent } from './calculator.component';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';

describe('CalculatorComponent', () => {

  let spectator: Spectator<CalculatorComponent>;
  const createComponent = createTestComponentFactory({
    component: CalculatorComponent,
    shallow: true
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
