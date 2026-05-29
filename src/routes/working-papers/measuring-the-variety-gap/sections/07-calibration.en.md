## 7. Calibration Against the Twenty Cases: A Consistency Check

The parametric framework developed in Sections 3 through 6 is designed to operationalise the diagnostic concepts that the country and organisational reports developed qualitatively. This section applies the framework retrospectively to the twenty cases that constitute the series' empirical foundation. The purpose is to verify that the parametric estimates align with the qualitative diagnoses—that the numbers tell roughly the same story as the narratives. This is a consistency check, not a validation. The distinction matters, and it must be stated clearly before any results are presented.

The parameters were developed with knowledge of the cases. The selection of proxies, the specification of the foundational hierarchy, and the determination of the observability threshold were all informed by the patterns the series had already identified. A correlation between the estimated Variety Gap and the diagnosed core deficit is therefore expected; it is not evidence that the framework has predictive power beyond the cases used in its development. The consistency check serves a more modest purpose: it tests whether the translation from narrative diagnosis to numerical estimate is internally coherent. If the framework assigned low Variety Gap scores to cases diagnosed with severe architectural deficits, or high scores to cases diagnosed as fundamentally sound, the translation would be failing. If the scores align with the diagnoses, the translation is functioning as intended—and the framework can proceed to the validation step in Section 8, where it will be tested against cases not used in its development.

### 7.1 Method

For each of the twenty cases, the eight parameters were estimated retrospectively using publicly available data, expert assessments embedded in the original reports, and supplementary sources where the reports did not provide sufficient information. The estimation was conducted for the time period most relevant to each case's original diagnosis—typically the five to ten years preceding the report's publication. Where the original report provided explicit discussion of a parameter (e.g., the frequency mismatch in the courts report, the immune system taxonomy in the healthcare report), that discussion was used to anchor the estimate. Where the report was silent on a particular dimension, estimates were drawn from general governance indicators and cross-referenced with the qualitative characterisation of the system's overall condition.

Each parameter estimate carries an uncertainty flag—low, moderate, high, or very high—reflecting both the quality of the available data and the degree to which the Measurement Paradox may be active. The composite Variety Gap Index G was computed using the multiplicative form specified in Section 5, with Tier 1 parameters weighted by an exponent of 1.5, Tier 2 by 1.0, and Tier 3 by 0.5. The observability threshold G_crit was set at the value that best discriminates between cases diagnosed as having severe architectural deficits and those diagnosed as having manageable ones—an empirical approximation, not a theoretical derivation. The trajectory classification was applied where longitudinal data was available; for most cases, the original reports did not provide sufficient historical depth for reliable dynamic estimation, and the trajectory is noted as "not estimated."

### 7.2 Results: Parameter Profiles and Variety Gap Scores

Table 7.1 presents the estimated Variety Gap scores and threshold classifications for all twenty cases, alongside the core deficit and transition feasibility from the original diagnoses.

| System | Core Deficit | Transition Feasibility | G (median) | Threshold Band | Tier 1 Status | Primary Uncertainty |
|--------|--------------|------------------------|------------|----------------|----------------|---------------------|
| Germany | Execution | Feasible | 1.8 [1.2–2.5] | Approaching | Adequate | Moderate |
| France | Integration | Feasible | 2.1 [1.5–2.8] | Approaching | Adequate | Moderate |
| Sweden | Feedback | Feasible | 1.6 [1.0–2.3] | Approaching | Adequate | Moderate |
| India | Synchronisation | Feasible | 3.2 [2.4–4.1] | Below | Degraded (Tier 1) | High |
| EU | Coherence | Feasible | 2.8 [2.1–3.6] | Below | Adequate | Moderate |
| UK | Control-Delivery | Feasible | 2.5 [1.8–3.3] | Approaching | Adequate | Moderate |
| Brazil | Accumulation | Difficult | 4.1 [3.2–5.0] | Below | Degraded (Tier 1) | High |
| Russia | Legibility | Impossible | 6.8 [5.4–8.2] | Below | Severely Degraded | Very High |
| USA | Integration | Possible (sub-federal) | 2.4 [1.7–3.2] | Approaching | Adequate | Moderate |
| Finland | Throughput | Feasible | 1.4 [0.9–2.0] | Above | Strong | Low |
| China | Calibration | Difficult | 3.8 [2.9–4.8] | Below | Degraded (Tier 1) | High |
| Japan | Continuity Trap | Feasible (with disruption) | 2.2 [1.5–3.0] | Approaching | Adequate | Moderate |
| Nigeria | Substrate Deficit | Generational | 7.2 [5.6–8.8] | Below | Severely Degraded | Very High |
| Israel | Boundary Deficit | Difficult | 3.5 [2.6–4.5] | Below | Degraded (Tier 1) | High |
| Spain | Integrative Closure | Feasible (orthogonal) | 2.6 [1.9–3.4] | Approaching | Adequate | Moderate |
| AI Labs | Coherence-Velocity | Difficult | 4.3 [3.3–5.4] | Below | Degraded (Tier 1) | High |
| Healthcare | Clinical Observability | Possible | 3.9 [3.0–4.9] | Below | Degraded (Tier 1) | High |
| Universities | Integration | Possible | 3.6 [2.7–4.6] | Below | Degraded (Tier 1) | High |
| Central Banks | Monetary Variety Gap | Possible | 3.3 [2.4–4.3] | Below | Degraded (Tier 1) | High |
| Courts | Adjudication-Governance | Possible | 3.7 [2.8–4.7] | Below | Degraded (Tier 1) | High |

The alignment between the estimated Variety Gap and the original diagnosis is broadly consistent. Cases diagnosed as having severe or structural deficits—Russia, Nigeria, Brazil, the AI labs, healthcare systems—score well below the observability threshold, with G values that indicate fundamental inadequacy in their observation architectures. Cases diagnosed as having more manageable challenges—Finland, Sweden, Germany—score near or above the threshold. The transition feasibility assessments from the original reports correlate with the Variety Gap scores in the expected direction: systems assessed as "feasible" cluster near the threshold; systems assessed as "difficult" or "impossible" lie well below it.

The Tier 1 status column reveals a pattern that the qualitative reports identified but did not quantify. Systems with severely degraded epistemic parameters—Russia, Nigeria, China—are precisely the systems where the Measurement Paradox is most active and the uncertainty in the composite estimate is highest. The credible intervals for these cases are wide, and the true Variety Gap is almost certainly larger than the median estimate suggests. This is not a limitation of the framework. It is the framework's most important diagnostic output: a very wide credible interval, combined with a below-threshold classification, is evidence that the system has degraded the informational infrastructure on which accurate diagnosis depends.

### 7.3 Parameter Discrimination Analysis

Not all eight parameters contribute equally to the differentiation between cases. Table 7.2 summarises the discriminatory power and data quality of each parameter across the twenty-case sample.

| Parameter | Discrimination | Data Quality | Notes |
|-----------|---------------|--------------|-------|
| V_o | Moderate | Moderate | Distinguishes high-capacity systems (Finland, Sweden) from low-capacity ones (Nigeria, Russia) but limited variation among OECD democracies. |
| V_e | Low | Very Low | Estimates cluster narrowly; the true variation is almost certainly larger but invisible to retrospective measurement. |
| τ | High | High | Strong discriminator; differentiates crisis-responsive systems from slow ones. |
| σ | High | Moderate | Strong discriminator; captures the difference between open and closed governance architectures. |
| Immune permeability | High | Moderate | Strong discriminator; closely tracks the original immune system taxonomy. |
| Oscillation amplitude | Moderate | High | Discriminates between stable and volatile systems but confounded by external shocks. |
| Bypass density | Moderate | Low | Shows expected patterns (high in India, Nigeria, Brazil) but estimates are rough. |
| Symbolic-to-structural ratio | High | Moderate | Strong discriminator; closely tracks transition feasibility assessments. |

The epistemic parameters (V_o, V_e) are the weakest link in the current framework. V_e, in particular, shows limited variation across cases—not because the true disturbance environments are uniform, but because the retrospective estimation method can only capture dimensions that have already caused crises. This is the Measurement Paradox operating at the level of the calibration exercise itself. The cases where V_e is likely highest—those facing novel, rapidly emerging disturbance dimensions that have not yet fully manifested—are precisely the cases where the estimate is least reliable. The dynamic extension in Section 6 is designed to address this limitation prospectively, but it could not be applied retrospectively to most cases due to data constraints.

The response and emergent parameters (τ, σ, immune permeability, oscillation, bypass density, symbolic ratio) perform better as discriminators. They capture the visible consequences of the underlying architectural deficits, and they can be estimated from data sources that are available even for relatively opaque governance systems. The calibration suggests that a pragmatic measurement strategy for resource-constrained applications could focus on the five parameters with highest discriminatory power and data quality: τ, σ, immune permeability, oscillation amplitude, and the symbolic-to-structural ratio. The epistemic parameters would be estimated where data permits, and their absence would be flagged as a significant source of uncertainty.

### 7.4 Refinements Indicated by the Calibration

The calibration exercise identified several refinements that would improve the framework's reliability in future applications.

First, the estimation of V_e requires prospective methods that are not available in retrospective calibration. The dynamic extension's α estimation—tracking the emergence rate of new disturbance dimensions through institutional novelty, academic identification, and crisis novelty—should be applied prospectively to a panel of governance systems over a sustained period. This would generate the longitudinal data needed to validate or revise the static V_e estimates.

Second, the Measurement Paradox is clearly active in several high-Variety-Gap cases, and the framework's handling of it—reporting wide credible intervals and treating estimates as lower bounds—is methodologically honest but diagnostically unsatisfying. The censorship-as-signal approach (tracking metric attrition) and the proxy divergence diagnostic should be operationalised as standard components of the parameter estimation protocol for any system suspected of Tier 1 degradation.

Third, the foundational parameter hierarchy (Tier 1, 2, 3) was applied uniformly across all cases, but the calibration suggests that the hierarchy's importance varies by governance domain. In organisational cases (hospitals, universities, AI labs), the emergent parameters (oscillation, bypass density) were often more visible and more discriminating than the epistemic parameters. In nation-state cases, the epistemic parameters were more clearly foundational. Future applications could explore domain-specific weighting schemes.

### 7.5 Conclusion of the Calibration

The parametric framework produces Variety Gap estimates that are broadly consistent with the qualitative diagnoses developed independently in the country and organisational reports. The systems identified as having the most severe architectural deficits—Russia, Nigeria, Brazil, the AI labs—score well below the observability threshold. The systems identified as having more manageable challenges—Finland, Sweden, Germany—score near or above it. The parameters that capture immune system activity, signal fidelity, and response latency are the strongest discriminators. The parameters that capture the epistemic dimensions—V_o and especially V_e—are the weakest, reflecting the fundamental challenge of measuring the dimensions that a governance system cannot perceive.

This consistency check is not a validation. It is the expected outcome of a measurement framework applied to the cases that informed its development. The framework's value, if it has any, will be determined by its performance on cases it was not designed to explain. The next section applies the framework to a pilot set of governance systems not previously studied in the series, and discusses the implications of the results—whatever they turn out to be—for the framework's future development.
