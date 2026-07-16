# §7 — What this paper does not show

The failures are in the body, not quarantined here; this section collects the limits on what the *earned* results establish, committed against the tiering table of §1.

## 7.1 The descriptive geometry is refuted, not merely unconfirmed

§3's four nulls are not "we failed to find an effect." They are, in three of four cases, positive identifications of *why there was never an effect to find*: the connectivity threshold is an algebraic identity (§3.2), the bridge artifact is a knife-edge property of near-trees (§3.3), and the rescaling is directly measured against a shape ceiling (§3.1). Anyone expecting the geometry and topology promised in Paper XIX §7.4 should read §3 as the reason it does not exist — not as an underpowered search that a larger zoo might rescue. §3.4 (no transition) is the one genuine "not found under the conditions tested," and it is the weakest of the four; a different stress parameter or a wider sweep could in principle show a transition this one did not.

## 7.2 The headline predictive claim missed its threshold

ρ(behavioral distance, reform cost) = 0.47, below the registered 0.50. We report this as a miss (§4.1) and do not round it up. The interpretive move that follows — that the shortfall reflects directionality limiting a symmetric predictor — is *consistent with* the data and is **not** a proven bound (§4.1, corrected). Behavioral distance is weakly and imperfectly predictive of reform cost; that is the honest ceiling on §4.1, and the symmetric-benchmark comparison is evidence for an interpretation, not a theorem.

## 7.3 The staging mechanism is post-hoc, and only its behavioral form is shown

The staging *effect* is registered and robust (§4.3). The *characterization* — destination-proximate staging — rests on a source-dependence test that was not pre-registered, though it is a single legible number (25%) rather than a fitted story. And even that characterization is behavioral, not dynamical: **destination-neighbour staging** (the effective waypoint is behaviorally near the target) is observed; **destination-basin staging** (training toward a near-target regime leaves the model in a parameter state from which target-learning is easier) is a conjecture the paper explicitly does not establish. The optimizer-landscape probe that would test it was not run.

## 7.4 Cost is relative to the adaptation process, not to source and target alone

This is the limitation most consequential for the governance reading, and it is a property of the object, not a caveat about the experiment. Reform cost is $C_{U,T,L}(M_A \Rightarrow R_B)$ — a function of the update rule $U$, budget $T$, and loss $L$ as much as of source and target. It depends on the optimizer, learning rate, data order, initialization, architecture, and reference floor. The paper holds all of that fixed and reports one slice.

The consequence for institutions is not a hedge but a finding in its own right: **"reform cost" is not a fact about two institutional forms; it is a fact about two forms *plus the reform technology available*.** The same transformation is cheap or expensive depending on the instruments of change — the same directed barrier that is prohibitive under one implementation regime may be tractable under another. The asymmetry, the staging, and the non-composition are all properties of $(C, U)$ jointly, and a governance reading that treats reform cost as intrinsic to the forms alone has dropped the term that policy most directly controls.

## 7.5 The object is characterized provisionally, and its calculus is open

§5.3 gives a positive formal object — a typed metric–adaptation system — but it is *a* description the data support, not a proven theory, and §5.4's calculus of staged adaptation does not yet exist. We claim the object is well-typed and that its cost does not compose; we do not claim a general theory of when staging helps or a well-posed directed triangle bound. Those are the open problems, not results.

## 7.6 One substrate, one architecture family, small samples

Seven models and 21 pairwise distances for the geometry tests; a cube held at one architecture size for the cost tests, precisely to remove the capacity confound that wrecked the first cost measurement (Appendix B). Small samples bit twice — §3.3's near-tree betweenness and §4.3's three-point correlation both produced spuriously clean numbers that had to be caught by distrusting them (§7.7). Whether any of this survives richer substrates, larger zoos, deeper models, or non-gradient update rules is untested, and the metric–adaptation framing (§5.3) is what would let one even ask.

## 7.7 Two statistics were compromised by small samples, and one automated verdict was wrong

Stated plainly because it recurs. §3.3's bridge identity looked regime-dependent at $\varepsilon_c$ because a near-tree is made of articulation points; §4.3's path correlation printed 1.000 because a within-cell rank correlation on three points is nearly quantized, and the automated verdict read that as *geodesic*. Both were caught by treating an unnaturally clean number as a warning rather than a result. We cannot claim to have caught every such case. The tests with three points per cell (the detour control's within-cell correlations) should be read as directional only, and the pooled statistics (n ≈ 36) are the ones the §4.3 conclusion rests on.

---

