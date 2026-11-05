## 4. Experiment B: future objectives may change

### 4.1 Possibility as a measurement and as a decision rule

B removes model uncertainty to isolate another problem. Its community has three productive capabilities, a renewable resource, reserves, and an environmental regime: **1,080 physical states**. During an initial phase it pursues a known current goal. At a revelation time $\tau\in\{3,5,7\}$, a future goal is drawn from a distribution over **30 goals**. The goal is then known, and all planners adapt optimally for the remainder of a 13-period horizon. The informed reference knows the distribution before $\tau$, not the realized goal; the myopic baseline assumes the current objective will persist.

The study compares four ways to value future possibility without knowing the true distribution:

- **M-reach**, the logarithm of the number of viable reachable states (resource $R\ge1$) within the pilot-selected $H_M=4$-period horizon;
- **M-div**, the number of distinct reachable capability profiles;
- **M-rec**, recoverability of resource stock following a standard shock;
- **M-AUP**, a penalty on changes in attainable values of random auxiliary reward functions, modeled on attainable utility preservation.

The principal test did **not** ask whether a measure outperformed myopia alone. It required each measure both to recover at least 5% of the informed–myopic gap **and** to exceed a reserve-based policy with the same foregone current-goal value by at least 5% of that gap. This second comparison matters: a system that merely holds back resources may look “open” without demonstrating anything beyond a familiar saving strategy.

### 4.2 Results: predictive measure, ineffective optimizer [R]

**At the frozen measure weight $\bar\lambda=0.25$, none of the four measures passed the preregistered joint test HB1.** Capability diversity recovered **14.6%** of the informed–myopic gap relative to myopia, yet exceeded its premium-matched reserve control by only **0.6% of that gap**, well below the 5% margin. Reachability recovered **4.6%** and fell slightly below its reserve control. AUP recovered **2.7%**; recoverability actually lost approximately **49.6%** of the reference gap relative to myopia. All four failed the separate HB2 comparison with a specified incorrect-belief planner.

At the same time, the state-ranking validity test HB3 **supported both reachability and diversity**: each had a stratified mean Spearman correlation of approximately **0.730** with *incremental future-goal adaptation value*, after matching states on reserves, resources, regime and approximate current-goal value. The two correlations were also nearly indistinguishable; they should not be treated as evidence for two independent mechanisms.

| B planner | Share of informed–myopic value gap recovered | Evidential role |
|:---|---:|:---|
| Uniform belief over 30 conceivable goals | **0.690** | Exploratory explicit-belief control |
| Wrong specified belief at the primary error level | **≈0.45** | Exploratory comparator |
| Capability diversity (M-div) | 0.146 | Fails joint HB1; supports HB3 as a measure |
| Minimax regret across goals | 0.108 | Exploratory robust comparator |
| Reachability (M-reach) | 0.046 | Fails joint HB1; supports HB3 as a measure |
| Attainable utility preservation (M-AUP) | 0.027 | Fails joint HB1 |
| Recoverability (M-rec) | −0.496 | Harmful in aggregate |

The **uniform-belief control** is not merely another representation of generic openness: it specifies a belief about *which goals are conceivable*, even while assigning them equal weight. Its 69% recovery therefore suggests that specifying a relevant goal space may be much more actionable than maximizing an unweighted structural count. The experiment does not show that uniform beliefs outperform every equally inaccurate concentrated belief; the comparator's actual distributional distance varies by world.

The distinction generalizes conceptually. Suppose a system has many possible future actions. The number of those actions is not their expected value. Their importance depends on which future goal materializes, how much each action contributes toward that goal, and what it costs to preserve the corresponding capacity. A measure may rank physical states by their potential well yet provide a poor marginal signal for choosing current actions.

**[IP — Measurement–objective separation.]** A statistic can be valid as a *diagnostic of opportunity* while failing as a *reward for producing opportunity*. Promoting any useful indicator into an objective is an additional causal claim about decision incentives, not a free inference from correlation.


**Weight sensitivity and support caveats.** Exploratory sensitivity at $\bar\lambda=1.0$ raises M-reach's recovery to about 0.279, but it was **not reserve-premium-matched** at that weight; a stronger-weight version might or might not pass HB1. At $\bar\lambda=0.05$, the measures lie within about ±0.03 of the gap. In B the 30-goal list is **exactly the true support** of the goal distribution, so a uniform prior has a particularly favorable specification advantage; B5 varies that support.

### 4.3 Boundaries and counterexamples

B contains worlds where specialization pays, unused capabilities decay, and future goals barely change. Its exploratory maps indicate that diversity's relative value declines when specialization returns or capability atrophy rise. Unrestricted positive-probability reachability correlates positively with incremental option value; a high-probability-path variant, under its specific transition threshold, correlates negatively. This is a warning against equating *likely paths* with *valuable options*, not proof that rare states should dominate planning.

The experiment's favorable assumption is that all planners can adapt **perfectly once the future goal is revealed**. That makes retained options especially usable. It also assumes that all conceivable goals, activities and actions exist in the model from the outset. It cannot test the capacity to *create* new possibilities, redefine goals through deliberation, or discover activities outside the original state space. Its negative result for these four formulations is not a theorem that possibility preservation never works.

The earlier literature already recognizes the importance of preservation and irreversibility. Real-options economics assigns value to waiting for information (Arrow & Fisher, 1974; Dixit & Pindyck, 1994). Relative reachability and attainable utility preservation provide formally different measures for discouraging undesirable side effects (Krakovna et al., 2019; Turner, Hadfield-Menell & Tadepalli, 2020). B is a deliberately narrow comparative experiment, not a claim to have originated the idea that retained options can matter.


**Control comparison.** The premium-matched reserve policy follows much the same tertile pattern: its recovery changes with specialization returns and atrophy in parallel to M-div (for example, about 0.188/0.124/0.114 versus M-div's 0.201/0.127/0.118 by specialization tertile). Thus this conditional pattern should not be attributed uniquely to the structural diversity objective.
