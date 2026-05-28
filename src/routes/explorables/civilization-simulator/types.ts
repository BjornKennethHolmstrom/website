export interface ObservationSnapshot {
  wealth: number;
  environment: number;
  socialTrust: number;
  financialFragility: number;
  adaptiveCapacity: number;
}

export type ReformType =
  | 'expand_observation'
  | 'reduce_latency'
  | 'regulate_finance'
  | 'invest_social'
  | 'meta_governance_audit';

export interface ReformEvent {
  step: number;
  target: 'legacy' | 'adaptive';
  type: ReformType;
  result: 'absorbed' | 'implemented' | 'rejected';
  description: string;
}

export interface CivilizationState {
  wealth: number;
  environment: number;
  socialTrust: number;
  financialFragility: number;
  adaptiveCapacity: number;
  observedWealth: number;
  observedEnvironment: number;
  observedSocialTrust: number;
  observedFinancialFragility: number;
  observedAdaptiveCapacity: number;
  observationBuffer: ObservationSnapshot[];
  collapsed: boolean;
  collapseReason: string | null;
  immune: {
    permeability: number;      // base resistance to reform (0–1)
    cooldownRemaining: number;
  };
  politicalCapital: number;
  observedDimensions: Set<string>;
  regulatedFinance: boolean;
  auditRevealed: boolean;
  reformAttempts: Record<string, number>;
}

export interface SimulationParams {
  type: 'legacy' | 'adaptive';
  latency: number;
  noise: number;
  gain: number;
  // Note: immune permeability lives on CivilizationState, not here,
  // because it's a property of the civilization that reforms can change.
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
  reformEvents: ReformEvent[];
}
