import { flatten, mean, sortArr, sum } from '../../utils';

export default function MannWhitney({ observed, alpha = 0.05, digit = 4 }) {
  const x = observed[0];
  const y = observed[1];
  const flattenObserved = flatten(observed);
  const n1 = x.length;
  const n2 = y.length;
  const n = n1 + n2;
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

    meanIndice[i] = indexes.map(_ => mean(...indexes));
  });
  const flatMeanIndice = flatten(meanIndice);

  indexSortedObs.map((v, i) => (v.index = flatMeanIndice[i]));
  const rObs = indexedObs.map(v => v.index);
  const rX = Array.from({ length: n1 }, (_, i) => rObs[i]);
  const rY = Array.from({ length: n2 }, (_, i) => rObs[n1 + i]);
  const S = sum(...rX);
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
