# Del III: Simuleringen

## Scenariodesign

Simulatorn modellerar ett nätverk av tio kopplade noder — representerande vilken samling av styrningsenheter som helst på samma skala: kommuner, regioner, provinser eller medlemsstater. Varje nod har ett sant stabilitetstillstånd `x_i(t)` som representerar dess förhållande vid tiden `t`, initialiserat vid jämvikt.

Vid tidssteg 20 drabbar en lokaliserad chock två noder (nod 2 och 7). De återstående åtta noderna förblir opåverkade. Detta är det kanoniska scenariot för att testa subsidiaritet: en kris som är verklig och allvarlig på specifika platser, men frånvarande på andra håll.

Två styrningsarkitekturer jämförs sedan under identiska chockförhållanden.

## Arkitektur A: centraliserad styrning

I arkitektur A rapporterar alla tio noder uppåt till en central regulator. Regulatorn observerar ett **nationellt genomsnitt** — det genomsnittliga förhållandet över alla tio noder — och tillämpar en enhetlig åtgärd på hela nätverket.

De strukturella konsekvenserna följer direkt från primitiverna:

* **Latens** `τ_A = 12`: signalen måste färdas upp genom rapporteringslager, bearbetas centralt, och en policyåtgärd måste färdas tillbaka ner och implementeras. Tolv tidssteg av dödtid.
* **Signalbrus** `σ_A = 6.0`: att aggregera tio lokala signaler till ett nationellt genomsnitt förstör spatial information. Den centrala regulatorn kan inte skilja en allvarlig lokal kris från en mild systemövergripande fluktuation. En chock av magnituden −45 vid två noder framstår, från centrumet, som en blygsam dipp i det nationella genomsnittet.
* **Förstärkningstak** `K_A = 0.30`: med en latens på 12 begränsar stabilitetstaket regulatorn till svaga svar. Att försöka öka förstärkningen utöver detta orsakar oscillation.

Regulatorns svar är därför samtidigt underdimensionerat för krisnoderna och sänds ut enhetligt över noder som inte behöver någon åtgärd alls.

## Arkitektur B: distribuerad / fraktal styrning

I arkitektur B observerar varje nod sitt eget tillstånd direkt och tillämpar sin egen korrigerande åtgärd. Ett lateralt samordningslager delar information mellan noder, men beslutsbefogenhet och svarskapacitet sitter lokalt.

* **Latens** `τ_B = 2`: lokala regulatorer agerar inom dagar snarare än år. Dödtiden är det minimum som krävs för lokal observation och åtgärd.
* **Signalbrus** `σ_B = 0.5`: lokala regulatorer observerar lokala förhållanden med hög signaltrohet. Ingen aggregeringsförlust. Krisnoderna ser exakt hur allvarlig deras situation är.
* **Förstärkning** `K_B = 0.45`: den lägre latensen tillåter ett starkare svar samtidigt som det håller sig inom stabilitetstaket. Notera att detta fortfarande är ett begränsat värde — taket existerar även i distribuerade system, och att ignorera det producerar instabilitet oavsett arkitektur (se avsnittet om begränsningar).

## Simuleringsutdata

Simulatorn producerar fyra visualiseringar från en enda körning:

**Värmekartor (nod × tid):** Den mest diagnostiska utdatan. Arkitektur A visar hur krisen sprider sig och kvarstår över nätverket när den fördröjda, enhetliga åtgärden misslyckas med att begränsa den och stör friska noder. Arkitektur B visar att krisen begränsas till nod 2 och 7, medan de återstående noderna förblir opåverkade rakt igenom.

**Nodspårningar:** Individuella stabilitetsbanor för kris- och friska noder. I arkitektur A uppvisar friska noder betydande störningar från den enhetliga policyn — de får en åtgärd kalibrerad efter ett nationellt genomsnitt som inkluderar deras stabila förhållande vid sidan av krisen, vilket producerar en överkorrigering. I arkitektur B är de friska nodernas spårningar nästan plana under hela krisperioden.

**Stapeldiagram över kumulativt underskott:** Integralen av stabilitetsförlust under jämviktsmålet, per nod, över hela simuleringen. Detta fångar både djupet och varaktigheten av underskottet. Arkitektur A producerar betydande underskott vid icke-krisnoder som indirekt skada från den enhetliga åtgärden. Arkitektur B koncentrerar underskottet till krisnoderna, med minimal indirekt påverkan på andra håll.

**Styrsignal (krisnod):** Arkitektur A:s regulator svarar på det utspädda nationella genomsnittet — en svag signal som avsevärt underskattar den lokala allvarlighetsgraden. Arkitektur B:s regulator svarar på det lokala tillståndet direkt och tillämpar en proportionerlig åtgärd omedelbart.

![Simuleringsutdata som visar fyra paneler: värmekartor som jämför nodstabilitet över tid för båda arkitekturerna, individuella nodspårningar för kris- och friska noder, kumulativt underskott per nod och jämförelse av styrsignal för en krisnod.](/whitepapers/images/governance-simulator/governance-simulator-v3.png)

*Figur 1: Utdata från GGF Governance Simulator v3. Övre raden: stabilitetsvärmekartor för arkitektur A (centraliserad) och arkitektur B (fraktal/distribuerad), som visar nodförhållanden över 120 tidssteg. Krisnoderna 2 och 7 är markerade. Mellersta raden: individuella nodspårningar, som visar indirekt störning på friska noder under arkitektur A och isolering av krisen under arkitektur B. Nedre vänstra: kumulativt stabilitetsunderskott per nod. Nedre högra: styrsignal för krisnod 2, som visar hur arkitektur A svarar på ett utspätt nationellt genomsnitt medan arkitektur B svarar på det sanna lokala tillståndet.*

## Genomsnittsproblemet

Det centrala strukturella fyndet är vad som skulle kunna kallas genomsnittsproblemet. När en centraliserad regulator aggregerar lokala signaler till ett enda genomsnitt händer två saker samtidigt:

För det första underskattas allvarlighetsgraden av lokaliserade kriser systematiskt. En chock på −45 vid två av tio noder framstår som en avvikelse på ungefär −9 från det nationella genomsnittet. Regulatorn svarar på −9, inte −45.

För det andra tillämpar det enhetliga svaret en åtgärd dimensionerad för −9 över alla tio noder. För de åtta friska noderna är detta en oönskad störning. För de två krisnoderna är det en åtgärd som är fem gånger svagare än vad den faktiska störningen kräver.

Genomsnittsproblemet är inte ett misslyckande av den centrala regulatorns kompetens eller resurser. Det är en konsekvens av arkitekturen. Spatial information — *var* problemet är — förstörs genom aggregering. Ingen förbättring av kvaliteten på det centrala beslutsfattandet återskapar den förlorade informationen, eftersom informationen kastades bort innan den anlände.

Subsidiaritet — principen att beslut bör fattas på den lägsta nivå som kan hantera dem — är, i reglertekniska termer, det recept som följer direkt från genomsnittsproblemet. Det är ett ingenjörsmässigt krav innan det är en politisk preferens.
