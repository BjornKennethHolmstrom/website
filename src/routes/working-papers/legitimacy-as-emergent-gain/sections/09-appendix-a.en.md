# Appendix A — Formal Derivations

This appendix provides the mathematical derivations underlying the legitimacy-weighted state‑space model of Part II. It defines the coupled actuation–observation system, derives the Kalman filter degradation under falling observation legitimacy, formalises the legitimacy dynamics with hysteresis asymmetry and the split‑state transparency mechanism, and characterises the legitimacy trap as a sector‑bounded nonlinearity in the control loop.

## A.1 Legitimacy‑Weighted State‑Space Model

The baseline discrete‑time linear system is

\[
\begin{aligned}
\mathbf{x}(t+1) &= \mathbf{A}\,\mathbf{x}(t) + \mathbf{B}\,\mathbf{u}(t) + \mathbf{w}(t), \quad \mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{W}), \\[4pt]
\mathbf{y}(t)   &= \mathbf{C}\,\mathbf{x}(t) + \mathbf{v}(t), \quad \mathbf{v}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{V}_0),
\end{aligned}
\]

where \(\mathbf{x}(t) \in \mathbb{R}^n\) is the true state, \(\mathbf{u}(t) \in \mathbb{R}^m\) the control input, \(\mathbf{y}(t) \in \mathbb{R}^p\) the measurement, and \(\mathbf{A}, \mathbf{B}, \mathbf{C}\) are the nominal dynamics, actuation, and observation matrices. The noise covariances \(\mathbf{W}\) and \(\mathbf{V}_0\) represent irreducible process and measurement uncertainty under perfect legitimacy.

**Legitimacy‑dependent channels.**  
Legitimacy is modelled as two scalar parameters \(L_B(t), L_C(t) \in [0,1]\). They modify the actuation and observation channels:

\[
\mathbf{B}_{\text{eff}}(t) = L_B(t)\,\mathbf{B}, \qquad
\mathbf{V}(t) = \frac{\mathbf{V}_0}{L_C(t)}.
\]

Thus the effective system available to the controller is

\[
\begin{aligned}
\mathbf{x}(t+1) &= \mathbf{A}\,\mathbf{x}(t) + L_B(t)\,\mathbf{B}\,\mathbf{u}(t) + \mathbf{w}(t), \\[4pt]
\mathbf{y}(t)   &= \mathbf{C}\,\mathbf{x}(t) + \mathbf{v}(t), \quad \mathbf{v}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{V}_0 / L_C(t)).
\end{aligned}
\]

When \(L_B = L_C = 1\) the controller operates with its full designed authority and sensing precision. As either parameter falls, actuation is weakened and measurement noise is amplified. The two channels are coupled through the common dependence of \(L_B\) and \(L_C\) on the underlying trust state; in the scalar‑\(L\) approximation used in the main text we set \(L_B = L_C = L(t)\).

## A.2 Kalman Filter Degradation Under Failing Observation Legitimacy

A well‑designed controller does not use raw measurements directly but filters them through a state estimator. Under Gaussian noise and linear dynamics the optimal estimator is the Kalman filter. The filter propagates a state estimate \(\hat{\mathbf{x}}(t)\) and an error covariance \(\mathbf{P}(t)\) via two steps:

**Prediction.**
\[
\hat{\mathbf{x}}(t|t-1) = \mathbf{A}\,\hat{\mathbf{x}}(t-1) + L_B(t-1)\,\mathbf{B}\,\mathbf{u}(t-1),
\]
\[
\mathbf{P}(t|t-1) = \mathbf{A}\,\mathbf{P}(t-1)\,\mathbf{A}^{\!\top} + \mathbf{W}.
\]

**Update.** On receipt of \(\mathbf{y}(t)\),
\[
\mathbf{K}(t) = \mathbf{P}(t|t-1)\,\mathbf{C}^{\!\top}\bigl(\mathbf{C}\,\mathbf{P}(t|t-1)\,\mathbf{C}^{\!\top} + \mathbf{V}(t)\bigr)^{-1},
\]
\[
\hat{\mathbf{x}}(t) = \hat{\mathbf{x}}(t|t-1) + \mathbf{K}(t)\bigl(\mathbf{y}(t) - \mathbf{C}\,\hat{\mathbf{x}}(t|t-1)\bigr),
\]
\[
\mathbf{P}(t) = \bigl(\mathbf{I} - \mathbf{K}(t)\,\mathbf{C}\bigr)\,\mathbf{P}(t|t-1).
\]

The Kalman gain \(\mathbf{K}(t)\) determines how much weight the filter gives to the new measurement relative to the model‑based prediction. It depends inversely on the measurement noise covariance \(\mathbf{V}(t) = \mathbf{V}_0 / L_C(t)\).

**Limiting behaviour as \(L_C \to 0\).**  
As observation legitimacy decays, \(L_C(t) \to 0\) and \(\mathbf{V}(t) \to \infty\) (its eigenvalues diverge). The innovation covariance \(\mathbf{S}(t) = \mathbf{C}\mathbf{P}(t|t-1)\mathbf{C}^{\!\top} + \mathbf{V}(t)\) becomes dominated by \(\mathbf{V}(t)\), so

\[
\lim_{L_C \to 0} \mathbf{K}(t)
   = \lim_{\mathbf{V} \to \infty} \mathbf{P}(t|t-1)\,\mathbf{C}^{\!\top}\bigl(\mathbf{C}\mathbf{P}(t|t-1)\mathbf{C}^{\!\top} + \mathbf{V}\bigr)^{-1}
   = \mathbf{0}.
\]

The Kalman gain vanishes. The update step then reduces to

\[
\hat{\mathbf{x}}(t) = \hat{\mathbf{x}}(t|t-1) = \mathbf{A}\,\hat{\mathbf{x}}(t-1) + L_B(t-1)\,\mathbf{B}\,\mathbf{u}(t-1),
\]

which is the open‑loop propagation of the internal model. The filter ignores all incoming measurements. The controller’s estimate of the system state is driven entirely by its prior model \(\mathbf{A}\) and its own past commands, uncorrected by reality. This is the formal mechanism of *dashboard insulation*: a collapse of observation legitimacy forces the controller to operate blind, no matter how sophisticated its internal model may be.

## A.3 Legitimacy Dynamics with Hysteresis Asymmetry

Legitimacy evolves in response to the controller’s performance and transparency. The core update equation for the composite scalar \(L(t)\) is

\[
L(t+1) = \operatorname{clip}\!\Bigl(L(t) - \alpha(t)\,\|\mathbf{x}_{\text{rep}}(t)\|^2 + \beta\,T(t) - \gamma\,D(t) + \delta,\; 0,\; 1\Bigr),
\tag{A.1}
\]

where
- \(\mathbf{x}_{\text{rep}}(t)\) is the state as perceived by the governed population (see below),
- \(T(t) \in [0,1]\) is the controller’s transparency level,
- \(D(t) \in \{0,1\}\) indicates a deception revelation event,
- \(\delta > 0\) is a small exogenous drift capturing slow, secular accumulation of institutional trust,
- \(\beta > 0\) and \(\gamma > 0\) are sensitivity parameters.

**Hysteresis‑asymmetric delivery sensitivity.**  
The parameter \(\alpha(t)\) is not constant. It takes different values depending on whether performance is improving or worsening:

\[
\alpha(t) = 
\begin{cases}
\alpha_{\text{drop}}, & \text{if } \|\mathbf{x}_{\text{rep}}(t)\|^2 > \|\mathbf{x}_{\text{rep}}(t-1)\|^2, \\[6pt]
\alpha_{\text{recovery}}, & \text{if } \|\mathbf{x}_{\text{rep}}(t)\|^2 \le \|\mathbf{x}_{\text{rep}}(t-1)\|^2,
\end{cases}
\quad \alpha_{\text{drop}} \gg \alpha_{\text{recovery}} > 0.
\tag{A.2}
\]

This piecewise definition captures the empirical regularity that trust is lost more quickly than it is rebuilt. A worsening delivery gap (positive change in squared error) produces a strong negative update; an improving delivery gap produces only a weak positive update. The hysteresis loop in the main text follows directly from this asymmetry.

**Split‑state transparency and the betrayal mechanism.**  
When the controller suppresses information, the reported state seen by the public diverges from the true state. We model this by a suppression parameter \(\lambda \in [0,1]\) and a promised reference state \(\mathbf{x}_{\text{promised}}\) (typically the target \(\mathbf{0}\)):

\[
\mathbf{x}_{\text{rep}}(t) = \lambda\,\mathbf{x}(t) + (1-\lambda)\,\mathbf{x}_{\text{promised}}(t).
\tag{A.3}
\]

Full transparency corresponds to \(\lambda = 1\) (\(\mathbf{x}_{\text{rep}} = \mathbf{x}\)); complete fabrication to \(\lambda = 0\).  

The hidden discrepancy between true and reported states accumulates in a variable

\[
E_{\text{betrayal}}(t+1) = E_{\text{betrayal}}(t) + \|\mathbf{x}(t) - \mathbf{x}_{\text{rep}}(t)\|^2,
\tag{A.4}
\]

with \(E_{\text{betrayal}}(0) = 0\). The probability that the deception is revealed at time \(t\) is modelled as a hazard rate that increases with \(E_{\text{betrayal}}\):

\[
\Pr(\text{revelation at }t) = 1 - \exp\!\bigl(-h\,E_{\text{betrayal}}(t)\bigr),
\tag{A.5}
\]

where \(h > 0\) is the hazard coefficient. On revelation, \(D(t)\) is set to \(1\) and \(\lambda\) is forced to \(1\) thereafter (the controller can no longer hide). The betrayal penalty \(-\gamma D(t)\) then strikes the legitimacy update (A.1) with full force, producing the catastrophic collapse analysed in the text.

## A.4 The Legitimacy Trap as a Sector‑Bounded Nonlinearity

When the controller uses a linear state‑feedback law \(\mathbf{u}(t) = -\mathbf{K}\,\hat{\mathbf{x}}(t)\), the complete system—plant, estimator, controller, and legitimacy dynamics—constitutes a nonlinear feedback loop. The legitimacy state \(L(t)\) enters as a *state‑dependent gain* that multiplies \(\mathbf{B}\) and scales the measurement noise. Moreover, \(L(t)\) itself evolves according to (A.1), which is a memoryless nonlinear function of the recent state trajectory and the controller’s transparency. This structure is precisely that of a **Lur’e system**—a linear time‑invariant forward path with a nonlinear, sector‑bounded feedback element.

**Circle Criterion condition.**  
Consider the simplified case where the forward path (the linear dynamics with constant \(L = \bar{L}\)) is stable and the legitimacy update is approximated as a static nonlinearity \(\phi(\cdot)\) acting on the delivery gap \(e(t) = \|\mathbf{x}_{\text{rep}}(t)\|^2\). The update (A.1) can be written as

\[
\Delta L(t) = -\phi(e(t)) + \beta T(t) - \gamma D(t) + \delta,
\]

where \(\phi(\cdot)\) is piecewise linear with slopes determined by \(\alpha_{\text{drop}}\) and \(\alpha_{\text{recovery}}\). The nonlinearity \(\phi\) satisfies a sector condition: there exist constants \(k_1, k_2\) such that

\[
k_1 e \le \phi(e) \le k_2 e \quad \text{for all } e \ge 0.
\]

In our case, \(k_1 = \alpha_{\text{recovery}}\) and \(k_2 = \alpha_{\text{drop}}\) (suitably scaled). The Circle Criterion provides a sufficient condition for absolute stability of the closed loop: if the Nyquist plot of the linear part (the transfer function from the legitimacy gain perturbation to the delivery gap) does not intersect or encircle a specific disk determined by \(k_1, k_2\), then the system is stable for any time‑varying gain in that sector.

When the sector bounds are narrow—i.e. the asymmetry \(\alpha_{\text{drop}} / \alpha_{\text{recovery}}\) is small and \(\gamma\) is moderate—the stability disk is large, and the condition is easily satisfied: the system is **absolutely stable**, and the legitimacy dynamics cannot drive it to a low‑\(L\) attractor from any initial condition. This corresponds to a *built*‑legitimacy regime.

When the sector bounds are wide—large \(\alpha_{\text{drop}}\) relative to \(\alpha_{\text{recovery}}\), and large \(\gamma\)—the stability disk shrinks. The Circle Criterion may be violated, meaning there exist gain trajectories (legitimacy paths) that destabilise the loop. In that case the system is only **conditionally stable**: a sufficiently large perturbation that drives \(L\) below a critical value \(L_{\text{crit}}\) will cause the loop to diverge from the high‑\(L\) equilibrium and enter the legitimacy trap. This corresponds to a *borrowed*‑legitimacy regime, where the high sensitivity to delivery failures and the catastrophic betrayal penalty make the system vulnerable to a self‑reinforcing collapse.

The locus of \(L_{\text{crit}}\) is not a universal constant but depends on the specific parameters \(\alpha_{\text{drop}}, \alpha_{\text{recovery}}, \beta, \gamma, \delta\) and on the dynamic characteristics of the plant (the eigenvalues of \(\mathbf{A}\)). In the simulation of Part IV, \(L_{\text{crit}}\) is identified numerically as the separatrix of the basins of attraction.

## A.5 Built vs. Borrowed Legitimacy: Parameter Sets

The distinction between built and borrowed legitimacy is operationalised through distinct parameter regimes in the update equation (A.1) and the hazard model (A.5).

| Parameter | Built legitimacy | Borrowed legitimacy |
|-----------|------------------|----------------------|
| \(\alpha_{\text{drop}}\) | moderate (e.g. 0.12) | high (e.g. 0.25) |
| \(\alpha_{\text{recovery}}\) | moderate (e.g. 0.06) | low (e.g. 0.02) |
| \(\beta\) | moderate (e.g. 0.08) | low (e.g. 0.03) |
| \(\gamma\) | low (e.g. 0.5) | high (e.g. 3.0) |
| \(\delta\) | high (e.g. 0.005) | low (e.g. 0.001) |
| Hazard coefficient \(h\) | low (deception is harder to sustain) | high (deception is more likely to be revealed, but the regime is more likely to attempt it) |

**Structural interpretation.**  
Built legitimacy is characterised by a damped response to delivery gaps, substantial responsiveness to transparency, a small betrayal penalty (because trust is based on a long track record of honesty), and a slow exogenous decay rate. The sector bounds in the associated Lur’e system are narrow, satisfying the Circle Criterion: the high‑\(L\) equilibrium is absolutely stable.

Borrowed legitimacy is characterised by a hyper‑sensitive response to delivery failures, weak responsiveness to transparency, a catastrophic betrayal penalty (because trust is narrative‑based and fragile), and a rapid exogenous decay when the narrative weakens. The sector bounds are wide, violating the Circle Criterion: the system is only conditionally stable, and a sufficiently large shock can push it into the trap.

These parameter sets are not independent. A regime that relies on borrowed legitimacy will tend to suppress transparency (low \(\beta\)), which forces it to rely even more heavily on the narrative, making it exquisitely sensitive to any delivery failure that breaches that narrative (high \(\alpha_{\text{drop}}\), high \(\gamma\)). The parameter regime is self‑reinforcing until the collapse occurs—exactly the dynamic that the transparency trap formalises.
