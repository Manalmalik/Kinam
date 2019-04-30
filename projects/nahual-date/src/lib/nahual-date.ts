import { format } from 'date-fns';
import * as nahualGetter from 'nahuales';

import { DAY_SIGNS } from './day-sign';
import { of } from 'rxjs';

const FORMAT = 'YYYY-MM-DD';
const INVALID_DATE = 'Invalid Date';

function findDaySign(day: number) {
  const sign = DAY_SIGNS.find(s => s.day === day);
  return sign ? sign : { name: '' };
}

const getImg = (daySign: string) =>
  daySign ? `assets/signs/${daySign}.png` : '';

const isValidDate = (date: string | Date) => {
  return format(date, FORMAT) !== INVALID_DATE;
};

class KinamNahual {
  public nahualName: string;
  public nahualDay: number;
  public daySign: string;
  public image: string;
  public date: Date;

  constructor(date?: Date) {
    if (isValidDate(date)) {
      this.date = new Date(date);
    } else {
      this.date = new Date();
    }

    this.update(this.date);
  }

  public update(date: Date) {
    this.date = date;

    const { nahual, day } = nahualGetter.nahual(this.date);

    this.nahualDay = day;
    this.nahualName = nahual;
    /**
     * TODO: validate day signs with dag
     */
    this.daySign = findDaySign(this.nahualDay).name;
    this.image = getImg(this.daySign);
  }

  public format(customFormat = FORMAT) {
    return format(this.date, customFormat);
  }

  public get day() {
    return this.date.getDate();
  }

  public get month() {
    return this.date.getMonth() + 1;
  }

  public get year() {
    return this.date.getFullYear();
  }
}

const kinamNahual = (date: Date) => new KinamNahual(date);
const asObservable = (date: Date) => of(kinamNahual(date));

export { kinamNahual, KinamNahual, isValidDate, asObservable };
