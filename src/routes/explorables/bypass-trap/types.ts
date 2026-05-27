export interface BypassState {
  time: number;
  coreQuality: number;
  bypassQuality: number;
  reformProgress: number;   // 0-100, when 100 core quality starts rising
  pressure: number;         // 0-100, public / political pressure to reform core
  hasSunset: boolean;
  sunsetTriggered: boolean;
  gameOver: boolean;
  history: { time: number; core: number; bypass: number; pressure: number }[];
}

export interface BypassParams {
  coreInitial: number;
  bypassInitial: number;
  pressureInitial: number;
  coreDecayRate: number;        // per step if no reform
  coreImproveRate: number;      // per step when reform complete
  pressureDecayPerBypass: number; // pressure lost per unit of bypass quality above threshold
  pressureThreshold: number;    // bypass quality above this reduces pressure
  reformSpeed: number;          // per step when pressure > minPressure
  minPressureForReform: number; // pressure must be above this for reform to progress
  sunsetDelay: number;          // steps after bypass high before sunset activates
  sunsetPressureBoost: number;  // how much pressure returns when sunset triggers
  bypassGrowthRate: number;     // per step when pressure is low
}
