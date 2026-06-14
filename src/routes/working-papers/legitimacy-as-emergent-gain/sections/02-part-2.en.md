# Part II — Formal Framework: Legitimacy as Emergent Coupling State

The Governance as Engineering series has, from its first paper, used the state-space formalism of control theory to model governance systems. A system is described by a state vector **x**(t), an actuation matrix **B** that determines how control inputs affect the state, and an observation matrix **C** that determines what the controller can perceive. Papers I through XII have treated **B** and **C** as architectural primitives—properties of the institutional design that the designer chooses and that degrade through identifiable structural mechanisms: latency, aggregation, projection, noise.

This paper introduces a parameter that is not chosen by the designer. It emerges from the interaction between the governance architecture and the population it governs, and it simultaneously modulates both **B** and **C**. That parameter is legitimacy, denoted L(t) ∈ [0,1]. The formal move is to treat L(t) not as an external context but as an endogenous state variable of the control loop—one that couples the two channels the series has so far treated separately.

## 2.1 The Standard State-Space Model with a Legitimacy Parameter

The baseline model of the series is the discrete-time linear system:

**x**(t+1) = **A**·**x**(t) + **B**·**u**(t) + **w**(t)  
**y**(t)   = **C**·**x**(t) + **v**(t)

where **x**(t) ∈ ℝⁿ is the true state of the governed system, **u**(t) ∈ ℝᵐ is the control input, **w**(t) is process noise with covariance **W**, **y**(t) is the observed signal, and **v**(t) is measurement noise with covariance **V**.

In Papers I through XII, the matrices **A**, **B**, and **C**, and the noise covariances **W** and **V**, are treated as architectural parameters. They can be degraded by structural failure modes—latency, aggregation, projection, boundary mismatch—but the degradations are themselves properties of the institutional design. A designer who shortens the representation chain (Paper III) improves **C**; a designer who reduces delegation depth (Paper XI) improves **B**.

Legitimacy operates differently. It is not a property of the institutional design. It is a property of the governed population's willingness to cooperate with that design. And it affects both channels simultaneously.

**Actuation legitimacy (L_B).** When a controller issues a directive **u**(t), the actual control input that reaches the system is not **u**(t) but **u**_eff(t) = L_B(t) · **u**(t), where L_B(t) ∈ [0,1] is the fraction of the population that complies with the directive. A tax reform is announced; L_B is the proportion of taxpayers who actually pay at the new rate. A public health order is issued; L_B is the proportion who follow it. A regulation is promulgated; L_B is the proportion of regulated entities that implement it without litigation, delay, or evasion. The effective actuation matrix is:

**B**_eff(t) = L_B(t) · **B**

When L_B = 1, the controller's directives are fully executed. When L_B = 0.5, half the actuation capacity is lost—not through any failure of the institutional machinery, but because the machinery's commands are not being obeyed. The distinction matters for diagnosis: a governance failure that appears to be an actuation deficit may in fact be a legitimacy deficit, and the appropriate response is not to redesign the actuation chain but to rebuild the trust on which it depends.

**Observation legitimacy (L_C).** When the controller collects information about the system's state—through surveys, administrative data, regulatory filings, or sensor networks—the accuracy of that information depends on the willingness of the governed to report honestly. A statistical agency surveys business activity; L_C is the probability that a respondent reports accurately rather than strategically. A regulatory inspector visits a facility; L_C is the probability that the operator discloses violations rather than concealing them. A citizen answers a government consultation; L_C is the probability that the response reflects the citizen's genuine preference rather than what the citizen believes the government wants to hear.

The measurement noise covariance **V**(t) is not fixed. It is a decreasing function of L_C(t). The simplest parameterization, and the one this paper adopts for analytical clarity, is:

**V**(t) = **V**₀ / L_C(t)

where **V**₀ is the baseline noise covariance when legitimacy is perfect (L_C = 1). When L_C = 0.5, measurement noise is doubled. When L_C → 0, measurement noise diverges to infinity—the observation channel is not merely degraded; it is destroyed. The controller is no longer receiving information about the true state of the system. It is receiving noise.

The observation equation becomes:

**y**(t) = **C**·**x**(t) + **v**(t), **v**(t) ~ 𝒩(**0**, **V**₀ / L_C(t))

The two legitimacy parameters, L_B and L_C, are conceptually distinct. A population may comply with directives while lying about the results (high L_B, low L_C: the authoritarian illusion). A population may report honestly while refusing to comply with directives (low L_B, high L_C: the protest democracy). In the general case, they are separate variables. But they are positively correlated through a common dependence on underlying trust: a government that is trusted to use power well tends to be both obeyed and told the truth; a government that is distrusted tends to face both non-compliance and strategic reporting. For much of the analysis that follows, the paper works with a composite L(t), treating L_B ≈ L_C as a reasonable approximation for systems where legitimacy is broadly distributed across domains. The multidimensional extension, in which different institutions command different legitimacy levels, is noted as a direction for future work and does not alter the core dynamics.

## 2.2 Legitimacy Dynamics as an Endogenous Scheduling Variable

Legitimacy is not fixed. It evolves in response to the controller's performance and behaviour. The dynamics can be formalised as:

L(t+1) = clip( L(t) + ΔL(t), 0, 1 )

where ΔL(t) is the change in legitimacy driven by three primary mechanisms:

**The delivery gap.** The most direct driver of legitimacy is the gap between what the controller promises and what it delivers. Citizens form expectations about outcomes—economic growth, service quality, public safety—and update their trust based on the discrepancy between expectation and reality. Formally:

ΔL_delivery(t) = −α · ‖**x**(t) − **x**_promised(t)‖²

where **x**_promised is the state the controller committed to achieving, and α captures the population's sensitivity to delivery failure. The quadratic form reflects the empirical regularity that large failures damage legitimacy disproportionately—a missed budget target by 5% is more than five times as damaging as a miss by 1%.

**The transparency signal.** Legitimacy is not only about outcomes. It is also about process. A controller that operates transparently—publishing its data, explaining its decisions, acknowledging its errors—generates a positive transparency signal that partially offsets delivery failures. Formally:

ΔL_transparency(t) = +β · T(t)

where T(t) ∈ [0,1] is the controller's chosen transparency level, and β captures the population's responsiveness to openness. The transparency channel is the mechanism through which the controller can invest in future legitimacy, even at the cost of revealing inconvenient truths in the present.

**The betrayal cost.** The most damaging event for legitimacy is not failure but deception. When the governed discover that the controller has been systematically manipulating information—suppressing unfavourable statistics, punishing honest reporting, constructing a narrative that diverges from observable reality—the legitimacy penalty is catastrophic. Formally:

ΔL_betrayal(t) = −γ · D(t)

where D(t) is an indicator (or continuous measure) of revealed deception, and γ is the betrayal sensitivity. Critically, γ is not a constant. It is substantially larger for *borrowed* legitimacy than for *built* legitimacy, a distinction formalised in Section 2.4.

The full legitimacy dynamics are:

L(t+1) = clip( L(t) − α · ‖**x**(t) − **x**_promised(t)‖² + β · T(t) − γ · D(t) + δ, 0, 1 )

where δ is a small exogenous drift term capturing the slow, secular accumulation or erosion of institutional trust that occurs independently of any single government's performance.

**Hysteresis asymmetry.** The dynamics above treat the delivery gap symmetrically: a positive gap (over-delivery) increases L at the same rate that a negative gap (under-delivery) decreases it. This is empirically false. Trust is destroyed more rapidly than it is rebuilt. To capture this, the sensitivity parameter α is made state-dependent:

α = α_drop if Δ_error² > 0 (performance worsening)  
α = α_recovery if Δ_error² ≤ 0 (performance improving)

with α_drop ≫ α_recovery. A government that under-delivers for one period loses L quickly; a government that over-delivers for one period gains L slowly. The asymmetry is not a psychological assumption; it is an empirical regularity with deep evolutionary roots—organisms that updated positive expectations as quickly as negative ones would be vulnerable to exploitation. Whatever its origin, the consequence for governance is the hysteresis loop documented in Section 2.3: the path from high L to low L is short; the path back is long.

The controller must now manage a system in which its own effectiveness parameter L(t) is a function of its performance and transparency. This is a *nonlinear state-dependent feedback system*: the scheduling variable L(t) is closed-loop and error-dependent. The formal analysis of such systems draws on the absolute stability criteria—the Popov Criterion and the Circle Criterion—that determine whether a sector-bounded nonlinearity in the feedback path preserves or destroys system stability. The legitimacy trap, introduced next, is precisely the condition under which the coupling nonlinearity exits the stable sector.

## 2.3 The Kalman Filter and the Collapse of Observation Legitimacy

The observation-legitimacy parameter L_C governs the noise covariance **V**(t) = **V**₀ / L_C(t). When L_C falls, measurement noise rises. This has a precise and severe consequence for the controller's ability to estimate the system's true state.

A well-designed controller does not use raw observations **y**(t) directly. It passes them through a state estimator—in the optimal case, a Kalman filter—that combines the noisy measurement with a prediction from the internal model to produce a minimum-variance estimate **x̂**(t) of the true state. The Kalman gain **K**_k determines how much weight the estimator gives to new measurements relative to the model-based prediction:

**K**_k = **P**_k **C**ᵀ ( **C** **P**_k **C**ᵀ + **R** )⁻¹

where **P**_k is the error covariance of the state estimate and **R** = **V**₀ / L_C is the measurement noise covariance.

As L_C → 0, **R** → ∞. As **R** → ∞, the Kalman gain **K**_k → 0. A Kalman gain of zero means the estimator ignores new measurements entirely. It updates its state estimate purely by propagating the internal model forward via the dynamics matrix **A**:

**x̂**(t+1) = **A**·**x̂**(t) + **B**·**u**(t)

The controller is now operating open-loop. It is not responding to the world. It is responding to its own model of the world, projected forward without correction. Every discrepancy between the model and reality accumulates unseen. The controller's dashboard shows the state that the model predicts, not the state that exists.

This is the formal mechanism of *dashboard insulation*—the condition in which a governance system's internal picture of its own performance diverges systematically from observable reality. The mechanism does not require conspiracy, propaganda, or deliberate deception, though those can accelerate it. It requires only that L_C fall low enough that the Kalman gain approaches zero. At that point, the architecture that was designed to maintain situational awareness becomes a machine for maintaining situational ignorance. The controller is not merely uninformed. It is misinformed by its own model, and the error compounds at a rate determined by the gap between **A** and the true system dynamics.

The practical governance manifestations of dashboard insulation are familiar from the series' country cases. The Soviet Gosplan's late-period economic statistics, which showed growth while the economy stagnated. The Chinese promotion tournament's systematically optimistic local reporting. The Russian power vertical's progressive loss of contact with battlefield reality. In each case, the observation channel was not merely degraded by architecture. It was destroyed by the collapse of L_C to the point where reporting the truth became individually irrational for the agents who possessed it.

## 2.4 The Legitimacy Trap as a Sector-Bounded Nonlinearity

The coupling between L, actuation, and observation creates the possibility of a self-reinforcing collapse. When L falls, actuation weakens. Outcomes deteriorate. The delivery gap widens. L falls further. Simultaneously, rising observation noise conceals the true state, making the controller's interventions increasingly miscalibrated. The controller, blind to its own blindness, redoubles its efforts—applying interventions that are too large or too small, at the wrong time, in the wrong place—and the resulting deterioration further erodes L.

This is the *legitimacy trap*: a positive-feedback spiral in which the parameter that makes governance effective is progressively destroyed by the ineffectiveness that its own destruction produces. Formally, it is a bifurcation in the nonlinear system dynamics. When L is above a critical threshold L_crit, the system has a single stable equilibrium at high performance and high legitimacy. When L falls below L_crit, the high-performance equilibrium disappears or becomes unreachable, and the system is drawn into a low-L, low-performance attractor from which recovery requires either external intervention or a sustained period of conditions—modest targets, maximum transparency, consistent delivery—that the depleted actuation capacity makes difficult to achieve.

The locus of the trap can be characterised using the absolute stability criteria for systems with sector-bounded nonlinearities. The legitimacy dynamics constitute a nonlinear feedback element in the loop. When the sector bounds of that element—determined by α, β, γ, and the hysteresis asymmetry—are compatible with the linear dynamics of the governance architecture, the system is absolutely stable: it converges to a high-L equilibrium regardless of initial conditions. When the sector bounds are violated, the system becomes conditionally stable or unstable: there exists a region of the state space from which it diverges toward the low-L attractor.

The governance interpretation is direct. A well-designed architecture with moderate delivery sensitivity (α), high transparency responsiveness (β), and low betrayal sensitivity (γ) is absolutely stable in the legitimacy dimension. It can absorb shocks to L—a scandal, a recession, a policy failure—and recover. An architecture with high delivery sensitivity, low transparency, or high betrayal sensitivity is conditionally stable. It can maintain high L under favourable conditions, but a sufficiently large shock can push it below L_crit, after which the system's own dynamics drive it deeper into the trap rather than back toward recovery.

The distinction between built and borrowed legitimacy, introduced in the next section, is precisely a parameterisation of these sector bounds.

## 2.5 Borrowed vs. Built Legitimacy

Not all legitimacy is structurally identical. The same observed L can rest on fundamentally different foundations, and those foundations determine the system's resilience to shocks.

**Built legitimacy** arises from consistent, transparent delivery over extended periods. The population trusts the controller because the controller has repeatedly demonstrated that it does what it says, reports honestly about what it did, and corrects its errors when they occur. The parameters of built legitimacy are:

- **α** (delivery sensitivity): moderate. Individual failures are understood as exceptions, not as revelations of systemic incompetence.
- **γ** (betrayal sensitivity): low. Because the controller has a long track record of transparency, a single revelation of deception is more likely to be interpreted as an aberration than as evidence of systematic dishonesty.
- **δ** (exogenous persistence): high. Built legitimacy decays slowly even in the absence of positive reinforcement, because it is embedded in institutional memory and cultural norms rather than in the performance of the current government.

Built legitimacy functions as a structural stabiliser. It damps the feedback loop between delivery failure and L erosion, giving the controller time to correct course before the trap closes.

**Borrowed legitimacy** arises from narrative, charisma, enemy construction, or temporary success. The population trusts the controller not because of a consistent track record but because of a compelling story about the controller's identity, intentions, or enemies. The parameters of borrowed legitimacy are:

- **α** (delivery sensitivity): high. Because the controller's legitimacy rests on the narrative rather than on demonstrated competence, a delivery failure that contradicts the narrative is disproportionately damaging—it undermines the story on which the entire trust relationship depends.
- **γ** (betrayal sensitivity): very high. When borrowed legitimacy is punctured by revealed deception, the collapse is catastrophic. The population infers not merely that the controller made an error, but that the narrative was fraudulent from the beginning. The betrayal cost is not proportional to the deception; it is proportional to the gap between the narrative and the revealed reality.
- **δ** (exogenous persistence): low. Borrowed legitimacy is not embedded in institutions or cultural norms. It is attached to specific leaders, narratives, or circumstances, and it evaporates rapidly when those supports are removed.

The borrowed-legitimacy architecture is structurally brittle. It can maintain high L for extended periods under favourable conditions—the narrative holds, the economy grows, the enemies remain threatening. But it is exquisitely vulnerable to shocks that breach the narrative. When the breach occurs, L does not decline gradually. It collapses, and the collapse is amplified by the very mechanisms—transparency suppression, narrative control—that the architecture used to maintain borrowed legitimacy in the first place.

The Soviet Union in the 1980s is the canonical example. Decades of borrowed legitimacy—the narrative of historical inevitability, the construction of external enemies, the suppression of economic data—maintained high apparent L until glasnost and the accumulating weight of observable failure breached the narrative. The collapse, when it came, was not a gradual decline in trust but a near-instantaneous evaporation of the legitimacy on which the entire architecture depended. The architecture did not fail because its institutions were technically incapable. It failed because the legitimacy that multiplied their effectiveness was borrowed, and the debt was called.

## 2.6 Gain-Scheduling: Adapting Control to Legitimacy Level

A rational controller should not apply the same control strategy regardless of its own legitimacy level. The optimal strategy depends on L, because L determines the effective actuation and observation capacity available.

**High-L regime (L > L_high).** The controller can pursue ambitious targets with high gain. Actuation is reliable; observation is accurate; the feedback loop is tight. Large, transformative reforms are feasible because the controller can count on compliance and honest reporting. The primary governance challenge in this regime is to maintain the conditions—delivery, transparency—that keep L high.

**Moderate-L regime (L_crit < L < L_high).** The controller should reduce its gain and invest in transparency. Ambitious targets carry the risk of a delivery gap that pushes L toward the trap threshold. The controller should pursue incremental, reversible actions that demonstrate reliability without staking legitimacy on outcomes it cannot guarantee. Transparency investment—publishing data, acknowledging errors, consulting affected populations—builds L at the cost of revealing inconvenient truths in the short term.

**Low-L regime (L < L_crit).** The controller is in or approaching the legitimacy trap. Ambitious action is counterproductive: the depleted actuation capacity makes delivery failure likely, and the amplified observation noise makes miscalibration inevitable. The controller should operate in a *legitimacy-rebuilding mode*: minimal targets, maximum transparency, and small, visible, delivered commitments that accumulate a track record of reliability. The goal is not to solve the system's substantive problems directly—the controller lacks the effective capacity to do so—but to rebuild the L on which all future capacity depends.

This is the structural analogue of "earning trust back." It is not a moral prescription. It is a control strategy, derived from the dynamics of the LPV system. A controller that ignores its own L and pursues ambitious targets from the low-L regime is mathematically likely to destroy what remains of its legitimacy, because the control energy it applies will be absorbed by the very parameter it is ignoring.

**Legitimacy sensors.** Gain-scheduling on L requires the controller to observe L directly. This means monitoring trust surveys, compliance rates, reporting latency, participation metrics, and the divergence between official and independent data sources. A controller that does not measure its own legitimacy is operating open-loop on the parameter that schedules its own effectiveness. The design implications are developed in Part VI.

## 2.7 Relationship to Architectural Primitives

Legitimacy is not a primitive in the series' sense. The designer cannot choose L. But the designer can choose the architecture that generates or erodes L over time. The relationship between the architectural primitives of Papers I–XII and the emergent coupling state L is the central structural insight of the paper.

A governance system with low latency (Paper I), short representation chains (Paper III), high observation dimensionality (Paper VI), well-matched boundaries (Paper XII), and protected observer diversity (Paper X) will *tend* to generate high L. It delivers outcomes reliably, because its control loop is tight. It reports honestly, because its observation channels are diverse and protected. The governed population learns, over time, that compliance is rewarded and honesty is safe.

A governance system that violates these primitives will *tend* to generate low L. Its delivery is inconsistent because its control loop is slow and its actuation is attenuated. Its reporting is distorted because its observation channels are narrow and manipulable. The governed population learns, over time, that compliance is futile and honesty is dangerous.

But the relationship is stochastic, path-dependent, and subject to hysteresis. A system with improving architecture may face low L for an extended period, because the population's trust has been depleted by the preceding period of dysfunction and recovers more slowly than the architecture improves. A system with deteriorating architecture may enjoy high L for a period, because borrowed legitimacy sustains trust beyond the point at which the underlying architecture would justify it—until the borrowing runs out.

The architectural primitives create the conditions for legitimacy. They do not guarantee it. And once L is established, it feeds back on the primitives' effectiveness with multiplicative force. This is why legitimacy is best understood not as a twelfth primitive but as the series' first endogenous coupling state: the variable that emerges from the interaction between architecture and society, and that determines whether the architecture works.
