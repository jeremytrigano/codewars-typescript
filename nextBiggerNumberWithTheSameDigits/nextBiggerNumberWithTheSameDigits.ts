export function nextBigger(n: number): number {
  // store digits in array
  const digits = n.toString().split('');
  // find the rightest digit where i > i-1
  let smallR = -1;
  for (let i = digits.length - 1; i > 0; i--) {
    if (+digits[i] > +digits[i - 1]) {
      smallR = i - 1;
      break;
    }
  }
  // if no smallR return -1
  if (smallR == -1) return smallR;
  // splice the digits in the smallR
  let arrRight = digits.splice(smallR);
  // get smallR value
  const smallRValue = arrRight.splice(0, 1)[0];
  // find the lowest digit > smallRValue in right part
  let lowestDigit = null;
  //  lowest digit index
  let lowestDigiti = null;
  for (let i = 0; i < arrRight.length; i++) {
    if (arrRight[i] > smallRValue) {
      if (lowestDigit == null || arrRight[i] < lowestDigit) {
        lowestDigit = arrRight[i];
        lowestDigiti = i;
      }
    }
  }
  // if no lowest digit return -1
  if (lowestDigiti == null) return -1;
  arrRight.splice(lowestDigiti, 1);
  arrRight.push(smallRValue);
  arrRight = arrRight.sort();
  // concat the left + new smallR  + arrRight part
  if (lowestDigit == null) lowestDigit = '';
  const ret = +digits.concat([lowestDigit]).concat(arrRight).join('');
  if (ret < n) return -1;

  return ret;
}
