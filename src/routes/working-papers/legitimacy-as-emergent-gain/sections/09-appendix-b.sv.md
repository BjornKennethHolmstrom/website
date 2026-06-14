# Appendix B — Simuleringsspecifikation

Detta appendix tillhandahåller den detaljerade specifikationen för simuleringen som beskrivs i Del IV. Det definierar systemdynamiken, legitimitetsuppdateringsmekanismen med delat-tillstånd-transparens och hysteresasymmetri, de fyra scenarierna, parametersvepen och utdatamåtten. Specifikationen är tillräcklig för att implementera simuleringen oberoende.

## B.1 Modellspecifikation

Det simulerade styrsystemet kontrollerar en tvådimensionell tillståndsvektor \(\mathbf{x}(t) = [x_1(t), x_2(t)]^{\!\top} \in \mathbb{R}^2\), som representerar två policyrelevanta dimensioner såsom ekonomisk produktion och miljökvalitet, eller tjänsteleverans och fiskal balans. Dynamiken är linjär och tidsinvariant, där legitimitet inträder som en multiplikativ förstärkning på aktiveringen och en invers divisor på observationsbruset.

**Sann dynamik.**
\[
\mathbf{x}(t+1) = \mathbf{A}\,\mathbf{x}(t) + L_B(t)\,\mathbf{B}\,\mathbf{u}(t) + \mathbf{w}(t),
\qquad \mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{W}),
\]
där
\[
\mathbf{A} = 0.95\,\mathbf{I}_2, \quad \mathbf{B} = \mathbf{I}_2, \quad \mathbf{W} = 0.01\,\mathbf{I}_2.
\]
Det okontrollerade systemet avklingar långsamt mot origo (måltillståndet). Aktiveringseffektiviteten multipliceras med aktiverings-legitimitetsparametern \(L_B(t) \in [0,1]\).

**Observation.**
\[
\mathbf{y}(t) = \mathbf{C}\,\mathbf{x}(t) + \mathbf{v}(t), \qquad \mathbf{v}(t) \sim \mathcal{N}\!\bigl(\mathbf{0}, \mathbf{V}(t)\bigr),
\]
med \(\mathbf{C} = \mathbf{I}_2\) (fullständig tillståndsobservation upp till brus) och
\[
\mathbf{V}(t) = \frac{\mathbf{V}_0}{L_C(t)}, \qquad \mathbf{V}_0 = 0.05\,\mathbf{I}_2.
\]
Observations-legitimitetsparametern \(L_C(t) \in [0,1]\) skalar mätbrusets kovarians omvänt: när \(L_C\) faller stiger bruset utan gräns.

**Tillståndsskattning.**  
Regulatorn upprätthåller en tillståndsskattning \(\hat{\mathbf{x}}(t)\) via ett Kalmanfilter såsom specificerats i Appendix A.2. Filtret förses med de sanna legitimitetsvärdena \(L_B(t), L_C(t)\) (regulatorn känner till sin egen aktuella legitimitetsnivå; simuleringen modellerar inte feluppfattning av L hos regulatorn, även om det vore en naturlig utvidgning).

**Styrlag.**  
Regulatorn tillämpar proportionell tillståndsåterkoppling baserat på den filtrerade skattningen:
\[
\mathbf{u}(t) = -\mathbf{K}\,\hat{\mathbf{x}}(t),
\]
där \(\mathbf{K}\) är den oändliga-horisontens linjärkvadratiska regulatorförstärkning (LQR) beräknad för det nominella designsystemet \(( \mathbf{A}, \mathbf{B}, \mathbf{Q}, \mathbf{R} )\) med tillståndskostnad \(\mathbf{Q} = \mathbf{I}_2\) och styrkostnad \(\mathbf{R} = 0.1\,\mathbf{I}_2\). Lösning av den diskreta algebraiska Riccati-ekvationen ger \(\mathbf{K} \approx 0.75\,\mathbf{I}_2\) för de valda parametrarna. Denna förstärkning är optimal när \(L_B = 1\) och används oavsett den aktuella legitimitetsnivån, så att prestandaförsämring återspeglar legitimitetsmultiplikatorn snarare än regulatoravstämning. I Scenario 3 tillåts regulatorn att minska sin förstärkning under det nominella värdet för att simulera förstärkningsschemaläggning.

## B.2 Legitimitetsdynamik

Den sammansatta legitimiteten \(L(t)\) modelleras som en skalär med \(L_B(t) = L_C(t) = L(t)\). Dess evolution följer uppdateringsekvationen i Appendix A.3, implementerad med hysteresasymmetri, en delat-tillstånd-transparensmekanism och en stokastisk svekshazard.

**Legitimitetsuppdatering.**
\[
L(t+1) = \operatorname{clip}\!\Bigl(L(t) - \alpha(t)\,\|\mathbf{x}_{\text{rap}}(t)\|^2 + \beta\,T(t) - \gamma\,D(t) + \delta,\; 0,\; 1\Bigr),
\]
där
- \(\mathbf{x}_{\text{rap}}(t)\) är det tillstånd som uppfattas av den styrda befolkningen,
- \(T(t) \in [0,1]\) är regulatorns valda transparensnivå,
- \(D(t) \in \{0,1\}\) indikerar en avslöjandehändelse av svek,
- \(\delta = 0.005\) är en liten exogen tillitsdrift,
- \(\beta = 0.08\) (transparenskänslighet) i alla scenarier om inget annat specificeras.

**Hysteresasymmetrisk leveranskänslighet.**  
\[
\alpha(t) = 
\begin{cases}
\alpha_{\text{nedgång}} = 0.12, & \text{om } \|\mathbf{x}_{\text{rap}}(t)\|^2 > \|\mathbf{x}_{\text{rap}}(t-1)\|^2,\\[4pt]
\alpha_{\text{återhämtning}} = 0.03, & \text{om } \|\mathbf{x}_{\text{rap}}(t)\|^2 \le \|\mathbf{x}_{\text{rap}}(t-1)\|^2,
\end{cases}
\]
vilket ger en 4:1 nedgång-till-återhämtning-kvot.

**Delat-tillstånd-transparens.**  
När regulatorn väljer undertryckning är det rapporterade tillståndet en konvex kombination av det sanna tillståndet och den utlovade referensen \(\mathbf{x}_{\text{utlovat}} = \mathbf{0}\) (målet):
\[
\mathbf{x}_{\text{rap}}(t) = \lambda\,\mathbf{x}(t) + (1-\lambda)\,\mathbf{0} = \lambda\,\mathbf{x}(t),
\]
med undertryckningsparameter \(\lambda \in [0,1]\). \(\lambda = 1\) är full transparens; \(\lambda < 1\) gör det sanna tillståndet smickrande närmare noll (målet) i allmänhetens ögon.

**Dold avvikelse och svekshazard.**  
Den kumulativa dolda avvikelsen utvecklas som
\[
E_{\text{svek}}(t+1) = E_{\text{svek}}(t) + \|\mathbf{x}(t) - \mathbf{x}_{\text{rap}}(t)\|^2,
\]
med \(E_{\text{svek}}(0) = 0\). Sannolikheten för avslöjande vid tid \(t\) är
\[
\Pr(\text{avslöjande vid }t) = 1 - \exp\!\bigl(-h\,E_{\text{svek}}(t)\bigr),
\]
med hazardkoefficient \(h = 0.02\). Vid varje tidssteg avgör ett likformigt slumptal om avslöjande inträffar. Vid avslöjande sätts \(D(t)\) till \(1\) för det steget, \(\lambda\) tvingas permanent till \(1\) (regulatorn kan inte längre dölja), och sveksbestraffningen \(-\gamma D(t)\) tillämpas. Svekskänsligheten \(\gamma\) sätts enligt legitimitetsregimen:
- Scenarier med byggd legitimitet: \(\gamma_{\text{byggd}} = 0.5\).
- Scenarier med lånad legitimitet: \(\gamma_{\text{lånad}} = 3.0\).

**Transparensnivå \(T(t)\).**  
I simuleringen är transparensen \(T(t)\) inte kontinuerligt optimerad utan sätts som en scenariosparameter. I hög-transparens-scenarier är \(T = 1\) och \(\lambda = 1\); i undertryckningsscenarier är \(T = 0.2\) och \(\lambda = 0.3\) (typiska värden för lånad legitimitet).

## B.3 Scenarier

Fyra scenarier simuleras, motsvarande felsätten i Del III. Alla använder samma anläggningsdynamik och LQR-regulator (om inget annat anges för återhämtningsscenariot). Scenarierna 2–4 körs med parameteruppsättningar för byggd respektive lånad legitimitet enligt indikation.

**Scenario 1 — Hög-transparens, hög-legitimitets-jämvikt.**  
\(L(0) = 0.7\), \(T = 1\), \(\lambda = 1\) (ingen undertryckning). Inget svek är aktivt. Systemet upplever en måttlig extern chock vid \(t = 50\): en tillfällig förskjutning \(\mathbf{x}(50) \leftarrow \mathbf{x}(50) + [1.5, 0]^{\!\top}\). Scenariot demonstrerar chockabsorption i en transparent regim med hög \(L\). Parametrar: uppsättning för byggd legitimitet.

**Scenario 2 — Legitimitetsfällan.**  
\(L(0) = 0.7\), \(T = 1\), \(\lambda = 1\). Vid \(t = 50\) appliceras en stor extern chock: \(\mathbf{x}(50) \leftarrow \mathbf{x}(50) + [3.0, 0]^{\!\top}\). Det resulterande leveransgapet är substantiellt, vilket utlöser den asymmetriska \(\alpha_{\text{nedgång}}\). Regulatorn fortsätter att tillämpa den nominella LQR-förstärkningen. Simuleringen demonstrerar den självförstärkande spiralen när fallande \(L\) försämrar aktivering och observation, vilket förhindrar återhämtning. Parametrar: uppsättning för byggd legitimitet, sedan även lånad för jämförelse.

**Scenario 3 — Återhämtning genom transparensintervention.**  
\(L(0) = 0.3\) (systemet börjar i låg-\(L\)-attraktorn, antingen exogent eller som sluttillståndet i Scenario 2). Vid \(t = 50\) byter regulatorn till en legitimitetsåteruppbyggnadsstrategi:
- Förstärkningen halveras: \(\mathbf{K}_{\text{återupp}} = 0.5\,\mathbf{K}\).
- Full transparens antas: \(T = 1\), \(\lambda = 1\).
- Det utlovade målet är oförändrat (\(\mathbf{0}\)), men regulatorn accepterar långsammare konvergens.
Scenariot följer återhämtningsbanan och jämför den med ett kontrafaktiskt scenario där regulatorn upprätthåller full förstärkning och inte ökar transparensen. Hysteresgapet mäts som tiden för \(L\) att återgå till \(0.6\) jämfört med tiden det tog att falla från \(0.6\) till \(0.3\).

**Scenario 4 — Lånad-legitimitet-kollaps.**  
\(L(0) = 0.55\), \(T = 0.2\), \(\lambda = 0.3\) (låg transparens, undertryckt rapportering). Ingen extern chock appliceras; systemet utvecklas under processbrus och regulatorns alltmer felkalibrerade interventioner. Det smickrande rapporterade tillståndet upprätthåller skenbar \(L\) medan det sanna tillståndet driver och den dolda avvikelsen \(E_{\text{svek}}\) ackumuleras. Vid en stokastisk utlösarpunkt (styrd av hazarden i B.2) inträffar avslöjande: \(D(t) = 1\), \(\gamma = 3.0\) tillämpas, och \(\lambda\) tvingas till \(1\). Scenariot demonstrerar den katastrofala kollapsen av lånad legitimitet. Parametrar: uppsättning för lånad legitimitet.

## B.4 Parametersvep

Följande svep körs för att karakterisera känslighet och för att producera de värmekartor som beskrivs i Del IV.

1. **Svekskänslighet \(\gamma\):** sveps från \(0.5\) till \(5.0\) i steg om \(0.5\), med fast \(L(0)=0.55\), \(\lambda=0.3\), \(h=0.02\), och alla andra parametrar som i baslinjen för lånad legitimitet. För varje \(\gamma\) registrerar vi det lägsta \(L\) efter avslöjande och andelen Monte Carlo-körningar som går in i fällan (\(L\) faller under \(L_{\text{krit}}\) och återhämtar sig inte inom simuleringsfönstret).

2. **Undertryckningsvaraktighet (tid före avslöjande):** hazardkoefficienten \(h\) varieras omvänt med den förväntade tiden till avslöjande. Vi sveper den förväntade undertryckningsvaraktigheten från 10 till 200 tidssteg genom att sätta \(h = 1/\text{förväntad\_varaktighet}\), och för varje värde körs scenariot med lånad legitimitet. Det lägsta \(L\) efter avslöjande registreras som en funktion av undertryckningsvaraktigheten.

3. **Hysteresasymmetri \(\alpha_{\text{nedgång}} / \alpha_{\text{återhämtning}}\):** nedgång-till-återhämtning-kvoten sveps från 1:1 (ingen hysteres) till 10:1 medan det geometriska medelvärdet av \(\alpha_{\text{nedgång}}\) och \(\alpha_{\text{återhämtning}}\) hålls konstant. För varje kvot körs Scenario 2 och andelen körningar som går in i fällan registreras. Detta svep demonstrerar att fällan uppstår när asymmetrin ökar.

4. **Initial legitimitet \(L(0)\):** sveps från \(0.1\) till \(0.9\) i steg om \(0.05\). För varje värde körs Scenario 1 (ingen undertryckning, ingen chock) för att identifiera attraktionsbassängerna. Det stationära \(L\) registreras; det \(L(0)\) under vilket systemet driver till ett låg-\(L\)-jämviktsläge definierar det empiriska \(L_{\text{krit}}\).

## B.5 Utdatamått och nyckelfigurer

**Primära mått (per Monte Carlo-körning).**
- \(L_{\text{slut}} = \text{medelvärdet av } L(t) \text{ över de sista } 50 \text{ tidsstegen}\).
- \(L_{\text{min}} = \min_t L(t)\) över hela banan.
- \(\|\mathbf{x}\|_{\text{slut}} = \text{medelvärdet av } \|\mathbf{x}(t)\| \text{ över de sista } 50 \text{ stegen}\).
- Fällinträdesindikator: \(1\) om \(L\) faller under \(L_{\text{krit}}\) (uppskattat från \(L(0)\)-svepet) och inte återhämtar sig till inom 20% av sitt initiala värde vid \(T=300\); \(0\) annars.
- Återhämtningstid (Scenario 3): antal tidssteg från starten av återuppbyggnadsinterventionen tills \(L\) först når \(0.6\).
- Kollapsmagnitud (Scenario 4): \(L_{\text{före\_avslöjande}} - L_{\text{efter\_avslöjande}}\), där \(L_{\text{före\_avslöjande}}\) är medelvärdet över de 10 stegen före avslöjandet och \(L_{\text{efter\_avslöjande}}\) är minimum under de 20 stegen efter avslöjandet.
- Hysteresgap (Scenario 3 vs. Scenario 2): kvoten mellan återhämtningstid och nedgångstid (tiden för \(L\) att falla från \(0.6\) till \(0.3\) under Scenario 2).

**Nyckelfigurer.**
- **Figur 1:** Fasdiagram i \((L, T)\)-rummet som visar attraktionsbassängerna för hög-\(L\)- och låg-\(L\)-jämviktslägena, med separatrisen \(L_{\text{krit}}\) markerad.
- **Figur 2:** Tidsserier för Scenario 2 (fälla) och Scenario 3 (återhämtning): tre paneler som visar \(\|\mathbf{x}(t)\|\), \(L(t)\) och de effektiva aktiverings-/observationskapaciteterna \(L_B(t), L_C(t)\).
- **Figur 3:** Lånad-legitimitet-kollaps (Scenario 4) med paneler för sann vs. rapporterad tillståndsnorm, skenbar vs. sann \(L\), och kumulativ dold avvikelse \(E_{\text{svek}}\), med den stokastiska avslöjandehändelsen markerad.
- **Figur 4:** Värmekarta över kollapsallvarlighetsgrad: undertryckningsvaraktighet (x-axel) vs. svekskänslighet \(\gamma\) (y-axel), färgkodad efter lägsta \(L\) efter avslöjande, med fällinträdeskonturen överlagrad.

**Monte Carlo och rapportering.**  
Varje scenario körs för \(N_{\text{MC}} = 100\) oberoende frön. Resultaten rapporteras som medianer med 5:e–95:e percentilintervall. Simuleringskoden är öppen källkod, med fixerade frön för reproducerbarhet, och deponerad i seriens repositorium.

## B.6 Simuleringsparametrar och implementeringsanteckningar

**Fixerade parametrar (baslinje för byggd legitimitet).**

| Parameter | Symbol | Värde |
|-----------|--------|-------|
| Tillståndsdimension | \(n\) | 2 |
| Dynamikmatris | \(\mathbf{A}\) | \(0.95\,\mathbf{I}_2\) |
| Aktueringsmatris | \(\mathbf{B}\) | \(\mathbf{I}_2\) |
| Observationsmatris | \(\mathbf{C}\) | \(\mathbf{I}_2\) |
| Processbruskovarians | \(\mathbf{W}\) | \(0.01\,\mathbf{I}_2\) |
| Baslinje mätbruskovarians | \(\mathbf{V}_0\) | \(0.05\,\mathbf{I}_2\) |
| LQR tillståndskostnad | \(\mathbf{Q}\) | \(\mathbf{I}_2\) |
| LQR styrkostnad | \(\mathbf{R}\) | \(0.1\,\mathbf{I}_2\) |
| Nominell LQR-förstärkning (per dim.) | \(\mathbf{K}\) | \(\approx 0.75\,\mathbf{I}_2\) |
| Simuleringslängd | \(T\) | 300 |
| Inkörning (exkluderas från mått) | \(T_{\text{ink}}\) | 20 |
| Monte Carlo-frön | \(N_{\text{MC}}\) | 100 |
| Exogen drift | \(\delta\) | 0.005 |
| Transparenskänslighet | \(\beta\) | 0.08 |

**Parameteruppsättningar för legitimitetsregimer.**

| Parameter | Byggd | Lånad |
|-----------|-------|-------|
| \(\alpha_{\text{nedgång}}\) | 0.12 | 0.25 |
| \(\alpha_{\text{återhämtning}}\) | 0.03 | 0.02 |
| \(\gamma\) | 0.5 | 3.0 |
| Hazardkoeff. \(h\) | 0.02 | 0.02 |
| Typisk \(T\) | 1.0 | 0.2 |
| Typisk \(\lambda\) | 1.0 | 0.3 |

**Slumpmässiga element och reproducerbarhet.**  
Alla slumpmässiga element — brussekvenser \(\mathbf{w}(t), \mathbf{v}(t)\), det stokastiska avslöjandedragningen och eventuella externa chockmagnituder — genereras från fixerade frön. Frövärdena specificeras i simuleringskodens repositorium. Repositoriets commit-hash registreras i pappret.

**Implementering.**  
Simuleringen är implementerad i Python med hjälp av NumPy och SciPy (för lösningen av den diskreta algebraiska Riccati-ekvationen). Koden är en enda fil med parametrar överst, som producerar alla figurer och mått som rapporteras i Del IV. Monte Carlo-fördelningar rapporteras som medianer med 5:e–95:e percentilens kredibilitetsintervall. Parametersvep visualiseras som värmekartor. Kalmanfiltret är implementerat i sin gängse rekursiva form och använder de sanna legitimitetsvärdena \(L(t)\) för att beräkna \(\mathbf{V}(t)\) och den effektiva \(\mathbf{B}_{\text{eff}}(t)\).

## B.7 Simuleringsutdata

Alla figurer genererades av simuleringskoden med öppen källkod (repo-commit-hash registrerad i pappret) med de parametrar som specificerats i Avsnitt B.1–B.6. Monte Carlo-resultat visas som medianer med 10:e–90:e percentilband där det är tillämpligt.

**Figur B.1 – Fasdiagram: attraktionsbassänger i (L₀, T)-rummet.**
![v15-phase-diagram](/working-papers/images/legitimacy-as-emergent-gain/v15-phase-diagram.png)
*Vänster panel:* Slutlig legitimitet \(L(T=300)\) som en funktion av initial legitimitet \(L(0)\) (vertikal axel) och regulatorns transparensnivå \(T\) (horisontell axel), under parameteruppsättningen för byggd legitimitet. Den gröna regionen uppe till höger är hög-\(L\)-bassängen: system som startar med tillräcklig initial legitimitet och upprätthåller adekvat transparens konvergerar till ett stabilt hög-tillit-jämviktsläge. Den röda regionen nere till vänster är låg-\(L\)-attraktorn. *Höger panel:* Sannolikhet att hamna i legitimitetsfällan (definierat som att \(L\) faller under \(L_{\text{krit}}\) och misslyckas med att återhämta sig) för samma parametersvep. Den svarta konturen markerar separatrisen — gränsen mellan bassängerna. System som initieras under och till vänster om denna kontur är överväldigande sannolika att spiralera in i fällan. Figuren synliggör den strukturella skillnaden mellan de två legitimitetsregimerna: byggd legitimitet (visas) uppvisar en bred hög-\(L\)-bassäng; parameteruppsättningen för lånad legitimitet (visas inte; se Avsnitt 4.2) producerar en väsentligt smalare bassäng och en högre separatrix.

**Figur B.2 – Legitimitetsfälla och återhämtningsbanor (Scenarierna 2 och 3).**
![v15-trap-and-recovery](/working-papers/images/legitimacy-as-emergent-gain/v15-trap-and-recovery.png)
*Övre panel:* Tillståndsnorm \(\|\mathbf{x}(t)\|\) för fällscenariot (röd), återhämtningsscenariot med transparensintervention (grön) och det kontrafaktiska utan intervention (grå). Den vertikala streckade linjen vid \(t=50\) markerar den stora externa chocken (Scenario 2) eller starten av återuppbyggnadsinterventionen (Scenario 3). *Mittenpanel:* Legitimitet \(L(t)\) för samma banor. Fällbanan visar en snabb nedgång i \(L\) efter chocken, utan efterföljande återhämtning. Återhämtningsbanan börjar vid lågt \(L(0)=0,30\) och klättrar långsamt medan regulatorn upprätthåller maximal transparens och reducerade mål. Hysteresgapet är synligt som det horisontella avståndet mellan nedgångskurvan och återhämtningskurvan: att återvända till \(L=0,6\) tar väsentligt längre tid än det initiala fallet från \(0,6\) till \(0,3\). Banan utan intervention visar att låg-\(L\)-tillståndet är självuppehållande utan transparens och förstärkningsreduktion. *Nedre panel:* Kalmanförstärkningens norm \(\|\mathbf{K}_{\text{kalman}}\|\) — den vikt tillståndsskattaren ger åt inkommande mätningar. I fällscenariot kollapsar Kalmanförstärkningen mot noll när observationsbruset divergerar med fallande \(L\), vilket bekräftar dashboard-isoleringsmekanismen i Avsnitt 2.3. I återhämtningsscenariot återhämtar sig förstärkningen gradvis i takt med att legitimiteten återuppbyggs.

**Figur B.3 – Lånad-legitimitet-kollaps (Scenario 4).**
![v15-borrowed-collapse](/working-papers/images/legitimacy-as-emergent-gain/v15-borrowed-collapse.png)
Sex representativa banor (åtskilda av färg) som upplevde en stokastisk avslöjandehändelse. *Övre panel:* Sann tillståndsnorm \(\|\mathbf{x}(t)\|\) (heldragen) och rapporterad tillståndsnorm \(\|\mathbf{x}_{\text{rap}}(t)\|\) (streckad). Före avslöjandet är det rapporterade tillståndet smickrande jämfört med det sanna tillståndet — den styrda befolkningen uppfattar bättre utfall än vad som faktiskt existerar. Efter avslöjandet (vertikala prickade linjer) konvergerar de två. *Mittenpanel:* Legitimitet \(L(t)\). Skenbar \(L\) upprätthålls av den undertryckta rapporteringen fram till avslöjandeögonblicket, då sveksbestraffningen \(\gamma = 3,0\) tillämpas och \(L\) kollapsar katastrofalt — och faller långt under den nivå som ärlig styrning med samma underliggande prestanda skulle ha producerat. *Nedre panel:* Kumulativ dold avvikelse \(E_{\text{svek}}(t)\). Avvikelsen ackumuleras under undertryckningsperioden; avslöjandet inträffar när en stokastisk hazard (styrd av \(h=0,02\)) utlöses. Längre undertryckning producerar större ackumulerad avvikelse, vilket producerar en allvarligare kollaps, såsom demonstreras av parametersvepet i Figur B.4.

**Figur B.4 – Värmekarta över kollapsallvarlighetsgrad (Svep 1).**
![v15-collapse-heatmap](/working-papers/images/legitimacy-as-emergent-gain/v15-collapse-heatmap.png)
*Vänster panel:* Lägsta legitimitet efter avslöjande \(L_{\text{min}}\) som en funktion av den förväntade undertryckningsvaraktigheten (horisontell axel) och svekskänsligheten \(\gamma\) (vertikal axel). Lång undertryckning kombinerat med hög \(\gamma\) producerar de allvarligaste kollapserna — \(L\) faller under 0,1, vilket i praktiken förstör styrsystemets effektiva aktiverings- och observationskapacitet. *Höger panel:* Sannolikhet att hamna i legitimitetsfällan efter avslöjande. Den svarta konturen markerar 50%-tröskeln. Figuren identifierar de strukturella förhållanden under vilka lån av legitimitet är överlevbart (kort undertryckning, låg \(\gamma\), baslinje av byggd legitimitet) och de under vilka det är fatalt.

**Figur B.5 – Hysteresasymmetrisvep (Svep 3).**
![v15-asymmetry-sweep](/working-papers/images/legitimacy-as-emergent-gain/v15-asymmetry-sweep.png)
Sannolikhet för fällinträde som en funktion av hysteresasymmetrikvoten \(\alpha_{\text{nedgång}} / \alpha_{\text{återhämtning}}\). När kvoten är 1 (symmetrisk uppdatering — förtroende förloras och återvinns i samma takt) inträffar inte fällan: systemet återhämtar sig från chocker utan att hamna i en självförstärkande spiral. När kvoten ökar stiger sannolikheten för fällinträde kraftigt och når nära-säkerhet vid kvoter över 4:1. Den empiriskt kalibrerade kvoten för byggd legitimitet är ungefär 4:1; för lånad legitimitet är den väsentligt högre. Figuren demonstrerar att legitimitetsfällan inte är ett oundvikligt drag hos något tillitsbaserat system utan en konsekvens av den specifika asymmetrin i uppdateringsdynamiken — och att minska denna asymmetri (genom trovärdigt åtagande, transparens och leverans–verklighetsmatchning) är en strukturell intervention som breddar den stabila regionen.
