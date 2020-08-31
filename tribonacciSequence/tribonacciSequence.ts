export function tribonacci(
  [a, b, c]: [number, number, number],
  n: number
): number[] {
  const arrRes = [a, b, c];
  // if n is <= 3
  if (n <= 3) {
    // then return part of a,b,c
    return arrRes.slice(0, n);
  }
  // while arr to return < n
  while (arrRes.length < n) {
    const l = arrRes.length;
    // sum of 3 lasts
    const sum = arrRes[l - 1] + arrRes[l - 2] + arrRes[l - 3];
    // add sum to arr
    arrRes.push(sum);
  }
  // return arr
  return arrRes;
}
