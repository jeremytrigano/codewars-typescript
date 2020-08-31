export function iqTest(numbers: string): number {
  // split string to array of numbers
  const splitNumbers = numbers.split(' ').map(Number);
  let indexRes;
  // if more than 1 odd in 3 first numbers
  if (splitNumbers.slice(0, 3).filter((i) => i % 2 !== 0).length > 1) {
    // store the index start to 1 of the only one even
    splitNumbers.forEach((v, index) => {
      if (v % 2 === 0) {
        indexRes = index + 1;
      }
    });
  } else {
    // else store the index start to 1 of the only one odd
    splitNumbers.forEach((v, index) => {
      if (v % 2 !== 0) {
        indexRes = index + 1;
      }
    });
  }
  // return the index start to 1
  return indexRes;
}
