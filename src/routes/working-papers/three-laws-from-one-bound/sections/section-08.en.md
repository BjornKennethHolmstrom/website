## 8. Method and confidence

Tiers follow the series: **[R]** rigorous, **[IP]** in principle, **[H]** heuristic, with **[R within the model]** marking a result exact for the stated model and claimed no further. This paper is primarily consolidating; its one simulation is the Goodhart demonstration of §4.3, registered in `paper_xx-goodhart_demo_preregistration.md` and run by `paper_xx-goodhart_demo.py`, with committed thresholds and nulls fixed before the run. The explorations behind the derivations (`06-conservation-law.md`, `07-asbhy_s-law.md`, `08-goodhart.md`, `09-certification-entropy.md`, and the `08-reflection.md` synthesis) are argument, not evidence, and are cited as the source of the framing only.

The confidence tiering by result:

| Result | Tier | Note |
|---|---|---|
| Deterministic action-cover bound (§3) | [R] | Real but near-definitional; value is placement, not depth |
| Capacity, partition and task change (§3) | [R] for the counting, [IP] for the governance reading | The non-shallow content of the Ashby section |
| Intervention-set ordering criterion (§4.2) | [R; established] | Definition and deterministic counterpart of Skalse et al. (2022); no novelty claim |
| Loss plus reachability implies degradation | withdrawn | Explicit counterexample in §4.2 |
| Permitted reduction of the omitted dimension (§4.3) | [R within the model] | 30 reported registered worlds; zero endpoint and per-world monotonicity follow analytically; P1 and pooled rank statistic are sample-dependent |
| Realized Goodhart degradation is inevitable | not established | Requires a path or selection rule, not just an adverse pair |
| Certification cost is monotone under the §5.2 debt convention | [IP] | Accounting consequence of non-refundable paid costs and restricted debt write-downs |
| Conservation of complexity (§5.3) | failed | No conservation identity established; additive/entropy accounting remains [H] |
| Common bounded-representation framework (§6) | [IP] | Synthesis, not a single sufficient premise |
| All institutional readings | [IP] | Argument by analogy from finite-state controllers |



**Correction note (24 November 2026).** The SCAI-S0 adversarial review identified an invalid generalization in the former §4.2. This revision withdraws the theorem and novelty claim, adds the counterexample and prior art, and revises dependent interpretations. The registered demonstration is reported unchanged; the original run and registration were not re-executed for this correction.
