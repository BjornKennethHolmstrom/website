## 4. Icke-unikhet: ekvivalensklassen

### 4.1 Världen begränsar endast gränsen

Avsnitt 3 producerade en faktorisering och visade att kapaciteten avgör vilka variabler den innehåller. Det visade inte att faktoriseringen är unik, och det är den inte. Detta är det andra grundläggande faktumet, och det är det som förvandlar koordination från ett upptäcktsproblem till ett urvalsproblem.

Det formella uttalandet är ett bisimulationsresultat, standard inom förstärkningsinlärning och reglerteknik och värt att formulera i denna artikels termer. Kalla två faktoriseringar *beteendemässigt ekvivalenta* om de, för varje historik av systemets interaktioner, inducerar samma fördelning över framtida observationer — samma förutsägelser, och där handling förekommer, samma optimala policy. Två interna tillstånd som alltid leder till samma betingade framtid är bisimilära; en faktorisering är en aggregering av råa historiker till sådana tillstånd; och två aggregeringar som bevarar bisimulationsrelationen är omöjliga att särskilja utifrån. Världen testar ett system endast vid dess beteendegräns — vad det förutsäger, vad det gör — och lägger ingen begränsning på de interna koordinater i vilka systemet når dessa förutsägelser. Konsekvensen: **världen upprätthåller konsistens vid gränsen och lämnar det interna språket fritt.**

Den ekvivalensklass detta inducerar är inte liten. I varje icke-trivial miljö är den generiskt enorm, längs minst tre oberoende axlar.

### 4.2 Tre lager av icke-unikhet

De tre är värda att separeras, eftersom de bär mycket olika vikt för serien och alltför ofta blandas samman.

Det första är **måttfrihet**: koordinattransformationer. Om en faktorisering använder $(x, y)$ och en annan använder $(x+y,\ x-y)$ kan de vara beteendemässigt identiska — en linjär ommixning av samma information, med avkodaren justerad för att kompensera. Varje inverterbar transformation av det interna tillståndet som bevarar input–output-avbildningen ger en annan giltig faktorisering. Detta är verkligt men ytligt; det säger att det interna språket inte är unikt, inget mer.

Det andra är **redundans**: överkompletta representationer. Ett system vars minimala tillräckliga tillstånd är fyrdimensionellt men vars kapacitet är sexton kan lagra överskottsinformation som ingen uppgift kräver, och många olika sexton-dimensionella koder projicerar till samma fyrdimensionella tillräckliga mångfald. Även detta är verkligt och likaså ytligt — en byråkrati med fler kategorier än den behöver fungerar fortfarande; de extra kategorierna är helt enkelt inte bärande.

Det tredje är **djup icke-unikhet**, och det är den som har betydelse. Två faktoriseringar kan prestera identiskt *under rådande förhållanden* medan de skiljer sig skarpt under andra — i robusthet mot distributionsskiften, i kommunicerbarhet, i reparerbarhet, i vilka variabler de gör synliga, och i vem som bär kostnaden för vad de komprimerar bort. Det starka påståendet är därför inte att många faktoriseringar är lika bra, utan det skarpare:

> Många faktoriseringar är observationellt ekvivalenta under en utvärderingsregim medan de blir skarpt icke-ekvivalenta under en annan.

Djup icke-unikhet är där styrning kommer in, eftersom det är där valet bland till synes ekvivalenta faktoriseringar visar sig få konsekvenser som den rådande regimen inte avslöjar.

### 4.3 h=3-resultatet som måttfrihet, anländande av sig själv

Avsnitt 3.4 uppvisade redan det första lagret utan att bli ombedd. Vid $h=3$ förbinder sig systemet till en hastighet i ett symmetriskt par, och valet — $v_x$ eller $v_y$ — delade sig nästan jämnt över frön utan att något i miljön avgjorde det. Två nätverk tränade på samma värld når olika interna koordinater och identiskt beteende. Det är måttfrihet som uppträder spontant inuti enskilda träningskörningar: inte en familj av representationer vi konstruerade för att bevisa en poäng, utan en förgrening som optimeraren tog olika på olika frön eftersom världen lämnade den fri. Ekvivalensklassen i §4.1 är inte en abstraktion som lagts över modellen; modellen faller in i distinkta punkter av den på egen hand, och endast ensemblen avslöjar att punkten aldrig var fixerad.

### 4.4 Koordination som urval, och oenighetens form

Om det inte finns någon unik korrekt faktorisering kan koordination mellan system inte bestå i att alla konvergerar mot den enda sanna beskrivningen. Det är i stället ett **urvalsproblem**: att välja, från en stor ekvivalensklass, en delad representation som ska tjäna som konvention för gemensamt handlande. Språk är det renodlade fallet — det finns ingen unikt korrekt avbildning från erfarenhet till ord, engelska och franska är lika kraftfulla faktoriseringar av vad man skulle kunna säga, och en gemenskap koordinerar sig genom att bestämma sig för en inte för att den är sannare utan för att den är delad, låst av historien och kostnaden för att byta.

Denna omramning skärper vad oenighet *är*, och distinktionen är en som serien använder på andra ställen. Om två system är oeniga men deras faktoriseringar är beteendemässigt ekvivalenta — relaterade genom en koordinattransformation — är oenigheten en **måttoenighet**, i princip lösbar genom översättning. Om deras faktoriseringar ligger i olika ekvivalensklasser är oenigheten **substantiell**, lösbar endast genom nya data eller en omförhandling av vad som optimeras. Att förväxla de två är ett karakteristiskt institutionellt misslyckande: att behandla en översättningsbar koordinatskillnad som en värdekonflikt, eller en äkta värdekonflikt som ett blott översättningsmisslyckande. Icke-unikhet är vad som gör distinktionen väldefinierad, och §5 är vad som hindrar den från att kollapsa i relativism.

---
