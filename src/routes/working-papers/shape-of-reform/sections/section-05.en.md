# §5 — What the object is

## 5.1 The negative result, gathered

Three facts about reform cost were established in §4, and together they say what the object is *not*:

- reform cost is **asymmetric** (§4.2, Claim A): $C(M_A \Rightarrow R_B) \neq C(M_B \Rightarrow R_A)$;
- its endpoints are of **different kinds** (§4.4): $C$ maps a model to a regime, not a point to a point;
- it does **not compose** (§4.4): the object produced by paying the first leg is not the input the second leg is defined on.

The first rules out a metric. The second and third rule out a quasimetric — a directed distance would still require composable, same-typed endpoints, and reform cost has neither. So factorization space, considered as a stage on which reform is *movement*, is not a metric space, not a quasimetric space, and not a Riemannian manifold. Exploration 04 reached for the last of these; §5.2 says precisely why it was the wrong category, not merely a premature one.

## 5.2 Why the Riemannian framing failed, precisely

A Riemannian manifold has a symmetric metric tensor from which geodesic distances are recovered by minimizing over paths, and those distances **compose**: the geodesic from A to B and from B to C bound the geodesic from A to C. Every one of these properties is absent from reform cost. The metric is not symmetric (§4.2). There is no single space over which to minimize, because the cost's two arguments are of different kinds (§4.4). And the composition law fails not approximately but categorically, because the intermediate object is a model that merely *performs like* the waypoint rather than *being* it (§4.4).

So the failure is not that the manifold is highly curved, or that curvature was measured prematurely. Exploration 04 worried the curvature reading might be early; the truth is worse for the framing and better for the paper: **there is no manifold to be curved.** The Riemannian category presumes a symmetric, composable metric over one space, and reform has none of those things. This matters because "premature curvature" invites more of the same work — measure it more carefully, later. "Wrong category" redirects the work: stop looking for a manifold, and characterize the directed adaptation process on its own terms.

## 5.3 The positive object: a typed metric–adaptation system

The paper knows more about the object, positively, than "not a metric space" admits. The pieces were all defined in §2 and measured in §4; assembling them gives a provisional formal object, offered as *a* characterization the data support, not as *the* final theory.

> A **metric–adaptation system** is a tuple
> $$\mathcal{A} = (M,\ R,\ d,\ C,\ U)$$
> where
> - $M$ is a set of trained models (factorizations);
> - $R$ is a set of regimes (tasks);
> - $d : M \times M \to \mathbb{R}_{\geq 0}$ is a symmetric behavioral **metric** on models (§2.2);
> - $C : M \times R \to \mathbb{R}$ is a directed, budget-relative **adaptation cost** (§2.3), signed to admit positive transfer;
> - $U : M \times R \times T \to M$ is an **update operator** — retraining $M_A$ toward $R_B$ for budget $\tau$ yields a new model $U(M_A, R_B, \tau)$.

The update operator is what the metric–manifold picture lacked, and it is what makes the object coherent. Staged reform is a *composition of update operators*, not a sum of costs:

$$\text{reform } M_A \text{ via } R_C \text{ to } R_B \;=\; U\big(U(M_A, R_C, \tau_1),\ R_B, \tau_2\big),$$

whose cost is the cost incurred *along that operator composition* — and this is emphatically **not** $C(M_A \Rightarrow R_C) + C(M_C \Rightarrow R_B)$, because $U(M_A, R_C, \tau_1)$ is a specific model that is not $M_C$ (§4.4). This single line explains, positively, why ordinary path geometry fails: the object over which one would compose is the *operator*, and operators compose by application, not their scalar costs by addition.

Two properties of the system, restated in its own vocabulary:

- **Directedness** (§4.2) is a property of $C$: it is not symmetric in the way $d$ is.
- **Staging** (§4.3) is a property of $U$: there exist $R_C$ for which $C$ incurred along $U(U(M_A, R_C, \cdot), R_B, \cdot)$ is below $C(M_A \Rightarrow R_B)$, and the effective $R_C$ is determined largely by $R_B$ (the target), not by $M_A$ (the source).

This is a **typed** object — its two carrier sets, $M$ and $R$, are genuinely different, and the type discipline is not bookkeeping but the reason §4.4's inequality is unstatable. It is closer to a typed transition system than to a geometry, and calling it a *metric–adaptation system* records both halves: a metric on behaviors, and an adaptation process over them that the metric does not govern.

## 5.4 The open problem, now narrower

Naming the object does not close it. What remains open is not "what is this thing" — §5.3 answers that provisionally — but a sharper, more tractable question about its calculus:

> **What formal properties of the cost $C$ and the update operator $U$ permit a useful calculus of staged adaptation?** Specifically: under what conditions on $U$ does staging help; is there a computable rule that selects an effective waypoint $R_C$ from the target $R_B$ (the §4.3 data suggest one may exist, since the waypoint is nearly a function of the target alone); and is there a directed, operator-aware analogue of the triangle inequality that *is* well-posed — a bound on composed-operator cost in terms of single-operator costs and some measure of how much $U(M_A, R_C, \cdot)$ differs from $M_C$?

This is a research question with enough structure to be attacked, which is more than "the object is not a metric space" offered. It is also the natural bridge to the multi-agent line (§8), where update operators acquire the further structure of interaction and inheritance.

## 5.5 Scope of the formalization

The tuple is a *description of what was measured*, not a claim that every metric–adaptation system behaves as this one did. The specific findings — asymmetry near 0.76, target-determined staging, weak distance–cost correlation — are properties of *this* $(M, R, d, C, U)$, over one substrate, one architecture family, one class of update rule. Whether other adaptation processes instantiate the same qualitative structure is exactly what §5.4's calculus, if it existed, would let one predict. We claim the object is well-typed and that its cost does not compose; we do not claim the numbers transfer.

---

