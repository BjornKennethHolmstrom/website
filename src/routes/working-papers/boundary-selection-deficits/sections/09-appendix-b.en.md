# Appendix B — Simulation Specification

This appendix provides the detailed specification for the simulation described in Part IV. It defines the system dynamics, the coupling structure generation, the four boundary scenarios, the controller design, the Sykes-Picot cut mechanics, and the stability metric. The specification is sufficient to implement the simulation independently.

## B.1 System Dynamics

The simulated world consists of N = 12 subsystems. Each subsystem i has an internal state vector **x**_i(t) ∈ ℝ³, representing three governance-relevant dimensions (e.g., economic output, environmental quality, social stability). The continuous-time dynamics are discretized with time step Δt = 1 for simulation.

The discrete-time dynamics of subsystem i are:

**x**_i(t+1) = **A**_ii **x**_i(t) + **B**_i **u**_i(t) + Σ_{j≠i} **K**_ij **x**_j(t) + **w**_i(t)   (B.1)

where:

- **A**_ii = 0.95 · **I**₃: internal dynamics with slow decay (5% per time step), identical across subsystems.
- **B**_i = **I**₃: each controller can directly affect all three state dimensions of its assigned subsystems with unit effectiveness.
- **K**_ij ∈ ℝ³ˣ³: coupling matrix from subsystem j to subsystem i, generated from the stochastic block model (Section B.2).
- **w**_i(t) ~ 𝒩(**0**, **W**): exogenous Gaussian noise with covariance **W** = 0.01 · **I**₃.

The full state vector is **x**(t) = [**x**_1(t)^T, …, **x**_N(t)^T]^T ∈ ℝ³⁶. The target state is **x**_target = **0**.

## B.2 Coupling Structure: Stochastic Block Model

The coupling matrices **K**_ij are generated from a stochastic block model (SBM) with M = 4 blocks (clusters) of size s = 3 subsystems each. The SBM assigns each subsystem i to a block b(i) ∈ {1, …, 4}. The coupling strength from subsystem j to subsystem i is determined by the block memberships:

**K**_ij = γ · c_{b(i),b(j)} · **R**_ij   (B.2)

where:

- γ ≥ 0 is the global coupling strength parameter, swept from 0.01 to 0.50 in the simulation.
- c_{p,q} ∈ [0,1] is the block-level coupling density between blocks p and q.
- **R**_ij ∈ ℝ³ˣ³ is a random matrix with entries drawn from 𝒰(−1, 1), normalized so that ‖**R**_ij‖ = 1 (spectral norm). **R**_ij is fixed for each (i,j) pair across all simulation runs and parameter sweeps, ensuring that only the coupling strength γ varies.

The block-level coupling densities are:

- **Within-block coupling:** c_{p,p} = 1.0 for all p. Subsystems within the same block are densely coupled.
- **Between-block coupling:** c_{p,q} = c_{between} for p ≠ q, where c_{between} = 0.1. Cross-block coupling is weak but non-zero.

This structure creates four natural clusters of three subsystems each, with strong internal coupling and weak external coupling. These clusters represent the "natural boundaries" of the system: the spatial scale at which dynamics are predominantly internal.

The coupling is bidirectional but not necessarily symmetric: **K**_ij and **K**_ji are independent random matrices, scaled by the same block-level density. The diagonal blocks of the full coupling matrix **K** = [**K**_ij] are dense; the off-diagonal blocks are sparse and weak.

## B.3 Jurisdictional Boundary Scenarios

A boundary configuration is a partition 𝒫 = {𝒥₁, …, 𝒥_M} of the N subsystems into M jurisdictions. Each jurisdiction 𝒥_α is a set of subsystem indices assigned to controller α. The controller for jurisdiction α observes and actuates only the subsystems in 𝒥_α.

The four scenarios differ in how 𝒫 is constructed relative to the SBM block structure.

**Scenario (a) — Perfectly matched boundaries.** The partition 𝒫 coincides exactly with the SBM blocks: 𝒥_α = {i : b(i) = α} for α = 1, …, 4. Each controller governs exactly one natural cluster. Cross-boundary coupling is the weak between-block coupling only. B_struct is minimal.

**Scenario (b) — Westphalian default boundaries.** The 12 subsystems are randomly assigned to 4 jurisdictions of size 3, without regard to the SBM block structure. Specifically, a random permutation of {1, …, 12} is drawn; the first 3 indices form 𝒥₁, the next 3 form 𝒥₂, and so on. The partition is drawn once and held fixed across all parameter sweeps and Monte Carlo runs for comparability. Some jurisdictions will contain subsystems from different SBM blocks, introducing cross-boundary coupling that is stronger than the between-block baseline.

**Scenario (c) — Sykes-Picot boundaries.** The partition is constructed to deliberately maximize boundary mismatch by slicing through the highest-weight internal edges of the SBM blocks. The construction is specified in Section B.5.

**Scenario (d) — Adaptive boundary renegotiation.** The simulation begins with the Westphalian boundary configuration (Scenario b). Every T_reneg = 50 time steps, each controller computes an estimate of its boundary mismatch index B_est (see below) from the observed variance of its internal state. If B_est exceeds a threshold B_thresh = 0.3, the controller initiates boundary renegotiation. The renegotiation process takes τ_adj = 10 time steps. During these 10 steps, the controller continues to operate under the old boundary. At the end of τ_adj, the boundary is adjusted: the controller with the highest B_est merges with a randomly selected neighboring jurisdiction (one with which it shares high cross-boundary coupling), and the merged jurisdiction's subsystems are governed by a single controller. The simulation tracks the resulting boundary configuration over time and the stability outcomes.

The B_est for a controller is computed as the fraction of the variance of its jurisdiction's aggregated state that is attributable to cross-boundary inflows, estimated by comparing the actual state evolution to a counterfactual in which cross-boundary coupling terms are set to zero.

## B.4 Controller Specification

Each jurisdiction α is governed by a controller with perfect internal properties. The controller observes the state of its assigned subsystems with zero latency, zero noise, and full dimensionality:

**y**_α(t) = **x̂**_α(t) = [**x**_i(t)^T]_{i∈𝒥_α}^T   (B.3)

The controller applies proportional state feedback:

**u**_α(t) = −**K**_c · **x̂**_α(t)   (B.4)

where **K**_c is a block-diagonal gain matrix optimized for the nominal internal dynamics. Specifically, **K**_c is the solution to the discrete-time linear quadratic regulator (LQR) problem for the isolated nominal system **x̂**_α(t+1) = **Â**_α **x̂**_α(t) + **B̂**_α **u**_α(t), with state cost matrix **Q** = **I** and control cost matrix **R** = 0.1 · **I**. The resulting gain is:

**K**_c = (**R** + **B̂**_α^T **P** **B̂**_α)⁻¹ **B̂**_α^T **P** **Â**_α   (B.5)

where **P** is the solution to the discrete-time algebraic Riccati equation.

Because **Â**_α and **B̂**_α are identical for all jurisdictions (the internal dynamics are the same, and each jurisdiction controls a subset of subsystems with unit actuation), **K**_c is identical for all controllers. With **A**_ii = 0.95**I** and unit actuation, the LQR gain is approximately **K**_c = 0.75 · **I** per subsystem, providing stable internal regulation with a settling time of approximately 10–15 time steps.

The controllers do not communicate, coordinate, or share information. Each acts solely on its own observations.

## B.5 Sykes-Picot Cut Mechanics

Scenario (c) constructs jurisdictional boundaries that deliberately slice through the highest-weight internal edges of the SBM blocks. The procedure is:

1. **Compute edge weights.** For each pair of subsystems (i, j) within the same SBM block, compute the coupling weight w_ij = ‖**K**_ij‖ + ‖**K**_ji‖ (the sum of the spectral norms of the two directed coupling matrices). These are the internal edges of the natural clusters.

2. **Rank edges.** Within each of the 4 blocks, rank the 3 internal edges (a block of size 3 has 3 choose 2 = 3 undirected pairs) by w_ij in descending order.

3. **Identify cut targets.** For each block, select the highest-weight edge. This edge connects two subsystems that are the most strongly coupled pair in the block.

4. **Assign to different jurisdictions.** For each selected highest-weight edge (i, j), assign subsystem i to jurisdiction 𝒥_α and subsystem j to jurisdiction 𝒥_β, where α ≠ β. The third subsystem in the block is assigned to one of the two jurisdictions arbitrarily, ensuring that each jurisdiction ends up with exactly 3 subsystems overall.

5. **Balance jurisdictions.** The assignment is solved as a graph partitioning problem: we seek a partition of the 12 subsystems into 4 jurisdictions of size 3 that maximizes the total weight of edges *cut* by the partition (i.e., edges whose endpoints are in different jurisdictions). This is equivalent to the maximum-weight cut problem on the graph of within-block edges, with the constraint of equal jurisdiction sizes. For N = 12 and block size 3, an exact solution is feasible by enumeration over all balanced partitions.

The resulting partition splits each SBM block across at least two jurisdictions, and the highest-weight internal couplings are severed by jurisdictional boundaries. Each controller now treats a causally critical state variable — one of the most strongly coupled subsystem pairs in the system — as an external disturbance.

## B.6 Stability Metric

The primary stability metric for a simulation run is the time-averaged sum of squared deviations from the target state, negated so that higher values indicate better stability:

S = − (1/T) Σ_{t=T_burn}^{T} Σ_i ‖**x**_i(t)‖²   (B.6)

where T = 500 is the total simulation length and T_burn = 50 is a burn-in period excluded to remove transient effects from initial conditions.

A simulation run is classified as *unstable* if the state norm grows without bound — specifically, if max_t Σ_i ‖**x**_i(t)‖² exceeds a divergence threshold D_thresh = 10⁴. In practice, unstable runs produce exponentially diverging trajectories that exceed this threshold well before T = 500. The instability rate for a given parameter configuration is the fraction of Monte Carlo runs (out of 100) that are classified as unstable.

For stable runs, S provides a continuous measure of stability degradation: more negative S indicates larger persistent fluctuations around the target. S is reported as a distribution (median and 5th–95th percentile) across the 100 Monte Carlo seeds.

A secondary metric is the M-Δ loop gain, estimated from simulation data. For a given jurisdiction α, the empirical loop gain is estimated as:

‖**M**_α **Δ**_α‖ ≈ [Var(w_in,α) / Var(y_out,α)]^{1/2}   (B.7)

where w_in,α is the cross-boundary inflow term Σ_{j∉𝒥_α} **K**_ij **x**_j(t) and y_out,α is the outflow Σ_{j∈𝒥_α, k∉𝒥_α} **K**_kj **x**_j(t). The loop gain is computed at each time step and averaged over the run. The fraction of runs where the empirical loop gain exceeds unity is reported.

## B.7 Simulation Parameters and Implementation Notes

**Fixed parameters:**

| Parameter | Symbol | Value |
|---|---|---|
| Number of subsystems | N | 12 |
| Subsystem state dimension | k | 3 |
| Internal dynamics matrix | **A**_ii | 0.95 · **I**₃ |
| Actuation matrix | **B**_i | **I**₃ |
| Noise covariance | **W** | 0.01 · **I**₃ |
| LQR state cost | **Q** | **I** |
| LQR control cost | **R** | 0.1 · **I** |
| SBM blocks | M | 4 |
| SBM block size | s | 3 |
| Within-block coupling density | c_{p,p} | 1.0 |
| Between-block coupling density | c_{p,q} (p≠q) | 0.1 |
| Simulation length | T | 500 |
| Burn-in period | T_burn | 50 |
| Divergence threshold | D_thresh | 10⁴ |
| Monte Carlo seeds | — | 100 |
| Renegotiation interval (Scenario d) | T_reneg | 50 |
| Renegotiation threshold (Scenario d) | B_thresh | 0.3 |
| Renegotiation latency (Scenario d) | τ_adj | 10 |

**Swept parameter:**

| Parameter | Symbol | Range |
|---|---|---|
| Global coupling strength | γ | 0.01, 0.02, 0.05, 0.10, 0.15, 0.20, 0.30, 0.40, 0.50 |

**Random elements and reproducibility:** All random elements — the SBM block assignments, the coupling matrices **R**_ij, the noise sequences **w**_i(t), the Scenario (b) random partition, and the Monte Carlo seeds — are generated from fixed seeds. The seed values are specified in the simulation code repository. The repository commit hash is recorded in the paper.

**Initial conditions:** All subsystems are initialized at **x**_i(0) = **0** (the target state). Disturbances enter only through the noise **w**_i(t) and the cross-boundary coupling terms. This ensures that any deviation from the target is a consequence of the system dynamics and boundary architecture, not of initial transients.

**Implementation:** The simulation is implemented in Python using standard numerical libraries (NumPy, SciPy for the LQR solution). The code is open-source and deposited in the series' repository. The simulation script is a single file with parameters at the top, producing all figures and metrics reported in Part IV. Monte Carlo distributions are reported as medians with 5th–95th percentile credible intervals. Parameter sweeps are visualized as heatmaps.

**Outputs produced:**

1. Stability surface: S (z-axis) vs. B_mismatch (x-axis) vs. γ (y-axis), where B_mismatch is computed from the partition as the fraction of total coupling weight that crosses jurisdictional boundaries.
2. M-Δ loop gain vs. γ for each scenario, with the unity threshold marked.
3. Instability rate vs. γ for each scenario.
4. For Scenario (d), time-series of the boundary configuration and B_est over the simulation run.
5. For Scenario (d), the effective stability as a function of the ratio τ_adj / (rate of change of coupling).

## B.8 Simulation Outputs

All figures were generated by the open‑source simulation code (repository commit hash recorded in the paper) using the parameters specified in Sections B.1–B.6. Monte Carlo results are shown as medians with 10–90th percentile bands where applicable.

**Figure B.1 – Stability and M‑Δ loop gain vs. coupling strength (Scenarios a, b, c).**
![v14-stability-loopgain](/working-papers/images/boundary-selection-deficits/v14-stability-loopgain.png)
*Left panel:* Stability \(S\) (higher values indicate better stability) as a function of the global coupling strength \(\gamma\) for three boundary scenarios. Scenario (a)—perfectly matched boundaries—maintains high stability across the full range of \(\gamma\), confirming that the M‑Δ loop is negligible when jurisdictional perimeters coincide with the natural coupling clusters. Scenario (b)—Westphalian random boundaries—shows progressive stability degradation as \(\gamma\) increases, with the median stability crossing into negative territory at approximately \(\gamma = 0.20\). Scenario (c)—Sykes‑Picot boundaries—exhibits the earliest and most severe degradation, with stability collapsing at \(\gamma \approx 0.10\). The gap between the curves is the structural cost of boundary mismatch: the stability margin lost to drawing boundaries that do not match the underlying coupling structure. *Right panel:* Estimated M‑Δ loop gain \(\|\mathbf{M}\|\cdot\|\mathbf{\Delta}\|\) for the same scenarios. The red dashed line marks the unity‑gain threshold; when the loop gain exceeds unity, the controller's own interventions generate amplified returning disturbances. Scenario (a) remains safely below unity. Scenario (b) approaches unity at high coupling. Scenario (c) crosses unity at moderate coupling, confirming the mechanism underlying the stability degradation: the Sykes‑Picot boundaries actively create structured cross‑boundary feedback that the controller cannot observe.

**Figure B.2 – Adaptive boundary renegotiation vs. Westphalian baseline (Scenario d sweep).**
![v14-adaptive-sweep](/working-papers/images/boundary-selection-deficits/v14-adaptive-sweep.png)
Median stability \(S\) as a function of coupling strength \(\gamma\) for the Westphalian baseline (Scenario b, orange) and the adaptive renegotiation scenario (Scenario d, magenta). At low coupling strengths, the two architectures perform comparably. As \(\gamma\) increases, adaptive renegotiation substantially outperforms the static Westphalian boundaries: by merging jurisdictions that experience high estimated boundary mismatch \(B_{\text{est}}\), the adaptive architecture partially internalises the spillovers that degrade the static architecture's performance. However, the adaptive advantage is bounded. At the highest coupling strengths, even adaptive renegotiation cannot fully close the gap to the perfectly matched architecture (Scenario a, not shown), because the renegotiation process itself introduces latency \(\tau_{\text{adj}}\) during which the old boundaries remain in effect. This is the boundary‑adjustment control problem: the system must renegotiate faster than coupling structures change, and when the rate of environmental change exceeds the renegotiation bandwidth, even an adaptive architecture falls behind.

**Figure B.3 – Adaptive renegotiation trajectory (Scenario d, single run, \(\gamma = 0.20\)).**
![v14-adaptive-trajectory](/working-papers/images/boundary-selection-deficits/v14-adaptive-trajectory.png)
*Top panel:* Mean estimated boundary mismatch \(\bar{B}_{\text{est}}\) across all jurisdictions over time. The red dashed line marks the renegotiation threshold \(B_{\text{thresh}} = 0.3\). When \(\bar{B}_{\text{est}}\) exceeds this threshold, the jurisdictions with the highest mismatch initiate merger negotiations. The sawtooth pattern reflects the cyclical nature of the process: boundary mismatch accumulates as the environment changes; renegotiation is triggered; mismatch is partially resolved through jurisdictional merger; the cycle resumes. *Bottom panel:* Number of jurisdictions over time. The initial Westphalian configuration of \(M=4\) jurisdictions progressively consolidates as high‑mismatch jurisdictions merge. The trajectory illustrates the boundary‑renegotiation control loop: the governance architecture adjusts its own perimeter in response to observed spillover costs, with the adjustment latency \(\tau_{\text{adj}}\) determining whether consolidation outpaces or lags behind the changing coupling structure.

