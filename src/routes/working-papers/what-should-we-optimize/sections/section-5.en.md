## 5. Experiment B5: information is useful, but learning is an action

### 5.1 What does the planner not know?

B5 follows from B's unexpected strength of the uniform-belief control. Instead of supposing the same 30 goals can occur in every world, B5 draws a latent support set $S$ of size $k\in\{2,3,4,6,8,12\}$, uniformly from the 30-goal universe, then assigns that support Dirichlet weights with concentration $\alpha\in\{0.3,1,3\}$. Under this symmetric hierarchical prior, the prior predictive distribution over goals is *exactly uniform*. The planner knows the prior family but not the world's support or weights.

Three reference values isolate the source of information:

$$
I=V_{\mathrm{inf}}-V_{\mathrm{flat}}
=(V_S-V_{\mathrm{flat}})+(V_{\mathrm{inf}}-V_S).
$$

Here $V_S$ is a policy optimized under a uniform predictive *within the true support*, and $V_{\mathrm{inf}}$ uses its actual probability weights. This is an accounting decomposition of value, not a general statement that one form of information is always more important.

The physical world is reduced to **324 states** to permit exact planning over up to **496 observation-history belief states**. The planner may obtain a poll that samples the true future-goal distribution, contaminated by known uniform noise. Its observations update an explicitly derived Bayesian posterior, in the tradition of Bayes-adaptive planning (Guez, Silver & Dayan, 2012). B5 then makes a critical distinction between *learning that displaces productive activity* and *learning that accompanies productive activity*.

### 5.2 What was actually preregistered [R, confirmatory]

The original **condition E** required a poll to occupy an entire decision period. Production or investment stops, normal capability atrophy still occurs, and polling may consume reserves. The Bayes-adaptive planner chooses whether to poll and is free to decline.

| Frozen hypothesis | Estimate | Adjusted interval | Verdict |
|:---|---:|:---|:---|
| **H5-1**: support knowledge recovers at least half of $I$ | **0.591** | [0.488, 0.682] | **Inconclusive** |
| **H5-2**: optimal exclusive polling recovers at least 5% of $I$ | ≈0.000 | [−0.000008, 0.0000004] | **Refuted: negligible** |
| **H5-3**: directional associations with noise, support size and time | — | All include zero | **All inconclusive** |

The half-information claim is **not confirmed** merely because its point estimate is 59.1%. The pre-registered adjusted lower bound is **0.488**, below the threshold **0.5**. The equally important negative result is that an optimal learner almost never chooses the original polling action: only **9 of 800** test worlds show any positive probability of polling, and the aggregate probability mass is tiny. With almost every gain zero, H5-3's formally estimable correlations are not substantively informative. Exploratory H5-4 finds essentially no change in capabilities retained at revelation.

The built-in optimality and calibration checks passed. These checks establish consistency with the mathematical model and the sampled prior; they do not certify the model as a realistic description of public opinion or future social needs.

### 5.3 A documented amendment that changed the interpretation, not the verdict [R, exploratory]

Verification-stage tests revealed that a period-consuming poll was prohibitively costly. Before the pilot and test pools were generated, a documented B5-0.1 amendment **preserved E's frozen hypotheses** and added two exploratory comparisons: **C**, where a survey accompanies an otherwise normal physical action and costs a fixed reward amount, and **F**, where one free observation arrives before the first action. The concurrent-survey costs were fixed at **0**, **0.075** and **0.375** reward units, corresponding to zero, one tenth, and one half of **the Phase 1 reward of one period producing activity 1 at capability 1** ($u_P=0.75$ reward units), the same in every world. The investigators knew that a verification-world free-observation diagnostic had mean value **0.092** when setting this rule; that disclosure is part of the record. Condition-E **test-pool** verdicts were computed and locked before any C or F **development- or test-world values** were viewed. Before that lock, C polling-rate flags were seen on 16 verification worlds and 50 pilot worlds, and C/F values appeared in a handful of verification-world implementation smoke tests. No C or F development/test result was inspected before E's lock.

![B5 information acquisition results, exploratory](figures/b5_learning_cost.png)

*Figure 1.* Exploratory 95% paired-bootstrap intervals from `figures/b5_learning_cost.png` (figure generator: `wp0_build/figure.py`, see source bundle). E's interval [−0.000007, 0.0000002] is too narrow to be visible at this scale. Confirmatory H5 tests use adjusted 97.5% intervals, **not** these exploratory intervals.

| Information condition | Share of $I$ recovered | Worlds where learning occurs | Expected polls per world |
|:---|---:|---:|---:|
| **E:** survey displaces a period | ≈0.000 | 1.1% | ≈0.000005 |
| **C:** alongside action, cost 0.375 | −0.001 | 3.1% | 0.009 |
| **C:** alongside action, cost 0.075 | **0.105** | 60.9% | 0.327 |
| **C:** alongside action, free | **0.209** | 100% | 1.600 |
| **F:** one free observation before action | **0.219** | 100% | 1.000 |
| **Support known exactly** | **0.591** | Not an acquisition policy | — |

These are **exploratory** ratios of mean gains against the flat planner to mean $I$ across 800 test worlds, not new confirmatory verdicts. The mean ex-ante value of one free observation is **0.087** reward units (95% interval [0.078, 0.096]) and is positive in all 800 worlds. Yet an observation that displaces a whole period is rarely purchased. Even a marginal cost of 0.075 roughly halves the realized value of free concurrent learning; at 0.375 the advantage nearly disappears.

Timing also matters. One observation before acting (F) recovers about as much as up to two surveys taken alongside production (C at zero cost). This is not a general dominance claim between early information and two later signals; it describes the chosen goal family and action horizon.

On **a separate, unpaired sample of 200 additional worlds with clustered rather than uniformly selected supports**, knowing the support recovers about **0.914** of the full-information gap, while free concurrent learning recovers **0.263** and one free early observation **0.280**. The mean informed-minus-flat gap is larger there (0.640 versus 0.438), and the free-concurrent gain is about 0.168 rather than 0.091 reward units. This single misspecification regime illustrates that being calibrated to one's prior does not universally upper-bound *improvement over a flat baseline*; it is not a general claim about wrong priors. The misspecification arm is exploratory and does not authorize retuning the posterior.

### 5.4 The crucial separation [IP]

B5 does not show that research is unprofitable. It shows that **a particular information source, purchased through a particular interruption, is not worth its cost under these model parameters**. The Bayesian learner is not irrational: information increases expected decision quality, but obtaining it may destroy an even more valuable opportunity. A policy that can observe while acting faces a different constraint and may rationally learn.

The expected marginal value of an experiment is decision-relative. A signal may predict the future goal accurately and still have no effect if every possible posterior implies the same action; conversely, a coarse signal may be consequential if it changes an irreversible early choice. This is consistent with Bayesian decision theory and sequential preference elicitation (Blackwell, 1953; Boutilier, 2002). The cost of learning is not always monetary: delay, foregone production, coordination burden, and the decay of unexercised capability all matter.

**[IP — Learning architecture matters.]** It may be more productive to ask *whether information can be obtained without suspending action* than to ask whether information has positive abstract value. B5 gives one model-based reason to examine that design variable. It does **not** prove that dedicated research, deliberation or democratic consultation should be made subordinate to ongoing production.
