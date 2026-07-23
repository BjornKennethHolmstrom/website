## 4. Results

### 4.1 Validation

All eight obligations passed (Table 1). The m = 0 identity held to machine precision (0 failures across
the panel), confirming that the displaced solver reduces exactly to Gate 1 and that the modification is
confined to displaced behaviour. Dominance held with zero parity violations. The exact-inert planes
returned A_π = 0 to machine precision for all m and both geometries. The independent H = 2 enumeration
gave a model conjugacy spread of 4 × 10⁻¹⁶ — the model is exactly permutation-symmetric — while the
interpolated solver's conjugacy spread, though not machine-zero (the Kuhn interpolation is
coordinate-order-dependent), shrank with refinement (3.97 × 10⁻² → 1.73 × 10⁻² → 1.69 × 10⁻³ at
G = 18/27/40 on the anchor at m = ½) and sat roughly three orders of magnitude below the symmetry
envelope. The single-representative-per-geometry reduction is therefore valid, and the solver spread is
confirmed as interpolation bias rather than a broken model symmetry.

![Gate-1 feedback activation surface](/working-papers/images/requisite-alignment/gate1-activation-surface.png)

**Figure 1.** Gate-1 activation surface on the (cue reliability r × feedback cost c) slice at
p = 0.94, q = 1.0. Purchased feedback has resolved positive value (active) across a connected
high-reliability region; as acquisition cost rises the value falls below resolution (zero-compatible)
or the cell is a structural plane (exact-inert). This establishes the baseline the displacement study
conditions on: a substantial region where matched feedback is worth its cost.

**Table 1. Validation obligations (V1–V8) and outcomes.**

| # | Obligation | Result |
|---|---|---|
| V1 | m = 0 reduces exactly to the matched Gate-1 solve | PASS — 0 failures across the panel; displaced solver = matched baseline to machine precision at m = 0 |
| V2 | Dominance A_π ≥ 0 (resolved parity requires interval A_π + ε < 0) | PASS — 0 parity violations; min margin A_π + ε_D = +0.0014 |
| V3 | Exact-inert planes remain A_π = 0 ∀m, both geometries | PASS — max \|A_π\| = 0 over the plane subset × geometries × m, computed through channel code |
| V4 | Implemented likelihoods reproduce the analytic form | PASS — three levels for m ∈ (0,1)\\{½}, two-level partition at m = ½, matched two-level at m = 0; machine precision |
| V5 | Non-representability by any scalar reliability q | PASS — instantiated at m = 0.25 (three levels) and m = ½ ({a, π(a)} vs rest) |
| V6 | Conjugacy-symmetry spread within the displaced-policy envelope | PASS — solver spread shrinks with refinement (3.97e-2 → 1.73e-2 → 1.69e-3 at G = 18/27/40) and sits ~10³× below σ_sym |
| V7 | Independent exact H = 2 enumeration (no shared interpolation core) | PASS — model conjugacy spread 4.4e-16 (exactly symmetric); q = ½ cells A = 0 |
| V8 | Anchor-and-plane pilot before the interior run | PASS — S1 and V3 exact on pilot |

### 4.2 The primary outcome: attenuation, unanimous where resolved

Over the eligible set of 592 conditions (74 cells × 4 nonzero displacement levels × 2 geometries),
**486 (82.1%) showed resolved, substantive attenuation; 0 showed enrichment; 0 showed practical
equivalence; and 106 (17.9%) were numerically non-convergent** (Table 2). Under the registered classifier
this is unambiguously an **attenuation-only** outcome (f_att = 0.821, f_enr = 0). The 106 unresolved
conditions are, without exception, non-convergent policy solves rather than converged-but-ambiguous
effects: **among the 486 conditions whose numerics resolved, attenuation is unanimous (486/486).** No
resolved condition showed the value of displaced feedback holding steady or increasing.

Displaced feedback that stays informative — provably non-reducible to a change in channel reliability
(§3.4) — nonetheless loses substantial decision value when it evaluates the wrong target. This is a
distinct effect from Gate 1's reliability axis, not a re-derivation of it.

![D_π across the panel](/working-papers/images/requisite-alignment/dpi-panel-heatmap.png)

**Figure 2.** Signed advantage change D_π across the panel (π₄), cells ordered by matched value
(high to low), columns the four displacement levels; grey marks non-convergent or unresolved
conditions. Attenuation (D_π < 0) deepens with displacement across essentially the whole panel, with
no resolved cell showing D_π ≥ 0.

**Table 2. Outcome classification over the eligible set (E = 592 = 74 cells × 4 displacement levels × 2 geometries).**

| Class | Count | Fraction of E |
|---|---|---|
| Attenuation-substantive (D_π + ε_D ≤ −δ_min) | 486 | 82.1% |
| Enrichment-substantive (D_π − ε_D ≥ +δ_min) | 0 | 0% |
| Practically-equivalent (\|D_π\| + ε_D < δ_min) | 0 | 0% |
| Effect-unresolved (converged, interval straddles δ_min) | 0 | 0% |
| Numerically-unresolved-nonconvergent | 106 | 17.9% |
| **Among resolved conditions** | **486 / 486 attenuation** | **100%** |

δ_min = 0.05 · median(A over panel) = 0.648. Global outcome: **attenuation-only** (f_att = 0.821 ≥ 0.1, f_enr = 0).

The 106 non-convergent conditions are distributed evenly across displacement levels (26/26/24/30 at
m = 0.25/0.5/0.75/1.0) and balanced across geometries (π₄ 51, π₂₊₂ 55), affecting 19 of the 74 cells.
A plurality — 50 of 106 (47%) — fall in the two lowest cue-reliability rows (r = 0.25, 0.57): the rows
where the *matched* Gate-1 baseline was itself least resolved. The displaced non-convergence thus
concentrates where the underlying problem was already numerically hardest, not where displacement is
largest — the by-m distribution (26/26/24/30 across m = 0.25/0.5/0.75/1.0) is nearly flat and the
by-geometry split (π₄ 51, π₂₊₂ 55) is balanced. This is the signature of inherited difficulty rather
than a displacement-specific artifact: the displaced solves fail to converge in the same region the
matched solves strained, and evenly across the very parameter whose effect is under study. Per the frozen
no-escalation discipline these conditions are censored, not pursued to finer grids, and they support no
inference either way.

### 4.3 The value profile is non-monotone in displacement

The signed advantage change D_π(m) is not monotone in m. Across the panel it descends to a minimum near
m = 0.5 — the maximally ambiguous mixture, where the comparator is equally likely to evaluate a or
π(a) — and partially recovers toward m = 1, where the channel becomes a clean reliability-q signal about
the single displaced class π(a) and thus regains informativeness about a fixed (if wrong) target. For
example, at cell (1,6,6,3) the 4-cycle gives D_π = −11.5, −24.4, −20.7, −8.6 at m = 0.25, 0.5, 0.75, 1.0
(Figure, right panel). Monotone decay was neither assumed nor observed; the recovery toward full
displacement is a direct consequence of the mechanism's structure and was registered as a possible shape
in advance.

### 4.4 The geometry of displacement matters, with a sign reversal

Geometry dependence is **established** by the registered criterion: the contrast G(m) = D_π₄ − D_π₂₊₂
clears δ_min on five adjacent cell pairs, including three at m = 0.5 — (1,5,6,3)↔(1,6,6,3),
(1,6,6,3)↔(2,6,6,3), and (1,6,4,0)↔(1,6,4,1) — with the pattern replicating at m = 0.25 and m = 0.75.
The effect is spatially coherent, not a scatter of isolated conditions.

Its structure is the paper's central finding. The sign of the geometry contrast **reverses with
displacement probability** (Figure, left panel): among resolved conditions it is unanimously positive at
low displacement (3 of 3 at m = 0.25; 6 of 6 at m = 0.5 — the 4-cycle preserving more value than the
double-transposition), then unanimously negative at m = 0.75 (0 of 2 positive), and split at m = 1.0.
The mechanism is visible in the paired D_π(m) profiles: both geometries dip to a trough at m = 0.5 but
the double-transposition dips deeper (π₄ −24.4 vs π₂₊₂ −28.4 at cell (1,6,6,3)), and as displacement
resolves toward a clean single-target channel the two profiles cross. Two displacements of *equal
probability but different geometry* thus impose different — and, across the displacement range,
oppositely ordered — costs on the value of feedback.

The value of an informative signal depends on the geometry of the latent distinction it reports, not
only on how reliably or how often it reports. A signal can carry undiminished information and remain
correctly modelled by an optimal controller, yet lose its worth because it partitions the hidden state
relative to the wrong intervention target — and the shape of that loss depends on *which* wrong target,
with a crossover as the displacement deepens.

![Geometry contrast and displacement profiles](/working-papers/images/requisite-alignment/geometry-signflip.png)

**Figure 3.** *(Left)* Sign of the geometry contrast G(m) = D_π₄ − D_π₂₊₂ by displacement probability,
counted over resolved-substantive conditions: unanimously positive at m = 0.25 and 0.5 (the four-cycle
preserving more value), reversing to negative at m = 0.75, split at m = 1.0. *(Right)* Representative
signed advantage-change profiles D_π(m) for cell (1,6,6,3), both geometries, showing the non-monotone
trough at m = 0.5 and the crossover as displacement resolves toward a single-target channel. Data frozen
in `es22_gate2_adjudicated.json`.

### 4.5 Enrichment was possible but did not occur

The design admitted enrichment — the Blackwell-incomparability of the displaced and matched channels
means displaced feedback could in principle carry more decision-relevant information than matched
feedback about some secondary latent, yielding A_π > A_matched. No resolved condition on this panel
showed it. This is an honest negative on a registered possibility, not an outcome the design precluded:
the incomparability that makes enrichment *possible* does not make it *occur* in this control problem
under these losses.

---

