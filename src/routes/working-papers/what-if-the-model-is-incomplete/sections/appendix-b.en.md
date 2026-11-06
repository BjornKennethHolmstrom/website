## Appendix B. Exploratory tables from the frozen confirmatory factorial

**Status: EP (exploratory, post hoc), descriptive only.** 

- Read-only, from the frozen F0-C analysis tables in `analysis/f0c_f0c-v0.1-conf_6c5c58ff6e22/`. No simulation, no new world, no p-value and no confidence interval.
- The table definitions and their complete coverage were declared at **2026-11-06T10:10:31Z** in `records/a2_f0c_exploratory_appendix_declaration.json`, before any table was computed. The script checks the input hashes against that declaration.
- **Why EP and not ED.** The F0-C summary log and the F0-dev analogues were already known when the tables were chosen, so the choice was not blind to outcomes. Nothing here is a confirmatory finding, and nothing here is used to select a new hypothesis.
- **Unit.** The unit is the base world (n = 40). The 120 jobs are three planning conditions per world and are not independent.
- **Code and output.** `diag/a2_f0c_exploratory_appendix.py` (sha256 `b9f68d4d7825…`) writes `analysis/f0c_exploratory_appendix/tables.json` and `tables.md`.

### B.1 Definitions

- **Contrast.** Δ_X(J) = ½ Σ_{m\* ∈ {m₀ ∪ X, m₀}} [J(F0 on m₀ ∪ X) − J(F1-eco on m₀)], own pool. It is REP(X) − COMP under the hypothetical 50/50 weighting on whether X is present. Every J is minimised, so **Δ < 0 favours REP on the named criterion**.
- **Per-world statistics.** T1–T3 report the mean, SD, sign counts, minimum and maximum over the 40 worlds. Sign counts can sum to less than 40 when a world has Δ exactly 0.
- **World means only.** T4–T6 come from the frozen world-mean tables:
  - decomposition terms are regret components against the J_U1 oracle (representation → parameter/shift → objective);
  - T5 averages the two m\* branches of the factorial means;
  - T6 counts, for each world, whether a policy is non-dominated among the **33 candidate policies** (24 S|f|m and 9 MIX) on the named two-axis front.
- **Inputs (sha256).**
  - `f0c_core.csv` `d201fc09a085…`
  - `f0c_decomposition.csv` `eefdb4f6ec44…`
  - `f0c_factorial_means.csv` `63e52948900a…`
  - `f0c_pareto.csv` `35f130ddc694…`

### B.2 Tables

#### T1. Parameter error (m₀ = 011, X = R, ψ = 0): Δ = REP(R) − COMP

| Condition | J | mean | SD | n < 0 | n > 0 | min | max |
|---|---|---|---|---|---|---|---|
| s=0.0,d=0 | J_U1 | -1.112 | 1.954 | 30 | 10 | -6.104 | +4.925 |
| s=0.0,d=0 | J_U2 | -1.061 | 2.103 | 29 | 11 | -6.324 | +6.216 |
| s=0.0,d=0 | J_def | +6.362 | 6.651 | 3 | 37 | -3.795 | +18.069 |
| s=0.0,d=0 | J_stock | +1.543 | 1.523 | 2 | 38 | -0.544 | +4.000 |
| s=0.25,d=0 | J_U1 | -0.010 | 2.579 | 24 | 15 | -7.263 | +6.970 |
| s=0.25,d=0 | J_U2 | +0.155 | 2.785 | 23 | 16 | -7.170 | +7.839 |
| s=0.25,d=0 | J_def | +5.258 | 6.231 | 4 | 35 | -4.103 | +18.340 |
| s=0.25,d=0 | J_stock | +1.269 | 1.448 | 3 | 36 | -0.948 | +4.000 |
| s=0.25,d=1 | J_U1 | -0.301 | 2.547 | 26 | 12 | -4.720 | +10.552 |
| s=0.25,d=1 | J_U2 | -0.182 | 2.842 | 24 | 14 | -5.144 | +11.621 |
| s=0.25,d=1 | J_def | +6.937 | 6.663 | 5 | 33 | -1.076 | +18.069 |
| s=0.25,d=1 | J_stock | +1.639 | 1.542 | 3 | 35 | -0.007 | +4.000 |

Parameter/shift term (J_U1, world means):

| Condition / policy / m\* | term |
|---|---|
| s=0.0,d=0\|F0/111\|m*=111 | +0.000 |
| s=0.0,d=0\|F0/111\|m*=011 | +0.000 |
| s=0.0,d=0\|F1-eco/011\|m*=111 | +0.000 |
| s=0.0,d=0\|F1-eco/011\|m*=011 | +0.000 |
| s=0.25,d=0\|F0/111\|m*=111 | +2.654 |
| s=0.25,d=0\|F0/111\|m*=011 | +2.370 |
| s=0.25,d=0\|F1-eco/011\|m*=111 | +1.329 |
| s=0.25,d=0\|F1-eco/011\|m*=011 | +1.516 |
| s=0.25,d=1\|F0/111\|m*=111 | +2.483 |
| s=0.25,d=1\|F0/111\|m*=011 | +2.361 |
| s=0.25,d=1\|F1-eco/011\|m*=111 | +0.857 |
| s=0.25,d=1\|F1-eco/011\|m*=011 | +1.378 |

#### T2. Rain shift (m₀ = 011, X = R, s = 0): Δ = REP(R) − COMP

| ψ | J | mean | SD | n < 0 | n > 0 | min | max |
|---|---|---|---|---|---|---|---|
| psi=-0.1 | J_U1 | -1.318 | 1.753 | 33 | 7 | -6.184 | +2.144 |
| psi=-0.1 | J_U2 | -1.300 | 1.815 | 32 | 8 | -6.198 | +2.793 |
| psi=-0.1 | J_def | +6.615 | 6.673 | 4 | 36 | -3.367 | +18.136 |
| psi=-0.1 | J_stock | +1.609 | 1.522 | 2 | 38 | -0.352 | +4.000 |
| psi=0.0 | J_U1 | -1.112 | 1.954 | 30 | 10 | -6.104 | +4.925 |
| psi=0.0 | J_U2 | -1.061 | 2.103 | 29 | 11 | -6.324 | +6.216 |
| psi=0.0 | J_def | +6.362 | 6.651 | 3 | 37 | -3.795 | +18.069 |
| psi=0.0 | J_stock | +1.543 | 1.523 | 2 | 38 | -0.544 | +4.000 |
| psi=0.1 | J_U1 | -0.808 | 2.110 | 27 | 13 | -6.310 | +7.343 |
| psi=0.1 | J_U2 | -0.710 | 2.365 | 25 | 15 | -6.533 | +9.275 |
| psi=0.1 | J_def | +6.101 | 6.632 | 4 | 36 | -4.196 | +18.069 |
| psi=0.1 | J_stock | +1.476 | 1.524 | 2 | 38 | -0.720 | +4.000 |

Representation term of omitting R in m\* = 111 (J_U1, world means):

| ψ / policy | term |
|---|---|
| psi=-0.1\|F0/011 | +0.518 |
| psi=-0.1\|F1-eco/011 | +0.002 |
| psi=-0.1\|F1-eco-fixed/011 | +0.038 |
| psi=0.0\|F0/011 | +1.851 |
| psi=0.0\|F1-eco/011 | +0.014 |
| psi=0.0\|F1-eco-fixed/011 | +0.094 |
| psi=0.1\|F0/011 | +3.567 |
| psi=0.1\|F1-eco/011 | +0.078 |
| psi=0.1\|F1-eco-fixed/011 | +0.229 |

#### T3. All 12 (m₀, X) pairs (s = 0, ψ = 0): Δ_X = REP(X) − COMP

| m₀ + X | J | mean | SD | n < 0 | n > 0 | min | max |
|---|---|---|---|---|---|---|---|
| 011+R | J_U1 | -1.112 | 1.954 | 30 | 10 | -6.104 | +4.925 |
| 011+R | J_def | +6.362 | 6.651 | 3 | 37 | -3.795 | +18.069 |
| 101+S | J_U1 | -1.011 | 1.443 | 34 | 6 | -5.684 | +0.123 |
| 101+S | J_def | +6.852 | 6.571 | 0 | 40 | +0.000 | +18.069 |
| 110+C | J_U1 | -1.066 | 1.443 | 38 | 2 | -5.196 | +0.003 |
| 110+C | J_def | +6.783 | 6.589 | 0 | 40 | +0.000 | +18.069 |
| 001+R | J_U1 | -1.106 | 1.691 | 30 | 10 | -6.199 | +0.713 |
| 001+R | J_def | +5.883 | 6.667 | 3 | 37 | -0.361 | +18.069 |
| 001+S | J_U1 | -2.631 | 2.406 | 38 | 2 | -10.423 | +0.009 |
| 001+S | J_def | +11.906 | 6.255 | 0 | 40 | +0.000 | +18.619 |
| 010+R | J_U1 | -1.210 | 1.866 | 30 | 10 | -6.060 | +4.227 |
| 010+R | J_def | +7.192 | 6.483 | 4 | 36 | -2.908 | +18.232 |
| 010+C | J_U1 | -2.889 | 2.614 | 40 | 0 | -10.651 | -0.000 |
| 010+C | J_def | +11.872 | 6.217 | 0 | 40 | +0.000 | +18.619 |
| 100+S | J_U1 | -1.079 | 1.461 | 39 | 1 | -5.566 | +0.175 |
| 100+S | J_def | +7.523 | 6.445 | 0 | 40 | +0.000 | +18.232 |
| 100+C | J_U1 | -1.003 | 1.458 | 34 | 6 | -5.527 | +0.011 |
| 100+C | J_def | +6.209 | 6.715 | 0 | 40 | +0.000 | +18.069 |
| 000+R | J_U1 | -1.199 | 1.631 | 31 | 9 | -6.475 | +0.500 |
| 000+R | J_def | +7.119 | 6.723 | 1 | 39 | -0.239 | +18.232 |
| 000+S | J_U1 | -2.568 | 2.290 | 37 | 3 | -9.443 | +0.028 |
| 000+S | J_def | +11.881 | 6.130 | 0 | 40 | +0.000 | +18.619 |
| 000+C | J_U1 | -2.353 | 1.983 | 40 | 0 | -7.380 | -0.011 |
| 000+C | J_def | +13.211 | 5.428 | 0 | 40 | +0.037 | +18.619 |

#### T4. 40-world decomposition (J_U1, s = 0, ψ = 0, own pool; world means)

| policy / m\* | total | representation | parameter/shift | objective |
|---|---|---|---|---|
| F0/111\|m*=111 | +0.000 | +0.000 | +0.000 | +0.000 |
| F0/111\|m*=011 | +1.765 | +1.765 | +0.000 | +0.000 |
| F1-eco/011\|m*=111 | +1.099 | +0.014 | +0.000 | +1.085 |
| F1-eco/011\|m*=011 | +2.890 | +0.000 | +0.000 | +2.890 |

#### T5. MIX vs pure commitments (50/50 mean over m₀ ∪ X and m₀; s = 0, ψ = 0; world means)

| pair \| policy | J_U1 | J_def |
|---|---|---|
| R\|S\|F0\|011 | 6.967 | 18.082 |
| R\|S\|F0\|111 | 6.924 | 12.624 |
| R\|MIX\|R\|0.25 | 6.557 | 16.446 |
| R\|MIX\|R\|0.5 | 6.465 | 14.980 |
| R\|MIX\|R\|0.75 | 6.638 | 13.877 |
| S\|S\|F0\|101 | 4.040 | 12.076 |
| S\|S\|F0\|111 | 4.033 | 12.645 |
| S\|MIX\|S\|0.25 | 4.017 | 12.146 |
| S\|MIX\|S\|0.5 | 4.012 | 12.371 |
| S\|MIX\|S\|0.75 | 4.016 | 12.448 |
| C\|S\|F0\|110 | 2.746 | 13.381 |
| C\|S\|F0\|111 | 2.738 | 12.653 |
| C\|MIX\|C\|0.25 | 2.725 | 13.327 |
| C\|MIX\|C\|0.5 | 2.722 | 13.073 |
| C\|MIX\|C\|0.75 | 2.728 | 12.783 |

#### T6. Pareto: share of the 40 worlds non-dominated (s = 0, ψ = 0, own pool)

| axis \| m\* \| policy | share |
|---|---|
| J_def\|m*=011\|S\|F0\|111 | 0.550 |
| J_def\|m*=011\|S\|F0\|011 | 1.000 |
| J_def\|m*=011\|S\|F1-eco\|111 | 0.650 |
| J_def\|m*=011\|S\|F1-eco\|011 | 1.000 |
| J_def\|m*=011\|S\|F1-eco-fixed\|011 | 1.000 |
| J_def\|m*=011\|MIX\|R\|0.5 | 0.825 |
| J_stock\|m*=011\|S\|F0\|111 | 0.575 |
| J_stock\|m*=011\|S\|F0\|011 | 1.000 |
| J_stock\|m*=011\|S\|F1-eco\|111 | 0.625 |
| J_stock\|m*=011\|S\|F1-eco\|011 | 0.950 |
| J_stock\|m*=011\|S\|F1-eco-fixed\|011 | 0.950 |
| J_stock\|m*=011\|MIX\|R\|0.5 | 0.825 |
| J_def\|m*=111\|S\|F0\|111 | 0.975 |
| J_def\|m*=111\|S\|F0\|011 | 0.250 |
| J_def\|m*=111\|S\|F1-eco\|111 | 1.000 |
| J_def\|m*=111\|S\|F1-eco\|011 | 0.300 |
| J_def\|m*=111\|S\|F1-eco-fixed\|011 | 0.275 |
| J_def\|m*=111\|MIX\|R\|0.5 | 0.225 |
| J_stock\|m*=111\|S\|F0\|111 | 0.975 |
| J_stock\|m*=111\|S\|F0\|011 | 0.250 |
| J_stock\|m*=111\|S\|F1-eco\|111 | 0.925 |
| J_stock\|m*=111\|S\|F1-eco\|011 | 0.250 |
| J_stock\|m*=111\|S\|F1-eco-fixed\|011 | 0.250 |
| J_stock\|m*=111\|MIX\|R\|0.5 | 0.225 |

### B.3 What the tables show, including counterexamples

1. **Parameter error removes most of the U1 advantage of REP(R) (T1).**
   - At s = 0.25, mean Δ_R(J_U1) is −0.010 (draw 0) and −0.301 (draw 1), against −1.112 at s = 0. The signs split 24/15 and 26/12, and the maxima reach +6.97 and +10.55.
   - The parameter/shift term is larger for F0 on 111 (+2.37 to +2.65) than for F1-eco on 011 (+0.86 to +1.52). This matches the F0-dev direction (A11), but these are larger values on a different sample.
   - The ecological contrasts keep their direction and size: J_def +5.3 to +6.9, J_stock +1.3 to +1.6.
   - **The confirmed U1 contrast (A1) is a statement about s = 0. It should not be described as robust to parameter error.**
2. **The rain shift moves the contrast monotonically, with no reversal (T2).**
   - Mean Δ_R(J_U1) is −1.318, −1.112 and −0.808 at ψ = −0.1, 0 and +0.1.
   - The F0 representation term grows (+0.518, +1.851, +3.567), while F1-eco stays near zero (+0.002, +0.014, +0.078). F1-eco-fixed is slightly larger (+0.038, +0.094, +0.229).
   - The ψ = 0 entries reproduce the frozen PD values (A7), which checks the read path.
3. **All 12 mask pairs have the same mean signs (T3), but this mainly reflects the objective, not representation.**
   - Δ_X(J_U1) < 0 and Δ_X(J_def) > 0 in every pair.
   - For S and C the representation contrast is small, so Δ_X there is mostly F1-eco's U1 price for its ecological gain, not evidence that representing S or C has value.
   - Pairs adding R have up to 10 worlds with Δ > 0 and maxima up to +4.9. Pairs adding S or C have at most 6 positive worlds, with maxima ≤ +0.18.
   - The largest mean U1 contrasts, about −2.4 to −2.9, are 001+S, 010+C, 000+S and 000+C. In those pairs the baseline already omits R.
4. **The development decomposition of the R-absent branch has the same shape on the 40 test worlds (T4).**
   - In m\* = 011, REP pays a representation cost of +1.765 U1, while COMP pays an objective price of +2.890. The difference is the branch mean, −1.125.
   - In m\* = 111, COMP's cost is almost entirely objective price (+1.085 of +1.099).
   - This addresses A9: "F1-eco's U1 premium exceeds REP's misspecification cost" holds descriptively in the test sample (dev: 1.06 vs 2.42). It remains an exploratory decomposition, not a mechanistic confirmation.
5. **A hedging heuristic beats both pure F0 commitments on mean U1 for R (T5).**
   - Under the 50/50 weighting, MIX(R, q) has a lower world-mean J_U1 (6.465–6.638) than F0 on 011 (6.967) or on 111 (6.924). Its J_def lies between them (13.9–16.4, against 18.1 and 12.6).
   - For S and C, MIX is within about 0.03 U1 of the pure commitments.
   - REP(R) is therefore not the U1-best policy among those evaluated. **A6 is correctly limited to the REP-versus-COMP pair.**
   - MIX was not part of any test, it is a per-step kernel average rather than a mixture-optimal plan, and only world means are reported here (see H6 in §7.2).
6. **Each strategy is mostly non-dominated when its representation is right, and often dominated when it is wrong (T6).**
   - In m\* = 111, REP (F0/111) is non-dominated in 97.5% of worlds on both fronts, but COMP (F1-eco/011) in only 30% (J_def) and 25% (J_stock).
   - In m\* = 011 the pattern reverses: COMP is non-dominated in 100% and 95%, REP in 55% and 57.5%.
   - BOTH (F1-eco/111) is non-dominated in 100% and 92.5% of worlds in m\* = 111.
   - These shares are per-branch statements. They do not combine into a 50/50 Pareto statement.

### B.4 Nulls and non-findings

- At s = 0 the parameter/shift term is exactly 0 (structural; T1).
- The F1-eco representation term never exceeds +0.08 U1 in world mean across the three ψ values. This is a descriptive observation, not an equivalence result.
- No mask pair reverses the sign of the mean U1 or J_def contrast. The per-world counterexamples are listed in T1–T3.

