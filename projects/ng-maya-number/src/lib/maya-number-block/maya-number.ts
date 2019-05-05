enum MayanDigits {
  Zero = '@',
  One = '.',
  Five = '-'
}

type MayanDigit = '@' | '.' | '-';

/**
 * Getter for sequences of simple numbers
 */
const fiveSequence = (nr = 1): string[] => {
  return new Array<string>(nr).fill(MayanDigits.Five);
};

const oneSequence = (nr = 1): string[] => {
  return new Array<string>(nr).fill(MayanDigits.One);
};

function getRow(number: number) {
  if (!number) {
    return [[MayanDigits.Zero]];
  }
  return [
    oneSequence(Math.floor(number % 5)),
    fiveSequence(Math.floor(number / 5))
  ];
}

/**
 * Code by https://github.com/gabber7
 */

const logBase = (n: number, base: number) => Math.log(n) / Math.log(base);

function getMayanNumber(number: number): any[] {
  if (number === NaN) {
    return;
  }
  if (number === 0) {
    return [[MayanDigits.Zero]];
  }
  const log = Math.floor(logBase(number, 20));
  const collect = [];
  for (let i = log; i >= 0; i--) {
    const n = Math.pow(20, i);
    const tmp = Math.floor(number / n);
    number = number - tmp * n;
    collect.push(getRow(tmp));
  }
  return collect.filter(x => !!x.length);
}

export { getMayanNumber, MayanDigits, MayanDigit };
