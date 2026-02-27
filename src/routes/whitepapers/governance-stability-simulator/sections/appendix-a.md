# Appendix A: Mathematical formulations

## State transition equation

The core dynamics of each node follow a first-order discrete-time linear system with dead-time:

```
x(t+1) = A · x(t) + B · u(t − τ) + d(t) + drift
```

Where:
- `x(t)` — true state of the node at time `t` (scalar in single-node model, vector `x⃗(t)` in multi-node model)
- `A` — natural decay coefficient (set to 0.95, representing slow entropy without intervention)
- `B` — actuator effectiveness (set to 1.0)
- `u(t − τ)` — control action applied `τ` steps ago (dead-time integration)
- `d(t)` — external disturbance at time `t`
- `drift = x_ref · (1 − A)` — constant term that maintains equilibrium at `x_ref` in the absence of disturbance

## Observation equation

The controller does not observe the true state directly. It observes a noisy measurement:

```
y(t) = x(t) + ε,    ε ~ N(0, σ²)
```

Where `σ` is the standard deviation of observation noise. This models aggregation loss, reporting distortion, and measurement error. The gap between `y(t)` and `x(t)` is the observability deficit.

## Control law

Both architectures use proportional feedback control:

```
u(t) = K · (x_ref − y(t))
```

Where `K` is the controller gain and `x_ref` is the target equilibrium state.

**Architecture A** computes a single scalar control signal from the national mean of all node observations:

```
u_A(t) = K_A · (x_ref − mean(y⃗(t)))
```

This uniform signal is then broadcast to all nodes, regardless of their individual conditions.

**Architecture B** computes a per-node control signal from each node's local observation:

```
u_B,i(t) = K_B · (x_ref − y_i(t))
```

## Stability ceiling

For a dead-time dominant discrete-time system, the approximate stability ceiling on controller gain is:

```
K_max ≈ 1 / (τ · |A|)
```

Exceeding this ceiling produces oscillatory instability. The ceiling is lower for higher latency, which is why Architecture A uses a lower gain than Architecture B — not as a modelling choice, but as a stability requirement.

## Multi-node coupling

In the ten-node model, adjacent nodes are coupled by a diffusion term representing crisis contagion:

```
coupling_i(t) = β · Σ_{j ∈ neighbours(i)} (x_j(t) − x_i(t))
```

Where `β = 0.03` is the coupling coefficient. The full state transition for the multi-node model is:

```
x⃗(t+1) = A · x⃗(t) + coupling(x⃗(t)) + B · u⃗(t − τ) + d⃗(t) + drift
```

## Performance metrics

**Recovery time** for node `i` is the number of time steps after the crisis until the node returns within a threshold of equilibrium:

```
RT_i = min{t > t_crisis : x_i(t) ≥ x_ref − δ}
```

Where `δ = 5` in the current simulation.

**Cumulative deficit** for node `i` is the integral of stability loss below equilibrium after the crisis:

```
D_i = Σ_{t > t_crisis} max(0, x_ref − x_i(t))
```

System-wide deficit is the sum across all nodes: `D_total = Σ_i D_i`.

## Simulation parameters

| Parameter | Architecture A | Architecture B |
|---|---|---|
| Latency `τ` | 12 | 2 |
| Observation noise `σ` | 6.0 | 0.5 |
| Controller gain `K` | 0.30 | 0.45 |
| Natural decay `A` | 0.95 | 0.95 |
| Actuator effectiveness `B` | 1.0 | 1.0 |
| Coupling coefficient `β` | 0.03 | 0.03 |
| Crisis magnitude | −45.0 | −45.0 |
| Crisis nodes | 2, 7 | 2, 7 |
| Number of nodes `N` | 10 | 10 |
| Time steps `T` | 120 | 120 |
| Crisis onset `t_crisis` | 20 | 20 |
