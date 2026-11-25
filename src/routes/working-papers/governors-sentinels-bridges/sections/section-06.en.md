## 6. Governor and bridge — a graph statistic

Let $e_i$ be model $i$'s vector of losses on the shared stream. The historical graph uses $d_e(i,j)=\|e_i-e_j\|_2/\sqrt{N}$, a pseudometric on models and a metric on distinct loss vectors. The score is unweighted betweenness at the minimum connected threshold $b$. Articulation means removal disconnects this particular graph, not that transfer or coordination is impaired.

[HR] P4's top mismatch was reported as 20/20, and the per-regime articulation criterion as 19/20. The supplied script computes a single full-stream graph and writes `is_articulation_any` at line 532 from that graph. No six-regime loop implements the second criterion. Its registered success cannot be certified. The first statistic is descriptive even if accurate.

**Construction effect [R].** At $b$, if exactly one edge has weight $b$ and there are at least three vertices, deleting that edge returns the disconnected strict-threshold graph. It is a bridge edge; at least one incident endpoint lies on a component with at least two vertices and is an articulation point with positive betweenness. Ties can remove this guarantee. If there are at least three cut vertices, at least one lies outside any top-two set. At 25% slack an illustrative seven-point Euclidean path graph with adjacent distances 1 and all others 1.1 becomes complete, changing five cut vertices into zero without changing the points [E].

**Level-only counterexample [R].** With $\mu_i=\operatorname{mean}(e_i)$,

$$d_e(i,j)^2=(\mu_i-\mu_j)^2+\operatorname{Var}(e_i-e_j).$$

Hence $d_e(i,j)\geq |\mu_i-\mu_j|$. If $e_i=q_i s$ for distinct positive scalars $q_i$ and common nonnegative nonzero profile $s$, the graph distances are proportional to $|q_i-q_j|$. The best governor is the minimum scalar, and its neighbors form a clique; it has zero betweenness. Under the unique-bottleneck premise some other vertex has positive betweenness. Top mismatch thus occurs despite a single underlying score dimension; centrality depends on score spacings, not only ordinal rank. Synthetic checks of 2,000 such ecologies produce 100% top mismatch and about 90% articulation outside top two [E]. Under independent uniform unique top picks, 20/20 mismatches has probability about 0.046, but this null does not account for the construction effect. These are calibration and counterexample results, not historical estimates.

Paper XXIII's separate zoos show threshold-sensitive rankings, not a re-score of P4. Neither experiment measures functional translation. A functional bridge claim would require an explicit interaction or transfer task and a matched removal or addition control. P4's functional interpretation is withdrawn.
