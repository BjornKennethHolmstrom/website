## 1. A correct solution to an incomplete problem

Optimization starts only after someone has decided three things:

- what the planner should value;
- which consequences its model should include;
- what evidence it is allowed to collect.

A policy may be optimal for those choices and still be a poor response to the physical system. That is not a failure of calculation. It is a failure, or an untested assumption, in the *construction of the problem being calculated*.

Working Paper 0 (Holmström, 2026) separated four kinds of adequacy: the objective, the causal model, information about future goals, and learning. Its flood experiment, A1, found that an ecological term in the objective could partly substitute for hydrological structure omitted from the planner's model. The structural-substitution contrast was a difference-in-differences equal to 34.3% of the narrow model's regret.

A1's narrow model omitted three mechanisms *at once*: downstream retention, peak synchronisation and rainfall correlation. That design left the central question open. Which omission mattered? And would an objective change still be worth its price if the mechanisms were switched independently, or if the planner simply represented them?

This paper takes up that question. It uses a fork of the same flood model in which each mechanism can be switched on or off by itself, in the world and in the model. The two papers are deliberately not comparable in their numbers:

- A1's estimand was an objective-substitution difference-in-differences against a bundled omission, evaluated on 800 Latin-hypercube worlds.
- The present confirmatory estimand is a contrast between two policy packages on 40 independently drawn worlds.

No figure from one paper should be read as a replication of a figure from the other.

### 1.1 Three responses, not three repairs

A planner who suspects its model is incomplete has at least three responses.

- **Re-model.** It can write the mechanism into its model before having evidence for it.
- **Re-value.** It can change its objective, so that protecting a valued resource incidentally protects against the omitted consequence.
- **Learn.** It can act to find out which mechanisms operate.

These are not interchangeable repairs.

- **Re-modelling without evidence is an assumption.** We call the strategy REP, for "repair", but the label names the strategy, not a claim that its model is right. REP includes no inference and no cost of acquiring the model. When the mechanism is absent, REP plans on a wrong model.
- **Re-valuing may buy insensitivity to the omission.** That insensitivity carries a measurable price under the original criterion.
- **Learning requires the mechanism to be exposed.** The system must visit states in which the mechanism changes what can be observed, and there must be enough time left to use what is learned. Exposure may itself require actions that the current policy has no reason to take.

These responses have long histories under other names:

- adaptive management and dual control (Walters & Hilborn, 1978; Walters, 1986; Fel'dbaum, 1960);
- robustness to misspecification (Hansen & Sargent, 2008; Lempert, Popper & Bankes, 2003);
- the value of information (Raiffa & Schlaifer, 1961; Howard, 1966);
- multi-objective formulation (Marler & Arora, 2004).

This paper does not claim to introduce them. Its narrower aim is to place them in one exactly solvable decision problem. There, the consequences of each can be traced, and the interactions between them made visible.

### 1.2 What this paper establishes and what it does not

**One confirmatory comparison.** The paper reports one confirmatory comparison, sealed in advance: a re-modelled policy against a re-valued policy, on 40 synthetic test worlds. It found a criterion-dependent trade-off (§3).

**Prespecified descriptive contrasts.** These explain the trade-off as robustness bought at a price (§4).

**Exploratory studies.** Their status is stated in each place:

- how the trade-off changes with parameter error, rain shifts and other mechanisms (§4.3);
- why exposure does not guarantee learning, studied in preselected development worlds (§5).

The learning studies are not a third arm of the confirmatory test.

**Scope.**

- Every world is a synthetic parameter draw.
- The equal weighting of "retention present" and "retention absent" is a hypothetical prior, not an estimate.
- Nothing here is a recommendation for a real catchment.

