# 6. Simulation Architecture

The formal claims of Parts II through V are theoretical. They describe mechanisms — the bypass trap, the transition variety ratio, the transition-bandwidth trap — that should, if the theory is sound, produce characteristic dynamical signatures under specified conditions. Computational simulation provides a disciplined way to test whether those signatures actually emerge from the posited mechanisms, and to map the boundaries of the parameter regimes in which they hold. The simulations are not proofs, and they are not empirical validations. They are *existence demonstrations*: they show that a given structural logic, when implemented as a minimal dynamical system, generates the predicted behaviour. If the behaviour does not emerge, the logic requires revision. If it does, the logic earns the right to be tested against empirical data.

The series has established a simulation methodology: minimal models with transparent parameters, comparison of two or more architectures under identical disturbance conditions, and output visualised through heatmaps, phase portraits, and summary metrics. This paper extends that methodology in one important respect. Following the recommendation to strengthen the series' epistemic tiering, all three simulations below are run with Monte Carlo replication (50–100 seeds, distributions reported rather than single-run anecdotes) and include at least one parameter-sweep heatmap demonstrating that the qualitative result is robust across a region of parameter space, not an artefact of a single parameterisation. The code is open, documented, and designed for replication.

## 6.1 Simulation A: Bypass-Trap Dynamics

This simulation operationalises the bypass trap modelled in Section 3.1 and the sunset-coupled escape mechanism of Section 4.2. The system consists of two state variables evolving in discrete time over *T* = 200 steps.

**State variables.**
- *D*(*t*) ∈ [0, 1]: dysfunction of the unreformed substrate, where 0 is full functionality and 1 is complete failure.
- *B*(*t*) ∈ [0, *B*_max(*D*)]: capacity of the bypass to deliver outcomes. The ceiling *B*_max(*D*) = 1 − *c*_cap · *D*, where *c*_cap ∈ [0, 1] captures how severely substrate dysfunction constrains bypass effectiveness. When *c*_cap is high, the bypass cannot fully compensate for a dysfunctional substrate.

**Dynamics.**
The substrate dysfunction evolves according to:

*D*(*t*+1) = *D*(*t*) + α · *D*(*t*) · (1 − *D*(*t*)) − β · *R*(*t*) + ε_D

where α captures the natural tendency of dysfunction to deepen when unchecked (logistic growth toward 1), *R*(*t*) is the reform pressure applied to the substrate, and ε_D is a small noise term. Reform pressure is proportional to *visible* dysfunction:

*R*(*t*) = *K*_R · *D*_vis(*t*)

*D*_vis(*t*) = *D*(*t*) · (1 − *c*_vis · *B*(*t*))

The visibility coefficient *c*_vis determines how much the bypass masks the underlying dysfunction: as *B* increases, the visible signal of dysfunction declines even if *D* remains high.

The bypass capacity evolves according to:

*B*(*t*+1) = *B*(*t*) + γ · *R*_B(*t*) · (1 − *B*(*t*)/*B*_max(*D*(*t*))) − δ · *B*(*t*) + ε_B

where *R*_B(*t*) is investment in bypass expansion, γ is its effectiveness, and δ is a decay rate representing the entropy that affects any institutional mechanism. The ceiling *B*_max couples the bypass to the substrate: a severely dysfunctional substrate caps what the bypass can achieve.

**Scenarios.**
Three scenarios are compared, each with identical initial conditions (*D*(0) = 0.4, *B*(0) = 0.1) and identical parameter draws across seeds.

1. **No bypass.** *B* is permanently zero; all reform pressure targets the substrate directly.
2. **Permanent bypass.** *R*_B(*t*) is positive and constant; the bypass expands but is never coupled back to substrate reform.
3. **Sunset-coupled bypass.** *R*_B(*t*) is positive, but when *B*(*t*) exceeds a threshold *B*_sunset, the coupling parameter *c*_vis is increased — the bypass's success is deliberately made to *increase* the visibility of remaining dysfunction, transferring pressure back to the substrate. This is the structural mechanism of Section 4.2.

**Expected outputs.**
- *Time-series panels*: *D*(*t*), *B*(*t*), and *D*_vis(*t*) for each scenario, with distributions from the Monte Carlo ensemble.
- *Phase portrait*: (*D*, *B*) trajectory, showing the stable attractor under the permanent bypass and the escape trajectory under the sunset coupling.
- *Parameter-sweep heatmap*: final *D* at *t* = 200 as a function of *c*_vis and *c*_cap, demonstrating the region in which the trap is stable and the region in which the sunset coupling breaks it.

The critical prediction is that the permanent bypass stabilises a low-performance attractor (*D* high, *B* moderate, *D*_vis low), while the sunset-coupled bypass escapes that attractor by making success itself the trigger for renewed pressure on the unreformed substrate.

## 6.2 Simulation B: Reform-Incumbent Latency Asymmetry

This simulation operationalises the contested control model of Part II. Two controllers — a reform coalition **R** and an incumbent coalition **I** — act on the same architectural state vector, with asymmetric latencies and observation dimensionalities. The purpose is to map the phase diagram of transition outcomes and to determine whether the heuristic condition Ω ≥ 1 (the transition variety ratio) functions as a threshold.

**State space.**
The architecture is represented by a state vector **X**(*t*) ∈ ℝ⁴, whose four components correspond to latent structural dimensions: aggregation ratio, representation chain depth, value-function dimensionality, and feedback protection. The target architecture **X*** is a vector with lower aggregation, shorter chains, higher dimensionality, and stronger feedback protection. The incumbent's preferred state is **X**_I = **X**(0), the initial architecture.

**Dynamics.**
The state evolves as:

**X**(*t*+1) = **A** · **X**(*t*) + **B**_R · **u**_R(*t* − τ_R) + **B**_I · **u**_I(*t* − τ_I) + **d**(*t*)

where **A** is an inertial matrix (diagonal with values near 1), **B**_R and **B**_I are identity matrices scaled by actuation efficiency, and **d**(*t*) is a small exogenous shock. The control signals are proportional feedback:

**u**_R(*t*) = **K**_R · (**X*** − **Ŷ**_R(*t*))
**u**_I(*t*) = **K**_I · (**X**_I − **Ŷ**_I(*t*))

where **Ŷ**_R and **Ŷ**_I are the noisy observations available to each controller:

**Ŷ**_R(*t*) = **C**_R · **X**(*t*) + **ε**_R,   **Ŷ**_I(*t*) = **C**_I · **X**(*t*) + **ε**_I

**Observation matrices.** The rank of **C**_R defines the reform coalition's effective observational variety dim(**R**); the rank of **C**_I defines the incumbent's dim(**I**). The simulation sweeps over rank(**C**_R) ∈ {1, 2, 3, 4} and rank(**C**_I) ∈ {1, 2, 3, 4}, producing a 4×4 grid of Ω = dim(**R**)/dim(**I**) values.

**Latency sweep.** Independently, the ratio τ_R/τ_I is swept from 1 (symmetric) to 10 (extreme asymmetry), holding τ_I = 1 fixed.

**Gain constraint.** Reform gain **K**_R is bounded above by the latency-imposed ceiling **K**_max ≈ 1/(τ_R · |**A**|), where |**A**| is the spectral norm of **A**. When **K**_R exceeds this ceiling, oscillation is predicted.

**Outcome classification.** For each parameter combination, the simulation classifies the outcome after *T* = 150 steps:
- *Reform success*: **X**(*T*) is within the goal set **G** (Euclidean distance to **X*** below a threshold).
- *Reform absorption*: **X**(*T*) is closer to **X**_I than to **X***, and the reform signal has been neutralised.
- *Oscillation/backlash*: **X**(*t*) exhibits persistent large-amplitude cycles, indicating gain-ceiling violation.

**Expected outputs.**
- *Phase diagram*: outcome class as a function of Ω and τ_R/τ_I, visualised as a colour-coded heatmap across the 4×4 × N_latency grid.
- *Representative trajectories*: **X**(*t*) projections for three illustrative parameter combinations (success, absorption, oscillation).
- *Gain-ceiling confirmation*: overlay of oscillation outcomes on the **K**_R vs. 1/(τ_R · |**A**|) plane, testing whether the predicted ceiling aligns with observed instability.

The critical purpose of this simulation is to discipline the formal claims of Section 2.2. If a clean threshold at Ω = 1 emerges — that is, if outcomes are predominantly *success* or *oscillation* when Ω ≥ 1 and *absorption* when Ω `<` 1, across a range of latency ratios — the heuristic inequality earns its place in the paper. If the boundary is mushy, with success and absorption interleaved in the Ω ≥ 1 region, the paper must soften its formal language and present Ω as a diagnostic indicator rather than a threshold condition. The simulation is run *before* the final version of Section 2.2 is written, not after.

## 6.3 Simulation C: Transition-Bandwidth Race

This simulation operationalises the dynamic model of Section 5.3, including the critical coupling between variety gap and effective transition bandwidth that produces the two-threshold trap.

**State variables.**
- *G*(*t*): the variety gap (dimensionless, ≥ 0).
- *C*(*t*): the fraction of institutional capacity devoted to crisis management, ∈ [0, 1].
- β_nominal: the system's maximum transition bandwidth when no crisis management is required.

**Dynamics.**
The gap evolves according to equation (1) from Section 5.3:

*G*(*t*+1) = *G*(*t*) + α(*t*) − β_effective(*t*) + ε_G

where α(*t*) is the demanded rate of architectural change. In the baseline scenario, α is constant; in the accelerated scenario, α increases linearly after a threshold time, representing the AI-driven acceleration of Section 5.4.

The effective transition bandwidth is given by equation (2):

β_effective(*t*) = β_nominal · *f*(*G*(*t*))

where *f*(*G*) = max(0, 1 − *c*_coupling · *G*). As the gap widens, a larger fraction of institutional capacity is diverted to crisis management, reducing β_effective. The parameter *c*_coupling controls the severity of this feedback.

Crisis management fraction evolves as:

*C*(*t*) = min(1, *G*(*t*) / *G*_crit)

where *G*_crit is the constitutional unobservability threshold from Papers III and VI. When *G* ≥ *G*_crit, all capacity is consumed by crisis management, and β_effective falls to zero.

**Critical thresholds.**
- **Transition-bandwidth trap threshold** *G*_trap: the value of *G* at which β_effective falls below α (the demanded adaptation rate). Once *G* exceeds *G*_trap, the gap grows autonomously because the system can no longer adapt fast enough to close it. This threshold is reached *before* *G*_crit whenever α `>` 0 and *c*_coupling `>` 0.
- **Dissolution threshold** *G*_crit: the value at which the system's observation channels become constitutionally uninformative. This is the point of no perceptual return; before it, the system can still see that it is failing; after it, the failure itself becomes invisible.

The two-threshold structure — *G*_trap `<` *G*_crit — is the simulation's central prediction. A system crosses *G*_trap first, losing the capacity for peaceful self-redesign while still appearing operationally functional. *G*_crit follows later, and dissolution is by then inevitable.

**Parameterisations.**
Three system profiles are compared, each with identical α trajectories and identical initial *G*(0) = 0.2, but different values of β_nominal and *c*_coupling:

1. **High-bandwidth federation.** β_nominal = 0.08, *c*_coupling = 0.3 (low coupling: the system's deliberative infrastructure buffers crisis consumption of reform capacity).
2. **Locked regime.** β_nominal = 0.02, *c*_coupling = 0.9 (high coupling: crises overwhelm the narrow decision apparatus, rapidly consuming reform capacity).
3. **Bypass-heavy system.** β_nominal = 0.05, *c*_coupling = 0.5, but with the additional feature that *G* is initially *underestimated* by 40% — the bypass masks the true gap, a direct implementation of the legibility problem.

**Expected outputs.**
- *Time-series panels*: *G*(*t*), β_effective(*t*), and *C*(*t*) for each profile, with vertical lines marking *G*_trap and *G*_crit.
- *Phase diagram*: trajectory in the (*G*, β_effective) plane, showing the two-threshold structure and the irreversible crossing of *G*_trap.
- *Parameter-sweep heatmap*: time to dissolution (first crossing of *G*_crit) as a function of β_nominal and *c*_coupling, demonstrating the region of parameter space in which the two-threshold trap exists and the region in which the system can avoid it.
- *Acceleration scenario*: a second run in which α increases linearly from 0.03 to 0.10 over the last 50 time steps, simulating an AI-driven acceleration. The comparison shows which profiles survive the acceleration and which are pushed into the trap.

The critical finding, if it emerges, is the *transition-bandwidth trap*: a system that still functions operationally — *G* below *G*_crit, services delivered — but has already lost the capacity to redesign itself. The gap is growing, and the system cannot stop it. This is the dynamic condition that Sections 5.3 and 5.4 describe qualitatively; the simulation makes it quantitative and visually explicit.

## 6.4 Methodological Commitments

All simulations share a set of commitments that reflect the series' epistemic stance. The code is open-source, written in Python using standard scientific libraries (NumPy, SciPy, Matplotlib), and available in a companion repository. The manuscript references the repository and the specific commit hash used to generate the published figures. Parameters are declared in a single configuration file, and the simulation includes a reproducibility script that regenerates all figures from scratch.

Each simulation uses Monte Carlo replication: 100 independent seeds for Simulations A and C, and 50 seeds per grid cell for Simulation B (given the larger parameter sweep, to keep computation tractable). Results are reported as distributions (median, interquartile range) rather than single-run trajectories. Each simulation includes at least one parameter-sweep heatmap that demonstrates the robustness of the qualitative result across a plausible range of parameter values.

The simulations are not calibrated to empirical data. They are theoretical instruments whose parameters are illustrative rather than estimated. The paper does not claim that the specific numerical thresholds — the precise value of *G*_trap, the exact latency ratio at which oscillation occurs — transfer to any real governance system. The claim is that the *qualitative patterns* — the stable attractor under a permanent bypass, the phase transition around Ω = 1, the two-threshold trap — are structural consequences of the modelled mechanisms and should be observable in any system that instantiates those mechanisms with sufficient fidelity. Whether real governance systems do instantiate them, and with what parameter values, is the empirical question the measurement framework of Paper VIII is designed to address.

---

Part VII concludes the paper by summarising its limitations, acknowledging the boundary conditions of the analysis, and identifying the open questions that define the research frontier. The transition from qualitative diagnosis to formal model is now substantially complete; the remainder of the paper specifies what the model cannot yet do, and what work remains for those who would test, refine, or replace it.
