## 4. Why objective robustness has a price

### 4.1 An objective that hardly notices the omission [R, prespecified descriptive]

How much does omitting retention cost each objective when retention is present? The representation term answers this. It is the U1 lost by planning on 011 rather than 111, averaged over the 40 worlds at $s=0,\psi=0$.

| Objective | Mean representation term (U1) | 95% interval |
|:---|---:|:---|
| F0 | **+1.851** | [+0.802, +2.900] |
| F1-eco | **+0.014** | [−0.173, +0.201] |
| F1-eco-fixed | +0.094 | [−0.206, +0.395] |

The observed mean omission cost under the ecological objective was **much smaller in this sample** than under F0. This was a declared descriptive comparison, not an equivalence test:

- no equivalence margin was set;
- the F1-eco interval contains both meaningful positive and negative values;
- the fixed-$\lambda$ variant shows that the result does not hinge on recomputing $\lambda$, and nothing more;
- one mechanism and one baseline were examined.

**[IP]** A plausible reading is that the ecological objective already builds upstream wetland for its own reasons, so learning that wetland also protects the downstream municipality changes little in its plan. F0 builds wetland only when its model says that it pays.

### 4.2 The price [R, prespecified descriptive]

The ecological objective is paid for even when the model is right. Its objective term under the correct model is **+1.085** U1 (95% interval +0.612 to +1.558).

This explains the shape of the confirmatory result. In the exploratory 40-world decomposition (Appendix B, T4):

- COMP pays its objective price in both branches: +1.085 when retention is present, +2.890 when it is absent;
- REP pays for misspecification only when retention is absent: +1.765.

Under an equal weighting, the always-paid price outweighs the sometimes-paid misspecification.

![Robustness and price](figures/wp1_fig3_robustness_price.png)

*Figure 3.* **A:** omission terms and the ecological objective's price, means with 95% intervals over 40 worlds; prespecified descriptive. Source: `f0c_descriptive.json`. **B:** omission terms by rain shift, world means only; exploratory (Appendix B, T2).

**[IP — Robustness is a purchase.]** An objective that makes a plan insensitive to an omitted mechanism has, in effect, bought insurance against that omission. Whether the purchase is worth it depends on how likely the mechanism is, how costly it is to omit, and how much the insurance costs when it is not needed. Calling the surrogate objective "robust" without naming the price conceals half of the comparison.

### 4.3 When the picture changes [R, exploratory]

The confirmatory comparison was fixed at exact planning parameters, no rain shift, and one mechanism. The frozen factorial contains other conditions. Their tables were declared before computation and are reported in full in Appendix B, with all counterexamples. They are exploratory and cannot alter the confirmatory verdict.

**Parameter error.** With perturbed planning parameters ($s=0.25$), REP's mean U1 advantage nearly disappears: −0.010 and −0.301 for the two draws, with worlds splitting 24/15 and 26/12 (counts below 40 are exact ties). F0's parameter term (+2.37 to +2.65 U1) exceeds F1-eco's (+0.86 to +1.52). The ecological contrasts keep their direction.

- **The confirmed U1 result is a statement about exact parameters.** It should not be described as robust to parameter error.
- **The near-zero means are descriptive.** They are not evidence of zero effect.

**Rain shift.** F0's omission term grows from +0.518 to +1.851 to +3.567 as $\psi$ moves from −0.1 to +0.1, while F1-eco's stays below +0.08. The mean REP-minus-COMP contrast moves from −1.318 to −0.808 without reversing.

**Other mechanisms.** In all twelve (baseline, mechanism) pairs the mean U1 contrast favours REP and the mean deficit contrast favours COMP. For S and C, however, the omission term itself is small. Those contrasts mostly reflect the ecological objective's U1 price, not any value in representing S or C.

**Pareto fronts.** Each strategy is mostly undominated among the 33 evaluated policies when its own model is right, and often dominated when it is wrong. On the U1–deficit front:

- REP is undominated in 97.5% of worlds with retention present, but in 55% without;
- COMP is undominated in 100% without retention, but in 30% with.

**Which omission matters is itself conditional.** In the earlier eight-world pilot (development worlds; true mask 111; planner masks ablated), omitting R carried almost all of F0's U1 omission effect at exact parameters: R +0.796, S −0.003, C +0.027. With parameter error ($s=0.25$, $\psi=0$), omitting C (+0.434) mattered more than omitting R (+0.338). These are omission effects in the planner, not physical effect sizes, and the sample is small.

**[IP]** The relevance of a missing mechanism is not a fixed property of the mechanism. It depends on what else the planner gets wrong.

