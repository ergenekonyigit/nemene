// Tests of Goodness of Fit
import ChiSquareGoodnessOfFit from './GoodnessOfFit/ChiSquareGoodnessOfFit';
import KolmogorovSmirnovGoodnessOfFit from './GoodnessOfFit/KolmogorovSmirnovGoodnessOfFit';
import Lilliefors from './GoodnessOfFit/Lilliefors';
import ShapiroWilk from './GoodnessOfFit/ShapiroWilk';

// Tests for Homogeneity of Variance
import Levene from './HomogeneityOfVariance/Levene';
import BrownForsythe from './HomogeneityOfVariance/BrownForsythe';
import LayardChiSquare from './HomogeneityOfVariance/LayardChiSquare';

// Tests for One Sample
import Binomial from './OneSample/Binomial';
import OneSampleSign from './OneSample/OneSampleSign';
import WilcoxonSignedRanks from './OneSample/WilcoxonSignedRanks';
import Runs from './OneSample/Runs';

// Tests for Two Independent Samples
// - Location Problem
import LocationMedian from './TwoIndependentSamples/LocationProblem/LocationMedian';
import MannWhitney from './TwoIndependentSamples/LocationProblem/MannWhitney';
import WaldWolfowitz from './TwoIndependentSamples/LocationProblem/WaldWolfowitz';
import KolmogorovSmirnov from './TwoIndependentSamples/LocationProblem/KolmogorovSmirnov';
import FishersExact from './TwoIndependentSamples/LocationProblem/FishersExact';
// - Scale Problem
import Mood from './TwoIndependentSamples/ScaleProblem/Mood';
import SiegelTukey from './TwoIndependentSamples/ScaleProblem/SiegelTukey';

// Tests for Two Paired Samples
import Sign from './TwoPairedSamples/Sign';
import WilcoxonRankSum from './TwoPairedSamples/WilcoxonRankSum';
import McNemar from './TwoPairedSamples/McNemar';

// Chi Square Tests for Homogeneity and Independence
import ChiSquareForHomogeneity from './ChiSquareTests/ChiSquareForHomogeneity';
import ChiSquareForIndependence from './ChiSquareTests/ChiSquareForIndependence';

// Tests for n Independent Samples
import Median from './NIndependentSamples/Median';
import KruskalWallis from './NIndependentSamples/KruskalWallis';

// Tests for n Paired Samples
import FriedmansS from './NPairedSamples/FriedmansS';
import CochransQ from './NPairedSamples/CochransQ';

// Correlation
import SpearmanRankCorrelation from './Correlation/SpearmanRankCorrelation';
import Kendall from './Correlation/Kendall';

export {
  ChiSquareGoodnessOfFit,
  KolmogorovSmirnovGoodnessOfFit,
  Lilliefors,
  ShapiroWilk,
  Levene,
  BrownForsythe,
  LayardChiSquare,
  Binomial,
  OneSampleSign,
  WilcoxonSignedRanks,
  Runs,
  LocationMedian,
  MannWhitney,
  WaldWolfowitz,
  KolmogorovSmirnov,
  FishersExact,
  Mood,
  SiegelTukey,
  Sign,
  WilcoxonRankSum,
  McNemar,
  ChiSquareForHomogeneity,
  ChiSquareForIndependence,
  Median,
  KruskalWallis,
  FriedmansS,
  CochransQ,
  SpearmanRankCorrelation,
  Kendall
};
