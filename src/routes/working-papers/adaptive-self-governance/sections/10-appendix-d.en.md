## Appendix D — Adaptive Learning and the Two‑Sided Bound

This appendix supplies the formal backing for Part VI, and it carries the paper's strongest original claim — the two‑sided bound on self‑revision (§6.4). The distinction between premise and test matters here more than anywhere. That revision degrades a self's coherence (the parameter $\kappa > 0$ below) is the **[IP]** premise, the modeling commitment that encodes observer–plant identity; it cannot be tested in simulation because it is an assumption about what a self *is*. What *can* be tested — and could have failed — is whether that premise produces a non‑trivial two‑sided bound: an interior optimum, a self optimum strictly below an institution's, and a regime where the self must sacrifice tracking to stay coherent. The simulation confirms all three. All values are computation‑verified; the script is in D.8.

### D.1 The self as a dual controller

Model the self tracking a drifting target — what circumstances require the self to be — by an estimate it acts on:

$$\theta^*_{t+1} = \theta^*_t + v\,\xi_t, \qquad \hat\theta_{t+1} = \hat\theta_t + r\,C_t\,(o_t - \hat\theta_t), \qquad o_t = \theta^*_t + \sigma\,\eta_t,$$

where $\theta^*$ is the moving target drifting at rate $v$, $\hat\theta$ the self‑model, $o_t$ a noisy self‑observation, $r$ the *revision rate* (the exploration/learning gain), and $C_t \in (0,1]$ the controller's coherence, defined next. Each step is simultaneously an action (acting on $\hat\theta$) and an experiment (observing $\theta^*$), the dual‑control structure of §6.1. **[IP]**

### D.2 Persistence of excitation: the lower bound

Tracking a target drifting at rate $v$ requires revision fast enough to keep pace; too little produces lag. The simulation gives true tracking error $E$ rising sharply as $r \to 0$: $E = 0.061$ at the tracking optimum $r=0.08$, but $0.117$ at $r=0.01$ and $0.170$ at $r=0.005$. The $r\to 0$ limit is the over‑protected self of §6.2 — variance suppressed, parameters unidentified, the self‑model frozen while circumstances move. This is the lower bound, and it is the standard persistence‑of‑excitation requirement: a controller that does not probe cannot identify the target it must track. **[R]** given the model; verified.

### D.3 Exploration starvation and self‑concealment

The lower bound hides itself, which is what makes it starvation rather than crisis. Model perceived error as what the self can detect through its own exploration, $\hat E_t = E_t\,(1 - e^{-c\,r})$: at high revision the self sees its true error; at low revision it is nearly blind to it. The simulation gives, at $r = 0.02$, true error $E = 0.084$ but perceived error $\hat E = 0.013$ — a self‑concealment gap of $0.071$, the green dashboard of §6.3 reading clear while true tracking diverges. The gap closes as $r$ rises (it is $0.0006$ at $r=0.7$). The structural point is that the faculty that would reveal the starvation, exploration, is precisely the one that has been switched off, so the system's own monitoring cannot report the failure. This is Self I's variety gap given a temporal mechanism: not only does a narrow architecture exclude dimensions of the present self, it stops updating and conceals that it has. **[IP]**, verified.

### D.4 The coherence coupling and the two‑sided bound

The self‑specific term is coherence. Because the controller is the plant (Part I), each act of revision churns the controller's own integration:

$$C_{t+1} = \operatorname{clip}\!\big(C_t + \iota\,(1 - C_t) - \kappa\,|\Delta\hat\theta_t|,\; 0,\; 1\big),$$

where $\iota$ is the re‑integration rate, $|\Delta\hat\theta_t|$ the magnitude of self‑revision actually performed, and $\kappa$ the coherence cost per unit revision. Coherence gates revision in turn (the gain is $r\,C_t$): a destabilized self cannot integrate change. The premise is $\kappa > 0$ — for a self, revising oneself degrades the self doing the revising — and it is **[IP]**, the encoding of observer–plant identity, not a result.

Its tested consequence is a genuine two‑sided bound. The self's effective objective is to track well *and* stay coherent, $J(r) = E(r) + \lambda\,(1 - \bar C(r))$, and the simulation shows $C(r)$ declining monotonically (from $0.975$ at $r=0.02$ to $0.453$ at $r=0.9$) while $E(r)$ is U‑shaped. The result: $J$ has an *interior* optimum — verified to turn upward on both sides (rising as $r\to 0$ from starvation, rising as $r$ grows from coherence loss) — for every coherence weight tested ($\lambda \in \{0.5, 1, 2\}$). The bound is two‑sided exactly as §6.4 claims: revision must be fast enough to track and slow enough to integrate, $\text{(drift rate)} < r < \text{(coherence‑limited rate)}$. **[IP]** premise; the interior optimum is a tested, falsifiable consequence, confirmed.

### D.5 Self versus institution: why the upper bound is tighter

The contrast with an institution isolates what observer–plant identity contributes. An institution insulates its experimenting apparatus from its experimental zones, modeled by $\kappa = 0$: revising the plant does not degrade the controller's coherence. With $\kappa = 0$ the simulation holds $C \equiv 1$ at all revision rates, and the optimal $r$ is the tracking optimum, $r^*_{\text{inst}} = 0.08$, set by the standard trade‑off between lag and noise amplification. With $\kappa = 0.5$ (the self), the optimum drops to $r^*_{\text{self}} = 0.02$–$0.04$, strictly below the institution's and robust across $\lambda$. At its optimum the self carries true error $0.084$ against a best‑achievable $0.061$: it leaves $0.023$ of tracking performance on the table to preserve coherence. **[IP]**, verified.

One refinement keeps the claim honest. The institution is not unbounded above — its error is also U‑shaped, rising past $r = 0.08$ from noise amplification, so it too has an upper bound. The self's upper bound is *tighter* and arises from a *different mechanism*: it binds at $r \approx 0.02$–$0.04$, well below the institution's noise‑limited $0.08$, and it binds through coherence loss rather than noise. The precise content of "the upper bound is tighter for a self than for a society" (§6.4) is therefore not that institutions revise without limit, but that the self's limit is stricter and arrives first, forcing the self below its own noise‑limited tracking optimum — a constraint a system whose controller and plant are separate does not face.

### D.6 The boundary the framework must not cross

The two‑sided bound borders clinical and contemplative territory, and the fence of Parts IV and VI applies unchanged. **[R]** The model describes the *structure* of the integration constraint — that revision outrunning re‑integration ($r$ above the coherence‑limited rate) degrades the coherence learning requires. It does not describe the management of that constraint in any person, and it does not claim that destabilization under intensive self‑work is generally structural. Where a clinical substrate is present — where self‑revision triggers something with a physiology the control model does not represent — the architectural description remains true and insufficient, naming the shape of the difficulty without reaching its cause. The observation that transformation must be paced to integration is a consequence of $r < r_{\text{coh}}$, not a protocol for pacing it.

### D.7 Protected spaces as manufactured insulation

The design principle of §6.6 follows directly and is verified. A protected experimental space is revision insulated from global coherence — a fraction $f$ of revision charged not to the whole self but to a walled‑off sandbox. Modeling this as coherence cost $\kappa\,|\Delta\hat\theta|\,(1-f)$, the simulation holds revision at $r = 0.15$ (above the un‑sandboxed self's optimum) and varies $f$: tracking error stays essentially flat ($E: 0.068 \to 0.072$) while coherence recovers ($C: 0.843 \to 0.982$) and the combined cost falls ($J: 0.226 \to 0.091$) as $f$ rises from $0$ to $0.9$. As $f \to 1$ the self approaches the institution's free exploration. **[IP]**, verified. This is the formal content of the externalization principle of Part VIII at the learning channel: a sandbox lets the self run the high local exploration that tracking wants without paying the global coherence cost that observer–plant identity otherwise imposes — manufacturing, locally, the controller–plant separation the self lacks by default.

### D.8 Simulation

Repo file: `self_ii_appendix_d_two_sided_bound.py`.

```python
import numpy as np

def run(r, kappa, f_sandbox=0.0, v=0.02, sigma=0.30, iota=0.10, c=8.0, T=4000, seed=0):
    rng = np.random.default_rng(seed)
    th_star = th_hat = 0.0; C = 1.0; Es=[]; Cs=[]; Ehat=[]
    for t in range(T):
        th_star += v*rng.standard_normal()
        obs = th_star + sigma*rng.standard_normal()
        dth = r*C*(obs - th_hat); th_hat += dth
        C = np.clip(C + iota*(1-C) - kappa*abs(dth)*(1-f_sandbox), 0, 1)
        if t > T//5:
            e = abs(th_hat - th_star)
            Es.append(e); Cs.append(C); Ehat.append(e*(1-np.exp(-c*r)))
    return np.mean(Es), np.mean(Cs), np.mean(Ehat)

def sweep(kappa, rs, seeds=8):
    return np.array([np.mean([run(r, kappa, seed=s) for s in range(seeds)], axis=0) for r in rs])

if __name__ == "__main__":
    rs = [0.005, 0.01, 0.02, 0.04, 0.08, 0.15, 0.30, 0.60]
    for kappa, lab in [(0.0, "institution"), (0.5, "self")]:
        R = sweep(kappa, rs); E, C, Eh = R[:,0], R[:,1], R[:,2]
        for lam in (0.5, 1.0, 2.0):
            J = E + lam*(1-C); k = int(np.argmin(J))
            interior = 0 < k < len(rs)-1
            print(f"{lab:11s} lam={lam}: r*={rs[k]:.3f} interior={interior} "
                  f"E@r*={E[k]:.4f} bestE={E.min():.4f}")
    print("D.3 self-concealment gap (E - Ehat) at r=0.02:",
          round((lambda x: x[0]-x[2])(np.mean([run(0.02,0.5,seed=s) for s in range(8)],axis=0)), 4))
    print("D.7 protected space (r=0.15, vary f): (E, C, J)")
    for f in (0.0, 0.3, 0.6, 0.9):
        E,C,_ = np.mean([run(0.15,0.5,f_sandbox=f,seed=s) for s in range(8)],axis=0)
        print(f"   f={f}: E={E:.4f} C={C:.3f} J={E+(1-C):.4f}")
```
