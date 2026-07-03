# Appendix A — Formal Development and Simulation

**Conventions.** Tiers follow the series: **[R]** rigorous, **[IP]** in principle, **[H]** heuristic; "**[R within the model]**" marks results that are exact or proven for the stated formal model, with no claim beyond it. All matrix-derivative statements use the Frobenius inner product on vectorised operators, $\langle U, V\rangle_F = \operatorname{tr}(U^\top V)$ on $\operatorname{vec}(\cdot)$. The simulation is `paper_xviii_boundary_instability.py`, seed 20260703; every number quoted in this appendix is printed by that script's verification block. Figures referenced: `xviii_A_phase_cycle`, `xviii_A2_regime_map`, `xviii_B_early_warning`, `xviii_C_bandwidth_slice`, `xviii_C2_window_map`.

---

## A.1 The Non-Factorizability Theorem via common invariant subspaces

### A.1.1 Setup

State $\mathbf{x}\in\mathbb{R}^n$, parameters $\theta\in\Theta\subseteq\mathbb{R}^p$, dynamics $\mathbf{x}(t{+}1)=\mathbf{A}(\theta(t))\,\mathbf{x}(t)$ with $\mathbf{A}$ smooth in $\theta$, and learning $\theta(t{+}1)=\theta(t)+\eta\,\mathbf{L}(\mathbf{x}(t),\theta(t))$, $\eta>0$. A *jurisdictional split* is an orthogonal decomposition $\mathbb{R}^n=\mathcal{S}\oplus\mathcal{S}^\perp$ with $\dim\mathcal{S}=d$, $0<d<n$, and projection $\mathbf{\Pi}$ onto $\mathcal{S}$.

**Definition (factorizability).** The split $\mathbf{\Pi}$ *factorizes* the dynamics at $\theta$ if both blocks of cross-influence vanish:
$$\mathbf{\Pi}\,\mathbf{A}(\theta)\,(\mathbf{I}-\mathbf{\Pi})=\mathbf{0}\quad\text{and}\quad(\mathbf{I}-\mathbf{\Pi})\,\mathbf{A}(\theta)\,\mathbf{\Pi}=\mathbf{0},$$
i.e. both $\mathcal{S}$ and $\mathcal{S}^\perp$ are invariant subspaces of $\mathbf{A}(\theta)$. (The weaker block-triangular condition — one invariant subspace, one-way influence — admits an exactly analogous treatment; governance separation in the sense of Paper XII requires the two-sided form, and we state everything for it.) A *fixed decomposition along a trajectory* is a single $\mathbf{\Pi}$ factorizing $\mathbf{A}(\theta(t))$ for all $t$: a common invariant-subspace pair of the matrix family $\{\mathbf{A}(\theta(t))\}_t$.

For fixed $\mathbf{\Pi}$ define the *compatibility variety*
$$\mathcal{V}_\mathbf{\Pi}=\{\theta\in\Theta:\ \mathbf{\Pi}\mathbf{A}(\theta)(\mathbf{I}-\mathbf{\Pi})=\mathbf{0},\ (\mathbf{I}-\mathbf{\Pi})\mathbf{A}(\theta)\mathbf{\Pi}=\mathbf{0}\},$$
the zero set of $2d(n-d)$ smooth scalar functions of $\theta$. Factorizability along the trajectory is exactly confinement: $\theta(t)\in\mathcal{V}_\mathbf{\Pi}$ for all $t$.

**Definition (coupling sensitivity).** $\partial\mathbf{\Delta}/\partial\theta$ denotes the derivative of the off-diagonal blocks, i.e. of the map $\theta\mapsto\big(\mathbf{\Pi}\mathbf{A}(\theta)(\mathbf{I}-\mathbf{\Pi}),\,(\mathbf{I}-\mathbf{\Pi})\mathbf{A}(\theta)\mathbf{\Pi}\big)$, as a linear map $\mathbb{R}^p\to\mathbb{R}^{2d(n-d)}$ under vectorisation.

### A.1.2 Theorem

**Theorem A.1 (Non-Factorizability, [R within the model]).** Fix a split $\mathbf{\Pi}$ and suppose:

**(i) Non-degeneracy.** $\partial\mathbf{\Delta}/\partial\theta$ has rank $\geq 1$ at every point of $\mathcal{V}_\mathbf{\Pi}$ visited by the trajectory, so that $\mathcal{V}_\mathbf{\Pi}$ is locally a submanifold of $\Theta$ of codimension $\geq 1$.

**(ii) Transversality.** The averaged learning field $\bar{\mathbf{L}}(\theta)=\mathbb{E}_{\mathbf{x}}[\mathbf{L}(\mathbf{x},\theta)]$ is not tangent to $\mathcal{V}_\mathbf{\Pi}$ on any relatively open subset of $\mathcal{V}_\mathbf{\Pi}$: equivalently, $\big\langle \partial\mathbf{\Delta}/\partial\theta\,[\bar{\mathbf{L}}(\theta)],\,\cdot\,\big\rangle_F\not\equiv 0$ there.

**(iii) Persistence.** The trajectory does not converge to a stationary point of the learning dynamics lying inside $\mathcal{V}_\mathbf{\Pi}$.

Then $\theta(t)$ leaves $\mathcal{V}_\mathbf{\Pi}$ in finite time. Since the argument holds for *every* admissible split, no fixed decomposition of the state space remains exact along a learning trajectory satisfying (i)–(iii): factorizability is not a structural invariant of the learning system but a trajectory-dependent, transient property.

**Stochastic form.** If the learning update carries noise whose distribution is absolutely continuous on $\mathbb{R}^p$ (as in the simulation, where $\mathbf{L}$ inherits the process noise through $\mathbf{x}$), then escape from $\mathcal{V}_\mathbf{\Pi}$ is almost sure regardless of (ii), since $\mathcal{V}_\mathbf{\Pi}$ has Lebesgue measure zero under (i) and the one-step transition kernel assigns it probability zero. The deterministic statement uses transversality; the stochastic statement uses measure. The paper uses whichever hypothesis matches the setting and does not mix the vocabularies.

**Proof.** Suppose $\theta(t)\in\mathcal{V}_\mathbf{\Pi}$ for all $t$. Then every increment $\theta(t{+}1)-\theta(t)=\eta\mathbf{L}$ connects points of $\mathcal{V}_\mathbf{\Pi}$; passing to the averaged flow (valid for $\eta$ small on the relevant horizon; for the discrete argument replace tangency by "increments stay in a tubular neighbourhood shrinking with $\eta$"), confinement requires $\bar{\mathbf{L}}(\theta(t))\in T_{\theta(t)}\mathcal{V}_\mathbf{\Pi}$ along the whole visited set. By (iii) the visited set is not a single stationary point, hence contains a relatively open piece of an orbit in $\mathcal{V}_\mathbf{\Pi}$; (ii) denies tangency on any such piece. Contradiction; the trajectory exits. The stochastic case is immediate from absolute continuity. $\square$

### A.1.3 What the theorem does and does not say

Three deliberate restraints. *First*, the theorem is conditional on (ii): a learning rule constructed to act only through block-respecting channels — $\bar{\mathbf{L}}\in T\mathcal{V}_\mathbf{\Pi}$ by design — preserves factorizability forever. The content of the theorem is that this alignment is a codimension condition, not a default: generic learning that acts through any coupling-relevant channel breaks every fixed split. The design principles of §6 are, in this exact sense, attempts to engineer (ii)'s failure — to constrain learning into the tangent bundle of a chosen decomposition. *Second*, "leaves $\mathcal{V}_\mathbf{\Pi}$" means the decomposition ceases to be exact; how *fast* the off-diagonal blocks then grow, and whether the M–Δ loop gain of Paper XII crosses unity, is a quantitative question the theorem does not answer — that is the work of §A.2–A.3. *Third*, the scope asymmetry of §1 enters here and not as a corollary: nothing in the mathematics prevents (i)–(iii) from holding in a self-referential symbolic system. The asymmetry is that such a system may *redefine* $\mathbf{\Pi}$ by convention as the trajectory moves — re-factorization is free when the facts on both sides of the split are conventions — whereas a world-coupled system must compensate drift it cannot rename. Escape from a fixed $\mathcal{V}_\mathbf{\Pi}$ is a theorem; the cost of re-fixing $\mathbf{\Pi}$ is what separates the domains. **[IP]** for the domain separation, per Paper XVII's scope bound.

**Corollary A.1.1 (Spectral drift, [R within the model]).** Any stability certificate evaluated at $\theta(0)$ — in particular the small-gain condition $\lVert\mathbf{M}\rVert\lVert\mathbf{\Delta}\rVert<1$ of Paper XII — is not invariant under learning satisfying (i)–(iii). Stability is a property of the joint (plant + controller + learning rule) trajectory.

**Corollary A.1.2 (Environment as field, [R within the model]).** Along such a trajectory $\mathbf{\Delta}=\mathbf{\Delta}(\theta(t))$ is a policy-dependent interaction field; treating it as an exogenous operator mis-specifies the stability problem from the first step.

---

## A.2 The reflexive boundary cycle: reduction and simulation

### A.2.1 The model

As specified in §3.1, with the implementation choices declared there and in the simulator header: two scalar subsystems
$$x_i(t{+}1)=(a_t-k_i)\,x_i+\varepsilon(t)\,x_j+w_i,\qquad w_i\sim\mathcal{N}(0,\sigma_w^2),$$
soft-saturated at $X_{\text{sat}}$; coupling $\varepsilon=\varepsilon_0+\alpha(1-b)+\beta c$ with the *stock* $c(t{+}1)=(1-\mu)c+\mu\,x_1x_2+\nu(|\Delta k_1|+|\Delta k_2|)$; closed-model residuals $r_i=x_i(t{+}1)-(a_0-k_i)x_i=(a_t-a_0)x_i+\varepsilon x_j+w_i$; gradient learning with leak, $k_i\leftarrow(1-\lambda)k_i+\eta\,x_i r_i$; boundary clarity $b\leftarrow\sigma\!\big(\gamma(1-\overline{|r|}/R)-\delta|\varepsilon|+h(b-\tfrac12)\big)$. Note two structural facts that the reduction uses. The residual is *independent of $k_i$*: each local model carries its own gain correctly, so what learning sees is exactly the unmodeled content — drift staleness plus coupling plus noise. And $\theta=(k_1,k_2)$ reaches $\mathbf{\Delta}$ through two channels: indirectly through the states (the $\mu\,x_1x_2$ term) and directly through policy velocity (the $\nu$ term), the latter being the model's literal $\partial\mathbf{\Delta}/\partial\theta\neq 0$.

### A.2.2 Fast-subsystem statistics in closed form

Hold $(\varepsilon,k_1{=}k_2{=}k,b)$ fixed and take the unsaturated linear regime. In the mode coordinates $s=(x_1{+}x_2)/\sqrt2$, $d=(x_1{-}x_2)/\sqrt2$ the dynamics decouple with poles $p_\pm=a-k\pm\varepsilon$, giving stationary variances $\sigma_w^2/(1-p_\pm^2)$ and hence, exactly,
$$q(\varepsilon,k):=\mathbb{E}[x_1x_2]=\frac{\sigma_w^2}{2}\left[\frac{1}{1-p_+^{\,2}}-\frac{1}{1-p_-^{\,2}}\right],\qquad
\sigma_x^2=\frac{\sigma_w^2}{2}\left[\frac{1}{1-p_+^{\,2}}+\frac{1}{1-p_-^{\,2}}\right].$$
**[R within the model.]** $q$ is positive for $\varepsilon>0$, increasing in $\varepsilon$, and diverges as $p_+\to 1$: the symmetric mode loses stability at
$$\varepsilon_{\text{inst}}(k)=1-(a-k),$$
the line marked in Figure `xviii_A_phase_cycle`. This divergence is the collapse mechanism: the interaction statistic that feeds the stock blows up precisely as the coupling approaches the margin the local gains leave open.

### A.2.3 The averaged slow system and the anatomy of the cycle

The timescale separation in the calm phase is roughly: fast states (mixing time $(1-|p_\pm|)^{-1}\sim 10$–$25$ steps), slow stock ($\mu^{-1}=50$), slow gains ($\lambda^{-1}=100$), with $b$ a fast switch slaved to $(\overline{|r|},\varepsilon)$ except in its bistable band. Averaging over the fast states (replace $x$-statistics by their stationary values) yields a planar slow system in $(c,b)$ with the gains slaved by the learning–leak balance $\lambda k^\ast=\eta\big[(a_t-a_0)\sigma_x^2+\varepsilon\,q\big]$:
$$c^{+}=(1-\mu)c+\mu\,q\big(\varepsilon(c,b),k^\ast\big)+2\nu\eta\,\mathbb{E}|x_ir_i|,\qquad
b^{+}=\sigma\!\Big(\gamma\big(1-\tfrac{\mathbb{E}|r|}{R}\big)-\delta\,\varepsilon(c,b)+h(b-\tfrac12)\Big),$$
with $\mathbb{E}|r|\approx\sqrt{2/\pi}\,(\varepsilon^2\sigma_x^2+\sigma_w^2)^{1/2}$ and $\mathbb{E}|x_ir_i|\approx(2/\pi)\,\sigma_x\sigma_r$ up to a correlation-dependent factor of order one (the simulation, not these approximations, carries the quantitative burden).

The relaxation-oscillation anatomy is read directly off this pair. On the clear branch ($b\approx1$) the stock ramps slowly toward the $q$-divergence — *hidden accumulation*, hidden because $\mathbb{E}|r|$ grows only with $\varepsilon^2$ while $q$'s feedback is compounding. The divergence of $q$ is the fold: $c$ and $\varepsilon$ run away on the fast timescale — *collapse* — until saturation bounds the excursion and the now-large learning signal drives $k$ up on what has become a fast timescale, violating the separation; the averaged system is therefore valid in the accumulation phase and heuristic across the excursion, and we say so rather than claim otherwise. High $\overline{|r|}$ and $|\varepsilon|$ throw $b$ to its dissolved branch. Gain growth kills $q$; the stock decays; calm returns; $b$'s memory term releases; the leak then bleeds $k$ back down, re-arming the instability — *miscalibrated re-entry*. A rigorous limit-cycle proof would require the continuous-time planar limit of the averaged map, a verified trapping region, and Poincaré–Bendixson on that reduction; **we do not claim it**. The reduction explains the cycle's anatomy **[R within the model]** for A.2.2's statistics and **[H]** for the excursion phase; existence of the cycle is established numerically.

### A.2.4 Simulation results: P1

Exhibit run ($T=6000$, baseline parameters): **9** collapse–recovery events, with the four phases visible in Figure `xviii_A_phase_cycle` — the stock ramp below a quiet $b$, the $\varepsilon$ excursion past $1-a_0$, the gain spike, the $b$ collapse and staggered recovery. Regime map (Figure `xviii_A2_regime_map`; $12\times12$ grid, $\beta\in[0.2,2.4]$, $\eta\in[0.005,0.5]$ log-spaced, 2 seeds): **36%** of the grid sustains the cycle. The cycling region is bounded on one side by a *quiescent* regime (reflexivity too weak to reach the fold) and on the other by a *locked non-factorizable* regime, not anticipated in the outline and reported as a finding: at high $\beta$, the post-collapse coupling floor $\varepsilon_0+\alpha(1-b)$ is itself high enough to hold $b$ at zero permanently — the boundary never recovers, and the system settles into permanent NF residence rather than oscillation. **P1: supported** — a sustained oscillation exists in a non-degenerate parameter region, and the four-phase narrative of §3.2 describes it; the narrative must additionally acknowledge the locked regime as the cycle's high-reflexivity terminus. **[R within the model.]**

### A.2.5 Simulation results: P2, and the failure of the registered index

The registered index — $\rho_{\text{boundary}}$ as the largest singular value of the cross-boundary *prediction-error* correlation block, here with one monitored variable per side reducing to $|\text{rolling corr}(r_1,r_2)|$, window 150 — was tested against a state-based variant $|\text{rolling corr}(x_1,x_2)|$ and its detrended form (level minus trailing 400-step median). A first, naive test (threshold-crossing counts) appeared to support both variants — 86–94% of events "warned", median leads $\approx$ 390 steps — and was **rejected by its own diagnostics**: the leads approached the full cycle length, and the state-based index sat above threshold 45% of *deep-calm* time. An index that is simply "often on" warns of everything and therefore of nothing. The honest instrument is a detection/false-alarm study: detection = exceedance in $[t_0{-}300,t_0{-}10]$ before a collapse at $t_0$ while the dashboard is still green ($b>0.9$); false alarm = exceedance in deep calm ($b>0.9$, $>400$ steps from the next collapse). Over 85 events, at a false-alarm budget of 10% (Figure `xviii_B_early_warning`):

| detector | detection | FA | median lead |
|---|---|---|---|
| error-based ($\rho_{\text{boundary}}$ as registered in §5) | **0.21** | 0.09 | 281 |
| state-based, level | 0.46 | 0.08 | 87 |
| state-based, detrended | 0.60 | 0.09 | 56 |

**P2: falsified as registered.** The registered consequence binds: §5 is revised, and §6.1's monitoring principle is weakened to a graded claim. The mechanism of the failure is itself a result, and arguably the most series-characteristic one in the paper: the local residual is the one signal local adaptation is *actively minimising*. Learning absorbs the coupling into gain, so the evidence of boundary dissolution is laundered out of each side's own prediction errors precisely during the phase an early-warning index is supposed to illuminate — Goodhart's law applied to the diagnostic itself, and the dynamic kin of Paper XV's effective-but-self-blinding regime. The coupling remains visible where no local objective is scrubbing it: in the raw cross-boundary state covariance. Even there the discrimination is partial (0.46–0.60 at strict budgets), because the accumulation's final approach is fast — most of the discriminative signal is compressed into the last $\sim$100 steps. The revised §5 must therefore (a) define $\rho_{\text{boundary}}$ on cross-boundary *state* covariances, (b) state the laundering result as the reason error-based monitoring is structurally misleading, and (c) present boundary-health monitoring as lead-limited rather than as a reliable tripwire. **[R within the model]** for the comparison; **[IP]** for the institutional reading.

---

## A.3 The Critical Learning Bandwidth

### A.3.1 The lower bound

Under drift $a_t=a_0+r_{\text{env}}t$, the residual is $r_i=(a_t-a_0)x_i+\varepsilon x_j+w_i$, so the averaged gain flow is
$$\dot k=-\lambda k+\eta\big[(a_t-a_0)\,\sigma_x^2+\varepsilon\,q\big].$$
Write $e_k=(a_t-a_0)-k$ for the un-absorbed drift; the effective pole is $a_0+e_k$ (plus coupling), and viability requires $e_k<m:=1-a_0-\varepsilon-$ (stability margin). On the ramp-following solution $\dot k\approx r_{\text{env}}$,
$$e_k\;\approx\;\frac{r_{\text{env}}+\lambda\,(a_t-a_0)}{\eta\,\sigma_x^2},\qquad\text{hence}\qquad
\eta_{\min}(t)\;\approx\;\frac{r_{\text{env}}+\lambda\,(a_t-a_0)}{\sigma_x^2\,m}.$$
**[R within the model]** for the averaged balance. Two readings. The drift rate enters as expected — this is Paper XV's lower bound in local form. Less expected: the *leak* term makes $\eta_{\min}$ grow with the accumulated drift $(a_t-a_0)$ even at constant $r_{\text{env}}$ — with decaying authority, merely *holding* an absorbed adaptation costs learning rate. When slow learning fails, it fails through state divergence: in the sweep at $(r_{\text{env}},\nu)=(5\times10^{-5},0.15)$, the slow end shows saturation lock and NF residence 1.00.

### A.3.2 The upper bound

Fast learning fails through the direct reflexive channel. In calm, the expected policy velocity is $\mathbb{E}|\Delta k_i|=\eta\,\mathbb{E}|x_ir_i|\approx(2/\pi)\,\eta\,\sigma_x\sigma_r$, so the stock equilibrates at
$$c^\ast\;=\;q+\frac{2\nu\eta}{\mu}\,\mathbb{E}|x_ir_i|,$$
and the clear branch of the boundary switch survives only while $\varepsilon(c^\ast)=\varepsilon_0+\beta c^\ast<\varepsilon_{\text{crit}}$, where $\varepsilon_{\text{crit}}(\overline{|r|}):=\delta^{-1}\big[\gamma(1-\overline{|r|}/R)+h/2-s^{-1}\ln\frac{b_h}{1-b_h}\big]$ is the coupling at which the high fixed point $b_h$ of the sigmoid disappears. Solving,
$$\boxed{\;\eta_{\max}\;\approx\;\frac{\mu\,\big(\varepsilon_{\text{crit}}-\varepsilon_0-\beta q\big)}{2\nu\beta\,\mathbb{E}|x_ir_i|/\eta}\;=\;\frac{\mu\,\big(\varepsilon_{\text{crit}}-\varepsilon_0-\beta q\big)}{(4/\pi)\,\nu\beta\,\sigma_x\sigma_r}\;}$$
**[R within the model]**, averaged. The structure is the transposed slow-adaptation condition of adaptive control: adaptation must be slow relative to the timescale on which its own activity re-shapes the unmodeled dynamics — here, slow relative to the stock's relaxation $\mu$ scaled by the reflexive gain $\nu\beta$. The Rohrs precedent (§4) is cited for the structural insight, not the formula; the formula is this model's own. The empirical signature at the fast end is the distinctive one: at $\eta=5$ the system *tracks perfectly* (mean-square state $\sim0.006$) while residing in NF 89% of the time — a green dashboard over a dissolved boundary, the boundary-domain twin of Paper XV's Simulation D.

### A.3.3 The dynamic pinch and the closure of the window

The numerator of $\eta_{\max}$ is a *coupling margin*, and it is state-dependent: accumulation raises $q$, boundary sag raises $\varepsilon$ through $\alpha(1-b)$ and raises $\overline{|r|}$, all of which shrink $(\varepsilon_{\text{crit}}-\varepsilon_0-\beta q)$. So $\eta_{\max}$ falls as the system drifts toward the fold — while $\eta_{\min}$ rises with accumulated drift through the leak term. The window pinches endogenously, from both ends, fastest exactly when the system is already in trouble. **[R within the model]** for the comparative statics of the two formulas.

**Simulation results: P3.** Slice at $(r_{\text{env}},\nu)=(5\times10^{-5},0.15)$, Figure `xviii_C_bandwidth_slice`: NF residence is 1.00 at the slow end, falls to a minimum of 0.05 in the interior, rises to 0.89 at the fast end — the two failure modes are distinct in kind (state failure vs boundary failure), not just in direction. Window map over $(r_{\text{env}},\nu)$, Figure `xviii_C2_window_map` (viability = saturation fraction $<0.05$, mean-square state $<0.5$, NF residence $<0.2$, over a 13-point log-$\eta$ grid): the viable window narrows in both coordinates and **closes on 36% of the grid**; the closure contour is the empirical Decomposability Frontier. **P3: supported.** Zero-viability is a realised region of parameter space, not a limiting case. **[R within the model.]**

---

## A.4 Regress termination within the model

Consider a hierarchy: level 0 holds the base parameters $\theta^{(0)}=(k_1,k_2)$; level 1 holds meta-parameters $\theta^{(1)}$ (e.g. the learning rate, the leak, the boundary thresholds) adjusted by a meta-learning rule on level-0 performance; and so on to level $M$. Every internal "halting rule" — a cap, a constitution, a review threshold — is, by construction, a component of some $\theta^{(m)}$.

**Proposition A.4.1 (Necessity, [R within the model]).** If at level $m$ the meta-learning rule satisfies hypotheses (i)–(iii) of Theorem A.1 with respect to the coupling-relevant directions of $\theta^{(m)}$ — its adjustments have a nonzero projection, direct or through the states, onto $\partial\mathbf{\Delta}/\partial\theta^{(m)}$ — then boundary drift recurs at level $m$. By induction, a hierarchy whose every level learns through coupling-relevant channels exhibits drift at its top level; adding levels relocates the drift, it does not remove it. Only a *$\theta$-independent* term of the dynamics — a constraint not adjustable at any level — halts drift.

**Proposition A.4.2 (Directional sufficiency, [R within the model]).** A $\theta$-independent anchor is a submanifold $\Theta_{\text{anch}}\subset\Theta$ onto whose tangent bundle the learning field is projected. The anchor prevents escape from $\mathcal{V}_\mathbf{\Pi}$ **iff** the normal directions of $\mathcal{V}_\mathbf{\Pi}$ excited by the learning field are among the directions the anchor constrains. Sufficiency is *directional*: drift continues freely in the unconstrained complement. An anchor that pins the wrong directions changes nothing.

The relation to Paper XVII is one of tier-disciplined citation in both directions. Proposition A.4.1 is this model's own result: within the formalism, an exogenous term is *necessary* to halt meta-adaptive drift. Paper XVII's certification floor is the **[IP]**-tier, cross-disciplinary identification of what such exogenous terms can institutionally be — and its relocation invariant is the standing warning that most apparent anchors are, on inspection, parameters at a higher level, which is precisely the regress A.4.1 formalizes. Its design lever — minimize, discretize, and cost-harden the certification link — is what §6.4 adopts. Neither result inherits the other's tier: the proposition does not make the certification floor **[R]**, and the floor's institutional breadth does not extend the proposition beyond the linear model. A.4.2's directionality condition is the model-level content behind §6.4's requirement that anchors constrain the *coupling-relevant* directions: an audit that certifies a variable orthogonal to the drifting coupling satisfies the letter of "external anchor" and none of its function.

