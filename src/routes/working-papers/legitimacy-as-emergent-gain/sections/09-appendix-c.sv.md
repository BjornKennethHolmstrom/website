# Appendix C — Empiriska kodningsanteckningar för legitimitetsuppskattning

Detta appendix tillhandahåller ett protokoll för att uppskatta legitimitets-parametrarna L_B (aktiverings-legitimitet) och L_C (observations-legitimitet) från verkliga styrningsdata. Det följer mätfilosofin i teknisk rapport VIII (transparenta proxys, explicit osäkerhet, Mätparadoxen) och den fallkodningsmall som etablerades i Appendix C i teknisk rapport XII. De uppskattningar som produceras av detta protokoll är heuristiska. De erbjuds som strukturerade bedömningar som operationaliserar det formella ramverket, inte som precisa mätningar. Protokollet är utformat för att tillämpas på de empiriska illustrationerna i Del V och för att tjäna som en mall för det systematiska empiriska program som följer serien.

## C.1 Allmänt kodningsprotokoll

För en given jurisdiktion, tidsperiod och styrningsdomän, uppskatta L_B och L_C enligt en fyrstegsprocedur, med explicita osäkerhetsbedömningar i varje steg.

**Steg 1 — Definiera regulatorn och domänen.** Identifiera den specifika styrningsinstitution vars legitimitet bedöms, samt den specifika funktion eller domän (skatteuppbörd, regulatorisk verkställighet, statistisk rapportering, folkhälsoefterlevnad). En enskild politisk enhet kan ha olika L-värden för olika institutioner och domäner. Uppskattningen är institutions- och domänspecifik.

**Steg 2 — Sammanställ indikatorer för efterlevnad och rapporteringsintegritet.** Samla in tillgängliga kvantitativa och kvalitativa indikatorer som proxar för de styrdas villighet att efterleva direktiv (L_B) och att rapportera ärligt (L_C). Källorna inkluderar administrativa data, oberoende enkäter, revisionsrapporter och korsvalidering mot oberoende riktmärken. För varje indikator, bedöm dess täckning, tillförlitlighet och sårbarhet för manipulation.

**Steg 3 — Mappa indikatorer till legitimitetskalan [0,1].** Varje indikator normaliseras till en [0,1]-skala, där 1 representerar den högsta plausibla efterlevnaden eller rapporteringsintegriteten i en samtida styrningskontext, och 0 representerar fullständig icke-efterlevnad eller systematisk fabricering. Normaliseringen baseras på empiriska riktmärken: de bäst presterande styrsystemen för en given indikator definierar det övre ankaret; fullständigt statligt sammanbrott definierar det undre ankaret. Där riktmärken inte är tillgängliga tillhandahåller expertbedömning mappningen, med grunden angiven.

**Steg 4 — Uppskatta L och osäkerhetsband.** Syntetisera de normaliserade indikatorerna till en punktuppskattning av L_B och L_C (och, om så önskas, ett sammansatt L). Punktuppskattningen är analytikerns bästa bedömning; osäkerhetsintervallet återspeglar spridningen över indikatorer, de kända begränsningarna hos var och en, och analytikerns tilltro till mappningen. Intervallet rapporteras som [undre gräns, övre gräns].

Där Mätparadoxen är aktiv — där styrsystemet har incitament och kapacitet att manipulera just de indikatorer som används — behandlas alla uppskattningar som övre gränser för den sanna legitimiteten. Det sanna L är sannolikt lägre än den indikatorbaserade uppskattningen, och gapet är självt en diagnostisk signal.

## C.2 Operationalisering av aktiverings-legitimitet (L_B)

Aktiverings-legitimitet är sannolikheten att ett direktiv utfärdat av regulatorn implementeras av den styrda befolkningen. Den operationaliseras genom efterlevnadsgrader i domäner där regulatorn utövar formell auktoritet.

**Primära indikatorer.**
- **Skattegapskvot:** kvoten mellan faktiska uppburna skatteintäkter och den uppskattade potentiella intäkten under full efterlevnad, såsom uppskattad av skattemyndigheten eller oberoende forskare. Ett skattegap på 10% motsvarar L_B ≈ 0,9 för skattedomänen. Källor: nationella skattemyndigheter, IMF Article IV-rapporter, Tax Justice Networks uppskattningar.
- **Regulatoriska efterlevnadsgrader:** andelen reglerade enheter (företag, anläggningar, individer) som befinns vara i efterlevnad under rutininspektioner, viktat efter enhetens ekonomiska betydelse. Kräver justering för inspektionsintensitet: låg efterlevnad kan återspegla antingen genuin icke-efterlevnad eller en underresursatt regulator. Källor: nationella tillsynsmyndigheter, Världsbankens Doing Business-indikatorer, sektorspecifika regulatoriska databaser.
- **Domstolsefterlevnadsgrader:** andelen domstolsbeslut (böter, förelägganden, domar) som faktiskt verkställs, mätt genom betalningsgrader, genomförande av förelägganden och fängslandegrader relativt utdömda straff. Källor: nationell domstolsstatistik, Europarådets CEPEJ-rapporter, akademiska studier.
- **Vaccinations- och folkhälsoefterlevnad:** upptagsgrader för obligatoriska eller rekommenderade folkhälsoåtgärder, justerade för tillgänglighetshinder (för att isolera villighet från kapacitet). Källor: WHO/UNICEF:s data över immuniseringstäckning, nationella hälsoundersökningsdata.
- **Värnplikts- och medborgarplikts-efterlevnad:** graden av efterlevnad av obligatorisk militärtjänst, jurytjänstgöring eller folkräkningssvar. Källor: nationella försvarsdepartement, domstolsadministrativa kontor, nationella statistikmyndigheter.

**Normaliseringsankare.** Det övre ankaret (L_B ≈ 1) sätts av de bäst observerade efterlevnadsgraderna i hög-tillit-styrsystem: skattegap under 5%, regulatorisk efterlevnad över 95%, nära-universell vaccinationsupptagning. Det undre ankaret (L_B ≈ 0) motsvarar systemisk icke-efterlevnad över flera domäner, såsom observerats i kollapsade eller omstridda stater.

**Osäkerhet.** Efterlevnadsgrader är föremål för mätfel (underdetektion av icke-efterlevnad), strategisk manipulation (inspektörer som inte inspekterar, eller som samverkar med de inspekterade) och domänspecificitet (efterlevnad av skatt kan skilja sig från efterlevnad av miljöreglering). Där oberoende verifiering saknas — t.ex. där ingen skattegapsanalys existerar, eller där regulatorisk inspektionsdata inte är offentligt tillgänglig — är osäkerhetsintervallet brett och uppskattningen flaggas explicit som databegränsad.

**Illustrativ uppskattning för Del V-fallen.** För den nordiska hög-tillit-jämvikten ger skattegap uppskattade till 2–5% L_B ≈ 0,95–0,98. För Grekland under statsskuldskrisen kollapsade skatteefterlevnaden; uppskattningar av den informella ekonomin på 25–30% av BNP, kombinerat med utbrett skatteundandragande dokumenterat i kreditorsrapporter, ger L_B ≈ 0,60–0,75 i skattedomänen. För Kinas kalibreringsunderskott är L_B för centralt övervakade mål hög (efterlevnad av tillväxtmål, infrastrukturmandat är nära-universell bland lokala tjänstemän), men L_B för domäner där lokal efterlevnad står i motsatsförhållande till centrala direktiv (t.ex. miljöupprätthållande) är väsentligt lägre.

## C.3 Operationalisering av observations-legitimitet (L_C)

Observations-legitimitet är sannolikheten att information som rapporteras till regulatorn av de styrda (medborgare, företag, lokala tjänstemän) korrekt återspeglar det sanna tillståndet. Den operationaliseras genom divergensen mellan officiella data och oberoende riktmärken, de statistiska processernas integritet och förekomsten av strategisk felrapportering.

**Primära indikatorer.**
- **Divergens mellan officiella och oberoende data:** den normaliserade rot-medelkvadrat-avvikelsen mellan officiell statistik och oberoende uppskattningar för variabler där båda existerar. För ekonomisk produktion, jämför officiell BNP med satellit-nattljus-luminositetsuppskattningar eller elkonsumtionsdata. För befolkning, jämför folkräkningsdata med oberoende demografiska enkäter. För miljökvalitet, jämför officiella utsläppsrapporter med satellitbaserade atmosfäriska mätningar. Divergensen skalas så att noll divergens motsvarar L_C ≈ 1 (rapporteringen är konsistent med oberoende observation) och stor, systematisk divergens motsvarar L_C → 0. Källor: officiella statistiska publikationer; satellitdata (NOAA night-lights, ESA Sentinel-uppdrag för luftkvalitet); oberoende undersökningsprogram (Living Standards Measurement Surveys, Demographic and Health Surveys, Afrobarometer, Eurobarometer); akademiska rekonstruktionsstudier.
- **Statistisk processintegritet:** indikatorer på det nationella statistiska systemets institutionella oberoende, inklusive rättsliga skydd för chefsstatistikern, budgetautonomi, lagstadgade krav på datapublicering och frånvaron av dokumenterad politisk inblandning. Källor: Världsbankens Statistical Capacity Indicators; Open Data Inventory (ODIN); INTOSAI revisionsrapporter; landsspecifika bedömningar av OECD, Eurostat eller IMF:s Data Quality Assessment Framework.
- **Visselblåsaraktivitet och revisionsavvikelsegrader:** volymen och arten av visselblåsarrapporter som påstår datamanipulation eller undertryckning, samt den takt med vilken interna eller externa revisioner upptäcker avvikelser mellan rapporterade och faktiska administrativa data. Källor: nationella visselblåsarskyddsmyndigheter; riksrevisionsverksrapporter; parlamentariska utredningsresultat; undersökande journalistik.
- **Enkätsvarsintegritet:** omfattningen av item-bortfall, satisficing (t.ex. straight-lining) och socialt önskvärt svarande i regeringsadministrerade enkäter, såsom bedömts av enkätmetodologer. Höga grader av undvikande eller strategiskt svarande indikerar låg L_C. Källor: nationella statistikmyndigheters metodologiska rapporter; akademiska enkätmetodologistudier.
- **Mediefrihet och epistemisk mångfald:** den utsträckning i vilken oberoende medier och civilsamhällesorganisationer kan publicera information som motsäger officiella påståenden utan sanktion. Även om det inte är ett direkt mått på rapporteringsintegritet, gör en fri epistemisk miljö systematisk felrapportering svårare att upprätthålla (teknisk rapport X). Källor: Reportrar utan gränsers pressfrihetsindex; Freedom House medi-frihetspoäng; V‑Dem-indikatorer om yttrandefrihet och alternativa informationskällor.

**Normaliseringsankare.** Det övre ankaret (L_C ≈ 1) motsvarar statistiska system med konstitutionellt oberoende, nära-noll systematisk divergens mellan officiella och oberoende data, låga grader av revisionsavvikelser och en fri epistemisk miljö. De nordiska statistikmyndigheterna är riktmärket. Det undre ankaret (L_C ≈ 0) motsvarar system där officiella data är systematiskt fabricerade eller där ärlig rapportering aktivt bestraffas — läsbarhetsunderskottet i Ryssland-studien, eller den statistiska manipulation som dokumenterats i det grekiska fallet.

**Osäkerhet.** Alla indikatorer för L_C är föremål för Mätparadoxen. Ett system med låg L_C har definitionsmässigt försämrat just de observationskanaler som skulle avslöja försämringen. Oberoende riktmärken (satellitdata, oberoende enkäter) kringgår delvis detta, men de är tillgängliga endast för en delmängd variabler och är själva föremål för mätfel. Divergensen mellan officiella och oberoende data är en undre gräns för den sanna divergensen, eftersom oberoende observationskanaler också kan vara undertryckta. Uppskattningar av L_C för system med misstänkta högundertryckningsarkitekturer bör behandlas med särskild försiktighet, och osäkerhetsintervallet bör vara brett.

**Illustrativ uppskattning för Del V-fallen.** För de nordiska systemen är statistiskt oberoende konstitutionellt skyddat, divergensen mellan officiella och oberoende data är minimal, och enkätsvarsintegriteten är hög, vilket ger L_C ≈ 0,95–0,98. För Kina implicerar kalibreringsunderskottet ett substantiellt gap mellan L_C för centralt övervakade variabler (måttlig, eftersom centrum reviderar och korskontrollerar) och L_C för politiskt känsliga eller lokalt rapporterade variabler (låg, eftersom lokala tjänstemän möter starka incitament att felrapportera). Baserat på dokumenterade avvikelser i BNP:s delkomponenter, miljödata och pandemirapportering, uppskattas L_C för känsliga dimensioner till 0,40–0,65. För Grekland före 2009 var L_C för fiskal statistik katastrofalt låg: den avslöjade fiskala datamanipulationen implicerar att de rapporterade underskotts- och skuldsiffrorna var substantiellt fabricerade, vilket ger L_C ≈ 0,20–0,40 för den fiskala domänen under förkrisperioden.

## C.4 Uppskattning av sammansatt L

Den sammansatta legitimitets-parametern L som används i den formella analysen i Del II kombinerar L_B och L_C. När domänspecifika uppskattningar är tillgängliga rapporteras L separat för varje domän. När en sammanfattning på systemnivå krävs beräknas L som det geometriska medelvärdet av domännivåns L-uppskattningar, viktat efter domänens styrningsmässiga betydelse:

\[
L_{\text{sammansatt}} = \exp\!\Bigl( \sum_{d} w_d \ln L_d \Bigr),
\]

där \(L_d\) är det geometriska medelvärdet av L_B och L_C för domän \(d\), och \(w_d\) är domänvikter som summerar till ett. Det geometriska medelvärdet återspeglar legitimitets-effektens multiplikativa struktur: om antingen L_B eller L_C är nära noll för en kritisk domän, kollapsar den effektiva styrningskapaciteten i den domänen oavsett den andra parameterns värde.

**Illustrativa sammansatta uppskattningar för Del V-fallen (grovkorniga, endast för diagnostisk illustration).**

| Fall | Domän | L_B (uppsk.) | L_C (uppsk.) | Sammansatt L (uppsk.) | Intervall |
|------|--------|-------------|-------------|------------------------|-----------|
| Nordisk hög-tillit-jämvikt | Flerdomän | 0,96 | 0,96 | 0,96 | 0,92–0,99 |
| Grekland (statsskuldskris) | Fiskal | 0,65 | 0,30 | 0,44 | 0,30–0,65 |
| Sydafrika (post-TRC) | Flerdomän | 0,55 | 0,60 | 0,57 | 0,40–0,70 |
| Kina (kalibreringsunderskott) | Känsliga dimensioner | 0,70 | 0,50 | 0,59 | 0,40–0,75 |
| Kommunal infrastruktur (illustrativ) | Lokal tjänsteleverans | 0,60 | 0,55 | 0,57 | 0,40–0,75 |

Dessa uppskattningar är heuristiska. De är baserade på den kvalitativa mönstermatchningen i Del V, informerade av publicerad empirisk litteratur, och normaliserade mot de ankare som beskrivs ovan. De är inte härledda från en systematisk tillämpning av det fullständiga protokollet — vilket skulle kräva tillgång till granulära administrativa data och oberoende riktmärken som inte har sammanställts för detta appendix. De erbjuds för att demonstrera att L meningsfullt kan lokaliseras för verkliga styrsystem och att de resulterande lokaliseringarna är diagnostiskt informativa.

## C.5 Datakällor och vidare arbete

Protokollet bygger på befintliga, offentligt tillgängliga datakällor i den utsträckning det är möjligt. De primära källorna för systematisk L-uppskattning över ett representativt urval av styrsystem inkluderar:

- **Skatteefterlevnad:** IMF Article IV-rapporter; Tax Administration Diagnostic Assessment Tool (TADAT)-bedömningar; nationella skattemyndigheters årsrapporter; akademiska skattegapsstudier.
- **Regulatorisk efterlevnad:** nationella tillsynsmyndigheters årsrapporter; Världsbankens Enterprise Surveys; sektorspecifika efterlevnadsdatabaser där tillgängliga.
- **Divergens mellan officiella och oberoende data:** satellitdata över nattljus-luminositet (NOAA, NASA); Sentinel-5P atmosfäriska sammansättningsdata; Living Standards Measurement Surveys (LSMS); Demographic and Health Surveys (DHS); Afrobarometer-, Eurobarometer- och Latinobarómetro-undersökningsprogram.
- **Statistisk processintegritet:** Världsbankens Statistical Capacity Indicators; Open Data Inventory (ODIN); International Organisation of Supreme Audit Institutions (INTOSAI) revisionsrapporter; OECD:s och Eurostats kollegiala granskningar.
- **Medie- och epistemisk frihet:** Reportrar utan gränsers World Press Freedom Index; Freedom Houses Freedom in the World- och Freedom of the Press-rapporter; V‑Dem-institutets indikatorer.

Det systematiska empiriska program som följer efter teknisk rapport XIII — att tillämpa detta protokoll på ett representativt urval av jurisdiktioner och testa huruvida uppskattat L förutsäger styrningsutfall såsom ramverket förutsäger — är nästa steg i seriens empiriska bana. Detta appendix tillhandahåller mallen för det arbetet.
