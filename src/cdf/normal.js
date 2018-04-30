const cdf = (X) => {
  // HASTINGS.  MAX ERROR = .000001
  var T = 1 / (1 + 0.2316419 * Math.abs(X));
  var D = 0.3989423 * Math.exp(-X * X / 2);
  var Prob =
    D *
    T *
    (0.3193815 +
      T * (-0.3565638 + T * (1.781478 + T * (-1.821256 + T * 1.330274))));

  if (X > 0) {
    Prob = 1 - Prob;
  }
  return Prob;
};

export const normalCdf = (Z, M, SD) => {
  let Prob;

  if (SD < 0) {
    throw new TypeError('The standard deviation must be nonnegative.');
  } else if (SD === 0) {
    if (Z < M) {
      Prob = 0;
    } else {
      Prob = 1;
    }
  } else {
    Prob = cdf((Z - M) / SD);
    Prob = Math.round(100000 * Prob) / 100000;
  }
  return Prob;
};
