## 3. What the confirmatory comparison shows

### 3.1 Re-modelling had the lower mean cost [R, confirmatory]

Under the hypothetical equal weighting, REP(R) had a lower population-mean U1 than COMP. The mean difference was **−1.112** U1 (95% CI −1.737 to −0.487; $t(39)=-3.60$, $p=0.00089$).

The null hypothesis of zero mean difference is rejected at the declared level. The planned precision was not reached: the interval's half-width was 0.625, against a target of 0.50. The standard deviation of $\Delta_i$ in the test sample (1.954) was much larger than in development (1.138), and the sample was not enlarged.

**The worlds disagree** (Figure 1):

- 30 of the 40 worlds favour REP;
- in a quarter of them, compensation is as cheap or cheaper;
- the extremes are −6.10 (world t39) and +4.92 (world t18);
- the median is −0.382 and the skewness −0.22.

Two descriptive checks, declared as such, agree in direction with the $t$-interval: a percentile bootstrap interval of [−1.705, −0.518] and a Wilcoxon signed-rank $p=1.1\times10^{-4}$.

![Primary contrast per test world](figures/wp1_fig1_primary_delta.png)

*Figure 1.* $\Delta_i$ for the 40 test worlds, sorted, with the mean. The shaded band is the 95% confidence interval **for the mean**, not a range that individual worlds should fall in. Source: `f0c_confirmatory.json`. [R, confirmatory]

### 3.2 The ecological side of the ledger [R, confirmatory]

The secondary family shows the other side of the comparison.

| Contrast | Mean | 95% CI (unadjusted) | Holm-adjusted $p$ | Lower on this criterion |
|:---|---:|:---|---:|:---|
| $\Delta J_{U2}$ (cost units) | −1.061 | [−1.734, −0.388] | 0.0028 | REP |
| $\Delta J_{def}$ (deficit units over 11 periods) | +6.362 | [+4.235, +8.489] | 1.3 × 10⁻⁶ | COMP |
| $\Delta J_{stock}$ (negative terminal wetland level) | +1.543 | [+1.056, +2.030] | 5.6 × 10⁻⁷ | COMP |
| BOTH(R) − REP(R), $J_{U1}$ | +1.603 | [+0.992, +2.214] | 9.6 × 10⁻⁶ | REP |

The intervals are ordinary 95% intervals and are not adjusted for multiplicity. Only the $p$-values are Holm-adjusted.

- On the distribution-sensitive cost, REP's advantage is about the same as on U1.
- COMP leaves less cumulative wetland deficit and more wetland at the end of the horizon.
- Re-modelling *and* re-valuing (BOTH) cost more U1 than re-modelling alone. BOTH's ecological outcomes were not part of the test.

![Prespecified criterion contrasts](figures/wp1_fig2_criterion_contrasts.png)

*Figure 2.* Prespecified contrasts, each on its own scale. Source: `f0c_confirmatory.json`. [R, confirmatory]

### 3.3 A comparison of packages, not a verdict on model repair [IP]

Two features of the result protect it from a tempting misreading.

**REP is an assumption, not a discovery.** In the half of the weighting where retention is absent, REP plans on a wrong model, and its U1 is still lower than COMP's (branch mean −1.125, 95% CI −2.126 to −0.124, a descriptive subgroup). Being wrong about the world was cheaper on U1 than paying for the ecological objective.

The 40-world regret decomposition, an exploratory reading of the frozen tables (Appendix B, T4), gives the reason:

- REP's misspecification cost in that branch is +1.765 U1;
- COMP's objective price is +2.890;
- the development worlds gave the same ordering (1.06 against 2.42).

The result is therefore an objective-mismatch comparison. It is not evidence that the planner *found* the right model.

**The contrast changes two things.** Moving from COMP to REP adds a mechanism to the model *and* removes the ecological term from the objective. The confirmed difference belongs to that package. It cannot be attributed to "better modelling" alone, and it says nothing about whether *spending* on better models beats spending on objectives or information. No such spending was modelled.

### 3.4 What the trade-off does and does not establish

**[R, derived from the confirmatory tests]** For the prespecified REP(R)-versus-COMP comparison, under the hypothetical equal weighting, the mean differences point in opposite directions on the named criteria:

- REP has lower U1 and U2;
- COMP has lower cumulative deficit and higher terminal stock.

Neither of these two policies is uniformly preferable. This is a logical combination of the four results, not a further test.

It says nothing about all strategies. In the exploratory tables, the heuristic MIX(R, q) has a lower equal-weight mean U1 than either pure F0 plan: 6.465–6.638, against 6.967 when retention is omitted and 6.924 when it is assumed (Appendix B, T5). REP thus beats COMP on U1 but is not the U1-best policy that was evaluated.

That MIX result has limits. MIX is not a correct plan for a fixed but unknown world, and the comparison is exploratory, with world means only.

