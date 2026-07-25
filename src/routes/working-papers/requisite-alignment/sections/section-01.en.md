## 1. Introduction

The Goodhart–Ashby synthesis (Paper VI) holds that objective functions are observation architectures:
a governance system whose value function projects a high-variety environment onto too few dimensions will,
as a matter of formal necessity, exclude the disturbance dimensions that eventually destabilise it. This
is the structural core on which the series' diagnosis rests. It follows from Ashby's Law
of Requisite Variety and Shannon's channel capacity theorem, and it has organised the series'
diagnosis across two dozen papers and twenty-one cases: the failures recur because they are the
observable signatures of architectures operating below requisite variety.

Requisite variety, as the series has used it, is a claim about *dimensionality* — the number of
independent dimensions along which a governance system can perceive its environment. A system has
variety when it can register the clinical complexity healthcare excludes, the distributional
consequences central banks exclude, the systemic patterns courts exclude. The prescription that follows
is to raise the effective dimensionality of the observation channel: perceive more of the disturbance
environment, along more independent axes, at each relevant scale.

This paper asks a question the dimensional framing leaves open. Suppose an observation channel *does*
carry sufficient variety — it registers a genuine, independent dimension of the environment, at full
information — but that dimension is the *wrong one for the action at hand*. It reports a real
distinction, reliably, yet not the distinction the controller's intervention actually turns on. Does
requisite variety, in the dimensional sense, guarantee that such a channel has decision value? Or is
there a second constraint, orthogonal to dimensionality, that a channel must also satisfy?

We answer this not with an architectural argument but by solving the control problem exactly. We take a
single, fully specified partially-observed decision problem — a controller facing four hidden disturbance
classes, choosing countermeasures under a fixed loss structure, with the option to purchase a scalar
feedback signal — and compute, by preregistered dynamic programming, the exact value of that feedback:
how much a controller's expected loss falls because it can pay to *attend*, to observe rather than act
blind. This is the series' first computational-mechanistic paper. Its object is unchanged — the value of
an observable to a controller facing disturbance variety — but where the earlier papers establish
structural necessity by [R]-tier proof about architectures, this paper measures a specific value surface
by exact solution, with every claim tiered, every prediction frozen before code, and every numerical
result carried with an explicit convergence envelope or censored.

The first study (Gate 1) establishes *where* purchased feedback has decision value at all, across the
full parameter space of cue reliability, disturbance persistence, channel reliability, and acquisition
cost. It finds a large, connected region in which attention is worth its cost — establishing that the
quantity we are measuring is real and substantial before we perturb it. The second study (Gate 2) then
displaces the feedback: it keeps the signal fully informative, correctly modelled by an optimal
controller, and provably not merely noisier — but points it at a systematically *wrong target*, so that
it evaluates a different class than the one the controller acted on. The displacement is parameterised
by a probability m and, critically, by the *geometry* of the target permutation — whether the wrong
targets form one connected cycle through the class space or two disjoint swaps.

The result is that requisite variety is not sufficient. A signal that carries information an optimal
controller cannot recover by treating it as mere noise — one provably not reducible to a change in
channel reliability — loses substantial decision value when it is aligned to the wrong distinction:
resolved, substantively meaningful attenuation in 82% of tested conditions, and unanimous attenuation
among every condition whose numerics resolved. The cleanest form of the claim comes from the *geometry* of the misalignment. Two displacements of equal probability and identical channel variety but different geometric
structure — whether the wrong targets form one connected cycle through the class space or
two disjoint swaps — impose different value costs, and, across the range of displacement,
oppositely ordered ones: at low displacement a connected 4-cycle preserves more value than
two disjoint swaps, and by higher displacement the ordering reverses. The two channels have
the same output cardinality, the same reliability, the same displacement probability, and
the same likelihood multiset; they differ only in which latent class each likelihood level
is attached to. No account of how many distinctions the channel can make can therefore
separate them, and the difference in value is an effect of *which* distinction the signal
resolves relative to the controller's action. Whether it is additionally separable from any
information-quantity account is a narrower question, registered as an open test in §5.2. 
The value of an informative signal depends on the geometry of the latent
distinction it reports, not only on how reliably, how often, or along how many dimensions it reports.

We name this second constraint **requisite alignment**: for an observable to have decision value, it is
not enough that it carry sufficient variety (Ashby) and transmit that variety without compression
(the series' integration-without-compression property); the distinction the observable resolves must be
*aligned with the distinction the controller's action turns on*. Requisite variety is a claim about the
dimensionality of perception. Requisite alignment is a claim about its geometry — which distinction,
not how many. This paper shows, in a solved model, that alignment is a binding constraint independent of
variety, and that it has structure: alignment can be lost by degrees and along different geometries,
with the cost of misalignment depending on both.

---

