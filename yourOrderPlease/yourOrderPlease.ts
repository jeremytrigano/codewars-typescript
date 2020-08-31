export function order(words: string): string {
  // If the input string is empty, return an empty string
  if (!words) return '';
  // store the sorted words
  const sortedWords = [];
  // split the sentence
  const splitSentence = words.split(' ');

  // for each word in sentence
  for (let i = 0; i < splitSentence.length; i++) {
    const word = splitSentence[i];
    // find digit in the word
    const match = word.match(/\d/);
    let digit;
    // if match get the first digit else return empty string
    if (match && match.length) digit = +match[0];
    else return '';
    // insert into sorted array at right place
    sortedWords[digit - 1] = word;
  }

  // join array to return sentence
  return sortedWords.join(' ');
}
