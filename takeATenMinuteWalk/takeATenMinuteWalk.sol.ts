export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;
  if (
    walk.filter((e) => e === 'n').length !==
    walk.filter((e) => e === 's').length
  )
    return false;
  if (
    walk.filter((e) => e === 'e').length !==
    walk.filter((e) => e === 'w').length
  )
    return false;
  return true;
}
