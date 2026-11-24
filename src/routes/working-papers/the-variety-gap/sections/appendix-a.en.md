## Appendix A: Static Linear Regulation — Rank and Alignment

### A.1 System, Disturbance, and Goal

Let $X$ be a finite-dimensional real vector space, $D\subseteq X$ a linear disturbance subspace and $L\subseteq X$ a linear subspace of tolerated deviations. A disturbance $d\in D$ produces a noiseless observation $y=Cd$, with $C$ linear. A one-shot deterministic policy chooses an additive correction $u=f(y)$. Regulation requires $d+f(Cd)\in L$ for every $d\in D$. For sufficiency assume all corrections in $-D$ are admissible. There is no temporal inference, noise, probabilistic relaxation or bounded actuator in this model. The objective does not specify $C$ unless such a coupling is added as a premise.

### A.2 Exact Observational Adequacy

Define $K=D\cap\ker C$. A regulating policy exists if and only if $K\subseteq L$.

Necessity: for any $k\in K$, $k$ and zero produce the same observation. Regulation at zero gives $f(0)\in L$ and at $k$ gives $k+f(0)\in L$. Subtraction gives $k\in L$. Sufficiency: for each attainable observation $y$, select a representative $d_y\in D$ with $Cd_y=y$; use $f(y)=-d_y$. Any actual disturbance with that observation differs from the representative by an element of $K$, which lies in $L$. With restricted actions the necessity survives but sufficiency may fail. This is a standard linear-algebra argument, not a novelty claim.

### A.3 Necessary Rank Bound

If regulation holds, $\dim K\leq\dim(D\cap L)$. Rank-nullity yields

$$\operatorname{rank}(C|_D)=\dim D-\dim K\geq\dim D-\dim(D\cap L)\geq\dim D-\dim L.$$

This preserves the earlier dimensional inequality if controller variety denotes effective observation rank and goal dimension denotes $\dim L$. It is a static necessary bound, not the general entropic law of requisite variety. Ambient observation dimension and objective count are not substitutes for rank.

### A.4 Alignment and the Hidden Consequential Gap

Let $D=\mathbb R^2$, $L=\operatorname{span}(e_2)$. For $C=(1,0)$, $K=L$ and regulation is possible; for $C=(0,1)$, $K=\operatorname{span}(e_1)$ and regulation is impossible. Both have rank one and satisfy the necessary count. Define

$$g_{\mathrm{hidden}}=\dim K-\dim(K\cap L),$$

$$g_{\mathrm{count}}=\dim D-\dim(D\cap L)-\operatorname{rank}(C|_D).$$

The first is the quotient dimension of $K/(K\cap L)$; it is basis-independent and zero exactly when $K\subseteq L$. Since $K\cap L\subseteq D\cap L$, $g_{\mathrm{count}}\leq g_{\mathrm{hidden}}$. In the example the count is zero in both cases but the hidden gap is zero and one respectively. Neither quantity measures magnitudes, welfare or correction cost; $L$ is part of the specified task and may be normative.

### A.5 Interpretation and Caveats

For a finite deterministic task let $A(w)$ denote adequate actions for condition $w$. In Paper XX's corrected formulation, the minimum action cover is the smallest action set intersecting every $A(w)$. A controller must have sufficient states to implement a cover, but each observation cell must also admit a common adequate action, and the policy must choose one. This is a finite counterpart, not an equality of measures.

Dynamic observation differs from instantaneous rank. Let $x_{t+1}=Fx_t$, with $F$ exchanging two coordinates, and $C=(1,0)$. Observing $Cx_0$ and $Cx_1$ recovers both coordinates although instantaneous rank is one. Noise, unknown dynamics and constraints complicate the result. The static condition is not a theory of dynamic observability or of legitimate social objectives.

---
