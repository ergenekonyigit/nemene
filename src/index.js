// Tests of Goodness of Fit
export { ChiSquareGoodnessOfFit } from './GoodnessOfFit/ChiSquareGoodnessOfFit';
export { KolmogorovSmirnovGoodnessOfFit } from './GoodnessOfFit/KolmogorovSmirnovGoodnessOfFit';
export { Lilliefors } from './GoodnessOfFit/Lilliefors';
export { ShapiroWilk } from './GoodnessOfFit/ShapiroWilk';

// Tests for Homogeneity of Variance
export { Levene } from './HomogeneityOfVariance/Levene';
export { BrownForsythe } from './HomogeneityOfVariance/BrownForsythe';
export { LayardChiSquare } from './HomogeneityOfVariance/LayardChiSquare';

// Tests for One Sample
export { Binomial } from './OneSample/Binomial';
export { OneSampleSign } from './OneSample/OneSampleSign';
export { WilcoxonSignedRanks } from './OneSample/WilcoxonSignedRanks';
export { Runs } from './OneSample/Runs';

// Tests for Two Independent Samples
// - Location Problem
export { LocationMedian } from './TwoIndependentSamples/LocationProblem/LocationMedian';
export { MannWhitney } from './TwoIndependentSamples/LocationProblem/MannWhitney';
export { WaldWolfowitz } from './TwoIndependentSamples/LocationProblem/WaldWolfowitz';
export { KolmogorovSmirnov } from './TwoIndependentSamples/LocationProblem/KolmogorovSmirnov';
export { FishersExact } from './TwoIndependentSamples/LocationProblem/FishersExact';
// - Scale Problem
export { Mood } from './TwoIndependentSamples/ScaleProblem/Mood';
export { SiegelTukey } from './TwoIndependentSamples/ScaleProblem/SiegelTukey';

// Tests for Two Paired Samples
export { Sign } from './TwoPairedSamples/Sign';
export { WilcoxonRankSum } from './TwoPairedSamples/WilcoxonRankSum';
export { McNemar } from './TwoPairedSamples/McNemar';

// Chi Square Tests for Homogeneity and Independence
export { ChiSquareForHomogeneity } from './ChiSquareTests/ChiSquareForHomogeneity';
export { ChiSquareForIndependence } from './ChiSquareTests/ChiSquareForIndependence';

// Tests for n Independent Samples
export { Median } from './NIndependentSamples/Median';
export { KruskalWallis } from './NIndependentSamples/KruskalWallis';

// Tests for n Paired Samples
export { FriedmansS } from './NPairedSamples/FriedmansS';
export { CochransQ } from './NPairedSamples/CochransQ';

// Correlation
export { SpearmanRankCorrelation } from './Correlation/SpearmanRankCorrelation';
export { Kendall } from './Correlation/Kendall';
