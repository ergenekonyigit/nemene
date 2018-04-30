import { sum } from 'simple-statistics';
import { combinations } from '../util';

export default function OneSampleSign({ observed, M0, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const n = observed.length;
  const Di = observed.map(v => v - M0);
  const delta = Di.map(v => v > 0 ? 1 : 0);
  const k = sum(delta);
  const Pk = Array.from({ length: n + 1 }, (_, i) =>
    combinations(n, i) * ((1 / 2) ** i) * ((1 / 2) ** (n - i)));

  return {
    n,
    observed,
    Di,
    delta,
    k,
    Pk
  };
}
