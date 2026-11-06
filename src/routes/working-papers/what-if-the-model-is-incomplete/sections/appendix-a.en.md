## Appendix A. Evidence-status matrix

This is the authoritative claim-by-claim record. In the main text, **[R]** results carry a status word (confirmatory, prespecified descriptive, exploratory, structural). Here, each is given its precise code. *C-derived* marks a logical synthesis of confirmatory results, not an additional test. Source paths refer to the A2 project archive.

| Inferential status | Meaning |
|---|---|
| **C** confirmatory | prespecified test on the independent, committed F0-C sample; holds *within the declared synthetic population and the hypothetical 50/50 R weighting* |
| **C-derived** | a logical synthesis of C results; **not** an additional tested hypothesis |
| **PD** prespecified descriptive | declared before the confirmatory data; reported without an inferential claim |
| **ED** exploratory, declared | declared before outcomes, on development or preselected worlds; hypothesis-generating |
| **EP** exploratory, post hoc | chosen after seeing outcomes; labelled as such |
| **ST** structural | exact property of the model as specified (identity, structural null), verified numerically |

| Role | Meaning |
|---|---|
| **DS** decision science | claims about the decision problem |
| **NM** numerical methods | claims about estimators or solvers. Each row states whether the intervention was prospective and whether it covers a single fixed history. |
| **ENG** engineering verification | validation and parity gates; trust in code, not findings |

Abbreviations: R = downstream retention, S = synchronisation, C = rain copula; F0 = U1 objective; F1-eco = U1 + λ·ecological deficit. Every quantitative entry gives its source file.

### Group A — Objective adequacy and causal representation

| # | Claim (criterion named) | Source | Worlds | Status / role | Key numbers | Caveats |
|---|---|---|---|---|---|---|
| A1 | Under the declared hypothetical 50/50 R weighting, **REP(R) (F0 on 111) has lower population-mean U1** than COMP (F1-eco on 011) | F0-C primary; `analysis/f0c_…/f0c_confirmatory.json` | 40 IID test worlds | C / DS | Δ = −1.112 U1 [−1.737, −0.487], t(39) = −3.60, p = 0.00089 | precision missed (half-width 0.625); 30/40 negative, range −6.10 to +4.92 (t18); approximate t-inference conditional on the frozen generator |
| A2 | Same contrast on **U2** (U1 + maximum-municipality residual-damage penalty): REP lower | F0-C secondary | 40 | C / DS | −1.061 [−1.734, −0.388]; Holm p 0.0028 | U2 is not a complete distributive measure. CIs are ordinary unadjusted 95%; p-values are Holm-adjusted. |
| A3 | On **cumulative upstream wetland deficit**, COMP lower (better) | F0-C secondary | 40 | C / DS | +6.362 [+4.235, +8.489]; Holm p 1.3e-6 | model quantity, not a field indicator; same CI/p note as A2 |
| A4 | On **negative terminal wetland stock**, COMP lower (better, i.e. more stock) | F0-C secondary | 40 | C / DS | +1.543 [+1.056, +2.030]; Holm p 5.6e-7 | as A3 |
| A5 | BOTH(R) (F1-eco on 111) has **higher U1** than REP(R) | F0-C secondary | 40 | C / DS | +1.603 [+0.992, +2.214]; Holm p 9.6e-6 | BOTH's ecological outcomes were not part of this test |
| A6 | For the prespecified REP(R)-vs-COMP comparison, under the hypothetical 50/50 R weighting, **the mean criterion differences point in opposite directions**: REP has lower U1 and U2, COMP lower cumulative deficit and higher terminal stock. **Neither of these two policies is uniformly superior across the named criteria** | A1–A4 jointly | 40 | **C-derived** / DS | — | not a sixth test; says nothing about all strategies, any third policy, or per-world Pareto non-dominance |
| A7 | In the prespecified descriptive comparison, the observed mean **omission-related U1 contrast under F1-eco was small (+0.014)**, compared with **+1.851 under F0** (m\* = 111, s = 0, ψ = 0) | F0-C descriptive; `f0c_descriptive.json` | 40 | PD / DS | F0 +1.851 [+0.80, +2.90]; F1-eco +0.014 [−0.17, +0.20]; F1-eco-fixed +0.094 [−0.21, +0.40] | **not an equivalence or non-inferiority test**; the F1-eco interval contains meaningful positive and negative values; F1-eco-fixed addresses λ normalisation only; one mechanism (R), one baseline (011) |
| A8 | F1-eco has a **U1 price under the correct model** (its objective term) | F0-C descriptive | 40 | PD / DS | +1.085 [+0.61, +1.56] | the objective-term price is not the whole deployed-policy cost |
| A9 | The R-absent branch is also negative (descriptive subgroup). **The development decomposition suggests** this is because F1-eco's U1 premium exceeds REP's misspecification cost, not because the representation is right. The same decomposition computed read-only from the frozen 40-world tables is exploratory | branch: `f0c_confirmatory.json`; dev: `F0DEV_RESULTS_v0.1.md` §5; 40-world: Appendix B, T4 | 40 / 16 | PD (branch) / ED (dev) / EP (40-world) | branch 011: −1.125 [−2.126, −0.124]; dev: misspecification 1.06 vs F1-eco premium 2.42; 40-world: misspecification 1.765 vs F1-eco premium 2.890 (Appendix B, T4) | an objective-mismatch comparison, not causal discovery; not confirmed mechanistically |
| A10 | Omission cost under F0 is asymmetric and rain-dependent | F0-dev decomposition (`f0_decomposition.csv`); 40-world in Appendix B, T2/T4 | d00–d15 | ED / DS | F0/011 representation term 0.28 / 1.45 / 2.91 at ψ = −0.1 / 0 / +0.1 | development prefix; partly examined worlds |
| A11 | F1-eco is **less sensitive to planning-parameter error** than F0 (U1) | F0-dev decomposition; 40-world in Appendix B, T1 | d00–d15 | ED / DS | parameter/shift term at s = 0.25: F0 1.3–1.9 vs F1-eco 0.5–0.7 | development; the test-pool view is exploratory (appendix) |
| A12 | Correctly represented strategies are almost never dominated on two-axis fronts; the objective mainly selects a point on the U1–ecology front | F0-dev Pareto (`f0_pareto.csv`); 40-world in Appendix B, T6 | d00–d15 | ED / DS | non-dominated shares 1.00 (one 0.94) | two-axis fronts only; no statement about all policies |
| A13 | **The importance of an omitted mechanism depends on parameter uncertainty and conditions.** At s = 0, omitting R carries most of the F0 U1 omission effect; at s = 0.25, ψ = 0, **omitting C exceeds omitting R** | Gate C pilot `runs/pilot-v0.2_n8_812591e9c161/analysis.json` (factorial main effects on F0 regret) | 8 dev worlds (s = 0); 8 × 2 draws (s = 0.25) | ED / DS | s = 0, ψ = 0: R +0.796, S −0.003, C +0.027. s = 0, ψ = +0.1: R +2.046, S −0.011, C +0.016. s = 0.25, ψ = 0: **R +0.338, S −0.013, C +0.434**. s = 0.25, ψ = −0.1: R −0.131, C +0.397 | the pilot's physical mask was 111 with planner masks ablated, so these are omission effects in the planner, not physical effect sizes; small, previously studied sample; large SDs |
| A14 | In the pilot, the ecological objective did not recover the U1 omission penalty | Gate C pilot `summary.txt` | 8 | ED / DS | recovery ratio about −0.31 to −0.37 (s = 0, ψ = 0) | consistent with A8 |

### Group B — Exposure and identifiability

| # | Claim | Source | Worlds | Status / role | Key numbers | Caveats |
|---|---|---|---|---|---|---|
| B1 | With no upstream wetland, **the specified mechanism-specific transition likelihoods are identical** under R present and absent | E1-lite feasibility (`analysis/e1lite_feasibility/inventory.json`); G1-R V3; G3 controls | all | ST / DS | 100% of unexposed (s, a) pairs are exact nulls in every case and variant. The G3 blind log BF is exactly 0 **for the particular conditional observation likelihood evaluated in G3** | does not show that complete policy-state histories are uninformative under every observation model |
| B2 | **Exposure traps:** under the chosen passive policy, R stays unexposed in some worlds where it matters (d05 type) | D1–D2 `runs/d12-v0.1_bae2b0e7345b/summary.txt`; `G3_SUPPLEMENT_v0.1.md` | d00–d07 + synthetic | ED / DS | 7 exact (world × mechanism) traps in 6 worlds (6 R, 1 S); d05 planner occupancy of R exposure 0.000 | selected development worlds; stationary passive operator from S0 |
| B3 | Exposure is necessary, not sufficient: in d05 a deliberate probe establishes wetlands but rarely yields distinguishable transitions within 3 years | E1-lite G2 (`analysis/e1lite_g2_…`) | d05 | ED / DS | P(posterior moved) 0.00 at k ≤ 2, 0.15 at k = 3 (joint), with wetland stock established on 77–99% of paths | noise-free full-state observation (optimistic) |
| B4 | **Timing:** a one-year probe cannot inform the transition-based learner, because its first transition starts unexposed | E1-lite G2 | all | ST / DS | posterior at k = 1 equals the prior on every history | specific to the transition-based learner |

### Group C — Value of learning

| # | Claim | Source | Worlds | Status / role | Key numbers | Caveats |
|---|---|---|---|---|---|---|
| C1 | **Full-start clairvoyance O\*** (knows R from period 0): the passive-relative bound C(P0) − C(O\*) is material in R-relevant worlds and zero in controls. This is not the fixed-probe oracle X\* | E0 (`E0_RESULTS_v0.1.md`, `E0_CORRIGENDUM_v0.1.md`) | d00, d05, d02; controls d03, d07 | ED / DS | d00 0.92 / 1.84 / 2.76; d05 0.59 / 1.18 / 1.77 at q = 0.25 / 0.5 / 0.75 | **not EVPI**; preselected worlds |
| C2 | **Fixed-probe oracle X\*** (prescribed probe for k periods, then perfect revelation): its net margin over a restricted fixed-policy menu is seldom positive | E0 / E0.2 (`E02_ANALYSIS_v0.1.md`) | as C1 | ED / DS (E0.2 comparators post hoc, reviewer-proposed) | X\* beats B_extended in **10/54 (primary) and 7/54 (sensitivity) R-relevant cells** (d00/d05/d02); **10/90 and 7/90** including the controls d03 and d07, which have no winning cells | B_extended is a restricted fixed-policy menu; X\* is a within-probe continuation ceiling, **not universal EVPI and not a bound on all adaptive policies**; X\*e is not a general ceiling |
| C3 | A simple exact Bayesian probe-then-commit learner recovers at most about 18% of **the X\* margin over B_extended** (κ); the declared screen was not met | E1-lite G2 (`E1LITE_G1R_G2_RESULTS_v0.1.md`) | as C1 | ED / DS | κ ≥ 0.5 in 0/9 (primary); best κ 0.107 (primary), 0.179 (sensitivity) | known two-hypothesis problem; noise-free state; one-time commitment |
| C4 | Almost all of that learner's gain over the same-path fixed continuation is state-contingent commitment, not posterior updating | E1-lite G2.1 (`E1LITE_G21_ATTRIBUTION_v0.1.md`) | as C1 | ED / DS (descriptive decomposition) | information value ≤ 0.069 U1; 2.1% of substantial gains (primary) | specific learner and comparator; not a statement about all learners |

### Group D — Numerical methods and engineering

| # | Claim | Source | Status / role | Key result | Scope |
|---|---|---|---|---|---|
| D1 | Random-walk SMC evidence estimates were unreliable in the blind 16-D diagnostic; G3.2 detection rates are not interpretable | `G32_FINDINGS_v0.1.md` | EP (status assigned after the run) / NM | replicate verdict disagreements up to 11/24 | blind 16-D, D3a packages |
| D2 | Validated quadrature references: **1-D** via G3.3a (FAIL kept) and G3.3a-R (breakpoint-split, PASS); **2-D** via G3.3b-1 (48/48 references validated) | `G33A_RESULTS`, `G33AR_RESULTS`, `G33B1_RESULTS` | ED / NM | 1-D references within 1e-3 nats (Simpson accurate to 1.8e-5 but slow to converge); 2-D: 48/48 validated, exact nulls exact | the specific benchmark units |
| D3 | An **evaluator-informed, prospectively compared targeted split** reduced evidence-estimation error **on one fixed synthetic 2-D history**. It used fewer likelihood evaluations, but **runtime was not uniformly lower** | G3.3b-1 FAIL → 1M INCONCLUSIVE → 1P SUPPORTED → P3.1 FAIL → P3.1-R PASS → P3.2 EFFECTIVE (`G33B1P3_P31R_P32_RESULTS_v0.1.md`; `runs/g33b1p32-…`) | ED (prospective P3.2) / NM | mean \|log BF error\| 1.625 → 0.404 (512 particles), 0.457 → 0.181 (2,048). Particle-year cost lower. Wall-clock: 136 s vs 118 s at 512 (slower), 274 s vs 339 s at 2,048 (faster) | uses evaluator-known geometry; one history; **not** a deployable blind high-dimensional estimator |
| D4 | F0 machinery verified: oracles, lexicographic ties, decomposition identities, occupancy evaluator, Monte Carlo cross-check | F0-V FAIL (rare-event statistic) → F0-V-R PASS; F0-C validate-c PASS; parity sandbox FAIL (cross-platform ties) / workstation PASS | ENG | identities exact; the failures were test-statistic or cross-platform tie issues, documented | — |
| D5 | Validation statistics can reject correct code (normal approximation for rare events; invalid declared inequalities) | E1-lite G1, F0-V (`E1LITE_G1_RESULTS`, `F0V_RESULTS`) | EP (lesson) / NM | kept as FAIL records, each followed by a declared correction | methodological lesson |

