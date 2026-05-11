## Appendix C: Simulation Architecture for Value‑Function Collapse

This appendix defines a minimal dynamical model that makes the Goodhart‑Ashby synthesis and the variety gap concretely visible. The simulation is deliberately simple so that the structural mechanism remains transparent.

### C.1 System Description

Consider a society with two coupled state variables:

- **W(t)** : economic output (wealth), the *observed dimension*.
- **E(t)** : environmental integrity (ecosystem health), the *excluded dimension*.

The system evolves in discrete time steps according to:

W(t+1) = W(t) + α · E(t) · I(t) − δ_W · W(t)
E(t+1) = E(t) − β · I(t) + γ · (E₀ − E(t)) + η · W(t)

where:

- **I(t)** is the control input (economic investment) chosen by the policy system.
- **α** translates current environmental quality into the productivity of investment. As E degrades, the same I yields less W in the future.
- **δ_W** is the natural depreciation of wealth.
- **β** is the environmental cost per unit of investment.
- **γ** is the natural regeneration rate of the environment toward its baseline E₀.
- **η** captures a delayed negative feedback: high past wealth (which implies past investment) eventually erodes the environment further (e.g., through accumulated pollution, resource depletion).

Crucially, the coupling works in both directions: **E** supports **W**, but the pursuit of **W** degrades **E**, and a degraded **E** eventually reduces future **W**.

### C.2 Value Architectures (Controllers)

We compare two governance architectures that differ only in their *value function dimensionality*, not in their competence.

**Architecture 1D (GDP‑only)**
- Objective function: **J₁ = W(t)**.
- The controller observes **W(t)** (with some noise) and does not observe **E(t)**. It believes maximising W is always good.
- Control law: I(t) = I₀ + K · (W_target − W_obs(t)), where I₀ is a baseline and K is a gain. The controller invests more when W is below the desired target, trying to push W upward.

**Architecture 2D (Wellbeing‑aware)**
- Objective function: **J₂ = W(t) + λ · E(t)** (with λ > 0).
- The controller observes both **W(t)** and **E(t)**. It recognises that E has value and that degrading E harms future W.
- Control law: I(t) is chosen to keep both variables within a desired region. Concretely, the investment is damped when E falls below a threshold: I(t) = I₀ + K · (W_target − W_obs(t)) · f(E), where f(E) is a sigmoid that reduces investment as E declines, preventing the damaging feedback loop from being triggered.

Both controllers have access to the same financial resources; the only difference is the dimensionality of their value architecture.

### C.3 Parameterisation

| Parameter | Value | Meaning |
|-----------|-------|---------|
| α | 0.3 | Investment productivity per unit of E |
| δ_W | 0.05 | Wealth depreciation |
| β | 0.25 | Environmental cost per unit of I |
| γ | 0.1 | Environmental regeneration rate |
| η | 0.02 | Delayed damage from past wealth |
| E₀ | 100 | Baseline environmental integrity |
| W_target | 120 | Desired wealth level |
| I₀ | 5 | Baseline investment |
| K | 2.0 | Gain (identical for both architectures) |
| λ | 1.5 | Weight of environment in 2D objective |
| Noise σ_W, σ_E | 1.0, 0.5 | Observation noise (1D only observes W) |

Initial conditions: **W(0)=60, E(0)=90**.

### C.4 Expected Behaviour

**Architecture 1D** initially succeeds: investment raises W, and because E is still healthy, productivity is high. The controller “learns” that investment is effective and continues to push W toward the target. Meanwhile, E degrades silently because it is not observed. As E falls, the productivity of investment drops (α·E decreases), so more I is needed to maintain W, which accelerates E’s decline. Eventually, the accumulated environmental debt triggers a sharp fall in W that the controller cannot understand—its own actions caused the collapse, but its value architecture gave it no category in which to perceive E as a relevant variable. The trajectory shows a classic overshoot‑and‑collapse pattern.

**Architecture 2D**, observing E, begins to moderate investment as E approaches dangerous levels. W grows more slowly but never collapses. The system reaches a stable, lower steady state where both dimensions are balanced.

### C.5 Relevance to the Variety Gap

This simulation is a direct instantiation of the Goodhart‑Ashby synthesis:

- The 1D objective function is an observation channel of dimensionality **dim(V)=1**. It projects the full state space (W, E) onto a single axis.
- The excluded dimension E is causally coupled to the target W. Optimizing the proxy W without monitoring E eventually destroys the correlation that made W a good proxy.
- The collapse follows the variety gap logic: **G = dim(R) − dim(V) = 2 − 1 = 1 > 0**. The gap grows as E deteriorates, and when the coupling feeds back, the system’s own optimization logic created the crisis it could not foresee.

The same mechanism underlies the country‑level failures described in Part V: each case is a higher‑dimensional version of this basic loop.

### C.6 Reproducibility

The Python script that generates the simulation and the visualisation is available in the companion repository (see “Simulation Code” in the supplementary materials). The script uses standard NumPy and Matplotlib; no proprietary packages are required.

**Figure C.1: Value-function collapse in a minimal two-state system**

![Figure C.1](/working-papers/images/the-variety-gap/appendix-c-simulation.png)

The 1D controller (observing only W) initially succeeds, driving wealth to ~1000 by aggressive investment. This depletes environmental integrity E to near-zero. Once E collapses, productivity (α·E·I) vanishes and the system enters terminal decline—W falls to zero despite continued control effort. The controller cannot perceive the environmental degradation that caused its own failure; the excluded dimension returns as inexplicable collapse.

The 2D controller (observing both W and E) moderates investment when E declines, maintaining both variables at degraded but stable levels (W≈37, E≈11). The system never reaches the 1D target of W=120, but it survives.

The phase portrait (bottom left) shows the trajectories in state space: 1D spirals to system death at the origin, while 2D finds a low-equilibrium attractor. The critical finding (top right): even measured by the 1D objective function (W alone), the 2D architecture outperforms after t≈100. The GDP-only system optimizes away its own ability to generate GDP.

This is the Goodhart-Ashby synthesis in its simplest form: a value architecture with dim(V)=1 cannot maintain stability in a system with dim(R)=2 when the dimensions are causally coupled. The hysteresis mechanism (degraded ecosystems regenerate at 20% normal rate) reflects ecological reality and ensures the differentiation is permanent, not transient.

