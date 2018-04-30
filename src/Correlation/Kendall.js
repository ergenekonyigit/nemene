import { sortArr } from '../util';

export default function Kendall({ observed, alpha = 0.05, digit = 4 }) {
  const x = observed[0];
  const y = observed[1];
  const n = (x.length || y.length);
  const xyObs = x.map((v, i) => ({ key: v, value: y[i] }));
  const keySortedObs = sortArr((x, y) => x.key > y.key ? 1 : x.key === y.key ? 0 : -1)([...xyObs]);
  const pq = [[], []];
  const temp = keySortedObs.map(v => v.value);

  keySortedObs.map(v => temp.map(val => v.value > val ? pq[0].push(val) : pq[1].push(val)));
  // TODO

  return {
    n,
    x,
    y,
    xyObs,
    keySortedObs,
    pq,
    temp
  };
}
