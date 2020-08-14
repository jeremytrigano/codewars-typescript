export const digitalRoot = (n: number): number => {
  // do the sum each digit of n and store in n
  do {
    n = n
      .toString()
      .split('')
      .reduce((accumulator, currentValue) => accumulator + +currentValue, 0);
  } while (
    // if sum have more than 1 digit repeat
    n > 9
  );
  return n;
};
