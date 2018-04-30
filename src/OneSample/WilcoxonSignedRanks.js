import { flatten, mean, sortArr, sum } from '../util';
// import { wilcoxonCdf } from '../cdf/wilcoxon';

export default function WilcoxonSignedRanks({ observed, M0, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const n = observed.length;
  const Di = observed.map(v => v - M0);
  const delta = Di.filter(v => v !== 0).map((v, i) => v > 0 ? 1 : 0);
  const absDi = Di.filter(v => v !== 0).map(v => Math.abs(v));
  const indexedAbsDi = absDi.map((v, i) => ({ value: v, index: i }));
  const indexSortedAbsDi = sortArr((_x, _y) =>
    _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1)([...indexedAbsDi]);
  const values = [...new Set(indexSortedAbsDi.map(v => v.value))];
  let meanIndice = [];

  values.forEach((item, i) => {
    const indexes = indexSortedAbsDi.map((val, j) => {
      val.index = j;
      return val;
    })
      .filter(a => a.value === item)
      .map(a => a.index + 1);

    meanIndice[i] = indexes.map(_ => mean(...indexes));
  });
  const flatMeanIndice = flatten(meanIndice);

  indexSortedAbsDi.map((v, i) => (v.index = flatMeanIndice[i]));
  const rAbsDi = indexedAbsDi.map(v => v.index);
  const TPlus = sum(...rAbsDi.map((v, i) => v * delta[i]));

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
