## Appendix B: Utvidgning till tidsvarierande dimensionalitet — Variationsgapets dynamik och upplösningströskeln

Appendix A behandlade störningsrummet **D** och värderingsarkitekturen **V** som statiska, vilket gav ett ögonblicksvillkor: **dim(V) ≥ dim(D) − dim(G)**. Men störningsmiljöns effektiva dimensionalitet är inte fix. Nya teknologier, miljöförändringar, sociala omstruktureringar och geopolitiska skiften introducerar kontinuerligt nya variationsdimensioner som styrsystem måste navigera. Detta appendix utvidgar det statiska villkoret till fallet där både **dim(D)** och **dim(V)** kan variera över tid, formaliserar den heuristiska modellen **dG/dt = α − β · A(V)** som används i Del III och härleder upplösningströskelvillkoret.

### B.1 Tidsvarierande dimensionalitet

Låt **dim(D)(t)** beteckna störningsrummets effektiva dimensionalitet vid tidpunkten **t**, och **dim(V)(t)** värderingsarkitekturens effektiva dimensionalitet vid tidpunkten **t**. Målmängdens dimensionalitet **dim(G)** antas vara fix för enkelhets skull — mängden acceptabla utfall behandlas som en konstitutionell konstant, även om den i praktiken också kan utvecklas.

Variationsgapet vid tidpunkten **t** är:

**G(t) = dim(D)(t) − dim(G) − dim(V)(t)**

Det statiska villkoret **G ≤ 0** (eller **G `<` G_crit**) är nu ett rörligt mål. Ett system som uppfyller villkoret vid **t₀** kan överträda det vid **t₁** om **dim(D)** växer snabbare än **dim(V)**. Det evolutionära trycket på styrningsarkitekturer uppstår just ur denna dynamik: marken förskjuts under dem.

### B.2 Störningsrummets dynamik

Expansionen av **dim(D)** drivs av framväxten av vad Kauffman (2000) kallar "det angränsande möjliga" — nya tillstånd och interaktioner som tidigare inte var nåbara. I styrningstermer uppstår nya störningsdimensioner genom mekanismer som inkluderar:

- **Teknologisk förändring**: digitalisering introducerar cybersäkerhet, epistemisk integritet och algoritmisk rättvisa som styrningsdimensioner vilka inte existerade i den fördigitala eran.
- **Miljöförändring**: klimatförändring introducerar koldioxidbudgetar, anpassningsfinansiering och hanterad reträtt som dimensioner av offentlig politik.
- **Social förändring**: demografisk transition, urbanisering och kulturell pluralisering introducerar generationsrättvisa, rumslig rättvisa och identitetserkännande som styrningsdimensioner.
- **Förstärkning av ömsesidigt beroende**: globalisering och nätverksinfrastruktur kopplar samman tidigare oberoende system, så att störningar i en domän (energimarknader, leveranskedjor, informationsekosystem) propagerar till andra, vilket ökar den effektiva dimensionaliteten i det kombinerade störningsrummet (Taleb, 2012).

Vi modellerar denna expansion som:

**dim(D)(t) = dim(D)(0) + ∫₀ᵗ α(s) ds**

där **α(s)** är den momentana uppkomsthastigheten för nya störningsdimensioner vid tidpunkten **s**. Generellt är **α(s)** icke-negativ och sannolikt icke-stationär — perioder av snabb teknologisk eller geopolitisk förändring producerar högre **α**. Det enklaste hanterbara fallet, som används i huvudtexten, antar att **α** är approximativt konstant över den relevanta tidshorisonten, vilket ger:

**dim(D)(t) = dim(D)(0) + α t**

### B.3 Värderingsarkitekturens dynamik

Värderingsarkitekturen kan också expandera sin dimensionalitet över tid — genom tillägg av nya mått, skapandet av nya styrningsinstitutioner eller synliggörandet av tidigare exkluderade värden genom politisk mobilisering eller deliberativa processer (Dryzek, 2000). Vi modellerar denna expansion som:

**dim(V)(t) = dim(V)(0) + ∫₀ᵗ β(s) · A(V)(s) ds**

där:

- **A(V)(s)** är *anpassningsansträngningen* vid tidpunkten **s** — resurserna och den politiska vilja som ägnas åt att expandera värderingsarkitekturen.
- **β(s)** är *anpassningseffektiviteten* — den andel av anpassningsansträngningen som framgångsrikt översätts till en ökning i effektiv dimensionalitet. **β** kan vara mindre än 1 på grund av institutionell friktion, infångning av reformprocesser eller den inneboende svårigheten att uppfatta dimensioner som den existerande arkitekturen exkluderar.

Genom att kombinera dessa ges variationsgapets dynamik av:

**dG/dt = α(t) − β(t) · A(V)(t)**  (2)

Detta är den formella motsvarigheten till den heuristiska ekvationen i Del III. Gapet växer när uppkomsthastigheten för nya störningar överstiger den hastighet med vilken värderingsarkitekturen expanderar sin dimensionalitet. Gapet krymper när anpassning löper snabbare än uppkomst.

### B.4 Den kritiska upplösningströskeln

Alla positiva värden på **G** är inte katastrofala. Ett system kan fungera med ett måttligt variationsgap och absorbera den oobserverade variansen som oförklarat brus, förutsatt att signalen från de observerade dimensionerna förblir dominant. Katastrof inträffar när gapet överskrider en kritisk tröskel **G_crit** vid vilken signal‑brusförhållandet i värdekanalen faller under ett.

För att formalisera **G_crit** måste vi relatera variationsgap till informationsförlust. Observationskanalen **y = Cx + ε** överför information om det sanna tillståndet **x** med en hastighet begränsad av kanalkapaciteten (Shannon, 1948). När **G** ökar — när fler störningsdimensioner faller in i nollrummet för **C** — minskar den ömsesidiga informationen mellan **x** och **y**. SNR i värdekanalen är en avtagande funktion av **G**.

Efter ramverket från Artikel III definierar vi **G_crit** som det värde på gapet vid vilket:

**I(x; y) ≤ I(ε; y)**

där **I(x; y)** är den ömsesidiga informationen mellan det sanna tillståndet och observationen, och **I(ε; y)** är den ömsesidiga informationen mellan bruset och observationen. Informellt: den information observationen bär om verkligheten är inte större än den information den bär om kanalens brusstruktur. Bortom denna punkt är systemets observationer mer informativa om egenskaperna hos dess egen mätapparatur än om den värld det måste styra.

För linjära Gaussiska kanaler reduceras detta villkor till den SNR-tröskel som är välbekant från signalbehandling: signalvariansen faller under brusvariansen. Det precisa värdet av **G_crit** beror på kanalstrukturen **C** och bruskovariansen, men den kvalitativa poängen är robust: det existerar en tröskel bortom vilken observationskanalen är konstitutionellt oinformativ.

### B.5 Villkor för hanterad vs. ohanterad gaptillväxt

Ekvation (2) ger ett direkt villkor för livskraft:

- **Hanterad regim**: **β(t) · A(V)(t) ≥ α(t)**. Variationsgapet är stabilt eller krympande. Systemet upprätthåller perceptuell kontakt med sin miljö.
- **Ohanterad regim**: **β(t) · A(V)(t) `<` α(t)**. Variationsgapet växer. Systemet förlorar progressivt observerbarhet av de störningsdimensioner som så småningom kommer att avgöra dess öde.

I den ohanterade regimen ökar **G(t)** monotont. Om inte regimen skiftar — antingen faller **α** (störningsmiljön förenklas) eller **β · A(V)** stiger (anpassningen accelererar) — kommer **G(t)** så småningom att korsa **G_crit**. Tiden till upplösning är:

**T_uppl = (G_crit − G(0)) / (α − β · A(V))**

Detta är den återstående tiden innan värderingsarkitekturen blir strukturellt oförmögen att uppfatta existentiella hot. Styrningsimplikationen är direkt: om **T_uppl** är kortare än den tidsskala som krävs för institutionell reform står systemet inför en påtvingad upplösning — kollaps — snarare än en hanterad transition.

### B.6 Relation till empiriska fenomen

Denna dynamiska formalism fångar den bana som beskrivs i landrapporterna:

- I **Japan** var **α** låg i förhållande till efterkrigsdecennierna, men **β · A(V)** var ännu lägre — värderingsarkitekturen motstod aktivt dimensionell expansion eftersom stabilitet var det enda måttet. **G** växte långsamt men stadigt, och systemet närmar sig nu upplösning genom gradvis frysning snarare än akut kollaps.
- I **Ryssland** var **α** måttlig men **β · A(V)** var kraftigt negativ — värderingsarkitekturen förstörde aktivt sin egen observationskapacitet. **G** sköt i höjden snabbt och korsade **G_crit** i ett komprimerat tidsfönster.
- I **Storbritannien** ökade **α** genom postindustriell omstrukturering och digital transformation, medan **β · A(V)** dämpades av centraliseringsdynamiken i Westminster-modellen och finansdepartementets ortodoxi. **G** växte genom ackumuleringen av leveransmisslyckanden och demokratisk frånkoppling.
- I **EU** ökade **α** kraftigt med polykrisen, medan **β · A(V)** förblev låg på grund av förhandlings‑utspädningsarkitekturen. **G** vidgades tills koherens blev strukturellt ouppnåelig.

### B.7 Brasklappar och öppna problem

Denna dynamiska utvidgning är en konceptuell byggnadsställning, inte en kalibrerad modell. Betydande begränsningar inkluderar:

1. **Mätning av α och β**: Uppkomsthastigheten för nya störningsdimensioner och anpassningseffektiviteten hos värderingsarkitekturer är för närvarande inte mätbara med precision. Att uppskatta dem kräver longitudinell analys av policydomäner, vilket är metodologiskt utmanande men möjligt i princip.

2. **Dynamikens linjäritet**: Ekvation (2) är av första ordningen och linjär. Verkliga system uppvisar tröskeleffekter i både **α** (störningar kan uppstå i kaskader) och **β** (anpassning kan bli lättare eller svårare när **G** förändras). Ickelinjära utvidgningar krävs för realistisk modellering.

3. **Endogenitet hos α**: Störningarnas uppkomsthastighet är inte rent exogen. Ett styrsystem som aktivt utforskar sin miljö — genom experimenterande, övervakning och deliberativt synliggörande — kan upptäcka nya dimensioner tidigare, vilket effektivt ökar **α** på kort sikt men möjliggör tidigare anpassning. Relationen mellan utforskande och störningsuppkomst är komplex.

4. **Målmängdsutveckling**: Modellen behandlar **dim(G)** som fix. I praktiken omförhandlar samhällen periodiskt vad som räknas som acceptabelt — i konstitutionella ögonblick, genom sociala rörelser eller genom kris. Att inkorporera målmängdsdynamik skulle lägga till en tredje differentialekvation till systemet.

5. **Fraktal struktur**: Modellen aggregerar alla styrningsskalor till ett enda **G**. En mer fullständig behandling skulle dekomponera **G** efter skala och erkänna att lokala system kan upprätthålla observerbarhet av dimensioner som är osynliga för nationella system, och vice versa — den fraktala värderingsarkitektur som beskrevs i Del VI.

Med förbehåll för dessa begränsningar tillhandahåller Appendix B det formella stödet för artikelns centrala dynamiska påstående: i en föränderlig värld tillåter en statisk värderingsarkitektur variationsgapet att växa, och när det gapet korsar en kritisk tröskel blir upplösning — hanterad eller påtvingad — strukturellt oundviklig. Det enda sättet att undvika denna bana är att upprätthålla en adaptiv kapacitet som matchar den hastighet med vilken miljön genererar nyhet. De metastyrningsinstitutioner som föreslås i Del VI är utformade för att operationalisera just denna kapacitet.
