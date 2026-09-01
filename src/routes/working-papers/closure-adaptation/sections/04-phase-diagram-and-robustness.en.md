## 4. Phase Diagram and Robustness of the Closure Trap

The analytical structure of Section 3 indicates that bistability should occur for a range of parameters, but does not by itself establish how large or robust that range is. To answer this, we ran systematic simulations across a grid of stakes \(s\), tolerance threshold \(\theta\), and permeability adaptation rate \(\rho_P\). The results show that the closure trap is a generic feature of the model, not an artefact of a narrow parameter choice.

### 4.1 Parameter sweep design

We swept the two parameters that most directly control the boundary–trust trade-off:

- \(s\) (stakes / uncertainty multiplier): 20 values from \(0.5\) to \(1.8\)
- \(\theta\) (felt‑uncertainty tolerance threshold): 20 values from \(0.08\) to \(0.32\)

For each of four values of the slow permeability adaptation rate \(\rho_P \in \{0.01, 0.02, 0.05, 0.10\}\), we ran the deterministic five‑variable model from two initial conditions:

- **Open start:** \(U=0.2,\ B=0.02,\ T=0.95,\ E=0.90,\ P=0.9\)
- **Closed start:** \(U=0.8,\ B=0.90,\ T=0.02,\ E=0.05,\ P=0.1\)

Each simulation was integrated to \(t=180\) with \(dt=0.05\), and the final \(B\) was averaged over the last 200 time steps. The final state was classified using the following rules:

- **Open:** \(B_{\text{final}} < 0.20\)
- **Closed:** \(B_{\text{final}} > 0.55\)
- **Intermediate:** \(0.20 \leq B_{\text{final}} \leq 0.55\)
- **Oscillatory:** standard deviation of \(B\) over the tail \(> 0.05\)

Two notions of bistability were computed:

- **Weak bistability:** the two initial conditions lead to different final classifications (any difference).
- **Strong bistability:** the open start ends open (\(B<0.2\)) and the closed start ends closed (\(B>0.55\)).

The simulations are deterministic; all results reported here are **[R within model]** for the stated parameter grid and classification thresholds.

### 4.2 Qualitative structure of the phase diagram

The phase diagram for each \(\rho_P\) shows the same three-region structure. Figure 1 shows a representative heatmap for \(\rho_P=0.02\).

![Figure 1: Phase diagram of the single-population model for rhoP = 0.02. Colors indicate the final regime classification from open and closed initial conditions, combined into weak bistability categories. The broad diagonal band shows the region of path-dependent institutional outcomes.](/working-papers/images/closure-adaptation/figure1_phase_diagram_rhoP_002.png)

**Figure 1:** Phase diagram of the single-population model for \(\rho_P=0.02\). Colors indicate the final regime classification from open and closed initial conditions, combined into weak bistability categories. The broad diagonal band shows the region of path-dependent institutional outcomes.

Three regions are evident:

1. **Low stakes, high tolerance:** the system is open regardless of initial condition. This region occupies the upper left of the \((s,\theta)\) plane, where felt uncertainty rarely exceeds the boundary threshold, and trust and exploration are self-sustaining.

2. **High stakes, low tolerance:** the system is closed regardless of initial condition. This region is small, occupying only about 2–3% of the tested grid. In these conditions, felt uncertainty is so high that even a well-trusted system cannot prevent boundary escalation.

3. **A broad diagonal band of bistability:** between these extremes, the same \((s,\theta)\) pair can support either the open or closed attractor, depending on initial history. This band is the model's representation of path-dependent institutional choice: two societies facing identical environmental conditions can end up in very different regimes because of differences in their starting trust, boundary strength, or permeability.

The transition from open to closed is not abrupt; it occurs through an intermediate zone where the open-start branch may settle at moderate \(B\) before the closed-start branch becomes truly closed. This is why weak bistability covers a larger fraction of parameter space than strong bistability.

### 4.3 Quantifying robustness: weak and strong path dependence

Table 4.1 summarises the fractions of the tested parameter space in each regime, and Figure 2 shows the same information graphically.

![Figure 2: Bistable fractions across permeability adaptation rates. Weak bistability (any difference in final classification) covers roughly 57–59% of the tested parameter space, while strong bistability (open vs closed) covers about 32–33%.](/working-papers/images/closure-adaptation/figure2_bistable_fractions.png)

**Figure 2:** Bistable fractions across permeability adaptation rates. Weak bistability (any difference in final classification) covers roughly 57–59% of the tested parameter space, while strong bistability (open vs closed) covers about 32–33%.

**Table 4.1: Phase diagram fractions by regime and permeability adaptation rate**

| \(\rho_P\) | Weak bistable | Strong bistable | Both open | Both closed |
|---:|---:|---:|---:|---:|
| 0.01 | 0.588 | 0.328 | 0.380 | 0.020 |
| 0.02 | 0.585 | 0.330 | 0.378 | 0.023 |
| 0.05 | 0.578 | 0.325 | 0.383 | 0.023 |
| 0.10 | 0.568 | 0.323 | 0.383 | 0.030 |

The main finding is that strong path dependence—the coexistence of a genuinely open and a genuinely closed outcome for the same parameters—occurs in roughly one third of the tested parameter space. Weak path dependence, including intermediate cases, covers nearly 60%. Only a small fraction of the grid forces closure unconditionally; most of the parameter space either remains open or is historically contingent.

This result answers the robustness question directly: the closure trap is not confined to a sliver of parameter space. It is a structural property of the dynamics across a wide range of stakes, tolerance levels, and permeability adaptation rates.

### 4.4 Effect of permeability adaptation rate

The summary also reveals a modest but consistent effect of \(\rho_P\): as the permeability adaptation rate increases, the fraction of strongly bistable points declines slightly, from \(0.328\) at \(\rho_P=0.01\) to \(0.323\) at \(\rho_P=0.10\), and the fraction of both-closed points rises from \(0.020\) to \(0.030\). The mean collapse threshold also shifts downward by about \(0.015\) over the same range (Table 4.2).

This suggests that faster permeability adaptation does not rescue the system. On the contrary, within the tested range, a more responsive permeability variable slightly increases the fragility of the open state. The likely mechanism is that when felt uncertainty rises, a faster \(\rho_P\) allows \(P\) to fall more quickly during a transient, deepening the suppression of trust and exploration before the system can recover. In governance terms, this corresponds to the danger of rapid institutional erosion under stress: legal and transparency protections that can be dismantled quickly are less protective than those that are slow-moving and therefore harder to degrade during a panic.

### 4.5 Hysteresis width

Table 4.2 reports the mean collapse and recovery thresholds computed from the phase diagram grid, together with the implied hysteresis width. Figure 3 shows a representative one-dimensional hysteresis loop for \(\rho_P=0.02\), using the dynamic permeability model.

![Figure 3: Hysteresis loop for boundary strength B as stakes s are slowly increased (up sweep, open start) and then decreased (down sweep, closed start) at rhoP = 0.02. The separation between the branches shows that recovery requires substantially lower stakes than the collapse point.](/working-papers/images/closure-adaptation/figure3_hysteresis_loop.png)

**Figure 3:** Hysteresis loop for boundary strength \(B\) as stakes \(s\) are slowly increased (up sweep, open start) and then decreased (down sweep, closed start) at \(\rho_P = 0.02\). The separation between the branches shows that recovery requires substantially lower stakes than the collapse point.

**Table 4.2: Mean thresholds and hysteresis width**

| \(\rho_P\) | Mean collapse \(s\) | Mean recovery \(s\) | Mean hysteresis width |
|---:|---:|---:|---:|
| 0.01 | 1.002 | 0.979 | 0.289 |
| 0.02 | 1.002 | 0.979 | 0.274 |
| 0.05 | 0.994 | 0.986 | 0.243 |
| 0.10 | 0.987 | 0.989 | 0.220 |

The hysteresis width is positive for all tested \(\rho_P\), confirming that the thresholds for collapse and recovery differ. A system that has fallen into the closed state requires conditions to become noticeably safer before it can reopen, compared with the conditions under which it originally collapsed. The width declines slightly with increasing \(\rho_P\), consistent with the interpretation above: faster permeability adaptation narrows the gap, but does not eliminate it.

These aggregate numbers average over a range of \(\theta\) and \(s\), and should not be mistaken for a single universal threshold. The one‑dimensional hysteresis sweeps reported in earlier exploratory work show a sharper separation, with recovery occurring only after \(s\) drops well below the collapse value. The aggregate table confirms the sign and robustness of the effect, while the scatter across \(\theta\) is reported in the supplementary data.

### 4.6 Interpretation

The phase diagram results give formal content to the intuitive claim that civilisations systematically overproduce boundary structures when uncertainty exceeds their capacity for trust. The broad bistable region means that overproduction is not a universal law but a path-dependent possibility: for the same external conditions, one system may remain open while another locks down. The difference lies in the system's history—its accumulated trust, its initial boundary strength, and its permeability.

This is the dynamic analogue of the boundary–trust trade-off foreshadowed in earlier work. It gives a concrete mechanism for why high-trust and low-trust societies can persist side by side in similar environments, and why a crisis that pushes one society into closure may not affect another with a different initial configuration.

The next section turns to the role of noise. The phase diagram is deterministic; real governance systems face stochastic shocks, perceptual errors, and transient disturbances. We examine whether noise can move a system across the separatrix and how robust the open state is to such perturbations.
