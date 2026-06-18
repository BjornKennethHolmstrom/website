# Appendix B — Simulation Specification

This appendix specifies the simulation of Part V in full, sufficient for independent reimplementation. All experiments are deterministic given the seed; the script is `gae-simulator-v17-adaptation-bottleneck.py`, seed 20260618, with conversion efficiencies fixed at \(\rho_{SL}=0.6, \rho_{LE}=0.5\) throughout. The efficiency values are illustrative: the results are structural in \(\rho_{SL}, \rho_{LE} < 1\), and their magnitudes set the severity of a bottleneck, not its existence.

## B.1 The Loop Model

The dynamic experiments (B and D) run the recursive loop as a discrete-time queue. At each step, with current backlogs \(B_I, B_N, B_R\):

\[
\begin{aligned}
\text{(Sense}\to\text{Learn)}\quad
& \alpha_L = \rho_{SL}\, r_S, \quad
  p_L = \min(B_I + \alpha_L,\, r_L), \quad
  B_I \leftarrow \max(0,\, B_I + \alpha_L - r_L); \\
\text{(Learn}\to\text{Execute)}\quad
& \alpha_E = \rho_{LE}\, p_L, \quad
  p_E = \min(B_N + \alpha_E,\, r_E), \quad
  B_N \leftarrow \max(0,\, B_N + \alpha_E - r_E); \\
\text{(Execute}\to\text{Sense)}\quad
& w = g\, p_E + d, \quad
  B_R \leftarrow \max(0,\, B_R + w - r_S).
\end{aligned}
\]

Here \(p_L, p_E\) are the per-step processed (realised) learning and execution; the steady-state values reproduce \(\tilde r_L, \tilde r_E\) of (A.1). The default disturbance is \(d = 0.05\) and the default amplification \(g = 1\) unless a regime sets otherwise.

## B.2 The Four Experiments

**A — Allocation optimum.** With total \(R = 1\), a grid search over the simplex \(r_S + r_L + r_E = R\) (step \(0.002\)) maximises \(T_{\text{eff}}\) of (A.2) and is compared to the analytic optimum of Proposition A.2. The zero-marginal-return property of Theorem A.1 is checked by adding \(0.2\) to the non-binding sensing stage from an execution-binding allocation and confirming \(T_{\text{eff}}\) is unchanged. A one-dimensional slice through the optimum is plotted (`xv_A_allocation.png`).

**B — The three backlogs.** Three regimes are run for 400 steps, each starving one stage relative to its upstream supply: *sensing > learning* (\(r_S=0.60, r_L=0.10, r_E=0.40\)); *learning > execution* (\(r_S=0.60, r_L=0.50, r_E=0.05\)); *world > re-observation* (\(r_S=0.60, r_L=0.50, r_E=0.40, g=4\)). The dominant backlog's growth slope (final value / steps) is recorded; the other two remain at zero (`xv_B_backlogs.png`).

**C — Closure-delay depression.** At the balanced optimum from A, the closure delay \(\tau\) is swept over \([0,12]\) (40 points). The completed-cycle rate is measured from the loop and compared to the closed form (A.6); the maximum absolute residual is recorded (`xv_C_closure_delay.png`).

**D — Effective and self-blinding.** A controller tracks a target drifting at \(r_{\text{env}}=0.02\) with correction gain \(0.5\), sensing capacity \(r_S=0.10\) fully consumed tracking the target, and execution generating unobserved consequences at \(w = 0.12 > r_S\). The tracking error on the re-observed component and the reality backlog \(B_R\) are recorded over 600 steps (`xv_D_self_blinding.png`).

## B.3 Parameter Table

| Symbol | Meaning | Value(s) |
|---|---|---|
| \(\rho_{SL}\) | sensing→learning conversion efficiency | 0.6 |
| \(\rho_{LE}\) | learning→execution conversion efficiency | 0.5 |
| \(R\) | total capacity (Experiment A) | 1.0 |
| \(d\) | exogenous disturbance rate (default) | 0.05 |
| \(g\) | consequence amplification (default; B regime 3) | 1.0; 4.0 |
| \(\tau\) | closure delay (Experiment C sweep) | 0–12 |
| \(r_{\text{env}}\) | target drift rate (Experiment D) | 0.02 |
| seed | RNG seed | 20260618 |

## B.4 Verified Results

| Experiment | Quantity | Result |
|---|---|---|
| A | analytic optimum \((r_S^\*, r_L^\*, r_E^\*)\) | (0.526, 0.316, 0.158) |
| A | grid-search argmax | (0.526, 0.316, 0.158) |
| A | \(T_{\text{eff}}^\*\) at balance vs. equal thirds | 0.158 vs. 0.100 (58% higher) |
| A | marginal return to non-binding stage | 0.000 |
| B | backlog slopes (information / innovation / reality) | 0.26 / 0.13 / 0.17, others 0 |
| B | max endogenous \(w/r_S\) at \(g=1, d=0\) | \(\rho_{SL}\rho_{LE} = 0.30 < 1\) |
| C | max \(\lvert\)measured \(- T_{\text{raw}}/(1+\tau T_{\text{raw}})\rvert\) | \(\sim 3\times10^{-17}\) |
| C | half-throughput delay | \(\tau = 1/T_{\text{raw}} = 6.33\) |
| D | mean tracking error (re-observed component) | 0.020 (flat) |
| D | reality-backlog growth | 0.020 / step, to 12.0 at 600 steps |

The simulations confirm the internal consistency of Part II and supply the two quantities the body deferred — the balanced optimum of A.3 and the closure-delay form (A.6). They establish nothing about any real governance system; every rate, efficiency, amplification, drift, and delay is stipulated, and §2.4's admission that no field instrument is offered stands in full.

---
