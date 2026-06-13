# Appendix B — Simuleringsspecifikation

Detta appendix tillhandahåller den detaljerade specifikationen för simuleringen som beskrivs i Del IV. Det definierar systemdynamiken, genereringen av kopplingsstrukturen, de fyra gränsscenarierna, regulatordesignen, skärmekaniken för Sykes-Picot och stabilitetsmåttet. Specifikationen är tillräcklig för att implementera simuleringen oberoende.

## B.1 Systemdynamik

Den simulerade världen består av N = 12 delsystem. Varje delsystem i har en intern tillståndsvektor **x**_i(t) ∈ ℝ³, som representerar tre styrningsrelevanta dimensioner (t.ex. ekonomisk produktion, miljökvalitet, social stabilitet). Den kontinuerliga dynamiken diskretiseras med tidssteget Δt = 1 för simulering.

Den diskreta dynamiken för delsystem i är:

**x**_i(t+1) = **A**_ii **x**_i(t) + **B**_i **u**_i(t) + Σ_{j≠i} **K**_ij **x**_j(t) + **w**_i(t)   (B.1)

där:

- **A**_ii = 0,95 · **I**₃: intern dynamik med långsamt avklingande (5 % per tidssteg), identisk över delsystem.
- **B**_i = **I**₃: varje regulator kan direkt påverka alla tre tillståndsdimensionerna för sina tilldelade delsystem med enhetseffektivitet.
- **K**_ij ∈ ℝ³ˣ³: kopplingsmatris från delsystem j till delsystem i, genererad från den stokastiska blockmodellen (Avsnitt B.2).
- **w**_i(t) ~ 𝒩(**0**, **W**): exogent gaussiskt brus med kovarians **W** = 0,01 · **I**₃.

Den fullständiga tillståndsvektorn är **x**(t) = [**x**_1(t)^T, …, **x**_N(t)^T]^T ∈ ℝ³⁶. Måltillståndet är **x**_mål = **0**.

## B.2 Kopplingsstruktur: Stokastisk blockmodell

Kopplingsmatriserna **K**_ij genereras från en stokastisk blockmodell (SBM) med M = 4 block (kluster) av storleken s = 3 delsystem vardera. SBM:n tilldelar varje delsystem i ett block b(i) ∈ {1, …, 4}. Kopplingsstyrkan från delsystem j till delsystem i bestäms av blocktillhörigheterna:

**K**_ij = γ · c_{b(i),b(j)} · **R**_ij   (B.2)

där:

- γ ≥ 0 är den globala kopplingsstyrkeparametern, svept från 0,01 till 0,50 i simuleringen.
- c_{p,q} ∈ [0,1] är kopplingstätheten på blocknivå mellan blocken p och q.
- **R**_ij ∈ ℝ³ˣ³ är en slumpmatris med element dragna från 𝒰(−1, 1), normaliserad så att ‖**R**_ij‖ = 1 (spektralnorm). **R**_ij är fixerad för varje (i,j)-par över alla simuleringskörningar och parametersvep, vilket säkerställer att endast kopplingsstyrkan γ varierar.

Kopplingstätheterna på blocknivå är:

- **Inom-block-koppling:** c_{p,p} = 1,0 för alla p. Delsystem inom samma block är tätt kopplade.
- **Mellan-block-koppling:** c_{p,q} = c_mellan för p ≠ q, där c_mellan = 0,1. Kopplingen över blockgränser är svag men icke-noll.

Denna struktur skapar fyra naturliga kluster om tre delsystem vardera, med stark intern koppling och svag extern koppling. Dessa kluster representerar systemets "naturliga gränser": den rumsliga skala vid vilken dynamiken är övervägande intern.

Kopplingen är dubbelriktad men inte nödvändigtvis symmetrisk: **K**_ij och **K**_ji är oberoende slumpmatriser, skalade med samma blocknivåtäthet. Diagonalblocken i den fullständiga kopplingsmatrisen **K** = [**K**_ij] är täta; de icke-diagonala blocken är glesa och svaga.

## B.3 Scenarier för jurisdiktionella gränser

En gränskonfiguration är en partition 𝒫 = {𝒥₁, …, 𝒥_M} av de N delsystemen i M jurisdiktioner. Varje jurisdiktion 𝒥_α är en mängd delsystemindex som tilldelats regulator α. Regulatorn för jurisdiktion α observerar och aktiverar endast delsystemen i 𝒥_α.

De fyra scenarierna skiljer sig i hur 𝒫 konstrueras i förhållande till SBM-blockstrukturen.

**Scenario (a) — Perfekt matchade gränser.** Partitionen 𝒫 sammanfaller exakt med SBM-blocken: 𝒥_α = {i : b(i) = α} för α = 1, …, 4. Varje regulator styr exakt ett naturligt kluster. Gränsöverskridande koppling är endast den svaga mellan-block-kopplingen. B_strukt är minimal.

**Scenario (b) — Westfaliska standardgränser.** De 12 delsystemen tilldelas slumpmässigt till 4 jurisdiktioner av storlek 3, utan hänsyn till SBM-blockstrukturen. Specifikt dras en slumpmässig permutation av {1, …, 12}; de första 3 indexen bildar 𝒥₁, de nästa 3 bildar 𝒥₂, och så vidare. Partitionen dras en gång och hålls fix över alla parametersvep och Monte Carlo-körningar för jämförbarhet. Vissa jurisdiktioner kommer att innehålla delsystem från olika SBM-block, vilket introducerar gränsöverskridande koppling som är starkare än mellan-block-baslinjen.

**Scenario (c) — Sykes-Picot-gränser.** Partitionen konstrueras för att medvetet maximera gränsmissanpassning genom att skära genom de högst viktade interna kanterna hos SBM-blocken. Konstruktionen specificeras i Avsnitt B.5.

**Scenario (d) — Adaptiv gränsförhandling.** Simuleringen börjar med den westfaliska gränskonfigurationen (Scenario b). Varje T_omf = 50 tidssteg beräknar varje regulator en uppskattning av sitt gränsmissanpassningsindex B_upp (se nedan) från den observerade variansen i sitt interna tillstånd. Om B_upp överstiger ett tröskelvärde B_trösk = 0,3 initierar regulatorn gränsförhandling. Förhandlingsprocessen tar τ_just = 10 tidssteg. Under dessa 10 steg fortsätter regulatorn att operera under den gamla gränsen. Vid slutet av τ_just justeras gränsen: regulatorn med högst B_upp slås samman med en slumpmässigt vald angränsande jurisdiktion (en med vilken den delar hög gränsöverskridande koppling), och den sammanslagna jurisdiktionens delsystem styrs av en enda regulator. Simuleringen följer den resulterande gränskonfigurationen över tid och stabilitetsutfallen.

B_upp för en regulator beräknas som andelen av variansen i dess jurisdiktions aggregerade tillstånd som kan tillskrivas gränsöverskridande inflöden, uppskattad genom att jämföra den faktiska tillståndsevolutionen med ett kontrafaktiskt scenario där gränsöverskridande kopplingstermer sätts till noll.

## B.4 Regulatorspecifikation

Varje jurisdiktion α styrs av en regulator med perfekta interna egenskaper. Regulatorn observerar tillståndet för sina tilldelade delsystem med noll latens, noll brus och full dimensionalitet:

**y**_α(t) = **x̂**_α(t) = [**x**_i(t)^T]_{i∈𝒥_α}^T   (B.3)

Regulatorn tillämpar proportionell tillståndsåterkoppling:

**u**_α(t) = −**K**_c · **x̂**_α(t)   (B.4)

där **K**_c är en blockdiagonal förstärkningsmatris optimerad för den nominella interna dynamiken. Specifikt är **K**_c lösningen till den diskreta linjärkvadratiska regulatorns (LQR) problem för det isolerade nominella systemet **x̂**_α(t+1) = **Â**_α **x̂**_α(t) + **B̂**_α **u**_α(t), med tillståndskostnadsmatris **Q** = **I** och styrkostnadsmatris **R** = 0,1 · **I**. Den resulterande förstärkningen är:

**K**_c = (**R** + **B̂**_α^T **P** **B̂**_α)⁻¹ **B̂**_α^T **P** **Â**_α   (B.5)

där **P** är lösningen till den diskreta algebraiska Riccati-ekvationen.

Eftersom **Â**_α och **B̂**_α är identiska för alla jurisdiktioner (den interna dynamiken är densamma, och varje jurisdiktion kontrollerar en delmängd delsystem med enhetsaktivering), är **K**_c identisk för alla regulatorer. Med **A**_ii = 0,95**I** och enhetsaktivering är LQR-förstärkningen ungefär **K**_c = 0,75 · **I** per delsystem, vilket ger stabil intern reglering med en insvängningstid på ungefär 10–15 tidssteg.

Regulatorerna kommunicerar inte, samordnar sig inte eller delar information. Var och en agerar enbart på sina egna observationer.

## B.5 Sykes-Picots skärmekanik

Scenario (c) konstruerar jurisdiktionella gränser som medvetet skär genom de högst viktade interna kanterna hos SBM-blocken. Proceduren är:

1. **Beräkna kantvikter.** För varje par av delsystem (i, j) inom samma SBM-block, beräkna kopplingsvikten w_ij = ‖**K**_ij‖ + ‖**K**_ji‖ (summan av spektralnormerna för de två riktade kopplingsmatriserna). Dessa är de interna kanterna i de naturliga klustren.

2. **Rangordna kanter.** Inom vart och ett av de 4 blocken, rangordna de 3 interna kanterna (ett block av storlek 3 har 3 välj 2 = 3 oriktade par) efter w_ij i fallande ordning.

3. **Identifiera skärmål.** För varje block, välj den högst viktade kanten. Denna kant förbinder två delsystem som är det starkast kopplade paret i blocket.

4. **Tilldela till olika jurisdiktioner.** För varje vald högst viktad kant (i, j), tilldela delsystem i till jurisdiktion 𝒥_α och delsystem j till jurisdiktion 𝒥_β, där α ≠ β. Det tredje delsystemet i blocket tilldelas en av de två jurisdiktionerna godtyckligt, vilket säkerställer att varje jurisdiktion slutar med exakt 3 delsystem totalt.

5. **Balansera jurisdiktioner.** Tilldelningen löses som ett grafpartitioneringsproblem: vi söker en partition av de 12 delsystemen i 4 jurisdiktioner av storlek 3 som maximerar den totala vikten av kanter som *skärs* av partitionen (dvs. kanter vars ändpunkter ligger i olika jurisdiktioner). Detta är ekvivalent med problemet med maximal viktad skärning på grafen av inom-block-kanter, med bivillkoret lika jurisdiktionsstorlekar. För N = 12 och blockstorlek 3 är en exakt lösning möjlig genom enumerering över alla balanserade partitioner.

Den resulterande partitionen delar varje SBM-block över minst två jurisdiktioner, och de högst viktade interna kopplingarna klipps av av jurisdiktionella gränser. Varje regulator behandlar nu en kausalt kritisk tillståndsvariabel — ett av de starkast kopplade delsystemsparen i systemet — som en extern störning.

## B.6 Stabilitetsmått

Det primära stabilitetsmåttet för en simuleringskörning är den tidsgenomsnittliga summan av kvadrerade avvikelser från måltillståndet, negerat så att högre värden indikerar bättre stabilitet:

S = − (1/T) Σ_{t=T_ink}^{T} Σ_i ‖**x**_i(t)‖²   (B.6)

där T = 500 är den totala simuleringslängden och T_ink = 50 är en inkörningsperiod som utesluts för att avlägsna transienta effekter från initialvillkoren.

En simuleringskörning klassificeras som *instabil* om tillståndsnormen växer utan gräns — specifikt, om max_t Σ_i ‖**x**_i(t)‖² överstiger en divergenströskel D_trösk = 10⁴. I praktiken producerar instabila körningar exponentiellt divergerande banor som överstiger denna tröskel långt före T = 500. Instabilitetsgraden för en given parameterkonfiguration är andelen Monte Carlo-körningar (av 100) som klassificeras som instabila.

För stabila körningar tillhandahåller S ett kontinuerligt mått på stabilitetsförsämring: mer negativt S indikerar större ihållande fluktuationer kring målet. S rapporteras som en fördelning (median och 5:e–95:e percentilen) över de 100 Monte Carlo-fröna.

Ett sekundärt mått är M-Δ-slingans förstärkning, uppskattad från simuleringsdata. För en given jurisdiktion α uppskattas den empiriska slingförstärkningen som:

‖**M**_α **Δ**_α‖ ≈ [Var(w_in,α) / Var(y_out,α)]^{1/2}   (B.7)

där w_in,α är den gränsöverskridande inflödestermen Σ_{j∉𝒥_α} **K**_ij **x**_j(t) och y_out,α är utflödet Σ_{j∈𝒥_α, k∉𝒥_α} **K**_kj **x**_j(t). Slingförstärkningen beräknas vid varje tidssteg och medelvärdesbildas över körningen. Andelen körningar där den empiriska slingförstärkningen överstiger ett rapporteras.

## B.7 Simuleringsparametrar och implementeringsanteckningar

**Fixerade parametrar:**

| Parameter | Symbol | Värde |
|---|---|---|
| Antal delsystem | N | 12 |
| Delsystemens tillståndsdimension | k | 3 |
| Intern dynamikmatris | **A**_ii | 0,95 · **I**₃ |
| Aktueringsmatris | **B**_i | **I**₃ |
| Bruskovarians | **W** | 0,01 · **I**₃ |
| LQR tillståndskostnad | **Q** | **I** |
| LQR styrkostnad | **R** | 0,1 · **I** |
| SBM-block | M | 4 |
| SBM-blockstorlek | s | 3 |
| Inom-block-kopplingstäthet | c_{p,p} | 1,0 |
| Mellan-block-kopplingstäthet | c_{p,q} (p≠q) | 0,1 |
| Simuleringslängd | T | 500 |
| Inkörningsperiod | T_ink | 50 |
| Divergenströskel | D_trösk | 10⁴ |
| Monte Carlo-frön | — | 100 |
| Förhandlingsintervall (Scenario d) | T_omf | 50 |
| Förhandlingströskel (Scenario d) | B_trösk | 0,3 |
| Förhandlingslatens (Scenario d) | τ_just | 10 |

**Svept parameter:**

| Parameter | Symbol | Intervall |
|---|---|---|
| Global kopplingsstyrka | γ | 0,01, 0,02, 0,05, 0,10, 0,15, 0,20, 0,30, 0,40, 0,50 |

**Slumpmässiga element och reproducerbarhet:** Alla slumpmässiga element — SBM-blocktilldelningarna, kopplingsmatriserna **R**_ij, brussekvenserna **w**_i(t), den slumpmässiga partitionen i Scenario (b) och Monte Carlo-fröna — genereras från fixerade frön. Frövärdena specificeras i simuleringskodens repositorium. Repositoriets commit-hash registreras i pappret.

**Initialvillkor:** Alla delsystem initialiseras vid **x**_i(0) = **0** (måltillståndet). Störningar inträder endast genom bruset **w**_i(t) och de gränsöverskridande kopplingstermerna. Detta säkerställer att varje avvikelse från målet är en konsekvens av systemdynamiken och gränsarkitekturen, inte av initiala transienter.

**Implementering:** Simuleringen är implementerad i Python med hjälp av gängse numeriska bibliotek (NumPy, SciPy för LQR-lösningen). Koden är öppen källkod och deponerad i seriens repositorium. Simuleringsskriptet är en enda fil med parametrar överst, som producerar alla figurer och mått som rapporteras i Del IV. Monte Carlo-fördelningar rapporteras som medianer med 5:e–95:e percentilens kredibilitetsintervall. Parametersvep visualiseras som värmekartor.

**Producerade utdata:**

1. Stabilitetsyta: S (z-axeln) mot B_missanpassning (x-axeln) mot γ (y-axeln), där B_missanpassning beräknas från partitionen som andelen av den totala kopplingsvikten som korsar jurisdiktionella gränser.
2. M-Δ-slingans förstärkning mot γ för varje scenario, med enhetströskeln markerad.
3. Instabilitetsgrad mot γ för varje scenario.
4. För Scenario (d), tidsserier över gränskonfigurationen och B_upp under simuleringskörningen.
5. För Scenario (d), den effektiva stabiliteten som en funktion av kvoten τ_just / (förändringstakten i kopplingen).
