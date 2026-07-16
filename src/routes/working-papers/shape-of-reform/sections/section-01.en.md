# §1 — A promised geometry, audited before it was built

## 1.1 The promise

Paper XIX closed with a promise. It had built a *zoo* of controllers — bounded predictors each trained under a different environmental regime — and had begun to treat the set of them as a space: controllers that behaved similarly were "close," controllers that behaved differently were "far," and one could ask which controllers sat between which, which held the ecology together, which could translate to which. §7.4 named the sibling paper that would make this rigorous: a **geometry and topology of factorization space**, where a factorization is a bounded controller's commitment to a finite set of task-relevant distinctions (Paper 0), and where the shape of the space would say something about the shape of institutional possibility.

The exploratory evidence was suggestive. Distance matrices differed by regime, with cross-regime correlations ranging from high to nearly zero. Connectivity thresholds differed by regime. The model that "bridged" the ecology was not the model that "governed" it. Paper XIX marked all of this, correctly, as *illustrative, not registered* — and promised the registered version.

## 1.2 The audit

This is the registered version, and the first thing it did was not replicate — it audited. Before a line of the paper was drafted, the four candidate claims inherited from XIX were examined against the arithmetic of how their statistics are computed. Two did not survive the examination even in principle:

- The cross-regime correlations that looked like *reshaping* were computed on 21 pairwise distances (seven models), where a correlation's standard error near zero is roughly 0.22. The advertised spread from 0.90 to 0.09 was, in its lower half, indistinguishable from sampling noise: 0.09 did not mean "these regimes are unrelated," it meant "we cannot tell."
- The connectivity threshold that anchored the *topological* reading is, for single-linkage connectivity, exactly the largest edge of the minimum spanning tree — an algebraic identity, not a measurement. "The threshold differs by regime" is a restatement of "distances are larger in some regimes," and says nothing about geometry.

An audit that finds the headline compromised before the paper is written is not a setback; it is the falsifiability discipline of the series working as designed. Paper XXIII's audit was cheaper than its drafting would have been, and it changed what the paper is about. The point is worth generalizing, because it is the methodological spine of the series: **a falsifiability audit precedes drafting, so that a paper is never built on a claim its own data cannot bear.** XXIII is the clearest case the series has produced of that audit doing decisive work.

## 1.3 What replaced the promise

The audit did not leave nothing. It relocated the paper.

Paper XIX had built a *map* — behavioral distances between controllers — and, because its adaptive architecture selected an active controller at zero cost per step, it had never needed to ask what it costs to *move* on that map. There was no travel. The map was inert, and an inert map is exactly the kind of object whose "geometry" can look rich while carrying no information about anything one would want to do with it.

So the paper's real question turned out to be one XIX had not asked: **when reform is not free — when becoming a different institution costs something — what governs the cost?** That question required a second quantity, a *transition cost*, that the series did not have. Building it correctly took three attempts (Appendix B), and the third attempt is where the paper's results live. The map, replicated and audited, mostly fails. The travel, once priced, yields an object neither XIX nor the exploration that preceded it expected.

## 1.4 The shape of the paper

Three registered failures and three earned results.

The **failures** (§3) dispatch the descriptive geometry: stress rescales the space rather than reshaping it, the connectivity threshold is an identity, and no topological transition exists. These are reported as failures — nulls that held — not smoothed into partial successes.

The **earned results** (§4) describe the directed cost structure: behavioral distance predicts reform cost only weakly and provably cannot do better; transition cost is asymmetric and does not compose; and reform reaches its target most cheaply by staging through the target's neighbourhood rather than by a direct leap. The organizing statement, which §5 defends:

> The factorizations form a metric space of behaviors — but reform does not move through that metric space. Reform is a **directed adaptation process** whose cost is asymmetric, non-composing, and update-relative, laid over the behavioral metric without agreeing with it. The behavioral metric governs how factorizations *differ*; the cost governs what an institution can *become*, and they are not the same structure.

One of the three earned results (§4.1) is a registered prediction that **missed its threshold**, and we report it as a miss with content rather than round it up. One (§4.3) has a mechanism that an automated verdict got *wrong*, on a statistic that was degenerate at small samples, and §4.3 is partly the record of catching that. The series' discipline is not that its predictions succeed; it is that its failures are reported as failures and its near-misses are not laundered. This paper leans on that discipline more than most.

---

