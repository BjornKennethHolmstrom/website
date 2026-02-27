# Del I: Multiskalaproblemet

## Styrningsstörningar är inte monokromatiska

Den första rapporten i denna serie modellerade en enda klass av störning: en lokaliserad chock som drabbade två noder samtidigt, medan resten av systemet förblev opåverkat. Detta är ett användbart testfall för att isolera genomsnittsproblemet, men det reflekterar inte den faktiska störningsmiljö som styrningssystem står inför.

Verkliga styrningsmiljöer innehåller störningar som verkar samtidigt över åtminstone tre distinkta tidsskalor.

**Snabba störningar** — perioder av dagar till veckor — inkluderar akuta lokala kriser: brottsvågor, leveransavbrott, folkhälsonödlägen, plötslig civil oro. Dessa kräver svar inom det fönster då de inträffar. Ett svar som anländer efter att händelsen är överstånden är inte ett svar; det är en intervention i ett annat systemtillstånd.

**Medellånga störningar** — perioder från månader till ett eller två år — inkluderar regionala ekonomiska påtryckningar, säsongsmässiga demografiska fluktuationer och ackumuleringen av uppskjuten infrastrukturstress. Dessa kräver inte omedelbar åtgärd men kräver ihållande uppföljning och gradvis korrigering. De är för ihållande för att ignoreras och för långsamma för att behandlas som nödsituationer.

**Långsamma störningar** — perioder av år till decennier — inkluderar sekulära trender: långsiktiga demografiska skiftningar, gradvis institutionell urholkning, ackumuleringen av ekologiska skador och den långsamma driften av social sammanhållning. Dessa verkar under tröskeln för daglig politisk aktualitet men utgör de mest betydelsefulla långsiktiga utmaningarna styrningssystem står inför.

Dessa tre band anländer inte sekventiellt. De är överlagrade. Vid varje givet ögonblick hanterar ett styrningssystem samtidigt snabba chocker på specifika platser, medellånga påtryckningar över vissa regioner och långsamma trender över hela systemet. Frågan är om något enskilt arkitektoniskt val kan hantera alla tre samtidigt.

## Frekvens-latens-begränsningen

Svaret följer av ett grundläggande resultat inom reglertekniken.

Varje återkopplingsregulator har en maximalt kontrollerbar frekvens — den snabbaste störningen den kan stabilisera — bestämd av dess svarslatens:

```
f_max ≈ 1 / (2 · τ)

```

Där τ är dödtiden: antalet tidssteg mellan att en störning inträffar och att ett korrigerande svar anländer till den påverkade noden. Detta är samma latensbegränsning som introducerades i rapport ett, nu tillämpad på frekvensdomänen istället för amplituden.

Begränsningen är strikt. En regulator kan inte kompensera för störningar som fullbordar en hel cykel på mindre än dubbla dess latens. Den ser dem inte i tid. När dess svar anländer har störningen vänt riktning, och interventionen förstärker snarare än dämpar oscillationen.

Tillämpat på de tre tidsskalorna ovan:

| Regulator | Latens τ | f_max | Kan hantera |
| --- | --- | --- | --- |
| Central | 12 | 0.042 | Endast långsam drift |
| Regional | 6 | 0.083 | Långsam och medellång |
| Lokal | 2 | 0.250 | Alla tre band |

Detta antyder en uppenbar lösning: gör allt lokalt. Men denna tabell visar bara den övre frekvensgränsen. Det finns också ett lågfrekvensproblem, och det går i motsatt riktning.

## Problemet med långsam drift för lokala regulatorer

En lokal regulator med τ = 2 har utmärkt högfrekvenstäckning. Den svarar snabbt på snabba chocker. Men den står inför ett strukturellt problem med långsamma störningar.

Långsam drift rör sig i en riktning under många tidssteg innan den vänder. En lokal regulator som endast observerar lokala förhållanden kan inte skilja mellan ett genuint jämviktsskifte (som bör följas) och ett tidigt stadium av en långsam drift som kommer att vända (som inte bör korrigeras aggressivt). Eftersom dess förstärkning (gain) måste förbli under stabilitetstaket för τ = 2, tillämpar den korrigeringar med full auktoriserad styrka på varje uppfattad avvikelse, inklusive avvikelser som är tidiga stadier av långsam drift.

Resultatet är ihållande oscillation kring ett rörligt mål. Den lokala regulatorn är alltid något ur fas med den drift den inte fullt ut kan se. Denna oscillation är inte instabilitet i traditionell mening — systemet divergerar inte — men det producerar ihållande, onödig varians kring jämvikten. Systemet är aldrig riktigt stabilt eftersom det alltid reagerar på en långsam trend som om det vore en lokal störning.

Detta är det andra misslyckandeläget som rapporten demonstrerar. Arkitektur B (endast lokal) presterar bra mot snabba chocker och dåligt mot långsam drift — inte för att dess parametrar är felkalibrerade, utan för att ingen enskalig lokal regulator samtidigt kan vara lämpligt aggressiv för snabba störningar och lämpligt tålmodig för långsamma.

## Teoremet om frekvensgap

Dessa två observationer — att centraliserade regulatorer inte kan hantera högfrekventa störningar, och att endast lokala regulatorer inte kan hantera lågfrekvent drift — utgör ett formellt resultat: för varje enskalig arkitektur finns det en klass av störningar den strukturellt inte kan stabilisera. Kalla detta för frekvensgapet.

Frekvensgapet för en centraliserad regulator (stort τ) ligger i de snabba och medellånga banden. Frekvensgapet för en endast lokal regulator (litet τ) ligger i det långsamma bandet. Inget av gapen kan stängas genom att justera regulatorns förstärkningsparameter, eftersom begränsningen är topologisk: den uppstår ur förhållandet mellan latens och frekvens, inte från inställningen av någon justerbar parameter.

Det enda arkitektoniska svaret som stänger alla frekvensgap samtidigt är ett som placerar regulatorer på varje relevant tidsskala, där var och en hanterar det band den kan nå. Detta är definitionen av en fraktal styrningsarkitektur.
