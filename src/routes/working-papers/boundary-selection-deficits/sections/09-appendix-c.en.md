# Appendix C — Case Coding Notes: Boundary Mismatch Estimates

This appendix documents the coding protocol, data sources, and heuristic estimates used to characterize boundary mismatch in the five empirical illustrations of Part V. The estimates are qualitative and illustrative. They are not measurements. They are intended to demonstrate the applicability of the B index and its decomposition, and to provide a template for the systematic operationalization that Paper VIII's measurement framework will require.

## C.1 General Coding Protocol

For each case, we estimate the boundary mismatch index B = (B_noise + B_struct) / Var(total_disturbance) following the decomposition of Section 2.3. The estimation proceeds in four steps, with explicit uncertainty judgments at each step.

**Step 1 — Define the jurisdiction and the domain.** Identify the controller whose boundary is being assessed, and the specific governance function or outcome domain under analysis. A single political entity (e.g., a nation-state) may have different B values for different domains (climate, finance, health), because the coupling structures differ. The estimate is domain-specific.

**Step 2 — Identify cross-boundary coupling channels.** Enumerate the primary pathways through which dynamics outside the jurisdiction affect outcomes within it, for the specified domain. These include physical flows (emissions, pathogens, water), economic flows (trade, capital, labor), information flows (data, narratives, diplomatic pressure), and security flows (conflict spillover, arms flows). For each channel, assess its relative contribution to total disturbance variance.

**Step 3 — Decompose into stochastic and structured components.** For each coupling channel, assess whether the cross-boundary inflow is predominantly uncorrelated with the controller's own actions (B_noise) or correlated with them (B_struct). This assessment is based on the causal structure of the domain: can the controller's actions plausibly affect the inflow through feedback loops that the controller does not model? Where evidence of structured feedback exists (e.g., documented cases of policy spillover returning as disturbance), the channel is coded as contributing to B_struct. Where the inflow appears genuinely exogenous relative to the controller's actions (e.g., weather shocks originating outside the jurisdiction, with no plausible causal path from the controller's policies to those shocks), it is coded as B_noise.

**Step 4 — Estimate B and uncertainty band.** Synthesize the channel assessments into a point estimate of B (as a fraction of total disturbance variance) and a plausible range. The point estimate is the analyst's best judgment based on available evidence; the range reflects the analyst's uncertainty about the channel weights and the decomposition. The range is reported as [lower bound, upper bound], where the lower bound reflects a conservative assessment (cross-boundary flows are less important than they appear) and the upper bound reflects a generous assessment (cross-boundary flows dominate).

The resulting estimates are heuristic. They are not derived from formal variance decomposition of quantitative time series, because the required data — long, high-frequency series of governance outcomes with simultaneous measurement of cross-boundary flows and control actions — is not available for these cases. The estimates are based on published case literature, institutional reports, and the qualitative judgments of the analyst. They are offered as existence proofs: demonstrations that B can be meaningfully discussed and approximately located for real governance systems, and that the resulting locations are diagnostically informative.

## C.2 Climate Governance

**Jurisdiction and domain:** A representative developed-country national government (e.g., United States, Germany, Japan) with respect to climate-related outcomes within its territory: extreme weather damage, agricultural productivity loss, sea-level rise costs, and climate-related health burdens.

**Cross-boundary coupling channels:**
- Atmospheric transport of greenhouse gases: emissions from all jurisdictions mix globally. The contribution of any single jurisdiction's emissions to its own climate outcomes is negligible relative to the contribution of global cumulative emissions.
- Oceanic and atmospheric circulation changes: regional climate outcomes are driven by global patterns (El Niño, jet stream shifts, monsoon variability) that no single jurisdiction controls.
- Technological and economic spillovers: the pace of global decarbonization affects technology costs, trade patterns, and the economic context within which the jurisdiction's own transition occurs.

**Decomposition:**
- B_noise: Natural climate variability that is independent of human emissions (volcanic eruptions, solar variability). Small relative to anthropogenic forcing.
- B_struct: The dominant component. The jurisdiction's own historical and ongoing emissions contribute to global concentrations, which drive the climate changes that return as local disturbances. The feedback loop operates over multi-decadal timescales. The jurisdiction's mitigation policies affect its emissions trajectory, but the effect on its own climate outcomes is mediated by the global M-Δ loop and is orders of magnitude smaller than the effect of global emissions. The jurisdiction is therefore governing a subsystem almost entirely dominated by structured cross-boundary feedback.

**Estimate:**
- B ≈ 0.95 (range: 0.85–0.99)
- B_struct ≈ 0.85–0.95 (the vast majority of climate variance is structured feedback from global emissions, including the jurisdiction's own)
- B_noise ≈ 0.01–0.05

**Sources:** IPCC Sixth Assessment Report (Working Group I, chapters on attribution; Working Group III, chapters on international cooperation); national climate assessment reports; peer-reviewed literature on climate damage functions and attribution.

**Uncertainty:** Low on B being close to 1; the physical structure of the carbon cycle is well-characterized. Moderate on the precise B_struct/B_noise split, because some extreme weather events have stochastic components not attributable to anthropogenic forcing.

## C.3 Pandemic Governance

**Jurisdiction and domain:** A representative national government during the COVID-19 pandemic (2020–2022), with respect to domestic public health and economic outcomes: case rates, mortality, healthcare system load, and economic disruption.

**Cross-boundary coupling channels:**
- International travel networks: introduction of cases and variants from abroad.
- Global supply chains: disruption of medical equipment, pharmaceutical inputs, and vaccine supply.
- Information and behavioral spillovers: foreign pandemic trajectories affect domestic risk perception, compliance, and political pressure.
- Vaccine and therapeutic development: dependent on international scientific collaboration, clinical trials abroad, and foreign manufacturing capacity.

**Decomposition:**
- B_noise: The initial emergence of SARS-CoV-2 in Wuhan was exogenous to any national controller. Subsequent zoonotic emergence events are similarly exogenous.
- B_struct: National control actions generated substantial structured feedback through the global M-Δ loop. Export controls on medical equipment disrupted foreign supply chains that fed back into domestic shortages. Border closures disrupted labor flows in sectors dependent on migrant workers, creating domestic labor shortages. Competitive vaccine procurement concentrated global production, extending the pandemic globally and generating new variants that returned to the procuring countries. Each of these is a documented instance of national policy action returning as amplified disturbance through the global coupling network.

**Estimate:**
- B ≈ 0.60–0.80 (range: 0.40–0.90)
- B_struct ≈ 0.40–0.70 (highly variable across countries and pandemic phases)
- B_noise ≈ 0.10–0.20 (the initial outbreak and some stochastic transmission dynamics)

The range is wide because the importance of cross-boundary flows varied dramatically over the pandemic's course. During periods of low domestic transmission and strict border controls, B was lower. During variant emergence events or supply chain crises, B approached 0.90.

**Sources:** WHO situation reports; national after-action reviews (e.g., UK COVID-19 Inquiry, US Coronavirus Crisis reports); academic literature on pandemic border measures, vaccine nationalism, and supply chain disruption (e.g., Bown 2021 on export controls; Wouters et al. 2021 on vaccine procurement).

**Uncertainty:** High. The decomposition of disturbance variance into domestic policy effects, exogenous pandemic dynamics, and structured feedback from other countries' policy responses is a complex causal inference problem that has not been systematically addressed in the post-pandemic literature. The estimate is based on qualitative synthesis of documented feedback instances.

## C.4 European Union Monetary-Fiscal Boundary

**Jurisdiction and domain:** The Eurozone as a monetary jurisdiction (governed by the European Central Bank) with respect to financial stability outcomes: sovereign borrowing costs, bank solvency, and aggregate economic stability within member states.

**Cross-boundary coupling channels:**
- Sovereign-bank nexus: national fiscal positions affect sovereign bond yields, which affect the balance sheets of banks holding those bonds, which affect the credit supply and economic activity, which feed back into fiscal positions.
- Cross-border bank exposures: banks in one member state hold sovereign bonds of other member states, transmitting fiscal stress across borders.
- Monetary policy transmission: ECB policy rates affect member states asymmetrically depending on their fiscal positions, debt levels, and banking system health.
- Political spillovers: fiscal decisions in one member state (e.g., Greek debt restructuring) generate political pressure on other member states and on ECB decision-making.

**Decomposition:**
- B_noise: Exogenous global financial shocks (e.g., the 2008 US subprime crisis) that hit the Eurozone from outside.
- B_struct: The dominant component during the 2010–2012 sovereign debt crisis. The ECB's monetary policy decisions (interest rates, liquidity provision, OMT announcements) and national fiscal decisions (austerity measures, bank bailouts) generated structured feedback through the sovereign-bank loop that returned as amplified financial stress. German fiscal rectitude and Greek fiscal distress were coupled through the Eurozone architecture; each affected the other through bond markets, political negotiations, and ECB conditionality.

**Estimate:**
- B ≈ 0.50–0.70 (range: 0.30–0.80) during crisis periods; substantially lower during calm periods (B ≈ 0.10–0.30) when the sovereign-bank loop was suppressed by cross-border capital flows.
- B_struct ≈ 0.40–0.60 during crisis periods.
- B_noise ≈ 0.10–0.20.

The temporal variation is a key feature: the boundary brittleness failure mode (Part III.3) is characterized by B appearing low during calm periods and spiking during crises, because the structured feedback is latent and activated by stress.

**Sources:** ECB Financial Stability Review (2010–2015); academic literature on the Eurozone sovereign debt crisis (e.g., Lane 2012, Shambaugh 2012, Brunnermeier et al. 2016); European Stability Mechanism documentation.

**Uncertainty:** Moderate. The causal linkages are well-documented in the academic literature, but the quantitative decomposition of variance is not available. The temporal variability of B makes a single point estimate misleading; the range is more informative.

## C.5 India Inter-State Water Disputes

**Jurisdiction and domain:** The state of Tamil Nadu with respect to water availability outcomes: agricultural output, urban water supply, and hydropower generation dependent on the Cauvery River.

**Cross-boundary coupling channels:**
- Upstream withdrawals: Karnataka's reservoir releases, irrigation diversions, and hydropower operations directly affect the flow reaching Tamil Nadu.
- Rainfall variability: the Cauvery basin's monsoon rainfall is spatially heterogeneous; Karnataka may receive adequate rainfall while Tamil Nadu experiences deficit, or vice versa.
- Legal and political spillovers: Tamil Nadu's legal actions in the Supreme Court and political mobilization affect Karnataka's water management decisions, and vice versa.
- Groundwater interdependencies: upstream groundwater extraction can reduce baseflow contributions to the river.

**Decomposition:**
- B_noise: Rainfall variability originating from large-scale atmospheric patterns (monsoon strength) that neither state controls.
- B_struct: Karnataka's water management decisions are structured feedback from Tamil Nadu's perspective. Karnataka's dam operations respond to its own agricultural and urban demands, which are partly a response to Tamil Nadu's legal and political pressure. The Supreme Court's orders create a feedback loop in which both states' actions are adjusted in response to the other's actions and the Court's rulings. The structured feedback is mediated by the Tribunal and Court processes.

**Estimate:**
- B ≈ 0.70–0.85 (range: 0.50–0.95) for Tamil Nadu's water outcomes.
- B_struct ≈ 0.40–0.60 (Karnataka's controllable releases and storage decisions)
- B_noise ≈ 0.30–0.45 (monsoon variability, which is substantial)

The unusually high B_noise reflects the semi-arid climate and high interannual rainfall variability. The high B_struct reflects the fact that the majority of manageable water variability — the portion that is not purely stochastic rainfall — is determined by another jurisdiction's actions.

**Sources:** Cauvery Water Disputes Tribunal reports (1990, 2007); Supreme Court judgments (2018); Central Water Commission river flow data; academic literature on Indian inter-state water conflicts (e.g., Iyer 2007, D'Souza 2019).

**Uncertainty:** Moderate. River flow data exists and the allocation rules are documented. The decomposition into stochastic (rainfall-driven) and structured (policy-driven) components is feasible with hydrological modeling and is a candidate for formal operationalization. The estimate here is based on published analyses rather than original hydrological modeling.

## C.6 Israel's Boundary Deficit

**Jurisdiction and domain:** The State of Israel with respect to security outcomes: casualties from violent conflict, military mobilization costs, and diplomatic and economic pressure.

**Cross-boundary coupling channels:**
- Occupation and settlement dynamics: Israeli military operations, settlement expansion, and citizenship policies affect Palestinian populations in the West Bank and Gaza, generating responses (militancy, political mobilization, international legal challenges) that return as security threats and diplomatic pressure.
- Regional state and non-state actors: Israeli actions affect the calculations of Hezbollah, Iran, and other regional actors, whose responses generate security disturbances.
- International diplomatic and economic channels: Israeli policies generate BDS movement activity, UN resolutions, and shifts in great-power alignment, which return as economic pressure and diplomatic isolation.
- Diaspora and identity politics: Israeli policies affect Jewish diaspora communities and their political influence, which feeds back into US and European policy toward Israel.

**Decomposition:**
- B_noise: Exogenous regional developments (Arab Spring, Iranian nuclear program progress, US foreign policy shifts not directly attributable to Israeli actions).
- B_struct: The dominant component. The vast majority of security disturbances Israel experiences are responses to Israeli actions, processed through the complex M-Δ loop of occupation, regional politics, and international diplomacy. A military operation in Gaza generates rocket fire, international condemnation, and diplomatic initiatives that constrain future Israeli military options. Settlement expansion generates Palestinian displacement and militancy, international legal challenges, and demographic pressures on Israeli democracy. The structured feedback is pervasive and multi-channel.

**Estimate:**
- B ≈ 0.80–0.95 (range: 0.70–0.98)
- B_struct ≈ 0.65–0.85 (the dominant portion of security variance is structured feedback)
- B_noise ≈ 0.10–0.25 (exogenous regional and global developments)

The estimate is extremely high because the boundary itself is the object of contestation. Almost every Israeli action generates cross-boundary feedback through one or more channels, and the feedback returns as the primary driver of Israel's security environment. This is the limiting political case: a system whose boundary mismatch is not merely large but constitutive of its governance challenge.

**Sources:** Israel country study (Governance as Engineering Series, Paper VII); academic literature on the Israeli-Palestinian conflict (e.g., Shlaim 2014, Khalidi 2020, Zertal & Eldar 2007); BDS movement documentation; UN resolutions and voting records; Israeli national security establishment assessments.

**Uncertainty:** Moderate to high. The qualitative assessment that structured feedback dominates is robust; the precise numerical estimate is necessarily imprecise. The distinction between B_noise and B_struct is particularly challenging in this case because many external developments are partly exogenous and partly responses to Israeli actions, with complex attribution. The wide range reflects this ambiguity.

## C.7 Summary Table

| Case | Domain | Jurisdiction | B (estimate) | B_struct (estimate) | B_noise (estimate) | Range |
|------|--------|--------------|--------------|---------------------|---------------------|-------|
| Climate | Climate outcomes | National government | 0.95 | 0.85–0.95 | 0.01–0.05 | 0.85–0.99 |
| Pandemic | Public health & economy | National government | 0.70 | 0.40–0.70 | 0.10–0.20 | 0.40–0.90 |
| EU | Financial stability | Eurozone (ECB) | 0.60 | 0.40–0.60 | 0.10–0.20 | 0.30–0.80 |
| Cauvery | Water availability | Tamil Nadu | 0.78 | 0.40–0.60 | 0.30–0.45 | 0.50–0.95 |
| Israel | Security outcomes | State of Israel | 0.88 | 0.65–0.85 | 0.10–0.25 | 0.70–0.98 |

The table reveals a pattern consistent with the paper's argument. In all five cases, B is substantially above zero, and B_struct is the dominant or co-dominant component. In the limiting cases — climate and Israel — B approaches unity, and the controller is governing a subsystem whose outcomes are almost entirely determined by dynamics originating outside its boundary. In the intermediate cases — pandemic, EU, Cauvery — B is high but not extreme, and the structured feedback component varies with conditions, producing the temporal variability that makes boundary brittleness a distinctive risk.

These estimates are heuristic. They are offered not as measurements but as structured judgments, coded according to a transparent protocol, with explicit uncertainty bands. The next step — operationalizing B as a measured parameter within Paper VIII's framework — requires the variance decomposition data that this appendix has identified as missing. The estimates here provide targets for that measurement: approximate locations in parameter space that a formal audit should be able to confirm or revise.
