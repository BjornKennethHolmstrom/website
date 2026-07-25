## Abstract

The Governance as Engineering series diagnoses institutional failure as insufficient *requisite variety*
— an observation architecture whose dimensionality falls below that of the disturbance environment it
governs. This paper asks whether dimensional sufficiency is enough. Working in a single exactly-solved
partially-observed control problem, we measure by preregistered dynamic programming the decision value of
a scalar feedback signal — the amount a controller's expected loss falls because it can pay to observe
rather than act blind — and then displace that signal so that it evaluates a systematically *wrong*
target while remaining fully informative and correctly modelled by an optimal controller. A first study
establishes a large, connected region of the parameter space in which purchased feedback has resolved
positive value. A second study, restricted to that region, finds that displaced-target feedback loses
substantial value: resolved, substantive attenuation in 486 of 592 tested conditions (82.1%), unanimous
among all conditions whose numerics resolved, and provably not reducible to a reduction in channel
reliability. The decisive result concerns the *geometry* of the displacement. Two displacement
geometries differing only in how the wrong targets are arranged across the class space —
a connected four-cycle and two disjoint transpositions — impose different value costs, and the ordering reverses as displacement deepens: at low displacement the four-cycle preserves more value, at higher displacement the
transpositions do. The two geometries are identical in variety by construction — same output
cardinality, same reliability, same displacement probability, same likelihood multiset — so the
difference is not a variety effect. We name it **requisite alignment**: for an observable to have decision 
value it is not enough that it carry sufficient variety and transmit it without compression — the distinction 
it resolves must be aligned with the distinction the controller's action turns on, and alignment has geometry
 (which distinction, not how many). The worst case is not maximal displacement but maximal *ambiguity* 
(intermediate displacement), because a consistently wrong signal can be partially inverted while an 
unpredictable one cannot. The study establishes that this failure mode is structurally real and geometrically 
structured in at least one exactly-analysable case; it does not estimate its prevalence in any governance 
system, and a registered possibility — that displaced feedback might exceed matched feedback in value — 
was permitted by the design but did not occur. This is the series' first computational-mechanistic paper, 
and its result refines the Goodhart–Ashby synthesis: requisite variety is necessary but not sufficient, 
and requisite alignment is a second, independently binding, geometrically structured constraint.

**Keywords:** requisite alignment, requisite variety, Goodhart–Ashby synthesis, value of information,
partially observed control, feedback misalignment, observation architecture, Governance as Engineering.

---

## Key claims (tiered)

- **[R]** The displaced feedback channel is not representable by any scalar reliability q: for
  m ∈ (0,1)\{½} it induces three distinct likelihood levels, and at m = ½ a class partition {a, π(a)} vs
  the rest, neither reproducible by a two-level q-channel. (§3.4, V5)
- **[R]** At m = 0 the displaced solve reduces exactly to the matched Gate-1 solve; dominance A_π ≥ 0
  holds; exact-inert planes remain A_π = 0 for all m and both geometries. (§3.6, V1–V3)
- **[R]** Under a uniform belief, the two registered geometries π₄ and π₂₊₂ carry identical
  single-observation marginal mutual information about the state at every displacement level, because
  their likelihood vectors are relabelings of one multiset. The equality is prior-dependent and does not
  extend to the non-uniform beliefs the controller occupies after t = 0. (§3.4)
- **[R]** The geometry contrast holds the channel's *variety* fixed by construction — identical output
  cardinality, q, m, and likelihood multiset — so no account in terms of how many distinctions the
  channel can make separates π₄ from π₂₊₂. (§3.4, §5.2)
- **[open, registered]** Whether the geometry effect is additionally free of any information-quantity
  explanation along realized belief trajectories is untested. See RP-XXVII-1 (§5.2).
- **[R]** For K = 4 the fixed-point-free permutations comprise exactly two conjugacy classes (four-cycle,
  double-transposition); under the model's class-relabel symmetry one representative of each is
  exhaustive. (§3.4)
- **[R, numerical with envelope]** Over the frozen 74-cell panel, 486/592 conditions (82.1%) show
  resolved substantive attenuation, 0 enrichment, 0 practical equivalence, 106 non-convergent; attenuation
  is unanimous (486/486) among resolved conditions. (§4.2)
- **[R, numerical with envelope]** Geometry dependence is established by the registered criterion (≥ 2
  adjacent qualified cells at a common m): the geometry contrast clears the substantive threshold on five
  adjacent pairs, and its sign reverses with displacement probability. (§4.4)
- **[H → R-in-model]** The value profile is non-monotone in displacement, with the minimum at
  intermediate ambiguity (near m = ½) rather than at maximal displacement — a consequence of a consistent
  displacement being partially invertible where an ambiguous one is not. Registered as a possible shape in
  advance; observed. (§4.3, §5.4)
- **[IP]** Requisite alignment is proposed as a general constraint — a relationship between what an
  observable resolves and what an action depends on — orthogonal to requisite variety and to
  integration-without-compression. The *concept* is general; the *evidence* is one solved instance. (§2,
  §5.6)
- **[H]** For governance: expanding observational dimensionality is necessary but incomplete; a system can
  fail by faithfully observing high-dimensional but misaligned distinctions, and the geometry of that
  misalignment — not only its extent — conditions the cost. (§5.6)

*Registered negative (retained, not suppressed):* the design permitted enrichment (A_π > A_matched via
Blackwell-incomparability of the displaced and matched channels); no resolved condition exhibited it on
this panel. This constrains the enrichment hypothesis for this model, losses, and parameterisation; it
does not establish that enrichment cannot occur under others. (§4.5, §5.3)

---

