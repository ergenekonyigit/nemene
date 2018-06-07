import { flatten, mean, reduceDigit, sum } from '../utils';
import { chiSqrCdf } from '../cdf/chiSqr';

export default function LayardChiSquare({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const c = observed.length;
  const df = c - 1;
  const flatObserved = flatten(observed);
  const n = flatObserved.length;
  const ni = observed.map(v => v.length);
  const meanObserved = observed.map(v => mean(...v));
  const Z = observed.map((v, i) => v.map(val => val - meanObserved[i]));
  const SSW = Z.map((v, i) => sum(...v.map(val => val ** 2)));
  const SSSW = Z.map((v, i) => sum(...v.map(val => val ** 4)));
  const gamma = ((n * sum(...SSSW)) / (sum(...SSW) ** 2)) - 3;
  const T = 2 + (1 - (c / n)) * gamma;
  const sSqr = SSW.map(v => v / c);
  const logsSqr = SSW.map(v => Math.log10(v / c));
  const calc1 = sum(...ni.map((v, i) => (v - 1) * logsSqr[i])) / sum(...ni.map(v => v - 1));
  const calc2 = ni.map((v, i) => (v - 1) * ((logsSqr[i] - calc1) ** 2));
  const L = sum(...calc2) / T;
  const pValue = 1 - chiSqrCdf(L, df);

  return {
    c,
    df,
    n,
    ni,
    observed,
    meanObserved,
    Z,
    SSW,
    SSSW,
    gamma: reduceDigit(gamma, digit),
    T: reduceDigit(T, digit),
    sSqr: reduceDigit(sSqr, digit),
    logsSqr: reduceDigit(logsSqr, digit),
    calc1: reduceDigit(calc1, digit),
    calc2: reduceDigit(calc2, digit),
    L: reduceDigit(L, digit),
    pValue
  };
}
