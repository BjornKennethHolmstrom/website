## 4. Non-uniqueness: the equivalence class

### 4.1 The world constrains only the boundary

Section 3 produced a factorization and showed that capacity determines which variables it contains. It did not show that the factorization is unique, and it is not. This is the second foundational fact, and it is the one that turns coordination from a discovery problem into a selection problem.

The formal statement is a bisimulation result, standard in reinforcement learning and control and worth stating in this paper's terms. Call two factorizations *behaviorally equivalent* if, for every history of the system's interactions, they induce the same distribution over future observations — the same predictions, and where there is action, the same optimal policy. Two internal states that always lead to the same conditional future are bisimilar; a factorization is an aggregation of raw histories into such states; and two aggregations that preserve the bisimulation relation are indistinguishable from outside. The world tests a system only at its behavioral boundary — what it predicts, what it does — and imposes no constraint on the internal coordinates in which the system reaches those predictions. The consequence: **the world enforces consistency at the boundary and leaves the internal language free.**

The equivalence class this induces is not small. In any non-trivial environment it is generically enormous, along at least three independent axes.

### 4.2 Three layers of non-uniqueness

The three are worth separating, because they carry very different weight for the series and are too often run together.

The first is **gauge freedom**: coordinate transforms. If one factorization uses $(x, y)$ and another uses $(x+y,\ x-y)$, they may be behaviorally identical — a linear remixing of the same information, with the decoder adjusted to compensate. Any invertible transformation of the internal state that preserves the input–output map yields another valid factorization. This is real but shallow; it says the internal language is not unique, nothing more.

The second is **redundancy**: overcomplete representations. A system whose minimal sufficient state is four-dimensional but whose capacity is sixteen may store surplus information that no task requires, and many different sixteen-dimensional codes project to the same four-dimensional sufficient manifold. This too is real and too is shallow — a bureaucracy with more categories than it needs still functions; the extra categories are simply not load-bearing.

The third is **deep non-uniqueness**, and it is the one that matters. Two factorizations may perform identically *under current conditions* while differing sharply under others — in robustness to distribution shift, in communicability, in repairability, in which variables they make visible, and in who bears the cost of what they compress away. The strong claim is therefore not that many factorizations are equally good, but the sharper one:

> Many factorizations are observationally equivalent under one evaluation regime while becoming sharply non-equivalent under another.

Deep non-uniqueness is where governance enters, because it is where the choice among equivalent-looking factorizations turns out to have consequences that the current regime does not reveal.

### 4.3 The h=3 result as gauge freedom, arriving on its own

Section 3.4 already exhibited the first layer without being asked to. At $h=3$ the system commits to one velocity of a symmetric pair, and the choice — $v_x$ or $v_y$ — split near-evenly across seeds with nothing in the environment to decide it. Two networks trained on the same world reach different internal coordinates and identical behavior. That is gauge freedom appearing spontaneously inside single training runs: not a family of representations we constructed to prove a point, but a fork the optimizer took differently on different seeds because the world left it free to. The equivalence class of §4.1 is not an abstraction laid over the model; the model falls into distinct points of it on its own, and only the ensemble reveals that the point was never fixed.

### 4.4 Coordination as selection, and the shape of disagreement

If there is no unique correct factorization, then coordination among systems cannot be all of them converging on the one true description. It is instead a **selection problem**: choosing, from a large equivalence class, a shared representation to serve as the convention for joint action. Language is the clean case — there is no uniquely correct mapping from experience to words, English and French are equally powerful factorizations of what one might say, and a community coordinates by settling on one not because it is truer but because it is shared, locked in by history and the cost of switching.

This reframing sharpens what disagreement *is*, and the distinction is one the series uses elsewhere. If two systems disagree but their factorizations are behaviorally equivalent — related by a coordinate transform — the disagreement is a **gauge disagreement**, resolvable in principle by translation. If their factorizations lie in different equivalence classes, the disagreement is **substantive**, resolvable only by new data or a renegotiation of what is being optimized. Confusing the two is a characteristic institutional failure: treating a translatable difference of coordinates as a clash of values, or a genuine clash of values as a mere failure to translate. Non-uniqueness is what makes the distinction well-posed, and §5 is what keeps it from collapsing into relativism.

---

