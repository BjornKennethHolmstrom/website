## 5. Institutional time and the escape hazard

### 5.1 The threshold is protocol-dependent, and the first law proposed for it failed

The escape-ladder theorem of §3 is deterministic: it gives the $\theta$ below which the cascade *can* run. The simulated system, like any institution, is stochastic and finite in time, and its measured exit depends on how long it lingers at each condition. Sweeping $\theta$ downward with $T$ evaluations per step in the Paper X-scale regime ($N = 20$, $h = 0.15$, decay and ratchet on), the median observed exit moves from $-1.130$ at $T = 10$ to $-1.050$ at $T = 300$: an institution given more time at each condition escapes under weaker pressure. The first registered account of this — an affine law in $\ln T$ — failed its preregistered criterion ($R^2 = 0.9314$ against a registered $0.95$): the shift per log-unit of time shrinks at long dwell, and an unbounded logarithm cannot saturate. The failure is retained in the ledger (§7.4) and forced the replacement that follows, which fits nothing.

### 5.2 Measured hazards

Instead of fitting a dwell law, the final study measures the escape process directly. At each fixed $\theta$ on a grid spanning the transition region, populations held in full consolidation are run until first escape, many trials per population, and a single-rate (exponential) survival model is estimated per population on half the trials and tested on the held-out half. The registered criterion applied to the overall held-out survival-curve mean absolute error and passed comfortably: $0.0538 < 0.12$ **[R within the model]**. The estimated hazard is steep in the institutional environment: $\lambda \approx 2.7\times10^{-4}$ per evaluation at $\theta = -1.02$, $6.8\times10^{-3}$ at $-1.10$, and $0.176$ at $-1.17$ — three orders of magnitude across $0.15$ in $\theta$, which is why the deterministic ladder threshold remains the right first-order object even though the observed exit is a first-passage quantity.

![Fixed-theta escape hazard](/working-papers/images/cost-of-returning/final-hazard-curves.png)
*Figure 5.1 — Escape hazard per evaluation at fixed $\theta$ (median across populations, interquartile band). The hazard spans three orders of magnitude across the transition region.*

Pointwise error nevertheless peaks at $0.119$ near $\theta = -1.05$, the shallow edge of the region. That peak was not a separate registered threshold, but its location is diagnostically important, and it is consistent with the expected failure mode of a single-rate reduction: near the shallow boundary, escape involves unsuccessful nucleations and partial cascades, so waiting times need not be exponential, and early survival can be flatter than a single rate allows. The exponential is therefore an operational reduction with a stated scope — reliable in the steep region, degrading predictably toward the ceiling — and the paper claims it as nothing more.

![Held-out hazard validation](/working-papers/images/cost-of-returning/final-hazard-validation.png)
*Figure 5.2 — Held-out survival-curve error of the exponential reduction across the $\theta$ grid, against the registered limit on the overall mean. Pointwise error peaks at the shallow edge, where escape is multi-stage.*

### 5.3 Composition: the sweep as accumulated opportunity

If institutional time acts as accumulated escape opportunity and nothing else, the measured fixed-$\theta$ hazards must *compose* into the swept thresholds of §5.1 with no further fitting. For a downward sweep visiting $\theta_1 > \theta_2 > \cdots$ with $T$ evaluations each, the cumulative hazard after step $j$ is

$$
H_j(T) = T \sum_{m \le j} \lambda(\theta_m),
\tag{11}
$$

and the predicted median exit is the first $\theta_j$ at which $H_j \ge \ln 2$. Two registered tests apply this. The *population-conditional* test composes each population's own hazard curve into its own predicted exit and compares per population: mean absolute error $0.0029$ in $\theta$. The *new-population* test likewise composes each training population's own hazard curve into a predicted exit, takes the median of those population-specific predictions, and compares it with the median exit of entirely fresh population draws: error $0.0050$ — exact at dwell 10 and 30, one grid interval shallow at dwell 100 and 300. Because grid quantization makes the median of the per-population predictions coincide numerically with the prediction obtained from a median hazard curve, the aggregation correction appears in the distribution of predicted exits rather than in the point median. **[R within the model]**

![Hazard-composed sweep prediction](/working-papers/images/cost-of-returning/final-sweep-composition.png)
*Figure 5.3 — Fixed-$\theta$ hazards, measured independently and composed per population with no fitted dwell parameters, against observed medians on new population draws.*

The residual long-dwell bias is consistent with two effects of the same sign — shallow-region non-exponential waiting times (§5.2), and finite-sample population frailty, since the populations still consolidated at long dwell are selectively the low-hazard ones. Their contributions are not separately identified here; the population-conditional test, which removes sampling variation across populations, is the clean statement of the section's claim:

> Institutional time changes the observed return threshold by accumulating escape opportunity. The deterministic ladder does not move; what moves is the probability of having used it.

---

