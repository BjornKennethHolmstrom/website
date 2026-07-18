# Appendix A — Proofs and derivations

## A.1 Homogeneous thresholds and the loop decomposition

At $f \approx 0$ with intact competence $c_0$, consolidation begins when $U_S > U_I$ for the representative organization: using $E_S(0) = b^2$, $E_I(0) = \mathbb{E}[x_0]$, and collecting the cost and liability constants into $\Delta C = C_I + L_0 - C_S$ (the ratchet term $L_1 f$ vanishing at $f = 0$), this gives $\theta_{\mathrm{entry}} = b^2 - \mathbb{E}[x_0] - \Delta C$. At $f \approx 1$ with competence relaxed to $c_*$: $E_S(1) = 0$, $E_I(1) = b^2 + \mathbb{E}[x_*]$, ratchet at full weight, giving $\theta_{\mathrm{exit}}^{\mathrm{mean}} = -b^2 - \mathbb{E}[x_*] - \Delta C - L_1$. Subtracting yields Eq. (4), using $x = \sigma^2/c^2$ and the common competence values. The competence fixed point under shared use solves $\rho(1-c) = \delta c$, giving Eq. (2). *Entry invariance:* $\theta_{\mathrm{entry}}$ contains no $\delta$-dependent quantity, since decay acts only on consolidated organizations and the upward branch approaches entry from $f \approx 0$ with $c = c_0$; hence $\partial\theta_{\mathrm{entry}}/\partial\delta = 0$, while $\partial\theta_{\mathrm{exit}}/\partial\delta = -\mathbb{E}[\sigma^2]\,\partial(1/c_*^2)/\partial\delta < 0$. *Additivity identity:* $\delta$ enters $\theta_{\mathrm{exit}}$ only through $\mathbb{E}[x_*]$ and $L_1$ only as the additive final term; the cross-partial $\partial^2\theta_{\mathrm{exit}}/\partial\delta\,\partial L_1$ vanishes identically, so any interaction measured in this reduction is zero by construction.

## A.2 The monotone-cascade lemma

$A(x, f) = b^2(1-2f) - L_1 f - x - \Delta C - \theta$ has $\partial A/\partial f = -(2b^2+L_1) = -\Lambda < 0$ for all $x$. Under asynchronous strict best response at fixed $\theta$ and frozen competence, with ties not triggering defection: each defection lowers $f$, which strictly raises $A$ for every organization, defectors included; a defector's advantage was positive at defection and only grows, so reversion is never a best response. And if the $k$-th cheapest organization is infeasible at the current $f$, every more expensive organization is also infeasible at that $f$. The cascade therefore has a unique closure, obtained by evaluating organizations in penalty order, independent of the asynchronous update sequence. ∎

## A.3 The escape-ladder theorem

By A.2 evaluate the cascade in penalty order. Before any defection $f = 1$; after $k-1$ defections $f = 1-(k-1)/N$, and the $k$-th cheapest organization's advantage is

$$
A\!\left(y_k,\; 1-\tfrac{k-1}{N}\right)
= b^2\!\left(-1+\tfrac{2(k-1)}{N}\right) - L_1\!\left(1-\tfrac{k-1}{N}\right) - y_k - \Delta C - \theta
= \vartheta(\theta) + (k-1)\Delta - y_k,
$$

with $\vartheta(\theta) = -\theta - b^2 - L_1 - \Delta C$ and $\Delta = \Lambda/N$. The $k$-th defection is feasible iff this is positive, i.e. $y_k < \vartheta + (k-1)\Delta$. Since $y$ is nondecreasing and the credit is linear, the cascade halts at the first violation, $K^*(\theta) = \min\{k : y_k \ge \vartheta + (k-1)\Delta\} - 1$ with $\min\varnothing := N+1$. The shared fraction reaches $f \le \tfrac12$ iff $K^* \ge \lceil N/2\rceil$, i.e. iff every rung $k \le \lceil N/2\rceil$ is feasible, i.e. iff $\vartheta(\theta) > M_N$. ∎

*Corollary (i):* $y_k \equiv \mathbb{E}[x]$ gives $y_k - (k-1)\Delta$ maximal at $k = 1$, $M_N = \mathbb{E}[x]$, reproducing A.1's exit. *(ii):* if $y_k - y_1 < (k-1)\Delta$ for all $k$ then every bracket lies below $y_1$ except $k = 1$; $M_N = y_1$. *(iii):* for $\theta$ with $\vartheta(\theta)$ between consecutive distinct values of the violation sequence, $K^*(\theta)$ is constant with $0 < K^* < \lceil N/2\rceil$; by A.2 the corresponding mixed configuration is a fixed point, stable under the dynamics since no feasible defection or reversion remains — the staircase. *(iv):* set $k = \lceil qN\rceil$; by Glivenko–Cantelli and continuity of $Q_x$ on compact sub-intervals of $(0, \tfrac12]$, $y_{\lceil qN\rceil} \to Q_x(q)$ uniformly and $(k-1)\Delta \to q\Lambda$, giving Eq. (8); the supremum over the open lower end is controlled in application by the finite-$N$ cutoff $q \ge 1/(N{+}1)$. ∎

## A.4 The phase criterion

**Exact finite-$N$ criterion.** From the theorem, the ladder binds beyond its first rung — $k^* > 1$ — iff $\exists k \ge 2$ with $y_k - y_1 > (k-1)\Delta$. Taking expected order statistics at their quantile positions $k/(N{+}1)$ yields the registered classifier, Eq. (9), evaluated per cell with no fitted boundary.

**Continuum secant condition.** With $q_0 = 1/(N{+}1)$ and $k-1 \approx (q-q_0)N$, the binding condition becomes Eq. (10): some secant slope of $Q_x$ measured from $q_0$ must exceed $\Lambda$, up to the finite-$N$ factor $(N{+}1)/N$.

**Quantile density as local diagnostic.** If the secant condition holds on $[q_0, q]$, the mean value theorem supplies a point where $QD_x > \Lambda$; the converse fails in general, since a local density excess need not produce a secant excess from $q_0$ when the intervening quantiles are low. $QD_x$ therefore locates where the credit line can be outrun; Eqs. (9)–(10) decide whether it is.

**Lognormal analysis.** $Q_x(q) = (\sigma_0^2/c_*^2)\,e^{2h z_q}$; $QD_x(q) = (\sigma_0^2/c_*^2)\, 2h\,\sqrt{2\pi}\; e^{2h z_q + z_q^2/2}$. As $h \to 0$, spacings vanish and Eq. (10) fails: tail regime. For the finite even-$N$ designs simulated, all rungs sit at $q < \tfrac12$, so as $h \to \infty$ every $Q_x$ value on the ladder carries $e^{2h z_q} \to 0$ and Eq. (9) fails again: tail regime. In the continuum, $Q_x(\tfrac12) = \sigma_0^2/c_*^2$ is $h$-invariant, and the high-$h$ secant to the median approaches $2\sigma_0^2/c_*^2$; the return to the tail phase then requires $\sigma_0^2/c_*^2 < \Lambda/2$, which holds at the frozen parameters. At intermediate $h$ the density is maximal at low quantiles and the secant condition holds for the simulated parameter values: ladder regime. Larger $N$ lowers $q_0$ into the region where the $z_q^2/2$ factor inflates the density, the monotone $N$-dependence of the phase probability. ∎

## A.5 Sweep composition

For a downward sweep $\{\theta_j\}$ with $T$ evaluations per step and per-step escape hazard $\lambda(\theta_j)$, survival to the end of step $j$ is $\exp\bigl(-T\sum_{m\le j}\lambda(\theta_m)\bigr)$ under the exponential reduction; the median exit is the first $\theta_j$ with cumulative hazard at least $\ln 2$. No parameter of this expression is fitted to sweep data; $\lambda$ is estimated at fixed $\theta$ on independent trials (split-half validated, §5.2), and predictions are composed per population before aggregation (§5.3).

---

