export function humanReadable(seconds: number): string {
  let h: string;
  let m: string;
  let s: string;
  // if hours > 99 then return to the max
  if (Math.trunc(seconds / 3600) / 99 > 1) {
    return '99:59:59';
  } else {
    // get hours and fill with 0
    h = Math.trunc(seconds / 3600)
      .toString()
      .padStart(2, '0');
    // get indivisible minutes and fill with 0
    m = (Math.trunc(seconds / 60) % 60).toString().padStart(2, '0');
    // get indivisible seconds and fill with 0
    s = (seconds % 60).toString().padStart(2, '0');
  }
  // join hours minutes seconds with :
  return [h, m, s].join(':');
}
