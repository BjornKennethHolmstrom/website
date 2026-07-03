# Appendix A — Glossary and Term Map

This book renamed things. The research series it rests on speaks in the vocabulary of control theory and information theory; the book speaks in plain words, because its readers should not need the mathematics to use the results. Renaming carries a risk the book takes seriously: a friendlier word can quietly become a bigger claim. This appendix is the tether. Every entry gives the book's term, a one-line meaning, the series' technical term or symbol, and the source paper — so that any statement in this book can be traced to the formal result behind it, and so that where the book's phrasing and the papers' phrasing seem to differ in strength, *the papers govern*. Entries are grouped by the chapter that introduces them.

## The confidence tiers

**Model result** — proven or demonstrated by simulation inside a formal model, and only there. *Series tags: [R] (rigorous) and [R within the model].* Used throughout the series; the distinction between externally established results and results proven within the program's own models is kept explicitly in the papers.

**Documented pattern** — a recurring signature across the program's country and organizational studies; evidence of shared shape, not proof of shared cause. *Series tag: [IP], "in principle."* The papers' [IP] tier also covers principled arguments not yet formalized; the book folds both senses into "documented pattern" or explicit argument.

**Working hypothesis** — plausible within the framework, untested. *Series tag: [H], heuristic.*

## Chapter 1 — The Carving Problem

**Carving** — the compression every finite institution performs on an unbounded world: choosing variables, drawing boundaries, defining categories. *Series terms: state-space representation, decomposition, projection; in recent work, factorization.* Papers I, VI, XII. The book's single largest renaming; introduced explicitly as vocabulary, not as an additional claim.

**Variety gap** — the shortfall between the dimensions along which the world can disturb an institution and the dimensions the institution can perceive. *Series symbol: G.* Papers I, VI; estimation framework in Paper VIII.

**The law behind the gap** — a controller can only counter disturbances it can distinguish, stated disturbance-relative: match the variety of the disturbances to be rejected, not the total complexity of the world. *Series term: Ashby's Law of Requisite Variety, disturbance-relative form.* Papers I–II.

**Why dashboards die** — optimizing a low-dimensional target erodes the correlations that made the target informative, invisibly, because the evidence lives in the omitted dimensions. *Series term: the Goodhart–Ashby synthesis.* Papers I–II.

**The lethal proxy** — a metric whose omitted dimensions are causally coupled to it, so optimizing it damages the reality it tracks. *Series term: the coupled-omission trigger of the Goodhart–Ashby failure.* Papers I–II.

## Chapter 2 — The Whispering Gallery and the Immune System

**The whispering gallery** — the upward chain of reports about reports, each layer compressing and adding noise. *Series terms: representation chain; aggregation loss.* Paper III.

**The layer threshold** — the finding that after roughly two to three aggregation layers, accumulated noise exceeds surviving signal. *Series term: SNR collapse in deep chains.* Paper III.

**One dimension lost per layer** — the downward result that a generic delegation chain preserves most of an instruction while degrading one clean component of it per interface. *Series term: the rank-geometry law for delegation chains (generic-kernel regime).* Paper XI.

**The immune system** — the distributed, adaptive, villainless response by which an architecture neutralizes reforms that would change the architecture. *Series terms: reform absorption; the immune system as an output of the current architecture.* Papers VII, IX.

**The speed limit on transitions** — the pace beyond which forced architectural change produces breakdown rather than change. *Series terms: transition bandwidth; latency asymmetry and the transition gain ceiling.* Paper IX.

**The multiplication** — co-occurring architectural deficits compound multiplicatively, which is why partial fixes disappoint and modest breadth beats heroic depth. *Series term: compounding of failure modes.* Paper V.

## Chapter 3 — Boundaries Are Load-Bearing

**The loop you are standing in** — the feedback path from an institution's actions, out through its boundary, through external dynamics, and back in as apparent disturbance. *Series term: the M–Δ feedback interconnection; instability via the small-gain condition.* Paper XII.

**The boundary question** — what fraction of an institution's outcome variance is driven from outside its boundary. *Series term: the boundary mismatch index, B.* Paper XII.

**Weather versus echo** — the decomposition of outside driving into uncorrelated noise and structured feedback carrying the institution's own returned actions. *Series terms: B_noise and B_struct.* Paper XII.

**Crisis on your own rhythm** — instability whose timing tracks the institution's policy cycle because the crisis is partly the last response returning. *Series term: spillover oscillation.* Paper XII.

**The pooling paradox** — enlarging a boundary internalizes couplings at the price of chain depth; shrinking it buys short chains at the price of ungoverned loops; no boundary escapes the trade. *Series term: the Information–Actuation Frontier.* Paper XII.

**Boundaries matched to couplings** — drawing jurisdictions along the seams of the actual coupling structure rather than the administrative map; the reading of polycentric patchworks as this principle applied. Paper XII.

## Chapter 4 — Legitimacy Is the Gain

**Legitimacy as the gain** — effective action equals designed action times legitimacy. *Series form: B_eff = L·B.* Paper XIII.

**The world going blurry** — measurement noise scaling inversely with legitimacy as the governed stop speaking honestly into the instruments. *Series form: V = V₀/L.* Paper XIII.

**The two basins and the threshold** — the high- and low-legitimacy attractors and the critical level separating them. *Series terms: the performance–legitimacy spiral; L_crit.* Paper XIII.

**Down by the elevator, up by the stairs** — legitimacy's asymmetric dynamics; loss faster than recovery, with a different return path. *Series terms: asymmetric delivery sensitivity; legitimacy hysteresis.* Paper XIII.

**Borrowed legitimacy** — trust not backed by tested delivery, which reprices suddenly under load rather than degrading gracefully. Paper XIII.

**The bill for hiding things** — suppression as deferred-interest borrowing: short-term legitimacy bought against a betrayal penalty on discovery, while degrading the observation channel. *Series terms: the transparency and betrayal terms of the legitimacy update.* Paper XIII.

**The operator** — the finding that one key node's interior blindness can move an otherwise sound system across the collapse threshold. *Series terms: interior fidelity φ; inherited unobservability.* Self sub-series, Self III.

## Chapter 5 — The Speed Limits of Learning

**The adaptation pipeline** — the sense–learn–execute loop with conversion losses between stages. Paper XV.

**The bottleneck law** — effective adaptation runs at the scaled minimum of the stage rates; investment in a non-binding stage returns nothing. *Series form: T_eff = min(ρ_SL·ρ_LE·r_S, ρ_LE·r_L, r_E).* Paper XV.

**The three backlogs** — unread knowledge, undone decisions, unobserved consequences. *Series symbols: B_I (information), B_N (innovation), B_R (reality).* Paper XV.

**Effective and self-blinding** — the regime in which tracked indicators stay green while unobserved consequences of the institution's own action accumulate. Paper XV.

**The closure tax** — the drag of re-observation delay on the whole loop. *Series form: T_eff,rec = T_raw/(1 + τ·T_raw).* Paper XV.

**Staying learnable** — the requirement that a system keep generating evidence about its own rules; you only know your model where you have recently pushed it. *Series terms: persistent excitation; dual control.* Paper XIV.

**Scheduled probes and protected spaces** — sunset clauses as forced re-decision; bounded arenas of maintained variation. *Series terms: excitation-coupled sunset clauses; protected experimental space.* Papers XIV, VII, IX.

**Lock-in** — the endpoint at which a rule's continued validity becomes undecidable with the information the system now produces. Paper XIV.

## Chapter 6 — Success Launders Evidence

**Laundering** — the erosion of an indicator's diagnostic value by the ordinary competence of the institution optimizing near it. *Series context: the failed error-based Boundary Dissolution Index and its mechanism.* Paper XVIII §5; general decay law in Paper XVI.

**Effective observers** — the number of genuinely independent observers in an ensemble, as opposed to the nominal count. *Series symbols: N_eff; error correlation ρ_eff.* Paper X.

**One advisor in five costumes** — the measured near-unity error correlation across nominally diverse AI systems. *Series context: the registered observer-correlation study.* Paper X and its Study 1.

**The optimized trap** — the variance-optimal allocation of trust concentrating onto sources sharing a hidden common input, and underperforming flat trust past a threshold. *Series context: the echo/adversarial-fragility result.* Paper X.

**Survivor signals** — quantities that retain diagnostic value because no internal objective controls them. Papers XVI, XVIII.

**The source term** — the external supply or shelter that variation needs to persist under optimization. *Series terms: decay-plus-source-term structure; source-term locality.* Paper XVI.

## Chapter 7 — The Entanglement Speed Limit

**Threads through the wall** — the interfaces (exceptions, workarounds, counterpart adjustments) that each rule change creates across a boundary. *Series terms: the policy-velocity coupling channel ν; the condition ∂Δ/∂θ ≠ 0.* Paper XVIII.

**No fixed boundary survives learning** — the theorem that generic learning escapes the parameter region compatible with any given decomposition. *Series terms: the Non-Factorizability Theorem; common invariant subspaces; compatibility variety.* Paper XVIII.

**The reflexive cycle** — calm, hidden accumulation, collapse, miscalibrated recovery. Paper XVIII.

**The locked state** — the regime past cycling, in which the dissolved boundary sustains the coupling that dissolved it and never recovers. *Series term: the locked non-factorizable regime.* Paper XVIII.

**The learning window** — the band of viable learning rates between losing the world and dissolving the perimeter. *Series terms: the Critical Learning Bandwidth; η_min and η_max.* Papers XV, XVIII.

**The pinch** — both window walls moving inward on the approach to trouble. *Series term: the dynamic pinch.* Paper XVIII.

**The closed window** — parameter regions with no viable learning rate at all. *Series terms: the zero-viability condition; the Decomposability Frontier.* Paper XVIII.

## Chapter 8 — The Certification Floor

**The ladder** — the regress of watchers watching watchers; internal safeguards relocating drift upward without removing it. *Series terms: the meta-controller regress; regress termination (necessity of a θ-independent anchor).* Paper XVII; formal version in Paper XVIII, Appendix A.4.

**The relocation invariant** — the inspection habit: almost every apparent fixed anchor is a parameter one level up. Paper XVII.

**The certification floor** — the recognition that institutions touch reality only through fallible certification links, whose engineering is the real design surface. Paper XVII.

**Minimize, discretize, cost-harden** — the three-verb discipline for certification links. Paper XVII.

**The placement condition** — an anchor halts drift only in the directions it constrains; anchors placed for measurability rather than drift are decoration. *Series term: directional sufficiency.* Paper XVIII, Appendix A.4.

## Chapters 9–10 — Practice

**The profile** — the ranked, evidence-named output of the diagnostic sequence; shaped, not scored. Chapter 9's assembly of Papers III, V, X, XII–XVIII.

**The legitimacy overlay** — feasibility screening of remedies by basin position and absorption planning. Papers XIII, VII, IX.

**Subsidiarity as observability** — decision altitude matched to where the requisite variety survives, cutting both downward and upward. Papers I–III, VI.

**Nested timescales** — slow variables assigned to slow controllers; the missing slow-variable controller as a recurring case-file pattern. Papers VII and the country studies; concept appendix.

**The friction–timescale constraint** — institutional friction is safe only when coupling accumulates slower than the review latency. *Series form: τ_accumulation > τ_review.* Paper XVIII.

**The decomposability reservoir** — polycentricity as a stock of alternative viable boundaries, which drains and needs renewal. Paper XVIII, reading Paper XII's polycentric evidence.

---

Two closing notes. First, on what the book did *not* rename: a handful of series terms — legitimacy, boundary, anchor, backlog — appear unchanged, because the plain word and the technical word coincide; their entries above exist to attach the symbols and sources. Second, on the direction of authority: this appendix maps the book's language *onto* the series, never the reverse. Where a book sentence reads stronger than the paper behind it, the reading is wrong and the paper's tier is the claim. The papers, their appendices, and the simulation code that verifies every model result cited here are listed, chapter by chapter, in Appendix C.
