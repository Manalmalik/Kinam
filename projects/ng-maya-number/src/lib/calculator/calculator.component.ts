import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'kinam-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  @Input() initValue: number;

  public inputControl = new FormControl(0);

  public ngOnInit() {
    if (this.initValue) {
      this.inputControl.patchValue(this.initValue);
    }
  }
}
