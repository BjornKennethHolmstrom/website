## 3. The escape-ladder theorem

### 3.1 What the residual demanded

The homogeneous exits of Eq. (3) use the representative penalty $\mathbb{E}[x_*]$. The finite heterogeneous system returns earlier — at shallower $\theta$ — in every cell, and the undershoot grows with $\delta/\rho$. The mechanism is visible once one asks who moves first. Exit from full consolidation is not a population-average event: it is initiated by whichever organization has the smallest realized penalty $x_i = \sigma_i^2/c_i^2$ — the best-preserved channel — and its defection changes the environment for everyone else. When that organization leaves, the shared fraction falls by $1/N$, the shared system's consensus-relative error rises, the penalty attached to choosing independence falls with $f$, and every other organization's case for independence strengthens by a fixed amount. Escape is a cascade, and the question of whether it completes is a question about the *sequence* of penalties, not their mean.

### 3.2 Setup and lemma

Fix $\theta$ and hold competence at its consolidated value (the cascade is fast relative to competence dynamics; the timescale-separation assumption is discussed below). Sort the penalties $y_1 \le y_2 \le \cdots \le y_N$. The advantage of independence for an organization with penalty $x$ at shared fraction $f$ is, from §2.1,

$$
A(x, f) = b^2(1-2f) - L_1 f - x - \Delta C - \theta.
\tag{5}
$$

Define the driving term $\vartheta(\theta) = -\theta - b^2 - L_1 - \Delta C$ (the advantage of the cheapest possible defection at $f = 1$, gross of its penalty), and

$$
\Lambda := 2b^2 + L_1,
\qquad
\Delta := \frac{\Lambda}{N},
\tag{6}
$$

the total coupling strength and the per-defection **recruitment credit**.

**Lemma (monotone cascade).** Under asynchronous strict best response at fixed $\theta$ and frozen competence, with ties not triggering defection: $A(x,f)$ is strictly decreasing in $f$ for every $x$; hence along any sequence of defections $f$ only falls, every past defector's advantage only grows, no defector reverts, and the terminal defector set is independent of the order of defection. **[R within the model]** *Proof.* $\partial A/\partial f = -\Lambda < 0$. Because defection lowers $f$, it strictly increases every organization's defection advantage, defectors included, so reversion is never a best response; and if the $k$-th cheapest organization is infeasible at the current $f$, every more expensive organization is also infeasible. The cascade therefore has a unique closure, obtained by evaluating organizations in penalty order. ∎

The lemma is what licenses everything after it: because the cascade admits no reversals and no order-dependence, its outcome is a deterministic function of the sorted penalty sequence, and that function can be written down.

### 3.3 The theorem

**Theorem (escape ladder).** Under the dynamics of the lemma, from full consolidation, the $k$-th defection is feasible iff $y_k < \vartheta(\theta) + (k-1)\Delta$, and the terminal defector count is

$$
K^*(\theta) = \min\{\, k : y_k \ge \vartheta(\theta) + (k-1)\Delta \,\} - 1,
\qquad
\min\varnothing := N+1.
$$

Consequently the shared fraction reaches $f \le \tfrac12$ — the paper's return criterion, matching the loop convention of §2 — iff $\vartheta(\theta)$ exceeds the **ladder functional**

$$
M_N = \max_{k \le \lceil N/2\rceil}\bigl[\, y_k - (k-1)\Delta \,\bigr],
\qquad
\theta_{\mathrm{exit}}^{\mathrm{det}} = -\bigl(b^2 + L_1 + \Delta C\bigr) - M_N.
\tag{7}
$$

**[R within the model]** *Proof.* By the lemma the cascade may be evaluated in penalty order. After $k-1$ defections the shared fraction is $1-(k-1)/N$ and the $k$-th cheapest organization's advantage is $A\bigl(y_k,\, 1-(k-1)/N\bigr) = \vartheta(\theta) + (k-1)\Delta - y_k$, positive iff the stated condition holds; the cascade proceeds to the first violation and stops there, no later defection being feasible since $y$ is sorted and the credit is linear. The half-adoption condition is the feasibility of all rungs $k \le \lceil N/2\rceil$, which is $\vartheta(\theta) > M_N$ by rearrangement. ∎

The functional $M_N$ is the paper's central object. The maximum identifies the hardest rung that must be crossed before half the ensemble can leave: a cheap first defector is insufficient when a later follower remains too costly relative to the recruitment credit accumulated so far.

### 3.4 Corollaries

**(i) Homogeneous limit.** Identical penalties $y_k \equiv \mathbb{E}[x]$ make the maximum bind at $k = 1$ and $M_N = \mathbb{E}[x]$: the reduction of §2.2 is recovered, exposing its exit as the spinodal of a degenerate ladder. **(ii) Pure-tail limit.** If every spacing satisfies $y_k - y_1 < (k-1)\Delta$, then $M_N = y_1$ and the exit is set by the best-preserved channel alone — the order-statistic regime, in which the first defector recruits the entire cascade. **(iii) Staircase.** For $\theta$ between consecutive violation points of the ladder, the stable configuration is *mixed*, with $f = 1 - K^*(\theta)/N$: the theory predicts partial-defection plateaus at derived locations, not merely a delayed jump. The simulation exhibits them where the theory says it must (§4): in the ladder-dominated regime the median gap between first defection and half-exit is $0.0104$ in $\theta$, and across seeds the observed plateau width correlates with the realized ladder gap $M_N - y_1$ at $r = 0.761$. A sufficiently capable channel can leave the monoculture before enough other channels are ready to follow it.

![A strong nucleus can defect before enough followers can complete the escape](/working-papers/images/cost-of-returning/ladder-staircase.png)
*Figure 3.1 — A representative staircase in the ladder-dominated regime: first defection, stable partial-defection plateau, completed escape, against the pure-tail and ladder thresholds.*

**(iv) Heterogeneous large-population limit.** Writing $Q_x := F_x^{-1}$ for the penalty quantile function, with $k = qN$ and the empirical quantiles converging to $Q_x$, the functional converges to the variational form

$$
M_\infty = \sup_{q \in (0,\, 1/2]} \bigl[\, Q_x(q) - q\Lambda \,\bigr],
\tag{8}
$$

which is $N$-independent — the deterministic half of the explanation, completed in §4, for why the observed exit threshold is nearly flat in $N$. All four: **[R within the model]**.

Since under sustained consolidation every organization's competence converges to the same $c_*$, the penalty distribution at exit is the $\sigma^2$-distribution scaled by $1/c_*^2$, so $Q_x(q) = Q_{\sigma^2}(q)/c_*^2$ and the decay knob enters the ladder exactly as it entered the homogeneous loop — multiplicatively, through $(1+\delta/\rho)^2$ — but applied now to the binding quantile rather than the mean.

**Scope.** Two assumptions bound the theorem. *Timescale separation:* competence is frozen during the cascade; this holds in the simulated system, where cascades complete in tens of evaluations against a competence timescale of $1/(\rho+\delta) \approx 125$, and becomes a stated scope condition wherever rebuilding during the cascade would be material. *Mean-field coupling:* every defection delivers its credit $\Delta$ to all organizations equally, because interaction runs through the scalar $f$; under network-structured evaluation the credit would localize and $M_N$ would become graph-dependent. Both are declared limits, not defects: the second is the natural successor question and is left as such.

---

