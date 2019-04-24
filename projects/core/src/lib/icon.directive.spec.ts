import { IconDirective } from './icon.directive';
import {
  createHostComponentFactory,
  SpectatorWithHost
} from '@netbasal/spectator';

describe('IconDirective ', () => {
  let host: SpectatorWithHost<IconDirective>;

  const createHost = createHostComponentFactory(IconDirective);

  it('should change the background color', () => {
    host = createHost(`<div kinamIcon></div>`);
    expect(host).toBeTruthy();
  });

  it('should have the right css class', () => {
    host = createHost(`<div kinamIcon name="maya-zero"></div>`);
    expect(host.debugElement.classes['icon-maya-zero']).toBeTruthy();
  });
});
