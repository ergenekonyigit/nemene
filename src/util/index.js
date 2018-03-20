export const frequency = arr =>
  arr.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());

export const reduceDigit = (arr, digit) =>
  typeof arr === 'object' ?
    arr.map(_ => parseFloat(_.toFixed(digit))) :
    parseFloat(arr.toFixed(digit));

export const flatten = (arr, depth = 1) =>
  depth !== 1 ?
    arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), []) :
    arr.reduce((a, v) => a.concat(v), []);

export const sortArr = f => arr => [...arr].sort(f);
