## Appendix A. Environment, agent, and hyperparameters

**Environment.** A 17×15 gridworld (interior 11×15) with the layout below, where `S` is the start, `1` the training goal (G1), `#` walls, `g` and `2` the thirteen peripheral goals, the meadow occupying rows 1–7 and the periphery rows 8–15. A single gap in row 8 (the bottleneck) and a single door into the enclosed far region are the only routes to the periphery.

```
###############
#.............#
#.............#
#......1......#
#.....S.......#
#.............#
#.............#
#.............#
#######.#######
#.............#
#.###########.#
#.#gg.....gg#.#
#..gg..2..gg#.#
#.#gg.....gg#.#
#.###########.#
#.............#
###############
```

Four deterministic actions (up, down, left, right); walls block; the transition is otherwise identity-plus-move. Central and peripheral regions are defined by row: meadow rows ≤ 7, periphery rows ≥ 8.

**Agent.** Tabular Q-learning, γ = 0.99, α = 0.5, ε-greedy behaviour with ε = 0.15 unless swept, 4000 episodes of up to 120 steps, fixed start unless the structural regime is used. Base reward is −0.01 per step and +1 at G1; Experiment 2 adds −c_b per step taken in the periphery. Tabular (rather than a neural agent) is a deliberate choice so that any loss of reach is attributable to the objective rather than to function approximation.

**Proxy and its optimization.** The proxy is the Shannon entropy (nats) of the agent's visitation distribution over tiles. The biased tiling resolves the meadow at m_meadow categories (one per cell in Experiment 1; m_meadow = 13 in Experiment 2) and the periphery at k_far categories (one in Experiment 1; swept in Experiment 2), assigned by contiguous split unless the random-partition control is used. Arm B adds an intrinsic reward λ_t · (count(tile) + 1)^(−1/2), where the count is cumulative and λ_t decays linearly to zero by 70% of training, so that the agent remains a competent solver of G1 (verified per condition).

**Exercisable reach.** After training, the agent's experienced transitions form a directed graph; a peripheral goal is *exercisable* iff a directed path to it exists from the common start using only experienced transitions. Because the environment is deterministic and the learned model is exact on experienced transitions, graph reachability from the start is equivalent to a plannable-and-executable route. Reach is the fraction of the thirteen peripheral goals so reachable.

**OOD adaptation (Experiment 1).** The goal is moved to a peripheral state and each arm adapts from the common start by Dyna-Q warm-started with its retained transition model (planning budget 10 backups per real step, ε = 0.2, step budget 20000). The reported cost is the number of real environment steps to first reach the shifted goal.

**Structural regime.** Episodes begin from states drawn uniformly across the free state space rather than from the fixed start; the task reward is unchanged and the proxy is not optimized.

**Learned representation (Experiment 3).** Visitation counts are collected under each data regime (task-only ε = 0.15 from the fixed start; passive ε = 0.9; structural uniform-random start; mixed alternating), then a weighted k-means (weighted k-means++ initialization, up to 60 Lloyd iterations) over cell coordinates with weights equal to visitation counts produces K category labels. The labels become the tiling; effective peripheral resolution is the number of distinct labels among peripheral cells. K ∈ {52, 78, 104} was tested; the main figure uses K = 78.

**Seeds.** Six seeds per condition in the resolution sweep and Experiment 3; twelve in the exercisable-reach and adaptation runs of Experiment 1; eight in the regenerated passive/optimization figure panels. Saturated and empty conditions are effectively seed-invariant; transition conditions are not, and their intervals are reported accordingly.

---

