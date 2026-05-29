## Appendix A: Guide för parameterskattning

Denna appendix tillhandahåller en praktisk, steg-för-steg-guide för att skatta de åtta parametrarna i Varietetsgap-ramverket utifrån offentligt tillgängliga data, expertundersökningar och institutionell analys. Den är utformad för att användas av forskare och praktiker som tillämpar ramverket på ett styrsystem för första gången, och som kanske inte har tillgång till den specialiserade expertis som låg till grund för kalibrerings- och pilotövningarna i avsnitt 7 och 8.

Varje parameterpost specificerar: parametern som skattas; de primära datakällorna; skattningsproceduren; vanliga fallgropar och hur man hanterar dem; samt vägledning om när skattningen bör behandlas som en undre gräns på grund av Mätparadoxen. Guiden förutsätter förtrogenhet med det parametriska ramverk som utvecklats i avsnitt 3 men förutsätter ingen tidigare erfarenhet av de specifika datakällor eller analytiska tekniker som används.

---

### A.1 Observationsarkitekturens effektiva dimensionalitet (V_o)

**Vad som skattas.** Antalet statistiskt oberoende dimensioner som styrsystemets observationsarkitektur kan särskilja och svara på. Detta är inte antalet indikatorer som systemet publicerar, utan antalet oberoende signaldimensioner som dessa indikatorer representerar.

**Primära datakällor.** Officiella statistiska publikationer; centralbankers, ministeriers och myndigheters indikatorkataloger; offentliga dataplattformar; institutionell dokumentation av ramverk för resultatmätning; Världsbankens indikatorer för statistisk kapacitet; Open Data Barometer samt Global Data Barometer.

**Skattningsprocedur.**

1. **Sammanställ indikatoruppsättningen.** Identifiera alla mätetal som styrsystemet publicerar och som är formellt införlivade i dess beslutsprocesser – budgetallokering, policyutvärdering, lagstiftningstillsyn, regleringsefterlevnad. Inkludera indikatorer som publiceras men inte uttryckligen är kopplade till beslutsprocesser om det finns belägg (från institutionell dokumentation eller expertintervjuer) för att de informerar interna överläggningar. Exkludera indikatorer som publiceras men ignoreras operationellt.

2. **Bedöm statistiskt oberoende.** När omfattande tidsseriedata finns tillgängliga (vanligtvis för ekonomiska och finansiella indikatorer i OECD-länder), utför en principalkomponentanalys (PCA) på indikatoruppsättningen. Antalet principalkomponenter som krävs för att förklara en specificerad andel av den totala variansen (vanligtvis 80–90 %) är en skattning av observationskanalens effektiva dimensionalitet. När PCA inte är möjlig – för att indikatoruppsättningen är för liten, tidsserierna är för korta eller data inte är offentligt tillgängliga i maskinläsbar form – måste oberoendet bedömas genom expertkodning. För varje par av indikatorer bedömer kodaren om de mäter samma underliggande dimension (t.ex. två olika inflationsmått), delvis överlappande dimensioner (t.ex. inflation och lönetillväxt) eller genuint oberoende dimensioner (t.ex. inflation och miljökvalitet). Den effektiva dimensionaliteten är antalet identifierade oberoende dimensioner.

3. **Justera för beslutsrelevans.** Alla oberoende indikatorer är inte operationellt relevanta. En indikator som är statistiskt oberoende men aldrig används i beslutsfattandet bidrar inte till den effektiva V_o. För varje oberoende dimension som identifierats i steg 2, bedöm om det finns belägg – från budgetdokument, policyutvärderingar, lagstiftningsprotokoll eller expertintervjuer – för att styrsystemet agerar på den information som dimensionen tillhandahåller. Dimensioner som mäts men inte ageras på utesluts från den slutliga V_o-skattningen.

4. **Rapportera skattningen med konfidensintervall.** V_o-skattningen rapporteras som en punktskattning (antalet oberoende, beslutsrelevanta dimensioner som identifierats) med ett konfidensintervall som återspeglar de underliggande datakvaliteternas tillförlitlighet. Intervallet är smalt (±1 dimension) för system med omfattande, maskinläsbara, oberoende granskade indikatoruppsättningar; måttligt (±2–3 dimensioner) för system där indikatorpublicering är regelbunden men oberoendebedömningen bygger på expertkodning; och brett (±4+ dimensioner) för system där data är oregelbunden, politiskt känslig eller misstänks vara föremål för selektivt undertryckande.

**Vanliga fallgropar.** Att förväxla antalet indikatorer med effektiv dimensionalitet är det vanligaste felet. En centralbank som publicerar femtio ekonomiska indikatorer, som alla är uttryck för samma tre eller fyra underliggande variabler, har inte V_o = 50. Den har V_o lika med antalet oberoende dimensioner som dessa indikatorer representerar. Korrigeringen är att genomföra oberoendebedömningen i steg 2 innan någon skattning rapporteras.

**Vägledning kring Mätparadoxen.** För system där Mätparadoxen är aktiv – vilket indikeras av hög mätetalsavgång, belägg för politisk manipulation av statistikmyndigheter eller stor divergens mellan officiella och oberoende datakällor – bör V_o-skattningen behandlas som en övre gräns för den verkliga observationskapaciteten. Systemets faktiska V_o är sannolikt lägre än vad dess publicerade indikatorer antyder, eftersom de indikatorer som skulle avslöja gapet är de som mest sannolikt har undertryckts. Detta bör noteras uttryckligen i skattningsrapporten.

---

### A.2 Störningsmiljöns effektiva dimensionalitet (V_e)

**Vad som skattas.** Antalet oberoende dimensioner längs vilka styrsystemets miljö kan störas, på en detaljnivå som är relevant för systemets livskraft. Detta är den mest utmanande parametern att skatta, eftersom de dimensioner som för närvarande är osynliga för systemet är just de som V_e borde fånga men som tillgängliga data inte kan avslöja.

**Primära datakällor.** Officiella utredningsrapporter efter kriser; nationella riskregister; centralbankers finansiella stabilitetsrapporter; strategiska framsynsdokument från statliga myndigheter och internationella organisationer; akademiska analyser av krisepisoder samt expertelicitering från domänspecialister.

**Skattningsprocedur.**

1. **Sammanställ en katalog över störningar.** Identifiera alla störningsdimensioner som har dokumenterats som kausalt betydelsefulla för styrsystemet under en avgränsad historisk period (vanligtvis tio till tjugo år, justerat efter datatillgång). Källor inkluderar: systemets egna krisutredningsrapporter (som identifierar de dimensioner som systemet anser orsakade krisen); internationella organisationers landsriskbedömningar (som identifierar dimensioner som externa observatörer betraktar som relevanta); och akademiska analyser av systemets krishistorik (som kan identifiera dimensioner som varken systemet eller internationella organisationer har uppmärksammat).

2. **Bedöm oberoende.** För varje par av störningsdimensioner som identifierats i steg 1, bedöm om de är kausalt oberoende eller om de är uttryck för en enda underliggande störning. En råvaruprischock och en valutakris kan båda vara uttryck för en enda dimension (global efterfrågan på landets export) snarare än två oberoende dimensioner. Oberoendebedömningen bygger på domänexpertis och bör genomföras genom strukturerad expertelicitering när den nödvändiga expertisen inte är tillgänglig för analytikern.

3. **Justera för uppkomsttakt.** Den historiska katalogen fångar dimensioner som redan har orsakat kriser. Den fångar inte dimensioner som ackumuleras men ännu inte har passerat observerbarhetströskeln. För att justera för detta, komplettera den historiska katalogen med en skattning av uppkomsttakten α (så som den beskrivs i avsnitt 6.2). Den justerade V_e är den historiska V_e plus α · Δt, där Δt är tiden sedan den senaste krisutvärderingen. Justeringen är grov men riktningsmässigt korrekt: den erkänner att miljön genererar nya störningsdimensioner snabbare än vad det historiska arkivet kan fånga.

4. **Rapportera skattningen med konfidensintervall.** V_e-skattningen rapporteras med ett brett konfidensintervall som återspeglar den fundamentala osäkerhet som föreligger. Intervallet är bredast för system som verkar i snabbt föränderliga teknologiska, ekologiska eller geopolitiska miljöer, där uppkomsttakten α är högst och det historiska arkivet är minst informativt.

**Vanliga fallgropar.** Det vanligaste felet är att behandla de störningsdimensioner som är synliga för analytikern – vanligtvis de som identifieras i internationella organisationers riskbedömningar – som den fullständiga uppsättningen dimensioner som är relevanta för styrsystemet. Internationella riskbedömningar är själva observationskanaler med begränsad dimensionalitet, och de underviktar systematiskt dimensioner som är långsamma, diffusa eller inte möjliga att kvantifiera. Korrigeringen är att behandla den historiska katalogen som en undre gräns, inte en skattning, och att rapportera konfidensintervallet i enlighet med detta.

**Vägledning kring Mätparadoxen.** V_e är den parameter som påverkas mest allvarligt av Mätparadoxen. De dimensioner som är farligast – de som ackumuleras tyst, under observerbarhetströskeln – är just de som ingen skattningsprocedur kan fånga. V_e-skattningen bör alltid behandlas som en undre gräns, och konfidensintervallet bör alltid vara brett. Syftet med att skatta V_e är inte att generera en precis siffra utan att tvinga analytikern att konfrontera gapet mellan vad systemet kan uppfatta och vad som kan ackumuleras bortom dess perception.

---

### A.3 Karakteristisk responslatens (τ)

**Vad som skattas.** Den genomsnittliga tiden, mätt i månader, mellan den första dokumenterade uppkomsten av ett betydande policyproblem och implementeringen av ett substantiellt policysvar. Denna parameter fångar frekvensmissanpassningen mellan hastigheten på miljöförändringar och hastigheten på institutionellt beslutsfattande.

**Primära datakällor.** Lagstiftnings- och regleringsdatabaser; policykronologier som upprätthålls av statliga myndigheter, internationella organisationer och akademiska forskare; jämförande dataset för offentlig förvaltning, såsom OECD:s Regulatory Policy Outlook; samt expertundersökningar bland policypraktiker.

**Skattningsprocedur.**

1. **Definiera observationsfönstret.** Välj en urvalsperiod, vanligtvis det senaste decenniet, för vilken omfattande policydokumentation är tillgänglig. Urvalsperioden bör vara tillräckligt lång för att inkludera flera policyepisoder över olika domäner.

2. **Identifiera ett urval av policyepisoder.** Välj en representativ uppsättning policyepisoder över styrsystemets primära ansvarsdomäner. En episod inleds när ett problem först dokumenteras som krävande policyuppmärksamhet – genom en expertrapport, en institutionell varning, en tidig varningsindikator eller en formell rekommendation från ett rådgivande organ. En episod avslutas när ett substantiellt policysvar implementeras – lagstiftning antagen, förordning utfärdad, budget tilldelad eller institutionellt mandat reviderat. Episoder där inget svar har implementerats vid slutet av observationsfönstret registreras som censurerade.

3. **Mät latensen för varje episod.** För varje episod, beräkna den förflutna tiden i månader mellan problemets dokumenterade uppkomst och implementeringen av svaret. För censurerade episoder registreras latensen som överskridande observationsfönstret.

4. **Beräkna den genomsnittliga latensen.** Den karakteristiska responslatensen τ är medelvärdet av de uppmätta latenserna över urvalet, med censurerade episoder hanterade genom överlevnadsanalystekniker (t.ex. Kaplan-Meier-skattning). Om urvalet inkluderar episoder från flera domäner, bör domänspecifika latenser rapporteras tillsammans med det övergripande medelvärdet, eftersom responslatensen ofta varierar systematiskt mellan politikområden.

5. **Rapportera skattningen med konfidensintervall.** τ rapporteras i månader, med ett konfidensintervall som återspeglar urvalsstorleken, andelen censurerade episoder och variabiliteten i latenser över urvalet.

**Vanliga fallgropar.** Att endast välja episoder som resulterade i ett policysvar blåser upp skattningen av τ genom att utesluta de fall där systemet aldrig svarade alls. Korrigeringen är att uttryckligen inkludera censurerade episoder och att använda överlevnadsanalys för att hantera dem. Att endast välja högprofilerade krisepisoder underskattar τ genom att fokusera på de fall där systemet mobiliserade exceptionella resurser. Korrigeringen är att inkludera rutinmässiga policyepisoder vid sidan av krisepisoder i urvalet.

**Vägledning kring Mätparadoxen.** För system där policydokumentationen är ofullständig, inkonsekvent eller politiskt manipulerad, bör τ-skattningen behandlas som en undre gräns för den verkliga latensen. De episoder där systemet inte svarade alls – vilka ger de starkaste beläggen för frekvensmissanpassning – är de som mest sannolikt är odokumenterade eller aktivt dolda.

---

### A.4 Signaltrohet (σ)

**Vad som skattas.** Den noggrannhet med vilken styrsystemets observationskanaler överför det styrda systemets verkliga tillstånd till beslutsfattarna. Denna parameter fångar den kumulativa effekten av sensorförsämring, överföringsbrus, aggregeringsförlust och medveten förvrängning.

**Primära datakällor.** Världsbankens Worldwide Governance Indicators (särskilt "Voice and Accountability" och "Government Effectiveness"); V-Dem-institutets index för mediefrihet, civilsamhällesdeltagande och rättsligt oberoende; Freedom House poäng för mediefrihet; Reportrar utan gränsers Pressfrihetsindex; Internationella organisationen för högre revisionsorgans (INTOSAI) bedömningar av revisionsoberoende; nationella lagstiftningsdatabaser om visselblåsarskydd samt Open Data Barometer.

**Skattningsprocedur.**

1. **Sammanställ delindikatorpoängen.** σ är ett sammansatt mått av fyra delindikatorer: (a) transparens i statens praxis för datapublicering; (b) rättsligt och praktiskt skydd för visselblåsare och oberoende revisorer; (c) mediefrihet; och (d) oberoende för högre revisionsorgan. För varje delindikator, hämta det senaste värdet från det relevanta internationella indexet eller den nationella lagstiftningsdatabasen. När flera index täcker samma dimension, använd medelvärdet av de tillgängliga poängen för att minska indexspecifika mätfel.

2. **Normalisera delindikatorerna.** Omvandla varje delindikator till en skala 0–1, där 0 representerar total signalförstörelse och 1 representerar perfekt signalens trohet. För index som redan är på en 0–1- eller 0–100-skala innebär detta en linjär omskalning. För ordinala index, använd percentilrankningen för styrsystemet bland alla bedömda system.

3. **Beräkna den sammansatta σ.** Den sammansatta signalens trohet är det viktade medelvärdet av de fyra normaliserade delindikatorerna. Standardvikterna är lika (0,25 vardera), vilket återspeglar avsaknaden av en stark teoretisk grund för differentiell viktning. Analytiker som har domänspecifik kunskap som tyder på att en delindikator är mer betydelsefull för det studerade styrsystemet kan justera vikterna, men justeringen och dess motivering ska rapporteras uttryckligen.

4. **Justera för Mätparadoxen.** För system där Mätparadoxen är aktiv – indikerad av mätetalsavgång, proxydivergens eller belägg för politisk manipulation av statistikmyndigheter – tillämpa en nedåtriktad justering av den sammansatta σ. Justeringsfaktorn är en omdömesbaserad skattning av den andel signalförsämring som är osynlig för de tillgängliga indexen. Justeringen bör rapporteras separat från den råa sammansatta poängen, så att läsarna kan bedöma effekten av antagandet om Mätparadoxen på den slutliga skattningen.

5. **Rapportera skattningen med konfidensintervall.** σ rapporteras på en 0–1-skala, med ett konfidensintervall som återspeglar variabiliteten mellan delindikatorerna, kvaliteten på de underliggande data och den osäkerhet som introduceras av justeringen för Mätparadoxen.

**Vanliga fallgropar.** Att behandla de tillgängliga internationella indexen som heltäckande mått på signalens trohet är det vanligaste felet. Indexen fångar de synliga dimensionerna av transparens och ansvarsutkrävande. De fångar inte tjänstemäns självcensur, de informella påtryckningarna på revisorer eller korruptionen av signalen vid dess källa. Den sammansatta σ bör behandlas som en övre gräns för den verkliga signalens trohet för alla styrsystem, och justeringen för Mätparadoxen bör tillämpas där paradoxen misstänks.

---

### A.5 Immunpermeabilitet (1 − sannolikheten för symbolisk anpassning)

**Vad som skattas.** Andelen annonserade styrningsreformer som uppnår strukturell implementering – definierat som att producera mätbara förändringar i institutionellt beteende eller utfall – under en avgränsad observationsperiod. Hög immunpermeabilitet innebär att de flesta reformer absorberas symboliskt; låg immunpermeabilitet innebär att de flesta uppnår strukturell förändring.

**Primära datakällor.** Lagstiftnings- och regleringsdatabaser; budgetallokeringar knutna till reformprogram; oberoende policyutvärderingar från högre revisionsorgan, akademiska forskare och civilsamhällesorganisationer; OECD:s Regulatory Policy Indicators; samt expertelicitering från styrningsspecialister.

**Skattningsprocedur.**

1. **Identifiera mängden av reformannonseringar.** Sammanställ en omfattande lista över annonserade styrningsreformer under observationsperioden (vanligtvis fem till tio år). Inkludera reformer som annonserats av den verkställande makten, den lagstiftande församlingen och större regleringsmyndigheter. Exkludera mindre administrativa justeringar som aldrig presenterades som substantiella reformer.

2. **Koda varje reform för strukturell implementering.** En reform kodas som strukturellt implementerad om den uppfyller tre kriterier, bedömda minst två år efter annonseringen: (a) det rättsliga eller regulatoriska instrumentet antogs; (b) den implementerande institutionen mottog tilldelade resurser i enlighet med reformdesignen; och (c) en oberoende utvärdering bekräftade att reformen producerade mätbara förändringar i institutionellt beteende eller utfall. Reformer som inte uppfyller något av dessa kriterier kodas som symboliska. Reformer som uppfyller vissa men inte alla kodas som delvis implementerade och behandlas som symboliska i den primära analysen, med en känslighetsanalys som omklassificerar dem som strukturella.

3. **Beräkna immunpermeabiliteten.** Immunpermeabilitet = (antal strukturellt implementerade reformer) / (totalt antal annonserade reformer). Den kompletterande sannolikheten (1 − immunpermeabilitet) är den symboliska anpassningstakten.

4. **Rapportera skattningen med konfidensintervall.** Immunpermeabilitet rapporteras som en andel på en 0–1-skala, med ett konfidensintervall som återspeglar urvalsstorleken, kodningsrelhabiliteten och känsligheten för behandlingen av delvis implementerade reformer.

**Vanliga fallgropar.** Den mest betydande utmaningen är att skilja genuin strukturell implementering från sofistikerad symbolisk anpassning – reformer som producerar skenet av förändring utan innehållet. Kodningskriterierna i steg 2 är utformade för att göra denna distinktion operationell, men de kräver tillgång till oberoende utvärderingar som kanske inte existerar för många styrsystem. Där oberoende utvärderingar saknas, bör skattningen behandlas som en övre gräns för immunpermeabiliteten (dvs. den verkliga permeabiliteten är sannolikt lägre än skattningen antyder), eftersom immunsystemets mest effektiva strategi är att producera reformer som kodas som strukturella av externa observatörer samtidigt som den underliggande arkitekturen lämnas oförändrad.

**Vägledning kring Mätparadoxen.** För system där Mätparadoxen är aktiv, bör immunpermeabilitetsskattningen kompletteras med proxyvariabeln censur-som-signal som beskrivs i avsnitt 4: den takt med vilken styrsystemet tar bort, omdefinierar eller begränsar tillgången till sina egna resultatmått över tid. Ett system som samtidigt rapporterar höga reformimplementeringstakter och systematiskt raderar de indikatorer som skulle verifiera dessa rapporter uppvisar Mätparadoxen i dess mest diagnostiska form. Divergensen mellan den rapporterade immunpermeabiliteten och mätetalsavgångstakten bör rapporteras som en ledande indikator på annalkande tröskel.

---

### A.6 Oscillationsamplitud och frekvens

**Vad som skattas.** Storleken och periodiciteten hos styrsystemets endogena oscillationer – de återkommande mönstren av överkorrigering, instabilitet och tillbakadragande som uppstår när systemets responslatens och förstärkning interagerar med en störningsmiljö det inte kan uppfatta adekvat.

**Primära datakällor.** Nationalräkenskaper (för BNP-tillväxtens volatilitet); regleringsdatabaser (för policyreverseringsfrekvens); tidsserier över opinion samt institutionella tillitsundersökningar (för demokratisk styrningsoscillation); centralbankers styrräntehistorik (för penningpolitisk oscillation).

**Skattningsprocedur.**

1. **Välj utfallsvariabeln.** Välj en styrningsutfallsvariabel som är relevant för systemets primära aktivitetsdomän. För nationalstater är BNP-tillväxtens volatilitet standard, kompletterat med policyreverseringsfrekvens där regleringsdata finns tillgängliga. För centralbanker är styrräntan den naturliga variabeln. För tillsynsmyndigheter är frekvensen av policyreverseringar – beslut som väsentligt reviderar eller upphäver ett tidigare beslut inom ett definierat tidsfönster – det primära måttet.

2. **Trendrensa tidsserien.** Avlägsna den långsiktiga trenden från utfallsvariabeln med en standardmetod för trendrensning (linjär trendrensning, Hodrick-Prescott-filter eller första-differensiering, beroende på tidsseriens egenskaper). Oscillationsanalysen utförs på den trendrensade serien.

3. **Beräkna variationskoefficienten (CV).** Oscillationsamplituden mäts som variationskoefficienten för den trendrensade serien över observationsperioden: CV = σ / μ, där σ är standardavvikelsen och μ är medelvärdet av de trendrensade värdena. En högre CV indikerar större oscillationsamplitud.

4. **Identifiera den dominerande frekvensen.** Utför en autokorrelationsanalys på den trendrensade serien för att identifiera den dominerande oscillationsperioden. Perioden är den tidsförskjutning vid vilken autokorrelationsfunktionen når sin första signifikanta topp. Om ingen signifikant topp identifieras, uppvisar systemet ingen dominerande oscillationsfrekvens.

5. **Särskilj endogen från exogen oscillation.** All volatilitet är inte endogen. Ett styrsystem kan uppvisa hög CV för att det möter en genuint volatil yttre miljö, inte för att dess egna responsdynamiker genererar oscillation. För att särskilja de två, jämför systemets CV med CV för ett relevant riktmärke – en jämförelsegrupp av styrsystem som möter liknande yttre villkor, eller systemets egen CV under en period då dess arkitektoniska parametrar var kända för att vara annorlunda. Om systemets CV signifikant överstiger riktmärket, tillskrivs överskottet endogen oscillation. Justeringen är omdömesbaserad och bör rapporteras uttryckligen.

6. **Rapportera skattningen med konfidensintervall.** Oscillationsamplituden (CV) rapporteras med ett konfidensintervall som återspeglar skattningens variabilitet över alternativa trendrensningsmetoder. Den dominerande frekvensen, om den identifieras, rapporteras med den tillhörande signifikansnivån för autokorrelationen.

**Vanliga fallgropar.** Att tillskriva all volatilitet till endogen oscillation utan att jämföra med jämförbara system eller historiska baslinjer är det vanligaste felet. Korrigeringen är att utföra jämförelsesteget (steg 5) och att rapportera justeringen uttryckligen.

---

### A.7 Förbikopplingstäthet

**Vad som skattas.** Omfattningen och förekomsten av styrningsstrukturer som verkar utanför den formella institutionella arkitekturen – informella ekonomier, parallella tvistlösningsmekanismer, skuggfinansiella system, privat säkerhetstjänst samt gemenskapsbaserade styrningsnätverk som har uppstått eftersom det formella systemet inte kan utföra sina påstådda funktioner.

**Primära datakällor.** Internationella arbetsorganisationens skattningar av den informella ekonomin; satellitdata över nattljus (NOAA, NASA) jämfört med officiell BNP-statistik; transaktionsvolymer för kryptovalutor; rapporter från den privata säkerhetsindustrin; nationella polisbemanningsdata; Världsbankens Enterprise Surveys (för företagens förlitande på informella mekanismer) samt akademiska studier av informell styrning i det specifika landet eller domänen.

**Skattningsprocedur.**

1. **Sammanställ delindikatorerna.** Förbikopplingstätheten är ett sammansatt mått av tre delindikatorer: (a) den informella ekonomins omfattning, skattad som andelen ekonomisk aktivitet som sker utanför det formella skatte- och regleringssystemet (ILO-skattningar, kompletterat med satellitnattljusets divergens från officiell BNP); (b) kvoten mellan privat säkerhetspersonal och offentliga poliser, vilken indikerar i vilken utsträckning skydd har privatiserats; och (c) volymen informella digitala valutatransaktioner i förhållande till formella bankflöden, vilket indikerar i vilken utsträckning det finansiella systemet har förbikopplats.

2. **Normalisera delindikatorerna.** Omvandla varje delindikator till en 0–1-skala, där 0 representerar ingen förbikopplingsaktivitet och 1 representerar total dominans av förbikoppling. Normaliseringen baseras på det observerade intervallet för delindikatorn över alla styrsystem för vilka data finns tillgängliga.

3. **Beräkna den sammansatta förbikopplingstätheten.** Den sammansatta tätheten är det oviktade medelvärdet av de tre normaliserade delindikatorerna. När data saknas för en eller flera delindikatorer – vilket kommer att vara fallet för många styrsystem – baseras det sammansatta måttet på de tillgängliga delindikatorerna, och den saknade datan flaggas som en osäkerhetskälla.

4. **Rapportera skattningen med konfidensintervall.** Förbikopplingstätheten rapporteras på en 0–1-skala, med ett konfidensintervall som återspeglar delindikatordatas kvalitet och fullständighet. Intervallet är bredast för system där förbikopplingsaktivitet misstänks vara omfattande men där data för att mäta den systematiskt saknas – just det tillstånd som Mätparadoxen beskriver.

**Vanliga fallgropar.** Det vanligaste felet är att behandla avsaknaden av data om förbikopplingsaktivitet som bevis för att förbikopplingsaktivitet saknas. Korrigeringen är att behandla saknade data som en osäkerhetskälla, inte som ett nollvärde, och att rapportera konfidensintervallet i enlighet med detta. För system där den formella mätinfrastrukturen är svag – vanligtvis de system där förbikopplingstätheten är högst – bör skattningen behandlas som en undre gräns.

---

### A.8 Symbolisk-till-strukturell reformkvot

**Vad som skattas.** Andelen reformannonseringar som uppnår strukturell implementering, så som definierats i avsnitt A.5. Denna parameter är den direkta komplementet till immunpermeabilitet och fångar styrsystemets benägenhet att producera reformformade utfall som lättar på yttre tryck utan att åstadkomma inre transformation.

**Skattningsprocedur.** Denna parameter härleds direkt från skattningen av immunpermeabilitet i avsnitt A.5. Den symbolisk-till-strukturella kvoten är andelen annonserade reformer som kodades som symboliska (dvs. som inte uppfyllde kriterierna för strukturell implementering). Den rapporteras separat från immunpermeabilitet eftersom den fångar en distinkt dimension av styrningsbeteende – institutionens tendens till performativ anpassning – som är diagnostiskt värdefull i sin egen rätt.

**Rapportera skattningen med konfidensintervall.** Samma som avsnitt A.5.

---

### A.9 Allmän vägledning

**Börja med de parametrar du kan skatta tillförlitligt.** Parametrarna varierar dramatiskt i datatillgänglighet och skattningsrelhabilitet. τ (responslatens) och oscillationsamplitud är vanligtvis lättast att skatta och minst utsatta för Mätparadoxen. V_e (störningsmiljöns dimensionalitet) och förbikopplingstäthet är svårast. En pragmatisk skattningsstrategi inleds med högrelhabilitetsparametrarna, använder dem för att bilda en initial bedömning och kompletterar sedan med de lägre reliabilitetsparametrarna, där varje ytterligare parameter behandlas som en källa till både information och osäkerhet.

**Rapportera osäkerhet uttryckligen.** Varje parameterskattning bör åtföljas av ett konfidensintervall och en kort motivering till dess bredd. Konfidensintervallet är inte ett statistiskt konfidensintervall i frekventistisk mening – data stöder sällan detta – utan ett strukturerat omdöme om det plausibla intervallet för det sanna parametervärdet givet den tillgängliga evidensen. Syftet är inte att påstå precision utan att förhindra falsk precision.

**Dokumentera Mätparadox-bedömningen.** Innan några parameterskattningar rapporteras, bedöm om Mätparadoxen är aktiv för det studerade styrsystemet. Bedömningen bör beakta: mätetalsavgångstakter, proxydivergensmönster, belägg för politisk manipulation av statistikmyndigheter samt systemets position i den grundläggande parameterhierarkin. Resultatet av denna bedömning avgör vilka skattningar som bör behandlas som undre gränser och vilka som kan behandlas som centrala skattningar.

**Uppdatera skattningar när nya data blir tillgängliga.** Varietetsgapet är ingen statisk egenskap. Det utvecklas i takt med att störningsmiljön genererar nya dimensioner och i takt med att styrningsarkitekturen anpassar sig – eller misslyckas med att anpassa sig – till dem. Parameterskattningar bör uppdateras periodiskt, och skattningarnas bana över tid är mer diagnostiskt värdefull än någon enskild ögonblicksbild. Ramverket är utformat för longitudinell tillämpning, och dess fulla värde realiseras först när det används för att följa styrsystem över tid.
