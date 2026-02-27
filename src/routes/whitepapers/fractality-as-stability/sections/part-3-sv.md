# Del III: Simuleringen

## Scenariodesign

Simulatorn modellerar ett nätverk av tio noder som utsätts för tre samtidiga typer av störningar, som var och en representerar ett unikt frekvensband. Nätverket är uppdelat i två regioner om fem noder vardera (noder 0–4 och noder 5–9) för ändamålet med regional styrning. Alla parametrar hålls konstanta över arkitekturerna; prestandaskillnader är arkitektoniska.

**Snabba störningar:** En impuls av magnitud −35 drabbar noderna 2 och 7 var 30:e tidssteg, med början vid t = 20. Dessa representerar återkommande lokala kriser — akuta, allvarliga, spatialt specifika och tidsbegränsade. Frekvens: 1/30 ≈ 0,033 cykler/steg.

**Medellånga störningar:** Ett sinusformat tryck med amplituden ±12 appliceras kontinuerligt på region 0 (noder 0–4), med perioden 45. Detta representerar ihållande regionala ekonomiska eller demografiska påtryckningar — inte katastrofala, men ihållande och riktade. Frekvens: 1/45 ≈ 0,022 cykler/steg.

**Långsamma störningar:** En sinusformad drift med amplituden ±8 appliceras på hela systemet med perioden 120, vilket ungefär matchar simuleringens längd. Detta representerar sekulära systemövergripande trender — tillräckligt långsamma för att deras riktning inte ska vara uppenbar från lokal observation vid något givet ögonblick. Frekvens: 1/120 ≈ 0,008 cykler/steg.

De tre störningsfrekvenserna är medvetet valda för att falla inom, vid gränsen för och utanför det kontrollerbara området för varje arkitektur, så som visas i frekvenstäckningsdiagrammet.

## De tre arkitekturerna

**Arkitektur A — centraliserad styrning** (τ = 12, σ = 5,0, K = 0,07): en enda regulator observerar det systemövergripande genomsnittet med betydande brus och tillämpar ett enhetligt svar som sänds ut till alla tio noder. Latens på 12 placerar f_max vid 0,042 — över den långsamma störningsfrekvensen men under de medellånga och snabba frekvenserna. Regulatorn kan inte svara på medellånga eller snabba störningar inom deras cykler.

**Arkitektur B — endast lokal** (τ = 2, σ = 0,5, K = 0,40): varje nod observerar sig själv med hög signaltrohet och tillämpar sin egen korrigering. Latens på 2 ger f_max = 0,250, vilket i princip täcker alla tre störningsfrekvenserna. Det strukturella problemet ligger i det långsamma bandet: den lokala regulatorn kan inte skilja långsam drift från en baslinjeförskjutning och tillämpar korrigeringar med hög förstärkning på en trend som kräver tålamod, vilket producerar ihållande oscillation.

**Arkitektur C — fraktal** (τ_l = 2, τ_r = 6, τ_g = 12; σ_l = 0,5, σ_r = 2,0, σ_g = 5,0; K_l = 0,40, K_r = 0,15, K_g = 0,07): alla tre lager är aktiva samtidigt. Det lokala lagret hanterar snabba chocker med hög signaltrohet. Det regionala lagret följer medellånga påtryckningar. Det globala lagret följer långsam drift med lämpligt tålamod. Lagren är additiva: varje lager bidrar med sin korrigerande signal inom sitt naturliga band, utan att störa de andra.

Alla arkitekturer använder B = 1,0 (lika ställdonseffektivitet). Arkitektur C tillämpar mer total styrinsats (control effort) på grund av tre aktiva lager, men detta är en styrningskostnad värd att mäta explicit.

## Simuleringsutdata

![Simuleringsutdata: fyra rader med paneler som visar värmekartor, medelstabilitetsspår, representativa nodspår och mätvärden på den nedre raden inklusive underskottsstaplar, kontrollansträngningsstaplar och frekvenstäckningsdiagram.](/whitepapers/images/fractality-as-stability/ggf-simulator-v4.png)

*Figur 1: Utdata från GGF Governance Simulator v4. Övre raden: stabilitetsvärmekartor för alla tre arkitekturerna (nod × tid, färgskala RdYlGn, lila prickade linjer markerar snabba chockhändelser). Andra raden: systemets genomsnittliga stabilitetsspårning — Arkitektur A:s dramatiska oscillation kan tillskrivas korrigeringar med hög förstärkning på en redan fördröjd och bruskorrumperad signal. Tredje raden: representativa nodspårningar för nod 2 (mål för snabb chock), nod 5 (mål för medellångt tryck) och nod 0 (endast långsam drift), som demonstrerar varje arkitekturs karakteristiska misslyckandeläge. Nedre raden: kumulativt underskott per nod, total styrinsats per nod och frekvenstäckningsdiagram som visar taket f_max = 1/(2τ) gentemot faktiska störningsfrekvenser.*

## Att läsa resultaten

**Arkitektur A:s kollaps är kontraintuitiv och viktig.** Med lika ställdonseffektivitet hämmas inte den centrala regulatorn av resursbegränsningar. Dess kollaps — en stabilitetsstandardavvikelse på 78,76 jämfört med 20,05 för endast lokal och 16,52 för fraktal — kan tillskrivas att den svarar kraftfullt på en bruskorrumperad, 12-stegsfördröjd genomsnittssignal. När snabba chocker drabbar noderna 2 och 7 registrerar det nationella genomsnittet en blygsam dipp. Regulatorns fördröjda, enhetliga, nationellt skalade svar anländer efter att chocken delvis har lösts upp och tillämpar det över alla tio noder, inklusive åtta som inte behövde någon intervention. Mönstret upprepar sig vid varje snabb chockhändelse och förvärras genom simuleringen. Samma regulator som är för svag för lokala kriser är samtidigt för störande för noder som var stabila.

**Arkitektur B:s oscillation på det långsamma bandet är det förutsagda misslyckandeläget.** Nod 0, som inte tar emot några snabba chocker och sitter i regionen med lågt till medellångt tryck, borde teoretiskt sett vara den enklaste noden för Arkitektur B att hantera. Istället uppvisar den ihållande oscillation driven av den långsamma systemövergripande driften. Den lokala regulatorns höga förstärkning håller den i ständig rörelse kring ett mål som i sig rör sig långsamt. Detta är den nedre gränsens misslyckande: för snabb och för stark för den långperiodiga störning den inte kan urskilja.

**Arkitektur C:s regionala lager är den kritiska särskiljande faktorn.** Den fraktala arkitekturens fördel över endast lokal är koncentrerad i de medellånga och långsamma banden. För snabba chocker (nod 2) presterar arkitektur B och C jämförbart. För medellångt tryck (nod 5) och långsam drift (nod 0) ger arkitektur C:s regionala och globala lager det tålamod och den spatiala medelvärdesbildning som det lokala lagret strukturellt sett inte kan.

## Kvantitativ sammanfattning

| Mätvärde | Arkitektur A | Arkitektur B | Arkitektur C |
| --- | --- | --- | --- |
| Totalt kumulativt underskott | 53 432 | 13 772 | **11 170** |
| Genomsnittlig nodstabilitet | 89,6 | 96,9 | **97,6** |
| Stabilitetens standardavvikelse | 78,76 | 20,05 | **16,52** |
| Total styrinsats | 3 593 | 9 181 | 10 263 |

Arkitektur C uppnår det lägsta underskottet och den lägsta variansen till priset av en något högre total styrinsats — ungefär 12 % mer insats än endast lokal för en 19 % minskning av underskottet. Insatsskillnaden reflekterar de tre aktiva styrningslagren som tillämpar samtidiga signaler; i styrningstermer motsvarar detta omkostnaderna för att upprätthålla regional och global samordningsinfrastruktur jämsides med lokal svarskapacitet.

Kostnads-nyttoförhållandet är tydligast i stapeldiagrammet över underskott: Arkitektur C:s fördel är inte enhetlig. Den är koncentrerad till noder som utsätts för medellånga och långsamma störningar (noderna i region 0 och noderna intill snabba chockmål). Vid noder som primärt utsätts för snabba chocker närmar sig arkitektur B prestandan hos C. Detta är konsekvent med teoremet om frekvensgap: varje arkitektur presterar bra inom sitt naturliga band och misslyckas vid gränserna.

## Frekvenstäckningsdiagrammet

Den nedre högra panelen i figur 1 gör det strukturella argumentet visuellt explicit. Vertikala linjer markerar de tre faktiska störningsfrekvenserna mot horisontella staplar som visar varje arkitekturs f_max-täckning.

Arkitektur A:s stapel slutar långt före de medellånga och snabba störningsfrekvenserna — båda hamnar utanför dess kontrollerbara räckvidd. Arkitektur B:s stapel sträcker sig förbi alla tre frekvenserna, men detta överdriver dess förmåga i det långsamma bandet, där dess höga förstärkning producerar den oscillation som beskrivits ovan. Arkitektur C:s trelagersstapel visar banden explicit: lokalt täcker det snabba området, regionalt täcker det medellånga området, globalt täcker det långsamma området, och tillsammans spänner de över hela störningsspektrumet med lämplig förstärkning på varje lager.

Ingen enskild stapel i diagrammet täcker hela spektrumet med lämplig förstärkning vid alla frekvenser. Den fraktala arkitekturen är den enda konfigurationen som matchar regulatoregenskaper med störningsegenskaper över alla tre banden samtidigt.
