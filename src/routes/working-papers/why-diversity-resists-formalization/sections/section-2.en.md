## 2. Method: adversarial decay as evidence

The paper's evidence is of two kinds, and the first is unusual enough to state plainly.

### 2.1 The decay curve

The investigation began with a strong claim — *improvement erodes contestability* — placed under sustained critique by a panel of frontier language models used as deliberately decorrelated observers (role-isolated, different families, integrated by a human). Across five rounds the claim did not survive intact. It narrowed, in order:

1. **Universal coupling** — improvement and contestability trade off, always.
2. **Level-relative coupling** — the trade-off holds within a fixed hypothesis space; conceptual revolutions change the space and escape the within-space argument.
3. **Process-priceable, not outcome-priceable** — you cannot price the unconceived alternative, but you can parameterize the *generator* that produces alternatives; the unobservability argument as first stated was wrong.
4. **Exogenously protectable** — internal protectors of diversity *can* be selection-stable (mutation rate is the witness), so the protector need not be external; the impossibility claim was wrong.
5. **Source-term locality** — what survives: alternatives decay under the objective and persist only via a source term, and the decisive variable is whether that term sits inside or outside the optimizer's control set.

Each narrowing was forced by an objection the proposer could not absorb without changing the claim, and each made the claim smaller, more useful, and less grand. The recurring failure mode of the *proposer* is itself data: a tic of promoting "hard / costly / reachable" into "impossible." The mirror failure mode of the *panel* was promoting every objection into a more elegant synthesis. Both are frames that cannot be surprised; the narrowing only occurred in the gaps between them, where observers did not share the proposer's frame.

This yields the one claim the whole exercise could not kill, and it is reflexive: **a claim held contestable by genuinely decorrelated observers degrades gracefully toward something real, and the degradation works only as long as the observers do not converge on a shared frame.** The moment the investigation becomes a single synthesis everyone nods at, it stops improving. The decay curve is thus a live instance of its own subject.

### 2.2 The four-lens experiment

The decay curve produced a candidate order parameter ("reach") that was suspected of being not one variable but several mechanisms sharing a word. To test whether the cross-domain pattern was *identity* (one mechanism) or *rhyme* (distinct mechanisms that merely resemble each other), we ran a controlled elicitation.

Four disciplines were each asked the identical structural question, phrased entirely in that discipline's native terms. Each prompt:

- forbade all cross-cutting vocabulary (*diversity, exploration, contestability, reach, adaptivity, corrigibility, absorption*);
- withheld the hypothesis and left "rises / falls / holds" as equally live answers;
- demanded a fixed five-field output ending in a **minimal formal statement** and an in-field unresolved disagreement.

Two model families per lens, drawn from different providers, gave a within-lens replication check before any cross-lens comparison. The integrating model was excluded from being a lens, to avoid correlating the integration with one of its inputs.

The verdict criterion was fixed *before* the returns were read: identity would require the independent minimal formal statements (field 4) to share structure, with the exception conditions (field 3) independently naming the same escape route. Rhyme would show convergent intuitions but structurally divergent formalisms. The prompts are reproduced in the appendix.

A caution that governs the whole result: these observers share heavy training overlap. **Agreement among them is strong evidence that the four disciplinary concepts are formally isomorphic, and weak evidence that the isomorphism reflects the world [H].** What four textbooks encode in the same shape may be a deep feature of optimizing systems or a deep feature of how we are taught to model them. The experiment cannot separate those, and the paper does not pretend it can.

---

