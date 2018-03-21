import { sum, mean, chiSquaredDistributionTable } from 'simple-statistics';
import { reduceDigit } from '../util';

export default function ChiSquareGoodnessOfFit({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const c = observed.length;
  const pj = 1 / c;
  const df = c - 1;
  const avg = mean(observed);
  const sumObserved = sum(observed);
  const expected = Array.from({ length: c }, () => sumObserved * pj);
  const chiSqrCalc = sum(expected.map((v, i) => (observed[i] - v) ** 2 / v));
  const chiSqrTable = () => chiSquaredDistributionTable[df][alpha];
  const pValue = 0;
  let H0 = null;

  if (way.includes('two-way')) {
    (pValue < (alpha / 2) || (2 * pValue) < alpha) ? H0 = false : H0 = true;
  } else {
    pValue < alpha ? H0 = true : H0 = false;
  }

  return {
    c,
    observed,
    expected,
    avg,
    sumObserved,
    pj,
    df,
    chiSqrCalc: reduceDigit(chiSqrCalc, digit),
    chiSqrTable: chiSqrTable(),
    H0,
    pValue
  };
}
