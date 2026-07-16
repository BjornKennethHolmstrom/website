# Appendix B — The transition-cost measurement: three versions, and why the floor is the whole problem

The directed cost is only as meaningful as the reference floor it is measured against. Getting the floor right took three versions; all three are reported because the errors are instructive and because the headline asymmetry was, in the first version, entirely an artifact of the floor.

## B.1 v1 — the target-capacity confound

**Floor:** the *target model's* own converged loss. **Failure:** this makes the floor a property of the target's *capacity*, not the target's *regime*. A high-capacity source retrained toward a low-capacity target's regime clears the target's (lax) floor immediately, so the measured cost is zero — in one direction only. The result was a median directed asymmetry of 0.79 that was **capacity difference in disguise**: reversing a high- and low-capacity pair flips which direction reads zero. The smoke run's tell was a median relative asymmetry of exactly 1.000 — the signature of systematic one-directional zeros, i.e. a bug, not a phenomenon.

## B.2 v2 — the capacity-matched floor

**Fix:** the floor for reforming $M_A$ toward $R_B$ is a *fresh model of $M_A$'s own architecture*, trained to convergence on $R_B$. Cost now answers: *how much worse is reforming $M_A$ into a fit for $R_B$ than building a same-capacity model for $R_B$ from scratch?* Capacity-fair by construction; admits a signed variant (negative = positive transfer, the reformed model beating a purpose-built one). The asymmetry **survived** the correction at ≈ 0.69 in smoke — establishing it was never the confound — and the seven native models double as their own references (a fresh model on its home regime *is* the zoo model), so only the off-home floors need training.

## B.3 v3 — converged floors and the null-detour control

Two refinements. **Converged floors:** references trained to convergence with early stopping rather than to a fixed budget, so "positive transfer" is measured against a real floor rather than an under-trained one. **The null-detour control** for the staging effect: route $M_A$ through *its own home regime* before the target — a leg costing ≈ 0 but consuming a full retraining budget — to separate genuine staging from the compute of a second training leg. The control fired: routing through the null intermediate did help (~20%), so the raw detour advantage was partly compute. Routing through the *right* intermediate beat the null by a further ≈ 32% (median gain over null), which is the path-structure component. Budget was raised 400 → 800 steps because converged floors pushed censoring up, and censoring truncates cost, which *attenuates* the distance–cost correlation — so the reported ρ = 0.47 is, if anything, conservative.

## B.4 v4 / the mechanism control — and the compromised statistics

The full run (§4) used the v4 measurement (compute-matched real-vs-null detour) and a separate architecture-fixed cube (`why_detour`) for the mechanism. Two statistics in the mechanism analysis were degenerate at small samples and are flagged in §4.3 and §7.7: a within-cell path correlation of 1.000 (three points per cell) that the automated verdict misread as geodesic, and cross-destination rank correlations on three intermediates. The conclusions in §4.3 rest on the **pooled** statistics (n ≈ 36) and on the source-dependence count (25%), not on the degenerate per-cell figures.

## B.5 What the version history is for

Three versions is not indecision; it is the audit trail. The asymmetry that is the paper's spine appeared in v1 as an artifact and had to be shown to *survive* the floor correction before it could be believed. Had we reported v1's 0.79 without the capacity-matched floor, the central result would have been a capacity confound dressed as a discovery — precisely the failure mode §3 catches the descriptive geometry committing. The floor is the whole problem, and reporting all three versions is how the reader can check that the surviving asymmetry is not the confound wearing a different number.
