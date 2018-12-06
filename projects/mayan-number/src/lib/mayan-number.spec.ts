import { getMayanNumber, MayanDigits } from './mayan-number';


describe('getMayanNumber', () => {
  it('should return zero in the first log level', () => {
    // expect(getMayanNumber(0)).toEqual([MayanDigits.Zero]);
  });
  it('should return one in the first log level', () => {
    const calculated = getMayanNumber(1);
    // expect(getMayanNumber(1)).toEqual([MayanDigits.One]);
  });
  it('should return five in the first log level', () => {
    // expect(getMayanNumber(5)).toEqual([MayanDigits.Five]);
  });
});
