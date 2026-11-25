## Termer, avgränsade definitioner och historiska korsreferenser

**Version 2.0 — November 2026**

### Hur du använder detta dokument

Denna ordlista stämmer av terminologin mot de accepterade källkorrigeringarna VI v0.2, VIII v0.2, XX v0.2, XIV v0.1, XVI v0.1, XIX v0.1, XXIII v0.2 samt Själv I v0.2. Den ersätter ordlistans tidigare definitioner, inte de ännu ogranskade rapporternas källtexter. Historiska varianter är sökhjälp, inte bevis för att begreppen är synonymer. [R] gäller ett angivet formellt resultat; [IP] är en principiell tolkning; [H] är en hypotes eller heuristik. Rapporterade numeriska resultat måste särskiljas från bevis och empirisk validering. Se den reviderade fältguiden för praktisk användning.

## Grundläggande strukturella begrepp

### Variationsgapet

**Historiska beteckningar (v1.0):** "observerbarhetsgap", "signalunderskott", "dimensionalitetsmissanpassning".

Uppgiftsrelativ observationsbrist: betydelsefulla distinktioner som en angiven observationsarkitektur inte kan särskilja. I VI v0.2:s brusfria statiska additiva modell är D det linjära störningsrummet, L det tolererade underrummet, C observationsavbildningen och K = D ∩ ker C. Adekvat deterministisk reglering kräver K ⊆ L; villkoret är också tillräckligt om alla korrigeringar i −D är tillgängliga. Det dolda konsekvensbärande gapet är `g_hidden = dim K − dim(K ∩ L)`. Räknegränsen `g_count = dim D − dim(D ∩ L) − rank(C|D)` är en undre gräns för `g_hidden`; ett icke-positivt värde intygar inte adekvans. [R inom denna modell]

Det historiska `G = V_miljö − V_observation` är en kortform för en dimensionsräkning, inte det korrigerade gapet. Samma rang kan lämna olika betydelsefulla riktningar dolda. Dynamiska historiker, brusiga observationer och begränsade handlingar kräver separata analyser. VIII:s historiska sammansatta poängtal och trösklar har dragits tillbaka; inget nytt universellt skalärt mått ersätter dem.

### Observerbarhetströskel

**Historiska beteckningar (v1.0):** "konstitutionell ooberserverbarhet", "SNR-tröskel", "signal-till-brus-korsning".

En tröskel definierad för en viss observations- eller beslutsmodell, med uttryckligt kriterium och riktning. Ett signal-brusförhållande (SNR) på ett är inte en universell gräns för informationsförlust. För oberoende skalär gaussisk signal och brus i en additiv kanal ger SNR = 1 en ömsesidig information om signalen på 0,5 bit. [R inom detta exempel]

Rapport III:s historiska kriterium för representationskedjor är modellbundet och dess källtext har inte granskats på nytt här. VI och VIII stöder inte längre en likställning av ett universellt `G_krit` med SNR = 1. Använd inte de tidigare landsklassificeringarna över eller under tröskeln.

### Läsbarhetskomprimeringsprincipen

**Historiska beteckningar (v1.0):** "aggregeringsförlust", "komprimeringsmekanism", "informationsförstörelse genom aggregering".

Ett historiskt namn för urval och aggregering av information till en hanterbar representation. En många-till-en-avbildning kan utplåna distinktioner i sin utdata; utdata ensam kan inte entydigt återskapa indata i samma ekvivalensklass. Sidoinformation, historik, en alternativ kanal eller intervention kan särskilja dessa fall. Komprimering kan också bevara allt som är relevant för en uppgift.

En kris till följd av en utelämnad distinktion är en villkorad kausal hypotes, inte en oundviklig följd av komprimering. Rapport 0 och VI motiverar undersökning; rapporternas exempel (BNP, diagnoskoder, citeringsmått, kvoter) är tänkbara fall, inte bevis för en enda mekanism. [IP/H]

### Nödvändig variation

**Historiska beteckningar (v1.0):** Inga betydande varianter i serien; härleds direkt från Ashby (1956).

Ashbys störningsrelativa regleringsprincip: tillgängliga svar måste vara adekvata för de distinktioner som har betydelse för de angivna utfallen. Varken miljöns råa komplexitet eller antalet måltermer anger det relevanta antalet svar. XX v0.2 ger en deterministisk gräns baserad på handlingstäckning: låt A(w) vara de adekvata handlingarna i varje värld w; det minsta antalet handlingar i en mängd som skär varje A(w) ger en undre gräns för antalet urskiljbara meddelanden till regulatorn, under modellens angivna antaganden. [R inom modellen]

Observation, tillgängliga handlingar och tolerans för störningar måste bedömas tillsammans. Nödvändig variation är inte liktydig med att passera en SNR-tröskel eller ett landsindex.

### Samordningsmisslyckandets skatt

**Historiska beteckningar (v1.0):** "ackumulerande misslyckandekostnad", "multiplikativ misslyckandeeffekt".

Rapport V:s föreslagna modell för samverkande begränsningar. Om vart och ett av fyra sekventiella led behåller andelen (1 − fᵢ) av den inkommande kapaciteten blir den återstående kapaciteten Q = Q₀ × (1 − f₁) × (1 − f₂) × (1 − f₃) × (1 − f₄). Fyra andelar på 0,5 ger 0,0625 av baslinjen. [R för den antagna produkten]

Detta är inte en universell lag för institutionella förluster eller en härledning av VIII:s tidigare index. Beroenden, kompensationsmekanismer och gemensamma orsaker kan ändra funktionsformen. V:s institutionella överföring ligger utanför denna granskning.

## Begrepp inom styrningsarkitektur

### Observationskanal

**Historiska beteckningar (v1.0):** "observationsarkitektur", "avkänningsinfrastruktur", "informationskanal".

Den väg som förmedlar evidens från ett styrt system till en angiven observatör eller beslutsprocess: sensorer, rapportering, överföring, aggregering och filter. Dokumentera vad som är tillgängligt, för vem, vid vilken tidpunkt och med vilka fel. Observationsarkitekturen kan omfatta flera sådana kanaler och historiker.

Latens, signaltrohet och relevanta distinktioner kännetecknar en kanal; de avgör inte ensamma beslutskvalitet eller genomförande. Mål och observation är skilda (VI v0.2).

### Latens (τ)

**Historiska beteckningar (v1.0):** "responsfördröjning", "beslutsförskjutning", "dödtid".

Förfluten tid mellan uttryckligt definierade händelser, såsom störningens början, upptäckt, beslut, genomförande eller verksam respons. Skilj mellan leden i stället för att använda observationsfördröjning och total responsfördröjning som synonymer. VIII v0.2 föreslår daterade händelsekohorter, förhandsbestämda slutpunkter och dokumentation av högercensurerade uteblivna svar.

Fördröjning kan begränsa stabil återkopplingsförstärkning och responsbandbredd i angivna modeller. Tidigare uttryck i I–II (`K_max ≈ 1/(τ × |A|)`, `f_max ≈ 1/(2τ)`) är historiska modellbundna uttryck, inte allmänna gränser; deras härledning har inte granskats på nytt här.

### Signaltrohet

**Historiska beteckningar (v1.0):** "signalkvalitet", "informationsnoggrannhet", "observationsbrus (σ)".

Noggrannhet hos överförd evidens i förhållande till en angiven referens, tidpunkt och uppgift. Systematiska fel, brus, bortfall och förlust av distinktioner är olika problem. I det additiva exemplet y = x + ε kan σ² beteckna brusvarians; detta är inte VIII:s tidigare dimensionslösa trohetsparameter σ. Använd uttrycklig notation.

Aggregering kan minska brus såväl som kasta bort detaljer. Offentlig insyn och intern tillgång till evidens är skilda. Inget fast samband mellan signaltrohet, rang och fördröjning antas.

### Frekvensgap

**Historiska beteckningar (v1.0):** "tidsskale-missanpassning", "responshastighets-missanpassning", "bandbreddsbegränsning".

Ett intervall av störningstidsskalor där en angiven regulator inte uppfyller ett uttalat reglerings- eller responskriterium. Snabba och långsamma störningar kan skapa olika utmaningar; en långsam drift kan missas av andra skäl än bandbredd.

Rapport II motiverar flerskalig utformning [IP]. Gapet beror på system, regulator, information, genomförbara interventioner och prestationskriterium. Den historiska ordlistans universella topologiska och latensbaserade anspråk behålls inte som allmänna resultat; II inväntar eventuell källgranskning.

### Fraktal styrningsarkitektur

**Historiska beteckningar (v1.0):** "flerskalig styrning", "nästlad styrning", "polycentrisk styrningsarkitektur".

En föreslagen nästlad eller återkommande ordning av styrningsfunktioner på flera skalor, där uppgifter fördelas till nivåer som passar deras information, befogenheter, resurser och tidsskalor. Polycentrisk, nästlad och fraktal beskriver närliggande men inte identiska ordningar.

Lokala, regionala och globala roller är designalternativ snarare än fasta frekvensband. Samordningskostnader, gränsöverskridande kopplingar och lokal kapacitet spelar roll. Ingen universell optimalitet eller stängning av alla frekvensgap fastställs här. [IP; rapport II:s källa har inte granskats på nytt]

### Subsidiaritet

**Historiska beteckningar (v1.0):** Inga betydande varianter i serien; notera: används i både politisk och teknisk bemärkelse.

En styrningsprincip där beslut läggs på den lägsta nivå som kan utföra uppgiften adekvat, med eskalering eller samarbete när uppgiften överstiger nivåns kapacitet eller korsar dess gränser. Adekvans omfattar rättigheter, resurser, befogenheter och samordning, inte bara avkänning.

Subsidiaritet som vägval skiljer sig från subsidiaritet som skydd mot nödvändig samordning. I–II motiverar designargumentet; en viss befogenhetsfördelning härleds inte enbart ur informationsförlust. [IP]

### Medelvärdesproblemet

**Historiska beteckningar (v1.0):** "rumslig blindhet", "aggregeringsinducerad rumslig blindhet", "lokaliseringsinformationsförlust".

Olika rumsliga fördelningar eller gruppfördelningar kan ha samma medelvärde. Ett beslut som enbart bygger på medelvärdet kan inte särskilja dem. Exempelvis kan allvarliga problem vid två noder döljas i ett medelvärde för tio noder; lämplig respons beror på uppgiften och tillgängliga differentierade handlingar.

Förlusten är villkorad av de data som tillhandahålls, inte av centralisering i sig. Uppdelade data, ytterligare signaler eller en lämplig gemensam handling kan mildra problemet. Rapport I motiverar distinktionen. [IP för institutionell tillämpning]

## Demokratiska och representationsrelaterade begrepp

### Preferensosynlighet

**Historiska beteckningar (v1.0):** "preferenssignal-dämpning", "representationskedjebrus", "demokratiskt observerbarhetsmisslyckande".

Ett föreslaget tillstånd där beslutsfattare saknar tillgång till betydelsefulla distinktioner mellan preferenser eller erfarenheter hos dem som berörs av ett beslut. Aggregering, rapporteringsfel, selektiv uppmärksamhet, strategiska incitament eller uteslutning kan bidra.

Skilj mellan tillgång, tolkning, inflytande och legitim oenighet. Rapport III:s kedjemodell har inte granskats oberoende på nytt här; varken SNR under ett eller en lång kedja fastställer nära noll empirisk korrelation mellan preferenser och politik. [IP/H]

### Representationskedjedjup

**Historiska beteckningar (v1.0):** "lagerantal", "kedjelängd", "aggregeringsdjup".

Antalet angivna mellanled genom vilka en preferenssignal färdas. Definiera slutpunkt, faktisk väg, alternativa vägar och vad varje led aggregerar eller förmedlar.

Den historiska tröskelpassagen vid två till tre led är ett rapporterat modellbundet resultat i III, inte en universell institutionell gräns. Ledens kvalitet, parallella kanaler och kodning kan ändra överföringen. Antalet ensamt avgör inte adekvans. [IP/H; källgranskning vid behov återstår]

## Institutionella dynamiska begrepp

### Upplösningslåsning

**Historiska beteckningar (v1.0):** "institutionell skalfälla", "optimeringsstak", "paradigm-inlåsning" (Japan-specifik variant).

En tänkbar mekanism där kompetens vid en vald upplösning eller uppgift åtföljs av kostsamma svårigheter att ändra representation eller praktik när en annan upplösning blir betydelsefull. Fastställ kompetens, relevanta utelämnanden och mekanismen som upprätthåller begränsningen var för sig.

Rapportsyntesen föreslår exempel inom domstolar, centralbanker, universitet, vård, AI och Japan. Dessa är hypoteser; framgång i en uppgift bevisar inte blindhet i andra. Närliggande men inte liktydigt med modellinlåsning eller XXIV:s särskilda mekanism för inlärda observatörer. [IP/H; granskning av syntesen och XXIV återstår]

### Immunsystem

**Historiska beteckningar (v1.0):** "politiskt immunsystem", "reformresistensmekanism", "infångningsarkitektur".

En metafor för mekanismer som upprätthåller en institutionell ordning inför föreslagen förändring. Incitament, vetorätt, yrkesnormer, resursbegränsningar och legitima skydd kan alla spela roll; deras effekter måste särskiljas.

Symbolisk anpassning är en tänkbar respons, inte en universell eller nödvändigtvis dominerande form. Motstånd är inte i sig evidens för infångning eller dysfunktion. Pröva återkommande beteende mot alternativ och skilj ut legitim opposition. [H; VII/IX och rapporttolkningar återstår]

### Genombrotts-infångnings-cykeln

**Historiska beteckningar (v1.0):** Brasilien-specifik instans av en mer allmän mekanism; varianter: "reformabsorptionscykel", "innovationsinfångning".

Brasilienrapportens hypotes att vinster från en innovation kan tas i anspråk eller skingras innan de bygger varaktig institutionell kapacitet: genombrott → vinst → infångning eller förlust → förnyad begränsning. Pröva varje länk med daterad evidens.

Jämförelser med Kina, Japan och EU är analogier, inte evidens för en gemensam cykel eller oundviklig återgång till baslinjen. [H; rapportkällor inte granskade här]

### Förbikopplingsarkitektur

**Historiska beteckningar (v1.0):** "genväg", "skuggsystem", "omdirigering".

En alternativ institutionell väg som tillhandahåller en funktion som en befintlig väg inte levererar adekvat. Förbikopplingar kan tillföra kapacitet, bevara kontinuitet, splittra ansvar eller minska trycket på kärnreform.

Förbikopplingsfällan är ett tänkbart felläge, inte ett oundvikligt utfall. Omprövnings- eller tidsbegränsningsvillkor är designalternativ; XIV v0.1 behandlar identifiering och omprövning villkorat, och en tidsgräns får inte avbryta grundläggande tjänster utan ett säkert alternativ. Indiens digitala infrastruktur, Brasiliens föreslagna algoritmiska förbikoppling, amerikanska delstatsavtal och Skuguniversitetet är rapportexempel eller förslag. [IP/H]

### Adaptiv koherens

**Historiska beteckningar (v1.0):** "nödvändig styrning", "flerskalig stabilitet".

Ett designmål: bevara uppgiftsrelevanta distinktioner och förmågan att samordna lärande och handling över relevanta skalor utan att i onödan utplåna lokal evidens. Samordning kan misslyckas trots god avkänning; lokal kapacitet kan samexistera med ineffektiv gemensam handling.

Inget validerat skalärt mått eller likhet med variationsgapet har fastställts. Använd den uppgiftsrelativa profilen (VIII v0.2), inklusive beslut och genomförande, för att undersöka målet. Syntesrapportens tillämpning återstår att granska. [IP/H]

### Performativ reformfälla

**Historiska beteckningar (v1.0):** "symbolisk anpassning" (som tillämpas specifikt på universitet), "reformabsorption".

En hypotes att reformliknande utdata (tillkännagivanden, procedurer, rapportering) tillfredsställer yttre krav utan att åstadkomma den avsedda förändringen i beteende eller utfall. Skilj medveten symbolik från ofullständigt genomförande, fördröjning, ogenomförbarhet och faktiska förbättringar.

VIII v0.2 föreslår separat kodning av antagande, resurser och oberoende uppföljande utvärdering, med delvisa och okända fall. Universitetsrapporten motiverar termen; förekomsten bland organisationer är inte verifierad. [H]

## Ekosystem- och allmänningsbegrepp

### Observationsbrist

**Historiska beteckningar (v1.0):** "övervakningsdimensionalitetsunderskott", "allmänningsobserverbarhetsmisslyckande".

En brist där tillgängliga observationshistoriker inte särskiljer betydelsefulla distinktioner för en angiven uppgift, vid den tidpunkt och osäkerhetsnivå som krävs. I allmänningsstyrning undersöks villkor av betydelse för uttag, återväxt och intervention, i stället för att likställa antalet frekvensband med observationsrang.

Snabba chocker, säsongsbunden reproduktion och långsamma förändringar i bärkraft är tänkbara övervakningsmål. Ett utelämnande behöver inte medföra kollaps: försiktighetsregler, buffertar och annan information kan räcka. IV:s särskilda allmänningsresultat har inte granskats på nytt här. [IP/H]

### Närhet (som styrningsbegrepp)

**Historiska beteckningar (v1.0):** "ekologisk inbäddning", "territoriell styrningskapacitet".

Fysisk, säsongsmässig och relationell förankring kan bidra till aktuell, kontextuell och ackumulerad kunskap. Skilj fysisk tillgång, långvarig observation och relationer som möjliggör vittnesmål och tolkning.

Lokal kunskap och urfolkskunskap kan vara viktiga; bedöm faktisk tillgång, befogenheter och utfall i stället för att anta att avlägsna system inte kan få relevant evidens. Rättigheter och suveränitet har självständiga normativa och rättsliga grunder och är inte villkorade av en observationsfördel. [IP; IV motiverar undersökning]

## Värdearkitekturbegrepp

### Värdearkitektur

**Historiska beteckningar (v1.0):** "målfunktion", "värdefunktion", "optimeringsmål".

Mål, prioriteringar, begränsningar och utvärderingsregler som styr vad som räknas som ett önskvärt eller oacceptabelt utfall. En målfunktion är en möjlig formell representation av en del av en värdearkitektur, inte observationskanalen. Ett skalärt mål kan värdera många egenskaper; flera mål kan bygga på samma evidens.

VI v0.2 skiljer utvärdering från observation, modellering, beslut och genomförande. Prioriteringar kan påverka exponering och sensorbudgetar, men detta är villkorat. Den gamla Goodhart–Ashby-identiteten och anspråket om oundviklig självblindhet har dragits tillbaka (VI; XX v0.2).

### Variationsgapets dynamik

Förändringar i uppgiftsrelativ adekvans när störningsmiljön, tolererade utfall, evidens, modeller eller genomförbara handlingar förändras. Policy kan påverka exponering och lärande; exponering är inte liktydigt med identifiering. Dynamisk observerbarhet och dolda riktningar vid en fast tidpunkt är skilda.

Det historiska dG/dt = α − β·A(V) kan antas för ett deriverbart surrogat baserat på dimensionsräkning med separat definierade hastigheter; det är ingen allmän lag för `g_hidden` eller det tillbakadragna indexet. Positiv tillväxt behöver inte nå en tröskel. Metastyrning är den föreslagna förmågan att granska och revidera relevanta komponenter, inte en skyldighet att vidga varje mål eller representation. [IP/H; VI och VIII v0.2]

## Kompletterande begrepp från korrigerade rapporter

### Uppgiftsrelativ diagnosprofil

VIII v0.2 föreslår separat dokumentation av evidens och osäkerhet för utvärdering, observation, modellering, beslut och genomförande, för en angiven uppgift, population, utfall, rättigheter, tidsgräns och genomförbara handlingar. De åtta historiska indikatorfamiljerna och uppmärksamhetsfördelning är tänkbara observationer. De behöver inte vara oberoende. Profilen är ett forskningsförslag, inte en validerad skala eller landsrangordning. [IP/H]

### Ordning mellan proxy och mål

På en angiven mängd genomförbara utfall X innebär svag monoton säkerhet att M(y) > M(x) medför T(y) ≥ T(x) för alla par. En strikt omkastning bryter mot villkoret. Lika proxyvärden kan dölja olika målvärden utan en strikt omkastning; säkerhet även vid likhet utesluter också skadliga likheter. Varken utelämnade egenskaper eller deras nåbarhet bevisar ensamma en strikt omkastning, och möjlig omkastning förutsäger inte en realiserad sökväg. XX v0.2; etablerat ordningskriterium. [R]

### Policyberoende exponering och identifiering

Exponering gäller vilka tillstånd, interventioner och vilken evidens en policy gör tillgängliga. Identifiering gäller om observationerna och modellen särskiljer relevanta alternativ. En annan policy kan ge evidens utan att lösa inferensen; en fast policy kan redan identifiera parametrar. Persistent excitation är ett tillräckligt villkor i angivna skattningsproblem, inte ett universellt krav för allt lärande. VI v0.2 och XIV v0.1; jämförelser med XXIV och SO är fortsatt avgränsade. [IP/H för institutionell överföring]

### Reformgenomförande och symbolisk andel

För en definierad kohort dokumenteras antagande, genomföranderesurser och oberoende utvärdering separat (uppfyllt, inte uppfyllt, okänt, ännu inte bedömbart). Den historiska binära kodningen har ρ = 1 − p, så p och ρ är inte oberoende indikatorer. Redovisa i allmänhet delvisa och okända utfall i stället för att tvinga fram ett binärt komplement. VIII v0.2. [R för komplementet; IP/H för protokollet]

### Funktionella roller i modellekologier

Guvernörer, vaktposter och broar benämner tänkbara funktioner: prestanda, varning och funktionell överföring. Historiska prediktiva rangordningar, retrospektiva varningsetiketter och centralitet i tröskelgrafer påvisar inte oberoende roller, framåtsyftande varning eller faktisk översättning. XIX v0.1. [IP/H]

### Beteendemässig olikhet och anpassningskostnad

Deskriptiva skillnader i modellutdata är skilda från den riktade kostnaden för att anpassa en modell under en viss uppdateringsregel och budget. En symmetrisk deskriptiv olikhet behöver inte vara en metrik (den historiska konstruktionen med kvadrerat avstånd är inte det); den behöver inte förutsäga kostnaden eller den optimala vägen. XXIII v0.2. [IP/H för styrning]

### Återbildning och metastabilitet

Återbildning tillför alternativ; utarmning avlägsnar dem. Tillgång till en källa och kontrollbefogenhet är skilda. XVI v0.1 ger en ändlig irreducibel partitionskedja under inre parametervillkor och en exakt stationär fördelning i fallet med linjär kopiering; långa bytestider fastställer inte irreversibel kollaps eller ett universellt krav på externa källor. [R inom modellen; IP/H för styrning]

## Land- och signaturmönstertermer

Läsindex över rapporternas föreslagna teman. Tabellen omfattar de 19 jurisdiktionerna i den tillhandahållna rapportförteckningen (Frankrike och USA delar en rad). Den validerar inte diagnoserna, och inga rangordningar eller trösklar följer av etiketterna. De fyra senast tillagda svenska begreppen är arbetsöversättningar; publicerade titlar finns i rapportförteckningen.

| Term | Jurisdiktion | Tema att undersöka |
|---|---|---|
| Ackumulationsunderskott | Brasilien | Varaktighet hos institutionella vinster |
| Kalibreringsunderskott | Kina | Modellkorrigering och återkoppling |
| Kontinuitetsfälla | Japan | Paradigmrevidering |
| Läsbarhetsunderskott | Ryssland | Incitament kring korrekt information |
| Substratunderskott | Nigeria | Formell och informell försörjning |
| Genomströmningsbegränsning | Finland | Förmåga att omsätta framsyn i handling |
| Gränsdragningsunderskott | Israel | Institutionell och politisk uppgörelse |
| Integrativt slutningsunderskott | Spanien | Konstitutionell integration och uppskjutande |
| Koherensunderskott | EU | Samordning av genomförande |
| Integrationsunderskott | Frankrike, USA | Översättning mellan nationell och lokal nivå (Frankrike); distribuerad samordning (USA) |
| Genomförandeunderskott | Tyskland | Genomförande och meningsskapande |
| Återkopplingsunderskott | Sverige | Återkopplings- och korrigeringsvägar |
| Synkroniseringsunderskott | Indien | Samordning över skalor |
| Kontroll–genomförande-missanpassning | Storbritannien | Befogenheters och genomförandekapacitets placering |
| Gränsexpansionsunderskott | Schweiz | Ömsesidiga beroenden och gränsers adekvans |
| Turneringsfälla | Sydkorea | Konkurrensens konsekvenser under effektiv knapphet |
| Gränssnittskapplöpning | Bhutan | Koppling mellan mål och genomförande under acceleration |
| Genomförbarhetsskuld | Nederländerna | Åtagande före varaktig genomförbarhet |

## Anteckningar om terminologihantering

**Tillbakadraget eller avgränsat:** Den gamla dimensionsskillnaden är inte ett allmänt variationsgap; VIII:s poängtal, intervall, tröskelband, utvecklingsklasser och pilotvalidering är tillbakadragna. Identifiera inte värdearkitektur med observationskanal eller Goodhart med Ashby. Själv I:s gamla personliga gap och upplösningströskel är inte psykologiska diagnoser.

**Behåll skillnaderna:** Observationsbrist, signalbrus, preferensosynlighet och variationsgap är inte automatiska synonymer. Signaltrohet är inte brusvarians. Latens är inte frekvensgap. Upplösningslåsning och kontinuitetsfälla kan vara relaterade men behöver separata belägg. Immunsystem är en metafor; symbolisk reform är ett möjligt mönster. Förbikoppling är inte alltid infångning. Använd variationsgapet i nya svenska texter; varietetsgapet är en historisk stavningsvariant.

Ordlistan är levande. Nya definitioner kräver källhänvisning, angiven räckvidd och vid behov oberoende granskning. Denna utgåva innebär inte att övriga rapporter eller deras empiriska underlag har granskats.
