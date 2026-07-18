## Appendix B. Model, simulators, and reproducibility

**Plant and controllers.** Continuous-time plant `P(s) = 1/((s+1)(s+2))` — stable, minimum-phase, relative degree two. The analysis stage (§2–§4) uses a resonant controller `K(s) = kp + δ·s/(s² + (ωm/Q)s + ωm²)`, `kp = 0.5`, `ωm = 3`, `Q = 2`, with `δ` the proxy-gain parameter and `Ω_m` a neighborhood of `ωm`. The synthesis stage (§5) discretizes `P` by zero-order hold at `Ts = 0.1` and parameterizes stabilizing controllers by a length-8 FIR Youla parameter `Q(z)`, so `S = 1 − PQ` is affine in the coefficients; caps `EQ` (effort) and `TP` (complementary-sensitivity peak). Seed 20260716 throughout. Simulators: `paper_xxv_simulator_bode_adversary.py` (§2–§4), `paper_xxv_simulator_bode_synthesis.py` (§5).

**Bode anchor (R0).** The integral is analytically zero (Freudenberg–Looze, relative degree two). The high-frequency expansion `log|S| = 1/(2ω²) + 693/(8ω⁴) + O(ω⁻⁶)` gives a truncated value `B_S(0,W) = −kp/W − 231/(8W³) + O(W⁻⁵)`; the residual after the leading tail matches the next analytic coefficient:

| `W` | `B_S + kp/W` | `−28.875/W³` |
|---|---|---|
| 100 | −2.888e−5 | −2.888e−5 |
| 300 | −1.069e−6 | −1.069e−6 |
| 1000 | −2.888e−8 | −2.887e−8 |
| 3000 | −1.070e−9 | −1.069e−9 |

**Functional non-identifiability (§3).** Two profiles on a unit-measure band: `(|S|² = 4` on measure `0.25`, `1` on `0.75)` and `(|S|² = 2` on `0.5`, `1` on `0.5)`. Both have accessible positive log-area `A_+ = 0.1733`; under `c = 2` their strategic losses are `2.50` and `2.00`. These are arbitrary measurable profiles, not achievable sensitivity functions.

**Achievability sweep (§5).** Minimum accessible CVaR obtained by multistart SLSQP over the FIR coefficients on a 400-point grid (convex program, uncertified solver); the risk-blind reference is the proxy-greedy controller (minimum monitored-band cost). Two comparisons matter. *Matched* — evaluating the risk-blind and risk-aware optima at the proxy-greedy controller's own suppression — gives a gap that vanishes to numerical precision in all nine cells, so at maximal attainable suppression the two designs coincide:

| `c` | `TP` | greedy suppression | greedy CVaR | matched gap |
|---|---|---|---|---|
| 1.5 | 1.5 | 0.727 | 1.137 | 3.5e−7 |
| 2.0 | 1.5 | 0.727 | 1.181 | 6.8e−7 |
| 5.0 | 1.5 | 0.727 | 1.352 | 2.2e−6 |
| 1.5 | 2.0 | 0.785 | 1.151 | 2.9e−7 |
| 2.0 | 2.0 | 0.785 | 1.199 | 5.1e−7 |
| 5.0 | 2.0 | 0.785 | 1.399 | 2.1e−6 |
| 1.5 | 3.0 | 0.870 | 1.197 | 6.0e−7 |
| 2.0 | 3.0 | 0.870 | 1.261 | 9.1e−7 |
| 5.0 | 3.0 | 0.870 | 1.554 | 2.6e−6 |

The genuine robustness effect appears only in the *fixed-suppression* comparison: at suppression 0.72, the minimum achievable CVaR falls as the complementary-sensitivity allowance `TP` loosens.

| `c` | `TP = 1.5` | `TP = 2.0` | `TP = 3.0` |
|---|---|---|---|
| 1.5 | 1.128 | 1.102 | 1.080 |
| 2.0 | 1.167 | 1.131 | 1.108 |
| 5.0 | 1.317 | 1.244 | 1.217 |

The value-function floor is monotone in suppression in all nine cells (nondecreasing by construction; strict here). An earlier version of this appendix reported a "matched gap" comparing controllers at unequal suppression levels; that comparison was mismatched and its "robustness reopens the gap" reading has been withdrawn.

**Verification.** Strategic loss is computed two independent ways — an operational greedy water-filling allocator and the analytic CVaR formula — agreeing to `~1e−14`; this checks the discretization, the theorem being imported.
