import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { MayanDigit, MayanDigits, getMayanNumber } from './maya-number';
import { of, Observable, defer } from 'rxjs';
import { map } from 'rxjs/operators';
import { memoize } from 'decko';

@Component({
  selector: 'kinam-maya-number-block',
  templateUrl: './maya-number-block.component.html',
  styleUrls: ['./maya-number-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MayaNumberBlockComponent implements OnInit {
  @Input() number: number;

  public number$: Observable<any>;

  public ngOnInit() {}

  @memoize
  public getVal$(number): Observable<any> {
    return defer(() => of(number)).pipe(
      map(res => getMayanNumber(res)),
      map(res => res.map(x => x.filter(y => y.length))),
      map(block => {
        return {
          numeric: block.map(x =>
            x.map(y => this.getValFromRow(y)).reduce((acc, val) => acc + val, 0)
          ),
          block,
          inner: block.map(x => ({
            mayan: x,
            numeric: x.map(this.getValFromRow)
          }))
        };
      })
    );
  }

  public getValFromRow(row: MayanDigit[]) {
    return row.reduce((acc, value) => {
      switch (value) {
        case MayanDigits.Five: {
          return acc + 5;
        }
        case MayanDigits.One: {
          return acc + 1;
        }
        default:
          return acc;
      }
    }, 0);
  }

  public isSimpleNumber(val: any) {
    if (!val.length) {
      return true;
    }
    return typeof val === 'string';
  }
}
