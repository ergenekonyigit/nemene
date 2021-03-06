import { frequency, max, reduceDigit, sum } from '../utils';
import { normalCdf } from '../cdf/normal';

export default function Lilliefors({
  observed,
  mean = undefined,
  standardDeviation = undefined,
  alpha = 0.05,
  digit = 4
}) {
  const c = observed.length;
  const frequencyMap = frequency(observed);
  const sortedFrequencyMap = new Map([...frequencyMap.entries()].sort());
  const X = [...sortedFrequencyMap.keys()];
  const frequencyX = [...sortedFrequencyMap.values()];
  const Sx = [];
  const cumulativeFrequency = [];

  frequencyX.reduce((prev, curr, i) => (cumulativeFrequency[i] = prev + curr), 0);
  cumulativeFrequency.reduce((prev, curr, i) => (Sx[i] = curr / c), 0);
  let Xf = [];
  let XSubMeanX = [];
  let XSubMeanXFrequencyX = [];

  if (typeof mean === 'undefined' && typeof standardDeviation === 'undefined') {
    Xf = X.map((v, i) => v * frequencyX[i]);
    mean = sum(...Xf) / c;
    XSubMeanX = X.map(v => v - mean);
    XSubMeanXFrequencyX = XSubMeanX.map((v, i) => (v ** 2) * frequencyX[i]);
    standardDeviation = sum(...XSubMeanXFrequencyX) / (c - 1);
  }
  const variance = Math.sqrt(standardDeviation);
  const Z = X.map(v => (v - mean) / variance);
  const fX = X.map(v => normalCdf(v, mean, variance));
  const SxSubfX = Sx.map((v, i) => i === 0 ? fX[i] : Math.abs(Sx[i - 1] - fX[i]));
  const Dc = max(SxSubfX);

  return {
    c,
    observed,
    sortedFrequencyMap,
    X,
    frequencyX,
    cumulativeFrequency,
    Sx: reduceDigit(Sx, digit),
    Xf: reduceDigit(Xf, digit),
    XSubMeanX: reduceDigit(XSubMeanX, digit),
    XSubMeanXFrequencyX: reduceDigit(XSubMeanXFrequencyX, digit),
    mean: reduceDigit(mean, digit),
    standardDeviation: reduceDigit(standardDeviation, digit),
    variance: reduceDigit(variance, digit),
    Z: reduceDigit(Z, digit),
    Dc: reduceDigit(Dc, digit)
  };
}
