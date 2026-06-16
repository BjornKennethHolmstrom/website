## Appendix B — The Actuation Chain and the Energy Law

This appendix supplies the formal backing for Part III. The minimum‑energy control result and the unreachability threshold are standard control theory applied to a delegation cascade and are rated **[R]**; the modeling of a self's intention‑to‑behavior path as such a cascade is **[IP]**, flagged where it enters. Scaling claims are computation‑verified; the script is in B.8.

### B.1 The actuation chain as a cascade

Model the path from intention to behavior as a depth‑$D$ cascade of stages — value/goal, plan, motivation, habit, environment, execution — in discrete time:

$$x^{(1)}_{k+1} = a\,x^{(1)}_k + b\,u_k, \qquad x^{(i)}_{k+1} = a\,x^{(i)}_k + c\,x^{(i-1)}_k \quad (i = 2,\dots,D).$$

The control $u$ (the directive) enters only at the first stage; the target is the deepest state $x^{(D)}$ (the behavior). In matrix form $\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}u_k$ with $\mathbf{A}$ lower‑bidiagonal (diagonal $a$, subdiagonal $c$) and $\mathbf{B}=b\,\mathbf{e}_1$. **[IP]** The three mechanisms of §3.1 are the three structural constants. *Latency* is the propagation delay: the directive's influence reaches stage $i$ no earlier than step $i$. *Projection* is the inter‑stage transmission $c$ (equivalently a per‑layer gain $\alpha_i \le 1$): each stage passes only the component of its input lying within its own repertoire. *Noise* is an additive per‑stage perturbation $w^{(i)}_k$, omitted from the reachability algebra below since it does not affect the reachable set, only the variance around it.

### B.2 Minimum‑energy control

For a target $\mathbf{x}_t$ reachable in horizon $T$, the minimum control energy $\sum_{k=0}^{T-1} u_k^2$ is

$$J_{\min}(T) = \mathbf{x}_t^\top \mathbf{W}_T^{-1}\,\mathbf{x}_t, \qquad \mathbf{W}_T = \sum_{k=0}^{T-1}\mathbf{A}^k\mathbf{B}\mathbf{B}^\top(\mathbf{A}^\top)^k,$$

with $\mathbf{W}_T$ the finite‑horizon controllability Gramian (pseudo‑inverse on the reachable subspace where $\mathbf{W}_T$ is singular). **[R]** This is the self‑scale instance of Paper XI's energy law: the effort to realize an intention is the inverse Gramian quadratic form, and the Gramian's conditioning in the target direction is set by the chain.

### B.3 The effort law

Reaching the deepest coordinate $\mathbf{e}_D$ requires the directive to traverse all $D$ stages, and the gain along the single length‑$D$ path is $\propto b\,c^{\,D-1}$, so the energy in the gain‑limited regime scales as

$$J_{\min} \;\sim\; \big(b\,c^{\,D-1}\big)^{-2} \;=\; b^{-2}\,c^{-2(D-1)},$$

geometric — that is, exponential — in depth. The simulation confirms superlinear‑to‑geometric growth and adds a refinement absent from the flat statement of Paper XI: **the rate depends on horizon slack.** At minimal horizon $T=D$ (the directive must act as fast as the chain permits), $J_{\min}$ grows steeply — for $c=0.7$, $J_{\min}=8.6,\,130,\,2256$ at $D=3,5,7$, a per‑depth ratio near $3.9$, steeper even than $c^{-2}$ because the diagonal decay $a$ also compounds with no time to spare. With generous horizon $T=2D$, growth is gentler but still superlinear (per‑depth ratio $\approx 1.3$ for $c=0.7$, climbing toward the geometric rate as $D$ increases). The honest summary: minimum effort grows *at least superlinearly* in delegation depth in general, and *geometrically* in the gain‑ or time‑limited regime, with time pressure converting depth from merely costly to prohibitive. "Superlinear" is the conservative floor consistent with the parent paper; the generic and worst cases are exponential. **[R]**, scaling computation‑verified.

The practical reading: the same intention is far cheaper to actuate given a long horizon than under time pressure, and the leverage is in the depth, not the effort — halving the chain length does more than any feasible increase in willpower against the exponential.

### B.4 Constitutional self‑uncontrollability

The threshold case is exact and is the appendix's sharpest result. The directive's influence reaches stage $D$ no earlier than step $D$; hence for any horizon $T < D$ the deepest coordinate lies *outside* the reachable subspace, $\mathbf{W}_T$ is singular in the $\mathbf{e}_D$ direction, and

$$T < D \;\Longrightarrow\; \mathbf{e}_D \notin \operatorname{range}(\mathbf{W}_T) \;\Longrightarrow\; J_{\min} = \infty.$$

The simulation returns exactly this: at $D=5$, the behavior is unreachable for $T=4$ and finite (if large) for $T\ge 5$; at $D=7$, unreachable for $T=6$. **[R]** Interpreting the horizon as the window before the intention decays or the opportunity passes, the result states that an intention whose chain is deeper than its available horizon cannot become behavior regardless of effort — the directive cannot propagate fast enough to arrive in time. This is *constitutional self‑uncontrollability*, and it is the exact dual of Self I's constitutional unobservability: there, states of the self beyond a critical chain depth cannot be perceived at any effort; here, states of the self beyond the reachable depth cannot be reached at any effort. The two results together bound self‑governance on both channels, as Papers III and XI bound governance on both of its channels. The two failure modes feel identical from inside — sincere, total, repeated failure — and the framework asserts the distinction is real (deep‑but‑reachable yields to the remedies of §3.6; beyond‑the‑set does not) without claiming to identify, from structure alone, which a given person faces.

### B.5 The Pressman–Wildavsky scalar shadow

The clearance‑point arithmetic is the scalar, probabilistic special case of the same multiplicative attenuation. If a standing intention requires success at each of $n$ independent links, each with per‑link probability $p$, the joint success probability is $\prod_i p_i = p^n$. Verified instances: $0.99^{70} = 0.495$ (seventy near‑certain clearances fall below even odds — the Oakland figure), $0.95^{10} = 0.599$ (the "executes on roughly sixty percent of days" figure of §3.2), and $0.90^{10} = 0.349$. **[R]** The intention does not fail because any link is weak; it fails because the product of many high probabilities is not high, which is the multiplicative attenuation of B.3 seen through a probabilistic rather than an energetic lens.

### B.6 The legitimacy coupling

Appendix C develops self‑legitimacy as a multiplicative gain $L_{\text{self}} \in [0,1]$ on actuation, $\mathbf{B}_{\text{eff}} = L_{\text{self}}\mathbf{B}$. Entering at each link, it composes with the transmission $\alpha$ so that the effective per‑link gain is $L\alpha$ and the path gain is $(L\alpha)^{D}$, giving energy $\sim (L\alpha)^{-2D}$. Because $L$ enters the *exponent*, low self‑trust does not add a fixed penalty — it multiplies the base of the exponential in depth. At $D=8$, $\alpha=0.8$: full trust ($L=1$) gives path gain $0.168$; $L=0.8$ gives $0.028$, an energy cost $35\times$ larger; $L=0.5$ gives $6.6\times10^{-4}$, an energy cost $65536\times$ larger. **[IP]** This is the §3.5 claim — depth and distrust multiply, not add — and the self‑scale form of the parent series' bidirectional node, where two compressions meet and compound. Its corollary drives the sequencing claim of Part VIII: short chains both actuate cheaply and, by delivering, raise $L$, which is what makes longer chains affordable.

### B.7 Delegation across time

The temporal reading of §3.4 requires no new formalism. Index the cascade stages by successive time‑slices of the self rather than by internal subsystems: a standing intention is a directive that each future self must re‑receive and re‑transmit, applying its own transmission $\alpha_i$ — its compliance, set by the self‑legitimacy it accords the inherited directive. The chain of future selves is the same cascade, with stage depth replaced by temporal depth and each stage's $\alpha_i$ governed by that future self's $L_{\text{self}}$. The two‑sided structure of B.4 and B.6 carries over unchanged. **[IP]**

### B.8 Simulation

Repo file: `self_ii_appendix_b_actuation_chain.py`.

```python
import numpy as np

def cascade(D, a=0.5, c=0.7, b=1.0):
    A = np.zeros((D, D)); np.fill_diagonal(A, a)
    for i in range(1, D): A[i, i-1] = c
    B = np.zeros((D, 1)); B[0, 0] = b
    return A, B

def min_energy(A, B, x_t, T):
    "Min control energy to reach x_t in T steps; inf if unreachable (B.2, B.4)."
    cols, M = [], B.copy()
    for _ in range(T): cols.append(M.copy()); M = A @ M
    R = np.hstack(cols)                       # columns A^k B
    z, *_ = np.linalg.lstsq(R, x_t, rcond=None)
    if np.linalg.norm(R @ z - x_t) > 1e-8: return np.inf   # outside reachable set
    W = R @ R.T
    return float(x_t @ np.linalg.pinv(W, rcond=1e-15) @ x_t)

if __name__ == "__main__":
    print("B.4 unreachability (T < D => inf):")
    for D in (3, 5, 7):
        A, B = cascade(D); eD = np.eye(D)[-1]
        for T in (D-1, D, D+2):
            J = min_energy(A, B, eD, T)
            print(f"   D={D} T={T}: {'UNREACHABLE' if np.isinf(J) else f'{J:.4g}'}")
    print("B.3 effort law (T=2D):")
    for c in (0.7, 0.5):
        Js = [min_energy(*cascade(D, c=c), np.eye(D)[-1], 2*D) for D in range(2, 9)]
        print(f"   c={c}: " + ", ".join(f"{j:.3g}" for j in Js))
    print("B.5 Pressman-Wildavsky p^n:",
          {f"{p}^{n}": round(p**n, 3) for p, n in [(0.99,70),(0.95,10),(0.9,10)]})
    print("B.6 legitimacy gain (Lα)^D, D=8, α=0.8:",
          {L: round((L*0.8)**8, 5) for L in (1.0, 0.8, 0.5)})
```
