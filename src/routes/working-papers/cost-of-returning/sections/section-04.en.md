## 4. The tail–ladder phase diagram

### 4.1 When does the ladder bind?

Corollary (ii) says the ladder collapses to the pure tail when spacings are small against the credit; the interesting question is where in parameter space the ladder is load-bearing — where the binding rank $k^* = \arg\max_k [y_k - (k-1)\Delta]$ exceeds one, so that escape is genuinely constrained by followers rather than by the nucleus. The exact criterion is read off the theorem. **Finite-$N$ quantile-ladder criterion:** in expectation over draws, the ladder binds beyond its first rung iff the quantile ladder rises above the recruitment-credit line at some rung, i.e.

$$
\exists\, k \in \{2, \ldots, \lceil N/2\rceil\}:
\quad
Q_x\!\left(\frac{k}{N+1}\right) - Q_x\!\left(\frac{1}{N+1}\right)
\;>\;
(k-1)\,\Delta.
\tag{9}
$$

Its continuum form is a **secant-slope condition**: with $q_0 \approx 1/(N{+}1)$,

$$
\sup_{q \in (q_0,\, 1/2]}
\left[\, Q_x(q) - Q_x(q_0) - \Lambda\,(q - q_0) \,\right] > 0,
\tag{10}
$$

that is, some *average* quantile slope measured from the favorable tail must exceed $\Lambda$. The pointwise quantile-density comparison $QD_x(q) > \Lambda$ is the local diagnostic: by the mean value theorem it must hold somewhere if the secant condition holds, so it identifies *where* the credit line can be outrun, but it is not in general sufficient, because the ladder condition depends on the integrated spacing from the first order statistic. Every quantity in Eqs. (9)–(10) is fixed by the model specification before any simulation is run: the criterion has no fitted phase boundary.

### 4.2 The non-monotone heterogeneity dependence, derived

For the lognormal penalty family, $x = (\sigma_0^2/c_*^2)\,e^{2hZ}$, the quantile function is $Q_x(q) = (\sigma_0^2/c_*^2)\,e^{2h z_q}$ with $z_q$ the standard-normal quantile, and its density $QD_x(q) \propto 2h\, e^{2h z_q + z_q^2/2}$. The behavior of the secant condition on the admissible range produces exactly the phase structure the simulation found, for reasons worth stating carefully because an earlier cycle of this study misstated them. As $h \to 0$ the spacings vanish and the ladder cannot bind: channels are interchangeable and the first defection recruits all others — the tail regime, trivially. As $h$ grows large, the factor $e^{2h z_q}$ with $z_q < 0$ collapses the *absolute* scale of every below-median penalty: for the finite even-$N$ designs simulated here, all rungs sit at quantiles strictly below $\tfrac12$, so the entire ladder compresses toward zero faster than the linear credit line, spacings included, and the ladder goes slack again. The tail regime at extreme heterogeneity is therefore *not* a matter of the exceptional nucleus recruiting more strongly — the credit $\Delta$ is blind to who defects — but of the followers becoming absolutely cheap. In the continuum limit the statement acquires a parameter condition, because the median rung $Q_x(\tfrac12) = \sigma_0^2/c_*^2$ is $h$-invariant: the high-$h$ secant from the tail to the median approaches $2\sigma_0^2/c_*^2$, so the return to the tail phase as $h \to \infty$ requires

$$
\frac{\sigma_0^2}{c_*^2} < \frac{\Lambda}{2},
$$

which holds at the frozen parameters ($0.102 < 0.278$) but is a condition, not a law: a larger baseline penalty scale would leave the median rung binding even at extreme heterogeneity — a further phase condition rather than a defect of the derivation. Between the two collapses, at intermediate $h$, the ladder binds: a good first channel defects while later channels remain too costly for the accumulated credit, and escape is constrained by propagation.

![Intermediate heterogeneity separates tail nucleation from cascade propagation](/working-papers/images/cost-of-returning/ladder-h-sweep.png)
*Figure 4.1 — Observed half-exit against homogeneous, pure-tail, and ladder predictions across heterogeneity. The ladder is most distinct from the pure tail at intermediate $h$.*

The $N$-dependence enters through the admissible lower endpoint: larger $N$ pushes $q_0 = 1/(N{+}1)$ into the region where the $z_q^2/2$ term inflates the quantile density, so the probability that the ladder binds rises with $N$ at fixed $h$. The same geometry completes the explanation of the flat $N$-curve that falsified this study's earlier order-statistic prediction. Raising $N$ improves the favorable tail — $y_1$ falls — but weakens each defection's recruitment credit as $\Lambda/N$, and in the observed thresholds the two effects nearly cancel: at $h = 0.15$ the measured half-exit moves by less than $0.01$ in $\theta$ across $N$ from 20 to 1000, while the pure-tail prediction moves by three times that. The ladder functional, which prices both effects, tracks the observed thresholds where the pure tail does not: in the ladder-dominated regime the ladder's mean absolute exit error is $0.0089$ against $0.0145$ for the realized pure tail and $0.0523$ for the population mean, with median binding rank $k^* \approx 10$ — roughly ten defections must be supportable before the ensemble can reach half shared adoption.

![More possible nuclei, but weaker recruitment per defection](/working-papers/images/cost-of-returning/ladder-N-sweep.png)
*Figure 4.2 — The near-flat $N$-dependence: the improving tail and the weakening per-defection credit price against each other in the ladder functional.*

### 4.3 The classification test

The criterion of §4.1 was then put to the registered test that motivates calling the phase structure a result rather than a scan: reproduce the empirical $(N \times h)$ phase map — each cell's Monte Carlo estimate of $P(k^* > 1)$, thresholded at $\tfrac12$ — from the finite-$N$ quantile-ladder criterion alone, with nothing fitted. The criterion classifies 55 of 56 frozen cells (98.2%). The single error is the cell $N = 500$, $h = 0.60$, where the empirical $P(k^* > 1) = 0.543$ sits $0.043$ above the majority threshold while the quantile classifier remains tail-side: the criterion errs only where its own quantity is closest to indifference. The three anchor regimes, registered in advance, behave as predicted:

| Regime | Empirical $P(k^* > 1)$ | Analytic phase |
|---|---:|---|
| $N = 20$, $h = 0.15$ (Paper X scale) | 0.015 | tail-dominated |
| $N = 1000$, $h = 0.15$ | 0.997 | ladder-dominated |
| $N = 1000$, $h = 0.80$ | 0.215 | tail-dominated (returned) |

![Empirical ladder phase with analytic boundary](/working-papers/images/cost-of-returning/final-phase-map.png)
*Figure 4.3 — Monte Carlo $P(k^* > 1)$ over the frozen $N \times h$ grid with the analytic boundary overlaid; the single misclassified cell lies on the boundary itself.*

![Median binding rank of the escape ladder](/working-papers/images/cost-of-returning/final-binding-rank-map.png)
*Figure 4.4 — Median binding rank $k^*$ over the same grid: the quantitative companion to the phase map.*

Two readings of the map belong here rather than in §7 because they are structural rather than interpretive. First, at the ensemble sizes Paper X actually models — tens of observer organizations — the tail regime governs: the reversibility of the monoculture is carried almost entirely by its single best-preserved channel, an order-statistic dependence that is the recovery-side sibling of Paper X's coverage arithmetic, where the first few protected observers carry nearly all detection capacity. Second, the quantity $\Lambda = 2b^2 + L_1$ appears on both sides of the ledger. It is the per-rung recruitment credit — the amount by which each defection liberates the rest — and it is built from exactly the two forces that deepen lock-in: the consensus-constitution bias and the liability ratchet. Conditional on a viable first defector, the forces that make the monoculture hard to leave are the same forces that make its unraveling fast. The governance reading of both points is deferred to §7 and carries **[IP]**; within the model they are exact.

---

