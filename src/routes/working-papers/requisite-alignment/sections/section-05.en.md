## 5. Discussion

### 5.1 What the study establishes

Within one exactly-solved control problem, the decision value of a scalar feedback signal falls
substantially when the signal evaluates a systematically displaced target — resolved, substantive
attenuation in 82.1% of tested conditions, and unanimous attenuation among every condition whose
numerics resolved. The effect is distinct from the reliability axis the model already contains: the
displaced channel is provably not representable by any scalar reliability q (it induces a three-level
likelihood structure, or at maximal ambiguity a class partition, that no two-level q-channel can
produce), so this is not the requisite-variety story retold. And the effect has geometric structure: two
displacements of equal probability but different permutation geometry impose different value costs, with
the ordering reversing across the displacement range.

Taken together these support the paper's thesis — that requisite variety is necessary but not sufficient,
and that a second constraint, requisite alignment, binds independently and has geometry. But the strength
of that support is uneven across the three findings, and honesty requires separating them.

### 5.2 The marginal attenuation is partly confounded with information loss; the geometry effect is not

The clean version of the requisite-alignment claim would be: value falls under displacement *at constant
information content*, so the loss cannot be an information-quantity effect in disguise. This holds for
the geometry finding but not, without qualification, for the raw m-attenuation.

The displaced channel's marginal mutual information about the true class is not invariant in m. It equals
the matched channel's at m = 0 and again at m = 1 (where the signal is a perfect-reliability report about
the single class π(a)), but dips at interior m — to roughly 34–39% of the matched MI at m = 0.5, across
the reliability range. So part of the attenuation as m rises from 0 toward 0.5 *coincides* with a genuine
fall in how much the channel tells the controller about the state. A critic could reasonably say that
this component of the effect is consistent with a variety/information account and does not, on its own,
demonstrate a distinct alignment constraint.

Two things rescue the alignment claim from this objection. First, the attenuation is disproportionate to
and differently-shaped from the MI loss: MI is symmetric about m = 0.5 (it falls then recovers
symmetrically), whereas the value profile, though also non-monotone, is not the image of the MI curve —
value depends on how the surviving information maps onto the *action-relevant* distinction, not only on
its quantity. Second, and decisively, the **geometry effect occurs at fixed marginal information
content**. The two registered geometries, π₄ and π₂₊₂, displace every action to exactly one other class,
so their single-observation mutual information is identical at every m (verified: equal per-action and on
average). Any difference in decision value between them therefore cannot be an information-quantity
effect — the quantity is equal by construction. Yet the value differs, and its sign reverses with m.
This is the paper's strongest evidence for requisite alignment as a constraint orthogonal to variety:
holding information content exactly fixed, the *arrangement* of the misalignment across the state space
changes what the signal is worth.

The framing (§1–2) should therefore lead with the geometry result as the load-bearing evidence and
present the m-attenuation as supporting but partially confounded, rather than treating all 82% as
equally clean demonstration of an alignment-not-variety effect.

![Information and value have different shapes in displacement](/working-papers/images/requisite-alignment/mi-vs-value.png)

**Figure 4.** The channel's marginal mutual information (left axis, blue) falls symmetrically to a
trough at m = 0.5 and recovers by m = 1, whereas the median resolved value cost D_π (right axis,
orange) troughs later, near m = 0.75. The two curves have different shapes in m, so the value
attenuation is not a simple image of the information loss — and the geometry contrast (Figure 3),
which holds MI exactly equal, isolates the component of the effect that no information measure can
explain.

### 5.3 What the study does not establish

**Prevalence.** The 82.1% is a fraction of tested conditions on a purposive 74-cell panel selected for
existence and heterogeneity, stratified across the value magnitude but not sampled uniformly from the
1,121-cell active region. It is not an estimate of the proportion of that region that attenuates, and
should never be reported as one. Whether attenuation is this pervasive across the full active region is
an open question requiring the registered uniform-sample follow-up. The finding is existence, robustness,
and geometric structure — not prevalence.

**The censored conditions.** Of the 592 conditions, 106 (17.9%) did not converge at the registered grid
levels and are censored. They are not evidence of anything — not of attenuation, not of its absence. They
cluster partly (47%) in the two lowest cue-reliability rows where the matched Gate-1 baseline itself sat
near its resolution edge, so the non-convergence plausibly reflects inherited numerical difficulty rather
than a feature of displacement; but "plausibly" is the operative word, and per the frozen no-escalation
discipline we did not pursue them to finer grids to find out. A reader should treat the resolved-unanimous
attenuation as strong within its 82% and make no inference about the censored 18%.

**Enrichment.** The design permitted the displaced signal to be worth *more* than matched feedback: the
two channels are Blackwell-incomparable, so displaced feedback could in principle carry more
decision-relevant information about some secondary latent, yielding A_π > A_matched. No resolved condition
on this panel showed it. This is a genuine negative on a registered possibility, and it should be reported
as such — the incomparability that makes enrichment *possible* does not make it *occur* under these
losses and this parameterisation. It does not follow that enrichment cannot occur under other losses,
other K, or other latent structure; only that this model, asked honestly, did not produce it.

**Generality beyond the model.** The result is a theorem-and-computation about one finite POMDP with
K = 4, a specific loss structure, a binary feedback channel, and a known displacement. The
requisite-alignment *concept* is proposed as general — it is a claim about the relationship between what
an observable resolves and what an action depends on, which is not specific to this model — but the
*evidence* is one solved instance. The paper should be read as establishing that the constraint is real
and structured in at least one exactly-analysable case, not as measuring its magnitude in any governance
system.

### 5.4 The non-monotonicity and the meaning of "maximal" misalignment

A feature worth dwelling on, because it is counterintuitive and because it disciplines the concept: the
worst case is not maximal displacement. Value is lowest near m = 0.5 — where the signal is maximally
*ambiguous* between the right target and a wrong one — and partially recovers at m = 1, where the signal
becomes a perfectly reliable report about a *consistently* wrong target. A consistently wrong signal is
more useful than an ambiguously-sometimes-right one, because a controller that knows the displacement can
partially invert a consistent mapping but cannot disambiguate a mixture. This means "misalignment" is not
a monotone scalar with a worst point at the extreme; its cost peaks at intermediate ambiguity. For the
governance reading, the caution is against equating "maximally misaligned metric" with "maximally
harmful metric" — a dashboard that is reliably measuring the wrong thing may be less damaging than one
that is unpredictably measuring sometimes the right and sometimes the wrong thing, because the former can
be corrected for and the latter cannot.

### 5.5 Relation to the deferred adaptive gate

Throughout, the controller *knows* the displacement — π and m are given, and it updates optimally under
known ambiguity. This is deliberate: it isolates the value cost of misalignment-as-given from the
separate problem of *inferring* the misalignment. The obvious next question — can a controller that does
*not* know the displacement learn it, and at what cost — is a distinct study, and one this design
specifically set aside. It is not a hidden limitation but a registered scope boundary: the adaptive
version requires a controller maintaining and updating a belief over the displacement itself, which
changes both the mechanism and the estimand (from value-of-misaligned-feedback to
value-of-learning-the-misalignment). The present result is the necessary baseline for that study — one
must know what misalignment costs when known before asking what it costs when it must be discovered.

### 5.6 Implication for the governance program

If requisite alignment is a real constraint independent of requisite variety, the series' prescription —
raise the effective dimensionality of the observation channel — is necessary but incomplete. An
institution can expand its dashboards along more independent dimensions, transmit those signals without
compression, and still govern badly if the distinctions its metrics resolve are misaligned with the
distinctions its interventions turn on. The dimensional prescription answers *how much* to observe; the
alignment constraint asks *what* to observe — which distinction, matched to which lever. And because
alignment has geometry, the corrective is not a scalar "measure the right thing" but a structural
question about how the observed distinctions are arranged relative to the space of available
interventions. This is, for the series, a second axis of architectural failure alongside dimensional
insufficiency — one that a system can fall into precisely by succeeding at the first, adding rich,
faithfully-transmitted, high-dimensional observation of the wrong distinctions. The solved model does not
show that real governance systems fail this way; it shows that the failure mode is structurally real,
geometrically structured, and invisible to a purely dimensional account.

---

