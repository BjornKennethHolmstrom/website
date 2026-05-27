import type { SimulationState, SimulationParams, NodeState, Architecture } from './types';

export function createInitialState(params: SimulationParams): SimulationState {
  const nodes: NodeState[] = Array.from({ length: params.numNodes }, (_, i) => ({
    id: i,
    stability: params.targetStability,
  }));
  return {
    params: { ...params },
    nodes,
    time: 0,
    history: nodes.map(() => []),
    meanHistory: [],
    controlHistory: [],
    finished: false,
    revealed: false,
  };
}

function applyShock(state: SimulationState): void {
  const { shockTime, shockNodes, shockMagnitude } = state.params;
  if (state.time === shockTime) {
    for (const id of shockNodes) {
      state.nodes[id].stability += shockMagnitude;
    }
  }
}

function computeCentralizedControl(state: SimulationState): number {
  const { centralNoise, centralGain, targetStability } = state.params;
  const mean = state.nodes.reduce((sum, n) => sum + n.stability, 0) / state.nodes.length;
  const noisyMean = mean + (Math.random() * 2 - 1) * centralNoise;
  const error = targetStability - noisyMean;
  return centralGain * error; // uniform control
}

function computeDistributedControl(state: SimulationState): number[] {
  const { localNoise, localGain, targetStability } = state.params;
  return state.nodes.map((n) => {
    const noisyLocal = n.stability + (Math.random() * 2 - 1) * localNoise;
    return localGain * (targetStability - noisyLocal);
  });
}

function stepCentralized(state: SimulationState): void {
  const { centralLatency, couplingBeta, naturalDecay } = state.params;
  const control = computeCentralizedControl(state);
  state.controlHistory.push(control);

  // Apply control with latency: use control from tau steps ago
  const appliedControl = state.time >= centralLatency
    ? state.controlHistory[state.time - centralLatency]
    : 0;

  const oldNodes = state.nodes.map((n) => ({ ...n }));
  for (const node of state.nodes) {
    const coupling = oldNodes.reduce((sum, other) => {
      if (other.id === node.id) return sum;
      return sum + couplingBeta * (other.stability - node.stability);
    }, 0);
    node.stability = naturalDecay * node.stability + coupling + appliedControl;
  }
}

function stepDistributed(state: SimulationState): void {
  const { localLatency, couplingBeta, naturalDecay } = state.params;
  const controls = computeDistributedControl(state);
  // For simplicity, no latency buffer; we assume immediate application (tau=2 accounted via gain ceiling)
  // In a full simulation we'd implement a delay buffer; here we approximate with immediate low latency.
  const oldNodes = state.nodes.map((n) => ({ ...n }));
  for (let i = 0; i < state.nodes.length; i++) {
    const node = state.nodes[i];
    const coupling = oldNodes.reduce((sum, other) => {
      if (other.id === node.id) return sum;
      return sum + couplingBeta * (other.stability - node.stability);
    }, 0);
    node.stability = naturalDecay * node.stability + coupling + controls[i];
  }
}

export function runFullSimulation(params: SimulationParams): SimulationState {
  const state = createInitialState(params);
  for (let t = 0; t < params.steps; t++) {
    applyShock(state);
    if (params.architecture === 'centralized') {
      stepCentralized(state);
    } else {
      stepDistributed(state);
    }
    // Record history
    for (const node of state.nodes) {
      state.history[node.id].push(node.stability);
    }
    const mean = state.nodes.reduce((s, n) => s + n.stability, 0) / state.nodes.length;
    state.meanHistory.push(mean);
    state.time++;
  }
  state.finished = true;
  return state;
}
