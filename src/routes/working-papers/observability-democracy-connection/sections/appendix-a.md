# Appendix A: Mathematical formulations

## Observability in linear systems

For a discrete-time linear system:
```
x(t+1) = A · x(t) + B · u(t)
y(t)   = C · x(t) + v(t)
```

The system is observable if the observability matrix:
```
O = [C; CA; CA²; ...; CA^(n-1)]
```
has full column rank n. When O does not have full column rank, there exist state dimensions that produce zero output regardless of their value — they are invisible to any observer at the output.

In the representation chain model, x is the vector of citizen preferences, y is the signal at the policy layer, and C encodes the aggregation and noise structure of the chain. The constitutional unobservability result is the statement that C for a K-layer representation chain with realistic parameters does not allow full-rank O.

## Variance survival through a single layer

For a layer with aggregation ratio r (mapping n inputs to n/r outputs by taking group means) and additive Gaussian noise with standard deviation σ:

```
Var_out = Var_in / r + σ²
```

The first term represents variance surviving aggregation. For a group of r inputs with variance V, the mean has variance V/r — the central limit theorem applied to the aggregation step. The within-group variance V·(r-1)/r is destroyed entirely. The second term represents noise added at this layer.

## Variance survival through K layers

For a chain of K layers with aggregation ratios r_1, …, r_K and noise levels σ_1, …, σ_K:

**Surviving signal variance** (the component traceable to true citizen preferences):
```
Var_signal(K) = Var_true · ∏_{k=1}^{K} (1/r_k)
```

**Accumulated noise variance** (independent across layers):
```
Var_noise(K) = Σ_{k=1}^{K} [ σ_k² · ∏_{j=k+1}^{K} (1/r_j) ]
```

Note: noise introduced at earlier layers is itself attenuated by subsequent aggregation. The formula above accounts for this; earlier noise is partially suppressed while later noise passes through with less attenuation.

**Simplified form** (when noise at each layer is added after aggregation):
```
Var_noise(K) ≈ Σ_{k=1}^{K} σ_k²   [if r >> 1 at subsequent layers]
```

The simulation uses the simplified form, which slightly overestimates accumulated noise. For the typical parameter values used, the difference is small.

## Signal-to-noise ratio and the unobservability threshold

The SNR at the policy layer:
```
SNR(K) = Var_signal(K) / Var_noise(K)
```

**Constitutional unobservability threshold:** SNR `<` 1.

Below this threshold, noise variance exceeds signal variance. A maximum likelihood estimator of citizen preferences given the policy-layer observation y has an error variance larger than the prior variance — meaning the observation is less informative than no observation at all.

The threshold crossing point K* solves:
```
Var_true · ∏_{k=1}^{K*} (1/r_k) = Σ_{k=1}^{K*} σ_k²
```

For the typical parameters used in the SNR analytical curve (r = 3.5, σ = 0.17 per layer, Var_true = 0.18):
```
K*: 0.18 · (1/3.5)^K = K · (0.17)²
     0.18 · 0.286^K   = K · 0.0289
```
Solving numerically: K* ≈ 2.0 — the threshold is crossed between K = 2 and K = 3.

## The data processing inequality

Shannon's data processing inequality states that for any Markov chain X → Y → Z:
```
I(X; Z) ≤ I(X; Y)
```

Processing (or observing through an intermediate) cannot increase mutual information. For the representation chain, this means that the mutual information between citizen preferences (X) and policy-layer observations (Z) is bounded by the mutual information at the first aggregation step. Each subsequent layer can only reduce it.

Applied to the representation chain: no post-hoc processing at the policy layer can recover mutual information lost in aggregation. The data processing inequality is the formal statement of why institutional quality at the policy layer cannot compensate for aggregation loss in the representation chain.

## Preference dynamics

Citizen preferences evolve as:
```
x_i(t+1) = x_i(t) + δ_i(t) + s(t)
```

Where δ_i(t) ~ N(0, σ_drift²) is individual drift (σ_drift = 0.015) and s(t) is a genuine preference shift event (zero except at the shift events).

Preferences are clipped to [−1, +1] at each step. The initial preference distribution for citizen group i is:
```
x_i(0) = μ_(c(i)) + ε_i
```

Where μ_(c(i)) is the cluster mean (drawn from Uniform(−0.8, 0.8) across P dimensions) and ε_i ~ N(0, 0.25²) is within-cluster individual variation.

## Policy update rule

The policy layer updates according to:
```
π(t) = π(t-1) + K_p · (ŷ(t - τ_total) - π(t-1))
```

Where ŷ(t - τ_total) is the policy-layer observation after total representation chain delay τ_total, and K_p = 0.30 is the policy responsiveness gain. All architectures use identical K_p.

## Full simulation parameters

| Parameter | Value | Notes |
|---|---|---|
| N | 60 | Citizen groups |
| P | 4 | Policy preference dimensions |
| T | 120 | Time steps |
| Clusters | 4 | Groups of 15 citizens each |
| σ_drift | 0.015 | Per-step individual preference drift |
| Shift 1 | t=40, cluster 0, dims 0-1, magnitude 0.4/-0.2 | Genuine regional shift |
| Shift 2 | t=80, all groups, dim 2, mean 0.3 (sd 0.08) | System-wide shift |
| K_policy | 0.30 | Policy responsiveness gain (all architectures) |
| Random seed | 13 | For reproducibility |
| Warmup | 10 | Steps excluded from metrics |

**Architecture A layer parameters (r, σ, τ):**
(5, 0.12, 2), (4, 0.18, 3), (3, 0.22, 4), (4, 0.20, 5), (3, 0.15, 4)

**Architecture B layer parameters:**
(4, 0.10, 2), (5, 0.18, 4), (3, 0.14, 3)

**Architecture C layer parameters:**
(3, 0.08, 2), (2, 0.10, 2)

**Architecture D layer parameters:**
(1, 0.05, 1)
