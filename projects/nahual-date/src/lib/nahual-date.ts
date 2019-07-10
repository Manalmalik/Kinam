import * as nahualGetter from 'nahuales';

import * as moment_ from 'moment';
export const moment = moment_;

export enum Nawal {
  batz = 'B\'atz\'',
  e = 'E',
  aj = 'Aj',
  ix = 'Ix',
  tzikin = 'Tz\'ikin',
  ajmak = 'Ajmak',
  noj = 'No\'j',
  tijax = 'Tijax',
  kawok = 'Kawok',
  ajpu = 'Ajpu',
  imox = 'Imox',
  iq = 'Iq\'',
  aqabal = 'Aq\'ab\'al',
  kat = 'K\'at',
  kan = 'Kan',
  kame = 'Kame',
  kej = 'Kej',
  qanil = 'Q\'anil',
  toj = 'Toj',
  tzi = 'Tz\'i',
}

const BASE_PATH = 'assets/nawales/';

export const NAWAL_IMG = {
  [Nawal.aj]: 'aj.jpg',
  [Nawal.ajmak]: 'ajmak.jpg',
  [Nawal.ajpu]: 'ajpu.jpg',
  [Nawal.aqabal]: 'aqabal.jpg',
  [Nawal.batz]: 'batz.jpg',
  [Nawal.e]: 'e.jpg',
  [Nawal.imox]: 'imox.jpg',
  [Nawal.iq]: 'iq.jpg',
  [Nawal.ix]: 'ix.jpg',
  [Nawal.kame]: 'kame.jpg',
  [Nawal.kan]: 'kan.jpg',
  [Nawal.kat]: 'kat.jpg',
  [Nawal.kawok]: 'kawok.jpg',
  [Nawal.kej]: 'kej.jpg',
  [Nawal.noj]: 'noj.jpg',
  [Nawal.qanil]: 'qanil.jpg',
  [Nawal.tijax]: 'tijax.jpg',
  [Nawal.toj]: 'toj.jpg',
  [Nawal.tzi]: 'tzi.jpg',
  [Nawal.tzikin]: 'tzikin.jpg',
}

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
    this.image = BASE_PATH + NAWAL_IMG[nahual];
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
