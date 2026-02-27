# Part III: The simulation

## Scenario design

The simulator models a network of ten nodes subject to three simultaneous disturbance types, each representing a different frequency band. The network is divided into two regions of five nodes each (nodes 0–4 and nodes 5–9) for the purposes of regional control. All parameters are held constant across architectures; performance differences are architectural.

**Fast disturbances:** An impulse of magnitude −35 strikes nodes 2 and 7 every 30 time steps, beginning at t = 20. These represent recurring local crises — acute, severe, spatially specific, and time-bounded. Frequency: 1/30 ≈ 0.033 cycles/step.

**Medium disturbances:** A sinusoidal pressure of amplitude ±12 is applied continuously to region 0 (nodes 0–4), with period 45. This represents sustained regional economic or demographic pressure — not catastrophic, but persistent and directional. Frequency: 1/45 ≈ 0.022 cycles/step.

**Slow disturbances:** A sinusoidal drift of amplitude ±8 is applied to the entire system with period 120, approximately matching the simulation length. This represents secular system-wide trends — slow enough that their direction is not obvious from local observation at any given moment. Frequency: 1/120 ≈ 0.008 cycles/step.

The three disturbance frequencies are deliberately chosen to fall within, at the boundary of, and outside the controllable range of each architecture, as shown in the frequency coverage diagram.

## The three architectures

**Architecture A — centralized control** (τ = 12, σ = 5.0, K = 0.07): a single controller observes the system-wide mean with significant noise and applies a uniform response broadcast to all ten nodes. Latency of 12 places f_max at 0.042 — above the slow disturbance frequency but below the medium and fast frequencies. The controller cannot respond to medium or fast disturbances within their cycles.

**Architecture B — local only** (τ = 2, σ = 0.5, K = 0.40): each node observes itself with high fidelity and applies its own correction. Latency of 2 gives f_max = 0.250, covering all three disturbance frequencies in principle. The structural problem is with the slow band: the local controller cannot distinguish slow drift from a baseline shift and applies high-gain corrections to a trend that requires patience, producing persistent oscillation.

**Architecture C — fractal** (τ_l = 2, τ_r = 6, τ_g = 12; σ_l = 0.5, σ_r = 2.0, σ_g = 5.0; K_l = 0.40, K_r = 0.15, K_g = 0.07): all three layers active simultaneously. The local layer handles fast shocks with high fidelity. The regional layer tracks medium pressure. The global layer follows slow drift with appropriate patience. The layers are additive: each contributes its corrective signal within its natural band, without interfering with the others.

All architectures use B = 1.0 (equal actuator effectiveness). Architecture C applies more total control effort due to three active layers, but this is a governance cost worth measuring explicitly.

## Simulation output

![Simulation output: four rows of panels showing heatmaps, mean stability trace, representative node traces, and bottom-row metrics including deficit bars, control effort bars, and frequency coverage diagram.](/whitepapers/images/fractality-as-stability/ggf-simulator-v4.png)

*Figure 1: GGF Governance Simulator v4 output. Top row: stability heatmaps for all three architectures (node × time, RdYlGn colormap, purple dotted lines mark fast shock events). Second row: system mean stability trace — Architecture A's dramatic oscillation is attributable to high-gain corrections on an already-delayed and noise-corrupted signal. Third row: representative node traces for Node 2 (fast shock target), Node 5 (medium pressure target), and Node 0 (slow drift only), demonstrating each architecture's characteristic failure mode. Bottom row: cumulative deficit per node, total control effort per node, and frequency coverage diagram showing the f_max = 1/(2τ) ceiling against actual disturbance frequencies.*

## Reading the results

**Architecture A's collapse is counterintuitive and important.** With equal actuator effectiveness, the central controller is not handicapped by resource constraints. Its collapse — a stability standard deviation of 78.76 versus 20.05 for local-only and 16.52 for fractal — is attributable to its responding forcefully to a noise-corrupted, 12-step-delayed mean signal. When fast shocks arrive at nodes 2 and 7, the national mean registers a modest dip. The controller's delayed, uniform, nationally-scaled response arrives after the shock has partially resolved and applies it across all ten nodes, including eight that needed no intervention. The pattern repeats at every fast shock event, compounding across the simulation. The same controller that is too weak for local crises is simultaneously too disruptive for nodes that were stable.

**Architecture B's oscillation on the slow band is the predicted failure mode.** Node 0, which receives no fast shocks and sits in the low-medium-pressure region, should theoretically be the easiest node for Architecture B to manage. Instead, it exhibits persistent oscillation driven by the slow system-wide drift. The local controller's high gain keeps it in constant motion around a target that is itself slowly moving. This is the lower-boundary failure: too fast and too strong for the long-period disturbance it cannot resolve.

**Architecture C's regional layer is the critical differentiator.** The fractal architecture's advantage over local-only is concentrated in the medium and slow bands. For fast shocks (Node 2), Architecture B and C perform comparably. For medium pressure (Node 5) and slow drift (Node 0), Architecture C's regional and global layers provide the patience and spatial averaging that the local layer structurally cannot.

## Quantitative summary

| Metric | Architecture A | Architecture B | Architecture C |
|---|---|---|---|
| Total cumulative deficit | 53,432 | 13,772 | **11,170** |
| Mean node stability | 89.6 | 96.9 | **97.6** |
| Stability std deviation | 78.76 | 20.05 | **16.52** |
| Total control effort | 3,593 | 9,181 | 10,263 |

Architecture C achieves the lowest deficit and lowest variance at the cost of modestly higher total control effort — approximately 12% more effort than local-only for a 19% reduction in deficit. The effort difference reflects the three active control layers applying simultaneous signals; in governance terms, this corresponds to the overhead of maintaining regional and global coordination infrastructure alongside local response capacity.

The cost-benefit ratio is most visible in the deficit bar chart: Architecture C's advantage is not uniform. It is concentrated at nodes subject to medium and slow disturbances (the region 0 nodes and the nodes adjacent to fast-shock targets). At nodes primarily subject to fast shocks, Architecture B approaches C's performance. This is consistent with the frequency-gap theorem: each architecture performs well within its natural band and fails at the boundaries.

## The frequency coverage diagram

The bottom-right panel of Figure 1 makes the structural argument visually explicit. Vertical lines mark the three actual disturbance frequencies against horizontal bars showing each architecture's f_max coverage.

Architecture A's bar ends well before the medium and fast disturbance frequencies — both fall outside its controllable range. Architecture B's bar extends past all three frequencies, but this overstates its capability in the slow band, where its high gain produces the oscillation described above. Architecture C's three-layer bar shows the bands explicitly: local covers the fast range, regional covers the medium range, global covers the slow range, and together they span the full disturbance spectrum with appropriate gain at each layer.

No single bar in the diagram covers the full spectrum with appropriate gain at all frequencies. The fractal architecture is the only configuration that matches controller properties to disturbance properties across all three bands simultaneously.
