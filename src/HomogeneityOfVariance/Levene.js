import { sum, mean } from 'simple-statistics';
import { reduceDigit } from '../util';

export default function Levene({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const c = observed.length;
  const flatObserved = observed.flatten();
  const n = flatObserved.length;
  const ni = Array.from({ length: c }, (_, i) => observed[i].length);
  const meanObserved = Array.from({ length: c }, (_, i) => mean(observed[i]));
  const Z = Array.from({ length: c }, (_, i) => {
    return Array.from({ length: ni[i] }, (_, j) => Math.abs(observed[i][j] - meanObserved[i]));
  });
  const sumZi = Z.map((_, i) => sum(Z[i]));
  const meanZi = sumZi.map((v, i) => v / ni[i]);
  const meanZ = sum(sumZi) / n;
  const SSB = sum(Array.from({ length: c }, (_, i) => ni[i] * ((meanZi[i] - meanZ) ** 2)));
  const SSW = sum(Array.from({ length: c }, (_, i) => {
    return sum(Array.from({ length: ni[i] }, (_, j) => (Z[i][j] - meanZi[i]) ** 2));
  }));
  const MSB = SSB / (c - 1);
  const MSW = SSW / (n - c);
  const fCalc = MSB / MSW;
  // const fTable = F(k - 1, n - k, alpha);

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
    fCalc: reduceDigit(fCalc, digit)
    // fTable
  };
}
