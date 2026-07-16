# §4 — The registered demonstration: a certification crisis

**All four registered predictions fail.** So do two registered attempts to build the controller the demonstration was designed around. What survives is a mechanism we did not predict, confirmed on a fresh registered run, and it is more useful to the argument of §3 than a clean pass would have been — because it falsifies §3.4's specific prediction while confirming, more strongly than we had any right to expect, the claim that prediction was supposed to serve.

This section reports the failures first and in full, because the failures are what license the mechanism.

## 4.1 The environment, and two defects found in it

Three agents on a 5×5 grid. Agent 0 harvests resource A and cannot harvest B; agent 1 harvests B and cannot harvest A; agent 2 harvests both, inefficiently. Consumption requires one unit of *each*. So the two specialists cannot survive without gifts, and gifts are directed by a **certification channel**: each agent emits a need-signal, and an agent with surplus gives to an adjacent neighbour that signals need for what it has.

That channel is the certification kernel of §3, in miniature. It is the procedure by which the system establishes that an external fact — *this agent needs A* — obtained.

Two defects had to be fixed before anything could be measured, and both are reported because both were live in earlier work.

**The evaluation horizon exceeded the world's carrying capacity.** The first registered run evaluated for 500 steps and its admission gate (§4.3) fired immediately: the no-crisis baseline showed 0.000 late-window informed giving. Scripted agents — a fixed policy with nothing to unlearn — went from 99.4% survival to total extinction under *no crisis at all*, and every crisis condition returned identical medians because all of them were measuring a dead population.

**The cause was a degenerate action, not scarcity.** Harvest succeeded whenever the cell held any resource at all; because the capacity map is clipped at a floor of 0.01 and regrows each step, that condition is true on *every* cell, always. An agent that drifted onto a barren cell could harvest it forever, scraping hundredths of a unit, and never travel home. Tracing confirmed it: the A-specialist spent its final 120 steps parked on a cell with an A-capacity of 0.01, harvesting 112 times, and starved there while the grid sat saturated. Baseline calibration then showed the collapse was insensitive to a fivefold change in regrowth — which is what ruled out scarcity, and what identified the attractor.

The fix is a **rule**, not a parameter: harvest requires a cell holding at least 0.5 of the resource. Regrowth and consumption gain were left at their original values. Nothing was dialled toward an outcome; a degenerate action was removed, and the world proved to have been stationary all along.

**This retro-diagnoses earlier work.** The `13-certification-crisis` pilots evaluated to 400 steps and showed what was recorded as an "unstable late baseline," read at the time as a tuning wobble. It was not a wobble. It was this collapse, one window earlier. **The pilots' results were therefore measured on a dying population, and the missed-certification signature we had inherited from them as the motivation for C2 was not interpretable.** That is why C2 is re-registered below rather than assumed, and, as it turns out, why it fails.

## 4.2 Conditions

| condition | what is broken |
|---|---|
| `no_crisis` | nothing (baseline) |
| `ordinary_disturbance` | the resource landscape (regrowth halved for 100 steps); certification intact |
| `cert_crisis_used_channel` | agent 1's A-need signal is **inverted**: it signals need for A exactly when it *has* A |
| `cert_crisis_unused_channel` | agent 1's B-need signal is inverted — a channel the pilot's learned policy did not act on |
| `reset_d ∈ {10, 25, 50, 100}` | crisis, then the kernel repaired after delay *d* |

Crisis at step 200. Windows: pre [0, 200), post1 [200, 250), late [400, 500). Twenty seeds. Medians and IQRs throughout.

## 4.3 The admission gate, and the controller we could not build

The gate was registered in advance: **the crisis comparison is not interpreted at all unless the no-crisis baseline is first stationary** — survival, cooperation rate, and true-informed giving flat across the horizon. A gate failure is a reportable outcome, not an obstacle.

It fired three times.

| controller | gate |
|---|---|
| scripted (fixed rule) | **17/20 — passes** |
| DQN, frozen at evaluation | 4/20 |
| DQN, adapting during evaluation | 0/20 |
| DQN, adapting, with exploration schedule repaired | 0/20 |

The learned controller **collapses into a no-trade equilibrium**. In the frozen configuration, fourteen of twenty seeds land on exactly 33.3% survival — one agent of three — and the survivor is the generalist, who harvests both resources and needs nobody. Both specialists starve. Under the adaptive configurations even the generalist usually dies.

We attempted this twice and then stopped, under a stopping rule committed before the second attempt. The reason for stopping matters more than the failure. **Each further configuration would have been a search for a baseline that produces the result the paper wants, and at that point the preregistration is decoration.** Two registered learner failures are reported as results.

This has a consequence that reaches into §3, and we take it up in §4.6: the demonstration is therefore conducted on a **rule-following** institution, not a learning one, and there are things a rule-follower structurally cannot show.

*(An aside worth one sentence, because it is a small joke at this paper's expense. The learner survived* better *under a misaligned reward — a flat bonus for consuming, regardless of energy actually gained — than under the corrected one that pays only what is gained. The proxy was a better training signal than the objective, because it was denser. We report this because it amused us and because Goodhart, whom §5 of Paper XX derives, would have expected it.)*

## 4.4 The four registered predictions, and their failure

### C1 — a certification crisis is not an ordinary disturbance. **FAIL, 0/20.**

*Registered:* uncertified-true-need rises under `cert_crisis_used_channel` and not under `ordinary_disturbance`, by ≥ 0.10, in ≥ 16/20 seeds.

| uncertified-true-need (post1) | |
|---|---|
| no_crisis | 0.000 [0.000, 0.000] |
| ordinary_disturbance | 0.000 [0.000, 0.000] |
| **cert_crisis_used_channel** | **0.000 [0.000, 0.000]** |

The certification crisis produces **no unmet need whatsoever**. This is not a weak effect or a below-threshold effect; it is an exact zero, in every seed. The prediction is not merely unmet — the quantity it was about does not move at all.

### C2 — the signature is missed certification, not false certification. **FAIL, 0/20, and inverted.**

*Registered:* the rise in uncertified-true-need exceeds the rise in false-certified giving, in ≥ 15/20 seeds.

| rise vs. no_crisis (post1) | |
|---|---|
| uncertified-true-need | **0.000** [0.000, 0.000] |
| false-certified giving | **0.732** [0.583, 0.808] |

The result is not a near miss in the registered direction. It is the **exact opposite**, at full strength. The corrupted kernel produces *only* false certification and *no* missed certification. The finding inherited from the pilots — that a system in certification failure loses the ability to recognise true need rather than acting on lies — was an artifact of a collapsing population, and it does not survive a working baseline. §4.5 explains why, and the explanation is the section's real result.

### C3 — there is a recovery window. **FAIL.**

*Registered:* true-informed giving in the late window declines monotonically with reset delay, and reset at delay 100 is indistinguishable from no reset.

| | survival (late) | true-informed (late) |
|---|---|---|
| no crisis | 100.0 | 1.000 [0.885, 1.000] |
| crisis, no reset | 100.0 | 0.472 [0.409, 0.552] |
| reset at +10 | 100.0 | 1.000 [0.875, 1.000] |
| reset at +25 | 100.0 | 1.000 [0.875, 1.000] |
| reset at +50 | 100.0 | 1.000 [0.875, 1.000] |
| reset at +100 | 100.0 | 1.000 [0.875, 1.000] |

ρ(delay, recovery) = **0.046**. |reset@100 − no reset| = 0.528, against a registered bar of < 0.10.

**Repair works perfectly, at every delay tested.** Nobody dies, and the moment the channel is restored, correct giving resumes in full. There is no window. This was the only genuinely new claim the paper had, and the null holds without qualification.

The reason is structural, and §4.6 draws it out: **a rule-follower has no trust to lose.** Its giving is a function of the signal it sees now, not of any history with the signal. It cannot be misled into distrust, because it does not trust — it complies. Policy hysteresis requires a policy that *learns*, and the learner is the thing we could not build.

### C4 — a crisis on an unused channel is inert. **FAIL, 1/20.**

*Registered:* `cert_crisis_unused_channel` is indistinguishable from `no_crisis` on all late-window certification metrics.

| late window | no_crisis | unused-channel crisis |
|---|---|---|
| true-informed giving | 1.000 [0.885, 1.000] | 0.667 [0.576, 0.727] |
| certification error | 0.000 [0.000, 0.115] | 0.333 [0.273, 0.424] |

The "unused" channel turns out to be used. And the reason is worth more than the control was: **whether a certification channel is "used" is a property of the policy, not of the architecture.** The channel was identified as unused because the *pilot's learned policy* did not act on it — the DQN had learned not to give B to the B-specialist, who plainly has plenty of B. The scripted policy has learned nothing. It gives on *any* certified signal for which it holds surplus, and so it is exposed on every channel the architecture provides.

That generalises, and we state it as an institutional reading rather than a theorem:

> **A rule-following institution is more exposed to certification corruption than a learning one, because it has no learned scepticism.** Compliance is a larger attack surface than judgment. Every channel a rule-follower is obliged to act on is a channel through which it can be misdirected; a learner prunes the channels experience has taught it to ignore, and in doing so narrows the surface — at the cost of the rigidity Paper XXI's §3 warned about. **[IP]**

## 4.5 What actually happened: the flooding mechanism **[R within the model]**

The four failures cohere. Uncertified true need is exactly zero under a crisis that inverts the need signal — which is absurd, until one asks what the inversion actually does.

Agent 1's A-signal is inverted: it signals need for A precisely when it *has* A. The other agents comply. They give it more A. Its stock of A therefore *rises*, and having risen, it never falls below the need threshold. **The corrupted channel does not starve the specialist. It floods it.**

This was found after the fact, so it was re-registered as a fresh directional prediction and run on twenty new seeds: *under the crisis, agent 1's mean inventory of A rises and its time in true need falls.*

| agent 1 (B-specialist) | mean inv-A, pre | mean inv-A, post | steps in true need, pre → post |
|---|---|---|---|
| no_crisis | 0.930 | 0.980 | 24.6 → 18.4 |
| **crisis** | 0.930 | **2.763** | 24.6 → **10.0** |

Confirmed. The crisis nearly **triples** the specialist's stock of the resource it cannot harvest, and **halves** its time in genuine need.

So the zero in C1 is not an absence of damage. It is damage of a kind the instrument cannot see:

> **The false certification pre-empts the true need it would otherwise have masked.** Resources are misallocated to an agent that does not need them; being over-supplied, that agent stops registering as needy; and so the system's own need-detection never fires. The pathology destroys the evidence of itself.

The governance consequence is the sharpest thing in this paper, and it is not the one we set out to demonstrate:

> **The metric an auditor would reach for — *is anyone's real need going unmet?* — reads a perfect zero while the certification kernel is inverted and resources are being systematically misdirected.** The institution is not merely failing invisibly. It is failing in a way that makes its health indicators *improve*.

This is the confirmation of §3.4's underlying claim, and it is stronger than the prediction §3.4 actually made. §3.4 said the record would stay intact while the mapping it recorded stopped corresponding to the world — that an institution in certification failure would look, from inside, exactly like an institution in good order. What the demonstration shows is worse: the failure does not merely leave the diagnostics intact, it *feeds* them. The specific signature §3.4 predicted (missed certification) is falsified. The claim that signature was supposed to serve is confirmed by its own falsification.

## 4.6 Scope: what this demonstration does and does not license

Committed in §3.5 before the run, and honoured here.

**It does not convert §3 from `[IP]` to `[R]`.** The kernel is corrupted **exogenously** — the experimenter inverts the signal. The demonstration shows what happens *when* a certification kernel fails. It does not show a system generating its own kernel failure, and endogenous generation is requirement (b) of §3.2, on which the whole Gödel analogy stands or falls. §3 remains `[IP]` and this section does not launder it.

**It cannot test policy hysteresis at all.** C3's null is real but narrow: it says that a *rule-following* system recovers instantly at every delay. It says nothing about whether a *learning* system, having been taught that its certification channel lies, can be taught again that it tells the truth — and whether there is a delay past which it cannot. That is the question §3.4 is really about, it is the question that would have made C3 a governance finding rather than a mechanical one, and **we could not ask it, because we could not build a controller that learns to cooperate in the first place.** The registered learner failures (§4.3) are therefore not a footnote to C3. They are the reason C3 is uninformative.

**The corruption is total, not noisy.** The signal is inverted, not degraded. A partially unreliable channel — one that is right 70% of the time — might behave quite differently, and might well produce the missed certification that inversion does not. Nothing here speaks to it.

**One environment, three agents, one channel, one specialisation structure.** The flooding mechanism depends on the recipient being *unable* to harvest what it is given too much of. Whether it generalises to richer complementarity structures is a conjecture this result supports, not a claim it proves.

## 4.7 Summary of registered outcomes

| | registered prediction | outcome |
|---|---|---|
| GATE | baseline stationary, adaptive controller | **FAIL ×2** — no-trade equilibrium; scripted branch substituted |
| C1 | crisis ≠ ordinary disturbance | **FAIL** 0/20 — no unmet need at all |
| C2 | signature is missed certification | **FAIL** 0/20 — inverted; the signature is *false* certification |
| C3 | there is a recovery window | **FAIL** — repair works at every delay; ρ = 0.046 |
| C4 | unused channel is inert | **FAIL** 1/20 — "unused" is a property of the policy, not the architecture |
| — | *(post-hoc, re-registered, 20 fresh seeds)* flooding | **CONFIRMED** — inv-A 0.93 → 2.76; true need halved |

Five registered failures and one confirmed mechanism. We would rather report this than a demonstration that agreed with us, and the reason is contained in the result: **an apparatus that reports perfect health under a corrupted kernel is exactly the object this paper is about.** We built one by accident, and then very nearly believed it.
