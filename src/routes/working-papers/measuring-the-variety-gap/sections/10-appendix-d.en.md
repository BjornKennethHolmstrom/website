## Appendix D: Mathematical Appendix

This appendix provides the formal derivations underlying the Composite Variety Gap Index, the multiplicative and additive formulations, the foundational parameter hierarchy, and the uncertainty propagation method described in Section 5. It also formalises the dynamic extension introduced in Section 6. The notation is established first, followed by the derivations in logical order.

### D.1 Notation

Let a governance system be characterised by eight parameters, each normalised to a dimensionless form:

- **V_o** ∈ ℕ⁺ : Effective dimensionality of the observation architecture.
- **V_e** ∈ ℕ⁺ : Effective dimensionality of the disturbance environment.
- **τ** ∈ ℝ⁺ : Characteristic response latency, measured in months.
- **σ** ∈ [0,1] : Signal fidelity, with σ = 0 representing complete signal destruction and σ = 1 representing perfect transmission.
- **p** ∈ [0,1] : Immune permeability, the proportion of reforms that achieve structural implementation. Its complement (1 − p) is the symbolic adaptation rate.
- **ω** ∈ ℝ⁺ : Oscillation amplitude, measured as the coefficient of variation of a relevant governance outcome variable.
- **β** ∈ [0,1] : Bypass density, with β = 0 representing no bypass activity and β = 1 representing complete bypass dominance.
- **ρ** ∈ [0,1] : Symbolic-to-structural reform ratio, the proportion of announced reforms that are symbolic rather than structural. By definition, ρ = 1 − p.

The composite Variety Gap Index is denoted **G**, and the observability threshold is denoted **G_crit**. The dynamic extension is denoted **dG/dt**.

### D.2 The Multiplicative Index

The Coordination Failure Tax (Paper V) establishes that simultaneous architectural failures multiply rather than add. A governance system with *n* failures, each reducing effective capacity by a fraction fᵢ, operates at effective capacity:

**C_eff = C₀ · ∏ᵢ₌₁ⁿ (1 − fᵢ)**

where C₀ is the baseline capacity that would obtain if all observation channels were intact, all latencies were matched to disturbance timescales, and all reforms achieved structural implementation.

The Variety Gap G is defined as the ratio of the disturbance environment's effective dimensionality to the governance system's effective capacity to perceive and respond to it. The multiplicative index expresses this as:

**G = (V_e / V_o) · (1 / f_τ) · (1 / g_σ) · (1 / h_p) · (1 / j_β) · (1 / k_ω)**

where the functions f_τ through k_ω transform the response and emergent parameters into normalised capacity multipliers bounded in (0,1], with 1 representing no degradation and values approaching 0 representing severe degradation. The symbolic-to-structural ratio ρ equals 1 − p by definition and is therefore not carried as an independent term; its contribution is subsumed into h_p = p, which carries a combined exponent in the tier-weighted formulation (D.4) reflecting both its Tier 2 and Tier 3 roles.

The specific functional forms are:

- **f_τ = exp(−τ / τ₀)** , where τ₀ is a reference latency set at 12 months—the observed median response latency among the calibration cases assessed as having feasible governance transitions, and the latency at which the exponential capacity penalty becomes material (f_τ ≈ 0.37 at τ = τ₀). As τ → 0, f_τ → 1 (no capacity loss from latency). As τ → ∞, f_τ → 0 (complete capacity loss from infinite latency).

- **g_σ = σ** (direct use of signal fidelity, already normalised to [0,1]).

- **h_p = p** (immune permeability, the proportion of reforms that achieve structural implementation).

- **j_β = 1 − β** (bypass density complement; higher bypass density reduces effective governance capacity).

- **k_ω = exp(−ω / ω₀)** , where ω₀ is a reference oscillation amplitude set at 0.20—the observed median coefficient of variation of GDP growth across the high-capacity calibration cases (Finland, Sweden, Germany), representing the amplitude benchmark consistent with adequate governance. As ω → 0, k_ω → 1. As ω → ∞, k_ω → 0.

The product form ensures that a score of zero on any capacity multiplier—complete signal fidelity collapse (σ = 0), total immune impermeability (p = 0), infinite latency (τ → ∞)—drives G toward infinity (G → ∞), representing a system whose Variety Gap is unboundedly large. This property reflects the framework's structural claim that a single catastrophic architectural failure is sufficient to render a governance system incapable of its functions.

In practice, the parameters are bounded away from zero by measurement constraints and by the survival requirement that a governance system must maintain some minimal functionality to continue existing as a governance system. The multiplicative index is computed in logarithmic form for numerical stability:

**ln G = ln(V_e / V_o) − ln f_τ − ln g_σ − ln h_p − ln j_β − ln k_ω**

and exponentiated to recover G.

### D.3 The Additive Index (Robustness Check)

An additive formulation of the index is provided for comparison and as a robustness check. The additive index treats each parameter as an independent contribution to the total governance deficit:

**G_add = (V_e − V_o) / V_e + (τ / τ_max) + (1 − σ) + (1 − p) + β + (ω / ω_max) + ρ**

where τ_max and ω_max are normalisation constants set to the maximum observed values in the calibration sample (approximately 36 months for τ, 0.40 for ω). Each term is bounded in [0,1], and the total G_add is bounded in [0,8].

The additive formulation is easier to compute and interpret than the multiplicative form. It does not exhibit the single-point-of-failure property that the multiplicative form possesses—a system with one catastrophic failure and seven adequate parameters may score moderately on the additive index while scoring extremely poorly on the multiplicative index. The multiplicative form is preferred because it is structurally consistent with the Coordination Failure Tax. The additive form is reported alongside it to allow analysts to assess the sensitivity of the diagnostic classification to the choice of functional form. Significant divergence between the multiplicative and additive classifications indicates that the system's vulnerability is concentrated in a single parameter and that the diagnostic conclusion is sensitive to the assumed interaction structure.

### D.4 Foundational Parameter Hierarchy and Weighting

Not all eight parameters are structurally equal. The foundational hierarchy described in Section 5.2 is implemented through exponents applied to each parameter in the multiplicative product. The general weighted form is:

**G = (V_e / V_o)^(w₁) · (1 / f_τ)^(w₂) · (1 / g_σ)^(w₁) · (1 / h_p)^(w₂ + w₃) · (1 / j_β)^(w₃) · (1 / k_ω)^(w₃)**

where:
- **w₁ = 1.5** for Tier 1 (Epistemic) parameters: V_e/V_o, σ.
- **w₂ = 1.0** for Tier 2 (Response) parameters: τ.
- **w₃ = 0.5** for Tier 3 (Emergent) parameters: bypass density β, oscillation amplitude ω.

Immune permeability p carries a combined exponent of w₂ + w₃ = 1.5, reflecting its dual structural role: as the response capacity measure (Tier 2) determining how the system acts on perceived signals, and as the source of the symbolic adaptation dynamic (Tier 3) that is definitionally identical to 1 − ρ. This consolidation is mathematically exact: since ρ = 1 − p, including ρ as a nominally separate Tier 3 term would double-count the same quantity. The combined exponent 1.5 is identical to what would have been obtained by including both p at w₂ = 1.0 and ρ at w₃ = 0.5—but stated transparently rather than obscured by the appearance of two independent parameters.

The weighting scheme reflects the qualitative causal structure identified across the twenty-one cases in the series: a failure at the epistemic level (Tier 1) renders all other parameter estimates unreliable and widens the Variety Gap more severely than an equivalent failure at the response or emergent levels. The specific exponent values (1.5, 1.0, 0.5) are not derived from first principles—no such derivation exists—but represent a parsimonious parameterisation of the causal hierarchy. Sensitivity analysis of the weighting scheme is straightforward: the exponents can be varied within plausible ranges (typically ±0.5 for Tier 1, ±0.3 for Tier 2, ±0.2 for Tier 3) and the resulting diagnostic classifications compared. If the classification is stable under plausible variations of the weighting scheme, the diagnostic conclusion is robust to the weighting assumptions. If it is unstable, the sensitivity should be reported alongside the primary classification.

### D.5 Observability Threshold Calibration

The observability threshold G_crit is the value of the Variety Gap Index at which the signal-to-noise ratio in the governance system's observation channel falls below unity. This threshold cannot be derived from first principles for the composite index—the mapping between the eight parameters and the system's effective signal-to-noise ratio is too complex for analytical solution. Instead, G_crit is calibrated empirically from the twenty cases in the series.

The calibration procedure is:

1. For each case, classify the governance system as "above threshold" or "below threshold" based on the original qualitative diagnosis: systems assessed as having "feasible" transition pathways and manageable architectural deficits are classified as above threshold; systems assessed as "difficult," "impossible," or having severe structural deficits are classified as below threshold. Cases assessed as "possible" or "possible via sub-federal pathways" are classified as approaching the threshold and are excluded from the calibration.

2. Compute G for each case using the multiplicative index with Tier-weighted exponents.

3. Identify the value of G that maximises the correct classification rate—the proportion of cases whose estimated G is on the correct side of the threshold according to the qualitative classification.

The resulting G_crit is approximately 2.0 for the nation-state sample, with a narrow range of values (1.8–2.2) that produce similar classification accuracy. The threshold is treated as provisional and subject to revision as the calibration sample expands. For organisational governance systems, a slightly lower threshold (approximately 1.7) may be appropriate, reflecting the narrower mandates and more contained disturbance environments of these systems. Domain-specific threshold calibration is identified as a priority for future research.

### D.6 Uncertainty Propagation

Each parameter estimate carries an uncertainty assessment, as specified in Section 3. The composite index inherits those uncertainties. The propagation method treats each parameter not as a point estimate but as a probability distribution, and computes the resulting distribution of G through Monte Carlo simulation.

**Distributional assumptions:**

- **V_o and V_e** are modelled as log-normal distributions, bounded below at 1, with the log-mean set to the point estimate and the log-standard deviation set to reflect the confidence interval width. The log-normal distribution is chosen because effective dimensionality is strictly positive and right-skewed—the true dimensionality is more likely to be higher than the point estimate than lower.

- **τ** is modelled as a normal distribution truncated at 0, with the mean set to the point estimate and the standard deviation set to reflect the confidence interval.

- **σ, p, β, ρ** are modelled as beta distributions, bounded in [0,1], with parameters (α, β) chosen to match the point estimate as the mode and the confidence interval as the central credible interval. The beta distribution is chosen because these parameters are proportions with bounded support.

- **ω** is modelled as a log-normal distribution, bounded below at 0, with the log-mean set to the point estimate and the log-standard deviation set to reflect the confidence interval.

**Monte Carlo procedure:**

1. Draw N samples (typically N = 10,000) from the joint distribution of the eight parameters. The joint distribution incorporates the correlations between parameters estimated from the calibration sample—specifically, the positive correlations between σ, p, and ρ that the Measurement Paradox predicts, and the negative correlation between β and V_o that the bypass architecture dynamic implies.

2. For each draw, compute G using the multiplicative index with Tier-weighted exponents.

3. The resulting distribution of G is summarised by its median and a credible interval—typically the 5th to 95th percentile, though other intervals can be reported as appropriate.

4. The threshold classification is based on the proportion of the posterior distribution that lies above or below G_crit. If more than 90% of the posterior mass lies below G_crit, the system is classified as Below Threshold with high confidence. If more than 90% lies above G_crit, the system is classified as Above Threshold with high confidence. If the posterior mass straddles G_crit, the system is classified as Approaching Threshold, and the proportion of mass on each side is reported.

**Measurement Paradox adjustment.** For systems where the Measurement Paradox is assessed as active, the joint distribution is adjusted to reflect the systematic underestimation bias. Specifically, the distributions for σ, p, and V_o are shifted downward (their means reduced by a fraction reflecting the estimated severity of the paradox), and the distributions for β, ρ, and ω are shifted upward. The adjustment magnitude is a structured judgment, reported separately from the unadjusted estimates, and the sensitivity of the diagnostic classification to the adjustment is assessed.

### D.7 Dynamic Extension: Estimating dG/dt

The dynamic extension estimates the rate of change of the Variety Gap from the emergence rate of new disturbance dimensions (α) and the adaptation rate of the governance architecture (η · A(V)), where η is the adaptation efficiency and A(V) is the adaptation effort. The dynamic equation is:

**dG/dt = α − η · A(V)**

where:
- **α** is estimated as the maximum of three proxies: the institutional novelty rate (α_inst), the academic identification rate (α_acad), and the crisis novelty rate (α_crisis), each expressed in units of new disturbance dimensions per year.
- **A(V)** is the adaptation effort, estimated as the rate of expansion of V_o over the observation period: A(V) = ΔV_o / Δt.
- **η** is the adaptation efficiency, estimated as the proportion of announced reforms that achieve structural implementation (p), adjusted downward for systems where the Measurement Paradox is active. (η is used throughout Sections 6–8 in place of the symbol β_adapt used in earlier drafts, to avoid notational collision with the bypass density parameter β defined in D.1.)

The dynamic estimate is reported not as a precise numerical value but as a trajectory classification with an associated confidence assessment, as described in Section 6.4. The classification is based on whether the central estimate of α exceeds the central estimate of η · A(V) by a margin larger than the combined uncertainty, and on the sensitivity of this comparison to the choice of α proxy and to the Measurement Paradox adjustment.

### D.8 Limitations of the Formal Apparatus

The mathematical framework described in this appendix is a formalisation of structured judgment, not a derivation from first principles. The functional forms chosen for f_τ, k_ω, and the other parameter transformations are parsimonious and analytically tractable, but they are not unique. Alternative functional forms—sigmoid transformations for latency, power-law relationships for oscillation amplitude—could be substituted without altering the framework's qualitative behaviour. The sensitivity of the diagnostic classifications to these alternative specifications should be assessed in any application of the framework.

The foundational hierarchy weights (1.5, 1.0, 0.5) are not estimated from data. They are prior assumptions, grounded in the qualitative causal structure of the series but not empirically validated. The sensitivity analysis described in D.4 provides a partial remedy, but the ultimate validation of the weighting scheme requires a larger calibration sample with independently observed governance outcomes—the prospective panel study described in Section 9.2.

The observability threshold G_crit is calibrated from a sample of twenty cases, all of which were used in the framework's development. The threshold is provisional, and its stability under expansion of the calibration sample is unknown. The framework should be applied with the understanding that the threshold may shift as more data becomes available, and that systems currently classified as "approaching" the threshold may be reclassified as the calibration improves.

The mathematical apparatus is offered not as a final statement but as a structured starting point—a formal language in which the measurement challenges identified throughout this paper can be made precise, and in which the empirical research programme that will test, refine, or refute the framework's claims can be conducted. The mathematics is the scaffolding. The empirical work is the building. The scaffolding is designed to be modified as the building takes shape.
