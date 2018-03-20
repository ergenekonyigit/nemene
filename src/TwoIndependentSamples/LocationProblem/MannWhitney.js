/* eslint no-unused-vars: 0 no-return-assign: 0 */
import { sum, mean } from 'simple-statistics';
import { flatten, sortArr } from '../../util';

export default function MannWhitney({ observed, alpha = 0.05, digit = 4 }) {
  const x = observed[0];
  const y = observed[1];
  const flattenObserved = flatten(observed);
  const n1 = x.length;
  const n2 = y.length;
  const n = n1 + n2;
  const indexedObs = flattenObserved.map((v, i) => ({ value: v, index: i }));
  const indexSortedObs = sortArr((x, y) => x.value > y.value ? 1 : x.value === y.value ? 0 : -1)([...indexedObs]);
  const values = [...new Set(indexSortedObs.map(v => v.value))];
  let meanIndice = [];

  values.forEach((item, i) => {
    const indexes = indexSortedObs.map((item, i) => {
      item['index'] = i;
      return item;
    })
      .filter(a => a.value === item)
      .map(a => a.index + 1);

    meanIndice[i] = indexes.map(x => mean(indexes));
  });
  const flatMeanIndice = meanIndice.flatten();

  indexSortedObs.map((v, i) => v.index = flatMeanIndice[i]);
  const rObs = indexedObs.map(x => x.index);
  const rX = Array.from({ length: n1 }, (_, i) => rObs[i]);
  const rY = Array.from({ length: n2 }, (_, i) => rObs[n1 + i]);
  const S = sum(rX);
  const T = S - ((n1 * (n1 + 1)) / 2);

  return {
    x,
    y,
    n1,
    n2,
    n,
    rX,
    rY,
    S,
    T
  };
}
