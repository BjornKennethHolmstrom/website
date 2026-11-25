# Part IV — Simulation: the adaptive controller

## 4.1 Implemented plant and controller [I]

The simulation is a two-dimensional linear plant with drifting diagonal \(A\) and unrestricted two-by-two \(B\). It uses a nominal Kalman filter, two per-row recursive least-squares estimators and certainty-equivalent LQR with optional Gaussian dither. The filter uses the nominal plant and intended action, not the current estimated or attenuated plant. It is not generally optimal for the actual process. Appendix B describes the code rather than the originally proposed ideal controller.

## 4.2 Six scenarios

The historical comparison uses moderate dither, no deliberate dither, crisis-triggered dither, high dither, combined faster drift and shorter memory, and attenuation of actuation. No deliberate dither is not absence of informative variation: process noise, feedback and transients remain. The crisis trigger uses the true simulated state, which a real controller need not observe. The faster-drift condition also changes forgetting, precluding an isolated forgetting effect.

## 4.3 Historical and exploratory results

Appendix B.7 retains the historical 100-run table [HR]. The reported median tracking norms for moderate, no and crisis-triggered dither are 0.211, 0.204 and 0.201, respectively. Their parameter errors differ markedly. High dither has the highest reported tracking norm (0.658) and the lowest parameter error (0.075). This is a finite-horizon performance/identification trade-off, not evidence that the nonexploring controller must eventually fail.

An exploratory replay of the first three summary-table seeds for each scenario gives the following medians of per-run mean errors [E]; the 550-step trajectories and original metric definitions were retained.

| Scenario | Tracking norm | Parameter error |
|---|---:|---:|
| 1 | 0.213 | 0.499 |
| 2 | 0.205 | 1.666 |
| 3 | 0.197 | 1.951 |
| 4 | 0.647 | 0.085 |
| 5 | 0.231 | 1.258 |
| 6 | 0.280 | 0.774 |

No crisis episodes occur in the three replayed scenario-3 runs. In each replayed scenario-6 run the estimate is closer to the effective input gain than the physical gain by the audit's mean matrix-error diagnostic. These observations do not verify the full historical distributions. The code's self-concealment field is a constant placeholder and cannot be interpreted as a measurement.

## 4.4 Sweeps and limits

The code's tracking sweeps measure mean state norm, not the quadratic LQR objective, information rank or the derivative of an institutional knowledge stock. Their contour at tracking norm 1.0 is a selected performance level, not a derived excitation or learning threshold. The original complete sweeps, adaptive-controller figure files and CSV were not recovered in the audit; the old figures and country overlays are not used as evidence in this revision. No claim about asymptotic stability, optimal dual control or causal institutional effects follows from the exploratory replays.
