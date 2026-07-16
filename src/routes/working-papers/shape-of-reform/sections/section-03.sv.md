# §3 — Den deskriptiva geometrin replikerar inte: fyra nollresultat, ett misslyckande

Fyra kandidatpåståenden kom ut ur Rapport XIX:s explorativa genomgång och granskningen i §1.2. Var och en registrerades med en nollhypotes innan replikationen kördes, på tjugo oberoende omtränade zoon, med avståndsmatriser sparade så att testerna kunde omberäknas — vilket den ursprungliga körningen hade omöjliggjort genom att bara spara heatmap-bilder. Alla fyra nollhypoteserna höll. Tillsammans är de artikelns första rubrikmisslyckande: **den deskriptiva geometri som Rapport XIX annonserade existerar inte.** (Artikelns räkning av *tre* misslyckanden räknar hela detta avsnitt som ett; de andra två är den missade förutsägelsen i §4.1 och den misslyckade geodetmekanismen i §4.3.)

De fyra nollresultaten är inte fyra versioner av samma misstag, och att läsa dem som en taxonomi är mer användbart än att läsa dem som en lista. Var och en visar ett distinkt sätt på vilket en explorativ geometri kan överdriva sig själv — skala misstagen för form, en identitet misstagen för en mätning, en tröskelartefakt misstagen för struktur, och en tvärsnittsskillnad misstagen för en övergång:

| | nollresultatet som höll | felet det blottlägger |
|---|---|---|
| §3.1 | stress omformar inte rummet | **skala** misstagen för **form** |
| §3.2 | anslutningströskeln är flaskhalskanten i det minimala spännträdet | en **identitet** misstagen för en **mätning** |
| §3.3 | broidentitet är regiminvariant vid slack | en **tröskelartefakt** misstagen för **struktur** |
| §3.4 | ingen topologisk övergång under en svepning | en **tvärsnittsskillnad** misstagen för en **övergång** |

## 3.1 Stress omskalar faktoriseringsrummet; det omformar det inte

Rubriken som Rapport XIX antydde var att miljöstress *omformar* faktoriseringsrummet — att en blåsig värld och en dämpad värld framkallar inte bara mer avlägsna regulatorer utan annorlunda arrangerade sådana. Det registrerade testet frågar om avståndsmatriser mellan regimer skiljer sig i **form**, när **skala** väl har avlägsnats.

Två oberoende formstatistikor användes, och testet gjordes medvetet generöst mot omformningshypotesen: det räknas som att upptäcka en förvrängning om *någondera* statistikan gör det.

**Ett brustak först.** För varje regim delades utvärderingsströmmen i två halvor och en avståndsmatris beräknades på varje halva. Korrelationen mellan en regims två halvor är det högsta någon jämförelse skulle kunna uppnå — det är vad "samma arrangemang, mätt två gånger" ser ut som, och det begränsar vad "ett annorlunda arrangemang" möjligen skulle kunna falla under. Det inom-regim split-half-taket låg på **0,87** (Pearson, median över zoon).

**Jämförelsen mellan regimer föll sedan i huvudsak på taket.** Formkorrelationen mellan regimer var **0,85** — ett underskott på 0,075 mot en registrerad ribba på 0,20. Två regimers faktoriseringsarrangemang är lika lika varandra som två halvor av en enskild regims egna data. Ett medelvärdesnormaliserat Frobenius-formavstånd, en oberoende statistik som inte automatiskt är invariant mot skala, berättade samma historia mot sitt eget split-half-tak.

**Samtidigt rörde sig skalan substantiellt.** Kvoten mellan det största och det minsta medelavståndet över regimer var **1,56**: stress gör varje regulator mer avlägsen från varje annan, likformigt, med mer än hälften igen. Kartan sträcks; den omarrangerar inte.

> **Registrerat utfall: nollhypotesen håller.** Miljön bestämmer *storleken* på faktoriseringsrummet, inte dess *form*. `[R inom modellen]`

Detta är det bärande misslyckandet, eftersom det är det som direkt vederlägger vad systerartikeln annonserades visa. Den skenbara omformningen i XIX:s explorativa figurer var omskalning sedd genom en statistik — rå korrelation — som inte separerar de två. En likformig sträckning av alla avstånd lämnar korrelationer höga och Frobenius-formavstånd små; det fanns där i XIX:s egna siffror, felläst som arrangemang.

## 3.2 Anslutningströskeln är en identitet, inte en mätning

Rapport XIX:s topologiska tolkning vilade på en per-regim **anslutningströskel** ε_c — det avstånd vid vilket regulatorerna, länkade närhelst de faller inom ε_c från varandra, först bildar en enda sammanhängande komponent. Att tröskeln skilde sig åt mellan regimer togs som evidens för att ekologins konnektiva struktur skilde sig åt mellan regimer.

Det är inte evidens för något sådant, och skälet är algebraiskt snarare än empiriskt. För single-linkage-anslutning är tröskeln vid vilken en graf först hänger samman **exakt den största kanten i dess minimala spännträd** — detta är ett teorem, inte ett fynd. Replikationen bekräftar det numeriskt som en kontroll: över alla regimer överstiger ε_c det minimala spännträdets maximala kant med mellan 0,5% och 3,8%, vilket är precis granulariteten i tröskelsvepningen. ε_c bär ingen information som flaskhalskanten i det minimala spännträdet inte gör.

Så "anslutningströskeln skiljer sig åt mellan regimer" reduceras till "den största nödvändiga länken är längre i vissa regimer", vilket reduceras till "avstånden är större i vissa regimer" — vilket §3.1 redan har redovisat som omskalning. Tröskeln var en tredje vy av samma magnitudefekt, iförd topologins vokabulär.

> **Registrerat utfall: storheten är en identitet.** `[R]` Den per-regim anslutningströskeln mäter avståndsmagnitud, inte konnektiv struktur, och varje påstående som vilar på dess variation är ett påstående om §3.1.

Vi anger detta utförligt eftersom det är den mest transporterbara varningen i artikeln. Tröskelstatistikor för grafer — värdet vid vilket en likhetsgraf hänger samman, perkolerar eller fragmenteras — används ofta som om de vore strukturella. När grafen byggs genom att tröskla en avståndsmatris, är anslutningspunkten ofta en flaskhalskant i förklädnad, och dess variation över betingelser är ofta inget annat än variationen i de underliggande avstånden. Den disciplin som serien tillämpar på metriker (separera magnitud från form) gäller också för trösklar, och mindre uppenbart.

## 3.3 Broidentitet är regiminvariant vid varje ärlig tröskel

Rapport XIX rapporterade att den regulator med högst betweenness — den "bro" som de flesta av ekologins kortaste vägar löper genom — skilde sig åt mellan regimer, och särskilde denna broroll från "guvernörsrollen" empiriskt (ett resultat som denna artikel inte rubbar; det etablerades beteendemässigt, inte topologiskt). Den registrerade frågan här är snävare: är brons *identitet* en stabil egenskap, eller en artefakt av var tröskeln är satt?

Vid ε_c varierar broidentitet verkligen mellan regimer — och detta är exakt vad §3.2 förutsäger att den ska göra, på ett skenbart sätt. Vid anslutningströskeln är grafen ett **nära-träd**: den har precis tillräckligt många kanter för att hänga samman, så nästan varje nod är en skärningspunkt och betweenness domineras av vilka få länkar som råkade sluta grafen. Nära-träd är gjorda av artikulationspunkter till följd av konstruktionen, och att läsa broidentitet där är att läsa brus vid anslutningens knivsegg.

Vid varje **slack**-tröskel — 1,25 ε_c och däröver, där grafen har utrymme till övers och betweenness reflekterar genuin centralitet snarare än knappt-sammanhängande — är betweenness-rankingen **regiminvariant**. Den regulator som är mest central under en stress är mest central under nästa. Den registrerade statistikan (Spearman-korrelation av hela betweenness-vektorn över regimer, robust mot oavgjorda) ligger väl över tröskeln som skulle indikera regimberoende.

> **Registrerat utfall: nollhypotesen håller.** Broidentitet är regiminvariant när grafen väl inte står på anslutningens knivsegg. Det skenbara regimberoendet i XIX var en ε_c-artefakt. `[R inom modellen]`

Det metodologiska ekot av §3.2 är avsiktligt: en statistik avläst *vid anslutningströskeln* ärver tröskelns degenerering. Varje strukturellt påstående om en trösklad graf måste visas överleva slack, annars är det ett påstående om knivseggen.

## 3.4 Det finns ingen topologisk övergång — bara mjuk drift

Det mest ambitiösa av XIX:s explorativa suggestioner var att faktoriseringsrummet skulle kunna genomgå *topologiska övergångar* under stress — att när en regim pressas, skulle ekologin kunna splittras i komponenter, eller bilda loopar, eller ändra sin konnektiva karaktär diskontinuerligt. Sex diskreta regimer kan inte visa detta: regim-till-regim *variation* är inte en *övergång*, vilket kräver en kontinuerligt svept parameter och en diskontinuitet i den.

Så replikationen svepte en. En enda stressparameter — vindmagnitud — varierades i fina steg, och grafens invarianter följdes vid en **skalinvariant** tröskel (en fast kvantil av avståndsfördelningen, så att en likformig omskalning av det slag som beskrivs i §3.1 inte kunde maskera sig som en topologisk händelse). Antal komponenter, cykelrang och storlek på största komponenten avlästes vid varje steg.

De driver. Mjukt. Den genomsnittliga absoluta förändringen i antal komponenter per svepsteg är 0,31 — väl under den diskontinuitet som en övergång skulle kräva — och inget hopp återkommer på en konsistent plats över zoon.

> **Registrerat utfall: nollhypotesen håller.** Under kontinuerlig stress varierar de topologiska invarianterna av faktoriseringsrummet mjukt. Det finns ingen övergång. `[R inom modellen]`

Kombinerat med §3.1 är läsningen koherent: ett rum vars form är stabil och vars skala sträcks mjukt har ingen anledning att genomgå topologiska övergångar, och det gör det inte. De två nollresultaten är samma faktum sett två gånger.

## 3.5 Vad de fyra misslyckandena har gemensamt

De är inte fyra oberoende besvikelser. De är ett misslyckande — den deskriptiva geometrin existerar inte — nått på fyra vägar, och vad som förenar de fyra är ett enda metodologiskt fel:

> Varje resultat uppstod genom att **tillskriva strukturell mening till en storhet innan skala, tröskelkonstruktion, samplingsvariation och parameterkontinuitet separerades.** Omskalning lästes som omformning innan skala separerades från form (§3.1); en avståndsflaskhals lästes som en anslutningströskel innan tröskelns konstruktion granskades (§3.2); knivsegg-betweenness lästes som en stabil broroll innan samplingsvariation vid anslutningspunkten redovisades (§3.3); och en tvärsnittsskillnad mellan regimer lästes som en latent övergång innan en kontinuerlig parameter faktiskt sveptes (§3.4). I varje fall sprang den geometriska vokabulären ifrån det geometriska innehållet.

Detta är inte en kritik av Rapport XIX, som markerade alltihop som explorativt och utlovade precis det registrerade test som nu har körts. Det är det registrerade testet som gör sitt jobb. Och det rensar marken för §4, som handlar om det enda i detta rum som *inte* är reducerbart till magnituden av ett symmetriskt avstånd — den riktade kostnaden för att röra sig genom det.

---# §3 — Den deskriptiva geometrin replikerar inte: fyra nollresultat, ett misslyckande

Fyra kandidatpåståenden kom ut ur Rapport XIX:s explorativa genomgång och granskningen i §1.2. Var och en registrerades med en nollhypotes innan replikationen kördes, på tjugo oberoende omtränade zoon, med avståndsmatriser sparade så att testerna kunde omberäknas — vilket den ursprungliga körningen hade omöjliggjort genom att bara spara heatmap-bilder. Alla fyra nollhypoteserna höll. Tillsammans är de artikelns första rubrikmisslyckande: **den deskriptiva geometri som Rapport XIX annonserade existerar inte.** (Artikelns räkning av *tre* misslyckanden räknar hela detta avsnitt som ett; de andra två är den missade förutsägelsen i §4.1 och den misslyckade geodetmekanismen i §4.3.)

De fyra nollresultaten är inte fyra versioner av samma misstag, och att läsa dem som en taxonomi är mer användbart än att läsa dem som en lista. Var och en visar ett distinkt sätt på vilket en explorativ geometri kan överdriva sig själv — skala misstagen för form, en identitet misstagen för en mätning, en tröskelartefakt misstagen för struktur, och en tvärsnittsskillnad misstagen för en övergång:

| | nollresultatet som höll | felet det blottlägger |
|---|---|---|
| §3.1 | stress omformar inte rummet | **skala** misstagen för **form** |
| §3.2 | anslutningströskeln är flaskhalskanten i det minimala spännträdet | en **identitet** misstagen för en **mätning** |
| §3.3 | broidentitet är regiminvariant vid slack | en **tröskelartefakt** misstagen för **struktur** |
| §3.4 | ingen topologisk övergång under en svepning | en **tvärsnittsskillnad** misstagen för en **övergång** |

## 3.1 Stress omskalar faktoriseringsrummet; det omformar det inte

Rubriken som Rapport XIX antydde var att miljöstress *omformar* faktoriseringsrummet — att en blåsig värld och en dämpad värld framkallar inte bara mer avlägsna regulatorer utan annorlunda arrangerade sådana. Det registrerade testet frågar om avståndsmatriser mellan regimer skiljer sig i **form**, när **skala** väl har avlägsnats.

Två oberoende formstatistikor användes, och testet gjordes medvetet generöst mot omformningshypotesen: det räknas som att upptäcka en förvrängning om *någondera* statistikan gör det.

**Ett brustak först.** För varje regim delades utvärderingsströmmen i två halvor och en avståndsmatris beräknades på varje halva. Korrelationen mellan en regims två halvor är det högsta någon jämförelse skulle kunna uppnå — det är vad "samma arrangemang, mätt två gånger" ser ut som, och det begränsar vad "ett annorlunda arrangemang" möjligen skulle kunna falla under. Det inom-regim split-half-taket låg på **0,87** (Pearson, median över zoon).

**Jämförelsen mellan regimer föll sedan i huvudsak på taket.** Formkorrelationen mellan regimer var **0,85** — ett underskott på 0,075 mot en registrerad ribba på 0,20. Två regimers faktoriseringsarrangemang är lika lika varandra som två halvor av en enskild regims egna data. Ett medelvärdesnormaliserat Frobenius-formavstånd, en oberoende statistik som inte automatiskt är invariant mot skala, berättade samma historia mot sitt eget split-half-tak.

**Samtidigt rörde sig skalan substantiellt.** Kvoten mellan det största och det minsta medelavståndet över regimer var **1,56**: stress gör varje regulator mer avlägsen från varje annan, likformigt, med mer än hälften igen. Kartan sträcks; den omarrangerar inte.

> **Registrerat utfall: nollhypotesen håller.** Miljön bestämmer *storleken* på faktoriseringsrummet, inte dess *form*. `[R inom modellen]`

Detta är det bärande misslyckandet, eftersom det är det som direkt vederlägger vad systerartikeln annonserades visa. Den skenbara omformningen i XIX:s explorativa figurer var omskalning sedd genom en statistik — rå korrelation — som inte separerar de två. En likformig sträckning av alla avstånd lämnar korrelationer höga och Frobenius-formavstånd små; det fanns där i XIX:s egna siffror, felläst som arrangemang.

## 3.2 Anslutningströskeln är en identitet, inte en mätning

Rapport XIX:s topologiska tolkning vilade på en per-regim **anslutningströskel** ε_c — det avstånd vid vilket regulatorerna, länkade närhelst de faller inom ε_c från varandra, först bildar en enda sammanhängande komponent. Att tröskeln skilde sig åt mellan regimer togs som evidens för att ekologins konnektiva struktur skilde sig åt mellan regimer.

Det är inte evidens för något sådant, och skälet är algebraiskt snarare än empiriskt. För single-linkage-anslutning är tröskeln vid vilken en graf först hänger samman **exakt den största kanten i dess minimala spännträd** — detta är ett teorem, inte ett fynd. Replikationen bekräftar det numeriskt som en kontroll: över alla regimer överstiger ε_c det minimala spännträdets maximala kant med mellan 0,5% och 3,8%, vilket är precis granulariteten i tröskelsvepningen. ε_c bär ingen information som flaskhalskanten i det minimala spännträdet inte gör.

Så "anslutningströskeln skiljer sig åt mellan regimer" reduceras till "den största nödvändiga länken är längre i vissa regimer", vilket reduceras till "avstånden är större i vissa regimer" — vilket §3.1 redan har redovisat som omskalning. Tröskeln var en tredje vy av samma magnitudefekt, iförd topologins vokabulär.

> **Registrerat utfall: storheten är en identitet.** `[R]` Den per-regim anslutningströskeln mäter avståndsmagnitud, inte konnektiv struktur, och varje påstående som vilar på dess variation är ett påstående om §3.1.

Vi anger detta utförligt eftersom det är den mest transporterbara varningen i artikeln. Tröskelstatistikor för grafer — värdet vid vilket en likhetsgraf hänger samman, perkolerar eller fragmenteras — används ofta som om de vore strukturella. När grafen byggs genom att tröskla en avståndsmatris, är anslutningspunkten ofta en flaskhalskant i förklädnad, och dess variation över betingelser är ofta inget annat än variationen i de underliggande avstånden. Den disciplin som serien tillämpar på metriker (separera magnitud från form) gäller också för trösklar, och mindre uppenbart.

## 3.3 Broidentitet är regiminvariant vid varje ärlig tröskel

Rapport XIX rapporterade att den regulator med högst betweenness — den "bro" som de flesta av ekologins kortaste vägar löper genom — skilde sig åt mellan regimer, och särskilde denna broroll från "guvernörsrollen" empiriskt (ett resultat som denna artikel inte rubbar; det etablerades beteendemässigt, inte topologiskt). Den registrerade frågan här är snävare: är brons *identitet* en stabil egenskap, eller en artefakt av var tröskeln är satt?

Vid ε_c varierar broidentitet verkligen mellan regimer — och detta är exakt vad §3.2 förutsäger att den ska göra, på ett skenbart sätt. Vid anslutningströskeln är grafen ett **nära-träd**: den har precis tillräckligt många kanter för att hänga samman, så nästan varje nod är en skärningspunkt och betweenness domineras av vilka få länkar som råkade sluta grafen. Nära-träd är gjorda av artikulationspunkter till följd av konstruktionen, och att läsa broidentitet där är att läsa brus vid anslutningens knivsegg.

Vid varje **slack**-tröskel — 1,25 ε_c och däröver, där grafen har utrymme till övers och betweenness reflekterar genuin centralitet snarare än knappt-sammanhängande — är betweenness-rankingen **regiminvariant**. Den regulator som är mest central under en stress är mest central under nästa. Den registrerade statistikan (Spearman-korrelation av hela betweenness-vektorn över regimer, robust mot oavgjorda) ligger väl över tröskeln som skulle indikera regimberoende.

> **Registrerat utfall: nollhypotesen håller.** Broidentitet är regiminvariant när grafen väl inte står på anslutningens knivsegg. Det skenbara regimberoendet i XIX var en ε_c-artefakt. `[R inom modellen]`

Det metodologiska ekot av §3.2 är avsiktligt: en statistik avläst *vid anslutningströskeln* ärver tröskelns degenerering. Varje strukturellt påstående om en trösklad graf måste visas överleva slack, annars är det ett påstående om knivseggen.

## 3.4 Det finns ingen topologisk övergång — bara mjuk drift

Det mest ambitiösa av XIX:s explorativa suggestioner var att faktoriseringsrummet skulle kunna genomgå *topologiska övergångar* under stress — att när en regim pressas, skulle ekologin kunna splittras i komponenter, eller bilda loopar, eller ändra sin konnektiva karaktär diskontinuerligt. Sex diskreta regimer kan inte visa detta: regim-till-regim *variation* är inte en *övergång*, vilket kräver en kontinuerligt svept parameter och en diskontinuitet i den.

Så replikationen svepte en. En enda stressparameter — vindmagnitud — varierades i fina steg, och grafens invarianter följdes vid en **skalinvariant** tröskel (en fast kvantil av avståndsfördelningen, så att en likformig omskalning av det slag som beskrivs i §3.1 inte kunde maskera sig som en topologisk händelse). Antal komponenter, cykelrang och storlek på största komponenten avlästes vid varje steg.

De driver. Mjukt. Den genomsnittliga absoluta förändringen i antal komponenter per svepsteg är 0,31 — väl under den diskontinuitet som en övergång skulle kräva — och inget hopp återkommer på en konsistent plats över zoon.

> **Registrerat utfall: nollhypotesen håller.** Under kontinuerlig stress varierar de topologiska invarianterna av faktoriseringsrummet mjukt. Det finns ingen övergång. `[R inom modellen]`

Kombinerat med §3.1 är läsningen koherent: ett rum vars form är stabil och vars skala sträcks mjukt har ingen anledning att genomgå topologiska övergångar, och det gör det inte. De två nollresultaten är samma faktum sett två gånger.

## 3.5 Vad de fyra misslyckandena har gemensamt

De är inte fyra oberoende besvikelser. De är ett misslyckande — den deskriptiva geometrin existerar inte — nått på fyra vägar, och vad som förenar de fyra är ett enda metodologiskt fel:

> Varje resultat uppstod genom att **tillskriva strukturell mening till en storhet innan skala, tröskelkonstruktion, samplingsvariation och parameterkontinuitet separerades.** Omskalning lästes som omformning innan skala separerades från form (§3.1); en avståndsflaskhals lästes som en anslutningströskel innan tröskelns konstruktion granskades (§3.2); knivsegg-betweenness lästes som en stabil broroll innan samplingsvariation vid anslutningspunkten redovisades (§3.3); och en tvärsnittsskillnad mellan regimer lästes som en latent övergång innan en kontinuerlig parameter faktiskt sveptes (§3.4). I varje fall sprang den geometriska vokabulären ifrån det geometriska innehållet.

Detta är inte en kritik av Rapport XIX, som markerade alltihop som explorativt och utlovade precis det registrerade test som nu har körts. Det är det registrerade testet som gör sitt jobb. Och det rensar marken för §4, som handlar om det enda i detta rum som *inte* är reducerbart till magnituden av ett symmetriskt avstånd — den riktade kostnaden för att röra sig genom det.

---
