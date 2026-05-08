## Appendix A: Formal Derivation of the Self‑Variety Gap (Static)

This appendix formalizes the extension of Ashby’s Law of Requisite Variety from physical and institutional controllers to the architecture of the self, yielding the condition **dim(V_self) ≥ dim(D_self) − dim(G_self)** used in the main text. The derivation is static: it treats the disturbance space of a person’s life and their personal value architecture as fixed, without modelling their temporal evolution (see Appendix B for the dynamic extension).

### A.1 The Self as a Regulated System

Consider a person at a given moment in their life. Their true state can be represented as a vector **x** ∈ **X**, where **X** is the multidimensional state space of the self — encompassing physical health, emotional condition, relational quality, existential orientation, cognitive capacity, and any other dimensions causally relevant to their wellbeing.

The person is subject to a disturbance vector **d** ∈ **D_self**, where **D_self** is the space of disturbances that can push the self away from its desired condition. Disturbances include external events (job loss, illness, relationship conflict, loss of a loved one, financial strain) and internal dynamics (mood fluctuations, intrusive thoughts, fatigue, existential doubt, the slow accumulation of stress).

The person’s personal value architecture — the set of values, goals, and metrics they use to evaluate their life — defines a goal set **G_self** ⊂ **X**. This is the set of states the person considers acceptable: “I am doing well enough,” “I am on track,” “My life is satisfactory.” The goal set may be narrow (all states where career status exceeds a threshold) or broad (all states where a balance of health, connection, purpose, and security is maintained).

The person does not have direct access to their true state **x**. They perceive themselves through an observation channel:

**y = C_self · x + ε**

where:
- **C_self**: **X** → **Y** is a linear observation matrix determined by the person’s value architecture. It selects which dimensions of the self are consciously tracked.
- **ε** is noise — the combined effect of cognitive biases, attentional limits, emotional avoidance, and the inherent noisiness of introspection.

The personal value architecture *is* the matrix **C_self**. What a person values determines which dimensions of their own existence they project into conscious evaluation. The dimensions of **x** that lie in the nullspace of **C_self** are, in the formal sense, unobservable to the person’s conscious self‑regulation.

### A.2 Variety as Dimensionality

Following Ashby (1956), we define variety as the number of distinguishable states a system can occupy or discriminate. For continuous state spaces, we approximate variety by the *effective dimensionality* — the rank of the relevant vector space.

- **dim(D_self)** = rank of the disturbance space: the number of independent ways the person’s life can push them away from their acceptable states.
- **dim(G_self)** = rank of the goal set: the number of independent directions in which the person is allowed to vary and still consider themselves “okay.” A person with a single, rigid definition of success (e.g., “I must hold a certain title”) has **dim(G_self) ≈ 0** — there is no acceptable variation. A person who can be well in multiple ways has a larger **dim(G_self)**.
- **dim(V_self)** = rank of the observation space **Y**, i.e., the number of independent dimensions the person’s value architecture can track.

### A.3 Ashby’s Law in Dimensional Form for the Self

Ashby’s Law in its original formulation states that a regulator must have at least as much variety as the disturbance space, minus the variety of the acceptable goal set: **V(R) ≥ V(D) − V(G)** (Ashby, 1956). Mapping variety to dimensionality yields:

**dim(V_self) ≥ dim(D_self) − dim(G_self)**  (1)

This is the static requisite variety condition for a personal value architecture. It states: the number of independent life dimensions a person consciously tracks must be at least the number of independent disturbance dimensions they face, minus the number of independent dimensions in which they can accept variation.

If **dim(V_self) `<` dim(D_self) − dim(G_self)**, there exist disturbance dimensions that lie outside the person’s perceptual field. Those disturbances can push the person out of their goal set without the person ever registering a deviation, because their value architecture lacks the axes along which those disturbances are defined. The person experiences the effects — stress, dissatisfaction, bodily symptoms — but cannot trace them to their source.

### A.4 The Self‑Variety Gap

The *self‑variety gap* is defined as:

**G_self = dim(D_self) − dim(G_self) − dim(V_self)**

When **G_self ≤ 0**, the value architecture satisfies Ashby’s condition. The person has sufficient perceptual dimensionality to detect disturbances in the dimensions that matter, and to distinguish which dimensions of their life require attention.

When **G_self > 0**, the value architecture is underdimensional for the disturbance environment of the person’s life. The magnitude of **G_self** measures the volume of causally relevant self‑dimensions that are structurally invisible to the person’s conscious optimization. These excluded dimensions accumulate damage until they breach thresholds — often manifesting as crises that feel sudden and inexplicable to the person experiencing them.

The critical threshold **G_self_crit** is the value of the gap at which the signal‑to‑noise ratio in the self‑observation channel falls below unity — the point at which the person’s conscious model of their own life is more noise than signal. Beyond this threshold, the person cannot recover an accurate picture of their own state, regardless of how much they reflect or how sincerely they try. The condition is structural, not volitional.

### A.5 Relationship to Conant and Ashby

Conant and Ashby (1970) proved that “every good regulator of a system must be a model of that system.” For the self, the “model” is the personal value architecture — the set of dimensions the person tracks and the relationships they implicitly or explicitly assume among them. If the observation matrix **C_self** is rank‑deficient with respect to the disturbance space, the person lacks a complete model of their own life. They are, in those missing dimensions, not a good regulator of themselves — a structural condition that no amount of willpower or positive thinking can remedy.

### A.6 Interpretation and Caveats

This derivation provides a conceptual bridge from Ashby’s Law to the self‑variety gap. It is not an operational measurement protocol. The key limitations are:

1. **Linearity.** Real self‑observation is deeply nonlinear. Cognitive biases, emotional states, and narrative structures introduce distortions that a linear matrix cannot capture. The rank condition captures first‑order information loss; higher‑order dynamics are beyond the present scope.

2. **Dimensionality estimation.** Measuring **dim(D_self)** and **dim(V_self)** in a living person is a significant methodological challenge. Self‑complexity instruments (Linville, 1985) provide a starting point but capture cognitive structure rather than full value dimensionality. Experience‑sampling methods, narrative analysis, and psychometric tools for value diversity could contribute to operationalization.

3. **Static assumption.** The condition applies to a fixed snapshot of a person’s life. It says nothing about how **dim(D_self)** expands across the lifespan or how **dim(V_self)** might be deliberately expanded through practice. The dynamic extension appears in Appendix B.

4. **Goal set interpretation.** A large **dim(G_self)** — a person who can accept many different states as “okay” — reduces the requirement on **dim(V_self)**. This captures the adaptive value of flexibility, non‑attachment, and the capacity to find wellbeing across diverse conditions. A person with rigid, narrow definitions of success needs a much richer value architecture to maintain stability, because they have less tolerance for deviation.

Subject to these limitations, equation (1) expresses the architectural insight of the paper in compact form: a personal value architecture that tracks too few dimensions relative to the complexity of a person’s life is structurally incapable of maintaining stable self‑governance. The self‑variety gap quantifies the deficit. When the gap crosses the critical threshold, the person enters a condition of constitutional self‑unobservability — they cannot perceive the sources of their own distress, and crisis becomes the only available feedback mechanism for restoring awareness.

