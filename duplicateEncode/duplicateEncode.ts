export function duplicateEncode(word: string) {
  let wordReturn = '';
  word = word.toLowerCase();
  word.split('').map((c) => {
    word.replace(c, '').indexOf(c) === -1
      ? (wordReturn += '(')
      : (wordReturn += ')');
  });
  return wordReturn;
}
