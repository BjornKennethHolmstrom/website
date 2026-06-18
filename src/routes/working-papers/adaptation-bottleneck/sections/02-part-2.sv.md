### Del II — Formellt ramverk

## 2.1 Slingan som en rekursiv förlustbringande pipeline

Seriens grundande premiss är att ett styrsystem observerar världen, beslutar, agerar och observerar resultatet (Rapport I). Anpassningstriaden är samma slinga, specialiserad till frågan om hur kontrollanten reviderar *sig själv*: den avkänner världens tillstånd, lär sig genom att revidera sin modell av världen, verkställer revideringen som förändrad policy, och måste sedan avkänna igen — eftersom dess eget verkställande har förändrat den värld den nästa gång observerar. Detta papper härleder inte rekursionen; det ärver den. Slingans slutning — att Verkställa förändrar den värld som Avkänna måste åter‑observera — är den struktur Rapport I hävdade, förd in i den andra cykeln. Vad detta avsnitt tillför är observationen att varje steg i den slingan har en ändlig *takt*, och att takterna är kopplade av slingan på ett sätt som triadens beroendeordning inte gjorde synligt.

Definiera tre stegtakter, alla i enheter arbete per tidsenhet:

- **avkänningstakten** \(r_S\) — den volym av särskiljbar tillståndsinformation som observationsarkitekturen kan förvärva och upplösa per tidsenhet, satt av dimensionaliteten, latensen och signaltroheten i Rapporterna I, III och VIII, samt av observatörsdekorrelationen i Rapport X;
- **inlärningstakten** \(r_L\) — den takt med vilken avkänd information omvandlas till revideringar av kontrollantens modell, begränsad av identifierbarhets- och persistent‑excitation‑villkoren i Rapport XIV;
- **verkställandetakten** \(r_E\) — den takt med vilken modelldrivna beslut blir realiserade förändringar i världen, begränsad av övergångsbandbredden i Rapport IX och delegeringsdjupet i Rapport XI.

De två inre benen är *förlustbringande omvandlingar*. Inte all avkänd information blir en modellrevidering, och inte alla modellrevideringar blir implementerad förändring. Låt

\[
\rho_{SL} \in (0,1), \qquad \rho_{LE} \in (0,1)
\]

vara omvandlingseffektiviteterna för benen avkänning‑till‑lärande respektive lärande‑till‑verkställande. **[IP]** Dessa är inte parametrar som detta papper stipulerar; de är under ett av skäl som serien redan har etablerat. \(\rho_{SL}<1\) är Rapport III:s aggregeringsförlust tillämpad på den adaptiva slingan: avkänningssteget producerar en högdimensionell signal, inlärningssteget komprimerar den till en lågdimensionell modellrevidering, och varians förstörs i komprimeringen. \(\rho_{LE}<1\) är sammansättningen av de försvagningar serien har dokumenterat på aktiveringssidan: det institutionella immunsystemet i Rapport VII, övergångsbandbreddsgränsen i Rapport IX, och delegeringsförsvagningen i Rapport XI. Teoremet nedan kräver endast att båda effektiviteterna är under ett; deras precisa värden sätter *allvarlighetsgraden* hos en flaskhals, inte dess existens.

De realiserade takterna längs pipelinen är då nästlade minima — varje steg kan bearbeta högst sin egen kapacitet, och tar inte emot mer än vad det föregående steget levererar efter omvandling:

\[
\tilde r_L = \min\!\big(\rho_{SL}\, r_S,\; r_L\big), \qquad
\tilde r_E = \min\!\big(\rho_{LE}\, \tilde r_L,\; r_E\big).
\]

Slingans **effektiva adaptiva genomströmning** är den takt med vilken avkänd verklighet faktiskt blir implementerad, modelldriven förändring:

\[
T_{\text{eff}} = \tilde r_E = \min\!\big(\rho_{LE}\,\rho_{SL}\, r_S,\; \rho_{LE}\, r_L,\; r_E\big).
\]

Det avslutande benet, Verkställa → Avkänna, är strukturellt annorlunda än de två inre benen, och skillnaden är papprets särskiljande innehåll. Det bär ingen omvandlingseffektivitet, eftersom ingenting omvandlas: verkställande förändrar världen, och den förändrade världen helt enkelt *är* vad avkänningen nästa gång observerar. Det finns inget \(\rho\) på detta ben. Vad som istället finns är ett **taktsmatchningsvillkor**. Verkställande förändrar världen i en takt \(w = g\,\tilde r_E + d\), där \(d\) är den exogena störningstakten — den takt med vilken världen förändras av andra skäl än kontrollantens egen handling — och \(g \ge 1\) är en konsekvens‑amplifieringsfaktor, den grad i vilken en handling förändrar världen bortom sitt eget fotavtryck (hävstång, i §1.1:s register; \(g=1\) när konsekvenserna matchar handlingen exakt). Avkänning måste åter‑observera i en takt som räcker för att hålla modellen i kapp den förändringen. Definiera **verklighets‑eftersläpningen** \(B_R\), den ackumulerande avvikelsen mellan världen såsom kontrollantens egen handling har gjort den och världen såsom kontrollantens modell representerar den:

\[
\dot B_R = \max\!\big(0,\; w - r_S\big).
\]

Här visar rekursionen sin konsekvens. Samma kapacitet \(r_S\) sitter i båda ändarna av slingan: den matar pipelines framände, och den begränsar åter‑observationen vid slutet. En kontrollant kan inte höja sin verkställandetakt utan att höja \(w\), och därmed utan att höja den avkänningstakt den nu behöver bara för att förbli kalibrerad. Avkänningssteget ombeds göra dubbelt arbete — att observera världen, och att åter‑observera vad systemets eget verkställande har gjort av den — ur en enda ändlig kapacitet. Detta är den formella meningen i vilken styrning skiljer sig från en produktionslinje: en produktionspipeline tillverkar inte den miljö den sedan måste inspektera, och styrning, liksom varje tillräckligt aktivt adaptivt system, gör det.

Två spakar kan lätta en verklighets‑eftersläpning, och de är inte symmetriska. Kontrollanten kan höja \(r_S\) — bygga avkänningskapacitet — eller så kan den sänka \(\tilde r_E\) genom att verkställa mindre; den kan inte sänka den exogena takten \(d\), som ligger utanför dess kontroll. Den första spaken är långsam: avkänningskapacitet ackumuleras gradvis, ur expertis, tillit och infrastruktur som pengar kan finansiera tillväxten av men inte omedelbart köpa. Den andra är snabb men bär en omedelbar prestandakostnad. Asymmetrin — avkänning byggd långsamt, verkställande strypt efter behag — innebär att ett system som står inför en växande verklighets‑eftersläpning konfronterar en genuin avvägning mellan fortsatt handling och fortsatt kalibrering, en som inte kan lösas genom att spendera. Del VI återkommer till implikationen: en funktionellt differentierad arkitektur kan strypa verkställande i en domän utan att svälta avkänning över hela linjen.

Dessa spakar verkar inom en gräns värd att explicitgöra, eftersom den begränsar vad verklighets‑eftersläpningen kan skyllas på. Med oförstärkta konsekvenser (\(g=1\)) och ingen exogen störning kan eftersläpningen inte växa alls: slingans eget verkställande uppfyller \(\tilde r_E \le \rho_{SL}\rho_{LE}\,r_S < r_S\), så ett systems oförstärkta handling förändrar alltid världen mindre än vad dess avkänning tog in. Verklighets‑eftersläpningen uppstår därför aldrig ur ren aktivitet. Den kräver en snabbt föränderlig värld (stort \(d\)), handling vars konsekvenser är förstärkta bortom sitt fotavtryck (\(g>1\)), eller avkänning som riktats mot ett mål medan handlingens konsekvenser ackumuleras oobserverat (§5.4). De två spakarnas asymmetri är motsvarande betingad: att sänka \(\tilde r_E\) lättar eftersläpningen endast när förstärkta konsekvenser driver den; mot en snabbt föränderlig värld tjänar endast tillförd avkänning, eller en gräns dragen för att utesluta vad som inte kan observeras.

## 2.2 Anpassningsflaskhalsteoremet

Genomströmningsuttrycket är ett nästlat minimum av positivt skalade stegtakter, och dess beteende följer omedelbart. **[R inom modellen.]**

> **Teorem (anpassningsflaskhals).** *Den effektiva adaptiva genomströmningen \(T_{\text{eff}}\) grindas av det bindande steget — det argument som uppnår minimum i uttrycket ovan. För varje steg \(i\) som inte är bindande, \(\partial T_{\text{eff}}/\partial r_i = 0\): kapacitet som tillförs ett icke‑bindande steg ökar inte slingans adaptiva takt. Den omvandlas istället till eftersläpning vid det ben som ligger omedelbart nedströms om den tillförda kapaciteten.*

Beviset är aritmetiken för minima: att höja varje argument i ett minimum utom det minsta lämnar minimum oförändrat, och det obearbetade överskottet — utsignalen från det förstärkta steget som det nedströms liggande steget inte kan absorbera — ackumuleras som köat arbete. Detta är den dynamiska motsvarigheten till Rapport V:s statiska resultat, och de två är dualer i sin aritmetik. Statiska arkitektoniska underskott *ackumuleras*: deras kostnader multipliceras, så att flera milda underskott tillsammans producerar allvarlig dysfunktion. Dynamiska adaptiva kapaciteter *flaskhalsar*: deras takter tar ett minimum, så att flera starka kapaciteter tillsammans producerar anpassning inte snabbare än den svagaste. Ackumulerade underskott och flaskhalsade kapaciteter är de två sätt på vilka delarna i en flerdelad arkitektur misslyckas med att vara oberoende. Minimum‑av‑takter‑strukturen i sig är inte ny — det är det delade innehållet i Liebigs lag, köteori och teorin om begränsningar (§1.4). Vad som är specifikt för detta papper anländer vid slutningsbenet (§2.4): pipelinen är inte bara seriell utan rekursiv, och rekursionen kan binda när inget omvandlingssteg är flaskhalsen.

En följdsats om allokering följer, och det är avsnittets enda designrelevanta påstående. Om man insisterar på en budgetram — en fast total kapacitet som ska fördelas över de tre stegen — maximeras \(T_{\text{eff}}\) inte av lika ansträngning utan av att utjämna de *effektivitetsskalade* stegtakterna, så att inget steg är bindande och inget svälts. Att höja ett minimum kräver att man höjer dess minsta argument; när argumenten väl är lika faller marginalavkastningen för varje enskilt steg till noll. Den precisa formen på den optimala allokeringen, och den takt med vilken avkastningen faller bort från balans, etableras i simulering (Del V) snarare än hävdas här, eftersom de beror på omvandlingseffektiviteterna och på störningsregimen.

De tre eftersläpningarna är de tre platser där slingan ackumulerar obearbetat arbete, en på varje ben:

- **informationseftersläpningen** \(B_I\), på benet Avkänna → Lära, när \(\rho_{SL} r_S > r_L\): observation anländer snabbare än den kan tolkas, och obearbetad data hopar sig — den strukturella formen av *analysparalys*;
- **innovationseftersläpningen** \(B_N\), på benet Lära → Verkställa, när \(\rho_{LE}\tilde r_L > r_E\): modellrevideringar anländer snabbare än de kan implementeras, och känt‑bra förändringar väntar — den strukturella formen av *permanent experimenterande*, där ett system kontinuerligt lär sig vad det ska göra och kontinuerligt misslyckas med att göra det;
- **verklighets‑eftersläpningen** \(B_R\), på benet Verkställa → Avkänna, när \(w > r_S\): världen förändras snabbare än den kan åter‑observeras, och modellen glider från den verklighet som systemets egen handling producerar — den strukturella formen av *rigiditet*, handling levererad snabbt och med tillförsikt på en föråldrad bild.

De tre är symmetriska som ackumulationer — var och en är obearbetat arbete som köar bakom ett steg vars takt överskrids — men de är inte symmetriska i mekanism, och asymmetrin bör anges tydligt. Informations- och innovationseftersläpningarna sitter bakom *omvandlingsben*: de matas genom en effektivitet \(\rho<1\), och de skulle i princip kunna lättas genom att höja det nedströms liggande stegets takt. Verklighets‑eftersläpningen sitter bakom *slutningsbenet*: den matas av ingen omvandling, endast av missanpassningen mellan hur snabbt systemet förändrar världen och hur snabbt det åter‑observerar den, och den kan inte lättas genom att höja någon nedströms takt — endast genom att höja \(r_S\) i förhållande till \(w\), vilket kan innebära att verkställa *mindre*, inte att avkänna mer. Detta är det formella innehållet i observationen att ett system kan vara för aktivt: bortom den punkt där \(w\) överstiger \(r_S\) accelererar ytterligare verkställande inte anpassningen; det accelererar ackumulationen av oobserverad verklighet.

## 2.3 Flaskhalsen i varietets‑termer

Resultatet kan omformuleras i seriens grundande valuta, vilket både förankrar det i Ashby och klargör att det inte tillför någon ny primitiv. **[IP]** Låt \(V_d\) vara den störningsvariation arkitekturen möter, netto av vad dess målfunktion når. Nödvändig variation måste bäras vid varje steg i slingan: avkänningssteget måste urskilja tillräckligt många tillstånd för att registrera \(V_d\); inlärningssteget måste behärska tillräcklig modell‑variation för att representera de distinktioner avkänningen levererar; verkställandesteget måste utöva tillräcklig aktuator‑variation för att realisera de revideringar inlärningen producerar. Flaskhalsteoremet är då påståendet att slingans adaptiva variation är den *minsta* av de tre stegvariationerna — systemet kan endast absorbera den störningsvariation dess svagaste steg kan bära, hur mycket variation de andra två än behärskar.

Detta är distinkt från Rapport IV, och distinktionen spelar roll för påståendet om ingen teoriinflation. Rapport IV fastställde *var* nödvändig variation måste finnas — vid kontaktpunkten, som en fråga om närhet. Detta papper fastställer hur nödvändig variation måste vara *balanserad över de tre process‑stegen i den adaptiva slingan*. Det ena är ett rumsligt påstående om variationens placering; det andra är ett strukturellt påstående om dess fördelning över avkänning, lärande och verkställande. De är olika axlar av samma Ashbyanska krav, och ingetdera inordnar det andra.

## 2.4 Livskraftströskeln

En flaskhals sätter den takt med vilken slingan anpassar sig. Huruvida den takten är *adekvat* beror på världen. Låt \(r_{\text{miljö}}\) vara den takt med vilken miljön invaliderar de parametrar kontrollantens modell följer — den strukturella glidningstakten, distinkt från störningstakten \(d\), vilken är variation den befintliga modellen redan rymmer. \(r_{\text{miljö}}\) är den takt med vilken modellen själv blir föråldrad. **[IP]** Livskraftsvillkoret är att slingan sluter sig snabbare än världen glider undan under den:

\[
T_{\text{eff}} > r_{\text{miljö}} \qquad \text{och} \qquad r_S \ge w.
\]

Det första villkoret kräver att den adaptiva genomströmningen överträffar strukturell glidning; det kopplar direkt till Rapport XIV:s persistenta excitation (modellen kan åter‑identifieras medan den glider endast om slingan fortsätter att snurra) och till Rapport IX:s övergångsbandbredd (slingan måste slutföra sin revidering innan fönstret att agera på den stängs). Det andra villkoret är det rekursionsspecifika: även en slinga som anpassar sig snabbare än miljön glider kommer att misslyckas om dess verkställande springer ifrån dess åter‑observation, eftersom verklighets‑eftersläpningen då växer utan gräns och systemet förlorar kontakt med konsekvenserna av sin egen handling.

De två villkoren interagerar genom det bindande steget. När avkänning är bindande rör sig \(T_{\text{eff}}\) med \(r_S\) och de två kollapsar mot varandra. När verkställande är bindande glider de isär, och detta är fallet värt att namnge: slingan kan anpassa sig snabbare än miljön glider — \(T_{\text{eff}} > r_{\text{miljö}}\) — och ändå ackumulera en verklighets‑eftersläpning, eftersom systemets egen aktivitet överträffar dess kapacitet att observera konsekvenserna. Ett sådant system är samtidigt effektivt och självförblindande: det möter varje test av responsivitet medan det förlorar kontakten med vad dess responser gör.

När något av villkoren överträds har misslyckandet den tidsliga signatur serien har dokumenterat upprepade gånger — tyst ackumulation bakom en dashboard som läser som frisk, följt av en framtvingad, allt‑på‑en‑gång uppgörelse när gapet inte längre kan bäras. Det finansiella systemet i §1.1, det krisdrivna lärandet i Rapport XIV, och hög‑ och lågkonjunkturfallen i Rapport VII är instanser av samma tröskel som överskridits.

Båda storheterna, \(r_{\text{miljö}}\) och \(w\), är omätta här, och pappret låtsas inte om annat. Livskraftsvillkoret anges i takter som kan resoneras om strukturellt men för vilka inget fältinstrument erbjuds — samma ärlighet som Rapport XI iakttog när den angav sin energilag i trohet och djup, som kan kodas, snarare än i politiskt kapital, som inte kan det.

## 2.5 Vad ramverket inte hävdar här

Tre gränser hör hemma i det formella avsnittet, eftersom var och en markerar en plats där ett frestande starkare påstående inte skulle vara understött.

Det är **inte en konserveringslag.** Ingenting konserveras över de tre stegen; de är inte fungibla utgifter som summerar till en konstant, och det finns ingen storhet som bara omfördelas mellan dem. Resultatet är en flaskhals och ett taktsmatchningsvillkor, inte partitionen av en fast total — och förslaget att triaden lyder under en konserveringsprincip, hur elegant det än vore, skulle importera en symmetri strukturen inte har.

Det vilar på **takter, inte en budget.** De bindande begränsningarna är bearbetningstakter satta av långsamt ackumulerade strukturella begåvningar — domänexpertis, institutionellt minne, etablerad tillit, leveranskapacitet — som pengar kan finansiera den gradvisa tillväxten av men inte omedelbart köpa. Detta är anledningen till att begränsningen överlever materiellt överflöd: ett system med obegränsad fiskal kapacitet kan ändå inte omvandla den till trovärdiga observatörer, identifierade modeller, eller en kultur som tolererar explorationens varians i en takt snabbare än dessa saker mognar. Seriens arkitektoniska inramning gäller här som på andra håll; gränsen är strukturell, inte finansiell.

Rekursionens **fulla stabilitetsdynamik är satta inom parentes.** Detta avsnitt definierar verklighets‑eftersläpningen som ett tillstånd och ger villkoret under vilket den ackumuleras, men det analyserar inte den slutna slingans dynamik som sådan — huruvida, under givna takter och fördröjningar, eftersläpningen konvergerar, oscillerar eller divergerar. Det är en andra ordningens fråga om stabiliteten hos en självreviderande kontrollant, och den skjuts upp medvetet; återkopplingsfördröjningen runt slutningsbenet sänker ytterligare den effektiva genomströmningen under det råa minimumet i §2.1, och formen på det beroendet uppvisas i simulering (Del V) snarare än hävdas här.

---
