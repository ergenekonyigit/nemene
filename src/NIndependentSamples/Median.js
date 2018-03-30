import { sum, median } from 'simple-statistics';
import { sortArr, flatten } from '../util';

export default function Median({ observed, alpha = 0.05, digit = 4 }) {
  const ni = observed.map(v => v.length);
  const n = sum(ni);
  const flattenObserved = flatten(observed);
  const m = median(flattenObserved);
  const sortedObserved = observed.map(v => sortArr((a, b) => a - b)(v));
  const nMedian = Array.from({ length: ni.length }, () => [[], []]);

  observed.map((v, i) => v.map((val, j) => val > m ? nMedian[i][0].push(val) : nMedian[i][1].push(val)));
  const nMedianLength = nMedian.map(v => v.map(val => val.length));
  const sumI = Array.from({ length: nMedianLength[0].length }, (_, i) => sum(nMedianLength.map(v => v[i])));
  const sumJ = Array.from({ length: nMedianLength.length }, (_, i) => sum(nMedianLength[i]));
  const expected = Array.from({ length: sumJ.length }, (_, i) =>
    Array.from({ length: sumI.length }, (_, j) => sumJ[i] / 2));
  const chiSqr = expected.map((v, i) => v.map((val, j) => (nMedianLength[i][j] - val) ** 2 / val));
  const chiSqrCalc = sum(chiSqr.map(v => sum(v)));

  return {
    ni,
    n,
    m,
    observed,
    sortedObserved,
    nMedian,
    nMedianLength,
    sumI,
    sumJ,
    expected,
    chiSqr,
    chiSqrCalc
  };
}
