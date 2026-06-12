# Appendix C — Case Coding Protocol

---

## C.1 Purpose and Registration Discipline

This protocol governs the small-N coding study of Part VI. Its discipline, registered in §6.0, is implemented here as four rules:

1. The protocol version, case roster, and variable definitions are frozen, with date, before any fidelity value is assigned.
2. Coding proceeds in the blinded order of C.6.
3. Every admitted case is reported in the published table, including cases whose values embarrass the prediction.
4. Deviations from the protocol are permitted only with a logged entry in C.9 stating what changed, when, and why — before the change is applied.

## C.2 Case Admission

A case is one policy directive satisfying all of:

1. **Fixed content:** an identifiable authority finalised the directive's operative content at a datable moment (statute, programme decision, central-bank launch decision).
2. **Quantified objective:** the directive states, or official documents contemporaneous with it state, a quantified target (jobs, services, coverage, days of work) against which delivery can be measured. Where the objective was explicitly declared unmeasurable by the auditing institution (Universal Credit's employment goal), the case is admissible only with the substitute delivery metrics named at admission (C.4, Table C-1).
3. **Third-party outcome documentation:** at least one source from tiers 1–3 of the source hierarchy (C.4) exists.
4. **Reconstructable chain:** the implementation pathway can be documented from public organisational and process records for the measurement window.

Admission is decided on criteria 1–4 *before* outcome magnitudes are examined; a case may not be dropped after its fidelity value is known. Roster target: six to ten cases spanning the depth scale, at least two with coded depth ≤ 2.

## C.3 Variable 1 — Delegation Depth (n), with Clearance Width (w)

**Definition.** n is the number of organisationally distinct layers on the modal delivery path that must receive, translate, and retransmit or apply the directive between the content-fixing authority (start node) and the delivery transaction (end node). The start node is the level at which operative content was finalised — not necessarily the legislature; the end node is the citizen- or firm-facing transaction.

**Counting rules:**

1. A layer is counted when it is organisationally distinct (own management, budget line, or statutory identity) AND performs translation — reformatting the directive into its own instruments, categories, plans, or systems — on the modal path. 
2. **Serial versus parallel:** units operating in parallel at the same tier (co-approvers, co-signers, concurrent clearances) do not add to n. They are recorded in a separate variable, **clearance width w_i** — the number of distinct approvals required at tier i — with W = Σ w_i the case's total clearance count. Depth n captures the chain model's serial composition; W captures Pressman and Wildavsky's joint-action count, which mixed the two. Oakland's seventy clearances over thirty decision points is the canonical illustration of why the distinction must be coded rather than assumed. The analysis treats n as primary and W as exploratory.
3. **Pure conduits:** a unit that passes the directive or its funds without translation counts toward n only if it holds delay or veto capacity; flag such layers `conduit`.
4. **Automated layers:** a digital system on the modal path counts as one layer, flagged `automated`, with a note on what it can and cannot express (feeds Variable 4).
5. **Within-case variation:** where one directive descends multiple distinct chains (MGNREGA's states), each chain is a sub-case with its own n, coded from its own documentation (C.7).
6. **Evidence and window:** n is coded from organograms, statutes, programme guidelines, and process documentation *as of the measurement window*, with a source cited per layer. Performance information is inadmissible as evidence for n (this is the firewall against smuggling capacity into depth).

## C.4 Variable 2 — Implementation Fidelity (F)

**Definition.** F = delivered outcome / stated quantified objective, measured at the horizon, capped to [0, 1]. The horizon is the directive's own deadline where one exists (OZG: 2022-12-31); otherwise five years from operative start. Both the raw ratio and any horizon-adjustment are reported.

**Source hierarchy.** Values are taken from the highest available tier; lower tiers are admissible only when higher tiers are silent:

1. Supreme audit institutions and statutory auditors (NAO, Bundesrechnungshof, CAG of India).
2. Randomised or quasi-experimental evaluations.
3. Official statistics with independent verification — including the survey-against-register design, where an independent household survey is compared with the administrative delivery database; the confirmation ratio is itself a fidelity instrument (MGNREGA Bihar: 59 per cent of officially recorded working households confirmed by survey).
4. Peer-reviewed observational evaluations.

Media reports are background only; no F value rests on them. Where admissible sources conflict, code F as an interval [F_low, F_high] and run the analysis at both ends.

**Table C-1 — per-case operationalisation (fixed at admission):**

| Case | Objective basis | F numerator / denominator | Primary sources |
|---|---|---|---|
| Oakland EDA | Jobs promised; funds committed | Jobs delivered / promised; funds productively disbursed / committed | P&W 1973 (book; resolve the 80%-row arithmetic against the printed table) |
| MGNREGA (state sub-cases) | Statutory entitlement; work on demand | Households obtaining work / households seeking; person-days per demanding household / entitlement; survey–register confirmation ratio where available | NSS-based studies (Dutta et al.); CAG audits; NBER w22803 |
| Universal Credit | Substitute delivery metrics (per C.2.2) | First payments on time / total; online verification achieved / 90% plan | NAO 2018, 2020 |
| OZG | 575 services online by 2022-12-31 | Services online to specification / 575 (4% per BRH); any-form online / 575 (19%; ~105 per Bundestag) | Bundesrechnungshof; Bundestag; NKR Monitor |
| PIX | Coverage/uptake (no quantified ex-ante target — flag; existence-proof entry) | Adult-population adoption at horizon | BCB statistics; peer-reviewed studies |
| [France / Estonia / additions] | [at admission] | [at admission] | [tier 1–3 only] |

## C.5 Variables 3 and 4 — Threat (T) and Task Variety (V)

**T (discriminator column, per §4.1):** low / medium / high — the documented material stake of implementing-layer actors in the directive's failure or distortion (rents, budgets, authority, positions threatened by faithful delivery). Evidence basis recorded per case (e.g., the MGNREGA political-economy literature; procurement-rent documentation). T is a property of the implementing layers' interests, not of public controversy.

**V (task variety, per §2.5 and §4.3):** low / medium / high — the intrinsic dimensionality of the delivery task: how much legitimate case-to-case variation faithful delivery requires. Payments are low-V; complex personal-circumstance assessment is high-V. V is coded from the task's nature, never from delivery performance. V is what permits the depth-for-rank analysis: the model predicts shallow+automated suffices at low V (PIX) and fails at high V (Universal Credit), and the roster must not treat those two as exchangeable data points.

## C.6 Coding Order and Blinding

1. Freeze protocol and roster (C.1, C.2).
2. Code n, w, T, V for all cases from structural and documentary sources only — fidelity sources unopened. Log completion date.
3. Code F per Table C-1.
4. **Second coder:** if a human second coder is unavailable, a second coding is run by an AI system given only this protocol and the per-case source documents, blind to the first coder's values and to the paper's prediction; disagreements are adjudicated by Björn with a documented rationale per disagreement; agreement statistics are reported. If no second coding occurs, the paper says so in §6.1 rather than implying otherwise.

## C.7 MGNREGA Sub-Protocol

1. **Sub-case selection rule (fixed in advance; choose one and log it):** (a) all states covered by the Dutta–Murgai–Ravallion–van de Walle NSS analysis, or (b) all states above a rural-household threshold. No discretionary additions after fidelity data are seen.
2. **Measurement window:** primary window matching the NSS-based literature (2009–2012); a second window after electronic fund-management rollout coded for robustness, separately, because the technology changed the chain itself.
3. **Depth per state:** from state-specific implementation structures (Gram Panchayat → block programme officer → district programme coordinator → state department, plus state-specific tiers and parallel bodies), each layer sourced; states differ in both n and w, which is the design's point.
4. **Fidelity per state:** the Table C-1 instruments; rationing rate (sought-but-not-obtained) inverted into the demand-fulfilment ratio.
5. **Covariates recorded, not absorbed:** state capacity (the rival explanation) coded separately from published indices so the depth–capacity correlation can be reported rather than hidden; T from the political-economy literature per state where documented.
6. **Localisation test (Prediction 2):** where social-audit data attribute discrepancies to administrative tiers, code the tier distribution of discrepancy mass; the prediction is concentration toward the delivery end.
7. **Experimental entry:** the Bihar fund-flow randomisation is a separate row flagged `experimental` — the only manipulated-depth observation in the roster.

## C.8 Analysis Plan (registered)

1. **Primary:** Spearman rank correlation of F against n across the roster (sub-cases weighted so MGNREGA does not dominate by count; weighting rule fixed at freeze). Permutation-based p-value given small N. Interval-coded F analysed at both ends.
2. **Discriminator:** the F–n relation reported within strata of T; the contrasting pattern (F tracking T, not n) is reported as evidence for the adversarial mechanism per §6.4(3).
3. **Depth–rank pattern:** the (n, V, F) configuration examined qualitatively against the §4.3 prediction; with this N it is a pattern check, not a test, and is labelled as such.
4. **Exploratory:** W, and the composite n×W, against F; the localisation distribution (C.7.6).
5. **Power honesty:** with six to ten cases, only large effects are detectable; the study is closer to a sign test than an estimation, and the paper says so. The full study (roadmap Phase 2, Study 3) inherits this protocol with the N it deserves.
6. **Nulls:** reported per §6.4(4), with the construct-revision consequence stated.

## C.9 Deviation Log

| Date | Section | Change | Reason | Before/after fidelity coding? |
|---|---|---|---|---|
| — | — | — | — | — |

*(The log ships with the paper. An empty log is a result.)*
