# Governance as Engineering — Dependency Atlas

*Internal structural map of the series. Not public-facing. Where `brief.md` tells a reader what GaE says, this document records whether GaE hangs together: which claims rest on which, how strong each link is, which branches are closed, and which open dependency would unlock the most downstream work.*

*Scope at this revision: Paper 0, Papers I–XXVII, Self I–III. The public `brief.md` is stale at eighteen papers and must be reconciled against this atlas (see §7). This atlas is organised by object and dependency, not by paper number; a paper-indexed lookup is in §8.*

---

## 0. How to read this atlas

Two conventions carry the whole document.

**Evidence tiers.** The corpus uses `[R]` / `[IP]` / `[H]`, plus the compound tags `[R within the model]` and `[R, numerical with envelope]`. Those two compounds bundle together two things that behave differently in a dependency graph — a theorem that holds exactly inside a stated model, and a simulation result that holds only up to a numerical envelope over a finite panel. This atlas splits them, so that a downstream claim inheriting from a proof and one inheriting from a seeded run are visibly different. The atlas tiers, and how they map onto the corpus tags:

| Atlas tier | Meaning | Corpus tag it refines |
|---|---|---|
| **[R]** | Analytic theorem or exact finite derivation; true wherever its stated premises hold. | `[R]`, the proof half of `[R within the model]` |
| **[N]** | Envelope-controlled numerical result: a preregistered simulation outcome over a finite panel, true up to the reported convergence/seed envelope. | the numerical half of `[R within the model]`, `[R, numerical with envelope]` |
| **[E]** | Empirical observation against out-of-model data under a frozen protocol. | Study 1 (Paper X); nothing else yet |
| **[IP]** | In-principle: the formal core is sound, the mapping onto institutions or the self is an interpretive correspondence, not a derivation. | `[IP]` |
| **[H]** | Heuristic: estimated, illustrative, or applied loosely. Orientation only. | `[H]` |

The split is the atlas's one substantive addition to the tier scheme; `brief.md` need not adopt it, but the atlas cannot do its job without it. Adding `[N]` is the repair ChatGPT flagged for the "R within a model versus numerical evidence" ambiguity.

**Arrow strengths.** In every dependency graph below, arrows are marked:

- `═▶` **derivational** — the target follows from the source by proof or exact construction.
- `─▶` **structural** — the target is built on the source and fails if the source fails, but the step is an argument, not a theorem.
- `··▶` **thematic** — the target reuses, reinterprets, or gives a mechanism to the source without depending on it for validity.

A claim's own tier and the strength of the arrow feeding it are independent: an `[IP]` governance reading can sit at the end of a `═▶` derivational arrow (the mathematics is rigorous; the reading is in-principle), and a `[N]` result can feed a later claim by a merely thematic `··▶` link.

---

## 1. Primitive objects

The smallest recurring objects the series reasons in. The test this list is meant to pass or fail: does GaE have one formal grammar, or a family resemblance? The honest answer at this revision is *most of one grammar with two half-attached appendages* (the objective/loss object and the reform operator are each realised differently in different papers). Each object is listed with where it is introduced or first made load-bearing.

- **Environment / plant** — the governed system's true state space and dynamics. Assumed from Paper I; never itself derived.
- **Disturbance** — the variety the environment throws at the controller; its dimensionality is the thing requisite variety must match (II, IV, VI).
- **Factorization** — the partition of the world's flux into the variables that exist *for* the system; the state space, ontology, or set of governed quantities. *The* central object. Derived from bounded capacity + temporal prediction in **Paper 0**; treated as given in every paper from I onward.
- **Observation channel** — the map from plant state to what the decision layer receives. Carries four separable adequacy properties, and separating them is much of the series' content: **dimensional adequacy** (VI, XX-Ashby), **fidelity** (I, III), **alignment** (XXVII), **observer diversity** (X, XIX).
- **Boundary** — the jurisdiction/environment cut; which dynamics are modelled and which are externalised (XII), and whether that cut survives the controller's own learning (XVIII).
- **Objective / loss** — what the controller optimises. Enters as an *observation architecture* (VI): the loss selects what is seen. Realised as a scalar proxy (XX, XXIV, XXV), a fixed loss with action semantics (XXVII), or a personal value function (Self I). *Not yet a single formal object across the series* — an open integration item (§6).
- **Action repertoire** — the set of distinct responses the controller can take; one action per internal state (XX). The thing alignment must align *to* (XXVII).
- **Feedback target** — the distinction a signal actually resolves, which may be displaced from the action-relevant distinction (XXVII). Introduced by XXVII; retroactively names what VI and XXIV were circling.
- **Certification link** — the point at which a rule's dependence on a world-fact must be discharged by trusting an anchor unverified (XVII). Reappears as the certification *kernel* an institution cannot self-monitor (XXII).
- **Learning rule** — how the internal model updates from data (XIV); distinct from adaptation, which maintains coupling (XXI).
- **Reform operator** — the (costly, directed) transformation from one factorization to another (XXIII). The series' least developed primitive — realised only as a retraining cost in one architecture, and explicitly *not* a metric (§6).

---

## 2. The dependency spine

The load-bearing skeleton, object by object. Everything in §3 hangs off this.

```
                    ┌─────────────────────────────────────────────┐
                    │  Paper 0 · bounded capacity + prediction     │
                    │  ═▶ FACTORIZATION (derived, non-unique)      │
                    └───────────────────────┬─────────────────────┘
                                            │ ═▶
                                            ▼
                    ┌─────────────────────────────────────────────┐
                    │  OBSERVATION CHANNEL adequacy — four axes    │
                    │   dimensional (VI, XX)                       │
                    │   fidelity     (I, III)                      │
                    │   alignment    (XXVII)          ◀── newest   │
                    │   diversity    (X, XIX)                      │
                    └───────────────────────┬─────────────────────┘
                                            │ ─▶
                                            ▼
                    DECISION / SELECTION  (V compounding · XV bottleneck)
                                            │ ─▶
                                            ▼
                    ACTUATION  (XI codimension law · XIII legitimacy gain)
                                            │ ─▶
                                            ▼
                    WORLD CERTIFICATION  (XVII relocation invariant · XXII kernel)
                                            │ ─▶
                                            ▼
                    LEARNING / ADAPTATION  (XIV · XV · XVI · XVIII · XXI · XXVI)
                                            │ ─▶
                                            ▼
                    REFORM / FACTORIZATION TRANSITION  (IX · XXIII · XXV)
```

The spine reads: a bounded system must factorize; a factorization is an observation channel with four independently failable adequacy properties; what the channel delivers is decided and acted on through chains that compound and bottleneck; action must eventually certify against a world it cannot self-verify; the whole loop must learn without dissolving; and when the factorization itself must change, that change is directed and costly. Cycle One builds the top half (static architecture); Cycle Two and the later clusters build the bottom half (dynamics).

---

## 3. Claim dependency graph

Grouped by object. Each entry: the claim, its tier, the arrows into it, and the arrows out (what later work uses it).

### 3.1 Factorization (the floor)

**Paper 0 — factorization is derived, not primitive.** Bounded representational capacity + a temporal-prediction objective force compression that *selects* the world's predictive variables; no action, reward, or survival pressure required. `[IP]` for the derivation; `[N]` for the three exhibited properties (emergence of latent causal variables; structured blindness — a coherent causal subspace sacrificed whole under capacity starvation; non-unique symmetry-broken selection). First registered operationalization of structured blindness *failed*, corrected under a second registered run (§5).

```
bounded capacity + prediction  ═▶  factorization exists                [IP]
                               ═▶  structured blindness (whole subspace lost)  [N]
                               ═▶  non-uniqueness → equivalence classes  [R-in-model]
                                        │
                                        ├─▶  coordination = selection within a class (not discovery of truth)
                                        └─▶  privileged classes: causal-variable-preserving factorizations
                                             objectively better on robustness/transfer
```

Out (this is the most-depended-on node in the series):
- structured blindness `··▶` **VI** variety gap (mechanised: an institution at its limit keeps a coherent partial model, is blind to the rest, *not* evenly blurred)
- non-uniqueness `─▶` **XIX** (portfolio question: what to preserve when no one factorization fits every regime)
- bounded representation premise `═▶` **XX** (Ashby, Goodhart, certification cost all re-derived from it)
- privileged-class result `─▶` **XXIII** (behavioral distance metric presupposes behaviorally-equivalent classes)
- factorization-as-object `─▶` **XXVII** (the state space whose distinctions alignment operates on)

### 3.2 Observation channel — dimensional adequacy

**VI — objective functions are observation architectures; the variety gap G.** What a system does not value, it ceases to see; optimisation erodes sensing of the dimensions the objective omits *when the omitted dimension is causally coupled to the proxy*. `[IP]`. The static condition (perceived variety ≥ disturbance variety net of the objective's reach) is `[R]` within the model.

**XX-Ashby — requisite variety as pigeonhole theorem.** With N internal states and Vₐ task-relevant conditions, N < Vₐ forces some state to collapse conditions needing different actions. `[R]`, flagged by the paper itself as near-definitional. Non-shallow content: *distinguish enough / distinguish the right things / re-distinguish when the quotient shifts.*

```
Paper 0 bounded rep  ═▶  XX-Ashby: N ≥ Vₐ                       [R, shallow]
VI variety gap  ─▶  VIII composite index G                       [IP index / H weights]
VI  ··▶  XXIV (resolution starved on rarely-visited periphery = variety gap in a learned observer)  [N]
XX-Ashby "distinguish the right things"  ··▶  XXVII requisite alignment (the sufficiency gap Ashby leaves open)
```

### 3.3 Observation channel — fidelity

**I — latency and fidelity ceilings; the averaging problem.** Centralised controllers respond to the mean, not the distribution. `[IP]`.
**III — representation-chain attenuation; constitutional unobservability.** Beyond a critical chain depth the policy layer cannot reconstruct the source signal, regardless of the quality of either endpoint. `[IP]`.

```
III constitutional unobservability  ═▶  XI constitutional uncontrollability (exact dual, actuation side)  [R codim]
III representation chain  ─▶  Self III inherited unobservability (human node is a chain layer)  [R]
```

### 3.4 Observation channel — alignment  ◀ newest object

**XXVII — requisite alignment.** For an observable to have decision value it must not only carry sufficient variety and transmit it without compression; the distinction it resolves must be *aligned* with the distinction the controller's action turns on, and alignment has geometry (which distinction, not how many).

Tiered results:
- displaced feedback channel not representable by any scalar reliability q `[R]`
- at m=0 displaced solve reduces exactly to the matched solve; exact-inert planes stay Aπ=0 `[R]`
- the two registered geometries carry identical marginal MI at every displacement level → any value difference is information-independent `[R]`
- 486/592 (82.1%) resolved substantive attenuation, 0 enrichment, unanimous among resolved `[N]`
- geometry dependence with sign reversal in displacement probability `[N]`
- worst case is intermediate ambiguity, not maximal displacement `[N]` (registered as a possible shape, confirmed)

```
Paper 0 factorization  ─▶  ┐
VI observation-as-architecture  ─▶  ├═▶  XXVII requisite alignment
XX sharpened Goodhart  ─▶  ┘

XXVII  ══▶  REFINES the Goodhart–Ashby synthesis:
        requisite variety (dimensionality) is necessary but NOT sufficient;
        requisite alignment (geometry of the resolved distinction) is a second,
        independently binding constraint.
```

Out — XXVII is the current frontier node; every §6.1–6.5 open branch descends from an assumption it fixes from outside (loss, action semantics, hidden classes).

### 3.5 Observation channel — diversity

**X — distributed sensing fails through correlation, not individual error.** Ensemble error variance scales as σ²·[(1−ρ)/N + ρ]; a correlation floor caps the benefit of adding observers. `[R]` for the variance law. Its central prediction — contemporary AI observers are near-perfectly correlated — is the series' one `[E]` result (Study 1: ρ_eff ≈ 0.97; six-model ensemble ≈ single-model error). Secondary prediction (tail correlation strongest) *not* supported (§5).

**XIX — governor / sentinel / bridge dissociation.** A factorization can govern well, warn early, or hold the ecology connected, and these dissociate; winner-take-all selection rewards only the first. `[N]` for the phenomenon (registered at role-structure level, not model identity); `[IP]` for the institutional reading.

```
Paper 0 non-uniqueness  ─▶  XIX portfolio roles
X correlation floor  ─▶  XXVI (replaces X's exogenous return-probability constant with a mechanism)
XIX governor≠sentinel dissociation  ══▶  gives XVI source terms a MECHANISM
        (optimization sheds warning capacity because warning is uncorrelated with governing, not because it is costly)
XIX bridge role  ··▶  new failure mode: loss of connectivity in factorization space
XIX  ─▶  XVII certification must test all three roles, not governing adequacy alone
XIX advertised geometry  ══▶  audited and mostly RETRACTED by XXIII (§5)
```

### 3.6 Decision / selection & the compounding results

**V — the coordination-failure tax.** Deficits of I–IV do not add; they compound multiplicatively. `[R]` (arithmetic) / `[IP]`.
**XV — the adaptation bottleneck.** Sense/Learn/Execute share one recursive loop whose adaptive rate is the *minimum* of its stage rates. `[R]` (arithmetic) / `[IP]`. The dynamic dual of V.

```
V multiplicative compounding  ══▶  Self II composite failure (primitives multiplicatively coupled → sealed self)
XV min-rate bottleneck  ─▶  XVIII Critical Learning Bandwidth (lower bound = XV in local form)
XV  ─▶  XXI absorptive-capacity inequality (adaptation holds only while learning's demand stays within loop capacity)
```

### 3.7 Actuation

**XI — the codimension law.** A delegation chain loses exactly one cleanly transmitted dimension per deficient layer; control effort grows superlinearly with depth. `[R]` (codimension) / `[IP]` (energy → political capital, deliberately never rigorous).
**XIII — legitimacy as the first endogenous coupling state.** Multiplies actuation, divides observation noise, cannot be set directly, collapses with hysteresis when borrowed. `[IP]`.

```
XI codimension  ═▶  Self II constitutional self-uncontrollability (dual of III via observer–plant identity)
XIII legitimacy gain  ─▶  Self III operator-seeded legitimacy spiral (single node can trigger XIII collapse)
XIII multiplicative gain  ─▶  Self II sequencing claim (rebuild self-legitimacy first)
```

### 3.8 World certification

**XVII — the relocation invariant.** Processing can be made arbitrarily verifiable; certification of reality cannot be self-verifying. Automating a coordination boundary relocates the irreducible world-certification link upstream but cannot delete it — for world-coupled coordination (governance by construction); pure convention escapes it. `[IP]`.

```
XVII regress  ─▶  XXII certification incompleteness (one of three demands; source = XVII + XXI meta-ladder, NOT XX pigeonhole)
XVII  ─▶  XIX (certification must audit sentinel and bridge value, not just governing)
XVII certification cost  ─▶  XX third law (certification cost as monotone accounting quantity)
```

**XXII — three demands, three sources, one refused unification.** Inside (self-validate the basis of correction), outside (decide convergence before acting), before-the-world (justify an architecture without a claim about which world). Each fails, *for a different reason*: reform undecidability needs computational universality (the *negation* of bounded representation); No Free Lunch needs only absence of a prior; only certification incompleteness traces to the bound. Two clean theorems, both declared shallow; the content is the contrapositive (*name your assumed dynamics class; name your bet on the environment class*). Sharpest practical claim: **an institution cannot monitor its own certification kernel with instruments that depend on that kernel** — a corrupt kernel makes health indicators *improve*. `[IP]`; five registered predictions failed (§5).

```
XVII + XXI  ─▶  XXII certification incompleteness
XXII  ══▶  explicitly REFUSES XX-style "three limits from one bound" unification
XXII kernel-blindness  ··▶  XVIII laundering (same shape: the diagnostic measures the corruption's success)
```

### 3.9 Learning / adaptation

**XIV — stable learning.** Dual control, exploration–exploitation, persistent excitation as the rigorous content of "antifragility." `[IP]`.
**XVI — exploration-preservation resists formalization.** Across four disciplines, a quantity of unused alternatives decays under optimisation and persists only through a *source term the optimiser does not set*; the order parameter is **source-term locality** (inside vs outside the control set). A deliberately bounded negative result. `[IP]`.
**XVIII — the Non-Factorizability Theorem.** Under generic persistent learning, no time-invariant jurisdiction/environment decomposition survives. `[R within the model]`. **Critical Learning Bandwidth** bounds learning from both sides; the two bounds pinch shut on part of parameter space — the **Decomposability Frontier**. `[R-in-model] / [IP]`.
**XXI — lifecycle.** Learning ≠ adaptation (the fastest learner can hold the best model and the worst grip) `[N]`; the meta-learning ladder must close on invariants in a bounded system `[R]`; sunsetting — persistence ≠ purpose `[IP]`.
**XXVI — tail-nucleated escape from monoculture.** Replaces Paper X's placeholder return-probability with a retained-competence mechanism; escape is nucleated by the best-preserved channel and propagated by a ladder condition on ordered penalties. Escape-ladder theorem `[R-in-model]`; stochastic first-passage account confirmed over tested range `[N]`; transfer `[IP]`.

```
XIV persistent excitation  ══▶  XXIV (persistent-excitation failure closed into an objective)
XVI source-term locality  ◀══  XIX (mechanism supplied) ; ◀── XXIV (excitation instance)
XVIII learning reshapes boundary  ◀─  XII (removes XII's exogenous-coupling assumption)
XVIII laundering  ─▶  XXV (one instance of conserved-pressure relocation)
XXI closure-on-invariants  ─▶  XXII (closed meta-ladder feeds certification incompleteness)
X placeholder constant  ══▶  XXVI mechanism
```

**XXIV — the observer you cannot afford to excite.** Optimising a diversity proxy drives it to ceiling while peripheral reach collapses; a *learned* observer spends resolution on the frequently-visited centre and compresses the periphery on its own. `[N]` for the gridworld mechanism; the administrative prediction is stated as `[H]` hypothesis, *not* a result.

### 3.10 Reform / factorization transition

**IX — transition bandwidth.** Architectural change as contested control; the latency asymmetry between reformers and incumbents; a race losable before it is visible. `[IP]` (Ω ratio `[H]`).
**XXIII — the shape of reform.** Behavioral distance is symmetric and metric; **reform cost is neither**. Directed transition cost strongly asymmetric (median 0.76); behavioral distance predicts reform cost only weakly; cost does not compose (triangle inequality not even well-posed). Routing through an intermediate lowers cost, but the best intermediate depends on the *destination*, not the origin — reform is oblique. `[N] / [IP]`.
**XXV — conserved sensitivity vs realized harm.** Imports Bode's integral (genuine conservation law, `[R]` inside LTI/fixed-controller/non-strategic licensing) and shows the conserved quantity (positive part of log|S|) and the harm functional (upper tail of |S|²) inhabit *different geometries*: conserved pressure does not determine realized harm. Exploitation licensed by three separable capacities — concentration, accessibility, discovery. `[R] within licensing / [IP]`.

```
IX transition bandwidth  ─▶  XXIII reform cost (IX asked whether reform is fast enough; XXIII prices the move)
XIX map  ══▶  XXIII: audit kills the advertised geometry, relocates the paper to travel-not-map
XVIII laundering + "pressure relocates" corollary  ══▶  XXV formalises and BOUNDS it
        (relocation is real but conserved-area ≠ accessible-loss)
```

### 3.11 The Self sub-series (cross-scale application)

Applies the same grammar at the individual scale. Almost entirely `[IP]` by the sub-series' own statement — the series' softest empirical territory.

```
Cycle One (I–VI)  ─▶  Self I : personal value function = observation architecture; self-variety gap G_self;
                              Goodhart–Ashby for the self   [R core / IP / H]
Cycle Two (X–XIV) ─▶  Self II : five primitives + observer–plant identity (controller = plant);
                              ══▶ measurement–disturbance coupling (separation principle fails for a self)
                              ══▶ constitutional self-uncontrollability = dual of III via XI
                              ══▶ composite failure via V ; "sealed self"
III + Self I/II   ─▶  Self III : inherited unobservability (institution's interior observability
                              upper-bounded by its human nodes' interior capacity) — corollary of III  [R]
                              ─▶ operator-seeded legitimacy spiral (XIII)  [I]
```

Note the tier drift to repair: Self I still uses the old `[R]/[I]/[S]` scheme and Self III uses `[I]/[S]`; Self II already migrated to corpus-standard `[R]/[IP]/[H]`. Reconcile Self I and Self III to the standard scheme (§7).

---

## 4. Evidence ledger

What kind of thing each load-bearing result actually is. This is the table to consult before letting any claim lend authority to another.

| Result | Object | Tier | Evidence type |
|---|---|---|---|
| Factorization is derived from bounded prediction | factorization | [IP] | argument against candidate list |
| Emergence / structured blindness / broken selection | factorization | [N] | 40 seeds, 2 registered runs |
| Ensemble variance σ²·[(1−ρ)/N+ρ] | diversity | [R] | analytic |
| ρ_eff ≈ 0.97 for AI observers | diversity | [E] | Study 1, frozen protocol, external critique |
| Codimension law (1 dim / deficient layer) | actuation | [R] | theorem |
| Multiplicative compounding (V) | decision | [R] | arithmetic |
| Adaptation bottleneck = min stage rate (XV) | adaptation | [R] | arithmetic |
| Ashby N ≥ Vₐ | dimensional adequacy | [R] | pigeonhole (shallow, flagged) |
| Sharpened Goodhart = reachable intervention set | dimensional adequacy | [R] + [N] | theorem + 30 registered worlds |
| Relocation invariant | certification | [IP] | regress argument |
| Non-Factorizability Theorem | boundary | [R-in-model] | proof within minimal model |
| Critical Learning Bandwidth / Decomposability Frontier | boundary | [R-in-model] / [IP] | model + reading |
| Governor/sentinel/bridge dissociation | diversity | [N] | 20-seed registered replication |
| Learning ≠ adaptation | adaptation | [N] | 30-seed registered model |
| Meta-ladder closes on invariants | adaptation | [R] | regress argument |
| Reform cost directed/asymmetric/non-composing | reform | [N] | retrain-cost measurement |
| Bode conservation vs harm geometry gap | reform | [R] within licensing | imported theorem + derivation |
| Escape-ladder theorem | adaptation | [R-in-model] | proof + 55/56 grid |
| Scalar-q non-representability | alignment | [R] | exact |
| Identical-MI geometry contrast | alignment | [R] | exact (information held equal) |
| Attenuation 82.1%, 0 enrichment, geometry sign reversal | alignment | [N] | frozen 74-cell panel, run 16bc675b |
| Inherited unobservability | fidelity (operator) | [R] | corollary of III |
| Almost all Self-scale primitives | self | [IP] | structural transfer, unconfirmed |

The one `[E]` row is the entire empirical spine of the series to date. Everything else is theorem, model, or interpretation. This is the single most important fact the atlas records: **GaE is, empirically, a one-prediction programme so far.** Weight the frontier map (§6) accordingly.

---

## 5. Nulls and abandoned branches

Retained deliberately; the series treats a documented null as worth more than an untested elaboration. This is where the atlas earns its keep — it records not only what exists but which possibility space is *closed*.

- **XVIII — registered early-warning index failed.** Rising cross-boundary prediction-error correlation was committed in advance as a boundary-dissolution alarm, with a binding cost. At a strict false-alarm budget it caught ≈1 collapse in 5. Mechanism *is* the result: local adaptation launders coupling evidence out of the residuals a well-run institution watches. Index rewritten on state covariance, demoted to `[H]`.
- **XX — conservation-law search failed.** No conserved budget of representational complexity moving between institution and individual. Only the *cost of staying aligned* is monotone; representational complexity itself can rise or fall. Reported rather than smoothed.
- **XIX — two registered claims did not survive retraining.** "Blind closure is the worst architecture" was a single-zoo artifact (bottom position trades by seed). The clean portfolio result (coverage-selected sentinel sets beat individually-best) confirmed in *direction* but below registered threshold — sentinel dissociation only weakly exploitable at tested sizes.
- **XXIII — falsifiability audit killed two XIX-inherited claims *before drafting*.** The cross-regime "reshaping" correlations were a small-sample artifact (SE ≈ 0.22 on 21 pairwise distances; the 0.09 tail meant "cannot tell," not "unrelated"). The connectivity threshold was algebraically the MST bottleneck edge — a restatement of distance magnitude, not a measurement. No topological transition under continuous stress sweep. The clearest case in the series of an audit doing decisive work.
- **XXII — five registered predictions failed; two controller builds failed.** Three agents with hard complementarity and truthful signalling converged on a no-trade equilibrium (the generalist survives alone). The surviving mechanism was found after the fact, re-registered, confirmed on 20 fresh seeds: inverting a need-certification kernel *floods* the misidentified party, so unmet need reads a perfect zero while allocation is corrupt.
- **XXVI — three registered failures.** Strong logarithmic dwell law failed its fit criterion (replaced by measured-hazard composition). Naive order-statistic law for population-size dependence falsified (explained by the theorem it prompted). Predicted liability–decay interaction sits an order of magnitude below feasible test resolution → retained as an *open* registered prediction, not a result.
- **X / Study 1 — secondary prediction not supported.** Correlation was *not* strongest in the tails. Reported as such.
- **XXVII — no enrichment.** A registered possibility that displaced feedback might *exceed* matched feedback in value was permitted by the design and did *not* occur. Attenuation-only.
- **Paper 0 — first structured-blindness operationalization failed**, corrected under a second registered run; the correction is part of the result.

Pattern worth noting: the nulls cluster on *self-diagnosis* claims (XVIII index, XXII kernel, XXVI dwell law). The series repeatedly predicts an institution can instrument its own adaptive health and repeatedly finds it cannot — which is itself the content of XVII/XXII. The failures are not scattered; they trace the same boundary.

---

## 6. Open dependencies

Where the graph has a dangling premise. Ordered by how much downstream work each unlock would license.

### 6.1 Externally-fixed alignment (highest leverage)
XXVII fixes the loss function, action semantics, and hidden classes *from outside*. Real governance does not. This single assumption gates at least four branches:
- **adaptive alignment** — can a controller learn that its feedback answers a displaced question, and at what calibration cost? (The cleanest direct successor; should begin as a *feasibility gate*, not Paper XXVIII — a two-regime {matched, one fixed displacement} test before any full POMDP over hidden semantics.)
- **contested alignment** — alignment with *whose* loss, action repertoire, representation? Moves requisite alignment from sensor design into governance proper. Likely a theoretical paper or game, not a large simulation.
- **observer ecology** — can individually misaligned observers be collectively aligned? Is requisite alignment a property of a channel or of the ecology? (Connects XXVII to X, XIX.)
- **endogenous power / strategic feedback** — who selects π, m, or the reported observation? "Observation failure → observation governance." Probably more important for real institutions than a finer attenuation surface.

### 6.2 The reform operator is narrow
XXIII priced reform in exactly one architecture (retraining cost against a capacity-matched reference). The reform operator (§1) is realised nowhere else. Factorization-transition geometry is *not* a metric space (XXIII), but the constructive object — which transitions are reversible, which factorizations are locally incomparable but connected through a third — is unbuilt. Next useful result is *small*: two or three explicit factorizations of one environment with a directional/path-dependent transition cost, not a universal geometry.

### 6.3 Multi-observer decision architecture is missing
X gives the correlation law and XIX the role dissociation, but neither supplies a decision architecture that *allocates authority* across observers informative about different intervention-relevant distinctions. Held fixed everywhere it appears.

### 6.4 Governance transfer is [IP] almost everywhere
Every governance reading past the formal cores is in-principle. Only Study 1 has crossed the empirical gate. The specified-but-open program: variety-gap pilot audit; delegation-depth vs implementation-fidelity study at proper N; prospective variety-gap panel across 20–30 systems; legitimacy-estimation protocol on a representative sample.

### 6.5 Cross-scale invariance is asserted, not tested
The Self sub-series assumes structures transfer across scale; Self II ranks its mappings but the passive/active distinction (Paper 0 §7) and the group-belief-state question are untested. A synthesis distinguishing *formally invariant / plausible analogy / metaphor / non-transferable* would keep the Consciousness-as-Engineering and Governance-as-Engineering lines coupled without collapsing them.

### 6.6 The objective/loss object is not unified
Realised as scalar proxy (XX, XXIV, XXV), fixed loss with action semantics (XXVII), and personal value function (Self I) with no single formal object across them. Until unified, "the objective selects what is seen" (VI) is a shared slogan over three different constructs.

---

## 7. Housekeeping the atlas forces

Consequences of bringing the corpus up to XXVII that `brief.md` and the tier scheme have not yet absorbed.

- **Paper count.** `brief.md` states eighteen. Current corpus is Paper 0 + I–XXVII = **28 documents counting Paper 0**, plus Self I–III as a parallel sub-series. The brief's paper table and its "remaining eleven papers" prose are both stale.
- **Cluster placement of XIX–XXVII is an open editorial decision, not a settled fact.** The brief's two-cycle + limits-cluster (XVI–XVIII) structure has no slot for XIX–XXVII. Three honest options: (a) extend a factorization cluster to XIX–XXVI with XXVII as a computational-mechanistic bridge; (b) treat XXVII as the opening of a third theoretical cycle (its own self-description — "the series' first computational-mechanistic paper"); (c) regroup by object rather than cycle, as this atlas does. Recommend deciding via the atlas rather than forcing XXVII into the existing narrative.
- **Tier-scheme drift in the Self line.** Self I (`[R]/[I]/[S]`) and Self III (`[I]/[S]`) predate the corpus-standard `[R]/[IP]/[H]`; Self II already migrated. Reconcile.
- **Add `[N]` to the public tier vocabulary, or don't — but decide.** The brief uses three tiers; the atlas needs four to keep proof and simulation distinct. If the brief keeps three, note explicitly that its `[R]` covers the atlas's `[R]` + `[N]`.

---

## 8. Paper-indexed lookup

For when you know the number and want the object. Full claims are in §3.

| # | Short title | Primary object | Headline claim | Top tier |
|---|---|---|---|---|
| 0 | Below the Factorization | factorization | factorization derived from bounded prediction | IP / N |
| I | (latency/fidelity) | fidelity | responsiveness ceilings; averaging problem | IP |
| II | (multi-frequency) | disturbance | single-speed architecture mismatched to most frequencies | IP |
| III | (representation chain) | fidelity | constitutional unobservability | IP |
| IV | (point of contact) | dimensional adequacy | requisite variety lives at contact | IP |
| V | (coordination tax) | decision | deficits compound multiplicatively | R / IP |
| VI | (variety gap) | objective/loss | objective = observation architecture; G | IP |
| VII | (reform) | reform | reform disappoints structurally; protected experimental space | H |
| VIII | (measurement) | objective/loss | G made estimable; composite index | IP / H |
| IX | (transition) | reform | transition bandwidth; reformer/incumbent latency asymmetry | IP |
| X | (distributed sensing) | diversity | correlation tax; ρ_eff≈0.97 tested | R / **E** |
| XI | (actuation) | actuation | codimension law; constitutional uncontrollability | R / IP |
| XII | (boundary) | boundary | boundary as design variable; small-gain; pooling paradox | IP |
| XIII | (legitimacy) | actuation | legitimacy as endogenous coupling state | IP |
| XIV | (learning) | learning | dual control; persistent excitation | IP |
| XV | (bottleneck) | adaptation | adaptation rate = min stage rate | R / IP |
| XVI | (exploration) | learning | source-term locality; bounded negative result | IP |
| XVII | (certification) | certification | relocation invariant | IP |
| XVIII | (non-factorizability) | boundary | Non-Factorizability Theorem; Decomposability Frontier; failed index | R-in-model / IP |
| XIX | Governors, Sentinels, Bridges | diversity | governor/sentinel/bridge dissociation | N / IP |
| XX | Three Laws from One Bound | dimensional adequacy | Ashby/Goodhart/certification from bounded rep; sharpened Goodhart | R / IP |
| XXI | When to Stop Learning | adaptation | learning≠adaptation; meta-ladder closure; sunsetting | N / R / IP |
| XXII | (three demands) | certification | three demands, three sources; kernel unself-monitorable | IP |
| XXIII | The Shape of Reform | reform | behavioral distance metric; reform cost directed/oblique | N / IP |
| XXIV | The Observer You Cannot Afford to Excite | diversity | excitation closed into an objective | N / H |
| XXV | Reform Pushes Down, Strategy Pushes Back | reform | Bode conservation vs harm geometry gap | R-licensed / IP |
| XXVI | The Cost of Returning | adaptation | tail-nucleated escape; escape-ladder theorem | R-in-model / IP |
| XXVII | Requisite Alignment | alignment | alignment as second constraint; geometry sign reversal | R / N |
| Self I | Variety Gap in the Self | objective/loss | value function = observation architecture; G_self | R / IP |
| Self II | (adaptive self) | adaptation | observer–plant identity; self-uncontrollability; sealed self | IP |
| Self III | The Operator | fidelity | inherited unobservability | R / I |

---

*Maintenance note: this atlas is the intended internal system of record. The natural next step, if the load justifies it, is a `papers.yaml` holding the per-paper metadata (depends_on / establishes / nulls / successors) as structured data, so that the brief's paper table and this atlas can both be audited against one source and cannot silently disagree. Not built here; the §8 table is its seed.*
