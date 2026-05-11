# Appendix C: Disturbance timescale reference table

The simulation uses illustrative disturbance periods (30, 45, and 120 time steps) selected for analytical clarity rather than empirical calibration. This appendix provides estimated real-world timescales for governance-relevant disturbances, organized by frequency band. These estimates are drawn from the literature identified through the AI-mediated research process described in Appendix D; they are indicative rather than authoritative and are provided to support the translation from simulation parameters to real institutional design contexts.

Where a time step in the simulation corresponds to one week of real governance time, the simulation's 150-step run represents approximately three years — a reasonable planning horizon for municipal crisis management. The parameter relationships (fast period ≈ 30 steps, medium ≈ 45 steps, slow ≈ 120 steps) would then correspond to roughly 7 months, 10 months, and 2.3 years respectively — plausible for the disturbance types described below.

---

## Fast disturbances (days to weeks)

These disturbances demand response faster than most national policy cycles can deliver. They are the primary argument for genuine local decision authority with minimal approval latency.

| Disturbance type | Typical onset-to-peak | Notes |
|---|---|---|
| Acute crime wave / civil unrest | 1–7 days | Requires local law enforcement autonomy; national policy response arrives after peak |
| Local supply chain disruption | 3–14 days | Food, fuel, medical supply shortages at municipal level |
| Acute public health outbreak | 3–21 days | Early containment window closes within days; national declaration typically lags by 1–3 weeks |
| Flash flooding / acute weather event | Hours–7 days | Emergency response must be pre-positioned; central authorization is too slow |
| Local infrastructure failure | 1–14 days | Power, water, transport outages; repair decisions must be made locally |
| Sudden displacement event | 1–14 days | Refugee influx, evacuation; reception capacity decisions are local |

Estimated governance latency to response under centralized architecture: 2–8 weeks (crisis detection, escalation, political decision, budget allocation, implementation). Under local architecture with pre-authorized response protocols: 1–5 days.

---

## Medium disturbances (months to two years)

These disturbances operate at the scale of annual budget cycles and regional economic dynamics. They are too persistent to treat as emergencies and too fast for slow national policy instruments to track effectively without regional intermediaries.

| Disturbance type | Typical duration | Notes |
|---|---|---|
| Seasonal unemployment fluctuation | 3–9 months | Regional labor market dynamics; national averages mask regional variation |
| Regional housing market pressure | 6–24 months | Local supply/demand imbalance; national housing policy adjusts too slowly and too uniformly |
| Epidemic wave (endemic, recurring) | 2–6 months | Annual influenza, COVID seasonal waves; regional variation in severity requires regional response calibration |
| Regional infrastructure deterioration | 6–36 months | Accumulated deferred maintenance; regional visibility before national statistical signal |
| Municipal fiscal stress | 6–24 months | Revenue-expenditure imbalance building over budget cycles; visible at municipal level before national |
| Agricultural/environmental seasonal pressure | 3–12 months | Drought, crop failure, flood cycle; regional visibility, regional response |

Estimated governance latency under regional architecture: 1–3 months (regional monitoring, regional executive decision, regional budget reallocation). Under national-only architecture: 6–18 months from regional signal to national policy implementation.

---

## Slow disturbances (years to decades)

These disturbances are structurally invisible to local controllers and require the long temporal averaging that only a global or national layer with broad spatial scope can provide. They constitute the legitimate domain of slow, high-latency global governance.

| Disturbance type | Typical timescale | Notes |
|---|---|---|
| Secular demographic shift | 10–30 years | Population aging, urbanization, fertility trends; only visible in aggregated long-run statistics |
| Long-run labor market transformation | 5–20 years | Automation displacement, sectoral transition; no local signal until crisis is advanced |
| Cumulative ecological degradation | 10–50 years | Biodiversity loss, soil depletion, aquifer drawdown; sub-threshold locally, critical globally |
| Climate change baseline shift | 20–100 years | Temperature, precipitation pattern change; requires multi-decadal data aggregation to distinguish from natural variance |
| Institutional trust erosion | 10–30 years | Declining civic participation, rising anti-institutional sentiment; slow-moving, system-wide |
| Long-run debt accumulation | 10–30 years | Structural fiscal imbalance building across political cycles; national and supranational visibility |
| Technological infrastructure transition | 10–20 years | Energy system, transport, communication network transitions; require long-horizon coordination beyond any single jurisdiction |

Estimated governance latency for detection and response under global/national architecture: 3–10 years from trend onset to coordinated policy response. This is appropriate for disturbances with decade-scale periods; it is structurally too slow for disturbances in the fast or medium bands.

---

## Mapping simulation parameters to real timescales

If one simulation time step represents one week:

| Simulation | Steps | Real time | Appropriate governance layer |
|---|---|---|---|
| Fast disturbance period | 30 | ~7 months | Local |
| Medium disturbance period | 45 | ~10 months | Regional |
| Slow disturbance period | 120 | ~2.3 years | National / global |
| Local controller latency τ_l = 2 | 2 | ~2 weeks | Municipal executive decision |
| Regional controller latency τ_r = 6 | 6 | ~6 weeks | Regional government decision cycle |
| Global controller latency τ_g = 12 | 12 | ~3 months | National / supranational policy cycle |

If one simulation time step represents one month:

| Simulation | Steps | Real time | Appropriate governance layer |
|---|---|---|---|
| Fast disturbance period | 30 | ~2.5 years | Regional |
| Medium disturbance period | 45 | ~3.75 years | National |
| Slow disturbance period | 120 | ~10 years | Global |
| Local controller latency τ_l = 2 | 2 | ~2 months | Regional executive decision |
| Regional controller latency τ_r = 6 | 6 | ~6 months | National policy cycle |
| Global controller latency τ_g = 12 | 12 | ~1 year | Supranational coordination |

The model is scale-invariant in this sense: the structural relationships hold regardless of the absolute timescale, provided the ratios between disturbance periods and controller latencies are preserved. What matters is not the absolute speed of governance but whether the governance architecture matches the frequency spectrum of the disturbances it faces.

---

## A note on empirical calibration

The values in this table are estimates assembled from general knowledge of governance and policy timescales. Rigorous empirical calibration — measuring actual latency distributions in specific governance systems, tracking real disturbance onset-to-peak timescales across crisis types — would significantly strengthen the framework's applicability to institutional design.

This calibration work is tractable. Crisis response datasets, policy implementation records, and administrative decision logs contain the latency data required. The disturbance timescale data is available in epidemiological, economic, and environmental monitoring records. The primary barrier is not data availability but the absence of a standard analytical framework for organizing and interpreting that data in control-theoretic terms — which is precisely what this paper proposes to provide.
