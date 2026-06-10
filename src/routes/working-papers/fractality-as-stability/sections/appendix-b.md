# Appendix B: Code and reproduction

## Source code

The v4 simulator extends the v3 codebase from paper one to a multi-scale disturbance environment and three-architecture comparison. It is implemented in Python using NumPy and Matplotlib. No dependencies beyond the standard scientific Python stack are required.

The full source code is available at:

**[github.com/BjornKennethHolmstrom/gae-governance-simulator](https://github.com/BjornKennethHolmstrom/gae-governance-simulator)**

The repository includes all simulator versions in sequence:

| File | Paper | Description |
|---|---|---|
| `gae-simulator-v2.py` | Paper 1 | Single-node scalar model |
| `gae-simulator-v3.py` | Paper 1 | Ten-node vector model, localized shock |
| `gae-simulator-v3-unadjusted.py` | Paper 1 | v3 with unstable K_B — instability demonstration |
| `gae-simulator-v4.py` | Paper 2 | Multi-scale disturbance, three-architecture comparison |

## Reproducing the results

With Python 3.8+ and NumPy/Matplotlib installed:

```bash
git clone https://github.com/BjornKennethHolmstrom/gae-governance-simulator
cd gae-governance-simulator
pip install numpy matplotlib
python gae-simulator-v4.py
```

The simulation is seeded for reproducibility (`numpy.random.default_rng(seed=42)`). Running with default parameters exactly reproduces Figure 1 and the quantitative summary table in Part III.

## Key architectural differences from v3

v4 introduces three substantive extensions beyond the v3 multi-node model:

**Multi-scale disturbance model.** v3 uses a single instantaneous shock. v4 superimposes three simultaneous disturbance types — impulse (fast), sinusoidal regional (medium), and sinusoidal global (slow) — generating a composite disturbance environment that cannot be fully stabilized by any single-scale controller.

**Three control architectures.** v3 compares two architectures (centralized, distributed). v4 compares three: centralized (A), local-only (B), and fractal multi-scale (C). The three-way comparison makes visible both the high-frequency failure of centralized control and the slow-band oscillation failure of local-only control.

**Multi-layer control signal accumulation.** In Architecture C, three control signals are computed and applied simultaneously, each with its own latency buffer. The state transition sums all three contributions additively, with each layer's signal retrieved from its own history at the appropriate dead-time offset.

## Modifying the parameters

All disturbance and controller parameters are defined at the top of the script with inline documentation. The parameters most worth varying for exploration:

**Disturbance periods** (`FAST_PERIOD`, `MEDIUM_PERIOD`, `SLOW_PERIOD`): changing these shifts the disturbance frequencies relative to each architecture's f_max ceiling. Setting `FAST_PERIOD = 50` moves the fast disturbance into the range Architecture A can partially handle; setting it to 10 makes it unresolvable by any architecture.

**Actuator effectiveness** (`B_l`, `B_r`, `B_g`): currently equal at 1.0 by design. Setting `B_g = 0.6` models a less effective global actuator, which is arguably more realistic but introduces the confound that paper one's authors intentionally avoided.

**Coupling coefficient** (`beta`): increasing this beyond 0.05 produces rapid contagion that overwhelms local containment; decreasing it toward 0 removes the contagion dynamic and makes each node's behaviour more independent.

**Regional boundaries** (`REGIONS`): the current 5/5 split can be changed to unequal regions or more than two regions to test whether regional boundary design affects performance.

## Instability exploration

Setting `K_l = 0.55` (above the stability ceiling for τ_l = 2) produces oscillatory instability in Architecture B and the local layer of Architecture C. This reproduces the v3-unadjusted result at the local scale and demonstrates that the gain ceiling applies at every layer of the fractal hierarchy, not only at the global level.

## Contributing

Extensions, critiques, and applications to specific governance contexts are welcome via the repository. The most valuable extensions from the authors' perspective are: empirical calibration of disturbance timescales against real governance data, nonlinear dynamics extensions, and adaptive regional boundary modelling.

The repository is open source under MIT license.
