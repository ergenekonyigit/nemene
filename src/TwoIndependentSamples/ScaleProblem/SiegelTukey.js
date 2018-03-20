/* eslint no-nested-ternary: 0 consistent-return: 0*/
import { sum } from 'simple-statistics';
import { sortArr, flatten } from '../../util';

export default function SiegelTukey({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const x = observed[0];
  const xObj = x.map(v => ({ value: v, index: 'X' }));
  const y = observed[1];
  const yObj = y.map(v => ({ value: v, index: 'Y' }));
  const flattenObserved = flatten(observed);
  const i = flattenObserved.map((_, i) => i + 1);
  const n1 = x.length;
  const n2 = y.length;
  const n = n1 + n2;
  const xy = [...xObj, ...yObj];
  const sortedXY = sortArr((_x, _y) => _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1)([...xy]);
  const sortedX = sortedXY.map(v => v.value);
  const sortedY = sortedXY.map(v => v.index);
  const delta = sortedXY.map(v => v.index === 'X' ? 1 : 0);
  const ai = i.map((v, i) => {
    if (v % 2 === 0 && v > 1 && v <= (n / 2)) return 2 * v;
    if ((v % 2 !== 0) && (v >= 1) && (v <= (n / 2))) return 2 * v - 1;
    if (v % 2 === 0 && v > (n / 2) && v <= n) return 2 * (n - v) + 2;
    if (v % 2 !== 0 && v > (n / 2) && v < n) return 2 * (n - v) + 1;
  });
  const ST = sum(ai.map((v, i) => v * delta[i]));

  return {
    x,
    y,
    n1,
    n2,
    n,
    i,
    ai,
    sortedX,
    sortedY,
    delta,
    ST
  };
}
