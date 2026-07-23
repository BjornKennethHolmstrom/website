## Appendix A. Reproducibility

All numerical results derive from a fixed chain of frozen artifacts. Each is content-addressed by the
first 16 hex digits of its SHA-256; the run is deterministic (no RNG in the solver path; the one
Monte-Carlo element, the Gate-1 lower-bound certificate, is a validation bound not used in any reported
value). The Gate-2 production run carries run_id 16bc675b, bound to the panel, solver hash, grid levels
(G = 40/54/64), horizon (H = 64), geometries, and displacement levels; a mismatch in any of these
rejects the checkpoint.

| Artifact | File | SHA-256 (16) |
|---|---|---|
| Model contract (ES-2.0 rev5) | `ES-2.0-model-contract.md` | 2c71487c2ce18287 |
| Gate-1 preregistration | `ES-2.1-gate1-prereg.md` | 154d403eacde14ef |
| Gate-2 preregistration (rev1.1) | `ES-2.2-gate2-prereg.md` | ea7db6b5ff508a2e |
| Gate-1 solver (Kuhn) | `es21_gate1_solver_kuhn.py` | 85560ac1e8c2d342 |
| Gate-2 solver (Kuhn, displaced channel) | `es22_gate2_solver_kuhn.py` | 53424370260e2656 |
| Independent H = 2 validator | `es22_h2_exact.py` | 1f42d5762eb1e89f |
| Gate-2 production driver | `es22_run_gate2.py` | f1585246503abaeb |
| Deterministic post-processing | `es22_postprocess_results.py` | 5bdbe48637c4c600 |
| Frozen 74-cell panel manifest | `es22_panel_manifest.json` | 7a525ac3ca1cfe14 |
| Gate-1 activation surface (amended) | `es21_step5_amended.json` | 22d1fbf37ddb29d1 |
| Gate-2 raw results (run 16bc675b) | `es22_gate2_results.json` | e98b42bd45ab685b |
| Gate-2 adjudicated re-analysis | `es22_gate2_adjudicated.json` | 4211345f293f3f60 |

**Solver.** Belief-grid backward induction over the K = 4 simplex, CDF-Kuhn (Freudenthal) simplex
interpolation at grid levels G = 40 → 54 → 64, horizon H = 64. The Gate-2 solver is a minimal diff from
the Gate-1 solver, changing only the feedback observation likelihood to the three-level displaced channel
(§3.4); all other machinery is identical, and the m = 0 identity (V1) confirms the reduction is exact.

**Panel and classification.** The 74-cell panel is selected deterministically from the frozen Gate-1
surface by the rule in §3.5 (qualified interior A > 11·ε_A, tertile stratification with SHA-256 hash
ordering, registered anchors and slices where qualified, one adjacency pair per tertile) — no random
sampling. Classification is the interval rule of §3.5 with δ_min = 0.05 · median(A over panel) = 0.648,
gated on independent convergence of both policy values (§3.6). The post-processing script regenerates
every reported count, fraction, and the geometry adjudication from the raw results JSON without
re-solving, and is the authority for the numbers in §4; the two driver-side reporting issues it corrects
(pooling of the unresolved count; the permissive geometry flag) are documented in its header.

**Validation matrices.** The V1–V8 obligations (Table 1) were evaluated before any scientific condition
was interpreted; the exact H = 2 enumeration (V7) shares no interpolation core with the production solver
and independently confirms exact model conjugacy symmetry (spread 4 × 10⁻¹⁶), establishing that the
production solver's small conjugacy spread is interpolation bias within the registered envelope, not a
model asymmetry.

**Hardware.** Ryzen 7 3700X, 16 threads; the production run completed in roughly 2.5 hours at 12 worker
processes. numpy/scipy only; no GPU, no network in the solve path.

---

