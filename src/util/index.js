export const frequency = arr =>
  arr.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());

export const reduceDigit = (arr, digit) =>
  typeof arr === 'object' ?
    arr.map(_ => parseFloat(_.toFixed(digit))) :
    parseFloat(arr.toFixed(digit));
