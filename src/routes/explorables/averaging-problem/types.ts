export type Architecture = 'centralized' | 'distributed';

export interface NodeState {
  id: number;
  stability: number;
}

export interface SimulationParams {
  architecture: Architecture;
  numNodes: number;
  shockNodes: number[];
  shockMagnitude: number;
  shockTime: number;
  targetStability: number;
  centralLatency: number;
  centralNoise: number;
  centralGain: number;
  localLatency: number;
  localNoise: number;
  localGain: number;
  couplingBeta: number;
  naturalDecay: number;   // A in x(t+1) = A*x + ...
  steps: number;
}

export interface SimulationState {
  params: SimulationParams;
  nodes: NodeState[];
  time: number;
  history: number[][];          // [nodeId][time]
  meanHistory: number[];
  controlHistory: number[];     // for centralized, the uniform control signal
  finished: boolean;
  revealed: boolean;            // if true, show node-level view
}

export const DEFAULT_PARAMS: SimulationParams = {
  architecture: 'centralized',
  numNodes: 10,
  shockNodes: [2, 7],
  shockMagnitude: -45,
  shockTime: 20,
  targetStability: 100,
  centralLatency: 12,
  centralNoise: 6.0,
  centralGain: 0.30,
  localLatency: 2,
  localNoise: 0.5,
  localGain: 0.45,
  couplingBeta: 0.02,
  naturalDecay: 1.0,
  steps: 120,
};
