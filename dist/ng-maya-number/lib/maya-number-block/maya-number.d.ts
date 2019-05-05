declare enum MayanDigits {
    Zero = "@",
    One = ".",
    Five = "-"
}
declare type MayanDigit = '@' | '.' | '-';
declare function getMayanNumber(number: number): any[];
export { getMayanNumber, MayanDigits, MayanDigit };
