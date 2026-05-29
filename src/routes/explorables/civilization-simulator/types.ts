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
    permeability: number;
    cooldownRemaining: number;
  };
  politicalCapital: number;
  observedDimensions: Set<string>;
  regulatedFinance: boolean;
  auditRevealed: boolean;      // true only for the step the audit fires
  auditEverRevealed: boolean;  // permanently true once audit has succeeded — drives chart reveal
  reformAttempts: Record<string, number>;
  lowTrustSteps: number;       // consecutive steps with socialTrust below collapse threshold
}

export interface SimulationParams {
  type: 'legacy' | 'adaptive';
  latency: number;
  noise: number;
  gain: number;
}

export interface HistoryEntry {
  time: number;
  // True values (always tracked internally)
  legacyWealth: number;    adaptiveWealth: number;
  legacyEnv: number;       adaptiveEnv: number;
  legacyTrust: number;     adaptiveTrust: number;
  legacyFragility: number; adaptiveFragility: number;
  // Legacy observed values — null when the dimension is unobserved at this step
  legacyObsEnv: number | null;
  legacyObsTrust: number | null;
  legacyObsFragility: number | null;
}

export interface SimState {
  legacy: CivilizationState;
  adaptive: CivilizationState;
  time: number;
  history: HistoryEntry[];
  finished: boolean;
  reformEvents: ReformEvent[];
}
