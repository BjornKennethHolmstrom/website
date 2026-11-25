# §3 — Descriptive geometry: bounded negative results

## 3.1 Scale and shape

[TR] Full-panel medians (20 zoos) are given below. The first-three column is included solely to trace the original prose discrepancy.

| Statistic | First 3 | All 20 |
|---|---:|---:|
| Split-half Pearson reference | 0.866 | 0.874 |
| Between-regime Pearson | 0.850 | 0.844 |
| Median shortfall | 0.075 | 0.049 |
| Scale spread (max/min mean) | 1.561 | 1.721 |
| Frobenius ratio | 1.870 | 1.341 |

The first three match several originally published values; the full panel is the basis for the historical gates. Pearson detects the specified warp in 2/20 and Frobenius in 5/20; either statistic in 6/20, below 16/20. **H_warp FAIL.** The data indicate scale variation without meeting the specified large-reshaping criterion. The first-three Frobenius ratio exceeds 1.5, so the original claim that both statistics agreed in that quoted panel was unsupported. Neither failure demonstrates shape invariance.

[E] Taking roots of the stored squared matrices removes detected triangle violations (median 2.7% of ordered triples before rooting). H_warp becomes 7/20, median Frobenius ratio 1.340 and median shortfall 0.056. Verdict unchanged. This is not a new registered test.

## 3.2 The connectivity threshold is the MST bottleneck [R]

For a complete undirected weighted graph, the first threshold $b$ at which it is connected equals the largest edge weight in any minimum spanning tree (MST). Appendix A proves this by a cut argument. No metric assumption is needed. A bottleneck is derived from the matrix, not an independent topology observation, yet depends on arrangement as well as scale: distances (1,1,2) and (4/3,4/3,4/3) have equal mean 4/3 and thresholds 1 and 4/3. The earlier 0.5–3.8% sweep overshoot cannot be sourced to either supplied script and is withdrawn.

## 3.3 Bridge rankings depend on the threshold

[TR] In Test 2 the admission gate passed: all 20 zoos have nondegenerate bridge structure in at least two regimes at registered slack. At squared slack 1.25, H_bridge fails (2/20, bar 16); median cross-regime rank correlation is 0.653 [0.546, 0.698]. At slack 1.5 it is 0.548 [0.471, 0.695]. At the exact threshold it is 0.447 [0.312, 0.653], with 13/20 meeting the regime-dependence criterion. At 1.25 RMS slack (1.5625 in squared units), the exploratory re-score gives 5/20 and median correlation 0.652 [E]. Different slack conventions define different graphs; these results do not establish regime-invariant bridge identities. XIX uses a full-stream loss graph at its first connected threshold and cannot be re-scored by this separate panel. Neither study measures mediation.

## 3.4 The stress sweep

[TR] Test 3 gives H_transition FAIL: 1/20 meets the specified repeatable component-jump test, below 16/20. Mean absolute component change per sweep step is 0.242 (first three 0.306). The 40th-percentile distance cutoff keeps edge count at 9 of 21 in every stored sweep row. Thus cycle rank equals components plus 2; these are not independent confirmations. No qualifying repeatable jump was found in this sweep, not a proof of smoothness or absence of transitions under other graphs or stress paths. Test 3's underlying prediction arrays were not recovered.

## 3.5 What the failures mean

All three registered failures remain failures. The evidence concerns finite sampled regimes, cutoffs and criteria. It does not rule out descriptive geometry, other graph constructions or functional networks. The RMS re-score concerns Tests 1–2 only, not Test 3 or route path lengths.
