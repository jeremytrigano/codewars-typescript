export class G964 {
  public static digPow = (n, p) => {
    var x = n
      .toString()
      .split('')
      .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
    return x % n ? -1 : x / n;
  };
}
