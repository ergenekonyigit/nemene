const logGamma = z => {
  const s =
    1 +
    76.18009173 / z -
    86.50532033 / (z + 1) +
    24.01409822 / (z + 2) -
    1.231739516 / (z + 3) +
    0.00120858003 / (z + 4) -
    0.00000536382 / (z + 5);

  return (
    (z - 0.5) * Math.log(z + 4.5) - (z + 4.5) + Math.log(s * 2.50662827465)
  );
};

const gcf = (x, a) => {
  // Good for x > a + 1
  let a0 = 0;
  let b0 = 1;
  let a1 = 1;
  let b1 = x;
  let aOld = 0;
  let n = 0;

  while (Math.abs((a1 - aOld) / a1) > 0.00001) {
    aOld = a1;
    n = n + 1;
    a0 = a1 + (n - a) * a0;
    b0 = b1 + (n - a) * b0;
    a1 = x * a0 + n * a1;
    b1 = x * b0 + n * b1;
    a0 = a0 / b1;
    b0 = b0 / b1;
    a1 = a1 / b1;
    b1 = 1;
  }
  const prob = Math.exp(a * Math.log(x) - x - logGamma(a)) * a1;

  return 1 - prob;
};

const gSer = (x, a) => {
  // Good for x < a + 1.
  let T9 = 1 / a;
  let g = T9;
  let i = 1;

  while (T9 > g * 0.00001) {
    T9 = T9 * x / (a + i);
    g = g + T9;
    i = i + 1;
  }
  g = g * Math.exp(a * Math.log(x) - x - logGamma(a));
  return g;
};

const gammaCdf = (x, a) => {
  let GI;

  if (x <= 0) {
    GI = 0;
  } else if (x < a + 1) {
    GI = gSer(x, a);
  } else {
    GI = gcf(x, a);
  }
  return GI;
};

export const chiSqrCdf = (Z, DF) => {
  let chiSqr;

  if (DF <= 0) {
    throw new TypeError('Negative numbers are not allowed!');
  } else {
    chiSqr = gammaCdf(Z / 2, DF / 2);
  }
  return Math.round(chiSqr * 100000) / 100000;
};
