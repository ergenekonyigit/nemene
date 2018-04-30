let H = [],
  f = [];
let p, del, r;

f[0] = 1;
for (let i = 1; i <= 41; i++) {
  H[i] = [];
  f[i] = i * f[i - 1]; // f[n]=n!
}

const setupH = (p, del) => {
  // Durbin algorithm
  var i, j;

  if (p === 1) {
    if (del >= 0.5) {
      H[1][1] = 0;
    } else {
      H[1][1] = 1 - 2 * del;
    }
  } else {
    for (i = 1; i < p; i++) {
      H[i][1] = (1 - Math.pow(del, i)) / f[i];
    }
    H[p][1] = (1 - 2 * Math.pow(del, p)) / f[p];
    if (del > 0.5) {
      H[p][1] = H[p][1] + Math.pow(2 * del - 1, p) / f[p];
    }
    for (j = 2; j <= p; j++) {
      for (i = j - 1; i < p; i++) {
        H[i][j] = 1 / f[i - j + 1];
      }
      H[p][j] = (1 - Math.pow(del, p - j + 1)) / f[p - j + 1];
    }
    for (j = 3; j <= p; j++) {
      for (i = 1; i <= j - 2; i++) {
        H[i][j] = 0;
      }
    }
  }
};

const kolsmir = (z) => {
  // Kolmogorov distribution. Error<.0000001
  var ks, y, i;

  ks = 0.5;
  if (z > 0.27) {
    ks = 0;
    y = -2 * z * z;
    for (i = 27; i >= 1; i = i - 2) {
      ks = Math.exp(i * y) * (1 - ks);
    }
  }
  return 1 - 2 * ks;
};

const kolexact = (n, p) => {
  var v = [],
    w = [];

  for (let i = 1; i <= p; i++) {
    v[i] = 0;
  }
  v[(p + 1) / 2] = 1;
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= p; i++) {
      w[i] = 0;
      for (let j = 1; j <= p; j++) {
        w[i] = w[i] + H[i][j] * v[j];
      }
    }
    for (let i = 1; i <= p; i++) {
      if (k > 1) {
        v[i] = w[i] * Math.pow(1 - 1 / k, k - 1);
      } else {
        v[i] = w[i];
      }
    }
  }
  return v[(p + 1) / 2];
};

export const kolSmirCdf = (d, n) => {
  var z, Prob;

  if (n < 1) {
    throw new TypeError('n must be a positive integer!');
  } else {
    if (d <= 0) {
      Prob = 0;
    } else if (d >= 1) {
      Prob = 1;
    } else if (n * d > 20) {
      z = (d * n + 0.17) / Math.sqrt(n);
      Prob = kolsmir(z);
    } else {
      r = Math.floor(n * d);
      if (r === n * d) {
        r = r - 1;
      }
      del = r + 1 - n * d;
      p = 2 * r + 1;
      setupH(p, del);
      Prob = kolexact(n, p);
    }
    return Math.round(Prob * 100000) / 100000;
  }
};
