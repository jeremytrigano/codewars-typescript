export function disemvowel(str: string) {
  // return every characters not aeiou  via regex then join
  return str.match(/[^aeiou]/gi).join('');
}
