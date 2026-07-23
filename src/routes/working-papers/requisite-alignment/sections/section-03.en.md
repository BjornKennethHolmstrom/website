## 3. Methods

### 3.1 The control problem

We study a finite-horizon partially observed control problem in which a controller repeatedly faces
one of **K = 4** hidden disturbance classes and must choose, at each step, either a null action or a
class-specific countermeasure. The loss structure is fixed throughout: a correct countermeasure
incurs L_correct = 0 plus a fixed action cost κ = 0.3; the null action incurs L_null = 1.0; a wrong
countermeasure incurs L_wrong = 2.0. Because L_correct + κ = 0.3 < L_null < L_wrong, acting correctly
is preferred to inaction, which is preferred to acting wrongly — the controller has a genuine
identification problem, not merely a detection one.

The controller observes a contextual cue about the hidden class with reliability r (at r = 1 the cue
reveals the class exactly; at lower r it is proportionally less informative). The disturbance process
is Route B (hold-or-reset): with probability p the class and cue persist, and with probability 1 − p
the system resets — a new class is drawn independently and a fresh cue emitted. Thus p is a retention
coefficient and 1/(1 − p) the expected interval between resets; p = 0 is genuinely memoryless.

The object of study is a second, optional information channel: after taking a real countermeasure the
controller may pay acquisition cost c to receive one **binary** feedback observation, approximately
"was the chosen countermeasure correct?", with channel reliability q (at q = ½ the channel is
uninformative). Feedback arrives after the current action and loss, so it can improve only future
decisions, and purchasing it is optional. Writing J\*_C1 for the minimum expected cumulative loss with
the cue alone and J\*_C1+C2 for the minimum when feedback may also be purchased, the quantity of
interest is the **decision value of feedback**

> A = J\*_C1 − J\*_C1+C2 ≥ 0,

nonnegative because the controller may always decline to purchase (the dominance property). A is the
value of a controller's option to *attend* — to pay to observe — over and above the context it already
has. The horizon is H = 64 throughout.

### 3.2 Solver and the two-study structure

Both studies use a single belief-grid backward-induction POMDP solver over the K = 4 belief simplex,
with closed-form CDF-Kuhn (Freudenthal) interpolation on a regular simplex grid at refinement levels
G = 40 → 54 → 64. (An alpha-vector representation was tried and rejected as intractable for K = 4; the
Kuhn interpolation replaced a scipy-Delaunay implementation whose `find_simplex` cost was pathological
at these grid sizes — ~28 s per call at G = 64 — after verifying the two interpolants converge to a
common limit and that A, being a symmetric functional of the value functions, is exactly class-symmetric
under Kuhn despite the interpolant itself not being permutation-equivariant.) Every claim carries an
epistemic tier: **[R]** rigorous (structural, method-independent), **[IP]** in principle, **[H]**
heuristic. Numerical results carry an explicit convergence envelope and are censored when unresolved.

The work proceeds as two preregistered gates. **Gate 1** establishes *where* purchased feedback has
decision value at all — the sign question, A > 0 vs A ≈ 0 — over the full four-dimensional parameter
grid (r, p, q, c), each axis at seven levels (2,401 cells). **Gate 2** conditions on the resolved
positive region and asks how that value changes when the feedback signal is **displaced** — when it
evaluates a systematically different target than the intervention taken. Predictions, classification
rules, and validation obligations were frozen before any solver was written, following the series'
simulation-first discipline; both preregistrations and every numerical-method amendment are recorded
with provenance hashes.

### 3.3 Gate 1 — the activation surface

Gate 1 brackets A with two independent bounds that share no Bellman core with the solver: a lower bound
from a validated one-shot Monte-Carlo policy (a simultaneous 99% empirical-Bernstein certificate over
144 nondegenerate triples yielding 562 high-confidence-active cells), and an upper bound reducing to the
889 exact "known-answer" planes where A = 0 by structural certificate (p = 0 memoryless, q = ½
uninformative, or r = 1 certain). The solver then classifies every cell, refining the boundary band with
the three-level Kuhn sequence and a dominance-respecting rule that separates resolved-active cells from
exact-inert planes, from cells numerically indistinguishable from zero (zero-compatible), from genuinely
non-convergent cells. A registered convergence amendment (a fixed absolute-stability tolerance
T_abs = 10⁻⁸, verified invariant across five orders of magnitude) corrected a rule defect that had
mislabeled stably-zero cells as non-convergent.

The frozen Gate-1 surface is **1,121 active / 889 exact-inert / 277 zero-compatible / 114
non-convergent** cells, with zero dominance violations and the two registered anchors resolving as
predicted (the high-value anchor active; the low-value anchor computing A ≈ 0 to machine precision at
all three grid levels). A companion consistency guard confirmed all 288 non-plane inert cells are
behaviourally inert (the optimal controller declines to purchase where feedback has no value).

### 3.4 Gate 2 — the displaced-feedback mechanism

Gate 2 modifies only the feedback observation likelihood. Given the controller's action a, a fixed,
**known** permutation π of the class labels, and a displacement probability m, the comparator target on
each purchased observation is drawn independently:

> T = a with probability (1 − m), T = π(a) with probability m,

and the binary signal reports match with probability q if T equals the true class, else 1 − q.
Integrating out T gives the displaced channel likelihood over the true class z [R]:

> P(match | z = a) = q − m(2q − 1); P(match | z = π(a)) = 1 − q + m(2q − 1); P(match | z = other) = 1 − q.

The controller knows π and m and updates optimally under this known ambiguity; it is not a deceived
agent but one reading a **known but stochastically displaced, action-coupled sensor**. Crucially, this
is not a rescaling of the reliability q. The matched q-channel has two likelihood levels (q at the acted
class, 1 − q elsewhere); the displaced channel has **three** distinct levels for m ∈ (0,1)\{½}, and at
m = ½ it has two levels but partitions the classes as {a, π(a)} versus the rest — a partition no scalar
q-channel can produce, since a q-channel always separates the acted class from all others [R]. The
displacement therefore cannot be recovered by reading a reliability slice off the Gate-1 surface; the
permutation acts on the comparison *target* in K-dimensional class space, upstream of the binary output,
and that structure survives the collapse of the signal to a single bit.

**Lemma (information invariance of the displacement) [R].** For fixed q and m, the single-observation
mutual information between the true class and the binary signal is invariant across *all* fixed-point-free
permutations π and all actions a. The likelihood vector P(match | z) is, for every such π and a, a
relabeling of the same multiset {q − m(2q−1), 1 − q + m(2q−1), 1 − q, 1 − q}; mutual information is
invariant under relabeling of the conditioning outcomes, so it depends only on (q, m). In particular the
two registered geometries π₄ and π₂₊₂ carry identical marginal information at every m. (Verified across
all nine K = 4 derangements and four actions.) This is the fact that makes the geometry contrast a test
of alignment at *fixed* information content: any difference in decision value between π₄ and π₂₊₂ cannot
be an information-quantity effect, since the quantity is equal by this lemma.

Two permutation geometries are registered as co-primary. For K = 4 the fixed-point-free permutations
fall into exactly two conjugacy classes: the connected **4-cycle π₄ = (1 2 3 4)** and the
**double-transposition π₂₊₂ = (1 2)(3 4)** [R, by enumeration]. Because the base model is symmetric
under class relabeling, one representative of each class is exhaustive; π₄ and π₂₊₂ are not conjugate to
each other, so they are genuinely distinct channels rather than relabelings.

### 3.5 Estimand, panel, and classification (frozen)

The estimand is the **signed** advantage change D_π(m) = A_π(m) − A_matched, computed directly as
J\*_matched − J\*_π so that the common cue-only baseline J\*_C1 cancels exactly and its interpolation
error does not enter the envelope [R]. The direction is not presumed: outcomes are classified as
attenuation, enrichment (A_π > A_matched), practical equivalence, or unresolved. No upper envelope
A_π ≤ A_matched is assumed — the displaced and matched channels are Blackwell-incomparable (a garbling
of the matched channel cannot distinguish π(a) from the other wrong classes, so displacement can in
principle redistribute rather than only destroy information), so enrichment is a registered possible
finding rather than a defect [R].

The study runs on a **frozen 74-cell panel**, selected deterministically from the Gate-1 surface: the
qualified interior (active cells with A − ε_A > 10·ε_A, i.e. magnitude trustworthy, not merely sign),
stratified by tertiles of A with hash-ordered selection, the registered anchors and slices where they
qualify, and one adjacency pair per tertile. The panel is a purposive sample for existence and
heterogeneity, not prevalence. Each cell is solved for the matched baseline and for both geometries at
m ∈ {0, 0.25, 0.5, 0.75, 1.0} at all three grid levels.

Classification is interval-based and gated on convergence. A condition's D_π is classifiable only if
**both** J\*_matched and J\*_π independently converge (each fine refinement gap no larger than its coarse
gap, or both below T_abs = 10⁻⁸); otherwise the condition is censored as non-convergent regardless of
how stable D_π appears. A converged effect is substantive only if it clears the registered minimum
δ_min = 0.05 · median(A over the panel) = 0.648 *after* its uncertainty: attenuation requires
D_π + ε_D ≤ −δ_min, enrichment D_π − ε_D ≥ +δ_min, practical equivalence |D_π| + ε_D < δ_min. The
m = 0 condition is a validation endpoint (D_π must be zero exactly) and is excluded from outcome
fractions. Geometry dependence is registered as established only if the contrast G(m) = D_π₄ − D_π₂₊₂
clears δ_min on at least two adjacent qualified cells at a common m, or on a slice.

### 3.6 Validation obligations

Eight structural obligations were required to pass before any scientific condition was interpreted:
(V1) m = 0 reduces exactly to the matched Gate-1 solve; (V2) dominance A_π ≥ 0, with a resolved parity
violation requiring the interval A_π + ε to clear zero; (V3) exact-inert planes remain A_π = 0 for all
m and both geometries, computed through the channel code rather than by shortcut; (V4) the implemented
likelihoods reproduce the three-level analytic form; (V5) non-representability by any scalar q; (V6) the
conjugacy-symmetry spread across all permutations of a cycle type falls within the displaced-policy
envelope; (V7) an independent exact H = 2 enumeration, sharing no interpolation core, reproduces the
solver within envelope and confirms the *model* is exactly conjugacy-symmetric (so any solver-level
spread is interpolation bias, not a model asymmetry); and (V8) an anchor-and-plane pilot before the
interior run.

---

