import { flatten, mean, sortArr, sum } from '../util';

export default function SpearmanRankCorrelation({ observed, alpha = 0.05, digit = 4 }) {
  const x = observed[0];
  const y = observed[1];
  const n = (x.length || y.length);
  const indexedObs = observed.map(v => v.map((v, i) => ({ value: v, index: i })));
  const indexSortedObs = indexedObs
    .map(v => sortArr((_x, _y) => _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1)([...v]));
  const values = indexSortedObs.map(v => [...new Set(v.map(_ => _.value))]);
  const meanIndice = [[], []];

  values.map((v, i) => v.forEach((item, j) => {
    const indexes = indexSortedObs[i].map((val, k) => {
      val.index = k;
      return val;
    })
      .filter(_ => _.value === item)
      .map(_ => _.index + 1);

    meanIndice[i][j] = indexes.map(_ => mean(...indexes));
  }));
  const flatMeanIndice = meanIndice.map(v => flatten(v));

  indexSortedObs.map((v, i) => v.map((val, j) => (val.index = flatMeanIndice[i][j])));
  const rObs = indexedObs.map(v => v.map(val => val.index));
  const rX = rObs[0];
  const rY = rObs[1];
  const di = rX.map((v, i) => v - rY[i]);
  const diSqr = di.map(v => v ** 2);
  const sumDiSqr = sum(...diSqr);
  const rs = 1 - ((6 * sumDiSqr) / (n * ((n ** 2) - 1)));

  return {
    n,
    x,
    y,
    rX,
    rY,
    rObs,
    di,
    diSqr,
    sumDiSqr,
    rs
  };
}
