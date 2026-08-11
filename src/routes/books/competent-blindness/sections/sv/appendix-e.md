# Bilaga E
## De strukturella begränsningarnas logik: En kort teknisk introduktion

Denna boks argument vilar på en uppsättning formella resultat från reglerteknik, informationsteori och cybernetik, tillsammans med en läsning av institutioner som gör det möjligt att tillämpa dessa resultat. Resultaten själva är inte metaforer: de är matematiska begränsningar för varje system som måste uppfatta en omgivning, bearbeta information och handla utifrån den. Läsningen – att ett departement, ett sjukhus eller en lagstiftande församling är ett sådant system – är en tolkning, och argumentet är bara så starkt som den. Denna bilaga ger en koncis, icke-teknisk sammanfattning av de centrala resultaten för läsare som önskar förstå de logiska grundvalarna för det diagnostiska ramverket utan att arbeta sig igenom hela artikelserien *Governance as Engineering*, och inleds med att klargöra vad vart och ett av bokens påståenden gör anspråk på. Resultaten presenteras i den ordning de förekommer i argumentet.

---

### E.0 Påståendenas status

Resultaten nedan är inte alla av samma slag, och skillnaden är inte en teknikalitet. Ett teorem gäller överallt där dess förutsättningar gäller. Ett resultat som härletts inuti en modell gäller inuti den modellen, och dess räckvidd utanför beror på hur troget modellen återger det den tillämpas på. Ett mönster som observerats i tjugoen fall är evidens om världen, men det är evidens med en urvalsram och en författare. Och läsningen av en institution som en regulator – det grepp som hela denna bok vilar på – är en tolkning, försvarbar men inte bevisad.

Artiklarna i *Governance as Engineering* nivåindelar sina påståenden uttryckligen, och denna bok tillämpar samma disciplin. Fem nivåer används, här angivna med seriens taggar inom hakparentes för läsare som vill korsreferera artiklarna.

**Etablerat resultat [R].** Ett bevisat matematiskt påstående, som gäller under de villkor beviset förutsätter. Ashbys lag och Shannons kanalgränser är av detta slag. Deras status ifrågasätts inte. Det som alltid kan ifrågasättas är om en given institution uppfyller de villkor under vilka de gäller.

**Härlett resultat [R inom modellen].** Ett påstående som följer exakt ur en modell konstruerad i serien och som inte gör anspråk på något utanför den. Tröskeln för två-till-tre-lagers icke-observerbarhet samt frekvens–latens-taket är av detta slag. De anges tillsammans med sin modell och, när de är numeriska, med det parameterområde som ger dem. Ändra antagandena om aggregering, brusstruktur, beroenden eller systemdynamik, och siffran ändras.

**Dokumenterad återkomst.** Ett mönster som observerats i fallen. Återkomst fastställer att en struktur är vanlig och domänöverskridande; den fastställer inte att den är nödvändig, och den bär med sig urvalsriskerna hos varje fallbaserad metod – fallen valdes av en författare som redan omfattade ramverket. När ett kapitel säger att samma grundläggande element återfinns i ett sjukhus och en centralbank, är det ett påstående på denna nivå.

**Strukturell tolkning [IP].** Läsningen av institutioner som begränsade regulatorer: att ett departement förkroppsligar en observationskanal, att en professionell identitet fungerar som ett immunsystem, att Resolution Lock-In är den institutionella formen av en fixerad faktorisering. Detta är resonemang genom analogi från formella system till politiska. Merparten av bokens begreppsapparat befinner sig här. Det är den nivå där boken är mest användbar och minst bevisad, och dessa två fakta hänger samman.

**Designslutsats [H].** Vad som tycks följa för den som försöker bygga annorlunda. De fem egenskaperna hos adaptiv koherens, befordransakten, stationaritetshorisonten, argumentet för bredd framför djup i reformarbete: dessa är slutsatser från diagnosen, inte konsekvenser av den. En läsare kan acceptera varje föregående nivå och ändå bedöma att en annan arkitektur besvarar diagnosen bättre.

Nivåerna är inte en rangordning av betydelse. Bokens mest värdefulla påståenden finns mestadels på den tredje och fjärde nivån, och dess mest säkra påståenden finns mestadels på den första. Den asymmetrin är inte en brist att rätta till; det är så det är att resonera om institutioner med verktyg byggda för regulatorer.

---

#### Påståendestatus

| Påstående | Nivå | Anmärkning |
|---|---|---|
| Ashbys lag: en regulator behöver minst lika mycket variation som den uppgiftsrelevanta störningsvariationen | Etablerat [R] | Äkta, men närmast definitionsmässig när uppgiftsrelevant variation definieras som antalet förhållanden som kräver olika responser. Dess värde i denna bok ligger i placering, inte i djup |
| Shannons kanalkapacitet och kumulativ signal–brus-förlust över seriella lager | Etablerat [R] | Gäller överföringsstrukturen, inte något påstående om vad en representationskedja är |
| Variationsgapet som operationalisering av Ashbys lag för institutionell analys | Strukturell tolkning [IP] | En konstruktion av denna bok. Den ärver Ashbys logik, inte Ashbys teoremstatus |
| Frekvens–latens-tak, f_max ≈ 1/(2τ) | Härlett [R inom modellen] | En första ordningens relation för en modellklass. Uppnåelig bandbredd i ett verkligt system beror också på systemdynamik, fördröjningsstruktur, regulatordesign, stabilitetsmarginal och tillgången till prediktion eller framkoppling. Det allmänna påståendet – latens begränsar de störningsfrekvenser en regulator kan undertrycka – är robust; det specifika uttrycket är inte universellt |
| Tröskeln för konstitutionell icke-observerbarhet vid två till tre lager | Härlett [R inom modellen] | Följer ur aggregerings- och brusmodellen i Artikel III under dess angivna parameterområde. Det är inte ett resultat ur informationsteori som sådant, och antalet lager förskjuts med antagandena om aggregeringsgrad, brusoberoende och signalstruktur |
| Goodhart som en strukturell konsekvens av att optimera genom en förlustbringande projektion | Härlett [R inom modellen] | Villkorat av att den bortkastade dimensionen både är målrelevant och nåbar för optimeraren. Enbart förlustbringande projektion är otillräckligt. Oundviklighet hävdas inte |
| Den multiplikativa formen av den sammansatta felskatten | Härlett [R inom modellen] | Multiplikativitet följer om felmoderna verkar sekventiellt på kvarvarande kapacitet. Att de fyra moderna samverkar på precis detta sätt är ett påstående om interaktionsstruktur, inte något som fastställs av deras samförekomst |
| Siffran 6,25 % för fyra 50-procentiga fel | Illustration | En aritmetisk konsekvens av modellen under antagna värden. f_i har inte skattats för någon verklig institution. Siffran demonstrerar formen på sammansättningen; den är inte en mätning av någonting |
| Återkomst av de åtta strukturella grundprimitiven i de tjugoen fallen | Dokumenterad återkomst | Starkt belägg för domänöverskridande allmängiltighet. Fallen valdes ut och kodades av en författare som redan omfattade ramverket, vilket är en verklig begränsning för vad återkomst kan fastställa |
| Institutionella immunsystem, symbolisk anpassning, Resolution Lock-In, Kompetensfällan | Strukturell tolkning [IP] | Bokens centrala begreppsapparat. Resonemang genom analogi från begränsade regulatorer, understött av återkomsten men inte en logisk följd av den |
| Påståendet att observerade misslyckanden är strukturellt oundvikliga snarare än bara återkommande | Strukturell tolkning [IP] | Matematiken fastställer vad varje system som bryter mot begränsningarna måste drabbas av. Att en given institution bryter mot dem är en empirisk och tolkande bedömning, gjord från fall till fall |
| De fem egenskaperna hos adaptiv koherens | Designslutsats [H] | Härledd från diagnosen och från de fall där varje egenskap delvis har uppnåtts. Inte visad som gemensamt tillräcklig, och aldrig implementerad tillsammans i stor skala |
| Finland, Irland, PIX och UPI, Kaiser Permanente, det baskiska *concierto* som existensbevis | Dokumenterad återkomst, avgränsad | Var och en fastställer att en enskild namngiven egenskap är uppnåelig inom en avgränsad domän. Ingen fastställer att den sammansatta arkitekturen existerar eller skalas. Termen används i denna begränsade mening genomgående |
| Designad evolverbarhet, befordransakten, stationaritetshorisonten | Designslutsats [H] | Ingenjörsmässiga förslag som besvarar de begränsningar diagnosen identifierar. Deras tillräcklighet är en öppen fråga |
| Civilisationströskelargumentet | Designslutsats [H] | En strukturell observation om en krympande marginal, inte en förutsägelse. Det vilar på en bedömning av miljömässig komplexitet som ramverkets egen logik säger att ingen observatör är i stånd att göra tillförlitligt |

---

#### Var argumentet kan avvisas

Att ange nivåerna är bara meningsfullt om det pekar ut de ledpunkter där en seriös läsare kan plocka isär argumentet. Det finns fyra.

En läsare kan acceptera varje formellt resultat och förneka den strukturella tolkningen – hävda att institutioner inte på ett meningsfullt sätt modelleras som begränsade regulatorer, att politiska processer har egenskaper (konflikt, legitimitet, meningsskapande) som regulatoranalogin inte bara förenklar utan förvränger. Ingenting i matematiken utesluter detta. Bokens svar är återkomsten, som är belägg och inte bevis.

En läsare kan acceptera tolkningen och förneka att begränsningarna binder i ett enskilt fall – hävda att en given institution har effektivare observationsdimensionalitet, eller kortare effektiv latens, än analysen tillerkänner den. Detta är den rätta sortens invändning, och den är empirisk. Bokens diagnostiska parametrar finns delvis till för att sådana invändningar ska kunna göras specifikt snarare än generellt.

En läsare kan acceptera diagnosen och avvisa designslutsatserna – instämma i att Variationsgapet är verkligt och strukturellt producerat, och bedöma att adaptiv koherens inte är den arkitektur som besvarar det. Del IV är den mest omtvistade delen av boken, och nivåindelningen säger just det.

Och en läsare kan acceptera hela argumentet och observera att det gäller sig självt. Ramverket är en observationskanal med en vald upplösning. Det ser vad det byggdes för att se. Bokens eget svar på detta – att målet inte är en representation som aldrig sviker, utan förmågan att upptäcka när en representation har slutat vara tillräcklig – är en designslutsats som de andra, och ärver dess status.

---

### E.1 Ashbys lag om nödvändig variation

**Det formella resultatet.** W. Ross Ashby fastställde 1956 att en regulator endast kan stabilisera ett system om regulatorns variation – antalet distinkta tillstånd den kan diskriminera och svara på – matchar eller överstiger variationen hos de störningar systemet möter. Formellt, för en regulator R, ett störningsrum D och en måluppsättning G: V(R) ≥ V(D) − V(G). Om regulatorns variation är otillräcklig framträder den oabsorberade variationen som okontrollerad varians i utfallen. Detta är ett teorem, inte en riktlinje – om än ett närmast definitionsmässigt sådant, som följer genom att räkna när uppgiftsrelevant variation väl definieras som antalet förhållanden som kräver distinkta responser. Dess styrka är att det inte är frivilligt. Dess begränsning är att det anger hur många distinktioner en regulator måste kunna göra, men ingenting om vilka.

**Vad det innebär för styrning.** Styrsystemet är regulatorn. Dess variation är antalet oberoende dimensioner som dess observationskanaler kan uppfatta och svara på. Störningsmiljön är det fulla spektrum av tillstånd som kan driva det styrda systemet bort från önskade tillstånd. När observationsarkitekturen har färre dimensioner än störningsmiljön upphör de uteslutna dimensionerna inte att verka. De ackumuleras som externaliteter tills de tvingar sig till synlighet genom kris. Varietetsgapet – bokens centrala diagnosverktyg – är denna boks operationalisering av Ashbys lag för institutionell analys, och bär statusen av en konstruktion snarare än det teorem den bygger på.

**Var den förekommer.** Kapitel 3 (Varietetsgapet), kapitel 8 (Samordningsmisslyckandets skatt), kapitel 17 (de strukturella begränsningarnas logik).

---

### E.2 Frekvens–latens-begränsningen

**Det formella resultatet.** Inom reglertekniken kan en återkopplingsregulator med responslatens τ inte stabilisera störningar snabbare än f_max ≈ 1/(2τ). Latensen sätter ett hårt tak för den maximala förstärkning regulatorn kan använda: K_max ≈ 1/(τ · |A|), där A fångar systemets naturliga dynamik. Försök att öka förstärkningen bortom detta tak producerar oscillation och instabilitet. Båda uttrycken är av första ordningen och modellberoende: det uppnåeliga taket beror på systemets egen dynamik – därav A i förstärkningsuttrycket – och på fördröjningsstruktur, regulatorkonstruktion, stabilitetsmarginal samt tillgången till prediktion eller framkoppling. Vad som inte är modellberoende är begränsningens riktning. Latens inför ett tak, taket sjunker när latensen stiger, och ingen förbättring av regulatorns interna kvalitet tar bort det.

**Vad det innebär för styrning.** Varje styrsystem har en karakteristisk responslatens – tiden från att en störning uppstår till att en korrigerande åtgärd får effekt. Denna latens bestämmer den maximala störningsfrekvens som systemet kan styra. Problem som rör sig snabbare än detta tak (finansiell smitta, pandemispridning, algoritmisk marknadsdynamik) är strukturellt ostyrbara för det systemet. Problem som rör sig långsammare (klimatförändringar, demografisk omställning, infrastrukturförfall) hanteras också fel, eftersom interventioner är alltför diskontinuerliga – accelererade och reverserade av politiska cykler – för att upprätthålla den konsekventa, långsiktiga handling de kräver. Ingen enskalig arkitektur kan täcka hela störningsspektrumet. Den enda arkitektur som kan det är flerskalig: nästlade regulatorer, var och en matchad till det frekvensband dess latens tillåter den att nå.

**Var den förekommer.** Kapitel 2 (det historiska argumentet), kapitel 8 (Samordningsmisslyckandets skatt), kapitel 14 (demokratier och auktoritära system), kapitel 18 (flerskalig adaptiv styrning).

---

### E.3 Tröskeln för konstitutionell icke-observerbarhet

**Det formella resultatet.** Informationsteorin, såsom den fastställdes av Claude Shannon 1948, demonstrerar att varje kommunikationskanal har en maximal kapacitet. När information färdas genom en kedja av aggregeringslager – som den gör i representationskedjor, rapporteringshierarkier eller administrativ filtrering – dividerar varje lager den överlevande signalvariansen med sin aggregeringsgrad samtidigt som det tillför oberoende brus. Efter ett tillräckligt antal lager överstiger brusvariansen den överlevande signalvariansen. Signal‑till‑brusförhållandet vid det sista lagret är:

SNR(K) = Var_överlevande(K) / Var_brus(K)

När SNR `<` 1 domineras informationen som når beslutsnivån av överföringsmaskineriets egenskaper snarare än av egenskaperna hos det system kanalen var avsedd att representera. Systemet är konstitutionellt icke-observerbart.

**Vad det innebär för styrning.** För demokratisk representation korsas tröskeln vid ungefär två till tre lager under den aggregerings- och brusmodell som används i artiklarna *Governance as Engineering* och det parameterområde som specificeras där. Antalet lager är en egenskap hos den modellen. Den monotona trohetsminskningen med djupet, och existensen av ett djup bortom vilket återhämtning är omöjlig, är robusta mot omparametrisering. De flesta samtida demokratier opererar kedjor om tre till fem lager (väljare → lokal representant → regionalt organ → nationell lagstiftande församling → exekutiv). De opererar därmed under observerbarhetströskeln för preferensöverföring. Policynivån kan inte återskapa fördelningen av medborgarnas preferenser från de signaler den mottar, oavsett institutionell kvalitet. Samma logik gäller för varje styrsystem där information måste färdas genom flera mellanliggande lager: rapporteringskedjor i auktoritära stater, administrativa hierarkier i sjukvården, publicerings- och citeringskedjor i universitet. Förbättringar av institutionell kvalitet inom det befintliga kedjedjupet kan inte återställa den signal som förstördes i aggregeringen innan den nådde fram.

**Var den förekommer.** Kapitel 4 (varför smarta människor inte kan se misslyckandet), kapitel 5 (observationskanaler), kapitel 8 (Samordningsmisslyckandets skatt), kapitel 14 (demokratier och auktoritära system).

---

### E.4 Goodhart–Ashby-syntesen

**Det formella resultatet.** Goodharts lag säger att när ett mått blir ett mål upphör det att vara ett bra mått. Ashby‑utvidgningen identifierar den arkitektoniska mekanismen: en målfunktion med lägre dimensionalitet än variationen i det system den styr kommer så småningom att optimera bort sin egen förmåga att uppfatta systemets verkliga tillstånd. Proxyn avviker från målet i första hand inte genom spelande utan genom att komprimeringsmekanismen systematiskt förstör den korrelationsstruktur som gjorde proxyn informativ. Proxy–mål-divergensen är en icke‑observerbar dimension – osynlig för det mått som skulle upptäcka den. Systemet fortsätter att optimera proxyn, blint för det växande gapet, tills gapet manifesterar sig som en kris som måttet inte kan förklara.

**Vad det innebär för styrning.** Varje styrsystem optimerar för något – BNP, inflation, genomströmning, citeringsantal, kapacitetsriktmärken. Valet av vad man optimerar för är samtidigt valet av vad man blir blind inför. Goodhart–Ashby-syntesen förklarar varför tillägg av nya mått till en institutions instrumentbräda, utan att förändra den arkitektur som avgör vilka mått som blir mål, är självförgörande: de nya måtten kommer att absorberas, optimeras mot och göras lika oinformativa som de de ersatte. Syntesen identifierar också den strukturella förutsättningen för att sluta Varietetsgapet: målfunktionen måste ha tillräcklig dimensionalitet för att fånga de kausalt relevanta dimensionerna hos det system den styr, och institutionen måste upprätthålla kapaciteten att utvidga denna dimensionalitet i takt med att nya dimensioner uppstår.

**Var den förekommer.** Kapitel 3 (Varietetsgapet), kapitel 5 (Dataillusionen), kapitel 6 (symbolisk anpassning), kapitel 17 (de strukturella begränsningarnas logik).

---

### E.5 Samordningsmisslyckandets skatt

**Det formella resultatet.** De fyra felmodi som identifierats genom artiklarna *Governance as Engineering* – rumslig blindhet, frekvensgap, preferensosynlighet och observationsbrist – sammansätts snarare än adderas, i den mån de verkar i serie – var och en på den kapacitet de föregående lämnat intakt. När ett styrsystem uppvisar flera samtidiga arkitektoniska misslyckanden är den effektiva styrningskapaciteten produkten av vad varje misslyckande lämnar intakt:

G_effektiv = G_baslinje × (1 − f₁) × (1 − f₂) × (1 − f₃) × (1 − f₄)

Ett system med fyra misslyckanden, där vart och ett förstör 50 % av kapaciteten i sin dimension, opererar inte vid noll utan vid ungefär 6,25 % av baslinjen. Misslyckandena förstärker varandra eftersom varje verkar på de redan degraderade utflödena från de andra i den kausala kedjan. Två reservationer hör till siffran. De 6,25 % illustrerar sammansättningens form under antagna värden; det är inte en mätning, och bråktalen f_i har inte skattats för någon verklig institution. Och antagandet att dessa fyra modi samverkar seriellt är ett påstående om interaktionsstruktur snarare än en följd av deras samförekomst – där två modi bryter ned samma signal på överlappande sätt överskattar produkten förlusten.

**Vad det innebär för styrning.** Samordningsmisslyckandets skatt är den strukturella förklaringen till varför parametriska reformer konsekvent gör en besviken: att adressera ett felmodus medan andra lämnas orörda producerar vinster som den kvarvarande sammansättningsmatematiken absorberar. Det är också det strukturella argumentet för bredd framför djup i reformstrategi: måttliga förbättringar över flera felmodi samtidigt ger oproportionerlig avkastning eftersom sammansättningen verkar åt båda hållen. Ett system som reducerar vart och ett av fyra felmodi från 50 % till 40 % kapacitetsförlust mer än fördubblar sin effektiva styrningskapacitet.

**Var den förekommer.** Kapitel 8 (Samordningsmisslyckandets skatt), kapitel 17 (de strukturella begränsningarnas logik), och genom hela del III som förklaringen till varför misslyckanden i olika domäner förstärker varandra.

---

### E.6 Relationen mellan resultaten

De fyra begränsningarna är inte en samling oberoende fynd från olika discipliner. De är uttryck för en enda underliggande princip: styrningskapacitet är begränsad av strukturen hos de kanaler genom vilka styrningen uppfattar och agerar. Ashbys lag uttrycker principen i termer av variation. Frekvens–latens-begränsningen uttrycker den i termer av tid. Tröskeln för konstitutionell icke‑observerbarhet uttrycker den i termer av information. Goodhart–Ashby-syntesen uttrycker den i termer av optimering. Samordningsmisslyckandets skatt beskriver hur överträdelser av dessa begränsningar samverkar.

Begränsningarnas enhet är bokens teoretiska grundval. Det är anledningen till att samma strukturella grundbegrepp återkommer över domäner. Det är anledningen till att designprinciperna i del IV – flerskalig observation, matchad auktoritet, integration utan komprimering, immunsystemsdiskrimination, designad evolverbarhet – inte är en önskelista utan arkitektoniska svar riktade mot de begränsningar som varje livskraftigt styrsystem måste tillfredsställa. Att de är riktade mot rätt begränsningar är vad argumentet fastställer. Att de är det bästa tillgängliga svaret på dessa begränsningar är en designslutsats och öppen för ifrågasättande. Begränsningarna är hårda, men de är också precisa. De identifierar vad som måste förändras. Resten är en fråga om att bygga.
