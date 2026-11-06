## 5. Why exposure does not guarantee learning

The third response, learning, was not part of the confirmatory test. It was studied in a sequence of exploratory gates on preselected development worlds, using exact computation wherever possible. The question is simple: if the planner suspects that retention might operate, can it find out in time for the knowledge to pay?

### 5.1 A null built into the model [R, structural]

Without upstream wetland, the transition laws with and without retention are identical (§2.2). This held for every unexposed state–action pair examined, in every world and variant.

For the particular observation likelihood evaluated in the inference gates, the log Bayes factor between "retention present" and "absent" is exactly zero on every such history. That is a statement about that likelihood. It does not show that complete histories are uninformative under every possible observation model.

### 5.2 A trap the policy maintains itself [R, exploratory]

An exposure trap occurs when an omitted mechanism matters for the decision, yet the planner's own policy never enters a state in which it could be detected. Under passive operation, the exposure study found **seven** such exact traps, across six development and stress-test worlds: six for retention and one for synchronisation.

In world d05, omitting retention raises the true U1 cost by 2.36 at $\psi=0$. Yet the omitting planner's policy has zero occupancy of states where retention acts. However long it operates, it will never see evidence that would correct it, because its own choices keep that evidence out of reach.

**[IP — Observability is policy-dependent.]** Whether a model error can be discovered is not only a property of the world and the sensors. It is also a property of the policy being run. A planner can maintain its own blind spot.

### 5.3 Exposure is not yet evidence [R, exploratory]

Suppose the planner deliberately restores wetland for $k$ years (a probe) and then commits to a plan. We built an exact Bayesian learner for this case. It knows the two hypotheses, observes the full state without noise, updates its posterior exactly and commits at year $k$. This is a deliberately optimistic setting, closely related to Bayes-adaptive planning (Guez, Silver & Dayan, 2012).

**[R, structural]** A one-year probe cannot inform this learner: its first transition starts from an unexposed state, so the posterior equals the prior on every history.

**[R, exploratory]** Longer probes create exposure long before they create evidence. In world d05:

- the probe exposes retention with probability 0.77, 0.95 and 0.99 at $k=1,2,3$;
- the posterior has moved at all with probability 0, 0 and 0.15.

In world d00 evidence arrives sooner (0.47 at $k=2$). In world d02 it does not arrive before $k=3$ (0.36). See Figure 4.

![Exposure and learning](figures/wp1_fig4_exposure_learning.png)

*Figure 4.* Probability that retention is exposed at the commitment year (A), and that the posterior has moved by then (B). Joint probe, retention present. Source: `e1lite_cells.csv`. [R, exploratory; panel B at $k=1$ structural]

### 5.4 What learning could be worth, and what a learner gets [R, exploratory]

Three comparisons in the value-of-learning gates must be kept apart.

**Full-start clairvoyance (O\*).** This planner knows from the start whether retention operates. Its advantage over passive operation, $C(P0)-C(O^*)$, is:

- 0.92 / 1.84 / 2.76 U1 in world d00;
- 0.59 / 1.18 / 1.77 U1 in world d05;

as the hypothetical prior weight on retention rises from 0.25 to 0.50 to 0.75. It is zero in the two control worlds, where retention does not matter. This is a passive-relative bound, not canonical EVPI (Howard, 1966) and not the gain from any probe.

**The fixed-probe oracle (X\*).** X\* must carry out a prescribed probe for $k$ periods, then learns the truth perfectly before continuing. Against a restricted menu of fixed policies, B_extended, that includes the probes themselves, X\* has a positive net margin in only **10 of 54** primary cells in the three worlds where retention matters (7 of 54 in a sensitivity variant).

- Counting the two control worlds, which have no winning cells, the figures are 10/90 and 7/90.
- The two denominators answer different questions.
- X\* is a ceiling within its probe, not a bound on every adaptive policy.

**The feasible learner.** The exact probe-then-commit learner recovers at most about a fifth of the X\* margin:

- its ratio $\kappa$ to the X\* margin over B_extended is at best 0.107 in the primary variant and 0.179 in the sensitivity variant;
- the declared screen ($\kappa\ge0.5$) was met in none of the nine cells where it is defined;
- it beats B_extended in 2 of the 54 cells, both one-year probes with no posterior update (Figure 5).

An attribution of its gains shows that almost all of them come from *state-contingent commitment*: choosing a continuation by prior and reached state. They do not come from updating beliefs. The posterior update is worth at most 0.069 U1 in any cell, and 2.1% of the substantial gains.

![Oracle and learner](figures/wp1_fig5_oracle_vs_learner.png)

*Figure 5.* The fixed-probe oracle X\*'s net margin over the restricted menu B_extended, against the feasible learner's, in 54 primary cells in the three worlds where retention matters. These are **net programme margins against a restricted menu**, not isolated information value. The learner's positive margins at $k=1$ contain no posterior update. Source: `e1lite_cells.csv`. [R, exploratory]

**[IP — Value of information is not value to a learner.]** The theoretical value of knowing a mechanism, even within one probe, can far exceed what a simple exact learner earns within the same horizon. The gap does not come from bad inference. It is time, exposure and commitment: the evidence arrives late, the probe is costly, and the remaining horizon is short.

This is consistent with WP0's finding that information may be valuable while acquiring it is not. Here the cost is not a lost period of production but the physical commitment needed to make the mechanism visible at all.

These are results for one learner, one comparator, noise-free observation and one-time commitment, in selected worlds. They do not show that learning is never worthwhile.

