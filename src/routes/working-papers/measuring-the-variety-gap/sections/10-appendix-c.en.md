## Appendix C: Data Sources and Availability Matrix

This appendix provides a structured overview of the data sources that can be used to estimate the eight parameters of the Variety Gap framework, and an assessment of the availability and reliability of those sources across different categories of governance systems. It is designed to help analysts determine, before beginning an estimation exercise, which parameters can be estimated with reasonable confidence for a given system, which will require expert elicitation or proxy methods, and which are likely to be so data-constrained that only qualitative assessments are possible.

### C.1 Primary Data Sources by Parameter

Table C.1 maps each parameter to its primary international data sources, the coverage of those sources (in terms of the number of governance systems for which data is available), and an assessment of the reliability of the data for systems with different levels of statistical capacity.

| Parameter | Primary International Sources | Coverage | Reliability (High-capacity systems) | Reliability (Low-capacity systems) | Notes |
|-----------|------------------------------|----------|-------------------------------------|------------------------------------|-------|
| V_o (Observation Dimensionality) | World Bank Statistical Capacity Indicators; Open Data Barometer; Global Data Barometer; national statistical agency catalogues | 140+ countries (World Bank); 100+ (Open Data Barometer) | High | Low to Moderate | Indicator count is available for most systems; independence assessment requires statistical capacity that varies widely |
| V_e (Disturbance Dimensionality) | IMF Article IV reports; World Bank Systematic Country Diagnostics; national risk registries; crisis post-mortem databases | Limited — no standardised international database exists | Moderate (expert judgment required) | Low (significant undercounting likely) | No single source; estimation requires synthesis of multiple qualitative assessments |
| τ (Response Latency) | OECD Regulatory Policy Outlook; Comparative Agendas Project; national legislative databases | OECD members (38); limited coverage elsewhere | High | Low | Best data exists for OECD democracies; minimal standardised data for other systems |
| σ (Signal Fidelity) | WGI (Voice & Accountability, Government Effectiveness); V-Dem (media freedom, civil society, judicial independence); Freedom House; RSF Press Freedom Index; INTOSAI audit independence assessments | 190+ countries (WGI); 170+ (V-Dem); 190+ (Freedom House); 180+ (RSF) | High | Moderate (indices capture visible dimensions; Measurement Paradox may be active) | The most comprehensively covered parameter; however, indices may not capture invisible signal degradation |
| Immune Permeability | OECD Regulatory Policy Indicators; V-Dem (legislative constraints on executive); national legislative databases; academic policy evaluation literature | OECD (38); V-Dem (170+); academic coverage varies | Moderate | Low (reform implementation data is often absent or unreliable) | Estimation requires coding of reform outcomes, which is labour-intensive and requires domain expertise |
| Oscillation Amplitude | IMF International Financial Statistics; World Bank World Development Indicators; national accounts; policy rate histories | 190+ countries (IMF, World Bank) | High | High | The most reliably measurable parameter; long time series exist for most systems |
| Bypass Density | ILO informal economy estimates; satellite night-light data (NOAA/NASA); private security industry reports; cryptocurrency transaction volumes | 100+ countries (ILO); satellite data global; private security data limited | Moderate (satellite data is high quality; informal economy estimates are rough) | Low (informal economy is systematically under-measured; private security data is scarce) | Dark data proxies are more reliable than formal estimates for systems with large bypass sectors |
| Symbolic-to-Structural Ratio | Same as Immune Permeability | Same as Immune Permeability | Moderate | Low | Derived directly from the immune permeability estimation |

### C.2 Data Availability by Governance System Category

The quality and completeness of the available data varies systematically across categories of governance systems. Table C.2 provides a summary assessment of data availability for four broad categories, and guidance on which parameters can be estimated with reasonable confidence for each category.

| System Category | Examples | Parameters Reliably Estimable | Parameters Requiring Expert Elicitation or Proxy Methods | Parameters Likely to be Data-Constrained | Measurement Paradox Risk |
|-----------------|----------|------------------------------|-------------------------------------------------------|----------------------------------------|--------------------------|
| High-capacity OECD democracies | Canada, Sweden, Germany, Finland | τ, σ, Oscillation Amplitude, V_o (with PCA) | V_e, Immune Permeability, Symbolic-to-Structural Ratio, Bypass Density | None — all parameters can be estimated with at least moderate confidence | Low to Moderate (even high-transparency systems have blind spots) |
| Developing democracies | India, Brazil, South Africa | τ (partial), σ, Oscillation Amplitude | V_o, V_e, Immune Permeability, Symbolic-to-Structural Ratio, Bypass Density | Bypass Density (formal data underestimates informal sector) | Moderate (data quality varies across domains; political pressure on statistical agencies may exist) |
| Authoritarian systems | China, Russia, Saudi Arabia | Oscillation Amplitude (with caveats) | V_o, V_e, τ (partial), σ (upper bound only), Immune Permeability (upper bound only) | Bypass Density (suppressed), Symbolic-to-Structural Ratio (reform data is unreliable) | High to Very High (the Measurement Paradox is likely active; parameter estimates are systematically lower bounds) |
| Fragile or conflict-affected states | Nigeria, Somalia, Afghanistan | Oscillation Amplitude (limited) | All other parameters require extensive expert elicitation | Most parameters — formal data infrastructure is severely degraded or absent | Very High (the absence of data is itself a diagnostic signal) |

### C.3 Guidance for Data-Constrained Estimation

For governance systems where the Measurement Paradox is active or where data infrastructure is severely degraded, the estimation strategy should shift from primary measurement to triangulation across multiple imperfect sources. The following hierarchy of estimation approaches is recommended, in descending order of reliability:

1. **International organisation data with independent verification.** Where the World Bank, IMF, or UN agencies maintain data series for the governance system, and where those series can be cross-validated against independent sources (satellite data, academic research, civil society monitoring), the international data provides the most reliable starting point.

2. **Expert elicitation with structured uncertainty prompts.** Where formal data is absent, unreliable, or suspected of manipulation, structured expert elicitation—in which domain specialists are asked to provide parameter estimates with explicit confidence intervals—can generate estimates that are more reliable than any single available data source. The elicitation protocol should specify: the minimum number of independent experts; the procedure for aggregating their judgments; and the calibration exercises that allow experts' forecasting accuracy to be assessed over time.

3. **Dark data proxies.** For parameters that are systematically invisible to formal measurement—bypass density, immune permeability in authoritarian systems, V_e for emerging disturbance dimensions—dark data proxies should be used as supplements or substitutes. Satellite night-light divergence from official GDP, private security ratios, digital currency transaction volumes, and metric attrition rates provide signals that do not depend on the governance system's own statistical infrastructure.

4. **Comparative benchmarking.** Where direct estimation is impossible, the governance system's parameters can be bounded by comparison to peer systems—those with similar economic structures, political systems, or historical trajectories, for which data is more available. The benchmarking approach does not generate a point estimate but provides a plausible range, and it should be reported with explicit acknowledgment of the assumptions on which the comparison rests.

5. **Qualitative assessment only.** For some parameters in some systems, no quantitative estimate can be generated that would meet even minimal standards of reliability. In these cases, the parameter should be reported qualitatively—"severely degraded," "likely below the observability threshold," "direction of bias is toward underestimation"—rather than assigned a numerical value that would convey false precision. The qualitative assessment is itself a diagnostic output, and it should be reported alongside the quantitative estimates for the parameters that can be measured.

### C.4 Data Sources by Parameter: Detailed References

**V_o (Observation Dimensionality)**
- World Bank Statistical Capacity Indicators: https://datatopics.worldbank.org/statisticalcapacity/
- Open Data Barometer: https://opendatabarometer.org/
- Global Data Barometer: https://globaldatabarometer.org/
- National statistical agency websites (country-specific)

**V_e (Disturbance Dimensionality)**
- IMF Article IV consultation reports: https://www.imf.org/en/publications/areers
- World Bank Systematic Country Diagnostics: https://openknowledge.worldbank.org/
- National risk registries (country-specific)
- INFORM Risk Index: https://drmkc.jrc.ec.europa.eu/inform-index

**τ (Response Latency)**
- OECD Regulatory Policy Outlook: https://www.oecd.org/regreform/regulatory-policy/
- Comparative Agendas Project: https://www.comparativeagendas.net/
- National legislative databases (country-specific)

**σ (Signal Fidelity)**
- Worldwide Governance Indicators: https://www.worldbank.org/en/publication/worldwide-governance-indicators
- V-Dem Institute: https://v-dem.net/
- Freedom House: https://freedomhouse.org/
- Reporters Without Borders Press Freedom Index: https://rsf.org/en/index
- INTOSAI (audit independence): https://www.intosai.org/

**Immune Permeability and Symbolic-to-Structural Ratio**
- OECD Regulatory Policy Indicators: https://www.oecd.org/regreform/regulatory-policy/
- V-Dem (legislative constraints on executive): https://v-dem.net/
- Academic policy evaluation databases (e.g., Campbell Collaboration, 3ie Impact Evaluation Repository)

**Oscillation Amplitude**
- IMF International Financial Statistics: https://data.imf.org/ifs
- World Bank World Development Indicators: https://datatopics.worldbank.org/world-development-indicators/
- National accounts (country-specific)

**Bypass Density**
- ILO informal economy estimates: https://www.ilo.org/
- NOAA/VIIRS satellite night-light data: https://eogdata.mines.edu/products/vnl/
- Private security industry reports (e.g., Providence, G4S, Securitas annual reports)
- Cryptocurrency transaction volume data (e.g., Chainalysis, CoinMetrics)

### C.5 Data Limitations and the Measurement Paradox

The most significant data limitation is not the absence of specific data sources for specific parameters, but the structural degradation of data quality that accompanies the very governance failure the framework exists to diagnose. This is the Measurement Paradox, described fully in Section 4. Analysts applying this framework should conduct a Measurement Paradox assessment before beginning parameter estimation, using the following diagnostic questions:

1. **Metric attrition:** Has the governance system removed, redefined, or restricted access to any of its publicly reported performance metrics in the past five years? If so, which dimensions did the removed metrics cover, and what was the political context of their removal?

2. **Proxy divergence:** Do different data sources for the same parameter point in different directions—for example, do international transparency indices suggest openness while dark data proxies suggest signal degradation?

3. **Statistical agency independence:** Is the governance system's national statistical agency legally and practically independent of political pressure? Have there been documented instances of political interference in data collection, methodology, or publication?

4. **Civil society monitoring capacity:** Do independent civil society organisations, academic institutions, or media outlets in the governance system produce governance data that can be cross-validated against official sources? Are those organisations able to operate without harassment or restriction?

If the answer to question 1 is yes, or if the answers to questions 2–4 indicate significant constraints on independent data production, the Measurement Paradox is likely active. All parameter estimates should be treated as lower bounds on the true severity of the governance failure, and the uncertainty bands on the composite Variety Gap Index should be widened accordingly. The analyst should also report the leading indicators described in Section 6.5—metric attrition rate, proxy divergence rate, and reform success trajectory—as supplementary diagnostic information that does not depend on the content of the potentially degraded data.

The Measurement Paradox cannot be resolved by better data within the current measurement framework. It is a structural feature of the phenomenon being measured. The framework's most honest response is to name it, to specify the direction of the resulting bias, and to provide partial remedies—the censorship-as-signal approach, the proxy divergence diagnostic, the explicit reporting of lower-bound estimates—that allow the analyst to work within the paradox rather than pretending it does not exist. The paradox is not a limitation of the framework. It is a fact about the world, and the framework is more useful for acknowledging it than for ignoring it.
