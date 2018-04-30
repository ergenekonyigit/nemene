var v;
var x = new Array(11);
var p = new Array(11);
var del = new Array(11);
var count = new Array(165);
var fac = new Array(11);

fac[0] = 1;
for (let i = 1; i <= 10; i++) {
  fac[i] = i * fac[i - 1];
}

const init = (n) => {
  for (let i = 1; i <= n; i++) {
    x[i] = i;
    p[i] = i;
    del[i] = 1;
  }
  for (let i = 0; i < v; i++) {
    count[i] = 0;
  }
  count[v] = 1;
};

const swap = (k) => {
  var temp = x[k];

  x[k] = x[k + 1];
  x[k + 1] = temp;
  p[x[k]] = k;
  p[x[k + 1]] = k + 1;
  v = v + x[k + 1] - x[k];
  count[v]++;
};

const flex = (k) => {
  var j;
  let n;

  if (k === n) {
    for (j = 1; j < k; j++) {
      swap(p[k] - del[k]);
    }
    del[k] = 1 - del[k];
  } else {
    for (j = 1; j < k; j++) {
      flex(k + 1);
      swap(p[k] - del[k]);
    }
    del[k] = 1 - del[k];
    flex(k + 1);
  }
};

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

export const spearmanCdf = (n, s) => {
  var Prob, sum, i, cc, result;
  let mean, stdev, z1, z;

  s = Math.floor(s / 2);
  if (n < 2) {
    throw new TypeError('n must at least 2');
  } else {
    v = n * (n - 1) * (n + 1) / 6;
    if (s < 0) {
      Prob = 0;
    } else if (s >= v) {
      Prob = 1;
    } else if (n > 8) {
      mean = n * (n + 1) * (n - 1) / 12;
      stdev = n * (n + 1) * Math.sqrt(n - 1) / 12;
      z1 = (s + 0.5 - mean) / stdev;
      cc = 0.5 + z1 * (z1 * z1 - 3) / 2;
      z = (s + cc - mean) / stdev;
      Prob = normalcdf(z);
    } else {
      init(n);
      flex(2);
      sum = 0;
      for (i = 0; i <= s; i++) {
        sum = sum + count[i] / fac[n];
      }
      Prob = sum;
    }
    result = Math.round(Prob * 10000) / 10000 + ' ';
  }
  return result;
};
