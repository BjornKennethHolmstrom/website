# Appendix B: The Inheritance Asymmetry

The results below are exact within the formation model specified in the section. The model is a deliberately minimal representation of one mechanism — the external scaffolding of attendable dimensions — and the derivations inherit that status: they are rigorous given the model **[R, within model]**, while the model itself remains an interpretive representation **[I]** of formation. The mathematics is elementary. That is appropriate to the claim, which is a structural consequence of the acquisition rule rather than a deep theorem, and the appendix states it as such rather than dressing it otherwise.

## B.1 The model

A state space of **D** dimensions. A formative source **S** perceives a fixed observable set; a dimension is *inside* if S perceives it and *outside* if it does not. The child reaches S (always) and **k** of **N** alternative sources, where **k = round((1 − L)·N)** and **L ∈ [0, 1]** is lock strength: **L = 0** is the open regime (**k = N**), **L = 1** the sole‑source regime (**k = 0**).

Each alternative source observes a given dimension independently. With probability **ρ** it copies S's status for that dimension; otherwise it observes the dimension with probability **q**. Hence an alternative observes an inside dimension with probability

> **q_in = ρ + (1 − ρ)q,**

and an outside dimension with probability

> **q_out = (1 − ρ)q.**

Each reachable source that observes a dimension transmits it independently with probability **t**. The child *acquires* a dimension if and only if at least one reachable observing source transmits it.

## B.2 Acquisition laws

Fix a dimension and let **n** be the number of reachable sources that observe it. Acquisition is the OR of **n** independent Bernoulli(**t**) transmissions, so

> **P(acquire | n) = 1 − (1 − t)ⁿ.**  (1)

For an **outside** dimension, S does not observe it, so **n = B** with **B ~ Binomial(k, q_out)**. Applying the binomial generating identity **E[sᴮ] = (1 − q_out + q_out·s)ᵏ** at **s = 1 − t**,

> **a_out(k) = 1 − E[(1 − t)ᴮ] = 1 − (1 − q_out·t)ᵏ.**  (2)

For an **inside** dimension, S observes it, so **n = 1 + B′** with **B′ ~ Binomial(k, q_in)**. The guaranteed source term factors out of the expectation:

> **a_in(k) = 1 − (1 − t)·(1 − q_in·t)ᵏ.**  (3)

## B.3 The floor, and the asymmetry as a bound

Write the *miss* probabilities — the probability the child fails to acquire the dimension:

> **miss_in(k) = (1 − t)(1 − q_in·t)ᵏ,  miss_out(k) = (1 − q_out·t)ᵏ.**

Because **(1 − q_in·t)ᵏ ≤ 1**,

> **miss_in(k) ≤ 1 − t  for all k.**  (4)

The child fails to perceive a *source‑visible* dimension with probability at most **1 − t**, however complete the lock, because the source alone secures acquisition with probability at least **t**. For a *source‑invisible* dimension there is no such guarantee, and

> **miss_out(k) → 1  as  k → 0.**  (5)

This is the asymmetry, exactly. Its origin is the single guaranteed term S contributes in the inside case and withholds in the outside case — the factor **(1 − t)** in (3) that caps the inside miss, with no counterpart in (2). The asymmetry is therefore a corollary of the acquisition law, not an independent result. In the sole‑source limit the gap is **a_in(0) − a_out(0) = t − 0 = t**: sight inherits with a floor of **t**, blindness inherits with none.

## B.4 Containment (inheritance of unobservability)

The expected fraction of S's blind set that the child also fails to perceive is **miss_out(k)**:

> **overlap(k) = (1 − q_out·t)ᵏ.**  (6)

In the sole‑source limit, **overlap(0) = 1**: every outside dimension is missed with probability one, so the child's unobservable subspace contains S's surely. For **k > 0** the containment is partial, with expected residual overlap given by (6). This supplies the process behind Inherited Unobservability: the child does not merely happen to share the source's blind set; the blind set is what survives transmission once the decorrelated alternatives are removed.

The containment is one‑directional. The child inherits all of S's blindness and, because transmission of even visible dimensions is imperfect (**t < 1**), generically adds some of its own: by (4) the child misses each source‑visible dimension with probability up to **1 − t**. Formation does not reproduce the source's observer. It reproduces the source's blind set and degrades its sight — so each generation is, in expectation, weakly blinder than the one that formed it, absent decorrelated sources to offset the loss.

## B.5 No critical lock

Substituting **k = (1 − L)·N**, every quantity above has the form **1 − (1 − c·t)^{(1−L)N}** for a constant **c ∈ {q_in, q_out}**. Each is smooth and monotone in **L** on **[0, 1]**, with no interior point at which acquisition collapses; the steepening near **L = 1** is the ordinary acceleration of **(1 − c·t)ᵏ** as **k → 0**, not a phase transition. A critical lock strength would require a different acquisition rule — a coverage‑completion criterion (acquire *all* of a set) or an *m‑of‑n* scaffolding requirement (a dimension needs at least **m** corroborating sources). Under the ≥ 1 rule assumed here, smoothness is forced, and the phenomenon is the asymmetry, not a threshold. The completeness statistic reported in the simulation, **≈ a_out(k)^{(1−f)D}**, is sharp in **a_out** but inherits **a_out**'s smoothness in **L**; at the simulation's parameters it is **≈ 0.94⁶⁰ ≈ 0.02** throughout, confirming that its own stringency, not any critical lock, suppresses it.

## B.6 Decorrelation carries the blind set

In the open regime (**k = N**), substitute **q_out = (1 − ρ)q** into (2):

> **a_out(N) = 1 − (1 − (1 − ρ)·q·t)ᴺ.**  (7)

This decreases in **ρ** to **a_out(N) = 0** at **ρ = 1**: alternatives that copy the source's observable set share its blind spots and contribute nothing to outside acquisition, however many the child reaches. Only the decorrelated coverage **(1 − ρ)q** fills the source's blind set. Equation (7) is the ensemble‑decorrelation result of the perception‑threshold paper localized to a single formation: a set of observers can perceive what any one of them misses only to the extent that their observable sets are decorrelated.

## B.7 Agreement with the simulation

At the simulation's parameters (**D = 120, f = 0.5, N = 30, q = 0.15, t = 0.6**, **ρ = 0** unless swept), equations (2), (3), (6) give

> **a_in(N) = 1 − 0.4·(1 − 0.09)³⁰ = 0.976,**
> **a_out(N) = 1 − (1 − 0.09)³⁰ = 0.941,**
> **overlap(N) = (1 − 0.09)³⁰ = 0.059,**

together with the limits **a_in(0) = t = 0.600**, **a_out(0) = 0**, **overlap(0) = 1**, and **a_out(N) = 0** at **ρ = 1**. These match the Monte‑Carlo run to three decimal places — the consistency the series requires between an appendix and the simulation it formalizes.
