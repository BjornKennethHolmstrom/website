// scenarios.ts
import type { SimulationParams } from './types';

export interface Scenario {
  id: string;
  label: string;
  description: string;
  legacyParams: SimulationParams;
  adaptiveParams: SimulationParams;
  shocks: { time: number; envShock: number; finShock: number }[];
  special?: string; // optional hint
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'default',
    label: 'Default Comparison',
    description: 'Standard legacy vs. adaptive governance under identical environmental and financial shocks.',
    legacyParams: { type: 'legacy', latency: 6, noise: 8, gain: 1.5 },
    adaptiveParams: { type: 'adaptive', latency: 1, noise: 1, gain: 0.8 },
    shocks: [
      { time: 30, envShock: -30, finShock: 0 },
      { time: 50, envShock: 0, finShock: 30 },
    ],
  },
  {
    id: 'sweden-drift-loop',
    label: 'Sweden – Drift Loop',
    description: 'High trust suppresses outlier signals. Environmental stress accumulates slowly, barely visible until crisis.',
    legacyParams: { type: 'legacy', latency: 5, noise: 3, gain: 1.2 },
    adaptiveParams: { type: 'adaptive', latency: 2, noise: 1, gain: 0.6 },
    shocks: [
      { time: 40, envShock: -15, finShock: 0 },
      { time: 70, envShock: -25, finShock: 0 },
    ],
    special: 'Legacy immune permeability starts at 0.7, drops slowly with accumulated environmental damage.',
  },
  {
    id: 'brazil-breakthrough-capture',
    label: 'Brazil – Breakthrough–Capture Loop',
    description: 'Periodic reform windows open (low immune permeability) then close. Breakthroughs are absorbed.',
    legacyParams: { type: 'legacy', latency: 7, noise: 9, gain: 1.8 },
    adaptiveParams: { type: 'adaptive', latency: 2, noise: 2, gain: 0.7 },
    shocks: [
      { time: 25, envShock: -20, finShock: 10 },
      { time: 55, envShock: -20, finShock: 20 },
    ],
    special: 'Reform windows at steps 30‑40 and 60‑70: permeability drops to 0.2 temporarily.',
  },
  {
    id: 'russia-legibility-deficit',
    label: 'Russia – Legibility Deficit',
    description: 'Extreme latency and noise. Immune permeability near 100%. Reforms are almost always absorbed.',
    legacyParams: { type: 'legacy', latency: 12, noise: 15, gain: 2.0 },
    adaptiveParams: { type: 'adaptive', latency: 3, noise: 2, gain: 0.5 },
    shocks: [
      { time: 20, envShock: -35, finShock: 0 },
      { time: 45, envShock: -25, finShock: 40 },
    ],
    special: 'Legacy immune permeability starts at 0.95. Political capital regenerates very slowly.',
  },
  {
    id: 'china-calibration-deficit',
    label: 'China – Calibration Deficit',
    description: 'High gain causes campaign‑style overshoot. Abrupt corrections damage trust.',
    legacyParams: { type: 'legacy', latency: 4, noise: 6, gain: 2.5 },
    adaptiveParams: { type: 'adaptive', latency: 2, noise: 2, gain: 1.0 },
    shocks: [
      { time: 30, envShock: -25, finShock: 0 },
      { time: 60, envShock: -30, finShock: 20 },
    ],
    special: 'Gain randomly spikes every 20 steps, then resets. High volatility.',
  },
  {
    id: 'us-integration-deficit',
    label: 'United States – Integration Deficit',
    description: 'Distributed capacity cannot be assembled. Reforms pass locally but fail to scale.',
    legacyParams: { type: 'legacy', latency: 5, noise: 7, gain: 1.3 },
    adaptiveParams: { type: 'adaptive', latency: 1, noise: 1, gain: 1.0 },
    shocks: [
      { time: 35, envShock: -20, finShock: 0 },
      { time: 65, envShock: -20, finShock: 30 },
    ],
    special: 'Reforms succeed more often (permeability 0.4) but only affect one dimension per success. Scaling requires multiple successes.',
  },
];
