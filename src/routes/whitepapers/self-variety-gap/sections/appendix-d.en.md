## Appendix D: Simulation Architecture — The Self Stability Simulator

This appendix outlines a simulation model that makes the self‑variety gap and the Goodhart–Ashby synthesis for the self concretely visible. The model extends the logic of the Governance Stability Simulator (Paper I) and the value‑function collapse demonstrator (Appendix C of *The Variety Gap*) to the domain of an individual life. 

### D.1 System Description

The simulation models a person as a dynamical system with **N** internal state dimensions, each representing a causally relevant aspect of wellbeing:

- **H(t)** : physical health (energy, immune function, absence of illness)
- **R(t)** : relational integrity (depth and authenticity of close relationships)
- **M(t)** : existential meaning (sense of purpose, coherence, direction)
- **C(t)** : career / contribution (productive engagement, recognition, growth)
- **L(t)** : leisure / restoration (rest, play, aesthetic experience)

Additional dimensions can be added or removed. The dimensions are coupled: neglecting health reduces career performance over time; neglecting relationships reduces meaning; and so forth. The true state of the self at time *t* is the vector **x(t)** = [H(t), R(t), M(t), C(t), L(t)]ᵀ.

The system evolves according to:

**x(t+1) = A · x(t) + B · u(t) + d(t) + drift**

where:
- **A** captures natural decay and cross‑dimensional coupling (e.g., health decays slowly without attention; meaning decays if relationships are poor).
- **B** translates investments of time, energy, and attention (**u**) into changes in each dimension.
- **d(t)** are disturbances — external shocks (illness, loss, conflict) and internal fluctuations (mood, energy).
- **drift** maintains equilibrium in the absence of disturbance and control.

### D.2 Value Architectures (Controllers)

The simulation compares two personal value architectures that differ only in their **dimensionality**, not in their effort or competence.

**Architecture 1D (Single‑Metric)**
- The person’s value function tracks only one dimension — for example, career success: **J₁ = C(t)**.
- The observation channel **C_self** projects the full self‑state onto the career axis; all other dimensions are unobserved. The person attends only to signals about performance, recognition, and advancement.
- Control law: **u(t) = K · (C_target − C_obs(t))**, where **K** is a gain and **C_obs** is the noisy observation of career. The person invests effort whenever career performance is below the target, with no awareness of the costs to other dimensions.

**Architecture ND (Multi‑Dimensional)**
- The person’s value function tracks *n* dimensions simultaneously, where *n* is adjustable by the user (e.g., *n* = 3: career, health, relationships).
- The observation channel includes those dimensions, with some noise. The person attends to a richer set of signals.
- Control law: **uᵢ(t) = Kᵢ · (xᵢ_target − xᵢ_obs(t))** for each tracked dimension *i*. Effort is allocated to close gaps in any dimension that is perceived as deficient.

Both controllers have access to the same total effort budget per time step; the only difference is the dimensionality of their value architecture and the resulting allocation of attention and action.

### D.3 Coupling and the Collapse Mechanism

The critical structural feature is **cross‑dimensional coupling**. Health affects career productivity; relationships affect meaning; meaning affects motivation to maintain health. The simulation implements a simple linear coupling:

- Career output at time *t* depends on **C(t) · f(H(t))**, where *f* is a monotonically increasing function that reduces productivity when health is low.
- Meaning depends on **M(t) · g(R(t))**, where *g* captures the contribution of relational depth to a sense of purpose.

The 1D controller, blind to health and relationships, initially succeeds: career investment yields career returns. But as health and relationships silently decline (because no effort is allocated to them), the coupling terms begin to degrade career performance. The controller responds by *increasing* career investment — the only lever it knows — which further accelerates the decline of the excluded dimensions. This is the Goodhart–Ashby mechanism: the narrow metric destroys the conditions on which its own success depends.

Eventually, career performance collapses despite maximum effort, because the underlying health and relationship dimensions have fallen below critical thresholds. The collapse appears sudden and inexplicable to the 1D controller, which has no categories in which to perceive the causes.

The ND controller, observing health and relationships alongside career, moderates its investment before the excluded dimensions reach dangerous levels. Career performance grows more slowly but does not collapse. The system reaches a stable, multidimensional equilibrium.

### D.4 User‑Adjustable Parameters

The simulation is designed as an interactive tool for exploring the self‑variety gap. Key parameters the user can adjust include:

- **Number of tracked dimensions (n)** : from 1 (narrow) to N (full).
- **Gain (K)** : the intensity of corrective effort. High gain with low dimensionality accelerates collapse.
- **Coupling strength** : how strongly excluded dimensions feed back on the tracked metric. Stronger coupling produces faster collapse for narrow architectures.
- **Disturbance level** : the frequency and magnitude of external shocks. Higher disturbance levels require higher dimensionality to maintain stability.
- **Initial conditions** : starting values for each dimension, allowing exploration of different life configurations.

### D.5 Expected Outputs

The simulation produces time‑series plots showing:

1. **Trajectories of all N dimensions** under each architecture, with the collapse of untracked dimensions and the eventual collapse of the tracked metric in the 1D case clearly visible.
2. **The self‑variety gap G_self over time**, computed as the difference between the effective dimensionality of the disturbance environment and the dimensionality of the active value architecture.
3. **A “crisis detector”** that flags when any dimension falls below a critical threshold.
4. **A summary comparison** of mean wellbeing, crisis frequency, and total effort expended under each architecture.

### D.6 Relevance to the Variety Gap

This simulation is a direct instantiation of the self‑variety gap model:

- The 1D controller has **dim(V_self) = 1**; the disturbance space has **dim(D_self) = N** (plus couplings). **G_self** is large.
- The excluded dimensions (health, relationships, meaning) are causally coupled to the tracked metric (career). Optimizing the proxy without monitoring the excluded dimensions eventually destroys the correlation.
- The collapse follows the Goodhart–Ashby dynamics: the narrow metric optimizes away its own informational basis.
- The ND controller, with a higher **dim(V_self)**, manages **G_self** and avoids collapse.

The simulation makes the abstract mechanics of the self‑variety gap tangible. It allows users to see, in simplified form, how a life governed by a single metric inevitably destabilizes — and how expanding the dimensionality of what one values can restore stability.

### D.7 Reproducibility

A reference implementation of the Self Stability Simulator is available in the companion repository (see “Simulation Code” in the supplementary materials). The simulation uses standard Python with NumPy and Matplotlib; no specialized packages are required. Users can run the simulation, adjust parameters through a simple interface, and generate the figures described above. 

**Figure D.1: Self-variety gap collapse in a five-dimensional personal system**

![Figure D.1](/whitepapers/images/self-variety-gap/self-stability-simulator.png)

The 1D controller (tracking only career) initially applies maximum effort to career advancement. This effort directly drains health through overwork (physiological cost of sustained high performance). As health falls below 70% of baseline, career productivity enters exponential decline—the same effort yields progressively less output. The controller, unable to perceive health, responds by increasing effort further, accelerating health depletion. This creates recurring boom-bust cycles visible in the career trajectory (middle panel): brief recoveries when accumulated rest allows temporary health restoration, followed by deeper crashes as the controller immediately re-depletes the recovered capacity.

Health stabilizes near collapse (~15-20), relationships decay to ~45, and career oscillates between 10 and 70 despite continuous maximum effort. The system enters a chronic crisis state with crisis fraction = 0.1. The person is working as hard as possible but achieving progressively worse outcomes—the canonical burnout pattern.

The ND controller (tracking health, relationships, career, and leisure) distributes effort across dimensions. By maintaining health above the 70% threshold, it avoids triggering the career penalty entirely. All tracked dimensions stabilize near baseline with low variance. Career performance is steady at ~70—lower than 1D's peaks but without the catastrophic troughs. Crisis fraction = 0.0.

The summary comparison (bottom left) shows nearly identical mean wellbeing (67.2 vs 68.7) because 1D's brief peaks compensate for its deep troughs when averaged. But the *lived experience* differs radically: ND provides stable, predictable functioning; 1D produces chronic instability and recurring crises. The identical effort budgets (bottom right) demonstrate this is architectural failure, not motivational deficit.

This is the personal Goodhart-Ashby synthesis: a value architecture with dim(V_self)=1 cannot maintain stability when the excluded dimension (health) is causally coupled to the tracked metric (career). The narrow optimization destroys its own informational and physiological basis.
