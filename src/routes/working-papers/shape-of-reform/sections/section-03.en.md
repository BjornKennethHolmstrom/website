# §3 — The descriptive geometry does not replicate: four nulls, one failure

Four candidate claims came out of Paper XIX's exploratory pass and the audit of §1.2. Each was registered with a null before the replication ran, on twenty independently retrained zoos, with distance matrices persisted so that the tests could be recomputed — which the original run had made impossible by saving only heatmap images. All four nulls held. Together they are the paper's first headline failure: **the descriptive geometry Paper XIX advertised does not exist.** (The paper's tally of *three* failures counts this whole section as one; the other two are the missed prediction of §4.1 and the failed geodesic mechanism of §4.3.)

The four nulls are not four versions of the same mistake, and reading them as a taxonomy is more useful than reading them as a list. Each shows a distinct way an exploratory geometry can overstate itself — scale mistaken for shape, an identity mistaken for a measurement, a threshold artifact mistaken for structure, and a cross-sectional difference mistaken for a transition:

| | the null that held | the error it exposes |
|---|---|---|
| §3.1 | stress does not reshape the space | **scale** mistaken for **shape** |
| §3.2 | the connectivity threshold is the MST bottleneck edge | an **identity** mistaken for a **measurement** |
| §3.3 | bridge identity is regime-invariant at slack | a **threshold artifact** mistaken for **structure** |
| §3.4 | no topological transition under a sweep | a **cross-sectional difference** mistaken for a **transition** |

## 3.1 Stress rescales factorization space; it does not reshape it

The headline Paper XIX gestured at was that environmental stress *reshapes* the space of factorizations — that a windy world and a damped world induce not merely more-distant controllers but differently-arranged ones. The registered test asks whether between-regime distance matrices differ in **shape**, once **scale** is removed.

Two independent shape statistics were used, and the test was made deliberately generous to the reshaping hypothesis: it counts as detecting a warp if *either* statistic does.

**A noise ceiling first.** For each regime, the evaluation stream was split in half and a distance matrix computed on each half. The correlation between a regime's two halves is the highest any comparison could achieve — it is what "the same arrangement, measured twice" looks like, and it bounds what "a different arrangement" could possibly fall below. That within-regime split-half ceiling sat at **0.87** (Pearson, median across zoos).

**The between-regime comparison then fell essentially on the ceiling.** Between-regime shape correlation was **0.85** — a shortfall of 0.075 against a registered bar of 0.20. Two regimes' factorization arrangements are as similar to each other as two halves of a single regime's own data. A mean-normalized Frobenius shape distance, an independent statistic not automatically invariant to scale, told the same story against its own split-half ceiling.

**Meanwhile the scale moved substantially.** The ratio of the largest to the smallest mean distance across regimes was **1.56**: stress makes every controller more distant from every other, uniformly, by more than half again. The map stretches; it does not rearrange.

> **Registered outcome: null holds.** The environment sets the *size* of factorization space, not its *shape*. `[R within the model]`

This is the load-bearing failure, because it is the one that directly refutes what the sibling was advertised to show. The apparent reshaping in XIX's exploratory figures was rescaling seen through a statistic — raw correlation — that does not separate the two. A uniform stretch of all distances leaves correlations high and Frobenius shape distances small; it was there in XIX's own numbers, misread as arrangement.

## 3.2 The connectivity threshold is an identity, not a measurement

Paper XIX's topological reading rested on a per-regime **connectivity threshold** ε_c — the distance at which the controllers, linked whenever they fall within ε_c of each other, first form a single connected component. That the threshold differed by regime was taken as evidence that the ecology's connective structure differed by regime.

It is not evidence of anything of the kind, and the reason is algebraic rather than empirical. For single-linkage connectivity, the threshold at which a graph first connects is **exactly the largest edge of its minimum spanning tree** — this is a theorem, not a finding. The replication confirms it numerically as a check: across all regimes, ε_c exceeds the MST's maximum edge by between 0.5% and 3.8%, which is precisely the granularity of the threshold sweep. ε_c carries no information the MST bottleneck edge does not.

So "the connectivity threshold differs by regime" reduces to "the largest necessary link is longer in some regimes," which reduces to "distances are larger in some regimes" — which §3.1 has already accounted for as rescaling. The threshold was a third view of the same magnitude effect, wearing the vocabulary of topology.

> **Registered outcome: the quantity is an identity.** `[R]` The per-regime connectivity threshold measures distance magnitude, not connective structure, and any claim resting on its variation is a claim about §3.1.

We state this at length because it is the most transportable caution in the paper. Graph-threshold statistics — the value at which a similarity graph connects, percolates, or fragments — are widely used as though they were structural. When the graph is built by thresholding a distance matrix, the connection point is often a bottleneck edge in disguise, and its variation across conditions is often nothing but the variation in the underlying distances. The discipline the series applies to metrics (separate magnitude from shape) applies to thresholds too, and less obviously.

## 3.3 Bridge identity is regime-invariant at any honest threshold

Paper XIX reported that the controller with the highest betweenness — the "bridge" that most of the ecology's shortest paths run through — differed by regime, and distinguished this bridge role from the "governor" role empirically (a result this paper does not disturb; it was established behaviorally, not topologically). The registered question here is narrower: is the *identity* of the bridge a stable property, or an artifact of where the threshold is set?

At ε_c, bridge identity does vary by regime — and this is exactly what §3.2 predicts it should, spuriously. At the connectivity threshold the graph is a **near-tree**: it has just barely enough edges to connect, so almost every node is a cut vertex and betweenness is dominated by which few links happened to close the graph. Near-trees are made of articulation points by construction, and reading bridge identity there is reading noise at the connection knife-edge.

At any **slack** threshold — 1.25 ε_c and above, where the graph has room to spare and betweenness reflects genuine centrality rather than barely-connectedness — the betweenness ranking is **regime-invariant**. The controller that is most central under one stress is most central under the next. The registered statistic (Spearman correlation of the full betweenness vector across regimes, robust to ties) sits well above the threshold that would indicate regime-dependence.

> **Registered outcome: null holds.** Bridge identity is regime-invariant once the graph is not standing on the connectivity knife-edge. The apparent regime-dependence in XIX was an ε_c artifact. `[R within the model]`

The methodological echo of §3.2 is deliberate: a statistic read *at the connectivity threshold* inherits the threshold's degeneracy. Any structural claim about a thresholded graph must be shown to survive slack, or it is a claim about the knife-edge.

## 3.4 There is no topological transition — only smooth drift

The most ambitious of XIX's exploratory suggestions was that factorization space might undergo *topological transitions* under stress — that as a regime is pushed, the ecology might split into components, or form loops, or change its connective character discontinuously. Six discrete regimes cannot show this: regime-to-regime *variation* is not a *transition*, which requires a continuously swept parameter and a discontinuity in it.

So the replication swept one. A single stress parameter — wind magnitude — was varied in fine increments, and the graph's invariants tracked at a **scale-invariant** threshold (a fixed quantile of the distance distribution, so that a uniform rescaling of the §3.1 kind could not masquerade as a topological event). Component count, cycle rank, and largest-component size were read at each step.

They drift. Smoothly. The mean absolute change in component count per sweep step is 0.31 — well below the discontinuity a transition would require — and no jump recurs at a consistent location across zoos.

> **Registered outcome: null holds.** Under continuous stress, the topological invariants of factorization space vary smoothly. There is no transition. `[R within the model]`

Combined with §3.1, the reading is coherent: a space whose shape is stable and whose scale stretches smoothly has no reason to undergo topological transitions, and it does not. The two nulls are the same fact seen twice.

## 3.5 What the four failures have in common

They are not four independent disappointments. They are one failure — the descriptive geometry does not exist — reached four ways, and what unites the four is a single methodological error:

> Each result arose by **attributing structural meaning to a quantity before separating scale, threshold construction, sampling variation, and parameter continuity.** Rescaling was read as reshaping before scale was separated from shape (§3.1); a distance bottleneck was read as a connectivity threshold before the threshold's construction was examined (§3.2); knife-edge betweenness was read as a stable bridge role before sampling variation at the connection point was accounted for (§3.3); and a cross-sectional difference between regimes was read as a latent transition before a continuous parameter was actually swept (§3.4). In each case the geometric vocabulary outran the geometric content.

This is not a criticism of Paper XIX, which marked all of it as exploratory and promised exactly the registered test that has now been run. It is the registered test doing its job. And it clears the ground for §4, which is about the one thing in this space that is *not* reducible to the magnitude of a symmetric distance — the directed cost of moving through it.

---

