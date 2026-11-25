# §4 — Directed adaptation cost and selected routes

## 4.1 Prediction and the statistical unit

[TR] The separate registered report gives H_predict FAIL: seed-median directional Spearman correlation 0.468 [0.439, 0.525], below 0.5. That report returns n/a for symmetrized correlation and asymmetry because its reverse-pair lookup is reversed. The v4 generator's own summary using explicit home regimes reports 0.656 and 0.763 respectively. The difference between 0.468 and 0.656 is descriptive, not a proved ceiling or a causal explanation.

Cost depends on the source and target regime, not the particular target model. Of 300 rows, 120 belong to 30 repeated-draw groups; their median coefficient of variation is 0.007. Last-draw and mean-draw paired summaries agree to three decimals. In an exploratory aggregation to 21 source–regime units per seed (mean cost and mean dissimilarity to target-home models), median rho is 0.544, with 9/10 seeds at least 0.3 [E]. This would meet the original numerical bars but changes the unit and predictor, not the registered result. This exploratory result cautions against dismissing the association as merely decorative on the basis of the original failure.

For equally weighted reverse costs $c_{AB},c_{BA}$, any symmetric prediction $s$ has paired squared-error sum

$$(s-c_{AB})^2+(s-c_{BA})^2=2\left(s-\frac{c_{AB}+c_{BA}}{2}\right)^2+\frac{(c_{AB}-c_{BA})^2}{2}.$$

This is an exact squared-error projection [R], not a numerical Spearman ceiling.

## 4.2 Asymmetry, benchmarks and censoring

[TR] The v4 seed-median relative asymmetry is 0.763, with clipped costs including zeros. The separate registered analysis cannot calculate it. Define pair asymmetry as absolute directional difference divided by maximum cost (denominator floored at $10^{-9}$). Exploratory pooled pair checks with mean repeated draws give:

| Subset | Pairs | Median |
|---|---:|---:|
| All | 150 | 0.761 |
| Both references at cap | 121 | 0.694 |
| Any reference early stopped | 29 | 1.000 |
| Both costs positive | 125 | 0.677 |
| At least one cost zero | 25 | 1.000 |

These pooled medians are not the v4 seed medians. Same-architecture pairs also have substantial asymmetry (pooled median 0.771, 60 pairs) [E]. The median for early-stopped references is 1, but that does not say every pair contains zero; the separate zero-cost subset contains 25 pairs. Reference status and clipping affect the magnitude; asymmetry remains after either restriction, not as a causal decomposition.

90.3% of transition rows use references reaching the 1400-step cap. Neither hitting the cap nor early stopping certifies convergence. Negative signed-cost flags occur in 41.3% of rows, 100% with early-stopped references versus 35.1% at cap. This is compatible with mixed-sample benchmark artifacts and does not establish positive transfer. Row-pooled censoring is 12.7%, or 10.7% excluding `compressed_h2`; the corresponding seed medians are 0.117 and 0.074. Censoring records a threshold not crossed within the sampled budget, not missing cost data. No attenuation theorem follows. The empirical asymmetry concerns this proxy and apparatus, not the cost of completed reform.

## 4.3 Staging: selected route effects and unresolved mechanism

[TR] The separate report contains five registered tests. All verdicts are retained, including the predeclared sensitivity excluding `compressed_h2` as a source.

| Test | Full panel | Exclusion panel |
|---|---|---|
| H_predict | FAIL; rho 0.468 | FAIL; 0.435 |
| H_geodesic | PASS; 10/10, gain 0.324 | PASS; 10/10, 0.406 |
| H_route | PASS; spread 1.134, worst loses 0.917 | PASS; 1.456, 0.900 |
| H_hard | FAIL; rho 0.000 | FAIL; 0.200 |
| H_waypoint | FAIL; cheapest entry 88% | FAIL; 91% |

The route comparison selects six high-cost rows per seed, compares 800+800-step routes with a home-warmup null of the same number of steps, and selects best and worst in-sample. Null leg one has median cost 0.140; the seed-median relative compute-control component is 0.362, not a pure causal estimate of compute and not a comparison to 1600 direct target steps. The selected 60 pairs represent 42 distinct seed/source/target-regime units; each pair has two distinct off-endpoint intermediate regimes. De-duplicating intermediates retains 10/10 and gain 0.323 [E]. Best-of-two versus one null still favors selection. These comparisons establish a selected-route contrast under the implemented proxy, not a deployable route policy.

The `why_detour` mechanism test measures onward leg cost, not total route cost, and admits the destination itself as an intermediate. In the recovered 60 destination-warmup rows its median onward cost is zero (57 zero, maximum 0.75); it has minimum measured path length in all cells and largest onward benefit in 88%. Squared dissimilarity does not guarantee that path-length ranking in general. The original automated GEODESIC verdict is compromised by the candidate set, not just small samples. Removing destination-as-intermediate leaves two alternatives, Q1/Q2 unavailable, intermediate main effect 32% and interaction 55.2%; the original rule returns MIXED/INCONCLUSIVE [E]. Two destinations for a fixed source share only one off-endpoint candidate, so a rank-correlation test of destination independence is unavailable. In 57 non-tied cells the shorter-path candidate has lower onward cost in 91% [E]; this does not separate proximity, path structure or curriculum. The earlier 25% source-dependence statistic and target-neighbour claim are withdrawn. Pooled 0.313 was reported by the reviewer from ad hoc cell means, not a certified replay; it is not relied on here.

## 4.4 Typed costs and composition

$C(m,r)$ takes a model and task. With a home mapping $h$, $F(m,n)=C(m,h(n))$ is a well-typed model-pair function and a triangle test is mathematically statable. But that is not the cost of sequential adaptation, which uses the actual updated state, not a canonical model for the intermediate task. The historical 25–29% triangle-rate figure has no computed source in the supplied v4 script; v3 counts beneficial real detours instead. No numerical triangle-violation claim for $F$ is retained. A common waypoint near a destination can lie on shortest paths from many sources (Appendix A); destination dependence would not by itself distinguish geodesic from non-geodesic routing.
