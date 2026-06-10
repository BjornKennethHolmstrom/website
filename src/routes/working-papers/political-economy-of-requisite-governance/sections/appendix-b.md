# Appendix B: A Minimal Model of Bypass‑Trap Dynamics

This appendix presents the formal dynamical system underlying Simulation A (Section 6.1). It specifies the equations, identifies the system's fixed points, analyses their stability, and derives the bifurcation condition under which a sunset‑coupled bypass escapes the low‑performance attractor that traps a permanent bypass.

## B.1 State Variables and Parameters

The system has two state variables evolving in discrete time:

- *D*(*t*) ∈ [0, 1]: dysfunction of the unreformed substrate, where 0 represents full functionality and 1 represents complete failure.
- *B*(*t*) ∈ [0, *B*_max(*D*)]: bypass capacity, bounded above by a substrate‑dependent ceiling *B*_max(*D*) = 1 − *c*_cap · *D*, with *c*_cap ∈ [0, 1].

The substrate ceiling parameter *c*_cap captures the degree to which the bypass depends on the unreformed architecture. When *c*_cap = 0, bypass capacity is independent of substrate dysfunction; when *c*_cap = 1, a fully dysfunctional substrate reduces the bypass ceiling to zero.

The system is controlled by two effort variables:

- *R*(*t*): reform pressure applied to the substrate.
- *R*_B(*t*): investment in bypass expansion.

Additional parameters are:

- α: natural rate at which dysfunction deepens when unchecked (logistic growth parameter).
- *K*_R: gain of reform pressure with respect to visible dysfunction.
- *c*_vis: visibility coefficient — the degree to which the bypass masks substrate dysfunction from political observation.
- γ: effectiveness of investment in bypass expansion.
- δ: decay rate of bypass capacity (institutional entropy).
- *c*_sunset: coupling strength introduced by the sunset condition (Section B.4).

## B.2 The Permanent Bypass System

We first analyse the system without sunset coupling, corresponding to the permanent bypass scenario.

**State equations.**

The substrate dysfunction evolves as:

*D*(*t*+1) = *D*(*t*) + α · *D*(*t*) · (1 − *D*(*t*)) − β · *R*(*t*)  (B.1)

where β is the efficiency with which reform pressure reduces dysfunction. The logistic term α · *D* · (1 − *D*) captures the self‑reinforcing character of institutional decay: moderate dysfunction worsens under its own weight unless counteracted by reform. The reform pressure term is:

*R*(*t*) = *K*_R · *D*_vis(*t*)  (B.2)

*D*_vis(*t*) = *D*(*t*) · (1 − *c*_vis · *B*(*t*))  (B.3)

Visible dysfunction *D*_vis is the portion of *D* that remains politically legible after the bypass masks it. When *B* = 0, visible dysfunction equals actual dysfunction. As *B* increases, *D*_vis falls, reducing *R* and therefore weakening the political pressure for substrate reform.

The bypass capacity evolves as:

*B*(*t*+1) = *B*(*t*) + γ · *R*_B(*t*) · (1 − *B*(*t*)/*B*_max(*D*(*t*))) − δ · *B*(*t*)  (B.4)

where *R*_B(*t*) is the investment flow into the bypass, which we treat as constant *R*_B in the permanent bypass scenario. The term (1 − *B*/*B*_max) captures diminishing returns as the bypass approaches its substrate‑determined ceiling. The decay term δ · *B* captures institutional entropy.

**Fixed points.**

A fixed point (*D*, *B*) satisfies *D*(*t*+1) = *D*(*t*) and *B*(*t*+1) = *B*(*t*). Substituting the equilibrium conditions into (B.1)–(B.4) yields:

α · *D* · (1 − *D*) = β · *K*_R · *D* · (1 − *c*_vis · *B*)  (B.5)

γ · *R*_B · (1 − *B* / (1 − *c*_cap · *D*)) = δ · *B*  (B.6)

Equation (B.5) has a trivial solution at *D* = 0 (full substrate functionality). For *D* `>` 0, we can divide through by *D* to obtain:

α · (1 − *D*) = β · *K*_R · (1 − *c*_vis · *B*)  (B.7)

Equation (B.6) can be rearranged to:

*B* = (γ · *R*_B · (1 − *c*_cap · *D*)) / (δ · (1 − *c*_cap · *D*) + γ · *R*_B)  (B.8)

The system thus admits a family of interior fixed points determined by the intersection of (B.7) and (B.8).

**The trap equilibrium.**

We are interested in the regime where the bypass is well‑developed and the substrate is moderately to severely dysfunctional. Consider the case where *c*_vis is large — the bypass substantially masks dysfunction — and *c*_cap is moderate — the bypass is partly but not fully constrained by the substrate. Under these conditions, the system possesses a stable interior fixed point at some (*D*_trap, *B*_trap) with the following properties:

- *D*_trap `>` 0: the substrate remains dysfunctional.
- *B*_trap is substantial: the bypass provides meaningful service delivery.
- *D*_vis(*D*_trap, *B*_trap) is low: the political pressure for further reform is weak.
- *B*_trap `<` *B*_max(*D*_trap): the bypass operates below its theoretical ceiling, because investment stabilises once visible dysfunction falls.

This is the bypass trap: a stable equilibrium in which the bypass is successful enough to suppress reform pressure but constrained enough by the unreformed substrate that overall performance remains well below the level achievable under a genuinely reformed architecture.

**Stability.**

The Jacobian of the system (B.1)–(B.4) evaluated at the trap equilibrium determines local stability. Without reproducing the full algebraic derivation, the eigenvalues are typically inside the unit circle when α is moderate, *c*_vis is large, and γ · *R*_B is small relative to δ. The intuition is straightforward: a strong masking effect (*c*_vis large) ensures that an increase in *B* reduces *D*_vis, which reduces *R*, which allows *D* to drift upward — a negative feedback that stabilises the equilibrium. A weak bypass investment rate ensures that *B* does not grow rapidly enough to overwhelm the ceiling, preventing escape from the trap through pure bypass expansion.

## B.3 Escape Through Exogenous Reform Pressure

Before introducing the sunset coupling, we note that the trap can also be escaped if an exogenous shock — a crisis, a scandal, an external intervention — temporarily increases the visibility coefficient *c*_vis or reduces the masking effectiveness of the bypass. This corresponds to a temporary shift in the parameter regime that destabilises the trap equilibrium, allowing a window during which reform pressure on the substrate can break the attractor. This is the formal analogue of the "policy window" concept: a crisis temporarily changes the structural parameters of the system, making reform possible that was not possible before.

However, reliance on exogenous shocks is not a design principle. A governance architecture that can only reform itself when crises force the issue is precisely an architecture with low transition bandwidth (Section 5.1). The sunset coupling of Section 4.2 is a mechanism for *endogenising* the shock — making the bypass's own success the trigger that forces substrate reform.

## B.4 The Sunset‑Coupled Bypass

We now introduce the sunset coupling. The coupling is a mechanism that increases the visibility coefficient *c*_vis as bypass capacity *B* grows, so that success does not suppress reform pressure but amplifies it. Formally, we replace the constant *c*_vis with a function:

*c*_vis(*B*) = *c*_vis⁰ + *c*_sunset · *g*(*B* − *B*_sunset)  (B.9)

where *g*(·) is a smooth step function (e.g., a sigmoid) that is near zero when *B* `<` *B*_sunset and near one when *B* `>` *B*_sunset. The parameter *c*_sunset is the additional visibility gained once the bypass crosses the threshold *B*_sunset, and *c*_vis⁰ is the baseline masking coefficient that operates before the sunset triggers.

The modified reform pressure becomes:

*R*(*t*) = *K*_R · *D*(*t*) · (1 − *c*_vis(*B*(*t*)) · *B*(*t*))  (B.10)

When *B* `<` *B*_sunset, the system behaves identically to the permanent bypass case and may settle into the trap equilibrium if one exists. When *B* exceeds *B*_sunset, the effective visibility of dysfunction increases sharply. Reform pressure *R* rises, driving *D* downward. As *D* falls, the bypass ceiling *B*_max(*D*) rises, allowing *B* to expand further. The positive feedback loop — higher *B* → higher *c*_vis → higher *R* → lower *D* → higher *B*_max → higher *B* — propels the system out of the trap and toward a new equilibrium with low *D* and high *B*.

**Bifurcation condition.**

The sunset coupling produces a qualitative change in the system's dynamics when *c*_sunset exceeds a critical value *c*_sunset^crit. Below this threshold, the increase in visibility at the trigger point is insufficient to overcome the substrate's inertial dynamics, and the system returns to the trap equilibrium even after *B* crosses *B*_sunset. Above the threshold, the trap equilibrium is destabilised, and the system's only stable fixed point is the high‑performance equilibrium (*D* low, *B* high).

The critical threshold is determined by the balance of forces at the trigger point. Let (*D*_trap, *B*_trap) be the trap equilibrium of the permanent bypass system. The sunset coupling alters the effective reform gain from *K*_R · (1 − *c*_vis⁰ · *B*) to *K*_R · (1 − (*c*_vis⁰ + *c*_sunset) · *B*) for *B* `>` *B*_sunset. The additional reform pressure at the trigger point is approximately:

Δ*R* ≈ *K*_R · *D*_trap · *c*_sunset · *B*_sunset

For the trap to be destabilised, this additional pressure must be sufficient to reduce *D* below the level at which the trap's self‑stabilising dynamics can restore it. A necessary condition is:

*c*_sunset `>` (α · (1 − 2*D*_trap) + δ_effective) / (*K*_R · *B*_sunset)

where δ_effective captures the substrate's inertial resistance to change. The precise form depends on the parameterisation, but the structural point is that the sunset coupling must be strong enough — the additional visibility must be large enough — to overcome the trap's stabilising feedback.

**Simulation A** demonstrates this bifurcation by sweeping *c*_sunset and mapping the resulting equilibrium. The output shows the transition from a stable trap equilibrium at low *c*_sunset to a stable high‑performance equilibrium at high *c*_sunset, with a critical region where the system's fate depends on the initial conditions and the precise timing of the trigger.

## B.5 Design Implications

The formal analysis yields three conditions for a sunset‑coupled bypass to succeed where a permanent bypass fails.

First, the sunset threshold *B*_sunset must be set *above* the level at which the bypass can be captured or reversed by the incumbent but *below* the level at which the bypass stabilises the trap equilibrium. If *B*_sunset is too low, the bypass triggers reform pressure before it has demonstrated sufficient performance to build a political coalition for substrate reform; the pressure dissipates, and the bypass is wound down or captured. If *B*_sunset is too high, the bypass reaches the trap equilibrium and stabilises there, never triggering the sunset at all.

Second, the coupling strength *c*_sunset must exceed the critical threshold *c*_sunset^crit for the given substrate parameters. This means the sunset mechanism must be *institutionally credible*: it must genuinely increase the visibility of remaining dysfunction, in a way the incumbent cannot neutralise. A sunset clause that the incumbent can capture — by redefining the trigger condition, by challenging the evidence of bypass performance, or by simply ignoring the legislative mandate — has *c*_sunset ≈ 0 and will not escape the trap.

Third, the baseline parameters — particularly the substrate ceiling coefficient *c*_cap — must permit the bypass to reach *B*_sunset in the first place. If the substrate is so dysfunctional that the bypass ceiling *B*_max(*D*) lies below *B*_sunset for all attainable *D*, the bypass can never trigger the sunset, and the system is consigned to the trap permanently. In such cases, architectural reform must target the substrate directly (through a crisis window or an exogenous shock) rather than through a bypass strategy.

## B.6 Limitations

The model presented in this appendix is minimal. It abstracts away from several features of real bypass dynamics: the heterogeneity of the substrate (dysfunction is typically uneven across domains, and a bypass may relieve pressure selectively), the strategic behaviour of incumbents who may deliberately degrade the substrate to keep the bypass below *B*_sunset, and the possibility that the bypass itself becomes captured by the same interests that control the substrate. These extensions are tractable within the same modelling framework and represent directions for subsequent work. The present model captures the first‑order dynamics that distinguish permanent from sunset‑coupled bypasses, and it provides the formal underpinning for the design principle developed in Section 4.2.
