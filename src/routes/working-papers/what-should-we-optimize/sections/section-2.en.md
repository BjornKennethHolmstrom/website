## 2. Methods and evidential discipline

The three studies use finite synthetic worlds with exact dynamic programming or associated linear programmes, verification tests independent of the main solver, and experimental pools separated by role. Each had a frozen specification and analysis procedure before sealed-test verdicts were read. Every study evaluated **800 sealed test worlds**; B5 additionally ran a **200-world prior-misspecification arm**. These worlds are synthetic parameter draws, not a sample of observed municipalities or communities. Confidence intervals describe uncertainty across the declared world-generating distribution; numerical evaluation of a single world is exact within the solver's specified tolerances. The sealed pools used Latin-hypercube sampling, while the recorded percentile bootstrap resampled complete worlds as if independent; interval interpretation is consequently tied to that analysis approximation, not to observational sampling.

A1 uses a model of two upstream municipalities and one downstream municipality with probabilistic rainfall, wetland establishment, flood protection, emergency coordination and fiscal reserves. B replaces this with a compact activity/resource model in which a community may produce, invest, let capabilities atrophy or regenerate natural resources. B5 retains this second model in a smaller state space but adds a Bayesian goal hierarchy and surveying actions. The modifications are deliberately not an apples-to-apples evaluation of the same intervention.

**Confirmatory and exploratory evidence are kept separate.** A1's H1′, H1″ and H2′, B's HB1–HB3, and B5's condition-E H5-1–H5-3 have predefined decision rules. The later stress batteries, scenario maps, sensitivity analyses and B5 concurrent-learning amendment are exploratory; their effects can motivate new preregistrations, not revise old verdicts. This distinction is especially important in B5, because concurrent polling was added after verification worlds showed that the originally frozen, period-consuming survey was almost never selected.

| Experiment | Main unknown | Main contrast | Primary caution |
|:---|:---|:---|:---|
| **A1** | Dynamics or causal structure of the world | Direct objective vs cross-system augmentation and ambiguity aversion | Different misspecifications favour different remedies |
| **B** | Future objective, while dynamics are known | Structural possibility measures vs explicit beliefs and premium-matched reserves | A measure of flexibility need not be a good objective |
| **B5** | Which goals are possible and how probable | Support knowledge and costly Bayesian learning vs a flat prior | Information's usefulness is distinct from the cost and timing of acquiring it |

### 2.1 What a normalized recovery statistic means

The normalized percentages in this manuscript are generally **ratios of mean improvements to mean oracle gaps**, not improvements in total system welfare and not percentages of worlds. In B, for example,

$$
R_M=\frac{\overline{V(\pi_M)-V(\pi_{\mathrm{myopic}})}}
{\overline{V(\pi_{\mathrm{informed}})-V(\pi_{\mathrm{myopic}})}}.
$$

In B5 the denominator instead uses the informed-minus-flat gap, and A1 uses the F0-minus-oracle *cost* gap for H1′ and H2′, whereas H1″ divides a **difference-in-differences** in absolute improvement by the **narrow model** F0-minus-oracle gap. A value greater than one is possible for a comparison against a poor control. Negative values indicate harm relative to the relevant baseline; they do not imply negative absolute welfare. The experimental designs also have estimability rules for vanishing denominators. A raw ratio without a meaningful denominator must not be presented as a finding.

