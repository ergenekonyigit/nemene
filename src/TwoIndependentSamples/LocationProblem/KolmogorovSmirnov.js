import { max } from 'simple-statistics';
import { sortArr } from '../../util';

export default function KolmogorovSmirnov({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const x = observed[0];
  const xObj = x.map(v => ({ value: v, index: 'X' }));
  const y = observed[1];
  const yObj = y.map(v => ({ value: v, index: 'Y' }));
  const n1 = x.length;
  const n2 = y.length;
  const n = n1 + n2;
  const xy = [...xObj, ...yObj];
  const sortedXY = sortArr((_x, _y) => _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1)([...xy]);
  const Xi = [];
  const Yi = [];

  sortedXY.map(v => {
    v.index === 'X' ? Xi.push(v.value) : Xi.push(null);
    v.index === 'Y' ? Yi.push(v.value) : Yi.push(null);
  });
  const cumulativeFrequencyX = [];
  const cumulativeFrequencyY = [];
  const S1x = [];
  const S2x = [];

  Xi.map(v => typeof v === 'number' ? 1 : null)
    .reduce((prev, curr, i) => (cumulativeFrequencyX[i] = prev + curr), 0);
  cumulativeFrequencyX.reduce((prev, curr, i) => (S1x[i] = curr / n1), 0);
  Yi.map(v => typeof v === 'number' ? 1 : null)
    .reduce((prev, curr, i) => (cumulativeFrequencyY[i] = prev + curr), 0);
  cumulativeFrequencyY.reduce((prev, curr, i) => (S2x[i] = curr / n2), 0);
  const Sx = Array.from({ length: n }, (_, i) => way === 'one-way' ? S2x[i] - S1x[i] : S1x[i] - S2x[i]);
  const D = max(Sx);

  return {
    way,
    x,
    y,
    n1,
    n2,
    n,
    xObj,
    yObj,
    sortedXY,
    Xi,
    Yi,
    cumulativeFrequencyX,
    cumulativeFrequencyY,
    Sx,
    D
  };
}
