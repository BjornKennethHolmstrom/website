# Appendix A — Formal Derivations

This appendix gives the derivations underlying Part II. It states the recursive lossy-loop model precisely, proves the bottleneck theorem and its zero-marginal-return corollary, derives the balanced-allocation optimum and its closed form, derives the closure-delay law that §2.5 deferred to simulation, proves the bound under which the reality backlog cannot arise from a system's own unamplified action, and restates the bottleneck in the variety terms of §2.3. Claims are tiered as within the model; the governance analogues that follow each result are interpretive, **[IP]**, and argued in the body rather than established here.

## A.1 The Recursive Lossy Loop

Let the three stage rates be \(r_S, r_L, r_E \ge 0\), in units of work per unit time, and let the two interior conversion efficiencies be \(\rho_{SL}, \rho_{LE} \in (0,1)\). The realised rates along the pipeline are nested minima — each stage processes no faster than its own capacity and receives no more than the previous stage delivers after conversion:

\[
\tilde r_L = \min\!\big(\rho_{SL}\, r_S,\; r_L\big), \qquad
\tilde r_E = \min\!\big(\rho_{LE}\, \tilde r_L,\; r_E\big).
\tag{A.1}
\]

The effective adaptive throughput is the realised execution rate, which by substitution is a single nested minimum of three positively scaled stage rates:

\[
T_{\text{eff}} = \tilde r_E
= \min\!\big(\underbrace{\rho_{SL}\rho_{LE}\, r_S}_{a},\;
              \underbrace{\rho_{LE}\, r_L}_{b},\;
              \underbrace{r_E}_{c}\big).
\tag{A.2}
\]

The closure leg carries no conversion. Execution changes the world at rate

\[
w = g\,\tilde r_E + d, \qquad g \ge 1,\; d \ge 0,
\tag{A.3}
\]

where \(d\) is the exogenous disturbance rate and \(g\) is the consequence-amplification factor of §2.1. Re-observation proceeds at the sensing rate \(r_S\), and the reality backlog accumulates as the unmet world-change:

\[
\dot B_R = \max\!\big(0,\; w - r_S\big).
\tag{A.4}
\]

The sensing rate \(r_S\) appears in both (A.2) and (A.4): it feeds the front of the loop and bounds re-observation at the close. This double occurrence is the formal content of the recursion and the source of every closure-specific result below.

## A.2 The Bottleneck Theorem

Write \(a = \rho_{SL}\rho_{LE}\,r_S\), \(b = \rho_{LE}\,r_L\), \(c = r_E\), so that \(T_{\text{eff}} = \min(a,b,c)\) from (A.2).

> **Theorem A.1 (bottleneck).** *\(T_{\text{eff}}\) is non-decreasing in each of \(r_S, r_L, r_E\), and is strictly increasing in \(r_i\) only when the scaled rate associated with \(r_i\) is the unique minimiser of \(\{a,b,c\}\). For any stage whose scaled rate is not the unique minimiser, \(\partial T_{\text{eff}}/\partial r_i = 0\): capacity added there leaves the adaptive rate unchanged and is converted to backlog on the leg that receives it.* **[R within the model.]**

*Proof.* Each of \(a, b, c\) is a strictly increasing linear function of its own stage rate and constant in the other two. The minimum of a finite set of functions is differentiable wherever the minimiser is unique, with gradient equal to that of the active (minimising) function; the gradient with respect to any non-active argument is zero. Hence if \(c < \min(a,b)\) — execution binding — then \(\partial_{r_S} T_{\text{eff}} = \partial_{r_L} T_{\text{eff}} = 0\) and \(\partial_{r_E} T_{\text{eff}} = 1\); symmetrically for the other binding cases. Non-negativity of each partial gives monotonicity. ∎

The surplus that the added capacity becomes is a backlog, located by (A.1). The information backlog on the Sense → Learn leg grows precisely when arrivals exceed learning capacity, \(\rho_{SL} r_S > r_L\), equivalently \(a > b\); the innovation backlog on the Learn → Execute leg grows when \(\rho_{LE}\tilde r_L > r_E\); and the reality backlog grows by (A.4) when \(w > r_S\). Adding capacity to a stage whose scaled rate is already above the minimum pushes more work onto the leg downstream of it without raising \(T_{\text{eff}}\) — the formal statement that effort spent off the bottleneck is converted to queue rather than to throughput.

The result is the dynamic dual of the static compounding of Paper V: there the architecture's deficits enter a product, here its capacities enter a minimum. The minimum structure itself is the common content of the law of the minimum, queueing theory, and the theory of constraints; what is specific to the loop is the recursion of A.1 and the grounding of \(\rho_{SL}, \rho_{LE}\) in the series' prior results.

## A.3 The Balanced-Allocation Optimum

Consider the hypothetical fixed-total problem of §2.2:

\[
\max_{r_S, r_L, r_E \ge 0} \; \min(a,b,c)
\quad \text{subject to} \quad r_S + r_L + r_E = R.
\tag{A.5}
\]

> **Proposition A.2.** *The maximiser of (A.5) equalises the scaled rates, \(a=b=c\), and is*
> \[
> r_S^\* = \frac{R}{1 + \rho_{SL} + \rho_{SL}\rho_{LE}}, \quad
> r_L^\* = \rho_{SL}\,r_S^\*, \quad
> r_E^\* = \rho_{SL}\rho_{LE}\,r_S^\*,
> \]
> *with optimal throughput*
> \[
> T_{\text{eff}}^\* = \frac{R\,\rho_{SL}\rho_{LE}}{1 + \rho_{SL} + \rho_{SL}\rho_{LE}}.
> \]
> **[R within the model.]**

*Proof.* Suppose at a feasible point the scaled rates are not all equal; let \(S\) be the set of stages achieving the minimum and let stage \(j \notin S\). Since \(j\) is not binding, \(r_j > 0\) (a stage at zero rate would have scaled rate zero, hence be in the minimiser set), so a quantity \(\varepsilon > 0\) of budget can be moved from \(j\) to a binding stage. This strictly raises the scaled rate of the binding stage while leaving \(j\) non-binding for \(\varepsilon\) small, hence strictly raises \(\min(a,b,c)\). Therefore no feasible point with unequal scaled rates is optimal, and the optimum satisfies \(a=b=c\). Solving \(a=b\) gives \(r_L = \rho_{SL} r_S\); \(b=c\) gives \(r_E = \rho_{LE} r_L = \rho_{SL}\rho_{LE} r_S\); substituting into the budget yields \(r_S^\*\), and \(T_{\text{eff}}^\* = c = \rho_{SL}\rho_{LE} r_S^\*\). ∎

The optimum allocates *more* raw capacity to the upstream stages, \(r_S^\* > r_L^\* > r_E^\*\), because each downstream stage need only match the attenuated flow that reaches it; equal *effort* across stages is therefore strictly suboptimal whenever \(\rho_{SL}, \rho_{LE} < 1\). At the illustrative values \(\rho_{SL}=0.6, \rho_{LE}=0.5, R=1\): \(r_S^\*, r_L^\*, r_E^\* = 0.526, 0.316, 0.158\), \(T_{\text{eff}}^\* = 0.158\), against \(T_{\text{eff}} = 0.100\) at equal thirds — confirmed by grid search in Appendix B.

## A.4 The Closure-Delay Law

The throughput (A.2) is the rate at which an *open* pipeline with these rates would deliver adaptation. The loop is not open: by the recursion of A.1, a corrective cycle cannot be informed until the previous execution's effects have been re-observed, a delay \(\tau\) after they are produced. Under the strict-closure reading — the controller credits an adaptive cycle only once its predecessor's consequences have returned through (A.4), so that it does not act on un-re-observed change — the time to complete one informed cycle is the bottleneck processing time plus the closure delay, in series:

\[
T_{\text{cycle}} = \frac{1}{T_{\text{raw}}} + \tau, \qquad T_{\text{raw}} \equiv \min(a,b,c).
\]

The completed-cycle rate is the reciprocal, giving the closed form

\[
T_{\text{eff}}^{\,\text{rec}} = \frac{1}{\,T_{\text{cycle}}\,}
= \frac{T_{\text{raw}}}{1 + \tau\,T_{\text{raw}}}.
\tag{A.6}
\]

This is strictly below \(T_{\text{raw}}\) for any \(\tau > 0\), decreases monotonically in \(\tau\), tends to \(T_{\text{raw}}\) as \(\tau \to 0\) and to \(1/\tau\) as \(\tau \to \infty\). It halves when \(\tau = 1/T_{\text{raw}}\) — when the re-observation delay equals the bottleneck's own cycle time. Appendix B confirms (A.6) against the simulated loop to machine precision. The strict-closure reading is a modelling choice and the conservative one: if successive cycles may pipeline — a new correction begun before the previous one's consequences return — the depression is smaller, and (A.6) is then an upper bound on the loss. The reading appropriate to a controller that must not act on consequences it has not yet re-observed is the strict one.

## A.5 The Endogenous Reality-Backlog Bound

> **Proposition A.3.** *With unamplified consequences (\(g=1\)) and no exogenous disturbance (\(d=0\)), the reality backlog cannot grow: \(\dot B_R = 0\) for all rate allocations.* **[R within the model.]**

*Proof.* From (A.1), \(\tilde r_E = \min(\rho_{LE}\tilde r_L, r_E) \le \rho_{LE}\tilde r_L \le \rho_{LE}\rho_{SL} r_S\), using \(\tilde r_L \le \rho_{SL} r_S\). Since \(\rho_{SL}, \rho_{LE} \in (0,1)\), the product \(\rho_{SL}\rho_{LE} < 1\), so \(\tilde r_E < r_S\). With \(g=1, d=0\), (A.3) gives \(w = \tilde r_E < r_S\), and (A.4) gives \(\dot B_R = \max(0, w - r_S) = 0\). ∎

The reality backlog therefore has exactly three sources, and raw activity is not among them. It grows only through a fast-changing world (\(d\) large), consequences amplified beyond their footprint (\(g>1\), so \(g\tilde r_E\) may exceed \(r_S\)), or sensing capacity diverted onto one target so that the rate effectively available to re-observe the consequences of action is below the nominal \(r_S\) — the case isolated in Simulation D, where the controller's sensing is fully consumed tracking a drifting target. The asymmetry of the two backlog remedies follows: lowering \(\tilde r_E\) removes the backlog only when \(g>1\) is its driver; against exogenous \(d\) it does nothing, and only raising \(r_S\) or narrowing the boundary so that fewer consequences fall outside re-observation will serve.

## A.6 The Bottleneck in Variety Terms

Let \(V_d\) be the disturbance variety the architecture faces, net of what its objective reaches, and let \(V_S, V_L, V_E\) be the variety each stage can carry — the number of independent distinctions it can register, represent, or actuate. Requisite variety (Ashby) requires each stage to carry at least \(V_d\) for the loop to absorb the disturbance. The inter-stage conversions attenuate variety as the efficiencies attenuate rate: only a fraction of sensed distinctions survive into the model, and only a fraction of modelled distinctions survive into action. The absorbable variety of the loop is therefore the minimum of the attenuated stage varieties,

\[
V_{\text{loop}} = \min\!\big(V_S,\; \sigma_{SL} V_L,\; \sigma_{SL}\sigma_{LE} V_E\big),
\]

with \(\sigma_{SL}, \sigma_{LE} \in (0,1)\) the variety-theoretic counterparts of the rate efficiencies. **[IP].** The bottleneck theorem in this currency reads: a loop absorbs disturbance variety equal to its least stage variety, however much variety its other stages command. This is the same Ashbyan requirement Paper IV located at the point of contact, here distributed across the three process stages rather than across space; the two are distinct axes of one requirement, and neither subsumes the other (§2.3).

---


