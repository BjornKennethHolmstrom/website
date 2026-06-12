# Part V — Simulation

## 5.0 Purpose and Conventions

The simulations serve the series' standard disciplinary function: they force the formal claims of Part II to produce numbers, and they expose the claims' dependence on assumptions that prose can leave comfortable and algebra can leave implicit. The discipline operated on this paper before publication, and the episode is reported rather than smoothed over, because it changed a theorem. An early draft of §2.1 asserted that per-layer repertoire deficiencies accumulate additively in the generic case. The prototype falsified the assertion as stated: generic blind spots do not annihilate additively — they *degrade* additively, and the distinction between annihilation and degradation turns out to be governed by a variable the draft had not identified, the alignment geometry of the layers' blind spots, which Simulation B now treats as a primary experimental axis and Appendix A.3 derives. The corrected result is stronger than the original claim, and it connects the actuation chain to Paper X's correlation framework. This is what simulations are for.

Conventions, per the series: open-source Python, all parameters declared in the repository, Monte Carlo over 100 seeds with distributions reported rather than single runs, illustrative rather than empirically calibrated parameters, commit hash cited in the published version. Plant: x_{t+1} = Ax_t + Bu_t with A diagonal-stable (entries uniform [0.85, 0.98] unless stated), B = I, m = 6. Layers as in §2.1: random contractive translations with singular values uniform [0.7, 1.0] unless an experiment varies them.

## 5.1 Simulation A — The Energy Law

**Design.** Sweep delegation depth n from 0 to 7. At each depth, compose the chain Π, solve the discrete Lyapunov equation for the controllability Gramian of (A, BΠ), and compute the minimum energy E_min = x_fᵀW_c⁻¹x_f for random unit policy targets. Report E_min(n)/E_min(0) distributions across seeds.

**Prototype result.** Median energy ratios: 1.41, 1.94, 2.76, 3.85, 5.78, 8.03, 11.18 for depths one through seven — a measured per-layer growth factor of approximately 1.40 against an analytic prediction of 1.399 from the layer singular-value distribution (the factor exp(−2·E[ln σ]); derivation in Appendix A.2). The exponential form of the energy law is confirmed in the prototype to within sampling error. 

**A second finding the formal analysis did not predict.** The interquartile range of the energy ratio widens with depth — [8.84, 13.96] at depth seven against [1.30, 1.53] at depth one. Depth does not only raise the median price of policy; it makes the price *less predictable*, because the composed orientation of seven random translations varies more across realisations than the orientation of one. The governance reading anticipates §3.3's variance observation from the cost side: a deep chain is not merely an expensive instrument but an instrument whose expense cannot be reliably budgeted.

## 5.2 Simulation B — Blind-Spot Geometry

**Design.** Layers carry repertoire deficiency d_i = 1: each is an orthogonal projection annihilating one direction (its blind spot), composed with the contraction of 5.1 switched off to isolate the rank mechanism. Three geometries: *independent* (blind spots mutually orthogonal), *generic* (blind spots drawn uniformly at random), *homogenized* (all layers share one blind spot). Track, by depth: hard rank of Π; cleanly transmitted dimensions (singular values ≥ 0.99); minimum nonzero singular value.

**Prototype result.** Independent geometry: rank falls exactly one per layer, 6, 5, 4, 3, 2, 1, 0 — additive annihilation, the (m − q)/d route to constitutional uncontrollability of §2.4. Homogenized geometry: rank 5 at every depth from one onward, all surviving dimensions at full fidelity — one absolute, depth-independent blind spot and nothing else. Generic geometry: hard rank constant at 5, while cleanly transmitted dimensions fall almost exactly one per layer (6.0, 5.0, 4.0, 3.0, 2.0, 1.1, 0.45) and the worst surviving direction's gain collapses geometrically (1.0, 1.0, 0.36, 0.18, 0.095, 0.059, 0.033) — at depth six, recovering that direction costs on the order of (1/0.033)² ≈ 900 times the direct-actuation energy.

**Critical finding.** The invariant across the independent and generic regimes is the clean-transmission count: one dimension per deficient layer, charged as impossibility in one geometry and as exponential price in the other — the unified law of §2.1, here exhibited rather than asserted. And the homogenized regime stands apart in a way the country evidence of §3.2 and §4.2 makes legible: a chain whose layers share their blind spot is dimensionally cheap and absolutely, invisibly blind in the one dimension no layer can express. Implementer correlation is to the actuation channel what observer correlation is to Paper X's ensemble — the variable that determines whether the parts' deficiencies cancel, compound, or coincide.

## 5.3 Simulation C — Noise Placement

**Design.** Fix depth n = 6 with the contractive layers of 5.1. Inject unit-variance noise at each layer; compute each injection point's share of delivered noise variance at the actuator.

**Prototype result.** Shares by layer, top of chain to street: 6.7, 9.0, 12.4, 17.1, 23.1, 31.7 per cent. The last two layers contribute 54.8 per cent of delivered noise variance. The asymmetry of §3.3 — the signal passes everything, late noise passes almost nothing — is confirmed: what the street delivers is mostly what the street heard. 

**Critical prediction for Part VI.** If the mechanism operates in real chains, implementation-fidelity audits should find variance concentrated near the point of delivery rather than distributed evenly along the chain — a coding-level prediction the MGNREGA state comparisons can in principle check, since social-audit data localises discrepancies by administrative tier. 

## 5.4 Simulation D — Architectures Compared

**Design (full simulation; prototype ran the depth comparison only).** Four architectures at matched per-layer quality: A, uniform depth 7; B, uniform depth 4; C, uniform depth 2; D, *fractal assignment* — the directive split by intrinsic dimensionality, low-variety components routed through the deep uniform chain, high-variety components through depth ≤ 2 with closed local loops (§2.5). Outputs: delivered fidelity, E_min, latency, and delivered SNR per architecture; the design prediction is that D approaches C's fidelity on high-variety components at near-A's uniformity on low-variety ones — the assignment principle of §4.2 made quantitative.

**Prototype depth table.** Median energy ratio and mean delivered signal power: depth 2 — 1.94 and 0.544; depth 4 — 3.85 and 0.299; depth 7 — 11.18 and 0.117. A depth-7 chain delivers roughly a fifth of the signal power of a depth-2 chain and prices targets at roughly six times the energy, at identical per-layer quality. 

## 5.5 Simulation E — The Discriminator (specification only)

Operationalise §4.1's separation. Generate directives with a coded *threat* parameter; run two worlds: structural (M = I, chain Π as above) and adversarial (M(θ) attenuating threatening dimensions per Paper IX's incentive-compatibility mechanism, composed with the same Π). The signature: delivered fidelity is independent of threat in the structural world and monotonically decreasing in threat in the adversarial world, at matched mean attenuation. The simulation establishes the signature's visibility at realistic noise levels before Part VI looks for it in coded cases — the in-silico power analysis for the empirical discriminator.

## 5.6 What the Simulations Do and Do Not Establish

Per the series' standing discipline: the simulations establish internal consistency — that the formal mechanisms produce the claimed behaviour under the model's assumptions — and they have already earned their keep by correcting one of those claims. They establish nothing about real delegation chains. The parameters are illustrative; the layers are linear; the geometry sweep explores a space whose real-world distribution is an empirical unknown. The bridge from exhibited mechanism to tested mechanism is Part VI, and the series' position since Paper VIII is that the bridge is mandatory: a mechanism that cannot be confronted with data is not yet a contribution, however well it simulates.

---

