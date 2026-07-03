## 4. The Critical Learning Bandwidth

### 4.1 Two bounds of different kinds

The cycle of §3 ran at a fixed environment. Add the series' standing pressure — an environment that drifts at rate $r_{\text{env}}$, here as $a_t=a_0+r_{\text{env}}t$ with the local models' calibration going stale — and the learning rate $\eta$ acquires two bounds whose *mechanisms* differ, not merely their directions.

**The lower bound is Paper XV's, in local form.** Learning must outrun staleness. The averaged gain flow (A.3.1) gives

$$\eta_{\min}(t)\;\approx\;\frac{r_{\text{env}}+\lambda\,(a_t-a_0)}{\sigma_x^2\,m},$$

with $m$ the stability margin. The drift rate enters as expected. The leak term does something less expected and worth naming: $\eta_{\min}$ grows with the *accumulated* drift $(a_t-a_0)$ even at constant $r_{\text{env}}$ — where adaptive capacity decays (Paper XVI's territory), merely *holding* an already-absorbed adaptation costs standing learning rate. A system can fall below its own $\eta_{\min}$ without the world speeding up at all. **[R within the model]**, averaged; unregistered but derived, and flagged as such.

**The upper bound is this paper's, and it runs through the boundary.** Fast learning means high policy velocity; policy velocity feeds the coupling stock through $\nu$; the stock equilibrates at $c^\ast=q+(2\nu\eta/\mu)\,\mathbb{E}|x_ir_i|$; and the clear branch of the boundary switch survives only while $\varepsilon(c^\ast)$ stays below a critical coupling. Solving (A.3.2):

$$\eta_{\max}\;\approx\;\frac{\mu\,\big(\varepsilon_{\text{crit}}-\varepsilon_0-\beta q\big)}{(4/\pi)\,\nu\beta\,\sigma_x\sigma_r}.$$

The structure is the slow-adaptation condition of the post-Rohrs averaging literature, transposed: adaptation must be slow relative to the timescale on which its own activity reshapes the unmodeled coupling — here the stock's relaxation rate $\mu$, scaled by the reflexive gain $\nu\beta$. The precedent is cited for the structure; the formula is this model's own. **[R within the model]**, averaged.

### 4.2 The failure modes are distinct in kind

The bandwidth is not a symmetric penalty for missing an optimum. The simulation slice (Figure `xviii_C_bandwidth_slice`, at $r_{\text{env}}=5\times10^{-5}$, $\nu=0.15$) shows what each violation looks like. Below $\eta_{\min}$, the system fails in the *state*: gains lag the drift, the plant saturates, non-factorizable residence is total because the wreckage is genuinely coupled. Above $\eta_{\max}$, the system fails in the *boundary* while succeeding in the state: at the fastest learning rate swept, tracking is essentially perfect — mean-square state around $0.006$ — while the system resides in the non-factorizable regime 89% of the time. Every performance dashboard is green; the separation that makes "jurisdiction" a meaningful word has dissolved. This is the boundary-domain twin of Paper XV's effective-but-self-blinding regime, produced here without any sensing saturation: the blindness is not a capacity shortfall but a structural consequence of what fast adaptation does to the decomposition it operates within. **[R within the model]**; the institutional reading **[IP]**.

![Figure xviii_C_bandwidth_slice](/working-papers/images/boundary-instability/xviii_C_bandwidth_slice.png)
*(Figure: `xviii_C_bandwidth_slice.png` — slow learning fails in the state, fast learning fails in the boundary.)*

### 4.3 The dynamic pinch and the Decomposability Frontier (P3)

Both bounds are state-dependent, and their state-dependence points the wrong way for comfort. The numerator of $\eta_{\max}$ is a coupling margin, and everything that happens on the approach to collapse — the stock rising, clarity sagging, residuals growing — shrinks it. The leak term pushes $\eta_{\min}$ up as absorbed drift accumulates. The window therefore pinches endogenously, from both ends, fastest exactly when the system is already in trouble: the *dynamic pinch*. **[R within the model]** as comparative statics of the two formulas.

The registered prediction P3 — that the window narrows in $r_{\text{env}}$ and the reflexivity strength, and closes for some combinations — is **supported**. The window map (Figure `xviii_C2_window_map`, viability requiring bounded states, no saturation lock, and NF residence below 20% somewhere on a 13-point log-$\eta$ grid) shows the viable fraction shrinking in both coordinates and reaching **zero on 36% of the $(r_{\text{env}},\nu)$ grid**. The closure contour is the empirical **Decomposability Frontier**: past it, no learning rate exists that both tracks the environment and preserves the boundary. This is the zero-viability condition as a realized region of parameter space, not a limiting case — and it includes combinations with $r_{\text{env}}=0$, where high reflexivity alone closes the window. **[R within the model.]** The frontier generalizes Paper XII's Information–Actuation Frontier from a trade-off over boundary *placement* to a trade-off over adaptation *speed*, and unlike a trade-off it has an infeasible side.

![Figure xviii_C2_window_map](/working-papers/images/boundary-instability/xviii_C2_window_map.png)
*(Figure: `xviii_C2_window_map.png` — viable window width over (r_env, ν); the red contour is the Decomposability Frontier.)*

---

