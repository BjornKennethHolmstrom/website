## Appendix B. Reproducibility manifest

Each row lists the artifact that produces a claim or figure, the cache it reads or writes, and the command. All scripts are pure Python over NumPy, SciPy, and Matplotlib; no network access or GPU is required, and all randomness is seeded.

| Result / figure | Script | Cache | Command |
|---|---|---|---|
| §3 boundary controls (feature vs state proxy) | `paper_xxiv_possibility_experiment.py` | — | `python3 paper_xxiv_possibility_experiment.py` |
| §3 passive coupling, optimized decoupling (biased proxy) | `paper_xxiv_possibility_biased_resolution.py` | — | `python3 paper_xxiv_possibility_biased_resolution.py` |
| §3 exercisable reach, structural comparison, OOD adaptation | `paper_xxiv_possibility_exercisable.py` | — | `python3 paper_xxiv_possibility_exercisable.py` |
| §4 resolution × cost sweep (with proxy + G1 gates) | `paper_xxiv_possibility_resolution_sweep_v2.py` | `paper_xxiv_sweep2_cache.json` | `python3 …_v2.py <sec>` (resumable), then `--plot` |
| §4/§8 normalized entropy + interaction GLM | `paper_xxiv_possibility_analyze_cache.py` | reads `…sweep2_cache.json` | `python3 …_analyze_cache.py` |
| §4/§8 partition-geometry test | `paper_xxiv_possibility_partition_transition.py` | — | `python3 …_partition_transition.py` |
| §5 learned allocation by regime | `paper_xxiv_possibility_future_3.py` | — | `python3 …_future_3.py [K]` |
| Figure 1 (Exp. 1) | `paper_xxiv_gen_fig_exp1.py` (+ `paper_xxiv_figstyle.py`) | — | `python3 paper_xxiv_gen_fig_exp1.py` |
| Figure 2 (Exp. 2) | `paper_xxiv_gen_fig_exp2.py` | reads `…sweep2_cache.json` | `python3 paper_xxiv_gen_fig_exp2.py` |
| Figure 3 (Exp. 3) | `paper_xxiv_gen_fig_exp3.py` | — | `python3 paper_xxiv_gen_fig_exp3.py` |
| Figure 4 (mechanism loop) | `paper_xxiv_figure_4_feedback_loop.svg` | — | static SVG |

Two reproducibility notes belong in the record. The resolution sweep is time-boxed and resumable: `paper_xxiv_possibility_resolution_sweep_v2.py <seconds>` fills as many cells as fit before exiting and can be re-invoked until the cache is complete, after which `--plot` tabulates and renders. And an earlier version of the sweep script did not reproduce its reported numbers — it omitted the `m_meadow` setting and used a coarser cost grid than the narrative described; the discrepancy was caught by re-running the shipped artifact and is corrected in the version listed here. The manifest exists so that this class of error is caught by construction rather than by luck.

---


