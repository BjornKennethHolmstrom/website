import { STAGE_TEMPLATES, type ReformState, type Stage } from './types';

export function createInitialState(immunePermeability: number): ReformState {
  const stages: Stage[] = STAGE_TEMPLATES.map((t) => ({
    ...t,
    dilutionChance: t.dilutionChance * immunePermeability,
    result: null,
  }));
  return {
    stages,
    currentStage: 0,
    finished: false,
    outcome: 'pending',
    immunePermeability,
  };
}

export function processStage(state: ReformState): ReformState {
  if (state.finished) return state;

  const stage = state.stages[state.currentStage];
  const diluted = Math.random() < stage.dilutionChance;

  if (diluted) {
    // Dilution occurred — mark this stage as "watered down"
    stage.result = 'diluted';
    // Reform does not advance; it becomes symbolic
    return {
      ...state,
      finished: true,
      outcome: state.currentStage === 0 ? 'complete_rejection' : 'symbolic_adaptation',
    };
  }

  // Passed without dilution
  stage.result = 'passed';

  if (state.currentStage >= state.stages.length - 1) {
    // Reached end successfully — structural reform
    return {
      ...state,
      finished: true,
      outcome: 'structural_reform',
    };
  }

  // Advance to next stage
  return {
    ...state,
    currentStage: state.currentStage + 1,
  };
}

export function runFullSimulation(state: ReformState): ReformState {
  let current = state;
  while (!current.finished) {
    current = processStage(current);
  }
  return current;
}
