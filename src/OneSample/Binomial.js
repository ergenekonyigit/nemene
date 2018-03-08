import { sum, combinations } from 'simple-statistics';

export default function Binomial({ observed, piZero, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const n = observed.length;
  const bCalc = sum(observed);
  const w = way === 'one-way' ? 1 : 2;
  const Pb = Array.from({ length: n + 1 }, (_, i) =>
    combinations(observed, i).length * (piZero ** i) * ((1 - piZero) ** (n - i)));
  // TODO two-way
  const Pbi = Pb.reduce((acc, cur, i) => {
    return acc.value > alpha / w ?
      { value: acc.value, index: acc.index } :
      { value: acc.value + cur, index: i };
  }, { value: 0, index: 0 });

  return {
    n,
    w,
    observed,
    bCalc,
    way,
    Pb,
    Pbi
  };
}
