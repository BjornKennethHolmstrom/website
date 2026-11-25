# Appendix B — Transition-cost measurement and provenance

## B.1 v1 — target-capacity confound

The v1 implementation used the target model's reference rather than a reference of the source architecture, confounding capacity with adaptation. The original text reported a median directed asymmetry of 0.79 and a smoke-run median relative asymmetry of 1.000 [HR]. Those outputs are unrecoverable; generic v1/v2 filenames overlap. No quantitative comparison with v1 is certified.

## B.2 v2 — capacity matching

The v2 smoke tables (two seeds) survive under generic filenames. Their median directional and symmetric correlations are 0.655 and 0.697, consistent with v3's documentation. They are not the registered ten-seed panel. Matching reference architecture removes one design confound, not sample mismatch, optimization variability or reference adequacy.

## B.3 v3 — reference and null control

The later implementation trains purpose-built references and compares real routes to a home-warmup control. Early stopping and a training cap do not establish convergence. The first leg of the home-warmup route is not free; both legs use stipulated budgets. The v3 triangle diagnostic counts favorable detours rather than violations on a fixed matrix of pair costs. No v3 historical numerical claims are needed for the corrected conclusions.

## B.4 v4 and the mechanism control

The v4 cost code evaluates on training data every 20 steps over 800 updates, reference on validation data; see §2.3. The ten-seed table contains 300 direct rows and 60 selected route comparisons. The registered report and generator summary use different paired lookup semantics. The registered report yields n/a for reverse-pair statistics; the generator uses explicit HOME. Repeated draws are retained in CSVs but last draw overwrites the dictionary; mean aggregation gives the same paired summaries to three decimals. The unit sensitivity, cap and zero-cost sensitivities in §4 are exploratory. The latter are reproducible with `asymmetry_floor_check.py` in the correction archive. In the mechanism cube the destination itself is an admissible intermediate; excluding it changes the automated verdict to MIXED/INCONCLUSIVE. No mechanism is thereby identified.

## B.5 Provenance and reproducibility

Recovered `xxiii_out.zip` contains 73 files. The correction archive preserves this and the original scripts and accepted audit unchanged. Tests 1 and 2 replay from stored matrices to maximum deviation $4.44\times10^{-16}$, v4 paired summaries to $2.22\times10^{-16}$, and the separate report and mechanism summary reproduce line for line. The Test 3 table is checked but its prediction arrays are not recovered. Original v1 results, historical commits and registration chronology, and the exact ad hoc script behind the source-dependence statistic remain unavailable. These are table-level replays, not new training, and the re-scores are post hoc. The six duplicated Swedish section bodies in the previous source have been removed in this edition. AI-assisted working paper, not peer-reviewed; bibliography, human specialist review and publication build verification remain separate.
