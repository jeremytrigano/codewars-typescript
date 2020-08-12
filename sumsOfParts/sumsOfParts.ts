export function partsSums(ls: number[]): number[] {
  //  create array response
  let arrResp = [];
  // store the sum of all numbers of given array
  let sumAll = ls.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // push to array response sumAll
  arrResp.push(sumAll);
  // sumAll is sumAll minus the value of iterated array
  for (let i = 0; i < ls.length; i++) {
    sumAll -= ls[i];
    // push to array response new sumAll
    arrResp.push(sumAll);
  }
  return arrResp;
}
