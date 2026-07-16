# §4 — Three earned results: the directed cost structure

The map, examined on its own terms, mostly fails (§3). The travel does not. This section prices the cost of reforming one factorization into a fit for another regime and finds that reform is not movement through the behavioral metric at all — it is a directed, non-composing adaptation process whose costs the symmetric metric cannot represent. The results are ordered by confidence: a registered prediction that *missed* its threshold but missed it informatively (§4.1); the paper's spine, that reform cost is asymmetric, heterotyped, and non-composing (§4.2, §4.4); and a robust effect whose mechanism we were careful not to overclaim (§4.3).

## 4.1 Behavioral distance predicts reform cost — weakly, and provably no better

The first question is whether the map is good for anything: does behavioral distance $d_{\mathrm{beh}}(M_A, M_B)$ predict reform cost $C(M_A \Rightarrow R_B)$? If it does not at all, the geometry is decorative and the paper is over. If it does perfectly, the cost adds nothing to the distance. The registered prediction was that the correlation would clear 0.50.

**It did not. ρ = 0.47, directed, across ten seeds — below the bar.** We report this as a failed prediction, not a soft pass, because the series does not round near-misses up.

But the miss has content, and the content is why it is filed among the results rather than the failures. Alongside the directed correlation we registered a **symmetric benchmark**: the correlation of behavioral distance against the *symmetrized* cost, $\tfrac{1}{2}[C(M_A\Rightarrow R_B) + C(M_B\Rightarrow R_A)]$. That benchmark is **0.66**. The directed correlation sits well below it — and the gap between 0.47 and 0.66 is not noise. It is the asymmetry of §4.2.

Here is the logic, because it is the load-bearing move of the section. Behavioral distance is symmetric: $d_{\mathrm{beh}}(M_A, M_B) = d_{\mathrm{beh}}(M_B, M_A)$. A symmetric quantity cannot, even in principle, perfectly track an asymmetric one — it must assign the same value to both directions of a reform whose true costs differ. Behavioral distance correlates more strongly with the symmetrized cost than with the directed cost, and nearly reaches the symmetrized benchmark. We do not claim this benchmark is a universal ceiling on every possible symmetric predictor — we measured one number for one distance, and did not prove a bound. But the pattern is exactly what directionality would produce: a symmetric predictor is limited by the part of the cost that symmetry throws away, and that part is large here. So the correct reading is not "the geometry weakly predicts cost." It is:

> **Behavioral distance predicts reform cost about as well as it predicts the symmetric part of that cost — and what it cannot predict is the directed part, because distance is symmetric and the cost is not.** The missed threshold is not simply a weak map; it is consistent with directionality limiting what any symmetric predictor can do, showing up as a gap between the directed correlation and the symmetric benchmark.

`[R within the model]`, registered prediction **missed**, reported as a miss whose magnitude is itself evidence for §4.2.

## 4.2 Reform cost is asymmetric, heterotyped, and non-composing — so it is not a distance

The paper's central result is not asymmetry alone; many adaptation costs are asymmetric. It is the conjunction of three properties, and they are worth separating because they rule out successively more.

**Claim A — reform cost is strongly asymmetric.** *Empirical.* Behavioral distance is symmetric by construction; reform cost, measured directionally against a capacity-matched converged floor, is not:

> Median directed asymmetry $|C(M_A\Rightarrow R_B) - C(M_B\Rightarrow R_A)| / \max(\cdot)$ = **0.76**, across the full run, on near-zero censoring.

That is not a small departure from symmetry; it is most of the way to maximal. What one institution costs to leave is, typically, nothing like what it costs to return to.

*A caution the paper insists on, because we got it wrong once.* The very first version of the measurement produced an asymmetry of 0.79 — and it was an artifact. That version measured cost against the *target model's* converged loss, which made the floor a property of the target's capacity rather than of the target's regime; a high-capacity source clearing a low-capacity target's floor for free produced spurious one-directional zeros, and the "asymmetry" was capacity difference in disguise (Appendix B). The 0.76 reported here is on the corrected, capacity-matched floor, where a fresh model of the *source's own architecture* is trained to convergence on the target regime. The asymmetry survives the correction. The lesson — that a directed cost is only as meaningful as the floor it is measured against — is why three versions of the measurement exist and are all reported.

**Claim B — reform cost is not a distance on the set of factorizations at all.** *Formal.* Asymmetry alone would leave the door open to a *quasimetric* — a directed distance that still composes via a directed triangle inequality. That door is closed by two further facts, established in §4.4: the cost's endpoints are of different kinds ($C$ maps a *model* to a *regime*, not a point to a point), and the cost does not compose as a sequence of state transitions (paying to reach a regime does not place you at a model from which the next leg is defined). So the object is not a quasimetric either.

The consequence, stated at the right strength — not "asymmetric, therefore not metric," but:

> Reform cost is **asymmetric, heterotyped, and non-composing**; therefore it is neither a metric nor a quasimetric over the set of factorizations. Behavioral difference is a metric on models; reform is a directed adaptation process between models and regimes; and the second is not movement through the first.

The governance reading, held as institutionally plausible:

> **Reform is directional.** The cost of transforming institutional form A into form B is not the cost of transforming B into A. A reform and its reversal are not inverse operations of equal difficulty — dismantling and rebuilding are priced separately, and the price of returning to a prior form is not the price of having left it. This provides a *measured analogue* of the path-dependence the institutional literature has long asserted; the specific contribution is not that reform is path-dependent but that **symmetric behavioral difference and asymmetric adaptation cost come apart, and can be measured coming apart.** `[IP]`

## 4.3 Reform stages through the target's neighbourhood — and this is not a geodesic

Routing a reform through an intermediate lowers its cost. The effect is robust: across the full run, detouring helps in the majority of transitions, by a large margin, and — critically — **at equal compute**. The natural worry is that a detour simply buys more training: two retraining legs instead of one. A registered **null-detour control** rules this out. Routing a controller through its *own home regime* before the target — a leg that costs nothing but consumes a full retraining budget — does help somewhat (that is the pure compute effect, about 20%), but routing through the *right other* intermediate beats even that, by a further margin that is path structure, not gradient steps. And a **badly** chosen intermediate is worse than no detour at all: the spread between the best and worst intermediate is larger than the whole effect, and the worst real detour loses to the null in the great majority of pairs.

So: routes matter, good routes help, bad routes hurt. The obvious explanation is **geodesic** — the helpful intermediate lies *between* source and target, and the first leg partially completes the journey. The obvious explanation is wrong, and a registered control shows it is wrong.

**The control.** Hold architecture fixed (removing the capacity confound entirely) and run the full cube of source × intermediate × destination. Then ask the one question that distinguishes a path from a curriculum: **does the best intermediate depend on where the reform started?** A genuine geodesic between A and B must depend on both endpoints. If instead the best intermediate depends only on the *destination*, then it is not "between" anything — it is simply a good place to be *near B*.

The best intermediate depends on the source in **25%** of cases. In three destinations out of four, every source — wherever it began — routes through the same intermediate, and that intermediate is the destination's own near-neighbour.

> **The mechanism is destination-proximate staging, not a geodesic.** A reform reaches its target most cheaply by first reaching the target's behavioral *neighbourhood* — an oblique approach beats a direct leap — and the cheapest waypoint is determined almost entirely by where the reform is going, hardly at all by where it began. `[R within the model]`, effect registered and robust; mechanism post-hoc and flagged.

**Why §4.3 is also a methodological note.** The automated analysis, run first, printed a verdict of *geodesic* — on a within-cell path-length correlation of exactly 1.000. That perfect correlation was a small-sample artifact: with four regimes, fixing source and destination leaves three candidate intermediates, and a rank correlation on three points is nearly quantized. Distrusting a too-clean result, we recomputed pooled (correlation 0.31, well below the registered geodesic bar) and then ran the source-dependence test, which gave the real answer. The registered verdict was right to withhold a clean mechanism claim and wrong in its automated printout, and we report both. This is the second occasion in the paper on which a suspiciously perfect number proved degenerate (the first was §3.3's near-tree betweenness), and the recurrence is worth stating as a caution: **an automated pass on an unnaturally clean statistic deserves the scrutiny of a failure.**

## 4.4 Why the triangle inequality is not merely violated but not statable

From edge costs one can compute, for triples, whether $C(M_A\Rightarrow R_B)$ exceeds $C(M_A\Rightarrow R_C) + C(M_C\Rightarrow R_B)$, and find "violations" in roughly a quarter of triples. It is tempting to report this as *the triangle inequality is violated*, which would be a vivid way to say the object is non-metric. **We decline to, because the statement is not well-posed, and saying why is the sharpest form of the paper's central claim.**

The triangle inequality presumes that paying $C(M_A\Rightarrow R_C)$ *produces the input the second leg requires* — that after the first leg you hold a model at C, from which the second leg costs $C(M_C\Rightarrow R_B)$. It does not. A reform cost of zero from $M_A$ to $R_C$ does not mean $M_A$ *became* $M_C$. It means $M_A$ already *performed at $M_C$'s level* on $R_C$'s task. Performance parity is not identity. After retraining $M_A$ toward $R_C$ you hold some model $M_A'$ that behaves like $M_C$ on $R_C$ but is not $M_C$ and need not behave like it anywhere else — so the second leg's cost is $C(M_A' \Rightarrow R_B)$, an empirical quantity that is not $C(M_C\Rightarrow R_B)$, and the two tabulated edges do not compose.

More fundamentally, the edges are of different kinds. $C$ runs from a **model** to a **regime**. To chain two such edges by the syntax of the triangle inequality you would need the head of the first (a regime) to be the tail of the second (a model), and they are not the same type of object. There is no common space in which $M_A$, $R_B$, and $R_C$ all live as points and the inequality is a statement about them.

> **The reform process is not a metric space with a violated triangle inequality. It is not a structure in which the triangle inequality is statable.** Distance lives between models; cost runs from models to regimes; the two do not inhabit one object. `[R]`

The reusable lesson, which is the most transportable thing in the paper alongside §3.2:

> **Compositional laws require compositional operations, not merely compatible-looking indices.** A numerical inequality is not meaningful merely because three measured numbers can be placed into its syntax. Before asking whether $C(A,C) + C(C,B) \geq C(A,B)$, one must check that the operation producing the first cost yields the object the second cost is defined on. Here it does not, and no amount of tabulating triples repairs that.

This is why §4.2's Claim B is stated as "not a metric or quasimetric" rather than "a space with an asymmetric metric." Those weaker phrasings concede a compositional structure the object does not have. The honest characterization is that behavioral distance is a metric on one set (models), reform cost is a directed, non-composing relation between two sets of different kinds (models and regimes), and the sibling paper's original hope — a single geometry in which reform is movement — conflated them. §5 gives the object a provisional positive form and admits how much of its calculus remains open.

---
