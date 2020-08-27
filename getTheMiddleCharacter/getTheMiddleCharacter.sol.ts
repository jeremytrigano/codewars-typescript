export function getMiddle(s: string) {
  return s.length % 2 === 0
    ? s.substr(s.length / 2 - 1, 2)
    : s.substr(s.length / 2, 1);
}
