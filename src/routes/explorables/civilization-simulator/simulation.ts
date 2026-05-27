import type { CivilizationState, ObservationSnapshot, SimulationParams, ReformType, ReformEvent } from './types';

const TARGET_WEALTH = 120;
const MAX_BUFFER = 60;

export function createCivState(type: 'legacy' | 'adaptive'): CivilizationState {
  const base: ObservationSnapshot = {
    wealth: 60,
    environment: 100,
    socialTrust: 80,
    financialFragility: 20,
    adaptiveCapacity: 30,
  };
  return {
    ...base,
    observedWealth: base.wealth,
    observedEnvironment: type === 'legacy' ? 0 : base.environment,
    observedSocialTrust: type === 'legacy' ? 0 : base.socialTrust,
    observedFinancialFragility: type === 'legacy' ? 0 : base.financialFragility,
    observedAdaptiveCapacity: type === 'legacy' ? 0 : base.adaptiveCapacity,
    observationBuffer: [],
    collapsed: false,
    collapseReason: null,
    immune: {
      permeability: type === 'legacy' ? 0.6 : 0.2, // was 0.8 — 60% absorption gives ~12-step expected first success
      cooldownRemaining: 0,
    },
    politicalCapital: 50,
    observedDimensions: type === 'legacy'
      ? new Set(['wealth'])
      : new Set(['wealth', 'environment', 'socialTrust', 'financialFragility', 'adaptiveCapacity']),
    regulatedFinance: false,
    auditRevealed: false,
    reformAttempts: {},
  };
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function noise(magnitude: number): number {
  return (Math.random() * 2 - 1) * magnitude;
}

function getDelayed(state: CivilizationState, latency: number): ObservationSnapshot {
  const buf = state.observationBuffer;
  if (buf.length === 0) return { wealth: state.wealth, environment: state.environment, socialTrust: state.socialTrust, financialFragility: state.financialFragility, adaptiveCapacity: state.adaptiveCapacity };
  const idx = Math.max(0, buf.length - latency);
  return buf[idx];
}

// Legacy policy now responds to whichever dimensions have been unlocked via reform.
// This makes expand_observation meaningful: each unlocked dimension partially improves
// the investment decision, moving legacy toward adaptive-style behaviour.
function legacyPolicy(
  delayed: ObservationSnapshot,
  params: SimulationParams,
  observedDimensions: Set<string>,
): number {
  const observedWealth = delayed.wealth + noise(params.noise);
  let investment = clamp(params.gain * (TARGET_WEALTH - observedWealth) / 15, 0, 8);

  // Fragility awareness: moderate investment when fragility is visible and rising
  if (observedDimensions.has('financialFragility')) {
    const fragility = clamp(delayed.financialFragility + noise(params.noise), 0, 100);
    // Gentler than adaptive (factor floor 0.3 vs 0) — legacy governance is slow to self-restrain
    const fragFactor = Math.max(0.3, 1 - fragility / 120);
    investment *= fragFactor;
  }

  // Environment awareness: reduce investment when environment is visibly degraded
  if (observedDimensions.has('environment')) {
    const env = clamp(delayed.environment + noise(params.noise), 0, 100);
    const envFactor = Math.max(0.5, env / 100);
    investment *= envFactor;
  }

  return investment;
}

function adaptivePolicy(delayed: ObservationSnapshot, params: SimulationParams) {
  const observedWealth    = delayed.wealth           + noise(params.noise);
  const observedFragility = clamp(delayed.financialFragility + noise(params.noise), 0, 100);
  const observedTrust     = clamp(delayed.socialTrust        + noise(params.noise), 0, 100);
  const fragilityFactor = Math.max(0, 1 - observedFragility / 100);
  return {
    investment:     clamp(params.gain * (TARGET_WEALTH - observedWealth) / 15, 0, 5) * fragilityFactor,
    regulation:     clamp(observedFragility / 100, 0, 0.8),
    socialPrograms: clamp((80 - observedTrust) / 100, 0, 1),
  };
}

function effectivePermeability(state: CivilizationState, reformType: ReformType): number {
  let p = state.immune.permeability;
  if (state.environment < 30)           p -= 0.2;
  if (state.financialFragility > 70)    p -= 0.15;
  const attempts = state.reformAttempts[reformType] || 0;
  p -= attempts * 0.08;
  return clamp(p, 0.05, 1.0);
}

function reformCost(type: ReformType): number {
  switch (type) {
    case 'expand_observation':
    case 'reduce_latency':
    case 'regulate_finance':
      return 18; // was 25 — structural reforms cheaper so player can afford 2-3 early
    case 'invest_social':
    case 'meta_governance_audit':
      return 10; // was 12
  }
}

export function stepCivilization(
  state: CivilizationState,
  params: SimulationParams,
  shocks: { envShock: number; finShock: number },
  reforms: ReformType[] = [],
): { newState: CivilizationState; events: ReformEvent[]; paramsChanged: boolean; newParams?: SimulationParams } {
  let s = {
    ...state,
    immune: { ...state.immune },
    observedDimensions: new Set(state.observedDimensions),
    reformAttempts: { ...state.reformAttempts },
    auditRevealed: false,
  };
  const events: ReformEvent[] = [];
  let paramsChanged = false;
  let newParams: SimulationParams | undefined;

  for (const r of reforms) {
    if (s.immune.cooldownRemaining > 0) continue;
    const cost = reformCost(r);
    if (s.politicalCapital < cost) continue;

    s.politicalCapital -= cost;
    s.immune.cooldownRemaining = 5; // was 8 — shorter cooldown gives more attempts before shock
    s.reformAttempts[r] = (s.reformAttempts[r] || 0) + 1;

    const perm = effectivePermeability(s, r);
    const absorbed = Math.random() < perm;

    events.push({
      step: 0,
      target: params.type,
      type: r,
      result: absorbed ? 'absorbed' : 'implemented',
      description: absorbed
        ? `"${r}" absorbed by institutional resistance (${(perm * 100).toFixed(0)}% chance)`
        : `"${r}" implemented successfully (${(perm * 100).toFixed(0)}% resistance overcome)`,
    });

    if (!absorbed) {
      switch (r) {
        case 'expand_observation': {
          const hidden = ['environment', 'socialTrust', 'financialFragility', 'adaptiveCapacity']
            .filter(d => !s.observedDimensions.has(d));
          if (hidden.length > 0) s.observedDimensions.add(hidden[0]);
          break;
        }
        case 'reduce_latency': {
          newParams = { ...params, latency: Math.max(1, Math.floor(params.latency / 2)) };
          paramsChanged = true;
          break;
        }
        case 'regulate_finance':
          s.regulatedFinance = true;
          break;
        case 'invest_social':
          s.socialTrust = Math.min(100, s.socialTrust + 15);
          break;
        case 'meta_governance_audit':
          s.auditRevealed = true;
          break;
      }
    }
  }

  let { wealth, environment, socialTrust, financialFragility, adaptiveCapacity } = s;
  const activeParams = newParams ?? params;
  const delayed = getDelayed(s, activeParams.latency);

  let investment: number;
  if (params.type === 'legacy') {
    investment = legacyPolicy(delayed, activeParams, s.observedDimensions);
    wealth             += 0.2 * (environment / 100) * investment - 0.02 * wealth;
    environment        -= 0.2 * investment + 0.01 * wealth;
    environment        += 0.04 * (100 - environment);
    environment        += shocks.envShock;
    financialFragility += 0.15 * investment - 0.02;
    if (s.regulatedFinance) financialFragility = Math.min(financialFragility, s.financialFragility + 0.5);
    financialFragility += shocks.finShock;
    socialTrust        -= 0.02 * Math.max(0, financialFragility - 40);
  } else {
    const { investment: inv, regulation, socialPrograms } = adaptivePolicy(delayed, activeParams);
    investment = inv;
    wealth             += 0.2 * (environment / 100) * investment - 0.02 * wealth;
    environment        -= 0.15 * investment + 0.005 * wealth;
    environment        += 0.04 * (100 - environment) + 0.3 * regulation;
    environment        += shocks.envShock;
    financialFragility += 0.15 * investment - 0.5 * regulation;
    financialFragility += shocks.finShock;
    socialTrust        += 0.3 * socialPrograms - 0.01 * Math.max(0, financialFragility - 40);
    adaptiveCapacity   += 0.05 * (regulation + socialPrograms);
  }

  wealth             = Math.max(0, wealth);
  environment        = clamp(environment, 0, 120);
  socialTrust        = clamp(socialTrust, 0, 100);
  financialFragility = clamp(financialFragility, 0, 100);
  adaptiveCapacity   = Math.max(0, adaptiveCapacity);

  let collapsed = false, collapseReason: string | null = null;
  if (environment < 10)         { collapsed = true; collapseReason = 'Environmental collapse';  wealth *= 0.2; socialTrust *= 0.5; }
  if (financialFragility >= 90) { collapsed = true; collapseReason = collapseReason ? collapseReason + ' + Financial cascade' : 'Financial cascade'; wealth *= 0.3; }

  const obsWealth    = delayed.wealth + noise(activeParams.noise);
  const obsEnv       = s.observedDimensions.has('environment')         ? clamp(delayed.environment        + noise(activeParams.noise), 0, 100) : 0;
  const obsTrust     = s.observedDimensions.has('socialTrust')         ? clamp(delayed.socialTrust         + noise(activeParams.noise), 0, 100) : 0;
  const obsFragility = s.observedDimensions.has('financialFragility')  ? clamp(delayed.financialFragility  + noise(activeParams.noise), 0, 100) : 0;
  const obsAdaptive  = s.observedDimensions.has('adaptiveCapacity')    ? clamp(delayed.adaptiveCapacity    + noise(activeParams.noise), 0, 100) : 0;

  s.wealth = wealth; s.environment = environment; s.socialTrust = socialTrust;
  s.financialFragility = financialFragility; s.adaptiveCapacity = adaptiveCapacity;
  s.observedWealth = obsWealth; s.observedEnvironment = obsEnv; s.observedSocialTrust = obsTrust;
  s.observedFinancialFragility = obsFragility; s.observedAdaptiveCapacity = obsAdaptive;
  s.collapsed = collapsed; s.collapseReason = collapseReason;
  s.politicalCapital = Math.min(100, s.politicalCapital + 0.5); // was 0.2 — faster regen = more reform attempts
  if (s.immune.cooldownRemaining > 0) s.immune.cooldownRemaining--;
  s.observationBuffer = [...s.observationBuffer.slice(-(MAX_BUFFER - 1)), { wealth, environment, socialTrust, financialFragility, adaptiveCapacity }];

  return { newState: s, events, paramsChanged, newParams };
}
