# Appendix C — Empirical Coding Notes for Legitimacy Estimation

This appendix provides a protocol for estimating the legitimacy parameters L_B (actuation‑legitimacy) and L_C (observation‑legitimacy) from real‑world governance data. It follows the measurement philosophy of Paper VIII (transparent proxies, explicit uncertainty, the Measurement Paradox) and the case‑coding template established in Appendix C of Paper XII. The estimates produced by this protocol are heuristic. They are offered as structured judgments that operationalise the formal framework, not as precise measurements. The protocol is designed to be applied to the empirical illustrations of Part V and to serve as a template for the systematic empirical programme that follows the series.

## C.1 General Coding Protocol

For a given jurisdiction, time period, and governance domain, estimate L_B and L_C following a four‑step procedure, with explicit uncertainty judgments at each step.

**Step 1 — Define the controller and domain.** Identify the specific governance institution whose legitimacy is being assessed, and the specific function or domain (tax collection, regulatory enforcement, statistical reporting, public health compliance). A single political entity may have different L values for different institutions and domains. The estimate is institution‑ and domain‑specific.

**Step 2 — Assemble compliance and reporting integrity indicators.** Gather available quantitative and qualitative indicators that proxy for the willingness of the governed to comply with directives (L_B) and to report honestly (L_C). Sources include administrative data, independent surveys, audit reports, and cross‑validation against independent benchmarks. For each indicator, assess its coverage, reliability, and vulnerability to manipulation.

**Step 3 — Map indicators to the [0,1] legitimacy scale.** Each indicator is normalised to a [0,1] scale, where 1 represents the highest plausible compliance or reporting integrity in a contemporary governance context, and 0 represents complete non‑compliance or systematic fabrication. Normalisation is based on empirical benchmarks: the best‑performing governance systems for a given indicator define the upper anchor; complete state failure defines the lower anchor. Where benchmarks are unavailable, expert judgment provides the mapping, with the basis stated.

**Step 4 — Estimate L and uncertainty band.** Synthesise the normalised indicators into a point estimate of L_B and L_C (and, if desired, a composite L). The point estimate is the analyst’s best judgment; the uncertainty range reflects the spread across indicators, the known limitations of each, and the analyst’s confidence in the mapping. The range is reported as [lower bound, upper bound].

Where the Measurement Paradox is active—where the governance system has incentives and capacity to manipulate the very indicators being used—all estimates are treated as upper bounds on true legitimacy. The true L is likely lower than the indicator‑based estimate, and the gap is itself a diagnostic signal.

## C.2 Operationalising Actuation‑Legitimacy (L_B)

Actuation‑legitimacy is the probability that a directive issued by the controller is implemented by the governed population. It is operationalised through compliance rates in domains where the controller exercises formal authority.

**Primary indicators.**
- **Tax compliance gap:** the ratio of actual tax revenue collected to the estimated potential revenue under full compliance, as estimated by the tax authority or independent researchers. A compliance gap of 10% corresponds to L_B ≈ 0.9 for the tax domain. Sources: national revenue authorities, IMF Article IV reports, Tax Justice Network estimates.
- **Regulatory compliance rates:** the proportion of regulated entities (firms, facilities, individuals) found to be in compliance during routine inspections, weighted by the economic significance of the entity. Requires adjustment for inspection intensity: low compliance may reflect either genuine non‑compliance or an under‑resourced regulator. Sources: national regulatory agencies, World Bank Doing Business indicators, sector‑specific regulatory databases.
- **Judicial compliance rates:** the proportion of court orders (fines, injunctions, sentences) that are actually enforced, as measured by payment rates, implementation of injunctions, and incarceration rates relative to sentencing. Sources: national judicial statistics, Council of Europe CEPEJ reports, academic studies.
- **Vaccination and public health compliance:** uptake rates for mandatory or recommended public health measures, adjusted for accessibility barriers (to isolate willingness from capacity). Sources: WHO/UNICEF immunisation coverage data, national health survey data.
- **Conscription and civic duty compliance:** rates of compliance with compulsory military service, jury duty, or census response. Sources: national defence ministries, court administrative offices, national statistical agencies.

**Normalisation anchors.** The upper anchor (L_B ≈ 1) is set by the best‑observed compliance rates in high‑trust governance systems: tax compliance gaps below 5%, regulatory compliance above 95%, near‑universal vaccination uptake. The lower anchor (L_B ≈ 0) corresponds to systemic non‑compliance across multiple domains, as observed in collapsed or contested states.

**Uncertainty.** Compliance rates are subject to measurement error (under‑detection of non‑compliance), strategic manipulation (inspectors who do not inspect, or who collude with the inspected), and domain‑specificity (compliance with tax may differ from compliance with environmental regulation). Where independent verification is absent—e.g. where no tax gap analysis exists, or where regulatory inspection data is not publicly available—the uncertainty range is wide and the estimate is explicitly flagged as data‑limited.

**Illustrative estimate for Part V cases.** For the Nordic high‑trust equilibrium, tax compliance gaps estimated at 2–5% yield L_B ≈ 0.95–0.98. For Greece during the sovereign debt crisis, tax compliance collapsed; estimates of the informal economy at 25–30% of GDP, combined with widespread tax evasion documented in creditor reports, yield L_B ≈ 0.60–0.75 in the tax domain. For China’s calibration deficit, L_B for centrally monitored targets is high (compliance with growth targets, infrastructure mandates is near‑universal among local officials), but L_B for domains where local compliance is at cross‑purposes with central directives (e.g. environmental enforcement) is substantially lower.

## C.3 Operationalising Observation‑Legitimacy (L_C)

Observation‑legitimacy is the probability that information reported to the controller by the governed (citizens, firms, local officials) accurately reflects the true state. It is operationalised through the divergence between official data and independent benchmarks, the integrity of statistical processes, and the prevalence of strategic misreporting.

**Primary indicators.**
- **Official‑to‑independent data divergence:** the normalised root‑mean‑square discrepancy between official statistics and independent estimates for variables where both exist. For economic output, compare official GDP to satellite‑night‑light luminosity estimates or electricity consumption data. For population, compare census data to independent demographic surveys. For environmental quality, compare official emissions reports to satellite atmospheric measurements. The divergence is scaled so that zero divergence corresponds to L_C ≈ 1 (reporting is consistent with independent observation) and large, systematic divergence corresponds to L_C → 0. Sources: official statistical publications; satellite data (NOAA night‑lights, ESA Sentinel missions for air quality); independent survey programmes (Living Standards Measurement Surveys, Demographic and Health Surveys, Afrobarometer, Eurobarometer); academic reconstruction studies.
- **Statistical process integrity:** indicators of the institutional independence of the national statistical system, including legal protections for the chief statistician, budgetary autonomy, statutory requirements for data publication, and the absence of documented political interference. Sources: World Bank Statistical Capacity Indicators; Open Data Inventory (ODIN); INTOSAI audit reports; country‑specific assessments by the OECD, Eurostat, or the IMF’s Data Quality Assessment Framework.
- **Whistleblower activity and audit discrepancy rates:** the volume and nature of whistleblower reports alleging data manipulation or suppression, and the rate at which internal or external audits detect discrepancies between reported and actual administrative data. Sources: national whistleblower protection agencies; supreme audit institution reports; parliamentary inquiry findings; investigative journalism.
- **Survey response integrity:** the extent of item non‑response, satisficing (e.g. straight‑lining), and socially desirable responding in government‑administered surveys, as assessed by survey methodologists. High rates of evasive or strategic responding indicate low L_C. Sources: national statistics agency methodological reports; academic survey methodology studies.
- **Media freedom and epistemic diversity:** the extent to which independent media and civil society organisations can publish information that contradicts official claims without sanction. While not a direct measure of reporting integrity, a free epistemic environment makes systematic misreporting harder to sustain (Paper X). Sources: Reporters Without Borders Press Freedom Index; Freedom House media freedom scores; V‑Dem indicators on freedom of expression and alternative sources of information.

**Normalisation anchors.** The upper anchor (L_C ≈ 1) corresponds to statistical systems with constitutional independence, near‑zero systematic divergence between official and independent data, low rates of audit discrepancy, and a free epistemic environment. The Nordic statistical agencies are the benchmark. The lower anchor (L_C ≈ 0) corresponds to systems where official data is systematically fabricated or where honest reporting is actively punished—the legibility deficit of the Russia country study, or the statistical manipulation documented in the Greek case.

**Uncertainty.** All indicators of L_C are subject to the Measurement Paradox. A system with low L_C has, by definition, degraded the very observation channels that would reveal the degradation. Independent benchmarks (satellite data, independent surveys) partially circumvent this, but they are available only for a subset of variables and are themselves subject to measurement error. The divergence between official and independent data is a lower bound on the true divergence, because independent observation channels may also be suppressed. Estimates of L_C for systems with suspected high‑suppression architectures should be treated with particular caution, and the uncertainty range should be wide.

**Illustrative estimate for Part V cases.** For the Nordic systems, statistical independence is constitutionally protected, official‑to‑independent data divergence is minimal, and survey response integrity is high, yielding L_C ≈ 0.95–0.98. For China, the calibration deficit implies a substantial gap between L_C for centrally monitored variables (moderate, because the centre audits and cross‑checks) and L_C for politically sensitive or locally reported variables (low, because local officials face strong incentives to misreport). Based on documented discrepancies in GDP sub‑components, environmental data, and pandemic reporting, L_C for sensitive dimensions is estimated at 0.40–0.65. For Greece pre‑2009, L_C for fiscal statistics was catastrophically low: the revealed fiscal data manipulation implies that the reported deficit and debt figures were substantially fabricated, yielding L_C ≈ 0.20–0.40 for the fiscal domain during the pre‑crisis period.

## C.4 Composite L Estimation

The composite legitimacy parameter L used in the formal analysis of Part II combines L_B and L_C. When domain‑specific estimates are available, L is reported separately for each domain. When a system‑level summary is required, L is computed as the geometric mean of domain‑level L estimates, weighted by the governance significance of the domain:

\[
L_{\text{composite}} = \exp\!\Bigl( \sum_{d} w_d \ln L_d \Bigr),
\]

where \(L_d\) is the geometric mean of L_B and L_C for domain \(d\), and \(w_d\) are domain weights summing to unity. The geometric mean reflects the multiplicative structure of the legitimacy effect: if either L_B or L_C is near zero for a critical domain, the effective governance capacity in that domain collapses regardless of the other parameter’s value.

**Illustrative composite estimates for Part V cases (broad‑brush, for diagnostic illustration only).**

| Case | Domain | L_B (est.) | L_C (est.) | Composite L (est.) | Range |
|------|--------|------------|------------|---------------------|-------|
| Nordic high‑trust equilibrium | Multi‑domain | 0.96 | 0.96 | 0.96 | 0.92–0.99 |
| Greece (sovereign debt crisis) | Fiscal | 0.65 | 0.30 | 0.44 | 0.30–0.65 |
| South Africa (post‑TRC) | Multi‑domain | 0.55 | 0.60 | 0.57 | 0.40–0.70 |
| China (calibration deficit) | Sensitive dimensions | 0.70 | 0.50 | 0.59 | 0.40–0.75 |
| Municipal infrastructure (illustrative) | Local service delivery | 0.60 | 0.55 | 0.57 | 0.40–0.75 |

These estimates are heuristic. They are based on the qualitative pattern‑matching of Part V, informed by published empirical literature, and normalised against the anchors described above. They are not derived from a systematic application of the full protocol—which would require access to granular administrative data and independent benchmarks not assembled for this appendix. They are offered to demonstrate that L can be meaningfully located for real governance systems and that the resulting locations are diagnostically informative.

## C.5 Data Sources and Further Work

The protocol draws on existing, publicly available data sources to the extent possible. The primary sources for systematic L estimation across a representative sample of governance systems include:

- **Tax compliance:** IMF Article IV reports; Tax Administration Diagnostic Assessment Tool (TADAT) assessments; national revenue authority annual reports; academic tax gap studies.
- **Regulatory compliance:** national regulatory agency annual reports; World Bank Enterprise Surveys; sector‑specific compliance databases where available.
- **Official‑to‑independent data divergence:** satellite night‑light luminosity data (NOAA, NASA); Sentinel‑5P atmospheric composition data; Living Standards Measurement Surveys (LSMS); Demographic and Health Surveys (DHS); Afrobarometer, Eurobarometer, and Latinobarómetro survey programmes.
- **Statistical process integrity:** World Bank Statistical Capacity Indicators; Open Data Inventory (ODIN); International Organisation of Supreme Audit Institutions (INTOSAI) audit reports; OECD and Eurostat peer reviews.
- **Media and epistemic freedom:** Reporters Without Borders World Press Freedom Index; Freedom House Freedom in the World and Freedom of the Press reports; V‑Dem Institute indicators.

The systematic empirical programme that follows Paper XIII—applying this protocol to a representative sample of jurisdictions and testing whether estimated L predicts governance outcomes as the framework predicts—is the next step in the series’ empirical trajectory. This appendix provides the template for that work.
