import { sum } from 'ramda';
import { frequency, reduceDigit } from '../util';

export default function ShapiroWilk(
  observed,
  mean = undefined,
  standardDeviation = undefined,
  alpha = 0.05,
  digit = 4
) {
  const c = observed.length;
  const frequencyMap = frequency(observed);
  const sortedFrequencyMap = new Map([...frequencyMap.entries()].sort());
  const X = [...sortedFrequencyMap.keys()];
  const frequencyX = [...sortedFrequencyMap.values()];
  const cumulativeFrequency = [],
    Sx = [];

  frequencyX.reduce((prev, curr, i) => (cumulativeFrequency[i] = prev + curr), 0);
  cumulativeFrequency.reduce((prev, curr, i) => (Sx[i] = curr / c), 0);

  let Xf = [],
    XSubMeanX = [],
    XSubMeanXFrequencyX = [];

  if (typeof mean === 'undefined' && typeof standardDeviation === 'undefined') {
    Xf = Array.from({ length: X.length }, (_, i) => X[i] * frequencyX[i]);
    mean = sum(Xf) / c;
    XSubMeanX = Array.from({ length: X.length }, (_, i) => X[i] - mean);
    XSubMeanXFrequencyX = Array.from(
      { length: X.length },
      (_, i) => XSubMeanX[i] ** 2 * frequencyX[i]
    );
    standardDeviation = sum(XSubMeanXFrequencyX) / (c - 1);
  }

  const variant = Math.sqrt(standardDeviation);
  const Z = Array.from({ length: X.length }, (_, i) => (X[i] - mean) / variant);

  return {
    c: c,
    observed: observed,
    sortedFrequencyMap: sortedFrequencyMap,
    X: X,
    frequency: frequencyX,
    cumulativeFrequency: cumulativeFrequency,
    Sx: reduceDigit(Sx, digit),
    Xf: reduceDigit(Xf, digit),
    XSubMeanX: reduceDigit(XSubMeanX, digit),
    XSubMeanXFrequencyX: reduceDigit(XSubMeanXFrequencyX, digit),
    mean: reduceDigit(mean, digit),
    standardDeviation: reduceDigit(standardDeviation, digit),
    variant: reduceDigit(variant, digit),
    Z: reduceDigit(Z, digit)
  };
}
