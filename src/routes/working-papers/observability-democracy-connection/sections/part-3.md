# Part III: Structural observations

## The threshold is a phase transition, not a gradient

The SNR curve in Figure 1 might suggest a gradual degradation: systems with more layers are somewhat less responsive, those with fewer somewhat more. This reading understates the finding. The unobservability threshold at SNR = 1 is a qualitative boundary, not a point on a continuous scale.

Above the threshold, the policy layer has a degraded but informative signal. Statistical methods — averaging over time, polling, deliberative processes — can extract genuine preference information from it. The signal is noisy, but the signal is there.

Below the threshold, these methods cannot help. The noise dominates the signal entirely. Additional polling, better survey methodology, more sophisticated parliamentary procedures — all of these operate on the signal after it has arrived at the policy layer. They cannot recover variance that was destroyed in aggregation before it arrived. No institutional improvement within the existing layer structure can push a below-threshold system above the threshold.

This is why the phrase "constitutional unobservability" is appropriate. The constraint is built into the constitutional structure of the representation chain. It cannot be addressed by reforming the institutions that sit at either end of that chain.

## Institutional quality is independent of architectural capacity

The simulation holds institutional quality constant across all architectures. This is a deliberate design choice, and its implication deserves emphasis: a five-layer system staffed by the most honest, diligent, and well-resourced representatives imaginable produces the same observability outcome as one staffed by mediocre or corrupt ones.

This runs counter to the dominant tradition of democratic reform, which focuses almost entirely on institutional quality: reducing corruption, increasing accountability, improving deliberative processes, strengthening civil society, reforming campaign finance. These reforms matter for many reasons. They do not address the observability constraint.

A parliament that better represents the mean preference of its constituency — because it is more honest, more deliberative, more accountable — still destroys the within-constituency variance. A media system that more accurately reports public opinion still aggregates and selects. Each improvement in institutional quality moves the system closer to the theoretical performance ceiling of its layer architecture. That ceiling remains below the unobservability threshold for systems with three or more layers.

The discomfort of this finding is real: it implies that a well-functioning representative democracy is not more capable of reliably transmitting citizen preferences than a poorly-functioning one, in the specific sense that both are operating in the constitutionally unobservable regime. The difference between them lies elsewhere — in legitimacy, in accountability, in the distribution of costs and benefits, in protections against abuse — not in preference transmission fidelity.

## The noise the system tracks instead

If the policy layer is not tracking citizen preferences, what is it tracking? The simulation gives a precise answer: the noise properties of the representation chain itself.

Each layer introduces noise with a characteristic signature. Media noise has the properties of media selection dynamics — attention cycles, framing effects, salience biases. Party noise has the properties of party competition — strategic positioning, internal factional balancing, electoral incentives. Parliamentary noise has the properties of deliberative bargaining — coalition formation, agenda control, procedural path dependence.

These are not random. They are structured noise sources with predictable properties. A policy system operating below the SNR threshold responds to this structured noise as if it were signal. It tracks media cycles. It responds to party positioning. It is sensitive to parliamentary procedure. It produces policy that reflects the properties of the representation machinery rather than the preferences of the citizenry.

This is not a cynical observation. These noise sources are not invisible — they are the subject of enormous political science literature on agenda-setting, party competition, and legislative bargaining. What the observability framework adds is a precise explanation for why this occurs even in well-functioning systems: not because of capture or dysfunction, but because the signal was already overwhelmed by noise before the institutional dynamics began.

## The spatial dimension of preference destruction

The heatmaps in Figure 1 make visible something that aggregate tracking error statistics obscure: the destruction of citizen preferences is spatially uniform across all groups, in all architectures below the threshold.

In Architectures A and B, the policy layer's "observed" preference is essentially the same for every citizen group — a noise-dominated scalar broadcast back across the entire citizen population. The genuine spatial variation in preferences — the fact that cluster 0 shifted dramatically at t = 40 while clusters 1, 2, and 3 did not — is invisible to the policy layer. It applies a spatially undifferentiated policy to a spatially differentiated population.

This is precisely the averaging problem from paper one, now formalized in preference space. A central controller applying uniform policy across diverse nodes produces collateral distortion at nodes that did not need the intervention. The observability framework shows that this is not a choice — it is a structural necessity when spatial preference information has been destroyed in the representation chain. The policy layer cannot apply differentiated policy to preference structures it cannot observe.

## Genuine preference change is systematically slow to detect

The two genuine preference shift events in the simulation — at t = 40 and t = 80 — reveal a secondary structural property: detection latency scales with layer count in a way that compounds the noise problem.

Each layer introduces both noise and delay. For Architecture A, with total latency of 18 time steps, a genuine preference shift at t = 40 does not fully propagate to the policy layer until t = 58. By that point, the signal carrying the preference shift information has passed through five noisy aggregation stages and is indistinguishable from background noise. Architecture D detects the shift within one to two time steps and responds within three to four.

For slow-moving policy problems — the kind that democratic systems are supposed to handle through deliberate collective choice — this latency may be acceptable. For problems that require response within the detection window, the five-layer architecture is structurally blind. It will not detect the shift until long after the optimal response window has closed.

The combination of spatial destruction, temporal delay, and noise dominance means that Architecture A's policy does not respond to genuine preference shifts — it continues oscillating in response to its own noise. The democratic event (a genuine change in what citizens want) is invisible in the policy output.
