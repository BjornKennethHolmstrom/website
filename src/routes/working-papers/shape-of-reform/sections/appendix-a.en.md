# Appendix A — The connectivity-threshold identity, and the object's type discipline

## A.1 ε_c is the MST bottleneck edge (for §3.2)

**Claim.** For a set of points with pairwise distances, linked into a graph whenever their distance is at most a threshold τ, the smallest τ at which the graph is connected (single-linkage connectivity) equals the largest edge of the minimum spanning tree.

*Proof.* Let $\tau^\ast$ be the largest edge weight in the MST. At any $\tau < \tau^\ast$, removing all edges heavier than τ disconnects the MST (it removes the heaviest MST edge, whose two endpoints are in different components of the remaining forest, and no lighter edge can rejoin them without contradicting the MST's minimality); since the MST is a subgraph of the full thresholded graph on the same vertex set with the same connectivity, the full graph is disconnected too. At $\tau = \tau^\ast$, every MST edge is present, so the graph is connected. Hence the connectivity threshold is exactly $\tau^\ast$. $\square$

**Consequence.** The per-regime connectivity threshold ε_c carries no information beyond the MST bottleneck edge, which is a summary of distance *magnitude*. The replication confirms this numerically: across regimes ε_c exceeds the MST maximum edge by 0.5–3.8%, exactly the granularity of the threshold sweep. Any claim resting on ε_c varying by regime is a claim about §3.1, restated in the vocabulary of topology. This is registered as `[R]`.

## A.2 Why the triangle inequality is not statable (for §4.4)

The reform cost $C(M_A \Rightarrow R_B)$ has type $M \times R \to \mathbb{R}$. A triangle inequality $C(A,B) \leq C(A,C) + C(C,B)$ requires all three of $A$, $B$, $C$ to be objects of one type, so that each of the three costs is an instance of the same two-argument function and the middle term $C$ appears once as a head and once as a tail.

Here the arguments are typed $M$ (left) and $R$ (right). In $C(M_A \Rightarrow R_C) + C(M_C \Rightarrow R_B)$, the token "C" appears first as a regime $R_C$ and then as a model $M_C$ — two different objects that the notation conflates. Even granting the conflation, $M_C$ is not the model produced by the first operation: $U(M_A, R_C, \tau)$ is a model that *performs like* $M_C$ on $R_C$ but is a distinct point of $M$ (§4.4). So the second leg's true cost is $C(U(M_A, R_C, \tau) \Rightarrow R_B)$, an empirical quantity generally unequal to $C(M_C \Rightarrow R_B)$.

**The reusable form.** Compositional laws require compositional operations, not compatible-looking indices. The syntactic slot for a triangle inequality can be filled with three measured numbers whenever three objects exist; whether the resulting statement *means* anything requires that the operation producing the first cost yield the object the second cost is defined on. For reform cost it does not, and the "violation rate" of ~25% (§4.4) is therefore not a violation of anything — it is a category error tabulated. `[R]`

---

