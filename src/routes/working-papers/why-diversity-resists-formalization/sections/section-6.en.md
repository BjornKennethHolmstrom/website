## 6. The residual

Two things remain genuinely open, and both are reported as open.

**The endogenous tier.** Where the source term is in the optimizer's control set (evolution, decision-under-hedge-reading), the outcome turns on whether the optimizer optimizes the source term, and on a background condition (volatility, channel informativeness) that the optimizer also does not set. The live design question — sharper than anything the syntheses produced — is whether there exists a *protection class between physically-uneditable and politically-revocable*: a constraint costly enough to repeal that it survives ordinary optimization pressure without being literally outside the system. Biology's invariant is physical and unrepealable; an institution's protected slack is a budget line a future cost-cutter can cut. Whether anything stable lives in between is unsettled, and it is the question this whole line of work now points at.

**A computational probe of the in-between class [IP], shading to [H].** The
question just posed — whether a protection class exists between physically-
uneditable and politically-revocable — admits a direct, if toy, computational
form. Model a population of observers each holding one of many opinions; deplete
diversity by letting agents copy others (the optimizing pressure), replenish it
by letting new independent opinions enter at rate `r` (the source term), and give
incumbency a *switching cost*: an agent abandons its current opinion with a
probability that falls as that opinion's share rises, scaled by a barrier strength
`B ∈ [0,1)`. `B` is exactly the in-between constraint — not external, not free to
repeal, but costly-to-leave in proportion to entrenchment. The order parameter is
the effective number of live opinions, `N_eff = 1/Σ p_k²`.

The result has a definite and somewhat deflating shape. For most of the parameter
range the diversity/consensus trade-off is *continuous and reversible*: raising
`r` raises `N_eff` smoothly, and a collapsed population recovers once `r` is
restored — no trap. Two mechanisms that might be expected to manufacture a trap do
not. Bounded imitation — agents weighting a crowd by apparent agreement, then
saturating — yields a single attractor whose position slides with `r`; preferential
copying, even super-linear, is ergodic and forgets its initial condition, giving
genuine winner-take-all *condensation* but no hysteresis. A true fold — two stable
states over one parameter range, the collapsed one absorbing, verified stable under
horizon extension rather than merely slow to decay — appears only above a critical
barrier `B* ≈ 0.95` (for this barrier form, at `N = 120`, `γ = 1`). Below `B*` a
diverse start is merely *metastable*: it persists for a while, then decays to
consensus, so restoring `r` still recovers it. Above `B*` the diverse and collapsed
states coexist, and the collapsed state does not recover as `r` is lowered back
through a hysteresis window (`r ≈ [0.30, 0.40]` at `B = 0.99`).

Read against the residual question, this is a bounded, mostly-negative answer. The
in-between protection class *does* exist — `B` is neither external nor unrepealable
— but the only version of it that produces the irreversible trap the design
question worried about sits very close to the uneditable end: exit from the
incumbent option must be nearly foreclosed (`1 − B ≲ 0.05` at full dominance)
before hysteresis opens. A merely-strong switching cost buys metastability, not a
trap; the diversity it costs is still reversible by restoring the source term. So
the practically relevant variable is not the novelty-injection rate crossing a line
but whether *exit* from the dominant option is nearly closed — and "nearly" is
demanding. This locates where in the in-between class the lock-in becomes real
without closing the question, and it withholds the comfortable reading in which a
moderate, repealable protection would suffice.

The tiering stays honest. All of the above is [IP] at best, and [H] where the
specific numbers (`B*`, the window) are concerned, since they are properties of one
chosen barrier form in a toy population, not of any governed system. The one place
a [R] claim could live is the mechanism behind the transition: the fold is the
point at which the *mean escape time* from the consensus state diverges as `B → 1`,
converting "metastable" into "absorbing." That is a derivable quantity — a
first-passage calculation on the incumbent's share — and until it is derived rather
than simulated, the threshold is illustrated, not established.

**The unpriceable, correctly scoped.** The decision-theory lens named its own frontier unprompted: not non-stationarity, but *unawareness of unforeseen states* — structural incompleteness of the hypothesis space, a state the prior assigned zero. This is the unconceived-alternative problem from the early decay curve, returning in its proper home. It is listed by the lens as a **failure mode**, not a manageable term: you cannot reserve mass along a dimension you do not have. The earlier investigation overclaimed this as a universal impossibility and had to retract it. Its calibrated form is narrow: among the four lenses, only the one that reasons over beliefs-about-hypotheses has an exception condition no formalization in the set could price — and that is where the genuinely unobservable residue lives, rather than everywhere.

The schema is settled enough to state **[IP]**. The order parameter is corrected. The two tiers are clean. What stays open is the endogenous tier's protection-class question and the decision-theoretic unpriceable — and a paper that closed either by fiat would be reproducing the exact frame-closure it set out to map.

---

