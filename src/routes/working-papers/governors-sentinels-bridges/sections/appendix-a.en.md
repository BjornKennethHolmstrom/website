### Appendix A — Model zoo, stream, and role measures

**Historical specification.** Seven single-layer GRU predictors on 256-dimensional frames: `normal_h8`, `normal_h16`, `compressed_h2`, `wind_h8`, `damped_h8`, `blur_h8`, `velocity_aux_h8`. The auxiliary velocity head has weight 0.1. Four regimes: normal, wind (constant acceleration), damped (wall-contact velocity factor 0.6), blur (3 by 3 box kernel). Each model trains on 500 sequences of 200 steps, twelve sampled windows per sequence, Adam learning rate 0.001, at most 20 epochs, patience 4. Stream: six 500-step segments, normal/wind/damped/blur/normal/wind. Forecast offsets 5, 10, 20 relative to the preceding frame. Shared stream within each zoo.

**Implementation limits.** Weights are constructed before `torch.manual_seed(seed*100+len(name))`; same-length names share seeds (`normal_h8`/`damped_h8`, `wind_h8`/`blur_h8`). Python hash-based seeding and cache history add provenance risks. Validation losses are regime-specific and the auxiliary loss differs. See §3 for maturity and persistence; closed reviews every 500 steps over 30 origins, adaptive uses a 50-step rolling lookback including current origin (51 origins), 5% margin and five-step persistence. Oracle uses origin-wise minimum single-model loss; full pluralism averages predictions.

**Nominal sentinel.** Centered window 20, margin 10% of active loss, horizon 50, minimum nominal lead 10; spike above twice opening-window regime median. Coverage counts unique episodes, false alarms count candidate timesteps; active candidates excluded. Timing and matching limitations in §4. **Bridge:** RMS loss-vector distance and unweighted betweenness at first connected threshold; supplied code records full-stream articulation, not per-regime flags (line 532).

| Prediction | Historical report [HR] | Corrected status |
|---|---|---|
| P1 | Adaptive subcontrast 20/20 twice; closed worst 2/20; full ordering 1/20 | FAIL registered null; noncausal offline contrast |
| P2 | 17/20; pooled rho 0.481 | Nominal bars met as reported; causal interpretation withheld |
| P3 | 11/20; mean +2 episodes | FAIL |
| P4 | 20/20; reported articulation 19/20 | Full registered criterion unverified; functional claim withdrawn |

All counts are historical reports. The original registration and code are retained; the correction witnesses are not registered experiments. Named roles, per-regime geometry and precision/recall illustrations were exploratory; no historical arrays were recovered for verification.
