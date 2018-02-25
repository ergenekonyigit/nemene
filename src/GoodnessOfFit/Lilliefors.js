import { sum } from 'ramda'
import { frequency, reduceDigit } from '../util'

export default function Lilliefors(
  observed,
  mean = undefined,
  standardDeviation = undefined,
  alpha = 0.05,
  digit = 4
) {
  const c = observed.length
  const frequencyMap = frequency(observed)
  const sortedFrequencyMap = new Map([...frequencyMap.entries()].sort())
  const X = [...sortedFrequencyMap.keys()]
  const frequencyX = [...sortedFrequencyMap.values()]
  const cumulativeFrequency = [],
    Sx = []
  frequencyX.reduce((prev, curr, i) => (cumulativeFrequency[i] = prev + curr), 0)
  cumulativeFrequency.reduce((prev, curr, i) => (Sx[i] = curr / c), 0)

  let Xf = [],
    X_sub_meanX = [],
    X_sub_meanX_x_FrequencyX = []
  if (typeof mean === 'undefined' && typeof standardDeviation === 'undefined') {
    Xf = Array.from({ length: X.length }, (_, i) => X[i] * frequencyX[i])
    mean = sum(Xf) / c
    X_sub_meanX = Array.from({ length: X.length }, (_, i) => X[i] - mean)
    X_sub_meanX_x_FrequencyX = Array.from(
      { length: X.length },
      (_, i) => X_sub_meanX[i] ** 2 * frequencyX[i]
    )
    standardDeviation = sum(X_sub_meanX_x_FrequencyX) / (c - 1)
  }

  const variant = Math.sqrt(standardDeviation)
  const Z = Array.from({ length: X.length }, (_, i) => (X[i] - mean) / variant)

  return {
    c: c,
    observed: observed,
    sortedFrequencyMap: sortedFrequencyMap,
    X: X,
    frequency: frequencyX,
    cumulativeFrequency: cumulativeFrequency,
    Sx: reduceDigit(Sx, digit),
    Xf: reduceDigit(Xf, digit),
    X_sub_meanX: reduceDigit(X_sub_meanX, digit),
    X_sub_meanX_x_FrequencyX: reduceDigit(X_sub_meanX_x_FrequencyX, digit),
    mean: reduceDigit(mean, digit),
    standardDeviation: reduceDigit(standardDeviation, digit),
    variant: reduceDigit(variant, digit),
    Z: reduceDigit(Z, digit)
  }
}
