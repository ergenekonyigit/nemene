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

const Betinc = (X, A, B) => {
  var A0 = 0;
  var B0 = 1;
  var A1 = 1;
  var B1 = 1;
  var M9 = 0;
  var A2 = 0;
  var C9;

  while (Math.abs((A1 - A2) / A1) > 0.00001) {
    A2 = A1;
    C9 = -(A + M9) * (A + B + M9) * X / (A + 2 * M9) / (A + 2 * M9 + 1);
    A0 = A1 + C9 * A0;
    B0 = B1 + C9 * B0;
    M9 = M9 + 1;
    C9 = M9 * (B - M9) * X / (A + 2 * M9 - 1) / (A + 2 * M9);
    A1 = A0 + C9 * A1;
    B1 = B0 + C9 * B1;
    A0 = A0 / B1;
    B0 = B0 / B1;
    A1 = A1 / B1;
    B1 = 1;
  }
  return A1 / A;
};

export const binomCdf = (X, N, P) => {
  let bincdf, Betacdf, Z, A, B, S, BT;

  if (N <= 0) {
    throw new TypeError('sample size must be positive must be positive');
  } else if (P < 0 || P > 1) {
    throw new TypeError('probability must be between 0 and 1');
  } else if (X < 0) {
    bincdf = 0;
  } else if (X >= N) {
    bincdf = 1;
  } else {
    X = Math.floor(X);
    Z = P;
    A = X + 1;
    B = N - X;
    S = A + B;
    BT = Math.exp(
      logGamma(S) - logGamma(B) - logGamma(A) + A * Math.log(Z) + B * Math.log(1 - Z)
    );
    if (Z < (A + 1) / (S + 2)) {
      Betacdf = BT * Betinc(Z, A, B);
    } else {
      Betacdf = 1 - BT * Betinc(1 - Z, B, A);
    }
    bincdf = 1 - Betacdf;
  }
  return Math.round(bincdf * 100000) / 100000;
};
