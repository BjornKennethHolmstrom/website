# Appendix C — Fallkodningsanteckningar: Uppskattningar av gränsmissanpassning

Detta appendix dokumenterar kodningsprotokollet, datakällorna och de heuristiska uppskattningar som används för att karakterisera gränsmissanpassning i de fem empiriska illustrationerna i Del V. Uppskattningarna är kvalitativa och illustrativa. De är inga mätningar. De är avsedda att demonstrera tillämpligheten hos B-indexet och dess dekomposition, och att tillhandahålla en mall för den systematiska operationalisering som teknisk rapport VIII:s mätramverk kommer att kräva.

## C.1 Allmänt kodningsprotokoll

För varje fall uppskattar vi gränsmissanpassningsindex B = (B_brus + B_strukt) / Var(total_störning) enligt dekompositionen i Avsnitt 2.3. Uppskattningen sker i fyra steg, med explicita osäkerhetsbedömningar i varje steg.

**Steg 1 — Definiera jurisdiktionen och domänen.** Identifiera den regulator vars gräns bedöms, samt den specifika styrningsfunktion eller utfallsdomän som analyseras. En enda politisk enhet (t.ex. en nationalstat) kan ha olika B-värden för olika domäner (klimat, finans, hälsa), eftersom kopplingsstrukturerna skiljer sig. Uppskattningen är domänspecifik.

**Steg 2 — Identifiera gränsöverskridande kopplingskanaler.** Räkna upp de primära vägar genom vilka dynamik utanför jurisdiktionen påverkar utfallen inom den, för den specificerade domänen. Dessa inkluderar fysiska flöden (utsläpp, patogener, vatten), ekonomiska flöden (handel, kapital, arbetskraft), informationsflöden (data, narrativ, diplomatiskt tryck) och säkerhetsflöden (konfliktspridning, vapenflöden). Bedöm varje kanals relativa bidrag till den totala störningsvariansen.

**Steg 3 — Dekomponera i stokastiska och strukturerade komponenter.** Bedöm för varje kopplingskanal huruvida det gränsöverskridande inflödet övervägande är okorrelerat med regulatorns egna handlingar (B_brus) eller korrelerat med dem (B_strukt). Denna bedömning baseras på domänens kausala struktur: kan regulatorns handlingar plausibelt påverka inflödet genom återkopplingsslingor som regulatorn inte modellerar? Där evidens för strukturerad återkoppling existerar (t.ex. dokumenterade fall av policy-spridningseffekter som återkommer som störning), kodas kanalen som bidragande till B_strukt. Där inflödet framstår som genuint exogent i förhållande till regulatorns handlingar (t.ex. väderchocker med ursprung utanför jurisdiktionen, utan plausibel kausal väg från regulatorns policies till dessa chocker), kodas det som B_brus.

**Steg 4 — Uppskatta B och osäkerhetsband.** Syntetisera kanalbedömningarna till en punktuppskattning av B (som en andel av den totala störningsvariansen) och ett plausibelt intervall. Punktuppskattningen är analytikerns bästa bedömning baserad på tillgänglig evidens; intervallet återspeglar analytikerns osäkerhet om kanalvikterna och dekompositionen. Intervallet rapporteras som [undre gräns, övre gräns], där den undre gränsen återspeglar en konservativ bedömning (gränsöverskridande flöden är mindre viktiga än de verkar) och den övre gränsen återspeglar en generös bedömning (gränsöverskridande flöden dominerar).

De resulterande uppskattningarna är heuristiska. De härleds inte från formell variansdekomposition av kvantitativa tidsserier, eftersom de nödvändiga data — långa, högfrekventa serier av styrningsutfall med samtidig mätning av gränsöverskridande flöden och styrhandlingar — inte är tillgängliga för dessa fall. Uppskattningarna är baserade på publicerad fall-litteratur, institutionella rapporter och analytikerns kvalitativa bedömningar. De erbjuds som existensbevis: demonstrationer av att B meningsfullt kan diskuteras och ungefärligen lokaliseras för verkliga styrsystem, och att de resulterande lokaliseringarna är diagnostiskt informativa.

## C.2 Klimatstyrning

**Jurisdiktion och domän:** En representativ nationell regering i ett utvecklat land (t.ex. USA, Tyskland, Japan) med avseende på klimatrelaterade utfall inom dess territorium: extremväderskador, förlust av jordbruksproduktivitet, kostnader för havsnivåhöjning och klimatrelaterade hälsobördor.

**Gränsöverskridande kopplingskanaler:**
- Atmosfärisk transport av växthusgaser: utsläpp från alla jurisdiktioner blandas globalt. Bidraget från en enskild jurisdiktions utsläpp till dess egna klimatutfall är försumbart relativt bidraget från globala kumulativa utsläpp.
- Oceaniska och atmosfäriska cirkulationsförändringar: regionala klimatutfall drivs av globala mönster (El Niño, jetströmskiften, monsunvariabilitet) som ingen enskild jurisdiktion kontrollerar.
- Teknologiska och ekonomiska spridningseffekter: takten i den globala dekarboniseringen påverkar teknikkostnader, handelsmönster och det ekonomiska sammanhang inom vilket jurisdiktionens egen övergång sker.

**Dekomposition:**
- B_brus: Naturlig klimatvariabilitet som är oberoende av mänskliga utsläpp (vulkanutbrott, solvariabilitet). Liten relativt antropogen påverkan.
- B_strukt: Den dominerande komponenten. Jurisdiktionens egna historiska och pågående utsläpp bidrar till globala koncentrationer, vilka driver de klimatförändringar som återkommer som lokala störningar. Återkopplingsslingan verkar över flerdekadiska tidsskalor. Jurisdiktionens begränsningspolitik påverkar dess utsläppsbana, men effekten på dess egna klimatutfall medieras av den globala M-Δ-slingan och är storleksordningar mindre än effekten av globala utsläpp. Jurisdiktionen styr därför ett delsystem som nästan helt domineras av strukturerad gränsöverskridande återkoppling.

**Uppskattning:**
- B ≈ 0,95 (intervall: 0,85–0,99)
- B_strukt ≈ 0,85–0,95 (den överväldigande majoriteten av klimatvariansen är strukturerad återkoppling från globala utsläpp, inklusive jurisdiktionens egna)
- B_brus ≈ 0,01–0,05

**Källor:** IPCC:s sjätte utvärderingsrapport (Arbetsgrupp I, kapitel om attribuering; Arbetsgrupp III, kapitel om internationellt samarbete); nationella klimatbedömningsrapporter; expertgranskad litteratur om klimatskadefunktioner och attribuering.

**Osäkerhet:** Låg gällande att B är nära 1; kolcykelns fysiska struktur är välkarakteriserad. Måttlig gällande den precisa uppdelningen B_strukt/B_brus, eftersom vissa extremväderhändelser har stokastiska komponenter som inte kan tillskrivas antropogen påverkan.

## C.3 Pandemistyrning

**Jurisdiktion och domän:** En representativ nationell regering under covid-19-pandemin (2020–2022), med avseende på inhemska folkhälso- och ekonomiska utfall: fallfrekvens, dödlighet, belastning på sjukvårdssystemet och ekonomisk störning.

**Gränsöverskridande kopplingskanaler:**
- Internationella resenätverk: introduktion av fall och varianter från utlandet.
- Globala leveranskedjor: störningar av medicinsk utrustning, farmaceutiska insatsvaror och vaccinförsörjning.
- Informations- och beteendemässiga spridningseffekter: utländska pandemiförlopp påverkar inhemsk riskuppfattning, efterlevnad och politiskt tryck.
- Vaccin- och terapiutveckling: beroende av internationellt vetenskapligt samarbete, kliniska prövningar utomlands och utländsk tillverkningskapacitet.

**Dekomposition:**
- B_brus: Det initiala uppträdandet av SARS-CoV-2 i Wuhan var exogent för varje nationell regulator. Efterföljande zoonotiska uppträdandehändelser är på liknande sätt exogena.
- B_strukt: Nationella kontrollåtgärder genererade betydande strukturerad återkoppling via den globala M-Δ-slingan. Exportkontroller på medicinsk utrustning störde utländska leveranskedjor som återkopplades till inhemska brister. Gränsstängningar störde arbetskraftsflöden i sektorer beroende av migrantarbetare, vilket skapade inhemsk arbetskraftsbrist. Konkurrensutsatt vaccinanskaffning koncentrerade den globala produktionen, förlängde pandemin globalt och genererade nya varianter som återvände till de anskaffande länderna. Var och en av dessa är en dokumenterad instans av nationell policyhandling som återkommer som förstärkt störning via det globala kopplingsnätverket.

**Uppskattning:**
- B ≈ 0,60–0,80 (intervall: 0,40–0,90)
- B_strukt ≈ 0,40–0,70 (mycket variabelt över länder och pandemifaser)
- B_brus ≈ 0,10–0,20 (det initiala utbrottet och viss stokastisk överföringsdynamik)

Intervallet är brett eftersom betydelsen av gränsöverskridande flöden varierade dramatiskt över pandemins förlopp. Under perioder med låg inhemsk transmission och strikta gränskontroller var B lägre. Under varianthändelser eller leveranskedjekriser närmade sig B 0,90.

**Källor:** WHO:s situationsrapporter; nationella efterhandsgranskningar (t.ex. UK COVID-19 Inquiry, US Coronavirus Crisis reports); akademisk litteratur om pandemiska gränsåtgärder, vaccinnationalism och leveranskedjestörningar (t.ex. Bown 2021 om exportkontroller; Wouters et al. 2021 om vaccinanskaffning).

**Osäkerhet:** Hög. Dekompositionen av störningsvarians i inhemska policyeffekter, exogen pandemidynamik och strukturerad återkoppling från andra länders policyresponser är ett komplext kausalt inferensproblem som inte har adresserats systematiskt i den post-pandemiska litteraturen. Uppskattningen baseras på kvalitativ syntes av dokumenterade återkopplingsinstanser.

## C.4 Europeiska unionens monetär-finanspolitiska gräns

**Jurisdiktion och domän:** Eurozonen som en monetär jurisdiktion (styrd av Europeiska centralbanken) med avseende på finansiella stabilitetsutfall: statliga lånekostnader, banksolvens och aggregerad ekonomisk stabilitet inom medlemsstaterna.

**Gränsöverskridande kopplingskanaler:**
- Stat-bank-nexus: nationella finanspolitiska positioner påverkar statsobligationsräntor, vilket påverkar balansräkningarna för banker som håller dessa obligationer, vilket påverkar kreditutbudet och den ekonomiska aktiviteten, vilket återkopplas till finanspolitiska positioner.
- Gränsöverskridande bankexponeringar: banker i en medlemsstat håller statsobligationer från andra medlemsstater, vilket överför finansiell stress över gränser.
- Penningpolitisk transmission: ECB:s policyräntor påverkar medlemsstaterna asymmetriskt beroende på deras finanspolitiska positioner, skuldnivåer och banksystems hälsa.
- Politiska spridningseffekter: finanspolitiska beslut i en medlemsstat (t.ex. grekisk skuldomstrukturering) genererar politiskt tryck på andra medlemsstater och på ECB:s beslutsfattande.

**Dekomposition:**
- B_brus: Exogena globala finansiella chocker (t.ex. den amerikanska subprimekrisen 2008) som träffade eurozonen utifrån.
- B_strukt: Den dominerande komponenten under statsskuldskrisen 2010–2012. ECB:s penningpolitiska beslut (räntor, likviditetstillförsel, OMT-tillkännagivanden) och nationella finanspolitiska beslut (åtstramningsåtgärder, bankräddningar) genererade strukturerad återkoppling via stat-bank-slingan som återkom som förstärkt finansiell stress. Tysk finanspolitisk stramhet och grekisk finanspolitisk stress var kopplade via eurozonens arkitektur; var och en påverkade den andra genom obligationsmarknader, politiska förhandlingar och ECB:s villkorlighet.

**Uppskattning:**
- B ≈ 0,50–0,70 (intervall: 0,30–0,80) under krisperioder; väsentligt lägre under lugna perioder (B ≈ 0,10–0,30) när stat-bank-slingan undertrycktes av gränsöverskridande kapitalflöden.
- B_strukt ≈ 0,40–0,60 under krisperioder.
- B_brus ≈ 0,10–0,20.

Den tidsmässiga variationen är ett centralt drag: gränssprödhetsfelsättet (Del III.3) karakteriseras av att B framstår som lågt under lugna perioder och skjuter i höjden under kriser, eftersom den strukturerade återkopplingen är latent och aktiveras av stress.

**Källor:** ECB:s Financial Stability Review (2010–2015); akademisk litteratur om eurozonens statsskuldskris (t.ex. Lane 2012, Shambaugh 2012, Brunnermeier et al. 2016); dokumentation från Europeiska stabilitetsmekanismen.

**Osäkerhet:** Måttlig. De kausala kopplingarna är väldokumenterade i den akademiska litteraturen, men kvantitativ dekomposition av varians är inte tillgänglig. Den tidsmässiga variabiliteten hos B gör en enskild punktuppskattning missvisande; intervallet är mer informativt.

## C.5 Indiens interstatliga vattentvister

**Jurisdiktion och domän:** Delstaten Tamil Nadu med avseende på vattentillgångsutfall: jordbruksproduktion, urban vattenförsörjning och vattenkraftproduktion beroende av floden Cauvery.

**Gränsöverskridande kopplingskanaler:**
- Uttag uppströms: Karnatakas reservoarfrisläpp, bevattningsavledningar och vattenkraftsverksamhet påverkar direkt det flöde som når Tamil Nadu.
- Nederbördsvariabilitet: Cauverybassängens monsunnederbörd är rumsligt heterogen; Karnataka kan få tillräcklig nederbörd medan Tamil Nadu upplever underskott, eller vice versa.
- Rättsliga och politiska spridningseffekter: Tamil Nadus rättsliga åtgärder i Högsta domstolen och politiska mobilisering påverkar Karnatakas vattenhanteringsbeslut, och vice versa.
- Grundvattenberoenden: grundvattenuttag uppströms kan minska basflödesbidragen till floden.

**Dekomposition:**
- B_brus: Nederbördsvariabilitet med ursprung i storskaliga atmosfäriska mönster (monsunstyrka) som ingen av staterna kontrollerar.
- B_strukt: Karnatakas vattenhanteringsbeslut är strukturerad återkoppling från Tamil Nadus perspektiv. Karnatakas dammverksamhet svarar mot dess egna jordbruks- och urbana behov, vilka delvis är en respons på Tamil Nadus rättsliga och politiska tryck. Högsta domstolens order skapar en återkopplingsslinga där båda staternas handlingar justeras som svar på den andras handlingar och domstolens utslag. Den strukturerade återkopplingen medieras av tribunalen och domstolsprocesserna.

**Uppskattning:**
- B ≈ 0,70–0,85 (intervall: 0,50–0,95) för Tamil Nadus vattenutfall.
- B_strukt ≈ 0,40–0,60 (Karnatakas kontrollerbara frisläpp och lagringsbeslut)
- B_brus ≈ 0,30–0,45 (monsunvariabilitet, vilken är substantiell)

Det ovanligt höga B_brus återspeglar det semi-arida klimatet och den höga interannuella nederbördsvariabiliteten. Det höga B_strukt återspeglar det faktum att majoriteten av den hanterbara vattenvariabiliteten — den del som inte är rent stokastisk nederbörd — bestäms av en annan jurisdiktions handlingar.

**Källor:** Cauvery Water Disputes Tribunals rapporter (1990, 2007); Högsta domstolens domar (2018); Central Water Commissions flodflödesdata; akademisk litteratur om indiska interstatliga vattenkonflikter (t.ex. Iyer 2007, D'Souza 2019).

**Osäkerhet:** Måttlig. Flodflödesdata existerar och tilldelningsreglerna är dokumenterade. Dekompositionen i stokastiska (nederbördsdrivna) och strukturerade (policydrivna) komponenter är genomförbar med hydrologisk modellering och är en kandidat för formell operationalisering. Uppskattningen här baseras på publicerade analyser snarare än ursprunglig hydrologisk modellering.

## C.6 Israels gränsdragningsunderskott

**Jurisdiktion och domän:** Staten Israel med avseende på säkerhetsutfall: dödsoffer från våldsam konflikt, militära mobiliseringskostnader samt diplomatiskt och ekonomiskt tryck.

**Gränsöverskridande kopplingskanaler:**
- Ockupations- och bosättningsdynamik: israeliska militäroperationer, bosättningsexpansion och medborgarskapspolicies påverkar palestinska befolkningar på Västbanken och i Gaza, vilket genererar responser (militans, politisk mobilisering, internationella rättsliga utmaningar) som återkommer som säkerhetshot och diplomatiskt tryck.
- Regionala statliga och icke-statliga aktörer: israeliska handlingar påverkar kalkylerna hos Hizbollah, Iran och andra regionala aktörer, vilkas responser genererar säkerhetsstörningar.
- Internationella diplomatiska och ekonomiska kanaler: israeliska policies genererar BDS-rörelsens aktivitet, FN-resolutioner och skiften i stormaktsallianser, vilket återkommer som ekonomiskt tryck och diplomatisk isolering.
- Diaspora och identitetspolitik: israeliska policies påverkar judiska diasporagemenskaper och deras politiska inflytande, vilket återkopplas till USA:s och Europas politik gentemot Israel.

**Dekomposition:**
- B_brus: Exogena regionala utvecklingar (arabiska våren, Irans kärnprograms framsteg, USA:s utrikespolitiska skiften som inte direkt kan tillskrivas israeliska handlingar).
- B_strukt: Den dominerande komponenten. Den överväldigande majoriteten av de säkerhetsstörningar Israel upplever är responser på israeliska handlingar, processade genom den komplexa M-Δ-slingan av ockupation, regional politik och internationell diplomati. En militäroperation i Gaza genererar raketbeskjutning, internationellt fördömande och diplomatiska initiativ som begränsar framtida israeliska militära optioner. Bosättningsexpansion genererar palestinsk fördrivning och militans, internationella rättsliga utmaningar och demografiska tryck på den israeliska demokratin. Den strukturerade återkopplingen är genomgripande och flerkanalig.

**Uppskattning:**
- B ≈ 0,80–0,95 (intervall: 0,70–0,98)
- B_strukt ≈ 0,65–0,85 (den dominerande delen av säkerhetsvariansen är strukturerad återkoppling)
- B_brus ≈ 0,10–0,25 (exogena regionala och globala utvecklingar)

Uppskattningen är extremt hög eftersom gränsen själv är föremålet för strid. Nästan varje israelisk handling genererar gränsöverskridande återkoppling genom en eller flera kanaler, och återkopplingen återkommer som den primära drivkraften bakom Israels säkerhetsmiljö. Detta är det begränsande politiska fallet: ett system vars gränsmissanpassning inte bara är stor utan konstitutiv för dess styrningsutmaning.

**Källor:** Israels landstudie (Governance as Engineering Series, Paper VII); akademisk litteratur om den israelisk-palestinska konflikten (t.ex. Shlaim 2014, Khalidi 2020, Zertal & Eldar 2007); dokumentation från BDS-rörelsen; FN-resolutioner och röstningsresultat; den israeliska nationella säkerhetsetablissemangets bedömningar.

**Osäkerhet:** Måttlig till hög. Den kvalitativa bedömningen att strukturerad återkoppling dominerar är robust; den precisa numeriska uppskattningen är nödvändigtvis oprecis. Distinktionen mellan B_brus och B_strukt är särskilt utmanande i detta fall eftersom många externa utvecklingar delvis är exogena och delvis responser på israeliska handlingar, med komplex attribuering. Det breda intervallet återspeglar denna tvetydighet.

## C.7 Sammanfattningstabell

| Fall | Domän | Jurisdiktion | B (uppskattning) | B_strukt (uppskattning) | B_brus (uppskattning) | Intervall |
|------|--------|--------------|-----------------|-------------------------|-----------------------|-----------|
| Klimat | Klimatutfall | Nationell regering | 0,95 | 0,85–0,95 | 0,01–0,05 | 0,85–0,99 |
| Pandemi | Folkhälsa & ekonomi | Nationell regering | 0,70 | 0,40–0,70 | 0,10–0,20 | 0,40–0,90 |
| EU | Finansiell stabilitet | Eurozonen (ECB) | 0,60 | 0,40–0,60 | 0,10–0,20 | 0,30–0,80 |
| Cauvery | Vattentillgång | Tamil Nadu | 0,78 | 0,40–0,60 | 0,30–0,45 | 0,50–0,95 |
| Israel | Säkerhetsutfall | Staten Israel | 0,88 | 0,65–0,85 | 0,10–0,25 | 0,70–0,98 |

Tabellen avslöjar ett mönster som är konsistent med papprets argument. I alla fem fall är B substantiellt över noll, och B_strukt är den dominerande eller samdominerande komponenten. I gränsfallen — klimat och Israel — närmar sig B ett, och regulatorn styr ett delsystem vars utfall nästan helt bestäms av dynamik som har sitt ursprung utanför dess gräns. I de mellanliggande fallen — pandemi, EU, Cauvery — är B högt men inte extremt, och den strukturerade återkopplingskomponenten varierar med förhållandena, vilket producerar den tidsmässiga variabilitet som gör gränssprödhet till en distinkt risk.

Dessa uppskattningar är heuristiska. De erbjuds inte som mätningar utan som strukturerade bedömningar, kodade enligt ett transparent protokoll, med explicita osäkerhetsband. Nästa steg — att operationalisera B som en uppmätt parameter inom teknisk rapport VIII:s ramverk — kräver de variansdekompositionsdata som detta appendix har identifierat som saknade. Uppskattningarna här tillhandahåller mål för den mätningen: ungefärliga positioner i parameterrymden som en formell granskning bör kunna bekräfta eller revidera.
