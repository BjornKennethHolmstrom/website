# Del V: Begränsningar

## Störningarnas tidsskalor är illustrativa

De tre valda störningsperioderna — 30, 45 och 120 tidssteg — har valts för att skapa en tydlig analytisk separation mellan frekvensbanden. De härrör inte från empiriska mätningar av faktiska störningsfrekvenser inom styrning. Verkliga styrningssystem står inför störningar med stökigare, överlappande och kontextberoende tidsskalor.

Klyftan mellan en snabb kris (dagar) och en långsam sekulär trend (decennier) i verklig styrning är mycket större än förhållandet mellan perioderna i denna simulering. Detta innebär att frekvensseparationen i praktiken är mer uttalad än vad modellen antyder — vilket stärker kärnargumentet — men det innebär också att de specifika regulatorparametrar som används här inte direkt kan tillämpas på verklig institutionell design utan empirisk kalibrering. Appendix C tillhandahåller en referenstabell över uppskattade verkliga störningstidsskalor för styrningskontexter.

## Treskalemodellen underskattar antalet verkliga styrningslager

Simuleringen använder tre skalor: lokal, regional och global. Verkliga styrningssystem innehåller fler graderingar: individ, hushåll, grannskap, kommun, län, region, nationalstat, kontinentalt block, global institution. Den reglertekniska logiken kan generaliseras till valfritt antal lager, men det optimala antalet lager för ett givet system beror på det faktiska frekvensspektrumet i dess störningsmiljö — vilket är en empirisk fråga som modellen inte adresserar.

Treskalemodellen är den minimala demonstrationen av principen. Den visar att enskaliga arkitekturer lämnar frekvensgap och att flerskaliga arkitekturer stänger dem. Den föreskriver inte det korrekta antalet styrningsskalor för någon specifik kontext.

## Lagren har ren frekvensseparation; verkliga system har det inte

Modellen antar att varje typ av störning verkar inom ett väldefinierat frekvensband, vilket möjliggör en ren tilldelning av lager. Verkliga störningar är korrelerade över skalor. Finanskrisen 2008 började som en snabb lokal chock på den amerikanska bolånemarknaden, spreds genom medellånga kreditmekanismer och producerade långsamma långsiktiga effekter på skuldstrukturer och institutionellt förtroende. Det var samtidigt en snabb, medellång och långsam störning.

När störningar är korrelerade över skalor blir lagertilldelningsproblemet icke-trivialt. En störning som går in i det snabba bandet men kaskaderar in i det långsamma bandet kräver samordnade svar över lager — vilket den fraktala arkitekturen stöder, men som modellen inte explicit demonstrerar. Scenariot med kaskader över skalor är en betydande utvidgning som är motiverad för framtida arbete.

## Modellen är linjär och tidsinvariant

Som i den första rapporten är tillståndsövergångsekvationen linjär och parametrarna är fasta genom hela simuleringen. Verkliga styrningssystem uppvisar ickelinjär dynamik — tröskeleffekter, hysteres, stiganpassning (path dependence) — och deras parametrar förändras över tid när institutioner anpassar sig. Resultatet för den fraktala arkitekturen håller i den linjära regimen nära jämvikt; dess robusthet under starkt ickelinjära förhållanden demonstreras inte här.

Av särskild vikt för specifikt den fraktala arkitekturen: förstärkningsvärdena på varje lager är kalibrerade för stabil drift nära jämvikten x_ref = 100. Under stora chocker som driver systemet långt från jämvikt, kanske de linjära förstärkningsförhållandena inte håller, och interaktioner mellan lager kan producera framväxande dynamik som inte fångas av den additiva modellen. Detta är det huvudsakliga området där en ickelinjär utvidgning mest skulle förändra resultaten.

## Lika ställdonseffektivitet är ett förenklande antagande

Att sätta B = 1,0 för alla tre lager säkerställer att prestandaskillnader endast kan tillskrivas arkitekturen. I verkligheten har styrningsställdon på olika skalor olika effektivitet: lokal krishantering kan vara mycket effektiv för sin specifika typ av störning, medan globala penningpolitiska instrument av nödvändighet är trubbiga. Antagandet om lika ställdon underskattar argumentet för lokal styrning (som vanligtvis har högre ställdonsprecision) och överskattar argumentet för global styrning (som vanligtvis har lägre). Modeller med differentierade ställdon skulle ytterligare stärka resultatet för den fraktala arkitekturen, men till priset av att introducera ytterligare parametrar som kräver empiriskt rättfärdigande.

## De regionala lagergränserna är fasta

I simuleringen utgör noder 0–4 och noder 5–9 fasta regioner rakt igenom. Verkliga styrningsregioner är inte fasta: den lämpliga regionala grupperingen för att hantera en hälsokris kan skilja sig från den lämpliga grupperingen för att hantera en ekonomisk press eller en miljömässig störning. Adaptiva regionala gränser — där det regionala lagrets räckvidd omkonfigureras som svar på den spatiala distributionen av den aktuella störningen — modelleras inte. Detta är en meningsfull utvidgning, eftersom en av de genuina fördelarna med fraktal styrning över fast administrativ hierarki är potentialen för samordning med variabel geometri på mellanskalor.

## Modellen fångar inte demokratisk legitimitet

Prestandamåtten — underskott, varians, styrinsats — är rent stabilitetsteoretiska. De behandlar inte frågor om demokratisk legitimitet, ansvarsutkrävande eller samtycke. En styrningsarkitektur som är stabilitetsoptimal i detta ramverk skulle kunna vara djupt illegitim om dess institutioner inte är ansvariga inför de befolkningar de styr.

Detta är den korrekta omfattningen för en teknisk rapport, men det är värt att uttrycka tydligt: det ingenjörsmässiga argumentet demonstrerar att fraktal arkitektur är stabilitetsoptimal, inte att något särskilt fraktalt styrningsarrangemang är legitimt. De normativa frågorna — vem som styr, med vilket mandat, underkastat vilket ansvarsutkrävande — förblir oreducerbart politiska. Det ingenjörsmässiga argumentet är en begränsning på lösningsrymden, inte en lösning.
