## 6. The residual: finite-population entrenchment

### 6.1 The actual switching rule [I]

The original institutional question was whether a protection mechanism could survive ordinary optimization without being literally uneditable. The experiments do not implement a choice or repeal of protection: they fix a switching barrier \(B\) externally. The barrier penalizes leaving a popular opinion and can suppress innovation as well as copying. It models entrenchment, not the political stability of a diversity-preserving institution.

In the standalone experiment \(N=120\) agents start either with distinct opinions or in consensus. A micro-update selects one agent uniformly. If its current block has size \(k\), it stays with probability \(Bk/N\); otherwise it leaves, innovates with probability \(r\) (a fresh label), or copies a remaining agent's opinion, with block weights proportional to size raised to \(\gamma\). Copying excludes the selected agent and the barrier uses the pre-removal count. A sweep comprises \(N\) micro-updates. The standalone figure uses 1,000 sweeps, burn-in 600 and two seeds per cell; the composite uses \(N=100\), 800 sweeps, burn-in 500 and two seeds, with different grids. Both compare separate fixed-parameter runs from two starts, not a parameter ramp and reversal. The legacy standalone cutoff labels a sampled cell separated if the two branch summaries straddle \(N/4\); the first such sampled barrier is not a structural critical value. The supplied figures are historical summaries [HR]; raw trajectories and the claimed horizon-extension evidence were not supplied.

### 6.2 First innovation and ergodicity [M]

At consensus the next update leaves consensus with probability \((1-B)r\). For \(B<1\) and \(r>0\) the first-exit mean is

\[
\mathbb E[\tau]=\frac{1}{(1-B)r}.
\]

At \(B=0.99\), \(r=0.35\), this is about 286 updates, or 2.381 sweep equivalents at \(N=120\). It measures the first appearance of another opinion, not recovery to substantial diversity. At fixed positive \(r\) it diverges only at the endpoint \(B=1\); it gives no structural threshold below one. Consensus is absorbing at \(B=1\) or \(r=0\).

Ignoring the literal labels and retaining the partition of labelled agents, the chain is finite. For \(N\ge2\), \(0\le B<1\), \(0<r<1\) and finite \(\gamma\), every partition can reach the singleton partition via innovations of nonsingletons, and from there any prescribed partition via copying. Each required update has positive probability. A copy at consensus gives a self-loop. Hence the partition chain is irreducible and aperiodic, with a unique stationary law and convergence from every initial partition. No finite-population absorbing collapse or broken ergodicity occurs at interior parameters. This does not establish rapid mixing or exclude singular large-population limits.

### 6.3 Exact stationary distribution for linear copying [M]

For \(\gamma=1\) with the update rule above, let

\[
a(k)=1-Bk/N,\qquad \theta=\frac{r(N-1)}{1-r},\qquad w(k)=\frac{\theta(k-1)!}{\prod_{j=1}^k a(j)}.
\]

For a set partition \(\pi\) of labelled agents, the stationary probability is

\[
\Pi(\pi)=Z_N^{-1}\prod_{S\in\pi}w(|S|).
\]

Appendix B proves detailed balance and gives the partition-function recurrence. The law also applies to the composite model with \(N=100\) used throughout its weights. At \(B=0\) it reduces to the Ewens partition law; no priority or novelty claim is made for the barrier modification. The absolute innovation-label counter is not stationary.

Let \(M\) be the largest block size. For \(N=120\), the numerical evaluation of the exact law (70-digit working precision, independently cross-checked) gives:

| Barrier | Innovation | \(\Pr(M\le30)\) | \(\Pr(M>90)\) |
|---|---:|---:|---:|
| 0.95 | 0.35 | 0.999803689 | 0.000050917 |
| 0.99 | 0.30 | 0.000000736 | 0.999999209 |
| 0.99 | 0.35 | 0.487079610 | 0.512822540 |
| 0.99 | 0.40 | 0.999987152 | 0.000000688 |

At \(B=0.99\), \(r=0.35\), \(N=120\), consensus alone has mass 0.195025, and the intermediate region has mass about 0.00009785. The interval from innovation 0.30 to 0.40 brackets a sharp finite-population stationary crossover, not a measured hysteresis loop. At finite \(N\) the stationary probabilities are smooth in interior parameters. At \(B=0.95\) the diverse region carries almost all stationary mass, contrary to the original assertion of a general decay to consensus below a critical barrier. Individual paths can nevertheless visit consensus.

### 6.4 A quantified bottleneck [M]

A micro-update changes \(M\) by at most one. For \(S=\{M\le L\}\), the stationary flow \(Q(S,S^c)\) is bounded by \(\Pi(M=L)\). Let \(b=\Pi(M=L)/\min(\Pi(S),1-\Pi(S))\). By reversibility and the indicator-function variational bound, the ordinary spectral gap is at most \(2b\), hence the relaxation time is at least \(1/(2b)\) updates. If the initial distribution is the stationary law conditioned on the smaller side, the probability of exiting that side within \(t\) updates is at most \(\min(1,tb)\). Appendix B gives the proof.

At \(N=120\), \(B=0.99\), \(r=0.35\), the cut \(L=66\) gives \(\Pi(S)\approx0.4871681922\), boundary mass about \(1.103870531\times10^{-7}\) and \(b\le2.265893\times10^{-7}\) with outward rounding. Relaxation is bounded below by about \(2.2066\times10^6\) updates (18,388.6 sweep equivalents). From the stationary law conditioned on \(S\), the probability of leaving \(S\) in 1,000 sweeps is at most 0.02720. This is a rigorous finite-population bottleneck between regions of substantial stationary mass, a precise sense of metastability. The relaxation bound is not a mean basin-to-basin passage time, and the exit bound does not apply automatically to an arbitrary diverse or singleton start.

### 6.5 Historical separation and exploratory recovery

At \(B=0.95\), \(r=0.35\), the corresponding relaxation lower bound is only about 3.604 sweep equivalents. In an independently reported count-based reimplementation, checked against the small-population stationary distribution, four collapsed starts first cross effective opinion count greater than 30 after 483, 1,233, 1,677 and 2,169 sweeps [E]. No crossing to largest block greater than 90 was reported from the diverse start at barrier 0.95 within 20,000 sweeps (four seeds) [E, censored]. At \(B=0.99\) no crossing was reported within 20,000 sweeps for either start in four seeds each [E, censored]. The diverse-to-concentrated criterion in that probe is largest block greater than 90; it is not the reverse of the other threshold or the conductance cut. These long exploratory runs were not replayed during reconciliation. They establish recovery at 0.95 in the sampled runs, not a general absence of all metastability. The old \(B^*\approx0.95\), irreversible-fold and horizon-robustness claims are withdrawn.

### 6.6 Design implications [IP/H]

A reachable state need not be practically accessible within the relevant decision horizon. The model gives one precise example, not a measure of real institutional entrenchment. A fixed barrier is not an endogenous protection class; a model of choosing, maintaining and repealing a constraint would be needed to investigate that question. Future work might compare policies that preserve genuinely useful alternatives, rather than maximizing raw opinion counts, and explicitly measure their costs and transition times. The unresolved issue of unconceived alternatives also remains distinct: a fixed partition model allows innovation by construction but does not generate semantic hypotheses or evaluate their quality.
