## Terms, scoped definitions and historical cross-references

**Version 2.0 — November 2026**

### How to use this document

This glossary reconciles terminology with the accepted source corrections VI v0.2, VIII v0.2, XX v0.2, XIV v0.1, XVI v0.1, XIX v0.1, XXIII v0.2 and Self I v0.2. It supersedes the earlier glossary definitions, not the unaudited report manuscripts. Historical variants are search aids, not evidence that concepts are synonyms. [R] denotes a scoped formal result; [IP] an in-principle interpretation; [H] a hypothesis or heuristic. Reported numerical results must be distinguished from proof and empirical validation. See the revised field guide for practical use.

## Core Structural Concepts

### Variety Gap

**Historical labels (v1.0):** "observability gap," "signal deficit," "dimensionality mismatch."

Task-relative observational inadequacy: consequential distinctions that a specified observation architecture leaves unresolved. In VI v0.2's noiseless static additive model, let D be the linear disturbance space, L the tolerated subspace, C the observation map and K = D ∩ ker C. Adequate deterministic regulation requires K ⊆ L; this is also sufficient if all corrections in −D are available. The hidden consequential gap is `g_hidden = dim K − dim(K ∩ L)`. The counting bound `g_count = dim D − dim(D ∩ L) − rank(C|D)` is a lower bound on `g_hidden`; a nonpositive count is not a certificate of adequacy. [R within this model]

The historical `G = V_environment − V_observation` is a dimension-count shorthand, not the corrected gap. Equal ranks can leave different consequential directions hidden. Dynamic histories, noisy observations and restricted actions require separate analyses. The historical VIII composite scores and thresholds are withdrawn; no new universal scalar replaces them.

### Observability Threshold

**Historical labels (v1.0):** "constitutional unobservability," "SNR threshold," "signal-to-noise crossing."

A threshold defined for a particular observation or decision model, with the criterion and direction stated explicitly. A signal-to-noise ratio (SNR) of one is not a universal loss-of-information boundary. For independent scalar Gaussian signal and noise in an additive channel, SNR = 1 gives 0.5 bits of mutual information about the signal. [R within this example]

Paper III's historical representation-chain criterion is model-specific and its source is not re-audited here. VI and VIII no longer support identifying a universal `G_crit` with SNR = 1. Do not use the former above/below-threshold country bands.

### Legibility Compression Principle

**Historical labels (v1.0):** "aggregation loss," "compression mechanism," "information destruction through aggregation."

A historical name for the selection and aggregation of information into a tractable representation. A many-to-one mapping can erase distinctions in its output; the output alone cannot uniquely reconstruct inputs in the same equivalence class. Side information, history, an alternative channel or intervention may resolve those distinctions. Compression can also preserve everything relevant to a task.

A crisis from an omitted distinction is a conditional causal hypothesis, not an inevitable consequence of compression. Paper 0 and VI motivate investigation; report examples (GDP, diagnostic codes, citation metrics, quotas) are candidate cases, not proof of one mechanism. [IP/H]

### Requisite Variety

**Historical labels (v1.0):** No significant variants in series; derived directly from Ashby (1956).

Ashby's disturbance-relative regulation principle: available responses must be adequate for the distinctions that matter to the specified outcomes. Neither raw environmental complexity nor the number of objective terms supplies the relevant response count. XX v0.2 gives a deterministic action-cover bound: for each world w let A(w) be the adequate actions; the minimum size of an action set intersecting every A(w) bounds the number of distinguishable controller messages from below, under its stated assumptions. [R within model]

Observation, action availability and tolerance of disturbances must be assessed together. Requisite variety is not equivalent to passing an SNR or country-score threshold.

### Coordination Failure Tax

**Historical labels (v1.0):** "compounding failure cost," "multiplicative failure effect."

Paper V's proposed model of compounding constraints. If each of four sequential stages retains a fraction (1 − fᵢ) of the capacity entering it, retained capacity is Q = Q₀ × (1 − f₁) × (1 − f₂) × (1 − f₃) × (1 − f₄). Four retentions of 0.5 give 0.0625 of baseline. [R for the stipulated product]

This is not a universal law of institutional losses or a derivation of VIII's former index. Dependencies, compensatory mechanisms and common causes may change the functional form. V's institutional transfer remains outside this review.

## Governance Architecture Concepts

### Observation Channel

**Historical labels (v1.0):** "observation architecture," "sensing infrastructure," "information channel."

The pathway carrying evidence from a governed system to a specified observer or decision process: sensors, reporting, transmission, aggregation and filters. Record what is accessible, to whom, at what time and with what errors. Observation architecture may include multiple such channels and histories.

Latency, fidelity and relevant distinctions characterize a channel; they do not alone determine decision quality or implementation. Objectives and observation are distinct (VI v0.2).

### Latency (τ)

**Historical labels (v1.0):** "response delay," "decision lag," "dead-time."

Elapsed time between explicitly defined events, such as disturbance onset, detection, decision, implementation or effective response. Separate stages rather than using observation delay and total response delay interchangeably. VIII v0.2 proposes dated episode cohorts, prespecified endpoints and recording right-censored nonresponses.

Delay can constrain stable feedback gain and response bandwidth in specified models. Earlier I–II estimates (`K_max ≈ 1/(τ × |A|)`, `f_max ≈ 1/(2τ)`) are historical model-dependent expressions, not general bounds; their derivation is not re-audited here.

### Signal Fidelity

**Historical labels (v1.0):** "signal quality," "information accuracy," "observation noise (σ)."

Accuracy of transmitted evidence relative to a specified reference, time and task. Bias, noise, missingness and loss of distinctions are different problems. In the additive example y = x + ε, σ² can denote noise variance; this is not VIII's former dimensionless fidelity parameter σ. Use explicit notation.

Aggregation can reduce noise as well as discard detail. Public transparency and internal evidence availability are distinct. No fixed relationship between fidelity, rank and delay is assumed.

### Frequency Gap

**Historical labels (v1.0):** "timescale mismatch," "response speed mismatch," "bandwidth limitation."

A range of disturbance timescales for which a specified controller fails a stated regulation or response criterion. Fast and slow disturbances may create different challenges; a slow drift may be missed for reasons other than bandwidth.

Paper II motivates multi-scale design [IP]. The gap depends on plant, controller, information, feasible interventions and performance criterion. The universal topology and latency-only claims of the historical glossary are not retained as general results; II awaits any necessary source review.

### Fractal Governance Architecture

**Historical labels (v1.0):** "multi-scale governance," "nested governance," "polycentric governance architecture."

A proposed nested or recurrent arrangement of governance functions across scales, allocating tasks to levels suited to their information, authority, resources and timescales. Polycentric, nested and fractal describe related but not identical arrangements.

Local, regional and global roles are design options rather than fixed frequency bands. Coordination overhead, cross-boundary couplings and local capacity matter. No universal optimality or closure of every frequency gap is established here. [IP; Paper II source not re-audited]

### Subsidiarity

**Historical labels (v1.0):** No significant variants in series; note: used in both political and technical senses.

A governance principle assigning decisions to the lowest level capable of performing the task adequately, with escalation or cooperation when the task exceeds that level's capacity or crosses its boundaries. Adequacy includes rights, resources, authority and coordination, not only sensing.

Subsidiarity as routing differs from subsidiarity as a shield against necessary coordination. I–II motivate the design argument; a particular distribution of authority is not deduced from information loss alone. [IP]

### Averaging Problem

**Historical labels (v1.0):** "spatial blindness," "aggregation-induced spatial blindness," "locality information loss."

Different spatial or group-level distributions can have the same mean. A decision based solely on that mean cannot distinguish them. For example, severe difficulties at two nodes may be hidden in a ten-node average; the appropriate response depends on the task and available differentiated actions.

The loss is conditional on the data supplied, not on centralization by itself. Disaggregated data, additional signals or a suitable common action can mitigate the problem. Paper I motivates this distinction. [IP for institutional application]

## Democratic and Representational Concepts

### Preference Invisibility

**Historical labels (v1.0):** "preference signal attenuation," "representation chain noise," "democratic observability failure."

A proposed condition in which decision-makers lack access to consequential distinctions among the preferences or experiences of the people affected by a decision. Aggregation, reporting errors, selective attention, strategic incentives or exclusion may contribute.

Distinguish access, interpretation, influence and legitimate disagreement. Paper III's chain model is not independently re-audited here; neither SNR below one nor a long chain establishes near-zero empirical preference–policy correlation. [IP/H]

### Representation Chain Depth

**Historical labels (v1.0):** "layer count," "chain length," "aggregation depth."

The number of specified intermediary stages through which a preference signal travels. Define the endpoint, actual pathway, alternative routes and what each stage aggregates or transmits.

The historical two-to-three-layer crossing is a reported model-dependent result in III, not a universal institutional limit. Layer quality, parallel channels and encoding may change transmission. Count alone does not determine adequacy. [IP/H; source audit pending if needed]

## Institutional Dynamics Concepts

### Resolution Lock-In

**Historical labels (v1.0):** "institutional scale trap," "optimisation ceiling," "paradigm lock-in" (Japan-specific variant).

A candidate mechanism in which competence at a chosen resolution or task is accompanied by costly difficulty changing representation or practice when a different resolution becomes consequential. Establish competence, relevant omissions and the mechanism maintaining the constraint separately.

The capstone proposes examples in courts, central banks, universities, healthcare, AI and Japan. These are hypotheses; excellence at one task does not prove blindness elsewhere. Related to but not equivalent to model lock-in or XXIV's particular learned-observer mechanism. [IP/H; capstone and XXIV audit open]

### Immune System

**Historical labels (v1.0):** "political immune system," "reform resistance mechanism," "capture architecture."

A metaphor for mechanisms maintaining an institutional arrangement in the face of proposed change. Incentives, veto rights, professional norms, resource constraints and legitimate safeguards may all matter; their effects must be distinguished.

Symbolic adaptation is one candidate response, not a universal or necessarily dominant form. Resistance is not itself evidence of capture or dysfunction. Test recurring behavior against alternatives and distinguish legitimate opposition. [H; VII/IX and report interpretations remain open]

### Breakthrough-Capture Loop

**Historical labels (v1.0):** Brazil-specific instance of a more general mechanism; variants: "reform absorption cycle," "innovation capture."

The Brazil report's hypothesis that gains from an innovation can be appropriated or dissipated before building durable institutional capacity: breakthrough → gain → capture or dissipation → renewed constraint. Test each link with dated evidence.

Comparisons with China, Japan and the EU are analogies, not evidence of a shared cycle or inevitable return to baseline. [H; report sources not audited here]

### Bypass Architecture

**Historical labels (v1.0):** "workaround," "shadow system," "routing around."

An alternative institutional pathway providing a function that an existing pathway does not deliver adequately. Bypasses may add capacity, preserve continuity, fragment accountability or reduce pressure for core reform.

The bypass trap is a candidate failure mode, not an inevitable outcome. Review or sunset provisions are design options; XIV v0.1 treats identification and review as conditional, and a sunset must not interrupt essential services without a safe alternative. India’s digital infrastructure, Brazil’s proposed algorithmic bypass, US compacts and the Shadow University are report examples or proposals. [IP/H]

### Adaptive Coherence

**Historical labels (v1.0):** "requisite governance," "multi-scale stability."

A design aim: maintain task-relevant distinctions and the capacity to coordinate learning and action across relevant scales without unnecessarily erasing local evidence. Coordination can fail despite good sensing; local capability can coexist with ineffective joint action.

No validated scalar measure or equality with the variety gap is established. Use the task-relative profile (VIII v0.2), including decision and actuation, to explore the aim. The capstone's application remains under review. [IP/H]

### Performative Reform Trap

**Historical labels (v1.0):** "symbolic adaptation" (as applied to universities specifically), "reform absorption."

A hypothesis that reform-shaped outputs (announcements, procedures, reporting) satisfy external demands without delivering the intended change in behavior or outcomes. Distinguish deliberate symbolism from incomplete implementation, delay, infeasibility and real improvements.

VIII v0.2 proposes separate coding of enactment, resources and independent follow-up evaluation, with partial and unknown cases. The university report motivates the term; prevalence across organizations is unverified. [H]

## Ecosystem and Commons Concepts

### Observational Inadequacy

**Historical labels (v1.0):** "monitoring dimensionality deficit," "commons observability failure."

A failure of available observation histories to resolve distinctions consequential for a specified task, at the required time and uncertainty level. In commons governance, investigate the conditions relevant to extraction, regeneration and intervention, rather than equating the count of frequency bands with observation rank.

Fast shocks, seasonal reproduction and slow carrying-capacity changes are possible monitoring targets. An omission need not imply collapse: precautionary rules, buffers and other information may suffice. IV's particular commons results are not re-audited here. [IP/H]

### Proximity (as governance concept)

**Historical labels (v1.0):** "ecological embeddedness," "territorial governance capacity."

Physical, seasonal and relational embeddedness may support timely, contextual and accumulated knowledge. Distinguish physical access, long-term observation and relationships that enable testimony and interpretation.

Local and Indigenous knowledge can be important; assess actual access, authority and outcomes rather than assuming remote systems cannot obtain relevant evidence. Rights and sovereignty have independent normative and legal grounds and are not conditional on a sensing advantage. [IP; IV motivates inquiry]

## Value Architecture Concepts

### Value Architecture

**Historical labels (v1.0):** "objective function," "value function," "optimization target."

The objectives, priorities, constraints and evaluative rules governing what counts as a desirable or unacceptable outcome. An objective function is one possible formal representation of part of a value architecture, not the observation channel. A scalar objective may value many attributes; multiple objectives may rely on the same evidence.

VI v0.2 distinguishes evaluation from observation, modelling, decision and actuation. Priorities may influence exposure and sensor budgets, but this is conditional. The old Goodhart–Ashby identity and inevitable self-blinding claim are withdrawn (VI; XX v0.2).

### Variety Gap Dynamics

Changes in task-relative adequacy as the disturbance environment, tolerated outcomes, evidence, models or feasible actions change. Policy can affect exposure and learning; exposure is not equivalent to identification. Dynamic observability and fixed-time hidden directions are distinct.

The historical dG/dt = α − β·A(V) may be stipulated for a differentiable dimension-count surrogate with separately defined rates; it is not a general law for `g_hidden` or the withdrawn composite. Positive growth need not reach a threshold. Meta-governance is the proposed capacity to review and revise relevant components, not a duty to expand every objective or representation. [IP/H; VI and VIII v0.2]

## Additional terms from corrected papers

### Task-relative Diagnostic Profile

VIII v0.2 proposes recording evidence and uncertainty separately for evaluation, observation, modelling, decision and actuation, for a specified task, population, outcomes, rights, deadline and feasible actions. The eight historical indicator families and attention allocation are candidate observations. They need not be independent. The profile is a research proposal, not a validated scale or country ranking. [IP/H]

### Proxy–Target Ordering

On a specified feasible outcome set X, weak monotonic safety means M(y) > M(x) implies T(y) ≥ T(x) for all pairs. A strict reversal violates it. A proxy tie can conceal different target values without creating a strict reversal; tie-robust safety also excludes harmful ties. Neither omitted attributes nor their reachability alone proves a strict reversal, and possible reversal does not predict a realized search path. XX v0.2; established ordering criterion. [R]

### Policy-dependent Exposure and Identification

Exposure concerns which states, interventions and evidence a policy makes available. Identification concerns whether the resulting observations and model distinguish relevant alternatives. A different policy may reveal evidence without resolving the inference; a fixed policy may already identify parameters. Persistent excitation is a sufficient condition in specified estimation problems, not a universal requirement for all learning. VI v0.2 and XIV v0.1; XXIV and SO comparisons remain scope-bound. [IP/H for institutional transfer]

### Reform Implementation and Symbolic Share

For a defined cohort, record enactment, implementing resources and independent evaluation separately (met, not met, unknown, not yet assessable). The historical binary coding has ρ = 1 − p, so p and ρ are not independent indicators. In general report partial and unknown outcomes instead of forcing a binary complement. VIII v0.2. [R for complement; IP/H for protocol]

### Functional Roles in Model Ecologies

Governors, sentinels and bridges name candidate functions: performance, warning and functional transfer. Historical predictive rankings, retrospective warning labels and threshold-graph centrality do not demonstrate independent roles, prospective warning or actual translation. XIX v0.1. [IP/H]

### Behavioral Dissimilarity and Adaptation Cost

Descriptive differences in model outputs are distinct from the directed cost of adapting a model under a particular update rule and budget. A symmetric descriptive dissimilarity need not be a metric (the historical squared-distance construction is not one); it need not predict the cost or optimal route. XXIII v0.2. [IP/H for governance]

### Replenishment and Metastability

Replenishment supplies alternatives; depletion removes them. Source availability and control authority are distinct. XVI v0.1 gives a finite irreducible partition-chain model under interior parameter conditions and an exact stationary law for its linear-copying case; long switching times do not establish irreversible collapse or a universal external-source requirement. [R within the model; IP/H for governance]

## Country and Signature Pattern Terms

Reading index of the reports’ proposed themes. The table covers the 19 jurisdictions in the supplied report registry (France and USA share one row). It does not validate the diagnoses, and no ranking or threshold follows from the labels. The four additional Swedish terms are working translations; the published titles are in the report registry.

| Term | Jurisdiction | Theme to investigate |
|---|---|---|
| Accumulation Deficit | Brazil | Persistence of institutional gains |
| Calibration Deficit | China | Model correction and feedback |
| Continuity Trap | Japan | Paradigm revision |
| Legibility Deficit | Russia | Incentives around accurate information |
| Substrate Deficit | Nigeria | Formal and informal provision |
| Throughput Constraint | Finland | Ability to act on foresight |
| Boundary Deficit | Israel | Institutional and political settlement |
| Integrative Closure Deficit | Spain | Constitutional integration and deferral |
| Coherence Deficit | EU | Coordination of implementation |
| Integration Deficit | France, USA | National–local translation (France); distributed coordination (USA) |
| Execution Deficit | Germany | Delivery and sensemaking |
| Feedback Deficit | Sweden | Feedback and correction pathways |
| Synchronisation Deficit | India | Alignment across scales |
| Control-Delivery Mismatch | UK | Location of authority and delivery capacity |
| Boundary Expansion Deficit | Switzerland | Interdependence and boundary adequacy |
| Tournament Trap | South Korea | Consequences of competition under effective scarcity |
| Interface Race | Bhutan | Coupling objectives to actuation during acceleration |
| Feasibility Debt | Netherlands | Commitment before durable feasibility |

## Notes on Terminology Management

**Withdrawn or restricted:** The old dimension difference is not a general variety gap; VIII’s scores, intervals, threshold bands, trajectory classes and pilot validation are withdrawn. Do not identify value architecture with observation channel or Goodhart with Ashby. Self I’s old personal gap and dissolution threshold are not psychological diagnostics.

**Keep distinctions:** Observational inadequacy, signal noise, preference invisibility and variety gap are not automatic synonyms. Fidelity is not noise variance. Latency is not frequency gap. Resolution lock-in and continuity trap may be related but need separate evidence. Immune system is a metaphor; symbolic reform is a possible pattern. Bypass is not always capture. Use Variationsgapet in new Swedish prose; Varietetsgapet is a historical spelling variant.

The glossary is a living reference. New definitions require source attribution, stated scope and independent review where needed. This edition does not certify the remaining reports or their empirical evidence.
