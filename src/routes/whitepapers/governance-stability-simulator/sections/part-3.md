# Part III: The simulation

## Scenario design

The simulator models a network of ten coupled nodes — representing any collection of governance units at the same scale: municipalities, regions, provinces, or member states. Each node has a true stability state `x_i(t)` representing its condition at time `t`, initialized at equilibrium.

At time step 20, a localized shock strikes two nodes (nodes 2 and 7). The remaining eight nodes are undisturbed. This is the canonical scenario for testing subsidiarity: a crisis that is real and severe at specific locations, but absent elsewhere.

Two governance architectures are then compared under identical shock conditions.

## Architecture A: centralized control

In Architecture A, all ten nodes report upward to a central controller. The controller observes a **national mean** — the average condition across all ten nodes — and applies a uniform intervention to the entire network.

The structural consequences follow directly from the primitives:

- **Latency** `τ_A = 12`: the signal must travel up through reporting layers, be processed centrally, and a policy response must travel back down and be implemented. Twelve time steps of dead-time.
- **Signal noise** `σ_A = 6.0`: aggregating ten local signals into a national mean destroys spatial information. The central controller cannot distinguish a severe local crisis from a mild system-wide fluctuation. A shock of magnitude −45 at two nodes appears, from the center, as a modest dip in the national average.
- **Gain ceiling** `K_A = 0.30`: with latency of 12, the stability ceiling constrains the controller to weak responses. Attempting to increase gain beyond this causes oscillation.

The controller's response is therefore simultaneously under-powered for the crisis nodes and broadcast uniformly across nodes that need no intervention at all.

## Architecture B: distributed / fractal control

In Architecture B, each node observes its own condition directly and applies its own corrective intervention. A lateral coordination layer shares information across nodes, but decision authority and response capacity sit locally.

- **Latency** `τ_B = 2`: local controllers act within days rather than years. The dead-time is the minimum required for local observation and response.
- **Signal noise** `σ_B = 0.5`: local controllers observe local conditions with high fidelity. No aggregation loss. The crisis nodes see exactly how severe their situation is.
- **Gain** `K_B = 0.45`: the lower latency permits a stronger response while remaining within the stability ceiling. Note that this is still a constrained value — the ceiling exists in distributed systems too, and ignoring it produces instability regardless of architecture (see the limitations section).

## Simulation output

The simulator produces four visualizations from a single run:

**Heatmaps (node × time):** The most diagnostic output. Architecture A shows the crisis spreading and persisting across the network as the delayed, uniform response fails to contain it and disrupts healthy nodes. Architecture B shows the crisis contained to nodes 2 and 7, with the remaining nodes unaffected throughout.

**Node traces:** Individual stability trajectories for crisis and healthy nodes. In Architecture A, healthy nodes exhibit significant disruption from the uniform policy — they receive an intervention calibrated to a national mean that includes their stable condition alongside the crisis, producing an over-correction. In Architecture B, healthy node traces are nearly flat throughout the crisis period.

**Cumulative deficit bar chart:** The integral of stability loss below the equilibrium target, per node, across the full simulation. This captures both the depth and duration of the deficit. Architecture A produces substantial deficits at non-crisis nodes as collateral damage from the uniform response. Architecture B concentrates deficit at the crisis nodes, with minimal collateral impact elsewhere.

**Control signal (crisis node):** Architecture A's controller responds to the diluted national mean — a weak signal that substantially underestimates the local severity. Architecture B's controller responds to the local state directly, applying a proportionate intervention immediately.

![Simulation output showing four panels: heatmaps comparing node stability over time for both architectures, individual node traces for crisis and healthy nodes, cumulative deficit per node, and control signal comparison for a crisis node.](/whitepapers/images/governance-simulator/governance-simulator-v3.png)

*Figure 1: GGF Governance Simulator v3 output. Top row: stability heatmaps for Architecture A (centralized) and Architecture B (fractal/distributed), showing node conditions over 120 time steps. Crisis nodes 2 and 7 are marked. Middle row: individual node traces, showing collateral disruption to healthy nodes under Architecture A and isolation of the crisis under Architecture B. Bottom left: cumulative stability deficit per node. Bottom right: control signal for crisis node 2, showing Architecture A responding to a diluted national mean while Architecture B responds to the true local state.*

## The averaging problem

The central structural finding is what might be called the averaging problem. When a centralized controller aggregates local signals into a single mean, two things happen simultaneously:

First, the severity of localized crises is systematically underestimated. A shock of −45 at two of ten nodes appears as a deviation of approximately −9 from the national mean. The controller responds to the −9, not the −45.

Second, the uniform response applies an intervention sized for −9 across all ten nodes. For the eight healthy nodes, this is an unsolicited disruption. For the two crisis nodes, it is an intervention five times weaker than the actual disturbance requires.

The averaging problem is not a failure of the central controller's competence or resources. It is a consequence of the architecture. Spatial information — *where* the problem is — is destroyed by aggregation. No improvement to the quality of central decision-making recovers that lost information, because the information was discarded before it arrived.

Subsidiarity — the principle that decisions should be made at the lowest level capable of handling them — is, in control-theoretic terms, the prescription that follows directly from the averaging problem. It is an engineering requirement before it is a political preference.
