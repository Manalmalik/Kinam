import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input
} from "@angular/core";
import { FormControl } from "@angular/forms";

import { KinamNahual, kinamNahual } from "nahual-date";
import { addHours } from "date-fns";

@Component({
  selector: "kinam-birthday",
  templateUrl: "./birthday.component.html",
  styleUrls: ["./birthday.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BirthdayComponent implements OnInit {
  public dateCtrl: FormControl;

  @Input() date = new Date();
  public kinamDate: KinamNahual;

  public ngOnInit() {
    this.kinamDate = kinamNahual(this.date);
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }

  public handleDateChange(event) {
    const { value } = event.target;
    if (value) {
      const midDay = addHours(value, 12);
      this.kinamDate = kinamNahual(midDay);
      this.dateCtrl = new FormControl(this.kinamDate.date);
    }
  }
}
