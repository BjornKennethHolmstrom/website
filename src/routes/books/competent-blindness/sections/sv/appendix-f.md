# Bilaga F
## Stabil ordlista

*Version 1.0, anpassad för denna bok. Denna ordlista tillhandahåller det kanoniska ordförrådet för det diagnostiska ramverk som utvecklats i de föregående kapitlen. Där tidigare rapporter har använt varierande termer för samma begrepp anges den kanoniska termen här tillsammans med en kartläggning av varianterna. För begreppens tekniska grundvalar, se bilaga E.*

---

### Grundläggande strukturella begrepp

**Varietetsgapet (G)**
*Varianter: "observerbarhetsgap", "signalunderskott", "dimensionalitetsmissanpassning".*

Den strukturella missanpassningen mellan den effektiva dimensionaliteten hos den störningsmiljö som ett styrsystem måste hantera (V_miljö) och den effektiva dimensionaliteten hos systemets observationsarkitektur (V_observation). Med enkla ord: världen kan gå fel på fler sätt än institutionen kan se. När G är positivt upphör de uteslutna dimensionerna inte att verka; de ackumuleras som externaliteter tills de tvingar sig till synlighet genom kris. När G överstiger ett kritiskt tröskelvärde är systemet konstitutionellt oobserverbart: ingen förbättring av institutionell kvalitet kan återskapa den information som förlorats innan den nådde beslutsfattningslagret. I denna bok är Varietetsgapet det centrala diagnosverktyget, introducerat i kapitel 3 och närvarande i varje efterföljande fall.

*Se även: Observerbarhetströskel, Läsbarhetskomprimeringsprincipen, Upplösningslåsning.*

---

**Observerbarhetströskel**
*Varianter: "konstitutionell oobserverbarhet", "SNR-tröskel", "signal-till-brus-korsning".*

Det kritiska värdet på Varietetsgapet (G_krit) vid vilket signal-till-brusförhållandet i ett styrsystems observationskanal faller under ett. Under denna tröskel domineras informationen som når beslutsfattningslagret av styrningsapparatens brusegenskaper snarare än av det styrda systemets verkliga tillstånd. Över tröskeln har policylagret en försämrad men informativ signal; under den kan förbättringar av institutionell kvalitet inte återskapa signaltroheten. Tröskeln beror på brusegenskaperna hos varje aggregeringslager och kopplingen mellan störningsdimensioner. Den introduceras i kapitel 3 och formaliseras i bilaga E.

---

**Läsbarhetskomprimeringsprincipen**
*Varianter: "aggregeringsförlust", "komprimeringsmekanism", "informationsförstörelse genom aggregering".*

Varje styrsystem måste reducera dimensionaliteten i sin miljö för att förbli beräkningsmässigt hanterbart. Denna komprimering är nödvändig – ingen ändlig institution kan uppfatta allt – men den är irreversibelt förlustbringande. Den information som förloras i komprimeringen ackumuleras som externaliteter tills den tvingar sig till synlighet genom kris. Principen har tre komponenter: *komprimeringsnödvändighet* (all styrning kräver någon reduktion av komplexitet), *irreversibilitet* (förstörd information kan inte återskapas nedströms) och *ackumulering* (uteslutna dimensioner fortsätter att generera effekter). Det är den sammanhållande mekanismen bakom Varietetsgapet över alla domäner som undersöks i denna bok: BNP-komprimering i centralbanker, diagnoskodskomprimering i sjukhus, citeringsmåttskomprimering i universitet och representationskedjekomprimering i demokratier. Principen namnges i kapitel 3 och illustreras genom del I–III.

---

**Nödvändig variation**
*Härleds direkt från Ashby (1956); inga betydande varianter i denna bok.*

Den minsta observations- och responsdimensionalitet ett styrsystem måste ha för att stabilisera ett styrt system. Formellt: en regulator kan inte stabilisera ett system vars variation överstiger regulatorns egen variation (Ashbys lag om nödvändig variation). En styrningsarkitektur vars observationskanal har lägre dimensionalitet än sin störningsmiljö kommer att producera okontrollerad varians i utfallen – kriser som ter sig oväntade men är strukturellt förutsägbara. Att fråga "har detta styrsystem nödvändig variation?" är likvärdigt med att fråga "är Varietetsgapet under Observerbarhetströskeln?" Lagen förklaras i kapitel 3 och dess formella logik återfinns i bilaga E.

---

**Samordningsmisslyckandets skatt**
*Varianter: "ackumulerande misslyckandekostnad", "multiplikativ misslyckandeeffekt".*

Den dolda, kontinuerliga kostnad som åläggs varje styrsystem som samtidigt opererar under nödvändig variation över flera arkitektoniska dimensioner. Skatten sammansätts snarare än adderas, under antagandet att varje felmodus verkar på det som återstår efter att de tidigare misslyckandena har försämrat styrningskapaciteten – ett antagande om interaktionsstruktur, som argumenteras för i kapitel 8 snarare än observeras. Enligt den modellen opererar ett system med fyra samtidiga misslyckanden, där vart och ett förstör hälften av den kapacitet som återstår, inte vid noll utan vid ungefär sex procent av baslinjen; siffran illustrerar sammansättningens form under antagna värden och är inte en mätning. Små förbättringar över flera felmodi samtidigt ger oproportionerlig avkastning genom omvänd sammansättning. Skatten introduceras i kapitel 8, och modellen och dess status redovisas i bilaga E.

---

### Begrepp inom styrningsarkitektur

**Observationskanal**
*Varianter: "observationsarkitektur", "avkänningsinfrastruktur", "informationskanal".*

Den fullständiga väg genom vilken information om tillståndet hos ett styrt system når de beslutsfattare som agerar på den. Den omfattar sensorer (vad som mäts), överföringsmekanismer (hur mätningar färdas), aggregeringsstrukturer (hur mätningar kombineras) och filter (vad som förkastas i varje steg). Tre kritiska egenskaper bestämmer dess prestanda:
- **Latens (τ):** Fördröjningen mellan att ett tillstånd uppstår och att information om det når beslutsfattningslagret.
- **Signaltrohet (σ):** Den noggrannhet med vilken kanalen överför det styrda systemets verkliga tillstånd; den försämras vid varje aggregeringssteg.
- **Dimensionalitet:** Antalet oberoende signaldimensioner kanalen kan överföra, vilket avgör om Varietetsgapet ligger över eller under Observerbarhetströskeln.
Observationskanaler dissekeras i kapitel 5.

---

**Latens (τ)**
*Varianter: "responsfördröjning", "beslutsförskjutning", "dödtid".*

Den totala fördröjningen mellan att en störning inträffar och att en korrigerande åtgärd får effekt. I styrsystem ackumuleras latens över upptäckt, rapportering, aggregering, överläggning, beslut, lagstiftning och implementering. Latens sätter ett tak för den maximala responsförstärkning ett stabilt system kan använda, och taket kan inte höjas av politisk vilja eller institutionell kvalitet. Takets höjd beror på systemets egen dynamik och på regulatorns konstruktion; 1/(2τ) är en första ordningens approximation av den snabbaste störning en regulator med latens τ kan undertrycka. Varje enskaligt styrsystem har därför ett karakteristiskt frekvensgap. Latens introduceras i kapitel 2 och formaliseras i bilaga E.

---

**Signaltrohet**
*Varianter: "signalkvalitet", "informationsnoggrannhet", "observationsbrus (σ)".*

Den grad i vilken signalen som når beslutsfattningslagret korrekt representerar det styrda systemets verkliga tillstånd. Formellt: observerat = sant + brus, och hög trohet innebär att bruset är litet. Signaltrohet försämras vid varje aggregeringssteg, med varje rapporteringslager och över tid när fördröjda signaler beskriver tillstånd som redan har förändrats. Den kritiska interaktionen är att signaltrohet och latens förstärker varandra: ett system som observerar felaktigt och agerar långsamt är dubbelt handikappat. Detta begrepp underbygger kapitel 5 och 8.

---

**Frekvensgap**
*Varianter: "tidsskale-missanpassning", "responshastighets-missanpassning", "bandbreddsbegränsning".*

Den klass av störningar som en given styrningsarkitektur strukturellt inte kan stabilisera eftersom deras frekvens överstiger den maximalt kontrollerbara frekvens som sätts av systemets latens. Varje enskaligt system har ett frekvensgap: det är samtidigt för långsamt för snabba störningar (finansiell smitta, pandemier) och för diskontinuerligt för långsamma (klimatförändringar, demografisk omställning). Gapet är topologiskt, inte parametriskt – det kan inte stängas genom att justera resurser eller institutionell kvalitet, endast genom en flerskalig arkitektur där varje lager styr det frekvensband dess latens tillåter det att nå. Detta är ett centralt fynd i kapitel 2 och den flerskaliga designen i kapitel 18.

---

**Fraktal styrningsarkitektur**
*Varianter: "flerskalig styrning", "nästlad styrning", "polycentrisk styrningsarkitektur".*

En nästlad hierarki av styrningslager där varje lager matchas mot den tidsskala för de störningar det hanterar. Snabbare lager har lägre latens och högre signaltrohet; långsammare lager observerar bredare aggregeringar. En fraktal arkitektur stänger alla frekvensgap samtidigt. Det är ingen politisk preferens utan det stabilitetsoptimala svaret på en flerfrekvent störningsmiljö, av samma strukturella skäl som det mänskliga nervsystemet, immunsystemet och internet är fraktala. Arkitekturen beskrivs i kapitel 2 och 18, och den formella logiken återfinns i bilaga E.

---

**Subsidiaritet**
*Används i denna bok främst i sin styrteoretiska mening.*

Principen att beslutsrätt ska ligga på den lägsta styrningsnivå som är kapabel att hantera de relevanta störningarna – den nivå vars latens och signaltrohet tillåter den att styra den aktuella störningstypen. Detta är ingen politisk preferens för lokal styrning; det är ett strukturellt krav som härleds ur medelvärdesproblemet: centraliserade regulatorer som observerar aggregerade signaler kan inte särskilja rumslig variation och tillämpar därför enhetliga svar på heterogena situationer. Boken skiljer denna *routingprotokolls*-mening av subsidiaritet från den politiska mening som åberopar subsidiaritet som en sköld mot samordning. Logiken utvecklas i kapitel 18.

---

**Medelvärdesproblemet**
*Varianter: "rumslig blindhet", "aggregeringsinducerad rumslig blindhet", "lokaliseringsinformationsförlust".*

Den strukturella konsekvensen av centraliserad observation: när en regulator endast observerar ett systemövergripande medelvärde förstörs den rumsliga variationen. En allvarlig lokal kris och utbredd stabilitet registreras som en modest nedgång; regulatorn svarar på nedgången snarare än krisen, underresponderar samtidigt där förhållandena är som värst och överresponderar där de är acceptabla. Problemet är arkitektoniskt, inte ett kompetensmisslyckande. Det introduceras i kapitel 5 och formaliseras i bilaga E.

---

### Demokratiska och representationsrelaterade begrepp

**Preferensosynlighet**
*Varianter: "preferenssignal-dämpning", "representationskedjebrus", "demokratiskt observerbarhetsmisslyckande".*

Det strukturella tillstånd där medborgarpreferenser inte kan överföras på ett tillförlitligt sätt genom djupa representationskedjor till policylagret, eftersom aggregeringsförlust och brusackumulering över flera lager förstör signaltroheten under Observerbarhetströskeln. Varje representationslager aggregerar signaler från lägre nivå (förstör inom-grupp-varians) och introducerar brus. Efter tillräckligt många lager överstiger brusvariansen signalvariansen, och policylagret svarar på brusstrukturen i sitt eget maskineri. Detta innebär att system under tröskeln kan visa nära noll korrelation mellan genomsnittliga medborgarpreferenser och policyutfall, även i ärliga, välfinansierade institutioner. Begreppet förklaras i kapitel 4 och förekommer genom demokratifallen i kapitel 14; dess formella grund återfinns i bilaga E.

---

**Representationskedjedjup**
*Varianter: "lagerantal", "kedjelängd", "aggregeringsdjup".*

Antalet mellanliggande lager mellan medborgarpreferenser och policylagret. Varje ytterligare lager introducerar aggregeringsförlust och brus. Observerbarhetströskeln för representationskedjor korsas vid ungefär två till tre lager under realistiska brusparametrar, men de flesta nationella demokratiska system opererar genom fyra till sex. Institutionella reformer som förbättrar kvaliteten på varje lager utan att minska kedjedjupet kan inte lyfta ett under-tröskelsystem över tröskeln; tröskeln är en egenskap hos kedjestrukturen, inte hos kvaliteten på enskilda lager. Se kapitel 5 och 14.

---

### Institutionella dynamiska begrepp

**Upplösningslåsning**
*Varianter: "institutionell skalfälla", "optimeringsstak", "paradigm-inlåsning" (Japan-specifik).*

Tillståndet där en institution blir strukturellt fångad av den upplösningsnivå den optimerades för. Arkitekturen som möjliggjorde dess framgång vid den upplösningen förhindrar dess funktion vid någon annan. Tre komponenter driver låsningen: kompetens vid den avsedda upplösningen, blindhet bortom den upplösningen och en självförstärkande slinga av yrkesidentitet, incitamentsstrukturer, observationskanaler och kulturella narrativ. Detta är den mekanism som gör Varietetsgapet persistent. Den introduceras i kapitel 7 och spåras över varje domän: domstolar (individuella tvister), centralbanker (inflationsmål), universitet (disciplinärt djup), sjukhus (standardiserad genomströmning), AI-labb (driftsättningshastighet) och Japan (efterkrigstida stabilitet).

---

**Immunsystem**
*Varianter: "politiskt immunsystem", "reformresistensmekanism", "infångningsarkitektur".*

De adaptiva stabiliseringsmekanismer som skyddar den befintliga styrningsarkitekturen från utmaningar. Avgörande: immunsystem är inte yttre hinder; de är *utflöden* från arkitekturen – det förutsägbara beteendet hos rationella aktörer som svarar på de incitament arkitekturen tillhandahåller. Deras vanligaste form är **symbolisk anpassning**: att anta reformens språk och symboler samtidigt som den underliggande arkitekturen lämnas oförändrad. Eftersom immunsystem är arkitektoniska utflöden kommer de att regenereras efter varje utmanövrering om inte arkitekturen själv förändras. Detta begrepp är ämnet för kapitel 6, och en fullständig taxonomi över immunsystem över domäner återfinns i bilaga B.

---

**Genombrotts–infångnings-slingan**
*Mest framträdande i Brasilien-fallet; varianter: "reformabsorptionscykel", "innovationsinfångning".*

Det återkommande mönstret där ett genuint styrningsgenombrott skapar verkligt värde, bara för att omringas, utvinnas och konsumeras av den befintliga infångningsarkitekturen innan det kan ackumuleras till varaktig systemisk förbättring. Infångningsarkitekturen monteras inte ned; vinsterna förflyktigas; systemet återgår till sin lågkapacitetsbaslinje; och nästa genombrott måste börja från ungefär samma punkt. Analogier förekommer i Kinas Kampanj–Översläng-cykel, Japans ackommodering av tryck och EU:s Förhandlings–Utspädnings-slinga. Slingan diskuteras i kapitel 8.

---

**Förbikopplingsarkitektur**
*Varianter: "genväg", "skuggsystem", "omdirigering".*

En institutionell väg som leder förbi en dysfunktionell kärna för att uppnå nödvändiga funktioner. Förbikopplingar är ett rationellt svar på blockerade institutionella kärnor. De bär med sig en karakteristisk risk – **förbikopplingsfällan**: genom att lyckas minskar de trycket på den dysfunktionella kärnan utan att reformera den, och det oreformerade substratet begränsar så småningom deras effektivitet. För att undvika detta måste förbikopplingar utformas med explicita **solnedgångsvillkor** som säkerställer att de skapar ökande tryck för kärnreform. Exempel inkluderar Indiens UPI, Brasiliens PIX, Skuguniversitetet och delstatsöverskridande avtal i USA. Förbikopplingar introduceras i kapitel 15 och deras strategiska logik utvecklas genom del IV.

---

**Adaptiv koherens**
*Varianter: "nödvändig styrning", "flerskalig stabilitet".*

Den strukturella egenskapen hos en styrningsarkitektur som samtidigt upprätthåller *variation* (att uppfatta den fulla dimensionaliteten hos störningsmiljön på varje relevant skala) och *koherens* (att samordna handling över dessa skalor utan att undertrycka lokal signaltrohet). Adaptiv koherens är inget värde utan en mätbar egenskap. Variation utan koherens producerar fragmentering (USA:s integrationsunderskott); koherens utan variation producerar strategisk blindhet (Rysslands läsbarhetsunderskott, Kinas kalibreringsunderskott). Begreppet är den organiserande idén för del IV och definieras och utforskas i kapitel 16.

---

**Performativ reformfälla**
*Varianter: "symbolisk anpassning" (när den tillämpas specifikt på universitet), "reformabsorption".*

Mekanismen genom vilken institutioner införlivar reformernas retorik, symboler och procedurformer samtidigt som den underliggande incitamentsarkitekturen lämnas oförändrad. Institutionen producerar reformformade resultat som lättar på yttre tryck utan att åstadkomma inre transformation. Mest framträdande i universitetsfallet (kapitel 11), men fällan förekommer över alla organisationsdomäner som undersöks i denna bok.

---

### Ekosystem- och allmänningsbegrepp

**Observationsbrist**
*Varianter: "övervakningsdimensionalitetsunderskott", "allmänningsobserverbarhetsmisslyckande".*

Den specifika formen av Varietetsgapet inom allmänning och resursstyrning: observationsarkitekturen har färre oberoende signaldimensioner än resurssystemets störningsfrekvensband. Systemet kan inte särskilja tillstånd som kräver olika svar och auktoriserar uttagstakter som ter sig säkra på de observerade dimensionerna medan icke-observerade dimensioner bryts ned mot kollaps. Tre gap återkommer: ett snabba bandets gap (årliga undersökningar kan inte uppfatta månatliga chocker), ett säsongsbandets gap (aggregerade mått missar fenologisk dynamik) och ett långsamma bandets gap (korta övervakningsprogram kan inte upptäcka dekadala trender). Se bilaga E för de formella grundvalarna.

---

**Närhet (som styrningsbegrepp)**
*Varianter: "ekologisk inbäddning", "territoriell styrningskapacitet".*

Fysisk, säsongsmässig och relationell närhet till ett styrt system är den primära mekanismen genom vilken styrningsarkitekturer förvärvar observationsdimensionalitet över alla relevanta störningstidsskalor. Närhet genererar kontinuerlig, flerdimensionell närvaro som fjärradministrativa system inte kan replikera, oavsett teknologisk investering. Detta strukturella argument grundar bokens behandling av ursprungsfolks och gemenskapsbaserad styrningssuveränitet.

---

### Värdearkitekturbegrepp

**Värdearkitektur**
*Varianter: "målfunktion", "värdefunktion", "optimeringsmål".*

Den explicita eller implicita uppsättning mål som ett styrsystem optimerar för, vilken avgör vilka dimensioner av verkligheten som är operationellt synliga. En värdearkitektur är, strukturellt sett, en observationskanal: den väljer vilka tillstånd som registreras som framgångar eller misslyckanden och förpassar allt annat till brus. **Goodhart–Ashby-syntesen** fastställer att varje värdearkitektur med lägre dimensionalitet än variationen i det system den styr så småningom kommer att optimera bort sin egen förmåga att uppfatta systemets verkliga tillstånd – i första hand inte genom spelande, utan genom att komprimeringsmekanismen förstör den korrelationsstruktur som gjorde proxyn informativ. Detta är en kärninsikt i kapitel 3, 5 och 6, och den formaliseras i bilaga E.

---

**Varietetsgapets dynamik**
*Se även: Varietetsgapet.*

Det tidsvarierande beteendet hos Varietetsgapet när störningsmiljön expanderar snabbare än styrsystemet utökar sin observationsdimensionalitet. Med enkla ord: gapet växer när nya utmaningar uppstår snabbare än institutionen lär sig att se dem. Formellt är gapets förändringstakt skillnaden mellan den takt med vilken nya störningsdimensioner uppstår och den takt med vilken institutionens värdearkitektur anpassar sig. Långsiktig livskraft kräver därför inte bara adekvat aktuell dimensionalitet utan en institutionell kapacitet att utvidga värdearkitekturen i takt med att nya dimensioner uppstår. Denna dynamik utforskas i kapitel 3 och bilaga E.

---

### Land- och signaturmönstertermer

Följande termer är specifika för enskilda landanalyser men definieras här för tydlighet i korsreferenser.

| Term | Land | Kanonisk innebörd | Kapitel |
|------|------|-------------------|---------|
| **Ackumulationsunderskott** | Brasilien | Den strukturella oförmågan att ackumulera styrningsgenombrott till varaktig systemisk kapacitet. | 8 |
| **Kalibreringsunderskott** | Kina | Den strukturella oförmågan att hålla statens verklighetsmodell i linje med verkligheten, eftersom den arkitektur som krävs för korrekt återkoppling är samma arkitektur som systemets överlevnadslogik kräver att det undertrycker. | 14 |
| **Kontinuitetsfällan** | Japan | En arkitektur optimerad för stabilitet inom ett paradigm blir strukturellt oförmögen att ersätta det även när det synbart misslyckas (en landspecifik instans av Upplösningslåsning). | 7, 14 |
| **Läsbarhetsunderskott** | Ryssland | Styrningsarkitekturen kan inte uppfatta verkligheten utan att hota sig själv; den mest akuta formen av Varietetsgapet, där systemets överlevnadslogik aktivt förstör dess egen observationskanal. | 14 |
| **Substratunderskott** | Nigeria | Avsaknaden av den grundläggande institutionella infrastruktur som andra styrningsarkitekturer är beroende av. | Bilaga D |
| **Genomströmningsbegränsning** | Finland | En andra ordningens utmaning: oförmågan att omvandla utmärkt framsyn och brett samförstånd till transformation i den hastighet som krävs. | 16, 18 |
| **Gränsdragningsunderskott** | Israel | Den strukturella oförmågan att etablera och stabilisera grundläggande gränser (territoriella, konstitutionella, demografiska, identitetsmässiga) som skulle möjliggöra en övergång från permanent undantagstillstånd till en hållbar politisk ordning. | 14 |
| **Integrativt slutningsunderskott** | Spanien | Den strukturella oförmågan att omsätta konstitutionell pluralism i stabila gemensamma institutioner; avsiktlig tvetydighet, en gång nödvändig för övergång, blir permanent uppskjutande. | 14 |
| **Koherensunderskott** | EU | Den strukturella oförmågan att omsätta enighet i samordnad, punktlig, systemomfattande handling över suveräna medlemsstater. | 14 |
| **Integrationsunderskott** | Frankrike, USA | I Frankrike: den saknade förbindelsearkitekturen mellan nationellt beslut och lokal verklighet. I USA: oförmågan att omvandla distribuerad kapacitet till samordnad handling. | 14 |
| **Genomförandeunderskott** | Tyskland | Den strukturella oförmågan att omvandla tillgängliga resurser till effektiv leverans. | Bilaga D |
| **Återkopplingsunderskott** | Sverige | Den strukturella oförmågan att upptäcka störande signaler tidigt, dela dem över institutionella gränser och agera innan de ackumuleras. | 1, 4 |
| **Synkroniseringsunderskott** | Indien | Den strukturella oförmågan att synkronisera styrningskapacitet över radikalt olika skalor, administrativa kvaliteter och formella/informella klyftor. | 8, 15 |
| **Kontroll–genomförande-missanpassning** | Storbritannien | Beslutsrätt är koncentrerad där kontexten är svagast, och kontexten är rikast där kapaciteten att agera är svagast. | 8 |

---

### Anteckningar om terminologihantering

**Termer att pensionera eller markera som ersatta:**
- "Observerbarhetsgap" → använd **Varietetsgapet**
- "Observationsbrus" (när det syftar på signalkvalitet generellt) → använd **Signaltrohet** (låg signaltrohet = högt brus)
- "Paradigm-inlåsning" (Japan) → använd **Upplösningslåsning** med Japan som landspecifik instans
- "Politiskt immunsystem" → använd **Immunsystem** (kvalificeringen "politiskt" är onödig)
- "Skuggsystem" / "genväg" → använd **Förbikopplingsarkitektur**

**Termer som är genuint distinkta och inte bör slås samman:**
- *Läsbarhetskomprimeringsprincipen* och *Varietetsgapet*: den förra är mekanismen; det senare är det strukturella tillstånd den producerar.
- *Observationsbrist* och *Preferensosynlighet*: båda är manifestationer av Varietetsgapet inom olika domäner (allmänningsstyrning respektive demokratisk representation), inte synonymer.
- *Frekvensgap* och *Latens*: latens är en egenskap hos observationskanalen; frekvensgap är den klass av störningar som latensen gör ostyrbar.
- *Upplösningslåsning* och *Kontinuitetsfällan* (Japan): den förra är den allmänna mekanismen; den senare är dess Japan-specifika kulturellt-institutionella uttryck.
- *Immunsystem* och *Performativ reformfälla*: det förra namnger stabiliseringsmekanismen; det senare namnger en specifik teknik som immunsystemet använder.

---

*Denna ordlista bör behandlas som ett levande dokument. I takt med att ramverket tillämpas på nya domäner kan befintliga termer behöva förfinas och nya termer kan behöva läggas till. Framtida versioner kommer att noteras som sådana.*
