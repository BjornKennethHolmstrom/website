## Appendix E — Observer–Plant Identity and the Measurement–Disturbance Coupling

This appendix supplies the formal backing for Part I. It is the conceptual keystone, and it carries less computational weight than A, C, and D by design: the central claim — that for a self the act of observation is an act on the observed system — is structural, and the empirical and simulated consequences of that claim were established in the other appendices. E states the premise precisely, identifies exactly which control‑theoretic guarantee it voids, and demonstrates the two consequences that belong to it alone and are not assumed in stating it. The separation‑principle claim (E.1) is **[R]** as a statement of limit; the premise that it fails for a self is **[IP]**; the fixed‑point results (E.2–E.3) are computation‑verified consequences of the reflexive coupling, not re‑expressions of it.

### E.1 The separation principle and the premise that fails

The separation (certainty‑equivalence) theorem of linear‑quadratic‑Gaussian control states that the optimal controller decomposes into two independently designed parts: an optimal state estimator, and a control law that acts on the estimate exactly as it would on the true state. Estimation and control are separable — one may first determine the state, then decide what to do. The result rests on a structural premise that is rarely made explicit because it is almost always satisfied: the observation process does not enter the plant dynamics. Measuring the system does not change it. **[R]**

A self violates this premise at its root (Part I §1.3). The act of self‑observation — attending to a state, asking how one feels, narrating one's situation — enters the dynamics of the very state being observed; there is one system, and reading it is operating on it. The premise of the separation theorem is therefore false for a self, and its conclusion is not available: estimation and control are not separable, and "estimate then act" is not a sequence a self can perform, because the estimating is already an acting. **[IP]** This is the same kind of limit the boundary appendix recorded for the small‑gain theorem: a named control‑theoretic guarantee whose stated premise the self‑case does not meet.

A note on what this appendix does not do. One could model measurement back‑action directly — assume observing injects a state disturbance, then show a controller that ignores it does worse — but that demonstration would be circular, recovering only the premise it assumed. E instead demonstrates two consequences of the reflexive coupling that are *not* assumed in stating it: that self‑perception has many self‑confirming fixed points rather than one true value (E.2), and that observation can therefore relocate the state it observes (E.3). Both emerge from the coupling; neither is built into it.

### E.2 Self‑perception as fixed‑point selection, not truth discovery

Model a self‑state $x$ and a self‑belief $b$ on some dimension. A *passive* observer's belief tracks a fixed external truth: $x$ is unaffected by being observed, and $b$ converges to it. A *reflexive* observer's belief enters the dynamics — believing pulls the state toward the belief ($x \leftarrow x + \eta(b-x)$, observation as action) and the reading is drawn toward the belief ($\text{obs} = x + \text{bias}\,(b-x)$, confirmation). The simulation, from a common true initial state $x_0 = 0.5$:

- *Passive* ($\eta=0$, no bias): belief converges to $0.50$ from every initial belief $b_0 \in \{0.1,\dots,0.9\}$ — a single fixed point, the truth, discovered regardless of where belief started.
- *Reflexive* ($\eta=0.15$, $\text{bias}=0.5$): the final state and belief are selected by $b_0$ — $b_0=0.1 \to 0.245$, $b_0=0.5 \to 0.50$, $b_0=0.9 \to 0.755$ — a *continuum* of self‑confirming fixed points, each a blend of initial belief and prior state (here symmetric about the true $0.5$ because confirmation is partial), with the one reached selected by where belief began rather than by any prior truth.

This is the formal content of §1.3: for a self, "accurate self‑perception" is not the recovery of a pre‑existing fact but the selection of a fixed point of a reflexive process — a belief that is true of the state your believing it produces. The fixed points are neutrally stable along the manifold $b=x$, so a self‑concept, once settled, is self‑confirming and persists. **[IP]** premise; multiplicity is a verified, non‑assumed consequence. The danger edge is immediate: a false but self‑confirming self‑concept is a fixed point like any other, and the apparatus that might reveal its falseness is the apparatus maintaining it — the sealed self of Part VII, seen at its root.

### E.3 Self‑observation as intervention

The same coupling that produces the danger produces the lever of §1.4. Because observation moves the state, a deliberate change of belief can *relocate* the fixed point — something a passive observer cannot do, since for it there is only one truth to find. Starting locked at a low self‑concept ($b=x=0.2$) and applying a one‑time belief intervention to $0.65$ at mid‑run, the simulation gives: the reflexive system relocates and holds at a new self‑confirming state ($b=x=0.487$), while the passive system returns to the true $0.2$, the intervention leaving no trace. **[IP]/[H]**, verified.

Two honest qualifications. The relocation lands *partway* — at $0.487$, between the old state and the intended $0.65$ — because the new fixed point is set by the balance of action ($\eta$) and confirmation ($\text{bias}$), so a single re‑narration moves the self toward a chosen self‑concept but not all the way to it; sustained intervention is required to move further, which is why the practices that exploit this lever (contemplative attention, the disciplined re‑narration of therapy) are repeated rather than singular, and connects to the small, sustained commitments of Parts III and IV. And this is the mechanism, promised in §1.4, by which Self I's asymptote $G_{\text{self}}\to 0$ is approachable at all: in a system where observing is acting, attending to an excluded dimension is the same operation as beginning to admit it — the lever and the danger are one coupling seen from two sides.

### E.4 The common root

Observer–plant identity is a single premise, and the paper's principal departures from the parent series are its consequences, established where each could be tested:

- the floor under self‑observation correlation, because channels share one substrate (Appendix A.5);
- the unauditability of self‑legitimacy, because the deceiving instrument is the auditing instrument (Appendix C.6–C.7);
- the two‑sided bound on self‑revision, because the experimenter is the experiment (Appendix D.4–D.5);
- the absence of any firewall between primitives, making composite failure the default (Part VII).

To these E adds the two consequences proper to the premise itself: the multiplicity of self‑confirming fixed points (E.2) and the relocation lever (E.3). The distribution is deliberate and is the honest shape of the paper's evidence. E is the keystone — the single structural fact from which the divergences follow — but it is not where the weight rests. The weight rests on the appendices that could compute or simulate the consequences, and E's role is to show that those scattered results are not five separate findings but one premise seen five times: in a self, the controller and the plant cannot be pulled apart, and everything the paper claims that the parent series does not is what that single fact entails.

### E.5 Simulation

Repo file: `self_ii_appendix_e_observer_plant.py`.

```python
import numpy as np

def observe_self(b0, eta, bias, x0=0.5, lam=0.2, T=4000,
                 intervene_at=None, intervene_to=None):
    """Reflexive self-observation. eta: observation-as-action (0 = passive observer);
    bias: confirmation in the reading. Optional one-time belief intervention."""
    x, b = x0, b0
    for t in range(T):
        if intervene_at is not None and t == intervene_at:
            b = intervene_to
        x = x + eta*(b - x)                 # observing/believing moves the state (1.3/1.4)
        obs = x + bias*(b - x)              # reading drawn toward belief (confirmation)
        b = b + lam*(obs - b)
    return round(x, 3), round(b, 3)

if __name__ == "__main__":
    print("E.2 passive vs reflexive (common true x0=0.5):")
    for b0 in (0.1, 0.5, 0.9):
        print(f"   b0={b0}: passive {observe_self(b0,0.0,0.0)}  reflexive {observe_self(b0,0.15,0.5)}")
    print("E.3 belief intervention -> 0.65 at t=1500 (start locked at 0.2):")
    print("   reflexive:", observe_self(0.2,0.15,0.5,x0=0.2,intervene_at=1500,intervene_to=0.65))
    print("   passive  :", observe_self(0.2,0.0,0.0,x0=0.2,intervene_at=1500,intervene_to=0.65))
```
