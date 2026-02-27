# Bilaga A: matematiska formuleringar

## Resursdynamik

Var och en av de `N_PATCHES = 12` resursområdena utvecklas enligt tidsdiskret logistisk tillväxt med diffusion och utvinning:

```
R_p(t+1) = R_p(t) + r·R_p(t)·(1 - R_p(t)/K(t))
           + β·Σ_{q∈N(p)} (R_q(t) - R_p(t))
           + ε_p(t)
           - E_p(t)

```

Där:

* `r = 0.08` är den inneboende tillväxthastigheten
* `K(t)` är den tidsvarierande bärkraften
* `β = 0.02` är diffusionskoefficienten mellan intilliggande områden
* `N(p)` är mängden områden som gränsar till område `p` (`|i−j| ≤ 2`)
* `ε_p(t) ~ N(0, σ_fast²)` är den snabba stokastiska chocken
* `E_p(t)` är utvinningen allokerad till område `p`

Beståndet begränsas till `(0, 1.5·K(t))` vid varje tidsteg.

## Flerskalig bärkraft

Bärkraften varierar över tre samtidiga störningsband:

```
K(t) = K_base + A_med·sin(2π·t/P_med) + A_slow·sin(2π·t/P_slow)

```

Där:

* `K_base = 100` (baslinje per område)
* `A_med = 8`, `P_med = 12` månader (säsongscykel)
* `A_slow = −20`, `P_slow = 240` månader (decennienedgång)
* `σ_fast = 3.0` (snabb stokastisk chock per område per tidsteg)

Den långsamma komponenten producerar en nettominskning av bärkraften på cirka 20 enheter vid sin topp (runt månad 120), vilket representerar en långsiktig miljöförstöring.

## Ashbys variationsanalys

Låt `D` beteckna störningsprocessen som driver resursen och `R` regulatorn (styrsystemet). Resurssystemets störningsvariation kan brytas ner efter frekvensband:

```
V(D) = V(D_fast) + V(D_med) + V(D_slow)

```

Där `V(·)` betecknar `log₂` av antalet särskiljbara tillstånd (Shannon-variation). Styrsystemets variation är:

```
V(R) = log₂(obs_dims · obs_resolution / obs_latency_penalty)

```

Villkoret för erforderlig variation `V(R) ≥ V(D)` uppfylls när styrsystemet kan skilja på alla resurstillstånd som kräver olika styrsvar. I praktiken kräver detta:

* `obs_latency ≤ 1/f_fast` (fördröjning under perioden för snabba störningar)
* `obs_dims ≥ 2` för att skilja säsongsmässiga från baslinjetillstånd
* `obs_dims ≥ 3` med baslinje över flera årtionden för att skilja långsamma trender från variabilitet

Endast Arkitektur E uppfyller alla tre villkor i simuleringen.

## Återkopplingsloopens integritet

Återkopplingsloopens integritet `FLI ∈ (0, 1)` mäter i vilken grad utvinningsbeslut är kopplade till det aktuella resurstillståndet:

```
FLI = corr(E(t), R_obs(t)) · (1 / obs_latency_penalty) · obs_dims_factor

```

Där:

* `corr(·,·)` är Pearsons korrelationskoefficient mellan utvinning och observerat bestånd
* `obs_latency_penalty = 1 + lag/T` (fördröjning i månader, `T = 360`)
* `obs_dims_factor = min(obs_dims / V_disturbance_bands, 1.0)`

Öppen tillgång (A) har corr `<` 0 (utvinningen ökar med beståndet) men `FLI ≈ 0.15` eftersom det inte finns någon aggregerad samordning. Statlig förvaltning (B) har strukturerade kvoter men `FLI ≈ 0.12` på grund av straffet för fördröjning. Arkitektur E uppnår `FLI ≈ 0.78` — den enda arkitekturen med en betydande integritet i återkopplingsloopen över alla störningsband.

## Utvinningsallokering över områden

Total utvinning av användargrupp `u` vid tidpunkten `t` allokeras till områden proportionellt mot det aktuella områdets bestånd:

```
E_p(t) = E_total(t) · R_p(t) / Σ_q R_q(t)

```

Detta representerar att användare i första hand utvinner från mer produktiva områden — ett realistiskt antagande för mobila utvinnare (fiskefartyg, herdar, samlare).

## Gini-koefficient

Utvinningsolikhet vid varje tidsteg mäts av Gini-koefficienten över användargrupper:

```
G(t) = Σ_i Σ_j |E_i(t) − E_j(t)| / (2·N·Σ_i E_i(t))

```

Genomsnittlig Gini över simuleringen (exklusive 10-stegs uppvärmning) ger det sammanfattande mått på ojämlikhet som rapporteras i resultattabellen.

## Kollapsrisk

Kollapsrisk är andelen tidsteg då det totala beståndet faller under kollapströskeln:

```
CR = (1/T) · Σ_t 𝟙[Σ_p R_p(t) < θ · K(t) · N_patches]

```

Där `θ = 0.20` är fraktionen för kollapströskeln och `𝟙(·)` är indikatorfunktionen.

## Fullständiga simuleringsparametrar

| Parameter | Värde | Anteckningar |
| --- | --- | --- |
| N_patches | 12 | Rumsliga resursområden |
| N_users | 20 | Användargrupper |
| T | 360 | Tidsteg (månader — 30 år) |
| K_base | 100.0 | Grundläggande bärkraft per område |
| r_growth | 0.08 | Inneboende tillväxthastighet per steg |
| β | 0.02 | Diffusionskoefficient mellan områden |
| σ_fast | 3.0 | Standardavvikelse för snabb stokastisk chock |
| A_med | 8.0 | Säsongsmässig amplitud |
| P_med | 12 | Säsongsmässig period (månader) |
| A_slow | −20.0 | Amplitud för långsam trend |
| P_slow | 240 | Period för långsam trend (månader) |
| θ_collapse | 0.20 | Kollapströskel (andel av K) |
| Random seed | 42 | För reproducerbarhet |
| Warmup | 10 | Steg som exkluderas från mätvärden |

**Observationsparametrar för arkitektur (obs_lag, obs_dims, quota_rigidity, sanctioning, slow_signal):**

|  | A | B | C | D | E |
| --- | --- | --- | --- | --- | --- |
| obs_lag | 0 | 12 | 3 | 1 | 1 |
| obs_dims | 1 | 1 | 1 | 3 | 6 |
| quota_rigidity | 0.0 | 0.7 | 0.0 | 0.9 | 0.95 |
| sanctioning | 0.0 | 0.3 | 0.0 | 0.8 | 0.9 |
| slow_signal | False | False | False | False | True |
