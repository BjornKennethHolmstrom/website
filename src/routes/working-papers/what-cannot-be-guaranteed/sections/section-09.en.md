# §9 — What this paper does not show

Committed in the spine before any of it was written, and extended by what the work then discovered about itself.

## 9.1 Two of the three theorems are shallow, and we say so

**L2 (reform undecidability)** is a genuine theorem and close to routine once its hypothesis — computational universality of the update dynamics — is granted. The same conclusion follows independently from Rice's theorem and from boundedness results for rich dynamical systems. When a result falls out of three unrelated theorems, it is not telling you anything specific about the object under study; it is telling you that the object was assumed to be computationally universal, and everything follows from *that*.

**L3 (No Free Lunch)** is formally valid and near-vacuous. Its force depends entirely on a uniform prior over an unstructured space of environments — a fiction no institution has ever faced. A theorem whose weight rests on such a prior is a theorem about the prior.

In both cases the paper's contribution is the **contrapositive**, not the impossibility result: *name the restricted class of dynamics under which your reform evaluation is valid*; *name the environment class your architecture is a bet on*. We do not trade on the prestige of Turing's or Wolpert's names, and a reader who came for that will be disappointed.

**L2 is additionally in tension with the series' own premise.** It requires unboundedness; Paper 0 and Paper XX require boundedness; a finite system has a decidable convergence problem. The honest form of L2 is therefore a **complexity** claim, not a computability one, and the computability framing is a limiting idealization of it. We think this is the right reading. We do not claim it is the only one.

## 9.2 The interesting limit is not a theorem, and may not be a limit

**L1 (certification incompleteness) remains `[IP]`**, and §4's success does not change that. The paper explicitly does not claim a Gödel theorem for governance. What it has is a regress (XVII) plus a closure (XXI), which is a structural diagnosis, not a diagonal construction.

The objection we cannot answer is stated in §3.2 and we restate it here rather than let it fade. The notion of an **architecture-generated disturbance** has a trivial reading under which every disturbance qualifies — every policy has side effects, every category shapes what it categorizes — and under that reading the claim is empty. The non-trivial reading requires the disturbance to be constructed *out of the certification apparatus itself*, making it self-defeating rather than merely fallible. **Whether that class is non-empty is exactly what a theorem would have to establish, and we have not established it.** It is possible that certification incompleteness, properly formalized, dissolves into the ordinary observation that institutions can be wrong about the world. We do not believe this. We cannot exclude it.

## 9.3 The empirical claims: five registered failures

| | outcome |
|---|---|
| GATE (adaptive controller, ×2) | FAIL — no-trade equilibrium; the learner could not be built |
| C1 — crisis ≠ ordinary disturbance | FAIL 0/20 |
| C2 — signature is missed certification | FAIL 0/20, **inverted** |
| C3 — there is a recovery window | FAIL — repair works at every delay |
| C4 — unused channel is inert | FAIL 1/20 |

Directional-but-below-threshold results are not laundered into passes, and none of these was directional. The one positive result — the **flooding mechanism** (§4.5) — was found **after the fact**, then re-registered as a fresh directional prediction and confirmed on twenty new seeds. It is tiered `[R within the model]` with that provenance attached. **It is not a preregistered finding and we do not present it as one.**

## 9.4 A deviation from the preregistration, declared

The registered analysis branch was the learned controller. It failed its admission gate across two configurations, and we substituted the **rule-following** branch, which passes at 17/20.

We hold this to be licensed, and we set out the reasoning so a reader can disagree with it. The gate is **baseline-only**: it tests the `no_crisis` condition and nothing else, and no crisis arm enters into it. Choosing the branch that possesses a valid baseline is what a gate is for. **C1–C4 had not been computed on the scripted branch at the time of the switch, and the switch was declared before they were.**

What we cannot claim is that this was the design. It was a fallback, taken after a failure, and a reader entitled to be suspicious of post-hoc branch selection is entitled to discount the demonstration accordingly.

## 9.5 The demonstration is a toy, and its corruption is a special case

**One environment, three agents, one certification channel, one specialisation structure.** The flooding mechanism depends on the recipient being *unable* to harvest what it is being over-supplied with. Whether it generalises to richer complementarity is a conjecture this result supports, not a claim it proves.

**The corruption is total, not noisy.** The signal is inverted, not degraded. A channel that is right 70% of the time might behave entirely differently — and might well produce the missed certification that inversion does not. Nothing here speaks to partial or stochastic corruption, which is the form real certification failure most often takes.

**The kernel is corrupted exogenously.** The experimenter inverts the signal. The demonstration shows what happens *when* a kernel fails; it does not show a system generating its own kernel failure. That is requirement (b) of §3.2, on which the Gödel analogy stands or falls, and it is untouched.

## 9.6 The question the paper most wanted to ask, and could not

C3 — the recovery window — was the only genuinely new claim on offer, and its null is uninformative for a reason that took three attempts to see. **A rule-follower has no trust to lose.** Its giving is a function of the signal in front of it, not of any history with that signal; it cannot be misled into distrust because it does not trust, it complies. So its instant recovery at every delay is a fact about what a rule-follower *is*, not about certification.

The question that matters — whether a **learning** institution, having been taught that its certification channel lies, can be taught again that it tells the truth, and whether there is a delay past which it cannot — requires a controller that learns to cooperate through the channel in the first place. We could not build one, and we stopped trying under a rule committed in advance rather than continue until a baseline appeared.

> **The most interesting question this paper raises about certification failure is one it could not ask.** Two registered learner failures are the reason, and they are reported as results rather than as an appendix on methods.

## 9.7 Gaps we can name but not fill

**No method for identifying an environment class.** §6's design principle is *name the class*, and the series has no procedure for determining which class an institution is actually in. XIX's sentinels detect that a shift has *occurred*; nothing identifies what one has shifted *into*. This is precisely the capability the principle presupposes. **[H]**

**No principle for choosing between compliance and scepticism.** §7.4: a rule-follower is exposed on every channel; a learner narrows its exposure at the cost of rigidity and at the risk of having pruned a channel that later matters. Both horns are real. We have nothing to say about which to take. **[H]**

**The exhaustiveness of the triptych is `[IP]`, and we name the fourth vantage we do not treat.** Assurance can also be demanded **after the fact** — *did the reform work?* — and that demand fails for reasons of its own: no counterfactual, no repetition, a world that moved for other causes meanwhile. It is the limit that empirical policy evaluation actually runs into. We have no result for it. A paper about the limits of assurance should not quietly claim an assurance of completeness it has not got.

## 9.8 A defect inherited, and a debt owed

The environment used in §4 contained a degenerate action — harvest succeeded on any cell holding any resource at all, and the capacity floor guaranteed that every cell always did — which let agents scrape barren cells to death while the grid sat saturated. It is fixed here.

**It is not fixed in the coordination simulations that seed the multi-agent line of work.** Their shorter episodes mask it. Those results should be re-examined before anything is built on them. We report this because the alternative is to let a known defect propagate quietly into work that has not yet been written, which is the same error this paper is about.

---

## 9.9 The paper's own shape, stated

This is a paper of five registered failures, two shallow theorems declared shallow, one structural diagnosis that is not a theorem and may not be a limit, one refused unification, and one confirmed mechanism that we did not predict and that falsifies the prediction we did make.

We would rather report this than the paper we set out to write, and the reason is contained in the result. **An apparatus that reports perfect health under a corrupted kernel is exactly the object of study.** We built one by accident — an experiment whose instruments returned a clean baseline over a dead population — and we very nearly believed it. What caught it was a gate registered in advance, external to the thing it checked, and answerable to a criterion fixed before the data existed.

That is the paper's argument, made by the paper's own failure to be immune to it.
