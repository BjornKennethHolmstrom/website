## 6. Coupled Populations: Polarization and Cascade Collapse

The single-population model treats a governance system as internally homogeneous. Real governance systems are heterogeneous: different groups, regions, or institutions within a society share an environment but may have different trust capacities, boundary strengths, and permeability levels. This section extends the model to two coupled populations that share a common environmental uncertainty \(U\). The extension allows us to ask two questions that the single-population model cannot address:

1. **Polarization:** Can two populations facing the same external conditions settle into different regimes—one open, one closed—because of different initial conditions?

2. **Cascade collapse:** Can a shock that drives one population into closure drag the other into closure as well, even if the second population was not directly affected?

Both questions bear directly on the governance of heterogeneous societies, where openness and closure often coexist and where localized crises can have systemic consequences.

### 6.1 Two-population model

The two-population model consists of a shared uncertainty variable \(U\) and two copies of the four fast variables \((B,T,E,P)\), one for each population. The equations are:

\[
\begin{aligned}
\dot U &= n(1-U) - \alpha \big( E_1(1-\beta Q_1) + E_2(1-\beta Q_2) \big) U, \\
\dot B_i &= \rho_B \, \sigma\!\big(k_B(F_i-\theta)\big) - d_B B_i, \\
\dot T_i &= \rho_T E_i (1-\beta_T Q_i) - d_T T_i - \gamma Q_i T_i, \\
\dot E_i &= \rho_E \, \sigma\!\Big( k_E \big( \frac{\alpha U}{1+\eta Q_i} - c_E \big) \Big) - d_E E_i, \\
\dot P_i &= \rho_P \left( 1 - \sigma\!\big( k_P(F_i-\theta_P) \big) - P_i \right),
\end{aligned}
\]

for \(i=1,2\), where

\[
Q_i = (1-P_i) B_i, \qquad
F_i = \frac{s U}{(1+\lambda T_i)(1+\mu B_i)}.
\]

The two populations are coupled only through the shared uncertainty \(U\). Each population experiences the same actual uncertainty but may experience different felt uncertainty because of its own trust and boundary strength. The coupling is indirect: if one population reduces its exploration, \(U\) rises, increasing the felt uncertainty of both populations.

This is a deliberately minimal form of coupling. It captures the idea that groups within a society share a common environment even when they do not directly interact or coordinate. It also excludes, for the present analysis, more direct forms of coupling such as trade, migration, or information exchange. Later work can add these channels.

### 6.2 Polarization baseline

We first ran the two-population model from asymmetric initial conditions at \(s=1.5\):

- **Population 1 (open start):** \(B_1=0.02,\ T_1=0.95,\ E_1=0.90,\ P_1=0.9\)
- **Population 2 (closed start):** \(B_2=0.90,\ T_2=0.02,\ E_2=0.05,\ P_2=0.1\)

The model was integrated for 500 time units.

The final state was:

| Population | \(B\) | \(T\) | \(P\) |
|---:|---:|---:|---:|
| 1 (open start) | 0.147 | 1.000 | 0.698 |
| 2 (closed start) | 0.764 | 0.003 | 0.232 |
| Shared \(U\) | 0.339 | | |

Figure 5 shows the time evolution of boundary strengths for the two populations. The divergence is stable and persistent: Population 1 settles into the open attractor with low \(B\), while Population 2 remains in a closed state with high \(B\).

![Figure 5: Polarization: two populations with identical parameters but different initial states. Population 1 (open start) converges to a low-boundary, high-trust, high-permeability open regime; Population 2 (closed start) remains in a high-boundary, low-trust, low-permeability closed regime. Shared uncertainty U stabilizes at an intermediate level.](/working-papers/images/closure-adaptation/figure5_polarization_time_series.png)

**Figure 5:** Polarization: two populations with identical parameters but different initial states. Population 1 (open start) converges to a low-boundary, high-trust, high-permeability open regime; Population 2 (closed start) remains in a high-boundary, low-trust, low-permeability closed regime. Shared uncertainty \(U\) stabilizes at an intermediate level.

The two populations settled into different attractors and remained there. Population 1 recovered to the open state with low boundary, high trust, and high permeability. Population 2 remained in a closed state with high boundary, near-zero trust, and low permeability, although its boundary strength was not maximal because the shared uncertainty was held down by Population 1’s exploration.

This is a formal representation of **stable polarization**. The two populations are identical in their parameters and face the same environment. They differ only in their initial conditions. Yet those initial differences are amplified by the dynamics, and the populations end up in markedly different institutional regimes. The open population does not pull the closed population open, and the closed population does not drag the open population closed. They coexist.

The mechanism is the same positive feedback identified in the single-population model: high trust keeps felt uncertainty low, which keeps boundaries small and permeability high; low trust does the opposite. When the populations are coupled only through \(U\), these feedbacks can operate largely independently within each population, provided the shared \(U\) remains in a range that supports both attractors.

### 6.3 Cascade collapse

The second experiment asked whether a severe shock to one population can propagate to the other. Both populations began open at \(s=1.5\):

\[
B_1=B_2=0.02,\quad T_1=T_2=0.95,\quad E_1=E_2=0.90,\quad P_1=P_2=0.9.
\]

At time \(t=100\), Population 1 was subjected to a combined shock lasting 30 time units:

- \(s\) was raised from \(1.5\) to \(3.0\) for the entire system, increasing the felt uncertainty of both populations;
- \(P_1\) was forced down to \(0.02\), while \(P_2\) was left free to evolve normally.

After the shock, \(s\) returned to \(1.5\) and the forcing on \(P_1\) was removed.

The final state, after 500 time units, was:

| Population | \(B\) | \(T\) | \(P\) |
|---:|---:|---:|---:|
| 1 (shocked) | 1.000 | 0.022 | 0.010 |
| 2 (unshocked) | 1.000 | 0.022 | 0.010 |
| Shared \(U\) | 0.765 | | |

Figure 6 shows the cascade dynamics. Both boundary strengths rise and lock at 1.0, and both trust levels collapse to near zero, despite the fact that Population 2 never experienced a direct permeability shock.

![Figure 6: Cascade collapse: both populations start open. Population 1 is subjected to a combined shock (raised s and forced low P) at t=100. Population 2, which is not directly forced, nevertheless collapses into closure through the shared increase in actual uncertainty U. Both populations end with B=1.0 and near-zero trust.](/working-papers/images/closure-adaptation/figure6_cascade_collapse_time_series.png)

**Figure 6:** Cascade collapse: both populations start open. Population 1 is subjected to a combined shock (raised \(s\) and forced low \(P\)) at \(t=100\). Population 2, which is not directly forced, nevertheless collapses into closure through the shared increase in actual uncertainty \(U\). Both populations end with \(B=1.0\) and near-zero trust.

Both populations collapsed into closure, even though Population 2 was never directly forced into low permeability.

The cascade occurs through the shared uncertainty variable. During the shock, Population 1’s forced opacity causes its boundary strength to rise rapidly and its exploration to collapse. Because Population 1 is no longer contributing to uncertainty reduction, \(U\) rises. The elevated \(U\) increases the felt uncertainty of Population 2, even though Population 2’s own permeability and trust are initially intact. Once Population 2’s felt uncertainty crosses its boundary threshold, it begins building boundaries. Its exploration declines, which raises \(U\) further. The two populations then drag each other downward.

This is a formal model of **contagion of closure**. A localized failure of openness can, through the shared environment, destroy the conditions for openness elsewhere. The unshocked population is not a passive victim; it responds rationally to the increased uncertainty caused by the shocked population, but its response—building boundaries—makes the situation worse for both.

### 6.4 Comparison with single-population results

The cascade collapse result is consistent with the combined shock experiment in the single-population model, but it adds a new mechanism. In the single-population case, a system can remain open even at high \(s\) if its permeability stays high. In the two-population case, Population 2 initially had high permeability, yet it still collapsed because the rise in \(U\) caused by Population 1 was large enough to overwhelm its trust–exploration loop.

This suggests that in a coupled system, the openness of any one component depends not only on its own internal trust and permeability, but also on the aggregate exploratory capacity of the system. If one component fails, the resulting increase in shared uncertainty can push others past their tipping point. This is the dynamic counterpart of Paper X’s correlation failure: a system of coupled observers can fail together not because they are identical, but because they share an environment whose uncertainty is produced by their aggregate action.

### 6.5 Institutional interpretation

The polarization result gives formal support to the observation that open and closed societies can coexist in the same international environment. Two regions or groups with different histories, even with identical formal rules, may settle into different institutional equilibria. This is not evidence that institutions do not matter; rather, it shows that historical path dependence can dominate marginal institutional differences.

The cascade result is more worrying. It suggests that a severe closure event in one part of a system—a sudden authoritarian turn, a collapse of press freedom, a panic-driven sealing of borders—can spread to other parts through the shared uncertainty it generates. The mechanism is not direct coercion or imitation; it is the increased ambiguity and unpredictability that the first closure imposes on others.

This has implications for governance design. If openness is a public good within a coupled system, then the preservation of openness in one part depends partly on the openness of others. A system that wants to remain open must therefore invest not only in its own trust and permeability, but also in buffering itself against the uncertainty produced by closures elsewhere. Some concrete measures that follow from the model:

- **Redundancy in exploratory capacity:** maintaining multiple independent channels of uncertainty reduction so that the failure of one does not raise \(U\) to dangerous levels for the rest.
- **Shared early-warning systems:** if populations can monitor each other’s permeability and boundary dynamics, they may be able to anticipate a closure cascade and strengthen their own buffers before \(U\) spikes.
- **Insulation from common-mode shocks:** because the shock was transmitted through \(s\), which applied to both populations, the model cannot distinguish between a truly common environmental threat and a threat that is localized but raises uncertainty for all. Governance systems that can distinguish these cases may be better able to avoid overreaction.

These are in-principle readings of the model, not empirical claims. They follow from the structure of the coupling and the shape of the attractors.

### 6.6 Summary

The two-population extension shows that the closure–adaptation dynamics of the single-population model generalises to a heterogeneous system in two important ways. First, populations with different histories can stably polarise into open and closed regimes under identical external conditions. Second, a severe closure event in one population can cascade to others through the shared uncertainty it creates, leading to system-wide collapse. These results connect the model to the governance of plural societies and to the systemic risks created by localized institutional failure.

The next section returns to the single-population model and asks whether a simple governance design rule—a constitutional minimum on boundary permeability—can prevent the closure trap and its cascading consequences.
