export function duplicateCount(text: string): number {
  // store count of letters
  const lettersCount = {};

  // count each letters
  for (let i = 0; i < text.length; i++) {
    // lowercase the letter
    const letter = text[i].toLowerCase();
    // if letter in lettersCount increment
    if (letter in lettersCount) {
      lettersCount[letter]++;
    } else {
      // else init letter to 1
      lettersCount[letter] = 1;
    }
  }

  // store number of duplicates
  let numDuplicates = 0;
  // count the duplicates
  for (let letter in lettersCount) {
    if (lettersCount[letter] > 1) numDuplicates++;
  }

  return numDuplicates;
}
