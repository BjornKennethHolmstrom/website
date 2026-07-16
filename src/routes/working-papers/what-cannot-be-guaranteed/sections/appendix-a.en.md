# Appendix A — Formal

## A.1 The reduction (for §5.2)

Let $M$ be a Turing machine and $x$ an input. Construct the reform system $G_{M,x} = (S, U, R, C, V)$ as follows.

**States.** $S = \mathrm{Conf}(M) \cup \{s_H\}$, where $\mathrm{Conf}(M)$ is the set of configurations of $M$ — tape contents, head position, control state — and $s_H \notin \mathrm{Conf}(M)$ is a fresh absorbing state.

**Dynamics.** $U$ acts as $M$'s transition function on $\mathrm{Conf}(M)$, except that any configuration whose control state is accepting or rejecting maps to $s_H$; and $U(s_H) = s_H$. Thus $s_H$ is absorbing and is reached if and only if $M$ halts.

**Coordination and viability.** Set $C = V = \{s_H\}$, so that $C \cap V = \{s_H\}$. Every configuration encoding a live computation lies outside $C$; the only coordinated, viable state is the halting sink.

**Initial state.** $s_0 = e(M, x)$, the initial configuration of $M$ on $x$.

**Claim.** The trajectory of $U$ from $s_0$ eventually enters and remains in $C \cap V$ **iff** $M$ halts on $x$.

*Proof.* ($\Leftarrow$) If $M$ halts on $x$, the simulated computation reaches a halting configuration in finitely many steps, whence $U$ maps it to $s_H$, which is absorbing; the trajectory is thereafter in $C \cap V$ forever. ($\Rightarrow$) If $M$ does not halt on $x$, then $U$ never leaves $\mathrm{Conf}(M)$, and $\mathrm{Conf}(M) \cap C = \emptyset$; the trajectory never enters $C \cap V$ at all, let alone remains in it. $\square$

**Corollary (Theorem, §5.2).** Suppose an algorithm $P$ decided the Reform Convergence Problem for the class $\mathcal{G}$ of reform systems with universal update dynamics. Then $M_P$ — the machine that, on input $(M, x)$, constructs $G_{M,x}$ and runs $P$ on $(G_{M,x}, s_0)$ — decides the Halting Problem. Contradiction. $\square$

**Remark on the strengthening.** The reduction uses the special case in which convergence means entering an *absorbing* coordination state. The general convergence criterion of §5.1 — the trajectory eventually enters $C \cap V$ and remains there, possibly continuing to move within it — is weaker, and any decision procedure for the general problem would decide this special case. Undecidability of the special case therefore implies undecidability of the general one. This is why $C \cap V$ is constructed as a singleton: the tighter the target set, the stronger the theorem, and the fewer the objections available to a reader who suspects a non-halting computation might satisfy the criterion by wandering into some incidental coordinated region.

**Remark on finiteness.** Every hypothesis of this appendix fails for a finite-state institution, for which $\mathrm{Conf}$ is finite and convergence is decided by simulating $|S|$ steps and reading off whether the resulting cycle lies inside $C \cap V$. See §5.3: the theorem is a limiting idealization, and the binding constraint on real reform evaluation is the **cost** of that simulation, not its impossibility.

## A.2 A note on what is *not* proved here

No formal appendix is given for **No Free Lunch** (§6). The theorem is standard, the mirror-environment sketch in §6.2 is sufficient to see how it goes, and §6.3 declares it near-vacuous. Reproving a contentless result in full formal dress would be **inflation by formatting** — lavishing rigour on precisely the theorem the paper says carries no content, and thereby borrowing its apparent weight. The omission is a choice and we prefer to name it.

---

# A.3 Two open problems, stated precisely

The paper leaves two problems open. They are stated here rather than scattered across §3.2, §3.5, §4.6 and §9.6, because an open problem buried in prose does not get worked on.

**They are not independent. The second blocks the empirical test of the first.**

---

## Open Problem 1 — A theorem for certification incompleteness

**Status.** §3 states certification incompleteness as `[IP]` and explicitly declines to call it a Gödel theorem. There is no diagonal construction here — only a regress (Paper XVII) plus a closure (Paper XXI §5), which is a structural diagnosis. A theorem would require three things, none of which this paper supplies.

### (a) A definition of the object

A **governance architecture** as a bounded controller with self-representational capacity: the analogue of "a formal system rich enough to encode arithmetic." The ingredients exist — Paper 0's bounded factorization, Paper XXI's meta-ladder with its closure level $L^\ast$, Paper XVII's certification kernel — but nobody has assembled them into a definition sharp enough to quantify over. Minimally it must fix:

- the factorization $R$ and the bound on its cardinality;
- the certification kernel $K$: the procedure mapping observations to attestations that a world-fact obtained;
- the system's representation *of* $R$ and *of* $K$ — the self-model, without which the problem does not arise;
- the meta-ladder and its closure level $L^\ast$, at which something is held invariant because capacity has run out.

### (b) A notion of an *architecture-generated disturbance* — **the crux, and the likely point of failure**

The analogue of a sentence constructed from the system's own symbols. This requirement has two readings and the gap between them is where the whole claim lives.

> **Trivial reading:** a disturbance is architecture-generated if the architecture's operation was among its causes. Under this reading the class is **universal** — every policy has side effects, every category shapes what it categorizes, every institution changes the world it governs — and certification incompleteness is empty.
>
> **Strong reading:** a disturbance is architecture-generated if it is constructed *out of the certification apparatus itself*, in such a way that absorbing it requires revising $K$, and $K$ cannot license its own replacement. This makes the apparatus **self-defeating**, not merely fallible.

**The open question is whether the strong class is non-empty.** We have not shown that it is. We do not believe it is empty, and we cannot exclude it. Should the strong class turn out empty, certification incompleteness dissolves into the ordinary observation that institutions can be wrong about the world — which is true, uninteresting, and not what §3 claims.

Any attempt on this problem should begin here, not at (c).

### (c) The non-absorbability proof

Given (a) and (b): show that a strong-reading disturbance cannot be absorbed without either

- violating an invariant the system cannot revise from inside, or
- climbing to meta-level $L^\ast + 1$, which the bounded ladder has already closed.

### The empirical counterpart, and why §4 does not supply it

§4 corrupts the certification kernel **exogenously** — the experimenter inverts the signal. It therefore shows what happens *when* a kernel fails. It does not show a system **generating its own kernel failure**, which is requirement (b) in empirical dress.

> **The empirical problem: construct a minimal model in which the certification kernel is corrupted by the system's own successful operation, rather than by an intervention from outside it.**

That model would be the first genuine candidate for a governance Gödel sentence. It does not exist, in this series or, as far as we know, anywhere.

---

## Open Problem 2 — A controller that can be traumatised

**Status.** Registered prediction C3 — that certification repair has a deadline — is the only genuinely new claim Paper XXII had, and it is **unaskable in the system we could build**. Its null (repair works instantly at every delay, ρ = 0.046) is a fact about what a rule-follower *is*, not a fact about certification:

> **A rule-follower has no trust to lose.** Its giving is a function of the signal in front of it, not of any history with that signal. It cannot be misled into distrust, because it does not trust — it complies. There is no basin to fall out of, so there is nothing for timing to matter to.

The question that matters is **policy hysteresis**: whether an adaptive controller, having learned that its certification channel lies, can be taught again that it tells the truth — and whether there is a delay past which it cannot.

### What is required

A multi-agent controller satisfying **all four**:

1. **It learns.** Not frozen at evaluation. It must be capable of unlearning trust in a corrupted channel and re-acquiring it after repair.
2. **It cooperates reliably.** It reaches a cooperative equilibrium mediated by the certification channel, and it does so across seeds — not in a favourable minority of them.
3. **Its cooperation is channel-mediated.** Giving must be conditioned on the certification signal, so that corrupting the signal is corrupting the coordination, rather than merely corrupting an input the policy has learned to ignore.
4. **Its degradation is separable from the population's.** Policy hysteresis must be measurable among agents who *survive*, or it is indistinguishable from the trivial observation that the dead do not recover.

### The registered success criterion, carried over

The baseline gate of §4.3, unchanged: under `no_crisis`, survival and cooperation rate flat across the evaluation horizon and true-informed giving ≥ 0.60, in ≥ 16 of 20 seeds.

**We failed this at 4/20, 0/20, and 0/20 across three configurations** (Appendix B.4). In the large majority of seeds the learner converges on a **no-trade equilibrium in which the generalist — who harvests both resources and needs nobody — survives alone**, while both specialists starve.

### Why this is a research problem and not a tuning problem

We stopped under a rule committed before the final attempt, and the reason is worth stating as part of the problem:

> Each further configuration would have been a search for the baseline that produces the result the paper wants. At that point the preregistration is decoration, and the "finding" is an artifact of the search.

The failure is itself informative. Three agents, hard complementarity, a *truthful* signalling channel, delayed giver credit, an explicit survival objective — and coordination still does not reliably emerge. **Coordination is a conditional attractor, not an inevitability**, which is the thesis of the coordination line of work, arriving here unbidden and against this paper's interests. Open Problem 2 belongs to that line, and Paper XXII's inability to solve it is offered as evidence for it.

### The dependency

**Open Problem 2 blocks the empirical half of Open Problem 1.** A system that never trusted its certification kernel cannot be shown to have lost the ability to revise it. Until a traumatisable controller exists, the endogenous-corruption model of OP1 has nothing to corrupt that would notice.

---

## A.4 Two smaller problems, recorded

**A.4.1 — Partial and stochastic corruption.** §4's channel is **inverted**, not degraded. A channel that is right 70% of the time is the form real certification failure most often takes, and it might behave entirely differently — it might well produce the *missed* certification that total inversion does not, because a partially-reliable channel would not systematically over-supply any single party. The flooding mechanism (§4.5) may be an artifact of totality. Untested.

**A.4.2 — Does flooding generalise?** The mechanism depends on the recipient being **unable to harvest** what it is being over-supplied with — its inventory rises because gifts are the only source and nothing consumes the surplus. Whether it survives richer complementarity structures, more agents, or resources with decay is a conjecture the result supports rather than a claim it proves. A negative here would confine §7.3's oversight principle to a narrow class of allocation systems, which would be worth knowing.
