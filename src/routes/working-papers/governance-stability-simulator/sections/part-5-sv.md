# Del V: Begränsningar

En simulering som inte anger sina begränsningar är ett argument i förklädnad. Följande begränsningar är inneboende i den nuvarande modellen och bör vägleda hur dess fynd tolkas och tillämpas.

## Parametrarna är illustrativa, inte empiriska

De specifika värden som används i simuleringen — latens på 12 kontra 2, brus på 6,0 kontra 0,5, en chock av magnituden 45 — är valda för att producera tydliga strukturella kontraster, inte för att representera uppmätta egenskaper hos något verkligt styrningssystem. De kvalitativa fynden (att hög latens sätter tak för lyhördhet, att aggregering förstör spatial information, att koppling förstärker olösta kriser) är robusta för parametervariation. De specifika kvantitativa utfallen — återhämtningstider, underskottsintegraler, prestandaförhållanden — är artefakter av de valda parametrarna och bör inte citeras som empiriska mätningar.

Att förankra detta ramverk i verkliga styrningsdata skulle kräva empiriskt arbete: att mäta faktiska latensdistributioner över styrningslager, uppskatta informationsförlust över rapporteringshierarkier och kalibrera kopplingsparametrar från historiska data om krisspridning. Det arbetet ligger utanför denna rapports räckvidd men utgör en naturlig och viktig utbyggnad.

## Modellen är linjär

Ekvationen för tillståndsövergång `x(t+1) = A·x(t) + B·u(t−τ) + d(t)` är en linjär tidsinvariant modell. Verkliga styrningssystem är ickelinjära. Stabilitetströsklar är inte jämna — system verkar ofta stabila tills de passerar en kritisk punkt och därefter snabbt kollapsar. Återkopplingsförstärkningar är inte fasta — institutioner anpassar sina svarsstrategier över tid. Interaktionen mellan krisens svårighetsgrad och svarskapacitet är inte multiplikativ på det enkla sätt som modellen antar.

Linjära modeller är en korrekt utgångspunkt: de är analytiskt hanterbara, deras egenskaper är väl förstådda och de fångar det första ordningens beteende som dominerar i området nära jämvikt. Men styrningskriser involverar ofta just de ickelinjära dynamiker som linjära modeller inte kan representera — kaskadfel, tröskelpunkter (tipping points), hysteres. Utbyggnader till ickelinjär dynamik är en betydande forskningsinriktning.

## Noder behandlas som homogena

I den nuvarande modellen har alla tio noder samma dynamik, samma bearbetningskapacitet och samma kopplingsstyrka till sina grannar. Verkliga styrningsenheter är heterogena i alla dessa dimensioner: en tät urban nod har annorlunda dynamik än en utspridd landsbygdsnod; en välresurserad kommun har en annan svarskapacitet än en underfinansierad; geografisk och ekonomisk närhet skapar asymmetrisk koppling.

Heterogena nätverksmodeller skulle producera rikare och mer realistisk dynamik. De skulle också tillåta utforskning av hur ojämlikhet i nodkapacitet interagerar med styrningsarkitektur — en fråga av betydande praktisk vikt.

## Modellen har en enda typ av störning

Simuleringen använder en enda ögonblicklig chock mot två noder. Verkliga styrningsmiljöer involverar kontinuerliga, överlappande, korrelerade störningar av varierande svårighetsgrad och spatial utsträckning. Vissa kriser är genuint lokaliserade; andra är systemövergripande. Vissa är plötsliga; andra ackumuleras långsamt. Vissa är korrelerade över noder; andra är oberoende.

Scenariot med en lokaliserad chock är valt för att det renast isolerar genomsnittsproblemet. Det är inte representativt för hela skalan av utmaningar som styrningssystem står inför. I synnerhet adresserar inte modellen scenarier där centraliserad samordning ger genuina fördelar — såsom när en störning är genuint systemövergripande och kräver ett samordnat svar över alla noder samtidigt.

## Modellen fångar inte in lärande eller anpassning

Arkitektur A:s regulator använder fasta parametrar under hela simuleringen. Verkliga institutioner anpassar sig: de uppdaterar sina modeller, reformerar sina procedurer och förbättrar sina informationssystem över tid. En viktig fråga som den nuvarande modellen inte kan besvara är om arkitekturer med hög latens och låg signaltrohet kan kompensera för sina strukturella nackdelar genom institutionellt lärande — och i vilken takt.

Den adaptiva regulatorutbyggnaden (där förstärkning justeras dynamiskt baserat på observerad prestanda) är en naturlig nästa utveckling och skulle tillåta simulatorn att adressera frågor om institutionella lärandebanor.

## Jämförelsen är mellan två idealiserade arkitekturer

Arkitektur A och arkitektur B representerar extrempunkter i en kontinuerlig designrymd. Verkliga styrningssystem är hybrider: delvis centraliserade, delvis distribuerade, med varierande latens och signaltrohet på olika lager. Simuleringen demonstrerar den strukturella logiken vid extremerna; den kartlägger inte det mellanliggande utrymme där de flesta verkliga beslut om institutionell design fattas.

Detta är ett medvetet val för tydlighetens skull, inte ett påstående om att verkliga system är binära. Den praktiska frågan handlar alltid om rörelseriktningen — huruvida en given reform ökar eller minskar den effektiva latensen, förbättrar eller försämrar signaltroheten — snarare än om att uppnå en idealiserad arkitektur.

## Vad simulatorn inte är

Simulatorn är inte en prediktiv modell av något specifikt styrningssystem. Den tar inte in verkliga data som indata och producerar prognoser. Den bevisar inte att något särskilt institutionellt arrangemang är överlägset i någon speciell kontext. Den genererar inte policyrekommendationer.

Den är ett analytiskt verktyg för att förstå strukturella relationer. Dess värde ligger i att göra abstrakta principer — latensbegränsningar, signaltrohet, genomsnittsproblemet — konkreta och visualiserbara. Slutsatserna den stöder är slutsatser om struktur, inte om policy.
