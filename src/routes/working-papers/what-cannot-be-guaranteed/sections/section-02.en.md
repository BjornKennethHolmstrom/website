# §2 — Three limits, three sources, and why they do not reduce to one

## 2.1 The temptation

Paper XX carries the title *Three Laws from One Bound*, and it earns it: Ashby, Goodhart, and the certification cost of Paper XVII all follow from a single premise — a finite controller that partitions the task-relevant world into a bounded number of internal states and assigns one action per state. Three laws, one bound, three operations: holding, optimizing, maintaining.

The present paper has three limits. The symmetry is almost irresistible, and it is worth setting out at its strongest before it is refused, because the version that persuades is not a strawman.

> A bounded controller cannot represent its world exhaustively. It must therefore *factorize* — commit to a finite set of distinctions and discard the rest (Paper 0). That commitment is an inductive bias, and any inductive bias is a wager on the kind of world one is in; hence **No Free Lunch**. The controller cannot verify its own factorization from within, since verification of a world-fact requires a verifier, and the ladder of verifiers must close in a finite system; hence **certification incompleteness**. And because the controller cannot represent its own future trajectory in full, it cannot compute in advance whether a change to its factorization will settle; hence **reform undecidability**. Three limits, one bound, three vantages.

This is a good argument. It is also wrong in two of its three legs, and the failure is not a technicality that a more careful statement would repair. Setting out exactly *how* it fails is the work of this section, because the shape of the failure is what organizes the paper.

## 2.2 The second leg fails, and it fails by contradiction

Undecidability requires computational universality: the update dynamics must be able to simulate an arbitrary Turing machine. Universality requires an unbounded state space. And an unbounded state space is precisely what bounded representation denies.

Run the derivation and watch it invert. A controller with a finite state space $S$ has a **decidable** convergence problem: simulate the dynamics for $|S|$ steps, observe that the trajectory must by then have entered a cycle, and read off whether that cycle lies inside $C \cap V$. Boundedness does not *produce* undecidability. Boundedness *destroys* it.

So the attempt to derive L2 from bounded representation is not merely a different derivation from the one we give in §5; it is a derivation from the negation of L2's own hypothesis. **[R]** The two premises cannot both be sharp at once, and any paper claiming otherwise has bought a unification with a contradiction.

This is the single strongest reason for the structure of the present paper, and we want it on the record rather than buried in a caveat. Paper XX's bound is real and the series rests on it. L2 requires its opposite. That fact is not an embarrassment; it is information about where L2 actually lives — namely, in an idealization, whose finite shadow is a *complexity* result rather than a computability one (§5.3). The undecidability theorem describes a limit the series' own controllers do not, strictly speaking, face; what they face is its exponentially expensive finite counterpart. Recognizing this is what keeps §5 from trading on the prestige of Turing's name.

## 2.3 The third leg fails, more quietly

No Free Lunch is indifferent to the controller's capacity. Consider a Laplacean demon: unbounded representation, perfect memory, no factorization forced on it by any finiteness. It faces NFL exactly as a bounded controller does. Averaged uniformly over an unstructured space of environments, the demon's architecture ties with every other. Nothing in the NFL proof touches the controller's internal capacity at all; the mirror-environment construction is a statement about the *space of environments* and the *absence of a prior over it*, not about the agent.

So the source of L3 is epistemic, not architectural: **it is the absence of a prior, not the finiteness of the knower. [R]**

The seductive step in the steelman was the phrase "hence No Free Lunch," which quietly turned a composition into a derivation. What is true is:

- Boundedness *forces* a controller to have an inductive bias (Paper 0: it must factorize; the factorization is the bias).
- No Free Lunch says that any inductive bias is a wager on the environment class.

These compose. They do not entail one another. The first is a fact about controllers; the second is a fact about the relation between any bias whatever and the space of possible worlds. Their conjunction yields the useful statement — *a bounded controller cannot be neutral about the world it is in, even if it wishes to be* (§6.6) — and that statement is worth having. But composition is not derivation, and presenting it as derivation would be the inflation this series forbids.

## 2.4 The first leg holds — but not by the route Paper XX used

Certification incompleteness *does* trace back to bounded representation. It does not trace back through the pigeonhole argument that gave XX its Ashby result. The chain is longer and it has two ingredients, not one:

1. **The regress (Paper XVII).** Whether an external fact a rule depends on actually obtained cannot be made self-verifying: a verifier of a world-fact needs a verifier in turn, and the chain terminates only by trusting some anchor unverified. This is a structural fact about world-coupled coordination and it requires no assumption about the controller's size.
2. **The closure (Paper XXI §5).** In a bounded system the ladder of meta-levels cannot regress indefinitely — each level costs representational capacity — so it must terminate at some finite level $L^\ast$, holding something invariant. This is where boundedness enters, and it is the *only* place it enters.

Put the two together and you get L1: the architecture's own operation can make relevant a distinction at level $L^\ast + 1$, and the ladder has already closed. A demand arises within the system's domain of responsibility that the system cannot meet without violating an invariant it cannot revise from inside.

Note what this chain requires beyond boundedness: **self-representation.** A controller that cannot model its own factorization, rules, and certification procedure does not generate the demand in the first place. So even the leg that survives does not run on the bound alone. **[R]** for the chain; **[IP]** for the claim that real institutions have enough self-representation for it to bite.

## 2.5 The sources, tabulated

| | Limit | Formal source | Does **not** come from |
|---|---|---|---|
| **L1** | Certification incompleteness (§3) | boundedness (via ladder closure) **+** self-representation **+** the world-certification regress of XVII | computation; the pigeonhole argument of XX |
| **L2** | Reform Convergence Undecidability (§5) | computational universality of the update dynamics | self-reference; and **not** boundedness — it requires the negation of it |
| **L3** | No Free Lunch (§6) | absence of a prior over the environment space | boundedness, at any capacity |

Three limits, three sources, no common premise. **[R]** for the attributions.

## 2.6 What they do share, which is not a premise

The triptych is not held together by what it follows *from*. It is held together by what it is *asked*.

Each limit is a demand for assurance, and the three differ in the **vantage from which the demand is made**:

> **L1** — assurance demanded **from inside**: can the system validate its own basis of correction?
> **L2** — assurance demanded **from outside**: can an observer decide, before acting, whether a proposed change converges?
> **L3** — assurance demanded **before the world**: can an architecture be justified without a claim about which world it is in?

Read this way, the structure is not a derivation but an enumeration over vantages, and each vantage fails for a reason proper to itself: the inside fails to a regress, the outside to a reduction, the prior-to-the-world to the absence of a prior. The refusal to unify is not a shrug. It is the recognition that "governance cannot be guaranteed" is three different sentences that happen to sound alike.

And what they converge on is downstream, not upstream: each converts a guarantee into a hedge, and the hedges are ones the series already possesses (§7). **That is a convergence of consequences, not of causes**, and the distinction is the paper's spine.

This follows a precedent. Paper XVI faced four phenomena that looked like one and refused the unified theory, keeping only the shared structure — decay plus a source term — and the single axis along which the four differed. The move here is the same: keep the shared consequence, keep the axis of vantage, and decline the theory that would tie the sources together, because the tie does not exist.

## 2.7 Why the clean derivations are the shallow ones

There is a pattern in the table above, and it explains the inversion set out in §1.4 rather than merely restating it.

L2 and L3 have **clean, single-hypothesis sources** — universality; the absence of a prior. They are also the two results that are formally valid and nearly contentless (§5.3, §6.3). L1 has a **composite, three-ingredient source** — boundedness plus self-representation plus the certification regress. It is also the only one with real governance content, and it is not a theorem.

This is not a coincidence, and the general form is worth stating:

> **A limit derivable from a single clean hypothesis is usually a limit about the hypothesis, not about the object.** When the whole result falls out of "assume Turing-completeness" or "assume a uniform prior," the assumption is doing the work and the object under study is inert — a governance system, a market, a thermostat, any of them would do. The result travels so freely because it is not about governance at all.

That is why §5 and §6 declare their own shallowness rather than trading on the prestige of Turing's and Wolpert's names, and why the paper's empirical demonstration (§4) attaches to the `[IP]` diagnosis rather than to either `[R]` theorem. It is an unusual shape for a paper and we prefer to explain it here than to have it noticed.

## 2.8 The exhaustiveness claim, and a fourth vantage we do not treat

Nothing above shows that three is the right number.

The organizing axis is the vantage from which assurance is demanded, and at least one further vantage exists: assurance demanded **after the fact**. *Did the reform work?* This is not a special case of any of the three. It fails for a reason of its own — the counterfactual is not available, the reform is not repeatable, the world moved for other reasons in the meantime — and it is the limit that empirical policy evaluation actually runs into. The series has no result for it, this paper does not supply one, and its existence is the reason the exhaustiveness of the triptych is tiered:

> **[IP]** These three vantages are the ones from which assurance is characteristically demanded of a governance architecture, and each fails.
> **Not claimed:** that they are the only such vantages.

We name the fourth rather than passing over it, because a paper about the limits of assurance should not quietly claim an assurance of completeness it has not got.
