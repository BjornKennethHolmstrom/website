# §5 — The second limit: no one can decide from outside whether a reform converges

## 5.1 The question, stated so that it can be answered

Section 3 asked whether a governance architecture can validate, from inside, that its own basis of correction still holds. This section asks the complementary question, and it is the one reformers actually ask: *before we do this, can anyone tell us whether it will work?*

Made precise, the question is a decision problem. Let a **reform system** be a tuple

$$G = (S,\ U,\ R,\ C,\ V)$$

where $S$ is the joint state space of agents, resources, beliefs, and institutional rules; $U: S \to S$ is the update dynamics induced by the proposed reform; $R$ is the factorization available to the agents; $C \subseteq S$ is the coordination criterion — the set of states in which the agents' actions are mutually consistent in the sense Paper XIX's governors enforce; and $V \subseteq S$ is the viability set, the states in which essential variables remain within bounds.

**The Reform Convergence Problem.** Given $(G, s_0)$, decide whether the trajectory $s_{t+1} = U(s_t)$ eventually enters and remains in $C \cap V$.

This is what a reform evaluation *is*, when the fog is cleared from it. An impact assessment, a fiscal projection, a constitutional review: each is an attempt to answer an instance of this problem, under resource constraints and with a tolerance for error. The question of this section is whether the problem has a general solution at all.

## 5.2 The theorem

**Theorem (Reform Convergence Undecidability, [R]; Appendix A.2).** *Let $\mathcal{G}$ be a class of reform systems whose update dynamics can simulate a universal Turing machine. Then there is no algorithm that, for every $G \in \mathcal{G}$ and every $s_0$, decides whether the trajectory of $U$ from $s_0$ eventually enters and remains in $C \cap V$.*

The proof is a reduction from the Halting Problem, and the only step requiring care is the construction of the target set. It is not enough to arrange that the simulated machine's halting state lies inside $C \cap V$; one must also foreclose the possibility that a *non-halting* computation drifts into some other coordinated, viable region and satisfies the convergence criterion by accident. So we construct $G_{M,x}$ such that $C \cap V = \{s_H\}$ exactly — a single absorbing state, entered if and only if $M$ halts on $x$, with every state encoding a live computation lying outside $C$. Convergence then *is* halting, and a decision procedure for the one would be a decision procedure for the other.

Two things the theorem does not require, and it matters that it does not.

**It does not require institutional self-reference.** The formal source of the undecidability is computational universality of the update dynamics — nothing more. Self-reference is a plausible *route* by which real governance systems acquire enough expressive power for the limit to bite: an institution that can rewrite its own decision rules is thereby able to encode arbitrary computation in the rewriting. But the theorem holds for systems with no self-model at all, provided the dynamics are rich enough. Conflating the two is the standard overreach in this literature, and §2's separation of sources depends on not making it. The certification incompleteness of §3 is *about* self-reference; this result is not.

**It does not require the coordination criterion to be exotic.** Any $C$ and $V$ into which a halting state can be embedded will serve. The theorem is therefore not a claim about the difficulty of *defining* coordination — a difficulty the series takes seriously elsewhere — but about deciding whether it is reached.

## 5.3 The theorem is shallow, and saying so is the point

Granted Turing-completeness, the reduction above is routine. It is worth being explicit about how routine: the same conclusion follows from at least three independent standard results. Rice's theorem gives undecidability for essentially any non-trivial semantic property of a program, of which "converges to a coordinated state" is one. Richardson's theorem and its relatives give undecidability of boundedness for sufficiently rich dynamical systems, and remaining within $V$ is a boundedness condition. And the direct reduction we have given is the textbook construction. **When a result falls out of three unrelated theorems, it is not telling you anything specific about the object under study.** It is telling you that the object was assumed to be computationally universal, and everything follows from that assumption rather than from anything governance-shaped.

The series has been here before. Paper XX derived Ashby's law from bounded representation and reported that the derivation was nearly definitional — a real theorem with shallow content — because reporting it was more valuable than dressing a pigeonhole argument as a discovery. The same discipline applies here, and more sharply, because the words *Gödel* and *Turing* carry a prestige that does the reader's thinking for them. A paper that announced "reform convergence is undecidable" and stopped would be trading on that prestige. What follows is the part that is not free.

**The theorem is in tension with the series' own premise, and the tension is instructive.** Paper 0 and Paper XX build everything on *bounded representation*: a finite controller partitioning the task-relevant world into a bounded number of internal states. But a system with a finite state space has a *decidable* convergence problem — simulate it for $|S|$ steps and read off whether it has entered a cycle inside $C \cap V$. Undecidability requires unboundedness, which is precisely what the rest of the series denies. **The two limits therefore cannot both be sharp at once**, and pretending otherwise would be a unification bought with a contradiction. This is one of the reasons §2 refuses to derive the triptych from a single bound.

The resolution is not to abandon the theorem but to relocate it. For a finite institution, convergence is decidable and the decision procedure costs time exponential in the state description — which is to say, decidable and *useless*. **The operative limit on reform evaluation is complexity, not computability.** The undecidability theorem is the idealized shadow cast by a finite but astronomically expensive problem, and it is the expense, not the impossibility, that a reformer meets. We state this as the honest form of the result:

> **[R]** For unbounded update dynamics, the Reform Convergence Problem is undecidable.
> **[R]** For finite systems it is decidable, at cost exponential in the state description.
> **[IP]** For real institutions, the second is the binding constraint, and the first is a limiting idealization of it.

The computability framing is the traditional one. The complexity framing is the one that does work.

## 5.4 What the theorem forbids, and what it licenses

**Forbidden: the belief that sufficient analytical capacity closes the gap.** The intuition the theorem kills is not "reforms are hard to predict" — everyone believes that — but the tacit assumption that the difficulty is a *resource* problem, soluble by a better model, a larger simulation, a more capable analyst, or a sufficiently powerful machine. On the unrestricted class there is no procedure at all, and on the restricted classes we actually inhabit the procedure is exponential. Neither is fixed by scaling. An institution that treats *ex ante* certification of reform as a solvable engineering problem and staffs it accordingly is not being ambitious; it is misreading the problem's type.

**Licensed: nearly everything the series already recommends, now as consequence rather than counsel.** Protected experimental spaces (Paper VII) are the only method available when no *a priori* procedure exists: you cannot compute the answer, so you must instrument the question. Sentinels (Paper XIX) are necessary because divergence must be *detected* when it cannot be *predicted*. Reversibility and sunset clauses (Paper XXI §6) are the rational response to a bet whose outcome cannot be settled in advance: an irreversible reform is a wager on a decision problem you have just been told you cannot decide. What §7 will develop is that these are no longer prudential recommendations but forced moves.

**A caveat that must be preserved, because it is the one most often dropped.** *Undecidability does not imply unpredictability in practice.* The Halting Problem is undecidable, and termination provers nonetheless settle the question for the overwhelming majority of programs anyone actually writes. Undecidability is a statement about the *worst case over an unrestricted class*; it is entirely compatible with a decision procedure that succeeds on every instance a real institution will ever face. To slide from the theorem to "we cannot know whether reforms will work" is to commit exactly the error §6 will identify in the misuse of No Free Lunch: turning a statement about the absence of universal guarantees into a licence for fatalism. The theorem removes a guarantee; it does not remove knowledge.

**The constructive content, therefore, is a demand: name the restriction.** Restricted classes of dynamics remain perfectly decidable — contraction mappings, potential games, monotone systems, acyclic dependency structures, finite-horizon linear-quadratic control. No real institution is designed in the unrestricted class. So the theorem's engineering translation is not *abandon evaluation* but *state the class of dynamics under which your evaluation is valid, and instrument for the case that the system leaves it*. An impact assessment that does not say which structural assumptions make its projection meaningful is not a conservative estimate; it is an unbounded claim about an undecidable problem. **[IP]**

## 5.5 The pair with §3, kept apart

It is tempting to fuse this section with the last. Both are limitative, both concern the impossibility of a certain kind of assurance, and both terminate in the same design principles. But they are different results and the paper does not collapse them:

> **§3 (certification incompleteness)** concerns the limits of validating a needed change **from inside** the system that needs it.
> **§5 (reform undecidability)** concerns the limits of predicting, **from outside**, whether a proposed change will converge.

The first is a regress; the second is a reduction. The first has real content and no theorem; the second has a theorem and thin content. The first bites on architectures that can represent themselves; the second bites on architectures that can compute, whether or not they can represent themselves. An institution could in principle suffer either without the other — a self-blind but computationally universal system faces §5 and not §3; a self-representing finite-state system faces §3 and not, in any biting sense, §5.

That the two nevertheless converge on the same hedges — sandboxing, sentinels, reversibility — is the observation §7 turns into an argument. It is a convergence of consequences, not of causes, and the paper's structure depends on keeping the distinction.

---

## Appendix A.2 — The reduction (for §5.2)

Let $M$ be a Turing machine and $x$ an input. Construct the reform system $G_{M,x} = (S, U, R, C, V)$ as follows.

**States.** $S = \mathrm{Conf}(M) \cup \{s_H\}$, where $\mathrm{Conf}(M)$ is the set of configurations of $M$ (tape contents, head position, control state) and $s_H \notin \mathrm{Conf}(M)$ is a fresh absorbing state.

**Dynamics.** $U$ acts as $M$'s transition function on $\mathrm{Conf}(M)$, except that any configuration in which $M$'s control state is accepting or rejecting maps to $s_H$; and $U(s_H) = s_H$. Thus $s_H$ is absorbing and is reached if and only if $M$ halts.

**Coordination and viability.** Set $C = V = \{s_H\}$, so that $C \cap V = \{s_H\}$. Every configuration encoding a live computation lies outside $C$; the only coordinated, viable state is the halting sink.

**Initial state.** $s_0 = e(M, x)$, the initial configuration of $M$ on $x$.

**Claim.** The trajectory of $U$ from $s_0$ eventually enters and remains in $C \cap V$ **iff** $M$ halts on $x$.

*Proof.* ($\Leftarrow$) If $M$ halts on $x$, the simulated computation reaches a halting configuration in finitely many steps, whence $U$ maps it to $s_H$, which is absorbing; the trajectory is thereafter in $C \cap V$ forever. ($\Rightarrow$) If $M$ does not halt on $x$, then $U$ never leaves $\mathrm{Conf}(M)$, and $\mathrm{Conf}(M) \cap C = \emptyset$; the trajectory never enters $C \cap V$ at all, let alone remains in it. $\square$

**Corollary (Theorem, §5.2).** Suppose an algorithm $P$ decided the Reform Convergence Problem for the class $\mathcal{G}$ of reform systems with universal update dynamics. Then $M_P$ — the machine that, on input $(M, x)$, constructs $G_{M,x}$ and runs $P$ on $(G_{M,x}, s_0)$ — decides the Halting Problem, a contradiction. $\square$

**Remark on the strengthening.** The reduction uses the special case in which convergence means entering an *absorbing* coordination state. The general convergence criterion of §5.1 — the trajectory eventually enters $C \cap V$ and remains there, possibly continuing to move within it — is weaker, and any decision procedure for the general problem would decide this special case. Undecidability of the special case therefore implies undecidability of the general one. This is why $C \cap V$ is constructed as a singleton: the tighter the target set, the stronger the resulting theorem, and the fewer the objections available to a reader who suspects that a non-halting computation might satisfy the criterion by wandering into some incidental coordinated region.

**Remark on finiteness.** Every hypothesis of this appendix fails for a finite-state institution, for which $\mathrm{Conf}$ is finite and convergence is decided by simulating $|S|$ steps. See §5.3: the theorem is a limiting idealization, and the binding constraint on real reform evaluation is the cost of that simulation, not its impossibility.
