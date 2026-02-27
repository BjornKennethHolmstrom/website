# Part V: Limitations

## The disturbance timescales are illustrative

The three disturbance periods chosen — 30, 45, and 120 time steps — are selected to produce clear analytical separation between the frequency bands. They are not derived from empirical measurement of actual governance disturbance frequencies. Real governance systems face disturbances with messier, overlapping, and context-dependent timescales.

The gap between a fast crisis (days) and a slow secular trend (decades) in real governance is far larger than the ratio of periods in this simulation. This means the frequency separation is actually more pronounced in practice than the model suggests — which strengthens the core argument — but it also means the specific controller parameters used here cannot be directly applied to real institutional design without empirical calibration. Appendix C provides a reference table of estimated real-world disturbance timescales for governance contexts.

## The three-scale model undercounts real governance layers

The simulation uses three scales: local, regional, and global. Real governance systems contain more gradations: individual, household, neighborhood, municipality, county, region, nation-state, continental bloc, global institution. The control-theoretic logic generalizes to any number of layers, but the optimal number of layers for a given system depends on the actual frequency spectrum of its disturbance environment — which is an empirical question the model does not address.

The three-scale model is the minimal demonstration of the principle. It shows that single-scale architectures leave frequency gaps and that multi-scale architectures close them. It does not prescribe the correct number of governance scales for any specific context.

## The layers have clean frequency separation; real systems do not

The model assumes that each disturbance type operates within a well-defined frequency band, allowing clean layer assignment. Real disturbances are correlated across scales. The 2008 financial crisis began as a fast local shock in the US mortgage market, propagated through medium-term credit mechanisms, and produced slow-moving long-term effects on debt structures and institutional trust. It was simultaneously a fast, medium, and slow disturbance.

When disturbances are correlated across scales, the layer assignment problem becomes non-trivial. A disturbance that enters the fast band but cascades into the slow band requires coordinated response across layers — which the fractal architecture supports, but which the model does not explicitly demonstrate. The cross-scale cascade scenario is a significant extension warranted by future work.

## The model is linear and time-invariant

As in paper one, the state transition equation is linear and the parameters are fixed throughout the simulation. Real governance systems exhibit nonlinear dynamics — threshold effects, hysteresis, path dependence — and their parameters change over time as institutions adapt. The fractal architecture result holds in the linear regime near equilibrium; its robustness under strongly nonlinear conditions is not demonstrated here.

Of particular concern for the fractal architecture specifically: the gain values at each layer are calibrated for stable operation near the equilibrium x_ref = 100. Under large shocks that drive the system far from equilibrium, the linear gain relationships may not hold, and interactions between layers may produce emergent dynamics not captured by the additive model. This is the principal area where nonlinear extension would most change the results.

## Equal actuator effectiveness is a simplifying assumption

Setting B = 1.0 for all three layers ensures that performance differences are attributable to architecture alone. In reality, governance actuators at different scales have different effectiveness: local emergency response may be highly effective for its specific disturbance type, while global monetary policy instruments are blunt by necessity. The equal-actuator assumption understates the case for local control (which typically has higher actuator precision) and overstates the case for global control (which typically has lower). Differential actuator modelling would strengthen the fractal architecture result further, but at the cost of introducing additional parameters that require empirical justification.

## The regional layer boundaries are fixed

In the simulation, nodes 0–4 and nodes 5–9 constitute fixed regions throughout. Real governance regions are not fixed: the appropriate regional grouping for managing a health crisis may differ from the appropriate grouping for managing an economic pressure or an environmental disturbance. Adaptive regional boundaries — where the regional layer's scope reconfigures in response to the spatial distribution of the current disturbance — are not modelled. This is a meaningful extension, as one of the genuine advantages of fractal governance over fixed administrative hierarchy is the potential for variable-geometry coordination at intermediate scales.

## The model does not capture democratic legitimacy

The performance metrics — deficit, variance, control effort — are purely stability-theoretic. They do not address questions of democratic legitimacy, accountability, or consent. A governance architecture that is stability-optimal in this framework could be deeply illegitimate if its institutions are not accountable to the populations they govern.

This is the correct scope for a technical paper, but it is worth stating clearly: the engineering argument demonstrates that fractal architecture is stability-optimal, not that any particular fractal governance arrangement is legitimate. The normative questions — who governs, with what mandate, subject to what accountability — remain irreducibly political. The engineering argument is a constraint on the solution space, not a solution.
