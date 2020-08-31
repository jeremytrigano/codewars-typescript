export function order(words: String): String {
  return words
    .split(' ')
    .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
    .join(' ');
}
