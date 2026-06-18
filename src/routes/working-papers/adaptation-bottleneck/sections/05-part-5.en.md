# Part V — Simulation

## 5.0 Purpose and Conventions

The simulations below do not test the theory against the world; they confirm that the formal claims of Part II hold in a working model and exhibit the two quantities that Part II declined to assert in closed form — the shape of the optimal allocation (§2.2) and the functional dependence of throughput on closure delay (§2.5). They establish internal consistency, not empirical adequacy. All four are deterministic given the seed (20260618) and run from a single self-contained script; the conversion efficiencies are fixed at \(\rho_{SL}=0.6\) and \(\rho_{LE}=0.5\) throughout. These values are illustrative. The bottleneck theorem requires only that both efficiencies lie below one; their magnitudes set the severity of a bottleneck, not its existence, and no result below depends on the particular numbers chosen.

## 5.1 Simulation A — The Allocation Optimum

The first simulation confirms the corollary of §2.2: under a hypothetical fixed total capacity, effective throughput is maximised by equalising the *efficiency-scaled* stage rates rather than by equal effort. With a total capacity \(R=1\) distributed across the three stages, a grid search over the allocation simplex locates the maximum of \(T_{\text{eff}}=\min(\rho_{SL}\rho_{LE}\,r_S,\ \rho_{LE}\,r_L,\ r_E)\) at \((r_S, r_L, r_E)=(0.526,\,0.316,\,0.158)\), matching to three decimal places the analytic balance point at which all three scaled rates coincide. The throughput there is \(T_{\text{eff}}=0.158\). An equal-effort allocation — a third of the total to each stage — yields \(T_{\text{eff}}=0.100\): the balanced allocation delivers fifty-eight per cent more adaptive throughput from the same total, with no stage doing more work, only the work distributed to match the loop. The zero-marginal-return property is confirmed directly: starting from an execution-binding allocation and adding a further fifth of the total to the non-binding sensing stage moves \(T_{\text{eff}}\) by exactly zero. **[R within the model.]** Capacity poured into a stage that is not the bottleneck does not accelerate adaptation; it is, in the dynamic terms of §2.2, converted to backlog rather than to throughput.

![Figure xv_A_allocation](/working-papers/images/adaptation-bottleneck/xv_A_allocation.png)

*(Figure: `xv_A_allocation.png` — throughput along a one-dimensional slice through the optimum, with the balanced maximum and the lower equal-effort point marked.)*

## 5.2 Simulation B — The Three Backlogs

The second simulation runs the loop as an explicit queue model and confirms that each rate mismatch grows exactly one backlog while the others remain bounded. Three regimes were run. When sensing outruns learning (\(r_S=0.60,\,r_L=0.10\)), the information backlog \(B_I\) grows linearly at 0.26 per step while \(B_N\) and \(B_R\) stay at zero. When learning outruns execution (\(r_L=0.50,\,r_E=0.05\)), the innovation backlog \(B_N\) grows at 0.13 per step and the others stay flat. When world-change outruns re-observation, the reality backlog \(B_R\) grows at 0.17 per step alone. **[R within the model.]** The three failure signatures of Part III are thus separable: each is the accumulation behind one specific leg, and a system can be diagnosed by which of its backlogs is growing.

The third regime required a detail that is itself a result worth recording. In the model, world-change from the controller's own execution is \(g\cdot\tilde r_E\), where \(g\) represents the amplification of an action's consequences beyond its immediate footprint — leverage, in the financial register of §1.1. With no amplification (\(g=1\)) and no exogenous disturbance, the reality backlog cannot grow at all, because the loop's own execution rate is bounded by \(\tilde r_E \le \rho_{SL}\rho_{LE}\,r_S = 0.30\,r_S < r_S\): a system's unamplified action can never outrun its own sensing, since the conversion losses guarantee that less reaches the world than the sensing stage took in. The reality backlog therefore has exactly three drivers, and raw busyness is not among them: a fast-changing world (large exogenous \(d\)), action whose consequences are amplified beyond their footprint (\(g>1\)), or — the case Simulation D isolates — sensing capacity diverted onto one target while the consequences of action accrue unobserved elsewhere. This sharpens the "execute less" remedy of §2.1: throttling execution relieves a reality backlog only to the extent that execution, through amplification, is what is outrunning re-observation; against a fast-changing world it does nothing, and only sensing capacity or a narrower boundary will serve.

![Figure xv_B_backlogs](/working-papers/images/adaptation-bottleneck/xv_B_backlogs.png)

*(Figure: `xv_B_backlogs.png` — three panels, one per regime, each showing a single backlog growing.)*

## 5.3 Simulation C — The Recursion Pulls Throughput Below the Minimum

The third simulation establishes the recursion-specific result that §2.5 deferred. The raw stage-limited throughput of the loop — the rate at which an *open*, feedforward pipeline with these rates would deliver adaptation — is \(T_{\text{raw}}=0.158\), the binding scaled rate from Simulation A. But the loop is not open: a corrective cycle cannot be fully informed until the previous execution's effects have been re-observed, a delay \(\tau\) later. Sweeping the closure delay and measuring the rate at which completed adaptive cycles accrue, the simulated rate falls below \(T_{\text{raw}}\) and matches the closed form

\[
T_{\text{eff}}^{\,\text{rec}} = \frac{T_{\text{raw}}}{1 + \tau\,T_{\text{raw}}}
\]

to within machine precision (maximum residual \(\sim 3\times10^{-17}\) over \(\tau\in[0,12]\)). **[R within the model.]** The form was recovered from the loop, not assumed: it is what one obtains when each cycle costs a processing time \(1/T_{\text{raw}}\) at the bottleneck plus a delay \(\tau\) at the closure, so that the completion rate is \(1/(1/T_{\text{raw}}+\tau)\). The throughput halves when \(\tau = 1/T_{\text{raw}}\) — when the re-observation delay equals the bottleneck's own cycle time. This confirms the qualitative expectation of §2.5 with a specific dependence, and it gives the recursion its quantitative content: a governance loop with an able pipeline but a slow closure — a system that acts competently but re-observes the consequences of its action only after long delay — adapts at a rate strictly below what its stage capacities alone would suggest, and the shortfall is set entirely by the closure delay.

![Figure xv_C_closure_delay](/working-papers/images/adaptation-bottleneck/xv_C_closure_delay.png)

*(Figure: `xv_C_closure_delay.png` — measured rate against \(\tau\), with the closed form and the raw minimum overlaid.)*

## 5.4 Simulation D — Effective and Self-Blinding

The fourth simulation isolates the case §2.4 named: a system in which execution is the binding stage but the loop still adapts faster than the environment drifts, so that the system tracks the component it re-observes while accumulating a reality backlog from the consequences it does not. The controller tracks a target drifting at \(r_{\text{env}}=0.02\), and on that re-observed component it holds a steady tracking error of 0.020 — flat across the run, the picture of a system performing to specification. Meanwhile its own execution generates consequences at a rate its saturated sensing cannot capture, and the reality backlog \(B_R\) climbs linearly to 12.0 over six hundred steps, a growth of 0.020 per step that the tracking metric never registers. **[R within the model]** for the dynamics; **[IP]** for the institutional reading. The two curves are the formal portrait of a system that is simultaneously effective and self-blinding: every measure it runs reports health, because every measure it runs is built on the component it still observes, while the gap between the world it is making and the world it is modelling grows unread. This is the structural kin of Self II's perceived-versus-true legitimacy gap, in which perceived self-trust holds steady while the true state it conceals erodes beneath it; here the concealment requires no self-deception, only a sensing capacity spent 
entirely on the target and none left for the wake.

![Figure xv_D_self_blinding](/working-papers/images/adaptation-bottleneck/xv_D_self_blinding.png)

*(Figure: `xv_D_self_blinding.png` — flat tracking error on one axis, linearly growing reality backlog on the other.)*

## 5.5 What the Simulations Do and Do Not Establish

The simulations establish that the bottleneck theorem, the three separable backlogs, the closure-delay law, and the effective-but-self-blinding regime are internally consistent and behave as Part II describes; the two quantities Part II left to simulation — the balanced-allocation optimum and the form \(T_{\text{raw}}/(1+\tau T_{\text{raw}})\) — are now in hand. They establish nothing about any real governance system. The rates, the conversion efficiencies, the amplification factor, and the drift and delay parameters are stipulated, not measured; §2.4's admission stands, that no field instrument is offered for any of them. What the simulations confirm is that the formal grammar is coherent and that its central claims are not artefacts of a particular reading — that a system allocating capacity by equal effort leaves throughput on the table, that the three backlogs are diagnosable separately, that a slow closure depresses adaptation below the stage minimum, and that a system can pass every test it sets itself while losing contact with what its actions are doing. Whether any institution exhibits these signatures, and at what rates, is the work of the empirical phase, not of this paper.

*(Simulation script: `gae-simulator-v17-adaptation-bottleneck.py`, seed 20260618.)*

---
