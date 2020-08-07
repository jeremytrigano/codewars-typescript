export function findOdd(xs: number[]) {
  //  define new array to hold occurence of each numbers
  let arrOccurNum: number[][] = [[]];
  // for each number in xs
  xs.forEach((num) => {
    // if num is not in array of occurs
    const indexNum = numIsIn(arrOccurNum, num);
    if (indexNum === -1) {
      // then add number and 1 occur to array of occurs
      arrOccurNum.push([num, 1]);
    } else {
      // else num is in array of occurs then +1 occur
      arrOccurNum[indexNum][1] += 1;
    }
  });
  // return the odd occur in the array of occurs
  return findTheOdd(arrOccurNum);
}

/**
 * Return num index in index 0 of array of array
 * @param array array of array
 * @param num num to find
 * @returns index if find or -1
 */
function numIsIn(array: number[][], num: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === num) return i;
  }
  return -1;
}

/**
 * Return num in index 0 of array of array of index 1 is odd
 * @param array array of array
 * @returns num with odd occur or null if no odd occur
 */
function findTheOdd(array: number[][]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] % 2 === 1) return array[i][0];
  }
  return null;
}
