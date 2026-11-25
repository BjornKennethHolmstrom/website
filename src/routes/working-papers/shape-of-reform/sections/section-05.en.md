# §5 — What the object is

## 5.1 The bounded negative result

The historical tests do not establish large reshaping, regime dependence at the registered slack, a repeatable graph jump, or the stipulated strength of row-level cost prediction. They also do not establish absence of shape change, regime dependence, or useful prediction. The MST identity is exact but does not settle empirical geometry. The observed cost asymmetry and selected-route contrast are narrower results under a particular measurement procedure.

## 5.2 Why a behavioral map is not an adaptation geometry

A model's behavior can be represented by a finite vector; a Euclidean geometry on prediction profiles is therefore available. The implemented squared dissimilarity is not that metric. A smooth manifold description, let alone a Riemannian metric governing adaptation, has not been identified. Observed asymmetry is inconsistent with identifying the cost proxy with a symmetric distance, but not with all directed geometries or state-dependent costs. A failed empirical identification is not an impossibility theorem.

## 5.3 A typed adaptation system [R]

Write $\mathcal{A}=(M,R,d,C,U)$ with model-state space $M$, task space $R$, specified behavioral dissimilarity $d$, adaptation cost $C$ and update operation $U$. Include parameters, optimizer state when carried, and any relevant stochastic context. For two stipulated legs with budgets $T_1,T_2$ and draws $\omega_1,\omega_2$, let

$$m'=U(m,r_1,T_1;\omega_1).$$

The additive accounting used here is

$$C_{T_1}(m,r_1;\omega_1)+C_{T_2}(m',r_2;\omega_2).$$

The second cost depends on the actual state $m'$, not an independently trained reference for $r_1$. Optimizer resets between legs are part of the update specification. Operators compose; the tabulated single-leg costs do not in general supply costs for their composition. Signed scores are distinct from nonnegative clipped costs; a zero clipped cost does not imply identical states or successful completion.

## 5.4 The open problem

When feasible state-to-state edges have nonnegative costs and concatenation is permitted, the infimum of path sums defines an extended directed pseudometric (possibly infinite, possibly zero between distinct states), with a directed triangle inequality and no required symmetry. This construction is possible in principle, not measured here. The open problem is to identify a useful state description, cost units, constraints and interventions; then test out-of-sample route prediction against matched baselines.

## 5.5 Scope

The typed object is bookkeeping with mathematical consequences under specified assumptions. It does not establish a universal cost geometry, a minimum viable route, or the welfare value of a change. Institutional use would require a different empirical substrate and explicit normative and feasibility constraints.
