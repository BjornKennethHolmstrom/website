### Appendix H: Testable Predictions and Falsification Protocols

This appendix operationalizes the framework’s core predictions for empirical testing. Each entry specifies the prediction, the variables involved, measurement approach, data sources, statistical test, and falsification condition.

#### H.1 Prediction 1: Variety Gap and Crisis Frequency

**Prediction:** Systems with larger estimated variety gaps (G) will experience more frequent governance crises over a given time period than systems with smaller G, controlling for GDP per capita and regime type. Crises in the excluded dimensions will be disproportionately elevated.

**Variables:**
- Independent: G = dim(D) − dim(V), estimated heuristically via the protocols in Appendix G.
- Dependent: Governance crisis count over 20‑year window (2000‑2020).
- Covariate: Crisis count in “excluded” vs. “tracked” dimensions (coded per country’s value architecture).
- Controls: GDP per capita, Polity IV / V‑Dem regime score, population size.

**Data sources:** Cross‑National Time‑Series Data Archive, V‑Dem crisis indicators, country‑specific value architecture coding (Appendix G protocols).

**Test:** Negative binomial regression with crisis count as outcome, G as predictor, and controls. A second model tests whether the G‑crisis relationship is stronger for excluded‑dimension crises than for tracked‑dimension crises (interaction term G × excluded dummy).

**Falsification:** No significant positive coefficient on G, or coefficient negative. Alternatively, no significant interaction with excluded‑dimension dummy.

---

#### H.2 Prediction 2: Gap Growth and Institutional Rigidity

**Prediction:** Countries with higher institutional rigidity will exhibit faster variety‑gap growth (dG/dt) over a 20–30 year window than more adaptive systems.

**Variables:**
- Independent: Institutional rigidity index (composite of veto players, constitutional amendment difficulty, mean cabinet duration).
- Dependent: dG/dt ≈ (change in number of salient policy domains) − (change in number of independent tracked objectives) over the period.
- Controls: GDP growth, civil society density, media freedom.

**Data sources:** V‑Dem, Comparative Political Data Set, OECD Government at a Glance, own coding of policy domains (Appendix G.6).

**Test:** Linear regression of dG/dt on rigidity index with controls. Alternatively, two‑group comparison: high‑rigidity vs. low‑rigidity countries, difference in mean dG/dt.

**Falsification:** No significant difference in dG/dt between high‑ and low‑rigidity groups, or adaptive systems show faster gap growth.

---

#### H.3 Prediction 3: Signature Failure Patterns at G_crit

**Prediction:** In cases where a governance system plausibly crossed G_crit, time‑series analysis will reveal (a) breakdown of Granger causality from policy interventions to outcomes, (b) increased policy variance relative to outcome variance, (c) spectral evidence that policy responds to high‑frequency noise rather than low‑frequency signal.

**Variables:**
- Policy intervention time series (e.g., budget allocations, regulatory changes).
- Outcome time series (e.g., relevant wellbeing indicators).
- SNR proxy: ratio of explained to unexplained variance in policy‑outcome models before vs. after the estimated crossing.

**Data sources:** Country‑specific administrative data, reconstructed for historical cases (e.g., Soviet Union 1985‑1991, UK financial services 2005‑2010, Venezuela 2005‑2015).

**Test:** Within‑case interrupted time‑series design. Compare pre‑ and post‑estimated‑G_crit periods on: Granger causality tests, variance ratios, spectral coherence.

**Falsification:** No significant change in these indicators across the estimated G_crit boundary, or changes in the opposite direction (improved policy‑outcome coupling after crossing).

---

#### H.4 Prediction 4: Multidimensional Value Architectures and Crisis Reduction

**Prediction:** Governments or regions that have institutionally adopted multi‑dimensional wellbeing frameworks for at least five years will experience fewer crises in dimensions traditionally excluded by GDP‑centric architectures (health, social cohesion, ecological integrity), relative to matched comparators.

**Variables:**
- Treatment: Adoption of a multi‑dimensional wellbeing framework (binary, with implementation‑lag threshold of 5 years).
- Dependent: Crisis event count in excluded dimensions.
- Matching variables: GDP per capita, population, regime type, baseline crisis rate.

**Data sources:** Wellbeing Economy Alliance (WEAll) case studies, national statistics offices, EM‑DAT disaster database, V‑Dem.

**Test:** Matched case‑control design. For each treatment unit, select 2–3 control units matched on pre‑period characteristics. Compare crisis counts in excluded dimensions during the post‑implementation window using conditional Poisson regression.

**Falsification:** No significant difference in crisis frequency, or treatment units perform worse.

---

#### H.5 Prediction 5: Value Audits and Gap Reduction

**Prediction:** Organizations (e.g., municipal governments) randomly assigned to implement annual structured value audits will, over a 3–5 year period, (a) add more dimensions to their explicitly tracked objectives and (b) experience fewer “unexpected” adverse events (budget overruns, service delivery failures not anticipated by existing indicators) than control organizations.

**Variables:**
- Treatment: Random assignment to value‑audit protocol (structured review of objective dimensionality, emerging disturbance dimensions).
- Dependent 1: Change in number of independent tracked performance indicators.
- Dependent 2: Count of unanticipated adverse events (operationalized as events not predicted by existing indicators within the planning cycle).

**Data sources:** Municipal administrative data, own data collection via intervention.

**Test:** Randomized controlled trial with difference‑in‑differences specification for continuous outcomes and Poisson regression for count outcomes.

**Falsification:** No significant treatment effect on either outcome.

---

#### H.6 Prediction 6: Goodhart–Ashby Simulator Calibration

**Prediction:** In 3–5 well‑documented historical cases of metric‑fixation collapse, a calibrated version of the Appendix C value‑function collapse simulator will produce out‑of‑sample predictions of the collapse trajectory that outperform a naive extrapolation model (e.g., linear trend, ARIMA).

**Variables:**
- Simulator parameters: α (productivity of the tracked dimension from the excluded dimension), β (cost of optimizing the metric to the excluded dimension), γ (regeneration rate), η (delayed damage), estimated from pre‑collapse data.
- Dependent: Out‑of‑sample root mean squared error (RMSE) for the collapse trajectory.
- Baseline comparator: ARIMA or linear trend fit to pre‑collapse data, projected forward.

**Data sources:** Historical time‑series for metric and excluded dimension (e.g., waiting‑time targets and clinical outcomes in NHS hospitals; test scores and learning outcomes in education systems; fishery catch quotas and stock biomass).

**Test:** For each case, fit both models to pre‑collapse data, project the collapse period, compute RMSE. Compare using a simple sign test across cases (how many cases does the simulator outperform the baseline?).

**Falsification:** The simulator does not outperform the naive model in a majority of cases.

---

#### H.7 Prediction 7: Representation Chain Depth and Democratic Satisfaction

**Prediction:** Democracies with effective representation chains exceeding 2–3 layers will exhibit significantly lower citizen satisfaction with democracy and weaker preference‑policy congruence than those with shorter chains, controlling for economic performance.

**Variables:**
- Independent: Effective representation chain depth (federal/unitary × bicameral/unicameral × number of elected tiers).
- Dependent 1: Mean democratic satisfaction (ESS, CSES).
- Dependent 2: Preference‑policy congruence (estimated from CSES or replication of Gilens & Page methodology for non‑US cases).

**Data sources:** European Social Survey, Comparative Study of Electoral Systems, World Values Survey, institutional structure coding from V‑Dem or Comparative Political Data Set.

**Test:** Two‑group comparison: shallow‑chain (≤2 effective layers) vs. deep‑chain (≥3 layers) democracies. t‑test on mean satisfaction and congruence. Regression with democratic satisfaction as outcome, layer count as predictor (categorical: 1‑2 vs. 3+), and GDP per capita and electoral system type as controls. Test for a threshold effect at the 2‑3 layer boundary rather than a linear relationship.

**Falsification:** No significant difference in satisfaction or congruence between shallow‑ and deep‑chain groups, or deep‑chain systems show higher satisfaction.

---

#### H.8 Research Priority Ordering

Predictions are ordered by feasibility of near‑term testing:

- **Feasible now (secondary data analysis):** Predictions 1, 4, and 7 (cross‑sectional, using existing datasets and heuristic G estimation).
- **Feasible with moderate investment:** Predictions 2 and 3 (longitudinal data compilation and within‑case time‑series analysis).
- **Requires new data collection:** Predictions 5 and 6 (RCT for value audits; simulator calibration requiring detailed case‑specific parameters).

The framework’s empirical credibility will be built incrementally, starting with cross‑sectional tests that can be conducted using existing data and heuristic operationalizations, and progressing toward more demanding designs as initial results warrant.
