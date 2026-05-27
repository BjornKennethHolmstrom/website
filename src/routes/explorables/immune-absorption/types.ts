export interface Stage {
  id: number;
  name: string;
  description: string;
  dilutionChance: number;    // base probability of dilution at this stage
  result: string | null;     // null = pending, string = outcome
}

export interface ReformState {
  stages: Stage[];
  currentStage: number;      // index of current stage (0 = proposal)
  finished: boolean;
  outcome: 'pending' | 'structural_reform' | 'symbolic_adaptation' | 'complete_rejection';
  immunePermeability: number; // 0 = high permeability (reform passes easily), 1 = low (max dilution)
}

export const STAGE_TEMPLATES: Omit<Stage, 'result'>[] = [
  {
    id: 0,
    name: 'Proposal',
    description: 'A reform is proposed by an internal champion.',
    dilutionChance: 0.1,
  },
  {
    id: 1,
    name: 'Committee Review',
    description: 'The proposal enters a stakeholder committee for evaluation.',
    dilutionChance: 0.3,
  },
  {
    id: 2,
    name: 'Public Consultation',
    description: 'External stakeholders are invited to comment.',
    dilutionChance: 0.4,
  },
  {
    id: 3,
    name: 'Executive Endorsement',
    description: 'Leadership must publicly endorse the reform.',
    dilutionChance: 0.5,
  },
  {
    id: 4,
    name: 'Implementation Design',
    description: 'The operational details are written into policy.',
    dilutionChance: 0.6,
  },
  {
    id: 5,
    name: 'Launch & Celebration',
    description: 'The reform is announced with fanfare.',
    dilutionChance: 0.7,
  },
];
