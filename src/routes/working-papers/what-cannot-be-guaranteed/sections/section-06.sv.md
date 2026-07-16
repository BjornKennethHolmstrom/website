# §6 — Den tredje gränsen: ingen arkitektur är rätt utan en värld

## 6.1 Frågan

De två första gränserna rörde garanti: huruvida ett system kan certifiera sig självt inifrån (§3), huruvida en observatör kan utvärdera en reform utifrån (§5). Den tredje rör själva designen, och det är frågan som föregår båda: *finns det en arkitektur som är rätt oavsett vilken värld man befinner sig i?*

Frågan är inte overksam. Nästan varje substantiellt påstående i politisk argumentation har denna form. Att demokrati överträffar autokrati; att marknader överträffar planering; att decentralisering överträffar centralisering, eller tvärtom; att federalism är en överlägsen behållare för pluralism — vart och ett uttalas som om det vore en egenskap hos arkitekturen. Detta avsnitt visar att ingen sådan egenskap existerar, att teoremet som visar det är nästan innehållslöst, och att innehållslösheten är där det användbara innehållet finns.

## 6.2 Teoremet

Modellera en institution som en adaptiv algoritm $A$ som avbildar historier av miljötillstånd till institutionella responser — policyer, regeländringar, omfaktoriseringar — med syftet att hålla systemet innanför en livskraftighetsmängd $V$. Modellera en miljö $E$ som en avbildning från institutionens handlingshistorik till nästa tillstånd; rummet $\mathcal{E}$ av miljöer är mängden av alla sådana avbildningar. Fixera ett prestandamått — förväntad andel tid inom $V$, eller kumulativ kostnad för anpassning, eller vilken funktion av trajektorian som helst.

**Teorem (No Free Lunch för institutioner, [R]).** *Medelvärdesbildat likformigt över $\mathcal{E}$ har två godtyckliga institutionella arkitekturer $A$ och $B$ identisk förväntad prestanda. Följaktligen finns det ingen $A^\ast$ som svagt dominerar varje alternativ över hela $\mathcal{E}$ och strikt dominerar på åtminstone en medlem.*

Beviset följer den normala NFL-mallen. För varje $E$ där $A$ överträffar $B$, konstruera spegelmiljön $E'$ genom att permutera de utfall som följer av $A$:s föredragna handlingar med dem som följer av $B$:s. Eftersom $\mathcal{E}$ innehåller *varje* avbildning är $E'$ en medlem. Då är $A$:s prestanda på $E$ lika med $B$:s på $E'$, och omvänt; det likformiga medelvärdet är oförändrat. Varje miljö i vilken en arkitektur utmärker sig betalas av en miljö i vilken den är katastrofal, och liggaren sluts på noll.

## 6.3 Teoremet är närmast innehållslöst, och att säga det är poängen

Beviset har en bärande hypotes som är falsk om världen: att $\mathcal{E}$ är sluten under de relevanta permutationerna, och att medelvärdet tas likformigt över det. Ingetdera håller. Verkliga miljöer är inte en ostrukturerad mängd godtyckliga avbildningar; de formas av fysik, biologi, geografi, teknologi, demografi och historiens ackumulerade stigberoende. Den mängd världar som en europeisk välfärdsstat plausibelt kan möta under nästa årtionde är inte sluten under permutation av sin utfallsstruktur, och ingen institution har någonsin konfronterat ett likformigt drag från rummet av alla möjliga världar.

Ett teorem vars kraft vilar på en likformig fördelning över ett ostrukturerat rum är ett teorem om fördelningen. **Dess innehåll är inte "alla institutioner är lika"; dess innehåll är "om du vägrar säga något om världen, får du inte säga något om arkitekturen."** Det är en begränsning av argument, inte en upptäckt om styrning, och artikeln rapporterar det som en sådan.

Detta är andra gången serien flaggar ett formellt giltigt resultat som grunt — Rapport XX gjorde detsamma för Ashbys lag, som är ett äkta fackteorem och mycket nära en definition när begränsad representation väl medges. Mönstret är nu tillräckligt explicit för att uttalas som en metodologisk observation om hela det gränsteoretiska registret: **i denna litteratur är de resultat som har bevis de resultat som har minst innehåll, och resultatet med innehåll — certifieringsoförmågan, §3 — har inget bevis.** Den inversionen anges i §1.4 och är inte en defekt hos föreliggande artikel utan ett särdrag hos terrängen.

## 6.4 Kontrapositionen, som är hela innehållet

Vänd på teoremet och något värt att ha framträder. Om ingen arkitektur är överlägsen utan en miljöklass, då gäller:

> **Varje påstående om arkitektonisk överlägsenhet är ett förtäckt påstående om miljöklassen.**

Påståendet görs oavsett om det uttalas. När en reformatör argumenterar för att decentralisering kommer att förbättra serviceleveransen, handlar argumentet inte *om* decentralisering; det handlar om en värld där lokal information är rik, lokal kapacitet är tillräcklig, preferenser är heterogena och samordningsexternaliteter är svaga. Dessa fyra villkor är det faktiska innehållet i förslaget, och de är vanligtvis den del som förblir outtalad — inte av ond tro, utan för att arkitekturen är synlig och antagandet om miljöklassen inte är det.

Detta ger avsnittets designprincip, och det är den första akten av institutionell ingenjörskonst snarare än en förfining av den:

> **Namnge klassen.** Innan en arkitektur föreslås, ange den klass av miljöer under vilken den förväntas prestera, prestandakriteriet och den antagna störningsfördelningen. Ett arkitekturförslag som inte namnger sin klass är inte ett blygsamt förslag; det är ett obegränsat sådant.

Eller, i den kompakta form som utforskningen producerade och som vi behåller:

> *Varje konstitution är ett vad på världens form; ingen konstitution vinner varje vad.*

**[IP]** för den institutionella läsningen. Teoremet är **[R]** och, som §6.3 säger, tunt.

## 6.5 Den dåliga läsningen, blockerad

No Free Lunch missbrukas oftare än det används, och alltid i samma riktning:

> *Eftersom ingen arkitektur är universellt optimal, är alla arkitekturer lika giltiga.*

Detta följer inte, och teoremet säger nästan motsatsen. NFL fastställer att arkitekturkvalitet är **betingad** — vilket är ett krav på att betingelserna anges, inte en licens att sluta ange dem. Relativism är vad man får när man tar teoremets antecedent (en likformig fördelning över ett ostrukturerat miljörum) som en beskrivning av världen snarare än som den reductio det är. Ingen lever under en likformig fördelning. I samma ögonblick som miljöklassen begränsas — och det gör den alltid, av fysiken om inte annat — återuppstår dominansrelationer, och kan argumenteras om på sakliga grunder.

**Begränsade klasser kan ha och har dominatorer. [R]** I en miljöklass som karaktäriseras av låg nyhet, stabila uppgifter, tillförlitlig information och hög efterlevnad är en hierarkisk byråkrati inte bara försvarbar utan sannolikt dominant: dess långsamma återkopplingsslinga kostar ingenting när världen inte rör sig, och dess enhetlighet köper läsbarhet och legitimitet. I en klass som karaktäriseras av hög nyhet, spridd lokal information och heterogena betingelser är samma arkitektur dominerad, och den långsamhet som inte kostade något tidigare är nu hela misslyckandet. De två påståendena är förenliga, och den oförenlighet människor föreställer sig mellan dem är en artefakt av att utelämna klassen ur påståendet.

Den ärliga sammanfattningen är inte att inget kan sägas, utan att inget kan sägas *ovillkorligt*:

> Institutioner är inte universellt goda eller dåliga; de är passande eller misspassande till miljöklasser. Och varje institutionell design kodar en hypotes om världen — så när världen byter klass, blir designens dygder dess misslyckandemoder, utan att en enda regel har ändrats.

Den sista meningen är den som gör styrningsarbete, och det är värt att notera att den inte alls är ett påstående om misslyckande. Det är ett påstående om hur en välfungerande institution misslyckas: inte genom att degraderas, inte genom korruption, inte genom någon intern händelse som en övervakare skulle fånga, utan genom att världen rör sig undan ett vad som var korrekt när det placerades.

## 6.6 Var detta sitter gentemot resten av serien

**Gentemot Ashby (Rapport XX).** Ashbys lag kräver att regulatorn matchar variationen hos de störningar den möter. NFL tillhandahåller den saknade kvantorn: *vilka* störningar. Nödvändig variation är inte ett fast mål utan ett mål indexerat av en miljöklass, och en regulator som är korrekt matchad till en klass är undervarierad för en annan. De två resultaten sammansätts: Ashby säger att du måste ha tillräckligt många distinktioner; NFL säger att "tillräckligt" inte är en egenskap hos regulatorn.

**Gentemot Goodhart (Rapport XX).** Goodhart biter när optimeraren kan nå en målrelevant dimension som dess proxyvariabel förkastar. Huruvida en given dimension är målrelevant är ett faktum om miljöklassen. Ett mått som är säkert förlustbringande i en klass — eftersom den förkastade dimensionen inte spelar någon roll där — blir Goodhart-exponerat i en annan utan någon ändring av måttet. Proxyvariabelsäkerhet, liksom arkitektonisk överlägsenhet, är ett påstående om världen i förklädnad.

**Gentemot rollden (Rapport XIX).** Detta är den renaste integration som gränsresultaten erbjuder, och den återgäldar XIX en skuld. XIX fastställde empiriskt att styra, varna och överbrygga är dissocierbara roller, och att en portfölj behöver alla tre; den kunde inte säga *varför* alla tre är nödvändiga snarare än bara användbara. NFL säger varför:

> **Guvernörer** exploaterar den för tillfället antagna miljöklassen.
> **Vaktposter** upptäcker när klassen har skiftat.
> **Broar** bevarar översättning mellan de arkitekturer som är lämpade för olika klasser.

Om optimalitet vore ovillkorlig skulle endast guvernörer behövas: man skulle finna den bästa arkitekturen och köra den. Vaktposter är nödvändiga eftersom klassen är ett vad; broar är nödvändiga eftersom vadet kan förloras och att förlora det måste vara överlevbart. Triaden är inte en designpreferens. Det är den minimala struktur ett system behöver för att hålla en reviderbar hypotes om den värld det befinner sig i. **[IP]**

**Gentemot begränsad representation (Rapport 0).** Dessa två fakta är oberoende och bör inte sammanfogas — §2 insisterar på det, och NFL binder obegränsade regulatorer precis som det binder begränsade. Men de sammansätts på ett sätt som är värt att namnge. Rapport 0 fastställde att begränsning *tvingar* en regulator att faktorisera: att förbinda sig till en ändlig mängd distinktioner och förkasta resten. Det åtagandet är en induktiv bias. NFL säger sedan att varje induktiv bias är ett vad på miljöklassen. Så: **begränsning tvingar dig att ha en bias; No Free Lunch säger att biasen är ett vad.** Ingetdera implicerar det andra, och deras konjunktion är skälet till att en begränsad regulator inte kan vara neutral om den värld den befinner sig i även om den önskar vara det. Neutralitet är inte tillgänglig vid någon kapacitet.

## 6.7 Vad detta avsnitt inte visar

- Hypotesen om likformig fördelning är falsk för varje värld vi bebor, och allt som teoremet säger beror på den. Teoremet behålls eftersom dess *kontraposition* är användbar, inte för att dess antecedent är sann.
- Ingenting här begränsar hur *stort* prestandagapet mellan arkitekturer kan vara inom en begränsad klass, och inte heller hur mycket av variansen i institutionella utfall som kan tillskrivas klassmissmatchning snarare än utförande, kapacitet eller korruption. Detta är empiriska frågor och denna artikel berör dem inte.
- Kravet att "namnge klassen" är en disciplin, inte en procedur. Serien har ingen metod för att identifiera vilken miljöklass en institution faktiskt möter, och den ärliga positionen är att detta är en lucka. Rapport XIX:s vaktposter upptäcker att ett skifte har inträffat; ingenting i serien identifierar den klass man har skiftat *till*. **[H]** — och en uppriktig sådan, eftersom det är just den förmåga som designprincipen förutsätter.
