## Kanoniska termer, precisa definitioner och korsreferenser mellan seriernas varianter

*Version 1.0 — för användning i seriens alla delar: landrapporter, organisationsrapporter, tekniska rapporter, sammanfattning och härledda material.*

---

### Hur du använder detta dokument

Denna ordlista fastställer ett kanoniskt ordförråd för serien. Där tidigare rapporter har använt varierande terminologi för samma begrepp anges den kanoniska termen här tillsammans med en kartläggning av varianterna. Framtida publikationer bör uteslutande använda den kanoniska termen. Befintliga rapporter kan behålla sina ursprungliga formuleringar där revidering är opraktisk, men bör notera den kanoniska motsvarigheten vid första användning.

---

## Grundläggande strukturella begrepp

---

### Varietetsgapet (G)
**Kanonisk term.** *Varianter i serien: "observerbarhetsgap", "signalunderskott", "dimensionalitetsmissanpassning".*

Den strukturella missanpassningen mellan den effektiva dimensionaliteten hos den störningsmiljö som ett styrsystem måste hantera (V_miljö) och den effektiva dimensionaliteten hos systemets observationsarkitektur (V_observation).

**Formellt uttryckt:** G = V_miljö − V_observation

När G > 0 kan styrsystemet inte uppfatta alla dimensioner längs med vilka det styrda systemet kan störas. De uteslutna dimensionerna upphör inte att verka; de ackumuleras som externaliteter tills de tvingar sig till synlighet genom kris.

När G överstiger ett kritiskt tröskelvärde (G_krit) överstiger brusvariansen i styrsystemets observationskanal den överlevande signalvariansen. Systemet är då konstitutionellt oobserverbart: ingen förbättring av institutionell kvalitet kan återskapa den information som förlorats uppströms om beslutsfattningslagret.

**Tillämpning över domäner:** I demokratisk representation manifesteras varietetsgapet som preferensosynlighet genom djupa representationskedjor. I allmänningsstyrning manifesteras det som observationsbrist i förhållande till resurssystemets flerskaliga dynamik. I organisationsstyrning manifesteras det som upplösningslåsning vid den skala som institutionen optimerades för.

*Se även: Observerbarhetströskel, Läsbarhetskomprimeringsprincipen, Upplösningslåsning.*

---

### Observerbarhetströskel
**Kanonisk term.** *Varianter i serien: "konstitutionell ooberserverbarhet", "SNR-tröskel", "signal-till-brus-korsning".*

Det kritiska värdet på Varietetsgapet (G_krit) vid vilket signal-till-brusförhållandet i ett styrsystems observationskanal faller under ett. Under denna tröskel domineras informationen som når beslutsfattningslagret av brusegenskaperna hos styrningsapparaten snarare än av det styrda systemets verkliga tillstånd.

Över tröskeln: policylagret har en försämrad men informativ signal; statistiska och institutionella metoder kan utvinna genuin information ur den.

Under tröskeln: policylagret responderar främst på de strukturella egenskaperna hos sina egna representations- och aggregeringsmekanismer. Förbättringar av institutionell kvalitet kan inte återskapa signalkvaliteten, eftersom informationen förstördes innan den nådde fram.

Tröskeln är inget fast värde; den beror på brusegenskaperna hos varje aggregeringslager, de inblandade aggregeringskvoterna och graden av koppling mellan störningsdimensionerna.

*Formellt härledd i teknisk rapport III (Kopplingen observerbarhet–demokrati). Tillämpad på allmänningsstyrning i teknisk rapport IV. Generaliserad till värdearkitekturer i teknisk rapport VI (Varietetsgapet).*

---

### Läsbarhetskomprimeringsprincipen
**Kanonisk term.** *Varianter i serien: "aggregeringsförlust", "komprimeringsmekanism", "informationsförstörelse genom aggregering".*

Varje styrsystem måste reducera dimensionaliteten i sin miljö för att förbli beräkningsmässigt hanterbart. Denna komprimering är nödvändig — ingen ändlig institution kan uppfatta allt — men den är irreversibelt förlustbringande. Den information som förloras i komprimeringen ackumuleras som externaliteter tills den tvingar sig till synlighet genom kris.

Principen har tre komponenter:
1. **Komprimeringsnödvändighet:** All styrning kräver någon reduktion av miljökomplexitet.
2. **Irreversibilitet:** Information som förstörs i aggregering kan inte återskapas nedströms, oavsett institutionell kvalitet.
3. **Ackumulering:** Uteslutna dimensioner försvinner inte; de fortsätter att generera effekter som så småningom återinträder i det observerbara rummet som kriser systemet inte kan förklara.

Läsbarhetskomprimeringsprincipen är den sammanhållande mekanismen bakom Varietetsgapet över alla domäner: BNP-komprimering i centralbanker, diagnoskodskomprimering i hälso- och sjukvård, citeringsmåttskomprimering i universitet, representationskedjekomprimering i demokratier, aggregerad kvotkomprimering i fiskeförvaltning.

---

### Nödvändig variation
**Kanonisk term.** *Inga betydande varianter i serien; härleds direkt från Ashby (1956).*

Den minsta observations- och responsdimensionalitet ett styrsystem måste ha för att stabilisera ett styrt system. Formellt: en regulator kan inte stabilisera ett system vars variation överstiger regulatorns egen variation (Ashbys lag om nödvändig variation).

Tillämpat på styrning: en styrningsarkitektur vars observationsarkitektur har lägre dimensionalitet än den störningsmiljö den möter kommer att producera okontrollerad varians i utfallen — kriser, kollapser och misslyckanden som ter sig oväntade men är strukturellt förutsägbara.

**Styrningsimplikation:** Frågan "har detta styrsystem nödvändig variation?" är likvärdig med "är Varietetsgapet under Observerbarhetströskeln?"

---

### Samordningsmisslyckandets skatt
**Kanonisk term.** *Varianter i serien: "ackumulerande misslyckandekostnad", "multiplikativ misslyckandeeffekt".*

Den dolda, kontinuerliga kostnad som åläggs varje styrsystem som samtidigt opererar under nödvändig variation över flera arkitektoniska dimensioner. Skatten ackumuleras multiplikativt snarare än additivt: varje felsätt verkar på det som återstår efter att tidigare felsätt har försämrat styrningskapaciteten.

**Formellt uttryckt:** G_effektiv = G_baslinje × (1−f₁) × (1−f₂) × (1−f₃) × (1−f₄)

Där varje fᵢ representerar den andel av kapaciteten som förstörs av varje samtidigt felsätt.

**Viktig implikation:** Ett styrsystem med fyra samtidiga arkitektoniska misslyckanden, vart och ett förstör 50 % av kapaciteten, opererar inte med noll kapacitet — det opererar med cirka 6 % av baslinjen (0,5⁴ = 0,0625). Små förbättringar över flera felsätt samtidigt ger oproportionerliga vinster genom omvänd ackumulering.

*Formellt härledd i teknisk rapport V (Samordningsmisslyckandets skatt).*

---

## Begrepp inom styrningsarkitektur

---

### Observationskanal
**Kanonisk term.** *Varianter i serien: "observationsarkitektur", "avkänningsinfrastruktur", "informationskanal".*

Den fullständiga väg genom vilken information om tillståndet hos ett styrt system når de beslutsfattare som agerar på den. Observationskanalen omfattar sensorer (vad som mäts), överföringsmekanismer (hur mätningar färdas), aggregeringsstrukturer (hur mätningar kombineras) och filter (vad som förkastas i varje steg).

Observationskanalen avgör vad styrningen kan se, och därmed vad den kan svara på. Kanalegenskaper — latens, signaltrohet, aggregeringskvot, dimensionalitet — sätter hårda strukturella tak för styrningsprestanda som inte kan höjas genom att förbättra kvaliteten på de beslut som fattas baserat på kanalens utdata.

*Tre kritiska egenskaper hos varje observationskanal:*
- **Latens (τ):** Fördröjningen mellan att ett tillstånd uppstår i det styrda systemet och att information om det når beslutsfattningslagret.
- **Signaltrohet (σ):** Den noggrannhet med vilken kanalen överför det styrda systemets verkliga tillstånd. Försämras vid varje aggregeringssteg.
- **Dimensionalitet:** Antalet oberoende signaldimensioner kanalen kan överföra. Avgör om Varietetsgapet ligger över eller under Observerbarhetströskeln.

---

### Latens (τ)
**Kanonisk term.** *Varianter i serien: "responsfördröjning", "beslutsförskjutning", "dödtid".*

Den totala fördröjningen mellan att en störning inträffar i ett styrt system och att en korrigerande åtgärd får effekt. I styrsystem ackumuleras latens över flera steg: upptäckt, rapportering, aggregering, överläggning, beslut, lagstiftning, implementering.

**Kritisk egenskap:** Latens sätter ett hårt tak för den maximala responsförstärkning som ett stabilt styrsystem kan använda. Specifikt: K_max ≈ 1/(τ × |A|), där A fångar systemdynamiken. Ett system med hög latens kan inte svara aggressivt på kriser utan att producera oscillation och instabilitet. Denna begränsning är matematisk, inte politisk — den kan inte övervinnas med politisk vilja, institutionell kvalitet eller ökade resurser.

**Frekvensimplikation:** En regulator med latens τ kan inte stabilisera störningar snabbare än f_max ≈ 1/(2τ). Detta innebär att varje enskaligt styrsystem har ett karakteristiskt frekvensgap — klasser av störningar som det strukturellt inte kan svara på.

*Formellt härledd i tekniska rapporter I och II.*

---

### Signaltrohet
**Kanonisk term.** *Varianter i serien: "signalkvalitet", "informationsnoggrannhet", "observationsbrus (σ)".*

Den grad i vilken signalen som når beslutsfattningslagret korrekt representerar det styrda systemets verkliga tillstånd. Signaltrohet försämras vid varje aggregeringssteg, med varje rapporteringslager och över tid när fördröjda signaler beskriver tillstånd som redan har förändrats.

Formellt: y(t) = x(t) + ε, där x(t) är det sanna tillståndet, y(t) är det observerade tillståndet, och ε är brus med varians σ². Hög signaltrohet innebär att σ är liten; låg signaltrohet innebär att σ är stor och att regulatorn agerar på en förvrängd bild av verkligheten.

**Kritisk interaktion:** Signaltrohet och latens förstärker varandra. Ett system som observerar felaktigt och agerar långsamt är dubbelt handikappat — när en förvrängd signal väl ger upphov till en försenad respons kan den underliggande verkligheten ha förändrats helt.

---

### Frekvensgap
**Kanonisk term.** *Varianter i serien: "tidsskale-missanpassning", "responshastighets-missanpassning", "bandbreddsbegränsning".*

Den klass av störningar som en given styrningsarkitektur strukturellt inte kan stabilisera eftersom deras frekvens överstiger den maximalt kontrollerbara frekvensen för systemets karakteristiska latens (f_max ≈ 1/2τ).

Varje enskaligt styrsystem har ett frekvensgap: störningar som rör sig snabbare än systemets responscykel (typiskt säkerhetskriser, finansiell smitta, akuta hälsohändelser) och störningar som rör sig långsammare än systemets förmåga att upprätthålla sammanhängande intervention (typiskt demografiska övergångar, institutionellt förfall, ekologisk nedbrytning, klimatförändringar).

**Frekvensgapet är topologiskt, inte parametriskt.** Det kan inte stängas genom att justera förstärkningen, resurserna eller den institutionella kvaliteten hos en enskalig regulator. Det kan endast stängas genom en flerskalig arkitektur där varje lager styr det frekvensband dess latens tillåter det att nå.

*Formellt härledd i teknisk rapport II (Fraktalitet som stabilitet).*

---

### Fraktal styrningsarkitektur
**Kanonisk term.** *Varianter i serien: "flerskalig styrning", "nästlad styrning", "polycentrisk styrningsarkitektur".*

En nästlad hierarki av styrningslager där varje lager matchas mot den tidsskala för de störningar det ansvarar för att hantera. Snabbare lager har lägre latens och högre signaltrohet; långsammare lager har högre latens och observerar bredare aggregeringar. Varje lager hanterar det frekvensband dess latens tillåter det att nå.

**Den kritiska egenskapen:** En fraktal arkitektur stänger alla frekvensgap samtidigt. Ingen enskalig arkitektur kan göra detta. Den fraktala arkitekturen är ingen styrningspreferens — den är det stabilitetsoptimala svaret på en flerfrekvent störningsmiljö, av samma strukturella skäl som det mänskliga nervsystemet, immunsystemet och internet är fraktala.

**Styrningens funktionsuppdelning:**
- *Lokalt lager (låg τ):* Snabba, kontextspecifika störningar; hög signaltrohet; hög förstärkning.
- *Regionalt lager (medel τ):* Medelfrekventa tryck; regional aggregering; måttlig förstärkning.
- *Globalt lager (hög τ):* Långsam sekulär drift; systemomfattande aggregering; låg förstärkning.

Varje lager styr vad dess latens tillåter och inget mer. Ett lager som försöker styra störningar utanför sin bandbredd missar dem antingen (hög-latens-lager som försöker hantera snabba chocker) eller producerar oscillation (låg-latens-lager som försöker spåra långsam drift).

*Formellt härledd i teknisk rapport II.*

---

### Subsidiaritet
**Kanonisk term.** *Inga betydande varianter i serien; notera: används i både politisk och teknisk bemärkelse.*

I sin styrteoretiska mening (som i de tekniska rapporterna): principen att beslutsrätt ska ligga på den lägsta styrningsnivå som är kapabel att hantera de relevanta störningarna — specifikt den nivå vars latens och signaltrohet tillåter den att styra den aktuella störningstypen.

Detta är ingen politisk preferens för lokal styrning. Det är ett strukturellt krav som härleds ur medelvärdesproblemet (teknisk rapport I): centraliserade regulatorer som aggregerar lokala signaler kan inte särskilja rumslig variation i tillstånd och tillämpar därför enhetliga svar på heterogena situationer, vilket producerar både underrespons där förhållandena är som värst och överrespons där förhållandena är acceptabla.

**Viktig distinktion:** Subsidiaritet som routingprotokoll (den tekniska användningen här) skiljer sig från subsidiaritet som sköld (den politiska användningen där subsidiaritet åberopas för att motstå samordning oavsett om lokal kapacitet är tillräcklig). Serien argumenterar för det förra och mot det senare.

*Formellt härledd i teknisk rapport I (Styrstabilitetssimulatorn). Tillämpad på flernivåstyrning i teknisk rapport II och EU:s landrapport.*

---

### Medelvärdesproblemet
**Kanonisk term.** *Varianter i serien: "rumslig blindhet", "aggregeringsinducerad rumslig blindhet", "lokaliseringsinformationsförlust".*

Den strukturella konsekvensen av centraliserad observation: när en regulator endast observerar ett systemövergripande medelvärde förstörs den rumsliga variationen i tillstånd. En allvarlig kris vid två noder och stabilitet vid åtta noder registreras som en modest nedgång i systemgenomsnittet. Regulatorn svarar på den modesta nedgången, inte den allvarliga krisen — underresponderar samtidigt vid krisnoderna och stör friska noder med onödigt ingripande.

Medelvärdesproblemet är inget misslyckande från den centrala regulatorns sida gällande kompetens eller resurser. Det är en konsekvens av arkitekturen. Den rumsliga information som förstörs i aggregeringen kan inte återskapas genom någon förbättring av beslutsprocessen nedströms, eftersom informationen förkastades innan den nådde fram.

*Formellt härledd i teknisk rapport I (Styrstabilitetssimulatorn).*

---

## Demokratiska och representationsrelaterade begrepp

---

### Preferensosynlighet
**Kanonisk term.** *Varianter i serien: "preferenssignal-dämpning", "representationskedjebrus", "demokratiskt observerbarhetsmisslyckande".*

Det strukturella tillstånd där medborgarpreferenser inte kan överföras på ett tillförlitligt sätt genom djupa representationskedjor till policylagret, eftersom aggregeringsförlust och brusackumulering över flera lager förstör signaltroheten under Observerbarhetströskeln.

Varje representationslager utför två operationer samtidigt: det aggregerar signaler från lägre nivå (förstör inom-grupp-varians) och introducerar brus från ofullkomligheterna i varje verklig representationsmekanism. Aggregeringsförlusten är multiplikativ; brusackumuleringen är additiv. Efter tillräckligt många lager överstiger brusvariansen den överlevande signalvariansen och systemet överför inte längre preferenser — det överför brusegenskaperna hos sin egen maskin.

**Empirisk implikation:** System som opererar under Observerbarhetströskeln kommer att visa nära noll korrelation mellan genomsnittliga medborgarpreferenser och policyutfall. Detta är i första hand inte en berättelse om elitinfångning (även om infångning kan förekomma); det är en berättelse om strukturell informationsförlust som skulle inträffa även i fullständigt ärliga, välfinansierade representativa institutioner.

*Formellt härledd i teknisk rapport III (Kopplingen observerbarhet–demokrati).*

---

### Representationskedjedjup
**Kanonisk term.** *Varianter i serien: "lagerantal", "kedjelängd", "aggregeringsdjup".*

Antalet mellanliggande lager mellan medborgarpreferenser och policylagret genom vilka dessa preferenser måste passera. Varje ytterligare lager introducerar aggregeringsförlust och brus. Representationskedjedjup är den primära bestämningsfaktorn för om ett demokratiskt system opererar över eller under Observerbarhetströskeln för preferensöverföring.

Observerbarhetströskeln för representationskedjor korsas vid ungefär två till tre lager under realistiska brusparametrar. De flesta nationella demokratiska system opererar genom fyra till sex lager (medborgare → lokal representant → regionalt organ → nationellt parlament → regering → genomförande myndighet).

**Implikation:** Institutionella reformer som förbättrar kvaliteten på varje lager utan att minska kedjedjupet kan inte lyfta ett under-tröskelsystem över tröskeln. Tröskeln är en egenskap hos kedjestrukturen, inte kvaliteten på enskilda lager.

---

## Institutionella dynamiska begrepp

---

### Upplösningslåsning
**Kanonisk term.** *Varianter i serien: "institutionell skalfälla", "optimeringsstak", "paradigm-inlåsning" (Japan-specifik variant).*

Tillståndet där en institution blir strukturellt fångad av den upplösningsnivå den optimerades för. Arkitekturen som möjliggjorde dess framgång på den nivån förhindrar dess funktion på någon annan.

Upplösningslåsning har tre komponenter:
1. **Kompetens vid avsedd upplösning:** Institutionen presterar utmärkt inom sin optimerade skala och omfattning.
2. **Blindhet bortom den upplösningen:** Samma arkitektur som möjliggör kompetens inom den avsedda skalan utesluter systematiskt signaler utanför den.
3. **Självförstärkande låsning:** Yrkesidentitet, incitamentsstrukturer, observationskanaler och kulturella narrativ förstärker alla den befintliga upplösningen, vilket gör avsteg från den allt mer kostsamt.

**Tvärdomäna exempel:**
- *Domstolar:* Optimerade för individuell tvistlösning; kan inte uppfatta systemiska mönster.
- *Centralbanker:* Optimerade för inflationsmål; kan inte uppfatta finansiell stabilitet, fördelnings- eller ekologiska dimensioner.
- *Universitet:* Optimerade för disciplinärt djup; kan inte integrera över discipliner.
- *Hälso- och sjukvårdssystem:* Optimerade för standardiserad genomströmning; kan inte uppfatta klinisk komplexitet.
- *Frontier AI-organisationer:* Optimerade för driftsättningshastighet; kan inte upprätthålla anpassningskoherens.
- *Japan (landsnivå):* Optimerat för efterkrigstidens stabilitetsparadigm; kan inte ersätta det.

*Introducerad i sammanfattningsrapporten (Samordningsmisslyckande som strukturellt tillstånd) som en tvärserie-förenande mekanism.*

---

### Immunsystem
**Kanonisk term.** *Varianter i serien: "politiskt immunsystem", "reformresistensmekanism", "infångningsarkitektur".*

De adaptiva stabiliseringsmekanismer som skyddar den befintliga styrningsarkitekturen från utmaningar. Avgörande: immunsystem är inte hinder som lagts till styrningsarkitekturer utifrån — de är utflöden från dessa arkitekturer. De är det förutsägbara beteendet hos rationella aktörer som svarar på de incitament den nuvarande arkitekturen tillhandahåller.

**Denna distinktion är viktig för reformstrategi.** Ett immunsystem som är ett externt hinder kan utmanövreras. Ett immunsystem som är ett arkitektoniskt utflöde kommer att regenereras av arkitekturen efter varje utmanövrering, tills arkitekturen själv förändras.

**Universell form — Symbolisk anpassning:** Det vanligaste immunsvaret över alla domäner är symbolisk anpassning: antagandet av reformspråk, symboler och procedurformer samtidigt som den underliggande arkitekturen lämnas oförändrad. Exempel: "grön QE" utan portföljförändring; tvärvetenskapliga centra utan reform av anställningstryggheten; säkerhetsteam utan bindande befogenhet; antikorruptionskampanjer inom oförändrade koalitionsstrukturer.

*Diskuteras i varje land- och organisationsrapport. Teoretiseras systematiskt i sammanfattningsrapporten.*

---

### Genombrotts-infångnings-cykeln
**Kanonisk term.** *Brasilien-specifik instans av en mer allmän mekanism; varianter: "reformabsorptionscykel", "innovationsinfångning".*

Det återkommande mönstret där ett styrningsgenombrott — en genuin demonstration av institutionell kapacitet som skapar verkligt värde — omringas, utvinns och konsumeras av den befintliga infångningsarkitekturen innan det kan ackumuleras till varaktig systemisk förbättring.

Den allmänna mekanismen: genombrott → värdeskapande → infångningsarkitekturen utvinner värdet (utan att monteras ned av genombrottet) → vinsterna förflyktigas → systemet återgår till lågkapacitetsbaslinje → nästa genombrott måste börja från ungefär samma baslinje.

Brasiliens specifika version involverar koalitionspresidentialism som utvinningsmekanism, men analogier förekommer genom hela serien: Kinas kampanj-överslängs-cykel, Japans ackommodering av tryck utan paradigmförändring, EU:s förhandlingsutspädnings-loop.

---

### Förbikopplingsarkitektur
**Kanonisk term.** *Varianter i serien: "genväg", "skuggsystem", "omdirigering".*

En institutionell väg som leder förbi en dysfunktionell kärna för att uppnå nödvändiga funktioner. Förbikopplingsarkitekturer är ett rationellt svar på blockerade institutionella kärnor, och många av de mest lovande reformförslagen i serien tar denna form.

**Förbikopplingsfällan:** Förbikopplingar minskar trycket på den dysfunktionella kärnan utan att reformera den. Med tiden begränsar det oreformerade underlaget förbikopplingens effektivitet medan förbikopplingens framgång tar bort det politiska tryck som skulle kunna tvinga fram kärnreform. Förbikopplingen måste därför utformas med explicita **solnedgångsvillkor** — mekanismer som säkerställer att den skapar ökande tryck på kärnan snarare än att permanent ersätta den.

**Exempel:** Indiens digitala offentliga infrastruktur (förbi den oreformerade rättsliga och administrativa grunden); Brasiliens föreslagna algoritmiska förbikoppling (förbi infångningsarkitekturen för budgetallokering); USA:s delstatsöverskridande avtal (förbi federalt dödläge); Skuguniversitetet (förbi disciplinär integrationssvikt).

---

### Adaptiv koherens
**Kanonisk term.** *Varianter i serien: "nödvändig styrning", "flerskalig stabilitet".*

Den strukturella egenskapen hos en styrningsarkitektur som samtidigt upprätthåller variation (förmågan att uppfatta den fulla dimensionaliteten hos störningsmiljön på varje relevant skala) och koherens (förmågan att samordna handling över dessa skalor utan att undertrycka den lokala signaltrohet som gör variation värdefull).

Adaptiv koherens är inget värde eller utfall — det är en mätbar egenskap hos styrningsarkitektur, uttryckbar som gapet mellan V_miljö och V_observation på varje skala samt latensen hos samordningsmekanismer över skalorna.

**Varför båda egenskaperna är nödvändiga:**
- Variation utan koherens: den distribuerade styrningskapaciteten kan inte sättas samman till samordnad handling (USA:s integrationsunderskott; EU:s koherensunderskott).
- Koherens utan variation: den samordnade handlingen är kalibrerad mot en försämrad modell av verkligheten (Rysslands läsbarhetsunderskott; Kinas kalibreringsunderskott; Japans kontinuitetsfälla).

*Introducerad i sammanfattningen som det organiserande begreppet för Del III (Design och vision).*

---

### Performativ reformfälla
**Kanonisk term.** *Varianter i serien: "symbolisk anpassning" (som tillämpas specifikt på universitet), "reformabsorption".*

Mekanismen genom vilken institutioner införlivar reformernas retorik, symboler och procedurformer samtidigt som den underliggande incitamentsarkitekturen lämnas oförändrad. Skiljer sig från enkelt reformmisslyckande: i den performativa reformfällan producerar institutionen aktivt reformformade resultat som lättar på yttre tryck utan att åstadkomma inre transformation.

Fällan är mest utvecklad i universitetsrapporten men mekanismen förekommer i alla fem organisationsrapporter och många landrapporter. Det är det institutionella uttrycket för Symbolisk anpassning (se Immunsystem).

---

## Ekosystem- och allmänningsbegrepp

---

### Observationsbrist
**Kanonisk term.** *Varianter i serien: "övervakningsdimensionalitetsunderskott", "allmänningsobserverbarhetsmisslyckande".*

Den specifika formen av Varietetsgapet som tillämpas på allmänning och resursstyrning: styrsystemets observationsarkitektur har färre oberoende signaldimensioner än resurssystemets störningsfrekvensband.

**Konsekvens:** Styrsystemet kan inte särskilja tillstånd som kräver olika svar. Det auktoriserar uttag eller användning i en takt som är lämplig för de observerade dimensionerna medan de icke-observerade dimensionerna försämras. Kollaps sker längs de omätta axlarna och framstår som oväntad.

**Tre observationsgap i allmänningsstyrning:**
1. *Snabba bandets gap:* Årliga aggregerade undersökningar kan inte uppfatta månatliga chocker som kräver snabb lokal respons.
2. *Säsongsbandets gap:* Aggregerade biomassamått kan inte uppfatta fenologisk och reproduktiv dynamik.
3. *Långsamma bandets gap:* Korta övervakningsprogram kan inte upptäcka dekadala bärkraftstrender som endast flergenerations observationsbaslinjer kan upplösa.

*Formellt härledd i teknisk rapport IV (Nödvändig variation och allmänningen).*

---

### Närhet (som styrningsbegrepp)
**Kanonisk term.** *Varianter i serien: "ekologisk inbäddning", "territoriell styrningskapacitet".*

Fysisk, säsongsmässig och relationell närhet till ett styrt system är den primära mekanismen genom vilken styrningsarkitekturer förvärvar observationsdimensionalitet över alla relevanta störningstidsskalor. Närhet är inte bara tillgång till data — det är den ackumulerade observationskapacitet som genereras genom kontinuerlig flerdimensionell närvaro i ett system över tid.

**Tre former:**
- *Fysisk närhet:* Låg-latens, kontinuerlig, flerdimensionell lokal observation.
- *Säsongsmässig närhet:* Tillgång till fenologiska och cykliska signaldimensioner som kräver flerårig närvaro.
- *Relationell närhet:* Distribuerad avkänning genom nätverk av inbäddade observatörer, plus intergenerationell kunskap som kodar långsamma variabelsignaler i styrningsprotokoll.

**Styrningsimplikation:** Styrsystem som är positionerade inom sina resurs- eller sociala system har observationskapacitet som fjärradministrativa system strukturellt inte kan replikera, oavsett teknologisk investering. Detta grundar seriens behandling av ursprungsfolks styrningssuveränitet som ett strukturellt (inte bara kulturellt eller historiskt) argument.

---

## Värdearkitekturbegrepp

---

### Värdearkitektur
**Kanonisk term.** *Varianter i serien: "målfunktion", "värdefunktion", "optimeringsmål".*

Den explicita eller implicita uppsättning mål som ett styrsystem optimerar för, vilken avgör vilka dimensioner av verkligheten som är operationellt synliga för det. En värdearkitektur är, strukturellt sett, en observationskanal: den väljer vilka tillstånd i världen som registreras som framgångar eller misslyckanden som kräver respons, och förpassar allt utanför sitt omfång till brus.

**Goodhart-Ashby-syntesen:** Varje värdearkitektur med lägre dimensionalitet än variationen i det system den styr kommer så småningom att optimera bort sin egen förmåga att uppfatta systemets verkliga tillstånd. Proxyn avviker från målet i första hand inte genom spel utan genom att komprimeringsmekanismen förstör den korrelationsstruktur som gjorde proxyn informativ.

*Utvecklad i teknisk rapport VI (Varietetsgapet).*

---

### Varietetsgapets dynamik
**Kanonisk term.** *Se även: Varietetsgapet.*

Det tidsvarierande beteendet hos Varietetsgapet under förhållanden där störningsmiljön expanderar (genom teknologisk förändring, social förändring, ekologisk förändring) snabbare än styrsystemet utökar sin observationsdimensionalitet.

**Formell modell:** dG/dt = α − β·A(V)

Där α är uppkomsttakten för nya störningsdimensioner, A(V) är värdearkitekturens anpassningstakt, och β är anpassningseffektivitet.

När β·A(V) `<` α: gapet växer; systemet förlorar successivt observationskontakt med sin miljö.

När β·A(V) ≥ α: gapet hanteras; systemet följer den föränderliga störningsmiljön.

**Meta-styrningsimperativet:** Eftersom α > 0 i varje föränderlig värld är en statisk värdearkitektur en självblindande sådan. Långsiktig livskraft kräver inte bara adekvat aktuell dimensionalitet utan en institutionell kapacitet att utvidga värdearkitekturen i takt med att nya störningsdimensioner uppstår — en asymptotisk rörelse mot en fullödigare verklighetsintegration som inget ändligt system kan fullborda men varje livskraftigt system måste sträva efter.

*Formellt härledd i teknisk rapport VI.*

---

## Land- och signaturmönstertermer

Följande termer är specifika för enskilda landanalyser men definieras här för tydlighet i korsreferenser.

| Term | Land | Kanonisk innebörd |
|------|------|-------------------|
| **Ackumulationsunderskott** | Brasilien | Den strukturella oförmågan att ackumulera styrningsgenombrott till varaktig systemisk kapacitet. |
| **Kalibreringsunderskott** | Kina | Den strukturella oförmågan att hålla statens verklighetsmodell i linje med verkligheten, eftersom den arkitektur som krävs för korrekt återkoppling är samma arkitektur som systemets överlevnadslogik kräver att det undertrycker. |
| **Kontinuitetsfälla** | Japan | Tillståndet där en arkitektur optimerad för stabilitet inom ett paradigm blir strukturellt oförmögen att ersätta paradigmet även när det synbart misslyckas (en landspecifik instans av Upplösningslåsning). |
| **Läsbarhetsunderskott** | Ryssland | Tillståndet där styrningsarkitekturen inte kan uppfatta verkligheten utan att hota sig själv; den mest akuta formen av Varietetsgapet där systemets överlevnadslogik aktivt förstör dess egen observationskanal. |
| **Substratunderskott** | Nigeria | Avsaknaden av den grundläggande institutionella infrastruktur som andra styrningsarkitekturer är beroende av; förutsättningen för varje annan styrningsfunktion. |
| **Genomströmningsbegränsning** | Finland | En andra ordningens styrningsutmaning: oförmågan att omvandla utmärkt framsyn och brett samförstånd till transformation i den hastighet som krävs. Skiljer sig från första ordningens misslyckanden (genomförande, integration, återkoppling) genom att den endast blir synlig när dessa är lösta. |
| **Gränsdragningsunderskott** | Israel | Den strukturella oförmågan att etablera och stabilisera grundläggande gränser (territoriella, konstitutionella, demografiska, identitetsmässiga) som skulle möjliggöra en övergång från permanent undantagsstyrning till en hållbar politisk ordning. |
| **Integrativt slutningsunderskott** | Spanien | Den strukturella oförmågan att omsätta konstitutionell pluralism i stabila gemensamma institutioner; tillståndet där avsiktlig tvetydighet, nödvändig för övergång, blir permanent uppskjutande. |
| **Koherensunderskott** | EU | Den strukturella oförmågan att omsätta enighet i samordnad, punktlig, systemomfattande handling över suveräna medlemsstater — att anlända tillsammans, i tid. |
| **Integrationsunderskott** | Frankrike, USA | I Frankrike: den saknade förbindelsearkitekturen mellan nationellt beslut och lokal verklighet. I USA: oförmågan att omvandla distribuerad kapacitet till samordnad handling trots ihållande legitim oenighet. (Observera: samma term, olika strukturella uttryck på olika skalor.) |
| **Genomförandeunderskott** | Tyskland | Den strukturella oförmågan att omvandla tillgängliga resurser till effektiv leverans; sammanbrottet mellan beslut och implementering. |
| **Återkopplingsunderskott** | Sverige | Den strukturella oförmågan att upptäcka störande signaler tidigt, dela dem över institutionella gränser, erkänna dem ärligt och agera innan de ackumuleras. |
| **Synkroniseringsunderskott** | Indien | Den strukturella oförmågan att synkronisera styrningskapacitet över radikalt olika skalor, administrativa kvaliteter och formella/informella klyftor. |
| **Kontroll–genomförande-missanpassning** | Storbritannien | Det strukturella tillstånd där beslutsrätt är koncentrerad där kontexten är svagast, och kontexten är rikast där kapacitet att agera är svagast. |

---

## Anteckningar om terminologihantering

**Termer att pensionera eller markera som ersatta:**
- "Observerbarhetsgap" → använd **Varietetsgapet**
- "Observationsbrus" (när det syftar på signalkvalitet generellt) → använd **Signaltrohet** (låg signaltrohet = högt brus)
- "Paradigm-inlåsning" (Japan) → använd **Upplösningslåsning** med Japan som landspecifik instans
- "Politiskt immunsystem" → använd **Immunsystem** (kvalificeringen "politiskt" är onödig och antyder att mekanismen endast är av politisk karaktär)
- "Skuggsystem" / "genväg" → använd **Förbikopplingsarkitektur**

**Termer som är genuint distinkta och inte bör slås samman:**
- *Läsbarhetskomprimeringsprincipen* och *Varietetsgapet* är relaterade men distinkta: den förra beskriver mekanismen; det senare beskriver det strukturella tillstånd den producerar.
- *Observationsbrist* och *Preferensosynlighet* är båda manifestationer av Varietetsgapet inom olika domäner (allmänningsstyrning respektive demokratisk representation), inte synonymer.
- *Frekvensgap* och *Latens* är relaterade men distinkta: latens är en egenskap hos observationskanalen; frekvensgap är den klass av störningar som latensen gör ostyrbar.
- *Upplösningslåsning* och *Kontinuitetsfällan* (Japan): den förra är den allmänna tvärserie-mekanismen; den senare är dess Japanspecifika kulturellt-institutionella uttryck.
- *Immunsystem* och *Performativ reformfälla*: det förra namnger stabiliseringsmekanismen; det senare namnger en specifik teknik som immunsystemet använder.

---

*Denna ordlista bör behandlas som ett levande dokument. När nya rapporter introducerar nya termer, eller när befintliga termer visar sig otillräckliga för nya fall, bör revideringar göras här och spridas till övriga material.*
