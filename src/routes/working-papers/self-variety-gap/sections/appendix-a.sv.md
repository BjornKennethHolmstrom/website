## Appendix A: Formell härledning av själv‑variationsgapet (statisk)

Detta appendix formaliserar utvidgningen av Ashbys lag om nödvändig variation från fysiska och institutionella styrenheter till självets arkitektur, vilket ger villkoret **dim(V_själv) ≥ dim(D_själv) − dim(G_själv)** som används i huvudtexten. Härledningen är statisk: den behandlar störningsrummet i en persons liv och deras personliga värderingsarkitektur som fixa, utan att modellera deras temporala evolution (se Appendix B för den dynamiska utvidgningen).

### A.1 Självet som ett reglerat system

Betrakta en person vid ett givet ögonblick i deras liv. Deras sanna tillstånd kan representeras som en vektor **x** ∈ **X**, där **X** är det flerdimensionella tillståndsrummet för självet — omfattande fysisk hälsa, emotionellt tillstånd, relationell kvalitet, existentiell orientering, kognitiv kapacitet och alla andra dimensioner som är kausalt relevanta för deras välmående.

Personen är utsatt för en störningsvektor **d** ∈ **D_själv**, där **D_själv** är rummet av störningar som kan knuffa självet bort från dess önskade tillstånd. Störningar inkluderar externa händelser (jobbförlust, sjukdom, relationskonflikt, förlust av en nära anhörig, ekonomisk påfrestning) och interna dynamiker (humörsvängningar, påträngande tankar, trötthet, existentiellt tvivel, den långsamma ackumulationen av stress).

Personens personliga värderingsarkitektur — den uppsättning värden, mål och mått de använder för att utvärdera sitt liv — definierar en målmängd **G_själv** ⊂ **X**. Detta är mängden av tillstånd personen betraktar som acceptabla: "Jag mår tillräckligt bra", "Jag är på rätt spår", "Mitt liv är tillfredsställande." Målmängden kan vara smal (alla tillstånd där karriärstatus överstiger en tröskel) eller bred (alla tillstånd där en balans av hälsa, samhörighet, syfte och trygghet upprätthålls).

Personen har inte direkt tillgång till sitt sanna tillstånd **x**. De uppfattar sig själva genom en observationskanal:

**y = C_själv · x + ε**

där:
- **C_själv**: **X** → **Y** är en linjär observationsmatris bestämd av personens värderingsarkitektur. Den väljer vilka dimensioner av självet som medvetet följs.
- **ε** är brus — den kombinerade effekten av kognitiva bias, uppmärksamhetsbegränsningar, emotionellt undvikande och den inneboende brusigheten i introspektion.

Den personliga värderingsarkitekturen *är* matrisen **C_själv**. Vad en person värderar avgör vilka dimensioner av deras egen existens de projicerar in i medveten utvärdering. De dimensioner av **x** som ligger i nollrummet för **C_själv** är, i formell mening, oobserverbara för personens medvetna självreglering.

### A.2 Variation som dimensionalitet

I enlighet med Ashby (1956) definierar vi variation som antalet särskiljbara tillstånd ett system kan ockupera eller diskriminera. För kontinuerliga tillståndsrum approximerar vi variation genom den *effektiva dimensionaliteten* — rangen av det relevanta vektorrummet.

- **dim(D_själv)** = störningsrummets rang: antalet oberoende sätt på vilka personens liv kan knuffa dem bort från deras acceptabla tillstånd.
- **dim(G_själv)** = målmängdens rang: antalet oberoende riktningar i vilka personen tillåts variera och fortfarande betrakta sig själv som "okej." En person med en enda, rigid definition av framgång (t.ex. "Jag måste inneha en viss titel") har **dim(G_själv) ≈ 0** — det finns ingen acceptabel variation. En person som kan må bra på flera sätt har en större **dim(G_själv)**.
- **dim(V_själv)** = observationsrummets **Y** rang, dvs. antalet oberoende dimensioner som personens värderingsarkitektur kan följa.

### A.3 Ashbys lag i dimensionell form för självet

Ashbys lag i sin ursprungliga formulering fastställer att en regulator måste ha minst lika mycket variation som störningsrummet, minus variationen i den acceptabla målmängden: **V(R) ≥ V(D) − V(G)** (Ashby, 1956). Genom att avbilda variation på dimensionalitet erhåller vi:

**dim(V_själv) ≥ dim(D_själv) − dim(G_själv)**  (1)

Detta är det statiska villkoret för nödvändig variation för en personlig värderingsarkitektur. Det fastställer: antalet oberoende livsdimensioner en person medvetet följer måste vara minst antalet oberoende störningsdimensioner de möter, minus antalet oberoende dimensioner i vilka de kan acceptera variation.

Om **dim(V_själv) `<` dim(D_själv) − dim(G_själv)** existerar störningsdimensioner som ligger utanför personens perceptuella fält. Dessa störningar kan knuffa personen ut ur deras målmängd utan att personen någonsin registrerar en avvikelse, eftersom deras värderingsarkitektur saknar de axlar längs vilka dessa störningar är definierade. Personen upplever effekterna — stress, missnöje, kroppsliga symptom — men kan inte spåra dem till deras källa.

### A.4 Själv‑variationsgapet

*Själv‑variationsgapet* definieras som:

**G_själv = dim(D_själv) − dim(G_själv) − dim(V_själv)**

När **G_själv ≤ 0** uppfyller värderingsarkitekturen Ashbys villkor. Personen har tillräcklig perceptuell dimensionalitet för att upptäcka störningar i de dimensioner som betyder något, och för att särskilja vilka dimensioner av deras liv som kräver uppmärksamhet.

När **G_själv > 0** är värderingsarkitekturen underdimensionerad för störningsmiljön i personens liv. Magnituden av **G_själv** mäter volymen av kausalt relevanta själv‑dimensioner som är strukturellt osynliga för personens medvetna optimering. Dessa exkluderade dimensioner ackumulerar skada tills de bryter igenom trösklar — ofta manifesterade som kriser som känns plötsliga och oförklarliga för personen som upplever dem.

Den kritiska tröskeln **G_själv_krit** är det värde på gapet vid vilket signal‑brusförhållandet i självobservationskanalen faller under ett — den punkt där personens medvetna modell av sitt eget liv är mer brus än signal. Bortom denna tröskel kan personen inte återfå en korrekt bild av sitt eget tillstånd, oavsett hur mycket de reflekterar eller hur uppriktigt de försöker. Tillståndet är strukturellt, inte viljemässigt.

### A.5 Relation till Conant och Ashby

Conant och Ashby (1970) bevisade att "varje god regulator av ett system måste vara en modell av det systemet." För självet är "modellen" den personliga värderingsarkitekturen — den uppsättning dimensioner personen följer och de relationer de implicit eller explicit antar bland dem. Om observationsmatrisen **C_själv** är rangdefekt i förhållande till störningsrummet saknar personen en fullständig modell av sitt eget liv. De är, i dessa saknade dimensioner, inte en god regulator av sig själva — ett strukturellt tillstånd som ingen mängd viljestyrka eller positivt tänkande kan avhjälpa.

### A.6 Tolkning och brasklappar

Denna härledning tillhandahåller en konceptuell brygga från Ashbys lag till själv‑variationsgapet. Det är inte ett operationellt mätprotokoll. De viktigaste begränsningarna är:

1. **Linjäritet.** Verklig självobservation är djupt ickelinjär. Kognitiva bias, emotionella tillstånd och narrativa strukturer introducerar förvrängningar som en linjär matris inte kan fånga. Rangvillkoret fångar första ordningens informationsförlust; högre ordningens dynamik ligger bortom det aktuella omfånget.

2. **Dimensionalitetsuppskattning.** Att mäta **dim(D_själv)** och **dim(V_själv)** i en levande person är en betydande metodologisk utmaning. Självkomplexitetsinstrument (Linville, 1985) tillhandahåller en startpunkt men fångar kognitiv struktur snarare än full värdedimensionalitet. Erfarenhetssamplingsmetoder, narrativ analys och psykometriska verktyg för värdediversitet skulle kunna bidra till operationalisering.

3. **Statiskt antagande.** Villkoret gäller för en fix ögonblicksbild av en persons liv. Det säger ingenting om hur **dim(D_själv)** expanderar över livsloppet eller hur **dim(V_själv)** skulle kunna medvetet expanderas genom praktik. Den dynamiska utvidgningen presenteras i Appendix B.

4. **Målmängdstolkning.** En stor **dim(G_själv)** — en person som kan acceptera många olika tillstånd som "okej" — reducerar kravet på **dim(V_själv)**. Detta fångar det adaptiva värdet av flexibilitet, icke‑anknytning och kapaciteten att finna välmående under skiftande betingelser. En person med rigida, snäva definitioner av framgång behöver en mycket rikare värderingsarkitektur för att upprätthålla stabilitet, eftersom de har mindre tolerans för avvikelse.

Med förbehåll för dessa begränsningar uttrycker ekvation (1) artikelns arkitektoniska insikt i kompakt form: en personlig värderingsarkitektur som följer för få dimensioner i förhållande till komplexiteten i en persons liv är strukturellt oförmögen att upprätthålla stabil självstyrning. Själv‑variationsgapet kvantifierar underskottet. När gapet överskrider den kritiska tröskeln inträder personen i ett tillstånd av konstitutionell självoobserverbarhet — de kan inte uppfatta källorna till sitt eget lidande, och kris blir den enda tillgängliga återkopplingsmekanismen för att återställa medvetenhet.
