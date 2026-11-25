## Appendix A: Static task-relative adequacy

### A.1 Scope and notation [M]

Use the corrected VI model, not a mathematical model of a person. Let \(D,L\) be real finite-dimensional subspaces of an ambient state space, \(D\) disturbances and \(L\) tolerated deviations. Let the observation map be \(C\), with \(y=Cd\) and \(x=d+u\). This avoids the original notation that called both the goal set and the gap G_self. Define \(K=D\cap\ker C\) and
\[g_{\rm hidden}=\dim K-\dim(K\cap L).\]
Any adequate deterministic action rule based on y must assign the same action to disturbances with the same observation. Their difference lies in K, and if both residuals belong to L their difference belongs to L. Thus K must be contained in L. Conversely, if all of −D is available, choose a representative of each observed fiber and cancel it; the remaining disturbance lies in K and hence L. This proves necessity and conditional sufficiency, not adequacy under arbitrary action constraints.

Rank-nullity gives
\[\dim D-\dim(D\cap L)-\operatorname{rank}(C|_D)\le g_{\rm hidden}.\]
With \(D=\mathbb R^2,L=\operatorname{span}(e_2)\), the maps \(C=(1,0)\) and \(C=(0,1)\) both have rank one and count bound zero. The first has hidden gap zero, the second one. Counting personal goals cannot substitute for this relation. The gap does not encode magnitude of suffering or value of a life.

### A.2 Noise and the withdrawn threshold

For independent scalar Gaussian x and noise epsilon with positive variances, \(y=x+\epsilon\) and \(s=\operatorname{Var}(x)/\operatorname{Var}(\epsilon)\),
\[I(x;y)=\tfrac12\log_2(1+s),\qquad I(\epsilon;y)=\tfrac12\log_2(1+1/s).\]
Both equal 0.5 bits at s=1, not zero information. Observation rank remains one as s varies. The equality is specific to these assumptions and does not imply a qualitative transition, a rank threshold or loss of ability to reflect. The personal dissolution threshold is withdrawn.
