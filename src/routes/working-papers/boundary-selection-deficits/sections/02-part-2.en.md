# Part II — Formal Framework

| Decision  | Question          | Paper |
| --------- | ----------------- | ----- |
| Scale     | Which timescale?  | II    |
| Value     | Which dimensions? | VI    |
| Boundary  | Which system?     | XII   |

## 2.1 Real and Modeled Dynamics

Let the true system be described by a state vector **x**(t) ∈ ℝⁿ that captures every variable relevant to the outcomes the controller cares about. This is the *real plant*. Its dynamics are:

**ẋ**(t) = **f**(**x**(t), **u**(t), **w**(t))

where **u**(t) is the control input available to a given governance actor, **w**(t) represents genuinely exogenous disturbances (process noise, environmental shocks), and **f** encodes the full coupling structure — including all cross-boundary flows, feedbacks, and interdependencies that link the controller's jurisdiction to the rest of the system.

The controller, however, does not govern the real plant. It governs a *modeled plant* — the subset of the real plant that falls within its jurisdictional boundary. Formally, the controller's internal model operates on a projected state vector **x̂**(t) ∈ ℝᵐ, where m < n and the projection **P** : ℝⁿ → ℝᵐ discards all states outside the controller's authority perimeter. The controller's model of the system dynamics is:

**ẋ̂**(t) = **f̂**(**x̂**(t), **u**(t), 0)

The critical difference lies in three features of this equation. First, **f̂** is not **f**: it excludes the coupling terms that connect the jurisdiction to the external world. Second, the external disturbance **w**(t) is set to zero — not because the controller believes the world is noiseless, but because the controller's model treats cross-boundary inflows as exogenous noise rather than as structured feedback. Third, the controller's actuation is assumed to affect only **x̂**, while in reality it may generate spillovers that propagate through the full state **x** and return later as disturbances.

The *unmodeled dynamics* are the difference between the real and modeled systems:

**Δ**(**x**, **u**, t) = **f**(**x**(t), **u**(t), **w**(t)) − **f̂**(**Px**(t), **u**(t), 0)

This **Δ** term is not merely a residual. It is the structured mismatch between what the controller thinks it is governing and what it is actually governing. When **Δ** is small relative to the controller's stabilization capacity, the modeled plant is an adequate approximation; the controller can treat the mismatch as noise, buffer against it, and maintain stability. When **Δ** is large — specifically, when cross-boundary couplings dominate the variance of outcomes within the jurisdiction — the controller is systematically miscalibrated. Its interventions are optimized for **f̂** but executed in **f**, and the difference compounds.

The governance interpretation is direct. A national health ministry models its pandemic response on the assumption that the relevant system is the national population. The real plant includes international travel networks, foreign vaccine supply chains, and variant evolution abroad — all of which feed back into national outcomes through channels the national model excludes. A central bank models its inflation dynamics on domestic output gaps and interest rates. The real plant includes global supply chains, foreign monetary policy spillovers, and commodity price dynamics set in markets the central bank cannot influence. In each case, the controller is competent, well-resourced, and acting in good faith. The failure is not in the controller. It is in the boundary between **x** and **x̂**.

## 2.2 The M-Δ Configuration

To analyze when boundary mismatch destabilizes a controller, we need more than a generic error term. Robust control theory provides a precise framework: the M-Δ configuration, in which unmodeled dynamics are represented not as an additive disturbance but as a *feedback interconnection*.

The structure is as follows. The nominal system — the controller's model of its jurisdiction — is denoted **M**. It receives two inputs: the control signal **u** from the controller, and an inflow signal **w_in** from the external world. It produces two outputs: the regulated outcomes **y** (which the controller monitors and attempts to stabilize) and an outflow signal **y_out** — the spillovers that the jurisdiction exports to the external world.

The external world is represented by **Δ**, the unmodeled dynamics block. **Δ** receives **y_out** (the jurisdiction's spillovers) and produces **w_in** (the inflows that return to the jurisdiction). The loop closes:

**Jurisdiction (M) → Spillovers (y_out) → External World (Δ) → Inflows (w_in) → Jurisdiction (M)**

This is not a one-way leakage. It is a feedback loop. The controller's own actions, transmitted through the jurisdiction, generate spillovers that propagate through the external world and return — possibly amplified, possibly with a phase delay, possibly in a different form — as disturbances that the controller's model treats as exogenous. The controller responds to those disturbances with further interventions, which generate further spillovers, and the loop continues.

The Small-Gain Theorem provides the stability condition for this interconnection. If both **M** and **Δ** are stable systems, the interconnected system remains stable provided:

‖**M**‖ · ‖**Δ**‖ < 1

where ‖·‖ denotes the system gain — the maximum factor by which the system can amplify an input signal. If the product of the gains exceeds unity, the loop can become unstable, even if each component is internally stable.

The governance reading: ‖**M**‖ is the sensitivity of the jurisdiction's spillover output to disturbances and control actions — roughly, how strongly events within the jurisdiction propagate outward. ‖**Δ**‖ is the gain of the external world — how strongly spillovers are processed and returned as disturbances. Their product measures the total loop gain around the boundary. When it exceeds unity, the controller's own stabilization efforts can drive the coupled system into oscillation or divergence, because the controller is acting on a plant whose feedback structure it does not model.

This is the mechanism behind the counterintuitive finding in Paper IV — that state management of a commons can perform worse than open access when observation latency is high. The controller authorizes extraction based on a delayed aggregate signal; the extraction depletes the resource; the depletion is not observed until the next delayed aggregate arrives; the next quota is set too high for the now-diminished stock. The loop oscillates not because of external shocks but because the controller's own actions, processed through the unmodeled resource dynamics, return as amplified disturbances. The M-Δ configuration makes this mechanism explicit and general: any controller whose boundary excludes a structured feedback loop can be destabilized by its own interventions.

## 2.3 Boundary Mismatch Index B

To operationalize the boundary problem for governance analysis, we define a scalar index of boundary mismatch:

**B = Var(spillover_in) / Var(total_disturbance)**

where Var(spillover_in) is the variance of outcomes within the controller's jurisdiction that is causally attributable to inflows from outside the boundary, and Var(total_disturbance) is the total variance the controller must manage.

B is bounded between 0 and 1. When B ≈ 0, the controller's outcomes are almost entirely determined by internal dynamics; cross-boundary couplings are negligible, and the modeled plant is an adequate approximation of the real plant. When B ≈ 1, the controller's outcomes are almost entirely determined by dynamics originating outside its boundary; the controller is governing a subsystem whose behavior it cannot predict from internal information alone.

The critical analytical move is to decompose B into two components with fundamentally different governance implications.

**Stochastic exogenous noise (B_noise).** This is the component of spillover variance that is uncorrelated with the controller's own actions — genuine environmental randomness, external shocks that are independent of what the jurisdiction does. A small open economy hit by a foreign demand shock; a coastal city struck by a hurricane generated by distant weather systems; a community affected by a pandemic originating on another continent. This component can be managed through buffers, insurance pools, early warning systems, and reserve capacity. It degrades performance but does not, in itself, threaten stability.

**Structured cross-boundary feedback (B_struct).** This is the component of spillover variance that is correlated with the controller's own past actions, processed through the external world and returned. The jurisdiction emits carbon, which accumulates in the global atmosphere, which changes the local climate, which disrupts local agriculture — the disruption is structured feedback, not exogenous noise. A central bank raises interest rates, which attracts capital inflows, which appreciates the currency, which depresses exports, which slows growth — the slowdown is the controller's own action returning through the external loop. A government tightens border controls, which disrupts supply chains, which creates domestic shortages, which generates political pressure to loosen controls — the pressure is endogenous to the boundary architecture.

The distinction matters because the appropriate governance response differs sharply between the two components. Stochastic noise can be managed within the existing boundary — add redundancy, improve forecasting, build reserves. Structured feedback cannot. It requires the controller to observe and model the external loop, because the disturbance is not independent of the controller's actions. A controller that treats B_struct as if it were B_noise will systematically misattribute the consequences of its own interventions, producing a progressive degradation of control that no amount of internal buffering can arrest.

The total boundary mismatch is B = B_noise + B_struct. Both components increase with the density and strength of cross-boundary couplings. But B_struct is the component that drives the M-Δ loop gain toward and beyond unity, and it is the component that conventional governance analysis — which treats all external variance as exogenous — systematically misidentifies. A governance system facing high B_struct but treating it as high B_noise is the structural analogue of a driver who mistakes their own car's skid for a gust of wind and corrects in the wrong direction.

## 2.4 The Pooling Paradox

The intuitive governance response to boundary mismatch is jurisdictional enlargement — pooling. If spillovers cross boundaries, make the boundaries larger. If a river basin spans three states, create a basin-wide authority. If financial contagion crosses borders, create a supranational regulator. If climate change is global, negotiate a global treaty.

This intuition is not wrong, but it is incomplete. Enlarging boundaries internalizes spillovers — the M-Δ loop that was external becomes internal, and the controller can now observe and actuate it. But enlargement simultaneously degrades the controller's internal governance fidelity through mechanisms that the preceding papers in this series have examined in detail.

**Observation latency increases.** A larger jurisdiction requires information to travel farther from periphery to center. The municipality that could observe local conditions in real time becomes a province that receives monthly reports, which becomes a nation that compiles annual statistics. Paper I established that latency places a hard ceiling on the controller's maximum stable gain: K_max ≈ 1/(τ · |A|). As the boundary expands and τ grows, the controller becomes structurally less capable of responding to fast disturbances — even though the disturbances themselves may now be internal to the jurisdiction.

**Spatial information is destroyed by aggregation.** Paper I's averaging problem: a centralized controller that observes only the national mean cannot distinguish which localities are in crisis, because aggregation destroys the distributional information. The larger the jurisdiction, the more variance is compressed into each aggregate statistic, and the more severe the mismatch between centrally designed interventions and locally varying conditions.

**Representation chains deepen.** Paper III established that citizen preference signals are attenuated below the observability threshold after two to three representation layers. Expanding a jurisdiction's boundaries almost inevitably adds representation layers — the local council reports to the regional body, which reports to the national parliament, which negotiates with the supranational institution. The preference signal that reaches the enlarged controller is a multiply-aggregated, noise-corrupted derivative of the original, and the controller governs a phantom.

**Actuation chains lengthen.** Paper XI's reform exhaustion result: the control energy required to realize policy intent grows superlinearly with delegation depth. A supranational directive must pass through national ministries, regional agencies, local authorities, and street-level implementers, each layer projecting the directive onto its own operational repertoire and adding noise and delay. The result is not that the enlarged jurisdiction cannot act — it is that it can only act at escalating political and administrative cost, and beyond a certain depth the cost becomes prohibitive.

The pooling paradox is the structural trade-off at the heart of the boundary problem. Expanding boundaries internalizes spillovers (B_struct falls) but degrades internal governance fidelity (observation, representation, and actuation all deteriorate). Shrinking boundaries preserves internal governance fidelity but leaves structured cross-boundary feedback ungoverned (B_struct rises). There is no single boundary that simultaneously minimizes both sources of failure.

This is not an argument against jurisdictional enlargement. It is an argument that enlargement alone cannot solve the boundary problem, because the costs of enlargement are not side effects — they are structural consequences of the same architecture that produces the benefits. The optimal boundary for a given governance function is the one that balances the marginal reduction in B_struct against the marginal increase in internal governance degradation. That optimum depends on the coupling structure of the specific domain — how strongly cross-boundary flows determine outcomes, and how sensitive the domain's governance is to latency, aggregation, and actuation depth.

## 2.5 The Information-Actuation Frontier

The pooling paradox can be stated more precisely by mapping it onto the formal results of Paper XI. That paper established that the minimum control energy required to achieve a policy target scales superlinearly with delegation depth — the number of organizational layers through which a directive must pass before reaching its point of implementation. As depth grows, each layer projects the directive onto a narrowed operational repertoire, adds latency, and injects noise. The effective actuation matrix degrades, and beyond a critical depth the target leaves the reachable set entirely.

Paper XII provides the complementary result. As the jurisdictional boundary shrinks, the structured cross-boundary feedback component B_struct grows. The controller's internal actuation fidelity is high — short chains, fast response, preserved local information — but the system it is controlling is increasingly dominated by dynamics it does not model. The M-Δ loop gain rises, and the controller's own interventions, however precisely executed, generate destabilizing feedback through the external world.

These two results define an *Information-Actuation Frontier*:

**Boundary Mismatch (B_struct) ⟺ Delegation Depth Risk (Paper XI Failure)**

A system cannot simultaneously minimize both. Expanding the boundary to capture cross-boundary feedback reduces B_struct but lengthens delegation chains and degrades actuation fidelity. Contracting the boundary to preserve actuation fidelity shortens chains but leaves B_struct ungoverned. Any single-boundary architecture — a Westphalian state, a federated union, a global institution — occupies a point on this frontier. It can move along the frontier by adjusting its boundary. It cannot escape the frontier.

The frontier is not a counsel of despair. It is a specification of the conditions under which the boundary problem can be solved. The frontier applies when a single jurisdictional boundary is applied to all governance functions simultaneously. It does not apply when boundaries are *functionally specific* — when different governance functions operate within different jurisdictional geometries matched to their distinct coupling structures.

A river basin authority governs water allocation within a boundary drawn to match the hydrological catchment. A national government governs defense within territorial boundaries. A regional public health body governs disease surveillance across a multi-country transmission network. A global climate institution governs emissions within a planetary boundary. Each function operates at its own scale, with its own observation channels, its own actuation capacity, and its own boundary. None of them attempts to govern all functions at a single scale. The system as a whole is polycentric, nested, and functionally differentiated — and it escapes the frontier precisely because it refuses the single-boundary assumption that generates the trade-off.

This is the structural imperative that Part VI develops into design principles. The Information-Actuation Frontier is the formal statement of why the boundary problem cannot be solved by choosing the right size for a single jurisdiction. The only escape is to abandon the assumption that a single boundary must serve all governance functions, and to match boundaries to coupling structures function by function. The mathematics does not prescribe one political arrangement over another. It prescribes that the arrangement must be polycentric, because no monocentric one can simultaneously satisfy the competing demands of spillover internalization and governance fidelity.
