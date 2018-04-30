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

export const factorial = n =>
  n < 0 ?
    (() => {
      throw new TypeError('Negative numbers are not allowed!');
    })() :
    n <= 1 ? 1 : n * factorial(n - 1);

export const combinations = (n, r) =>
  factorial(n) / (factorial(r) * factorial(n - r));

export const clone = x => [...x];

export const head = arr => arr[0];

export const shift = x => x.slice(1);

export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

export const min = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

export const max = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

export const mean = (...nums) => [...nums].reduce((acc, val) => acc + val, 0) / nums.length;

export const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);

  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
