import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'kinam-maya-number',
  templateUrl: './maya-number.component.html',
  styleUrls: ['./maya-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('loading', [
      state('0', style({
        'transform': 'scale(0.75)'
      })),
      state('1', style({
        'transform': 'scale(1)'
      })),
      transition('* => *', [
        animate('0.5s')
      ]),
    ])
  ],
})
export class MayaNumberComponent implements OnInit {
  @Input() number: string;

  public triggerLoading: number;

  public ngOnInit(): void {
    this.triggerLoading = 1;
  }
}
