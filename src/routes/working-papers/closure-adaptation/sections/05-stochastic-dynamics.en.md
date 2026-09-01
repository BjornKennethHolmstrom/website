## 5. Stochastic Dynamics: Noise-Induced Tipping and Residual Fragility

The deterministic analysis of Sections 3 and 4 establishes that the open and closed regimes coexist across a wide parameter range, separated by a separatrix. In any real governance system, perception of the environment is noisy. Threat assessments are uncertain, information arrives with error, and transient shocks perturb the system away from its deterministic trajectory. This section examines whether such noise can move the system across the separatrix, converting a resilient open society into a permanently closed one.

### 5.1 Adding noise to felt uncertainty

We introduce noise into the model through the perceived felt uncertainty that drives boundary investment. The boundary equation becomes:

\[
\dot B = \rho_B \, \sigma\!\big(k_B (F + \sigma \xi(t) - \theta)\big) - d_B B,
\]

where \(\xi(t)\) is Gaussian white noise with unit variance and \(\sigma\) is the noise intensity. The other equations remain unchanged. This is a deliberately minimal modification: noise enters only through the perception of how uncertain or threatening the world is, not through the underlying state dynamics. It captures the idea that governments and institutions often overreact not because the environment has changed, but because their sensing apparatus has become noisy, biased, or unreliable.

All stochastic simulations use the full five‑dimensional model with slow permeability dynamics. Each run starts from the open attractor at the relevant \(s\) and \(\theta\), and noise is applied throughout the integration. The outcome is classified as “closed” if the final boundary strength \(B\) exceeds \(0.5\).

### 5.2 Stochastic sweep across stakes and noise intensity

We ran a Monte Carlo sweep over \(s \in [0.7, 1.5]\) and \(\sigma \in [0.0, 0.3]\), with \(\theta\) fixed at \(0.196\) and \(\rho_P = 0.02\). For each parameter pair, 30 independent runs were performed, each starting from the open state and integrating for 200 time units. The probability of ending closed was recorded.

Figure 4 shows the full probability heatmap across the tested range.

![Figure 4: Stochastic closure probability (open start) as a function of stakes s and noise intensity sigma, for theta = 0.196 and rhoP = 0.02. The open state is robust across most of the range; a small high-risk corner appears at high stakes and high noise.](/working-papers/images/closure-adaptation/figure4_stochastic_heatmap.png)

**Figure 4:** Stochastic closure probability (open start) as a function of stakes \(s\) and noise intensity \(\sigma\), for \(\theta = 0.196\) and \(\rho_P = 0.02\). The open state is robust across most of the range; a small high-risk corner appears at high stakes and high noise.

The results are shown in Table 5.1 for selected \(s\) and \(\sigma\). The full grid is reported in the supplementary data.

**Table 5.1: Probability of closure from an open start, selected parameter points**

| \(s\) | \(\sigma = 0.0\) | \(\sigma = 0.1\) | \(\sigma = 0.2\) | \(\sigma = 0.3\) |
|---:|---:|---:|---:|---:|
| 0.7 | 0.00 | 0.00 | 0.00 | 0.00 |
| 1.0 | 0.00 | 0.00 | 0.00 | 0.00 |
| 1.15 | 0.00 | 0.00 | 0.00 | 0.03 |
| 1.3 | 0.00 | 0.00 | 0.00 | 0.03 |
| 1.5 | 0.00 | 0.00 | 0.10 | 0.10 |

Two features stand out.

First, the open state is remarkably robust to noise across most of the tested range. Even at the highest stakes \(s=1.5\) and moderate noise \(\sigma=0.1\), not a single run out of 30 fell into closure. This is a consequence of the slow permeability dynamics: when a noise spike temporarily raises felt uncertainty, the system’s permeability \(P\) does not immediately collapse. The trust–exploration loop remains intact, and the system returns to the open attractor once the spike passes.

Second, at the extreme corner of the parameter space—high stakes and high noise—a small but nonzero probability of closure appears. At \(\sigma=0.2\) and \(s=1.5\), 10% of runs ended closed; at \(\sigma=0.3\) and \(s=1.15\) or \(1.3\), about 3% did. The standard deviation of final \(B\) increases with noise, reflecting larger excursions toward the separatrix. Occasionally these excursions are large enough to cross it, after which the closed attractor takes over.

This residual fragility is important. It shows that the open state is not infinitely robust. There exists a finite band of conditions—high stakes and high perceptual noise—where random misperception can permanently tip a system into closure. Once tipped, the slow permeability dynamics drive \(P\) downward, making the closed state self-reinforcing and recovery unlikely without a substantial improvement in conditions.

### 5.3 Comparison with fixed-permeability behavior

The contrast between this result and the behavior of a model with fixed, low permeability is instructive. In earlier exploratory work using a four‑variable model with \(P\) held constant at a low value, noise of \(\sigma=0.05\) was sufficient to produce 100% closure at \(s=1.15\). The difference is entirely due to the slow permeability dynamics.

When \(P\) is fixed low, a noise spike immediately increases felt uncertainty, which triggers boundary investment. The boundary then suppresses trust and exploration, raising actual uncertainty, which further raises felt uncertainty. The system falls into the closed attractor rapidly.

When \(P\) is allowed to adapt, it acts as a buffer. A single noise spike cannot instantaneously destroy the system’s openness because \(P\) changes only slowly. The system absorbs the perturbation and returns to the open state. Only sustained, large-amplitude noise at high stakes can overcome this buffer. This finding refines the earlier static analysis: boundary quality is not merely a design parameter; its **temporal responsiveness** is itself a key determinant of resilience.

### 5.4 Institutional interpretation

In governance terms, the noise robustness result suggests that societies with slow-moving, entrenched protections for transparency and information flow are more resilient to transient panics than those whose protections can be rapidly eroded. The model identifies a specific mechanism: if the institutions that maintain \(P\) are themselves slow to change, they act as a low-pass filter, smoothing out the spikes of fear that would otherwise drive overreaction.

The residual fragility at high stakes and high noise carries a warning. In environments where the stakes are genuinely existential and the sensing apparatus is noisy—for example, during a rapidly evolving pandemic or a novel security threat—even well-established open societies face a small but nonzero risk of permanent closure. The model does not predict when this will happen, but it shows that the risk is not zero, and it grows with the combination of high stakes and poor signal fidelity.

This connects directly to Paper I, which established that latency and signal fidelity place hard ceilings on responsiveness. Here, low signal fidelity (high \(\sigma\)) is not merely a source of error; it is a potential trigger for regime change. A governance system that cannot distinguish signal from noise in its threat perception may, in a moment of ambiguity, lock itself into a configuration it cannot easily leave.

### 5.5 Summary

The stochastic analysis confirms the deterministic finding of robust bistability and adds two refinements. First, the open state is much more stable under noise when boundary permeability is allowed to adapt slowly, because the slow variable filters out transient perturbations. Second, there is a residual risk of noise-induced tipping at the extreme of high stakes and high noise, where a few trajectories cross the separatrix and become trapped in closure. This is the model’s formal representation of institutional panic: not a common occurrence, but a real one when fear and confusion peak together.

The next section extends the model to two coupled populations and examines whether a closure event in one can propagate to the other, producing polarisation or system-wide collapse.
