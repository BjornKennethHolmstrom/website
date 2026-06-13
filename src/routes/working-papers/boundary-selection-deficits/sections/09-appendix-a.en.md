# Appendix A — M-Δ Derivation and Boundary Mismatch Decomposition

This appendix provides the formal derivations underlying the M-Δ configuration of Part II. It develops the multi-jurisdiction boundary model, states the small-gain stability condition, derives the boundary mismatch index B, and decomposes B into stochastic exogenous noise and structured cross-boundary feedback components.

## A.1 Multi-Jurisdiction Model

Consider a system of N coupled subsystems. Each subsystem i ∈ {1, …, N} has an internal state vector **x**_i(t) ∈ ℝ^{k_i}. The true dynamics of subsystem i are:

**ẋ**_i(t) = **A**_ii **x**_i(t) + **B**_i **u**_i(t) + Σ_{j≠i} **A**_ij **x**_j(t) + **w**_i(t)   (A.1)

where **A**_ii ∈ ℝ^{k_i × k_i} captures internal dynamics, **B**_i ∈ ℝ^{k_i × m_i} is the actuation matrix, **u**_i(t) ∈ ℝ^{m_i} is the control input, **A**_ij ∈ ℝ^{k_i × k_j} captures the coupling from subsystem j to subsystem i, and **w**_i(t) is genuinely exogenous noise with covariance **W**_i.

The full state vector of the real plant is **x**(t) = [**x**_1(t)^T, …, **x**_N(t)^T]^T ∈ ℝ^K where K = Σ_i k_i. The full dynamics are:

**ẋ**(t) = **A** **x**(t) + **B** **u**(t) + **w**(t)   (A.2)

with **A** = [**A**_ij]_{i,j=1}^N, **B** = diag(**B**_1, …, **B**_N), **u**(t) = [**u**_1(t)^T, …, **u**_N(t)^T]^T, and **w**(t) similarly stacked.

Now suppose the N subsystems are partitioned into M jurisdictions, where each jurisdiction α governs a subset 𝒥_α ⊂ {1, …, N}. The jurisdictional partition defines a projection **P**_α : ℝ^K → ℝ^{K_α} that extracts the states of the subsystems assigned to jurisdiction α. The controller for jurisdiction α observes **P**_α **x**(t) and applies control **u**_α(t) that affects only its assigned subsystems.

The controller's *modeled plant* is the subsystem:

**ẋ̂**_α(t) = **Â**_α **x̂**_α(t) + **B̂**_α **u**_α(t)   (A.3)

where **x̂**_α = **P**_α **x**, **Â**_α = **P**_α **A** **P**_α^T (the internal dynamics of the subsystems in jurisdiction α, ignoring cross-boundary couplings), and **B̂**_α = **P**_α **B** **P**_α^T (the actuation available to jurisdiction α).

The difference between the true dynamics (A.1) and the modeled dynamics (A.3) is the unmodeled dynamics for jurisdiction α:

**Δ**_α(**x**, **u**, t) = **P**_α **A** **x**(t) + **P**_α **B** **u**(t) + **P**_α **w**(t) − **Â**_α **x̂**_α(t) − **B̂**_α **u**_α(t)   (A.4)

This **Δ**_α includes two distinct components: the cross-boundary coupling terms **P**_α **A** (**I** − **P**_α^T **P**_α) **x**(t) that the controller's model excludes, and the spillover effects of control actions taken in other jurisdictions that affect subsystem i through the coupling matrices **A**_ij.

## A.2 M-Δ Configuration

For a given jurisdiction, we can represent the interconnection between the nominal model and the unmodeled dynamics in the standard M-Δ form of robust control theory.

The nominal system **M**_α consists of the jurisdiction's internal dynamics together with its controller. Let the controller for jurisdiction α apply linear feedback **u**_α(t) = −**K**_α **x̂**_α(t), where **K**_α is a gain matrix designed to stabilize the nominal internal dynamics **Â**_α. The closed-loop nominal system is:

**M**_α : **ẋ̂**_α(t) = (**Â**_α − **B̂**_α **K**_α) **x̂**_α(t)   (A.5)

This nominal system receives inputs from two sources: the exogenous noise **P**_α **w**(t) and the structured cross-boundary inflow **w_in,α**(t) = Σ_{j∉𝒥_α} **A**_ij **x**_j(t) + spillover effects of **u**_j for j ≠ α. It produces two outputs: the regulated state **x̂**_α itself, and the outflow **y_out,α**(t) = Σ_{j∈𝒥_α, k∉𝒥_α} **A**_kj **x**_j(t) — the spillovers that subsystem α's states generate for subsystems outside its jurisdiction.

The unmodeled dynamics block **Δ**_α captures the external world's processing of these outflows. It receives **y_out,α** and, together with the dynamics of all other jurisdictions and their controllers, produces the inflow **w_in,α**. Formally, **Δ**_α is the composition of all other jurisdictions' dynamics, their controllers, and the coupling matrices that transmit states between jurisdictions. The loop closes:

**Jurisdiction α (M_α) → y_out,α → External World (Δ_α) → w_in,α → Jurisdiction α (M_α)**

The Small-Gain Theorem provides a sufficient condition for stability of this interconnection when both **M**_α and **Δ**_α are stable linear systems. Let ‖**M**_α‖ denote the H_∞ norm of the transfer function from w_in,α to y_out,α — the maximum amplification of an input signal by the nominal closed-loop jurisdiction. Let ‖**Δ**_α‖ denote the corresponding norm for the external world's transfer function from y_out,α back to w_in,α. The small-gain condition for stability is:

‖**M**_α‖ · ‖**Δ**_α‖ `<` 1   (A.6)

If this condition is violated, the interconnection can become unstable even though both **M**_α and **Δ**_α are individually stable. Oscillations or divergence can arise purely from the interaction across the boundary.

The governance interpretation is that ‖**M**_α‖ measures how strongly events within the jurisdiction spill over to the external world — the jurisdiction's "spillover sensitivity." ‖**Δ**_α‖ measures how strongly those spillovers, once processed by the external world, return as disturbances — the external world's "feedback gain." When their product exceeds unity, the controller's own stabilization efforts, transmitted through the boundary loop, generate amplified returning disturbances. The controller's internal dashboard shows only the returning disturbances, not their origin in the loop; the controller treats them as exogenous noise and responds with further interventions that further amplify them.

## A.3 Boundary Mismatch Index B

For a given jurisdiction α, define the total disturbance experienced by the controller as the variance of the deviation of the jurisdiction's state from its target, attributable to factors outside the controller's internal model:

Var(total_disturbance) = Var(**P**_α **A** **x** + **P**_α **B** **u** + **P**_α **w** − **Â**_α **x̂**_α − **B̂**_α **u**_α)   (A.7)

This is the variance of **Δ**_α from equation (A.4). It can be decomposed into two components based on their correlation with the controller's own actions.

The *stochastic exogenous noise* component is the portion of disturbance variance that is uncorrelated with the controller's past control inputs:

**B_noise = Var(**P**_α **w**) + Var(cross-boundary noise from other jurisdictions that is uncorrelated with **u**_α)   (A.8)

This includes genuine environmental randomness and spillovers from other jurisdictions' actions that are not systematically related to jurisdiction α's own behavior. It can be managed through buffers, insurance pools, and reserve capacity.

The *structured cross-boundary feedback* component is the portion of disturbance variance that is correlated with the controller's own past actions, processed through the external M-Δ loop:

**B_struct = Var(Σ_{τ`>`0} **H**(τ) **u**_α(t−τ))   (A.9)

where **H**(τ) captures the impulse response of the external world to jurisdiction α's control actions — the chain of causation from **u**_α to y_out,α through the coupling network, into **Δ**_α, and back as w_in,α after τ time steps.

The boundary mismatch index is then:

**B = (B_noise + B_struct) / Var(total_disturbance)**   (A.10)

B ∈ [0,1]. When B is small, internal dynamics dominate; cross-boundary couplings are negligible. When B is large, the jurisdiction's outcomes are substantially determined by dynamics originating outside its boundary. When B_struct specifically is large, the M-Δ loop is active, and the controller's own interventions are generating substantial structured feedback.

The small-gain condition (A.6) can be related to B_struct. As ‖**M**_α‖ · ‖**Δ**_α‖ → 1 from below, B_struct grows nonlinearly, because the returning feedback becomes amplified near the stability boundary. A system with high B_struct that is not yet unstable may still exhibit the spillover oscillation signature: persistent, phase-delayed responses to its own actions that degrade performance even if the loop gain remains formally below unity.

## A.4 Estimation Notes

The decomposition of B into B_noise and B_struct is conceptually clean but empirically demanding. Structured cross-boundary feedback is precisely the component that a controller's own monitoring architecture is designed not to observe — the controller treats w_in,α as exogenous by construction. Estimating B_struct requires either an independent observation channel that spans the M-Δ loop (the spillover observability requirement of Part VI.3), or retrospective analysis of governance outcomes that identifies the component of disturbance variance that is predictable from the controller's own past actions.

One practical approach is to estimate the total external variance from cross-border flow data (trade, capital flows, migration, emissions, information) and then use instrumental variable techniques to isolate the component that is orthogonal to the controller's actions (B_noise) from the component that is not (B_struct). This requires data that is often fragmentary, and the resulting estimates will have wide confidence intervals. Paper VIII's measurement framework, which explicitly propagates uncertainty and treats estimates as lower bounds for systems with active Measurement Paradox, is the appropriate vehicle for this estimation.

## A.5 Linearization Caveat

The derivations in this appendix assume linear time-invariant dynamics. Real governance systems are nonlinear, and the coupling matrices **A**_ij may themselves depend on the system state (e.g., financial contagion that activates only under stress, migration flows that respond to economic differentials, diplomatic pressure that intensifies nonlinearly with the severity of the boundary dispute). The small-gain condition (A.6) is sufficient for stability in the linear case but may be conservative or inapplicable when nonlinearities are present.

The qualitative mechanism — that boundary mismatch generates instability through structured feedback loops — does not depend on linearity. It depends only on the existence of cross-boundary causal pathways that return the controller's actions as disturbances. The linear framework makes this mechanism analytically tractable and provides a vocabulary for diagnosing it. The nonlinear extension, while desirable, would not alter the structural diagnosis, only the precision with which the stability boundary can be specified.
