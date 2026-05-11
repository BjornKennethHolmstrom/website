# Part IV: Limitations

## The noise parameters are illustrative

The noise standard deviations assigned to each layer (0.12 for polling, 0.18 for media, 0.22 for party aggregation, etc.) are estimated values, not empirically measured ones. The specific SNR values and the precise layer count at which the unobservability threshold is crossed depend on these parameters. Different noise assumptions would shift the threshold.

This matters for quantitative claims but not for the qualitative result. The structure of the argument — aggregation loss is multiplicative, noise accumulation is additive, geometric decay beats linear growth — holds for any positive noise values and any aggregation ratios greater than one. The threshold will be crossed at some K regardless; the simulation's parameters determine at which K. Empirical measurement of actual noise levels in specific democratic systems would sharpen the quantitative findings without changing the structural conclusion.

## Aggregation ratios are simplifications

Real representation systems do not have clean integer aggregation ratios. A parliament of 349 members representing 10 million voters is an aggregation of approximately 28,653 — not the ratio of 3 or 4 used in the simulation. This means the actual aggregation loss in real systems is far more severe than the simulation models. The simulation understates the problem.

Conversely, the simulation models each layer as aggregating by a fixed ratio uniformly across all groups. Real systems have unequal constituency sizes, malapportionment, and differential turnout — all of which introduce additional structured distortions beyond the simple aggregation modelled here. These factors would worsen the observability outcome further.

## The model does not capture strategic behaviour

Citizens, representatives, parties, and media actors are all strategic. They do not simply transmit preferences; they shape, filter, and amplify preferences according to their own incentives. Party platforms are not noisy averages of member preferences — they are strategic positions designed to attract voters. Media coverage is not a noisy sample of public opinion — it selects for novelty, conflict, and salience.

This means the "noise" in real representation chains is not Gaussian. It is structured noise with systematic biases — biases that consistently over-represent certain preferences (intense minorities, well-organized interests, issues with high media salience) and under-represent others (diffuse majorities, complex trade-offs, long-horizon concerns). The simulation's Gaussian noise assumption treats all distortions as equal and symmetric, which understates the directional character of real representation failures.

## The model has a single policy layer

The simulation models policy as a single scalar response. Real governments are multi-dimensional, multi-departmental, and operate at multiple levels simultaneously. Some policy decisions are made closer to citizens (local government) and some further away (supranational bodies). The unobservability problem varies across these levels — local government with fewer layers between citizen and decision-maker may be above the threshold in ways that national government is not.

This connects to the fractal architecture finding from paper two: a multi-layer governance system that assigns decisions to the most local level capable of handling them is also the architecture that minimises aggregation loss for each decision type. The observability argument and the fractality argument converge on the same structural solution for different reasons.

## Electoral accountability is not modelled

The simulation models policy responsiveness as continuous feedback. Real democratic systems use periodic elections as the primary mechanism for preference transmission. Elections have different information-theoretic properties than continuous feedback: they compress the full multidimensional preference distribution into a binary or small-k choice among candidates, introducing an additional and severe aggregation loss that the simulation does not capture.

The election-as-aggregation problem is in some ways more severe than the continuous representation chain: a citizen's full preference profile across dozens of policy dimensions is collapsed into a single vote, which then enters the same multi-layer aggregation structure modelled here. The effective information content of an election as a preference-transmission mechanism is extremely low by design. This is a limitation of the current model's scope, not a refutation of the underlying argument.

## The analysis concerns preference transmission, not legitimacy

The observability framework addresses a specific question: can citizen preferences be reliably transmitted to the policy layer through the representation chain? It does not address democratic legitimacy in the broader sense — whether citizens accept the authority of their governments, whether outcomes are perceived as fair, whether the process of collective decision-making has value independent of its preference-transmission accuracy.

It is entirely possible that a constitutionally unobservable democratic system is more legitimate — in the sense of being more widely accepted and trusted — than a highly observable participatory system that lacks the same procedural history and institutional embedding. Legitimacy is not reducible to information-theoretic efficiency.

This paper makes no claim about legitimacy. It makes a claim about a specific functional capacity: preference transmission fidelity. These are distinct, and the distinction matters.
