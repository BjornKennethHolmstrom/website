# Appendix B — Simulation Specification

---

## B.0 Convention

One file: **`gae-simulator-v14-reform-exhaustion.py`**, alongside the shipped prototype (`gae-simulator-v13-chain-prototype.py`, frozen as run for Part V). NumPy + SciPy only. All parameters as named constants at the top of the file. A changelog comment block at the file head records any specification change made after the first full run, with date and reason — this replaces v1's formal deviation log at zero overhead. Figures to `outputs/` as `v14-*.png`; published values are medians with interquartile ranges over **100 seeds minimum** per condition; distributions shown as histogram panels rather than archived separately. One README line.

## B.1 The Six Simulations

**A — Energy law** (extends prototype E1). Depth n = 0…12; layer singular values U[0.7,1.0] baseline, U[0.5,1.0] and U[0.9,1.0] as robustness; m ∈ {4, 6, 10}. Figure `v14-energy-main.png`: median E_min(n)/E_min(0), log scale, IQR band, analytic line exp(−2E[ln σ]·n) overplotted; deficient-geometry asymptotes marked. Secondary panel: IQR/median vs n (dispersion).

**B — Blind-spot geometry** (extends prototype E2). Orthogonal pole (separate construction — *not* a point on the correlation axis) plus kernel correlation ρ_B ∈ {0, 0.1, …, 1.0}; d ∈ {1, 2}; the `oblique` robustness variant (one singular value at {0, 0.1, 0.3}). Track hard rank, clean-transmission count (thresholds 0.99/0.95/0.90), σ_min. **Sanity gates:** the proved results of Appendix A (A.3.1, A.3.2, A.3.3.i–ii) run as code assertions; a failure is a bug by definition and halts the run. Figure `v14-geometry-sweep.png`: clean count and σ_min over (n, ρ_B), orthogonal pole marked off-axis — §7.3's design map rendered.

**C — Noise placement** (extends prototype E3). n = 6 baseline; delivered-variance share by injection layer; delivered SNR vs depth (axes matched to Paper III's central figure for the visual rhyme). Optional common-mode noise flag, reported as exploratory. Figure `v14-noise-placement.png`.

**D — Architectures.** Uniform depths 7/4/2 and fractal assignment (low-V components through depth 7; high-V through depth 2 ending in a closed local loop: corrective term δ_t = −L(y_local,t − r_local), one-step local delay, gain and authority envelope swept; envelope 0 = open-loop control case). 20 sites; high-V components drawn per site. Outputs per architecture: fidelity by component class, E_min, latency, cross-site variance. Figure `v14-architectures.png`.

**E — Discriminator.** Threat-coded directive battery; structural world (M = I) vs adversarial world (M(θ) attenuating threatened dimensions per Paper IX) under the load-bearing constraint of **matched mean attenuation** — the worlds may differ only in pattern. Output: fidelity-on-threat slope distributions per world and the power curve (minimum battery size and noise at 95% separation), which Part VI cites. Figure `v14-discriminator.png`.

**F — Bidirectional node** (tests Conjecture A.4.1; **run last**, after A–E validate its components). Observation chain of block-averaging tiers (the series' Paper I/III convention — reuse, don't reinvent) composed with the actuation chain; centre acts on the chain-filtered estimate. Factorial: layers removed up × down ∈ {0,1,2}² at the same node. Output: the J surface and the interaction estimate with CI. Figure `v14-bidirectional.png`.

## B.2 Registered Predictions and Falsification Consequences (carried from v1, binding)

1. **Dispersion promotion rule:** the depth-dispersion finding (A.2.3) enters Part II in revision only if IQR/median grows monotonically in n across all nine (m × distribution) conditions of Simulation A.
2. **Assignment principle:** fractal architecture D must strictly dominate uniform B on the combined metric; if it does not, §7.2 loses its quantitative support and Part VII is revised.
3. **Superadditivity:** a null or negative interaction in Simulation F demotes Conjecture A.4.1 to a *disconfirmed hypothesis* in the published text, and §7.4's protected-space reading reverts from "derived design theorem candidate" to "consistent observation."

## B.3 Parameter Table

| Parameter | Baseline | Sweeps |
|---|---|---|
| Dimension m | 6 | 4, 10 |
| Plant poles | U[0.85, 0.98] | — |
| Layer singular values | U[0.7, 1.0] | U[0.5, 1.0], U[0.9, 1.0] |
| Deficiency d | 1 | 2 |
| Kernel correlation ρ_B | 0…1 step 0.1, + orthogonal pole | — |
| Oblique σ_weak | — | 0, 0.1, 0.3 |
| Depth n | 0…7 | 0…12 (A); 0…m (B) |
| Seeds | 100 | — |
| Sites (D) | 20 | — |
| Local-loop gain / envelope (D) | swept, declared in file | — |
| Removals (F) | {0,1,2}² | — |
