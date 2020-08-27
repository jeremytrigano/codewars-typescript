export function getMiddle(s: string) {
  // store string length
  const stringLength = s.length;
  const midFloorString = Math.floor(stringLength / 2);
  // if string length is even
  if (stringLength % 2 === 0) {
    // return string length / 2 floor, from mid position -1 to 0 2 characters
    return s.slice(midFloorString - 1, midFloorString + 1);
  } else {
    // else return string character mid position
    return s.charAt(midFloorString);
  }
}
