### Appendix A — Simulation Specification

This appendix specifies the simulation referenced in Part IV.5. It defines the model, the single swept parameter, the legitimacy dynamics, and the outputs. The specification is sufficient to reimplement the simulation independently; the implementation is a single file, `self_iii_operator.py`, deposited in the series repository with the commit hash recorded in the published version. Figures are written to `outputs/` and are not reproduced here.

#### A.1 Provenance

The simulation introduces no new dynamics. The plant, the Kalman filter, the legitimacy-weighted control loop, and the legitimacy update law are reused verbatim from Paper XIII, Appendix B, in its built-legitimacy parameter regime. The operator enters through exactly two additions, both specified below: a persistent interior disturbance, and an attenuating operator node on the interior measurement. This restriction is deliberate and follows the discipline of Part V — the simulation exhibits a consequence of existing results rather than a freshly modelled effect, and any dynamic it displays must be derivable from machinery the series has already validated.

#### A.2 Model

The governance system controls a two-dimensional state **x**(t) = [x₁(t), x₂(t)]ᵀ, with x₁ an externally instrumented dimension and x₂ the interior dimension that reaches the institution only through the operator node. The true dynamics are those of Paper XIII, with one added term:

**x**(t+1) = **A x**(t) + L(t) **B u**(t) + **w**(t) + **e**₂ d_int,  **w**(t) ~ 𝒩(**0**, **W**),

where **A** = 0.95 **I**₂, **B** = **I**₂, **W** = 0.01 **I**₂, **e**₂ = [0, 1]ᵀ, and d_int = 0.10 is a constant interior disturbance entering the interior dimension only. The term d_int represents the standing generative pressure of Part IV — grievance, injured standing, the interior conditions that do not decay of their own accord and must be actively perceived to be countered. It is the one element of the model motivated by the operator argument rather than inherited from Paper XIII.

Observation carries the operator node. The true measurement is

**y**(t) = **C**_node **x**(t) + **v**(t),  **C**_node = diag(1, φ),  **v**(t) ~ 𝒩(**0**, **V**₀ / L(t)),

with **V**₀ = 0.05 **I**₂ as in Paper XIII. The scalar φ ∈ [0, 1] is the operator's interior fidelity: φ = 1 transmits the interior dimension intact (up to noise), φ → 0 drives it into the null space of the measurement. The institution's estimator, however, runs on the nominal **C** = **I**₂ — it takes the node's muted reading at face value, unaware that the interior dimension has been attenuated. This mismatch between the node's transmission (φ·x₂) and the institution's belief (x₂) is the simulation's realisation of inherited unobservability: the chain cannot perceive what the node does not transmit, and cannot know it is not perceiving it.

The controller applies **u**(t) = −**K x̂**(t), with **K** the infinite-horizon LQR gain for the nominal design system (**A**, **B**, **Q**, **R**), **Q** = **I**₂, **R** = 0.1 **I**₂. Solving the discrete algebraic Riccati equation yields **K** ≈ 0.870 **I**₂ for these costs. The state estimate **x̂**(t) is produced by the standard Kalman recursion of Paper XIII, Appendix A.2, with the legitimacy-scaled noise covariance **V**(t) = **V**₀ / L(t) and the effective actuation **B**_eff(t) = L(t) **B**; the controller is given its own current legitimacy, as in Paper XIII.

#### A.3 Legitimacy dynamics

The composite legitimacy L(t) = L_B(t) = L_C(t) evolves by the Paper XIII update (Appendix A.1):

L(t+1) = clip( L(t) − α(t) ‖**x**_rep(t)‖² + β T(t) − γ D(t) + δ, 0, 1 ),

with the built-legitimacy parameters α_drop = 0.12, α_recovery = 0.03 (4:1 hysteresis on whether the delivery gap is worsening or improving), β = 0.08, γ = 0.5, δ = 0.005, and L(0) = 0.90. Transparency is held at full throughout, T(t) = 1 and the suppression parameter λ = 1, so the reported state equals the true state, **x**_rep(t) = **x**(t), and no deception accumulates, D(t) = 0 for all t. Holding the transparency and betrayal mechanisms inert isolates the effect under study: the only quantity that varies across the experiment is the operator fidelity φ, and any movement in L is therefore attributable to φ alone, not to any architectural or transparency choice.

#### A.4 Sweep and outputs

The horizon is T = 300 steps with a 20-step burn-in; the steady-state legitimacy metric is the mean of L over the final 100 steps. φ is swept across 31 points on [0, 1]; each point is run over 100 Monte Carlo seeds, and results are reported as medians with 5th–95th percentile bands. All random elements are generated from fixed seeds recorded in the implementation.

The simulation produces three figures, deposited in the repository:

- `self3-phi-sweep.png` — steady-state legitimacy against operator fidelity φ, median and 5th–95th percentile band. This is the central output: the high-legitimacy equilibrium is solidly stable for φ above roughly 0.6, the low-legitimacy attractor is solidly reached for φ below roughly 0.25, and the median crosses the midpoint at φ\* ≈ 0.33. The percentile band widens sharply across the transition — this is the basin separatrix, the φ-driven analogue of the L_crit that Paper XIII identifies numerically as the boundary between basins of attraction.
- `self3-legitimacy-trajectories.png` — legitimacy over time for a fidelity above the threshold (φ = 1.0) and one below it (φ = 0.15), illustrating the onset and persistence of the operator-seeded spiral.
- `self3-interior-and-gap.png` — the interior state x₂(t) and the delivery gap ‖**x**_rep(t)‖² for the same two fidelities, exhibiting the mechanism: the under-perceived interior dimension drifts uncontrolled, the standing delivery gap grows, and the gap feeds the legitimacy decline.

#### A.5 Scope

The threshold φ\* ≈ 0.33 is not a constant. Its location depends on the interior-disturbance magnitude d_int, on the control authority **K**, and on the legitimacy parameters; d_int = 0.10 was chosen so that the separatrix falls in the interior of the fidelity range, where it is legible, rather than at an extreme. What the simulation establishes is not the value of the threshold but its existence and its cause: that a primitive-complete, legitimacy-safe architecture possesses a fidelity threshold below which it enters the low-legitimacy attractor, and that the parameter carrying it across is the operator's interior fidelity and no architectural quantity. This is a structural claim, and the simulation is its illustration, not its measurement.

The simulation realises operator fidelity as pure attenuation of the interior measurement. It therefore demonstrates the rigorous coverage-loss core of inherited unobservability — φ → 0 removing the interior dimension from what the chain can perceive — and not the interpretive substitution mechanism of Part III, in which an operator reports a confidently wrong interior dimension in place of the true one. Attenuation follows from the channel algebra the series has already established; biased substitution would be a further modelling choice asserting more than the apparatus derives, and it is named in Part III and deliberately left unsimulated. The simulation is evidence for the [R] mechanism, not the [I] one.

---

