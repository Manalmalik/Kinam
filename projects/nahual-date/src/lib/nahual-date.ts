import { format } from 'date-fns';
import * as nahualGetter from 'nahuales';

import { DAY_SIGNS } from './day-sign';


const findDaySign = (
  day: number
) => DAY_SIGNS.find(sign => sign.day === day).name;

const getImg = (daySign: string) => `assets/signs/${daySign}.png`;

class KinamNahual {
  public nahualName: string;
  public nahualDay: number;
  public daySign: string;
  public image = `assets/signs/oc.png`;
  public date: Date;

  constructor(date?: Date) {
    if (date && date instanceof Date) {
      this.date = date;
    } else {
      this.date = new Date();
    }

    const month = date.getMonth() + 1;
    const dateStr = new Date(`${date.getFullYear()}-${month < 10 ? (`0${month}`) : month}-${date.getDate()}`);
    const { nahual, day } = nahualGetter.nahual(date);


    this.nahualDay = day;
    this.nahualName = nahual;
    this.daySign = findDaySign(this.nahualDay);
    this.image = getImg(this.daySign);
  }

  public isValidDate = (date: string | Date) => format(date, 'YYYY-MM-DD') !== 'Invalid Date';

  public format(customFormat = 'YYYY-MM-DD') {
    return format(
      this.date,
      customFormat,
    );
  }

  public getDay() {
    return this.date.getDate();
  }

  public getMonth() {
    return this.date.getMonth();
  }

  public getYear() {
    return this.date.getFullYear();
  }

}

const kinamNahual = (date?: Date) => new KinamNahual(date);

export { kinamNahual, KinamNahual };
