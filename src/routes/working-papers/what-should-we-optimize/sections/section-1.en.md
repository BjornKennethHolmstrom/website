## 1. The problem beneath the optimizer

An optimization problem appears to begin with an objective, constraints, and feasible actions. In a coupled system it begins earlier, with choices about which consequences count, which dependencies are represented, how uncertainty is encoded, and which future demands are worth preparing for. Every omitted mechanism can distort predictions. Every omitted objective dimension can distort evaluation. Every unexamined information cost can make learning look either free or impossible.

A controller need not be computationally incompetent to fail. It may solve its formal problem exactly and still do poorly in the world. This is the starting point for the **Systemic Optimization** series, which complements *Governance as Engineering* (GaE) while asking a different question. GaE considers the architecture through which institutions observe, decide, coordinate and adapt. Systemic Optimization asks how one should *construct and evaluate the optimization problem itself*, especially when coupled outcomes, future preferences, or the world model are uncertain.

The programme's guiding question is more ambitious than this paper's findings: **what structural properties of interconnected systems indicate when mutual benefit is possible, and how should knowing those properties change optimization design?** The present experiments investigate prerequisites. Only A1's exploratory fixed-programme map directly examines mutual benefit, and it does so under a strict, model-specific ledger definition. No experiment here estimates the effect of real governance reforms.

This paper is a synthesis rather than three separate experiment reports. It also includes negative findings, tests that remain inconclusive, and ways in which the diagnostics themselves fail. Numbers from A1, B and B5 are **not pooled**; they have different simulated worlds, endpoints and denominators. The scientific contribution is the comparison of failure mechanisms and remedies, not a common numerical effect size.

### 1.1 Four objects that must not be conflated

Let a finite-horizon decision problem be described schematically by

$$
\mathcal{D}=(\mathcal{S},\mathcal{A},P,u,\Gamma,\mathcal{I},\mathcal{C}),
$$

where $\mathcal{S}$ and $\mathcal{A}$ are states and feasible actions, $P$ is the transition law, $u$ is the evaluation criterion, $\Gamma$ describes uncertain future goals where relevant, $\mathcal{I}$ is the information available to the planner, and $\mathcal{C}$ describes constraints and information-acquisition costs. An implemented planner instead operates on a represented problem $\widehat{\mathcal{D}}$. It selects a policy $\pi(\widehat{\mathcal{D}})$, subsequently evaluated under the true task.

We distinguish four potential inadequacies:

1. **Objective adequacy:** does the objective being optimized usefully express the evaluation criterion? An auxiliary term may improve the realized criterion without itself belonging to it.
2. **Model adequacy:** does the planner's transition law capture the causal structure and parameters that determine consequences?
3. **Goal-information adequacy:** does the planner know which future objectives are feasible or probable?
4. **Learning and adaptation adequacy:** can it acquire relevant knowledge and respond to it before decisions become irreversible, and at what cost?

These are analytical distinctions, not claims of statistical independence or a complete taxonomy. A real institutional failure may involve all four at once. The experiments separate them by design precisely because the remedies should not be assumed interchangeable.

### 1.2 The comparison standard

For any fixed true task, let $W(\pi)$ mean the expected value of policy $\pi$, oriented so that larger is better. For A1, which minimizes total evaluation cost $U$, set $W=-U$; for B and B5, $W=V$ already denotes reward. If $\pi^*$ is optimal given the information explicitly available in the reference condition, the realized opportunity loss **for a policy with the same or less information than the reference** is

$$
\mathcal{R}(\pi)=W(\pi^*)-W(\pi)\ge 0.
$$

Crucially, the relevant oracle changes between experiments. A1's oracle knows the true transition model; B's informed planner knows the true **distribution** of future goals but not their realization; B5 separately reports the value of knowing that distribution, its support, or the realized goal. The common test is not whether a sophisticated planner beats a deliberately weak one. It is whether a proposed intervention adds value over a comparator that isolates its mechanism.
