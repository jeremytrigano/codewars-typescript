export function parseMolecule(formula) {
  // formula replace [] {} by ()
  // string to array by atoms, () or number
  // delete empty elements
  let arrFormula = formula
    .replace(/[\{](.*)[\}]/g, '($1)')
    .replace(/[\[](.*)[\]]/g, '($1)')
    .split(/([A-Z][a-z]*|[0-9]*|\(|\))/)
    .filter((elem) => elem !== '');
  // set vars
  let lastIndex = -1;
  let nextIndex = -1;
  let result = {};
  let nbSplice = 0;
  // store index of last (
  lastIndex = arrFormula.lastIndexOf('(');
  // while there is (
  while (lastIndex !== -1) {
    // store index of next ) from the current (
    nextIndex = lastIndex + arrFormula.slice(lastIndex).indexOf(')');
    if (arrFormula.slice(lastIndex).indexOf(')') !== -1) {
      // if character after ) is a number
      if (nextIndex + 1 < arrFormula.length && +arrFormula[nextIndex + 1]) {
        // get multiplier
        let multiplier = +arrFormula[nextIndex + 1];
        // delete multiplier from formula
        arrFormula.splice(nextIndex + 1, 1);
        // extract sub array
        let subArr = arrFormula.slice(lastIndex + 1, nextIndex);
        // count the number of atoms in the brackets
        // multiply by the number after the brackets if present
        nbSplice = 0;
        subArr.forEach((element, index) => {
          if (Number.isNaN(+element)) {
            // if next character is a number then multiply it
            if (index + 1 < subArr.length && +subArr[index + 1]) {
              arrFormula[lastIndex + index + nbSplice + 2] = (
                +arrFormula[lastIndex + index + nbSplice + 2] * multiplier
              ).toString();
            } else if (
              // if not number then value is multiplier
              index + 1 > subArr.length ||
              Number.isNaN(+subArr[index + 1])
            ) {
              arrFormula.splice(
                lastIndex + index + nbSplice + 2,
                0,
                multiplier.toString()
              );
              // track number of splice for next cursors
              nbSplice += 1;
              nextIndex += 1;
            }
          }
        });
      }
    }
    // delete current bracket at stored index
    arrFormula.splice(nextIndex, 1);
    arrFormula.splice(lastIndex, 1);
    // get last (
    lastIndex = arrFormula.lastIndexOf('(');
  }
  // sum same atoms
  arrFormula.forEach((element, index) => {
    if (Number.isNaN(+element)) {
      // if element is in result then add current value
      if (element in result) {
        if (index + 1 < arrFormula.length && +arrFormula[index + 1]) {
          result[element] = result[element] + +arrFormula[index + 1];
        } else if (
          index + 1 > arrFormula.length ||
          Number.isNaN(+arrFormula[index + 1])
        ) {
          result[element] = result[element] + 1;
        }
      } else {
        // element not in result then create new element
        if (index + 1 < arrFormula.length && +arrFormula[index + 1]) {
          Object.assign(result, { [element]: +arrFormula[index + 1] });
        } else if (
          index + 1 > arrFormula.length ||
          Number.isNaN(+arrFormula[index + 1])
        ) {
          Object.assign(result, { [element]: 1 });
        }
      }
    }
  });

  return result;
}
