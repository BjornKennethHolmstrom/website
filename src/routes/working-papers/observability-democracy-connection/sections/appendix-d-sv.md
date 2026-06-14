## Appendix D — Endogena preferenser: Ett erkännande av en begränsning

### D.1 Exogenitetsantagandet

Modellen i detta papper behandlar medborgarpreferenser som exogena i förhållande till representationssystemet. Preferenser utvecklas genom individuell glidning och tillfälliga genuina skiften, men representationskedjan påverkar inte vad medborgarna vill — den observerar och försämrar endast signalen. Detta är en medveten förenkling som isolerar observerbarhetsmekanismen.

I verkligheten är preferenser delvis endogena i förhållande till det styrsystem som påstår sig representera dem. Mediebevakning rapporterar inte bara den allmänna opinionen; den formar vilka frågor medborgarna anser vara framträdande och hur de utvärderar dem. Partiplattformar aggregerar inte bara medlemmarnas preferenser; de konstruerar aktivt politiska identiteter och definierar villkoren för den politiska debatten. Policyutfall, förmedlade genom institutioner, mediemiljöer och materiella incitament, formar efterföljande preferenser. Representationssystemet står inte utanför preferensbildningsprocessen och observerar den på avstånd. Det deltar i den.

### D.2 Identifieringsproblemet i den slutna slingan

I reglertekniska termer är det fullständiga systemet en sluten slinga: medborgarpreferenser påverkar policy, och policy — förmedlad genom de institutionella, informationsmässiga och materiella kanaler som beskrivs ovan — återkopplas till medborgarpreferenser. Representationskedjan sitter i återkopplingsvägen för denna slinga. Observerbarhetsanalysen i detta papper undersöker endast framåtvägen — från medborgare till policy — och behandlar returvägen som frånvarande.

Detta har en specifik formell konsekvens. Inom systemidentifiering kräver skattning av parametrarna för en återkopplingsslinga från insignal-utsignal-data särskild försiktighet: om insignalen (medborgarpreferenser) är korrelerad med utsignalbruset (policyutfall som återkopplas till preferensbildning), är de vanliga estimatorerna för öppen slinga biaserade. Representationskedjans försämringsparametrar (aggregeringskvoter, brusnivåer) kan inte skattas från observerade preferens-policy-korrelationer utan att också modellera återkopplingsvägen, eftersom den observerade korrelationen återspeglar både framåtförsämringen och det omvända inflytandet.

Preferensernas endogenitet stärker snarare än försvagar den arkitektoniska diagnosen. I det exogena fallet försöker regulatorn observera en oberoende utvecklande preferensfördelning. I det endogena fallet försöker den observera en fördelning som den delvis skapar genom sina egna handlingar. Identifieringsproblemet är därför strikt svårare, inte lättare. Regulatorn observerar inte bara ett rörligt mål; den observerar ett mål som rör sig som svar på observationshandlingen.

### D.3 Varför exogenitetsantagandet är försvarbart för detta papper

Trots denna begränsning är exogenitetsantagandet försvarbart för det specifika påstående detta papper gör. Resultatet om konstitutionell oobserverbarhet beror endast på framåtvägen: den multiplikativa förlusten av signalvarians och den additiva ackumulationen av brus när preferenser passerar genom aggregeringslager. Även om returvägen är stark — även om medier och partier och policyutfall väsentligt formar vad medborgarna vill — är framåtvägen fortfarande den mekanism genom vilken dessa preferenser, när de väl har formats, når policylagret. Om framåtvägen ligger under SNR-tröskeln, då kan vilka preferenser medborgarna än har — vare sig de är exogent genererade eller endogent formade — inte tillförlitligt överföras till beslutsfattningslagret.

Den praktiska betydelsen av resultatet kan i själva verket vara större i det endogena fallet. *Om representationssystemet formar preferenser men sedan inte kan observera dem korrekt, styr det på grundval av en signal som det självt har förvrängt, utan att kunna skilja den förvrängning det introducerade från de preferenser det var tänkt att mäta.* Detta är en allvarligare form av den självreferentiella blindhet som pappret redan diagnostiserar: regulatorn är inte bara blind inför det system den styr, utan blind inför sitt eget bidrag till blindheten.

### D.4 Implikationer för framtida arbete

En fullständig behandling av endogena preferenser skulle kräva modellering av den fullständiga återkopplingsslingan: medborgare → representationskedja → policy → medier/partier/utfall → medborgare. Detta introducerar flera komplexiteter bortom detta pappers räckvidd:

- **Identifiering av återkopplingsriktning.** När observerade preferens-policy-korrelationer är svaga, beror det på att representationskedjan försämrar framåtsignalen (observerbarhetshypotesen), på att policy formar preferenser på sätt som maskerar den ursprungliga signalen (endogenitetshypotesen), eller bådadera? Att särskilja dessa kräver instrument eller naturliga experiment som förskjuter representationskvaliteten oberoende av policyinnehållet.

- **Multipla jämviktslägen.** Ett system med endogena preferenser kan ha flera stabila jämviktslägen: ett hög-tillit-jämviktsläge där preferenser överförs korrekt och policy svarar lämpligt, och ett låg-tillit-jämviktsläge där preferenser förvrängs av ett försämrat representationssystem och policy svarar på förvrängningen, vilket ytterligare försämrar signalen. Tröskeln för konstitutionell oobserverbarhet kan interagera med dessa jämviktslägen på sätt som den nuvarande modellen inte kan fånga.

- **Strukturellt vägberoende.** Eftersom preferenser delvis formas av tidigare policyutfall, kan representationsarkitekturer uppvisa vägberoende. Tidiga förvrängningar — en mediemiljö som systematiskt överrepresenterar vissa preferenser, ett partisystem som undertrycker vissa dimensioner av politisk konflikt — kan ackumuleras till ihållande preferenskonfigurationer som överlever även efter att den ursprungliga strukturella orsaken har avlägsnats. Detta introducerar minneseffekter bortom den aktuella analysens räckvidd.

- **Normativ komplexitet.** Om styrsystemet delvis skapar de preferenser det påstår sig representera, blir den normativa statusen för "att representera preferenser korrekt" tvetydig. Är ett system som formar preferenser och sedan svarar på dem mer eller mindre demokratiskt än ett som endast försämrar exogena preferenser? Det informationsteoretiska ramverket i detta papper kan inte besvara denna fråga, men det kan specificera de förhållanden under vilka frågan blir empiriskt relevant.

### D.5 Koppling till senare rapporter i serien

Frågan om endogena preferenser försvann inte efter teknisk rapport III. Den blev gradvis formaliserad på andra håll i serien, i takt med att den teoretiska arkitekturen utvecklade verktygen för att adressera den.

Teknisk rapport VI:s behandling av värdearkitekturer som observationskanaler adresserar hur styrsystem väljer vilka dimensioner av verkligheten de ska uppmärksamma — inklusive, implicit, vilka dimensioner av medborgarpreferenser de ska mäta och vilka de ska ignorera eller undertrycka. En värdearkitektur som utesluter vissa preferensdimensioner (samhälleligt välbefinnande, framtida generationer, icke-mänskliga intressen) misslyckas inte bara med att observera dem; den formar aktivt en politisk miljö där dessa preferenser är mindre sannolika att formas och uttryckas.

Teknisk rapport XIII:s behandling av legitimitet som ett emergent kopplingstillstånd modellerar en specifik instans av preferens-policy-återkoppling: styrningsprestanda påverkar medborgarnas förtroende, vilket i sin tur förändrar effektiviteten i framtida styrningshandlingar och observationer. När förtroendet kollapsar slutar medborgarna inte bara att efterleva direktiv — de förändrar sitt rapporteringsbeteende, sitt politiska engagemang och ytterst de preferenser de uttrycker genom formella kanaler. Legitimitetsdynamiken i teknisk rapport XIII är en mekanism genom vilken policy återkopplas till den preferensfördelning som teknisk rapport III behandlar som exogen.

Teknisk rapport XIV:s behandling av styrning som en adaptiv regulator adresserar det inlärningsproblem som endogena preferenser skapar: en regulator som formar det system den försöker observera måste särskilja effekterna av sina egna handlingar från den underliggande dynamik den försöker förstå. Det duala regleringsramverket i teknisk rapport XIV är den formella apparaten för att hantera just denna sammanflätning.

Detta appendix är en platshållare för den formella integrationen av dessa teman. Det erkänner att teknisk rapport III:s modell är en hanterbar förenkling vars huvudresultat överlever uppmjukningen av dess starkaste antagande — och det pekar mot de senare rapporter där uppmjukningen gradvis åstadkoms. Seriens egen bana speglar den adaptiva inlärning den rekommenderar för styrsystem: antaganden explicitgörs, begränsningar erkänns, och efterföljande arbete expanderar gradvis ramverket för att adressera vad tidigare arbete satte inom parentes.
