import { mean, sortArr, sum } from '../util';

export default function WilcoxonRanksum({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const x = observed[0];
  const y = observed[1];
  const Di = x.map((v, i) => v - y[i]);
  const delta = Di.filter(v => v !== 0).map((v, i) => v > 0 ? 1 : 0);
  const absDi = Di.filter(v => v !== 0).map(v => Math.abs(v));
  const indexedAbsDi = absDi.map((v, i) => ({ value: v, index: i }));
  const indexSortedAbsDi = sortArr((_x, _y) =>
    _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1)([...indexedAbsDi]);
  const values = [...new Set(indexSortedAbsDi.map(v => v.value))];
  const meanIndice = [];

  values.forEach((item, i) => {
    const indexes = indexSortedAbsDi.map((itm, j) => {
      itm.index = j;
      return itm;
    })
      .filter(v => v.value === item)
      .map(v => v.index + 1);

    meanIndice[i] = indexes.map(_ => mean(...indexes));
  });
  const flatMeanIndice = meanIndice.flatten();

  indexSortedAbsDi.map((v, i) => (v.index = flatMeanIndice[i]));
  const rAbsDi = indexedAbsDi.map(v => v.index);
  const n = rAbsDi.length;
  const TPlus = sum(...rAbsDi.map((v, i) => v * delta[i]));

  return {
    n,
    x,
    y,
    Di,
    delta,
    absDi,
    indexedAbsDi,
    indexSortedAbsDi,
    rAbsDi,
    TPlus
  };
}
