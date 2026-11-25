# Appendix B — Simulation specification

## B.1 Plant [I]

\[
x_{t+1}=A_tx_t+B_t\mu u_t+w_t,\qquad y_{t+1}=x_{t+1}+v_{t+1}.
\]

The two diagonal entries of \(A_t\) and four entries of \(B_t\) are six drifting parameters, initialized near \(A_0=0.95I_2\), \(B_0=I_2\) with independent perturbations of standard deviation 0.01. The process and observation noise covariances are \(0.01I_2\) and \(0.05I_2\). The parameter random-walk innovations have standard deviation 0.002 by default (variance 0.000004). These noise quantities are not interchangeable. The LQR state and input cost matrices are \(Q=I_2\) and \(R=0.1I_2\).

## B.2 Controller [I]

At each step solve the nominal-in-estimates discrete Riccati equation for the estimated plant, form \(u_t=-K_t\hat x_t+\eta_t\), and apply the effective input \(\mu u_t\). The code falls back to a zero gain if the Riccati solver raises its handled linear algebra error. Dither components are independent Gaussian draws of standard deviation \(\sigma_\eta\), not variance. The filter uses fixed \(A_0,B_0\) and intended \(u_t\). For each state dimension \(d\) the RLS regressor is \(\phi_{t,d}=(\hat x_{t,d},u_{t,0},u_{t,1})^\top\) and the response is the corresponding component of \(y_{t+1}\). Each row has a three-by-three \(P\) initialized to \(10I_3\). Estimated-state regressors, feedback and drift complicate consistency; this is not the full-state noiseless regression of A.2.

## B.3 Scenarios [I]

| Scenario | Dither SD | Drift SD | Forgetting factor | Actuation |
|---|---:|---:|---:|---:|
| 1 Moderate dither | 0.05 | 0.002 | 0.99 | 1 |
| 2 No deliberate dither | 0 | 0.002 | 0.99 | 1 |
| 3 Crisis trigger | 0 or 0.5 | 0.002 | 0.99 | 1 |
| 4 High dither | 0.5 | 0.002 | 0.99 | 1 |
| 5 Drift and forgetting | 0.05 | 0.005 | 0.90 | 1 |
| 6 Attenuation | 0.05 | 0.002 | 0.99 | 0.3 |

Scenario 3 triggers a 20-step exploration period when the simulator's true state norm exceeds 2.0 while inactive. Scenario 6's physical and effective input gains cannot be distinguished from intended-input dynamics alone.

## B.4 Parameter sweeps

The legacy script sweeps dither and drift, forgetting and drift, and actuation efficiency. It uses 30 runs per sweep cell for the tracking heatmaps. Their outcomes are not estimates of a net-learning rate, and no threshold or country placement is inferred from them here.

## B.5 Output metrics

The tracking measure averages the true state Euclidean norm. Parameter error averages the two row-error norms against physical parameters and then averages over time. It is not the quadratic LQR cost or an estimate of posterior uncertainty. The self-concealment field is hardcoded to zero, not observed. Crisis counting exists in the code but the generated summary CSV does not include it.

## B.6 Fixed parameters and replay

The intended summary uses 100 seeds per scenario, with 50 burn-in steps and 500 subsequent steps. The audit's replay uses three summary seeds per scenario, retaining the code and metric definitions. The original CSV, full trajectories and adaptive-controller image files were not recovered. Both original simulation scripts are preserved unchanged; see the correction archive, including audit v0.2 `scripts/check_witnesses.py`, `results/witnesses.json`, `scripts/check_additions.py` and `results/additions.json`. These checks use the supplied source functions and exact model calculations, not a rerun of the full sweep.

The separate sunset script uses 150 runs per cell and a 300-year horizon, log-mean-reverting truth (coefficient 0.95), true effectiveness 0.97, a random-walk grid filter with 200 log-threat and 20 effectiveness grid values, and a prior centered at threat 10. The scenario centers are 0.2 and 2. The removal rule uses posterior probability at least 0.95 below or at threat 1. The original figures are archival only; the 30-year label in the trade-off plot is wrong. The reported known-effectiveness control was not supplied. No full sunset replay was performed.

## B.7 Simulation outputs [HR]

The original Table B.1 is retained below with corrected scenario names. Numbers are historical reported medians and interquartile ranges of per-run errors (100 runs per scenario), not independently reproduced statistics. Part IV supplies the separately labelled exploratory three-seed diagnostic.

| Scenario | Tracking median | Tracking IQR | Parameter median | Parameter IQR |
|---|---:|---|---:|---|
| 1 Moderate dither | 0.211 | 0.206–0.216 | 0.486 | 0.436–0.553 |
| 2 No deliberate dither | 0.204 | 0.199–0.210 | 1.640 | 1.293–2.148 |
| 3 Crisis trigger | 0.201 | 0.197–0.209 | 1.765 | 1.339–2.059 |
| 4 High dither | 0.658 | 0.646–0.672 | 0.075 | 0.067–0.084 |
| 5 Drift and forgetting | 0.245 | 0.232–0.255 | 1.298 | 1.221–1.395 |
| 6 Attenuation | 0.248 | 0.232–0.263 | 0.691 | 0.648–0.777 |

The historical medians do not show inevitable decline without dither. The high-dither scenario has smaller parameter error at the price of larger tracking error. The code provides no direct measurement of the proposed self-concealment mechanism.
