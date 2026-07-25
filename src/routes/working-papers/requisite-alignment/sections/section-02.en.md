## 2. Relation to the series: a refinement of the synthesis

### 2.1 What the synthesis says, and what it leaves open

The Goodhart–Ashby synthesis identifies a *dimensional* failure. An objective function — equivalently,
an observation architecture — that projects a high-variety environment onto too few dimensions will omit
disturbance dimensions that accumulate as externalities until they force crisis. The corrective, in the
series' terms, is to expand the effective dimensionality of the observation channel: the healthcare
system must perceive clinical complexity, not only administrative throughput; the central bank must
perceive distributional consequences, not only aggregate stability. The whole diagnostic machinery of
the series — the averaging problem (Paper I), the fractality requirement (Paper II), constitutional
unobservability (Paper III), commons collapse under low-dimensional channels (Paper IV) — turns on the
*number* of independent dimensions the architecture can register relative to the environment it faces.

The series does contain one concept adjacent to alignment: *integration without compression* (Paper VII)
— coordination mechanisms that carry a signal from the scale of observation to the scale of action
without destroying it. But that property concerns transmission *fidelity*: it asks whether a genuine
signal survives its journey through the architecture, not whether the signal was pointed at the right
distinction to begin with. A perfectly transmitted signal about the wrong distinction is a failure that
integration-without-compression does not name.

This is the gap the present paper fills. Ashby's Law states that a controller must command variety at
least equal to the variety of disturbances it must reject. It is a theorem about *sufficiency of
dimension*. It is silent on *correspondence*: whether the variety the controller commands is the variety
of the *relevant* distinction. Two observation channels can have identical dimensionality, identical
mutual information with the environment, and identical transmission fidelity, and yet one can be worth a
great deal to a given controller and the other worth nothing — because one resolves the distinction its
action depends on and the other resolves an equally rich but misaligned one.

### 2.2 What the solved model adds

The value of solving the model exactly, rather than arguing architecturally, is that it lets us separate
alignment from variety — an experiment the dimensional framing cannot express. The displaced feedback
channel in Gate 2 is constructed so that its marginal reliability parameter is unchanged and it remains
provably non-reducible to a change in channel reliability: it is not a lower-variety channel in the
dimensional sense, and it is not a noisier q. It carries information about a real class distinction. What
changes is only *which* distinction — whether the signal evaluates the class the controller acted on or a
permuted image of it. The cleanest separation comes from the two permutation geometries, which are identical in
variety by construction — same output cardinality, q, m, and likelihood multiset — yet differ in decision 
value: because variety is held exactly fixed, the value difference isolates alignment as an axis distinct 
from variety. (Their single-observation marginal information is also equal, but only under a uniform prior; 
§3.4.). Whether it is additionally distinct from information *quantity* along a trajectory is an open 
question registered in §5.2, since the uniform-prior equality does not extend to the beliefs the controller 
occupies after the first observation. (The displacement probability m does also change the channel's total 
mutual information at interior values — the value cost as m rises is therefore partly confounded with an 
information-quantity effect, which is why the geometry contrast, not the raw m-attenuation, is the 
load-bearing evidence; §5.2 treats this carefully.)

Three findings sharpen the synthesis. First, requisite variety in the dimensional sense is necessary but
not sufficient: a correctly-modelled signal, non-reducible to added noise, loses most of its value under
misalignment. Second, alignment is continuous, not binary — value degrades by degrees as the displacement
probability rises, and non-monotonically, recovering somewhat at full displacement where the signal
becomes a clean report about a fixed (if wrong) target. Third, and most consequential for the series,
alignment has *geometry*: at identical channel variety, the cost of misalignment depends on the
structure of the mismatch — how the wrong targets are arranged across the state space — with a reversal
in which geometry is less costly as the displacement deepens. The third finding is the one that carries
the argument, because it is the one that holds the channel's variety exactly fixed; the first two are
consistent with, but do not by themselves prove, a constraint distinct from variety (§5.2).

The third finding is the one that most extends the framework, because it shows that "which distinction"
is not a single bit of correspondence but a structured object. The series' dimensional account has no
vocabulary for it: two channels of equal dimensionality and equal misalignment magnitude can still
differ in value because of how their misalignment is arranged geometrically. Requisite alignment is
therefore not a scalar corrective to be bolted onto requisite variety; it is a second, geometrically
structured constraint that a governance architecture must satisfy independently.

### 2.3 Requisite alignment, defined within the model

The refinement can be stated precisely in terms of the model's own objects. Fix the controller's action
a and let z be the hidden class. Two partitions of the state are in play. The **action-relevant
distinction** is the partition the loss depends on: under the registered loss the outcome turns on
whether the countermeasure matches the class, i.e. on the indicator 1[z = a] — the loss rewards
separating the acted class from the rest. The **signal-resolved distinction** is the partition the
feedback is informative about: the likelihood P(match | z) separates the classes according to which one
the comparator target evaluates. In the matched channel (m = 0) the signal is informative about 1[z = a]
— it resolves exactly the distinction the loss turns on. Displacement moves the signal-resolved
distinction onto 1[z = π(a)] (fully at m = 1) or a mixture (at intermediate m).

**Within this model, requisite alignment is the correspondence between the signal-resolved distinction
and the action-relevant distinction.** A channel is aligned when the partition it is informative about
agrees with the partition the loss depends on, and misaligned to the degree they diverge. Requisite
variety asks whether the channel's partition is fine enough (whether it carries enough information about
the state); requisite alignment asks whether that information is about the *right* partition — the one
the action turns on. The two are independent: displacement moves the signal-resolved distinction away from the
action-relevant one while leaving the channel's variety untouched, and decision value falls even though 
variety does not. The two registered geometries make the separation exact — they are built from a common 
likelihood multiset and differ only in which latent class each level is attached to (§3.4).

The correspondence admits a *partial* order but not a total one, and this is the crux. Two partitions can
be compared by refinement — whether one is a coarsening of the other — but the signal-resolved and
action-relevant partitions here are generally incomparable under refinement, and, crucially, alignment is
**not** reducible to any information ordering between them. The two registered geometries are the proof:
they are variety-equivalent, and information-equivalent under a uniform prior (§3.4), yet alignment-distinct
(different decision value, with a sign reversal). No variety measure can separate them, by construction; 
alignment does. Requisite alignment is therefore a *finer* object than variety —
it is the geometry of how the signal-resolved and action-relevant partitions differ, not the number of 
distinctions the signal can make. This model exhibits three properties of that correspondence, each
established here [R, within-model]: (i) misalignment reduces decision value at fixed variety
(the geometry contrast); (ii) alignment is graded — in the displacement probability m and in the
geometry — and its cost is non-monotone, maximal at intermediate ambiguity rather than at maximal
displacement, because a consistently misaligned signal is partially invertible where an ambiguous one is
not; (iii) equal degrees of misalignment with different geometric structure impose different, even
oppositely-ordered, costs.

**Scope [IP].** The definition and its three properties are stated for, and established in, this single
finite control problem: K = 4, the registered loss, a binary action-coupled feedback channel, and a known
permutation displacement. We conjecture that an analogous correspondence — between the distinction an
observable resolves and the distinction an intervention turns on — is a binding constraint on the value
of information in control problems of this kind, independent of and additional to requisite variety. That
conjecture is in-principle: it is motivated by the model but not proved beyond it, and this paper
establishes no necessary or sufficient conditions for it in the general case. What is established [R] is
that the constraint is real, independent of channel variety, and geometrically structured in at least one 
exactly-solvable instance. Whether it is additionally independent of information quantity is registered 
as an open test (RP-XXVII-1, §5.2).

### 2.4 Why this is a governance result, at the scale of a single observer

The controller in this model is a single attending agent, and the motivating question — what is sustained
attention worth? — arose from the series' Self sub-series, which applies the variety grammar at
individual scale. It would be a mistake to read the paper as therefore *about* individual cognition
rather than governance. The quantity measured, the value of a purchased observation to a controller
facing disturbance variety, is a control quantity at any scale; the machinery is identical whether the
controller is a mind, an institution, or a mechanism. What the single-observer setting buys is
tractability: a governance architecture with many coupled observers cannot be solved exactly, but a
single controller's feedback value can, and the constraint it reveals — requisite alignment — is
scale-free in the same way requisite variety is. The result is a governance result demonstrated at the
smallest scale at which the relevant control problem can be solved to the last decimal, and its
implication scales upward: an institution can enlarge the dimensionality of its dashboards indefinitely
and still govern badly if the distinctions those dashboards resolve are misaligned with the distinctions
its interventions turn on — and the *geometry* of that misalignment, not only its extent, determines how
badly.

---

### 2.5 Related theory

The claim that the value of information depends on more than its quantity is not itself new, and the
paper's novelty must be located precisely against three established bodies of work. **Blackwell's
comparison of experiments** (Blackwell, 1951, 1953) established that one signal is more valuable than
another across *all* decision problems if and only if the second is a garbling of the first — a partial
order strictly coarser than mutual-information dominance, and the exact tool with which we establish
(§3.5) that the displaced and matched channels are incomparable, so that neither attenuation nor
enrichment is guaranteed a priori. **Classical value-of-information theory** (Howard, 1966; and the
decision-theoretic tradition following it) makes the value of a signal explicitly dependent on the prior,
the payoff structure, and the signal's diagnostic relationship to the available decisions — so that
"information quantity does not determine decision value" is, in that literature, a settled starting point
rather than a discovery. And the **Conant–Ashby good regulator theorem** (Conant & Ashby, 1970) already
makes *correspondence* between regulator and regulated system central to regulation, not raw variety —
the regulator must be a homomorphic image of the system it controls.

Against this backdrop the contribution is not the general claim that information value is
context-dependent. It is specific and constructive: (i) a preregistered, exactly-derived family of
action-coupled *target-displacement* channels, analytically shown to be non-representable by any scalar
reliability; (ii) a solved sequential POMDP value surface for those channels; (iii) the comparison of two
*non-conjugate* permutation geometries at matched variety and matched uniform-prior information
content; (iv) the resulting non-monotone value profile with partial recovery at full displacement; and (v) a resolved, spatially replicated geometry-by-displacement crossover. The requisite-alignment framing then integrates 
these into the Governance as Engineering programme, where the pertinent question is not whether information 
value is context-dependent in general, but which *structural* property of an observation channel — beyond 
variety and beyond transmission fidelity — a governance architecture must satisfy. The good regulator 
theorem locates that property in the regulator's model of the system; requisite alignment locates a 
companion property in the observation channel's target, and shows in a solved case that it is geometrically
structured. Relatedly, the problem of choosing *what* to observe is the subject of POMDP sensor selection
and observation design (Kaelbling, Littman & Cassandra, 1998, for the POMDP setting); this paper differs
in fixing the channel's variety and its uniform-prior information content, and varying only its
action-relative target geometry.

---

