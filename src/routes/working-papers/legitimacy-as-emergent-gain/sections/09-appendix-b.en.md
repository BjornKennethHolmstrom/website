# Appendix B — Simulation Specification

This appendix provides the detailed specification for the simulation described in Part IV. It defines the system dynamics, the legitimacy update mechanism with split‑state transparency and hysteresis asymmetry, the four scenarios, the parameter sweeps, and the output metrics. The specification is sufficient to implement the simulation independently.

## B.1 Model Specification

The simulated governance system controls a two‑dimensional state vector \(\mathbf{x}(t) = [x_1(t), x_2(t)]^{\!\top} \in \mathbb{R}^2\), representing two policy‑relevant dimensions such as economic output and environmental quality, or service delivery and fiscal balance. The dynamics are linear time‑invariant, with legitimacy entering as a multiplicative gain on actuation and an inverse divisor on observation noise.

**True dynamics.**
\[
\mathbf{x}(t+1) = \mathbf{A}\,\mathbf{x}(t) + L_B(t)\,\mathbf{B}\,\mathbf{u}(t) + \mathbf{w}(t),
\qquad \mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{W}),
\]
where
\[
\mathbf{A} = 0.95\,\mathbf{I}_2, \quad \mathbf{B} = \mathbf{I}_2, \quad \mathbf{W} = 0.01\,\mathbf{I}_2.
\]
The uncontrolled system decays slowly toward the origin (the target state). Actuation effectiveness is multiplied by the actuation‑legitimacy parameter \(L_B(t) \in [0,1]\).

**Observation.**
\[
\mathbf{y}(t) = \mathbf{C}\,\mathbf{x}(t) + \mathbf{v}(t), \qquad \mathbf{v}(t) \sim \mathcal{N}\!\bigl(\mathbf{0}, \mathbf{V}(t)\bigr),
\]
with \(\mathbf{C} = \mathbf{I}_2\) (full‑state observation up to noise) and
\[
\mathbf{V}(t) = \frac{\mathbf{V}_0}{L_C(t)}, \qquad \mathbf{V}_0 = 0.05\,\mathbf{I}_2.
\]
The observation‑legitimacy parameter \(L_C(t) \in [0,1]\) scales the measurement noise covariance inversely: as \(L_C\) falls, noise rises without bound.

**State estimation.**  
The controller maintains a state estimate \(\hat{\mathbf{x}}(t)\) via a Kalman filter as specified in Appendix A.2. The filter is provided with the true legitimacy values \(L_B(t), L_C(t)\) (the controller knows its own current legitimacy level; the simulation does not model misperception of L by the controller, though that would be a natural extension).

**Control law.**  
The controller applies proportional state feedback based on the filtered estimate:
\[
\mathbf{u}(t) = -\mathbf{K}\,\hat{\mathbf{x}}(t),
\]
where \(\mathbf{K}\) is the infinite‑horizon linear quadratic regulator (LQR) gain computed for the nominal design system \(( \mathbf{A}, \mathbf{B}, \mathbf{Q}, \mathbf{R} )\) with state cost \(\mathbf{Q} = \mathbf{I}_2\) and control cost \(\mathbf{R} = 0.1\,\mathbf{I}_2\). Solving the discrete algebraic Riccati equation yields \(\mathbf{K} \approx 0.75\,\mathbf{I}_2\) for the chosen parameters. This gain is optimal when \(L_B = 1\) and is used regardless of the current legitimacy level, so that performance degradation reflects the legitimacy multiplier rather than controller detuning. In Scenario 3 the controller is permitted to reduce its gain below the nominal value to simulate gain‑scheduling.

## B.2 Legitimacy Dynamics

The composite legitimacy \(L(t)\) is modelled as a scalar with \(L_B(t) = L_C(t) = L(t)\). Its evolution follows the update equation of Appendix A.3, implemented with hysteresis asymmetry, a split‑state transparency mechanism, and a stochastic betrayal hazard.

**Legitimacy update.**
\[
L(t+1) = \operatorname{clip}\!\Bigl(L(t) - \alpha(t)\,\|\mathbf{x}_{\text{rep}}(t)\|^2 + \beta\,T(t) - \gamma\,D(t) + \delta,\; 0,\; 1\Bigr),
\]
where
- \(\mathbf{x}_{\text{rep}}(t)\) is the state perceived by the governed population,
- \(T(t) \in [0,1]\) is the controller’s chosen transparency level,
- \(D(t) \in \{0,1\}\) indicates a deception revelation event,
- \(\delta = 0.005\) is a small exogenous trust drift,
- \(\beta = 0.08\) (transparency sensitivity) in all scenarios unless otherwise specified.

**Hysteresis‑asymmetric delivery sensitivity.**  
\[
\alpha(t) = 
\begin{cases}
\alpha_{\text{drop}} = 0.12, & \text{if } \|\mathbf{x}_{\text{rep}}(t)\|^2 > \|\mathbf{x}_{\text{rep}}(t-1)\|^2,\\[4pt]
\alpha_{\text{recovery}} = 0.03, & \text{if } \|\mathbf{x}_{\text{rep}}(t)\|^2 \le \|\mathbf{x}_{\text{rep}}(t-1)\|^2,
\end{cases}
\]
giving a 4:1 drop‑to‑recovery ratio.

**Split‑state transparency.**  
When the controller chooses suppression, the reported state is a convex combination of the true state and the promised reference \(\mathbf{x}_{\text{promised}} = \mathbf{0}\) (the target):
\[
\mathbf{x}_{\text{rep}}(t) = \lambda\,\mathbf{x}(t) + (1-\lambda)\,\mathbf{0} = \lambda\,\mathbf{x}(t),
\]
with suppression parameter \(\lambda \in [0,1]\). \(\lambda = 1\) is full transparency; \(\lambda < 1\) flatters the true state toward zero (the target) in the eyes of the public.

**Hidden discrepancy and betrayal hazard.**  
The cumulative hidden discrepancy evolves as
\[
E_{\text{betrayal}}(t+1) = E_{\text{betrayal}}(t) + \|\mathbf{x}(t) - \mathbf{x}_{\text{rep}}(t)\|^2,
\]
with \(E_{\text{betrayal}}(0) = 0\). The probability of revelation at time \(t\) is
\[
\Pr(\text{revelation at }t) = 1 - \exp\!\bigl(-h\,E_{\text{betrayal}}(t)\bigr),
\]
with hazard coefficient \(h = 0.02\). At each time step a uniform random draw determines whether revelation occurs. On revelation, \(D(t)\) is set to \(1\) for that step, \(\lambda\) is forced to \(1\) permanently (the controller can no longer hide), and the betrayal penalty \(-\gamma D(t)\) is applied. The betrayal sensitivity \(\gamma\) is set according to the legitimacy regime:
- Built‑legitimacy scenarios: \(\gamma_{\text{built}} = 0.5\).
- Borrowed‑legitimacy scenarios: \(\gamma_{\text{borrowed}} = 3.0\).

**Transparency level \(T(t)\).**  
In the simulation, transparency \(T(t)\) is not continuously optimised but set as a scenario parameter. In high‑transparency scenarios, \(T = 1\) and \(\lambda = 1\); in suppression scenarios, \(T = 0.2\) and \(\lambda = 0.3\) (typical borrowed‑legitimacy values).

## B.3 Scenarios

Four scenarios are simulated, corresponding to the failure modes of Part III. All use the same plant dynamics and LQR controller (unless otherwise noted for the recovery scenario). Scenarios 2–4 are run with built‑ or borrowed‑legitimacy parameter sets as indicated.

**Scenario 1 — High‑transparency, high‑legitimacy equilibrium.**  
\(L(0) = 0.7\), \(T = 1\), \(\lambda = 1\) (no suppression). No deception is active. The system experiences a moderate external shock at \(t = 50\): a temporary displacement \(\mathbf{x}(50) \leftarrow \mathbf{x}(50) + [1.5, 0]^{\!\top}\). The scenario demonstrates shock absorption in a high‑\(L\), transparent regime. Parameters: built‑legitimacy set.

**Scenario 2 — The legitimacy trap.**  
\(L(0) = 0.7\), \(T = 1\), \(\lambda = 1\). At \(t = 50\) a large external shock is applied: \(\mathbf{x}(50) \leftarrow \mathbf{x}(50) + [3.0, 0]^{\!\top}\). The resulting delivery gap is substantial, triggering the asymmetric \(\alpha_{\text{drop}}\). The controller continues to apply the nominal LQR gain. The simulation demonstrates the self‑reinforcing spiral as falling \(L\) degrades actuation and observation, preventing recovery. Parameters: built‑legitimacy set, then also borrowed set for comparison.

**Scenario 3 — Recovery through transparency intervention.**  
\(L(0) = 0.3\) (the system begins in the low‑\(L\) attractor, either exogenously or as the end state of Scenario 2). At \(t = 50\) the controller switches to a legitimacy‑rebuilding strategy:
- Gain is halved: \(\mathbf{K}_{\text{rebuild}} = 0.5\,\mathbf{K}\).
- Full transparency is adopted: \(T = 1\), \(\lambda = 1\).
- The promised target is unchanged (\(\mathbf{0}\)), but the controller accepts slower convergence.
The scenario tracks the recovery trajectory and compares it to a counterfactual in which the controller maintains full gain and does not increase transparency. The hysteresis gap is measured as the time for \(L\) to return to \(0.6\) versus the time taken to fall from \(0.6\) to \(0.3\).

**Scenario 4 — Borrowed‑legitimacy collapse.**  
\(L(0) = 0.55\), \(T = 0.2\), \(\lambda = 0.3\) (low transparency, suppressed reporting). No external shock is applied; the system evolves under process noise and the controller’s increasingly miscalibrated interventions. The flattered reported state maintains apparent \(L\) while the true state drifts and the hidden discrepancy \(E_{\text{betrayal}}\) accumulates. At a stochastic trigger point (governed by the hazard in B.2), revelation occurs: \(D(t) = 1\), \(\gamma = 3.0\) is applied, and \(\lambda\) is forced to \(1\). The scenario demonstrates the catastrophic collapse of borrowed legitimacy. Parameters: borrowed‑legitimacy set.

## B.4 Parameter Sweeps

The following sweeps are run to characterise sensitivity and to produce the heatmaps described in Part IV.

1. **Betrayal sensitivity \(\gamma\):** swept from \(0.5\) to \(5.0\) in steps of \(0.5\), with fixed \(L(0)=0.55\), \(\lambda=0.3\), \(h=0.02\), and all other parameters as in the borrowed‑legitimacy baseline. For each \(\gamma\) we record the minimum post‑revelation \(L\) and the fraction of Monte Carlo runs that enter the trap (\(L\) falls below \(L_{\text{crit}}\) and does not recover within the simulation window).

2. **Suppression duration (time before revelation):** the hazard coefficient \(h\) is varied inversely with the expected time to revelation. We sweep the expected suppression duration from 10 to 200 time steps by setting \(h = 1/\text{expected\_duration}\), and for each value run the borrowed‑legitimacy scenario. The minimum post‑revelation \(L\) is recorded as a function of suppression duration.

3. **Hysteresis asymmetry \(\alpha_{\text{drop}} / \alpha_{\text{recovery}}\):** the drop‑to‑recovery ratio is swept from 1:1 (no hysteresis) to 10:1 while keeping the geometric mean of \(\alpha_{\text{drop}}\) and \(\alpha_{\text{recovery}}\) constant. For each ratio, Scenario 2 is run and the fraction of runs entering the trap is recorded. This sweep demonstrates that the trap emerges as asymmetry increases.

4. **Initial legitimacy \(L(0)\):** swept from \(0.1\) to \(0.9\) in steps of \(0.05\). For each value, Scenario 1 (no suppression, no shock) is run to identify the basins of attraction. The steady‑state \(L\) is recorded; the \(L(0)\) below which the system drifts to a low‑\(L\) equilibrium defines the empirical \(L_{\text{crit}}\).

## B.5 Output Metrics and Key Figures

**Primary metrics (per Monte Carlo run).**
- \(L_{\text{final}} = \text{mean of } L(t) \text{ over the last } 50 \text{ time steps}\).
- \(L_{\text{min}} = \min_t L(t)\) over the full trajectory.
- \(\|\mathbf{x}\|_{\text{final}} = \text{mean of } \|\mathbf{x}(t)\| \text{ over the last } 50 \text{ steps}\).
- Trap entry indicator: \(1\) if \(L\) falls below \(L_{\text{crit}}\) (estimated from the \(L(0)\) sweep) and does not recover to within 20% of its initial value by \(T=300\); \(0\) otherwise.
- Recovery time (Scenario 3): number of time steps from the start of the rebuilding intervention until \(L\) first reaches \(0.6\).
- Collapse magnitude (Scenario 4): \(L_{\text{before\_revelation}} - L_{\text{after\_revelation}}\), where \(L_{\text{before\_revelation}}\) is the mean over the 10 steps preceding revelation and \(L_{\text{after\_revelation}}\) is the minimum in the 20 steps following revelation.
- Hysteresis gap (Scenario 3 vs. Scenario 2): the ratio of recovery time to decline time (time for \(L\) to fall from \(0.6\) to \(0.3\) under Scenario 2).

**Key figures.**
- **Figure 1:** Phase diagram in \((L, T)\) space showing the basins of attraction for the high‑\(L\) and low‑\(L\) equilibria, with the separatrix \(L_{\text{crit}}\) marked.
- **Figure 2:** Time‑series for Scenario 2 (trap) and Scenario 3 (recovery): three panels showing \(\|\mathbf{x}(t)\|\), \(L(t)\), and the effective actuation/observation capacities \(L_B(t), L_C(t)\).
- **Figure 3:** Borrowed‑legitimacy collapse (Scenario 4) with panels for true vs. reported state norm, apparent vs. true \(L\), and cumulative hidden discrepancy \(E_{\text{betrayal}}\), with the stochastic revelation event marked.
- **Figure 4:** Collapse severity heatmap: suppression duration (x‑axis) vs. betrayal sensitivity \(\gamma\) (y‑axis), colour‑coded by minimum post‑revelation \(L\), with the trap‑entry contour overlaid.

**Monte Carlo and reporting.**  
Each scenario is run for \(N_{\text{MC}} = 100\) independent seeds. Results are reported as medians with 5th–95th percentile intervals. The simulation code is open‑source, with fixed seeds for reproducibility, and deposited in the series repository.

## B.6 Simulation Parameters and Implementation Notes

**Fixed parameters (baseline built‑legitimacy).**

| Parameter | Symbol | Value |
|-----------|--------|-------|
| State dimension | \(n\) | 2 |
| Dynamics matrix | \(\mathbf{A}\) | \(0.95\,\mathbf{I}_2\) |
| Actuation matrix | \(\mathbf{B}\) | \(\mathbf{I}_2\) |
| Observation matrix | \(\mathbf{C}\) | \(\mathbf{I}_2\) |
| Process noise covariance | \(\mathbf{W}\) | \(0.01\,\mathbf{I}_2\) |
| Baseline measurement noise cov. | \(\mathbf{V}_0\) | \(0.05\,\mathbf{I}_2\) |
| LQR state cost | \(\mathbf{Q}\) | \(\mathbf{I}_2\) |
| LQR control cost | \(\mathbf{R}\) | \(0.1\,\mathbf{I}_2\) |
| Nominal LQR gain (per dim.) | \(\mathbf{K}\) | \(\approx 0.75\,\mathbf{I}_2\) |
| Simulation length | \(T\) | 300 |
| Burn‑in (excluded from metrics) | \(T_{\text{burn}}\) | 20 |
| Monte Carlo seeds | \(N_{\text{MC}}\) | 100 |
| Exogenous drift | \(\delta\) | 0.005 |
| Transparency sensitivity | \(\beta\) | 0.08 |

**Legitimacy‑regime parameter sets.**

| Parameter | Built | Borrowed |
|-----------|-------|----------|
| \(\alpha_{\text{drop}}\) | 0.12 | 0.25 |
| \(\alpha_{\text{recovery}}\) | 0.03 | 0.02 |
| \(\gamma\) | 0.5 | 3.0 |
| Hazard coeff. \(h\) | 0.02 | 0.02 |
| Typical \(T\) | 1.0 | 0.2 |
| Typical \(\lambda\) | 1.0 | 0.3 |

**Random elements and reproducibility.**  
All random elements—noise sequences \(\mathbf{w}(t), \mathbf{v}(t)\), the stochastic revelation draw, and any external shock magnitudes—are generated from fixed seeds. The seed values are specified in the simulation code repository. The repository commit hash is recorded in the paper.

**Implementation.**  
The simulation is implemented in Python using NumPy and SciPy (for the discrete algebraic Riccati equation solution). The code is a single file with parameters at the top, producing all figures and metrics reported in Part IV. Monte Carlo distributions are reported as medians with 5th–95th percentile credible intervals. Parameter sweeps are visualised as heatmaps. The Kalman filter is implemented in its standard recursive form using the true legitimacy values \(L(t)\) to compute \(\mathbf{V}(t)\) and the effective \(\mathbf{B}_{\text{eff}}(t)\).
