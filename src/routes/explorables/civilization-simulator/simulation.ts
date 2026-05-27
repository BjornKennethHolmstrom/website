import type { CivilizationState, ObservationSnapshot, SimulationParams, SimState } from './types';

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
  };
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function noise(magnitude: number): number {
  return (Math.random() * 2 - 1) * magnitude;
}

// Returns the true state from `latency` steps ago, falling back to earliest available.
function getDelayed(state: CivilizationState, latency: number): ObservationSnapshot {
  const buf = state.observationBuffer;
  if (buf.length === 0) {
    return {
      wealth: state.wealth,
      environment: state.environment,
      socialTrust: state.socialTrust,
      financialFragility: state.financialFragility,
      adaptiveCapacity: state.adaptiveCapacity,
    };
  }
  const idx = Math.max(0, buf.length - latency);
  return buf[idx];
}

// Legacy: single-objective, reacts only to delayed noisy wealth.
function legacyPolicy(delayed: ObservationSnapshot, params: SimulationParams): number {
  const observed = delayed.wealth + noise(params.noise);
  return clamp(params.gain * (TARGET_WEALTH - observed) / 15, 0, 8);
}

// Adaptive: multi-objective, uses all delayed observations.
function adaptivePolicy(
  delayed: ObservationSnapshot,
  params: SimulationParams,
): { investment: number; regulation: number; socialPrograms: number } {
  const observedWealth      = delayed.wealth           + noise(params.noise);
  const observedFragility   = clamp(delayed.financialFragility + noise(params.noise), 0, 100);
  const observedTrust       = clamp(delayed.socialTrust        + noise(params.noise), 0, 100);

  // Scale back investment when fragility is high
  const fragilityFactor = Math.max(0, 1 - observedFragility / 100);
  const investment = clamp(params.gain * (TARGET_WEALTH - observedWealth) / 15, 0, 5) * fragilityFactor;
  const regulation = clamp(observedFragility / 100, 0, 0.8);
  const socialPrograms = clamp((80 - observedTrust) / 100, 0, 1);

  return { investment, regulation, socialPrograms };
}

export function stepCivilization(
  state: CivilizationState,
  params: SimulationParams,
  shocks: { envShock: number; finShock: number },
): CivilizationState {
  if (state.collapsed) return state;

  let { wealth, environment, socialTrust, financialFragility, adaptiveCapacity } = state;

  const delayed = getDelayed(state, params.latency);

  let obsWealth: number;
  let obsEnv: number;
  let obsTrust: number;
  let obsFragility: number;
  let obsAdaptive: number;

  if (params.type === 'legacy') {
    const investment = legacyPolicy(delayed, params);

    // Wealth grows with env health × investment; decays naturally
    wealth              += 0.2 * (environment / 100) * investment - 0.02 * wealth;
    // Env degraded by investment and baseline wealth-driven pollution
    environment         -= 0.2 * investment + 0.01 * wealth;
    environment         += 0.04 * (100 - environment); // natural regeneration
    environment         += shocks.envShock;
    // Fragility climbs with unchecked investment
    financialFragility  += 0.15 * investment - 0.02;
    financialFragility  += shocks.finShock;
    // Trust erodes when fragility is high
    socialTrust         -= 0.02 * Math.max(0, financialFragility - 40);

    // Legacy sees only wealth — other dimensions unobserved
    obsWealth    = delayed.wealth + noise(params.noise);
    obsEnv       = 0;
    obsTrust     = 0;
    obsFragility = 0;
    obsAdaptive  = 0;
  } else {
    const { investment, regulation, socialPrograms } = adaptivePolicy(delayed, params);

    wealth              += 0.2 * (environment / 100) * investment - 0.02 * wealth;
    environment         -= 0.15 * investment + 0.005 * wealth;
    environment         += 0.04 * (100 - environment) + 0.3 * regulation;
    environment         += shocks.envShock;
    financialFragility  += 0.15 * investment - 0.5 * regulation;
    financialFragility  += shocks.finShock;
    socialTrust         += 0.3 * socialPrograms - 0.01 * Math.max(0, financialFragility - 40);
    adaptiveCapacity    += 0.05 * (regulation + socialPrograms);

    obsWealth    = delayed.wealth           + noise(params.noise);
    obsEnv       = clamp(delayed.environment        + noise(params.noise), 0, 100);
    obsTrust     = clamp(delayed.socialTrust         + noise(params.noise), 0, 100);
    obsFragility = clamp(delayed.financialFragility  + noise(params.noise), 0, 100);
    obsAdaptive  = clamp(delayed.adaptiveCapacity    + noise(params.noise), 0, 100);
  }

  // Clamp all state variables
  wealth             = Math.max(0, wealth);
  environment        = clamp(environment, 0, 120);
  socialTrust        = clamp(socialTrust, 0, 100);
  financialFragility = clamp(financialFragility, 0, 100);
  adaptiveCapacity   = Math.max(0, adaptiveCapacity);

  // Collapse checks — both civilizations are subject to the same thresholds
  let collapsed = false;
  let collapseReason: string | null = null;
  if (environment < 10) {
    collapsed = true;
    collapseReason = 'Environmental collapse';
    wealth     *= 0.2;
    socialTrust *= 0.5;
  }
  if (financialFragility >= 90) {
    collapsed = true;
    collapseReason = collapseReason
      ? collapseReason + ' + Financial cascade'
      : 'Financial cascade';
    wealth *= 0.3;
  }

  // Append current true state to buffer, bounded to MAX_BUFFER length
  const newBuffer: ObservationSnapshot[] = [
    ...state.observationBuffer.slice(-(MAX_BUFFER - 1)),
    { wealth, environment, socialTrust, financialFragility, adaptiveCapacity },
  ];

  return {
    wealth,
    environment,
    socialTrust,
    financialFragility,
    adaptiveCapacity,
    observedWealth: obsWealth,
    observedEnvironment: obsEnv,
    observedSocialTrust: obsTrust,
    observedFinancialFragility: obsFragility,
    observedAdaptiveCapacity: obsAdaptive,
    observationBuffer: newBuffer,
    collapsed,
    collapseReason,
  };
}

export function runFullSimulation(
  legacyParams: SimulationParams,
  adaptiveParams: SimulationParams,
  steps: number,
): SimState {
  let legacy   = createCivState('legacy');
  let adaptive = createCivState('adaptive');
  const history: SimState['history'] = [];

  for (let t = 0; t < steps; t++) {
    const shocks = {
      envShock: t === 30 ? -30 : 0,
      finShock: t === 50 ? 30  : 0,
    };

    legacy   = stepCivilization(legacy,   legacyParams,   shocks);
    adaptive = stepCivilization(adaptive, adaptiveParams, shocks);

    history.push({
      time:            t,
      legacyWealth:    legacy.wealth,
      adaptiveWealth:  adaptive.wealth,
      legacyEnv:       legacy.environment,
      adaptiveEnv:     adaptive.environment,
      legacyTrust:     legacy.socialTrust,
      adaptiveTrust:   adaptive.socialTrust,
      legacyFragility: legacy.financialFragility,
      adaptiveFragility: adaptive.financialFragility,
    });

    if (legacy.collapsed && adaptive.collapsed) break;
  }

  return { legacy, adaptive, time: history.length, history, finished: true };
}
