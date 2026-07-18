# Appendix B — Simulation record

**Consolidated simulator.** `paper_xxvi_cost_of_returning.py`, master seed 20260718, flat repository placement per series convention, figures written to `outputs/` and referenced — not embedded — in the repository copy of this paper; the web edition embeds them at `/working-papers/images/cost-of-returning/`.

**Build lineage.** The model was developed in five registered cycles, each frozen before running and gated on the previous cycle's surviving claims. The consolidated simulator reproduces the final-confirmation results; the per-cycle scripts are retained in the repository for the audit trail.

| Cycle | Question | Registered outcome |
|---|---|---|
| 1. Mean-field prototype | Does competence decay widen the loop and shift only the exit? | Confirmed; model found analytically solvable, converting the cycle's results to closed form and exposing the additivity identity (§2.2) |
| 2. D2 transplant | Do the closed-form thresholds survive finite heterogeneous agents? | Confirmed to tolerance, with a systematic, sign-consistent shallow residual on exits — flagged, not absorbed |
| 3. Tail cycle | Is the residual an order-statistic (nucleation) effect? | Confirmed: realized-tail prediction reduced exit MAE ≈ 60%; $N$-dependence overpredicted — falsified, prompting the ladder |
| 4. Ladder cycle | Does the ladder functional govern where the pure tail fails? | Confirmed in the registered $N \times h$ separating regime (ladder MAE $0.0089$ vs tail $0.0145$ vs mean $0.0523$; median $k^* \approx 10$); staircases observed at predicted locations; strong log-dwell law failed ($R^2\ 0.9314 < 0.95$) |
| 5. Final confirmation | Classification test of the quantile-ladder criterion; hazard measurement and composition | 55/56 cells (98.2%), single error at $N=500$, $h=0.60$ where $P(k^*>1)=0.543$; held-out survival MAE $0.0538$ ($< 0.12$ registered), pointwise peak $0.119$ at the shallow edge; composition MAE $0.0029$ population-conditional, $0.0050$ new-population |

**Protocol notes.** Thresholds are estimated by continuous crossing interpolation, not grid snapping, after cycle 3 established that grid quantization at step $0.025$ masked the small-decay regime. All factorial and law comparisons use common random numbers (shared master seed and synchronized generator streams across cells and rebuilding laws). Hazard validation is split-half within population. Sweep composition is per-population in both arms: each population's hazard curve is composed into its own predicted exit, with the population-conditional test comparing per population and the new-population test comparing the median of the population-specific predictions against fresh draws (§5.3). Downward branches for exit measurement are initialized at full consolidation with competence at the analytic fixed point $c_*$, eliminating upward-history contamination identified in cycle 3. The recovery boundary band's $[0.1, 0.9]$ width was adopted after an initial narrower band proved too sparse for stable conditional estimation (§6).

**Frozen parameters (base regime).** $N = 20$ (phase and ladder studies sweep $N$ to 2000); $b = 0.45$; $\sigma_0 = 0.12$; $h = 0.15$ (swept 0–0.8); $C_S = 0.50$; $C_I = 1.00$; $L_0 = 0.20$; $L_1 = 0.15$ (ratchet cells); $\rho = 0.003$; $\delta = 0.005$ (decay cells), hence $c_* = 0.375$; selection gain 8.0; switch rate 0.25; mutation floor $5\times10^{-4}$; dwell values $\{10, 30, 100, 300\}$. Full frozen tables, per-arm seed offsets, and registered tolerances are in the simulator header.

---

