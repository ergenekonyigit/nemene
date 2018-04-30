import { zScore } from '../cdf/z';

export default function McNemar({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const A = observed[0][0];
  const C = observed[0][1];
  const B = observed[1][0];
  const D = observed[1][1];
  const AB = A + B;
  const AC = A + C;
  const BD = B + D;
  const CD = C + D;
  const n = AB + CD;
  const Z = (C - B) / (Math.sqrt(C + B));
  const pValue = 1 - zScore(Math.abs(Z));

  return {
    A,
    B,
    C,
    D,
    AB,
    AC,
    BD,
    CD,
    n,
    Z,
    pValue
  };
}
