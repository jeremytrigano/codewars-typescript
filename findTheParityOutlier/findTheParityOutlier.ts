export function findOutlier(integers: number[]) {
  // declare count array and last number array
  let arrCount = [0, 0];
  let arrLastNum: number[] = new Array(2);
  let res: number = Number.NaN;
  integers.forEach((num) => {
    // count every number as even or odd
    // store number in array 0 if even array 1 if odd
    if (num % 2 === 0) {
      arrCount[0]++;
      arrLastNum[0] = num;
    } else {
      arrCount[1]++;
      arrLastNum[1] = num;
    }
    // when a count is = 1 and the other >= 2
    if (
      (arrCount[1] === 1 && arrCount[0] >= 2) ||
      (arrCount[0] === 1 && arrCount[1] >= 2)
    ) {
      // then return the corresponding number of count equal 1
      res = arrCount[0] === 1 ? arrLastNum[0] : arrLastNum[1];
    }
  });
  return res;
}
