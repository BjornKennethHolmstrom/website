## 3. The four self-contained collapses

Each lens is reported as an independent formal object. They are *not* unified in this section; the unification is the separate, weaker claim of §4.

### 3.1 Control theory — persistent excitation

**Native term:** persistent excitation (richness of the regressor `φφᵀ`).
**Direction:** falls. As the controller minimizes tracking cost, it suppresses input components not needed for reference-following, starving the identification of the signal richness it requires.
**Escape:** the capacity does not fall iff the *reference signal* `r(t)` is itself persistently exciting of order ≥ the number of unknown parameters — i.e. richness is injected from outside the control law.
**Minimal form:** under the optimal tracking law, if `r(t)` is not persistently exciting of order *n*, the time-averaged `∫ φφᵀ` becomes singular; otherwise it stays uniformly positive-definite.
**Failure mode:** closed-loop suppression of the identification channel.

The source term is `r(t)`. The controller cannot make its own reference exciting — that is what makes it the reference. **Strictly exogenous.**

### 3.2 Evolutionary biology — standing genetic variance

**Native term:** standing additive genetic variance, `V_A`.
**Direction:** falls. Directional selection drives favored alleles toward fixation and depletes additive variance in the selected trait.
**Escape:** does not fall when mutational input `V_m` (and/or recombination releasing hidden variance, and/or fluctuating selection) offsets the depletion.
**Minimal form:** `ΔV_A ≈ V_m − (selection term)·V_A − (drift term)·V_A`; variance declines unless input or fluctuation balances it.
**Failure mode:** regime-dependent — stability depends on environmental volatility.

The source term is `V_m` plus environmental fluctuation. Crucially, mutation rate is itself a *heritable, selectable parameter*: the optimizer can in principle act on it. **Contestably endogenous.**

### 3.3 Institutional economics — threat of entry

**Native term:** threat of entry, `T`.
**Direction:** falls. The payoff-maximizing incumbent raises barriers `B`, lowering the probability of displacement.
**Escape:** does not fall when raising `B` would cost the incumbent more than it gains (`∂π/∂B ≤ 0`), or when `B` is fixed by technology, law, or credible external enforcement.
**Minimal form:** `∂T/∂B < 0`, holding unless `∂π/∂B ≤ 0` or `B` is externally capped.
**Failure mode:** the preservation mechanism is itself an optimizable variable — barriers are chosen by the same agent the threat constrains.

The source term is a *constraint on `B` the incumbent does not set*. **Strictly exogenous.**

### 3.4 Decision theory — strategy / posterior support

**Native term:** support of the agent's strategy and posterior (actions and hypotheses carrying weight but not currently maximal).
**Direction:** falls. EU-maximization with Bayesian updating concentrates mass on utility-maximizing actions and high-posterior states; weight on the rest tends to zero.
**Escape:** does not fall under non-stationarity (the posterior cannot settle), under exact utility ties, or — in *some* formalizations — when the value of information on a currently-suboptimal action is strictly positive.
**Minimal form:** `w_t(a) → 0` for sub-maximal `a` in a stationary world; persists iff `VOI(a) > 0`, or ties, or non-stationarity keeps reassigning mass.
**Failure mode:** support collapse — but the location of the escape term is *unsettled within the lens* (see §4.2).

The source term is non-stationarity (exogenous) *or* VOI (read by some formalizations as an internal hedge). **Contested.**

---

