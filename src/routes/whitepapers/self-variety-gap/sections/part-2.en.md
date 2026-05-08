### Part II — The Optimization Turn: Personal Values as Observation Architectures

Part I established that the self can be modeled as a feedback control system and that narrow personal values destroy information about the self in the same way that aggregated governance metrics destroy information about a society. This part formalizes that parallel: a person’s values are not merely preferences; they are an observation architecture that determines which dimensions of their own life they can perceive.

#### 2.1 The Structural Identity

Consider a person navigating daily life. At any moment, they inhabit a vast state space of physical sensations, emotional tones, relational dynamics, cognitive patterns, and existential intuitions. Most of this is not consciously processed. Attention selects a narrow subset, cognition interprets it through narrative frameworks, and the result is a *perceived self-state* — a compressed, filtered, and often distorted representation of what is actually happening.

This perceptual process is structurally identical to an observation channel in control theory. The true state **x** of the person is projected through an observation matrix **C** — the composite of attention, interpretation, memory, and cognitive bias — to produce a conscious representation **y = Cx + ε**, where **ε** is noise. The person then evaluates this perceived state against their personal value architecture **V** and acts to reduce any discrepancy.

Now consider what determines the content of **C**. A person’s values — what they care about, what they define as success, what they fear as failure — shape attention. The entrepreneur optimizing for venture success notices market signals, investor sentiment, and competitive threats; they may not notice the subtle signals of relationship strain, physical exhaustion, or existential drift. The artist optimizing for creative achievement notices aesthetic possibilities and technical challenges; they may not notice financial precarity or social isolation until these reach crisis levels. The caregiver optimizing for the wellbeing of others notices distress in loved ones; they may not notice the depletion of their own reserves.

In each case, the personal objective function *is* the filter. It selects which dimensions of experience are amplified into conscious relevance and which are attenuated into background noise. The person does not choose to ignore their failing health or their fraying relationships. Their value architecture simply renders those dimensions perceptually inert — they do not register as deviations from the target, so they do not trigger corrective action.

This is the foundational claim: *a person’s objective function is an observation architecture for the self*. What you optimize for determines what you can perceive about your own life. The choice of personal values is, simultaneously, the choice of personal blind spots.

#### 2.2 The Dimensionality of a Personal Value Function

If personal values are observation architectures, then we can characterize them by the same properties we use for any observation channel: dimensionality, aggregation structure, and temporal horizon.

The **dimensionality** of a personal value function is the number of independent life dimensions it tracks. A person whose entire sense of success depends on career advancement is operating with **dim(V_self) ≈ 1**: the vast multiplicity of their existence — health, intimacy, creativity, community, spirituality — is projected onto a single axis. A person who tracks multiple dimensions — say, professional growth, family connection, physical vitality, and creative expression — is operating with a higher **dim(V_self)**. They have a richer perceptual field for their own life.

The critical point is that dimensionality is not about the number of *goals* a person has, but the number of *independent evaluative dimensions* they can distinguish and trade off. A person may have many goals that all reduce to a single underlying metric — for instance, "be admired," "be wealthy," and "be influential" may all be expressions of a single status dimension. The effective dimensionality is the rank of the value space, not the count of items in a goal list.

The **aggregation structure** describes how the value function compresses experience into evaluation. A person who asks "Am I happy?" at the end of each day is aggregating the entire day’s experience — moments of joy, frustration, connection, boredom, meaning, emptiness — into a single scalar judgment. None of the variance within the day survives that aggregation. The information that would have flagged an emerging problem — say, a growing sense of meaninglessness despite pleasant moments — is destroyed in the averaging.

The **temporal horizon** of a personal value function determines which future states are visible. A steep discount rate — a heavy preference for immediate gratification — renders the distant future effectively unobservable. A person optimizing for how they feel right now cannot perceive the slow accumulation of health damage, the gradual erosion of a relationship, or the long‑term consequences of a life path. The signal from those slow dimensions is too faint, too delayed, to compete with the immediacy of the present moment’s metric.

A single‑metric personal value function with high aggregation and steep discounting is, in signal‑processing terms, a narrowband, low‑dimensional observation channel. It is structurally incapable of registering the full variety of the self it is meant to guide.

#### 2.3 Requisite Variety for Personal Value Architectures

Ashby’s Law of Requisite Variety states that a controller can only stabilize a system if its internal variety matches or exceeds the variety of the disturbances it faces (Ashby, 1956). For a person, the "controller" is the set of values and goals that select which life disturbances are attended to and which are not. The "disturbance space" is the full range of physical, emotional, relational, existential, and environmental variation that can push the person away from their desired state.

The extension follows directly: a personal value architecture must possess at least as much dimensionality as the disturbance space of the self, minus the dimensionality of acceptable outcomes. **dim(V_self) ≥ dim(D_self) − dim(G_self)**. If this condition is violated, there exist disturbance dimensions that the person’s value system cannot register. Those disturbances are, in the formal sense, unobservable to the person’s conscious self‑regulation. They accumulate as chronic stress, unexplained anxiety, bodily symptoms, relationship deterioration, or existential unease — until they breach thresholds that force themselves into visibility through crisis.

This is not a normative claim about what a person *should* value. It is a structural prediction about what happens when a person’s value architecture is too narrow for the complexity of their own life. The person who values only career success *will* be blindsided by health collapse, relationship breakdown, or spiritual emptiness — not because they are foolish or shallow, but because their value architecture lacked the dimensions needed to detect those disturbances in time.

#### 2.4 The Goodhart–Ashby Synthesis for the Self

Goodhart’s Law — “when a measure becomes a target, it ceases to be a good measure” (Goodhart, 1975) — was formulated about economic indicators, but its logic extends directly to personal metrics. When a person makes “happiness” their explicit target, they begin to optimize for the feeling of happiness rather than the conditions that naturally produce it. They avoid difficult conversations that would cause short‑term distress but strengthen relationships. They abandon meaningful challenges in favor of comfortable pleasures. They interpret any moment of discontent as a failure of the optimization project, rather than a signal that something needs attention.

The deeper mechanism is architectural. A single metric — happiness, success, control — is an observation channel of rank one. When it becomes the target, the person’s entire self‑regulatory system narrows to that channel. All the information that formerly made the metric a useful proxy for wellbeing was contained in its correlation with the wider state space — a correlation that depended on the person *not* optimizing it directly. The moment happiness becomes the goal, the person begins optimizing away the very conditions — meaningful struggle, authentic vulnerability, openness to the full range of emotion — that made happiness a reliable signal in the first place.

This yields the Goodhart–Ashby synthesis for the self: *any personal value function with dimensionality lower than the variety of the self will eventually optimize away its own ability to perceive the self’s true state.* The person who optimizes for happiness loses the ability to perceive the conditions that produce happiness. The person who optimizes for success loses the ability to perceive the costs they are paying. The person who optimizes for control loses the ability to perceive the adaptive opportunities they are excluding. In each case, the narrow metric destroys the informational basis on which its own success depends.

#### 2.5 The Self‑Variety Gap (G_self)

We can now define the central diagnostic construct for personal governance. Let **Reality_self** denote the true multidimensional state space of the person — physical, emotional, relational, existential, and contextual dimensions at a level of resolution relevant to their wellbeing. The dimensionality of this space, **dim(Reality_self)**, is large and, crucially, not static. As a person ages, enters new relationships, confronts mortality, or develops new capacities, new dimensions of experience become causally relevant. The disturbance space of the self expands across the lifespan.

Let **V_self** denote the person’s value architecture — the set of dimensions they actually track as relevant to success or failure. Its dimensionality, **dim(V_self)**, may be as low as one or as rich as many.

The *self‑variety gap* is:

**G_self = dim(Reality_self) − dim(V_self)**

**G_self** is always positive — no finite value architecture exhausts the reality of a human life — and it tends to grow over time unless the person actively expands their value dimensionality. Life generates novelty; values, once set, tend toward rigidity. The gap is a measure of the person’s structural self‑ignorance: the number of causally relevant dimensions of their own existence that are simply absent from their evaluative landscape.

The larger the gap, the larger the volume of personal reality that can deteriorate without the person ever perceiving it as something that matters — until it becomes a crisis. The dynamics of this gap, the critical threshold where it becomes incapacitating, and the conditions under which it can be managed rather than suffered, are the subject of the next part.

---

