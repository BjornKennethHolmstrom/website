## Abstract

An optimizer can solve its formal problem correctly while choosing poorly for the world it acts in. The difficulty may lie in what the objective values, in which causal mechanisms the model represents, or in whether the planner's own decisions let it discover what it has omitted.

Following *Systemic Optimization — Working Paper 0*, we examine how these failures interact. The setting is an eleven-period synthetic flood-adaptation model of three municipalities. Three hydrological mechanisms can be switched on or off independently, both in the physical world and in the planning model: downstream wetland retention, peak synchronisation, and rainfall dependence between catchments.

We distinguish three responses:

- assuming a missing mechanism into the model ("re-model");
- changing the objective to reward ecological capital ("re-value");
- acting in order to learn which mechanisms operate.

Only the first two are compared in the confirmatory test. Learning is studied exploratorily in preselected development worlds.

**Confirmatory results.** The test used 40 independently drawn synthetic worlds and a declared hypothetical equal weighting of retention present and absent.

- Assuming retention while minimising the original cost criterion U1 had lower mean U1 cost than optimising an ecological objective on the retention-omitting model. The mean difference was −1.112 (95% CI −1.737 to −0.487). The interval missed its planned precision.
- The ecological objective achieved lower wetland deficit and a larger terminal wetland stock.

**Descriptive and exploratory results.**

- A prespecified descriptive comparison found a much smaller mean omission-related U1 contrast under the ecological objective (+0.014 versus +1.851). That came with a U1 price of +1.085 when the model was correct.
- Under planning-parameter error, the observed U1 advantage of the assumption-based strategy nearly vanished.
- A passive policy can leave a decision-relevant mechanism permanently unobservable.
- An exact Bayesian probe-then-commit learner, despite noise-free state observations, captured at most about a fifth of a fixed-probe oracle's margin.

These results concern one synthetic model family, not observed catchments. They suggest that causal representation, objective choice and opportunities to observe must be evaluated together, because changing one alters the costs and possibilities of the others.

**Keywords:** systemic optimization; model incompleteness; causal representation; surrogate objectives; ecological objectives; identifiability; value of information; adaptive management; computational preregistration.

