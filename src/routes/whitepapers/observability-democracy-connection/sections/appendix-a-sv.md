# Appendix A: matematiska formuleringar

## Observerbarhet i linjära system

För ett tidsdiskret linjärt system:

```
x(t+1) = A · x(t) + B · u(t)
y(t)   = C · x(t) + v(t)

```

Systemet är observerbart om observerbarhetsmatrisen:

```
O = [C; CA; CA²; ...; CA^(n-1)]

```

har full kolumnrang n. När O inte har full kolumnrang existerar det tillståndsdimensioner som producerar noll i utdata oavsett deras värde — de är osynliga för varje observatör vid utdata.

I modellen för representationskedjan är x vektorn för medborgarnas preferenser, y är signalen på policylagret, och C kodar för kedjans aggregerings- och brusstruktur. Resultatet om konstitutionell oobserverbarhet är påståendet att C för en representationskedja med K lager med realistiska parametrar inte tillåter full rang O.

## Överlevnad av varians genom ett enda lager

För ett lager med aggregeringsförhållandet r (som mappar n indata till n/r utdata genom att ta gruppgenomsnitt) och additivt gaussiskt brus med standardavvikelsen σ:

```
Var_out = Var_in / r + σ²

```

Den första termen representerar varians som överlever aggregeringen. För en grupp av r indata med variansen V har genomsnittet variansen V/r — centrala gränsvärdessatsen tillämpad på aggregeringssteget. Variansen inom gruppen V·(r-1)/r förstörs helt. Den andra termen representerar brus som adderats på detta lager.

## Överlevnad av varians genom K lager

För en kedja av K lager med aggregeringsförhållanden r_1, …, r_K och brusnivåer σ_1, …, σ_K:

**Överlevande signalvarians** (den komponent som kan spåras till medborgarnas sanna preferenser):

```
Var_signal(K) = Var_true · ∏_{k=1}^{K} (1/r_k)

```

**Ackumulerad brusvarians** (oberoende över lager):

```
Var_noise(K) = Σ_{k=1}^{K} [ σ_k² · ∏_{j=k+1}^{K} (1/r_j) ]

```

Notera: brus som introduceras i tidigare lager dämpas i sig av efterföljande aggregering. Formeln ovan tar hänsyn till detta; tidigare brus undertrycks delvis medan senare brus passerar med mindre dämpning.

**Förenklad form** (när brus på varje lager adderas efter aggregering):

```
Var_noise(K) ≈ Σ_{k=1}^{K} σ_k²   [om r >> 1 vid efterföljande lager]

```

Simuleringen använder den förenklade formen, vilket något överskattar det ackumulerade bruset. För de typiska parametervärden som används är skillnaden liten.

## Signal-brusförhållande och oobserverbarhetströskeln

SNR på policylagret:

```
SNR(K) = Var_signal(K) / Var_noise(K)

```

**Tröskel för konstitutionell oobserverbarhet:** SNR `<` 1.

Under denna tröskel överstiger brusvariansen signalvariansen. En maximum likelihood-skattning av medborgarnas preferenser givet policylagrets observation y har en felvarians som är större än förhandsvariansen (prior variance) — vilket innebär att observationen är mindre informativ än ingen observation alls.

Tröskelns skärningspunkt K* löser:

```
Var_true · ∏_{k=1}^{K*} (1/r_k) = Σ_{k=1}^{K*} σ_k²

```

För de typiska parametrar som används i den analytiska SNR-kurvan (r = 3,5, σ = 0,17 per lager, Var_true = 0,18):

```
K*: 0,18 · (1/3,5)^K = K · (0,17)²
     0,18 · 0,286^K   = K · 0,0289

```

Numerisk lösning: K* ≈ 2,0 — tröskeln passeras mellan K = 2 och K = 3.

## Olikheten för databehandling (data processing inequality)

Shannons olikhet för databehandling fastslår att för varje Markovkedja X → Y → Z:

```
I(X; Z) ≤ I(X; Y)

```

Bearbetning (eller observation genom en mellanhand) kan inte öka den ömsesidiga informationen. För representationskedjan innebär detta att den ömsesidiga informationen mellan medborgarnas preferenser (X) och policylagrets observationer (Z) begränsas av den ömsesidiga informationen vid det första aggregeringssteget. Varje efterföljande lager kan endast minska den.

Tillämpat på representationskedjan: ingen post hoc-bearbetning på policylagret kan återskapa ömsesidig information som gått förlorad i aggregeringen. Olikheten för databehandling är det formella uttrycket för varför institutionell kvalitet på policylagret inte kan kompensera för aggregeringsförlust i representationskedjan.

## Preferensdynamik

Medborgarnas preferenser utvecklas enligt:

```
x_i(t+1) = x_i(t) + δ_i(t) + s(t)

```

Där δ_i(t) ~ N(0, σ_drift²) är individuell drift (σ_drift = 0,015) och s(t) är en genuin preferensskifthändelse (noll förutom vid skifthändelserna).

Preferenserna begränsas till [−1, +1] vid varje steg. Den initiala preferensfördelningen för medborgargrupp i är:

```
x_i(0) = μ_(c(i)) + ε_i

```

Där μ_(c(i)) är klustrets genomsnitt (draget från Uniform(−0,8, 0,8) över P dimensioner) och ε_i ~ N(0, 0,25²) är individuell variation inom klustret.

## Uppdateringsregel för policy

Policylagret uppdateras enligt:

```
π(t) = π(t-1) + K_p · (ŷ(t - τ_total) - π(t-1))

```

Där ŷ(t - τ_total) är policylagrets observation efter den totala fördröjningen i representationskedjan τ_total, och K_p = 0,30 är policyresponsförstärkningen. Alla arkitekturer använder identiskt K_p.

## Fullständiga simuleringsparametrar

| Parameter | Värde | Anteckningar |
| --- | --- | --- |
| N | 60 | Medborgargrupper |
| P | 4 | Policypreferensdimensioner |
| T | 120 | Tidssteg |
| Clusters | 4 | Grupper om 15 medborgare vardera |
| σ_drift | 0,015 | Individuell preferensdrift per steg |
| Shift 1 | t=40, kluster 0, dim 0-1, magnitud 0,4/-0,2 | Genuint regionalt skifte |
| Shift 2 | t=80, alla grupper, dim 2, genomsnitt 0,3 (sd 0,08) | Systemövergripande skifte |
| K_policy | 0,30 | Policyresponsförstärkning (alla arkitekturer) |
| Random seed | 13 | För reproducerbarhet |
| Warmup | 10 | Steg exkluderade från mätvärden |

**Lagerparametrar för arkitektur A (r, σ, τ):**
(5, 0.12, 2), (4, 0.18, 3), (3, 0.22, 4), (4, 0.20, 5), (3, 0.15, 4)

**Lagerparametrar för arkitektur B:**
(4, 0.10, 2), (5, 0.18, 4), (3, 0.14, 3)

**Lagerparametrar för arkitektur C:**
(3, 0.08, 2), (2, 0.10, 2)

**Lagerparametrar för arkitektur D:**
(1, 0.05, 1)
