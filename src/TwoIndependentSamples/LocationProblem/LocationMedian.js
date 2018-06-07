import { median, sortArr } from '../../utils';
import { zScore } from '../../cdf/z';

export default function LocationMedian({ observed, alpha = 0.05, digit = 4 }) {
  const x = observed[0];
  const y = observed[1];
  const n1 = x.length;
  const n2 = y.length;
  const n = n1 + n2;
  const sortedX = sortArr((a, b) => a - b)(x);
  const sortedY = sortArr((a, b) => a - b)(y);
  const sortedXY = sortArr((a, b) => a - b)([...x, ...y]);
  const medianXY = median(sortedXY);

  const xMedian = [[], []];

  x.map((v, i) => v > medianXY ? xMedian[0].push(v) : xMedian[1].push(v));
  const xMedianLength = xMedian.map(v => v.length);

  const yMedian = [[], []];

  y.map((v, i) => v > medianXY ? yMedian[0].push(v) : yMedian[1].push(v));
  const yMedianLength = yMedian.map(v => v.length);

  const P1 = xMedianLength[0] / n1;
  const P2 = yMedianLength[0] / n2;
  const P = (xMedianLength[0] + yMedianLength[0]) / n;
  const Z = (P1 - P2) / Math.sqrt((P * (1 - P) * ((1 / n1) + (1 / n2))));
  const pValue = 1 - zScore(Math.abs(Z));

  return {
    x,
    y,
    sortedX,
    sortedY,
    sortedXY,
    medianXY,
    xMedian,
    xMedianLength,
    yMedian,
    yMedianLength,
    n1,
    n2,
    n,
    P1,
    P2,
    P,
    Z,
    pValue
  };
}
