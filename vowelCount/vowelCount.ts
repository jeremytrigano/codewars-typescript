export function getCount(str: string) {
  // create vowels
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  //   // store the count
  //   let count = 0;
  //   // for each character in given string
  //   for (let i = 0; i < str.length; i++) {
  //     // check if it's a vowel
  //     if (vowels[str[i]]) {
  //       // then increment +1 the count
  //       count++;
  //     }
  //   }
  //   // return the count
  //   return count;
  return str.split('').reduce((count, chr) => {
    if (vowels[chr]) {
      count++;
    }
    return count;
  }, 0);
}
