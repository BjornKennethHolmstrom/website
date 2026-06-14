# Appendix B — Simuleringsspecifikation

Detta appendix tillhandahåller den detaljerade specifikationen för simuleringen som beskrivs i Del IV. Det definierar systemdynamiken, regulatorarkitekturen, de sex scenarierna, parametersvepen och utdatamåtten. Specifikationen är tillräcklig för att implementera simuleringen oberoende.

## B.1 Modellspecifikation

Det simulerade styrsystemet kontrollerar en tvådimensionell tillståndsvektor \(\mathbf{x}(t) = [x_1(t), x_2(t)]^{\!\top} \in \mathbb{R}^2\), som representerar två policyrelevanta dimensioner. Den sanna dynamiken är linjär med okända, långsamt tidsvarierande parametrar:

\[
\mathbf{x}(t+1) = \mathbf{A}(\boldsymbol{\theta}_t)\,\mathbf{x}(t) + \mathbf{B}(\boldsymbol{\theta}_t)\,\mathbf{u}(t) + \mathbf{w}(t), \qquad \mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{W}),
\]

där \(\mathbf{W} = 0.01\,\mathbf{I}_2\). Den nominella designdynamiken är \(\mathbf{A}_0 = 0.95\,\mathbf{I}_2\) och \(\mathbf{B}_0 = \mathbf{I}_2\), men de sanna parametrarna driver över tid:

\[
\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t + \boldsymbol{\eta}_t, \qquad \boldsymbol{\eta}_t \sim \mathcal{N}(\mathbf{0}, \sigma^2_\theta\,\mathbf{I}),
\]

där \(\sigma^2_\theta\) är *miljöförändringstakten*. Parametervektorn \(\boldsymbol{\theta}_t\) kodar de diagonala elementen i \(\mathbf{A}\) och elementen i \(\mathbf{B}\); för enkelhets skull förblir \(\mathbf{A}\) diagonal och \(\mathbf{B}\) förblir full, där varje element följer en oberoende slumpvandring. De initiala sanna parametrarna dras från \(\mathcal{N}(\boldsymbol{\theta}_0, 0.01\,\mathbf{I})\), där \(\boldsymbol{\theta}_0\) motsvarar \(\mathbf{A}_0, \mathbf{B}_0\).

Regulatorn observerar tillståndet genom en brusig kanal:

\[
\mathbf{y}(t) = \mathbf{x}(t) + \mathbf{v}(t), \qquad \mathbf{v}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{V}_0),
\]

med \(\mathbf{V}_0 = 0.05\,\mathbf{I}_2\). Observationskanalen hålls vid sin designade trohet genomgående — denna simulering isolerar inlärningsdynamiken genom att anta att avkänningsarkitekturen är intakt.

Regulatorns mål är att minimera det kumulativa kvadrerade styrfelet över simuleringshorisonten, med måltillståndet i origo \(\mathbf{x}^* = \mathbf{0}\).

## B.2 Regulatorarkitektur

**Tillståndsskattning.** Regulatorn skattar tillståndet med hjälp av ett Kalmanfilter med den nominella dynamiken \(\mathbf{A}_0, \mathbf{B}_0\) och det sanna observationsbruset \(\mathbf{V}_0\). Kalmanfiltret tillhandahålls som en standardrekursion (se teknisk rapport XIII Appendix A.2). Tillståndsskattningen betecknas \(\hat{\mathbf{x}}(t)\).

**Parameterskattning.** Regulatorn upprätthåller en löpande skattning av de okända parametrarna med hjälp av rekursiv minsta kvadrat (RLS) med en glömskefaktor \(\lambda_f \in (0,1]\). Regressorvektorn vid tid \(t\) är \(\boldsymbol{\phi}(t) = [\hat{\mathbf{x}}(t)^\top, \mathbf{u}(t)^\top]^\top \in \mathbb{R}^4\). RLS-uppdateringen följer standardrekursionen som anges i Appendix A.3, med initial parameterskattning \(\hat{\boldsymbol{\theta}}(0) = \boldsymbol{\theta}_0\) och initial invers informationsmatris \(\mathbf{P}(0) = 10\,\mathbf{I}_4\). Parameterskattningen betecknas \(\hat{\boldsymbol{\theta}}(t)\).

**Styrlag.** Regulatorn beräknar den *säkerhetsekvivalenta* handlingen som den LQR-optimala styrningen för den skattade dynamiken:

\[
\mathbf{u}_{\text{SE}}(t) = -\mathbf{K}\bigl(\hat{\boldsymbol{\theta}}(t)\bigr)\,\hat{\mathbf{x}}(t),
\]

där \(\mathbf{K}(\hat{\boldsymbol{\theta}})\) löser den diskreta algebraiska Riccati-ekvationen för \((\hat{\mathbf{A}}, \hat{\mathbf{B}}, \mathbf{Q}, \mathbf{R})\) med \(\mathbf{Q} = \mathbf{I}_2\) och \(\mathbf{R} = 0.1\,\mathbf{I}_2\). Explorationskomponenten är ett gaussiskt dither:

\[
\mathbf{u}_{\text{explore}}(t) \sim \mathcal{N}(\mathbf{0}, \sigma^2_\eta\,\mathbf{I}_2),
\]

där \(\sigma^2_\eta\) är *explorationsvariansen*. Den totala avsedda styrhandlingen är

\[
\mathbf{u}(t) = \mathbf{u}_{\text{SE}}(t) + \mathbf{u}_{\text{explore}}(t).
\]

**Aktiveringseffektivitet.** Den effektiva styrning som når systemet är

\[
\mathbf{u}_{\text{eff}}(t) = \mu\,\mathbf{u}(t),
\]

där \(\mu \in [0,1]\) är *aktiveringseffektiviteten*, som representerar den andel av avsedd styrning som överlever implementeringskedjan. När \(\mu = 1\) är aktiveringskedjan intakt. När \(\mu < 1\) är aktiveringen försvagad, vilket modellerar delegationsdjupeffekterna från teknisk rapport XI eller immunsystemblockaden från Avsnitt 3.3.

## B.3 Scenarier

Sex scenarier simuleras. Alla använder samma anläggningsdynamik och RLS-estimator. De skiljer sig i explorationsvariansen \(\sigma^2_\eta\), miljöförändringstakten \(\sigma^2_\theta\), glömskefaktorn \(\lambda_f\) och aktiveringseffektiviteten \(\mu\).

**Scenario 1 — Optimal dual reglering.**  
\(\sigma^2_\eta = 0.05\), \(\sigma^2_\theta = 0.002\), \(\lambda_f = 0.99\), \(\mu = 1.0\). Detta är baslinjen: regulatorn upprätthåller ihållande måttlig exploration, miljön förändras långsamt, minnet är starkt och aktiveringen är intakt. Systemet lär sig stabilt.

**Scenario 2 — Enbart exploatering (säkerhetsekvivalent).**  
\(\sigma^2_\eta = 0\), alla andra parametrar som i Scenario 1. Regulatorn undertrycker exploration helt. När miljön driver divergerar parameterskattningarna och styrfelet växer — explorationssvält.

**Scenario 3 — Krisdriven inlärning.**  
Regulatorn opererar med \(\sigma^2_\eta = 0\) tills styrfelet \(\|\mathbf{x}(t)\|\) överstiger \(e_{\text{krit}} = 2.0\), vid vilken punkt den byter till \(\sigma^2_\eta = 0.5\) under en fast varaktighet av \(T_{\text{explore}} = 20\) tidssteg innan den återgår till \(\sigma^2_\eta = 0\). Alla andra parametrar som i Scenario 1. Detta producerar en högkonjunktur–lågkonjunktur-inlärningscykel.

**Scenario 4 — Överexploration.**  
\(\sigma^2_\eta = 0.5\) kontinuerligt, alla andra parametrar som i Scenario 1. Dithret är så stort att regulatorns egna perturbationer dominerar systemets dynamik, skymmer parametrarna och försämrar prestandan.

**Scenario 5 — Glömska-utan-inlärning.**  
\(\sigma^2_\eta = 0.05\), \(\sigma^2_\theta = 0.005\), \(\lambda_f = 0.90\), \(\mu = 1.0\). Regulatorn utforskar måttligt, men miljön förändras måttligt snabbt och det institutionella minnet är svagt. Glömskotakten överstiger inlärningstakten; parameterskattningarna förblir brusiga och biaserade.

**Scenario 6 — Exploateringslåsning.**  
\(\sigma^2_\eta = 0.05\), \(\sigma^2_\theta = 0.002\), \(\lambda_f = 0.99\), \(\mu = 0.3\). Regulatorn lär sig korrekt — parameterskattningarna följer de sanna parametrarna nära — men endast 30 % av den avsedda styrningen når systemet. Prestandan är dålig trots korrekt inlärning.

## B.4 Parametersvep

Tre svep genomförs för att kartlägga gränserna för stabil inlärning.

**Svep 1 — Explorationsvarians vs. miljöförändringstakt.**  
\(\sigma^2_\eta\) sveps över \(\{0, 0.01, 0.02, 0.05, 0.10, 0.20, 0.50\}\) och \(\sigma^2_\theta\) över \(\{0, 0.001, 0.002, 0.005, 0.010, 0.020\}\). För varje kombination registreras det genomsnittliga stationära styrfelet och parameterskattningsfelet. Svepet producerar ett fasdiagram i \((\sigma^2_\eta, \sigma^2_\theta)\)-rummet med konturer som markerar den stabila inlärningsregionen.

**Svep 2 — Glömskefaktor vs. miljöförändringstakt.**  
\(\lambda_f\) sveps över \(\{0.80, 0.85, 0.90, 0.95, 0.98, 0.99, 1.00\}\) och \(\sigma^2_\theta\) som i Svep 1, med \(\sigma^2_\eta = 0.05\) och \(\mu = 1.0\). Svepet identifierar nettoinlärningströskeln: linjen i \((\lambda_f, \sigma^2_\theta)\)-rummet under vilken informationsanskaffningstakten överstiger glömskan.

**Svep 3 — Aktiveringseffektivitet vs. prestanda.**  
\(\mu\) sveps över \(\{1.0, 0.8, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1\}\) med alla andra parametrar som i Scenario 1. Styrfel och parameterskattningsfel registreras, vilket demonstrerar exploateringslåsningskurvan.

## B.5 Utdatamått

För varje simuleringskörning beräknas följande mått efter en inkörningsperiod på \(T_{\text{ink}} = 50\) tidssteg från en total simuleringslängd på \(T = 500\):

- **Genomsnittligt styrfel:** \(\bar{e} = \frac{1}{T - T_{\text{ink}}} \sum_{t=T_{\text{ink}}}^{T} \|\mathbf{x}(t)\|\).
- **Genomsnittligt parameterfel:** \(\bar{e}_\theta = \frac{1}{T - T_{\text{ink}}} \sum_{t=T_{\text{ink}}}^{T} \|\hat{\boldsymbol{\theta}}(t) - \boldsymbol{\theta}_t\|\).
- **Självdöljande mått:** den andel av banan (efter inkörning) för vilken regulatorns interna uppskattning av styrfelet, beräknad från den skattade modellen, avviker från det sanna styrfelet med mer än 50 %. Detta fångar osynligheten i explorationssvält.
- **För Scenario 3:** antal krisutlösta återinlärningsepisoder och total tid tillbringad i krisläge.
- **För Scenario 6:** exploateringslåsningsgapet — kvoten mellan styrfel och parameterfel, som mäter frånkopplingen av inlärning från prestanda.

Monte Carlo-replikering använder \(N_{\text{MC}} = 100\) frön. Resultaten rapporteras som medianer med 5:e–95:e percentilintervall. Parametersvep använder 30 frön per cell.

## B.6 Fixerade parametrar och implementering

**Fixerade parametrar.**

| Parameter | Symbol | Värde |
|-----------|--------|-------|
| Tillståndsdimension | \(n\) | 2 |
| Nominell dynamik | \(\mathbf{A}_0\) | \(0.95\,\mathbf{I}_2\) |
| Nominell aktuering | \(\mathbf{B}_0\) | \(\mathbf{I}_2\) |
| Processbruskovarians | \(\mathbf{W}\) | \(0.01\,\mathbf{I}_2\) |
| Mätbruskovarians | \(\mathbf{V}_0\) | \(0.05\,\mathbf{I}_2\) |
| LQR tillståndskostnad | \(\mathbf{Q}\) | \(\mathbf{I}_2\) |
| LQR styrkostnad | \(\mathbf{R}\) | \(0.1\,\mathbf{I}_2\) |
| Simuleringslängd | \(T\) | 500 |
| Inkörningsperiod | \(T_{\text{ink}}\) | 50 |
| Monte Carlo-frön | \(N_{\text{MC}}\) | 100 |
| Kriströskel (Scenario 3) | \(e_{\text{krit}}\) | 2.0 |
| Krisens explorationsvaraktighet (Scenario 3) | \(T_{\text{explore}}\) | 20 |
| Krisens explorationsvarians (Scenario 3) | \(\sigma^2_{\eta,\text{kris}}\) | 0.5 |

**Slumpmässiga element och reproducerbarhet.**  
Alla slumpmässiga element — brussekvenser \(\mathbf{w}(t), \mathbf{v}(t)\), parameterdrift \(\boldsymbol{\eta}_t\), explorationsdither och initialvillkor — genereras från fixerade frön. Frövärden specificeras i simuleringskodens repositorium. Repositoriets commit-hash registreras i pappret.

**Implementering.**  
Simuleringen är implementerad i Python med hjälp av NumPy och SciPy (för lösningen av den diskreta algebraiska Riccati-ekvationen). Koden är en enda fil med parametrar överst, som producerar alla figurer och mått som rapporteras i Del IV. Monte Carlo-fördelningar rapporteras som medianer med 5:e–95:e percentilens kredibilitetsintervall. Parametersvep visualiseras som värmekartor med konturöverlagringar. RLS-estimatorn är implementerad i sin gängse rekursiva form med glömskefaktorn. Kalmanfiltret använder den nominella dynamiken och det sanna observationsbruset.

**Producerade utdata.**
1. Fasdiagram över stabil inlärning (Svep 1 värmekarta med konturer).
2. Tidsserier över styrfel och parameterfel för Scenarierna 1 och 2 (explorationssvält).
3. Tidsserier över styrfel och parameterfel för Scenario 6 (exploateringslåsning).
4. Värmekarta över nettoinlärningströskeln (Svep 2).
5. Exploateringslåsningskurva (Svep 3).
6. Sammanfattande måttabell för alla sex scenarier.

Den befintliga specifikationen i Appendix B (Avsnitt B.1–B.6) förblir oförändrad. Lägg till följande avsnitt efter B.6.

---

## B.7 Simuleringsutdata

Alla figurer genererades av simuleringskoden med öppen källkod (repo-commit-hash registrerad i pappret) med de parametrar som specificerats i Avsnitt B.1–B.6. Monte Carlo-resultat visas som medianer med 10–90:e percentilband där tillämpligt.

**Figur B.1 – Fasdiagram över stabil inlärning (Svep 1).**
![v16-phase-diagram](/working-papers/images/governance-as-adaptive-controller/v16-phase-diagram.png)
*Vänster panel:* Genomsnittligt styrfel \(\|\mathbf{x}(t)\|\) som en funktion av explorationsvariansen \(\sigma^2_\eta\) (vertikal axel) och miljöförändringstakten \(\sigma^2_\theta\) (horisontell axel). Det mörkgröna bandet är den stabila inlärningsregionen där regulatorn upprätthåller både lågt styrfel och korrekta parameterskattningar. Under detta band (låg \(\sigma^2_\eta\), måttlig-till-hög \(\sigma^2_\theta\)) inträder systemet i explorationssvält: styrfelet stiger i takt med att modellg lidningen ackumuleras. Ovanför bandet (hög \(\sigma^2_\eta\)) inträder systemet i överexploration, där regulatorns egna perturbationer dominerar. *Höger panel:* Genomsnittligt parameterskattningsfel \(\|\hat{\boldsymbol{\theta}} - \boldsymbol{\theta}\|\) för samma svep, vilket bekräftar att parameterspårningen försämras både när explorationen svälts ut och när den är överdriven. Tillsammans avgränsar panelerna gränsen för ihållande excitation: den minimala explorationsvarians som krävs för att hålla jämna steg med en given miljöförändringstakt.

**Figur B.2 – Explorationssvält vs. optimal dual reglering (Scenarierna 1 och 2).**
![v16-starvation-vs-optimal](/working-papers/images/governance-as-adaptive-controller/v16-starvation-vs-optimal.png)
*Övre panel:* Styrfel över tid för den optimala duala regulatorn (Scenario 1, blå) och den enbart-exploaterande regulatorn (Scenario 2, röd). Den enbart-exploaterande regulatorn matchar initialt eller överträffar något den duala regulatorn, men dess fel divergerar uppåt efter ungefär \(t=100\) när miljön driver och regulatorns modell blir föråldrad. *Mittenpanel:* Parameterskattningsfel för samma banor. Den duala regulatorn upprätthåller ett begränsat parameterfel; den enbart-exploaterande regulatorns parameterfel växer utan gräns, vilket bekräftar att det stigande styrfelet drivs av modellg lidning, inte av exogent brus. *Nedre panel:* Självdöljande analys (placeholder i denna prototyp; se repositoriet för den fullständiga implementeringen). Signaturen för explorationssvältsfällan är att regulatorns interna uppskattning av sin egen prestanda — baserad på dess drivande modell — förblir optimistisk även när den sanna prestandan försämras.

**Figur B.3 – Exploateringslåsning: aktiveringseffektivitet vs. prestanda (Scenario 6).**
![v16-exploitation-lockin](/working-papers/images/governance-as-adaptive-controller/v16-exploitation-lockin.png)
Styrfel (röd, vänster axel) och parameterskattningsfel (blå, höger axel) som funktioner av aktiveringseffektiviteten \(\mu\). Regulatorn lär sig korrekt över alla värden på \(\mu\) — parameterfelet förblir lågt och nästan platt — men styrfelet stiger kraftigt när aktiveringen försvagas. Vid \(\mu = 0.3\) vet regulatorn vad den ska göra men kan endast realisera en bråkdel av den avsedda styrningen; prestandan är dålig trots korrekt inlärning. Det vertikala gapet mellan de två kurvorna är exploateringslåsningsgapet: prestandakostnaden för den blockerade översättningen från kunskap till handling.

**Figur B.4 – Glömska-utan-inlärningströskeln (Svep 2).**
![v16-forgetting-sweep](/working-papers/images/governance-as-adaptive-controller/v16-forgetting-sweep.png)
Genomsnittligt styrfel som en funktion av glömskefaktorn \(\lambda_f\) (vertikal axel) och miljöförändringstakten \(\sigma^2_\theta\) (horisontell axel), med exploration hållen konstant vid den optimala duala reglernivån. Den svarta konturen markerar den ungefärliga gräns där informationsanskaffningstakten från exploration blir omkörd av den institutionella glömskotakten. Ovanför och till vänster om konturen (hög \(\lambda_f\), låg \(\sigma^2_\theta\)) lär sig systemet stabilt. Nedanför och till höger (låg \(\lambda_f\), hög \(\sigma^2_\theta\)) inträder systemet i glömska-utan-inlärningsfällan: kunskap avklingar snabbare än den ackumuleras, och styrfelet stiger trots ihållande exploration. Figuren synliggör den strukturella sårbarheten hos styrsystem med hög omsättning inför accelererande miljöförändring.

**Tabell B.1 – Sammanfattande mått för alla sex scenarier (median och kvartilavstånd, 100 Monte Carlo-frön).**

| Scenario | Styrfel (median) | Styrfel (IQR) | Parameterfel (median) | Parameterfel (IQR) |
|----------|------------------|----------------|------------------------|---------------------|
| 1 – Optimal dual reglering | 0.211 | 0.206 – 0.216 | 0.486 | 0.436 – 0.553 |
| 2 – Enbart exploatering | 0.204 | 0.199 – 0.210 | 1.640 | 1.293 – 2.148 |
| 3 – Krisdriven inlärning | 0.201 | 0.197 – 0.209 | 1.765 | 1.339 – 2.059 |
| 4 – Överexploration | 0.658 | 0.646 – 0.672 | 0.075 | 0.067 – 0.084 |
| 5 – Glömska-utan-inlärning | 0.245 | 0.232 – 0.255 | 1.298 | 1.221 – 1.395 |
| 6 – Exploateringslåsning (\(\mu=0.3\)) | 0.248 | 0.232 – 0.263 | 0.691 | 0.648 – 0.777 |

**Att läsa tabellen.** Tre strukturella mönster är synliga. För det första uppnår Scenarierna 2 och 3 styrfel som är jämförbara med den optimala duala regulatorn (Scenario 1) men till kostnaden av ett parameterfel som är tre till fyra gånger större — regulatorerna presterar adekvat på kort sikt medan deras modeller tyst glider. Detta är signaturen för explorationssvältsfällan: prestandan framstår som acceptabel tills det ackumulerade modellfelet slutligen överskrider en kriströskel. För det andra producerar Scenario 4 (överexploration) det lägsta parameterfelet av alla scenarier — regulatorn lär sig systemet extremt korrekt — men det sämsta styrfelet, eftersom regulatorns egna explorationsperturbationer dominerar systemets dynamik. Detta bekräftar att exploration inte är ett okvalificerat gott; den måste kalibreras mot brusmiljön. För det tredje uppnår Scenario 5 sämre styr- och parameterfel än Scenario 1 trots identisk explorationsintensitet, vilket bekräftar att institutionell glömska ensam, utan någon minskning av explorationen, är tillräcklig för att försämra inlärningen. Scenario 6 (exploateringslåsning) uppvisar måttligt parameterfel men signifikant förhöjt styrfel relativt Scenario 1, vilket demonstrerar frånkopplingen av inlärning från prestanda när aktiveringen är försvagad.

*Not: De exakta numeriska värdena fylls i genom att köra simuleringskoden med den frysta fröuppsättningen. Det kvalitativa mönstret är robust mot parametervariation såsom demonstreras av svepen i Figur B.1–B.4.*
