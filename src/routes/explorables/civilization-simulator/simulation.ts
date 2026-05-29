import type { CivilizationState, ObservationSnapshot, SimulationParams, ReformType, ReformEvent, HistoryEntry } from './types';

const TARGET_WEALTH = 120;
const MAX_BUFFER = 60;
const LOW_TRUST_THRESHOLD = 20;
const LOW_TRUST_COLLAPSE_STEPS = 8;

export function createCivState(type: 'legacy' | 'adaptive'): CivilizationState {
  const base: ObservationSnapshot = {
    wealth: 60, environment: 100, socialTrust: 80,
    financialFragility: 20, adaptiveCapacity: 30,
  };
  return {
    ...base,
    observedWealth: base.wealth,
    observedEnvironment:        type === 'legacy' ? 0 : base.environment,
    observedSocialTrust:        type === 'legacy' ? 0 : base.socialTrust,
    observedFinancialFragility: type === 'legacy' ? 0 : base.financialFragility,
    observedAdaptiveCapacity:   type === 'legacy' ? 0 : base.adaptiveCapacity,
    observationBuffer: [],
    collapsed: false, collapseReason: null,
    immune: { permeability: type === 'legacy' ? 0.6 : 0.2, cooldownRemaining: 0 },
    politicalCapital: 50,
    observedDimensions: type === 'legacy'
      ? new Set(['wealth'])
      : new Set(['wealth', 'environment', 'socialTrust', 'financialFragility', 'adaptiveCapacity']),
    regulatedFinance: false,
    auditRevealed: false,
    auditEverRevealed: false,
    reformAttempts: {},
    lowTrustSteps: 0,
  };
}

function clamp(v: number, min: number, max: number) { return Math.max(min, Math.min(max, v)); }
function noise(mag: number) { return (Math.random() * 2 - 1) * mag; }

function getDelayed(state: CivilizationState, latency: number): ObservationSnapshot {
  const buf = state.observationBuffer;
  if (buf.length === 0) return {
    wealth: state.wealth, environment: state.environment, socialTrust: state.socialTrust,
    financialFragility: state.financialFragility, adaptiveCapacity: state.adaptiveCapacity,
  };
  return buf[Math.max(0, buf.length - latency)];
}

function legacyPolicy(
  delayed: ObservationSnapshot,
  params: SimulationParams,
  observedDimensions: Set<string>,
): number {
  let inv = clamp(params.gain * (TARGET_WEALTH - (delayed.wealth + noise(params.noise))) / 15, 0, 8);
  if (observedDimensions.has('financialFragility'))
    inv *= Math.max(0.3, 1 - clamp(delayed.financialFragility + noise(params.noise), 0, 100) / 120);
  if (observedDimensions.has('environment'))
    inv *= Math.max(0.5, clamp(delayed.environment + noise(params.noise), 0, 100) / 100);
  return inv;
}

function adaptivePolicy(delayed: ObservationSnapshot, params: SimulationParams) {
  const frag  = clamp(delayed.financialFragility + noise(params.noise), 0, 100);
  const trust = clamp(delayed.socialTrust        + noise(params.noise), 0, 100);
  return {
    investment:     clamp(params.gain * (TARGET_WEALTH - (delayed.wealth + noise(params.noise))) / 15, 0, 5)
                    * Math.max(0, 1 - frag / 100),
    regulation:     clamp(frag / 100, 0, 0.8),
    socialPrograms: clamp((80 - trust) / 100, 0, 1),
  };
}

function effectivePermeability(state: CivilizationState, reformType: ReformType): number {
  let p = state.immune.permeability;
  if (state.environment < 30)        p -= 0.2;
  if (state.financialFragility > 70) p -= 0.15;
  // Low social trust makes the population hostile to reform from above
  if (state.socialTrust < 40) p += (40 - state.socialTrust) / 100;
  const attempts = state.reformAttempts[reformType] || 0;
  p -= attempts * 0.08;
  return clamp(p, 0.05, 1.0);
}

function reformCost(type: ReformType): number {
  switch (type) {
    case 'expand_observation': case 'reduce_latency': case 'regulate_finance': return 18;
    case 'invest_social': case 'meta_governance_audit': return 10;
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
  let paramsChanged = false, newParams: SimulationParams | undefined;

  for (const r of reforms) {
    if (s.immune.cooldownRemaining > 0) {
      events.push({ step: 0, target: params.type, type: r, result: 'rejected',
        description: `"${r}" rejected — on cooldown (${s.immune.cooldownRemaining} steps remaining)` });
      continue;
    }
    const cost = reformCost(r);
    if (s.politicalCapital < cost) {
      events.push({ step: 0, target: params.type, type: r, result: 'rejected',
        description: `"${r}" rejected — insufficient capital (need ${cost}, have ${s.politicalCapital.toFixed(0)})` });
      continue;
    }
    s.politicalCapital -= cost;
    s.immune.cooldownRemaining = 5;
    const perm = effectivePermeability(s, r);
    s.reformAttempts[r] = (s.reformAttempts[r] || 0) + 1;
    const absorbed = Math.random() < perm;
    events.push({ step: 0, target: params.type, type: r,
      result: absorbed ? 'absorbed' : 'implemented',
      description: absorbed
        ? `"${r}" absorbed by institutional resistance (${(perm*100).toFixed(0)}%)`
        : `"${r}" implemented (overcame ${(perm*100).toFixed(0)}% resistance)` });
    if (!absorbed) {
      // Reform momentum: each success slightly opens the institution to further change.
      // Models the real dynamic where demonstrated capacity for change lowers future resistance.
      s.immune.permeability = Math.max(0.1, s.immune.permeability - 0.05);

      switch (r) {
        case 'expand_observation': {
          const hidden = ['environment','socialTrust','financialFragility','adaptiveCapacity']
            .filter(d => !s.observedDimensions.has(d));
          if (hidden.length > 0) s.observedDimensions.add(hidden[0]);
          break;
        }
        case 'reduce_latency':
          newParams = { ...params, latency: Math.max(1, Math.floor(params.latency / 2)) };
          paramsChanged = true;
          break;
        case 'regulate_finance': s.regulatedFinance = true; break;
        case 'invest_social':    s.socialTrust = Math.min(100, s.socialTrust + 15); break;
        case 'meta_governance_audit':
          s.auditRevealed = true;
          s.auditEverRevealed = true; // permanent — drives chart reveal
          break;
      }
    }
  }

  let { wealth, environment, socialTrust, financialFragility, adaptiveCapacity } = s;
  const ap = newParams ?? params;
  const delayed = getDelayed(s, ap.latency);

  if (params.type === 'legacy') {
    const inv = legacyPolicy(delayed, ap, s.observedDimensions);
    wealth             += 0.2 * (environment / 100) * inv - 0.02 * wealth;
    environment        -= 0.2 * inv + 0.01 * wealth;
    environment        += 0.04 * (100 - environment) + shocks.envShock;
    financialFragility += 0.15 * inv - 0.02;
    if (s.regulatedFinance) financialFragility = Math.min(financialFragility, s.financialFragility + 0.5);
    financialFragility += shocks.finShock;
    socialTrust        -= 0.02 * Math.max(0, financialFragility - 40);
  } else {
    const { investment: inv, regulation, socialPrograms } = adaptivePolicy(delayed, ap);
    wealth             += 0.2 * (environment / 100) * inv - 0.02 * wealth;
    environment        -= 0.15 * inv + 0.005 * wealth;
    environment        += 0.04 * (100 - environment) + 0.3 * regulation + shocks.envShock;
    financialFragility += 0.15 * inv - 0.5 * regulation + shocks.finShock;
    socialTrust        += 0.3 * socialPrograms - 0.01 * Math.max(0, financialFragility - 40);
    adaptiveCapacity   += 0.05 * (regulation + socialPrograms);
  }

  wealth             = Math.max(0, wealth);
  environment        = clamp(environment, 0, 120);
  socialTrust        = clamp(socialTrust, 0, 100);
  financialFragility = clamp(financialFragility, 0, 100);
  adaptiveCapacity   = Math.max(0, adaptiveCapacity);

  // ── FEATURE 2: endogenous probabilistic cascade ──────────────────────────
  // Compound risk: high fragility × low social trust. Models the real-world
  // dynamic from the papers — financial stress and social erosion amplify each other.
  const cascadeRisk = Math.max(0, (financialFragility - 70) / 30) * (1 - socialTrust / 100);
  if (cascadeRisk > 0 && Math.random() < cascadeRisk * 0.2) {
    financialFragility = Math.min(100, financialFragility + 10 + Math.random() * 20);
  }

  // ── FEATURE 3: social tipping point ──────────────────────────────────────
  // Sustained low trust blocks reforms and eventually triggers collapse.
  const lowTrustSteps = socialTrust < LOW_TRUST_THRESHOLD
    ? (s.lowTrustSteps + 1)
    : 0;

  let collapsed = false, collapseReason: string | null = null;
  if (environment < 10) {
    collapsed = true; collapseReason = 'Environmental collapse';
    wealth *= 0.2; socialTrust *= 0.5;
  }
  if (financialFragility >= 90) {
    collapsed = true;
    collapseReason = collapseReason ? collapseReason + ' + Financial cascade' : 'Financial cascade';
    wealth *= 0.3;
  }
  if (lowTrustSteps >= LOW_TRUST_COLLAPSE_STEPS && !collapsed) {
    collapsed = true;
    collapseReason = 'Social fabric collapse';
    wealth *= 0.1; environment *= 0.5;
  }

  const obsWealth    = delayed.wealth + noise(ap.noise);
  const obsEnv       = s.observedDimensions.has('environment')        ? clamp(delayed.environment       + noise(ap.noise), 0, 100) : 0;
  const obsTrust     = s.observedDimensions.has('socialTrust')        ? clamp(delayed.socialTrust        + noise(ap.noise), 0, 100) : 0;
  const obsFragility = s.observedDimensions.has('financialFragility') ? clamp(delayed.financialFragility + noise(ap.noise), 0, 100) : 0;
  const obsAdaptive  = s.observedDimensions.has('adaptiveCapacity')   ? clamp(delayed.adaptiveCapacity   + noise(ap.noise), 0, 100) : 0;

  s.wealth = wealth; s.environment = environment; s.socialTrust = socialTrust;
  s.financialFragility = financialFragility; s.adaptiveCapacity = adaptiveCapacity;
  s.observedWealth = obsWealth; s.observedEnvironment = obsEnv; s.observedSocialTrust = obsTrust;
  s.observedFinancialFragility = obsFragility; s.observedAdaptiveCapacity = obsAdaptive;
  s.collapsed = collapsed; s.collapseReason = collapseReason;
  s.lowTrustSteps = lowTrustSteps;
  s.politicalCapital = Math.min(100, s.politicalCapital + 0.5);
  if (s.immune.cooldownRemaining > 0) s.immune.cooldownRemaining--;
  s.observationBuffer = [
    ...s.observationBuffer.slice(-(MAX_BUFFER - 1)),
    { wealth, environment, socialTrust, financialFragility, adaptiveCapacity },
  ];

  return { newState: s, events, paramsChanged, newParams };
}
