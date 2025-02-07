import {
  Component,
  Input,
  Attribute,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { IconSources, IconSource } from './icon';

type IconSizes = 'sm' | 'md' | 'lg';
type IconTypes = 'maya-number';

@Component({
  selector: 'kinam-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  constructor(
    // Icon name.
    @Attribute('name') public name: string
  ) {}

  // Icon size.
  @Input() size: IconSizes = 'sm';

  // Icon type.
  @Input() type: IconTypes = 'maya-number';

  // Icon type.
  @Input() classList: string[] = [];

  public get cssClasses() {
    if (this.getIconType(this.name) === IconSource.Css) {
      return [
        ...this.classList,
        this.size,
        `icon`,
        `css-icon`,
        `icon-${this.name}`
      ];
    }
    return [
      ...this.classList,
      this.size,
      'icon',
      'svg-icon',
      `icon-${this.name}`
    ];
  }

  public getIconType(name: string) {
    if (!IconSources[name]) {
      throw new Error(`Couldn't find icon ${name}`);
    }
    return IconSources[name];
  }
}
