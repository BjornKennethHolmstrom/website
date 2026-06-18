# Part II — The Formal Framework

## 2.1 The Loop as a Recursive Lossy Pipeline

The series' founding premise is that a governance system observes the world, decides, acts, and observes the result (Paper I). The adaptation triad is that same loop, specialised to the question of how the controller revises *itself*: it senses the world's state, learns by revising its model of the world, executes the revision as changed policy, and then must sense again — because its own execution has changed the world it next observes. This paper does not derive the recursion; it inherits it. The closure of the loop — Execute changing the world that Sense must re-observe — is the structure Paper I asserted, carried into the second cycle. What this section adds is the observation that each stage of that loop has a finite *rate*, and that the rates are coupled by the loop in a way the triad's dependency ordering did not make visible.

Define three stage rates, all in units of work per unit time:

- the **sensing rate** \(r_S\) — the volume of distinguishable state-information the observation architecture can acquire and resolve per unit time, set by the dimensionality, latency, and signal fidelity of Papers I, III, and VIII, and by the observer decorrelation of Paper X;
- the **learning rate** \(r_L\) — the rate at which sensed information is converted into revisions of the controller's model, bounded by the identifiability and persistent-excitation conditions of Paper XIV;
- the **execution rate** \(r_E\) — the rate at which model-driven decisions become realised changes in the world, bounded by the transition bandwidth of Paper IX and the delegation depth of Paper XI.

The two interior legs are *lossy conversions*. Not all sensed information becomes a model revision, and not all model revisions become implemented change. Let

\[
\rho_{SL} \in (0,1), \qquad \rho_{LE} \in (0,1)
\]

be the conversion efficiencies of the sensing-to-learning and learning-to-execution legs. **[IP]** These are not parameters this paper stipulates; they are below one for reasons the series has already established. \(\rho_{SL}<1\) is Paper III's aggregation loss applied to the adaptive loop: the sensing stage produces a high-dimensional signal, the learning stage compresses it into a low-dimensional model revision, and variance is destroyed in the compression. \(\rho_{LE}<1\) is the composition of the attenuations the series has documented on the actuation side: the institutional immune system of Paper VII, the transition-bandwidth limit of Paper IX, and the delegation attenuation of Paper XI. The theorem below requires only that both efficiencies be below one; their precise values set the *severity* of a bottleneck, not its existence.

The realised rates along the pipeline are then nested minima — each stage can process no faster than its own capacity, and receives no more than the previous stage delivers after conversion:

\[
\tilde r_L = \min\!\big(\rho_{SL}\, r_S,\; r_L\big), \qquad
\tilde r_E = \min\!\big(\rho_{LE}\, \tilde r_L,\; r_E\big).
\]

The **effective adaptive throughput** of the loop is the rate at which sensed reality actually becomes implemented, model-driven change:

\[
T_{\text{eff}} = \tilde r_E = \min\!\big(\rho_{LE}\,\rho_{SL}\, r_S,\; \rho_{LE}\, r_L,\; r_E\big).
\]

The closing leg, Execute → Sense, is structurally different from the two interior legs, and the difference is the paper's distinctive content. It carries no conversion efficiency, because nothing is being converted: execution changes the world, and the changed world simply *is* what sensing next observes. There is no \(\rho\) on this leg. What there is instead is a **rate-matching condition**. Execution changes the world at a rate (w = g,\tilde r_E + d), where (d) is the exogenous disturbance rate — the rate at which the world changes for reasons other than the controller's own action — and (g \ge 1) is a consequence-amplification factor, the degree to which an action changes the world beyond its own footprint (leverage, in the register of §1.1; (g=1) when consequences match the action exactly). Sensing must re-observe at a rate sufficient to keep the model abreast of that change. Define the **reality backlog** \(B_R\), the accumulating discrepancy between the world as the controller's own action has made it and the world as the controller's model represents it:

\[
\dot B_R = \max\!\big(0,\; w - r_S\big).
\]

Here the recursion shows its consequence. The same capacity \(r_S\) sits at both ends of the loop: it feeds the front of the pipeline, and it bounds re-observation at the close. A controller cannot raise its execution rate without raising \(w\), and so without raising the sensing rate it now needs merely to stay calibrated. The sensing stage is asked to do double duty — to observe the world, and to re-observe what the system's own execution has made of it — out of one finite capacity. This is the formal sense in which governance differs from a production line: a production pipeline does not manufacture the environment it must subsequently inspect, and governance, like any sufficiently active adaptive system, does.

Two levers can relieve a reality backlog, and they are not symmetric. The controller can raise \(r_S\) — build sensing capacity — or it can lower \(\tilde r_E\) by executing less; it cannot lower the exogenous rate \(d\), which is outside its control. The first lever is slow: sensing capacity accumulates gradually, out of expertise, trust, and infrastructure that money can fund the growth of but cannot instantly buy. The second is fast but carries an immediate performance cost. The asymmetry — sensing built slowly, execution throttled at will — means a system facing a growing reality backlog confronts a genuine trade-off between continued action and continued calibration, one that cannot be resolved by spending. Part VI returns to the implication: a functionally differentiated architecture can throttle execution in one domain without starving sensing across the board.

These levers operate within a bound worth making explicit, because it limits what the reality backlog can be blamed on. With consequences unamplified (\(g=1\)) and no exogenous disturbance, the backlog cannot grow at all: the loop's own execution satisfies \(\tilde r_E \le \rho_{SL}\rho_{LE}\,r_S < r_S\), so a system's unamplified action always changes the world by less than its sensing took in. The reality backlog therefore never arises from sheer activity. It requires a fast-changing world (large \(d\)), action whose consequences are amplified beyond their footprint (\(g>1\)), or sensing diverted onto one target while the consequences of action accrue unobserved (§5.4). The asymmetry of the two levers is correspondingly conditional: lowering \(\tilde r_E\) relieves the backlog only when amplified consequences drive it; against a fast-changing world only added sensing, or a boundary drawn to exclude what cannot be observed, will serve.

## 2.2 The Adaptation Bottleneck Theorem

The throughput expression is a nested minimum of positively scaled stage rates, and its behaviour follows immediately. **[R within the model.]**

> **Theorem (adaptation bottleneck).** *The effective adaptive throughput \(T_{\text{eff}}\) is gated by the binding stage — the argument achieving the minimum in the expression above. For any stage \(i\) that is not binding, \(\partial T_{\text{eff}}/\partial r_i = 0\): capacity added to a non-binding stage does not increase the loop's adaptive rate. It is converted instead into backlog at the leg immediately downstream of the added capacity.*

The proof is the arithmetic of minima: raising any argument of a minimum other than the smallest leaves the minimum unchanged, and the unprocessed surplus — the output of the augmented stage that the downstream stage cannot absorb — accumulates as queued work. This is the dynamic counterpart of Paper V's static result, and the two are duals in their arithmetic. Static architectural deficits *compound*: their costs multiply, so several mild deficits together produce severe dysfunction. Dynamic adaptive capacities *bottleneck*: their rates take a minimum, so several strong capacities together produce adaptation no faster than the weakest. Compounding deficits and bottlenecked capacities are the two ways the parts of a multi-part architecture fail to be independent. The minimum-of-rates structure itself is not new — it is the shared content of Liebig's law, queueing theory, and the theory of constraints (§1.4). What is specific to this paper arrives at the closure leg (§2.4): the pipeline is not merely serial but recursive, and the recursion can bind when no conversion stage is the bottleneck.

A corollary on allocation follows, and it is the one design-relevant claim of the section. If one insists on a budget framing — a fixed total capacity to be distributed across the three stages — \(T_{\text{eff}}\) is maximised not by equal effort but by equalising the *efficiency-scaled* stage rates, so that no stage is binding and none is starved. Raising a minimum requires raising its smallest argument; once the arguments are equal, the marginal return to any single stage falls to zero. The precise shape of the optimal allocation, and the rate at which return falls away from balance, are established in simulation (Part V) rather than asserted here, since they depend on the conversion efficiencies and on the disturbance regime.

The three backlogs are the three places the loop accumulates unprocessed work, one on each leg:

- the **information backlog** \(B_I\), on the Sense → Learn leg, when \(\rho_{SL} r_S > r_L\): observation arrives faster than it can be interpreted, and unprocessed data piles up — the structural form of *analysis paralysis*;
- the **innovation backlog** \(B_N\), on the Learn → Execute leg, when \(\rho_{LE}\tilde r_L > r_E\): model revisions arrive faster than they can be implemented, and known-good changes wait — the structural form of *permanent experimentation*, in which a system continually learns what to do and continually fails to do it;
- the **reality backlog** \(B_R\), on the Execute → Sense leg, when \(w > r_S\): the world is changed faster than it can be re-observed, and the model drifts from the reality the system's own action is producing — the structural form of *rigidity*, action delivered fast and with confidence on a stale picture.

The three are symmetric as accumulations — each is unprocessed work queued behind a stage whose rate is exceeded — but they are not symmetric in mechanism, and the asymmetry should be stated plainly. The information and innovation backlogs sit behind *conversion* legs: they are fed through an efficiency \(\rho<1\), and they could in principle be relieved by raising the downstream stage's rate. The reality backlog sits behind the *closure* leg: it is fed by no conversion, only by the mismatch between how fast the system changes the world and how fast it re-observes it, and it cannot be relieved by raising any downstream rate — only by raising \(r_S\) relative to \(w\), which may mean executing *less*, not sensing more. This is the formal content of the observation that a system can be too active: past the point where \(w\) exceeds \(r_S\), additional execution does not accelerate adaptation; it accelerates the accumulation of unobserved reality.

## 2.3 The Bottleneck in Variety Terms

The result can be restated in the series' founding currency, which both anchors it to Ashby and clarifies that it adds no primitive. **[IP]** Let \(V_d\) be the disturbance variety the architecture faces, net of what its objective function reaches. Requisite variety must be carried at each stage of the loop: the sensing stage must distinguish enough states to register \(V_d\); the learning stage must command enough model-variety to represent the distinctions sensing delivers; the execution stage must wield enough actuator-variety to realise the revisions learning produces. The bottleneck theorem is then the statement that the loop's adaptive variety is the *least* of the three stage varieties — the system can absorb only the disturbance variety its weakest stage can carry, however much variety the other two command.

This is distinct from Paper IV, and the distinction matters for the no-inflation claim. Paper IV established *where* requisite variety must live — at the point of contact, as a matter of proximity. This paper establishes how requisite variety must be *balanced across the three process stages of the adaptive loop*. One is a spatial claim about the location of variety; the other is a structural claim about its distribution across sensing, learning, and execution. They are different axes of the same Ashbyan requirement, and neither subsumes the other.

## 2.4 The Viability Threshold

A bottleneck sets the rate at which the loop adapts. Whether that rate is *adequate* depends on the world. Let \(r_{\text{env}}\) be the rate at which the environment invalidates the parameters the controller's model tracks — the rate of structural drift, distinct from the disturbance rate \(d\), which is variation the existing model already accommodates. \(r_{\text{env}}\) is the rate at which the model itself goes stale. **[IP]** The viability condition is that the loop close faster than the world drifts out from under it:

\[
T_{\text{eff}} > r_{\text{env}} \qquad \text{and} \qquad r_S \ge w.
\]

The first condition requires the adaptive throughput to outpace structural drift; it connects directly to Paper XIV's persistent excitation (the model can be re-identified as it drifts only if the loop keeps turning) and to Paper IX's transition bandwidth (the loop must complete its revision before the window to act on it closes). The second condition is the recursion-specific one: even a loop that adapts faster than the environment drifts will fail if its execution outruns its re-observation, because the reality backlog then grows without bound and the system loses contact with the consequences of its own action. 

The two conditions interact through the binding stage. When sensing is binding, \(T_{\text{eff}}\) moves with \(r_S\) and the two collapse toward each other. When execution is binding they come apart, and this is the case worth naming: the loop can adapt faster than the environment drifts — \(T_{\text{eff}} > r_{\text{env}}\) — and still accumulate a reality backlog, because the system's own activity outpaces its capacity to observe the consequences. Such a system is simultaneously effective and self-blinding: it meets every test of responsiveness while losing contact with what its responses are doing. 

When either condition is violated, the failure has the temporal signature the series has documented repeatedly — quiet accumulation behind a dashboard that reads as healthy, followed by a forced, all-at-once reckoning when the gap can no longer be carried. The financial system of §1.1, the crisis-driven learning of Paper XIV, and the boom-and-bust cases of Paper VII are instances of the same threshold crossed.

Both quantities, \(r_{\text{env}}\) and \(w\), are unmeasured here, and the paper does not pretend otherwise. The viability condition is stated in rates that can be reasoned about structurally but for which no field instrument is offered — the same honesty Paper XI observed in stating its energy law in fidelity and depth, which can be coded, rather than in political capital, which cannot.

## 2.5 What the Framework Does Not Claim Here

Three boundaries belong in the formal section, because each marks a place where a tempting stronger claim would not be supported.

It is **not a conservation law.** Nothing is conserved across the three stages; they are not fungible expenditures summing to a constant, and there is no quantity that is merely redistributed among them. The result is a bottleneck and a rate-matching condition, not the partition of a fixed total — and the suggestion that the triad obeys a conservation principle, however elegant, would import a symmetry the structure does not have.

It rests on **rates, not a budget.** The binding constraints are processing rates set by slowly accumulated structural endowments — domain expertise, institutional memory, established trust, delivery capacity — that money can fund the gradual growth of but cannot instantly purchase. This is why the constraint survives material abundance: a system with unlimited fiscal capacity still cannot convert it into trustworthy observers, identified models, or a culture that tolerates the variance of exploration at a rate faster than those things mature. The architectural framing of the series holds here as elsewhere; the limit is structural, not financial.

The recursion's **full stability dynamics are bracketed.** This section defines the reality backlog as a state and gives the condition under which it accumulates, but it does not analyse the closed loop's dynamics as such — whether, under given rates and delays, the backlog converges, oscillates, or diverges. That is a second-order question about the stability of a self-revising controller, and it is deferred deliberately; the feedback delay around the closure leg further depresses effective throughput below the raw minimum of §2.1, and the form of that dependence is exhibited in simulation (Part V) rather than claimed here.

---
