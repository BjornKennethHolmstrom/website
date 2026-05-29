## 5. Det sammansatta varietetsgapindexet

De åtta parametrar som specificeras i avsnitt 3 beskriver distinkta dimensioner av styrningsarkitektur. Tagna var för sig ger de en profil av ett systems strukturella sårbarheter – var dess observationskanal är smal, var dess immunsystem är aktivt, var förbikopplingsarkitekturer prolifererar. Men ramverkets centrala påstående är att dessa sårbarheter inte verkar oberoende av varandra. De interagerar, och deras interaktion producerar utfall som är allvarligare än vad någon enskild parameter skulle förutsäga. Det sammansatta Varietetsgapindexet är det matematiska uttrycket för denna interaktion. Det kombinerar de åtta parametrarna till ett enda diagnostiskt mått som skattar gapet mellan den effektiva dimensionaliteten hos störningsmiljön och den effektiva dimensionaliteten hos styrsystemets förmåga att uppfatta och svara på den.

Detta avsnitt specificerar indexets funktionsform, den grundläggande parameterhierarki som viktar dess komponenter, de tröskelband som definierar dess diagnostiska innebörd och den osäkerhetspropagering som åtföljer varje skattning.

### 5.1 Funktionsformen: Varför multiplikativ?

Samordningsmisslyckandets skatt, formaliserad i artikel V i serien Governance as Engineering, fastslår att samtidiga arkitektoniska misslyckanden multipliceras snarare än adderas. Ett styrsystem med fyra misslyckanden, vart och ett förstör hälften av kapaciteten i sin dimension, opererar inte med noll kapacitet utan med ungefär sex procent av baslinjen. Matematiken för sammansatt effekt är den strukturella förklaringen till den återkommande besvikelsen över institutionell reform: att adressera ett misslyckande medan de andra lämnas orörda producerar vinster som de kvarvarande misslyckandena absorberar.

Det sammansatta indexet måste återspegla denna strukturella egenskap. Ett additivt index skulle behandla varje parameter som en oberoende subtraktion från en fast baslinje. Ett multiplikativt index behandlar varje parameter som verkande på de övrigas output i den kausala kedjan – exakt den dynamik som serien har dokumenterat inom varje granskad domän.

Indexet konstrueras därför som en multiplikativ produkt av de åtta parametrarna, var och en normaliserad till intervallet (0,1) och representerande den *återstående andelen nödvändig styrningskapacitet* efter att ha tagit hänsyn till den parameterns försämring. Den allmänna formen är:

**G = V_e / V_o × f(τ) × g(σ) × h(immunpermeabilitet) × j(förbikopplingstäthet) × k(oscillation) × m(symbolisk_kvot)**

där V_e och V_o är den effektiva dimensionaliteten hos störningsmiljön respektive observationsarkitekturen, och funktionerna f till m omvandlar de resterande parametrarna till normaliserade kapacitetsmultiplikatorer.

Den multiplikativa formen har en kritisk egenskap som måste anges uttryckligen innan den tas i bruk. Ett nollvärde på någon enskild parameter – totalt sammanbrott i signalens trohet, fullständig immunimpermeabilitet, oändlig responslatens – får hela indexet att kollapsa till noll, oavsett värdena på de övriga parametrarna. Detta är antingen en egenskap eller en brist beroende på hur indexet används.

För det diagnostiska syfte denna artikel tjänar är det en egenskap. Seriens centrala påstående är att ett enda allvarligt arkitektoniskt underskott kan göra ett helt styrsystem oförmöget att utföra sina funktioner. Rysslands signaltrohet närmar sig noll eftersom maktvertikalen medvetet har förstört de observationskanaler som adaptiv styrning är beroende av. Detta enda katastrofala misslyckande är tillräckligt för att göra den ryska staten strukturellt blind, oavsett hur väl den presterar på andra dimensioner. Ett multiplikativt index som kollapsar till noll i detta fall återspeglar korrekt ramverkets strukturella påstående. Det additiva alternativet – som skulle visa ett system med ett katastrofalt misslyckande och sju adekvata parametrar som presterande på ungefär åttiosju procent av baslinjen – skulle systematiskt underskatta allvaret i det tillstånd som ramverket finns till för att diagnostisera.

Artikeln tillhandahåller en additiv version som en robusthetskontroll i appendix D. Praktiker som föredrar att se båda formuleringarna kan jämföra dem. Den multiplikativa versionen är det primära indexet eftersom den är strukturellt konsistent med det ramverk den operationaliserar.

### 5.2 Den grundläggande parameterhierarkin

Alla åtta parametrar är inte strukturellt jämlika. Vissa är *grundläggande* – de avgör om andra parametrar överhuvudtaget kan skattas tillförlitligt eller användas effektivt. Ett styrsystem med katastrofalt låg signalens trohet kan inte meningsfullt bedömas för oscillationsdynamik, eftersom de data som oscillationsmätningen är beroende av har korrumperats vid källan. Ett system med extrem immunimpermeabilitet kommer att visa låg förbikopplingstäthet i formell mätning – inte för att förbikopplingar saknas, utan för att immunsystemet har undertryckt de signaler som skulle avslöja dem. Parametrarna är kausalt ordnade, och det sammansatta indexet måste respektera denna ordning.

Artikeln föreslår en hierarki med tre nivåer.

**Nivå 1 (Epistemisk):** V_o, V_e och σ. Detta är de parametrar som avgör vad systemet kan uppfatta. De är grundläggande eftersom ett misslyckande på denna nivå gör alla andra parameterskattningar otillförlitliga – inte bara inexakta, utan systematiskt snedvridna i riktning mot att underskatta styrningsmisslyckande. Mätparadoxen som beskrivs i avsnitt 4 är primärt ett nivå 1-fenomen: det är de epistemiska parametrarna som försämras först och vars försämring är svårast att upptäcka inifrån den försämrade arkitekturen.

**Nivå 2 (Respons):** τ och immunpermeabilitet. Detta är de parametrar som avgör hur systemet handlar på vad det uppfattar. Responslatens och immunsystemaktivitet är sekundära i den kausala kedjan: de opererar på signalen efter att den har formats av observationsarkitekturen. Ett system med adekvata nivå 1-parametrar men allvarliga nivå 2-underskott kan uppfatta sin miljö tydligt men kan inte omsätta perception i handling – tillståndet för de demokratiska fragmenteringsfallen i serien.

**Nivå 3 (Emergent):** Oscillationsamplitud, förbikopplingstäthet och den symbolisk-till-strukturella kvoten. Detta är de parametrar som uppstår ur interaktionen mellan nivå 1 och 2. Oscillationsdynamik uppstår när ett system med hög latens och försämrad signalens trohet försöker svara på störningar det inte kan uppfatta adekvat. Förbikopplingsarkitekturer prolifererar när den formella observationskanalen är blockerad och immunsystemet förhindrar reform. Performativ anpassning blir den dominerande institutionella strategin när immunsystemet är starkt och signalens trohet är låg. Nivå 3-parametrarna är diagnostiskt värdefulla – de är ofta de mest synliga manifestationerna av styrningsmisslyckande – men de är effekter, inte orsaker. Att behandla dem som oberoende av de grundläggande parametrarna skulle felidentifiera interventionspunkten.

Det sammansatta indexet viktar nivå 1-parametrar tyngre än nivå 2, och nivå 2 tyngre än nivå 3. Viktningen implementeras genom exponenter i den multiplikativa produkten: varje nivå 1-parameter har exponenten 1,5, varje nivå 2-parameter exponenten 1,0 och varje nivå 3-parameter exponenten 0,5. Dessa vikter härleds inte från första principer – någon sådan härledning existerar inte – men de återspeglar den kvalitativa kausala struktur som identifierats över de tjugoen fallen. Känslighetsanalys av viktningsschemat tillhandahålls i appendix D.

Den praktiska implikationen av hierarkin är att ett system med katastrofalt låg signalens trohet bör bedömas som allvarligt sårbart oavsett gynnsamma nivå 3-värden – eftersom gynnsamma nivå 3-värden i ett sådant system sannolikt är artefakter av samma signalförsämring som gör systemet blint. Hierarkin är ett strukturellt erkännande av Mätparadoxen, inbyggt i indexets arkitektur.

### 5.3 Tröskelband och den icke-linjära fasförskjutningen

Varietetsgapindexet är en kontinuerlig variabel, men dess diagnostiska innebörd förändras kvalitativt vid ett kritiskt värde. Observerbarhetströskeln, formaliserad i artikel III och generaliserad i sammanfattningsrapporten, är den punkt där signal-till-brusförhållandet i styrsystemets observationskanal faller under ett. Över tröskeln upprätthåller systemet adekvat perceptuell kontakt med sin miljö; misslyckanden är specifika och möjliga att korrigera. Under tröskeln inträder systemet i en kvalitativt annorlunda regim.

Detta är ingen linjär försämring. Det är en fasförskjutning. När G överstiger G_krit – när Varietetsgapet passerar observerbarhetströskeln – genomgår systemet en övergång som förändrar den grundläggande karaktären hos dess styrningsdynamik:

- Signalen som når beslutsfattandeskiktet domineras av brusegenskaperna hos styrningsmaskineriet snarare än av miljöns signalegenskaper. Institutionella kvalitetsförbättringar blir paradoxalt nog overksamma: bättre prestation inom den befintliga arkitekturen förstärker förvrängningen snarare än att korrigera den.
- Systemet blir mottagligt för de signaturoscillationsmönster som dokumenterats genom landsrapporterna. Vilket mönster som uppstår beror på den specifika konfigurationen av nivå 2- och 3-parametrarna, men mottagligheten i sig är en konsekvens av att ha passerat tröskeln.
- Immunsystemet skiftar från att skydda institutionell integritet till att skydda institutionella intressen. Reformer som skulle utvidga observationskanalen behandlas som hot att neutralisera, och de symboliska anpassningsmekanismer som i friskare system tjänar en stabiliserande funktion blir de främsta drivkrafterna för arkitektonisk stasis.

Indexet definierar därför tre diagnostiska band, inte som precisa numeriska gränser utan som regioner i parameterrummet med kvalitativt olika styrningsimplikationer:

- **G `<` G_krit (Under observerbarhetströskeln):** Systemets observationsarkitektur är otillräcklig för dess störningsmiljö. De uteslutna dimensionerna ackumuleras som externaliteter som systemet inte kan uppfatta. Systemet är sårbart för de signaturmisslyckandemönster som dokumenterats i serien, och parametriska reformer inom den befintliga arkitekturen är osannolika att sluta gapet.
- **G ≈ G_krit (Närmar sig tröskeln):** Systemet befinner sig i en region av strukturell sårbarhet. Det kan fungera adekvat under stabila förhållanden men är exponerat för nya störningar som dess observationsarkitektur inte var konstruerad för att uppfatta. Gapets bana – om det vidgas eller minskar – är mer diagnostiskt betydelsefullt än dess absoluta värde.
- **G `>` G_krit (Över observerbarhetströskeln):** Systemets observationsarkitektur är adekvat för dess störningsmiljö, åtminstone för de dimensioner som för närvarande identifierats som relevanta. Det kan uppfatta de signaler som krävs för adaptiv respons. Den primära styrningsutmaningen är att upprätthålla detta tillstånd i takt med att miljön utvecklas.

G_krits läge kan inte specificeras med precision från första principer. Det beror på brusegenskaperna hos det specifika styrsystemet, kopplingsstyrkan mellan dess störningsdimensioner och de icke-linjära dynamiker som det nuvarande linjära ramverket inte fångar. För denna artikels syften skattas G_krit från kalibreringen mot de tjugoen fallen i avsnitt 7: tröskeln sätts vid det värde som bäst diskriminerar mellan fall som diagnostiserats ha allvarliga arkitektoniska underskott och de som diagnostiserats ha hanterbara sådana. Detta är en empirisk approximation, inte en teoretisk härledning, och den resulterande tröskeln bör behandlas som provisorisk.

System som närmar sig tröskeln kan uppvisa identifierbara ledande indikatorer som inte fångas av de statiska parametrarna ensamma: ökande mätetalsavgång (”censur som signal”-proxyvariabeln från avsnitt 4), stigande förbikopplingstäthet i takt med att formella institutioner förlorar legitimitet, sjunkande reformframgångstakter när immunsystemet alltmer behandlar alla utmaningar som hot. Dessa ledande indikatorer bör rapporteras tillsammans med det sammansatta indexet för varje system i bandet ”närmar sig tröskeln”, eftersom de ger varning om en förestående fasövergång som de statiska parametrarna ännu kanske inte återspeglar.

### 5.4 Osäkerhetspropagering

Varje parameterskattning i avsnitt 3 bär med sig en osäkerhetsbedömning. Det sammansatta indexet ärver dessa osäkerheter, och propageringen är inte okomplicerad. När parametrar kombineras multiplikativt beror osäkerheten i indexet på både de individuella parameterosäkerheterna och korrelationerna mellan dem – och dessa korrelationer är själva svåra att skatta av de skäl som beskrivs i avsnitt 4.

Artikeln antar en Monte Carlo-ansats för osäkerhetspropagering. För varje styrsystem representeras de åtta parametrarna inte som punktestimat utan som sannolikhetsfördelningar: normalfördelningar för parametrar med symmetrisk osäkerhet (τ, oscillationsamplitud), log-normalfördelningar för parametrar begränsade vid noll med högervriden osäkerhet (V_o, V_e, förbikopplingstäthet) samt betafördelningar för parametrar begränsade mellan noll och ett (signalens trohet, immunpermeabilitet, symbolisk-till-strukturell kvot). Det sammansatta indexet beräknas för varje dragning från den simultana fördelningen, och den resulterande fördelningen av G-värden rapporteras med sin median och ett trovärdighetsintervall (vanligtvis 5:e till 95:e percentilen).

Denna ansats har två fördelar. För det första gör den osäkerheten synlig: ett Varietetsgapvärde på 3,2 med ett trovärdighetsintervall på 2,9 till 3,5 är ett annat påstående än ett värde på 3,2 med ett intervall på 0,8 till 6,4. Det förra antyder ett system vars tillstånd kan skattas med rimlig tillförlitlighet; det senare antyder ett system där data är alltför försämrade för att stödja precis diagnos. För det andra tvingar den analytikern att specificera korrelationerna mellan parametrar, vilket synliggör de antaganden som annars skulle förbli implicita. Mätparadoxen implicerar att för system med allvarlig nivå 1-försämring är korrelationerna mellan parametrar sannolikt positiva och starka – signalens trohetskollaps är korrelerad med immunpermeabilitetsökning, med förbikopplingsproliferation, med performativ anpassning – och den simultana fördelningen bör återspegla detta.

För system där Mätparadoxen är aktiv erbjuder Monte Carlo-ansatsen en ytterligare diagnostik: trovärdighetsintervallet för G kommer att vara brett, och fördelningen kommer att vara högervriden. Det verkliga Varietetsgapet är sannolikt större än medianestimatet antyder, och intervallets bredd är i sig en indikator på hur grundligt systemets observationsarkitektur har försämrat de data som mätningen är beroende av. Ett mycket brett trovärdighetsintervall är inte ett mätmisslyckande. Det är ett mätresultat – bevis på att systemet befinner sig i det tillstånd ramverket förutsäger.

### 5.5 Rapportering av indexet

Det sammansatta Varietetsgapindexet rapporteras i följande standardiserade format för varje bedömt styrsystem:

- **G (median) [5:e–95:e percentilen]:** Det skattade Varietetsgapet med dess trovärdighetsintervall.
- **Tröskelband:** Under G_krit, Närmar sig G_krit eller Över G_krit, med grunden för klassificeringen.
- **Nivå 1-status:** En sammanfattande bedömning av de epistemiska parametrarna, med särskild uppmärksamhet på om Mätparadoxen är aktiv.
- **Bana (där longitudinella data existerar):** Om gapet vidgas, minskar eller är stabilt, skattat enligt den dynamiska utvidgningen i avsnitt 6.
- **Ledande indikatorer (för system som närmar sig tröskeln):** Mätetalsavgångstakt, proxydivergens, trender i reformframgång.
- **Primär osäkerhetsdrivare:** Vilken parameter som bidrar mest till osäkerheten i det sammansatta indexet.

Detta format är utformat för att förhindra att indexet används som en enkel rankningsanordning – ett enskilt tal som inbjuder till skenbara jämförelser mellan styrsystem med fundamentalt olika arkitekturer, historier och datamiljöer. Indexet är ett diagnostiskt instrument, inte en ligatabell. Dess värde ligger i de strukturerade frågor det tvingar analytikern att ställa, de osäkerheter det tvingar analytikern att erkänna och den bana det tvingar analytikern att följa över tid. Siffran är början på det diagnostiska samtalet, inte dess slutsats.
