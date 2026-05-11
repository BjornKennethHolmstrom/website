# Appendix A: Mathematical formulations

## Resource dynamics

Each of the N_PATCHES = 12 resource patches evolves according to discrete-time logistic growth with diffusion and extraction:

```
R_p(t+1) = R_p(t) + r·R_p(t)·(1 - R_p(t)/K(t))
           + β·Σ_{q∈N(p)} (R_q(t) - R_p(t))
           + ε_p(t)
           - E_p(t)
```

Where:
- r = 0.08 is the intrinsic growth rate
- K(t) is the time-varying carrying capacity
- β = 0.02 is the diffusion coefficient between neighbouring patches
- N(p) is the set of patches adjacent to patch p (|i−j| ≤ 2)
- ε_p(t) ~ N(0, σ_fast²) is the fast stochastic shock
- E_p(t) is extraction allocated to patch p

Stock is clipped to (0, 1.5·K(t)) at each step.

## Multi-scale carrying capacity

The carrying capacity varies across three simultaneous disturbance bands:

```
K(t) = K_base + A_med·sin(2π·t/P_med) + A_slow·sin(2π·t/P_slow)
```

Where:
- K_base = 100 (baseline per patch)
- A_med = 8, P_med = 12 months (seasonal cycle)
- A_slow = −20, P_slow = 240 months (decadal decline)
- σ_fast = 3.0 (fast stochastic shock per patch per step)

The slow component produces a net carrying capacity decline of approximately 20 units at peak (around month 120), representing long-run environmental degradation.

## Ashby variety analysis

Let D denote the disturbance process driving the resource and R the regulator (governance system). The resource system's disturbance variety can be decomposed by frequency band:

```
V(D) = V(D_fast) + V(D_med) + V(D_slow)
```

Where V(·) denotes log₂ of the number of distinguishable states (Shannon variety). The governance system's variety is:

```
V(R) = log₂(obs_dims · obs_resolution / obs_latency_penalty)
```

The requisite variety condition V(R) ≥ V(D) is met when the governance system can distinguish all states of the resource that require different governance responses. In practice, this requires:

- obs_latency ≤ 1/f_fast (latency below the fast disturbance period)
- obs_dims ≥ 2 to distinguish seasonal from baseline states
- obs_dims ≥ 3 with multi-decadal baseline to distinguish slow trends from variability

Only Architecture E satisfies all three conditions in the simulation.

## Feedback loop integrity

Feedback loop integrity FLI ∈ (0, 1) measures the degree to which extraction decisions are coupled to the current resource state:

```
FLI = corr(E(t), R_obs(t)) · (1 / obs_latency_penalty) · obs_dims_factor
```

Where:
- corr(·,·) is the Pearson correlation between extraction and observed stock
- obs_latency_penalty = 1 + lag/T (lag in months, T = 360)
- obs_dims_factor = min(obs_dims / V_disturbance_bands, 1.0)

Open access (A) has corr `<` 0 (extraction rises with stock) but FLI ≈ 0.15 because there is no aggregate coordination. State management (B) has structured quotas but FLI ≈ 0.12 due to the latency penalty. Architecture E achieves FLI ≈ 0.78 — the only architecture with substantial feedback loop integrity across all disturbance bands.

## Extraction allocation across patches

Total extraction by user group u at time t is allocated to patches proportional to current patch stock:

```
E_p(t) = E_total(t) · R_p(t) / Σ_q R_q(t)
```

This represents users preferentially extracting from more productive patches — a realistic assumption for mobile extractors (fishing vessels, herders, foragers).

## Gini coefficient

Extraction inequality at each time step is measured by the Gini coefficient across user groups:

```
G(t) = Σ_i Σ_j |E_i(t) − E_j(t)| / (2·N·Σ_i E_i(t))
```

Mean Gini over the simulation (excluding 10-step warmup) provides the summary inequality metric reported in the results table.

## Collapse risk

Collapse risk is the fraction of time steps in which total stock falls below the collapse threshold:

```
CR = (1/T) · Σ_t 𝟙[Σ_p R_p(t) < θ · K(t) · N_patches]
```

Where θ = 0.20 is the collapse threshold fraction and 𝟙(·) is the indicator function.

## Full simulation parameters

| Parameter | Value | Notes |
|---|---|---|
| N_patches | 12 | Spatial resource patches |
| N_users | 20 | User groups |
| T | 360 | Time steps (months — 30 years) |
| K_base | 100.0 | Baseline carrying capacity per patch |
| r_growth | 0.08 | Intrinsic growth rate per step |
| β | 0.02 | Diffusion coefficient between patches |
| σ_fast | 3.0 | Fast stochastic shock std dev |
| A_med | 8.0 | Seasonal amplitude |
| P_med | 12 | Seasonal period (months) |
| A_slow | −20.0 | Slow trend amplitude |
| P_slow | 240 | Slow trend period (months) |
| θ_collapse | 0.20 | Collapse threshold (fraction of K) |
| Random seed | 42 | For reproducibility |
| Warmup | 10 | Steps excluded from metrics |

**Architecture observation parameters (obs_lag, obs_dims, quota_rigidity, sanctioning, slow_signal):**

| | A | B | C | D | E |
|---|---|---|---|---|---|
| obs_lag | 0 | 12 | 3 | 1 | 1 |
| obs_dims | 1 | 1 | 1 | 3 | 6 |
| quota_rigidity | 0.0 | 0.7 | 0.0 | 0.9 | 0.95 |
| sanctioning | 0.0 | 0.3 | 0.0 | 0.8 | 0.9 |
| slow_signal | False | False | False | False | True |
