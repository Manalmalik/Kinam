import { format } from "date-fns";
import * as nahualGetter from "nahuales";

import { DAY_SIGNS } from "./day-sign";

const findDaySign = (day: number) =>
  DAY_SIGNS.find(sign => sign.day === day).name;

const getImg = (daySign: string) => `assets/signs/${daySign}.png`;

class KinamNahual {
  public nahualName: string;
  public nahualDay: number;
  public daySign: string;
  public image = `assets/signs/oc.png`;
  public date = new Date();

  constructor(date?: Date) {
    if (this.isValidDate(date)) {
      this.date = new Date(date);
    } else {
      this.date = new Date();
    }

    const { nahual, day } = nahualGetter.nahual(date);

    this.nahualDay = day;
    this.nahualName = nahual;
    /**
     * TODO: validate day signs with dag
     */
    this.daySign = findDaySign(this.nahualDay);
    this.image = getImg(this.daySign);
  }

  public isValidDate(date: string | Date) {
    return format(date, "YYYY-MM-DD") !== "Invalid Date";
  }

  public format(customFormat = "YYYY-MM-DD") {
    return format(this.date, customFormat);
  }

  public getDay() {
    return this.date.getDate();
  }

  public getMonth() {
    return this.date.getMonth() + 1;
  }

  public getYear() {
    return this.date.getFullYear();
  }
}

const kinamNahual = (date: Date) => new KinamNahual(date);

export { kinamNahual, KinamNahual };
