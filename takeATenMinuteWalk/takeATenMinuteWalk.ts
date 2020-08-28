export function isValidWalk(walk: string[]) {
  // return false if not 10 min walk
  if (walk.length !== 10) return false;

  // store directions
  const directions = {
    n: 0,
    e: 0,
    s: 0,
    w: 0,
  };

  // count each directions
  walk.forEach((direction) => directions[direction]++);

  // return boolean of same number of n and s, e and w
  return directions.n === directions.s && directions.e === directions.w;
}
