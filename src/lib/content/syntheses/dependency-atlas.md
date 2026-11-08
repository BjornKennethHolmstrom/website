# Governance as Engineering — Dependency Atlas (v2.1)

*Internal structural map of the series. Where `brief.md` tells a reader what GaE says, this document records whether GaE hangs together: which claims rest on which, by what kind of relation, how strong each is, which branches are closed, and which open dependency would unlock the most downstream work.*

*Scope: Paper 0, Papers I–XXVIII, Self I–III, plus cross-links to the companion series *Systemic Optimization* (SO-WP0, SO-WP1). `brief.md` / `brief-sv.md` are reconciled through XXVII only; XXVIII is not yet in the brief (§9). Organised by object and relation, not paper number; a paper-indexed lookup is in §10.*

*v2 changes (from an external review of v1): tier scheme cleaned to `[R]`+scope / `[N]` / `[E]` / `[IP]` / `[H]`; edges now carry relation labels, not just strengths; Paper 0's role reclassified as retrospective grounding for most papers rather than a validity dependency; the single linear spine replaced by a process loop plus a constraint overlay; the pentad added as the candidate central object; a two-axis priority matrix and a Self transfer matrix added; the nulls "self-diagnosis" claim demoted from conclusion to a bounded candidate synthesis; and one live correction to XXVII's mutual-information claim flagged (§9).*

*v2.1 changes (2026-11-08): Paper XXVIII, *Closure Adaptation Dynamics*, added (§3.9, §4, §10) and placed in cycle two as a late addition (§9), with numerical corrections from a spot re-simulation (§9); companion-series section added (§3.12) with eight canonical links mirrored from `papers.yaml` `cross_series_links`; edge vocabulary extended (`instantiates`, `corroborates-cross-model`, `bounds`, `tested-against-criterion`); SO's diagnostic failures tested against the §5.1 discriminator and recorded as a third presentation, not new members; §6.1 gains its first exactly-solved objective→observability case.*

---

## 0. How to read this atlas

**Evidence tiers.** The corpus uses `[R]` / `[IP]` / `[H]` plus the compound `[R within the model]`. That compound bundles two things a dependency graph must keep apart — a *theorem* that holds exactly inside a stated model, and a *simulation regularity* that holds only up to a numerical envelope. This atlas splits them and annotates scope:

| Tier | Meaning |
|---|---|
| **[R]** | Analytic theorem or exact finite derivation. Add a `scope:` — a theorem inside a toy model is still `[R]`, but its domain *is* that model, and the atlas says so. |
| **[N]** | Envelope-controlled numerical result: a preregistered simulation outcome over a finite panel, true up to the reported convergence/seed envelope. |
| **[E]** | Empirical observation against out-of-model data under a frozen protocol. |
| **[IP]** | In-principle: formal core sound, mapping onto institutions or the self is interpretive. |
| **[H]** | Heuristic: estimated, illustrative, or loosely applied. |

The corpus's `[R within the model]` maps to atlas **`[R]` scope: `<model>`** when it names a theorem, and to **`[N]`** when it names a simulation result. This split is the atlas's job; the public brief may keep three tiers and note once that its `[R within the model]` covers atlas `[R]`(scoped) + `[N]`.

**Companion-series results.** SO uses its own statuses: confirmatory (C), prespecified descriptive (PD), exploratory declared (ED), exploratory post hoc (EP), structural (ST). Mapped here as ST → `[R]` scope: the SO model; C → `[N]`; PD/ED/EP → `[N]` marked *exploratory*. All are synthetic. None lifts a GaE governance claim above `[IP]`.

**Edge relations.** v1 marked only arrow *strength*. That conflated distinct relations. v2 labels each edge by *kind* — strength alone could not distinguish "XXVII is derived from VI" (false) from "XXVII refines VI" (true). The vocabulary:

- **assumes** — uses the source's object as a premise (e.g. "a finite state space exists"), without depending on the source's *derivation* of it.
- **derives** — follows from the source by proof or exact construction.
- **mechanizes** — supplies a concrete mechanism for something the source stated abstractly.
- **instantiates** — exhibits the source's abstract structure as a concrete case, without being needed for it.
- **motivates / positions** — the source frames or locates the target; no logical entailment.
- **refines** — sharpens or adds a constraint to the source's result.
- **bounds** — imposes a condition, price, or friction the source omitted; the source survives but with narrower licence.
- **corroborates-cross-model** — reproduces the source's phenomenon in a separately built model. Weaker than independent replication when provenance is shared.
- **empirically tests** — the target puts the source's prediction through a data gate.
- **reuses-model** — the target inherits the source's simulation apparatus.
- **transfers-by-analogy** — cross-scale correspondence, not invariance.
- **tested-against-criterion** — a candidate checked against an existing classification (e.g. §5.1's slots).
- **retracts / contradicts** — the target overturns a claim the source advanced.

A claim's own tier and the relation feeding it are independent: an `[IP]` reading can *derive* cleanly from an `[R]` core (rigorous mathematics, in-principle institutional reading), and a `[N]` result can *motivate* a later claim without entailing it.

---

## 1. The central object, the primitives, and the observation matrix

### 1.1 What the object at the centre actually is

v1 named **factorization** the series' central object. After XXVII that is only half right. Factorization is the *floor* — the thing every paper stands on — but the mature programme's recurring object is a *relation*, the coupling among five things:

```
   environmental          ┌── representation ──┐
   distinction   ◀──────▶ │                    │ ◀──────▶  objective
        ▲                 └─────────┬──────────┘               │
        │                          │                          ▼
     feedback  ◀───────────────────┴───────────────────▶   action
```

Most GaE failure modes are a broken link somewhere in this pentad: insufficient distinctions (VI, XX-Ashby), distorted representation (I, III), objective-induced blindness (VI, XXIV), inadequate action repertoire (XI), misaligned feedback (XXVII), failed certification of the whole relation to the world (XVII, XXII), or inability to revise the relations (XXI, XXIII). Factorization is where the pentad is instantiated; **the coupling among factorization, objective, action, and feedback is where the theory now lives.** This is a candidate organising frame, offered as a structural observation `[H]` — not a theorem, and not a claim that the five reduce to one.

SO-WP1 independently arrives at the same unit from the optimization side: what it calls the *package* — what is represented, what is optimised, and what the resulting policy allows to be observed — is the objective → action → feedback arc of the pentad, evaluated jointly (§3.12, SO-L1).

### 1.2 Primitive objects

The smallest recurring objects, each with where it is made load-bearing. The honest status: GaE has *most* of one grammar, with two half-attached appendages — the **objective/loss** object and the **reform operator** are each realised differently in different papers (see §6.1, §6.2).

- **Environment / plant** — true state space and dynamics (assumed from I; never derived).
- **Disturbance** — the variety the controller must reject (II, IV, VI).
- **Factorization** — the partition of the world into the variables that exist *for* the system. Derived from bounded capacity + temporal prediction in **Paper 0**; assumed from I onward.
- **Observation channel** — plant state → decision layer; four separable adequacy axes (§1.3).
- **Boundary** — the jurisdiction/environment cut (XII); whether it survives learning (XVIII); its *strength* vs *permeability* under felt uncertainty (XXVIII).
- **Objective / loss** — what the controller optimises; enters as an *observation architecture* (VI). *Not yet one formal object across the series* — the deepest integration gap (§6.1).
- **Action repertoire** — the distinct responses available; one action per internal state (XX). What alignment aligns *to* (XXVII).
- **Feedback target** — the distinction a signal actually resolves, possibly displaced from the action-relevant one (XXVII).
- **Certification link** — where a rule's dependence on a world-fact is discharged by trusting an anchor unverified (XVII); the kernel an institution cannot self-monitor (XXII).
- **Learning rule** — how the model updates (XIV); distinct from adaptation (XXI).
- **Reform operator** — the costly, directed transformation between factorizations (XXIII); the least-developed primitive (§6.2).

### 1.3 The observation-adequacy matrix

XXVII is not a consciousness-derived appendage; placed here it fills the *action-relative* cell of a matrix the series had left with a hole. An observation channel is adequate only if all four hold:

| Adequacy axis | Question | Papers |
|---|---|---|
| **Coverage / dimensionality** | Does it distinguish enough relevant conditions? | VI, XX-Ashby |
| **Fidelity / latency** | Does the signal arrive intact and in time? | I, III |
| **Action-relative alignment** | Does it distinguish conditions relevant to the *intervention*? | **XXVII** |
| **Ensemble diversity** | Does the observer ecology preserve independent access to what any one channel misses? | X, XIX |

This is why XXVII *completes* Cycle One's observation-channel theory rather than opening a third cycle. A later *adaptive-alignment* paper would open one, because it moves from the properties of a fixed observation architecture to a system's capacity to infer and revise its own observation semantics.

A fifth condition sits beside the matrix rather than in it: **policy-dependent exposure.** A channel can be adequate on all four axes and still return nothing, because the controller's own policy never visits the states where the omitted mechanism acts (SO-WP1's exposure trap, §3.12). This is a property of the *policy*, not the channel, so it is not added as a fifth axis.

---

## 2. Structure: a process loop with a constraint overlay

v1 drew one linear spine (factorization → observation → decision → actuation → certification → adaptation → reform). That reads well but is false to the theory: several load-bearing results are not *stages* in a chain. Multiplicative compounding (V) and the bottleneck (XV) are **composition laws**; legitimacy (XIII) is a **coupling state** spanning observation and actuation; source-term locality (XVI) is a **cross-cutting condition**; the conservation/harm mismatch (XXV) is a **performance constraint**; boundary selection (XII) determines *what the plant even is* rather than sitting at one point. So v2 uses two superimposed structures.

### 2.1 The process loop

```
        ┌───────────────────────── world ◀─────────────────────────┐
        │                                                          │
        ▼                                                          │
     OBSERVE ──▶ INFER / DECIDE ──▶ ACT ──────────────────────────┘
        ▲               │
        │               │
     (learning changes the internal model) ── loops back to OBSERVE/DECIDE
        │
     (reform changes the architecture itself) ── loops back to the whole loop
```

Learning and reform are not terminal stages; they feed back. Learning revises the model inside a fixed factorization; reform changes the factorization. Both re-enter the loop rather than ending it.

### 2.2 The constraint overlay

These operate *across* the loop, not at a point in it:

| Constraint | Where it bites | Paper |
|---|---|---|
| bounded factorization | the whole loop's representational floor | 0 |
| latency | observe → act dead time | I |
| fidelity | observe, and every internal chain | I, III |
| dimensional adequacy | observe (coverage) | VI, XX |
| action-relative alignment | observe → decide (does the signal match the action?) | XXVII |
| observer correlation | observe (ensemble) | X, XIX |
| boundary mismatch | defines the plant; drifts under learning; hardens under fear | XII, XVIII, XXVIII |
| boundary permeability | couples boundary strength to the trust–exploration loop | XXVIII |
| certification floor | act → world (is the world-fact real?) | XVII, XXII |
| legitimacy | couples observe-noise and act-gain | XIII |
| multiplicative compounding | how static deficits combine | V |
| bottleneck | how loop stages combine dynamically | XV |
| transition cost | reform's price and direction | IX, XXIII |

Reading the two together: the loop is what a controller *does*; the overlay is the set of structural taxes it pays wherever it does them. A paper belongs to the overlay row it constrains, not to a stage it "comes after."

---

## 3. Claim dependency graph (relation-audited)

Grouped by object. Edges carry relation labels (§0). This section supersedes v1's arrow-strength-only graph.

### 3.1 Factorization — and Paper 0's actual load

**Paper 0** derives factorization from bounded capacity + a temporal-prediction objective. `[IP]` for the derivation; `[N]` for the three exhibited properties (emergence of latent causal variables; structured blindness — a coherent causal subspace lost whole; non-unique symmetry-broken selection). First structured-blindness operationalization failed, corrected under a second registered run (§5).

**Reclassification (v2).** v1 called Paper 0 "the most-depended-on node." That overstated its *validity* load. Three distinct relations were being conflated:

- **object dependency** — a paper uses *a* factorization (a finite representation exists). Nearly every paper has this, and it needs only "a bounded controller partitions its world," *not* Paper 0's stronger two-ingredient derivation.
- **origin dependency** — a paper depends on Paper 0's specific claim that *bounded prediction alone* generates factorization. Very few papers need this.
- **retrospective grounding** — Paper 0 supplies, after the fact, a mechanism for an object earlier papers assumed.

For most papers Paper 0 is the *third*. If its two-ingredient argument failed generally, the latency, delegation, observer-correlation, boundary, certification, and alignment results would **stand** — they would lose a proposed origin story, not their formal objects. XXVII, for instance, has an explicit finite state space whether or not passive prediction is the origin of all factorizations. **This makes GaE less brittle than v1's graph implied.** Edges from Paper 0 are therefore relabelled *grounds* / *mechanizes*, not *derives*.

```
0 ── mechanizes ──▶ VI (structured blindness IS the variety gap, now with a mechanism)
0 ── grounds ─────▶ XIX, XX, XXIII, XXVII   (retrospective; these assume a factorization, not 0's derivation)
0 ── derives ─────▶ (its own three properties only)
```

### 3.2 Observation — dimensional adequacy

**VI** — objective functions are observation architectures; the variety gap `G`. Optimisation erodes sensing of omitted dimensions *causally coupled to the proxy*. `[IP]`; static condition `[R]` scope: the VI model.
**XX-Ashby** — requisite variety as pigeonhole: `N ≥ Vₐ`. `[R]` (near-definitional, flagged shallow). Non-shallow content: *distinguish enough / the right things / re-distinguish when the quotient shifts.*

```
0 ── mechanizes ──▶ VI
VI ── refines-into ──▶ XXVII (variety gap → the sufficiency question alignment answers)
XX-Ashby ── motivates ──▶ XXVII ("distinguish the right things" is the gap XXVII fills)
VI ── mechanizes ──▶ XXIV (learned observer starves resolution on the rare periphery)
SO-WP1 ── instantiates + refines ──▶ VI   (SO-L1: exact exposure trap; objective term as insurance vs exposure generator)
```

### 3.3 Observation — fidelity

**I** — latency/fidelity ceilings; averaging problem. `[IP]`.
**III** — representation-chain attenuation; constitutional unobservability, bounded by chain depth regardless of endpoint quality. `[IP]`.

```
III ── derives (dual) ──▶ XI (constitutional uncontrollability, actuation side) [R]
III ── derives ─────────▶ Self-III inherited unobservability (human node = chain layer) [R]
I   ── motivates ───────▶ XXVIII (low signal fidelity as a tipping trigger, §5.4)
```

### 3.4 Observation — alignment  ◀ newest axis

**XXVII** — requisite alignment: an observable's decision value requires its resolved distinction to line up with the action-relevant distinction, and alignment has geometry (which distinction, not how many).

- scalar-`q` non-representability of the displaced channel — `[R]`
- at `m=0` the displaced solve reduces exactly to the matched solve; exact-inert planes stay `Aπ=0` — `[R]` scope: the ES-2.x model
- 486/592 (82%) resolved substantive attenuation, 0 enrichment, unanimous among resolved — `[N]`
- geometry dependence with sign reversal in displacement probability — `[N]`
- worst case is intermediate ambiguity, not maximal displacement — `[N]`
- **information-geometry contrast — under revision, see §9.** The strong v1 rendering ("identical marginal MI at every displacement, so the value gap is information-independent") is being narrowed; the safe statement is that the two geometries share output cardinality, `q`, `m`, likelihood spectrum, and *uniform-prior one-observation* MI, but can differ in belief-conditioned MI and sequential value. The general alignment claim stays `[IP]`.

```
VI ── refines-into ──▶ XXVII
XX ── motivates ─────▶ XXVII
0  ── grounds ───────▶ XXVII (assumes a finite state space; does NOT depend on 0's derivation)
XXVII ── refines ────▶ the Goodhart–Ashby synthesis
        (requisite variety necessary but not sufficient; requisite alignment a second, geometric constraint)
SO-WP0/WP1 ── corroborates-cross-model ──▶ XXVII  (SO-L4: decision-relative VOI; aligned-channel hypothesis H9)
```

### 3.5 Observation — diversity

**X** — ensemble variance `σ²·[(1−ρ)/N + ρ]`; a correlation floor caps added observers. `[R]` (variance law). Central prediction is the series' one **`[E]`** result (Study 1: ρ_eff ≈ 0.97). Secondary prediction (tail correlation) **not** supported.
**XIX** — governor/sentinel/bridge dissociation; winner-take-all rewards only governing. `[N]` (phenomenon-level, 20 seeds); `[IP]` reading.

```
0   ── grounds ──────▶ XIX
XIX ── mechanizes ───▶ XVI (optimization sheds warning because warning is UNCORRELATED with governing)
XIX ── reuses-model ─▶ XXIII (which then AUDITS and RETRACTS XIX's advertised geometry — §5)
X   ── refines ──────▶ XXVI (replaces X's exogenous return-probability constant with a competence mechanism)
X   ── motivates ────▶ XXVIII (cascade collapse read as the shared-environment counterpart of correlated failure)
```

### 3.6 Composition laws (not stages)

**V** — coordination-failure tax: I–IV compound multiplicatively. `[R]`.
**XV** — adaptation bottleneck: loop adaptive rate = min of stage rates. `[R]`. Dynamic dual of V.

```
V  ── transfers ──▶ Self-II composite failure (multiplicatively coupled primitives → sealed self)
XV ── derives (local form) ──▶ XVIII Critical Learning Bandwidth (lower bound)
XV ── constrains ─▶ XXI absorptive-capacity inequality
XV ── motivates ──▶ XXVIII (slow permeability as a second loop that throttles sense–learn–execute)
```

### 3.7 Actuation & the legitimacy coupling state

**XI** — codimension law: one dimension lost per deficient layer; effort superlinear in depth. `[R]` (codimension) / `[IP]` (energy).
**XIII** — legitimacy: the first endogenous coupling state; multiplies actuation, divides observation noise, collapses with hysteresis when borrowed. `[IP]`. *A coupling state, not an actuation stage.*

```
XI  ── derives (dual) ──▶ Self-II constitutional self-uncontrollability (via observer–plant identity)
XIII ── transfers ─────▶ Self-III operator-seeded legitimacy spiral
XIII ·· uncited overlap ·· XXVIII trust T (endogenous, hysteretic; relate or distinguish — §9)
```

### 3.8 Certification

**XVII** — relocation invariant: certification of reality cannot be self-verifying; automating a boundary relocates the world-certification link upstream, cannot delete it (world-coupled coordination only). `[IP]`.
**XXII** — three demands (inside / outside / before-the-world) fail from *three different sources*; refuses XX-style unification. Sharpest claim: an institution cannot monitor its certification kernel with instruments that depend on it — a corrupt kernel makes health indicators *improve*. `[IP]`; five registered predictions failed (§5).

```
XVII ── grounds ──▶ XXII certification incompleteness (with XXI's closed meta-ladder — NOT XX's pigeonhole)
XVII ── grounds ──▶ XX third law (certification cost, monotone)
XXII ── contradicts ──▶ XX's "three limits from one bound" symmetry (explicitly refused)
XXII ── excluded-from ──▶ §5.1 (measurement-dependency, not laundering)
```

### 3.9 Learning / adaptation

**XIV** — dual control, persistent excitation. `[IP]`.
**XVI** — source-term locality: unused-alternatives decay under optimisation, persist only via a source term outside the control set. Bounded negative result. `[IP]`.
**XVIII** — Non-Factorizability Theorem `[R]` scope: the XVIII model; Critical Learning Bandwidth; Decomposability Frontier `[R]`(scoped)/`[IP]`.
**XXI** — learning ≠ adaptation `[N]`; meta-ladder closes on invariants `[R]`; persistence ≠ purpose `[IP]`.
**XXIV** — optimising a diversity proxy maxes it while peripheral reach collapses; a *learned* observer compresses the periphery on its own. `[N]`; administrative prediction is `[H]` hypothesis, not result.
**XXVI** — tail-nucleated escape from monoculture; escape-ladder theorem `[R]` scope: the XXVI model; first-passage account `[N]`; transfer `[IP]`.
**XXVIII** — *Closure Adaptation Dynamics* (cycle two, late addition): five variables (U, B, T, E, P); boundary *strength* separated from boundary *permeability*. Bistability, hysteresis, noise-buffering by slow permeability with residual tipping, two-population polarization and cascade collapse, and a sharp permeability-floor threshold (P_min* ∈ (0.3, 0.4) for one tested shock). `[N]`-*unregistered*: deterministic Euler sweeps and 30-run stochastic cells, no preregistration, no committed nulls — below the `[N]` definition as written. The §3 fast–slow analysis is qualitative, not a theorem. Governance readings `[IP]`, some `[H]`. Three stated fixed-point values do not reproduce (§9).

```
XIV ── mechanizes ──▶ XXIV (persistent-excitation failure closed into an objective)
XVI ◀── mechanizes ── XIX ; ◀── instantiates ── XXIV
XII ── relaxed-by ──▶ XVIII (removes XII's exogenous-coupling assumption)
XII ── relaxed-by ──▶ XXVIII (boundary driven by felt uncertainty; quality allowed to degrade)
XVIII ── instantiates ──▶ XXV (laundering as one case of conserved-pressure relocation)
XVIII ·· analogous locked state ·· XXVIII (fear + opacity, not learning)
XVI ── instantiates ──▶ XXVIII (P floor as a constructed external source term for trust/exploration)
XXI ── grounds ──▶ XXII (closed meta-ladder)
X   ── refines ──▶ XXVI
SO-WP1 ── instantiates ──▶ XIV  (SO-L2)
SO-WP0/WP1 ── bounds ──▶ VII, XIV  (SO-L5: learning has opportunity cost; displacement vs concurrency)
SO-WP0 ── corroborates-cross-model + bounds ──▶ XXIV, XVI  (SO-L3: premium-matched reserve control)
SO-WP0/WP1 ── bounds ──▶ XXVIII  (SO-L6)
```

**Three routes to boundary closure.** XVIII closes the boundary through the controller's *learning*; XXVIII through *fear and opacity*; SO-WP1's exposure trap through the *objective* (the planner never acts where the omitted mechanism would show). They share an end state — a controller that can no longer see across its own boundary — and differ in what drives it and therefore in what remedy applies. A synthesis is listed in §6.

### 3.10 Reform (directed, not a metric)

**IX** — transition bandwidth; reformer/incumbent latency asymmetry. `[IP]`.
**XXIII** — behavioral distance is a symmetric metric, but reform cost is directed (asymmetric, non-composing, weakly predicted by distance), and oblique (cheapest through the target's neighbourhood). `[N]`/`[IP]`.
**XXV** — Bode conservation vs realized-harm geometry gap: conserved log-area does not determine accessible loss; exploitation needs concentration, accessibility, discovery. `[R]` scope: LTI / fixed-controller / non-strategic licensing / `[IP]`.

```
IX  ── priced-by ──▶ XXIII
XIX ── audited-by / retracted-by ──▶ XXIII
XVIII+"pressure relocates" ── formalized/bounded-by ──▶ XXV
```

### 3.11 Self sub-series (cross-scale; mostly `[IP]`)

```
Cycle One (I–VI)  ── transfers ──▶ Self-I : value function = observation architecture; G_self
Cycle Two (X–XIV) ── transfers ──▶ Self-II : five primitives + observer–plant identity
                          Self-II ── derives ──▶ measurement–disturbance coupling (separation principle fails)
                          Self-II ── derives (dual of III via XI) ──▶ constitutional self-uncontrollability
III + Self-I/II   ── derives ──▶ Self-III : inherited unobservability [R]
```

Transfer strengths are ranked *within* the Self line (§8). Self I still uses `[R]/[I]/[S]` and Self III `[I]/[S]`; reconcile to corpus-standard (§9).

### 3.12 Companion series: Systemic Optimization

SO asks how an optimization problem should be *constructed and evaluated*; GaE asks about the architecture through which institutions formulate such problems. SO-WP0 synthesises three preregistered synthetic experiments (A1 flood model; B future-goal optionality; B5 costly goal learning). SO-WP1 (programme A2) forks A1 to switch three hydrological mechanisms independently and compares re-modelling, re-valuing and learning. Both are drafts. Links are canonical in `papers.yaml` → `cross_series_links`; this section mirrors them.

| Link | From | To | Relation | Content | Tier of link |
|---|---|---|---|---|---|
| SO-L1 | WP1 §2.2, §5.1–5.2; WP0 §6.4 | VI | instantiates + refines | Objective-induced unobservability made exact: F0 never builds wetland, so retention is unexposed and the log BF is exactly 0; d05 carries a 2.36 U1 cost the policy can never see. An objective term can *substitute* for a missing model (insurance) or *generate exposure* that makes it learnable; re-valuing pays +1.085 U1 even when the model is right. An equity term barely moved outcomes. | `[R]` scope: A2 (null) / `[N]` / `[IP]` |
| SO-L2 | WP1 §5 | XIV | instantiates | Passive policy leaves the mechanism unidentifiable; probing creates exposure long before evidence. Policy-induced, not capacity-induced, blindness (cf. Paper 0). | `[R]` scope: A2 / `[N]` expl. |
| SO-L3 | WP0 §4 (B) | XXIV, XVI | corroborates-cross-model + bounds | Sensor/objective split reproduced in a different formalism; adds a premium-matched reserve control that diversity beat by only 0.6% of the gap. Shared author and AI pipeline → correlated provenance. | `[N]` confirmatory |
| SO-L4 | WP0 §5.4; WP1 H9 | XXVII | corroborates-cross-model (conceptual) | Information value is decision-relative; a direct flow gauge as an aligned-channel hypothesis. | `[IP]` / `[H]` |
| SO-L5 | WP0 B5; WP1 §5.4 | VII, XIV | bounds | Learning that displaces core activity almost never chosen; concurrent learning recovers some value. "Protected experimental space" must specify displacement vs concurrency. | `[N]` conf./expl. |
| SO-L6 | WP1 §4.2, §5; WP0 §6.1 | XXVIII | bounds | Exploration is exposure-gated and lagged, not αE·U; the permeability floor is unpriced (robustness is a purchase; a reserve floor lost in WP0); objective-driven closure as a third route. | `[IP]` |
| SO-L7 | WP0 §3.3 (G6), §4.2 (HB1) | §5.1 | tested-against-criterion | Neither is a laundering member; G6 is a stock confound. See §5.1 addendum. | `[IP]` |
| SO-L8 | WP0 §3.4, §7–8 | XII | positions (test bed) | A1's upstream/downstream municipalities with a relief pool test the pooling paradox; wetland × levee substitutive in 42% of worlds; A3 would test mechanism design. | `[N]` expl. / `[IP]` |

**Status of the corroboration.** SO and GaE share an author and an AI-assisted pipeline. By Study 1's own logic their agreement is correlated evidence. SO-L3 and SO-L4 are therefore recorded as *cross-model* corroboration — the phenomenon survives a change of formalism — not as independent replication.

**What flows back.** Three SO methods are absent from most GaE simulation papers and would tighten them: a *matched comparator that isolates the mechanism* (premium-matched reserves), the *confirmatory/exploratory split* inside `[N]`, and evaluation of a *package* across several criteria rather than one.

---

## 4. Evidence ledger

The kind of thing each load-bearing result is — consult before letting any claim lend authority to another. Scope is stated for every `[R]` that is model-bound.

| Result | Object | Tier | Scope / evidence |
|---|---|---|---|
| Factorization derived from bounded prediction | factorization | [IP] | argument vs candidate primitives |
| Emergence / structured blindness / broken selection | factorization | [N] | 40 seeds, 2 registered runs |
| Ensemble variance σ²·[(1−ρ)/N+ρ] | diversity | [R] | general (linear error combination) |
| ρ_eff ≈ 0.97 for AI observers | diversity | [E] | Study 1, frozen protocol, external critique |
| Codimension law | actuation | [R] | general (delegation chains) |
| Multiplicative compounding (V) | composition | [R] | general (arithmetic) |
| Adaptation bottleneck (XV) | composition | [R] | general (arithmetic) |
| Ashby N ≥ Vₐ | dimensional adequacy | [R] | general (pigeonhole; shallow) |
| Sharpened Goodhart = reachable intervention set | dimensional adequacy | [R]+[N] | theorem + 30 registered worlds |
| Relocation invariant | certification | [IP] | regress argument |
| Non-Factorizability Theorem | boundary | [R] | scope: the XVIII learning model |
| Critical Learning Bandwidth / Decomposability Frontier | boundary | [R]/[IP] | scope: the XVIII model |
| Governor/sentinel/bridge dissociation | diversity | [N] | 20-seed registered replication |
| Learning ≠ adaptation | adaptation | [N] | 30-seed registered model |
| Meta-ladder closes on invariants | adaptation | [R] | general (regress argument) |
| Reform cost directed/asymmetric/non-composing | reform | [N] | retrain-cost measurement |
| Bode conservation vs harm geometry gap | reform | [R] | scope: LTI, fixed controller, non-strategic |
| Escape-ladder theorem | adaptation | [R] | scope: the XXVI model (+55/56 grid, [N]) |
| Scalar-q non-representability | alignment | [R] | scope: the ES-2.x channel |
| Attenuation 82%, 0 enrichment, geometry sign reversal | alignment | [N] | frozen 74-cell panel, run 16bc675b |
| Information-geometry contrast | alignment | **under revision** | see §9 |
| Closure–adaptation bistability, hysteresis, P_min* ∈ (0.3, 0.4) | boundary | [N]-unregistered | deterministic sweeps; one shock profile; three fixed-point values under correction (§9) |
| Inherited unobservability | fidelity (operator) | [R] | corollary of III |
| Almost all Self-scale primitives | self | [IP] | structural transfer, unconfirmed |

**Companion-series results GaE now leans on** (synthetic, within-model; SO status in brackets):

| Result | GaE link | Tier | Scope / evidence |
|---|---|---|---|
| Exposure null: no upstream wetland → R/S transitions identical | SO-L1, L2 | [R] scope: A2 | structural [ST]; verified on all unexposed pairs |
| Exposure traps: passive policy keeps a decision-relevant mechanism unobserved | SO-L1 | [N] exploratory | 7 traps in 6 development worlds [ED] |
| Re-value: near-insensitive to omission, +1.085 U1 price | SO-L1, L6 | [N] | 40 worlds [PD] |
| Probe-then-commit learner ≤ 0.18 of fixed-probe oracle margin | SO-L5, L6 | [N] exploratory | selected worlds, noise-free [ED] |
| Option measures valid as diagnostics (HB3), fail as objectives (HB1) | SO-L3 | [N] | 800 sealed worlds [C] |
| Period-displacing learning ≈ 0 value; concurrent 0.10–0.21 | SO-L5 | [N] / [N] expl. | 800 worlds [C] / [ED] |

The one `[E]` row is the entire out-of-model empirical spine to date. Everything else is theorem, model, or interpretation — and the SO rows, however carefully preregistered, do not change that. **GaE is, empirically, a one-prediction programme** — the single most important fact the atlas records, and the driver of the priority matrix (§7).

---

## 5. Nulls and abandoned branches

Retained deliberately; a documented null outranks an untested elaboration. This is where the atlas records not just what exists but which possibility space is *closed*.

- **XVIII** — registered early-warning index failed (caught ≈1 collapse in 5); local adaptation launders coupling evidence out of watched residuals. Rewritten on state covariance, demoted `[H]`.
- **XX** — conservation-law search failed; only the cost of staying aligned is monotone, not representational complexity.
- **XIX** — two registered claims did not survive retraining ("blind closure is worst" = single-zoo artifact; sentinel-portfolio result confirmed in direction, below threshold).
- **XXIII** — pre-drafting audit killed two XIX-inherited claims (stress "reshaping" = small-sample artifact; connectivity threshold = MST bottleneck edge, an identity); no topological transition under continuous stress sweep.
- **XXII** — five registered predictions failed; two controller builds failed (no-trade equilibrium); the surviving mechanism (kernel inversion *floods* the misidentified party) was found after the fact, re-registered, confirmed on 20 seeds.
- **XXVI** — strong logarithmic dwell law failed; naive order-statistic law falsified; predicted liability–decay interaction below feasible test resolution → retained as an *open* registered prediction.
- **X / Study 1** — secondary prediction (tail correlation strongest) not supported.
- **XXVII** — no enrichment: a registered possibility that displaced feedback might *exceed* matched feedback was permitted and did not occur.
- **Paper 0** — first structured-blindness operationalization failed, corrected under a second run.
- **XXVIII** — no registered predictions, hence no nulls. The absence is a methods gap, not a clean record.

### 5.1 Resolved: the laundering candidate is two members, not four

An earlier version of this section proposed a candidate family of four nulls sharing the shape *an adaptive system modifies the very channels used to diagnose its adaptation*, and left open XVI's question turned on the series itself: one structure, or four rhymes? The question is now closed against the family. Two members, one exclusion, one empty slot.

The criterion is not new. **XVI** already supplies it: a quantity representing currently-unused alternatives decays under the primary objective and persists only through a source term the optimiser does not set, with **source-term locality** as the order parameter. Membership requires four slots to fill without stretching — a watched signal `W`; an optimiser `O` with objective `J` that does not include degrading `W`; an *entailment*, such that pursuing `J` successfully reduces `I(W; F)`; and a source term `S` with a determinate answer on whether it lies inside or outside `O`'s control set. The third slot does the discriminating work.

**XVIII — member, self-declared `[IP]`.** `W` = the prediction-error residual; `O` = local adaptation minimising local error; the entailment holds because absorbing coupling into gain *is* successful local adaptation; `S` = cross-boundary state covariance, outside every local objective's control set. XVIII §236 makes the schema claim itself.

**XXIV — member, derived here `[IP]`.** `W` = the diversity proxy; `O` = the agent optimising it; the entailment holds because the cheapest way to raise the proxy is to generate variation in the finely-resolved centre; `S` = structural exposure, which XXIV §95 characterises as *independent of the task-directed policy* — the locality condition in the paper's own words. XXIV never cites XVI and makes no schema claim; the mapping is the atlas's, and is flagged as such. XXIV instantiates the schema twice, once for exercisable reach and once for the learned observer's resolution allocation.

**XXII — excluded, on the paper's own grounds.** Slot three fails. XXII §474: the certification kernel is corrupted *exogenously*, "endogenous generation is requirement (b) of §3.2," and "this section does not launder it." Under a sound kernel the same allocation process leaves unmet-need statistics fully informative; the degradation requires a fault rather than following from success. Nor is there a source term — the remedy is an independent instrument, not replenishment.

**XXVII — empty.** The slot named "XXVII's future unknown-semantics work" refers to work that does not exist. The nearest candidate claim was withdrawn in the XXVII mutual-information correction (§9).

The prior exclusions stand: XXIII's topology null, X's tail-correlation null, and Paper 0's first-operationalization failure are ordinary falsifications, not laundering.

**What the exercise yields is the discriminator, not the family `[IP]`.** Slot three separates two failures that present identically on a dashboard and take opposite remedies:

> **Byproduct-of-success laundering** (XVIII, XXIV). Nothing is broken; the diagnostic degrades because the system is functioning. Remedy: monitor a channel no local objective touches. Fault-detection cannot help, there being no fault.
>
> **Measurement-dependency blindness** (XXII). Something is broken, and the instrument that would reveal it is causally downstream of the break. Remedy: an instrument not descended from the audited kernel. An untouched channel does not help if it remains downstream.

Applying the first remedy to the second failure installs an independent-looking sensor that is still downstream; applying the second to the first sends an institution hunting a fault that does not exist.

```
XVI  ── schema ──▶ XVIII        (self-declared, XVIII §236)
XVI  ── schema ──▶ XXIV         (derived here; XXIV does not cite XVI)
XXII ── excluded-from ──▶ 5.1   (measurement-dependency, not laundering; XXII §474)
XVIII ── bounded-by ──▶ XXV     (Layer B conserved-burden test, XXV §141)
```

**Addendum (v2.1): SO candidates tested against the slots (SO-L7).** Two SO diagnostic failures look superficially like members and were checked.

- **SO-WP0 G6, "value of acting after a shock."** It read myopic and reserve-constrained policies as unusually adaptable because corrective action from their neglected states was worth a lot. Slot three fails: no optimiser's *success* degrades the signal, and there is no corrupted kernel either. It is a third presentation — a **stock confound**, where accumulated need is read as capacity. Remedy differs from both above: measure response quality *net of damage already allowed to occur* (SO-WP0 H2).
- **SO-WP0 HB1/HB3.** Option measures rank states validly but fail as objectives. This resembles XXIV, but B does not show that optimisation reduces `I(W; F)` — only that optimising `W` does not produce `F` beyond a reserve control. Recorded as *valid diagnostic, poor objective*, not as laundering.

So the dashboard can present at least three ways — byproduct-of-success, measurement-dependency, stock confound — with three different remedies. This strengthens the case for keeping the discriminator as a section (attached to XXV) rather than promoting a family.

**Disposition.** This does not carry paper weight. Two members tracing to a common parent is not a synthesis, and a paper whose central move is *refuse the unification, name the axis* would be the fourth in the series after XVI, XXII and XXIII — a pattern worth noticing before it becomes a house style. The discriminator belongs as a section, most naturally attached to XXV, which already places XVIII as the closest thing the series has to a domain instance of a conserved burden.

---

## 6. Open dependencies

Where the graph has a dangling premise, ordered by downstream leverage.

### 6.1 The objective/loss object is unintegrated — the deepest gap
`objective/loss` appears as an observation architecture (VI), a task-relevant action quotient (XX), a scalar proxy (XXIV, XXV), a fixed action-loss structure (XXVII), a personal value function (Self I), and a contested social purpose (the governance reading). These are related, not identical, and until they are one object "the objective selects what is seen" is a shared slogan over several constructs. This matters most because **XXVII defines alignment relative to a loss-induced distinction**: once the loss is contested or endogenously selected, alignment is contested too, and *power* enters as the ability to fix which outcomes count as loss, which distinctions are action-relevant, whose losses enter, which action repertoire exists, and which boundary sets inclusion. The implied upstream sequence:

```
objective formation → action-relevant partition → feedback alignment → decision value
```

XXVII treats the last two links with the first two fixed from outside. The highest-value *conceptual* next paper may therefore not be "adaptive alignment" but **how objectives induce action-relevant distinctions, and what happens when several objectives induce incompatible ones** — connecting VI, XX, XXIV, XXVII and the governance/moral work in one move.

**First exactly-solved case (v2.1).** SO-WP1 gives the series its first exactly-solved instance of one link in this chain: the objective determines the policy, the policy determines which states are visited, and the visited states determine whether an omitted mechanism is observable at all (SO-L1). It also shows the objective doing two jobs VI does not separate — substituting for a missing model, and generating the exposure that would make the model learnable — each with its own price. Any integration of the objective object should carry both roles and the price.

### 6.2 The reform operator is weak — and the atlas shows why
IX, XXIII, XXV, VII answer *different* questions (can reform occur fast enough? what does one transition cost in one learning architecture? what exposure does suppressive control manufacture? what strategy opens reform space?). None is the reform operator itself:

```
R : (architecture, resources, political conditions) ↦ new architecture
```

GaE does not yet model which components change independently, when a reform alters parameters vs factorization, whether reforms commute, which transitions are reversible, how legitimacy and certification constrain feasible transitions, or how actors strategically alter the reform path. Too large for one paper; the disciplined first step is to construct two or three explicit factorization transformations and show a directional/path-dependent cost, not a universal geometry.

### 6.3 Observer diversity has no authority-allocation architecture
X gives a correlation law and XIX a role dissociation, but neither tells a governance system **what to do with disagreement**. Maintaining diverse observers is only sensing. Governance also needs rules for which observer can trigger reconsideration, which receives authority in which state, whether a minority warning can override the current governor, how sentinel evidence is certified, how a bridge preserves translation without a permanent veto, and how to avoid replacing monoculture with indecision. The missing engineering object:

```
observer ecology + authority allocation + provisional commitment
```

XIX's "preserve many for sensing, commit one for action, reopen on evidence" is the embryo, not yet a general decision architecture. This may be more practically consequential than any further result about the internal properties of observers.

### 6.4 Externally-fixed alignment (XXVII's boundary)
XXVII fixes loss, action semantics, and hidden classes from outside. This gates *adaptive alignment* (can a controller learn its feedback is displaced, and at what calibration cost? — begin as a two-regime feasibility gate), *contested alignment*, *observer ecology*, and *endogenous power / strategic feedback*. Note that §6.1 sits upstream of all of these.

### 6.5 Governance transfer is `[IP]` almost everywhere; cross-scale invariance is asserted, not tested
Only Study 1 has crossed the empirical gate. The specified-but-open program: variety-gap pilot audit; delegation-depth vs fidelity at proper N; prospective variety-gap panel; legitimacy-estimation protocol. Separately, the Self line assumes cross-scale transfer; a formal-invariant / analogy / metaphor / non-transferable classification (§8) would keep the Consciousness-as-Engineering and Governance-as-Engineering lines coupled without collapsing them.

### 6.6 Boundary closure has three drivers and no joint model
XVIII (learning), XXVIII (fear and opacity) and SO-WP1 (objective-induced non-exposure) each close the controller's view across its boundary by a different route (§3.9). Remedies differ: a learning-bandwidth margin, a permeability floor, exposure-aware planning. A joint model would show whether the routes compound (V-style) or gate each other (XV-style). XXVIII §8.3 already lists the XVIII synthesis; the objective route is the newer addition. Before XXVIII is built on, its methods gap (no registration, no matched comparator, unpriced floor) should be closed (§9).

---

## 7. Priority matrix

Two rankings that should not be collapsed. The atlas's job here is to stop an attractive internal mechanism from automatically outranking a structurally necessary integration or a credibility-critical test.

**Theoretical leverage** (what unlocks the most downstream claims):
1. Objective/loss integration (§6.1) — upstream of alignment, power, and the governance reading.
2. Observer authority allocation (§6.3) — the missing decision architecture.
3. The reform operator (§6.2) — the least-developed primitive.

**Programme credibility** (what the one-prediction imbalance makes urgent, §4):
1. Delegation-depth vs implementation-fidelity at proper sample size.
2. A variety-gap audit of one willing institution.
3. An operational alignment case (XXVII's mechanism made institutional).
4. Ecological replication of the AI-observer correlation using current events.

The marginal value of another internally elegant mechanism is now *falling*; the marginal value of a competent external test is *rising*. On the current balance, **external contact matters more for the health of the programme than selecting the next numbered paper** — and the two rankings are deliberately separate so that neither is quietly satisfied by work on the other. SO adds synthetic rigour, not external contact; it does not move any item on the credibility list.

---

## 8. Self ↔ governance transfer matrix

The Self line is a cross-scale *application*, not another branch of proven GaE; its mappings are ranked *within* Self II under an explicit scale-invariance-vs-analogy test. The matrix records transfer status per that ranking, strongest to weakest.

| Structure | Individual | Institution | Transfer status |
|---|---|---|---|
| constitutional (un)observability / (un)controllability | states one cannot perceive / reach in oneself | III unobservability / XI uncontrollability | **formal correspondence** — self-uncontrollability is the exact dual of III via XI |
| representation depth | self-narrative layers | representation chain (III) | partial formal correspondence |
| action repertoire | behavioural capacity | policy instruments | strong structural correspondence |
| observation bottleneck | attention / interoception | reporting channel | plausible analogy |
| legitimacy | self-trust | public compliance / reporting | analogy, not invariant |
| self/other boundary | boundary with others | jurisdiction/environment cut (XII) | **weakest** — fails formally once the far side becomes agents modelling the controller back (Self II) |
| group belief state | unclear | distributed institutional state | non-transferable as currently stated |

The single feature with *no* institutional analogue is **observer–plant identity** (controller = plant), which Self II introduces as the differentiator in kind, not scale — its consequence (self-observation is never only observation; the separation principle fails) is what makes the self-scale results diverge from their institutional originals rather than merely restating them.

---

## 9. Housekeeping and live corrections

- **Paper count / cluster placement.** Brief reads twenty-eight (Paper 0 + I–XXVII). With XXVIII the series is twenty-nine. **Open:** the brief's count, paper table and cluster text are not yet updated for XXVIII. XXVII remains the factorization-cluster capstone.

- **XXVIII title and cluster — decided 2026-11-08.** Title: *Closure Adaptation Dynamics*. Cluster: **cycle two, as a late addition** (cf. XII's One/Two tag). Rationale: its content is cycle two's — trust behaves like XIII's legitimacy (endogenous, not directly settable, hysteretic collapse), exploration is XIV's object, and the slow permeability loop mechanizes XV's bottleneck — and, like cycle two, it ends in a design requirement. Not *limits*: that cluster is defined by the adversarial multi-model protocol and by bounded, partly negative findings that interrogate the foundations; XXVIII is single-model, positive and prescriptive. Not *factorization*: no bounded-representation content and no preregistration. Not a new cluster: one paper plus a planned synthesis (§6.6) would be theory inflation. **Consequence for the brief:** it currently presents cycle two as closed by the Sense → Learn → Execute triad and XV; it must now say the cycle has a later paper that turns its boundary and trust elements into a dynamical model. Placement beside XIII also makes the uncited trust/legitimacy overlap more pressing (below).

- **XXVIII numerical corrections — open.** A spot re-simulation on 2026-11-08 with the paper's equations, parameters and Euler scheme reproduced the open state at s = 1.5 exactly (U 0.339, B 0.147, T 1.0, E 0.179, P 0.698). Three stated values do not reproduce:
  - **F_open** — §3.3 gives ≈ 0.077; the simulated open state gives **0.108**. Still below θ_P = 0.15, so the argument stands, and P ≈ 0.70 is consistent with 0.108, not 0.077.
  - **Closed attractor** — §3.1.1 gives (B,T,E,U) ≈ (1,0,0,1) and F_closed = s/(1+μ) ≈ 0.528. From the closed start at s = 1.5 the system settles at U 0.81, T 0.03, E 0.05, F 0.39: E is not driven to zero, so U does not reach 1. The qualitative conclusion holds (F stays above θ); the fixed point and F value need correcting.
  - **Table 4.2** — reported mean hysteresis widths (0.22–0.29) are not the difference of the reported mean collapse and recovery thresholds (0.023, 0.023, 0.008, −0.002); at ρ_P = 0.10 that difference is negative. Most likely the widths average over bistable θ rows only and the threshold means do not; state the definition or fix.
  - Also: "guarantees recovery" (abstract, §7–§8) rests on one deterministic shock profile — narrow to "for the tested shock"; σ denotes both the sigmoid and the noise intensity (§5.1).

- **XXVIII methods gap — open.** No preregistration, no committed nulls, no matched comparator, floor evaluated only under the shock it was designed for. Before XXVIII carries downstream weight: register the floor claim with a no-shock price arm and a comparator, gate exploration's uncertainty reduction by exposure (SO-L6), and relate trust T to XIII's legitimacy. Cycle two's mostly-`[IP]` style should not be read as licence to skip this.

- **`[N]` sub-labels — proposal.** `[N]` currently covers both preregistered confirmatory results and declared or post hoc exploratory ones. SO's vocabulary (C / PD / ED / EP / ST) separates them. Recommend adopting it as a sub-label on `[N]` in this atlas and `papers.yaml`; the public brief need not change.

- **XXVII mutual-information claim — LIVE CORRECTION, affects the paper and the brief.** External review reports that the strong claim — *the two geometries carry identical marginal MI at every displacement level, so any value difference is information-independent* — is false at nonuniform POMDP beliefs. The defensible statement: the geometries share output cardinality, `q`, `m`, likelihood spectrum, and **uniform-prior one-observation** MI, but can differ in **belief-conditioned** MI and sequential value, because they assign the likelihood levels to different latent classes. Tier consequences: scalar-`q` non-representability stays `[R]`; attenuation and geometry dependence stay `[N]`; the *general* alignment claim stays `[IP]`; the "cannot be an information-quantity effect" *inference* must be narrowed or dropped. **This is not merely an atlas edit.** XXVII's key-claims list and §5.2 assert the strong version, and `brief.md`'s XXVII paragraph carries it as "information content is held exactly equal … the difference cannot be an information-quantity effect." If the correction holds, that sentence overstates the headline and both need revising. The atlas has adopted the safe wording (§3.4, §4) and flags the paper/brief reconciliation as **your call against the actual simulation** — not propagated silently, because it weakens a published-facing `[R]` claim.

- **Tier-scheme drift in the Self line — open.** Self I (`[R]/[I]/[S]`) and Self III (`[I]/[S]`) predate corpus-standard `[R]/[IP]/[H]`; Self II migrated. Reconcile.

- **`[N]` in the public brief — decision pending.** The brief keeps three tiers; recommend a single note in "How to Read the Claims" that its `[R within the model]` covers atlas `[R]`(scoped) + `[N]`, rather than adding a fourth public tier.

---

## 10. Paper-indexed lookup

Full claims in §3; this is number → object.

| # | Short title | Primary object | Headline | Top tier |
|---|---|---|---|---|
| 0 | Below the Factorization | factorization | factorization derived from bounded prediction | IP / N |
| I | (latency/fidelity) | fidelity | responsiveness ceilings; averaging problem | IP |
| II | (multi-frequency) | disturbance | single-speed mismatch | IP |
| III | (representation chain) | fidelity | constitutional unobservability | IP |
| IV | (point of contact) | dimensional adequacy | requisite variety at contact | IP |
| V | (coordination tax) | composition | multiplicative compounding | R |
| VI | (variety gap) | objective/loss | objective = observation architecture; G | IP |
| VII | (reform) | reform | reform disappoints; protected experimental space | H |
| VIII | (measurement) | objective/loss | G made estimable | IP / H |
| IX | (transition) | reform | transition bandwidth | IP |
| X | (distributed sensing) | diversity | correlation tax; ρ_eff≈0.97 tested | R / **E** |
| XI | (actuation) | actuation | codimension law; uncontrollability | R / IP |
| XII | (boundary) | boundary | boundary as design variable; pooling paradox | IP |
| XIII | (legitimacy) | coupling state | legitimacy as endogenous coupling | IP |
| XIV | (learning) | learning | dual control; persistent excitation | IP |
| XV | (bottleneck) | composition | adaptive rate = min stage rate | R |
| XVI | (exploration) | learning | source-term locality; bounded null | IP |
| XVII | (certification) | certification | relocation invariant | IP |
| XVIII | (non-factorizability) | boundary | Non-Factorizability Theorem; Decomposability Frontier | R (scoped) / IP |
| XIX | Governors, Sentinels, Bridges | diversity | three-role dissociation | N / IP |
| XX | Three Laws from One Bound | dimensional adequacy | Ashby/Goodhart/certification from bounded rep | R / IP |
| XXI | When to Stop Learning | adaptation | learning≠adaptation; meta-ladder; sunsetting | N / R / IP |
| XXII | (three demands) | certification | three demands, three sources; kernel unself-monitorable | IP |
| XXIII | The Shape of Reform | reform | distance metric; reform cost directed/oblique | N / IP |
| XXIV | The Observer You Cannot Afford to Excite | diversity | excitation closed into an objective | N / H |
| XXV | Reform Pushes Down, Strategy Pushes Back | reform | Bode conservation vs harm geometry gap | R (scoped) / IP |
| XXVI | The Cost of Returning | adaptation | tail-nucleated escape; escape-ladder | R (scoped) / IP |
| XXVII | Requisite Alignment | alignment | alignment as second constraint; geometry sign reversal | R / N |
| XXVIII | Closure Adaptation Dynamics (cycle two, late) | boundary | strength ≠ permeability; bistability, hysteresis, cascade; permeability floor | N-unregistered / IP |
| Self I | Variety Gap in the Self | objective/loss | value function = observation architecture; G_self | R / IP |
| Self II | The Adaptive Self | adaptation | observer–plant identity; self-uncontrollability; sealed self | IP |
| Self III | The Operator | fidelity | inherited unobservability | R / I |
| SO-WP0 | What Should We Optimize… (companion) | objective/loss | four inadequacies; measurement–objective separation; learning has opportunity cost | N (C) / IP |
| SO-WP1 | What If the Model Is Incomplete? (companion) | objective/loss | re-model vs re-value trade-off; robustness is a purchase; exposure traps | N (C) / R (ST) / IP |

---

*Maintenance: `papers.yaml` is the canonical per-paper metadata; the brief table and this atlas are audited against it. Cross-series links are canonical in `papers.yaml` → `cross_series_links` and mirrored in §3.12. When the §9 corrections are settled, propagate them there first, then here, then to the brief.*
