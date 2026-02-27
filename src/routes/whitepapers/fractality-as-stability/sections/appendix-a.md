# Appendix A: Mathematical formulations

## Multi-scale state transition equation

The state of node i at time t+1 is given by:

```
x_i(t+1) = A · x_i(t)
           + β · Σ_{j ∈ neighbours(i)} (x_j(t) − x_i(t))
           + B · u_local,i(t − τ_l)
           + B · u_regional,r(i)(t − τ_r)
           + B · u_global(t − τ_g)
           + d_i(t)
           + drift
```

Where `drift = x_ref · (1 − A)` maintains equilibrium in the absence of disturbance, and `r(i)` denotes the region containing node i.

## Observation equations

Each control layer observes a different aggregation of the true state, with noise scaled to its scope:

```
y_local,i(t)    = x_i(t)           + ε_l,i     ε_l ~ N(0, σ_l²)
y_regional,r(t) = mean(x_region_r) + ε_r        ε_r ~ N(0, σ_r²)
y_global(t)     = mean(x(t))       + ε_g        ε_g ~ N(0, σ_g²)
```

Signal fidelity degrades with spatial scope: σ_l `<` σ_r `<` σ_g. The regional and global observations are regional and system-wide means respectively, which introduces aggregation loss in addition to measurement noise — the same spatial information destruction demonstrated in paper one.

## Control laws

All three layers use proportional feedback control of identical form:

```
u_local,i(t)    = K_l · (x_ref − y_local,i(t))
u_regional,r(t) = K_r · (x_ref − y_regional,r(t))
u_global(t)     = K_g · (x_ref − y_global(t))
```

The control signals are computed at time t and applied at time t + τ (dead-time integration). The delayed signals are stored in history buffers and retrieved at the appropriate offset.

## The frequency-latency constraint

For a discrete-time dead-time dominant system, the maximum controllable disturbance frequency is:

```
f_max ≈ 1 / (2 · τ)
```

This follows from the Nyquist-Shannon sampling theorem applied to the control loop: a controller that samples and acts with period τ cannot resolve disturbances with period less than 2τ. Attempting to respond to such disturbances produces phase-reversed interventions that amplify rather than dampen the disturbance.

| Controller | τ | f_max | Handles disturbances with period > |
|---|---|---|---|
| Global / central | 12 | 0.042 | 24 steps |
| Regional | 6 | 0.083 | 12 steps |
| Local | 2 | 0.250 | 4 steps |

## Stability ceiling on controller gain

For each layer, the maximum safe gain is approximated by:

```
K_max ≈ 1 / (τ · |A|)
```

Where |A| = 0.95 is the natural decay coefficient. This constraint is tighter under coupling (β > 0) and under correlated disturbances; the values below represent conservative operating points well within the stability margin:

| Layer | τ | K_max | K used | Margin |
|---|---|---|---|---|
| Local | 2 | 0.526 | 0.40 | 24% below ceiling |
| Regional | 6 | 0.175 | 0.15 | 14% below ceiling |
| Global | 12 | 0.088 | 0.07 | 20% below ceiling |

## Coupling term

Adjacent nodes are coupled by a diffusion term:

```
coupling_i(t) = β · Σ_{j ∈ {i-1, i+1}} (x_j(t) − x_i(t))
```

With β = 0.02 and nearest-neighbor topology (boundary nodes have one neighbor). This models crisis contagion: instability at one node exerts pressure on adjacent nodes proportional to the state differential.

## Disturbance model

The composite disturbance at node i and time t is:

```
d_i(t) = d_fast,i(t) + d_medium,i(t) + d_slow(t)
```

**Fast component** (impulse at crisis nodes):
```
d_fast,i(t) = M_fast  if i ∈ {2, 7} and (t − 20) mod P_fast = 0 and t ≥ 20
            = 0        otherwise
```
With M_fast = −35, P_fast = 30.

**Medium component** (sinusoidal pressure on region 0):
```
d_medium,i(t) = −A_med · sin(2π · t / P_med)  if i ∈ {0,1,2,3,4}
              = 0                                otherwise
```
With A_med = 12, P_med = 45.

**Slow component** (system-wide secular drift):
```
d_slow(t) = −A_slow · sin(2π · t / P_slow)
```
With A_slow = 8, P_slow = 120.

## Performance metrics

**Cumulative stability deficit** for node i (post-warmup):
```
D_i = Σ_{t=W}^{T} max(0, x_ref − x_i(t))
```
Where W = 10 is the warmup period discarded from measurement.

**Total control effort** for node i:
```
E_i = Σ_{t=W}^{T} |u_total,i(t)|
```
Where u_total,i is the sum of all control contributions to node i.

**Deficit per unit effort** (stability efficiency):
```
η = D_total / E_total
```
Lower η indicates better stability per unit of governance cost.

## Full simulation parameters

| Parameter | Value | Notes |
|---|---|---|
| N | 10 | Number of nodes |
| T | 150 | Time steps |
| x_ref | 100.0 | Target equilibrium |
| A | 0.95 | Natural decay coefficient |
| B | 1.0 | Actuator effectiveness (all layers) |
| β | 0.02 | Coupling coefficient |
| Warmup W | 10 | Steps excluded from metrics |
| τ_local | 2 | Local controller latency |
| τ_regional | 6 | Regional controller latency |
| τ_global | 12 | Global / central controller latency |
| σ_local | 0.5 | Local observation noise std dev |
| σ_regional | 2.0 | Regional observation noise std dev |
| σ_global | 5.0 | Global observation noise std dev |
| K_local | 0.40 | Local controller gain |
| K_regional | 0.15 | Regional controller gain |
| K_global | 0.07 | Global controller gain |
| Fast magnitude | −35.0 | Impulse shock magnitude |
| Fast period | 30 | Steps between fast shocks |
| Fast nodes | {2, 7} | Nodes subject to fast shocks |
| Medium amplitude | 12.0 | Sinusoidal pressure amplitude |
| Medium period | 45 | Medium disturbance period |
| Medium nodes | {0,1,2,3,4} | Region 0 nodes |
| Slow amplitude | 8.0 | Secular drift amplitude |
| Slow period | 120 | Slow disturbance period |
| Random seed | 42 | For reproducibility |
