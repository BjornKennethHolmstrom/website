# Appendix B — Empirical

## B.1 Environment specification

**Grid and agents.** A 5×5 grid. Three agents, each with a home cell: agent 0 at (1,1), agent 1 at (1,3), agent 2 at (2,2). Two resources, A and B. No two agents may occupy the same cell.

**Specialisation.** Harvest efficiency (rows = agent, columns = resource):

| | A | B |
|---|---|---|
| agent 0 (A-specialist) | 2.0 | **0.0** |
| agent 1 (B-specialist) | **0.0** | 2.0 |
| agent 2 (generalist) | 1.2 | 1.2 |

The zeros are the whole design. **A specialist cannot harvest its complementary resource at any rate.** Consumption requires one unit of each. So the specialists cannot survive without gifts, and the generalist can survive without anyone. That asymmetry is what makes cooperation necessary — and, as it turns out (§4.3), what makes it hard to learn.

**Resource field.** Capacity at cell $(r,c)$, with $d_i$ the Euclidean distance to agent $i$'s home:

$$\mathrm{cap}_A(r,c) = \mathrm{clip}\Big(0.05 + 2.5e^{-d_0^2/1.2} - 0.3e^{-d_1^2/1.2} + 0.5e^{-d_2^2/2.0},\ 0.01,\ 3\Big)$$

with $\mathrm{cap}_B$ the mirror image (indices 0 and 1 exchanged). Each specialist's home is rich in its own resource, poor in the other; the centre is modestly rich in both. Resources regrow toward capacity at 0.12 per step. **The clip floor of 0.01 is not cosmetic — see B.3.**

**Actions** (16): move ×4, wait, harvest A, harvest B, consume, give A ×4 directions, give B ×4 directions.

**Energy.** Start 15, maximum 20, metabolic cost 0.4/step, consumption yields up to +12 (requires 1 A **and** 1 B), giving costs 0.3. Inventory cap 3 per resource. Initial inventories: agent 0 = (2, 0), agent 1 = (0, 2), agent 2 = (1, 1).

**Harvest precondition (the fix of B.3).** Harvest succeeds only on a cell holding ≥ **0.5** of the resource. Below that the action fails and costs 0.05. This is a *world rule*, binding on every agent type.

**The certification channel — the object of study.** Each agent emits a two-bit need-signal, and under normal operation

$$\mathrm{signal}_i[\mathrm{res}] = 1 \iff \mathrm{inventory}_i[\mathrm{res}] < 1$$

An agent with surplus (> 1) of a resource, adjacent to a neighbour signalling need for it, may give. **This is the certification kernel of §3 in miniature**: the procedure by which the system establishes that an external fact — *this agent needs A* — obtained.

## B.2 The preregistration, as committed

Reproduced as fixed **before any run**. §9.4 asks the reader to accept a branch substitution as licensed rather than convenient; that request is empty unless the reader can check what was committed in advance.

### Conditions

| condition | manipulation |
|---|---|
| `no_crisis` | none |
| `ordinary_disturbance` | regrowth halved for steps 200–300; **certification intact** |
| `cert_crisis_used_channel` | from step 200, agent 1's A-signal **inverted**: signals A-need iff inventory$_A \geq 1$ |
| `cert_crisis_unused_channel` | from step 200, agent 1's **B**-signal inverted: signals B-need iff inventory$_B \geq 2$ |
| `reset_d` for $d \in \{10, 25, 50, 100\}$ | used-channel crisis at 200, kernel repaired at $200 + d$ |

Crisis at step 200. Windows: pre [0, 200), post1 [200, 250), late [400, 500). Twenty seeds, each independently trained. Medians and IQRs reported; never trajectories.

### The admission gate

**Registered as a possible outcome, not as a hurdle assumed to be cleared.** The crisis comparison is not interpreted at all unless the `no_crisis` baseline is first stationary across the evaluation horizon:

- survival(late) ≥ 0.90 × survival(pre), **and**
- cooperation **rate** (late) ≥ 0.70 × cooperation **rate** (pre), **and**
- true-informed giving (late) ≥ 0.60

in ≥ 16 of 20 seeds. **If the gate fails, that is the reported result and C1–C4 are withheld.**

*(A defect in our own gate, reported because it nearly cost us the run: the first version compared cooperation as a raw **count** across windows of unequal length — 200 steps versus 100. Normalised to a rate, the pre→late ratio was 0.82, comfortably above the 0.70 bar. The world was closer to passing than our own test could see.)*

### The four predictions

| | registered claim | threshold | registered null |
|---|---|---|---|
| **C1** | uncertified-true-need rises under the used-channel crisis and not under ordinary disturbance | ≥ 0.10 margin, ≥ 16/20 seeds | both disturbances damage the channel equally; the failure is generic |
| **C2** | the rise in uncertified-true-need exceeds the rise in false-certified giving | ≥ 15/20 seeds | the failure is symmetric, or false-certification-dominant |
| **C3** | true-informed giving (late) declines monotonically with reset delay, and reset at +100 is indistinguishable from no reset | ρ ≤ −0.50; \|diff\| < 0.10 | reset delay has no effect — repair always works, or never does |
| **C4** | the unused-channel crisis is indistinguishable from no crisis on all late certification metrics | within 0.10, ≥ 16/20 seeds | any signal corruption damages coordination — which weakens C1 |

**Registered branch: the learned (DQN) controller.** The scripted branch was designated *a robustness check, not a registered outcome*.

C2 was flagged at registration as inherited from pilots that had run on an unstable baseline, and as therefore liable to fail. It did.

### The deviation

The registered branch failed the admission gate across three configurations (B.4). The **scripted** branch, which passes at 17/20, was substituted. The gate is baseline-only — it tests `no_crisis` and nothing else, and no crisis arm enters it — and C1–C4 had **not been computed on the scripted branch** at the time of the switch, which was declared before they were computed. We hold this licensed; §9.4 states why, and states what we cannot claim.

## B.3 The environment defect: a barren-cell attractor

**Symptom.** The first registered run's gate fired immediately: `no_crisis` late-window true-informed giving of 0.000 [0.000, 0.000]. Scripted agents — a fixed policy, nothing to unlearn — went **99.4% → 58.7% → 0.0%** survival across pre/post1/late under no crisis at all. Every crisis condition returned identical medians, because all of them were measuring a dead population.

**Scarcity ruled out.** A baseline calibration sweep over regrowth × consumption gain, scripted agents, `no_crisis` only:

| regrowth | 0.12 | 0.20 | 0.30 | 0.45 | 0.60 |
|---|---|---|---|---|---|
| survival, pre → late | 100 → 0 | 100 → 0 | 100 → 0 | 100 → 0 | 100 → 0 |

**Total insensitivity to a fivefold change in regrowth.** The agents were not short of resources.

**Cause.** Harvest succeeded whenever `resources[r,c,res] > 0`. Because the capacity map is clipped at a floor of **0.01** and regrows every step, that condition is true on **every cell, always**. An agent that drifted onto a barren cell could harvest it forever and never travel home.

The trace (seed 0, steps 260–380):

| agent | position | A-capacity there | actions in window | outcome |
|---|---|---|---|---|
| 0 (A-specialist) | parked at (1,4) | **0.01** | harvest ×112, give ×4, consume ×3 | starved, final inv-A 0.96 |
| 2 (generalist) | parked at (1,3) | **0.023** | harvest ×57 | starved |

Total A on the grid held constant at 12.4 throughout — **saturated**. The agents starved on the only cells in the grid that had nothing, while the rest of the world sat full.

**Fix.** `HARVEST_MIN = 0.5` — a **rule**, not a parameter. Regrowth (0.12) and consumption gain (12.0) were left at their original values. Nothing was dialled toward an outcome; a degenerate action was removed. Under the fix the baseline is stationary at the *original* regrowth:

| | pre | late | ratio |
|---|---|---|---|
| survival | 100.0 | 100.0 | 1.00 |
| cooperation / step | 0.0975 | 0.0800 | 0.82 |
| true-informed giving | — | 1.000 | — |

**Debt owed (§9.8).** The same degenerate action exists in the coordination simulations that seed the multi-agent line of work. Their shorter episodes mask it. **Those results should be re-examined before anything is built on them.**

**And it retro-diagnoses the pilots.** The `13-certification-crisis` pilots evaluated to 400 steps and recorded an "unstable late baseline," read at the time as a tuning wobble. It was this collapse, one window earlier. The pilots' results were measured on a dying population, and the missed-certification signature we inherited from them as C2's motivation was never interpretable.

## B.4 The learner: three configurations, three failures

The registered branch was the learned controller. We could not build one that clears the baseline gate.

| | v2 (frozen) | v3 (adaptive) | v4 (adaptive + exploration fixed) |
|---|---|---|---|
| evaluation | frozen, ε = 0, no replay | learns, ε = 0.05, replay each step | learns, ε = 0.05, replay each step |
| consume reward | flat **+12** | energy actually gained | energy actually gained |
| death penalty | none | −20 | −20 |
| survival bonus | none | none | +0.1 / step alive |
| discount γ | 0.95 (~20-step horizon) | 0.99 | 0.99 |
| ε schedule | *side effect of replay count* | *side effect of replay count* | **explicit: linear 1.0 → 0.05 over 70% of episodes** |
| episodes × steps | 600 × 500 | 600 × 600 | 1000 × 600 |
| **GATE** | **4/20** | **0/20** | **0/20** |
| survival, pre (median) | 100.0 | 45.7 | 45.3 |
| cooperation / step, pre | 0.307 | 0.005 | 0.005 |

**v2 — the no-trade equilibrium.** Fourteen of twenty seeds land on **exactly 33.3% survival** — one agent of three. The survivor is the generalist. Both specialists starve. Six seeds sustain cooperation indefinitely. The distribution is bimodal, not noisy: the learner either finds trade or it does not.

**v3 — the exploration bug, which was ours.** `replay()` decayed ε by 0.997 per call. Reaching the floor of 0.02 takes ≈ 1,300 calls. v2 called replay 25× per episode → floor at ≈ **52 episodes** of 600. v3 called it every 8 steps of a 600-step episode, i.e. 75× → floor at ≈ **17 episodes of 600**. Raising the replay frequency silently cut the exploration schedule by two thirds. **The exploration schedule was never a schedule; it was a side effect of an unrelated hyperparameter.**

Compounding it: v3's consume-reward fix is *correct* but makes the learning signal sparser and state-dependent. A flat +12 is a beacon; `min(12, E_max − E)` is not. Correct and harder — survivable with exploration, fatal without it.

**v4 — the fix, and the failure.** ε became an explicit per-episode schedule, decoupled from replay entirely; a dense survival bonus encoded the viability objective. Not touched: giver-credit magnitude, learning rate, death-penalty magnitude, network size, γ, the crisis manipulations, every registered threshold. **Result: 0/20**, and worse than v2 even at survival — the generalist now dies in 80% of seeds.

| v4, who survives (of 20 seeds) | |
|---|---|
| A-specialist | 0% |
| B-specialist | 0% |
| generalist | 20% |
| all three | **0%** |

**A footnote at this paper's expense.** v2's *misaligned* reward — a flat +12 for consuming, regardless of energy gained — produced **better survival** than v4's aligned one, which pays only what is actually gained. The proxy was a better training signal than the objective, because it was denser. We record this because Paper XX derives Goodhart's law from bounded representation, and Goodhart would have expected it.

**The stopping rule, committed before v4 ran.** If v4's gate failed, we would stop, report both failures as results, and fall back to the scripted branch. It failed. We stopped.

> A fourth configuration would have been a search for the baseline that produces the result the paper wants, and at that point the preregistration is decoration.

## B.5 The flooding-confirmation run

**Provenance, stated because it matters.** The flooding mechanism (§4.5) was found **after** C1–C4 had failed, by asking why uncertified-true-need was an exact zero under a crisis that inverts the need signal. It is therefore **post-hoc**. To avoid presenting it as a preregistered finding, it was restated as a fresh directional prediction and run on twenty new seeds before being written up.

**The prediction, registered before this run.** Under the used-channel crisis, agent 1 (the B-specialist, whose A-need signal is inverted) is **flooded** with A, not starved:

> mean inventory-A rises after the crisis, and time spent in true A-need falls.

**Harness.** Scripted agents; `no_crisis` and `cert_crisis_used_channel` only; 400 steps, crisis at 200; 20 seeds. Reset and ordinary-disturbance arms not run — this is a mechanism test, not a repeat of §4. Measured: agent 1's mean inventory-A pre and post, its step-count below the need threshold, and A-gifts received post-crisis.

**Result.**

| | mean inv-A (pre) | mean inv-A (post) | steps in true A-need, pre → post | A-gifts received (post) |
|---|---|---|---|---|
| `no_crisis` | 0.930 | 0.980 | 24.6 → 18.4 | 6.7 |
| **crisis** | 0.930 | **2.763** | 24.6 → **10.0** | 7.5 |

**Confirmed.** The corrupted channel nearly **triples** the specialist's stock of the resource it cannot harvest, and **halves** its time in genuine need.

**Reading.** The specialist signals need for A precisely when it *has* A; the others comply and give it more; its stock rises; having risen, it stops falling into need. So the exact zero in C1 is not an absence of damage — it is damage the instrument cannot see, because the instrument's denominator is *true need*, and the pathology has eliminated true need by over-serving the party it misidentified.

> **The false certification pre-empts the true need it would otherwise have masked.**

**Tier: `[R within the model]`**, with the provenance above attached. It is not a preregistered finding and §4 does not present it as one.
