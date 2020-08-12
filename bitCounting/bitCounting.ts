export function countBits(n: number) {
  // transform n to binary
  // split the binary to an array of digits
  // return the length of filter which keep only ones
  return n
    .toString(2)
    .split('')
    .filter((num) => +num === 1).length;
}
