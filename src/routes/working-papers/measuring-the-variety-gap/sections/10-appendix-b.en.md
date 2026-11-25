## Appendix B: Historical score discrepancy

The original calibration table is preserved in the original paper archive, not republished here as a diagnostic ranking. Evaluating D.4 at the printed parameter points gives the following selected discrepancies [I/E]. The numbers on the right are arithmetic checks, not estimates of country characteristics, uncertainty summaries or replacement scores.

| Historical row | Reported median (withdrawn) | Formula at printed point |
|---|---:|---:|
| Finland | 1.4 | 6.48 |
| Germany | 1.8 | 35.89 |
| Nigeria | 7.2 | 482584.03 |

All 20 weighted point evaluations exceed 2.0; all 20 partial products consisting only of the dimension ratio raised to 1.5 and the latency factor also exceed the reported medians. The other factors are at least one when fidelity, implementation fraction and one minus bypass share are in (0, 1] and oscillation amplitude is nonnegative. In 12 rows the dimension factor alone exceeds the reported median. This is not a reconstruction of the Monte Carlo calculation: the joint sampling law is missing. Finland's latency factor alone at its printed value is e ≈ 2.72. Under the original D.6 sampling specification, provided that on every draw the dimension ratio is at least one, fidelity, implementation fraction and one minus bypass share belong to (0, 1], and oscillation amplitude is nonnegative, the composite is bounded below by the latency factor. With Finland’s normal latency law centred at 12 months and truncated at zero, the median latency factor is at least e, hence so is the median composite. This conclusion is conditional; in particular the untruncated normal oscillation law in §5.4 does not guarantee nonnegative amplitude. The actual joint support is not documented, so no unconditional impossibility theorem about all distributions is claimed. The review's exploratory rank correlation (0.925) and approximate log relationship suggest investigating an undocumented transformation, not fitting a replacement transformation. All 20 evaluations are in the accompanying audit results.
