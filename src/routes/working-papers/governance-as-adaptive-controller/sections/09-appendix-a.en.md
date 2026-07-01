# Appendix A — Formal Derivations

This appendix provides the mathematical derivations underlying the dual control framework of Part II. It formalises the governance dual control problem as a stochastic dynamic programming problem, derives the persistent excitation condition for identifiability of governance parameters, and analyses the forgetting dynamics that govern institutional memory decay.

## A.1 Dual Control Formulation for Governance Systems

Consider a governance system whose true dynamics are given by

\[
\mathbf{x}(t+1) = \mathbf{f}\bigl(\mathbf{x}(t), \mathbf{u}(t), \boldsymbol{\theta}\bigr) + \mathbf{w}(t), \qquad \mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{W}),
\]

where \(\mathbf{x}(t) \in \mathbb{R}^n\) is the state vector, \(\mathbf{u}(t) \in \mathbb{R}^m\) is the control input, \(\boldsymbol{\theta} \in \mathbb{R}^p\) is a vector of unknown parameters, and \(\mathbf{w}(t)\) is process noise. The controller observes

\[
\mathbf{y}(t) = \mathbf{C}\,\mathbf{x}(t) + \mathbf{v}(t), \qquad \mathbf{v}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{V}),
\]

and maintains a belief distribution \(b_t = p(\boldsymbol{\theta} \mid \mathcal{I}_t)\), where \(\mathcal{I}_t = \{\mathbf{y}(0), \mathbf{u}(0), \dots, \mathbf{y}(t-1), \mathbf{u}(t-1), \mathbf{y}(t)\}\) is the information available at time \(t\). The belief is updated via Bayes' rule:

\[
p(\boldsymbol{\theta} \mid \mathcal{I}_{t+1}) \propto p(\boldsymbol{\theta} \mid \mathcal{I}_t)\, p\bigl(\mathbf{y}(t+1) \mid \mathbf{x}(t), \mathbf{u}(t), \boldsymbol{\theta}\bigr).
\]

The controller's objective is to minimise the expected cumulative discounted cost over a horizon \(T\):

\[
J = \mathbb{E}\!\left[ \sum_{t=0}^{T} \gamma^t\, c\bigl(\mathbf{x}(t), \mathbf{u}(t)\bigr) \right],
\]

where \(c(\cdot)\) penalises deviations from the target state and excessive control effort, and \(\gamma \in (0,1]\) is the discount factor.

The optimal policy for this problem satisfies the Bellman equation:

\[
V_t(b) = \min_{\mathbf{u}} \mathbb{E}_{\mathbf{x},\boldsymbol{\theta}}\!\Bigl[ c(\mathbf{x}, \mathbf{u}) + \gamma\, V_{t+1}(b') \;\Big|\; b, \mathbf{u} \Bigr],
\tag{A.1}
\]

where \(b'\) is the posterior belief after observing the outcome of action \(\mathbf{u}\). The expectation is taken over the current state \(\mathbf{x}\), the unknown parameters \(\boldsymbol{\theta}\), and the process and measurement noise.

The critical feature of (A.1) is that the choice of \(\mathbf{u}\) affects not only the immediate cost but also the *future belief state* \(b'\). This is the dual effect: the control action influences both the state evolution (regulation) and the informativeness of future observations (identification). The optimal policy therefore includes an explicit exploration incentive.

**Certainty‑equivalence and the exploration bonus.**  
When the system is linear and the cost is quadratic, and when the parameter uncertainty is small, the optimal dual control can be approximated by decomposing the value function. Let \(\hat{\boldsymbol{\theta}} = \mathbb{E}[\boldsymbol{\theta} \mid b]\) be the current parameter estimate, and let \(\mathbf{P} = \text{Cov}[\boldsymbol{\theta} \mid b]\) be the estimation error covariance. The value function can be expanded around the certainty‑equivalent value:

\[
V(b) \approx V^{\text{CE}}(\hat{\boldsymbol{\theta}}) + \text{tr}\bigl(\mathbf{P}\,\mathbf{H}(\hat{\boldsymbol{\theta}})\bigr),
\]

where \(V^{\text{CE}}\) is the value of the optimal policy when \(\hat{\boldsymbol{\theta}}\) is assumed to be the truth, and \(\mathbf{H}\) is a positive semi‑definite matrix that quantifies the sensitivity of future performance to parameter uncertainty. The second term is the *cost of uncertainty*: the expected performance degradation due to not knowing the true parameters.

The optimal action can then be written as

\[
\mathbf{u}^*(t) = \mathbf{u}_{\text{CE}}(t) + \mathbf{u}_{\text{explore}}(t),
\]

where \(\mathbf{u}_{\text{CE}}(t)\) minimises the certainty‑equivalent cost and \(\mathbf{u}_{\text{explore}}(t)\) is a perturbation chosen to reduce \(\mathbf{P}\) in the directions that matter most for future performance—i.e., the directions in which \(\mathbf{H}\) is largest. The magnitude of \(\mathbf{u}_{\text{explore}}\) scales with the current uncertainty \(\mathbf{P}\) and with the sensitivity \(\mathbf{H}\). When uncertainty is high, exploration is more aggressive; as the parameters are learned, exploration decays and the controller converges to certainty‑equivalence.

In the simulation of Part IV, this structure is implemented with a constant exploration variance \(\sigma^2_\eta\) for tractability. The constant‑variance approximation captures the essential trade‑off—sustained exploration is necessary when the environment continues to change—while abstracting from the optimal scheduling of the exploration intensity.

## A.2 Persistent Excitation and Identifiability

For the linear special case \(\mathbf{x}(t+1) = \mathbf{A}\,\mathbf{x}(t) + \mathbf{B}\,\mathbf{u}(t) + \mathbf{w}(t)\) with unknown matrices \(\mathbf{A}, \mathbf{B}\), the parameters can be estimated from input‑output data only if the input signal satisfies a *persistent excitation* condition.

Let \(\boldsymbol{\phi}(t) = [\mathbf{x}(t)^\top, \mathbf{u}(t)^\top]^\top \in \mathbb{R}^{n+m}\) be the regressor vector. The system dynamics can be written as

\[
\mathbf{x}(t+1)^\top = \boldsymbol{\phi}(t)^\top \boldsymbol{\Theta} + \mathbf{w}(t)^\top,
\]

where \(\boldsymbol{\Theta} = [\mathbf{A} \mid \mathbf{B}]^\top \in \mathbb{R}^{(n+m) \times n}\) is the parameter matrix. The least‑squares estimator of \(\boldsymbol{\Theta}\) after \(T\) observations solves

\[
\hat{\boldsymbol{\Theta}}_T = \bigl(\boldsymbol{\Phi}_T^\top \boldsymbol{\Phi}_T\bigr)^{-1} \boldsymbol{\Phi}_T^\top \mathbf{X}_T,
\]

where \(\boldsymbol{\Phi}_T = [\boldsymbol{\phi}(0), \dots, \boldsymbol{\phi}(T-1)]^\top\) and \(\mathbf{X}_T = [\mathbf{x}(1), \dots, \mathbf{x}(T)]^\top\). The estimator exists and is unique only if \(\boldsymbol{\Phi}_T^\top \boldsymbol{\Phi}_T\) is invertible. More generally, the parameters are *identifiable* if the information matrix grows linearly with \(T\).

The input signal \(\mathbf{u}(t)\) is *persistently exciting* of order \(d\) if there exist \(\alpha > 0\) and an integer \(m\) such that, for all \(t\),

\[
\alpha \mathbf{I} \preceq \sum_{k=t}^{t+m} \boldsymbol{\phi}(k)\boldsymbol{\phi}(k)^\top.
\tag{A.2}
\]

Condition (A.2) ensures that the regressor vector varies sufficiently in all directions to uniquely determine the parameters. If the input is constant or varies only within a subspace of \(\mathbb{R}^{n+m}\), the information matrix becomes rank‑deficient and some parameters are unidentifiable regardless of the observation duration.

The governance analogue is direct. Consider a governance system with \(p\) unknown policy‑relevant parameters—elasticities, multipliers, compliance rates, implementation capacities. To identify these parameters, the policy vector \(\mathbf{u}(t)\) must vary across at least \(p\) independent directions over any sufficiently long window. A system that applies the same policy instruments at the same settings, year after year, generates a regressor matrix whose columns are nearly collinear. The parameters that govern the system's response to conditions it has never encountered—the response to a novel crisis, the effectiveness of an untried instrument, the capacity of an untested delivery chain—are unidentified. The controller may observe the system indefinitely and never learn these parameters.

The minimum exploration variance required for identifiability scales with the noise level \(\|\mathbf{W}\|\) and with the dimension of the unknown parameter vector. In the simulation of Part IV, the exploration dither \(\sigma^2_\eta\) must be large enough relative to the process noise to ensure that the information matrix \(\boldsymbol{\Phi}^\top \boldsymbol{\Phi}\) remains well‑conditioned. When \(\sigma^2_\eta\) falls below this threshold, the parameter estimates drift away from the true values without the controller being able to detect the drift—the formal mechanism of the exploration‑starvation trap.

## A.3 Forgetting and the Effective Sample Size

In a non‑stationary environment, the controller must track slowly changing parameters. The standard approach is recursive least squares with a forgetting factor. The estimator updates the parameter estimate \(\hat{\boldsymbol{\theta}}(t)\) and the inverse information matrix \(\mathbf{P}(t)\) as

\[
\begin{aligned}
\mathbf{K}(t) &= \frac{\mathbf{P}(t-1)\,\boldsymbol{\phi}(t)}{\lambda_f + \boldsymbol{\phi}(t)^\top \mathbf{P}(t-1)\,\boldsymbol{\phi}(t)}, \\[4pt]
\hat{\boldsymbol{\theta}}(t) &= \hat{\boldsymbol{\theta}}(t-1) + \mathbf{K}(t)\bigl(y(t) - \boldsymbol{\phi}(t)^\top \hat{\boldsymbol{\theta}}(t-1)\bigr), \\[4pt]
\mathbf{P}(t) &= \frac{1}{\lambda_f}\bigl(\mathbf{I} - \mathbf{K}(t)\,\boldsymbol{\phi}(t)^\top\bigr)\,\mathbf{P}(t-1),
\end{aligned}
\]

where \(\lambda_f \in (0,1]\) is the forgetting factor. When \(\lambda_f = 1\), all past observations are weighted equally; the effective sample size grows without bound, and the estimator converges to the true parameters (if the environment is stationary). When \(\lambda_f < 1\), past observations are exponentially down‑weighted with a half‑life of approximately \(1/(1-\lambda_f)\) time steps.

The effective sample size—the number of observations that contribute meaningfully to the current estimate—is bounded above by

\[
N_{\text{eff}} \leq \frac{1}{1 - \lambda_f}.
\tag{A.3}
\]

When \(\lambda_f = 0.99\), the effective memory is approximately 100 time steps. When \(\lambda_f = 0.90\), the effective memory is approximately 10 time steps—the controller remembers only the most recent decade of experience, and all learning from before that is effectively forgotten.

The net learning condition follows. Let \(r_l\) be the rate of information acquisition—the rate at which new observations reduce the parameter uncertainty \(\text{tr}(\mathbf{P})\). Let \(r_f = 1 - \lambda_f\) be the rate of forgetting—the rate at which old information decays. The steady‑state uncertainty satisfies

\[
\lim_{t \to \infty} \text{tr}(\mathbf{P}(t)) \approx \frac{\text{tr}(\mathbf{W})}{r_l - r_f},
\]

when \(r_l > r_f\). When \(r_l \leq r_f\), the uncertainty diverges: the system forgets faster than it learns, and the parameter estimates never converge.

The governance analogue is that the institutional forgetting rate is determined by personnel turnover, organisational restructuring, and the decay of knowledge management infrastructure. The effective sample size of institutional memory is the number of past administrations, reform cycles, or programme evaluations whose learning remains accessible to current decision‑makers. When this effective sample size is smaller than the number of observations required to identify the system's key parameters—given the noise in the governance environment and the rate of environmental change—the system is in the forgetting‑without‑learning trap.

The mapping between the formal parameter \(\lambda_f\) and institutional characteristics is not exact. But the structural direction is clear. Democracies with short electoral cycles, high ministerial turnover, and weak civil service continuity operate with a low effective \(\lambda_f\). Systems with strong career bureaucracies, institutionalised evaluation repositories, and mandatory knowledge transfer protocols operate with a higher effective \(\lambda_f\). The difference in \(\lambda_f\) determines whether the system can accumulate the knowledge required to remain calibrated to a changing environment, or whether each generation of decision‑makers must rediscover what its predecessors already learned.

## A.4 Rank Deficiency of the Operational Record and the Critical Probe Rate

This appendix derives the identifiability result and the critical probe rate stated in §6.9.

**Rank deficiency.** Let a regulator suppress a disturbance class with latent rate \(\lambda > 0\) and effectiveness \(e \in (0,1)\), both unknown to the observer. The operational record in period \(t\) is

\[
y_{\text{reg}}(t) \sim \text{Poisson}\bigl((1-p)\,\lambda\,(1-e)\bigr),
\]

where \(p\) is the fraction of the exposure base diverted to a probe channel. The likelihood depends on \((\lambda, e)\) only through the product \(\mu = \lambda(1-e)\). The Fisher information matrix in \((\log\lambda, \log(1-e))\) coordinates is therefore rank one for all \(T\): the direction along which \(\lambda\) and \(e\) vary with \(\mu\) held fixed — the direction the renewal decision must resolve — carries zero information regardless of observation duration. This is the condition of §A.2 in its most extreme form: the regressor never leaves a one‑dimensional subspace. A control simulation with \(e\) known to the observer confirms the mechanism: the dead‑letter regime disappears, because even the residual channel then identifies \(\lambda\), slowly. The unidentifiability is a joint property of unknown \((\lambda, e)\), not of low residual counts as such.

**The probe channel.** A protected experimental space run at designed effectiveness \(e_{\text{probe}}\) contributes

\[
y_{\text{probe}}(t) \sim \text{Poisson}\bigl(p\,\lambda\,(1-e_{\text{probe}})\bigr),
\]

with \(e_{\text{probe}}\) known because the relaxation is engineered and instrumented — an assumption that is itself a design requirement on the probe. In log coordinates \(x = \log\lambda\), the per‑period Fisher information from this channel is \(I_x = c\,\lambda\) with \(c = p\,(1-e_{\text{probe}})\).

**Steady state under drift.** Let \(x\) evolve as a driftless random walk with per‑period variance \(q = \sigma_d^{2}\) (the observer's model; the simulation uses a mean‑reverting truth, on which see below). The scalar predict–update recursion for the posterior variance,

\[
\sigma^{2}_{t+1} = \Bigl( \bigl(\sigma^{2}_{t} + q\bigr)^{-1} + I_x \Bigr)^{-1},
\]

has, for \(q I_x \ll 1\), the steady state \(\sigma^{2}_{\infty} \approx \sqrt{q / I_x}\).

**Decidability.** The sunset review removes the regulator iff \(P(\lambda \le \lambda_{\text{safe}}) \ge 1 - \alpha\). With the posterior centred near the true post‑resolution level \(\lambda_{\text{low}} < \lambda_{\text{safe}}\), the condition is approximately \(z_{\alpha}\,\sigma_{\infty} \le \Delta\) with \(\Delta = \log(\lambda_{\text{safe}} / \lambda_{\text{low}})\). Substituting the steady state and solving for the probe rate gives the critical value

\[
p^{*} \;=\; \frac{q\, z_{\alpha}^{4}}{\lambda_{\text{low}}\,(1-e_{\text{probe}})\,\Delta^{4}}.
\tag{A.4}
\]

For \(p < p^{*}\) the steady‑state uncertainty exceeds the margin and the removal condition is never met: the threshold lives in the decision layer, where continuously scaling uncertainty meets a fixed bound.

**Simulation.** The companion file `paper_xiv_sunset.py` implements a grid filter over \((\log\lambda,\, e)\) with an informative prior centred at the historical threat level, annual reviews at \(\alpha = 0.05\), true effectiveness \(e = 0.97\), probe effectiveness \(e_{\text{probe}} = 0.5\), \(\lambda_{\text{safe}} = 1\), \(\lambda_{\text{low}} = 0.2\), and a mean‑reverting log‑threat process (\(\phi = 0.95\)) with innovation \(\sigma_d \in \{0.03, 0.06, 0.12\}\); 150 runs per cell, 300‑year horizon. Results: at \(p = 0\), removal occurred in zero runs at every drift level. The decidability transition sits at \(p \approx 0.02\)–\(0.04\) in all three cases; equation (A.4) predicts \(0.010\), \(0.039\), and \(0.157\) respectively, so the middle case agrees closely while the drift dependence is empirically flatter than the first‑order law — the mean‑reverting truth is kinder than the random‑walk assumption, and at low drift the binding constraint within the horizon is the transit time of the posterior from the informative prior rather than the steady state. Median years from resolution to justified removal: at \(p = 0.04\), roughly 200–280; at \(p = 0.15\), roughly 70–80; at \(p = 0.40\), roughly 32–34. With the regulator genuinely necessary (\(\lambda \approx 2\lambda_{\text{safe}}\)), the risk‑bounded rule produced false removals in at most one percent of runs at any probe rate, while cumulative probe‑channel incidents grew linearly in \(p\) — the cost side of the exploration trade‑off of Part II. Figures `sunset_time_to_removal.png` and `sunset_tradeoff.png` are kept in the simulation repository.

**Limitations.** The derivation is first‑order and scalar: a single disturbance class, static true effectiveness, a Gaussian approximation to the Poisson posterior in log space, and a probe whose own effectiveness is known exactly. Each relaxation moves the result in a knowable direction — unknown \(e_{\text{probe}}\) reintroduces partial rank deficiency in the probe channel and raises \(p^{*}\); multiple coupled disturbance classes raise it further. Equation (A.4) is therefore best read as a lower bound and a scaling law, in the same first‑order spirit as the rest of this appendix.
