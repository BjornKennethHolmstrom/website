## Appendix A: Formal Derivation of the Minimum Value Dimensionality Condition (Static)

This appendix formalizes the extension of Ashby’s Law of Requisite Variety from physical controllers to value architectures, yielding the condition **dim(V) ≥ dim(D) − dim(G)** used in the main text. The derivation is static: it treats the disturbance space and value architecture as fixed, without modelling their temporal evolution (see Appendix B for the dynamic extension).

### A.1 System, Disturbance, and Goal

Consider a system **S** whose state at any time is a vector **x** ∈ **X**, where **X** is a finite‑dimensional vector space over the reals. The system is subject to a disturbance vector **d** ∈ **D**, where **D** is the disturbance space. The system’s dynamics are not modelled directly; we abstract them into the mapping from disturbances to outcomes.

A *governance controller* (a value architecture) attempts to keep the system within a designated goal set **G** ⊂ **X**. The goal set represents the acceptable states of the world as defined by the value architecture. For example, if the value architecture tracks GDP and unemployment, **G** is the set of states where both are within acceptable bounds.

The controller does not observe the full state **x**. It observes a projection:

**y = C x + ε**

where **C**: **X** → **Y** is a linear observation matrix and **ε** is noise. The choice of **C** is determined by the value architecture: it selects which dimensions of the state space are operationally visible.

### A.2 Variety as Dimensionality

Ashby defined variety as the logarithm of the number of distinguishable states. In a continuous state space, we adapt this as the *effective dimensionality* — the rank of the relevant vector space. Specifically:

- **dim(D)** = rank of the disturbance space: the number of independent ways the system can be pushed away from its goal.
- **dim(G)** = rank of the goal set: the number of independent directions in which the system is allowed to vary and still be considered “acceptable.” If the goal is a single point, dim(G) = 0.
- **dim(V)** = rank of the observation space **Y**, i.e., the number of independent signal dimensions the value architecture can distinguish.

This is a simplification: real disturbances may be nonlinear, non‑Gaussian, and dynamically coupled. The rank condition captures the linear case; extensions are possible but beyond the present scope.

### A.3 Ashby’s Law in Dimensional Form

Ashby’s Law in its original formulation: **V(R) ≥ V(D) − V(G)**, where **V(·)** is variety. Mapping variety to dimensionality (for sufficiently regular spaces, taking variety as the logarithm of the number of distinguishable states, variety scales with rank), we obtain:

**dim(V) ≥ dim(D) − dim(G)**  (1)

This is the static requisite variety condition for a controller whose observation channel has rank dim(V). It states: the number of independent signal dimensions the controller can observe must be at least the number of independent disturbance dimensions minus the number of independent dimensions the system is allowed to occupy within the goal set.

If dim(V) `<` dim(D) − dim(G), there exist disturbance dimensions that lie in the nullspace of the observation matrix **C**. Those disturbances can push the system out of the goal set without the controller ever registering a deviation, because the controller’s observation space is orthogonal to them.

### A.4 Application to Value Architectures

A *value architecture* functions as the controller in this schema. It is defined by an objective function **J(x)** that is minimized or maximized, but for the purposes of stability, the relevant property is *which deviations from the desired state are visible as costs*. The effective observation matrix **C** of the value architecture selects those dimensions of the state that enter the objective function.

A value architecture with **dim(V) = k** tracks **k** independent dimensions of the system’s state and is blind to the rest. The minimum dimensionality condition (1) becomes:

**dim(Value Architecture) ≥ dim(Disturbance Space) − dim(Goal Set)**

In the main text, this is simplified to **dim(V) ≥ dim(D) − dim(G)**, with the understanding that **dim(D)** — the effective dimensionality of the disturbance environment — is large and open‑ended in practice.

### A.5 Interpretation and Caveats

This derivation provides a conceptual bridge from Ashby’s Law to the variety gap. It is not an operational measurement protocol. The key limitations are:

1. **Linearity:** Real observation channels are nonlinear. The rank condition captures first‑order information loss; higher‑order interactions between dimensions are not modelled.

2. **Dimensionality estimation:** dim(D) and dim(G) are not directly observable in most governance contexts. Estimating the effective dimensionality of a disturbance environment requires time‑series analysis of historical shocks, which is feasible in principle but nontrivial.

3. **Static assumption:** The condition says nothing about how **dim(D)** or **dim(V)** change over time. It applies to a fixed snapshot. The dynamic case, where **dim(D)** expands and **dim(V)** must adapt, is treated in Appendix B.

4. **Goal set dimensionality:** The term **dim(G)** can be misinterpreted. If the goal set is a single point (e.g., exactly 2% inflation), dim(G) = 0 and the condition is dim(V) ≥ dim(D). If the goal allows a wide range of acceptable variation, dim(G) is larger and the requirement on dim(V) is relaxed. This captures the intuition that a system with loose goals needs less precise observation.

Subject to these limitations, equation (1) expresses the architectural insight of the paper in a compact, falsifiable form: a value architecture that tracks too few dimensions relative to the disturbance environment it faces is structurally incapable of stabilizing the system it governs. The variety gap **G = dim(D) − dim(G) − dim(V)** quantifies the deficit; when **G > G_crit**, the system crosses the dissolution threshold described in Part III.

---

