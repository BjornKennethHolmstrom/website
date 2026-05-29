## 3. The Eight Parameters

The eight structural primitives identified across the series—observation channel degradation, variety mismatch, frequency mismatch, feedback failure, immune system activity, oscillation dynamics, bypass architecture proliferation, and performative adaptation—are the recurring architectural features of governance failure. Translating them into measurable parameters requires, for each primitive, a primary proxy that captures its essential character, an assessment of the uncertainty involved in that proxy, and an identification of the data sources through which it can be estimated. This section provides that translation.

The parameters described below are not the primitives themselves. They are observable correlates—indicators that covary with the underlying architectural properties in ways that can be estimated from publicly available data, expert surveys, or institutional analysis. The relationship between proxy and primitive is probabilistic, not deterministic. A governance system with a high estimated immune permeability does not necessarily have a weak immune system in every domain; it has characteristics that, across the cases examined in the series, are associated with weaker immune systems. The confidence intervals attached to each parameter reflect the strength of that association and the quality of the available data.

The parameters are presented in order of their position in the foundational hierarchy developed in Section 5. The epistemic parameters—those that determine what the system can perceive—come first, because a failure at this level renders all subsequent parameters unreliable. The response parameters follow. The emergent parameters, which arise from the interaction of the first two tiers, come last.

---

### 3.1 Observation Channel Degradation → Effective Dimensionality of the Observation Architecture (V_o)

**Primary proxy.** The number of statistically independent metrics that the governance system tracks with sufficient frequency and analytical capacity to inform decision-making. Independence is assessed through principal component analysis of the system's published indicator sets where comprehensive time-series data is available. Where it is not, independence is estimated through expert coding of the conceptual overlap between indicators—whether, for example, a central bank's inflation expectations survey and its wage growth tracker are measuring distinct phenomena or capturing different expressions of the same underlying variable.

**Data sources.** Official statistical publications; central bank, ministry, and agency indicator catalogues; public data portals; institutional documentation of performance measurement frameworks.

**Uncertainty.** Moderate to high. Indicator sets are published for public consumption and may not reflect the full range of data available to internal decision-makers. Conversely, the publication of a metric does not guarantee that it is used in decision-making. The gap between the published indicator set and the effective observation channel is itself a dimension of the Variety Gap, and estimating it requires institutional knowledge that is often unavailable to external analysts. For systems where indicator publication is irregular, politically sensitive, or suspected of selective suppression, the confidence interval is wide and the estimate should be treated as an upper bound on actual observational capacity—the system's true V_o is likely lower than its published metrics suggest.

---

### 3.2 Variety Mismatch → Effective Dimensionality of the Disturbance Environment (V_e)

**Primary proxy.** The number of independent disturbance dimensions identified in the system's institutional crisis post-mortems, parliamentary inquiries, and strategic risk assessments over a defined historical period (typically ten to twenty years, adjusted for data availability). A disturbance dimension is counted as independent if it is described as a distinct causal factor in the system's own retrospective analyses, and if it is not reducible to other dimensions already identified.

**Data sources.** Official post-crisis inquiry reports; national risk registries; central bank financial stability reports; strategic foresight documents; academic analyses of crisis episodes.

**Uncertainty.** Very high. The proxy can only identify dimensions that have already caused crises. Dimensions that are accumulating but have not yet crossed the observability threshold—the slow build-up of ecological debt, the gradual erosion of institutional trust, the emerging misalignment between AI capabilities and governance capacity—are invisible to this method by construction. The estimate is therefore a lower bound, and the confidence interval is wide, particularly for systems operating in rapidly changing technological, ecological, or geopolitical environments. The true V_e is likely larger than the proxy suggests, and the gap between the proxy and the truth is itself an indicator of the system's exposure to novel disturbances.

---

### 3.3 Frequency Mismatch → Characteristic Response Latency (τ)

**Primary proxy.** The mean time, measured in months, between the first documented emergence of a problem in the policy domain (through expert warnings, institutional reports, or early-warning indicators) and the implementation of a substantive policy response (legislation enacted, regulation promulgated, budget allocated, institutional mandate revised). The mean is taken across a sample of significant policy episodes over the preceding decade. Where a response never materialises, the episode is recorded as censored and the latency is treated as exceeding the observation window.

**Data sources.** Legislative and regulatory databases; policy chronologies; comparative public administration datasets; expert surveys of policy practitioners.

**Uncertainty.** Low to moderate. Problem emergence dates and policy implementation dates are publicly observable for most governance systems, though the definition of "substantive response" requires coding judgments that may vary across analysts. The primary challenge is selecting a representative sample of policy episodes rather than measuring the latency of individual episodes. Systems with few documented policy responses—because problems are systematically ignored—present a censored-data problem that inflates uncertainty.

---

### 3.4 Feedback Failure → Signal Fidelity (σ)

**Primary proxy.** A composite of four sub-indicators: (i) the transparency of government data publication practices, as measured by international indices of open data and statistical capacity; (ii) the legal and practical protection of whistleblowers and independent auditors, as measured by civil society assessments and legislative analysis; (iii) media freedom scores, capturing the ability of independent actors to surface information that the state's own observation channels may suppress; and (iv) the independence of supreme audit institutions, as measured by their statutory authority, budgetary autonomy, and the rate at which their recommendations are implemented.

**Data sources.** Open Data Barometer; Global Data Barometer; World Bank Statistical Capacity Indicators; Freedom House media freedom scores; Reporters Without Borders Press Freedom Index; International Organisation of Supreme Audit Institutions (INTOSAI) assessments; national legislative databases on whistleblower protection.

**Uncertainty.** Moderate. Each sub-indicator captures a visible dimension of signal fidelity. None captures the invisible dimensions—the self-censorship of civil servants who have learned not to report unwelcome information, the informal pressure on auditors whose findings threaten powerful interests, the corruption of the signal at the source before it enters any measurable channel. For systems where the Measurement Paradox is active (Section 4), the composite score should be treated as an upper bound on true signal fidelity.

---

### 3.5 Immune System Activity → Immune Permeability (1 − probability of symbolic adaptation)

**Primary proxy.** The ratio of structurally implemented reforms to announced reforms over a defined observation period (typically five to ten years). A reform is coded as structurally implemented if it meets three criteria: the legal or regulatory instrument was enacted; the implementing institution received allocated resources; and an independent evaluation conducted at least two years after enactment confirmed that the reform produced measurable changes in institutional behaviour or outcomes. Announcements that meet none of these criteria are coded as symbolic. The immune permeability parameter is the proportion of announced reforms that achieve structural implementation.

**Data sources.** Legislative and regulatory databases; budget allocations linked to reform programmes; independent policy evaluations from supreme audit institutions, academic researchers, and civil society organisations.

**Uncertainty.** Moderate to high. Coding reform outcomes requires qualitative judgment, and the distinction between symbolic and structural implementation exists on a continuum. The Measurement Paradox is particularly acute here: systems with highly effective immune systems may produce sophisticated performances of reform that are difficult to distinguish from genuine structural change without detailed institutional knowledge. The "censorship as signal" approach (Section 4) provides a supplementary proxy: the rate at which the governance system removes, redefines, or restricts access to its own performance metrics over time is itself a measure of immune system activity that does not depend on the content of the remaining data.

---

### 3.6 Oscillation Dynamics → Cycle Amplitude and Frequency

**Primary proxy.** The coefficient of variation (standard deviation divided by mean) of a relevant governance outcome variable over a defined period, combined with an autocorrelation analysis that identifies the dominant period of oscillation. The outcome variable is selected based on the governance domain: GDP growth volatility for macroeconomic governance, policy reversal frequency for regulatory governance, institutional trust volatility for democratic governance.

**Data sources.** National accounts; regulatory databases; public opinion time series; institutional trust surveys.

**Uncertainty.** Low. Oscillation dynamics are directly measurable from publicly available time-series data for most governance systems. The primary challenge is distinguishing endogenous oscillation (generated by the governance architecture's own response dynamics) from exogenous volatility (generated by external shocks), which requires domain-specific causal analysis.

---

### 3.7 Bypass Architecture Proliferation → Bypass Density

**Primary proxy.** A composite of three sub-indicators: (i) the scale of informal or parallel governance institutions relative to formal ones, estimated through the ratio of private security personnel to public police officers, the proportion of economic activity occurring outside the formal tax and regulatory system, or the market share of informal dispute resolution mechanisms relative to formal courts; (ii) the divergence between satellite-based measures of economic activity (night-light luminosity) and official GDP statistics, which indicates economic activity that the formal observation architecture does not capture; (iii) the volume of informal digital currency transactions relative to formal banking flows, indicating bypass financial infrastructure.

These "dark data" proxies do not measure bypass density directly. They measure phenomena that are correlated with bypass density, and their divergence from formal indicators is itself a signal that the formal observation architecture is losing contact with the system it governs.

**Data sources.** Satellite night-light data (NOAA, NASA); official GDP statistics; labour force surveys; International Labour Organization informal economy estimates; cryptocurrency transaction volumes; private security industry reports; national police staffing data.

**Uncertainty.** High. Bypass architectures exist because they are invisible to formal measurement. The proxies capture phenomena at the boundary between the formal and the informal, but the true scale and scope of bypass activity is systematically underestimated by any measurement approach that relies on data generated by the formal system being bypassed.

---

### 3.8 Performative Adaptation Rate → Symbolic-to-Structural Reform Ratio

**Primary proxy.** The proportion of reform announcements, over a defined observation period, that meet the structural implementation criteria defined in Section 3.5. This parameter is a direct complement to the immune permeability parameter: high immune permeability implies a low structural implementation ratio. It is reported separately because it captures a distinct dimension of governance behaviour—the institution's propensity to produce reform-shaped outputs that relieve external pressure without producing internal transformation.

**Data sources.** Same as Section 3.5.

**Uncertainty.** Moderate. The same coding challenges apply as for immune permeability, with the additional complexity that performative adaptation is often designed to be indistinguishable from genuine reform by external observers. The Measurement Paradox applies with full force: systems that are most adept at performative adaptation are also most adept at making that adaptation invisible to measurement.

---

### Summary Table

| Primitive | Parameter | Primary Proxy | Uncertainty | Tier |
|-----------|-----------|---------------|-------------|------|
| Observation Channel Degradation | V_o | Statistically independent metrics tracked | Moderate–High | 1 (Epistemic) |
| Variety Mismatch | V_e | Independent disturbance dimensions in post-mortems | Very High | 1 (Epistemic) |
| Frequency Mismatch | τ | Mean problem-to-policy latency | Low–Moderate | 2 (Response) |
| Feedback Failure | σ | Composite: transparency, whistleblower protection, media freedom, audit independence | Moderate | 1 (Epistemic) |
| Immune System Activity | 1 − immune permeability | Ratio of structurally implemented to announced reforms | Moderate–High | 2 (Response) |
| Oscillation Dynamics | Cycle amplitude/frequency | Coefficient of variation + autocorrelation of governance outcomes | Low | 3 (Emergent) |
| Bypass Proliferation | Bypass density | Dark data proxies: informal economy, satellite divergence, crypto flows | High | 3 (Emergent) |
| Performative Adaptation | Symbolic-to-structural ratio | Proportion of reform announcements achieving structural implementation | Moderate | 3 (Emergent) |

*Note: The symbolic-to-structural ratio (ρ = 1 − p) is the definitional complement of immune permeability and is not an independent input to the composite index G. It is included in this table as a named diagnostic because it characterises the pattern of institutional behaviour producing the immune permeability score, and because it warrants separate reporting alongside G. Its mathematical contribution to G is absorbed into the immune permeability term with a combined tier-weighted exponent; see Appendix D.4.*

The parameters are not a measurement instrument that can be applied mechanically. They are a structured framework for estimation—a systematic way of asking the same diagnostic questions across different governance systems, with explicit attention to what can and cannot be known from the available data. The Measurement Paradox, to which the paper now turns, identifies the deepest challenge that any such framework must confront.
