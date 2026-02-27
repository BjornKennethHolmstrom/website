# Part II: Requisite variety and observation dimensionality

## Ashby's Law stated formally

W. Ross Ashby's Law of Requisite Variety, established in 1956, is one of the foundational results of cybernetics. In its original formulation: only variety can absorb variety. More precisely: for a regulator R to maintain a system S within a desired set of states G, the variety of R must be at least as great as the variety of S relative to G.

The formal statement for a disturbance environment D, a regulator R, and an outcome set G:

```
V(R) ≥ V(D) - V(G)
```

Where V(·) denotes variety (the logarithm of the number of distinguishable states). The variety of the regulator must cover the variety of the disturbance environment. Whatever variety is not absorbed by the regulator appears as uncontrolled variability in the outcomes — variance that the governance system cannot suppress because it lacks the observational capacity to detect and respond to it.

This is not a guideline or a design principle. It is a theorem. No institutional arrangement, however well-designed, can stabilize a resource system whose variety exceeds the governance system's observational capacity. The constraint is mathematical before it is political.

## The resource system's disturbance variety

A spatially distributed renewable resource faces disturbances across three frequency bands that require qualitatively different governance responses:

**Fast disturbances** (monthly timescale): stochastic shocks from weather, disease, predator-prey dynamics, local extraction variability. These require rapid, localized response — adjusting extraction in a specific location in response to a locally visible signal. A governance system with monthly observation and local spatial resolution can respond to fast disturbances. A governance system with annual observation and regional aggregation cannot — it will always be responding to last year's fast disturbances, which have already resolved, while missing this year's.

**Medium disturbances** (seasonal timescale): cyclic variation in carrying capacity, resource availability, reproduction, and migration. These require governance rules matched to seasonal dynamics — restrictions during breeding seasons, adjusted quotas during low-productivity periods, different spatial allocations as the resource moves through its seasonal range. Responding correctly to seasonal disturbances requires observing the seasonal state of the resource — not just its aggregate level but its phenological condition, which is only legible to observers familiar with the seasonal calendar of that specific ecosystem.

**Slow disturbances** (decadal timescale): gradual trends in carrying capacity driven by climate shift, land use change, cumulative pollution, or long-run ecosystem dynamics. These are the most dangerous disturbances precisely because they are hardest to detect. A slow trend appears indistinguishable from normal variability on a short observation window. Only an observer with a long baseline — years or decades of continuous observation — can distinguish a genuine trend from background noise with sufficient confidence to act on it before the trend produces irreversible damage.

Each disturbance band requires a different observation capability:

| Disturbance band | Required observation | Required signal dimensions |
|---|---|---|
| Fast (monthly) | Low latency, local resolution | Aggregate stock in local area |
| Medium (seasonal) | Seasonal pattern recognition | Stock + phenological indicators |
| Slow (decadal) | Long baseline, trend detection | Stock + ecosystem co-indicators + historical baseline |

A governance system with only aggregate annual stock data covers none of these requirements well: too slow for fast disturbances, too coarse for seasonal pattern recognition, and with a too-short effective window for slow trend detection given that each annual observation is treated as an independent data point rather than as part of a continuous record.

## Observation dimensionality defined

For the purposes of this paper, observation dimensionality is the number of independent signal dimensions the governance system can access about the resource state. A governance system with dimensionality d can distinguish resource states that differ along d axes; states that differ only along dimensions outside its observation capacity are indistinguishable to it and will receive the same governance response regardless of their actual difference.

The critical insight is that different observation positions — different locations relative to the resource — yield access to different signal dimensions. An external administrator observing an annual stock survey has access to one dimension: total biomass. A market participant observing price has access to one dimension: the price signal (a noisy aggregate proxy for scarcity). A community member living adjacent to the resource has access to multiple independent dimensions simultaneously:

- Total stock in the local area (aggregate)
- Spatial distribution of stock across the commons (distributional)
- Condition and health indicators of resource organisms (qualitative)
- Behaviour of indicator species that co-vary with the resource (ecological)
- Seasonal timing signals (phenological)
- Social signals from other community members about their local observations (distributed)
- Historical comparison to long-run baselines held in community memory (temporal)

These are not simply "more data" in the sense that a better annual survey would produce. They are structurally different dimensions — orthogonal axes of the resource state space that are simply inaccessible from positions of distance and aggregation. You cannot obtain a spatial distribution signal from a total aggregate. You cannot obtain a phenological signal from an annual biomass count. You cannot obtain a long-run baseline from a ten-year monitoring programme run by an agency that did not exist before those ten years.

## Proximity as the mechanism for variety acquisition

The central claim of this paper is that physical, seasonal, and relational proximity to an ecosystem is the primary mechanism by which governance systems acquire the observation dimensionality required to govern renewable resources across all relevant disturbance timescales.

**Physical proximity** provides continuous, low-latency access to local resource state across multiple dimensions simultaneously. A fishing community on a lake shore observes the lake every day — the water clarity, the surface behaviour of fish, the condition of vegetation, the behaviour of birds that feed on the resource. This continuous observation accumulates to a high-variety signal that no periodic survey can replicate.

**Seasonal proximity** — being present across the full annual cycle, year after year — provides access to the seasonal dimension of the resource state. The timing of the first fish run, the condition of the stock at the end of winter, the response of the resource to unusual weather — these signals are only legible to observers who have been present through many seasons and can compare the current season to a learned baseline. This is not mystic knowledge; it is the output of a continuous observation process that runs over decades.

**Relational proximity** — the network of relationships between community members who each observe different parts of the resource from different positions — constitutes a distributed observation system whose effective dimensionality is the sum of its members' independent observations, filtered through social communication processes. When every household in a fishing village reports on what they observe from their section of the lake, the aggregate observation across the community has higher dimensionality than any single observer's view, including the professional scientist's.

**Intergenerational knowledge** — the accumulated signal of generations of continuous observation transmitted through oral tradition, practice, and cultural protocol — provides access to the slow dimension of the resource state that no modern monitoring programme can replicate from scratch. A community that has managed a fishery for five hundred years has five hundred years of slow-variable signal embedded in its governance protocols: the rules that govern seasonal restrictions encode observations about what happens when those restrictions are violated; the taboos around certain species reflect accumulated knowledge about ecological thresholds; the seasonal calendars encode phenological signals refined over centuries of observation.

This is what indigenous governance systems bring to commons management that no external administrative system can replicate by virtue of its position: the full-spectrum observation dimensionality that proximity across timescales provides.

## The variety gap and its governance consequences

When a governance system's observation dimensionality is lower than the resource system's disturbance variety, the unobserved variety appears as uncontrolled variance in the outcomes. The governance system applies the same response to states that it cannot distinguish — states that require different responses — and the mismatched interventions produce outcomes that range from neutral to actively harmful.

The variety gap has three specific governance consequences that the simulation makes visible:

**Observation lag produces destabilising intervention.** A governance system with high observation latency is always responding to past states. When the resource is in rapid decline, a lagged governance response based on last year's stock may prescribe extraction at a level appropriate to last year's conditions — which are now too high for this year's depleted stock. The intervention accelerates the very decline it was intended to prevent. This is the mechanism behind the simulation's most counterintuitive finding: state management performs worse than open access.

**Aggregation masks locally critical states.** A governance system observing only aggregate stock cannot detect the spatial collapse of specific patches while the aggregate remains superficially stable. By the time the aggregate falls below the response threshold, local depletion may have already crossed ecological tipping points from which recovery is slow or impossible.

**Short observation windows miss slow trends until they become crises.** A governance system without access to decadal baselines cannot distinguish a genuine slow trend from normal variability. It will adjust its governance response to the trend only after the trend has become large enough to exceed the noise level of its short observation window — by which point the system may have shifted to a lower-productivity regime from which it cannot easily return.

All three consequences follow from the same structural cause: the governance system lacks the variety to distinguish states that require different responses. Institutional quality — better enforcement, more honest reporting, stronger political will — does not address this cause. It can improve the efficiency of response to states the governance system can observe; it cannot extend observation to dimensions that are structurally outside its reach.
