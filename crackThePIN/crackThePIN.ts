// import md5
import * as crypto from 'crypto';
export const md5 = (contents: string) =>
  crypto.createHash('md5').update(contents).digest('hex');

export function crack(hash: string): string {
  // from 0 to 99999
  for (let i = 0; i < 100000; i++) {
    // fill iteration with 0
    const pinToTest = i.toString().padStart(5, '0');
    // return iteration if iteration md5 is equal to hash
    if (md5(pinToTest) === hash) {
      return pinToTest;
    }
  }
  return '';
}
