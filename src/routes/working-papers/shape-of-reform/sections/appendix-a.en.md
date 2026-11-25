# Appendix A — The connectivity-threshold identity and typed costs

## A.1 The MST bottleneck [R]

Let $G$ be a complete undirected finite weighted graph, $T$ a minimum spanning tree and $b$ its largest edge weight. At threshold $b$ the graph contains $T$ and is connected. Suppose a threshold $s<b$ connects it. Remove a largest-weight edge from $T$; the resulting two components form a cut. A threshold-$s$ path crossing the cut contains an edge of weight at most $s$, lighter than the removed edge. Replacing that edge in $T$ gives a spanning tree of smaller weight, a contradiction. Thus

$$\varepsilon_c=b=\max_{e\in T}w(e).$$

No triangle inequality or unique MST is required. Scaling all edge weights by a positive constant scales $b$; changing their arrangement may change $b$ at the same mean distance. If only one edge has weight $b$ and there are at least three nodes, it is a bridge edge and some endpoint is an articulation point. With ties this need not hold. This explains a construction effect, not the function of the corresponding model (see XIX §6).

## A.2 Types, paths and symmetric projection [R]

Let $h:M\to R$ assign home tasks. An induced model-pair function $F(m,n)=C(m,h(n))$ can be tested for triangle inequalities, but in general the second leg of actual staged adaptation uses $U(m,r_1,T_1;\omega_1)$ rather than a canonical home model. Section 5 states the additive cost on the actual updated state. This is the precise scope of the noncomposition of the tabulated cost lookup.

With nonnegative edge costs, concatenating two feasible paths gives a feasible path with the sum of their costs. Taking infima (or approximating finite infima arbitrarily closely) gives the directed triangle inequality for optimal path cost; unreachable pairs may have infinite cost. Zero cost between distinct states is allowed. This construction does not require a symmetric metric and does not certify the existence of a useful learned state geometry.

A tree with edges A–C, D–C, E–C, C–B has shortest paths to B from all three sources through C. Destination-common staging therefore does not refute geodesics. The symmetric squared-error projection in §4.1 follows by expanding the two squared residuals; its irreducible term is not a bound on rank correlation.
