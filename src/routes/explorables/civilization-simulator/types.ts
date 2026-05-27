export interface ObservationSnapshot {
  wealth: number;
  environment: number;
  socialTrust: number;
  financialFragility: number;
  adaptiveCapacity: number;
}

export interface CivilizationState {
  wealth: number;
  environment: number;
  socialTrust: number;
  financialFragility: number;
  adaptiveCapacity: number;
  // observed (dashboard) versions — delayed + noisy
  observedWealth: number;
  observedEnvironment: number;
  observedSocialTrust: number;
  observedFinancialFragility: number;
  observedAdaptiveCapacity: number;
  // ring buffer of true states for latency
  observationBuffer: ObservationSnapshot[];
  // meta
  collapsed: boolean;
  collapseReason: string | null;
}

export interface SimulationParams {
  type: 'legacy' | 'adaptive';
  latency: number;   // steps delay in observation
  noise: number;     // observation noise magnitude
  gain: number;      // control aggressiveness
}

export interface HistoryEntry {
  time: number;
  legacyWealth: number;
  adaptiveWealth: number;
  legacyEnv: number;
  adaptiveEnv: number;
  legacyTrust: number;
  adaptiveTrust: number;
  legacyFragility: number;
  adaptiveFragility: number;
}

export interface SimState {
  legacy: CivilizationState;
  adaptive: CivilizationState;
  time: number;
  history: HistoryEntry[];
  finished: boolean;
}
