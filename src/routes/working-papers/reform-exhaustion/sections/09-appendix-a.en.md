# Appendix A — Derivations

## A.0 Notation and Standing Assumptions

Plant: x_{t+1} = A x_t + B u_t, x ∈ ℝ^N, u ∈ ℝ^m, with A Schur-stable (spectral radius ρ(A) < 1). For the derivations we take B = I and N = m; the general case replaces Π by BΠ throughout without changing the structure of any result. Delegation chain: layers i = 1, …, n; layer i applies the linear translation P_i ∈ ℝ^{m×m} with singular values σ_{i1} ≥ … ≥ σ_{im}, all ≤ 1 (the contraction assumption); composite Π_n = P_n ⋯ P_1; cumulative delay T = Σ τ_i (delays enter the latency results of §3.1 via Paper I's apparatus and are suppressed here); layer noise w_i zero-mean, covariance σ_w² I, independent across layers (Limitation 4 of §8.1 notes the cost of independence).

## A.1 Minimum-Energy Control

Reachability over horizon H from x_0 = 0:

  x_H = Σ_{k=0}^{H−1} A^k Π u_{H−1−k} = L 𝐮,

where L = [A^{H−1}Π, …, AΠ, Π] and 𝐮 stacks the inputs. Energy E(𝐮) = Σ_t ‖u_t‖² = ‖𝐮‖².

Minimise ‖𝐮‖² subject to L𝐮 = x_f. The least-norm solution lies in range(Lᵀ): set 𝐮 = Lᵀλ. Then x_f = LLᵀλ = W_H λ with

  **W_H = Σ_{k=0}^{H−1} A^k Π Πᵀ (Aᵀ)^k**  (the reachability Gramian),

so λ = W_H^{−1} x_f on range(W_H), and

  **E_min(x_f) = 𝐮ᵀ𝐮 = λᵀ L Lᵀ λ = x_fᵀ W_H^{−1} x_f.**

If x_f ∉ range(W_H), no input reaches it: E_min = ∞. For ρ(A) < 1 and H → ∞, W_H ↑ W solving the discrete Lyapunov equation W = AWAᵀ + ΠΠᵀ.

**Remark A.1.1 (sustained outcomes).** A policy outcome is more naturally a *held* state than a visited one. Holding x_f against stable dynamics requires steady input u_ss with x_f = Ax_f + Πu_ss, i.e. u_ss = Π^†(I − A)x_f (when solvable), with per-period power

  ‖u_ss‖² = ‖Π^†(I − A)x_f‖² ≥ ‖(I − A)x_f‖² / σ_max(Π)², and along a direction transmitted at composite gain g: ‖u_ss‖² = ‖(I − A)x_f‖²/g².

The sustained-power version of the energy law therefore scales as g^{−2} exactly as the transient version does. The governance reading of §2.3 does not depend on the transient formulation. 

## A.2 The Energy Law: E_min versus Depth

**A.2.1 Aligned chain (exact).** Suppose the layers share singular directions: P_i = U S_i Uᵀ in a common orthonormal basis U. Then Π_n = U(ΠS_i)Uᵀ and the composite singular values multiply exactly: g_j = Π_i σ_{ij}. With A = aI:

  W = Σ_k a^{2k} Π Πᵀ = (1 − a²)^{−1} ΠΠᵀ,  E_min along direction j = (1 − a²) g_j^{−2} ‖x_f‖².

Uniform per-layer gain γ on direction j gives **E_min ∝ γ^{−2n}**: exponential in depth, the baseline form of §2.3.

**A.2.2 Random orientations.** With independent random rotations between layers, Π_n is a product of i.i.d. random matrices. By the Furstenberg–Kesten / Oseledets theory, the limits λ_j = lim (1/n) ln σ_j(Π_n) exist (the Lyapunov spectrum), and for a generic fixed direction v, (1/n) ln ‖Π_n v‖ → λ_1. Growth of E_min with n is therefore exponential, with the rate set by the relevant exponent. For the prototype's ensemble (singular values i.i.d. uniform on [0.7, 1.0], Haar rotations), the spectrum's *sum* is exactly computable: Σ_j λ_j = E[ln|det P|] = m·E[ln σ] with E[ln σ] = −0.1677, so the *average* exponent is E[ln σ] and the predicted median-energy growth factor per layer is exp(−2E[ln σ]) = 1.399.

**Numerical finding:** the prototype's measured median factor is 1.40 (Part V, Simulation A), matching the average-exponent prediction. 

**A.2.3 Dispersion growth.** The interquartile range of E_min(n)/E_min(0) widens with n (Part V: [1.30, 1.53] at n = 1; [8.84, 13.96] at n = 7). Consistent with the variance of finite-n products around their Lyapunov limit; no rate is derived. Flagged as a promotable result if the full simulation confirms robustness.

## A.3 The Geometry Lemma

Layers with unit repertoire deficiency are modelled as orthogonal projections P_i = I − v_iv_iᵀ, ‖v_i‖ = 1 (blind spot v_i). Three kernel geometries.

**A.3.1 Independent (mutually orthogonal) blind spots.** Claim: if {v_1, …, v_n} are orthonormal, then Π_n = I − Σ_{i=1}^n v_iv_iᵀ, the orthogonal projection onto span{v_i}^⊥; hence rank(Π_n) = m − n, with singular values 1 (multiplicity m − n) and 0 (multiplicity n).

*Proof.* Induction. n = 1 is the definition. Assume Π_{n−1} = I − Σ_{i`<`n} v_iv_iᵀ. Then
P_nΠ_{n−1} = (I − v_nv_nᵀ)(I − Σ_{i<n} v_iv_iᵀ) = I − Σ_{i≤n} v_iv_iᵀ + v_n Σ_{i`<`n}(v_nᵀv_i)v_iᵀ, and the last term vanishes by orthonormality. ∎

This is the additive-annihilation route to §2.4's threshold: a directive with a component in span{v_i} loses it outright, and the chain's reachable set has codimension n.

**A.3.2 Identical blind spots.** v_i = v for all i: P is idempotent (P² = P), so Π_n = P for every n ≥ 1. Rank m − 1, all nonzero singular values equal to 1, at every depth. One dimension lost once; depth costless thereafter — the homogenized regime of §2.1 and §7.3.

**A.3.3 Generic blind spots.** v_i i.i.d. uniform on the sphere.

*(i) Hard rank is preserved* 

*(ii) Clean transmission loses exactly one dimension per layer* 

*Proof.* (≥) On ∩v_i^⊥ every P_i acts as the identity, so Π_n does. (≤) If ‖Π_n x‖ = ‖x‖, then since each P_i is a contraction, every intermediate image must preserve norm: ‖P_1x‖ = ‖x‖ forces x ⊥ v_1, hence P_1x = x; iterating, x ⊥ v_i for all i. The intersection of n generic hyperplanes has dimension m − n a.s. ∎

This is the invariant of §2.1 — *one cleanly transmitted dimension lost per deficient layer* — now a theorem rather than a numerical observation, and it holds in both A.3.1 and A.3.3, which is why the prototype's clean-dimension counts coincide for the two regimes while their ranks diverge.

*(iii) The degraded dimensions' gains collapse geometrically* 

*(iv) Interpolation*: kernels with tunable correlation between the A.3.2 and A.3.3 poles (e.g. v_i ∝ v̄ + κ ε_i). The full simulation sweeps κ; no analytical results are claimed. The orthogonal-projection idealisation itself (versus oblique translations with d_i = 1) is also an idealisation: for general contractive P_i the multiplicity statement in (ii) becomes approximate (singular values near 1 rather than equal to 1), which is what the prototype's threshold counts at σ ≥ 0.99 measure.

**Governance note.** A.3.1–A.3.3 jointly establish §2.1's unified law at the stated tier: the *count* of degraded dimensions is geometry-independent; the *form* of the cost — codimension versus energy — is geometry-dependent.

## A.4 The Bidirectional Node

Place one institution at tier j of the observation chain and tier n − j of the actuation chain. Upward: the centre's estimate is x̂ = Θ_up x + η, where Θ_up composes the aggregation maps of Paper III's chain and η its accumulated noise. The centre computes the directive v = K(x̂) = KΘ_up x + Kη. Downward: the node delivers u = Π_down v + Dδ, δ local discretion. The delivered action is therefore

  u = Π_down K Θ_up x + Π_down K η + Dδ:

the state enters the actuation **through the product Π_down K Θ_up** — the two chains' attenuations compose multiplicatively on the calibration path, before any noise is counted. The node's friction report (the discrepancy it observes locally) travels up through the same Θ_up, so the correction loop's gain is attenuated by the *square* of the upward channel's deficiency along the report's dimensions: once corrupting the directive's calibration, once muting the complaint about it. The trap of §7.4 is the regime in which the delivered error is persistent and locally visible while the centre's received friction signal sits below its detection threshold.

**Conjecture A.4.1 (superadditivity).** Let performance J depend on shortening parameters s_up, s_down (layers removed from each chain at the node). Then ∂²J/∂s_up∂s_down > 0 over the operating range: shortening both chains at one node yields more than the sum of shortening each alone, because each chain's residual attenuation multiplies the other's on the calibration path above. Test: full simulation, two-chain model; the prediction's empirical shadow is Paper VII's finding that protected experimental spaces — double-short nodes — are the convergent first step of viable reform. Whether the within-node composition is best modelled as the product above or includes additive pathways is part of what the simulation must decide; this appendix claims the setup, not the theorem.

---

## A.5 Status Summary for Review

| Result | Status |
|---|---|
| E_min = x_fᵀW^{−1}x_f; Lyapunov limit | Standard |
| Sustained-power version, same Π-dependence | Proved (Remark A.1.1) |
| Aligned-chain exponential law γ^{−2n} | Proved |
| Random-chain exponential growth (some rate) | Standard (Oseledets) |
| Median rate = average exponent exp(−2E[ln σ]) | Numerical (⊳ Reviewer 3) |
| Dispersion growth with depth | Numerical |
| Orthogonal kernels: rank m − n, additive annihilation | Proved |
| Identical kernels: idempotence, one loss | Proved |
| Generic kernels: rank m − 1 a.s. | Proved |
| Clean dimensions = m − n a.s. (the §2.1 invariant) | Proved |
| σ_min geometric decay and its rate | Numerical (⊳ Reviewer 4) |
| Correlation interpolation | Open |
| Bidirectional composition Π_down K Θ_up | Stated (setup) |
| Superadditivity conjecture | Open |
