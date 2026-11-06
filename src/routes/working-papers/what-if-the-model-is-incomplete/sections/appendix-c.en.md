## Appendix C. Reproducibility, numerical methods and provenance

### C.1 Solver, evaluation and verification [ENG]

**Solver.** Exact finite-horizon dynamic programming on the factored model: 31,104 states, 27 joint actions, 9 rain outcomes, $H=11$.

- Policies are selected with A1's lowest-action-index convention.
- Ecological oracles are lexicographic, with tolerance $10^{-9}\max(1,|m|)$.
- Evaluation propagates exact state occupancies. Independent Monte Carlo simulation cross-checks it statistically, which is not a formal proof.

**Verification gates.**

| Gate | Outcome | Note |
|:---|:---|:---|
| F0-V | **FAIL** (kept) | The rare-event test used a normal approximation for a stock category with probability ≈ 2.6 × 10⁻⁶: one path observed, $z=4.01$. The code was correct; the statistic was not. |
| F0-V-R | PASS | Exact binomial tests per stock category, threshold 0.005/160, fresh seeds |
| F0-C validate-c | PASS | Sandbox and workstation |
| Strict parity, sandbox | **FAIL** (kept) | One oracle's per-municipality spending split differed by 1.2 × 10⁻⁴. The cause was cross-platform resolution of exact two-level lexicographic ties in 281 reached states. |
| Strict parity, workstation | PASS (exact) | The workstation that ran the confirmatory evaluation |

**Tie-dependence.** Oracle per-municipality diagnostics depend on how exact ties are resolved, and therefore on the platform. Criterion values do not.

**A second lesson.** Validation can also fail correct code through an invalid declared inequality. This happened in the E1-lite gate G1, check V7. The failure was kept and corrected by a newly declared gate, G1-R.

### C.2 Evidence estimation for the learning studies [NM]

These results concern the numerical estimation of evidence, not the decision problem.

- **D1 [exploratory; status assigned after the run].** Random-walk sequential Monte Carlo evidence estimates (Del Moral, Doucet & Jasra, 2006) were unreliable in a blind 16-dimensional diagnostic. Replicate verdicts disagreed in up to 11 of 24 cases. The detection rates of that gate are therefore not interpreted.
- **D2 [exploratory, declared].** Validated quadrature references were established in two steps.
  - One-dimensional: G3.3a, whose failure is kept, and the breakpoint-split G3.3a-R, accurate to within 10⁻³ nats.
  - Two-dimensional: G3.3b-1, with 48 of 48 references validated and exact nulls exact.
- **D3 [exploratory, prospectively compared].** An evaluator-informed targeted split reduced evidence-estimation error on **one fixed synthetic two-dimensional history**.
  - Mean absolute log Bayes-factor error fell from 1.625 to 0.404 at 512 particles, and from 0.457 to 0.181 at 2,048.
  - It used fewer likelihood evaluations, but wall-clock time was not uniformly lower: 136 s against 118 s at 512 particles, and 274 s against 339 s at 2,048.
  - It relies on geometry known to the evaluator and is not a deployable blind high-dimensional estimator.

A separate numerical-methods note may be more appropriate for this material than the main series.

### C.3 Confirmatory provenance

| Item | Record |
|:---|:---|
| Declaration | `a2_config.json` block `f0c`, 2026-11-06T04:10:33Z; configuration snapshot in `records/` |
| Code freeze | fingerprint F_c `6c5c58ff6e22e3341c46959d8edb1bc25eb99863644ea2a5151b29458a38961d` over 48 files; configuration SHA-256 `4ac1dcb244bbf2c68ee354805e99f1ac5476d419af087b576b4a64c57257a9c9` |
| Test pool | 40 × 19 uniform draws from the reserved stream (spawn key 9, pool version 1); pool SHA-256 `b14d9984b3399c2e51661a811d7321af2bbc4a59f576a5127fa489577b112119`; generated 2026-11-06T06:09:41Z |
| Evaluation | 120 jobs (40 worlds × 3 planning conditions), 06:12:34Z–09:08:42Z; 8 workers; Python 3.10.12, NumPy 2.2.6, SciPy 1.15.3 |
| Commitment | The pool commitment was sent to the reviewer as text (`records/f0c_pool_commitment_as_sent.txt`). The **user-reported** order is: acknowledgement at about 06:12Z, then evaluation. This order is not independently timestamp-verified. |
| Safeguards and their limits | Recomputing the pool from the declared stream reproduces the committed hash, and code and configuration were frozen before generation. Together these substantially constrain discretionary pool selection. They are not a historical proof of the ordering. |
| Replay | An independent replay of the summary is byte-identical except for JSON float rounding (≤ 1.8 × 10⁻¹⁵) |
| Incident | Empty files with error-text names appeared on the workstation and were deleted before inspection; their origin is unknown. There is no evidence of impact on frozen inputs or run payloads: every manifest source list equals the freeze manifest. |
| Development reference | 16 development worlds; Δ −1.195 [−1.801, −0.588], SD 1.138; 15 of 16 negative. Development and confirmatory numbers are never pooled. |

### C.4 Figures and companion files

- Figures 1–5 are drawn by `paper/make_figures.py` from frozen outputs only, with input hashes in `paper/figures/wp1_figure_sources.json`.
- Appendix B's tables are computed by `diag/a2_f0c_exploratory_appendix.py`, against the declaration `records/a2_f0c_exploratory_appendix_declaration.json`.
- `paper/check_numbers.py` checks every number in this paper against a sourced registry.
- The companion archive contains the frozen inputs needed to regenerate all five figures and both appendix tables.

### C.5 Methodological disclosure

The study programme was initiated and directed by **Björn Kenneth Holmström**. The A2 experiments were designed and specified with substantial AI assistance:

- Claude (Anthropic) implemented, verified and ran the studies, and drafted this manuscript;
- ChatGPT (OpenAI) reviewed each gate and audited the drafts.

This is a documented multi-agent review process, **not independent human peer review**. AI cross-checks are not an independent human code audit. An external human audit of the frozen solver and evaluator, together with public release of the executable code and pool manifests, remains an important next step.

Draft v0.2 is not a peer-reviewed publication.

