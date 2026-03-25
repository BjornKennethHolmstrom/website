# Global Subsidiarity Index Framework v5
## A measurement protocol for governance architecture in complex societies
### Technical Annex A to the European Subsidiarity Protocol

---

## Preface: On the nature of this framework

The Global Subsidiarity Index is a measurement protocol — a standardized way of observing, diagnosing, and discussing governance architecture across diverse contexts. It is not a certification scheme or a ranking system. Protocols enable coordination without centralization. TCP/IP does not govern the internet; it makes the internet possible. The GSI aims to do the same for governance diagnostics: create a shared language and measurement standard that empowers local actors, enables comparative learning, and reveals architectural patterns — without requiring a central authority to certify or enforce.

The paradox — that any global index measuring overcentralization is itself a centralizing act — is not eliminated by this framing. But it is transformed. A protocol is not a lever; it is a mirror. Its legitimacy comes from use, not from institutional endorsement.

**Key changes in v5:**
1. Additive CAF formula replacing the multiplicative model (eliminates single-component collapse vulnerability)
2. EU-specific adaptation guidance (EU-CAF variant with Eurostat-sourced components)
3. Domain calibration phasing for Subsidiarity Drag
4. Reference implementation designation for policy-relevant use
5. Selection bias methodology for voluntary data registries
6. Comply-or-explain integration for routing recommendations

---

## 1. Theoretical foundation

### 1.1 Cybernetic basis: Ashby's Law operationalized

Only variety can absorb variety. To regulate a system effectively, the regulator must possess at least as many internal states as the system it attempts to regulate.

The GSI measures the ratio between societal variety (complexity, diversity, dynamism of the governed population) and governance variety (flexibility, adaptability, differentiation of the governing system).

### 1.2 Three universal governance pathologies

1. **Decision Distance:** Administrative layers between problem and decision-maker.
2. **Knowledge Exclusion:** Whose knowledge counts in policy design.
3. **Resilience Deficits:** Single points of failure in critical systems.

### 1.3 Protocol, not index

The shift from "index" to "protocol" is substantive. An index implies a single institution measuring and ranking. A protocol implies a standard that anyone can implement. The GSI is a protocol first. Any stewardship body that emerges would maintain the standard and curate the pattern library — not certify or enforce.

---

## 2. The GSI protocol: Four dimensions, sixteen indicators

### Dimension 1: Decision Proximity
*How close are decisions to those affected?*

| Indicator | Measurement | Scale (0–10) | Data Sources |
|-----------|-------------|--------------|--------------|
| 1.1 Administrative Distance | Average layers between citizen and decision-maker across 5 domains | 0 (Household) – 10 (Supranational) | Gov. org charts, policy tracing |
| 1.2 Fiscal Sovereignty | % of local budget controlled locally vs. mandated from above | 0 (0% control) – 10 (100% control) | Budget analyses, grant tracking |
| 1.3 Regulatory Autonomy | Ability to adapt national/supranational rules to local conditions | 0 (No adaptation) – 10 (Full adaptation) | Legal analysis, opt-out provisions |
| 1.4 Emergency Response Latitude | Local authority during crises | 0 (Centrally directed) – 10 (Locally determined) | Emergency protocols, crisis case studies |

### Dimension 2: Knowledge Inclusion
*Whose intelligence informs decisions?*

| Indicator | Measurement | Scale (0–10) | Data Sources |
|-----------|-------------|--------------|--------------|
| 2.1 Expert vs. Experiential Balance | % policy inputs from experts vs. citizens with lived experience | 0 (All expert) – 10 (Balanced) | Public committee records, parliamentary transcripts |
| 2.2 Participatory Mechanism Quality | Quality of citizen involvement in decision-making | 0 (Token) – 10 (Co-design) | Municipal records, participation demographics |
| 2.3 Traditional & Local Knowledge Integration | Recognition of regional and traditional knowledge | 0 (Ignored) – 10 (Formally integrated) | Land management agreements, practice inventories |
| 2.4 Feedback Loop Efficiency | Time from problem identification to policy adjustment | 0 (Years) – 10 (Days/Weeks) | Ombudsman reports, policy revision logs |

### Dimension 3: Resilience Architecture
*How systems handle disruption and diversity.*

| Indicator | Measurement | Scale (0–10) | Data Sources |
|-----------|-------------|--------------|--------------|
| 3.1 Critical System Redundancy | Backup mechanisms in key systems | 0 (Single point) – 10 (Fully distributed) | Infrastructure audits, system mappings |
| 3.2 Adaptive Capacity | Speed of institutional response to shocks | 0 (Rigid) – 10 (Agile) | Crisis response data, innovation indices |
| 3.3 Diversity Resilience | Handling of cultural/regional differences | 0 (Homogenizing) – 10 (Inclusive) | Policy impact assessments, diversity metrics |
| 3.4 Long-term Sustainability | Balance of short vs. long-term planning | 0 (Reactive) – 10 (Foresightful) | Planning documents, scenario exercises |

### Dimension 4: Cohesion & Integration
*How distributed systems maintain unity without fragmentation.*

| Indicator | Measurement | Scale (0–10) | Data Sources |
|-----------|-------------|--------------|--------------|
| 4.1 Inter-Level Coordination | Effectiveness of protocols linking local to national to supranational | 0 (Silos) – 10 (Seamless) | Coordination agreements, joint exercises |
| 4.2 Shared Value Alignment | Degree of common principles across levels | 0 (Conflicting) – 10 (Harmonized) | Value surveys, constitutional analyses |
| 4.3 Conflict Resolution Mechanisms | Speed and fairness of inter-level dispute resolution | 0 (Adversarial) – 10 (Collaborative) | Dispute logs, resolution outcomes |
| 4.4 Solidarity Metrics | Resource sharing between regions | 0 (Zero-sum) – 10 (Mutual support) | Transfer payments, solidarity funds |

---

## 3. The Complexity Adjustment Factor (CAF)

### 3.1 Problem addressed

Small, homogeneous jurisdictions naturally have lower "optimal" decision distance than large, diverse ones. Raw GSI scores are not directly comparable without contextual adjustment.

### 3.2 CAF v5.0: Additive model with capacity divisor

**Formula:** `CAF = (w₁G + w₂E + w₃D + w₄T) / C`

**Design rationale (change from v4):** The v4 multiplicative model (G × E × D × T ÷ C) suffered from single-component collapse: a near-zero score on any factor would collapse the entire complexity assessment regardless of other components. A region with high geographic and ethnolinguistic diversity but a low threat environment would incorrectly register as low-complexity. The v5 additive numerator eliminates this vulnerability while preserving the divisor structure (high institutional capacity reduces effective complexity demand).

### 3.3 Component definitions

**G = Geographic Diversity Score (0–10)**

`G = min(10, (Cz × 0.4) + (Tt × 0.3) + (Er × 0.3))`

Where:
- **Cz** = Climate zones count (Köppen classification major types), normalized: 1–5 zones → 0–10
- **Tt** = Terrain types (mountains, plains, coasts, etc.), normalized: 1–6 types → 0–10
- **Er** = Ecological regions (WWF ecoregions per 100k km²), normalized to 0–10

*Example:* Canada: Cz=5 → 10; Tt=6 → 10; Er=15/100k km² → 9.2; G = (10×0.4)+(10×0.3)+(9.2×0.3) = **9.76**

**E = Ethnolinguistic Diversity Score (0–10)**

`E = min(10, (EL × 0.6) + (EF × 0.4))`

Where:
- **EL** = Effective number of language groups (1/Σp²), normalized: 1–20 groups → 0–10
- **EF** = Ethnic fractionalization index (standard Alesina et al. measure), 0–1 scale × 10

*Example:* India: EL=15.2 → 7.6; EF=0.81 → 8.1; E = (7.6×0.6)+(8.1×0.4) = **7.8**

**D = Development Disparity Score (0–10)**

`D = min(10, (Gini × 0.4) + (RGV × 0.4) + (UR × 0.2)) × 10`

Where:
- **Gini** = Gini coefficient (0–1)
- **RGV** = Regional GDP variance (coefficient of variation across subnational units), normalized 0–1
- **UR** = Urban-rural divide (ratio of urban to rural service access), normalized 0–1

**T = Threat Environment Score (0–10)**

`T = min(10, (CV × 0.4) + (BC × 0.4) + (DF × 0.2))`

Where:
- **CV** = Climate vulnerability (ND-GAIN vulnerability score), normalized 0–10
- **BC** = Border conflict risk (expert-coded: 0 = no disputes, 10 = active armed conflict)
- **DF** = Disaster frequency (EM-DAT events per year per million population), normalized 0–10

**C = Central Capacity Score (1–10)**

`C = max(1, (GI × 0.5) + (CPI × 0.3) + (TI × 0.2))`

Where:
- **GI** = Government effectiveness (World Bank WGI), normalized 0–10
- **CPI** = Corruption Perceptions Index (Transparency International), normalized 0–10
- **TI** = Technology infrastructure index (ITU development index), normalized 0–10

Floor of 1 prevents division-by-zero and avoids over-penalizing low-capacity jurisdictions.

### 3.4 Default weights

`w₁ = 0.30, w₂ = 0.30, w₃ = 0.25, w₄ = 0.15`

Weights are adjustable per context. Any deviation from defaults must be published with justification and sensitivity analysis showing how results change under default weights.

### 3.5 CAF application and typical ranges

**Typical ranges:**
- Low-complexity jurisdictions (Singapore, Luxembourg): CAF ≈ 0.3–1.5
- Medium-complexity (Sweden, Switzerland, Netherlands): CAF ≈ 2.0–4.0
- High-complexity (India, Brazil, Spain, Italy): CAF ≈ 4.0–8.0

For each indicator, the CAF generates contextual target ranges rather than universal benchmarks.

### 3.6 EU-specific adaptation (EU-CAF)

For EU deployment, component data sources map to European equivalents:

| Component | Global Source | EU-Specific Source |
|-----------|-------------|-------------------|
| G (Geographic) | WWF, Köppen | EEA, Copernicus |
| E (Ethnolinguistic) | Alesina et al. | Eurostat population statistics, regional census |
| D (Development) | World Bank | Eurostat regional GDP, EU-SILC |
| T (Threat) | ND-GAIN, EM-DAT | EEA climate indicators, EU Civil Protection |
| C (Capacity) | WB WGI, CPI, ITU | World Bank WGI, CPI, DESI |

Same formula, same weights, EU-sourced data.

---

## 4. Scoring and aggregation

- **Indicator scoring:** 0–10 scale with clear behavioral anchors at each point
- **Dimension scores:** Average of four indicators per dimension
- **Overall GSI:** Weighted average of dimension scores (equal weights default; adjustable with transparency)
- **Contextual interpretation:** All scores through CAF-derived target ranges, not absolute benchmarks

---

## 5. Data Confidence Tiers

**Tier 1 (Gold):** 3+ independent sources (statistical agency + academic/NGO + citizen validation panel). Full transparency.

**Tier 2 (Silver):** Statistical agency data + at least one independent check. Partial citizen validation.

**Tier 3 (Bronze):** Proxy inferences from existing datasets. Proxies labeled with inference logic and uncertainty margins.

All implementations must publish data sources, confidence tiers per indicator, and margins of error.

### Selection bias in voluntary data sources

Voluntary registries introduce known selection bias. The methodology addresses this through: (1) Bronze-tier proxy data provides baseline coverage for all regions regardless of registry participation; (2) divergence between registry and proxy data is treated as a representation signal, not an absence signal; (3) regions with low participation but high proxy indicators are flagged for methodological attention.

---

## 6. The Optimal Governance Tier (OGT) Matrix

The OGT translates GSI scores and CAF context into governance-tier recommendations.

| GSI Signal | CAF Context | OGT Recommendation |
|------------|-------------|---------------------|
| High Knowledge Inclusion requirement + High complexity | CAF `>` 4.0 | Devolve to lowest feasible tier |
| High Knowledge Inclusion requirement + Low complexity | CAF `<` 2.0 | Devolve to regional tier |
| High Inter-Level Coordination need + Low complexity | CAF `<` 2.0 | Retain at supranational/national level |
| High Resilience deficit + High diversity | CAF > 4.0 | Supranational minimum standard + regional implementation autonomy |
| Balanced across all dimensions | Any | Current allocation validated |

Thresholds are illustrative. Operational values require empirical calibration.

### Subsidiarity Drag

**SD = Tier Distance × Domain Cost Coefficient**

Denominated in administrative overhead (coordination hours) and fiscal overhead (euros). Each policy domain requires independent calibration of its cost coefficient. Until calibrated, only Tier Distance is published.

### Comply-or-explain

For policy-relevant implementations, participating jurisdictions commit to: comply with the OGT recommendation, or publish a written justification for deviation. This creates accountability and structured feedback for model improvement.

---

## 7. Anti-gaming protocols

| Mechanism | Function |
|-----------|----------|
| Data triangulation | 3+ independent sources per indicator at Gold tier |
| Anomaly detection | AI-assisted flagging of inconsistent patterns |
| Citizen validation panels | Random 1,000-citizen surveys per region |
| Full transparency | All data, weightings, and tiers published |
| Forkability | Open for research; reference implementation for policy |

---

## 8. Reference implementation and forkability

The protocol is open. Any actor can implement with alternative weightings. For policy-relevant use, a **reference implementation** is designated: maintained through the standards stewardship process, validated in consultation with the relevant statistical authority. Only the reference implementation carries institutional weight for governance decisions.

---

## 9. Framework revision protocol

1. **Error detection:** Systematic comparison of OGT recommendations against outcomes.
2. **Root cause analysis:** Independent panel distinguishes data quality issues from structural model limitations.
3. **Revision proposal:** Published for open comment; adopted after historical validation.
4. **Version control:** All implementations specify version. Multiple versions may coexist.

---

## 10. Governance: Standards stewardship

If a stewardship body forms:
- Protocol maintenance and regular updates
- Pattern library curation (governance interventions tagged by dimension, CAF, outcome)
- Dispute facilitation (neutral technical assessment)
- Capacity building (training and documentation)

**Composition (advisory):** 30% national government, 30% local/municipal, 20% civil society and indigenous, 10% academic, 10% private sector. No single funder > 20%.

---

## 11. Falsifiability

If implementations consistently show that GSI-routed domains perform no better than politically routed domains, the core hypothesis is falsified. Negative results are published through the same transparency mechanisms as positive results. The framework revision protocol provides the structured response.

---

## 12. Origin: From Swedish diagnosis to global protocol

The GSI emerged from Svensk Subsidiaritet, a project that spent years diagnosing overcentralization in Sweden. This origin establishes proof of concept (even well-governed nations have structural pathologies), legitimacy through humility (self-diagnosis, not imposition), and a template for adaptation.

---

*The Global Subsidiarity Index Protocol is free, open, and forkable. No permission is needed to use, adapt, or improve it.*
