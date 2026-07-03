## 3. The reflexive boundary cycle: a minimal model

### 3.1 Specification

The model instantiates the theorem's hypotheses in the smallest system that can exhibit their consequences: two scalar subsystems, each governed by a local controller that believes its jurisdiction is closed and its model calibrated, coupled through a channel whose strength depends on both the states and the institutional variables. The full specification, with parameter values, is in the simulator header (`paper_xviii_boundary_instability.py`); the structure is:

$$x_i(t{+}1)=(a_t-k_i)\,x_i+\varepsilon(t)\,x_j+w_i,\qquad
\varepsilon=\varepsilon_0+\alpha\,(1-b)+\beta\,c,$$

$$c(t{+}1)=(1-\mu)\,c+\mu\,x_1x_2+\nu\,(|\Delta k_1|+|\Delta k_2|),\qquad
b(t{+}1)=\sigma\!\big(\gamma\,(1-\overline{|r|}/R)-\delta\,|\varepsilon|+h\,(b-\tfrac12)\big).$$

Each subsystem predicts its next state from its own closed model, $\hat{x}_i=(a_0-k_i)\,x_i$, so the residual $r_i=x_i(t{+}1)-\hat{x}_i=(a_t-a_0)\,x_i+\varepsilon\,x_j+w_i$ is *exactly* the unmodeled content: drift staleness plus cross-boundary influence plus noise. Learning is a gradient step on the local squared residual with a leak, $k_i\leftarrow(1-\lambda)k_i+\eta\,x_i r_i$; states are soft-saturated at a finite range.

Five modeling choices are declared rather than hidden, because each is load-bearing and each was forced by an identifiable failure of the naive specification. *The gain leak* $\lambda$: without it the gain update is a ratchet and no relaxation oscillation is possible; institutionally, control effort is costly and un-renewed authority relaxes. *The coupling stock* $c$: the outline's instantaneous product $\beta x_1x_2$ cannot persist after a collapse, yet the outline's own phase narrative requires persistent coupling; the stock — coupling built by repeated interaction, decaying slowly — is the minimal persistence mechanism and the institutionally faithful one. *The policy-velocity channel* $\nu$: exploratory runs showed that with state-mediated reflexivity alone, faster learning is monotonically stabilizing and no upper learning-rate bound exists; the paper's premise $\partial\mathbf{\Delta}/\partial\theta\neq 0$ requires a *direct* channel, and $\nu$ — each side's rule changes create interfaces that entangle the jurisdictions — is its minimal implementation and the quantity §4 sweeps. *The memory term* $h\,(b-\tfrac12)$ is AR(1) self-excitation, not hysteresis proper; the earlier label is corrected. *The closed-model residual* replaces the outline's open-loop baseline: it makes $r_i$ the literal boundary-mismatch signal, at the price of one consequence recorded in §5. All five are in the simulator's changelog with the exploratory runs that forced them.

The correspondence to §2 is exact where it needs to be: $\theta=(k_1,k_2)$ reaches $\mathbf{\Delta}$ both indirectly through the states and directly through $\nu$, so hypothesis (i) holds by construction; the process noise makes escape a measure statement; and the "boundary" whose fate the theorem predicts appears twice, as the *actual* coupling $\varepsilon$ and as the *perceived* clarity $b$ — the gap between the two is where the cycle lives.

### 3.2 The four phases, as exhibited

The simulated system (Figure `xviii_A_phase_cycle`) traverses the cycle the outline predicted, with one correction noted below. **[R within the model]** for the exhibited dynamics; the institutional glosses are **[IP]**.

*Factorizable calm.* Boundary clarity high, coupling near its structural floor, gains near zero, local prediction good. Every internal indicator reports health, and the reports are, locally, true.

*Hidden coupling accumulation.* The interaction stock ramps: correlated states feed $c$, $c$ feeds $\varepsilon$, $\varepsilon$ correlates the states further. The compounding is invisible where the institutions are looking — residual magnitudes grow only with $\varepsilon^2$ while the feedback compounds — and $b$ stays high because prediction error stays small. The closed-form fast statistics (A.2.2) locate the cliff this ramp approaches: the interaction statistic diverges as $\varepsilon\to 1-(a-k)$, the margin the local gains leave open.

*Non-factorizable collapse.* The divergence is reached; states and coupling run away on the fast timescale until saturation bounds the excursion; residuals explode; each controller finds its local model invalid and its own actions returning as unattributable feedback; $b$ falls to its dissolved branch. The now-enormous learning signal drives the gains up fast — the panicked overcorrection is *gain adaptation*, not boundary redrawing.

*Miscalibrated recovery.* High gains kill the states; the residuals quiet; $b$'s clarity recovers because the *symptoms* have been suppressed — but the stock decays only slowly, so the system re-enters calm with real coupling still elevated and, as the leak bleeds the gains back down, the instability re-arms. The recovery is miscalibrated in exactly the sense the outline claimed, and the mechanism is now explicit: perceived clarity tracks residuals, residuals track what adaptation has absorbed, and adaptation has absorbed the evidence.

![Figure xviii_A_phase_cycle](/working-papers/images/boundary-instability/xviii_A_phase_cycle.png)
*(Figure: `xviii_A_phase_cycle.png` — one cycle: the stock ramp under a quiet b, the ε excursion past 1−a₀, the gain spike, collapse and staggered recovery.)*


### 3.3 Simulation results: the cycle exists, and it has a terminus (P1)

The registered prediction P1 — a sustained oscillation in a non-degenerate region of $(\beta,\eta)$ space — is **supported**. The exhibit run produces nine collapse–recovery events in 6000 steps; the regime map (Figure `xviii_A2_regime_map`, a $12\times12$ grid over $\beta\in[0.2,2.4]$, $\eta\in[0.005,0.5]$) classifies **36%** of the grid as cycling. **[R within the model.]**

The map also contains a finding the outline did not anticipate, and it belongs in the phase narrative rather than in a footnote. The cycling region is bounded on one side by a *quiescent* regime — reflexivity too weak to reach the fold — and on the other by a **locked non-factorizable regime**: at high reflexivity, the post-collapse coupling floor $\varepsilon_0+\alpha(1-b)$ is itself high enough to hold clarity at zero permanently. The boundary never recovers; the system settles into permanent NF residence. The cycle, in other words, is not the worst case. It is the *intermediate* case, available only to systems whose reflexivity is strong enough to break the boundary but weak enough that breaking it does not weld it shut. Institutionally **[IP]**: the oscillating pattern of crisis and reform presupposes a reflexivity regime; past it lies not faster oscillation but a permanently dissolved separation in which "jurisdiction" survives as a legal fiction over a fully coupled plant. Appendix A.2.3 gives the averaged planar reduction that explains the cycle's anatomy and states plainly why no analytic limit-cycle theorem is claimed for it.

![Figure xviii_A2_regime_map](/working-papers/images/boundary-instability/xviii_A2_regime_map.png)
*(Figure: `xviii_A2_regime_map.png` — quiescent, cycling, and locked non-factorizable regimes over (β, η).)*

---

