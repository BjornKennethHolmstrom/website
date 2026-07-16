# §4 — Tre förtjänta resultat: den riktade kostnadsstrukturen

Kartan, granskad på sina egna villkor, misslyckas mestadels (§3). Resandet gör det inte. Detta avsnitt prissätter kostnaden för att reformera en faktorisering till att passa en annan regim och finner att reform inte alls är rörelse genom den beteendemässiga metriken — det är en riktad, icke-komponerande anpassningsprocess vars kostnader den symmetriska metriken inte kan representera. Resultaten är ordnade efter konfidens: en registrerad förutsägelse som *missade* sin tröskel men missade informativt (§4.1); artikelns ryggrad, att reformkostnad är asymmetrisk, heterotypad och icke-komponerande (§4.2, §4.4); och en robust effekt vars mekanism vi var noga med att inte överdriva (§4.3).

## 4.1 Beteendemässigt avstånd förutsäger reformkostnad — svagt, och bevisligen inte bättre

Den första frågan är om kartan duger till något: förutsäger beteendemässigt avstånd $d_{\mathrm{beh}}(M_A, M_B)$ reformkostnad $C(M_A \Rightarrow R_B)$? Om det inte gör det alls är geometrin dekorativ och artikeln är över. Om det gör det perfekt tillför kostnaden inget till avståndet. Den registrerade förutsägelsen var att korrelationen skulle klara 0,50.

**Det gjorde den inte. ρ = 0,47, riktad, över tio frön — under ribban.** Vi rapporterar detta som en misslyckad förutsägelse, inte ett mjukt godkännande, eftersom serien inte avrundar nära-missar uppåt.

Men missen har innehåll, och innehållet är anledningen till att den arkiveras bland resultaten snarare än bland misslyckandena. Vid sidan av den riktade korrelationen registrerade vi ett **symmetriskt riktmärke**: korrelationen av beteendemässigt avstånd mot den *symmetriserade* kostnaden, $\tfrac{1}{2}[C(M_A\Rightarrow R_B) + C(M_B\Rightarrow R_A)]$. Det riktmärket är **0,66**. Den riktade korrelationen ligger väl därunder — och gapet mellan 0,47 och 0,66 är inte brus. Det är asymmetrin från §4.2.

Här är logiken, eftersom det är det bärande draget i avsnittet. Beteendemässigt avstånd är symmetriskt: $d_{\mathrm{beh}}(M_A, M_B) = d_{\mathrm{beh}}(M_B, M_A)$. En symmetrisk storhet kan inte, ens i princip, perfekt följa en asymmetrisk — den måste tilldela samma värde till båda riktningarna av en reform vars verkliga kostnader skiljer sig åt. Beteendemässigt avstånd korrelerar starkare med den symmetriserade kostnaden än med den riktade kostnaden, och når nästan det symmetriserade riktmärket. Vi påstår inte att detta riktmärke är ett universellt tak för varje möjlig symmetrisk prediktor — vi mätte ett tal för ett avstånd, och bevisade ingen gräns. Men mönstret är exakt vad riktningsbundenhet skulle producera: en symmetrisk prediktor begränsas av den del av kostnaden som symmetrin kastar bort, och den delen är stor här. Så den korrekta läsningen är inte "geometrin förutsäger kostnad svagt." Det är:

> **Beteendemässigt avstånd förutsäger reformkostnad ungefär lika bra som det förutsäger den symmetriska delen av den kostnaden — och vad det inte kan förutsäga är den riktade delen, eftersom avstånd är symmetriskt och kostnaden inte är det.** Den missade tröskeln är inte bara en svag karta; den är förenlig med att riktningsbundenhet begränsar vad någon symmetrisk prediktor kan göra, och visar sig som ett gap mellan den riktade korrelationen och det symmetriska riktmärket.

`[R inom modellen]`, registrerad förutsägelse **missad**, rapporterad som en miss vars magnitud i sig är evidens för §4.2.

## 4.2 Reformkostnad är asymmetrisk, heterotypad och icke-komponerande — så den är inte ett avstånd

Artikelns centrala resultat är inte asymmetri ensamt; många anpassningskostnader är asymmetriska. Det är konjunktionen av tre egenskaper, och de är värda att separera eftersom de utesluter successivt mer.

**Påstående A — reformkostnad är starkt asymmetrisk.** *Empiriskt.* Beteendemässigt avstånd är symmetriskt till följd av konstruktionen; reformkostnad, mätt riktat mot ett kapacitetsmatchat konvergerat golv, är det inte:

> Medianriktad asymmetri $|C(M_A\Rightarrow R_B) - C(M_B\Rightarrow R_A)| / \max(\cdot)$ = **0,76**, över den fulla körningen, med censurering nära noll.

Det är inte en liten avvikelse från symmetri; det är nästan hela vägen till maximal. Vad en institution kostar att lämna är, typiskt sett, inte alls vad den kostar att återvända till.

*En reservation som artikeln insisterar på, eftersom vi fick fel på den en gång.* Den allra första versionen av mätningen producerade en asymmetri på 0,79 — och den var en artefakt. Den versionen mätte kostnad mot *målmodellens* konvergerade förlustvärde, vilket gjorde golvet till en egenskap hos målets kapacitet snarare än hos målets regim; en högkapacitetskälla som klarade en lågkapacitetsmåls golv gratis producerade skenbara enkelriktade nollor, och "asymmetrin" var kapacitetsskillnad i förklädnad (Appendix B). Den 0,76 som rapporteras här är på det korrigerade, kapacitetsmatchade golvet, där en ny modell av *källans egen arkitektur* tränas till konvergens på målregimen. Asymmetrin överlever korrigeringen. Lärdomen — att en riktad kostnad endast är så meningsfull som det golv den mäts mot — är anledningen till att tre versioner av mätningen existerar och alla rapporteras.

**Påstående B — reformkostnad är inte ett avstånd på mängden av faktoriseringar överhuvudtaget.** *Formellt.* Asymmetri ensamt skulle lämna dörren öppen för en *kvasimetrik* — ett riktat avstånd som fortfarande komponerar via en riktad triangelolikhet. Den dörren stängs av två ytterligare fakta, fastställda i §4.4: kostnadens ändpunkter är av olika slag ($C$ avbildar en *modell* på en *regim*, inte en punkt på en punkt), och kostnaden komponerar inte som en sekvens av tillståndsövergångar (att betala för att nå en regim placerar dig inte vid en modell från vilken nästa etapp är definierad). Så objektet är inte en kvasimetrik heller.

Konsekvensen, angiven i rätt styrka — inte "asymmetrisk, därför inte metrisk", utan:

> Reformkostnad är **asymmetrisk, heterotypad och icke-komponerande**; därför är den varken en metrik eller en kvasimetrik över mängden av faktoriseringar. Beteendeskillnad är en metrik på modeller; reform är en riktad anpassningsprocess mellan modeller och regimer; och det andra är inte rörelse genom det första.

Styrningsläsningen, hållen som institutionellt plausibel:

> **Reform är riktad.** Kostnaden för att omvandla institutionell form A till form B är inte kostnaden för att omvandla B till A. En reform och dess återställning är inte inversa operationer av lika svårighet — nedmontering och återuppbyggnad prissätts separat, och priset för att återvända till en tidigare form är inte priset för att ha lämnat den. Detta tillhandahåller en *mätt analog* till det stigberoende som den institutionella litteraturen länge har hävdat; det specifika bidraget är inte att reform är stigberoende utan att **symmetrisk beteendeskillnad och asymmetrisk anpassningskostnad glider isär, och kan mätas glida isär.** `[IP]`

## 4.3 Reform iscensätts via målets grannskap — och detta är inte en geodet

Att rutta en reform genom ett mellansteg sänker dess kostnad. Effekten är robust: över den fulla körningen hjälper omvägar i majoriteten av övergångarna, med bred marginal, och — kritiskt — **vid lika beräkningsbudget**. Den naturliga oron är att en omväg helt enkelt köper mer träning: två omträningsetapper istället för en. En registrerad **noll-omväg-kontroll** utesluter detta. Att rutta en regulator genom dess *egen hemregim* före målet — en etapp som inte kostar något men konsumerar en full omträningsbudget — hjälper något (det är den rena beräkningseffekten, ungefär 20%), men att rutta genom den *rätta andra* mellanhanden slår till och med det, med en ytterligare marginal som är vägstruktur, inte gradientsteg. Och en **dåligt** vald mellanhand är sämre än ingen omväg alls: spridningen mellan den bästa och sämsta mellanhanden är större än hela effekten, och den sämsta verkliga omvägen förlorar mot nollan i den stora majoriteten av par.

Så: rutter spelar roll, bra rutter hjälper, dåliga rutter stjälper. Den uppenbara förklaringen är **geodetisk** — den hjälpsamma mellanhanden ligger *mellan* källa och mål, och den första etappen fullbordar delvis resan. Den uppenbara förklaringen är fel, och en registrerad kontroll visar att den är fel.

**Kontrollen.** Håll arkitekturen fast (vilket avlägsnar kapacitetsförväxlingen helt) och kör den fulla kuben av källa × mellanhand × destination. Fråga sedan den enda fråga som särskiljer en väg från en läroplan: **beror den bästa mellanhanden på var reformen startade?** En äkta geodet mellan A och B måste bero på båda ändpunkterna. Om den bästa mellanhanden istället bara beror på *destinationen*, då är den inte "mellan" någonting — den är helt enkelt en bra plats att vara *nära B*.

Den bästa mellanhanden beror på källan i **25%** av fallen. I tre destinationer av fyra ruttar varje källa — varifrån den än började — genom samma mellanhand, och den mellanhanden är destinationsens egen nära-granne.

> **Mekanismen är destinationsnära iscensättning, inte en geodet.** En reform når sitt mål billigast genom att först nå målets beteendemässiga *grannskap* — en sned ansats slår ett direkt språng — och den billigaste vägpunkten bestäms nästan helt av vart reformen är på väg, knappast alls av var den började. `[R inom modellen]`, effekt registrerad och robust; mekanism post‑hoc och flaggad.

**Varför §4.3 också är en metodologisk not.** Den automatiserade analysen, körd först, skrev ut en dom om *geodet* — på en inom-cell-väglängdskorrelation på exakt 1,000. Den perfekta korrelationen var en småsampelartefakt: med fyra regimer lämnar fast källa och destination tre kandidatmellanhänder, och en rangkorrelation på tre punkter är nästan kvantiserad. Eftersom vi misstrodde ett alltför rent resultat, omberäknade vi poolat (korrelation 0,31, väl under den registrerade geodetribban) och körde sedan källberoendetestet, som gav det verkliga svaret. Den registrerade domen hade rätt i att hålla inne ett rent mekanismpåstående och fel i sin automatiserade utskrift, och vi rapporterar båda. Detta är det andra tillfället i artikeln där ett misstänkt perfekt tal visade sig degenererat (det första var §3.3:s nära-träd-betweenness), och återkomsten är värd att ange som en varning: **ett automatiserat godkännande på en onaturligt ren statistik förtjänar granskningen av ett misslyckande.**

## 4.4 Varför triangelolikheten inte bara är bruten utan inte formulerbar

Från kantkostnader kan man beräkna, för tripler, huruvida $C(M_A\Rightarrow R_B)$ överstiger $C(M_A\Rightarrow R_C) + C(M_C\Rightarrow R_B)$, och finna "brott" i ungefär en fjärdedel av triplerna. Det är frestande att rapportera detta som *triangelolikheten är bruten*, vilket vore ett levande sätt att säga att objektet är icke-metriskt. **Vi avstår från det, eftersom påståendet inte är välställt, och att säga varför är den skarpaste formen av artikelns centrala påstående.**

Triangelolikheten förutsätter att betalningen av $C(M_A\Rightarrow R_C)$ *producerar den input som den andra etappen kräver* — att du efter den första etappen håller en modell vid C, från vilken den andra etappen kostar $C(M_C\Rightarrow R_B)$. Det gör den inte. En reformkostnad på noll från $M_A$ till $R_C$ betyder inte att $M_A$ *blev* $M_C$. Det betyder att $M_A$ redan *presterade på $M_C$:s nivå* på $R_C$:s uppgift. Prestandaparitet är inte identitet. Efter omträning av $M_A$ mot $R_C$ håller du någon modell $M_A'$ som beter sig som $M_C$ på $R_C$ men inte är $M_C$ och inte behöver bete sig som den någon annanstans — så den andra etappens kostnad är $C(M_A' \Rightarrow R_B)$, en empirisk storhet som inte är $C(M_C\Rightarrow R_B)$, och de två tabellerade kanterna komponerar inte.

Mer fundamentalt är kanterna av olika slag. $C$ löper från en **modell** till en **regim**. För att kedja två sådana kanter enligt triangelolikhetens syntax skulle du behöva att den förstas huvud (en regim) är den andras svans (en modell), och de är inte samma typ av objekt. Det finns inget gemensamt rum i vilket $M_A$, $R_B$ och $R_C$ alla lever som punkter och olikheten är ett påstående om dem.

> **Reformprocessen är inte ett metriskt rum med en bruten triangelolikhet. Det är inte en struktur i vilken triangelolikheten är formulerbar.** Avstånd lever mellan modeller; kostnad löper från modeller till regimer; de två bebor inte ett enda objekt. `[R]`

Den återanvändbara lärdomen, som är den mest transporterbara saken i artikeln vid sidan av §3.2:

> **Kompositionella lagar kräver kompositionella operationer, inte bara kompatibelt utseende index.** En numerisk olikhet är inte meningsfull bara för att tre uppmätta tal kan placeras i dess syntax. Innan man frågar om $C(A,C) + C(C,B) \geq C(A,B)$, måste man kontrollera att operationen som producerar den första kostnaden ger det objekt som den andra kostnaden är definierad på. Här gör den inte det, och ingen mängd tabellering av tripler reparerar det.

Detta är anledningen till att §4.2:s Påstående B anges som "inte en metrik eller kvasimetrik" snarare än "ett rum med en asymmetrisk metrik." Dessa svagare fraseringar medger en kompositionell struktur som objektet inte har. Den ärliga karakteriseringen är att beteendemässigt avstånd är en metrik på en mängd (modeller), reformkostnad är en riktad, icke-komponerande relation mellan två mängder av olika slag (modeller och regimer), och systerartikelns ursprungliga hopp — en enda geometri i vilken reform är rörelse — sammanblandade dem. §5 ger objektet en preliminär positiv form och erkänner hur mycket av dess kalkyl som förblir öppen.# §4 — Tre förtjänta resultat: den riktade kostnadsstrukturen

Kartan, granskad på sina egna villkor, misslyckas mestadels (§3). Resandet gör det inte. Detta avsnitt prissätter kostnaden för att reformera en faktorisering till att passa en annan regim och finner att reform inte alls är rörelse genom den beteendemässiga metriken — det är en riktad, icke-komponerande anpassningsprocess vars kostnader den symmetriska metriken inte kan representera. Resultaten är ordnade efter konfidens: en registrerad förutsägelse som *missade* sin tröskel men missade informativt (§4.1); artikelns ryggrad, att reformkostnad är asymmetrisk, heterotypad och icke-komponerande (§4.2, §4.4); och en robust effekt vars mekanism vi var noga med att inte överdriva (§4.3).

## 4.1 Beteendemässigt avstånd förutsäger reformkostnad — svagt, och bevisligen inte bättre

Den första frågan är om kartan duger till något: förutsäger beteendemässigt avstånd $d_{\mathrm{beh}}(M_A, M_B)$ reformkostnad $C(M_A \Rightarrow R_B)$? Om det inte gör det alls är geometrin dekorativ och artikeln är över. Om det gör det perfekt tillför kostnaden inget till avståndet. Den registrerade förutsägelsen var att korrelationen skulle klara 0,50.

**Det gjorde den inte. ρ = 0,47, riktad, över tio frön — under ribban.** Vi rapporterar detta som en misslyckad förutsägelse, inte ett mjukt godkännande, eftersom serien inte avrundar nära-missar uppåt.

Men missen har innehåll, och innehållet är anledningen till att den arkiveras bland resultaten snarare än bland misslyckandena. Vid sidan av den riktade korrelationen registrerade vi ett **symmetriskt riktmärke**: korrelationen av beteendemässigt avstånd mot den *symmetriserade* kostnaden, $\tfrac{1}{2}[C(M_A\Rightarrow R_B) + C(M_B\Rightarrow R_A)]$. Det riktmärket är **0,66**. Den riktade korrelationen ligger väl därunder — och gapet mellan 0,47 och 0,66 är inte brus. Det är asymmetrin från §4.2.

Här är logiken, eftersom det är det bärande draget i avsnittet. Beteendemässigt avstånd är symmetriskt: $d_{\mathrm{beh}}(M_A, M_B) = d_{\mathrm{beh}}(M_B, M_A)$. En symmetrisk storhet kan inte, ens i princip, perfekt följa en asymmetrisk — den måste tilldela samma värde till båda riktningarna av en reform vars verkliga kostnader skiljer sig åt. Beteendemässigt avstånd korrelerar starkare med den symmetriserade kostnaden än med den riktade kostnaden, och når nästan det symmetriserade riktmärket. Vi påstår inte att detta riktmärke är ett universellt tak för varje möjlig symmetrisk prediktor — vi mätte ett tal för ett avstånd, och bevisade ingen gräns. Men mönstret är exakt vad riktningsbundenhet skulle producera: en symmetrisk prediktor begränsas av den del av kostnaden som symmetrin kastar bort, och den delen är stor här. Så den korrekta läsningen är inte "geometrin förutsäger kostnad svagt." Det är:

> **Beteendemässigt avstånd förutsäger reformkostnad ungefär lika bra som det förutsäger den symmetriska delen av den kostnaden — och vad det inte kan förutsäga är den riktade delen, eftersom avstånd är symmetriskt och kostnaden inte är det.** Den missade tröskeln är inte bara en svag karta; den är förenlig med att riktningsbundenhet begränsar vad någon symmetrisk prediktor kan göra, och visar sig som ett gap mellan den riktade korrelationen och det symmetriska riktmärket.

`[R inom modellen]`, registrerad förutsägelse **missad**, rapporterad som en miss vars magnitud i sig är evidens för §4.2.

## 4.2 Reformkostnad är asymmetrisk, heterotypad och icke-komponerande — så den är inte ett avstånd

Artikelns centrala resultat är inte asymmetri ensamt; många anpassningskostnader är asymmetriska. Det är konjunktionen av tre egenskaper, och de är värda att separera eftersom de utesluter successivt mer.

**Påstående A — reformkostnad är starkt asymmetrisk.** *Empiriskt.* Beteendemässigt avstånd är symmetriskt till följd av konstruktionen; reformkostnad, mätt riktat mot ett kapacitetsmatchat konvergerat golv, är det inte:

> Medianriktad asymmetri $|C(M_A\Rightarrow R_B) - C(M_B\Rightarrow R_A)| / \max(\cdot)$ = **0,76**, över den fulla körningen, med censurering nära noll.

Det är inte en liten avvikelse från symmetri; det är nästan hela vägen till maximal. Vad en institution kostar att lämna är, typiskt sett, inte alls vad den kostar att återvända till.

*En reservation som artikeln insisterar på, eftersom vi fick fel på den en gång.* Den allra första versionen av mätningen producerade en asymmetri på 0,79 — och den var en artefakt. Den versionen mätte kostnad mot *målmodellens* konvergerade förlustvärde, vilket gjorde golvet till en egenskap hos målets kapacitet snarare än hos målets regim; en högkapacitetskälla som klarade en lågkapacitetsmåls golv gratis producerade skenbara enkelriktade nollor, och "asymmetrin" var kapacitetsskillnad i förklädnad (Appendix B). Den 0,76 som rapporteras här är på det korrigerade, kapacitetsmatchade golvet, där en ny modell av *källans egen arkitektur* tränas till konvergens på målregimen. Asymmetrin överlever korrigeringen. Lärdomen — att en riktad kostnad endast är så meningsfull som det golv den mäts mot — är anledningen till att tre versioner av mätningen existerar och alla rapporteras.

**Påstående B — reformkostnad är inte ett avstånd på mängden av faktoriseringar överhuvudtaget.** *Formellt.* Asymmetri ensamt skulle lämna dörren öppen för en *kvasimetrik* — ett riktat avstånd som fortfarande komponerar via en riktad triangelolikhet. Den dörren stängs av två ytterligare fakta, fastställda i §4.4: kostnadens ändpunkter är av olika slag ($C$ avbildar en *modell* på en *regim*, inte en punkt på en punkt), och kostnaden komponerar inte som en sekvens av tillståndsövergångar (att betala för att nå en regim placerar dig inte vid en modell från vilken nästa etapp är definierad). Så objektet är inte en kvasimetrik heller.

Konsekvensen, angiven i rätt styrka — inte "asymmetrisk, därför inte metrisk", utan:

> Reformkostnad är **asymmetrisk, heterotypad och icke-komponerande**; därför är den varken en metrik eller en kvasimetrik över mängden av faktoriseringar. Beteendeskillnad är en metrik på modeller; reform är en riktad anpassningsprocess mellan modeller och regimer; och det andra är inte rörelse genom det första.

Styrningsläsningen, hållen som institutionellt plausibel:

> **Reform är riktad.** Kostnaden för att omvandla institutionell form A till form B är inte kostnaden för att omvandla B till A. En reform och dess återställning är inte inversa operationer av lika svårighet — nedmontering och återuppbyggnad prissätts separat, och priset för att återvända till en tidigare form är inte priset för att ha lämnat den. Detta tillhandahåller en *mätt analog* till det stigberoende som den institutionella litteraturen länge har hävdat; det specifika bidraget är inte att reform är stigberoende utan att **symmetrisk beteendeskillnad och asymmetrisk anpassningskostnad glider isär, och kan mätas glida isär.** `[IP]`

## 4.3 Reform iscensätts via målets grannskap — och detta är inte en geodet

Att rutta en reform genom ett mellansteg sänker dess kostnad. Effekten är robust: över den fulla körningen hjälper omvägar i majoriteten av övergångarna, med bred marginal, och — kritiskt — **vid lika beräkningsbudget**. Den naturliga oron är att en omväg helt enkelt köper mer träning: två omträningsetapper istället för en. En registrerad **noll-omväg-kontroll** utesluter detta. Att rutta en regulator genom dess *egen hemregim* före målet — en etapp som inte kostar något men konsumerar en full omträningsbudget — hjälper något (det är den rena beräkningseffekten, ungefär 20%), men att rutta genom den *rätta andra* mellanhanden slår till och med det, med en ytterligare marginal som är vägstruktur, inte gradientsteg. Och en **dåligt** vald mellanhand är sämre än ingen omväg alls: spridningen mellan den bästa och sämsta mellanhanden är större än hela effekten, och den sämsta verkliga omvägen förlorar mot nollan i den stora majoriteten av par.

Så: rutter spelar roll, bra rutter hjälper, dåliga rutter stjälper. Den uppenbara förklaringen är **geodetisk** — den hjälpsamma mellanhanden ligger *mellan* källa och mål, och den första etappen fullbordar delvis resan. Den uppenbara förklaringen är fel, och en registrerad kontroll visar att den är fel.

**Kontrollen.** Håll arkitekturen fast (vilket avlägsnar kapacitetsförväxlingen helt) och kör den fulla kuben av källa × mellanhand × destination. Fråga sedan den enda fråga som särskiljer en väg från en läroplan: **beror den bästa mellanhanden på var reformen startade?** En äkta geodet mellan A och B måste bero på båda ändpunkterna. Om den bästa mellanhanden istället bara beror på *destinationen*, då är den inte "mellan" någonting — den är helt enkelt en bra plats att vara *nära B*.

Den bästa mellanhanden beror på källan i **25%** av fallen. I tre destinationer av fyra ruttar varje källa — varifrån den än började — genom samma mellanhand, och den mellanhanden är destinationsens egen nära-granne.

> **Mekanismen är destinationsnära iscensättning, inte en geodet.** En reform når sitt mål billigast genom att först nå målets beteendemässiga *grannskap* — en sned ansats slår ett direkt språng — och den billigaste vägpunkten bestäms nästan helt av vart reformen är på väg, knappast alls av var den började. `[R inom modellen]`, effekt registrerad och robust; mekanism post‑hoc och flaggad.

**Varför §4.3 också är en metodologisk not.** Den automatiserade analysen, körd först, skrev ut en dom om *geodet* — på en inom-cell-väglängdskorrelation på exakt 1,000. Den perfekta korrelationen var en småsampelartefakt: med fyra regimer lämnar fast källa och destination tre kandidatmellanhänder, och en rangkorrelation på tre punkter är nästan kvantiserad. Eftersom vi misstrodde ett alltför rent resultat, omberäknade vi poolat (korrelation 0,31, väl under den registrerade geodetribban) och körde sedan källberoendetestet, som gav det verkliga svaret. Den registrerade domen hade rätt i att hålla inne ett rent mekanismpåstående och fel i sin automatiserade utskrift, och vi rapporterar båda. Detta är det andra tillfället i artikeln där ett misstänkt perfekt tal visade sig degenererat (det första var §3.3:s nära-träd-betweenness), och återkomsten är värd att ange som en varning: **ett automatiserat godkännande på en onaturligt ren statistik förtjänar granskningen av ett misslyckande.**

## 4.4 Varför triangelolikheten inte bara är bruten utan inte formulerbar

Från kantkostnader kan man beräkna, för tripler, huruvida $C(M_A\Rightarrow R_B)$ överstiger $C(M_A\Rightarrow R_C) + C(M_C\Rightarrow R_B)$, och finna "brott" i ungefär en fjärdedel av triplerna. Det är frestande att rapportera detta som *triangelolikheten är bruten*, vilket vore ett levande sätt att säga att objektet är icke-metriskt. **Vi avstår från det, eftersom påståendet inte är välställt, och att säga varför är den skarpaste formen av artikelns centrala påstående.**

Triangelolikheten förutsätter att betalningen av $C(M_A\Rightarrow R_C)$ *producerar den input som den andra etappen kräver* — att du efter den första etappen håller en modell vid C, från vilken den andra etappen kostar $C(M_C\Rightarrow R_B)$. Det gör den inte. En reformkostnad på noll från $M_A$ till $R_C$ betyder inte att $M_A$ *blev* $M_C$. Det betyder att $M_A$ redan *presterade på $M_C$:s nivå* på $R_C$:s uppgift. Prestandaparitet är inte identitet. Efter omträning av $M_A$ mot $R_C$ håller du någon modell $M_A'$ som beter sig som $M_C$ på $R_C$ men inte är $M_C$ och inte behöver bete sig som den någon annanstans — så den andra etappens kostnad är $C(M_A' \Rightarrow R_B)$, en empirisk storhet som inte är $C(M_C\Rightarrow R_B)$, och de två tabellerade kanterna komponerar inte.

Mer fundamentalt är kanterna av olika slag. $C$ löper från en **modell** till en **regim**. För att kedja två sådana kanter enligt triangelolikhetens syntax skulle du behöva att den förstas huvud (en regim) är den andras svans (en modell), och de är inte samma typ av objekt. Det finns inget gemensamt rum i vilket $M_A$, $R_B$ och $R_C$ alla lever som punkter och olikheten är ett påstående om dem.

> **Reformprocessen är inte ett metriskt rum med en bruten triangelolikhet. Det är inte en struktur i vilken triangelolikheten är formulerbar.** Avstånd lever mellan modeller; kostnad löper från modeller till regimer; de två bebor inte ett enda objekt. `[R]`

Den återanvändbara lärdomen, som är den mest transporterbara saken i artikeln vid sidan av §3.2:

> **Kompositionella lagar kräver kompositionella operationer, inte bara kompatibelt utseende index.** En numerisk olikhet är inte meningsfull bara för att tre uppmätta tal kan placeras i dess syntax. Innan man frågar om $C(A,C) + C(C,B) \geq C(A,B)$, måste man kontrollera att operationen som producerar den första kostnaden ger det objekt som den andra kostnaden är definierad på. Här gör den inte det, och ingen mängd tabellering av tripler reparerar det.

Detta är anledningen till att §4.2:s Påstående B anges som "inte en metrik eller kvasimetrik" snarare än "ett rum med en asymmetrisk metrik." Dessa svagare fraseringar medger en kompositionell struktur som objektet inte har. Den ärliga karakteriseringen är att beteendemässigt avstånd är en metrik på en mängd (modeller), reformkostnad är en riktad, icke-komponerande relation mellan två mängder av olika slag (modeller och regimer), och systerartikelns ursprungliga hopp — en enda geometri i vilken reform är rörelse — sammanblandade dem. §5 ger objektet en preliminär positiv form och erkänner hur mycket av dess kalkyl som förblir öppen.

---
