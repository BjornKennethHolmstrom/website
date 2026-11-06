## 6. Three responses, one coupled decision problem

### 6.1 What each response actually changes

| Response | What it changes | What it costs here | What we found |
|:---|:---|:---|:---|
| **Re-model** (assume R) | the represented transition law | nothing up front; misspecification cost when R is absent | lower mean U1 and U2 than re-valuing at exact parameters [R, confirmatory]; advantage nearly gone under parameter error [R, exploratory] |
| **Re-value** (ecological objective) | the objective | a U1 price paid whether or not R operates [R, prespecified descriptive] | better wetland outcomes [R, confirmatory]; much smaller observed sensitivity to omitting R [R, prespecified descriptive] |
| **Learn** (probe, then commit) | what the planner can observe and when | physical probe cost and time | structural nulls and self-maintained traps; little realised value for a simple learner [R, structural / exploratory] |

**[IP — The responses are coupled.]** These responses are not independent dials:

- the objective decides whether wetland is built;
- wetland decides whether retention is observable;
- observability decides whether learning is possible;
- what is learned decides which model the planner uses.

Re-valuing can thus make learning possible as a by-product, by building the stock through which the omitted mechanism would act. Assuming a mechanism can make learning unnecessary for one criterion while leaving another criterion worse.

None of these couplings was the object of a confirmatory test. The table is an interpretation of separately established pieces.

### 6.2 Negative results that should survive publication

1. **The confirmed advantage of re-modelling is fragile.** Its precision target was missed, ten of forty worlds go the other way, and under parameter error it nearly vanishes.
2. **Robustness was not free.** The ecological objective's insensitivity to the omission came with a U1 price under the correct model, and no equivalence was established.
3. **The policy compared was not the best policy.** A simple hedging heuristic had lower mean U1 than either pure commitment.
4. **The simple learner learned little.** Its declared screen was not met, and its few gains came from commitment, not information.
5. **Validation can fail correct code.** Two verification gates rejected correct implementations: a normal approximation for a rare event, and an invalid declared inequality. Both failures were kept and corrected only through newly declared gates (Appendix C).

### 6.3 Extending WP0's diagnostic framework [IP]

WP0 proposed asking four questions before choosing a remedy: What matters? How does the world work? What might matter later? Can we learn in time? This paper suggests refining the second and fourth questions.

| Question | Refinement from this paper | Diagnostic object |
|:---|:---|:---|
| How does the world work? | *Which* omission matters depends on what else is wrong (parameters, shifts) | omission terms under several planning conditions |
| How does the world work? | Assuming a mechanism and representing it correctly are different claims | REP evaluated in both mechanism branches |
| Can we learn in time? | Is the mechanism observable *under the policy we run*? | exposure occupancy of the chosen policy |
| Can we learn in time? | Is learning's value measured against a feasible learner, not an oracle? | feasible-learner margin over a fixed-policy menu |

This remains a proposal for operationalisation, not a validated framework.

