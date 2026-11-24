## Appendix C: Historical Investment-Policy Simulation — Corrected Specification

### C.1 System Description

This appendix documents the recovered `paper_vi_value_function_collapse.py` supplied by the author. The original printed equations did not match the implementation. The following specification is the code rerun in November 2026, not a reconstructed or fitted model.

Let $W_t$ denote modeled wealth, $E_t$ modeled environmental integrity, $I_t$ investment. Define $m_t=\min_{0\leq s\leq t}E_s$, with regeneration multiplier $q_t=1$ if $m_t>40$, and $q_t=0.2$ otherwise. Write $E_{\mathrm{base}}=100$ for the code's `E0`, distinct from the initial state $E_{t=0}=90$. The updates are

$$W_{t+1}=\max\{0,(1-\delta_W)W_t+\alpha E_t I_t\},$$

$$E_{t+1}=\max\{0,E_t-\beta I_t+\gamma q_t(E_{\mathrm{base}}-E_t)-\eta W_t\}.$$

Damage is contemporaneous and negative. Hysteresis is permanent in the modeled history; the floors are explicit. These are synthetic dynamics, not calibrated ecological or economic laws.

### C.2 Bundled Controllers

Let $W_{\mathrm{obs}}=W_t+\epsilon_W$ and, for the environment-aware rule only, $E_{\mathrm{obs}}=E_t+\epsilon_E$. Noise is Gaussian. The fixed rules are

$$I_1=\max\{0,I_0+K(W^*-W_{\mathrm{obs}})\},$$

$$I_2=\max\{0,[I_0+K(W^*-W_{\mathrm{obs}})](E_{\mathrm{obs}}/E_{\mathrm{base}})^2\}.$$

These are not solutions to an optimization problem. The earlier labels $J_1=W$ and $J_2=W+\lambda E$ are nominal evaluations; the declared $\lambda$ is unused. The comparison changes both sensing and policy, with no learning or model revision. Damping multiplies the whole expression and is quadratic, not sigmoidal. In this run it restrains investment at low $E$; it is not a general safety guarantee.

### C.3 Parameterisation and Run

| Parameter | Implemented value |
|---|---:|
| Recorded states / transitions | 500 / 499 |
| Initial wealth / environment | 60 / 90 |
| $\alpha,\delta_W,\beta$ | 0.3, 0.05, 0.25 |
| $\gamma,\eta$ | 0.05, 0.02 |
| $E_{\mathrm{base}},W^*,I_0,K$ | 100, 120, 5, 0.5 |
| Observation noise SDs $\sigma_W,\sigma_E$ | 1, 0.5 |
| Declared unused $\lambda$ | 1.5 |
| Seed | 2024 |

One NumPy generator is shared sequentially, first by rule 1, then by rule 2; draws are not matched across arms. Noise enters observations, not state updates. Investment and states have lower floors of zero and no upper caps. The final investment entry is an unexecuted zero placeholder. The collapse marker is first $E<30$, distinct from the permanent regeneration switch at $E\leq40$.

### C.4 Reproduced Outcomes and Diagnostics

![Figure C.1](/working-papers/images/the-variety-gap/appendix-c-simulation.png)

*Figure C.1.* Replotted fresh-run trajectories of the recovered script; the separate deterministic constant-investment comparator uses the same plant. Neither legacy arm maintains healthy environmental integrity. Values are model units.

| Metric | Wealth-only rule | Environment-aware rule |
|---|---:|---:|
| Peak $W$ | 988.11 | 798.93 |
| First $E<30$ | 4 | 6 |
| First $E=0$ | 6 | 8 |
| States with $E<30$ | 496/500 | 494/500 |
| Mean $W$, last 50 | approximately 0 | 37.29 |
| Mean $E$, last 50 | 0 | 11.06 |
| Final $E$ | 0 | 11.12 |
| Script severity score | 1.00 | 0.79 |

The severity score averages the nonnegative shortfalls of final-50-state mean wealth relative to $W^*$ and environment relative to $E_{\mathrm{base}}$, each divided by its reference. It is a descriptive statistic, not a welfare function. Both rules reach zero environmental integrity; the second never returns to $E\geq30$. Its partial recovery to a degraded regime is not prevention of collapse.

Initial investments are 34.49 and 27.48. The initial wealth jumps put both rules above target; both invest exactly zero at $t=1$ through $t=40$ (wealth-only) and $t=36$ (environment-aware), respectively, well beyond their first threshold crossing. During this window the $-\eta W_t$ term drives environmental decline, not a difference in active damping. Initial investments differ because of damping and different noise draws; later investment rules matter during recovery. At $E=0$ and low $W$, the first rule invests about 65: investment damage alone is about 16.25 against about one unit of regeneration. Without investment at that state, and with negligible wealth, regeneration is positive. The first rule maintains the lock-in; hysteresis alone does not force it. The second rule restrains investment at low $E$ and permits partial recovery.

A post-hoc diagnostic negative control, not an optimized policy or preregistered experiment: constant investment $I_t=0.5$ with no sensing under the same plant and initial conditions gives minimum $E=41.19$ and final $(W,E)\approx(132.95,44.32)$. It never activates the regeneration switch and exceeds both legacy arms in final wealth and environment. Direct environmental sensing is not necessary for these particular outcomes. Its undiscounted wealth sum is 67059.92, but its sums with discounts 0.99 and 0.95 are 13585.06 and 2609.69, respectively, below both legacy rules. Its cumulative undiscounted wealth first exceeds rules 1 and 2 at steps 144 and 126, respectively. In additional deterministic spot checks, constant investments 0.3, 0.4 and 0.5 avoid the regeneration switch, but 0.55 reaches zero environmental integrity. Thus the successful comparator is sensitive to a small parameter change; neither general robustness nor optimality is established.

### C.5 What the Comparison Establishes

Pointwise wealth of rule 2 exceeds rule 1 from $t=80$ through the end; cumulative undiscounted wealth first exceeds it at $t=191$. Across all 500 states undiscounted sums are 19822.21 and 31338.49. With per-step discount 0.99 the sums are 16500.83 and 14837.02; with 0.95 they are 9687.74 and 7852.30. These include the initial state. Ranking depends on horizon and evaluation. Rule 2 is admissible for a wealth-only evaluator granted the same observations and action set; it is not evidence for the necessity of an environmental objective.

Given known parameters and noiseless wealth readings, if $I_t>0$ the wealth update implies

$$E_t=\frac{W_{t+1}-(1-\delta_W)W_t}{\alpha I_t}.$$

The wealth floor does not change this nonnegative update. With independent additive observation errors of fixed SD $\sigma_W$ and fixed nonzero input, the plug-in error SD is $\sigma_W\sqrt{1+(1-\delta_W)^2}/(\alpha I_t)$. Because input depends on the noisy observation, the fixed-input formula is an approximation in closed loop; at zero investment direct inversion is unavailable. Neither legacy rule implements this estimator. Lack of direct sensing does not establish lack of dynamic information.

### C.6 Reproducibility and Scope

The recovered script is archived unchanged. Fresh headless runs reproduce the reported peak and tail levels. The historical commit, original PNG and original trajectory arrays were not recovered, so this is not strict historical figure reproduction. The revised figure uses archived fresh-run arrays; generating code and diagnostic computations are supplied with the correction. No new factorial optimization experiment was undertaken. The constant-investment comparison is a bounded post-hoc check. Conclusions are restricted to these rules, parameters and scoring conventions.

---
