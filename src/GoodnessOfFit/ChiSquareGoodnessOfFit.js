import { sum } from 'ramda';
import { reduceDigit } from '../util';

export default function ChiSquareGoodnessOfFit(observed, alpha = 0.05, digit = 4) {
  const c = observed.length;
  const pj = 1 / c;
  const df = c - 1;
  const avg = sum(observed) / c;
  const sumObserved = sum(observed);
  const expected = Array.from({ length: c }, () => sumObserved * pj);
  const chiSqrCalc = sum(
    Array.from({ length: c }, (_, i) => (observed[i] - expected[i]) ** 2 / expected[i])
  );
  // const chiSqrTable = (df, alpha) => {};

  return {
    c: c,
    observed: observed,
    expected: expected,
    avg: avg,
    sumObserved: sumObserved,
    pj: pj,
    df: df,
    chiSqrCalc: reduceDigit(chiSqrCalc, digit),
    pValue: ''
  };
}
