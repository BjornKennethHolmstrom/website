# Part II: The simulation

## Scenario design

The simulator models 60 citizen groups holding preferences across four policy dimensions, evolving over 120 time steps. Citizens are organized into four spatial clusters of 15 groups each, with genuine internal diversity within each cluster — this within-group variation is precisely the information that aggregation destroys. All preferences are normalized to the range [−1, +1], where −1 represents strong opposition and +1 strong support on each dimension.

Preferences are not static. They evolve slowly through individual drift (representing genuine opinion change over time), with two genuine preference shifts injected at t = 40 and t = 80. At t = 40, cluster 0 shifts substantially on dimensions 1 and 2, representing a genuine regional change in preference — the kind of real democratic signal that a functioning representation system should detect and transmit. At t = 80, a system-wide shift occurs on dimension 3, affecting all groups.

These genuine shifts are the critical test. A democratic system that cannot detect and respond to genuine preference shifts within a reasonable time window is not functioning as a democracy in any meaningful sense, regardless of its institutional forms.

## The four architectures

All four architectures are given identical institutional quality parameters: the same policy responsiveness gain (K = 0.30), the same basic signal processing logic. Differences in performance are attributable to layer count and the aggregation and noise properties of each layer.

**Architecture A — Deep democracy (5 layers):** polling → media → party → parliament → cabinet → policy. This represents a typical Western parliamentary democracy with a full media and party filtering layer between citizens and elected representatives. Layer parameters: aggregation ratios of 5, 4, 3, 4, 3; noise standard deviations of 0.12, 0.18, 0.22, 0.20, 0.15; total latency of 18 time steps.

**Architecture B — Representative (3 layers):** direct survey → council → assembly → policy. A leaner representative system — closer to a Nordic-style council democracy with direct survey input replacing media filtering. Layer parameters: aggregation ratios of 4, 5, 3; noise standard deviations of 0.10, 0.18, 0.14; total latency of 9 time steps.

**Architecture C — Semi-direct (2 layers):** citizen assembly → policy. Citizens directly participate in an assembly process that feeds into policy, with one intermediate layer of coordination. Layer parameters: aggregation ratios of 3, 2; noise standard deviations of 0.08, 0.10; total latency of 4 time steps.

**Architecture D — Direct/participatory (1 layer):** citizens → policy. Near-direct participation with minimal intermediation. Layer parameters: aggregation ratio of 1 (no aggregation loss), noise standard deviation of 0.05; total latency of 1 time step.

## Simulation output

![Simulation output: four rows of panels. Top row: SNR vs layer count (left) and variance survival vs noise accumulation (right). Second row: policy tracking of citizen preferences over time for all four architectures. Third row: per-architecture RMS tracking error over time. Bottom row: preference representation error heatmaps (observed minus true) for each architecture at t=50.](/whitepapers/images/observability-democracy/ggf-simulator-v5.png)

*Figure 1: GGF Governance Simulator v5 output. Top-left: SNR at the policy layer drops below the unobservability threshold (red dashed line, SNR = 1) between K = 1 and K = 2 layers; all architectures with 2+ layers fall below it under the analytical model. Top-right: surviving preference variance (blue) is overtaken by accumulated noise variance (red) at approximately K = 3 layers. Second row: policy tracking over time — Architecture A (red) oscillates erratically around the true citizen mean rather than tracking it; D (green) follows closely with brief adjustment lags at the genuine shift events. Third row: individual error traces confirm A's persistent noise-driven oscillation and D's near-zero baseline error. Bottom row: representation error heatmaps show that Architectures A and B have projected a nearly uniform (noise-dominated) signal back to all citizen groups, obliterating the genuine spatial variation that C and D preserve.*

## Reading the results

**The SNR collapse is faster than intuition suggests.** The analytical SNR curve in the top-left panel falls from 1.78 at K = 1 to 0.25 at K = 2 and 0.048 at K = 3. This is a drop of two orders of magnitude over three layers. The speed of this collapse reflects the multiplicative nature of aggregation loss: each additional layer divides the surviving variance by the aggregation ratio, while each layer adds a roughly constant increment of noise. The product decays geometrically; the sum grows linearly. Geometric decay wins rapidly.

**Architecture A's oscillation is noise-tracking, not preference-tracking.** The most striking feature of the policy tracking panel is not that Architecture A responds slowly to genuine preference shifts — it is that it oscillates continuously in the absence of any genuine signal. The red trace in the tracking panel moves persistently and significantly throughout the simulation, including periods where true citizen preferences are stable. This is the signature of a system tracking its own noise rather than any external signal. The policy layer is receiving a signal dominated by the noise properties of its five-layer representation chain, and responding faithfully to that noise. The genuine preference shifts at t = 40 and t = 80 are not visible as distinct events in Architecture A's trace — they are lost in the background oscillation.

**Architecture D's brief error spikes are the correct democratic response.** Architecture D's error trace shows two brief, sharp spikes — one at t = 40 and one at t = 80 — corresponding precisely to the genuine preference shift events. These spikes represent the unavoidable lag between a genuine preference change and the policy system detecting and responding to it, even with minimal intermediation. After each spike, the error returns rapidly to near zero. This is what a functioning democratic signal looks like: quiet baseline, prompt detection of genuine change, rapid response.

**The heatmaps show complete spatial information destruction.** The bottom row compares observed minus true preferences at the citizen group level at t = 50, after the first genuine preference shift. Architecture A's heatmap is dominated by large, spatially uniform blocks of red and blue — the representation chain has projected a noise-driven uniform signal back to all citizen groups, completely obscuring the genuine spatial variation in preferences. Architecture D's heatmap is near-white — the observed signal closely tracks the true preferences at each citizen group, preserving the spatial structure.

## Quantitative summary

| Architecture | Layers | Mean tracking error | Variance survived | SNR |
|---|---|---|---|---|
| A — Deep democracy | 5 | 0.160 | 0% | 0.002 |
| B — Representative | 3 | 0.077 | 0% | 0.048 |
| C — Semi-direct | 2 | 0.022 | 79% | 0.254 |
| D — Direct/participatory | 1 | 0.008 | 100% | 1.780 |

The tracking error differential between A and D is a factor of twenty. Architecture A's mean tracking error of 0.160 on a preference scale of [−1, +1] means the policy layer is systematically off by roughly 16% of the full preference range — not because of any institutional failure, but because the signal it receives has been destroyed by the representation chain before it arrives.

The 0% variance survived figures for Architectures A and B are exact: under the simulation parameters, not a detectable fraction of the original citizen preference variance reaches the policy layer. What the policy layer observes is entirely noise.
