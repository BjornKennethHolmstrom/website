# Appendix A: Matematiska formuleringar

## Flerskalig tillståndsövergångsekvation

Tillståndet för nod i vid tiden t+1 ges av:

```
x_i(t+1) = A · x_i(t)
           + β · Σ_{j ∈ grannar(i)} (x_j(t) − x_i(t))
           + B · u_lokal,i(t − τ_l)
           + B · u_regional,r(i)(t − τ_r)
           + B · u_global(t − τ_g)
           + d_i(t)
           + drift

```

Där `drift = x_ref · (1 − A)` upprätthåller jämvikt i frånvaro av störning, och `r(i)` betecknar regionen som innehåller nod i.

## Observationsekvationer

Varje styrningslager observerar en olika aggregering av det sanna tillståndet, med brus skalat till dess räckvidd:

```
y_lokal,i(t)    = x_i(t)           + ε_l,i      ε_l ~ N(0, σ_l²)
y_regional,r(t) = mean(x_region_r) + ε_r        ε_r ~ N(0, σ_r²)
y_global(t)     = mean(x(t))       + ε_g        ε_g ~ N(0, σ_g²)

```

Signaltroheten försämras med den spatiala räckvidden: σ_l `<` σ_r `<` σ_g. De regionala och globala observationerna är regionala respektive systemövergripande genomsnitt, vilket introducerar aggregeringsförlust utöver mätbrus — samma förstörelse av spatial information som demonstrerades i rapport ett.

## Styrlagar

Alla tre lager använder proportionell återkopplingsstyrning av identisk form:

```
u_lokal,i(t)    = K_l · (x_ref − y_lokal,i(t))
u_regional,r(t) = K_r · (x_ref − y_regional,r(t))
u_global(t)     = K_g · (x_ref − y_global(t))

```

Styrsignalerna beräknas vid tiden t och tillämpas vid tiden t + τ (dödtidsintegration). De fördröjda signalerna lagras i historikbuffertar och hämtas vid lämplig tidsförskjutning.

## Frekvens-latens-begränsningen

För ett tidsdiskret dödtidsdominerat system är den maximalt kontrollerbara störningsfrekvensen:

```
f_max ≈ 1 / (2 · τ)

```

Detta följer av Nyquist-Shannons samplingsteorem tillämpat på styrloopen: en regulator som samplar och agerar med perioden τ kan inte upplösa störningar med en period kortare än 2τ. Att försöka svara på sådana störningar producerar fasvända interventioner som förstärker snarare än dämpar störningen.

| Regulator | τ | f_max | Hanterar störningar med period > |
| --- | --- | --- | --- |
| Global / central | 12 | 0,042 | 24 steg |
| Regional | 6 | 0,083 | 12 steg |
| Lokal | 2 | 0,250 | 4 steg |

## Stabilitetstak för regulatorns förstärkning

För varje lager approximeras den maximala säkra förstärkningen av:

```
K_max ≈ 1 / (τ · |A|)

```

Där |A| = 0,95 är den naturliga avklingningskoefficienten. Denna begränsning är snävare under koppling (β > 0) och under korrelerade störningar; värdena nedan representerar konservativa driftpunkter väl inom stabilitetsmarginalen:

| Lager | τ | K_max | K använd | Marginal |
| --- | --- | --- | --- | --- |
| Lokal | 2 | 0,526 | 0,40 | 24 % under taket |
| Regional | 6 | 0,175 | 0,15 | 14 % under taket |
| Global | 12 | 0,088 | 0,07 | 20 % under taket |

## Kopplingsterm

Intilliggande noder är kopplade av en diffusionsterm:

```
coupling_i(t) = β · Σ_{j ∈ {i-1, i+1}} (x_j(t) − x_i(t))

```

Med β = 0,02 och närmaste-granne-topologi (rand-noder har en granne). Detta modellerar krissmitta: instabilitet vid en nod utövar ett tryck på intilliggande noder proportionellt mot tillståndsskillnaden.

## Störningsmodell

Den sammansatta störningen vid nod i och tiden t är:

```
d_i(t) = d_snabb,i(t) + d_medellång,i(t) + d_långsam(t)

```

**Snabb komponent** (impuls vid krisnoder):

```
d_snabb,i(t) = M_fast  om i ∈ {2, 7} och (t − 20) mod P_fast = 0 och t ≥ 20
             = 0       annars

```

Med M_fast = −35, P_fast = 30.

**Medellång komponent** (sinusformat tryck på region 0):

```
d_medellång,i(t) = −A_med · sin(2π · t / P_med)  om i ∈ {0,1,2,3,4}
                 = 0                             annars

```

Med A_med = 12, P_med = 45.

**Långsam komponent** (systemövergripande sekulär drift):

```
d_långsam(t) = −A_slow · sin(2π · t / P_slow)

```

Med A_slow = 8, P_slow = 120.

## Prestandamått

**Kumulativt stabilitetsunderskott** för nod i (efter uppvärmning):

```
D_i = Σ_{t=W}^{T} max(0, x_ref − x_i(t))

```

Där W = 10 är den uppvärmningsperiod som exkluderas från mätningen.

**Total styrinsats** för nod i:

```
E_i = Σ_{t=W}^{T} |u_total,i(t)|

```

Där u_total,i är summan av alla styrbidrag till nod i.

**Underskott per insatsenhet** (stabilitetseffektivitet):

```
η = D_total / E_total

```

Lägre η indikerar bättre stabilitet per enhet av styrningskostnad.

## Fullständiga simuleringsparametrar

| Parameter | Värde | Anteckningar |
| --- | --- | --- |
| N | 10 | Antal noder |
| T | 150 | Tidssteg |
| x_ref | 100,0 | Måljämvikt |
| A | 0,95 | Naturlig avklingningskoefficient |
| B | 1,0 | Ställdonseffektivitet (alla lager) |
| β | 0,02 | Kopplingskoefficient |
| Uppvärmning W | 10 | Steg exkluderade från mätvärden |
| τ_lokal | 2 | Lokal regulators latens |
| τ_regional | 6 | Regional regulators latens |
| τ_global | 12 | Global / central regulators latens |
| σ_lokal | 0,5 | Lokal observationsbrus standardavvikelse |
| σ_regional | 2,0 | Regional observationsbrus standardavvikelse |
| σ_global | 5,0 | Globalt observationsbrus standardavvikelse |
| K_lokal | 0,40 | Lokal regulators förstärkning |
| K_regional | 0,15 | Regional regulators förstärkning |
| K_global | 0,07 | Global regulators förstärkning |
| Snabb magnitud | −35,0 | Impulschocks magnitud |
| Snabb period | 30 | Steg mellan snabba chocker |
| Snabba noder | {2, 7} | Noder som utsätts för snabba chocker |
| Medellång amplitud | 12,0 | Sinusformad tryckamplitud |
| Medellång period | 45 | Period för medellång störning |
| Medellånga noder | {0,1,2,3,4} | Region 0-noder |
| Långsam amplitud | 8,0 | Sekulär driftamplitud |
| Långsam period | 120 | Period för långsam störning |
| Slumpfrö | 42 | För reproducerbarhet |
