## 2. What is represented, what is optimized, what is observed

### 2.1 The flood model

The model is the A1 three-municipality flood system, with A1's solver, accounting and evaluation criterion unchanged.

**Municipalities.** Two upstream municipalities and one downstream municipality. We call them Up1, Up2 and Dn, to avoid a clash with the criteria names U1 and U2.

**State.** 31,104 states in total, made up of:

- each municipality's budget level and flood-protection capacity;
- each upstream municipality's wetland level $w_i\in\{0,1,2\}$;
- a wet/dry regime.

**Actions.** In each of the eleven periods:

- each upstream municipality may hold, build protection, or restore wetland;
- the downstream municipality may hold, build, or co-fund upstream restoration;
- a pool option $o\in\{0,1\}$, chosen once, buys into a regional relief pool for a fee.

**Rain.** Rain falls at one of three levels in each upstream catchment.

**Evaluation criterion U1.** U1 charges spending and pool fees, residual flood damage after relief, a budget-shortfall penalty, and monetised harm, with a terminal salvage value. U2 adds a penalty on the largest single-municipality residual damage. U2 is a simple distribution-sensitive variant, not a complete account of fairness.

Policies are computed by exact finite-horizon dynamic programming (Puterman, 1994), up to floating-point and tie-breaking precision. They are evaluated exactly by propagating state occupancies. Independent Monte Carlo simulation checks the evaluations statistically (Appendix C).

### 2.2 Switching mechanisms on and off

A *mask* records which of three mechanisms are present, written in the order R, S, C. Mask 111 has all three; 011 lacks retention.

| Mechanism | Present | Absent |
|:---|:---|:---|
| **R** downstream retention | the downstream flood load starts from *post-retention* upstream runoff, so upstream wetlands protect downstream | the load starts from raw upstream runoff |
| **S** peak synchronisation | a signed term proportional to the smaller upstream retention fraction adjusts the downstream load | no such term |
| **C** rainfall dependence | Gaussian-copula correlation between the two catchments' rain | independent rain, same marginals |

The *physical* mask $m^*$ describes the world. The *represented* mask $m$ describes the planner's model. All 8 × 8 combinations are evaluated within each base world.

**Planning conditions.**

- **Parameters.** Planning parameters equal the true ones ($s=0$), or are drawn from a declared perturbation ($s=0.25$, two draws).
- **Rain shift.** At evaluation the probability of heavy rain may be shifted by $\psi\in\{-0.1,0,+0.1\}$.

**Consistency with A1.** Mask 111 reproduces A1's full model exactly, and mask 000 reproduces A1's bundled narrow model exactly, array for array. The A2 test suite checks this.

**[R, structural] Exposure.** Upstream retention is proportional to wetland level. With no upstream wetland, the models with and without R produce identical transitions. The synchronisation term vanishes whenever either wetland is empty. A policy that never builds wetland therefore never enters a state in which R or S makes any observable difference.

### 2.3 What is optimized and how it is judged

**Planning objectives.**

- **F0** minimises expected U1.
- **F1-eco** adds a penalty for missing upstream wetland:

$$
\min_\pi\ \mathbb{E}_\pi\Big[\sum_{t=0}^{10} c^{U1}_t + \text{salvage}\Big]+\lambda\,\mathbb{E}_\pi\Big[\sum_{t=0}^{10} g_t\Big],\qquad g_t=\tfrac{2-w_{1,t}}{2}+\tfrac{2-w_{2,t}}{2}.
$$

  Here $\lambda=0.1\cdot\mathrm{range}(\text{cost})/\mathrm{range}(g)$ is computed on each planning model, as in A1.
- **F1-eco-fixed** holds $\lambda$ at its value on the full model. It checks that conclusions do not depend on recomputing $\lambda$.

**Evaluation criteria.** Every policy is judged on four criteria, all minimised, under the true scenario and with the policy's own pool choice:

- $J_{U1}$ and $J_{U2}$: the costs defined in §2.1;
- $J_{def}=\mathbb{E}\sum_t g_t$: the cumulative upstream wetland deficit;
- $J_{stock}=-\mathbb{E}[w_1+w_2]$ at the end of the horizon: the negative terminal wetland stock.

Each criterion has its own exact oracle.

### 2.4 Two changes at once: the policy packages

For a mechanism $X$ and a baseline mask $m_0$ lacking it, four strategies form a 2 × 2.

|  | objective F0 | objective F1-eco |
|:---|:---|:---|
| model $m_0$ ($X$ omitted) | OMIT | **COMP** (re-value) |
| model $m_0\cup X$ ($X$ assumed) | **REP**($X$) (re-model) | BOTH($X$) |

The confirmatory contrast compares the two highlighted cells, for $X=R$ and $m_0=011$:

$$
\Delta_i=\tfrac12\sum_{m^*\in\{111,\,011\}}\Big[J_{U1}\big(\pi^{F0}_{111};m^*\big)-J_{U1}\big(\pi^{F1\text{-eco}}_{011};m^*\big)\Big].
$$

- **What it averages.** Each world $i$ contributes the average over retention present and absent, with equal hypothetical weight.
- **Sign.** $\Delta_i<0$ means REP had the lower U1.
- **A package contrast.** The comparison changes *both* the represented mechanism *and* the objective. It estimates the difference between two policy packages, not the isolated effect of either change. The other two cells of the 2 × 2, and a regret decomposition, are used below to interpret it.

**MIX.** A further benchmark plans with F0 on a per-period average of the two models, with weight $q$ on the model with $X$. It is a heuristic, not an optimal plan for a world whose mechanism is fixed but unknown.

### 2.5 Where regret comes from

For a strategy evaluated on criterion $J$ in a given scenario, regret against the $J$-oracle splits into three terms:

$$
J(\pi_a)-J(\pi_d)=\underbrace{[J(\pi_a)-J(\pi_b)]}_{\text{representation}}+\underbrace{[J(\pi_b)-J(\pi_c)]}_{\text{parameters and shift}}+\underbrace{[J(\pi_c)-J(\pi_d)]}_{\text{objective}}.
$$

The policies are:

- $\pi_a$: the deployed strategy;
- $\pi_b$: the same objective on the correct mechanisms;
- $\pi_c$: the same objective with correct mechanisms and parameters;
- $\pi_d$: the $J$-oracle.

The parameter term is exactly zero at $s=0,\psi=0$. These are order-dependent accounting components, not unique causal effects.

### 2.6 Evidence design

| Stage | Worlds | Role |
|:---|:---|:---|
| Gate C pilot | 8 development worlds | exploratory omission factorial |
| Exposure and learning studies | preselected development worlds | exploratory |
| Development run | 16 development worlds | sample-size planning |
| **Confirmatory test** | **40 worlds**, independently and uniformly drawn over the frozen parameter ranges from a reserved random stream, once code and configuration were frozen | **confirmatory** |

**Confirmatory test.**

- **Primary test:** a two-sided one-sample $t$-test of mean $\Delta$ (df 39).
- **Precision target:** a 95% CI half-width of 0.50 U1. The development standard deviation implied fewer than 40 worlds, so the declared floor of 40 applied.
- **Secondary family:** four tests, Holm-adjusted (Holm, 1979): $\Delta$ on $J_{U2}$, $J_{def}$ and $J_{stock}$, and BOTH(R) − REP(R) on $J_{U1}$.
- Everything else in the factorial was declared descriptive or is exploratory.

**Discipline.** As in Working Paper 0:

- declarations were timestamped before runs;
- failed verification gates were kept as failures and corrected only by newly declared gates;
- the reserved test stream could be derived only once, by an authorised stage.

Appendix C gives the provenance record, including its limits.

