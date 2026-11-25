## Appendix B — Formella resultat och förkastade unifieringar

### B.1 Detaljerad balans [M]

Använd antagandena i §6.1–6.3 med linjär kopiering, \(0\le B<1\) och \(0<r<1\). För en förflyttning av en specificerad vald agent från ett block av storlek \(k\ge2\) till ett annat block av storlek \(l\ge1\) är framåtsannolikheten betingad på urval \(a(k)(1-r)l/(N-1)\) och den omvända \(a(l+1)(1-r)(k-1)/(N-1)\). Deras kvot är

\[
\frac{a(k)l}{a(l+1)(k-1)}=\frac{w(k-1)w(l+1)}{w(k)w(l)}.
\]

För en singleton som förenas med ett block av storlek \(l\) är den omvända operationen innovation. Kvoten är

\[
\frac{a(1)(1-r)l}{(N-1)a(l+1)r}=\frac{w(l+1)}{w(1)w(l)}.
\]

Faktorn för uniformt urval förkortas bort. Omvändningen av en singletonförening täcker uppdelning av ett icke-singletonblock. När flera elementära förflyttningar inducerar samma partitionspar paras varje med sin omvändning och de balanserade flödena summeras. Nollförflyttningar balanseras trivialt. Den positiva normaliserade vikten är därför reversibel och genom irreducibilitet den unika stationära fördelningen.

### B.2 Rekursion och numerisk evaluering [M]

Behåll den ursprungliga populationsstorleken \(N\) fast i alla vikter även för delpartitioner av storlek \(n\le N\). Betingning på storleken hos blocket som innehåller ett utpekat element ger

\[
Z_0=1,\qquad Z_n=\sum_{k=1}^n\binom{n-1}{k-1}w(k)Z_{n-k}.
\]

Begränsning av varje summa till \(k\le L\) ger \(Z_n(L)\), med \(Z_0(L)=1\). Då är \(\Pr(M\le L)=Z_N(L)/Z_N\). Vid \(B=0\) reduceras normaliseringen till \(Z_N=\theta(\theta+1)\cdots(\theta+N-1)\), Ewensfallet. Ändliga positiva summor och nämnare säkerställer släta sannolikheter i det inre. Exakt aritmetik krävs inte för numerisk evaluering av sannolikheterna; korrigeringen använder decimalaritmetik med 70 siffrors arbetsprecision och oberoende verifiering.

### B.3 Flaskhals och villkorad utträdesgräns [M]

Skriv \(P(x,y)\) för övergångssannolikheter och \(Q(S,S^c)=\sum_{x\in S}\Pi(x)P(x,S^c)\). Randargumentet ger \(Q(S,S^c)\le\Pi(M=L)\). Detaljerad balans ger lika framåt- och bakåtflöden över snittet. Prövning av indikatorn för \(S\) i den reversibla variationsformeln ger

\[
1-\lambda_2\le\frac{Q(S,S^c)}{\Pi(S)\Pi(S^c)}\le2b,
\]

där \(\lambda_2\) är näst största egenvärdet och \(b\) definieras i §6.4. Detta ger den angivna ordinära relaxationsgränsen. Låt \(A\) beteckna den mindre sidan. Om \(\nu_0=\Pi(\cdot\mid A)\) består täthetsgränsen \(\nu_0(x)\le\Pi(x)/\Pi(A)\) under Markovutvecklingen eftersom \(\Pi\) är stationär. Varje stegs ovillkorade sannolikhet för en passage från \(A\) till dess komplement är därför högst \(Q(A,A^c)/\Pi(A)\le b\). Unionsgränsen ger

\[
\Pr_{\nu_0}(\tau_{A^c}\le t)\le\min(1,tb).
\]

Ingen av gränserna ger en övre relaxationsgräns eller en skattning av genomsnittlig förstapassagetid. Begränsningen av startfördelningen är väsentlig för den angivna utträdesgränsen.

### B.4 Verifiering och historiska begränsningar

Korrigeringsarkivet innehåller audit v0.2 och dess ursprungliga källarkiv, oberoende granskning och kontroller. `scripts/check_witnesses.py` enumererar 15 partitioner vid \(N=4\) för kontroll av detaljerad balans. Oberoende `review/code/partition_chain_checks.py` kontrollerar kedjor vid \(N=5,6\) (24 parameterkombinationer); segmentet med exakta kedjor kördes om. Den oförändrade äldre uppdateringsslingan vid \(N=8\) jämfördes mot fördelningen av granskaren i en längre Monte Carlo-körning, bevarad som granskarrapporterad [E]. `scripts/check_additions.py` och `results/additions.json` ger decimalrekursionen, övergången och gränserna. `review/code/escape_time.py` och dess sparade utdata dokumenterar den explorativa återhämtningsundersökningen. Inget anspråk görs på fullständigt historiskt svep, omkörning av lång Monte Carlo eller undersökning av litteraturprioritet. De medföljande historiska figurerna behåller ursprungliga etiketter endast i arkivet; korrigeringen återpublicerar dem inte som evidens för en vikning.

### B.5 Förkastade unifieringar

Den ursprungliga undersökningen förkastade en enda räckviddsparameter, universell koppling mellan förbättring och utmaningsbarhet, nödvändigt externt skydd samt universell själverosion. Denna revision drar även tillbaka den påstådda identiteten mellan fyra formalismer, nivån med robust kollaps, det universella referensexcitationsvillkoret och den påstådda irreversibla vikningen. Källtermslokalitet förblir en villkorad designfråga [IP]; de exakta partitions- och flaskhalsresultaten är [M] inom sin angivna modell. Ingen enda skalär etableras mellan discipliner. Den fasta barriären testar inte endogent skydd; den frågan och skarven vid fast hypotesrum förblir [H].
