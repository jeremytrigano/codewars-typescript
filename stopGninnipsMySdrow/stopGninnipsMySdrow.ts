export class Kata {
  static spinWords(words: string) {
    return (
      words
        // get each words
        .split(' ')
        .map((word) => {
          // if current word contains > 4 letters
          if (word.length > 4) {
            // then reverse order of each letters and join
            return word.split('').reverse().join('');
          }
          return word;
        })
        // join each words with space
        .join(' ')
    );
  }
}
