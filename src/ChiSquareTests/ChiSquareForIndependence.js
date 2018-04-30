import { min, sum } from 'simple-statistics';
// import { chiSqrCdf } from '../cdf/chiSqr';

export default function ChiSquareForIndependence({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const r = observed.length;
  const c = observed[0].length;
  const sumI = Array.from({ length: c }, (_, i) => sum(observed.map(v => v[i])));
  const sumJ = observed.map(v => sum(v));
  const n = sum(sumI || sumJ);
  const expected = Array.from({ length: r }, (_, i) => Array.from({ length: c }, (_, j) => {
    return (sumI[j] * sumJ[i]) / n;
  }));
  const chiSqr = expected.map((v, i) => v.map((val, j) => (observed[i][j] - val) ** 2 / val));
  const chiSqrCalc = sum(chiSqr.map(v => sum(v)));
  const df = (c - 1) * (r - 1);
  const v = Math.sqrt(chiSqrCalc / (n * min([(c - 1), (r - 1)])));
  // const pValue = 1 - chiSqrCdf(chiSqrCalc, df);

  return {
    r,
    c,
    sumI,
    sumJ,
    n,
    expected,
    chiSqrCalc,
    df,
    v
    // pValue
  };
}
