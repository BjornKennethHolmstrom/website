# Part IV: Structural observations

The simulation produces several observations that hold across parameter variations and are grounded in established control theory. They are presented here as structural findings, not policy conclusions.

## Latency is the primary determinant of maximum responsiveness

The relationship between latency and the gain ceiling is the most consequential finding for governance design. It means that the speed of a governance system's response is not primarily a function of political will, institutional quality, or available resources. It is a function of the time required for information to travel from where a problem exists to where a decision is made, and for a response to travel back.

This places a hard limit on what centralized governance can achieve in high-latency environments, regardless of its other qualities. A system with twelve time steps of latency cannot match the crisis response of a system with two time steps of latency, even if every other parameter is identical. The physics of feedback do not make exceptions for institutional seniority or formal authority.

## Signal fidelity determines whether the system is responding to reality

A controller with low signal fidelity is, in a precise sense, governing a fiction — a distorted representation of the world constructed from noisy, aggregated, selectively filtered signals. The interventions it produces are calibrated to that fiction. When the fiction diverges significantly from reality, the interventions are systematically miscalibrated.

Signal fidelity degrades predictably with the distance between where a condition exists and where it is observed. It degrades with each aggregation step that discards local information in favor of summary statistics. It degrades with each reporting layer that introduces motivated distortion or bureaucratic simplification. And it degrades with time: the longer a signal takes to travel, the more the underlying reality may have changed by the time it arrives.

## Collateral disruption is structural, not incidental

In the simulation, healthy nodes suffer significant stability deficits under Architecture A despite experiencing no shock themselves. This collateral disruption is not a modelling artifact. It reflects the structural consequence of applying uniform interventions to a heterogeneous system.

Any governance system that responds to averaged signals with uniform policies will produce interventions that are simultaneously too weak for the places that need them and too strong for the places that do not. The collateral cost is not a side effect that better calibration can eliminate. It is a direct consequence of the information loss from aggregation.

## Coupling amplifies the cost of delayed response

The simulator includes a coupling term that models contagion — the tendency of instability at one node to propagate to neighboring nodes over time. Under Architecture A's longer latency, the crisis at nodes 2 and 7 has time to bleed into adjacent nodes before the response arrives. Under Architecture B's shorter latency, the crisis is contained before contagion has time to develop.

This means the performance gap between architectures is not fixed — it grows with crisis severity and duration. The longer a response takes, the larger the network that becomes affected, and the more difficult the recovery problem becomes. High-latency architectures face compounding costs that low-latency architectures avoid entirely.

## The distributed gain ceiling is real

A finding that deserves explicit emphasis: Architecture B is not immune to stability constraints. Distributed systems with too-aggressive local controllers will oscillate and destabilize, as demonstrated during the development of this simulator. The gain ceiling applies to every feedback system regardless of its topology.

What changes under distributed architecture is not the existence of the ceiling, but its height. Lower latency permits a higher ceiling, which permits more aggressive responses. But the ceiling must still be respected. This has an important governance implication: local autonomy without coordination protocols can produce its own instability. The benefit of distributed architecture is only realized when local controllers operate within bounds established by a shared coordination layer — which is precisely the role of protocol-level governance as distinct from directive governance.

## Performance differences are quantifiable

The simulation produces objective performance metrics: recovery time per node, cumulative stability deficit, and collateral deficit at non-crisis nodes. These are not rhetorical claims. They are numbers produced by running the model under specified parameters.

This quantifiability is the key property that distinguishes the engineering framing from the political framing. It becomes possible to ask not "which architecture is better in principle" but "what is the measured performance difference under these conditions, and how does it change as parameters vary." The answer will depend on the specific parameters chosen — which is why the limitations section addresses parameter selection carefully.
