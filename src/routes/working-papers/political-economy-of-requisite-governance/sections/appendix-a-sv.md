# Appendix A: Heuristisk härledning av övergångsvarietetsvillkoret

Övergångsvarietetskvoten Ω som introducerades i avsnitt 2.2 är en heuristisk utvidgning av Ashbys lag om nödvändig variation till det omstridda kontrollsammanhanget. Detta appendix återger det klassiska Ashby‑villkoret, identifierar de strukturella skillnader som förhindrar dess direkta tillämpning på övergångsproblemet, definierar termerna för den heuristiska utvidgningen och specificerar dess begränsningar. Härledningen erbjuds som en diagnostisk ställning, inte som ett teorem. Dess status är uttryckligen preliminär.

## A.1 Ashbys lag i klassisk form

Ashbys lag om nödvändig variation säger att en regulator **R** kan hålla ett system **S** inom en önskad mängd måltillstånd **G** endast om regulatorns variation motsvarar eller överstiger störningen **D**:s variation i förhållande till målet. Formellt:

*V*(**R**) ≥ *V*(**D**) − *V*(**G**)  (A.1)

där *V*(·) betecknar variation, operationellt definierat som logaritmen av antalet särskiljbara tillstånd (Ashby, 1956). Lagen är ett teorem under specificerade villkor:

- **D** är exogen: störningsfördelningen är oberoende av regulatorns handlingar.
- **D** är stationär: dess variation är fix, eller varierar endast genom processer externa till reglerslingan.
- Regulatorns respons förändrar inte störningsfördelningen; den dämpar endast störningens effekt på systemets bana genom tillståndsrymden.

Under dessa villkor är ekvation (A.1) ett nödvändigt villkor för stabil reglering. En regulator som bryter mot det kommer, med sannolikhet som närmar sig ett, att möta ett störningstillstånd den inte kan särskilja från andra tillstånd som kräver olika svar, och den oabsorberade variationen kommer att uppträda som okontrollerad varians i utfallen.

Teknisk rapport VI utvidgade denna logik till värdearkitekturer, behandlade målfunktionen som regulatorn och störningsmiljön som **D**, vilket gav villkoret dim(**V**) ≥ dim(**D**) − dim(**G**) för statisk dimensionalitet. Den utvidgningen bevarade de klassiska antagandena: störningsmiljön, även om den är öppen i det långa loppet, behandlades som exogen och icke‑strategisk vid varje givet ögonblick.

## A.2 Varför den klassiska uppställningen inte är tillämplig

Övergångsproblemet skiljer sig från det klassiska regleringsproblemet i tre avseenden som är materiella för tillämpligheten av ekvation (A.1).

För det första är "störningen" inte exogen. Den etablerade regulatorn **I** är en del av det system som regleras, och dess motdrag **u**_I(*t*) är en funktion av reformkoalitionens egna handlingar **u**_R(*t*). Störningsfördelningen är därför *endogen* till reglerslingan: reformkoalitionens strategi förändrar den etablerades strategi, vilket förändrar den störning reformkoalitionen möter. Detta är en strategisk interaktion, inte ett ensidigt regleringsproblem.

För det andra är störningsvariationen inte fix. I takt med att reformkoalitionen utvecklar nya strategier utvecklar den etablerade nya motstrategier. Variationen hos **u**_I är en funktion av den variation den etablerade kan generera adaptivt, vilken expanderar som svar på reformens egen variation. De två regulatorerna samutvecklas, och variationen hos var och en är ett rörligt mål.

För det tredje medieras reformkoalitionens aktivering delvis genom den etablerades institutionella apparat (överföringsmatrisen **M** från avsnitt 3.3). Detta innebär att reformkoalitionen inte har direkt, odämpad tillgång till tillståndsvektorn **X**; dess effektiva aktivering filtreras genom en motståndare, ett villkor utan motsvarighet i klassisk reglering.

Dessa skillnader placerar övergångsproblemet inom domänen antagonistisk reglering, differentialspelteori eller jakt‑och‑flyktdynamik. En fullständig formell behandling inom något av dessa ramverk kräver apparat — målfunktioner över strategirymder, Hamilton‑Jacobi‑Bellman‑Isaacs‑ekvationer, informationsstrukturer med asymmetriska observationer — som ligger bortom räckvidden för ett papper som förblir inom det reglertekniska idiom som serien har upprätthållit. Vad som följer är därför en heuristisk utvidgning: en olikhet som fångar seriens strukturella intuition samtidigt som den förblir testbar i simulering.

## A.3 Definiering av övergångsvarietetsrymden

Låt den effektiva variationen hos reformkoalitionen, betecknad dim(**R**), vara antalet oberoende dimensioner längs vilka koalitionen kan:

1. Observera det arkitektoniska tillståndet **X**(*t*) — rangen av dess effektiva observationsmatris **C**_R, efter hänsyn tagen till etablerad‑injicerad distortion.
2. Överlägga om och välja särskiljbara styrhandlingar — antalet ortogonala policyspakar den kan använda oberoende av varandra.
3. Överföra dessa handlingar genom kanaler som inte helt kontrolleras av den etablerade — rangen av dess effektiva aktueringsmatris **B**_R · **M**, där **M** tar hänsyn till etablerad‑medierad dämpning.

I praktiken är dim(**R**) inte ett direkt observerbart heltal. Det är en latent storhet som måste uppskattas från proxys: mångfalden i reformkoalitionens institutionella baser (legislativa, rättsliga, civilsamhälle, subfederala, internationella), oberoendet hos dess informationskanaler från etablerad kontroll, och antalet distinkta vetopunkter den trovärdigt kan hota att åsidosätta.

Låt den etablerade regulatorns effektiva variation, betecknad dim(**I**), definieras analogt: antalet oberoende dimensioner längs vilka den etablerade kan observera reformhot, mobilisera motåtgärder och sätta in dem genom de institutionella spakar den kontrollerar. Den etablerades inbäddning i den arkitektur den försvarar ger den typiskt sett:

- Observation av högre rang: tillgång till intern administrativ data, underrättelsekanaler och informella nätverk som reformkoalitionen inte kan replikera.
- Kortare latens: förmågan att sätta in motåtgärder — utskottsblockering, regulatorisk fördröjning, narrativ infångning — inom samma institutionella apparat som reformen måste navigera långsamt.
- Högre‑dimensionell aktivering: kontroll över lagstiftningsprocedur, budgetallokering, utnämningsprocesser, medieekosystem och tvångsapparat samtidigt.

Kvoten Ω = dim(**R**) / dim(**I**) är den övergångsvarietetskvot som introducerades i avsnitt 2.2. När Ω `<` 1 kan den etablerade generera fler oberoende motdrag än reformkoalitionen självständigt kan adressera; reformens aktueringsrum har, med den klassiska Ashby‑terminologin, otillräcklig variation för att absorbera "störningens" variation, även om störningen inte är exogen.

## A.4 Den heuristiska olikheten

Låt **G**_övergång vara den mängd arkitektoniska tillstånd som reformkoalitionen skulle acceptera som en framgångsrik övergång. Detta är inte en enda punkt **X*** utan en region i **X**‑rymden: koalitionen kan tolerera avvikelse från idealet längs dimensioner där kompromiss är nödvändig. Dimensionaliteten hos **G**_övergång, betecknad dim(**G**_övergång), representerar det "spelrum" som reformkoalitionen har tillgängligt — antalet oberoende arkitektoniska dimensioner längs vilka den kan acceptera ett utfall som avviker från idealet medan den fortfarande betraktar övergången som framgångsrik. Om koalitionens mål är en enda, precist specificerad arkitektur är dim(**G**_övergång) = 0 och varietetskravet är maximalt. Om koalitionen accepterar ett brett spektrum av utfall som tillfredsställande är dim(**G**_övergång) större och kravet är avslappnat.

Den heuristiska utvidgningen av ekvation (A.1) till övergångssammanhanget är:

dim(**R**) ≥ dim(**I**) − dim(**G**_övergång)  (A.2)

eller ekvivalent:

Ω ≥ 1 − dim(**G**_övergång) / dim(**I**)

När dim(**G**_övergång) = 0 — koalitionen accepterar endast en specifik arkitektur — reduceras villkoret till Ω ≥ 1. När koalitionens målmängd är tillräckligt bred för att dim(**G**_övergång) närmar sig dim(**I**) är villkoret uppfyllt även för litet Ω, vilket återspeglar intuitionen att en reform med mycket blygsamma ambitioner kan möta svagare effektivt motstånd.

Ekvation (A.2) är inget teorem. Det är en heuristik vars rättfärdigande är analogiskt: reformkoalitionen måste "reglera" arkitekturen in i målmängden **G**_övergång inför en "störning" — den etablerades motmobilisering — vars variation är dim(**I**). Spelrummet dim(**G**_övergång) minskar den effektiva variation som måste matchas, precis som dim(**G**) gör i den klassiska formuleringen. Analogien är strukturellt suggestiv, och Simulering B är utformad för att avgöra huruvida analogien håller — huruvida Ω = 1 beter sig som en tröskel i en minimal modell för omstridd kontroll. Men analogien är inget bevis, och olikheten bör läsas som en diagnostisk indikator, inte som ett nödvändigt villkor fastställt genom härledning.

## A.5 Koppling till Beers varietetskonstruktion

Den lämpliga formella förlagan för denna utvidgning är inte Ashbys ursprungliga teorem utan Stafford Beers koncept om varietetskonstruktion, utvecklat i Viable System Model (Beer, 1979, 1981). Beer insåg att i organisatoriska sammanhang är den "störning" som konfronterar en chef ofta ett annat intelligent system — en konkurrent, en regulator, en antagonistisk underenhet — och att chefens ohjälpta variation typiskt sett är otillräcklig för direkt reglering. Lösningen, i Beers ramverk, är den avsiktliga utformningen av *varietetsförstärkare* och *varietetsdämpare*: anordningar som ökar den effektiva variationen hos regulatorns perception och handling, eller minskar störningens effektiva variation, tills villkoret om nödvändig variation kan uppfyllas.

Konstruktionsprinciperna som utvecklats i Del IV kan tolkas genom denna lins:

- **Skyddade experimentutrymmen** är varietetsförstärkare för reformkoalitionen: de skapar lokala observationskanaler med högre signaltrohet och lägre latens än koalitionen kan uppnå på nationell skala, vilket förstärker dess effektiva dim(**R**).
- **Solnedgångskopplade förbikopplingar** är varietetsdämpare applicerade på den etablerade: de kopplar förbikopplingens framgång till ökat tryck på den oreformerade grunden, vilket minskar den etablerades förmåga att upprätthålla fällans jämviktsläge utan att konfrontera reformens evidens.
- **Utköpsprotokoll** är varietetsdämpare applicerade på den etablerades incitamentsstruktur: de minskar dimensionaliteten hos den etablerades motstånd genom att kompensera specifika intressedimensioner, vilket sänker effektiv dim(**I**).
- **Observatörsmångfald** är en varietetsförstärkare för reformkoalitionens observationsmatris: den tillför dekorrelerade avkänningsdimensioner som den etablerade inte samtidigt kan infånga, vilket ökar den effektiva rangen av **C**_R.

Beers ramverk tillhandahåller ett vokabulär för dessa anordningar som är mer precist än den lösare termen "konstruktionsprincip", och det förankrar övergångsanalysen i en etablerad cybernetisk tradition. Papprets bidrag är att tillämpa detta vokabulär på de specifika strukturella fällor som identifierats i Del III och att specificera de villkor under vilka varje anordning är nödvändig.

## A.6 Tillräcklighet och heuristikens gränser

Även om ekvation (A.2) är uppfylld — även om Ω ≥ 1 efter hänsyn tagen till målmängdsspelrum — är reformkoalitionen inte garanterad framgång. Olikheten fångar ett *dimensionellt* villkor: huruvida reformkoalitionen har tillräckligt många oberoende perceptions‑ och aktueringskanaler för att matcha den etablerades oberoende motdrag. Den fångar inte tre ytterligare begränsningar som kan få en övergång att misslyckas även när Ω är gynnsam.

För det första, *latensasymmetrin* (avsnitt 2.3): även om dim(**R**) är stor kan reformkoalitionen vara oförmögen att aktivera sina styrsignaler tillräckligt snabbt för att övervinna den etablerades kort‑latens‑svar. Förstärkningstaket **K**_max ≈ 1/(τ_R · |**A**|) begränsar den takt med vilken reformen kan driva arkitektonisk förändring, och den etablerades kortare τ_I tillåter den att operera bekvämt inom sitt eget tak medan reformen tvingas till randen av sitt eget.

För det andra, *överföringsbegränsningen* (avsnitt 3.3): vissa komponenter av reformens aktivering måste passera genom den etablerades institutionella apparat, och överföringsmatrisen **M** kan dämpa dem. Även om dim(**R**) är hög kan den *effektiva* aktivering som når arkitekturen vara av lägre rang, och Ω beräknat från nominell dim(**R**) kan överskatta reformens verkliga kapacitet.

För det tredje, reformkoalitionens egna *interna samordningskostnader*: en koalition med hög nominell variation — många oberoende medlemsorganisationer, var och en med sina egna observations‑ och aktueringskanaler — kan vara oförmögen att samordna sina handlingar till en koherent styrsignal. Den variation som är av betydelse är *effektiv* variation: antalet oberoende dimensioner längs vilka koalitionen kan agera *koherent*, inte antalet medlemmar den innehåller. En fraktionspräglad koalition med hög nominell dim(**R**) kan ha låg effektiv dim(**R**) när interna förhandlingskostnader har räknats in.

Dessa begränsningar innebär att Ω ≥ 1 bäst tolkas som ett nödvändigt villkor för reformframgång under gynnsamma latens‑ och överföringsförhållanden, och att dess överträdelse är tillräckligt (med hög sannolikhet) för reformabsorption. Villkoret är inte tillräckligt för framgång. Tillräcklighet kräver att latens‑, överförings‑ och samordningsbegränsningarna också är uppfyllda, och att övergångsvägen undviker de tre strukturella fällor som modellerats i Del III.

## A.7 Operationalisering

Dimensionaliteterna dim(**R**), dim(**I**) och dim(**G**_övergång) är inte direkt observerbara. De måste uppskattas från proxys, med hjälp av den metodologi som utvecklats i teknisk rapport VIII. För dim(**R**) inkluderar kandidatproxys: antalet oberoende institutionella baser från vilka reformkoalitionen kan agera (kontrollerade legislativa säten, anslutna subfederala regeringar, mobiliserade civilsamhällesorganisationer, engagerade internationella partners); antalet oberoende informationskanaler tillgängliga för koalitionen som inte står under etablerad kontroll; och antalet distinkta policyspakar koalitionen trovärdigt kan hota att använda. För dim(**I**) inkluderar kandidatproxys: antalet vetopunkter den etablerade kontrollerar; mångfalden i dess motmobiliseringsrepertoar (legislativ, rättslig, medial, tvångsmässig); och oberoendet hos dess olika avkänningsnätverk. För dim(**G**_övergång) är proxyn bredden av koalitionens uttalade förhandlingsposition: antalet arkitektoniska dimensioner längs vilka den har signalerat villighet att acceptera kompromiss.

Uppskattningsproceduren ger värden med konfidensintervall, inte punktskattningar, och kvoten Ω bör rapporteras som en fördelning — till exempel, Ω = 1,3 ± 0,4 — snarare än som en skalär. Detta är förenligt med den mätdisciplin som teknisk rapport VIII etablerade för varietetsgapet, och det bevarar den lämpliga epistemiska försiktigheten för en storhet som, i detta skede, är en heuristisk diagnos snarare än en precist mätbar parameter.

---

Härledningen som presenteras i detta appendix erbjuds i seriens anda: som en formell ställning som gör strukturella intuitioner explicita och testbara. Huruvida ställningen håller — huruvida Ω = 1 genuint avgränsar en region av övergångsrymden där reformabsorption blir överväldigande sannolik — är en fråga för Simulering B och, ytterst, för empirisk testning mot historiska övergångsepisoder. Appendixet tillhandahåller den konceptuella arkitekturen; simuleringen tillhandahåller den första disciplinerade konfrontationen; det empiriska arbetet återstår att göra.
