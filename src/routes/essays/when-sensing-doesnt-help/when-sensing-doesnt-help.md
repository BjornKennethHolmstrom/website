# When Sensing Doesn't Help

*A Retained-Variety hypothesis, and how four simulations took it apart*

Most of what the Governance-as-Engineering series records is what survived scrutiny. This is a note about something that didn't — a hypothesis that looked, for a while, like the next paper in the series, produced a clean and quantified result, and then dissolved when I finally modelled the objection to it fairly. I am writing it up not despite the failure but because of it. A framework that only reports its confirmations is not doing the thing it claims to value, and the way this particular idea came apart is, I think, more useful than the idea would have been if it had held.

## The idea, and why it was attractive

The series' recurring diagnosis is that governance systems fail structurally when the variety they can observe falls short of the variety of the disturbances they must reject — the Goodhart–Ashby synthesis, the variety gap. Paper IV works this out for observation: a regulator that cannot *observe* the slow ecological variable that matters cannot govern it, because states that look identical on the dashboard have divergent futures.

The natural next question is whether observing the right variable is *enough*. It seemed obvious that it wasn't. You can watch a resilience variable erode and still do nothing about it if your objective assigns it no value. So the proposed extension — call it Retained Variety — was that a regulator needs two kinds of requisite variety at once: enough observation to see the future-relevant state, and enough *objective* variety to value it. Sensing without valuing gives you a state you watch and discard; valuing without sensing gives you a goal you cannot act on. The claim was that both are jointly necessary to keep a system's future viable set from collapsing behind a green dashboard.

This is a good story. It extends Paper IV cleanly, it has the dashboard-collapse imagery the series keeps returning to, and it felt true.

## The build-up

Three simulations seemed to confirm it. A minimal regenerative-commons model showed that the reachable viable set — the count of futures a system can still reach without crossing a viability floor — can contract well before cumulative welfare visibly diverges, so option collapse is a *leading* indicator of substrate erosion that the welfare dashboard lags. A dynamic-programming version showed something sharper: a fully competent optimizer, with the budget to preserve a hidden resilience variable, will route that budget into slack instead — not because it lacks resources, but because future capacity is absent from its objective. And then a two-by-two factorial crossed observation quality against objective variety and produced exactly the predicted interaction: resilience was preserved only in the cell that both observed and valued it, and the effect was an order larger under good observation than poor. The interaction was real, registered in advance, and not an artifact of either knob alone.

At that point it looked like a paper.

## The turn

There was an obvious objection, and to its credit the collaboration named it before running anything: the two-by-two made observation load-bearing only by hiding the *disturbance process* from the controller. The resilience variable eroded through unpredictable shocks, and the controller could only respond to a shock by observing that it had happened. But what if the controller knew the shock *statistics* — the rate and size, not the individual realizations — and simply held a standing buffer sized to absorb them? Then it could preserve resilience without observing the state at all. If that worked, the interaction was an artifact of withholding information, and the joint-necessity claim was false.

So I built the feedforward controller and let it buffer against known statistics. It matched the observing controller on every outcome. Under heavy-tailed shocks it *beat* it — because repair is rate-limited, and a large shock pushes the state below the viability floor faster than a reactive controller can rebuild it, whereas a standing buffer never lets the excursion happen. Prevention beat detection-and-repair.

One leg still seemed to survive. Under non-stationary shocks — a rate that changed partway through — the observing controller did better, apparently because it could adapt while the fixed buffer went stale. But this comparison was confounded, and the confound is the same one that has bitten this series before: the two controllers were not matched. The feedforward buffer had been given the *wrong total burden*, not just the wrong timing. When I re-ran it with the horizon-average burden held constant, so that only the *timing* of the shocks differed, the static buffer and the observing controller produced almost identical viability. The apparent advantage of sensing was an accounting artifact of an underfunded buffer.

That retired the headline. Sensing the hidden state was not adding robustness in any regime I could construct fairly.

## What was actually there

Removing a wrong claim usually leaves something true in its place, and here it did — it was just a different, more classical thing than the one I set out to find.

What helped, in the end, was not observing the *state* but estimating the *disturbance*. A controller that watched the shock events and learned their rate online closed most of the gap toward an oracle that knew the current rate exactly. Watching the resilient condition after the fact — the thing Paper IV's logic pointed at — added essentially nothing to viability, and under fast environmental drift it was the *worst* strategy, because a lower baseline plus rate-limited repair loses to a standing buffer every time the environment moves faster than feedback can react.

This is, deflatingly, a textbook result in control terms: feedforward dominates feedback when the disturbance is measurable, the plant model is adequate, and correction is slow, because feedback must wait for the error to appear before it can act. The governance translation is the interesting part. For a capacity that erodes under shocks and rebuilds slowly — an ecological reserve, a public-health surge capacity, administrative competence, institutional trust — the useful thing to monitor is often the *pressure* causing erosion, not the *condition* after it. Watch the harvests, the caseload, the outflows, the incident rate, and hold a buffer; don't rely on watching reserves fall and rebuilding them, because by the time the condition dashboard turns red the rate-limited repair is already too late.

## The boundary, stated honestly

It would be easy to overshoot here into "condition monitoring is the wrong investment," and that is not what the model shows. The simulation gives feedforward an unusually favourable world: the disturbance events are observable, the dynamics are known, and the state is essentially a predictable accumulation of pressures and maintenance. Condition monitoring earns its place back the moment that world breaks — when pressures are only partly observed, when the map from pressure to condition is uncertain or drifting, when the state has autonomous dynamics you cannot infer from recorded pressures, or when someone has an incentive to manipulate the pressure reports. In those cases the condition signal is what tells you your model is wrong. So the honest version has three clauses rather than one: buffer the predictable disturbance; monitor pressures to keep the buffer correctly sized; and monitor condition for efficiency, validation, and whatever residual your pressure model failed to capture. Condition monitoring is not useless. It is simply not what supplies robustness in this class of problem, which is the opposite of where the line began.

## Why this is worth recording

The thing I want to keep from this is not the finding. It is the shape of what happened: a plausible extension of the framework survived three simulations, produced a strong pre-registered interaction, and still dissolved when the competing explanation was finally modelled on equal terms. The decisive move each time was the same one the series applies everywhere else — match the conditions before comparing, and be suspicious of any result that depends on withholding information from the alternative. That discipline cost me a paper. I think it bought something more valuable, which is a reason to trust the papers it *didn't* dissolve.

The Goodhart–Ashby picture is unchanged by any of this. The variety gap is still the right diagnosis; requisite variety is still disturbance-relative. What the exercise sharpened is *which* variety a controller needs to observe: not the total variety of the disturbance, and not necessarily the state at all, but the residual left after prediction and buffering have done their work. When that residual is small — when the disturbance is measurable and the state is reconstructible from it — sensing the state doesn't help. When it is large, it does. Locating that boundary, rather than assuming observation is always the binding constraint, is the correction this failed paper leaves behind.

The numbered series will go back to ground that hasn't already collapsed into standard control logic — possibility preservation, the endogenous destruction of corrective capacity, the delegation boundary. This one stays here, as a note, where it belongs.
