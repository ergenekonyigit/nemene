import { sum, mean, chiSquaredDistributionTable } from 'simple-statistics';
import { reduceDigit } from '../util';

export default function LayardChiSquare({ observed, alpha = 0.05, digit = 4, way = 'one-way' }) {
	const c = observed.length;
	const df = c - 1;
	const flatObserved = observed.flatten();
	const n = flatObserved.length;
	const ni = Array.from({ length: c }, (_, i) => observed[i].length)
	const meanObserved = Array.from({ length: c }, (_, i) => mean(observed[i]));
	const Z = Array.from({ length: c }, (_, i) => {
		return Array.from({ length: ni[i] }, (_, j) => observed[i][j] - meanObserved[i]);
	});
	const SSW = Array.from({ length: c }, (_, i) => {
		return sum(Array.from({ length: ni[i] }, (_, j) => Z[i][j] ** 2));
	});
	const SSSW = Array.from({ length: c }, (_, i) => {
		return sum(Array.from({ length: ni[i] }, (_, j) => Z[i][j] ** 4));
	});
	const gamma = ((n * sum(SSSW)) / (sum(SSW) ** 2)) - 3;
	const T = 2 + (1 - (c / n)) * gamma;
	const sSqr = Array.from({ length: c }, (_, i) => SSW[i] / c);
	const logsSqr = Array.from({ length: c }, (_, i) => Math.log10(SSW[i] / c));
	const calc1 = sum(Array.from({ length: c }, (_, i) => ((ni[i] - 1) * logsSqr[i]))) /
		sum(Array.from({ length: c }, (_, i) => ni[i] - 1));
	const calc2 = Array.from({ length: c }, (_, i) => ((ni[i] - 1) * ((logsSqr[i] - calc1) ** 2)));
	const L = sum(calc2) / T;
	const chiSqrTable = (df, alpha) => chiSquaredDistributionTable[df][alpha];

	return {
		c,
		df,
		n,
		ni,
		observed,
		meanObserved,
		Z,
		SSW,
		SSSW,
		gamma: reduceDigit(gamma, digit),
		T: reduceDigit(T, digit),
		sSqr: reduceDigit(sSqr, digit),
		logsSqr: reduceDigit(logsSqr, digit),
		calc1: reduceDigit(calc1, digit),
		calc2: reduceDigit(calc2, digit),
		L: reduceDigit(L, digit),
		chiSqrTable: chiSqrTable(df, alpha)
	}
}
