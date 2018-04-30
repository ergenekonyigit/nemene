import { combinations, sum } from '../../util';

export default function FishersExact({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const a = observed[0][0];
  const b = observed[1][0];
  const n1 = sum(...observed[0]);
  const n2 = sum(...observed[1]);
  const n = n1 + n2;
  const w = way === 'one-way' ? 1 : 2;
  const Pb = Array.from({ length: (n2 + 1) }, (_, i) => {
    return (combinations(n2, i) * combinations(n1, (a + b - i))) / combinations(n, (a + b));
  });
  const Pbi = Pb.reduce((acc, cur, i) => {
    return acc.value > alpha / w ?
      { value: acc.value, index: acc.index } :
      { value: acc.value + cur, index: i };
  }, { value: 0, index: 0 });

  return {
    a,
    b,
    n1,
    n2,
    n,
    Pb,
    Pbi
  };
}
