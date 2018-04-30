import { sum, mean } from 'simple-statistics';
import { clone, flatten, frequency, head, shift, sortArr } from '../util';

export default function KruskalWallis({ observed, alpha = 0.05, digit = 4 }) {
  const ni = observed.map(v => v.length);
  const n = sum(ni);
  const flattenObserved = flatten(observed);
  const indexedObs = flattenObserved.map((v, i) => ({ value: v, index: i }));
  const indexSortedObs = sortArr((_x, _y) => _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1)([...indexedObs]);
  const values = [...new Set(indexSortedObs.map(v => v.value))];
  const meanIndice = [];

  values.forEach((item, i) => {
    const indexes = indexSortedObs.map((itm, j) => {
      itm.index = j;
      return itm;
    })
      .filter(v => v.value === item)
      .map(v => v.index + 1);

    meanIndice[i] = indexes.map(_ => mean(indexes));
  });
  const flatMeanIndice = flatten(meanIndice);

  indexSortedObs.map((v, i) => (v.index = flatMeanIndice[i]));
  let rr = indexedObs.map(v => v.index);
  const clonedObs = clone(observed);
  const rObs = clonedObs.map(v => v.map(val => {
    val = head(rr);
    rr = shift(rr);
    return val;
  }));
  const Rij = rObs.map(v => sum(v));
  const H = (12 / (n * (n + 1))) * sum(Rij.map((v, i) => (v ** 2) / ni[i])) - (3 * (n + 1));
  const frequencyRank = frequency(flatMeanIndice);
  const frequencyArr = [...frequencyRank.values()];
  const Ti = frequencyArr.map(v => (v - 1) * v * (v + 1));
  const HStar = H / (1 - (sum(Ti) / ((n ** 3) - n)));

  return {
    ni,
    n,
    observed,
    flattenObserved,
    flatMeanIndice,
    rObs,
    Rij,
    H,
    frequencyArr,
    Ti,
    HStar
  };
}
