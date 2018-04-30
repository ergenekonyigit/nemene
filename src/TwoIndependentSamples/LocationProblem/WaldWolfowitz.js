import { sortArr } from '../../util';

export default function WaldWolfowitz({ observed, M0, alpha = 0.05, digit = 4, way = 'one-way' }) {
  const x = observed[0];
  const xObj = x.map(v => ({ value: v, index: 'X' }));
  const y = observed[1];
  const yObj = y.map(v => ({ value: v, index: 'Y' }));
  const n1 = x.length;
  const n2 = y.length;
  const n = n1 + n2;
  const xy = [...xObj, ...yObj];
  // TODO repetitive value
  const sortedXY = sortArr((_x, _y) => _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1)([...xy]);
  let rCalc = 1;

  Array.from({ length: sortedXY.length - 1 }, (_, i) => {
    if (sortedXY[i].index !== sortedXY[i + 1].index) rCalc++;
    return rCalc;
  });

  return {
    x,
    y,
    xObj,
    yObj,
    n1,
    n2,
    n,
    sortedXY,
    rCalc
  };
}
