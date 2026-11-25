## Appendix B — Formal results and rejected unifications

### B.1 Detailed balance [M]

Use the assumptions of §6.1–6.3 with linear copying, \(0\le B<1\) and \(0<r<1\). For a move of a specified selected agent from a block of size \(k\ge2\) into a different block of size \(l\ge1\), the forward probability conditional on selection is \(a(k)(1-r)l/(N-1)\) and the reverse is \(a(l+1)(1-r)(k-1)/(N-1)\). Their ratio is

\[
\frac{a(k)l}{a(l+1)(k-1)}=\frac{w(k-1)w(l+1)}{w(k)w(l)}.
\]

For a singleton merging into a block of size \(l\), the reverse is an innovation. The ratio is

\[
\frac{a(1)(1-r)l}{(N-1)a(l+1)r}=\frac{w(l+1)}{w(1)w(l)}.
\]

The uniform selection factor cancels. The reverse of a singleton merge covers splitting a nonsingleton. Where multiple elementary moves induce the same pair of partitions, pair each with its reverse and sum the balanced flows. Null moves balance trivially. The positive normalized weight is therefore reversible and, by irreducibility, is the unique stationary law.

### B.2 Recurrence and numerical evaluation [M]

Keep the original population size \(N\) fixed in all weights even for subpartitions of size \(n\le N\). Conditioning on the size of the block containing a distinguished element gives

\[
Z_0=1,\qquad Z_n=\sum_{k=1}^n\binom{n-1}{k-1}w(k)Z_{n-k}.
\]

Restricting every sum to \(k\le L\) gives \(Z_n(L)\), with \(Z_0(L)=1\). Then \(\Pr(M\le L)=Z_N(L)/Z_N\). At \(B=0\) the normalization reduces to \(Z_N=\theta(\theta+1)\cdots(\theta+N-1)\), the Ewens case. Finite positive sums and denominators ensure smooth interior probabilities. Exact arithmetic is not required for evaluating the probabilities numerically; the correction uses 70-digit decimal working precision and independent verification.

### B.3 Bottleneck and conditional exit bound [M]

Write \(P(x,y)\) for transition probabilities and \(Q(S,S^c)=\sum_{x\in S}\Pi(x)P(x,S^c)\). The boundary argument gives \(Q(S,S^c)\le\Pi(M=L)\). Detailed balance gives equality of forward and reverse flows across the cut. Testing the indicator of \(S\) in the reversible variational formula gives

\[
1-\lambda_2\le\frac{Q(S,S^c)}{\Pi(S)\Pi(S^c)}\le2b,
\]

where \(\lambda_2\) is the second-largest eigenvalue and \(b\) is defined in §6.4. This yields the stated ordinary relaxation bound. Let \(A\) denote the smaller side. If \(\nu_0=\Pi(\cdot\mid A)\), the density bound \(\nu_0(x)\le\Pi(x)/\Pi(A)\) persists under Markov evolution since \(\Pi\) is stationary. Thus each step's unconditional probability of a crossing from \(A\) to its complement is at most \(Q(A,A^c)/\Pi(A)\le b\). The union bound gives

\[
\Pr_{\nu_0}(\tau_{A^c}\le t)\le\min(1,tb).
\]

Neither bound supplies an upper bound on relaxation or a mean first-passage estimate. The initial distribution restriction is essential for the stated exit bound.

### B.4 Verification and historical limitations

The correction archive contains audit v0.2 and its original source archives, independent review and checks. `scripts/check_witnesses.py` enumerates 15 partitions at \(N=4\) for the detailed-balance check. Independent `review/code/partition_chain_checks.py` checks chains at \(N=5,6\) (24 parameter combinations); the exact-chain segment was replayed. The unchanged legacy loop at \(N=8\) was compared against the law by the reviewer in a longer Monte Carlo run, retained as reviewer-reported [E]. `scripts/check_additions.py` and `results/additions.json` provide the decimal recurrence, crossover and bounds. `review/code/escape_time.py` and its captured output document the exploratory recovery probe. No full historical sweep, long Monte Carlo replay or literature-priority investigation is asserted. The supplied historical plots retain original labels in the archive only; the correction does not republish them as evidence of a fold.

### B.5 Rejected unifications

The original investigation rejected a single reach parameter, a universal coupling of improvement and contestability, necessary external protection and universal self-erosion. This revision also withdraws the purported four-formalism identity, the robust-collapse tier, the universal reference-excitation condition, and the claimed irreversible fold. Source-term locality remains a conditional design question [IP]; the exact partition and bottleneck results are [M] within their stated model. No single scalar is established across disciplines. The fixed barrier does not test endogenous protection; that question and the fixed-hypothesis-space seam remain [H].
