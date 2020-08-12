export class Challenge {
  static solution(number) {
    // create array of numbers below number
    const arrBelowNumber = [...Array(number).keys()];
    // const arrBelowNumber = Array.apply(null, { length: number }).map(
    //   Number.call,
    //   Number
    // );
    // filter multiples of 3 or 5 below number
    // sum filtered numbers
    return arrBelowNumber
      .filter((num) => num % 3 === 0 || num % 5 === 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}
