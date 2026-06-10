# Appendix B: Code and reproduction

## Source code

The v5 simulator extends the series from v4's multi-scale stability demonstration to the information-theoretic domain, modeling preference transmission fidelity through representation chains. It is implemented in Python using NumPy and Matplotlib.

The full source code is available at:

**[github.com/BjornKennethHolmstrom/gae-governance-simulator](https://github.com/BjornKennethHolmstrom/gae-governance-simulator)**

The repository now includes five simulator versions:

| File | Paper | Description |
|---|---|---|
| `gae-simulator-v2.py` | Paper I | Single-node scalar feedback model |
| `gae-simulator-v3.py` | Paper I | Ten-node vector model, localized shock |
| `gae-simulator-v3-unadjusted.py` | Paper I | v3 with unstable gain — instability demo |
| `gae-simulator-v4.py` | Paper II | Multi-scale disturbance, three architectures |
| `gae-simulator-v5.py` | Paper III | Representation chain observability, four architectures |

## Reproducing the results

```bash
git clone https://github.com/BjornKennethHolmstrom/gae-governance-simulator
cd gae-governance-simulator
pip install numpy matplotlib
python gae-simulator-v5.py
```

The simulation is seeded (`numpy.random.default_rng(seed=13)`). Default parameters exactly reproduce Figure 1 and the quantitative summary table in Part II.

## Key architectural differences from v4

v5 is a structural departure from v3/v4, which modelled state-space feedback dynamics. v5 models information transmission through a degradation chain — a different formalism suited to the observability question.

**Preference state space.** Rather than a scalar stability value per node, each of 60 citizen groups holds a P=4 dimensional preference vector in [−1, +1]. Preferences evolve over time with genuine shift events injected at specified points.

**Layer-by-layer degradation.** The `pass_through_layers` function implements the aggregation-plus-noise model: for each layer, group-mean aggregation reduces the number of representative units by ratio r, then Gaussian noise is added. The policy layer observes the final output. No feedback loop — this is a pure forward-transmission model of information degradation.

**Analytical SNR curve.** The `variance_survival_curve` function computes the SNR analytically using the formula in Appendix A, independent of the simulation. This separates the mathematical result from the specific parameter choices of the four architectures.

**Spatial representation error.** The heatmap panels reconstruct what each architecture's policy layer "sees" by broadcasting the final aggregated signal back to citizen-group resolution and subtracting true preferences. This makes the spatial information destruction visually explicit.

## Modifying the parameters

**Layer count and parameters** (`ARCHITECTURES` dict): The most instructive variation is adding a sixth layer to Architecture B or removing a layer from Architecture A, to observe how the SNR and tracking error change. The layer tuples (r, σ, τ) can be varied independently.

**Noise structure:** Setting all σ values to zero produces the pure-aggregation case — demonstrates that information loss occurs even with perfect representation at each layer, purely from the aggregation step. Setting r = 1 for all layers (no aggregation) with varying noise shows the noise-only degradation curve.

**Genuine shift magnitude:** Increasing the shift magnitude at t=40 and t=80 (in the `generate_preferences` function) makes the genuine signal stronger, which raises the effective SNR temporarily. Even with large shifts, Architecture A typically cannot detect them above its noise floor.

**Policy responsiveness K_policy:** Increasing this above 0.5 causes Architecture A to oscillate more severely (it amplifies its noise-driven signal). Decreasing it makes all architectures respond more slowly to genuine shifts. The value of 0.30 is chosen to show moderate responsiveness — neither so fast as to destabilize A nor so slow as to prevent D from tracking shifts cleanly.

## Extending the model

The most valuable extensions from the authors' perspective:

**Empirical noise calibration:** Fitting the noise parameters to real survey-to-policy correlation data would make the SNR estimates empirically grounded rather than illustrative. Electoral studies, deliberative polling experiments, and the literature on the preference-policy gap provide relevant data.

**Strategic noise models:** Replacing Gaussian noise with structured noise matching known media selection biases and party positioning dynamics would produce a more realistic model of the representation chain. The qualitative result would be the same; the quantitative threshold might shift.

**Hybrid architectures:** Modelling a three-layer system where dimension-2 decisions bypass layers 2-3 and are handled by direct participation would demonstrate the complementarity of the observability and fractality results — different decisions routed through appropriate layer counts.

## Contributing

The repository is open source under MIT license. Extensions, empirical applications, and critiques are welcome via GitHub.
