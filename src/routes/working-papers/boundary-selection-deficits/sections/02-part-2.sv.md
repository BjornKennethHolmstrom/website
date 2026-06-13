# Del II — Formellt ramverk

| Beslut  | Fråga             | Rapport |
| ------- | ----------------- | ------- |
| Skala   | Vilken tidsskala? | II      |
| Värde   | Vilka dimensioner?| VI      |
| Gräns   | Vilket system?    | XII     |

## 2.1 Verklig och modellerad dynamik

Låt det sanna systemet beskrivas av en tillståndsvektor **x**(t) ∈ ℝⁿ som fångar varje variabel relevant för de utfall regulatorn bryr sig om. Detta är den *verkliga anläggningen*. Dess dynamik är:

**ẋ**(t) = **f**(**x**(t), **u**(t), **w**(t))

där **u**(t) är den styrsignal som är tillgänglig för en given styrningsaktör, **w**(t) representerar genuint exogena störningar (processbrus, miljöchocker), och **f** kodar den fullständiga kopplingsstrukturen — inklusive alla gränsöverskridande flöden, återkopplingar och ömsesidiga beroenden som länkar regulatorns jurisdiktion till resten av systemet.

Regulatorn styr emellertid inte den verkliga anläggningen. Den styr en *modellerad anläggning* — den delmängd av den verkliga anläggningen som faller inom dess jurisdiktionella gräns. Formellt opererar regulatorns interna modell på en projicerad tillståndsvektor **x̂**(t) ∈ ℝᵐ, där m < n och projektionen **P** : ℝⁿ → ℝᵐ förkastar alla tillstånd utanför regulatorns auktoritetsperimeter. Regulatorns modell av systemdynamiken är:

**ẋ̂**(t) = **f̂**(**x̂**(t), **u**(t), 0)

Den kritiska skillnaden ligger i tre drag hos denna ekvation. För det första är **f̂** inte **f**: den utesluter de kopplingstermer som förbinder jurisdiktionen med den externa världen. För det andra sätts den externa störningen **w**(t) till noll — inte därför att regulatorn tror att världen är brusfri, utan därför att regulatorns modell behandlar gränsöverskridande inflöden som exogent brus snarare än som strukturerad återkoppling. För det tredje antas regulatorns aktuering endast påverka **x̂**, medan den i verkligheten kan generera spridningseffekter som propagerar genom det fullständiga tillståndet **x** och återkommer senare som störningar.

Den *omodellerade dynamiken* är skillnaden mellan det verkliga och det modellerade systemet:

**Δ**(**x**, **u**, t) = **f**(**x**(t), **u**(t), **w**(t)) − **f̂**(**Px**(t), **u**(t), 0)

Denna **Δ**-term är inte bara en residual. Den är det strukturerade glappet mellan vad regulatorn tror att den styr och vad den faktiskt styr. När **Δ** är liten i förhållande till regulatorns stabiliseringskapacitet är den modellerade anläggningen en adekvat approximation; regulatorn kan behandla glappet som brus, buffra mot det och upprätthålla stabilitet. När **Δ** är stor — specifikt när gränsöverskridande kopplingar dominerar variansen i utfallen inom jurisdiktionen — är regulatorn systematiskt felkalibrerad. Dess interventioner är optimerade för **f̂** men verkställs i **f**, och skillnaden ackumuleras.

Styrningstolkningen är direkt. Ett nationellt hälsodepartement modellerar sin pandemirespons utifrån antagandet att det relevanta systemet är den nationella befolkningen. Den verkliga anläggningen inkluderar internationella resenätverk, utländska vaccinförsörjningskedjor och variantutveckling utomlands — vilka alla återkopplas till nationella utfall genom kanaler som den nationella modellen utesluter. En centralbank modellerar sin inflationsdynamik utifrån inhemska produktionsgap och räntor. Den verkliga anläggningen inkluderar globala leveranskedjor, penningpolitiska spridningseffekter från utlandet och råvaruprisdynamik satt på marknader som centralbanken inte kan påverka. I varje fall är regulatorn kompetent, välförsedd med resurser och agerar i god tro. Misslyckandet ligger inte hos regulatorn. Det ligger i gränsen mellan **x** och **x̂**.

## 2.2 M-Δ-konfigurationen

För att analysera när gränsmissanpassning destabiliserar en regulator behöver vi mer än en generisk felterm. Robust reglerteori tillhandahåller ett precist ramverk: M-Δ-konfigurationen, där omodellerad dynamik representeras inte som en additiv störning utan som en *återkopplingssammankoppling*.

Strukturen är som följer. Det nominella systemet — regulatorns modell av sin jurisdiktion — betecknas **M**. Det tar emot två insignaler: styrsignalen **u** från regulatorn, och en inflödessignal **w_in** från den externa världen. Det producerar två utsignaler: de reglerade utfallen **y** (vilka regulatorn övervakar och försöker stabilisera) och en utflödessignal **y_out** — de spridningseffekter som jurisdiktionen exporterar till den externa världen.

Den externa världen representeras av **Δ**, blocket för omodellerad dynamik. **Δ** tar emot **y_out** (jurisdiktionens spridningseffekter) och producerar **w_in** (de inflöden som återvänder till jurisdiktionen). Slingan sluts:

**Jurisdiktion (M) → Spridningseffekter (y_out) → Extern värld (Δ) → Inflöden (w_in) → Jurisdiktion (M)**

Detta är inte ett envägsläckage. Det är en återkopplingsslinga. Regulatorns egna handlingar, överförda genom jurisdiktionen, genererar spridningseffekter som propagerar genom den externa världen och återkommer — möjligen förstärkta, möjligen med en fasfördröjning, möjligen i en annan form — som störningar vilka regulatorns modell behandlar som exogena. Regulatorn svarar på dessa störningar med ytterligare interventioner, vilka genererar ytterligare spridningseffekter, och slingan fortsätter.

Småförstärkningssatsen tillhandahåller stabilitetsvillkoret för denna sammankoppling. Om både **M** och **Δ** är stabila system, förblir det sammankopplade systemet stabilt under förutsättning att:

‖**M**‖ · ‖**Δ**‖ < 1

där ‖·‖ betecknar systemförstärkningen — den maximala faktor med vilken systemet kan förstärka en insignal. Om produkten av förstärkningarna överstiger ett kan slingan bli instabil, även om varje komponent är internt stabil.

Styrningstolkningen: ‖**M**‖ är känsligheten i jurisdiktionens spridningsutflöde för störningar och styrhandlingar — ungefär hur starkt händelser inom jurisdiktionen propagerar utåt. ‖**Δ**‖ är den externa världens förstärkning — hur starkt spridningseffekter bearbetas och returneras som störningar. Deras produkt mäter den totala slingförstärkningen kring gränsen. När den överstiger ett kan regulatorns egna stabiliseringsansträngningar driva det kopplade systemet in i oscillation eller divergens, eftersom regulatorn agerar på en anläggning vars återkopplingsstruktur den inte modellerar.

Detta är mekanismen bakom det kontraintuitiva fyndet i teknisk rapport IV — att statlig förvaltning av en allmänning kan prestera sämre än öppen tillgång när observationslatensen är hög. Regulatorn auktoriserar uttag baserat på en fördröjd aggregerad signal; uttaget utarmar resursen; utarmningen observeras inte förrän nästa fördröjda aggregat anländer; nästa kvot sätts för högt för det nu minskade beståndet. Slingan oscillerar inte på grund av externa chocker utan därför att regulatorns egna handlingar, processade genom den omodellerade resursdynamiken, återkommer som förstärkta störningar. M-Δ-konfigurationen gör denna mekanism explicit och generell: varje regulator vars gräns utesluter en strukturerad återkopplingsslinga kan destabiliseras av sina egna interventioner.

## 2.3 Gränsmissanpassningsindex B

För att operationalisera gränsproblemet för styrningsanalys definierar vi ett skalärt index för gränsmissanpassning:

**B = Var(spridning_in) / Var(total_störning)**

där Var(spridning_in) är variansen i utfall inom regulatorns jurisdiktion som kausalt kan tillskrivas inflöden utifrån gränsen, och Var(total_störning) är den totala varians regulatorn måste hantera.

B är begränsat mellan 0 och 1. När B ≈ 0 bestäms regulatorns utfall nästan helt av intern dynamik; gränsöverskridande kopplingar är försumbara, och den modellerade anläggningen är en adekvat approximation av den verkliga anläggningen. När B ≈ 1 bestäms regulatorns utfall nästan helt av dynamik som har sitt ursprung utanför dess gräns; regulatorn styr ett delsystem vars beteende den inte kan förutsäga enbart utifrån intern information.

Det kritiska analytiska steget är att dekomponera B i två komponenter med fundamentalt olika styrningsimplikationer.

**Stokastiskt exogent brus (B_brus).** Detta är den komponent av spridningsvariansen som är okorrelerad med regulatorns egna handlingar — genuin miljömässig slumpmässighet, externa chocker som är oberoende av vad jurisdiktionen gör. En liten öppen ekonomi som drabbas av en utländsk efterfrågechock; en kuststad som träffas av en orkan genererad av avlägsna vädersystem; ett samhälle som påverkas av en pandemi med ursprung på en annan kontinent. Denna komponent kan hanteras genom buffertar, försäkringspooler, system för tidig varning och reservkapacitet. Den försämrar prestanda men hotar inte i sig själv stabiliteten.

**Strukturerad gränsöverskridande återkoppling (B_strukt).** Detta är den komponent av spridningsvariansen som är korrelerad med regulatorns egna tidigare handlingar, processad genom den externa världen och returnerad. Jurisdiktionen släpper ut kol, vilket ackumuleras i den globala atmosfären, vilket förändrar det lokala klimatet, vilket stör det lokala jordbruket — störningen är strukturerad återkoppling, inte exogent brus. En centralbank höjer räntorna, vilket attraherar kapitalinflöden, vilket apprecierar valutan, vilket dämpar exporten, vilket bromsar tillväxten — inbromsningen är regulatorns egen handling som återkommer via den externa slingan. En regering skärper gränskontrollerna, vilket stör leveranskedjorna, vilket skapar inhemska brister, vilket genererar politiskt tryck att lätta på kontrollerna — trycket är endogent i förhållande till gränsarkitekturen.

Distinktionen är betydelsefull eftersom den lämpliga styrningsresponsen skiljer sig kraftigt mellan de två komponenterna. Stokastiskt brus kan hanteras inom den befintliga gränsen — lägg till redundans, förbättra prognoser, bygg upp reserver. Strukturerad återkoppling kan inte det. Den kräver att regulatorn observerar och modellerar den externa slingan, eftersom störningen inte är oberoende av regulatorns handlingar. En regulator som behandlar B_strukt som om den vore B_brus kommer systematiskt att feltillskriva konsekvenserna av sina egna interventioner, vilket producerar en progressiv försämring av kontrollen som ingen mängd intern buffring kan stoppa.

Den totala gränsmissanpassningen är B = B_brus + B_strukt. Båda komponenterna ökar med tätheten och styrkan hos gränsöverskridande kopplingar. Men B_strukt är den komponent som driver M-Δ-slingans förstärkning mot och bortom ett, och det är den komponent som konventionell styrningsanalys — vilken behandlar all extern varians som exogen — systematiskt felidentifierar. Ett styrsystem som står inför hög B_strukt men behandlar den som hög B_brus är den strukturella motsvarigheten till en förare som misstar sin egen bils sladd för en vindby och korrigerar i fel riktning.

## 2.4 Poolningsparadoxen

Den intuitiva styrningsresponsen på gränsmissanpassning är jurisdiktionell utvidgning — poolning. Om spridningseffekter korsar gränser, gör gränserna större. Om ett flodområde spänner över tre delstater, skapa en områdesomfattande myndighet. Om finansiell smitta korsar gränser, skapa en överstatlig regulator. Om klimatförändringen är global, förhandla fram ett globalt fördrag.

Denna intuition är inte felaktig, men den är ofullständig. Att utvidga gränser internaliserar spridningseffekter — den M-Δ-slinga som var extern blir intern, och regulatorn kan nu observera och aktivera den. Men utvidgning försämrar samtidigt regulatorns interna styrningstrohet genom mekanismer som de föregående rapporterna i denna serie har granskat i detalj.

**Observationslatensen ökar.** En större jurisdiktion kräver att information färdas längre från periferi till centrum. Kommunen som kunde observera lokala förhållanden i realtid blir en provins som tar emot månadsrapporter, vilken blir en nation som sammanställer årlig statistik. Teknisk rapport I fastställde att latens sätter ett hårt tak för regulatorns maximala stabila förstärkning: K_max ≈ 1/(τ · |A|). När gränsen expanderar och τ växer blir regulatorn strukturellt mindre kapabel att svara på snabba störningar — trots att störningarna själva nu kan vara interna i jurisdiktionen.

**Rumslig information förstörs av aggregering.** Teknisk rapport I:s medelvärdesproblem: en centraliserad regulator som endast observerar det nationella medelvärdet kan inte särskilja vilka lokaliteter som befinner sig i kris, eftersom aggregering förstör den fördelningsmässiga informationen. Ju större jurisdiktionen är, desto mer varians komprimeras in i varje aggregerat statistiskt mått, och desto allvarligare blir missanpassningen mellan centralt utformade interventioner och lokalt varierande förhållanden.

**Representationskedjorna fördjupas.** Teknisk rapport III fastställde att medborgarnas preferenssignaler dämpas under observerbarhetströskeln efter två till tre representationslager. Att expandera en jurisdiktions gränser tillför nästan oundvikligen representationslager — lokalrådet rapporterar till det regionala organet, vilket rapporterar till det nationella parlamentet, vilket förhandlar med den överstatliga institutionen. Den preferenssignal som når den utvidgade regulatorn är ett flerfaldigt aggregerat, brusstört derivat av originalet, och regulatorn styr en fantom.

**Aktueringskedjorna förlängs.** Teknisk rapport XI:s resultat om reformutmattning: den styrinsats som krävs för att realisera en policyintention växer superlinjärt med delegationsdjupet. Ett överstatligt direktiv måste passera genom nationella departement, regionala myndigheter, lokala myndigheter och implementerare på gatunivå, där varje lager projicerar direktivet på sin egen operationella repertoar och tillför brus och fördröjning. Resultatet är inte att den utvidgade jurisdiktionen inte kan agera — det är att den endast kan agera till en eskalerande politisk och administrativ kostnad, och bortom ett visst djup blir kostnaden prohibitiv.

Poolningsparadoxen är den strukturella avvägning som står i centrum för gränsproblemet. Att expandera gränser internaliserar spridningseffekter (B_strukt faller) men försämrar den interna styrningstroheten (observation, representation och aktuering försämras alla). Att krympa gränser bevarar den interna styrningstroheten men lämnar strukturerad gränsöverskridande återkoppling oreglerad (B_strukt stiger). Det finns ingen enskild gräns som samtidigt minimerar båda källorna till misslyckande.

Detta är inte ett argument mot jurisdiktionell utvidgning. Det är ett argument för att utvidgning ensam inte kan lösa gränsproblemet, eftersom kostnaderna för utvidgning inte är sidoeffekter — de är strukturella konsekvenser av samma arkitektur som producerar fördelarna. Den optimala gränsen för en given styrningsfunktion är den som balanserar den marginella minskningen i B_strukt mot den marginella ökningen i intern styrningsförsämring. Detta optimum beror på den specifika domänens kopplingsstruktur — hur starkt gränsöverskridande flöden bestämmer utfall, och hur känslig domänens styrning är för latens, aggregering och aktueringsdjup.

## 2.5 Informations-aktueringsfronten

Poolningsparadoxen kan uttryckas mer precist genom att avbilda den på de formella resultaten i teknisk rapport XI. Den rapporten fastställde att den minimala styrinsats som krävs för att uppnå ett policymål skalar superlinjärt med delegationsdjupet — antalet organisatoriska lager som ett direktiv måste passera innan det når sin implementeringspunkt. När djupet växer projicerar varje lager direktivet på en förminskad operationell repertoar, tillför latens och injicerar brus. Den effektiva aktueringsmatrisen försämras, och bortom ett kritiskt djup lämnar målet den nåbara mängden helt.

Teknisk rapport XII tillhandahåller det komplementära resultatet. När den jurisdiktionella gränsen krymper växer komponenten för strukturerad gränsöverskridande återkoppling B_strukt. Regulatorns interna aktiveringstrohet är hög — korta kedjor, snabb respons, bevarad lokal information — men systemet den kontrollerar domineras i allt högre grad av dynamik den inte modellerar. M-Δ-slingans förstärkning stiger, och regulatorns egna interventioner, hur precist de än verkställs, genererar destabiliserande återkoppling via den externa världen.

Dessa två resultat definierar en *Informations-Aktueringsfront*:

**Gränsmissanpassning (B_strukt) ⟺ Risk för delegationsdjup (Teknisk rapport XI:s misslyckande)**

Ett system kan inte samtidigt minimera båda. Att expandera gränsen för att fånga gränsöverskridande återkoppling minskar B_strukt men förlänger delegationskedjor och försämrar aktiveringstrohet. Att kontrahera gränsen för att bevara aktiveringstrohet förkortar kedjor men lämnar B_strukt oreglerad. Varje arkitektur med en enda gräns — en westfalisk stat, en federerad union, en global institution — upptar en punkt på denna front. Den kan röra sig längs fronten genom att justera sin gräns. Den kan inte undfly fronten.

Fronten är inte ett råd om förtvivlan. Den är en specifikation av de förhållanden under vilka gränsproblemet kan lösas. Fronten gäller när en enda jurisdiktionell gräns tillämpas på alla styrningsfunktioner samtidigt. Den gäller inte när gränser är *funktionellt specifika* — när olika styrningsfunktioner verkar inom olika jurisdiktionella geometrier matchade mot deras distinkta kopplingsstrukturer.

En flodområdesmyndighet styr vattenallokering inom en gräns dragen för att matcha det hydrologiska avrinningsområdet. En nationell regering styr försvar inom territoriella gränser. Ett regionalt folkhälsoorgan styr sjukdomsövervakning över ett flerlandsöverföringsnätverk. En global klimatinstitution styr utsläpp inom en planetär gräns. Varje funktion verkar på sin egen skala, med sina egna observationskanaler, sin egen aktiveringskapacitet och sin egen gräns. Ingen av dem försöker styra alla funktioner på en enda skala. Systemet som helhet är polycentriskt, nästlat och funktionellt differentierat — och det undflyr fronten just därför att det vägrar det antagande om en enda gräns som genererar avvägningen.

Detta är det strukturella imperativ som Del VI utvecklar till konstruktionsprinciper. Informations-Aktueringsfronten är det formella uttalandet av varför gränsproblemet inte kan lösas genom att välja rätt storlek för en enda jurisdiktion. Den enda utvägen är att överge antagandet att en enda gräns måste tjäna alla styrningsfunktioner, och att matcha gränser mot kopplingsstrukturer funktion för funktion. Matematiken föreskriver inte ett politiskt arrangemang framför ett annat. Den föreskriver att arrangemanget måste vara polycentriskt, eftersom inget monocentriskt sådant samtidigt kan tillfredsställa de konkurrerande kraven på internalisering av spridningseffekter och styrningstrohet.
