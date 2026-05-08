## Appendix A: Formell härledning av villkoret för minsta värdedimensionalitet (statisk)

Detta appendix formaliserar utvidgningen av Ashbys lag om nödvändig variation från fysiska styrenheter till värderingsarkitekturer, vilket ger villkoret **dim(V) ≥ dim(D) − dim(G)** som används i huvudtexten. Härledningen är statisk: den behandlar störningsrummet och värderingsarkitekturen som fixa, utan att modellera deras temporala evolution (se Appendix B för den dynamiska utvidgningen).

### A.1 System, störning och mål

Betrakta ett system **S** vars tillstånd vid varje tidpunkt är en vektor **x** ∈ **X**, där **X** är ett ändligdimensionellt vektorrum över de reella talen. Systemet är utsatt för en störningsvektor **d** ∈ **D**, där **D** är störningsrummet. Systemets dynamik modelleras inte direkt; vi abstraherar den till avbildningen från störningar till utfall.

En *styrningsregulator* (en värderingsarkitektur) försöker hålla systemet inom en utsedd målmängd **G** ⊂ **X**. Målmängden representerar de acceptabla tillstånden i världen såsom de definieras av värderingsarkitekturen. Om exempelvis värderingsarkitekturen följer BNP och arbetslöshet är **G** mängden av tillstånd där båda är inom acceptabla gränser.

Regulatorn observerar inte det fulla tillståndet **x**. Den observerar en projektion:

**y = C x + ε**

där **C**: **X** → **Y** är en linjär observationsmatris och **ε** är brus. Valet av **C** bestäms av värderingsarkitekturen: den väljer vilka dimensioner av tillståndsrummet som är operationellt synliga.

### A.2 Variation som dimensionalitet

Ashby definierade variation som logaritmen av antalet särskiljbara tillstånd. I ett kontinuerligt tillståndsrum anpassar vi detta som den *effektiva dimensionaliteten* — rangen av det relevanta vektorrummet. Specifikt:

- **dim(D)** = störningsrummets rang: antalet oberoende sätt på vilka systemet kan knuffas bort från sitt mål.
- **dim(G)** = målmängdens rang: antalet oberoende riktningar i vilka systemet tillåts variera och fortfarande betraktas som "acceptabelt." Om målet är en enda punkt är dim(G) = 0.
- **dim(V)** = observationsrummets **Y** rang, dvs. antalet oberoende signaldimensioner som värderingsarkitekturen kan särskilja.

Detta är en förenkling: verkliga störningar kan vara ickelinjära, icke-Gaussiska och dynamiskt kopplade. Rangvillkoret fångar det linjära fallet; utvidgningar är möjliga men bortom det aktuella omfånget.

### A.3 Ashbys lag i dimensionell form

Ashbys lag i sin ursprungliga formulering: **V(R) ≥ V(D) − V(G)**, där **V(·)** är variation. Genom att avbilda variation på dimensionalitet (för tillräckligt reguljära rum, med variation som logaritmen av antalet särskiljbara tillstånd, skalar variation med rang) erhåller vi:

**dim(V) ≥ dim(D) − dim(G)**  (1)

Detta är det statiska villkoret för nödvändig variation för en regulator vars observationskanal har rang dim(V). Det fastställer: antalet oberoende signaldimensioner som regulatorn kan observera måste vara minst antalet oberoende störningsdimensioner minus antalet oberoende dimensioner som systemet tillåts ockupera inom målmängden.

Om dim(V) `<` dim(D) − dim(G) existerar störningsdimensioner som ligger i nollrummet för observationsmatrisen **C**. Dessa störningar kan knuffa systemet ut ur målmängden utan att regulatorn någonsin registrerar en avvikelse, eftersom regulatorns observationsrum är ortogonalt mot dem.

### A.4 Tillämpning på värderingsarkitekturer

En *värderingsarkitektur* fungerar som regulatorn i detta schema. Den definieras av en målfunktion **J(x)** som minimeras eller maximeras, men för stabilitetsändamål är den relevanta egenskapen *vilka avvikelser från det önskade tillståndet som är synliga som kostnader*. Värderingsarkitekturens effektiva observationsmatris **C** väljer de dimensioner av tillståndet som ingår i målfunktionen.

En värderingsarkitektur med **dim(V) = k** följer **k** oberoende dimensioner av systemets tillstånd och är blind för resten. Det minimala dimensionalitetsvillkoret (1) blir:

**dim(Värderingsarkitektur) ≥ dim(Störningsrum) − dim(Målmängd)**

I huvudtexten förenklas detta till **dim(V) ≥ dim(D) − dim(G)**, med förståelsen att **dim(D)** — störningsmiljöns effektiva dimensionalitet — är stor och öppen i praktiken.

### A.5 Tolkning och brasklappar

Denna härledning tillhandahåller en konceptuell brygga från Ashbys lag till variationsgapet. Det är inte ett operationellt mätprotokoll. De viktigaste begränsningarna är:

1. **Linjäritet:** Verkliga observationskanaler är ickelinjära. Rangvillkoret fångar första ordningens informationsförlust; högre ordningens interaktioner mellan dimensioner modelleras inte.

2. **Dimensionalitetsuppskattning:** dim(D) och dim(G) är inte direkt observerbara i de flesta styrningssammanhang. Att uppskatta den effektiva dimensionaliteten hos en störningsmiljö kräver tidsserieanalys av historiska chocker, vilket är genomförbart i princip men icke-trivialt.

3. **Statiskt antagande:** Villkoret säger ingenting om hur **dim(D)** eller **dim(V)** förändras över tid. Det gäller för en fix ögonblicksbild. Det dynamiska fallet, där **dim(D)** expanderar och **dim(V)** måste anpassas, behandlas i Appendix B.

4. **Målmängdsdimensionalitet:** Termen **dim(G)** kan misstolkas. Om målmängden är en enda punkt (t.ex. exakt 2% inflation) är dim(G) = 0 och villkoret är dim(V) ≥ dim(D). Om målet tillåter ett brett spektrum av acceptabel variation är dim(G) större och kravet på dim(V) är avslappnat. Detta fångar intuitionen att ett system med lösa mål behöver mindre precis observation.

Med förbehåll för dessa begränsningar uttrycker ekvation (1) artikelns arkitektoniska insikt i en kompakt, falsifierbar form: en värderingsarkitektur som följer för få dimensioner i förhållande till den störningsmiljö den möter är strukturellt oförmögen att stabilisera det system den styr. Variationsgapet **G = dim(D) − dim(G) − dim(V)** kvantifierar underskottet; när **G > G_crit** överskrider systemet den upplösningströskel som beskrivs i Del III.

---
