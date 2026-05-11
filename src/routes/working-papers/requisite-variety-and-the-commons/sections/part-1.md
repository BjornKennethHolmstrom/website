# Part I: The feedback loop problem

## The standard account and its limits

Garrett Hardin's 1968 formulation of the tragedy of the commons has shaped environmental governance for half a century. The argument is simple: a shared resource accessible to multiple users will be depleted, because each user captures the full benefit of extraction while sharing the cost of depletion across all users. Individual rationality produces collective ruin. The solution, in Hardin's original framing, is either privatization — converting common property to private property so that individuals bear the full cost of their extraction decisions — or state regulation — imposing external authority to limit extraction below the collectively ruinous level.

This framing locates the problem in incentive structure. The commons fails because actors are responding rationally to perverse incentives. The remedy is to change the incentives, either through property rights or through rules backed by enforcement.

Elinor Ostrom's empirical work, for which she received the Nobel Prize in Economics in 2009, demonstrated that the standard account is empirically incomplete. Communities around the world successfully manage shared resources without either privatization or state regulation, through self-governing institutions that neither Hardin's framework nor conventional economic theory predicted could exist. Ostrom's contribution was to document these systems, identify their common structural properties, and develop a theoretical account of why they work.

What neither Hardin nor Ostrom formalized, however, is the control-theoretic structure of the commons problem. That formalization is the starting point of this paper.

## The commons as a feedback control problem

Consider a renewable resource — a fishery, a forest, an aquifer — governed by some extraction regime. At each time step, users make extraction decisions. Their decisions deplete the resource. The resource regenerates at a rate determined by its current state and its environmental context. The resulting stock level at the next time step is the consequence of the current period's extraction minus the current period's regeneration.

In control-theoretic terms: the resource stock is the system state. Extraction is the control input. Regeneration dynamics are the system's natural evolution. The governance regime is the controller — the mechanism that determines extraction decisions.

For a controller to stabilize a system, it must observe the system's state. A controller that applies control inputs without observing the state it is affecting is operating open-loop. Open-loop control can work in highly predictable systems with stable dynamics and no disturbances. It fails in systems subject to variability, disturbance, and nonlinearity — which is to say, in every real ecosystem.

The tragedy of the commons is the open-loop case applied to a renewable resource. Each user makes extraction decisions based on their individual circumstances, local observation, and immediate incentives — without coupling to the aggregate resource state or the aggregate extraction of other users. There is no feedback from the collective consequence to the individual decision. The system is open-loop by design.

This has a precise implication that the incentive-based account misses: improving individual motivation does not close the feedback loop. A community of perfectly altruistic individuals who all sincerely want to conserve the shared resource, but who have no mechanism for observing the aggregate stock level or coordinating their extraction decisions, will still deplete it. The information needed to make collectively sustainable decisions is not available to any individual actor. The loop is open not because of greed but because of architecture.

## What closing the loop requires

A closed feedback loop between extraction decision and resource consequence requires three elements: an observation of the current resource state, a comparison of that state to a desired state, and an adjustment of the extraction decision based on the discrepancy.

Each element introduces potential failure modes. The observation may be delayed — the resource state observed today reflects conditions weeks or months ago. The observation may be aggregated — what is observed is the total stock across a region, not the spatial distribution of depletion. The observation may be narrow — what is observed is one dimension of the resource state (total biomass) while other relevant dimensions (age structure, spatial distribution, seasonal condition, associated species indicators) are invisible. And the adjustment mechanism may be weak — the governance system may lack the enforcement capacity to translate observed discrepancy into actual extraction change.

These failure modes are not equivalent. Delay, aggregation, and observation narrowness are properties of the observation channel — they are structural. Weak enforcement is a property of the institutional implementation — it is parametric. Institutional reforms that improve enforcement while leaving the observation channel unchanged address the parametric failure mode while leaving the structural one intact.

This is the same distinction the preceding papers established in the context of democratic representation and governance stability. In each case, the structural constraint is in the observation channel; the institutional quality operates on what passes through that channel. Improving what happens to an already-degraded signal cannot recover the information that was lost before it arrived.

## The resource system's variety

A renewable resource is not a single-state system. It generates variability across multiple timescales simultaneously. Monthly weather events affect availability. Seasonal cycles determine reproduction, migration, and growth. Multi-year oscillations (El Niño, drought cycles, disease cycles) drive medium-frequency variability. Decadal shifts in climate, land use, and ecosystem composition drive slow underlying trends in carrying capacity.

Each of these disturbance types requires a different governance response. A fast shock — an unusually productive season or a disease outbreak — requires rapid local adjustment. A seasonal cycle requires governance rules matched to seasonal dynamics. A slow decadal trend requires governance that can distinguish genuine long-run change from short-run variability — a distinction only available to a governance system with a long enough observation window and the signal dimensions needed to detect it.

The variety of the resource system, in Ashby's sense, is determined by the number of independent states the system can occupy. A system driven by fast, medium, and slow disturbances has high variety — it can be in many different states that require different governance responses. A governance system that can only observe one aggregate dimension of that state has low variety — it cannot distinguish states that look identical from above but require different responses below.

The fundamental constraint follows directly from Ashby's Law: the governance system's variety must match or exceed the resource system's variety for stable management to be possible. And the variety available to a governance system is determined by its observation channel — how many independent signal dimensions it can access, at what latency, from what position relative to the resource.

Proximity — physical, seasonal, relational — is the mechanism by which governance systems accumulate variety. A community that lives within an ecosystem observes it continuously across many dimensions simultaneously: the colour of the water, the behaviour of indicator species, the timing of seasonal events, the appearance of the resource organisms themselves, the reports of every community member who interacts with the system daily. This distributed, continuous, multi-dimensional observation constitutes high requisite variety. An external manager who receives an annual aggregate stock survey has one dimension, one data point per year, from a distance. The variety gap between these two observation systems is not a matter of sophistication — it is a matter of position.
