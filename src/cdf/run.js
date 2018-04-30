const cdf = (r, m, n) => {
  // best if m <= n
  var i = 1,
    k = 1,
    p = 2,
    s = 2;

  while (2 * i < r) {
    while (s > 1 && k <= m) {
      s = s * k / (n + k);
      p = p * k / (n + k);
      k = k + 1;
    }
    s = s + p * (n + m - 2 * i) / (2 * i);
    if (2 * i + 1 >= r) {
      break;
    }
    p = p * (m - i) * (n - i) / i / i;
    s = s + p;
    i = i + 1;
  }
  while (k <= m) {
    s = s * k / (n + k);
    k = k + 1;
  }
  return s;
};

export const runCdf = (r, m, n) => {
  var Prob;

  if (n > 0 && m > 0) {
    if (r < 2) {
      Prob = 0;
    } else if (m > n) {
      if (r >= 2 * n + 1) {
        Prob = 1;
      } else {
        Prob = cdf(r, n, m);
      }
    } else {
      if (r >= 2 * m + 1) {
        Prob = 1;
      } else {
        Prob = cdf(r, m, n);
      }
    }
    Prob = Math.round(Prob * 100000) / 100000;
  } else {
    Prob = '';
    throw new TypeError('m and n must be positive integers');
  }
  return Prob;
};
