/* eslint no-unused-vars: 0 no-return-assign: 0 */
import { sum, mean } from 'simple-statistics';
import { flatten } from '../util';

export default function WilcoxonSignedRanks({ observed, M0, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const n = observed.length;
  const Di = observed.map(v => v - M0);
  const delta = Di.filter(v => v !== 0).map((v, i) => v > 0 ? 1 : 0);
  const absDi = Di.filter(v => v !== 0).map(v => Math.abs(v));
  const indexedAbsDi = absDi.map((v, i) => ({ value: v, index: i }));
  const sort = f => x => [...x].sort(f);
  const indexSortedAbsDi = [...indexedAbsDi].sort((x, y) => x.value > y.value ? 1 : x.value === y.value ? 0 : -1);
  const values = [...new Set(indexSortedAbsDi.map(v => v.value))];
  let meanIndice = [];

  values.forEach((item, i) => {
    const indexes = indexSortedAbsDi.map((item, i) => {
      item['index'] = i;
      return item;
    })
      .filter(a => a.value === item)
      .map(a => a.index + 1);

    meanIndice[i] = indexes.map(x => mean(indexes));
  });
  const flatMeanIndice = flatten(meanIndice);

  indexSortedAbsDi.map((v, i) => v.index = flatMeanIndice[i]);
  const rAbsDi = indexedAbsDi.map(x => x.index);
  const TPlus = sum(rAbsDi.map((x, i) => x * delta[i]));

  return {
    n,
    observed,
    Di,
    delta,
    absDi,
    rAbsDi,
    TPlus
  };
}
