## 1. The unexamined primitive

### 1.1 What the series builds on and never builds

The Governance as Engineering series has a load-bearing object it never puts weight on directly. From Paper I onward, an institution is a controller: it has a model of some part of the world, it acts on that model, and the analysis concerns what happens when the model and the world diverge. Paper VI names the divergence the variety gap and makes it the engine of the series' failure modes. Paper XII draws a boundary between a controller's jurisdiction and the environment it excludes, and studies what the exclusion costs. Paper XVII asks what it means to certify that a model is adequate to its world. Every one of these analyses begins after a prior step has already happened: the world's continuous, high-dimensional flux has already been carved into a finite set of variables — *these* count, *those* do not — and the controller's model is a model in *those* variables. That carving is the factorization. It is the observation channel, the choice of state space, the ontology the institution reasons in. And the series treats it as given.

Treating it as given is not a defect of the earlier papers; it is a division of labor. One can study how a controller fails against its world without asking where its variables came from, just as one can study a market without deriving the concept of a price. But the question sits there, and it is the kind of question the series' own method — compress the theory, find the smaller set of primitives from which the rest follows — is obliged to ask eventually. If factorization can be derived, the framework rests on fewer axioms, and the properties of factorizations that the series exploits (that they can be wrong, that they can be shared, that they can drift) become properties with a mechanism behind them rather than stipulations.

### 1.2 The question, made precise

A factorization, in this series' usage, is a mapping from a system's raw sensory interface to an internal state space: a partition of the world's flux into the variables the system predicts, decides, and acts in. In control theory it is the state-space representation; in machine learning the latent-variable model; in cognition the ontology; in an institution the set of quantities it collects, reports, and governs by. The question of this paper is whether that mapping is primitive — a starting point that must be posited — or whether it is the inevitable output of something simpler.

The question has a shape worth stating carefully, because the obvious answers are traps. It is not enough to name a physical constraint that *permits* factorization, because almost any constraint permits almost any partition. Nor is it enough to name a constraint that *forces compression*, because compression alone does not select a factorization — it only demands that *some* variables be dropped, not which. A successful derivation must produce the selection: it must explain not merely that the system carves the world, but that it carves it at joints that track the world's own structure. That is the bar §2 sets for the candidates.

### 1.3 Plan

Section 2 argues the two-ingredient claim against the standard list of deeper primitives, and isolates the specific pair that produces selection rather than mere compression. Section 3 exhibits the mechanism in a minimal model and reports the three registered properties. Section 4 develops non-uniqueness: the equivalence class of behaviorally identical factorizations, and what it implies for coordination. Section 5 resolves the apparent tension between non-uniqueness and the evident fact that some factorizations are better — the distinction between ontological and pragmatic preference. Section 6 re-grounds four results of the series in these foundations. Section 7 states what the paper does not show.

---

