import { flatten, mean, reduceDigit, sum } from '../utils';
import { fCdf } from '../cdf/f';

export default function Levene({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const c = observed.length;
  const flatObserved = flatten(observed);
  const n = flatObserved.length;
  const ni = observed.map(v => v.length);
  const meanObserved = observed.map(v => mean(...v));
  const Z = observed.map((v, i) => v.map(val => Math.abs(val - meanObserved[i])));
  const sumZi = Z.map((_, i) => sum(...Z[i]));
  const meanZi = sumZi.map((v, i) => v / ni[i]);
  const meanZ = sum(...sumZi) / n;
  const SSB = sum(...ni.map((v, i) => v * ((meanZi[i] - meanZ) ** 2)));
  const SSW = sum(...Z.map((v, i) => sum(...v.map(val => (val - meanZi[i]) ** 2))));
  const MSB = SSB / (c - 1);
  const MSW = SSW / (n - c);
  const fCalc = MSB / MSW;
  const pValue = 1 - fCdf(fCalc, c - 1, n - c);

  return {
    c,
    n,
    ni,
    observed,
    flatObserved,
    meanObserved,
    Z,
    sumZi,
    meanZi,
    meanZ,
    SSB: reduceDigit(SSB, digit),
    SSW: reduceDigit(SSW, digit),
    MSB: reduceDigit(MSB, digit),
    MSW: reduceDigit(MSW, digit),
    fCalc: reduceDigit(fCalc, digit),
    pValue
  };
}
