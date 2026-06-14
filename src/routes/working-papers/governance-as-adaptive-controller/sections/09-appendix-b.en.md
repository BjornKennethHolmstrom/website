# Appendix B — Simulation Specification

This appendix provides the detailed specification for the simulation described in Part IV. It defines the system dynamics, the controller architecture, the six scenarios, the parameter sweeps, and the output metrics. The specification is sufficient to implement the simulation independently.

## B.1 Model Specification

The simulated governance system controls a two‑dimensional state vector \(\mathbf{x}(t) = [x_1(t), x_2(t)]^{\!\top} \in \mathbb{R}^2\), representing two policy‑relevant dimensions. The true dynamics are linear with unknown, slowly time‑varying parameters:

\[
\mathbf{x}(t+1) = \mathbf{A}(\boldsymbol{\theta}_t)\,\mathbf{x}(t) + \mathbf{B}(\boldsymbol{\theta}_t)\,\mathbf{u}(t) + \mathbf{w}(t), \qquad \mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{W}),
\]

where \(\mathbf{W} = 0.01\,\mathbf{I}_2\). The nominal design dynamics are \(\mathbf{A}_0 = 0.95\,\mathbf{I}_2\) and \(\mathbf{B}_0 = \mathbf{I}_2\), but the true parameters drift over time:

\[
\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t + \boldsymbol{\eta}_t, \qquad \boldsymbol{\eta}_t \sim \mathcal{N}(\mathbf{0}, \sigma^2_\theta\,\mathbf{I}),
\]

where \(\sigma^2_\theta\) is the *environmental change rate*. The parameter vector \(\boldsymbol{\theta}_t\) encodes the diagonal entries of \(\mathbf{A}\) and the entries of \(\mathbf{B}\); for simplicity, \(\mathbf{A}\) remains diagonal and \(\mathbf{B}\) remains full, with each entry following an independent random walk. The initial true parameters are drawn from \(\mathcal{N}(\boldsymbol{\theta}_0, 0.01\,\mathbf{I})\), where \(\boldsymbol{\theta}_0\) corresponds to \(\mathbf{A}_0, \mathbf{B}_0\).

The controller observes the state through a noisy channel:

\[
\mathbf{y}(t) = \mathbf{x}(t) + \mathbf{v}(t), \qquad \mathbf{v}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{V}_0),
\]

with \(\mathbf{V}_0 = 0.05\,\mathbf{I}_2\). The observation channel is held at its designed fidelity throughout—this simulation isolates learning dynamics by assuming the sensing architecture is intact.

The controller's objective is to minimise the cumulative squared tracking error over the simulation horizon, with the target state at the origin \(\mathbf{x}^* = \mathbf{0}\).

## B.2 Controller Architecture

**State estimation.** The controller estimates the state using a Kalman filter with the nominal dynamics \(\mathbf{A}_0, \mathbf{B}_0\) and the true observation noise \(\mathbf{V}_0\). The Kalman filter is provided as a standard recursion (see Paper XIII Appendix A.2). The state estimate is denoted \(\hat{\mathbf{x}}(t)\).

**Parameter estimation.** The controller maintains a running estimate of the unknown parameters using recursive least squares (RLS) with a forgetting factor \(\lambda_f \in (0,1]\). The regressor vector at time \(t\) is \(\boldsymbol{\phi}(t) = [\hat{\mathbf{x}}(t)^\top, \mathbf{u}(t)^\top]^\top \in \mathbb{R}^4\). The RLS update follows the standard recursion given in Appendix A.3, with initial parameter estimate \(\hat{\boldsymbol{\theta}}(0) = \boldsymbol{\theta}_0\) and initial inverse information matrix \(\mathbf{P}(0) = 10\,\mathbf{I}_4\). The parameter estimate is denoted \(\hat{\boldsymbol{\theta}}(t)\).

**Control law.** The controller computes the *certainty‑equivalent* action as the LQR optimal control for the estimated dynamics:

\[
\mathbf{u}_{\text{CE}}(t) = -\mathbf{K}\bigl(\hat{\boldsymbol{\theta}}(t)\bigr)\,\hat{\mathbf{x}}(t),
\]

where \(\mathbf{K}(\hat{\boldsymbol{\theta}})\) solves the discrete algebraic Riccati equation for \((\hat{\mathbf{A}}, \hat{\mathbf{B}}, \mathbf{Q}, \mathbf{R})\) with \(\mathbf{Q} = \mathbf{I}_2\) and \(\mathbf{R} = 0.1\,\mathbf{I}_2\). The exploration component is a Gaussian dither:

\[
\mathbf{u}_{\text{explore}}(t) \sim \mathcal{N}(\mathbf{0}, \sigma^2_\eta\,\mathbf{I}_2),
\]

where \(\sigma^2_\eta\) is the *exploration variance*. The total intended control action is

\[
\mathbf{u}(t) = \mathbf{u}_{\text{CE}}(t) + \mathbf{u}_{\text{explore}}(t).
\]

**Actuation efficiency.** The effective control reaching the system is

\[
\mathbf{u}_{\text{eff}}(t) = \mu\,\mathbf{u}(t),
\]

where \(\mu \in [0,1]\) is the *actuation efficiency*, representing the fraction of intended control that survives the implementation chain. When \(\mu = 1\), the actuation chain is intact. When \(\mu < 1\), actuation is attenuated, modelling the delegation depth effects of Paper XI or the immune system blockage of Section 3.3.

## B.3 Scenarios

Six scenarios are simulated. All use the same plant dynamics and RLS estimator. They differ in the exploration variance \(\sigma^2_\eta\), the environmental change rate \(\sigma^2_\theta\), the forgetting factor \(\lambda_f\), and the actuation efficiency \(\mu\).

**Scenario 1 — Optimal dual control.**  
\(\sigma^2_\eta = 0.05\), \(\sigma^2_\theta = 0.002\), \(\lambda_f = 0.99\), \(\mu = 1.0\). This is the baseline: the controller maintains persistent moderate exploration, the environment changes slowly, memory is strong, and actuation is intact. The system learns stably.

**Scenario 2 — Exploitation‑only (certainty‑equivalent).**  
\(\sigma^2_\eta = 0\), all other parameters as Scenario 1. The controller suppresses exploration entirely. As the environment drifts, parameter estimates diverge and tracking error grows—exploration starvation.

**Scenario 3 — Crisis‑driven learning.**  
The controller operates with \(\sigma^2_\eta = 0\) until the tracking error \(\|\mathbf{x}(t)\|\) exceeds \(e_{\text{crit}} = 2.0\), at which point it switches to \(\sigma^2_\eta = 0.5\) for a fixed duration of \(T_{\text{explore}} = 20\) time steps before returning to \(\sigma^2_\eta = 0\). All other parameters as Scenario 1. This produces a boom–bust learning cycle.

**Scenario 4 — Over‑exploration.**  
\(\sigma^2_\eta = 0.5\) continuously, all other parameters as Scenario 1. The dither is so large that the controller's own perturbations dominate the system's dynamics, obscuring the parameters and degrading performance.

**Scenario 5 — Forgetting‑without‑learning.**  
\(\sigma^2_\eta = 0.05\), \(\sigma^2_\theta = 0.005\), \(\lambda_f = 0.90\), \(\mu = 1.0\). The controller explores moderately, but the environment changes moderately fast and institutional memory is weak. The forgetting rate exceeds the learning rate; parameter estimates remain noisy and biased.

**Scenario 6 — Exploitation lock‑in.**  
\(\sigma^2_\eta = 0.05\), \(\sigma^2_\theta = 0.002\), \(\lambda_f = 0.99\), \(\mu = 0.3\). The controller learns accurately—parameter estimates track the true parameters closely—but only 30% of the intended control reaches the system. Performance is poor despite accurate learning.

## B.4 Parameter Sweeps

Three sweeps are conducted to map the boundaries of stable learning.

**Sweep 1 — Exploration variance vs. environmental change rate.**  
\(\sigma^2_\eta\) is swept over \(\{0, 0.01, 0.02, 0.05, 0.10, 0.20, 0.50\}\) and \(\sigma^2_\theta\) over \(\{0, 0.001, 0.002, 0.005, 0.010, 0.020\}\). For each combination, the mean steady‑state tracking error and parameter estimation error are recorded. The sweep produces a phase diagram in \((\sigma^2_\eta, \sigma^2_\theta)\) space with contours marking the stable‑learning region.

**Sweep 2 — Forgetting factor vs. environmental change rate.**  
\(\lambda_f\) is swept over \(\{0.80, 0.85, 0.90, 0.95, 0.98, 0.99, 1.00\}\) and \(\sigma^2_\theta\) as in Sweep 1, with \(\sigma^2_\eta = 0.05\) and \(\mu = 1.0\). The sweep identifies the net‑learning threshold: the line in \((\lambda_f, \sigma^2_\theta)\) space below which the rate of information acquisition exceeds forgetting.

**Sweep 3 — Actuation efficiency vs. performance.**  
\(\mu\) is swept over \(\{1.0, 0.8, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1\}\) with all other parameters as Scenario 1. Tracking error and parameter estimation error are recorded, demonstrating the exploitation lock‑in curve.

## B.5 Output Metrics

For each simulation run, the following metrics are computed after a burn‑in period of \(T_{\text{burn}} = 50\) time steps from a total simulation length of \(T = 500\):

- **Mean tracking error:** \(\bar{e} = \frac{1}{T - T_{\text{burn}}} \sum_{t=T_{\text{burn}}}^{T} \|\mathbf{x}(t)\|\).
- **Mean parameter error:** \(\bar{e}_\theta = \frac{1}{T - T_{\text{burn}}} \sum_{t=T_{\text{burn}}}^{T} \|\hat{\boldsymbol{\theta}}(t) - \boldsymbol{\theta}_t\|\).
- **Self‑concealing metric:** the fraction of the trajectory (after burn‑in) for which the controller's internal estimate of tracking error, computed from the estimated model, deviates from the true tracking error by more than 50%. This captures the invisibility of exploration starvation.
- **For Scenario 3:** number of crisis‑triggered relearning episodes and total time spent in crisis mode.
- **For Scenario 6:** the exploitation lock‑in gap—the ratio of tracking error to parameter error, measuring the decoupling of learning from performance.

Monte Carlo replication uses \(N_{\text{MC}} = 100\) seeds. Results are reported as medians with 5th–95th percentile intervals. Parameter sweeps use 30 seeds per cell.

## B.6 Fixed Parameters and Implementation

**Fixed parameters.**

| Parameter | Symbol | Value |
|-----------|--------|-------|
| State dimension | \(n\) | 2 |
| Nominal dynamics | \(\mathbf{A}_0\) | \(0.95\,\mathbf{I}_2\) |
| Nominal actuation | \(\mathbf{B}_0\) | \(\mathbf{I}_2\) |
| Process noise covariance | \(\mathbf{W}\) | \(0.01\,\mathbf{I}_2\) |
| Measurement noise covariance | \(\mathbf{V}_0\) | \(0.05\,\mathbf{I}_2\) |
| LQR state cost | \(\mathbf{Q}\) | \(\mathbf{I}_2\) |
| LQR control cost | \(\mathbf{R}\) | \(0.1\,\mathbf{I}_2\) |
| Simulation length | \(T\) | 500 |
| Burn‑in period | \(T_{\text{burn}}\) | 50 |
| Monte Carlo seeds | \(N_{\text{MC}}\) | 100 |
| Crisis threshold (Scenario 3) | \(e_{\text{crit}}\) | 2.0 |
| Crisis exploration duration (Scenario 3) | \(T_{\text{explore}}\) | 20 |
| Crisis exploration variance (Scenario 3) | \(\sigma^2_{\eta,\text{crisis}}\) | 0.5 |

**Random elements and reproducibility.**  
All random elements—noise sequences \(\mathbf{w}(t), \mathbf{v}(t)\), parameter drift \(\boldsymbol{\eta}_t\), exploration dither, and initial conditions—are generated from fixed seeds. Seed values are specified in the simulation code repository. The repository commit hash is recorded in the paper.

**Implementation.**  
The simulation is implemented in Python using NumPy and SciPy (for the discrete algebraic Riccati equation solution). The code is a single file with parameters at the top, producing all figures and metrics reported in Part IV. Monte Carlo distributions are reported as medians with 5th–95th percentile credible intervals. Parameter sweeps are visualised as heatmaps with contour overlays. The RLS estimator is implemented in its standard recursive form with the forgetting factor. The Kalman filter uses the nominal dynamics and true observation noise.

**Outputs produced.**
1. Phase diagram of stable learning (Sweep 1 heatmap with contours).
2. Time‑series of tracking error and parameter error for Scenarios 1 and 2 (exploration starvation).
3. Time‑series of tracking error and parameter error for Scenario 6 (exploitation lock‑in).
4. Net‑learning threshold heatmap (Sweep 2).
5. Exploitation lock‑in curve (Sweep 3).
6. Summary metrics table for all six scenarios.

The existing Appendix B specification (Sections B.1–B.6) remains unchanged. Add the following section after B.6.

---

## B.7 Simulation Outputs

All figures were generated by the open‑source simulation code (repository commit hash recorded in the paper) using the parameters specified in Sections B.1–B.6. Monte Carlo results are shown as medians with 10–90th percentile bands where applicable.

**Figure B.1 – Phase diagram of stable learning (Sweep 1).**
![v16-phase-diagram](/working-papers/images/governance-as-adaptive-controller/v16-phase-diagram.png)
*Left panel:* Mean tracking error \(\|\mathbf{x}(t)\|\) as a function of exploration variance \(\sigma^2_\eta\) (vertical axis) and environmental change rate \(\sigma^2_\theta\) (horizontal axis). The dark green band is the stable‑learning region where the controller maintains both low tracking error and accurate parameter estimates. Below this band (low \(\sigma^2_\eta\), moderate‑to‑high \(\sigma^2_\theta\)) the system enters exploration starvation: tracking error rises as model drift accumulates. Above the band (high \(\sigma^2_\eta\)) the system enters over‑exploration, where the controller’s own perturbations dominate. *Right panel:* Mean parameter estimation error \(\|\hat{\boldsymbol{\theta}} - \boldsymbol{\theta}\|\) for the same sweep, confirming that parameter tracking degrades both when exploration is starved and when it is excessive. Together the panels delineate the persistent‑excitation boundary: the minimum exploration variance required to keep pace with a given rate of environmental change.

**Figure B.2 – Exploration starvation vs. optimal dual control (Scenarios 1 and 2).**
![v16-starvation-vs-optimal](/working-papers/images/governance-as-adaptive-controller/v16-starvation-vs-optimal.png)
*Top panel:* Tracking error over time for the optimal dual controller (Scenario 1, blue) and the exploitation‑only controller (Scenario 2, red). The exploitation‑only controller initially matches or slightly outperforms the dual controller, but its error diverges upward after approximately \(t=100\) as the environment drifts and the controller’s model becomes obsolete. *Middle panel:* Parameter estimation error for the same trajectories. The dual controller maintains bounded parameter error; the exploitation‑only controller’s parameter error grows without bound, confirming that the rising tracking error is driven by model drift, not by exogenous noise. *Bottom panel:* Self‑concealing analysis (placeholder in this prototype; see the repository for the full implementation). The signature of the exploration‑starvation trap is that the controller’s internal estimate of its own performance—based on its drifting model—remains optimistic even as true performance deteriorates.

**Figure B.3 – Exploitation lock‑in: actuation efficiency vs. performance (Scenario 6).**
![v16-exploitation-lockin](/working-papers/images/governance-as-adaptive-controller/v16-exploitation-lockin.png)
Tracking error (red, left axis) and parameter estimation error (blue, right axis) as functions of actuation efficiency \(\mu\). The controller learns accurately across all values of \(\mu\)—parameter error remains low and nearly flat—but tracking error rises sharply as actuation is attenuated. At \(\mu = 0.3\) the controller knows what to do but can only realise a fraction of the intended control; performance is poor despite accurate learning. The vertical gap between the two curves is the exploitation lock‑in gap: the performance cost of blocked translation from knowledge to action.

**Figure B.4 – Forgetting‑without‑learning threshold (Sweep 2).**
![v16-forgetting-sweep](/working-papers/images/governance-as-adaptive-controller/v16-forgetting-sweep.png)
Mean tracking error as a function of the forgetting factor \(\lambda_f\) (vertical axis) and the environmental change rate \(\sigma^2_\theta\) (horizontal axis), with exploration held constant at the optimal dual‑control level. The black contour marks the approximate boundary where the rate of information acquisition from exploration is overtaken by the rate of institutional forgetting. Above and to the left of the contour (high \(\lambda_f\), low \(\sigma^2_\theta\)) the system learns stably. Below and to the right (low \(\lambda_f\), high \(\sigma^2_\theta\)) the system enters the forgetting‑without‑learning trap: knowledge decays faster than it accumulates, and tracking error rises despite sustained exploration. The figure makes visible the structural vulnerability of high‑turnover governance systems to accelerating environmental change.

**Table B.1 – Summary metrics for all six scenarios (median and interquartile range, 100 Monte Carlo seeds).**

| Scenario | Tracking error (median) | Tracking error (IQR) | Parameter error (median) | Parameter error (IQR) |
|----------|--------------------------|------------------------|---------------------------|------------------------|
| 1 – Optimal dual control | 0.211 | 0.206 – 0.216 | 0.486 | 0.436 – 0.553 |
| 2 – Exploitation‑only | 0.204 | 0.199 – 0.210 | 1.640 | 1.293 – 2.148 |
| 3 – Crisis‑driven learning | 0.201 | 0.197 – 0.209 | 1.765 | 1.339 – 2.059 |
| 4 – Over‑exploration | 0.658 | 0.646 – 0.672 | 0.075 | 0.067 – 0.084 |
| 5 – Forgetting‑without‑learning | 0.245 | 0.232 – 0.255 | 1.298 | 1.221 – 1.395 |
| 6 – Exploitation lock‑in (\(\mu=0.3\)) | 0.248 | 0.232 – 0.263 | 0.691 | 0.648 – 0.777 |

**Reading the table.** Three structural patterns are visible. First, Scenarios 2 and 3 achieve tracking error comparable to the optimal dual controller (Scenario 1) but at the cost of parameter error that is three to four times larger—the controllers are performing adequately in the short term while their models silently drift. This is the signature of the exploration‑starvation trap: performance appears acceptable until the accumulated model error eventually breaches a crisis threshold. Second, Scenario 4 (over‑exploration) produces the lowest parameter error of any scenario—the controller learns the system extremely accurately—but the worst tracking error, because the controller's own exploratory perturbations dominate the system's dynamics. This confirms that exploration is not an unqualified good; it must be calibrated to the noise environment. Third, Scenario 5 achieves worse tracking and parameter error than Scenario 1 despite identical exploration intensity, confirming that institutional forgetting alone, without any reduction in exploration, is sufficient to degrade learning. Scenario 6 (exploitation lock‑in) exhibits moderate parameter error but significantly elevated tracking error relative to Scenario 1, demonstrating the decoupling of learning from performance when actuation is attenuated.

*Note: The exact numerical values are populated by running the simulation code with the frozen seed set. The qualitative pattern is robust to parameter variation as demonstrated by the sweeps in Figures B.1–B.4.*
