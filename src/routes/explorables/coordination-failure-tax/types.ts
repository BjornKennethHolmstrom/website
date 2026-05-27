export interface FailureMode {
  id: string;
  label: string;
  description: string;
  value: number; // 0–100 percentage
}

export const DEFAULT_MODES: FailureMode[] = [
  {
    id: 'spatial',
    label: 'Spatial Blindness',
    description: 'Aggregation destroys local information — central policy sees only averages.',
    value: 50,
  },
  {
    id: 'frequency',
    label: 'Frequency Mismatch',
    description: 'Decision latency is mismatched to the timescale of disturbances.',
    value: 50,
  },
  {
    id: 'preference',
    label: 'Preference Invisibility',
    description: 'Representation chains are too deep for citizen preferences to survive.',
    value: 50,
  },
  {
    id: 'observational',
    label: 'Observational Inadequacy',
    description: 'The institution monitors too few dimensions of the system it governs.',
    value: 50,
  },
];
