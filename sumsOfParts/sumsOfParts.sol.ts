export function partsSums(ls: number[]): number[] {
  let summArr = [0];
  for (let i = ls.length - 1; i >= 0; i--) {
    summArr.push(summArr[summArr.length - 1] + ls[i]);
  }
  return summArr.reverse();
}
