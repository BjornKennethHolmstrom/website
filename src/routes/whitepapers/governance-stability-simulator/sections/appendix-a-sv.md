# Appendix A: Matematiska formuleringar

## Ekvation för tillståndsövergång

Kärndynamiken för varje nod följer ett första ordningens tidsdiskret linjärt system med dödtid:

```
x(t+1) = A · x(t) + B · u(t − τ) + d(t) + drift

```

Där:

* `x(t)` — nodens sanna tillstånd vid tiden `t` (skalär i en-nodsmodellen, vektor `x⃗(t)` i multinodsmodellen)
* `A` — naturlig avklingningskoefficient (satt till 0,95, representerar långsam entropi utan intervention)
* `B` — ställdonets effektivitet (satt till 1,0)
* `u(t − τ)` — kontrollåtgärd tillämpad för `τ` steg sedan (dödtidsintegration)
* `d(t)` — yttre störning vid tiden `t`
* `drift = x_ref · (1 − A)` — konstant term som upprätthåller jämvikt vid `x_ref` i frånvaro av störning

## Observationsekvation

Regulatorn observerar inte det sanna tillståndet direkt. Den observerar en brusig mätning:

```
y(t) = x(t) + ε,    ε ~ N(0, σ²)

```

Där `σ` är standardavvikelsen för observationsbruset. Detta modellerar aggregeringsförlust, rapporteringsförvrängning och mätfel. Klyftan mellan `y(t)` och `x(t)` är observerbarhetsunderskottet.

## Styrlag

Båda arkitekturerna använder proportionell återkopplingsstyrning:

```
u(t) = K · (x_ref − y(t))

```

Där `K` är regulatorns förstärkning och `x_ref` är måljämviktstillståndet.

**Arkitektur A** beräknar en enda skalär styrsignal från det nationella genomsnittet av alla nodobservationer:

```
u_A(t) = K_A · (x_ref − mean(y⃗(t)))

```

Denna enhetliga signal sänds sedan ut till alla noder, oavsett deras individuella förhållanden.

**Arkitektur B** beräknar en styrsignal per nod utifrån varje nods lokala observation:

```
u_B,i(t) = K_B · (x_ref − y_i(t))

```

## Stabilitetstak

För ett dödtidsdominerat tidsdiskret system är det ungefärliga stabilitetstaket för regulatorns förstärkning:

```
K_max ≈ 1 / (τ · |A|)

```

Att överskrida detta tak producerar oscillatorisk instabilitet. Taket är lägre för högre latens, vilket är anledningen till att Arkitektur A använder en lägre förstärkning än Arkitektur B — inte som ett modelleringsval, utan som ett stabilitetskrav.

## Multinodskoppling

I tionodsmodellen kopplas intilliggande noder samman av en diffusionsterm som representerar krissmitta:

```
coupling_i(t) = β · Σ_{j ∈ neighbours(i)} (x_j(t) − x_i(t))

```

Där `β = 0,03` är kopplingskoefficienten. Den fullständiga tillståndsövergången för multinodsmodellen är:

```
x⃗(t+1) = A · x⃗(t) + coupling(x⃗(t)) + B · u⃗(t − τ) + d⃗(t) + drift

```

## Prestandamått

**Återhämtningstid** för nod `i` är antalet tidssteg efter krisen tills noden återvänder inom ett tröskelvärde från jämvikt:

```
RT_i = min{t > t_crisis : x_i(t) ≥ x_ref − δ}

```

Där `δ = 5` i den aktuella simuleringen.

**Kumulativt underskott** för nod `i` är integralen av stabilitetsförlusten under jämvikt efter krisen:

```
D_i = Σ_{t > t_crisis} max(0, x_ref − x_i(t))

```

Systemövergripande underskott är summan över alla noder: `D_total = Σ_i D_i`.

## Simuleringsparametrar

| Parameter | Arkitektur A | Arkitektur B |
| --- | --- | --- |
| Latens `τ` | 12 | 2 |
| Observationsbrus `σ` | 6,0 | 0,5 |
| Regulatorförstärkning `K` | 0,30 | 0,45 |
| Naturlig avklingning `A` | 0,95 | 0,95 |
| Ställdonseffektivitet `B` | 1,0 | 1,0 |
| Kopplingskoefficient `β` | 0,03 | 0,03 |
| Krisens magnitud | −45,0 | −45,0 |
| Krisnoder | 2, 7 | 2, 7 |
| Antal noder `N` | 10 | 10 |
| Tidssteg `T` | 120 | 120 |
| Krisens startpunkt `t_crisis` | 20 | 20 |
