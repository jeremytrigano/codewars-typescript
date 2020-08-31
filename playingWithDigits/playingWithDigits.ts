export class G964 {
  public static digPow = (n: number, p: number) => {
    // split number to digits
    const digits = n.toString().split('').map(Number);
    // sum digits of n taken to the successive powers of p
    let sum = 0;
    digits.forEach((digit) => {
      sum += Math.pow(digit, p);
      p++;
    });
    // return divider of sum if exists else return -1
    return sum % n === 0 ? sum / n : -1;
  };
}
