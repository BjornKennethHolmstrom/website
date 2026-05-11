# Del 3: simuleringen

## Scenariodesign

Simulatorn modellerar en rumsligt fördelad förnybar resurs – ett representativt fiskevatten, en skog eller en akvifär – bestående av tolv resursområden med logistisk tillväxtdynamik och nästa-granne-diffusion. Tjugo användargrupper utvinner från resursen över 360 tidsteg som representerar trettio år. Alla arkitekturer står inför identiska initiala förhållanden, identisk resursdynamik och identiska störningsmiljöer. Prestandaskillnader kan enbart tillskrivas observationsdimensionalitet och återkopplingsloopens arkitektur.

**Resursdynamik.** Varje område utvecklas enligt logistisk tillväxt:

$$dR/dt = r \cdot R \cdot (1 - R/K) - E(t)$$

Där $r = 0.08$ är den inneboende tillväxthastigheten, $K$ är bärkraften (tidsvarierande) och $E(t)$ är utvinningen vid tiden $t$. Områdena är kopplade genom diffusion med hastigheten $\beta = 0.02$, vilket representerar resursrörelse mellan intilliggande rumsliga områden.

**Flerskaliga störningar.** Bärkraften varierar över tre samtidiga störningsband: snabba månatliga stokastiska chocker ($\sigma = 3.0$), en medellång säsongscykel (amplitud $\pm 8$, period 12 månader) och en långsam decennienedgång (amplitud $-20$ enheter under 240 månader, representerande långsiktig miljöförstöring). Den långsamma trenden minskar den effektiva bärkraften med cirka 20% under simuleringshorisonten – en förändring som endast kan upptäckas av styrsystem med observationsbaslinjer som sträcker sig över flera årtionden.

**Kollapströskel.** Resursbestånd under 20% av bärkraften definieras som kollaps – en nivå från vilken logistisk dynamik ger extremt långsam återhämtning och som kan motsvara en tröskel för regimskifte i verkliga ekosystem.

## De fem arkitekturerna

**Arkitektur A — Öppen tillgång.** Ingen styrmekanism. Varje användargrupp maximerar utvinningen baserat på lokal beståndssynlighet, utan samordning eller aggregerad signal. Representerar Hardins ursprungliga scenario – ren individuell optimering utan återkoppling.

**Arkitektur B — Statlig förvaltning.** En central regulator utfärdar årliga kvoter baserat på aggregerade beståndsundersökningar genomförda med 12 månaders fördröjning. Kvotsefterlevnaden är partiell (rigiditet 0.7), genomdrivandet är svagt (sanktionering 0.3) och observationssignalen är endimensionell: endast total aggregerad biomassa. Representerar standardsvaret post-Hardin – extern auktoritet med tvingande kapacitet men hög observationsfördröjning och låg dimensionalitet.

**Arkitektur C — Marknadsmekanism.** Utvinningen reagerar på en prissignal som fungerar som en proxy för knapphet. Prissignalen har 3 månaders fördröjning (kvartalsmarknader) och är endimensionell – den aggregerar all information om resurstillståndet i ett enda nummer. Representerar privatiserings-/marknadsalternativet till statlig reglering.

**Arkitektur D — Gemensamhetsförvaltning (Community commons).** Lokal styrning i Ostroms stil med månatlig övervakning, flerdimensionell observation (beståndsnivå, rumslig fördelning över områden, sociala trycksignaler från andra samhällsmedlemmar), graderade sanktioner för regelöverträdelser och starka gränsregler. Observationsdimensionalitet = 3. Representerar de självstyrande allmänningar som Ostrom dokumenterade empiriskt och vars överlägsna prestanda konventionell teori förutsade inte kunde existera.

**Arkitektur E — Bioregional / urfolk.** Utökar Arkitektur D med tillgång till hela observationsspektrumet: säsongsmässiga fenologiska indikatorer, signaler om arters samexistens, proxys för mark- och vattenkvalitet och – kritiskt – den långsamma ekologiska signalen som återspeglar den långsiktiga trenden för bärkraft. Observationsdimensionalitet = 6. Kontinuerlig relationell övervakning, starkt socialt ansvarsutkrävande (sanktionering 0.9) och styrningsregler anpassade till säsongsdynamiken. Representerar de styrningsegenskaper som är gemensamma för urfolks system med långsiktig ekologisk inbäddning i deras förvaltade territorium.

## Simuleringsresultat

![Simuleringsutdata: fyra rader med paneler. Översta raden: resursbeståndstrajektorier för alla fem arkitekturer över 30 år. Mitten till vänster: diagram över erforderlig variationstäckning som visar vilka arkitekturer som observerar vilka störningsfrekvensband. Mitten till höger: extraktionsojämlikhet (Gini-koefficient) över tid. Nederst till vänster: långsam variabelspårning — 24-månaders rullande medelvärde av beståndet som representation för trenddetektering. Nederst till höger: sammanfattande stapeldiagram över medelbestånd, kollapsrisk och extraktionsojämlikhet.](/working-papers/images/requisite-variety-and-the-commons/ggf-simulator-v6.png)

*Figur 1: Resultat från GGF Governance Simulator v6. Översta panelen: Arkitekturerna A, B och C kollapsar till nära noll i bestånd under de första fem åren och förblir i det kollapsade tillståndet under merparten av den 30-åriga simuleringen. Arkitektur D bibehåller ett bestånd över 20% av $K$ med betydande variabilitet. Arkitektur E bibehåller ett stabilt bestånd och är den enda arkitekturen som synbart spårar och reagerar på den långsamma decennienedgången i bärkraft. Mitten-vänster: diagram över erforderlig variation som visar att endast arkitekturerna D och E täcker det medellånga (säsongsmässiga) störningsbandet, och endast E täcker det långsamma (decennium) bandet. Mitten-höger: E uppnår lägre utvinningsolikhet (Gini) än någon annan arkitektur, inklusive A, vilket visar att jämlikhet och hållbarhet är samprodukter av styrning med hög variation. Nere till vänster: endast E:s 24-månaders rullande medelvärde spårar den sanna trenden för bärkraft; alla andra upptäcker den långsamma nedgången först efter att resurskollapsen redan har börjat. Nere till höger: sammanfattande mätvärden bekräftar det monotona förhållandet mellan observationsdimensionalitet och styrningsprestanda.*

## Att läsa resultaten

**Arkitektur B är sämre än Arkitektur A.** Statlig förvaltning uppnår en kollapsrisk på 98.9% jämfört med öppen tillgång på 93.6% – ett resultat som motsäger standardrekommendationen post-Hardin. Mekanismen är observationsfördröjningen som förvärras av endimensionell aggregering. Den årliga kvoten är kalibrerad mot förra årets bestånd. I en minskande resurs är förra årets bestånd högre än årets – så kvoten godkänner utvinning på en nivå som det nuvarande beståndet inte kan upprätthålla. Ingripandet påskyndar nedgången. Öppen tillgång reagerar åtminstone omedelbart på lokala förhållanden, även utan samordning; statlig förvaltning reagerar långsamt på globala förhållanden, och dess långsamma svar anländer som ett destabiliserande ingripande snarare än ett stabiliserande.

Detta är inte ett fynd om välmenande institutioners misslyckande. Det är ett fynd om vad som händer när hög observationsfördröjning kombineras med endimensionell aggregering i en miljö med flerskaliga störningar. Ett statligt förvaltningssystem med bättre regelefterlevnad, bättre genomdrivande och mer ärlig rapportering skulle fortfarande möta samma arkitektoniska begränsning: den signal det tar emot är för långsam och för grov för att stödja en stabil styrning av allmänningen.

**Hoppet från C till D är ett variationshopp.** Marknadsmekanism (C) och gemensamhetsförvaltning (D) verkar båda med återkoppling – pris i ena fallet, samhällsövervakning i det andra. Skillnaden är observationsdimensionaliteten: 1 mot 3. Denna förändring minskar kollapsrisken från 86.4% till 30.3% och höjer genomsnittsbeståndet från 9.6% till 27.2% av bärkraften. Prestandaförbättringen kan tillskrivas de ytterligare signaldimensionerna – rumslig fördelning och socialt tryck – som låter Arkitektur D särskilja tillstånd som framstår som identiska för Arkitektur C:s endimensionella prissignal. Ostroms designprinciper fungerar inte för att de installerar bättre värderingar, utan för att de öppnar ytterligare observationskanaler.

**Hoppet från D till E är det långsamma variabelhoppet.** Att lägga till de långsamma ekologiska signaldimensionerna – och den utökade tidsmässiga baslinjen som krävs för att tolka dem – minskar kollapsrisken från 30.3% till 3.6%. Arkitektur E är den enda arkitekturen där den 30-åriga banan inte tillbringar betydande tid i det kollapsade tillståndet. Det är också den enda arkitekturen vars panel för spårning av långsamma variabler visar någon överensstämmelse med den sanna trenden för bärkraft. Alla andra arkitekturer upptäcker den långsamma nedgången i efterhand – efter att deras bestånd redan har kollapsat – eftersom de saknar den observationsbaslinje som krävs för att upptäcka en gradvis trend över brusgolvet från övervakning med korta fönster.

**Jämlikhet och hållbarhet samproduceras.** Arkitektur E har den lägsta utvinningsolikheten (Gini 0.032) tillsammans med det högsta upprätthållandet av genomsnittsbeståndet (31.1% av $K$). Marknadsmekanismen (C) har den högsta ojämlikheten (0.096) och nära total kollaps. Öppen tillgång (A) har låg ojämlikhet (0.018) eftersom alla användare blir lika utarmade av det kollapsade beståndet. Mönstret bekräftar att jämlikhet och ekologisk hållbarhet inte står i strid med varandra i styrsystem med hög variation – de är samprodukter av samma arkitektoniska egenskaper: nära återkoppling, flerdimensionell observation och styrningsregler anpassade till resursens faktiska dynamik.

## Kvantitativ sammanfattning

| Arkitektur | Medelbestånd | Kollapsrisk | Gini | Obs. dim. |
| --- | --- | --- | --- | --- |
| A — Öppen tillgång | 4.2% | 93.6% | 0.018 | 1 |
| B — Statlig förvaltning | 3.7% | 98.9% | 0.058 | 1 |
| C — Marknadsmekanism | 9.6% | 86.4% | 0.096 | 1 |
| D — Gemensamhetsförvaltning | 27.2% | 30.3% | 0.085 | 3 |
| E — Bioregional / urfolk | 31.1% | 3.6% | 0.032 | 6 |
| *Tabell: Sammanfattning av simuleringsdata.* |  |  |  |  |

Förhållandet mellan observationsdimensionalitet och styrningsprestanda är monotont och icke-linjärt. Det största prestandahoppet – i minskning av kollapsrisk – sker mellan dimensionalitet 1 och dimensionalitet 3 (Ostrom-hoppet: från 86–99% till 30%). Det näst största sker mellan dimensionalitet 3 och 6 (det långsamma variabelhoppet: från 30% till 3.6%). Båda hoppen motsvarar tillägget av kvalitativt nya signaldimensioner – inte förbättringar av befintliga.

