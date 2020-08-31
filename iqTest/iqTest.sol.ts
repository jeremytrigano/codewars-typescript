export function iqTest(numbers: string): number {
  let evenness: number[] = numbers.split(' ').map((x) => Number(x) % 2);
  return evenness.reduce((a, b) => a + b) == 1
    ? evenness.indexOf(1) + 1
    : evenness.indexOf(0) + 1;
}
