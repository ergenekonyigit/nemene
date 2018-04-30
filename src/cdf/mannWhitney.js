var c = [];

for (let i = 0; i <= 20; i++) {
  c[i] = [];
  for (let j = 0; j <= 20; j++) {
    c[i][j] = [];
  }
}
for (let i = 1; i <= 20; i++) {
  c[0][i][0] = 1;
  c[i][0][0] = 1;
}
for (let i = 1; i <= 20; i++) {
  for (let j = 1; j <= 20; j++) {
    for (let k = 0; k <= i - 1; k++) {
      c[i][j][k] = c[i - 1][j][k];
    }
    for (let k = i; k <= i * j - j; k++) {
      c[i][j][k] = c[i - 1][j][k] + c[i][j - 1][k - i];
    }
    for (let k = i * j - j + 1; k <= i * j; k++) {
      c[i][j][k] = c[i][j - 1][k - i];
    }
  }
}

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

const comb = (n, k) => {
  if (k > n / 2) {
    k = n - k;
  }
  let prod = 1;

  for (let j = 1; j <= k; j++) {
    prod = prod * (n + 1 - j) / j;
  }
  return prod;
};

export const mannWhitneyCdf = (u, m, n) => {
  var Prob, tot, sum, i, mean, variance, z;

  if (m < 1 || n < 1) {
    throw new TypeError('Sample sizes must be positive');
  } else if (u < 0) {
    Prob = 0;
  } else if (u >= m * n) {
    Prob = 1;
  } else if (m < 21 && n < 21) {
    tot = comb(m + n, m);
    sum = 0;
    for (i = 0; i <= u; i++) {
      sum = sum + c[m][n][i];
    }
    Prob = sum / tot;
  } else {
    mean = m * n / 2;
    variance = m * n * (m + n + 1.4) / 12;
    z = (u - mean + 0.5) / Math.sqrt(variance);
    Prob = normalcdf(z);
  }
  return Math.round(Prob * 100000) / 100000;
};
