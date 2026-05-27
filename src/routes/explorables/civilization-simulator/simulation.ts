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
      permeability: type === 'legacy' ? 0.8 : 0.2,
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

function legacyPolicy(delayed: ObservationSnapshot, params: SimulationParams): number {
  const observed = delayed.wealth + noise(params.noise);
  return clamp(params.gain * (TARGET_WEALTH - observed) / 15, 0, 8);
}

function adaptivePolicy(delayed: ObservationSnapshot, params: SimulationParams) {
  const observedWealth    = delayed.wealth           + noise(params.noise);
  const observedFragility = clamp(delayed.financialFragility + noise(params.noise), 0, 100);
  const observedTrust     = clamp(delayed.socialTrust        + noise(params.noise), 0, 100);
  const fragilityFactor = Math.max(0, 1 - observedFragility / 100);
  return {
    investment: clamp(params.gain * (TARGET_WEALTH - observedWealth) / 15, 0, 5) * fragilityFactor,
    regulation: clamp(observedFragility / 100, 0, 0.8),
    socialPrograms: clamp((80 - observedTrust) / 100, 0, 1),
  };
}

// Effective permeability accounts for crisis pressure and repeated attempts
function effectivePermeability(state: CivilizationState, reformType: ReformType): number {
  let p = state.immune.permeability;
  // Crisis lowers resistance
  if (state.environment < 30) p -= 0.2;
  if (state.financialFragility > 70) p -= 0.15;
  // Repeated attempts erode resistance
  const attempts = state.reformAttempts[reformType] || 0;
  p -= attempts * 0.08;
  return clamp(p, 0.1, 1.0);
}

// Reform costs by type
function reformCost(type: ReformType): number {
  switch (type) {
    case 'expand_observation':
    case 'reduce_latency':
    case 'regulate_finance':
      return 25; // structural reforms cost more
    case 'invest_social':
    case 'meta_governance_audit':
      return 12;
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
    auditRevealed: false, // reset audit each step
  };
  const events: ReformEvent[] = [];
  let paramsChanged = false;
  let newParams: SimulationParams | undefined;

  for (const r of reforms) {
    if (s.immune.cooldownRemaining > 0) continue;
    const cost = reformCost(r);
    if (s.politicalCapital < cost) continue;

    s.politicalCapital -= cost;
    s.immune.cooldownRemaining = 8;
    s.reformAttempts[r] = (s.reformAttempts[r] || 0) + 1;

    const perm = effectivePermeability(s, r);
    const roll = Math.random();
    const absorbed = roll < perm;

    events.push({
      step: 0,
      target: params.type,
      type: r,
      result: absorbed ? 'absorbed' : 'implemented',
      description: absorbed
        ? `"${r}" absorbed (permeability: ${(perm*100).toFixed(0)}%)`
        : `"${r}" succeeded! (permeability: ${(perm*100).toFixed(0)}%)`,
    });

    if (!absorbed) {
      switch (r) {
        case 'expand_observation': {
          const hidden = ['environment','socialTrust','financialFragility','adaptiveCapacity']
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

  // Dynamics
  let { wealth, environment, socialTrust, financialFragility, adaptiveCapacity } = s;
  const delayed = getDelayed(s, newParams?.latency ?? params.latency);
  let investment: number;
  if (params.type === 'legacy') {
    investment = legacyPolicy(delayed, newParams ?? params);
    wealth              += 0.2 * (environment / 100) * investment - 0.02 * wealth;
    environment         -= 0.2 * investment + 0.01 * wealth;
    environment         += 0.04 * (100 - environment);
    environment         += shocks.envShock;
    financialFragility  += 0.15 * investment - 0.02;
    if (s.regulatedFinance) financialFragility = Math.min(financialFragility, s.financialFragility + 0.5); // cap growth
    financialFragility  += shocks.finShock;
    socialTrust         -= 0.02 * Math.max(0, financialFragility - 40);
  } else {
    const { investment: inv, regulation, socialPrograms } = adaptivePolicy(delayed, newParams ?? params);
    investment = inv;
    wealth              += 0.2 * (environment / 100) * investment - 0.02 * wealth;
    environment         -= 0.15 * investment + 0.005 * wealth;
    environment         += 0.04 * (100 - environment) + 0.3 * regulation;
    environment         += shocks.envShock;
    financialFragility  += 0.15 * investment - 0.5 * regulation;
    financialFragility  += shocks.finShock;
    socialTrust         += 0.3 * socialPrograms - 0.01 * Math.max(0, financialFragility - 40);
    adaptiveCapacity    += 0.05 * (regulation + socialPrograms);
  }

  wealth             = Math.max(0, wealth);
  environment        = clamp(environment, 0, 120);
  socialTrust        = clamp(socialTrust, 0, 100);
  financialFragility = clamp(financialFragility, 0, 100);
  adaptiveCapacity   = Math.max(0, adaptiveCapacity);

  let collapsed = false, collapseReason: string | null = null;
  if (environment < 10) { collapsed = true; collapseReason = 'Environmental collapse'; wealth *= 0.2; socialTrust *= 0.5; }
  if (financialFragility >= 90) { collapsed = true; collapseReason = collapseReason ? collapseReason + ' + Financial cascade' : 'Financial cascade'; wealth *= 0.3; }

  const obsWealth    = delayed.wealth + noise(params.noise);
  const obsEnv       = s.observedDimensions.has('environment')      ? clamp(delayed.environment        + noise(params.noise), 0, 100) : 0;
  const obsTrust     = s.observedDimensions.has('socialTrust')      ? clamp(delayed.socialTrust         + noise(params.noise), 0, 100) : 0;
  const obsFragility = s.observedDimensions.has('financialFragility')? clamp(delayed.financialFragility  + noise(params.noise), 0, 100) : 0;
  const obsAdaptive  = s.observedDimensions.has('adaptiveCapacity') ? clamp(delayed.adaptiveCapacity    + noise(params.noise), 0, 100) : 0;

  s.wealth = wealth; s.environment = environment; s.socialTrust = socialTrust; s.financialFragility = financialFragility; s.adaptiveCapacity = adaptiveCapacity;
  s.observedWealth = obsWealth; s.observedEnvironment = obsEnv; s.observedSocialTrust = obsTrust; s.observedFinancialFragility = obsFragility; s.observedAdaptiveCapacity = obsAdaptive;
  s.collapsed = collapsed; s.collapseReason = collapseReason;
  s.politicalCapital = Math.min(100, s.politicalCapital + 0.2);
  if (s.immune.cooldownRemaining > 0) s.immune.cooldownRemaining--;
  s.observationBuffer = [...s.observationBuffer.slice(-(MAX_BUFFER-1)), { wealth, environment, socialTrust, financialFragility, adaptiveCapacity }];

  return { newState: s, events, paramsChanged, newParams };
}
