## Canonical Terms, Precise Definitions, and Cross-Series Variant Mapping

*Version 1.0 — for use across all series outputs: country reports, organisational reports, engineering papers, capstone, and derivative materials.*

---

### How to Use This Document

This glossary establishes a canonical vocabulary for the series. Where earlier reports used variant terminology for the same concept, the canonical term is given here along with a mapping of the variants. Future outputs should use the canonical term exclusively. Existing reports may retain their original phrasing where revision is impractical, but should note the canonical equivalent on first use.

---

## Core Structural Concepts

---

### Variety Gap (G)
**Canonical term.** *Variants in series: "observability gap," "signal deficit," "dimensionality mismatch."*

The structural mismatch between the effective dimensionality of the disturbance environment a governance system must govern (V_environment) and the effective dimensionality of that system's observation architecture (V_observation).

**Formal statement:** G = V_environment − V_observation

When G > 0, the governance system cannot perceive all the dimensions along which the system it governs can be disturbed. The excluded dimensions do not cease to operate; they accumulate as externalities until they force themselves into visibility through crisis.

When G exceeds a critical threshold (G_crit), noise variance in the governance system's observation channel exceeds surviving signal variance. The system is then constitutionally unobservable: no institutional quality improvement can recover the information that was lost upstream of the decision layer.

**Cross-domain applications:** In democratic representation, the variety gap manifests as preference invisibility through deep representation chains. In commons governance, it manifests as observational inadequacy relative to the resource system's multi-scale dynamics. In organisational governance, it manifests as Resolution Lock-In at the scale for which the institution was optimised.

*See also: Observability Threshold, Legibility Compression Principle, Resolution Lock-In.*

---

### Observability Threshold
**Canonical term.** *Variants in series: "constitutional unobservability," "SNR threshold," "signal-to-noise crossing."*

The critical value of the Variety Gap (G_crit) at which the signal-to-noise ratio in a governance system's observation channel falls below unity. Below this threshold, the information reaching the decision layer is dominated by the noise properties of the governance machinery rather than by the true state of the governed system.

Above the threshold: the policy layer has a degraded but informative signal; statistical and institutional methods can extract genuine information from it.

Below the threshold: the policy layer is responding primarily to the structural properties of its own representation and aggregation mechanisms. Institutional quality improvements cannot restore signal fidelity, because the information was destroyed before it arrived.

The threshold is not a fixed value; it depends on the noise characteristics of each aggregation layer, the aggregation ratios involved, and the degree of coupling between disturbance dimensions.

*Formally derived in Engineering Paper III (The Observability-Democracy Connection). Applied to commons governance in Engineering Paper IV. Generalised to value architectures in Engineering Paper VI (The Variety Gap).*

---

### Legibility Compression Principle
**Canonical term.** *Variants in series: "aggregation loss," "compression mechanism," "information destruction through aggregation."*

Every governance system must reduce the dimensionality of its environment to remain computationally tractable. This compression is necessary — no finite institution can perceive everything — but it is irreversibly lossy. The information lost in compression accumulates as externalities until it forces itself into visibility through crisis.

The principle has three components:
1. **Compression necessity:** All governance requires some reduction of environmental complexity.
2. **Irreversibility:** Information destroyed in aggregation cannot be recovered downstream, regardless of institutional quality.
3. **Accumulation:** Excluded dimensions do not disappear; they continue to generate effects that eventually re-enter the observable space as crises the system cannot explain.

The Legibility Compression Principle is the unifying mechanism behind the Variety Gap across all domains: GDP compression in central banks, diagnostic code compression in healthcare, citation metric compression in universities, representation chain compression in democracies, aggregate quota compression in fisheries governance.

---

### Requisite Variety
**Canonical term.** *No significant variants in series; derived directly from Ashby (1956).*

The minimum observation and response dimensionality a governance system must possess to stabilise a governed system. Formally: a regulator cannot stabilise a system whose variety exceeds the regulator's own variety (Ashby's Law of Requisite Variety).

Applied to governance: a governance architecture whose observation architecture has lower dimensionality than the disturbance environment it faces will produce uncontrolled variance in outcomes — crises, collapses, and failures that appear unexpected but are structurally predictable.

**Governance implication:** The question "does this governance system have requisite variety?" is equivalent to asking "is the Variety Gap below the Observability Threshold?"

---

### Coordination Failure Tax
**Canonical term.** *Variants in series: "compounding failure cost," "multiplicative failure effect."*

The hidden, continuous cost imposed on any governance system operating below requisite variety across multiple architectural dimensions simultaneously. The tax compounds multiplicatively rather than additively: each failure mode acts on what remains after the previous failure modes have degraded governance capacity.

**Formal statement:** G_effective = G_baseline × (1−f₁) × (1−f₂) × (1−f₃) × (1−f₄)

Where each fᵢ represents the fractional capacity destroyed by each simultaneous failure mode.

**Key implication:** A governance system with four simultaneous architectural failures, each destroying 50% of capacity, does not operate at zero capacity — it operates at approximately 6% of baseline (0.5⁴ = 0.0625). Small improvements across multiple failure modes simultaneously produce disproportionate gains through compounding in reverse.

*Formally derived in Engineering Paper V (The Coordination Failure Tax).*

---

## Governance Architecture Concepts

---

### Observation Channel
**Canonical term.** *Variants in series: "observation architecture," "sensing infrastructure," "information channel."*

The complete pathway through which information about the state of a governed system reaches the decision-makers who act on it. The observation channel encompasses sensors (what is measured), transmission mechanisms (how measurements travel), aggregation structures (how measurements are combined), and filters (what is discarded at each stage).

The observation channel determines what governance can see, and therefore what it can respond to. Channel properties — latency, signal fidelity, aggregation ratio, dimensionality — place hard structural ceilings on governance performance that cannot be raised by improving the quality of decisions made on the basis of the channel's output.

*Three critical properties of any observation channel:*
- **Latency (τ):** The delay between a condition emerging in the governed system and information about it reaching the decision layer.
- **Signal fidelity (σ):** The accuracy with which the channel transmits the true state of the governed system. Degrades at each aggregation stage.
- **Dimensionality:** The number of independent signal dimensions the channel can transmit. Determines whether the Variety Gap is above or below the Observability Threshold.

---

### Latency (τ)
**Canonical term.** *Variants in series: "response delay," "decision lag," "dead-time."*

The total delay between a disturbance occurring in a governed system and a corrective response taking effect. In governance systems, latency accumulates across multiple stages: detection, reporting, aggregation, deliberation, decision, legislation, implementation.

**Critical property:** Latency places a hard ceiling on the maximum response gain a stable governance system can deploy. Specifically: K_max ≈ 1/(τ × |A|), where A captures system dynamics. A system with high latency cannot respond aggressively to crises without producing oscillation and instability. This constraint is mathematical, not political — it cannot be overcome by political will, institutional quality, or increased resources.

**Frequency implication:** A controller with latency τ cannot stabilise disturbances faster than f_max ≈ 1/(2τ). This means every single-scale governance system has a characteristic frequency gap — classes of disturbances it structurally cannot respond to.

*Formally derived in Engineering Papers I and II.*

---

### Signal Fidelity
**Canonical term.** *Variants in series: "signal quality," "information accuracy," "observation noise (σ)."*

The degree to which the signal arriving at the decision layer accurately represents the true state of the governed system. Signal fidelity degrades at each aggregation stage, with each reporting layer, and over time as delayed signals describe conditions that have already changed.

Formally: y(t) = x(t) + ε, where x(t) is the true state, y(t) is the observed state, and ε is noise with variance σ². High signal fidelity means σ is small; low signal fidelity means σ is large and the controller is acting on a distorted image of reality.

**Critical interaction:** Signal fidelity and latency compound each other. A system that observes inaccurately and acts slowly is doubly handicapped — by the time a distorted signal produces a delayed response, the underlying reality may have changed entirely.

---

### Frequency Gap
**Canonical term.** *Variants in series: "timescale mismatch," "response speed mismatch," "bandwidth limitation."*

The class of disturbances that a given governance architecture structurally cannot stabilise because their frequency exceeds the maximum controllable frequency of the system's characteristic latency (f_max ≈ 1/2τ).

Every single-scale governance system has a frequency gap: disturbances that move faster than the system's response cycle (typically security crises, financial contagion, acute health events) and disturbances that move slower than the system's ability to sustain coherent intervention (typically demographic transitions, institutional decay, ecological degradation, climate change).

**The frequency gap is topological, not parametric.** It cannot be closed by adjusting the gain, resources, or institutional quality of a single-scale controller. It can only be closed by a multi-scale architecture in which each layer governs the frequency band its latency allows it to reach.

*Formally derived in Engineering Paper II (Fractality as Stability).*

---

### Fractal Governance Architecture
**Canonical term.** *Variants in series: "multi-scale governance," "nested governance," "polycentric governance architecture."*

A nested hierarchy of governance layers in which each layer is matched to the timescale of the disturbances it is responsible for managing. Faster layers have lower latency and higher signal fidelity; slower layers have higher latency and observe broader aggregations. Each layer handles the frequency band its latency allows it to reach.

**The critical property:** A fractal architecture closes all frequency gaps simultaneously. No single-scale architecture can do this. The fractal architecture is not a governance preference — it is the stability-optimal response to a multi-frequency disturbance environment, for the same structural reasons that the human nervous system, the immune system, and the internet are fractal.

**Governance division of function:**
- *Local layer (low τ):* Fast, context-specific disturbances; high signal fidelity; high gain.
- *Regional layer (medium τ):* Medium-frequency pressures; regional aggregation; moderate gain.
- *Global layer (high τ):* Slow secular drift; system-wide aggregation; low gain.

Each layer governs what its latency allows and nothing more. A layer that attempts to govern disturbances outside its bandwidth either misses them (high-latency layer trying to handle fast shocks) or produces oscillation (low-latency layer trying to track slow drift).

*Formally derived in Engineering Paper II.*

---

### Subsidiarity
**Canonical term.** *No significant variants in series; note: used in both political and technical senses.*

In its control-theoretic sense (as used in the engineering papers): the principle that decision authority should sit at the lowest governance level capable of handling the relevant disturbances — specifically, the level whose latency and signal fidelity allow it to govern the disturbance type in question.

This is not a political preference for local governance. It is a structural requirement derived from the averaging problem (Engineering Paper I): centralized controllers aggregating local signals cannot distinguish spatial variation in conditions and therefore apply uniform responses to heterogeneous situations, producing both under-response where conditions are worst and over-response where conditions are acceptable.

**Important distinction:** Subsidiarity as a routing protocol (the technical usage here) differs from subsidiarity as a shield (the political usage in which subsidiarity is invoked to resist coordination regardless of whether local capacity is adequate). The series argues for the former and against the latter.

*Formally derived in Engineering Paper I (Governance Stability Simulator). Applied to multi-level governance in Engineering Paper II and the EU country report.*

---

### Averaging Problem
**Canonical term.** *Variants in series: "spatial blindness," "aggregation-induced spatial blindness," "locality information loss."*

The structural consequence of centralised observation: when a controller observes only a system-wide mean, the spatial variation in conditions is destroyed. A severe crisis at two nodes and stability at eight nodes registers as a modest system-wide dip. The controller responds to the modest dip, not the severe crisis — simultaneously under-responding at the crisis nodes and disrupting healthy nodes with unnecessary intervention.

The averaging problem is not a failure of the central controller's competence or resources. It is a consequence of the architecture. The spatial information destroyed in aggregation cannot be recovered by any improvement to the decision-making process downstream, because the information was discarded before it arrived.

*Formally derived in Engineering Paper I (Governance Stability Simulator).*

---

## Democratic and Representational Concepts

---

### Preference Invisibility
**Canonical term.** *Variants in series: "preference signal attenuation," "representation chain noise," "democratic observability failure."*

The structural condition in which citizen preferences cannot be reliably transmitted through deep representation chains to the policy layer, because aggregation loss and noise accumulation across multiple layers destroy signal fidelity below the Observability Threshold.

Each representation layer performs two operations simultaneously: it aggregates lower-level signals (destroying within-group variance) and introduces noise from the imperfections of any real representation mechanism. Aggregation loss is multiplicative; noise accumulation is additive. After sufficient layers, noise variance exceeds surviving signal variance and the system is no longer transmitting preferences — it is transmitting the noise properties of its own machinery.

**Empirical implication:** Systems operating below the Observability Threshold will show near-zero correlation between average citizen preferences and policy outcomes. This is not primarily a story of elite capture (though capture may be present); it is a story of structural information loss that would occur even in perfectly honest, well-resourced representative institutions.

*Formally derived in Engineering Paper III (The Observability-Democracy Connection).*

---

### Representation Chain Depth
**Canonical term.** *Variants in series: "layer count," "chain length," "aggregation depth."*

The number of intermediating layers between citizen preferences and the policy layer through which those preferences must travel. Each additional layer introduces aggregation loss and noise. Representation chain depth is the primary determinant of whether a democratic system operates above or below the Observability Threshold for preference transmission.

The Observability Threshold for representation chains is crossed at approximately two to three layers under realistic noise parameters. Most national democratic systems operate through four to six layers (citizen → local representative → regional body → national parliament → cabinet → implementing agency).

**Implication:** Institutional reforms that improve the quality of each layer without reducing chain depth cannot push a below-threshold system above the threshold. The threshold is a property of the chain structure, not the quality of individual layers.

---

## Institutional Dynamics Concepts

---

### Resolution Lock-In
**Canonical term.** *Variants in series: "institutional scale trap," "optimisation ceiling," "paradigm lock-in" (Japan-specific variant).*

The condition in which an institution becomes structurally trapped by the resolution level it was optimised for. The architecture that enabled its success at that resolution prevents its functioning at any other.

Resolution Lock-In has three components:
1. **Competence at designed resolution:** The institution performs excellently within its optimised scale and scope.
2. **Blindness beyond that resolution:** The same architecture that enables competence within the designed scale systematically excludes signals from outside it.
3. **Self-reinforcing lock:** Professional identity, incentive structures, observation channels, and cultural narratives all reinforce the existing resolution, making departure from it progressively more costly.

**Cross-domain instances:**
- *Courts:* Optimised for individual dispute resolution; cannot perceive systemic patterns.
- *Central banks:* Optimised for inflation targeting; cannot perceive financial stability, distributional, or ecological dimensions.
- *Universities:* Optimised for disciplinary depth; cannot integrate across disciplines.
- *Healthcare systems:* Optimised for standardised throughput; cannot perceive clinical complexity.
- *Frontier AI organisations:* Optimised for deployment velocity; cannot maintain alignment coherence.
- *Japan (country-level):* Optimised for post-war stability paradigm; cannot replace it.

*Introduced in the capstone working paper (Coordination Failure as Structural Condition) as a cross-series unifying mechanism.*

---

### Immune System
**Canonical term.** *Variants in series: "political immune system," "reform resistance mechanism," "capture architecture."*

The adaptive stabilisation mechanisms that protect the existing governance architecture from challenge. Critically: immune systems are not barriers added onto governance architectures from outside — they are outputs of those architectures. They are the predictable behaviour of rational actors responding to the incentives the current architecture provides.

**This distinction matters for reform strategy.** An immune system that is an external obstacle can be outmanoeuvred. An immune system that is an architectural output will be regenerated by the architecture after each outmanoeuvring, until the architecture itself is changed.

**Universal form — Symbolic Adaptation:** The most common immune response across all domains is symbolic adaptation: the adoption of reform language, symbols, and procedural forms while leaving the underlying architecture unchanged. Examples: "green QE" without portfolio change; interdisciplinary centres without tenure reform; safety teams without binding authority; anti-corruption drives within unchanged coalitional structures.

*Discussed in every country and organisational report. Theorised systematically in the capstone working paper.*

---

### Breakthrough-Capture Loop
**Canonical term.** *Brazil-specific instance of a more general mechanism; variants: "reform absorption cycle," "innovation capture."*

The recurrent pattern in which a governance breakthrough — a genuine demonstration of institutional capacity that creates real value — is surrounded, extracted, and consumed by the existing capture architecture before it can compound into durable systemic improvement.

The general mechanism: breakthrough → value creation → capture architecture extracts value (without being dismantled by the breakthrough) → gains dissipate → system returns to low-capacity baseline → next breakthrough must start from approximately the same baseline.

Brazil's specific version involves coalitional presidentialism as the extraction mechanism, but analogues appear across the series: China's Campaign-Overshoot cycle, Japan's accommodation of pressure without paradigm change, the EU's Negotiation-Dilution Loop.

---

### Bypass Architecture
**Canonical term.** *Variants in series: "workaround," "shadow system," "routing around."*

An institutional pathway that routes around a dysfunctional core to achieve needed functions. Bypass architectures are a rational response to blocked institutional cores, and many of the most promising reform proposals in the series take this form.

**The bypass trap:** Bypasses relieve pressure on the dysfunctional core without reforming it. Over time, the unreformed substrate constrains the bypass's effectiveness while the bypass's success removes the political pressure that might force core reform. The bypass must therefore be designed with explicit **sunset conditions** — mechanisms ensuring it creates increasing pressure on the core rather than indefinitely substituting for it.

**Examples:** India's Digital Public Infrastructure (bypassing the unreformed legal and administrative substrate); Brazil's proposed Algorithmic Bypass (bypassing the capture architecture for budget allocation); US cross-state compacts (bypassing federal gridlock); the Shadow University (bypassing disciplinary integration failure).

---

### Adaptive Coherence
**Canonical term.** *Variants in series: "requisite governance," "multi-scale stability."*

The structural property of a governance architecture that simultaneously maintains variety (the capacity to perceive the full dimensionality of the disturbance environment at each relevant scale) and coherence (the capacity to coordinate action across those scales without suppressing the local signal fidelity that makes variety valuable).

Adaptive coherence is not a value or an outcome — it is a measurable property of governance architecture, expressible as the gap between V_environment and V_observation at each scale and the latency of coordination mechanisms across scales.

**Why both properties are necessary:**
- Variety without coherence: the distributed governance capacity cannot be assembled into coordinated action (US integration deficit; EU coherence deficit).
- Coherence without variety: the coordinated action is calibrated to a degraded model of reality (Russia's Legibility Deficit; China's Calibration Deficit; Japan's Continuity Trap).

*Introduced in the capstone as the organising concept for Part III (Design and Vision).*

---

### Performative Reform Trap
**Canonical term.** *Variants in series: "symbolic adaptation" (as applied to universities specifically), "reform absorption."*

The mechanism by which institutions incorporate the rhetoric, symbols, and procedural forms of reform while leaving the underlying incentive architecture unchanged. Distinct from simple reform failure: in the Performative Reform Trap, the institution actively produces reform-shaped outputs that relieve external pressure without producing internal transformation.

The trap is most developed in the university report but the mechanism appears across all five organisational reports and many country reports. It is the institutional-scale expression of Symbolic Adaptation (see Immune System).

---

## Ecosystem and Commons Concepts

---

### Observational Inadequacy
**Canonical term.** *Variants in series: "monitoring dimensionality deficit," "commons observability failure."*

The specific form of the Variety Gap as it applies to commons and resource governance: the governance system's observation architecture has fewer independent signal dimensions than the resource system has disturbance frequency bands.

**Consequence:** The governance system cannot distinguish states that require different responses. It authorises extraction or use at rates appropriate to the observed dimensions while the unobserved dimensions degrade. Collapse occurs along the unmeasured axes and appears unexpected.

**Three observational gaps in commons governance:**
1. *Fast band gap:* Annual aggregate surveys cannot perceive monthly shocks requiring rapid local response.
2. *Seasonal band gap:* Aggregate biomass counts cannot perceive phenological and reproductive dynamics.
3. *Slow band gap:* Short monitoring programmes cannot detect decadal carrying-capacity trends that only multi-generational observation baselines can resolve.

*Formally derived in Engineering Paper IV (Requisite Variety and the Commons).*

---

### Proximity (as governance concept)
**Canonical term.** *Variants in series: "ecological embeddedness," "territorial governance capacity."*

Physical, seasonal, and relational proximity to a governed system is the primary mechanism by which governance architectures acquire observation dimensionality across all relevant disturbance timescales. Proximity is not merely access to data — it is the accumulated observational capacity generated by continuous multi-dimensional presence within a system across time.

**Three forms:**
- *Physical proximity:* Low-latency, continuous, multi-dimensional local observation.
- *Seasonal proximity:* Access to phenological and cyclical signal dimensions requiring multi-year presence.
- *Relational proximity:* Distributed sensing through networks of embedded observers, plus intergenerational knowledge encoding slow-variable signals in governance protocols.

**Governance implication:** Governance systems positioned within their resource or social systems have observational capacity that remote administrative systems structurally cannot replicate, regardless of technology investment. This grounds the series' treatment of indigenous governance sovereignty as a structural (not merely cultural or historical) argument.

---

## Value Architecture Concepts

---

### Value Architecture
**Canonical term.** *Variants in series: "objective function," "value function," "optimization target."*

The explicit or implicit set of objectives that a governance system optimises for, which determines which dimensions of reality are operationally visible to it. A value architecture is, structurally, an observation channel: it selects which states of the world register as successes or failures requiring response, and consigns everything outside its scope to noise.

**The Goodhart-Ashby Synthesis:** Any value architecture with dimensionality lower than the variety of the system it governs will eventually optimise away its own ability to perceive the system's true state. The proxy diverges from the target not primarily through gaming but through the compression mechanism destroying the correlational structure that made the proxy informative.

*Developed in Engineering Paper VI (The Variety Gap).*

---

### Variety Gap Dynamics
**Canonical term.** *See also: Variety Gap.*

The time-varying behaviour of the Variety Gap under conditions where the disturbance environment expands (through technological change, social change, ecological change) faster than the governance system expands its observation dimensionality.

**Formal model:** dG/dt = α − β·A(V)

Where α is the emergence rate of new disturbance dimensions, A(V) is the adaptation rate of the value architecture, and β is adaptation efficiency.

When β·A(V) `<` α: the gap grows; the system progressively loses observational contact with its environment.

When β·A(V) ≥ α: the gap is managed; the system tracks the changing disturbance environment.

**The meta-governance imperative:** Because α > 0 in any changing world, a static value architecture is a self-blinding one. Long-run viability requires not only adequate current dimensionality but an institutional capacity to expand the value architecture as new disturbance dimensions emerge — an asymptotic approach toward fuller reality-integration that no finite system can complete but every viable system must pursue.

*Formally derived in Engineering Paper VI.*

---

## Country and Signature Pattern Terms

The following terms are specific to individual country analyses but are defined here for cross-reference clarity.

| Term | Country | Canonical meaning |
|------|---------|-------------------|
| **Accumulation Deficit** | Brazil | The structural inability to compound governance breakthroughs into durable systemic capacity. |
| **Calibration Deficit** | China | The structural inability to keep the state's model of reality aligned with reality, because the architecture required for accurate feedback is the same architecture the system's survival logic requires it to suppress. |
| **Continuity Trap** | Japan | The condition in which an architecture optimised for stability within a paradigm becomes structurally incapable of replacing that paradigm even when it is visibly failing (a country-specific instance of Resolution Lock-In). |
| **Legibility Deficit** | Russia | The condition in which the governance architecture cannot perceive reality without threatening itself; the most acute form of the Variety Gap in which the system's survival logic actively destroys its own observation channel. |
| **Substrate Deficit** | Nigeria | The absence of the basic institutional infrastructure on which other governance architectures depend; the prerequisite condition for any other governance function. |
| **Throughput Constraint** | Finland | A second-order governance challenge: the inability to convert excellent foresight and broad consensus into transformation at the required speed. Distinct from first-order failures (execution, integration, feedback) in that it is only visible once those are resolved. |
| **Boundary Deficit** | Israel | The structural inability to establish and stabilise foundational boundaries (territorial, constitutional, demographic, identity) that would allow transition from permanent emergency governance to a sustainable political order. |
| **Integrative Closure Deficit** | Spain | The structural incapacity to metabolise constitutional pluralism into stable shared institutions; the condition in which deliberate ambiguity, necessary for transition, becomes permanent deferral. |
| **Coherence Deficit** | EU | The structural inability to translate agreement into aligned, timely, system-wide action across sovereign member states — arriving together, in time. |
| **Integration Deficit** | France, USA | In France: the missing connective architecture between national decision and local reality. In the USA: the inability to convert distributed capability into coordinated action despite persistent, legitimate disagreement. (Note: same term, different structural expressions at different scales.) |
| **Execution Deficit** | Germany | The structural inability to translate available resources into effective delivery; the breakdown between decision and implementation. |
| **Feedback Deficit** | Sweden | The structural inability to detect disturbing signals early, share them across institutional boundaries, acknowledge them honestly, and act before they compound. |
| **Synchronisation Deficit** | India | The structural inability to align governance capacities across radically different scales, administrative qualities, and formal/informal divides. |
| **Control-Delivery Mismatch** | UK | The structural condition in which decision-making authority is concentrated where context is weakest, and context is richest where capacity to act is weakest. |

---

## Notes on Terminology Management

**Terms to retire or mark as superseded:**
- "Observability gap" → use **Variety Gap**
- "Observation noise" (when referring to signal quality generally) → use **Signal Fidelity** (low signal fidelity = high noise)
- "Paradigm lock-in" (Japan) → use **Resolution Lock-In** with Japan as a country-specific instance
- "Political immune system" → use **Immune System** (the "political" qualifier is unnecessary and implies the mechanism is only political in character)
- "Shadow system" / "workaround" → use **Bypass Architecture**

**Terms that are genuinely distinct and should not be collapsed:**
- *Legibility Compression Principle* and *Variety Gap* are related but distinct: the former describes the mechanism; the latter describes the structural condition it produces.
- *Observational Inadequacy* and *Preference Invisibility* are both Variety Gap manifestations in different domains (commons governance and democratic representation respectively), not synonyms.
- *Frequency Gap* and *Latency* are related but distinct: latency is a property of the observation channel; frequency gap is the class of disturbances that latency makes ungovernable.
- *Resolution Lock-In* and *Continuity Trap* (Japan): the former is the general cross-series mechanism; the latter is its Japan-specific cultural-institutional expression.
- *Immune System* and *Performative Reform Trap*: the former names the stabilisation mechanism; the latter names a specific technique the immune system deploys.

---

*This glossary should be treated as a living document. Where new reports introduce new terms, or where existing terms prove inadequate to new cases, revisions should be made here and propagated to other materials.*
