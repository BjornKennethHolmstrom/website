# Del IV — Simulering: Den adaptiva regulatorn

Det formella ramverket i Del II modellerar det duala kontrollproblemet: en regulator som samtidigt måste reglera ett system och lära sig dess parametrar. Felsätten i Del III spårar konsekvenserna av obalanser i det duala målet — för lite exploration, för långsam modelluppdatering, för svag aktivering, för aggressiv perturbation, för snabb glömska. Detta avsnitt underkastar denna dynamik kontrollerad simulering, och demonstrerar att felsätten uppstår tillförlitligt från en minimal uppsättning antaganden om inlärningsarkitekturen, även när det underliggande styrsystemet i övrigt är väldesignat.

Simuleringen är inte en kalibrering mot något specifikt verkligt styrsystem. Den är ett existensbevis: en demonstration av att den kvalitativa dynamik som det formella ramverket förutsäger — explorationssvältsfällan, exploateringslåsningen, glömska-utan-inlärningströskeln — genereras av en regulator som måste lära sig medan den agerar, i en miljö som förändras medan den lär sig. Parametrarna är valda för att synliggöra mekanismerna. Koden är öppen källkod, med fixerade frön för replikerbarhet, Monte Carlo-fördelningar över 100 frön, och parametersvep som demonstrerar robusthet. Den fullständiga specifikationen finns i Appendix B.

## 4.1 Modellspecifikation

Det simulerade styrsystemet kontrollerar en tvådimensionell tillståndsvektor \(\mathbf{x}(t) = [x_1(t), x_2(t)]^{\!\top} \in \mathbb{R}^2\), som representerar två policyrelevanta dimensioner såsom ekonomisk produktion och miljökvalitet, eller tjänsteleverans och fiskal balans. Den sanna dynamiken är linjär men regulatorn känner inte till parametrarna med säkerhet:

\[
\mathbf{x}(t+1) = \mathbf{A}(\boldsymbol{\theta}_t)\,\mathbf{x}(t) + \mathbf{B}(\boldsymbol{\theta}_t)\,\mathbf{u}(t) + \mathbf{w}(t), \qquad \mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{W}),
\]

där \(\boldsymbol{\theta}_t \in \mathbb{R}^p\) är en vektor av okända, långsamt tidsvarierande parametrar som styr systemets respons på styrsignaler. De nominella designvärdena är \(\mathbf{A}_0 = 0.95\,\mathbf{I}_2\) och \(\mathbf{B}_0 = \mathbf{I}_2\), men de sanna värdena driver över tid enligt en slumpvandring med liten varians:

\[
\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t + \boldsymbol{\eta}_t, \qquad \boldsymbol{\eta}_t \sim \mathcal{N}(\mathbf{0}, \sigma^2_\theta\,\mathbf{I}),
\]

där \(\sigma^2_\theta\) är *miljöförändringstakten* — den hastighet med vilken systemets dynamik förskjuts bort från regulatorns modell. När \(\sigma^2_\theta = 0\) är miljön stationär och regulatorn kan så småningom lära sig de sanna parametrarna perfekt. När \(\sigma^2_\theta > 0\) är parametrarna ett rörligt mål, och regulatorn måste lära sig kontinuerligt för att hålla jämna steg.

Regulatorn observerar tillståndet genom en brusig mätkanal:

\[
\mathbf{y}(t) = \mathbf{x}(t) + \mathbf{v}(t), \qquad \mathbf{v}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{V}_0),
\]

med \(\mathbf{V}_0 = 0.05\,\mathbf{I}_2\). Observationskanalen antas vara intakt — denna simulering isolerar inlärningsdynamiken genom att hålla observationsarkitekturen vid dess designade trohet. Försämringar av observationskanalen (teknisk rapport III, VI, XIII) skulle förvärra de inlärningsmisslyckanden som demonstreras här.

Regulatorns mål är att minimera det kumulativa kvadrerade styrfelet över simuleringshorisonten:

\[
J = \sum_{t=0}^{T} \|\mathbf{x}(t)\|^2,
\]

där måltillståndet är origo \(\mathbf{x}^* = \mathbf{0}\). Regulatorns prestanda mäts som det tidsgenomsnittliga styrfelet efter en inkörningsperiod.

## 4.2 Regulatorarkitektur

Regulatorn upprätthåller en trosfördelning över de okända parametrarna \(\boldsymbol{\theta}\) och uppdaterar den rekursivt i takt med att observationer ackumuleras. För beräkningsmässig hanterbarhet implementerar simuleringen en rekursiv minsta-kvadrat-estimator (RLS) med en glömskefaktor \(\lambda_f \in (0,1]\), vilken tillhandahåller en löpande skattning \(\hat{\boldsymbol{\theta}}(t)\) av parametrarna och en tillhörande kovariansmatris \(\mathbf{P}(t)\) som kvantifierar regulatorns osäkerhet.

Vid varje tidssteg beräknar regulatorn två kandidathandlingar. Den *säkerhetsekvivalenta* handlingen \(\mathbf{u}_{\text{SE}}(t)\) är den optimala LQR-styrningen givet den aktuella parameterskattningen \(\hat{\boldsymbol{\theta}}(t)\):

\[
\mathbf{u}_{\text{SE}}(t) = -\mathbf{K}(\hat{\boldsymbol{\theta}}(t))\,\hat{\mathbf{x}}(t),
\]

där \(\mathbf{K}(\hat{\boldsymbol{\theta}})\) är LQR-förstärkningen beräknad för den skattade dynamiken. *Explorationskomponenten* \(\mathbf{u}_{\text{explore}}(t)\) är ett gaussiskt dither:

\[
\mathbf{u}_{\text{explore}}(t) \sim \mathcal{N}(\mathbf{0}, \sigma^2_\eta\,\mathbf{I}),
\]

där \(\sigma^2_\eta\) är *explorationsvariansen* — regulatorns valda intensitet av sondering. Den totala styrhandlingen är summan:

\[
\mathbf{u}(t) = \mathbf{u}_{\text{SE}}(t) + \mathbf{u}_{\text{explore}}(t).
\]

Explorationsdithret tjänar två funktioner i det duala kontrollramverket. För det första tillhandahåller det ihållande excitation, vilket säkerställer att insignalen spänner över de riktningar som krävs för att identifiera systemets parametrar (villkoret i Avsnitt 2.4). För det andra förkroppsligar det explorationsbonusen: regulatorn accepterar medvetet kortsiktig prestandaförsämring — dithret driver tillståndet bort från målet — i utbyte mot information som förbättrar framtida prestanda.

Den centrala styrparametern är explorationsvariansen \(\sigma^2_\eta\). När \(\sigma^2_\eta = 0\) är regulatorn säkerhetsekvivalent: den exploaterar sin nuvarande modell utan att sondera. När \(\sigma^2_\eta\) är måttlig balanserar regulatorn exploration och exploatering. När \(\sigma^2_\eta\) är stor dominerar explorationen, och regulatorns egna perturbationer blir en signifikant källa till varians i systemets bana.

Aktiveringskedjan modelleras med en multiplikativ effektivitetsfaktor \(\mu \in [0,1]\) som representerar den andel av den avsedda styrsignalen som faktiskt når systemet:

\[
\mathbf{u}_{\text{eff}}(t) = \mu\,\mathbf{u}(t).
\]

När \(\mu = 1\) är aktiveringskedjan intakt och regulatorns beslut implementeras fullt ut. När \(\mu < 1\) är implementeringen försvagad — det strukturella tillstånd som teknisk rapport XI diagnostiserade som delegationsdjup och som felsättet exploateringslåsning (Avsnitt 3.3) identifierar som flaskhalsen mellan inlärning och handling.

## 4.3 Scenarier

Sex scenarier simuleras, motsvarande felsätten i Del III. Alla använder samma anläggningsdynamik och samma RLS-estimator. De skiljer sig endast i explorationsvariansen \(\sigma^2_\eta\), miljöförändringstakten \(\sigma^2_\theta\), glömskefaktorn \(\lambda_f\) och aktiveringseffektiviteten \(\mu\).

**Scenario 1 — Optimal dual reglering.** Regulatorn upprätthåller ett måttligt, ihållande explorationsdither (\(\sigma^2_\eta = 0.05\)) och en långsam glömskefaktor (\(\lambda_f = 0.99\)). Miljön förändras långsamt (\(\sigma^2_\theta = 0.002\)). Aktiveringen är intakt (\(\mu = 1\)). Detta scenario demonstrerar baslinjen: regulatorns parameterskattningar följer de drivande sanna parametrarna, och styrfelet förblir begränsat och lågt. Systemet lär sig stabilt.

**Scenario 2 — Enbart exploatering (säkerhetsekvivalent).** Regulatorn undertrycker exploration helt (\(\sigma^2_\eta = 0\)). Alla andra parametrar matchar Scenario 1. Regulatorn tillämpar den optimala handlingen givet sin nuvarande modell, men den sonderar aldrig för att upptäcka om modellen fortfarande är korrekt. I takt med att miljön driver divergerar parameterskattningarna från de sanna värdena. Styrfelet matchar initialt eller överträffar något Scenario 1 — eftersom regulatorn inte introducerar explorationsvarians — men försämras sedan progressivt i takt med att modellg lidningen ackumuleras. Försämringen är osynlig för regulatorns interna övervakning, som använder samma drivande modell för att uppskatta prestanda. Detta är explorationssvält.

**Scenario 3 — Krisdriven inlärning.** Regulatorn opererar i enbart-exploaterings-läge (\(\sigma^2_\eta = 0\)) tills styrfelet överstiger en tröskel \(e_{\text{krit}} = 2.0\), vid vilken punkt den byter till hög exploration (\(\sigma^2_\eta = 0.5\)) under en fast varaktighet av 20 tidssteg innan den återgår till exploatering. Scenariot producerar en högkonjunktur–lågkonjunktur-inlärningscykel: perioder av stabil men gradvis försämrad prestanda, punkterade av episoder av aggressiv, störande återinlärning. Den genomsnittliga prestandan över cykeln är sämre än den optimala duala reglerbaslinjen, och systemet upplever periodiska kriser som kunde ha undvikits genom uthållig måttlig exploration.

**Scenario 4 — Överexploration.** Regulatorn utforskar med överdriven varians (\(\sigma^2_\eta = 0.5\) kontinuerligt). Dithret är så stort att regulatorns egna perturbationer dominerar systemets dynamik. Den resulterande oscillationen skymmer just de parametrar regulatorn försöker skatta. Parameterskattningarna är brusiga och otillförlitliga; styrfelet är högt och volatilt. Scenariot demonstrerar att exploration inte är ett okvalificerat gott — det måste kalibreras mot systemets dynamik och mot brusmiljön, och överdriven exploration kan vara lika skadlig som ingen alls.

**Scenario 5 — Glömska-utan-inlärning.** Regulatorn utforskar måttligt (\(\sigma^2_\eta = 0.05\)) men det institutionella minnet är svagt: glömskefaktorn sätts till \(\lambda_f = 0.90\), vilket representerar snabbt avklingande av ackumulerad kunskap. Miljöförändringstakten är måttlig (\(\sigma^2_\theta = 0.005\)). Regulatorn förvärvar information genom exploration, men den glömmer snabbare än den lär sig. Den effektiva urvalsstorleken ackumuleras aldrig; parameterskattningarna förblir brusiga och biaserade. Styrfelet försämras progressivt trots uthållig exploration. Detta är glömska-utan-inlärningsfällan.

**Scenario 6 — Exploateringslåsning.** Regulatorn utforskar och lär sig adekvat (\(\sigma^2_\eta = 0.05\), \(\lambda_f = 0.99\), \(\sigma^2_\theta = 0.002\)), och dess parameterskattningar följer de sanna parametrarna korrekt. Men aktiveringseffektiviteten är reducerad till \(\mu = 0.3\) — endast trettio procent av den avsedda styrsignalen når systemet. Regulatorn vet vad den ska göra, och dess modell av systemet är korrekt, men den kan inte omsätta kunskap i handling. Styrfelet förblir högt eftersom styrsignalen är försvagad, även om inlärningen är framgångsrik. Regulatorns parameterskattningar är korrekta medan dess prestanda är dålig — signaturen för exploateringslåsning. Detta scenario körs som ett svep över \(\mu\) från \(1.0\) ned till \(0.1\), och demonstrerar den progressiva frånkopplingen av inlärning från prestanda i takt med att aktiveringen försämras.

## 4.4 Parametersvep

Tre svep genomförs för att kartlägga gränserna för stabil inlärning.

**Explorationsvarians vs. miljöförändringstakt.** \(\sigma^2_\eta\) sveps från \(0\) till \(0.5\) och \(\sigma^2_\theta\) från \(0\) till \(0.02\). För varje kombination registreras det genomsnittliga stationära styrfelet. Svepet producerar ett fasdiagram i \((\sigma^2_\eta, \sigma^2_\theta)\)-rummet med en tydligt definierad region av stabil inlärning. Vid låg \(\sigma^2_\theta\) räcker även liten exploration; i takt med att miljön förändras snabbare stiger den minimala exploration som krävs för att hålla jämna steg. Under denna kurva befinner sig systemet i explorationssvältsregimen. Ovanför kurvan men inom ett avgränsat band lär sig systemet stabilt. Vid mycket hög \(\sigma^2_\eta\) relativt \(\sigma^2_\theta\) inträder systemet i överexplorationsregimen, och prestandan försämras igen.

**Glömskefaktor vs. inlärningstakt.** Glömskefaktorn \(\lambda_f\) sveps från \(0.80\) till \(1.00\), och miljöförändringstakten \(\sigma^2_\theta\) från \(0\) till \(0.02\), med exploration hållen konstant vid den optimala duala reglernivån. Svepet identifierar nettoinlärningströskeln: linjen i \((\lambda_f, \sigma^2_\theta)\)-rummet under vilken informationsanskaffningstakten överstiger glömskotakten, och ovanför vilken kunskapsbeståndet minskar. System med hög personalomsättning, korta valcykler eller svag infrastruktur för institutionellt minne opererar med låg effektiv \(\lambda_f\); svepet visar den maximala miljöförändringstakt de kan tolerera innan de hamnar i glömska-utan-inlärningsfällan.

**Aktiveringseffektivitet vs. prestanda.** \(\mu\) sveps från \(1.0\) till \(0.1\) med alla andra parametrar vid de optimala duala reglervärdena. Svepet demonstrerar exploateringslåsningskurvan: styrfel som en funktion av aktiveringseffektivitet. Regulatorns parameterskattningsnoggrannhet registreras samtidigt, och visar att inlärningen förblir korrekt även när prestandan försämras — den frånkoppling som definierar detta felsätt.

## 4.5 Förväntade resultat och nyckelfigurer

Simuleringen producerar fyra primära utdata.

**Figur 1 — Fasdiagram över stabil inlärning.** En värmekarta i \((\sigma^2_\eta, \sigma^2_\theta)\)-rummet, färgkodad efter genomsnittligt stationärt styrfel. Den stabila inlärningsregionen är det band av måttlig explorationsvarians där styrfelet är lågt. Explorationssvältsregionen (låg \(\sigma^2_\eta\), måttlig-till-hög \(\sigma^2_\theta\)) visar förhöjt fel i takt med att modellg lidningen ackumuleras. Överexplorationsregionen (hög \(\sigma^2_\eta\)) visar förhöjt fel när dithret destabiliserar systemet. Konturer markerar den minimala exploration som krävs för stabil inlärning vid varje miljöförändringstakt — gränsen för ihållande excitation. Figuren synliggör den duala naturen hos avvägningen exploration–exploatering: för lite exploration och modellen glider; för mycket och regulatorns egna perturbationer dominerar.

**Figur 2 — Tidsserier över explorationssvält och optimal dual reglering.** Tre paneler. Den övre panelen visar styrfelet \(\|\mathbf{x}(t)\|\) över tid för Scenario 1 (optimal dual reglering) och Scenario 2 (enbart exploatering). Banan för enbart exploatering matchar initialt eller överträffar något den duala regleringsbanan, och divergerar sedan uppåt i takt med att modellg lidningen ackumuleras. Mittenpanelen visar parameterskattningsfelet \(\|\hat{\boldsymbol{\theta}}(t) - \boldsymbol{\theta}_t\|\) för samma banor. Det duala reglerfelet förblir begränsat och lågt; felet för enbart exploatering driver uppåt utan gräns. Den nedre panelen visar regulatorns *interna* uppskattning av sitt eget styrfel, såsom det beräknas från den drivande modellen. För den enbart-exploaterande regulatorn förblir denna interna uppskattning låg även när det sanna styrfelet stiger — signaturen för den självdöljande fällan. Regulatorn tror att den presterar väl eftersom den modell den använder för att utvärdera sig själv är samma modell som misslyckas.

**Figur 3 — Exploateringslåsningsbana.** Två paneler för Scenario 6. Den övre panelen visar styrfelet \(\|\mathbf{x}(t)\|\) för tre värden på \(\mu\): \(1.0\) (full aktivering), \(0.5\) (partiell aktivering) och \(0.2\) (allvarlig försvagning). Styrfelet stiger i takt med att aktiveringen försämras. Den nedre panelen visar parameterskattningsfelet för samma tre banor — och det förblir lågt och nästan identiskt över alla tre. Regulatorn lär sig lika bra oavsett om den kan agera på vad den lär sig. Det vertikala avståndet mellan skattningsfelkurvan och styrfelskurvan är exploateringslåsningsgapet: prestandakostnaden för den blockerade översättningen från kunskap till handling.

**Figur 4 — Glömska-utan-inlärningssvep.** En värmekarta i \((\lambda_f, \sigma^2_\theta)\)-rummet, färgkodad efter nettoförändringen i kunskapsbeståndet över simuleringshorisonten. Nettoinlärningsregionen (grön) visar var den takt med vilken information förvärvas från exploration överstiger glömskotakten. Nettoglömskeregionen (röd) visar var kunskap avklingar snabbare än den ackumuleras. Gränsen mellan dem är glömska-utan-inlärningströskeln. Överlagrade på värmekartan är ungefärliga positioner för styrsystem med olika karakteristika för institutionellt minne: ett nordiskt system med stark ämbetsmannakontinuitet och institutionaliserade utvärderingsarkiv (hög \(\lambda_f\)), ett Westminstersystem med måttlig ministeromsättning (måttlig \(\lambda_f\)), och ett system med svag infrastruktur för institutionellt minne och hög politisk omsättning (låg \(\lambda_f\)). Överlagringen är illustrativ, inte kalibrerad, men den synliggör den strukturella sårbarheten hos system med hög omsättning inför miljöförändring.

**Sammanfattande mått.** För varje scenario rapporterar simuleringen: genomsnittligt stationärt styrfel, genomsnittligt parameterskattningsfel, andelen Monte Carlo-körningar där regulatorns interna prestandauppskattning divergerar från den sanna prestandan med mer än 50% (det självdöljande måttet), och, för Scenario 3, antalet krisutlösta återinlärningsepisoder och den totala tiden tillbringad i krisläge.

Simuleringen förutsäger inte specifika utfall för något verkligt styrsystem. Den demonstrerar den kvalitativa dynamik som det formella ramverket identifierar, under kontrollerade förhållanden, med alla icke-inlärningsparametrar hållna vid ideala värden. Det faktum att felsätten uppstår även under dessa idealiserade förhållanden — med optimal tillståndsskattning, med välinställda LQR-förstärkningar, utan antagonistiska aktörer — är det centrala simuleringsfyndet. Explorationssvältsfällan, exploateringslåsningen och glömska-utan-inlärningströskeln är inte konsekvenser av institutionell dysfunktion. De är konsekvenser av den strukturella relationen mellan inlärning, aktivering och minne i varje regulator som måste lära sig medan den agerar. Simuleringen gör den relationen synlig.
