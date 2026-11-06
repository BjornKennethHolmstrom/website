## 1. En korrekt lösning på ett ofullständigt problem

Optimering börjar först efter att någon har bestämt tre saker: vad beslutsfattaren ska värdera, vilka konsekvenser modellen ska innehålla och vilka belägg som får samlas in. En policy kan vara optimal för dessa val och ändå vara ett dåligt svar på det fysiska systemet. Det är inte ett räknefel. Det är ett fel — eller ett oprövat antagande — i *hur problemet som beräknas har konstruerats*.

Arbetsrapport 0 (Holmström, 2026) skilde mellan fyra former av tillräcklighet: målfunktionen, den kausala modellen, information om framtida mål och lärandet. Översvämningsexperimentet A1 visade att ett ekologiskt inslag i målfunktionen delvis kunde kompensera för hydrologisk struktur som utelämnats ur planeringsmodellen. Skillnaden-i-skillnader-kontrasten för strukturell kompensation uppgick till 34,3 % av den förenklade modellens ånger (*regret*).

A1:s snäva modell utelämnade tre mekanismer *samtidigt*: nedströms retention, synkronisering av flödestoppar och regnkorrelation. Därför lämnades en viktig fråga öppen. Vilket utelämnande var avgörande? Och skulle ett ändrat mål fortfarande vara värt sitt pris om mekanismerna kunde slås av och på oberoende av varandra, eller om beslutsfattaren helt enkelt representerade dem i modellen?

Den här rapporten tar upp den frågan. Den utgår från en förgrening av samma översvämningsmodell där varje mekanism kan aktiveras eller avaktiveras separat, både i världen och i modellen. De numeriska resultaten från de två rapporterna är avsiktligt **inte direkt jämförbara**: A1:s estimand var en skillnad-i-skillnader för målkompensation mot ett samlat utelämnande på 800 latin-hyperkubdragna världar; här jämförs två policypaket på 40 oberoende dragna världar. Inget tal i den ena rapporten ska tolkas som en replikation av ett tal i den andra.

### 1.1 Tre svar, inte tre sorters reparation

En planerare som misstänker att modellen är ofullständig har åtminstone tre handlingsvägar:

- **Ommodellera.** Föra in mekanismen i modellen innan det finns belägg för den.
- **Omvärdera.** Ändra målfunktionen så att skyddet av en värdefull resurs också kan skydda mot en utelämnad konsekvens.
- **Lära.** Handla för att undersöka vilka mekanismer som faktiskt verkar.

Dessa är inte utbytbara åtgärder. **Ommodellering utan belägg är ett antagande.** Vi kallar strategin REP, för *repair*, men namnet betecknar strategin och påstår inte att modellen är korrekt. REP innebär ingen inferens och ingen kostnad för att inhämta modellen. Om mekanismen saknas planerar REP med en felaktig modell.

**Omvärdering kan köpa okänslighet för en utelämnad mekanism.** Den okänsligheten har ett mätbart pris enligt det ursprungliga kriteriet. **Lärande kräver exponering.** Systemet måste besöka tillstånd där mekanismen påverkar vad som kan observeras, och det måste finnas tid kvar att använda kunskapen. Exponering kan i sin tur kräva åtgärder som den befintliga policyn inte har något skäl att välja.

Dessa angreppssätt har långa idéhistorier under andra namn: adaptiv förvaltning och dubbel styrning (*dual control*; Walters & Hilborn, 1978; Walters, 1986; Fel'dbaum, 1960), robusthet mot modellosäkerhet (Hansen & Sargent, 2008; Lempert, Popper & Bankes, 2003), informationsvärde (Raiffa & Schlaifer, 1961; Howard, 1966) och flermålsoptimering (Marler & Arora, 2004). Rapporten gör inte anspråk på att introducera dessa idéer. Dess snävare syfte är att placera dem i ett och samma exakt lösbara beslutsproblem, där konsekvenserna kan spåras och samspelet synliggöras.

### 1.2 Vad rapporten fastställer och inte fastställer

**En konfirmatorisk jämförelse.** En på förhand låst jämförelse prövar en policy som antar en mekanism mot en policy som ändrar målet, på 40 syntetiska testvärldar. Resultatet är en kriterieberoende avvägning (§3).

**Förhandsdefinierade deskriptiva kontraster.** Dessa belyser avvägningen som robusthet till ett pris (§4).

**Explorativa studier.** Det gäller dels hur avvägningen påverkas av parameterfel, regnförskjutningar och andra mekanismer (§4.3), dels varför exponering inte garanterar lärande i utvalda utvecklingsvärldar (§5). Lärandestudierna är **inte** en tredje arm i det konfirmatoriska experimentet.

Alla världar är syntetiska parameterdragningar. Den lika viktningen mellan ”retention finns” och ”retention saknas” är en hypotetisk prior, inte en skattning. Rapporten innehåller inga direkta rekommendationer för ett verkligt avrinningsområde.

