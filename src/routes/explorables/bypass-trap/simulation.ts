import type { BypassState, BypassParams } from './types';

export const DEFAULT_PARAMS: BypassParams = {
  coreInitial: 30,
  bypassInitial: 50,
  pressureInitial: 70,
  coreDecayRate: 0.2,
  coreImproveRate: 0.5,
  pressureDecayPerBypass: 0.5,
  pressureThreshold: 40,
  reformSpeed: 1.0,
  minPressureForReform: 40,
  sunsetDelay: 30,
  sunsetPressureBoost: 60,
  bypassGrowthRate: 0.3,
};

export function createInitialState(params: BypassParams, hasSunset: boolean): BypassState {
  return {
    time: 0,
    coreQuality: params.coreInitial,
    bypassQuality: params.bypassInitial,
    reformProgress: 0,
    pressure: params.pressureInitial,
    hasSunset,
    sunsetTriggered: false,
    gameOver: false,
    history: [],
  };
}

export function simulateStep(state: BypassState, params: BypassParams): BypassState {
  if (state.gameOver) return { ...state };

  let { coreQuality, bypassQuality, reformProgress, pressure, hasSunset, sunsetTriggered, time } = state;

  // 1. Pressure dynamics: pressure decays as bypass becomes effective
  if (bypassQuality > params.pressureThreshold && !sunsetTriggered) {
    const decay = params.pressureDecayPerBypass * (bypassQuality - params.pressureThreshold);
    pressure = Math.max(0, pressure - decay);
  }

  // 2. Sunset condition: if enabled and not yet triggered, check
  if (hasSunset && !sunsetTriggered && time >= params.sunsetDelay && bypassQuality > params.pressureThreshold) {
    sunsetTriggered = true;
    pressure = Math.min(100, pressure + params.sunsetPressureBoost);
  }

  // 3. Reform progress: advances when pressure is high enough
  if (pressure >= params.minPressureForReform) {
    reformProgress = Math.min(100, reformProgress + params.reformSpeed);
  } else {
    // reform stalls; could even backslide but we keep simple
  }

  // 4. Core quality: improves only when reform is complete
  if (reformProgress >= 100) {
    coreQuality = Math.min(100, coreQuality + params.coreImproveRate);
  } else {
    coreQuality = Math.max(0, coreQuality - params.coreDecayRate);
  }

  // 5. Bypass quality: slowly improves when pressure is low (no incentive to dismantle)
  if (sunsetTriggered) {
    bypassQuality = Math.max(0, bypassQuality - params.bypassGrowthRate * 2);
  } else if (pressure < params.minPressureForReform) {
    bypassQuality = Math.min(100, bypassQuality + params.bypassGrowthRate);
  }

  // 6. Game over if core quality reaches 100 (fully reformed) or core collapses (0)
  const gameOver = coreQuality >= 100 || coreQuality <= 0;

  return {
    time: time + 1,
    coreQuality,
    bypassQuality,
    reformProgress,
    pressure,
    hasSunset,
    sunsetTriggered,
    gameOver,
    history: [
      ...state.history,
      { time: state.time, core: state.coreQuality, bypass: state.bypassQuality, pressure: state.pressure },
    ],
  };
}

export function runFullSimulation(
  params: BypassParams,
  hasSunset: boolean,
  maxSteps: number = 200,
): BypassState {
  let state = createInitialState(params, hasSunset);
  for (let i = 0; i < maxSteps; i++) {
    state = simulateStep(state, params);
    if (state.gameOver) break;
  }
  return state;
}
