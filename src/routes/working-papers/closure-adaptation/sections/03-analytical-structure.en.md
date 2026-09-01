## 3. Analytical Structure: Fast–Slow Decomposition and Attractor Regimes

The model defined in Section 2 is five‑dimensional and nonlinear, but its behaviour can be understood through a standard fast–slow decomposition. The permeability variable \(P\) evolves on a much slower timescale than \(U,B,T,E\) because \(\rho_P = 0.02\) while the other rates lie between \(0.05\) and \(0.55\). We therefore treat \(P\) as a slowly varying parameter and analyse the four‑dimensional fast subsystem \((U,B,T,E)\) for fixed \(P\). The full system’s trajectories then move along the equilibrium branches of this fast subsystem as \(P\) changes.

This decomposition is not an approximation imposed for convenience; it reflects the substantive assumption that **boundary quality changes more slowly than boundary strength, trust, or exploration**. Constitutions, legal cultures, media environments, and institutional transparency norms are slower variables than the immediate policy responses they constrain.

### 3.1 Fixed points of the fast subsystem

For fixed \(P\), the fast subsystem is:

\[
\begin{aligned}
\dot U &= n(1-U) - \alpha E (1-\beta Q) U, \\
\dot B &= \rho_B \, \sigma\!\big(k_B(F-\theta)\big) - d_B B, \\
\dot T &= \rho_T E (1-\beta_T Q) - d_T T - \gamma Q T, \\
\dot E &= \rho_E \, \sigma\!\Big( k_E \big( \frac{\alpha U}{1+\eta Q} - c_E \big) \Big) - d_E E,
\end{aligned}
\]

with \(Q = (1-P)B\).

Because the sigmoids are steep (\(k_B, k_E \gg 1\)), the fast subsystem behaves approximately as a piecewise linear system with switching thresholds. Two stable fixed points emerge, corresponding to the open and closed regimes observed in simulation.

#### 3.1.1 Closed attractor

Suppose \(F > \theta\), so boundary investment is active, and suppose exploration is suppressed: \(\alpha U/(1+\eta Q) < c_E\). Then:

- \(\dot B = \rho_B - d_B B\), so \(B \to \min(\rho_B/d_B, 1)\). With the default parameters, \(\rho_B/d_B \approx 1.316\), so \(B=1\) at saturation.
- \(\dot E = -d_E E\), so \(E \to 0\).
- With \(E=0\), \(\dot T = -d_T T - \gamma Q T\), so \(T \to 0\).
- With \(E=0\), \(\dot U = n(1-U)\), so \(U \to 1\).

Thus the closed fixed point is approximately

\[
(B,T,E,U) \approx (1,0,0,1).
\]

The felt uncertainty at this fixed point is

\[
F_{\text{closed}} = \frac{s}{(1+\mu)}.
\]

For the default parameters and \(s=1.5\), \(F_{\text{closed}} \approx 0.528\), well above \(\theta=0.196\), so the boundary drive remains on. The exploration condition is also satisfied because \(\alpha U/(1+\eta Q) = \alpha/(1+\eta(1-P))\), which is less than \(c_E\) for a wide range of \(P\). Thus the closed fixed point is self‑consistent.

Linearising around this fixed point shows that the eigenvalues are negative, dominated by the decay rates \(d_B,d_T,d_E\) and the negative feedback in \(\dot U\). The closed attractor is locally stable for all \(P\in[0,1]\).

#### 3.1.2 Open attractor

The open attractor is more delicate. It corresponds to a state where boundary investment is weak because felt uncertainty is below threshold, and exploration is partially active, keeping actual uncertainty moderate.

In the limiting case where \(B\) is small and \(P\) is sufficiently high, \(Q \approx 0\). Then the equations reduce approximately to:

\[
\begin{aligned}
\dot U &= n(1-U) - \alpha E U, \\
\dot T &= \rho_T E - d_T T, \\
\dot E &= \rho_E \, \sigma\!\big(k_E(\alpha U - c_E)\big) - d_E E.
\end{aligned}
\]

If exploration is fully active (\(E\) near its upper bound), the equilibrium values satisfy

\[
U \approx \frac{n}{n+\alpha E}, \quad T \approx \frac{\rho_T E}{d_T}.
\]

With the default parameters, the open state observed numerically has \(B \approx 0.147\), \(E \approx 0.179\), \(T \approx 1.0\), \(U \approx 0.34\), and \(P \approx 0.70\). The small but nonzero \(B\) is maintained by the boundary equation at a value where felt uncertainty is close to threshold \(\theta\). The open fixed point is therefore a self‑regulating state: trust and exploration keep felt uncertainty low enough that boundary strength remains small, but not exactly zero.

The stability of the open fixed point depends on the trust–exploration loop. If \(P\) is too low, \(Q=(1-P)B\) becomes large even for small \(B\), suppressing exploration and trust. This can destabilise the open state and push the system toward the closed attractor. The condition for stability is approximately that the effective boundary suppression \(Q\) remains below a critical value \(Q^*\), where

\[
Q^* \approx \frac{\rho_T E}{\gamma T + d_T T} \quad \text{(for trust maintenance)}
\]

and similarly for exploration. In practice, the open attractor loses stability when \(P\) falls below roughly \(0.3\)–\(0.4\), depending on \(s\) and \(\theta\). This is consistent with the intervention threshold found in Section 7.

### 3.2 Bistability region

The coexistence of the open and closed fixed points for the same \(P\) and \(s\) defines the bistable region. It occurs when:

1. The closed fixed point exists and is stable: \(s/(1+\mu) > \theta\).
2. The open fixed point exists and is stable: the trust–exploration loop is strong enough to keep felt uncertainty below threshold despite nonzero \(B\).

For fixed \(s\) and \(\theta\), the fast subsystem is bistable over an interval of \(P\). In the default parameter regime at \(s=1.5\), numerical continuation shows that both attractors exist for \(P\) approximately between \(0.1\) and \(0.9\). Outside this interval, only one attractor remains.

The separatrix between the basins of attraction is not a simple line but a curved surface in the four‑dimensional fast state space. Its location depends on the history of the system, which is the origin of hysteresis in the full model.

### 3.3 Slow permeability dynamics and hysteresis

The slow equation for \(P\),

\[
\dot P = \rho_P \left( 1 - \sigma\!\big(k_P(F-\theta_P)\big) - P \right),
\]

creates a positive feedback that reinforces whichever attractor the system currently occupies.

In the open attractor, \(F\) is relatively low because \(T\) is high and \(B\) is small. With default parameters, \(F_{\text{open}} \approx 0.077\), well below \(\theta_P=0.15\). Therefore the target value \(1-\sigma(k_P(F-\theta_P))\) is near \(1\), and \(P\) tends to increase toward \(1\).

In the closed attractor, \(F_{\text{closed}}\) is high (e.g., \(0.528\) at \(s=1.5\)). The target value is near \(0\), so \(P\) tends to decay toward \(0\).

Thus the slow dynamics drive the system away from the separatrix: open states become more open, closed states become more closed. This is the mechanism of **hysteresis**.

When the system is on the open branch and external conditions worsen (e.g., \(s\) increases), the open fixed point moves toward the separatrix. If the system crosses it, it falls to the closed branch. Once on the closed branch, \(P\) begins to decay, further entrenching closure. To return to the open branch, external conditions must improve enough that the closed fixed point loses stability—but because \(P\) has decayed, this requires much safer conditions than the original collapse point. This asymmetry is the hysteresis loop observed in the one‑dimensional sweeps.

### 3.4 Summary of analytical structure

The model possesses a clear fast–slow structure:

- The fast subsystem has two stable attractors: an open, high‑trust, high‑exploration state and a closed, zero‑trust, zero‑exploration state.
- Bistability occurs over a substantial range of \(P\) and \(s\), producing path dependence.
- The slow permeability variable amplifies whichever attractor the system occupies, creating hysteresis and institutional scarring.

This structure is not assumed; it emerges from the interaction of boundary, trust, exploration, and permeability dynamics. Section 4 reports systematic simulations that quantify the extent of the bistable region across the parameter space, and Section 5 examines how noise interacts with this structure.
