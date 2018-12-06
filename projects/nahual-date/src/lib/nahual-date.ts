
import { format } from 'date-fns';
import * as nahualGetter from 'nahuales';

const daysSign = [
  {
    name: 'imix',
    day: 1
  },
  {
    name: 'ik',
    day: 2
  },
  {
    name: 'akbal',
    day: 3
  },
  {
    name: 'kan',
    day: 4
  },
  {
    name: 'chicchan',
    day: 5
  },
  {
    name: 'cimi',
    day: 6
  },
  {
    name: 'manik',
    day: 7
  },
  {
    name: 'lamat',
    day: 8
  },
  {
    name: 'muluc',
    day: 9
  },
  {
    name: 'oc',
    day: 10
  },
  {
    name: 'chuen',
    day: 11
  },
  {
    name: 'eb',
    day: 12
  },
  {
    name: 'ben',
    day: 13
  },
  {
    name: 'ix',
    day: 14
  },
  {
    name: 'men',
    day: 15
  },
  {
    name: 'cib',
    day: 16
  },
  {
    name: 'caban',
    day: 17
  },
  {
    name: 'etznab',
    day: 18
  },
  {
    name: 'cauac',
    day: 19
  },
  {
    name: 'ahau',
    day: 20
  }
];

const findDaySign = (
  day: number
) => daysSign.find(sign => sign.day === day).name;

const getImg = (daySign: string) => `assets/signs/${daySign}.png`;

class KinamNahual {
  public nahualName: string;
  public nahualDay: number;
  public daySign: string;
  public image = `assets/signs/oc.png`;
  public date: Date;

  constructor(date?: Date) {
    if (date) {
      this.date = date;
    } else {
      this.date = new Date();
    }

    const { nahual, day } = nahualGetter.nahual(date);

    this.nahualDay = day + 1;
    this.nahualName = nahual;
    this.daySign = findDaySign(this.nahualDay);
    this.image = getImg(this.daySign);
  }

  // public getNahualFromDate = (date) => this.getNahualFromDate(new Date(date));
  public isValidDate = (date: string | Date) => format(date) !== 'Invalid Date';

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
    return this.date.getMonth() + 1;
  }

  public getYear() {
    return this.date.getFullYear();
  }

}

const fromNumbers = (day: number, month: number, year: number) => {
  const dateFromNumber = new Date(year, month - 1, day);
  return new KinamNahual(dateFromNumber);
};


const kinamNahual = (date?: Date) => new KinamNahual(date);

export { fromNumbers, kinamNahual, KinamNahual };
