## 6. Restposten: inlåsning i ändliga populationer

### 6.1 Den faktiska bytesregeln [I]

Den ursprungliga institutionella frågan var om en skyddsmekanism kan överleva ordinär optimering utan att bokstavligen vara oföränderlig. Experimenten implementerar inte val eller upphävande av skydd: de fixerar en bytesbarriär \(B\) externt. Barriären bestraffar utträde ur en populär åsikt och kan undertrycka innovation såväl som kopiering. Den modellerar inlåsning, inte den politiska stabiliteten hos en mångfaldsbevarande institution.

I det fristående experimentet börjar \(N=120\) agenter antingen med skilda åsikter eller i konsensus. En mikrouppdatering väljer en agent uniformt. Om dess nuvarande block har storlek \(k\), stannar den med sannolikhet \(Bk/N\); annars lämnar den, innoverar med sannolikhet \(r\) (en ny etikett) eller kopierar en kvarvarande agents åsikt, med blockvikter proportionella mot storleken upphöjd till \(\gamma\). Kopiering utesluter den valda agenten och barriären använder antalet före borttagning. Ett svep består av \(N\) mikrouppdateringar. Den fristående figuren använder 1 000 svep, uppvärmning 600 och två frön per cell; den sammansatta modellen använder \(N=100\), 800 svep, uppvärmning 500 och två frön, med olika rutnät. Båda jämför separata körningar med fasta parametrar från två startlägen, inte en parameterstegring och återgång. Det äldre fristående skriptet betecknar en undersökt cell som separerad om de två grensammanfattningarna ligger på varsin sida om \(N/4\); den första sådana undersökta barriären är inte ett strukturellt kritiskt värde. Medföljande figurer är historiska sammanfattningar [HR]; råbanor och den påstådda evidensen från horisontförlängning medföljde inte.

### 6.2 Första innovation och ergodicitet [M]

Vid konsensus lämnar nästa uppdatering konsensus med sannolikhet \((1-B)r\). För \(B<1\) och \(r>0\) är medeltiden för första utträde

\[
\mathbb E[\tau]=\frac{1}{(1-B)r}.
\]

Vid \(B=0.99\), \(r=0.35\) är detta omkring 286 uppdateringar, eller 2,381 svepekvivalenter vid \(N=120\). Det mäter första uppkomsten av en annan åsikt, inte återhämtning till betydande mångfald. Vid fast positivt \(r\) divergerar det endast vid ändpunkten \(B=1\); det ger ingen strukturell tröskel under ett. Konsensus är absorberande vid \(B=1\) eller \(r=0\).

Om vi bortser från de bokstavliga etiketterna och behåller partitionen av märkta agenter är kedjan ändlig. För \(N\ge2\), \(0\le B<1\), \(0<r<1\) och ändligt \(\gamma\) kan varje partition nå singletonpartitionen genom innovationer av agenter i icke-singletonblock, och därifrån varje föreskriven partition genom kopiering. Varje nödvändig uppdatering har positiv sannolikhet. En kopiering vid konsensus ger en självloop. Partitionskedjan är därför irreducibel och aperiodisk, med en unik stationär fördelning och konvergens från varje startpartition. Ingen absorberande kollaps i ändlig population eller bruten ergodicitet inträffar vid inre parametrar. Detta etablerar inte snabb blandning och utesluter inte singulära storpopulationsgränser.

### 6.3 Exakt stationär fördelning för linjär kopiering [M]

För \(\gamma=1\) med uppdateringsregeln ovan, låt

\[
a(k)=1-Bk/N,\qquad \theta=\frac{r(N-1)}{1-r},\qquad w(k)=\frac{\theta(k-1)!}{\prod_{j=1}^k a(j)}.
\]

För en mängdpartition \(\pi\) av märkta agenter är den stationära sannolikheten

\[
\Pi(\pi)=Z_N^{-1}\prod_{S\in\pi}w(|S|).
\]

Appendix B bevisar detaljerad balans och ger rekursionen för partitionsfunktionen. Fördelningen gäller också den sammansatta modellen med \(N=100\) genomgående i dess vikter. Vid \(B=0\) reduceras den till Ewens partitionsfördelning; inget anspråk på prioritet eller nyhet görs för barriärmodifieringen. Den absoluta räknaren för innovationsetiketter är inte stationär.

Låt \(M\) vara största blockstorleken. För \(N=120\) ger numerisk evaluering av den exakta fördelningen (70 siffrors arbetsprecision, oberoende korskontrollerad):

| Barriär | Innovation | \(\Pr(M\le30)\) | \(\Pr(M>90)\) |
|---|---:|---:|---:|
| 0,95 | 0,35 | 0,999803689 | 0,000050917 |
| 0,99 | 0,30 | 0,000000736 | 0,999999209 |
| 0,99 | 0,35 | 0,487079610 | 0,512822540 |
| 0,99 | 0,40 | 0,999987152 | 0,000000688 |

Vid \(B=0.99\), \(r=0.35\), \(N=120\) har enbart konsensus massa 0,195025 och den mellanliggande regionen massa omkring 0,00009785. Intervallet från innovation 0,30 till 0,40 omsluter en skarp stationär övergång i ändlig population, inte en uppmätt hysteresloop. Vid ändligt \(N\) är de stationära sannolikheterna släta i inre parametrar. Vid \(B=0.95\) bär den mångfaldiga regionen nästan all stationär massa, i strid med ursprungspåståendet om ett allmänt förfall till konsensus under en kritisk barriär. Enskilda banor kan ändå besöka konsensus.

### 6.4 En kvantifierad flaskhals [M]

En mikrouppdatering ändrar \(M\) med högst ett. För \(S=\{M\le L\}\) begränsas stationära flödet \(Q(S,S^c)\) av \(\Pi(M=L)\). Låt \(b=\Pi(M=L)/\min(\Pi(S),1-\Pi(S))\). Genom reversibilitet och variationsgränsen med indikatorfunktion är det ordinära spektralgapet högst \(2b\), alltså är relaxationstiden minst \(1/(2b)\) uppdateringar. Om startfördelningen är den stationära fördelningen betingad på den mindre sidan, är sannolikheten att lämna den sidan inom \(t\) uppdateringar högst \(\min(1,tb)\). Appendix B ger beviset.

Vid \(N=120\), \(B=0.99\), \(r=0.35\) ger snittet \(L=66\) att \(\Pi(S)\approx0.4871681922\), randmassa omkring \(1.103870531\times10^{-7}\) och \(b\le2.265893\times10^{-7}\) med utåtriktad avrundning. Relaxation begränsas nedåt av omkring \(2.2066\times10^6\) uppdateringar (18 388,6 svepekvivalenter). Från den stationära fördelningen betingad på \(S\) är sannolikheten att lämna \(S\) under 1 000 svep högst 0,02720. Detta är en rigorös flaskhals i en ändlig population mellan regioner med betydande stationär massa, en precis mening av metastabilitet. Relaxationsgränsen är inte en genomsnittlig passagetid mellan regioner, och utträdesgränsen gäller inte automatiskt ett godtyckligt mångfaldigt startläge eller ett singletonstartläge.

### 6.5 Historisk separation och explorativ återhämtning

Vid \(B=0.95\), \(r=0.35\) är motsvarande undre relaxationsgräns bara omkring 3,604 svepekvivalenter. I en oberoende rapporterad antalsbaserad reimplementation, kontrollerad mot den stationära fördelningen i liten population, passerar fyra kollapsade startlägen för första gången ett effektivt åsiktsantal större än 30 efter 483, 1 233, 1 677 och 2 169 svep [E]. Ingen passage till största block större än 90 rapporterades från det mångfaldiga startläget vid barriär 0,95 inom 20 000 svep (fyra frön) [E, censurerat]. Vid \(B=0.99\) rapporterades ingen passage inom 20 000 svep för något av startlägena med fyra frön vardera [E, censurerat]. Kriteriet från mångfald till koncentration i den undersökningen är största block större än 90; det är inte omvändningen av den andra tröskeln eller konduktanssnittet. Dessa långa explorativa körningar upprepades inte under avstämningen. De etablerar återhämtning vid 0,95 i de undersökta körningarna, inte generell frånvaro av all metastabilitet. De tidigare påståendena om \(B^*\approx0.95\), irreversibel vikning och horisontrobusthet dras tillbaka.

### 6.6 Designimplikationer [IP/H]

Ett nåbart tillstånd behöver inte vara praktiskt tillgängligt inom relevant beslutshorisont. Modellen ger ett precist exempel, inte ett mått på verklig institutionell inlåsning. En fast barriär är inte en endogen skyddsklass; en modell för val, vidmakthållande och upphävande av en begränsning skulle behövas för att undersöka den frågan. Framtida arbete kan jämföra policyer som bevarar faktiskt användbara alternativ snarare än maximerar råa åsiktsantal och explicit mäta deras kostnader och övergångstider. Det olösta problemet med oföreställda alternativ förblir också separat: en fast partitionsmodell tillåter innovation genom konstruktion men genererar inte semantiska hypoteser eller utvärderar deras kvalitet.
