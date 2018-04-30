var p = new Array(1276);
var nsav = 0;

const normalcdf = (X) => {
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

const cdf = (n, w) => {
  var Prob, t, k, sum;
  var t1, t2;

  if (w < 0) {
    Prob = 0;
  } else if (w >= n * (n + 1) / 2) {
    Prob = 1;
  } else {
    if (n !== nsav) {
      p[0] = 0.5;
      p[1] = 0.5;
      for (t = 2; t <= n * (n + 1) / 2; t++) {
        p[t] = 0;
      }
      for (k = 2; k <= n; k++) {
        t2 = k * (k + 1) / 2;
        t1 = (k - 1) * k / 2;
        for (t = t2; t > t1; t--) {
          p[t] = p[t - k] / 2;
        }
        for (t = t1; t >= k; t--) {
          p[t] = (p[t] + p[t - k]) / 2;
        }
        for (t = k - 1; t >= 0; t--) {
          p[t] = p[t] / 2;
        }
      }
      nsav = n;
    }
    sum = 0;
    for (k = 0; k <= w; k++) {
      sum = sum + p[k];
    }
    Prob = sum;
  }
  return Prob;
};

export const wilcoxonCdf = (n, w) => {
  var mean, variance, z, Prob;

  if (n < 1) {
    throw new TypeError('n must be positive');
  } else if (n > 50) {
    mean = n * (n + 1) / 4;
    variance = n * n * (n + 1.885) / 12;
    z = (w - mean + 0.5) / Math.sqrt(variance);
    Prob = normalcdf(z);
  } else {
    Prob = cdf(n, w);
  }
  return Math.round(Prob * 10000) / 10000;
};

