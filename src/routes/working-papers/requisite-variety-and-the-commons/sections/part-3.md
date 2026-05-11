# Part III: The simulation

## Scenario design

The simulator models a spatially distributed renewable resource — a representative fishery, forest, or aquifer — consisting of twelve resource patches with logistic growth dynamics and nearest-neighbour diffusion. Twenty user groups extract from the resource over 360 time steps representing thirty years. All architectures face identical initial conditions, identical resource dynamics, and identical disturbance environments. Performance differences are attributable to observation dimensionality and feedback loop architecture alone.

**Resource dynamics.** Each patch evolves according to logistic growth:

```
dR/dt = r · R · (1 - R/K) - E(t)
```

Where r = 0.08 is the intrinsic growth rate, K is the carrying capacity (time-varying), and E(t) is extraction at time t. Patches are coupled through diffusion at rate β = 0.02, representing resource movement between adjacent spatial areas.

**Multi-scale disturbances.** Carrying capacity varies across three simultaneous disturbance bands: fast monthly stochastic shocks (σ = 3.0), a medium seasonal cycle (amplitude ±8, period 12 months), and a slow decadal decline (amplitude −20 units over 240 months, representing long-run environmental degradation). The slow trend reduces effective carrying capacity by approximately 20% over the simulation horizon — a change only detectable by governance systems with multi-decadal observation baselines.

**Collapse threshold.** Resource stock below 20% of carrying capacity is defined as collapse — a level from which logistic dynamics produce extremely slow recovery and which may correspond to a regime shift threshold in real ecosystems.

## The five architectures

**Architecture A — Open access.** No governance mechanism. Each user group maximises extraction based on local stock visibility, with no coordination or aggregate signal. Represents Hardin's original scenario — pure individual optimisation without feedback.

**Architecture B — State management.** A central regulator issues annual quotas based on aggregate stock surveys conducted with 12-month latency. Quota compliance is partial (rigidity 0.7), enforcement is weak (sanctioning 0.3), and the observation signal is single-dimensional: total aggregate biomass only. Represents the standard post-Hardin response — external authority with coercive capacity but high observation latency and low dimensionality.

**Architecture C — Market mechanism.** Extraction responds to a price signal that serves as a proxy for scarcity. The price signal has 3-month latency (quarterly markets) and is single-dimensional — it aggregates all information about resource state into one number. Represents the privatization/market alternative to state regulation.

**Architecture D — Community commons.** Ostrom-style local governance with monthly monitoring, multi-dimensional observation (stock level, spatial distribution across patches, social pressure signals from other community members), graduated sanctions for rule violations, and strong boundary rules. Observation dimensionality = 3. Represents the self-governing community commons that Ostrom documented empirically and whose superior performance conventional theory predicted could not exist.

**Architecture E — Bioregional / indigenous.** Extends Architecture D with access to the full observation spectrum: seasonal phenological indicators, species co-occurrence signals, soil and water quality proxies, and — critically — the slow ecological signal reflecting the long-run carrying capacity trend. Observation dimensionality = 6. Continuous relational monitoring, strong social accountability (sanctioning 0.9), and governance rules matched to seasonal dynamics. Represents the governance properties common to indigenous systems with long-run ecological embeddedness in their managed territory.

## Simulation output

![Simulation output: four rows of panels. Top row: resource stock trajectories for all five architectures over 30 years. Middle left: requisite variety coverage diagram showing which architectures observe which disturbance frequency bands. Middle right: extraction inequality (Gini coefficient) over time. Bottom left: slow variable tracking — 24-month rolling mean of stock as proxy for trend detection. Bottom right: summary bar chart of mean stock, collapse risk, and extraction inequality.](/working-papers/images/requisite-variety-and-the-commons/ggf-simulator-v6.png)

*Figure 1: GGF Governance Simulator v6 output. Top panel: Architectures A, B, and C collapse to near-zero stock within the first five years and remain in the collapsed regime for most of the 30-year simulation. Architecture D maintains stock above 20% of K with significant variability. Architecture E maintains stable stock and is the only architecture to visibly track and respond to the slow decadal carrying capacity decline. Middle-left: requisite variety diagram showing that only Architectures D and E cover the medium (seasonal) disturbance band, and only E covers the slow (decadal) band. Middle-right: E achieves lower extraction inequality (Gini) than any other architecture, including A, demonstrating that equity and sustainability are co-products of high-variety governance. Bottom-left: only E's 24-month rolling mean tracks the true carrying capacity trend; all others discover the slow decline only after resource collapse has already begun. Bottom-right: summary metrics confirm the monotonic relationship between observation dimensionality and governance performance.*

## Reading the results

**Architecture B is worse than Architecture A.** State management achieves a 98.9% collapse risk versus open access at 93.6% — a result that contradicts the standard post-Hardin prescription. The mechanism is the observation lag compounding with single-dimension aggregation. The annual quota is calibrated to last year's stock. In a declining resource, last year's stock is higher than this year's — so the quota authorises extraction at a level that the current stock cannot sustain. The intervention accelerates the decline. Open access at least responds immediately to local conditions, even without coordination; state management responds slowly to global conditions, and its slow response arrives as a destabilising intervention rather than a stabilising one.

This is not a finding about the failure of well-meaning institutions. It is a finding about what happens when high observation latency is combined with single-dimension aggregation in a multi-scale disturbance environment. A state management system with better compliance, better enforcement, and more honest reporting would still face the same architectural constraint: the signal it receives is too slow and too coarse to support stable commons governance.

**The jump from C to D is a variety jump.** Market mechanism (C) and community commons (D) both operate with feedback — price in one case, community monitoring in the other. The difference is observation dimensionality: 1 versus 3. This shift reduces collapse risk from 86.4% to 30.3% and raises mean stock from 9.6% to 27.2% of carrying capacity. The performance improvement is attributable to the additional signal dimensions — spatial distribution and social pressure — that allow Architecture D to distinguish states that appear identical to Architecture C's single-dimension price signal. Ostrom's design principles work not because they install better values but because they open additional observation channels.

**The jump from D to E is the slow variable jump.** Adding the slow ecological signal dimensions — and the extended temporal baseline needed to interpret them — reduces collapse risk from 30.3% to 3.6%. Architecture E is the only architecture in which the 30-year trajectory does not spend significant time in the collapsed regime. It is also the only architecture whose slow variable tracking panel shows any correspondence to the true carrying capacity trend. All other architectures discover the slow decline retrospectively — after their stock has already collapsed — because they lack the observation baseline required to detect a gradual trend above the noise floor of short-window monitoring.

**Equity and sustainability are co-produced.** Architecture E has the lowest extraction inequality (Gini 0.032) alongside the highest mean stock maintenance (31.1% of K). The market mechanism (C) has the highest inequality (0.096) and near-total collapse. Open access (A) has low inequality (0.018) because all users are equally impoverished by the collapsed stock. The pattern confirms that equity and ecological sustainability are not in tension in high-variety governance systems — they are co-products of the same architectural properties: close feedback, multi-dimensional observation, and governance rules matched to the resource's actual dynamics.

## Quantitative summary

| Architecture | Mean stock | Collapse risk | Gini | Obs dims |
|---|---|---|---|---|
| A — Open access | 4.2% | 93.6% | 0.018 | 1 |
| B — State management | 3.7% | 98.9% | 0.058 | 1 |
| C — Market mechanism | 9.6% | 86.4% | 0.096 | 1 |
| D — Community commons | 27.2% | 30.3% | 0.085 | 3 |
| E — Bioregional / indigenous | 31.1% | 3.6% | 0.032 | 6 |

The relationship between observation dimensionality and governance performance is monotonic and non-linear. The largest performance jump — in collapse risk reduction — occurs between dimensionality 1 and dimensionality 3 (the Ostrom jump: from 86–99% to 30%). The second largest occurs between dimensionality 3 and 6 (the slow variable jump: from 30% to 3.6%). Both jumps correspond to the addition of qualitatively new signal dimensions — not improvements to existing ones.
