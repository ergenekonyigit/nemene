import { sum } from 'simple-statistics';
import { combinations } from '../util';

export default function Sign({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const x = observed[0];
  const y = observed[1];
  const Di = x.map((v, i) => v - y[i]);
  const delta = Di.filter(v => v !== 0).map((v, i) => v > 0 ? 1 : 0);
  const kCalc = sum(delta);
  const n = delta.length;
  const w = way === 'one-way' ? 1 : 2;
  const Pk = Array.from({ length: n }, (_, i) => combinations(n, i) * Math.pow(1 / 2, n));
  // TODO two-way
  const Pki = Pk.reduce((acc, cur, i) => {
    return acc.value > alpha / w ?
      { value: acc.value, index: acc.index } :
      { value: acc.value + cur, index: i };
  }, { value: 0, index: 0 });

  return {
    x,
    y,
    Di,
    delta,
    kCalc,
    n,
    Pk,
    Pki
  };
}
