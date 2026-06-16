## Appendix C — Self‑Legitimacy Dynamics

This appendix supplies the formal backing for Part IV. The coupling form is the self‑scale instance of Paper XIII's LPV model and is **[IP]** as a representation; the dynamical consequences derived from it (the existence bifurcation, hysteresis, the transparency trap) follow from the model and are computation‑verified. The betrayal asymmetry $\gamma \gg \alpha$ is **[H]**. The clinical fence (C.7) is **[R]** as a statement of limit, and the bifurcation of C.3 makes it sharper rather than softer. The script is in C.9.

### C.1 The coupling

Self‑legitimacy is a scalar coupling state $L \in [0,1]$ that modulates both channels of self‑governance at once, following Paper XIII:

$$\mathbf{B}_{\text{eff}} = L\,\mathbf{B}, \qquad \mathbf{V} = \mathbf{V}_0 / L.$$

Low $L$ attenuates self‑actuation (a directive is discounted in advance to the degree the person does not expect themselves to honor it — the gain entering each link of Appendix B) and inflates self‑observation noise (self‑reports are trusted less, so introspective variance rises). One variable, two channels, moving together. **[IP]**

### C.2 The dynamics

Let the per‑period outcome be delivery or betrayal of a self‑commitment, and let $L$ update asymmetrically:

$$L_{t+1} = \begin{cases} L_t + \alpha\,(1 - L_t) & \text{on delivery (build, gain } \alpha) \\[2pt] L_t - \gamma\,L_t & \text{on betrayal (erode, gain } \gamma) \end{cases}, \qquad \gamma \gg \alpha.$$

The factors $(1-L)$ and $L$ give saturation in $[0,1]$. Delivery is endogenous: its probability rises as legitimacy crosses the level $L_{\text{half}}$ at which self‑actuation becomes reliable, $p_{\text{deliver}}(L) = \sigma\!\big(k(L - L_{\text{half}})\big)$, where lower $L_{\text{half}}$ encodes higher *competence* — the capacity to deliver even at modest self‑trust. The expected drift is

$$\mathbb{E}[\Delta L \mid L] = p_{\text{deliver}}(L)\,\alpha(1-L) \;-\; \big(1 - p_{\text{deliver}}(L)\big)\,\gamma L. \tag{[IP]}$$

### C.3 The existence bifurcation

The simulation surfaced a result stronger than Part IV's prose, and in keeping with the series' practice it is reported as the model gives it. **Whether a healthy self‑trust equilibrium exists at all depends jointly on competence and the betrayal asymmetry.** Setting the fixed points of $\mathbb{E}[\Delta L\mid L]=0$:

- *High competence* ($L_{\text{half}}=0.3$): a stable high‑trust equilibrium persists across the tested asymmetries (healthy fixed point $\approx 0.97$–$0.99$ at $\gamma/\alpha$ up to $6$), but the separatrix — the unstable boundary of the collapse basin — *rises* with the asymmetry ($L^\ast = 0.25,\,0.45,\,0.55$ at $\gamma/\alpha = 2,\,4,\,6$). Higher betrayal‑sensitivity does not destroy the healthy state but enlarges the basin from which one falls into collapse.
- *Mid competence* ($L_{\text{half}}=0.5$): the healthy equilibrium *exists* at $\gamma/\alpha \le 2$ and is *annihilated* by $\gamma/\alpha = 4$. Past the bifurcation the only attractor is $L \to 0$: a **collapse‑only regime** in which no level of self‑trust is sustainable and the spiral is not a risk but the sole outcome.

This refines Part IV materially. The self‑betrayal spiral is not merely a basin one can fall into; for sufficiently low competence relative to the betrayal asymmetry, it is the only stable behavior the system admits, and starting with high trust does not help — there is no healthy state to stay in. **[R]** given the model; computation‑verified.

### C.4 Hysteresis

Because erosion uses gain $\gamma$ and building uses gain $\alpha$, the time to recover a given level of trust exceeds the time to lose it by a factor set by the asymmetry. Best‑case step counts to traverse $L: 0.3 \leftrightarrow 0.7$: climbing $17$ steps, falling $3$ steps at $\gamma/\alpha = 6$ (ratio $5.7$); falling $6$ steps at $\gamma/\alpha = 3$ (ratio $2.8$). The recovery‑to‑decline time ratio tracks $\gamma/\alpha$. **[R]** given the model. The practical corollary, used in C.8: an impatient recovery — expecting trust back on the timescale it was lost — sets a commitment that the slow build cannot meet, and the unmet expectation registers as a further betrayal.

### C.5 Built versus borrowed

The distinction reduces to competence at equal observable trust. Two agents both at $L_0 = 0.90$ receive an identical betrayal shock ($\Delta L = 0.25$). The *built* agent (competent, $L_{\text{half}}=0.40$, separatrix $0.575$) lands post‑shock at $0.70$, above its separatrix, and recovers to $0.905$. The *borrowed* agent (low competence, $L_{\text{half}}=0.80$, in the collapse‑only regime of C.3) craters to $0$ on the same shock. **[IP]**, verified. Built and borrowed self‑trust can be numerically identical and behave oppositely under test, because what differs is not the trust level but the competence that determines whether a recoverable equilibrium exists beneath it. Borrowed trust is high trust sitting in, or thinly above, a collapse basin it did not earn the margin to escape.

### C.6 The transparency trap

Introduce perceived legitimacy $P$ alongside true $L$, and let commitment ambition scale with $P$ while delivery depends on $L$ — the person acts on what they believe about themselves, and the world responds to what is so. The honest agent keeps $P = L$. The self‑deceiver suppresses betrayals in perception ($P$ unchanged on betrayal) while $L$ erodes as before. The simulation: over $140$ periods the honest agent holds at true $L = 0.70$ with $27$ betrayals, perception tracking truth. The self‑deceiver, perceiving high trust, keeps over‑committing relative to true capacity, incurs $112$ betrayals, and its true legitimacy collapses to $L = 0.01$ while perceived $P$ remains $0.68$; the hidden discrepancy peaks at $0.78$. A forced reckoning ($P \!\to\! L$) corrects perception once, but the continuing deception reopens the gap. **[IP]**, verified. The trap maintains apparent self‑trust while destroying the real thing, and it does so by the precise mechanism of §4.3: editing the observation channel inflates perceived trust, inflated perception drives over‑commitment, over‑commitment multiplies betrayal, and betrayal craters the true state the perception was hiding.

### C.7 The reflexive sharpening and the clinical fence

The transparency trap is worse for a self than for an institution for the reason of Part I: the agent decides on $P$ and has no instrument independent of the apparatus generating $P$. A government can audit its legitimacy with sensors external to the governing body; a single mind's self‑deceiving instrument is also the instrument that would detect the deception, and a corrupted channel cannot reliably audit its own corruption (C.6 formalizes this by making decisions depend only on $P$, with no read of $L$). The only approximation to an independent sensor is external — the friend, the therapist, the re‑read journal of Appendix A's decorrelated channels. **[IP]**

The fence, which the bifurcation of C.3 makes more important, not less. **[R]** The model produces a collapse‑only regime — a structural attractor in which self‑trust cannot be sustained. This does *not* license reading any individual's collapse of self‑trust as structurally caused. The same attractor shape can be produced by substrates the control model does not represent — the neurochemistry of depression, the physiology of trauma, grief, illness — and the model cannot distinguish a structurally generated collapse from a clinically generated one, because their signatures coincide. The framework describes the shape of the trap; it does not diagnose its cause, it is not a clinician, and the recovery conditions of C.8 are conditions that may help a structurally generated decline, not a treatment for a pathologically generated one.

### C.8 Recovery and the perfectionism inversion

The conditions for rebuilding $L$ follow from the dynamics. *Delivery–reality matching* — commitments small enough that $p_{\text{deliver}}$ is near one — rebuilds $L$ on the $\alpha$ side and keeps the trajectory clear of the separatrix. *Transparency to oneself* prevents the C.6 gap from opening. *Credible commitment devices* hold action while $L$ is too low to carry it. *Hysteresis‑awareness* (C.4) is itself a condition: recovery is slow by construction, and the demand for speed is self‑defeating. The inversion of §4.6 falls out of the model directly. The perfectionist sets large commitments, which in the C.6 mechanism means high ambition $s$ relative to true capacity — maximal over‑commitment, maximal betrayal rate, the fast track into the collapse basin. Aiming high is not the opposite of the self‑betrayal spiral; it is the spiral run at maximum gain. Built trust is recovered by commitments small enough to keep, kept long enough to count — which is also why Part VIII enters a coupled failure here, at the gain on every other primitive.

### C.9 Simulation

Repo file: `self_ii_appendix_c_self_legitimacy.py`.

```python
import numpy as np
def sigma(z): return 1/(1+np.exp(-z))
def p_deliver(L, k=8.0, L_half=0.5): return sigma(k*(L-L_half))
def EdL(L, alpha, gamma, **kw):
    p = p_deliver(L, **kw); return p*alpha*(1-L) - (1-p)*gamma*L

def fixed_points(alpha, gamma, **kw):           # C.3 bifurcation
    Ls = np.linspace(1e-4, 1-1e-4, 400001); f = EdL(Ls, alpha, gamma, **kw)
    out = []
    for i in np.where(np.diff(np.sign(f)) != 0)[0]:
        r = Ls[i] - f[i]*(Ls[i+1]-Ls[i])/(f[i+1]-f[i])
        dr = (EdL(r+1e-4, alpha, gamma, **kw) - EdL(r-1e-4, alpha, gamma, **kw))/2e-4
        out.append((round(r, 3), 'stable' if dr < 0 else 'unstable'))
    return out

def trap(deceive, alpha=0.05, gamma=0.15, k=8.0, margin=0.15, T=140, reckon=90, seed=3):
    r = np.random.default_rng(seed); L = P = 0.70; gap = 0.0; betr = 0
    for t in range(T):
        s = max(P - margin, 0.0)                 # commit on perceived trust
        if r.random() < sigma(k*(L - s)):        # deliver depends on true trust
            L += alpha*(1-L); P += alpha*(1-P)
        else:
            betr += 1; L = max(L-gamma*L, 1e-4)
            P = P if deceive else max(P-gamma*P, 1e-4)
        gap = max(gap, P-L)
        if t == reckon and deceive: P = L
    return round(L,3), round(P,3), round(gap,3), betr

if __name__ == "__main__":
    print("C.3 bifurcation (mid competence L_half=0.5):")
    for g in (0.10, 0.20):
        healthy = [r for r,s in fixed_points(0.05, g, L_half=0.5) if s=='stable' and r>0.4]
        print(f"   gamma/alpha={g/0.05:.0f}: {'healthy FP '+str(healthy) if healthy else 'COLLAPSE-ONLY'}")
    print("C.6 transparency trap (true L, perceived P, max gap, betrayals):")
    print("   honest        :", trap(False))
    print("   self-deceiving:", trap(True))
```
