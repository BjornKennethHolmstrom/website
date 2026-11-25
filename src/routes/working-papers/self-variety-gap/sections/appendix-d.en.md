## Appendix D: Legacy simulator and controlled replay

### D.1 Actual implementation [I]

The unchanged script uses five states H, R, M, C and L (health, relationships, meaning, career and leisure), initial and reference values 70, 300 stored samples, retention 0.95, input coefficient 0.3 and Gaussian disturbances with standard deviations 1.5, 1.2, 1.0, 1.8 and 0.8. Both controllers receive full noisy state arrays, with observation noise standard deviations 0.3 times the disturbance standard deviations. The 1D policy uses only C; ND uses H, R and C, not leisure. Raw signed proportional errors use gain 0.05 and are normalized to absolute effort 10 whenever nonzero. In 1D this becomes sign-only control; in ND relative errors determine allocation. The common positive gain cancels. There is no optimized objective, learned sensor or changing representation.

Only 1D incurs the immediate signed health debit 0.12 times career action, overwriting the stored state before the next update; negative action credits health. Both plants include linear cross-coupling, a health-gated career retention term below 70% of baseline, a health-dependent leisure boost and a zero floor. There is no multiplicative relationship-to-meaning function. There is no explicit rest policy or increasing effort in response to crisis. Thus both the policy and plant differ. Original seed 42 is used sequentially, not as paired independent runs. The original script and PNG are archival artifacts; their titles and comments are not the revised scientific claims.

### D.2 Replayed historical run [I/E]

| Statistic | 1D | ND |
|---|---:|---:|
| Last-50 pooled state mean | 67.19 | 68.72 |
| Fraction of samples with any state below 14 | 0.11 | 0.00 |
| Mean career (all samples) | 37.65 | 70.04 |
| Total absolute effort | 2990 | 2990 |
| Minimum health | 36.22 | 61.02 |

The summary agrees with the original figure's rounded pooled means. Contrary to the earlier account, 1D relationships do not collapse toward 45: minimum is 61.42, last-50 mean 94.53. Last-50 meaning is 105.56, minimum career 6.66; 25 career actions are negative. ND's untracked leisure last-50 mean is 51.40. The former health claim of 15–20 is incorrect. State units are artificial; the sample fraction is not a clinical crisis rate. The plotted count of untracked coordinates (4 or 2) is constant, not the hidden gap. No belief accuracy or wellbeing is measured.

### D.3 Matched-seed diagnostic [E]

The audit reuses the original functions, moves only the signed health debit outside the controller-specific branch and toggles it for both arms. Eight seeds 42–49 use common random draws per seed and condition. This is a post-hoc sensitivity check at the original parameters, not a preregistered causal study.

| Policy | Debit | Mean flagged fraction | Mean career | Last-50 pooled mean |
|---|---|---:|---:|---:|
| 1D | Off | 0.000833 | 61.303 | 61.7 |
| 1D | On | 0.080417 | 41.332 | 65.7 |
| ND | Off | 0 | 70.078 | 68.5 |
| ND | On | 0 | 70.035 | 68.5 |

The 1D pooled measure rises when the debit worsens career outcomes: negative career coupling to R and M contributes to that reversal. It cannot be interpreted as wellbeing. Removing the debit substantially reduces the flagged fraction; the residual career difference is about 8.8 points. The untracked health coordinate, negative C-to-H coupling and health-gated career dynamics are part of the model-internal explanation, not separately identified causal effects. In the legacy asymmetric comparison with matched seeds, the independent reviewer reports 1D fractions from 0.04 to 0.12 in every seed versus zero ND, so the contrast is not merely an artifact of using different random streams. This is not evidence about people or a general objective-dimensionality effect. Other parameters, control laws and outcomes are untested. The original replay and factorial ablation are documented in the accepted audit. The separate matched-seed legacy comparison comes from the independent correction reviewer’s replay; its reproducing script and per-seed output are archived with correction v0.2, not in the original audit.
