# Part V: Limitations

A simulation that does not state its limitations is an argument in disguise. The following limitations are inherent to the current model and should inform how its findings are interpreted and applied.

## The parameters are illustrative, not empirical

The specific values used in the simulation — latency of 12 versus 2, noise of 6.0 versus 0.5, a shock of magnitude 45 — are chosen to produce legible structural contrasts, not to represent measured properties of any real governance system. The qualitative findings (that high latency caps responsiveness, that aggregation destroys spatial information, that coupling amplifies unresolved crises) are robust to parameter variation. The specific quantitative outputs — recovery times, deficit integrals, performance ratios — are artifacts of the chosen parameters and should not be cited as empirical measurements.

Grounding this framework in real governance data would require empirical work: measuring actual latency distributions across governance layers, estimating information loss across reporting hierarchies, and calibrating coupling parameters from historical crisis propagation data. That work is outside the scope of this paper but represents a natural and important extension.

## The model is linear

The state transition equation `x(t+1) = A·x(t) + B·u(t−τ) + d(t)` is a linear time-invariant model. Real governance systems are nonlinear. Stability thresholds are not smooth — systems often appear stable until they cross a critical point and then fail rapidly. Feedback gains are not fixed — institutions adapt their response strategies over time. The interaction between crisis severity and response capacity is not multiplicative in the simple way the model assumes.

Linear models are the correct starting point: they are analytically tractable, their properties are well understood, and they capture the first-order behavior that dominates in the regime near equilibrium. But governance crises often involve precisely the nonlinear dynamics that linear models cannot represent — cascading failures, tipping points, hysteresis. Extensions to nonlinear dynamics are a significant research direction.

## Nodes are treated as homogeneous

In the current model, all ten nodes have the same dynamics, the same processing capacity, and the same coupling strength to their neighbors. Real governance units are heterogeneous in all these dimensions: a dense urban node has different dynamics than a dispersed rural one; a well-resourced municipality has different response capacity than an underfunded one; geographic and economic proximity creates asymmetric coupling.

Heterogeneous network models would produce richer and more realistic dynamics. They would also allow exploration of how inequality in node capacity interacts with governance architecture — a question of significant practical importance.

## The model has a single disturbance type

The simulation uses a single instantaneous shock to two nodes. Real governance environments involve continuous, overlapping, correlated disturbances of varying severity and spatial extent. Some crises are truly localized; others are system-wide. Some are sudden; others accumulate slowly. Some are correlated across nodes; others are independent.

The localized shock scenario is chosen because it isolates the averaging problem most cleanly. It is not representative of the full range of challenges governance systems face. In particular, the model does not address scenarios where centralized coordination provides genuine advantages — such as when a disturbance is truly system-wide and requires coordinated response across all nodes simultaneously.

## The model does not capture learning or adaptation

Architecture A's controller uses fixed parameters throughout the simulation. Real institutions adapt: they update their models, reform their procedures, and improve their information systems over time. An important question the current model cannot address is whether high-latency, low-fidelity architectures can compensate for their structural disadvantages through institutional learning — and at what rate.

The adaptive controller extension (where gain adjusts dynamically based on observed performance) is a natural next development and would allow the simulator to address questions about institutional learning trajectories.

## The comparison is between two idealized architectures

Architecture A and Architecture B represent extreme points in a continuous design space. Real governance systems are hybrids: partially centralized, partially distributed, with varying latency and fidelity at different layers. The simulation demonstrates the structural logic at the extremes; it does not map the intermediate space where most real institutional design decisions are made.

This is a deliberate choice for clarity, not a claim that real systems are binary. The practical question is always about the direction of movement — whether a given reform increases or decreases effective latency, improves or degrades signal fidelity — rather than about achieving an idealized architecture.

## What the simulator is not

The simulator is not a predictive model of any specific governance system. It does not take real-world data as input and produce forecasts. It does not prove that any particular institutional arrangement is superior in any particular context. It does not generate policy recommendations.

It is an analytical tool for understanding structural relationships. Its value is in making abstract principles — latency constraints, signal fidelity, the averaging problem — concrete and visualizable. The conclusions it supports are conclusions about structure, not about policy.
