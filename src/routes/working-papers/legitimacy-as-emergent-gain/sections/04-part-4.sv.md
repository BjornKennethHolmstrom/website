# Del IV — Simulering: Den legitimitetsdrivna regulatorn

Det formella ramverket i Del II modellerar legitimitet som ett emergent kopplingstillstånd L(t) som modulerar både aktuering och observation, och som utvecklas under sin egen dynamik som svar på leverans, transparens och svek. Del III spårar de resulterande felsätten — prestanda–legitimitetsspiralen, transparensfällan, högundertryckningssprödhet, hysteres och smitta — genom deras strukturella logik. Detta avsnitt underkastar denna dynamik kontrollerad simulering och demonstrerar att felsätten uppstår tillförlitligt ur interaktionen mellan en väldesignad regulator och en endogen legitimitets-parameter, även när alla andra arkitektoniska primitiver hålls vid ideala värden.

Simuleringen är inte en kalibrering mot något specifikt verkligt system. Den är ett existensbevis: en demonstration av att den kvalitativa dynamik som det formella ramverket förutsäger — fällan, hysteresen, den lånad-legitimitet-kollapsen — genereras av en minimal uppsättning antaganden om hur legitimitet svarar på prestanda och transparens. Parametrarna är valda för att synliggöra mekanismerna. Koden är öppen källkod, med fixerade frön för replikerbarhet, Monte Carlo-fördelningar över 100 frön, och parametersvep som demonstrerar robusthet.

## 4.1 Modellspecifikation

Den simulerade världen består av ett styrsystem som kontrollerar en tvådimensionell tillståndsvektor **x**(t) = [x₁(t), x₂(t)]ᵀ, som för konkretionens skull representerar två policyrelevanta dimensioner såsom ekonomisk produktion och miljökvalitet, eller tjänsteleverans och fiskal balans. Den sanna dynamiken är linjär och tidsinvariant:

**x**(t+1) = **A**·**x**(t) + **B**_eff(t)·**u**(t) + **w**(t)

där **A** = 0,95·**I**₂ fångar långsam autonom drift mot noll (måltillståndet), **w**(t) ~ 𝒩(**0**, 0,01·**I**₂) är processbrus, och **B**_eff(t) är den effektiva aktueringsmatrisen:

**B**_eff(t) = L_B(t) · **B**

med **B** = **I**₂ som representerar den designade aktiveringskapaciteten. När L_B = 1 har regulatorn full auktoritet; när L_B = 0,5 förloras hälften av dess styrsignal.

Regulatorn observerar systemet genom en brusig mätkanal:

**y**(t) = **x**(t) + **v**(t), **v**(t) ~ 𝒩(**0**, **V**(t))

där mätbrusets kovarians är **V**(t) = **V**₀ / L_C(t), med **V**₀ = 0,05·**I**₂. När L_C = 1 är mätbruset vid sitt designade minimum. När L_C faller stiger bruset; när L_C → 0 är observationskanalen förstörd.

Regulatorn tillämpar proportionell tillståndsåterkoppling baserat på sin optimala skattning **x̂**(t). Skattningen produceras av ett Kalmanfilter, såsom beskrivs i Avsnitt 2.3. Styrlagen är:

**u**(t) = −**K**·**x̂**(t)

där **K** är den linjärkvadratiska regulatorförstärkningen (LQR) beräknad för det nominella systemet (**A**, **B**, **Q** = **I**, **R** = 0,1·**I**), vilket ger **K** ≈ 0,75·**I**₂. Regulatorns mål är **x**_mål = **0**.

Regulatorn väljer också en transparensnivå T(t) ∈ [0,1] och en utlovad tillståndsbana **x**_utlovat(t). För enkelhetens skull håller simuleringen det utlovade tillståndet konstant vid **x**_utlovat = **0** (målet), så leveransgapet är helt enkelt det observerade kvadrerade felet ‖**x̂**(t)‖². I utvidgningar kan regulatorn justera sin utlovade bana för att hantera förväntningar.

**Legitimitetsdynamik.** Den sammansatta legitimiteten L(t) utvecklas enligt uppdateringsekvationen i Avsnitt 2.2, med hysteresasymmetrin från Avsnitt 2.4:

L(t+1) = clip( L(t) − α(t) · ‖**x**_rap(t)‖² + β · T(t) − γ · D(t) + δ, 0, 1 )

där:
- **x**_rap(t) är det *rapporterade* tillståndet — tillståndet såsom det uppfattas av den styrda befolkningen. När regulatorn är transparent (T hög), **x**_rap(t) = **x**(t), det sanna tillståndet. När regulatorn undertrycker transparens är **x**_rap(t) en filtrerad version av det sanna tillståndet, enligt beskrivning nedan.
- α(t) = α_nedgång om ‖**x**_rap(t)‖² > ‖**x**_rap(t−1)‖² (försämrad prestanda), och α_återhämtning annars, med α_nedgång = 0,12, α_återhämtning = 0,03 (en 4:1 asymmetri).
- β = 0,08 är transparenskänsligheten.
- γ är svekskänsligheten, satt till γ_byggd = 0,5 för scenarier med byggd legitimitet och γ_lånad = 3,0 för scenarier med lånad legitimitet.
- D(t) är indikatorn för avslöjat svek, aktiverad när den kumulativa dolda avvikelsen överskrider en tröskel.
- δ = 0,005 är en liten exogen drift.

**Mekanismen med delat tillstånd för transparensfällan.** För att modellera transparensfällan rent, särskiljer simuleringen mellan det sanna tillståndet **x**(t) och det rapporterade tillståndet **x**_rap(t). Regulatorn väljer en undertryckningsparameter λ ∈ [0,1]. När λ = 1 är det rapporterade tillståndet lika med det sanna tillståndet: full transparens. När λ < 1 är det rapporterade tillståndet en konvex kombination av det sanna tillståndet och en smickrande referens:

**x**_rap(t) = λ · **x**(t) + (1−λ) · **x**_utlovat(t)

Den styrda befolkningen uppdaterar L baserat på **x**_rap(t), inte **x**(t). Undertryckning upprätthåller således högre skenbar L på kort sikt. Emellertid integrerar en dold avvikelsevariabel E_svek(t) det kumulativa gapet mellan det sanna och det rapporterade tillståndet:

E_svek(t+1) = E_svek(t) + ‖**x**(t) − **x**_rap(t)‖²

Sannolikheten för avslöjande — händelsen att sveket blir offentligt synligt — modelleras som en hazard rate som ökar med E_svek:

P(avslöjande vid t) = 1 − exp( −h · E_svek(t) )

där h = 0,02 är hazardkoefficienten. När avslöjande inträffar sätts D(t) till 1 för det tidssteget och undertryckningsparametern λ tvingas till 1 därefter (regulatorn kan inte längre dölja). Sveksbestraffningen −γ · D(t) slår då mot legitimitetsuppdateringen med full kraft.

Denna mekanism med delat tillstånd operationaliserar Mätparadoxen från teknisk rapport VIII i legitimitetsdomänen: själva handlingen att undertrycka information för att skydda L bygger en dold skuld vars slutliga återbetalning är katastrofal.

**Initialvillkor och simuleringslängd.** Simuleringen körs under T = 300 tidssteg. Inkörningsperioden är 20 steg. Initial legitimitet sätts till L(0) = 0,7 för hög-legitimitets-scenarier och L(0) = 0,3 för låg-legitimitets-scenarier. Det initiala tillståndet är **x**(0) = **0** (på målet). Externa chocker introduceras som tillfälliga perturbationer av **x** för att testa systemets motståndskraft.

## 4.2 Scenarier

Fyra scenarier simuleras, motsvarande felsätten i Del III.

**Scenario 1: Hög-transparens, hög-legitimitets-jämvikt.** Regulatorn börjar med L(0) = 0,7 och upprätthåller full transparens (T = 1, λ = 1). Inget svek inträffar. Regulatorn eftersträvar målet med LQR-förstärkningen. En måttlig extern chock introduceras vid t = 50, som förskjuter **x** från origo. Scenariot demonstrerar att ett transparent system med hög L absorberar chocker effektivt: L förblir högt, tillståndet återgår till målet, och ingen fälla aktiveras.

**Scenario 2: Legitimitetsfällan.** Regulatorn börjar med L(0) = 0,7 och full transparens, men vid t = 50 förskjuter en stor extern chock **x** långt från målet. Det resulterande leveransgapet är substantiellt. Regulatorn tillämpar sin standardförstärkning för att korrigera avvikelsen, men chocken har redan minskat L. Det minskade L försvagar aktiveringen och försämrar observationen, vilket gör regulatorns efterföljande interventioner mindre effektiva. Leveransgapet kvarstår. L fortsätter att falla. Systemet spiralerar in i låg-L-attraktorn. Scenariot demonstrerar fällans självförstärkande natur: samma styrstrategi som fungerar vid hög L misslyckas vid låg L, och misslyckandet minskar L ytterligare.

**Scenario 3: Återhämtning genom transparensintervention.** Regulatorn börjar i låg-L-attraktorn (L(0) = 0,3, antingen exogent eller som slutpunkten i Scenario 2). Vid t = 50 byter regulatorn till en legitimitetsåteruppbyggnadsstrategi: den minskar sin styrförstärkning till hälften (i erkännande av sin utarmade aktivering), ökar transparensen till maximum (T = 1) och förbinder sig till ett lägre utlovat mål som är uppnåeligt givet den reducerade kapaciteten. Den upprätthåller denna strategi under återstoden av simuleringen. Scenariot demonstrerar hysteresgapet: L återhämtar sig, men långsamt. Den tid som krävs för att L ska återgå till 0,6 är väsentligt längre än den tid det tog att falla från 0,6 till 0,3. Scenariot jämför också återhämtningsbanor med och utan transparensinvestering, och visar att transparens accelererar återuppbyggnad även när den avslöjar obekväma sanningar.

**Scenario 4: Lånad-legitimitet-kollaps.** Regulatorn börjar med måttlig legitimitet (L(0) = 0,55) men låg transparens (T = 0,2, λ = 0,3). Det rapporterade tillståndet **x**_rap(t) är väsentligt smickrande: den styrda befolkningen uppfattar utfallen som bättre än de är. Skenbar L förblir stabil eller avtar endast långsamt, medan det sanna tillståndet försämras på grund av ackumulerande processbrus och regulatorns felkalibrerade interventioner (vilka själva är en konsekvens av den försämrade observationskanalen). Den dolda avvikelsen E_svek(t) växer. Vid en stokastisk utlösarpunkt avslöjas sveket. D(t) = 1, och sveksbestraffningen γ_lånad = 3,0 tillämpas. L kollapsar katastrofalt — långt under den nivå som ärlig styrning med samma underliggande prestanda skulle ha producerat. Scenariot demonstrerar den strukturella sprödheten hos lånad legitimitet.

**Parametersvep.** Simuleringen genomför känslighetsanalys över nyckelparametrar:
- γ (svekskänslighet): svept från 0,5 till 5,0, och demonstrerar övergången från återhämtningsbart svek till katastrofal kollaps.
- Undertryckningsvaraktighet (tid före avslöjande): svept från 10 till 200 steg, och visar att längre undertryckning producerar allvarligare kollapser.
- α_nedgång / α_återhämtning-kvot: svept från 1:1 (ingen hysteres) till 10:1 (stark hysteres), och demonstrerar fällans uppkomst när asymmetrin ökar.
- Initial L(0): svept från 0,1 till 0,9, och kartlägger attraktionsbassängerna för hög-L- och låg-L-jämviktslägena.

## 4.3 Förväntade resultat och nyckelfigurer

Simuleringen är utformad för att producera fyra primära utdata som operationaliserar de teoretiska påståendena i Del II och III.

**Figur 1: Fasdiagram i (L, T)-rummet.** En kogerplot eller attraktionsbassängkarta som för ett rutnät av initiala (L, T)-villkor visar huruvida systemet konvergerar till hög-L-jämviktsläget eller låg-L-attraktorn. Diagrammet avslöjar separatrisen — det kritiska L_krit under vilket systemet dras in i fällan oavsett transparensnivå. Parameterinställningar för byggd legitimitet (låg γ, hög δ) visar en större attraktionsbassäng för hög-L-jämviktsläget och ett lägre L_krit. Inställningar för lånad legitimitet (hög γ, låg δ) visar en mindre hög-L-bassäng och ett högre L_krit. Figuren synliggör den strukturella skillnaden mellan de två legitimitetsregimerna.

**Figur 2: Tidsserier över legitimitetsfällan och återhämtning.** Tre paneler. Den övre panelen visar tillståndsnormen ‖**x**(t)‖ över tid för Scenario 2 (fälla) och Scenario 3 (återhämtning). Mittenpanelen visar L(t) för samma banor. Den nedre panelen visar de effektiva aktiverings- och observationskapaciteterna, L_B(t) och L_C(t), och illustrerar hur de samvarierar. Fällbanan visar L och prestanda som avtar tillsammans; återhämtningsbanan visar L som släpar efter prestandaförbättringen, med hysteresgapet tydligt synligt som det horisontella avståndet mellan nedgångskurvan och återhämtningskurvan.

**Figur 3: Lånad-legitimitet-kollaps.** En enskild bana från Scenario 4, med två vertikala axlar. Den övre panelen visar den sanna tillståndsnormen ‖**x**(t)‖ och den rapporterade tillståndsnormen ‖**x**_rap(t)‖. Divergensen mellan de två är den dolda avvikelsen. Mittenpanelen visar skenbar L (beräknad från **x**_rap) och sann L (beräknad från **x**). Skenbar L förblir stabil medan sann L avtar. Den nedre panelen visar E_svek(t), den kumulativa dolda avvikelsen. En streckad vertikal linje markerar den stokastiska avslöjandehändelsen. I det ögonblicket konvergerar skenbar L och sann L nedåt, och tillståndsnormen spikar när regulatorns återstående legitimitet förstörs. Figuren är den grafiska signaturen för transparensfällan.

**Figur 4: Värmekarta över kollapsallvarlighetsgrad.** Ett parametersvep över undertryckningsvaraktighet (x-axel) och svekskänslighet γ (y-axel). Färgkartan visar det lägsta L som uppnås efter avslöjande. Lång undertryckning och hög γ producerar de allvarligaste kollapserna. Överlagrade konturer indikerar den parameterregion där post-kollaps L faller under fälltröskeln L_krit, vilket innebär att systemet går in i låg-L-attraktorn och inte kan återhämta sig utan extern intervention. Värmekartan identifierar de strukturella förhållanden under vilka lån av legitimitet är överlevbart (kort undertryckning, låg γ, baslinje av byggd legitimitet) och de under vilka det är fatalt.

**Sammanfattande mått.** För varje scenario rapporterar simuleringen: andelen Monte Carlo-körningar som går in i fällan (L faller under L_krit och återhämtar sig inte inom simuleringsfönstret); den genomsnittliga återhämtningstiden från L_låg till L_hög under återuppbyggnadsstrategin; kollapsmagnituden (L_före_avslöjande − L_efter_avslöjande) för lånad-legitimitet-scenarier; och hysteresgapet (tids- eller prestandadifferensen mellan nedgångs- och återhämtningsbanor).

Simuleringen förutsäger inte specifika utfall för något verkligt styrsystem. Den demonstrerar den kvalitativa dynamik som det formella ramverket identifierar, under kontrollerade förhållanden, med alla icke-legitimitets-parametrar hållna vid ideala värden. Det faktum att felsätten uppstår även under dessa idealiserade förhållanden — med perfekt intern aktuering och observation när L = 1, med optimal tillståndsskattning, utan antagonistiska aktörer — är det centrala simuleringsfyndet. Legitimitetsfällan är inte en konsekvens av institutionell dysfunktion. Den är en konsekvens av kopplingen mellan prestanda, transparens och tillit i varje system där den kopplingen existerar. Simuleringen gör den konsekvensen synlig.
