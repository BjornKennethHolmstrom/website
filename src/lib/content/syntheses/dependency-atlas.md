# Governance as Engineering — Dependency Atlas (v2.2, GA-R01 draft)

*Internal structural map of the series. Where `brief.md` tells a reader what GaE says, this document records whether GaE hangs together: which claims rest on which, by what kind of relation, how strong each is, which branches are closed, and which open dependency would unlock the most downstream work.*

*Scope: Paper 0, Papers I–XXVIII, Self I–III, plus cross-links to the companion series *Systemic Optimization* (SO-WP0, SO-WP1). The briefs now include XXVIII from the existing registry; its source and numerical corrections remain open (§9). Organised by object and relation, not paper number; a paper-indexed lookup is in §10.*

*v2 changes (from an external review of v1): tier scheme cleaned to `[R]`+scope / `[N]` / `[E]` / `[IP]` / `[H]`; edges now carry relation labels, not just strengths; Paper 0's role reclassified as retrospective grounding for most papers rather than a validity dependency; the single linear spine replaced by a process loop plus a constraint overlay; the pentad added as the candidate central object; a two-axis priority matrix and a Self transfer matrix added; the nulls "self-diagnosis" claim demoted from conclusion to a bounded candidate synthesis; and one live correction to XXVII's mutual-information claim flagged (§9).*

*v2.1 changes (2026-11-08): Paper XXVIII, *Closure Adaptation Dynamics*, added (§3.9, §4, §10) and placed in cycle two as a late addition (§9), with numerical corrections from a spot re-simulation (§9); companion-series section added (§3.12) with eight canonical links mirrored from `papers.yaml` `cross_series_links`; edge vocabulary extended (`instantiates`, `corroborates-cross-model`, `bounds`, `tested-against-criterion`); SO's diagnostic failures tested against the §5.1 discriminator and recorded as a third presentation, not new members; §6.1 gains its first exactly-solved objective→observability case.*

*v2.2 draft (2026-11-25): GA-F01–04 accepted source corrections propagated to the central registry, atlas and briefs. Historical reported values, exact mathematics, stored-table replays and exploratory diagnostics are separated. Dependent paper texts are not yet audited; see §9 and the GA-R01 handoff.*

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

The corpus's `[R within the model]` maps to atlas **`[R]` scope: `<model>`** when it names a theorem, and to **`[N]`** when it names a simulation result. This split is the atlas's job; the public brief may keep three tiers and note once that its `[R within the model]` covers atlas `[R]`(scoped) + `[N]`. Historical reports (HR) are not verified numerical evidence; local revision labels M/I/HR/E are not atlas tiers. An exploratory replay or re-score is not a registered confirmation. The public brief retains its folded labels only for appropriately supported results.

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

Most GaE failure modes are a broken link somewhere in this pentad: insufficient distinctions (VI, XX-Ashby), distorted representation (I, III), policy-dependent evidence and exposure (VI, XXIV), inadequate action repertoire (XI), misaligned feedback (XXVII), failed certification of the whole relation to the world (XVII, XXII), or inability to revise the relations (XXI, XXIII). Factorization is where the pentad is instantiated; **the coupling among environmental distinctions, representation, objective, action, and feedback is the candidate organizing relation.** This is a candidate organising frame, offered as a structural observation `[H]` — not a theorem, and not a claim that the five reduce to one.

SO-WP1 offers a related unit from the optimization side: what it calls the *package* — what is represented, what is optimised, and what the resulting policy allows to be observed — can be compared with the objective → action → feedback arc of the pentad, evaluated jointly (§3.12, SO-L1).

### 1.2 Primitive objects

The smallest recurring objects, each with where it is made load-bearing. The honest status: GaE has *most* of one grammar, with two half-attached appendages — the **objective/loss** object and the **reform operator** are each realised differently in different papers (see §6.1, §6.2).

- **Environment / plant** — true state space and dynamics (assumed from I; never derived).
- **Disturbance** — the variety the controller must reject (II, IV, VI).
- **Factorization** — the partition of the world into the variables that exist *for* the system. Derived from bounded capacity + temporal prediction in **Paper 0**; assumed from I onward.
- **Observation channel** — plant state → decision layer; four separable adequacy axes (§1.3).
- **Boundary** — the jurisdiction/environment cut (XII); whether it survives learning (XVIII); its *strength* vs *permeability* under felt uncertainty (XXVIII).
- **Objective / loss** — what the controller optimises; distinct from the observation architecture (VI), but may shape evidence through incentives and policy. *Not yet one formal object across the series* (§6.1).
- **Action repertoire** — the distinct feasible responses; one action per internal state in XX’s deterministic model. What alignment aligns *to* (XXVII).
- **Feedback target** — the distinction a signal actually resolves, possibly displaced from the action-relevant one (XXVII).
- **Certification link** — where a rule's dependence on a world-fact is discharged by trusting an anchor unverified (XVII); the kernel an institution cannot self-monitor (XXII).
- **Learning rule** — how the model updates (XIV); distinct from adaptation (XXI).
- **Reform operator** — the update-relative transformation of model states toward tasks (XXIII); the least-developed primitive (§6.2).

### 1.3 The observation-adequacy matrix

XXVII adds the *action-relative* diagnostic to the observation matrix. These four questions are diagnostic axes, not a universal conjunction of necessary and sufficient conditions:

| Adequacy axis | Question | Papers |
|---|---|---|
| **Task-relative coverage** | Are consequential distinctions available given the task and actions? | VI, XX-Ashby |
| **Fidelity / latency** | Does the signal arrive intact and in time? | I, III |
| **Action-relative alignment** | Does it distinguish conditions relevant to the *intervention*? | **XXVII** |
| **Ensemble diversity** | Can observers supply complementary evidence when needed? | X; XIX (candidate functions) |

This is why XXVII *completes* Cycle One's observation-channel theory rather than opening a third cycle. A later *adaptive-alignment* paper would open one, because it moves from the properties of a fixed observation architecture to a system's capacity to infer and revise its own observation semantics.

A related question sits beside the matrix: **policy-dependent exposure.** An otherwise useful channel may return no relevant evidence because the policy does not visit states where the mechanism acts (SO-WP1, §3.12). This depends on the joint policy, model and channel.

---

## 2. Structure: a process loop with a constraint overlay

v1 drew one linear spine (factorization → observation → decision → actuation → certification → adaptation → reform). That reads well but is false to the theory: several load-bearing results are not *stages* in a chain. Multiplicative compounding (V) and the bottleneck (XV) are **composition laws**; legitimacy (XIII) is a **coupling state** spanning observation and actuation; replenishment and protection (XVI) are **cross-cutting diagnostic questions**; the conservation/harm mismatch (XXV) is a **performance constraint**; boundary selection (XII) determines *what the plant even is* rather than sitting at one point. So v2 uses two superimposed structures.

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
0 ── motivates ───▶ VI (representational omission)
0 ── grounds ─────▶ XIX, XX, XXIII, XXVII   (retrospective; these assume a factorization, not 0's derivation)
0 ── exhibits ────▶ (its own three model properties)
```

### 3.2 Observation — dimensional adequacy

**VI** — objectives, observation, modeling, decision and actuation are distinct. The static additive model gives `K = D ∩ ker C ⊆ L` as necessary, sufficient with all corrections in `−D`; rank alone is insufficient. `[R]` scope: VI Appendix A. Policy-dependent exposure and institutional diagnostics `[IP]`; no universal collapse threshold.
**XX-Ashby** — deterministic action-cover bound `N ≥ Vₐ` is necessary, not sufficient. `[R]` scope: finite deterministic adequacy model. Proxy ordering and certification accounting require separate premises; no single derivation from finitude.

```
0 ── motivates ───▶ VI (representational omission)
VI ── motivates ──▶ XXVII (task-relative adequacy and decision value)
XX-Ashby ── motivates ──▶ XXVII ("distinguish the right things" is the gap XXVII fills)
VI ── motivates ──▶ XXIV (model-specific learned resolution; inspect source imports)
SO-WP1 ── instantiates + refines ──▶ VI   (SO-L1: scoped exposure limitation; objective term as insurance vs exposure generator)
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

**XXVII** — requisite alignment: the specified control model demonstrates decision-value differences for distinct action-relative signal geometries (which distinction, not how many).

- scalar-`q` non-representability of the displaced channel — `[R]`
- at `m=0` the displaced solve reduces exactly to the matched solve; exact-inert planes stay `Aπ=0` — `[R]` scope: the ES-2.x model
- 486/592 (82%) resolved substantive attenuation, 0 enrichment, unanimous among resolved — `[N]`
- geometry dependence with sign reversal in displacement probability — `[N]`
- worst case is intermediate ambiguity, not maximal displacement — `[N]`
- **information-geometry contrast — under revision, see §9.** The strong v1 rendering ("identical marginal MI at every displacement, so the value gap is information-independent") is being narrowed; the safe statement is that the two geometries share output cardinality, `q`, `m`, likelihood spectrum, and *uniform-prior one-observation* MI, but can differ in belief-conditioned MI and sequential value. The general alignment claim stays `[IP]`.

```
VI ── motivates ──▶ XXVII (task-relative adequacy and decision value)
XX ── motivates ─────▶ XXVII
0  ── grounds ───────▶ XXVII (assumes a finite state space; does NOT depend on 0's derivation)
XXVII ── motivates ──▶ task-relative observation adequacy
        (cardinality alone does not determine decision value in the tested model)
SO-WP0/WP1 ── corroborates-cross-model ──▶ XXVII  (SO-L4: decision-relative VOI; aligned-channel hypothesis H9)
```

### 3.5 Observation — diversity

**X** — ensemble variance `σ²·[(1−ρ)/N + ρ]`; a correlation floor caps added observers. `[R]` (variance law). Central prediction is the series' one **`[E]`** result (Study 1: ρ_eff ≈ 0.97). Secondary prediction (tail correlation) **not** supported.
**XIX** — performance, timely information and functional connectivity are candidate roles `[IP/H]`. Exact graph results show top-rank mismatch without independent functions `[R]`. Historical counts (HR) unverified; causal warning and functional bridge readings withdrawn.

```
0   ── grounds ──────▶ XIX
XIX ── motivates ───▶ XVI (possible selection effects; no established mechanism)
XIX ── motivates ───▶ XXIII (related model family, different dissimilarity and separately trained ecologies)
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
**XXII** — three demands (inside / outside / before-the-world) fail from *three different sources*; complements corrected XX: different premises, not a universal unification. Sharpest claim: an institution cannot monitor its certification kernel with instruments that depend on it — a corrupt kernel makes health indicators *improve*. `[IP]`; registered failures reported, count discrepancy open (§5).

```
XVII ── grounds ──▶ XXII certification incompleteness (with XXI's closed meta-ladder — NOT XX's pigeonhole)
XVII ── grounds ──▶ XX third law (certification cost, monotone)
XXII ── complements ──▶ XX (different sources of limits; old unification claim withdrawn)
XXII ── excluded-from ──▶ §5.1 (measurement-dependency, not laundering)
```

### 3.9 Learning / adaptation

**XIV** — finite identification, accumulating information, persistent excitation and tracking separated; endogenous experimentation possible. RLS inverse-information bound and static sunset rank/decision distinction `[R]` (scoped); historical controller runs HR and exploratory replay, design principles `[IP]`.
**XVI** — replenishment, depletion, control authority and protection are distinct diagnostics `[IP/H]`. Finite switching-barrier partition chain is ergodic; linear copying has exact reversible product weights and a bottleneck at N=120, B=0.99, r=0.35 `[R]` (scoped). No irreversible fold below B=1.
**XVIII** — Non-Factorizability Theorem `[R]` scope: the XVIII model; Critical Learning Bandwidth; Decomposability Frontier `[R]`(scoped)/`[IP]`.
**XXI** — learning ≠ adaptation `[N]`; meta-ladder closes on invariants `[R]`; persistence ≠ purpose `[IP]`.
**XXIV** — optimising a diversity proxy maxes it while peripheral reach collapses; a *learned* observer compresses the periphery on its own. `[N]`; administrative prediction is `[H]` hypothesis, not result.
**XXVI** — tail-nucleated escape from monoculture; escape-ladder theorem `[R]` scope: the XXVI model; first-passage account `[N]`; transfer `[IP]`.
**XXVIII** — *Closure Adaptation Dynamics* (cycle two, late addition): five variables (U, B, T, E, P); boundary *strength* separated from boundary *permeability*. Bistability, hysteresis, noise-buffering by slow permeability with residual tipping, two-population polarization and cascade collapse, and a sharp permeability-floor threshold (P_min* ∈ (0.3, 0.4) for one tested shock). `[N]`-*unregistered*: deterministic Euler sweeps and 30-run stochastic cells, no preregistration, no committed nulls — below the `[N]` definition as written. The §3 fast–slow analysis is qualitative, not a theorem. Governance readings `[IP]`, some `[H]`. Three stated fixed-point values do not reproduce (§9).

```
XIV ── motivates ──▶ XXIV (conditional information acquisition; check specific exposure mechanism)
XVI ◀── motivates ── XIX, XXIV (no demonstrated common mechanism)
XII ── relaxed-by ──▶ XVIII (removes XII's exogenous-coupling assumption)
XII ── relaxed-by ──▶ XXVIII (boundary driven by felt uncertainty; quality allowed to degrade)
XVIII ── instantiates ──▶ XXV (laundering as one case of conserved-pressure relocation)
XVIII ·· analogous locked state ·· XXVIII (fear + opacity, not learning)
XVI ── motivates ──▶ XXVIII (fixed permeability floor as candidate protection; no inherited guarantee)
XXI ── grounds ──▶ XXII (closed meta-ladder)
X   ── refines ──▶ XXVI
SO-WP1 ── instantiates ──▶ XIV  (SO-L2)
SO-WP0/WP1 ── bounds ──▶ VII, XIV  (SO-L5: learning has opportunity cost; displacement vs concurrency)
SO-WP0 ── corroborates-cross-model ──▶ XXIV; motivates ──▶ XVI (SO-L3: premium-matched reserve control)
SO-WP0/WP1 ── bounds ──▶ XXVIII  (SO-L6)
```

**Three candidate routes to reduced evidence.** XVIII closes the boundary through the controller's *learning*; XXVIII through *fear and opacity*; SO-WP1's exposure trap through the *policy* (the planner never acts where the omitted mechanism would show). They may produce similar evidence limitations through different mechanisms; a common state or a sufficient remedy is not established. A synthesis is listed in §6.

### 3.10 Reform (descriptive dissimilarity and directed update cost)

**IX** — transition bandwidth; reformer/incumbent latency asymmetry. `[IP]`.
**XXIII** — squared prediction dissimilarity is not a metric; RMS root is a pseudometric on models. MST bottleneck identity `[R]`. Recovered fixed-budget cost proxy is asymmetric and selected staged updates beat the home-warmup comparator `[N]`; convergence, mechanism and institutional transfer remain limited. Directed path geometry is not excluded.
**XXV** — Bode conservation vs realized-harm geometry gap: conserved log-area does not determine accessible loss; exploitation needs concentration, accessibility, discovery. `[R]` scope: LTI / fixed-controller / non-strategic licensing / `[IP]`.

```
IX  ── priced-by ──▶ XXIII
XIX ── motivates / qualified-by ──▶ XXIII (threshold sensitivity; not a P4 replication)
XVIII+"pressure relocates" ── formalized/bounded-by ──▶ XXV
```

### 3.11 Self sub-series (cross-scale; mostly `[IP]`)

```
Cycle One (I–VI)  ── transfers ──▶ Self-I : legacy value/attention analogy; source reconciliation pending
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
| SO-L1 | WP1 §2.2, §5.1–5.2; WP0 §6.4 | VI | instantiates + refines | No upstream wetland implies identical retention-sensitive transitions; evaluated passive observation likelihood gives zero log BF, not a theorem for all histories. Seven policy-dependent traps under passive operator. Objective term may insure against missing model or induce exposure, with a price; exposure need not move posterior. | `[R]` scope: A2 / `[N]` exploratory / `[IP]` |
| SO-L2 | WP1 §5 | XIV | instantiates | Specified passive policy fails to expose the mechanism; probing can create exposure without posterior movement. Conditional information acquisition, not universal persistent-excitation necessity. | `[R]` scope: A2 / `[N]` exploratory |
| SO-L3 | WP0 §4 (B) | XXIV, XVI | corroborates-cross-model (XXIV) + motivates (XVI) | Sensor/objective split reproduced in a different formalism; adds a premium-matched reserve control that diversity beat by only 0.6% of the gap. No common mechanism established for XVI. Shared author and AI pipeline → correlated provenance. | `[N]` confirmatory for SO tests; `[IP/H]` for XVI link |
| SO-L4 | WP0 §5.4; WP1 H9 | XXVII | corroborates-cross-model (conceptual) | Information value is decision-relative; a direct flow gauge as an aligned-channel hypothesis. | `[IP]` / `[H]` |
| SO-L5 | WP0 B5; WP1 §5.4 | VII, XIV | bounds | Learning that displaces core activity almost never chosen; concurrent learning recovers some value. "Protected experimental space" must specify displacement vs concurrency. | `[N]` conf./expl. |
| SO-L6 | WP1 §4.2, §5; WP0 §6.1 | XXVIII | bounds | Exploration is exposure-gated and lagged, not αE·U; the permeability floor is unpriced (robustness is a purchase; a reserve floor lost in WP0); policy-dependent non-exposure as a third route. | `[IP]` |
| SO-L7 | WP0 §3.3 (G6), §4.2 (HB1) | §5.1 | tested-against-criterion | Neither is a laundering member; G6 is a stock confound. See §5.1 addendum. | `[IP]` |
| SO-L8 | WP0 §3.4, §7–8 | XII | positions (test bed) | A1's upstream/downstream municipalities with a relief pool test the pooling paradox; wetland × levee substitutive in 42% of worlds; A3 would test mechanism design. | `[N]` expl. / `[IP]` |

**Status of the corroboration.** SO and GaE share an author and an AI-assisted pipeline. By Study 1's own logic their agreement is correlated evidence. SO-L3 offers cross-model evidence for the measurement/objective distinction, not XVI’s withdrawn common mechanism. SO-L4 is conceptual corroboration. Neither is independent replication.

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
| Deterministic action-cover N ≥ Vₐ | action adequacy | [R] | scoped necessary counting bound; not sufficient |
| Hidden consequential directions K ⊆ L | observation adequacy | [R] | VI static additive model; sufficient with unrestricted disturbance corrections |
| Proxy–target ordering | optimization | [R] | established criterion, feasible intervention set; 30-world budget demonstration historical, not rerun |
| Relocation invariant | certification | [IP] | regress argument |
| Non-Factorizability Theorem | boundary | [R] | scope: the XVIII learning model |
| Critical Learning Bandwidth / Decomposability Frontier | boundary | [R]/[IP] | scope: the XVIII model |
| Governor/sentinel/bridge candidate functions | diversity | [IP/H] | reported panel HR, noncausal warning and unverified P4; no functional dissociation |
| Threshold graph cut vertex and level-only witness | diversity | [R] | XIX, unique bottleneck / specified loss-profile ecology |
| RLS inverse-information and sunset likelihood rank | learning | [R] | XIV, stated estimator and static likelihood; not actual tracking guarantee |
| Stationary partition law and bottleneck | learning / reachability | [R] | XVI, linear copying; N=120, B=0.99, r=0.35 lower bound 18,388.6 sweeps |
| Learning ≠ adaptation | adaptation | [N] | 30-seed registered model |
| Meta-ladder closes on invariants | adaptation | [R] | general (regress argument) |
| Directed cost proxy and selected staged advantage | reform | [N] | recovered XXIII tables; fixed-budget mixed-sample loss, no training reproduction |
| RMS pseudometric, MST identity and typed adaptation system | reform | [R] | XXIII, scoped; actual leg costs add by convention |
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
- **XX** — stronger conservation law failed; only conditional paid-cost monotonicity retained. Reachability alone does not imply proxy–target reversal.
- **XIX** — P1 and P3 failed as registered. Historical P2/P4 numerical reports remain unverified; causal warning withheld and functional bridge interpretation withdrawn.
- **XXIII** — all three geometry criteria failed (bounded nulls); H_predict, H_hard and H_waypoint failed; exploratory aggregation changes correlation, not registered verdict. MST threshold is an identity, not proof that arrangement is irrelevant.
- **XIV** — universal excitation, net-learning divergence and measured self-concealment withdrawn; no optimal dual-control test.
- **XVI** — irreversible fold, universal decay and source-locality collapse theorem withdrawn; finite stationary bottleneck retained.
- **XXII** — the original atlas reports five failed predictions while the registry and brief report four; resolve against registration and source; two controller builds failed (no-trade equilibrium); the surviving mechanism (kernel inversion *floods* the misidentified party) was found after the fact, re-registered, confirmed on 20 seeds.
- **XXVI** — strong logarithmic dwell law failed; naive order-statistic law falsified; predicted liability–decay interaction below feasible test resolution → retained as an *open* registered prediction.
- **X / Study 1** — secondary prediction (tail correlation strongest) not supported.
- **XXVII** — no enrichment: a registered possibility that displaced feedback might *exceed* matched feedback was permitted and did not occur.
- **Paper 0** — first structured-blindness operationalization failed, corrected under a second run.
- **XXVIII** — no registered predictions, hence no nulls. The absence is a methods gap, not a clean record.

### 5.1 Diagnostic discriminator: candidate laundering, measurement dependency and stock confounding

An earlier version proposed four candidate nulls. The current discriminator retains XVIII and XXIV as candidate presentations, XXII as a distinct measurement-dependency case, and the XXVII slot as empty. Source review is pending; no common parent theorem is established.

The four-slot discriminator is an **atlas proposal [IP/H]**, not a theorem supplied by XVI: watched signal `W`; optimiser `O` with objective `J` not directly degrading `W`; a model-specific mechanism linking success on `J` to loss of relevant evidence; and a replenishment/protection question `S` where applicable. The third slot discriminates. A decline in mutual information `I(W;F)` requires an explicit joint distribution and test; neither source-term locality nor proxy failure alone proves it.

**XVIII — candidate member, self-declared `[IP]`.** `W` = the prediction-error residual; `O` = local adaptation minimising local error; the proposed link is that absorbing coupling into gain *is* successful local adaptation; `S` = cross-boundary state covariance, outside every local objective's control set. XVIII §236 makes the schema claim itself.

**XXIV — candidate member, atlas interpretation `[IP]`.** The proxy can rise while reach falls in the reported model, and learned resolution can shift to frequently visited states. This motivates the discriminator but does not by itself establish a reduction of mutual information, a universal source-locality result or formal equivalence to XVIII. Inspect the original source before upgrading the edge.

**XXII — excluded, on the paper's own grounds.** Slot three fails. XXII §474: the certification kernel is corrupted *exogenously*, "endogenous generation is requirement (b) of §3.2," and "this section does not launder it." Under a sound kernel the same allocation process leaves unmet-need statistics fully informative; the degradation requires a fault rather than following from success. Nor is there a source term — the remedy is an independent instrument, not replenishment.

**XXVII — empty.** The slot named "XXVII's future unknown-semantics work" refers to work that does not exist. The nearest candidate claim was withdrawn in the XXVII mutual-information correction (§9).

The prior exclusions stand: XXIII's topology null, X's tail-correlation null, and Paper 0's first-operationalization failure are ordinary falsifications, not laundering.

**What the exercise yields is a proposed discriminator `[IP]`.** The third slot helps distinguish two presentations that can look similar on a dashboard:

> **Byproduct-of-success laundering** (XVIII, XXIV, candidate mechanisms). Evidence may degrade as an objective is pursued successfully. A possible remedy is a channel or exposure policy that remains informative under that optimization; its adequacy must be tested.
>
> **Measurement-dependency blindness** (XXII). Something is broken, and the instrument that would reveal it is causally downstream of the break. Candidate remedy: an instrument not descended from the audited kernel. An untouched channel does not help if it remains downstream.

An apparently independent channel can still depend on the compromised kernel; a fault search can miss a policy-induced evidence limitation. These are diagnostic cautions, not mutually exclusive or sufficient remedies.

```
XVI  ── motivates ──▶ XVIII (analogy only; no common theorem)
XVI  ── motivates ──▶ XXIV (analogy only; no common theorem)
XXII ── excluded-from ──▶ 5.1   (measurement-dependency, not laundering; XXII §474)
XVIII ── bounded-by ──▶ XXV     (Layer B conserved-burden test, XXV §141)
```

**Addendum (v2.1): SO candidates tested against the slots (SO-L7).** Two SO diagnostic failures look superficially like members and were checked.

- **SO-WP0 G6, "value of acting after a shock."** It read myopic and reserve-constrained policies as unusually adaptable because corrective action from their neglected states was worth a lot. Slot three fails: no optimiser's *success* degrades the signal, and there is no corrupted kernel either. It is a third presentation — a **stock confound**, where accumulated need is read as capacity. Remedy differs from both above: measure response quality *net of damage already allowed to occur* (SO-WP0 H2).
- **SO-WP0 HB1/HB3.** Option measures rank states validly but fail as objectives. This resembles XXIV, but B does not show that optimisation reduces `I(W; F)` — only that optimising `W` does not produce `F` beyond a reserve control. Recorded as *valid diagnostic, poor objective*, not as laundering.

So the dashboard can present at least three ways — byproduct-of-success, measurement-dependency, stock confound — with three different remedies. This strengthens the case for keeping the discriminator as a section (attached to XXV) rather than promoting a family.

**Disposition.** This does not carry paper weight. Two candidate mechanisms do not establish a common parent theorem, and a paper whose central move is *refuse the unification, name the axis* would be the fourth in the series after XVI, XXII and XXIII — a pattern worth noticing before it becomes a house style. The discriminator belongs as a section, most naturally attached to XXV, which already places XVIII as the closest thing the series has to a domain instance of a conserved burden.

---

## 6. Open dependencies

Where the graph has a dangling premise, ordered by downstream leverage.

### 6.1 The objective/loss object is unintegrated — the deepest gap
`objective/loss` is distinct from observations and model (VI); it relates to action adequacy and ordering (XX), scalar proxies (XXIV, XXV), fixed action-loss structure (XXVII), personal values (Self I, source review pending), and contested social purpose. These are related, not identical. **XXVII defines alignment relative to an explicit task/loss**: once the loss is contested or endogenously selected, alignment is contested too. Power enters through which outcomes count, whose losses enter, which actions are feasible and which boundary sets inclusion. The candidate upstream sequence:

```
objective formation → action-relevant partition → feedback alignment → decision value
```

XXVII treats the last two links with the first two fixed from outside. The highest-value *conceptual* next paper may therefore not be "adaptive alignment" but **how objectives induce action-relevant distinctions, and what happens when several objectives induce incompatible ones** — connecting VI, XX, XXIV, XXVII and the governance/moral work in one move.

**Exactly-solved case (v2.1, scope corrected).** SO-WP1 illustrates how objectives and models can change policy, policy changes exposure, and the evaluated observation process may then fail to distinguish mechanisms (SO-L1). Insurance against omitted mechanisms and exposure generation are distinct roles, as corrected VI now recognizes. Exposure is not equivalent to posterior updating, and both interventions can have costs.

### 6.2 The reform operator is weak — and the atlas shows why
IX, XXIII, XXV, VII answer *different* questions (can reform occur fast enough? what does one transition cost in one learning architecture? what exposure does suppressive control manufacture? what strategy opens reform space?). XXIII supplies a typed update operator inside its model, but not a general institutional reform operator:

```
R : (architecture, resources, political conditions) ↦ new architecture
```

GaE does not yet model which components change independently, when a reform alters parameters vs factorization, whether reforms commute, which transitions are reversible, how legitimacy and certification constrain feasible transitions, or how actors strategically alter the reform path. Too large for one paper; the disciplined first step is to construct two or three explicit factorization transformations and show a directional/path-dependent cost, not a universal geometry.

### 6.3 Observer diversity has no authority-allocation architecture
X gives a correlation law and XIX candidate functions rather than demonstrated dissociation, but neither tells a governance system **what to do with disagreement**. Maintaining diverse observers is only sensing. Governance also needs rules for which observer can trigger reconsideration, which receives authority in which state, whether a minority warning can override the current governor, how sentinel evidence is certified, how a bridge preserves translation without a permanent veto, and how to avoid replacing monoculture with indecision. The missing engineering object:

```
observer ecology + authority allocation + provisional commitment
```

XIX's "preserve many for sensing, commit one for action, reopen on evidence" is a design proposal, not yet a general decision architecture. This may be more practically consequential than any further result about the internal properties of observers.

### 6.4 Externally-fixed alignment (XXVII's boundary)
XXVII fixes loss, action semantics, and hidden classes from outside. This gates *adaptive alignment* (can a controller learn its feedback is displaced, and at what calibration cost? — begin as a two-regime feasibility gate), *contested alignment*, *observer ecology*, and *endogenous power / strategic feedback*. Note that §6.1 sits upstream of all of these.

### 6.5 Governance transfer is `[IP]` almost everywhere; cross-scale invariance is asserted, not tested
Only Study 1 has crossed the empirical gate. The specified-but-open program: variety-gap pilot audit; delegation-depth vs fidelity at proper N; prospective variety-gap panel; legitimacy-estimation protocol. Separately, the Self line assumes cross-scale transfer; a formal-invariant / analogy / metaphor / non-transferable classification (§8) would keep the Consciousness-as-Engineering and Governance-as-Engineering lines coupled without collapsing them.

### 6.6 Boundary closure has three drivers and no joint model
XVIII (learning), XXVIII (fear and opacity) and SO-WP1 (policy-dependent non-exposure) motivate different candidate routes to evidence loss (§3.9). Candidate interventions differ: a learning-bandwidth margin, a permeability floor, exposure-aware planning. A joint model would show whether the routes compound (V-style) or gate each other (XV-style). XXVIII §8.3 already lists the XVIII synthesis; the exposure route is the newer addition. Before XXVIII is built on, its methods gap (no registration, no matched comparator, unpriced floor) should be closed (§9).

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


**GA-R01 source boundary.** Central summaries and edges are updated, but affected manuscripts are not revised by this atlas. Prioritize VIII and Self I (measurement and threshold), XXI/XXII (learning and ordering), XXIV/XXVII (exposure and alignment), then XVII/XVIII/XXVI/XXVIII and Self II–III. Verify exact imports, claims and anchors before closing each edge. Historical sources and accepted revisions remain immutable.

## 9. Housekeeping and live corrections

- **Paper count / cluster placement.** Both briefs now list twenty-nine papers, with XXVIII as a late cycle-two entry, based on the existing registry. No new XXVIII source verification is claimed.

- **XXVIII title and cluster — decided 2026-11-08.** Title: *Closure Adaptation Dynamics*. Cluster: **cycle two, as a late addition** (cf. XII's One/Two tag). Rationale: its content is cycle two's — trust behaves like XIII's legitimacy (endogenous, not directly settable, hysteretic collapse), exploration is XIV's object, and the slow permeability loop mechanizes XV's bottleneck — and, like cycle two, it ends in a design requirement. Not *limits*: that cluster is defined by the adversarial multi-model protocol and by bounded, partly negative findings that interrogate the foundations; XXVIII is single-model, positive and prescriptive. Not *factorization*: no bounded-representation content and no preregistration. Not a new cluster: one paper plus a planned synthesis (§6.6) would be theory inflation. The briefs now reflect this placement.

- **XXVIII numerical corrections — open.** A spot re-simulation on 2026-11-08 with the paper's equations, parameters and Euler scheme reproduced the open state at s = 1.5 exactly (U 0.339, B 0.147, T 1.0, E 0.179, P 0.698). Three stated values do not reproduce:
  - **F_open** — §3.3 gives ≈ 0.077; the simulated open state gives **0.108**. Still below θ_P = 0.15, so the argument stands, and P ≈ 0.70 is consistent with 0.108, not 0.077.
  - **Closed attractor** — §3.1.1 gives (B,T,E,U) ≈ (1,0,0,1) and F_closed = s/(1+μ) ≈ 0.528. From the closed start at s = 1.5 the system settles at U 0.81, T 0.03, E 0.05, F 0.39: E is not driven to zero, so U does not reach 1. The qualitative conclusion holds (F stays above θ); the fixed point and F value need correcting.
  - **Table 4.2** — reported mean hysteresis widths (0.22–0.29) are not the difference of the reported mean collapse and recovery thresholds (0.023, 0.023, 0.008, −0.002); at ρ_P = 0.10 that difference is negative. Most likely the widths average over bistable θ rows only and the threshold means do not; state the definition or fix.
  - Also: "guarantees recovery" (abstract, §7–§8) rests on one deterministic shock profile — narrow to "for the tested shock"; σ denotes both the sigmoid and the noise intensity (§5.1).

- **XXVIII methods gap — open.** No preregistration, no committed nulls, no matched comparator, floor evaluated only under the shock it was designed for. Before XXVIII carries downstream weight: register the floor claim with a no-shock price arm and a comparator, gate exploration's uncertainty reduction by exposure (SO-L6), and relate trust T to XIII's legitimacy. Cycle two's mostly-`[IP]` style should not be read as licence to skip this.

- **`[N]` sub-labels — proposal.** `[N]` currently covers both preregistered confirmatory results and declared or post hoc exploratory ones. SO's vocabulary (C / PD / ED / EP / ST) separates them. Recommend adopting it as a sub-label on `[N]` in this atlas and `papers.yaml`; the public brief need not change.

- **XXVII mutual-information claim — LIVE CORRECTION, affects the paper and the brief.** External review reports that the strong claim — *the two geometries carry identical marginal MI at every displacement level, so any value difference is information-independent* — is false at nonuniform POMDP beliefs. The defensible statement: the geometries share output cardinality, `q`, `m`, likelihood spectrum, and **uniform-prior one-observation** MI, but can differ in **belief-conditioned** MI and sequential value, because they assign the likelihood levels to different latent classes. Tier consequences: scalar-`q` non-representability stays `[R]`; attenuation and geometry dependence stay `[N]`; the *general* alignment claim stays `[IP]`; the "cannot be an information-quantity effect" *inference* must be narrowed or dropped. Both brief tables and prose now use the qualified formulation. The paper key-claims and §5.2 and the actual simulation remain to be checked; the source-level correction is not closed.

- **Tier-scheme drift in the Self line — open.** Self I (`[R]/[I]/[S]`) and Self III (`[I]/[S]`) predate corpus-standard `[R]/[IP]/[H]`; Self II migrated. Reconcile.

- **Public evidence labels.** Both briefs distinguish exact results and registered numerical outcomes within their scope, with explicit historical/exploratory provenance. No new global tier scheme is adopted.

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
| VI | The Variety Gap | task-relative adequacy | distinct evaluation/observation/model/decision/actuation; static hidden-direction condition | R (scoped) / IP |
| VII | (reform) | reform | reform disappoints; protected experimental space | H |
| VIII | (measurement) | objective/loss | legacy G index; source reconciliation and validation pending | IP / H |
| IX | (transition) | reform | transition bandwidth | IP |
| X | (distributed sensing) | diversity | correlation tax; ρ_eff≈0.97 tested | R / **E** |
| XI | (actuation) | actuation | codimension law; uncontrollability | R / IP |
| XII | (boundary) | boundary | boundary as design variable; pooling paradox | IP |
| XIII | (legitimacy) | coupling state | legitimacy as endogenous coupling | IP |
| XIV | (learning) | learning | conditional information acquisition; RLS and sunset rank | R (scoped) / IP |
| XV | (bottleneck) | composition | adaptive rate = min stage rate | R |
| XVI | (exploration) | learning | stationary partition law and finite-N bottleneck; locality diagnostic | R (scoped) / IP |
| XVII | (certification) | certification | relocation invariant | IP |
| XVIII | (non-factorizability) | boundary | Non-Factorizability Theorem; Decomposability Frontier | R (scoped) / IP |
| XIX | Governors, Sentinels, Bridges | diversity | candidate roles; graph construction counterexample; historical panel HR | R (scoped) / IP |
| XX | Three Laws from One Bound | action adequacy / ordering | separate counting, proxy ordering and certification premises | R (scoped) / IP |
| XXI | When to Stop Learning | adaptation | learning≠adaptation; meta-ladder; sunsetting | N / R / IP |
| XXII | (three demands) | certification | three demands, three sources; kernel unself-monitorable | IP |
| XXIII | The Shape of Reform | reform | squared dissimilarity; directed cost proxy and typed staged updates | R (scoped) / N / IP |
| XXIV | The Observer You Cannot Afford to Excite | diversity | specific proxy/observer exposure failure; source imports pending | N / H |
| XXV | Reform Pushes Down, Strategy Pushes Back | reform | Bode conservation vs harm geometry gap | R (scoped) / IP |
| XXVI | The Cost of Returning | adaptation | tail-nucleated escape; escape-ladder | R (scoped) / IP |
| XXVII | Requisite Alignment | alignment | alignment as second constraint; geometry sign reversal | R / N |
| XXVIII | Closure Adaptation Dynamics (cycle two, late) | boundary | strength ≠ permeability; bistability, hysteresis, cascade; permeability floor | N-unregistered / IP |
| Self I | Variety Gap in the Self | objective/loss | legacy value/attention analogy; critical gap and inherited proof not licensed by VI | IP / H (source review pending) |
| Self II | The Adaptive Self | adaptation | observer–plant identity; self-uncontrollability; sealed self | IP |
| Self III | The Operator | fidelity | inherited unobservability | R / I |
| SO-WP0 | What Should We Optimize… (companion) | objective/loss | four inadequacies; measurement–objective separation; learning has opportunity cost | N (C) / IP |
| SO-WP1 | What If the Model Is Incomplete? (companion) | objective/loss | re-model vs re-value trade-off; robustness is a purchase; exposure traps | N (C) / R (ST) / IP |

---

*Maintenance: `papers.yaml` is the canonical per-paper metadata; the brief table and this atlas are audited against it. Cross-series links are canonical in `papers.yaml` → `cross_series_links` and mirrored in §3.12. When the §9 corrections are settled, propagate them there first, then here, then to the brief.*
