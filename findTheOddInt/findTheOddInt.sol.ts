export const findOdd = (xs: number[]): number => {
  return xs.reduce((a, b) => a ^ b);
};
