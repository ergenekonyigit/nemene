import { mean } from '../util';

export default function Runs({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
  let n, n1, n2, ind, meanX;
  let upDown;

  if (observed[0][0]) {
    meanX = mean(...observed[1]);
    upDown = observed[1].map(x => x > meanX ? 'U' : 'D');
    n1 = observed[0].filter(x => x === 'M').length;
    n2 = observed[0].filter(x => x === 'W').length;
    n = n1 + n2;
  } else {
    n = observed.length;
    meanX = mean(...observed);
    upDown = observed.map(x => x > meanX ? 'U' : 'D');
    ind = upDown.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  }

  return {
    n,
    observed,
    meanX,
    upDown,
    ind
  };
}
