import type { SimulationState, SimulationParams } from './types';

export const DEFAULT_PARAMS: SimulationParams = {
  alpha: 0.3,
  deltaW: 0.05,
  beta: 0.25,
  gamma: 0.1,
  eta: 0.02,
  E0: 100,
  WTarget: 120,
  I0: 5,
  gain: 2.0,
  noiseSigmaW: 1.0,
  collapseThreshold: 10,
};

export function createInitialState(params: SimulationParams): SimulationState {
  return {
    W: 60,
    E: 90,
    I: params.I0,
    t: 0,
    revealed: false,
    collapsed: false,
    gameOver: false,
    history: [],
  };
}

export function simulateStep(
  state: SimulationState,
  params: SimulationParams,
): SimulationState {
  if (state.gameOver) return { ...state };

  const { W, E, I } = state;
  const {
    alpha, deltaW, beta, gamma, eta,
    WTarget, I0, gain, noiseSigmaW,
    collapseThreshold,
  } = params;

  // 1D controller: adjust investment based on observed W (with noise)
  const observedW = W + (Math.random() * 2 - 1) * noiseSigmaW;
  const newI = I0 + gain * (WTarget - observedW);
  const clampedI = Math.max(0, newI); // can't invest negative

  // Dynamics
  const newW = W + alpha * E * clampedI - deltaW * W;
  const newE = E - beta * clampedI + gamma * (params.E0 - E) - eta * W;

  const collapsed = newE < collapseThreshold;
  const gameOver = collapsed;

  return {
    W: Math.max(0, newW),
    E: Math.max(0, newE),
    I: clampedI,
    t: state.t + 1,
    revealed: state.revealed || collapsed, // auto-reveal on collapse
    collapsed,
    gameOver,
    history: [
      ...state.history,
      { W, E, I },
    ],
  };
}

export function runSimulation(
  initialState: SimulationState,
  params: SimulationParams,
  steps: number,
): SimulationState {
  let state = initialState;
  for (let i = 0; i < steps; i++) {
    state = simulateStep(state, params);
    if (state.gameOver) break;
  }
  return state;
}
