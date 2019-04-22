import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { MayanDigit, MayanDigits, getMayanNumber } from "./maya-number";

@Component({
  selector: "kinam-maya-number-block",
  templateUrl: "./maya-number-block.component.html",
  styleUrls: ["./maya-number-block.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MayaNumberBlockComponent {
  @Input() number: number;

  public getValFromRow(row: MayanDigit[]) {
    let acc = 0;
    while (row.length) {
      const cell = row[row.length - 1];
      if (!cell) {
        return;
      }
      switch (cell) {
        case MayanDigits.Five: {
          acc = acc + 5;
          row.pop();
          break;
        }
        case MayanDigits.One: {
          acc = acc + 1;
          row.pop();
          break;
        }
      }
    }
    return acc;
  }

  /**
   * Checks if row should have inlining due to occurances of maya-one
   */
  public hasInlineElements(number: number) {
    return number < 5;
  }

  public getMayanNumberBlock(nr: number) {
    return getMayanNumber(nr);
  }

  public isSimpleNumber(val: any) {
    if (!val.length) {
      return true;
    }
    return typeof val === "string";
  }
}
