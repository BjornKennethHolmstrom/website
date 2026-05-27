export interface SimulationState {
  W: number;   // wealth (observed)
  E: number;   // environmental integrity (hidden)
  I: number;   // current investment (control input)
  t: number;   // current time step
  revealed: boolean;           // has player revealed hidden dimension?
  collapsed: boolean;          // has the system collapsed?
  gameOver: boolean;           // terminal state
  history: { W: number; E: number; I: number }[];
}

export interface SimulationParams {
  alpha: number;    // investment productivity per unit of E
  deltaW: number;   // wealth depreciation
  beta: number;     // environmental cost per unit of I
  gamma: number;    // environmental regeneration rate
  eta: number;      // delayed damage from past wealth
  E0: number;       // baseline environmental integrity
  WTarget: number;  // desired wealth level
  I0: number;       // baseline investment
  gain: number;     // controller gain (how aggressively to push toward target)
  noiseSigmaW: number; // observation noise on W (dashboard inaccuracy)
  collapseThreshold: number; // E below this → collapse
}
