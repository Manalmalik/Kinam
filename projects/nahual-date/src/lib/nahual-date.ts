import * as nahualGetter from 'nahuales';

import { DAY_SIGNS } from './day-sign';
import * as moment_ from 'moment';
export const moment = moment_;

function findDaySign(day: number) {
  const sign = DAY_SIGNS.find(s => s.day === day);
  return sign ? sign : { name: '', label: '' };
}

const getImg = (daySign: string) =>
  daySign ? `assets/signs/${daySign}.png` : '';


class KinamNahual {
  public nahualName: string;
  public nahualDay: number;
  public daySign: string;
  public image: string;
  public date: Date;
  public label: string;

  constructor(date?: Date) {
    const newDate = moment.utc(date);
    if (newDate.isValid()) {
      this.date = newDate.toDate();
    } else {
      this.date = moment.utc().toDate();
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
    const daySign = findDaySign(this.nahualDay);
    this.daySign = daySign.label;

    this.image = getImg(daySign.name);
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

export { kinamNahual, KinamNahual };
