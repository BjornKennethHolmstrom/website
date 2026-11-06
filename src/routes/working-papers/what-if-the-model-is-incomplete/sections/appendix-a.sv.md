## Bilaga A. Evidensstatus för varje påstående

Detta är rapportens auktoritativa förteckning över påståenden. I huvudtexten anges **[R]** tillsammans med ett statusord; här används precisa koder. *C-derived* markerar en logisk slutsats ur konfirmatoriska resultat, inte ett ytterligare test. Källvägarna avser projektarkivet för A2.

| Inferensstatus | Betydelse |
|:---|:---|
| **C** konfirmatoriskt | Förhandsdefinierat test på det oberoende, förbundna F0-C-urvalet. Gäller *inom den deklarerade syntetiska populationen och den hypotetiska 50/50-viktningen av R*. |
| **C-derived** | Logisk sammanställning av C-resultat; **ingen** extra prövad hypotes. |
| **PD** förhandsdefinierat deskriptivt | Deklarerat innan de konfirmatoriska data sågs, utan inferentiellt anspråk. |
| **ED** deklarerat explorativt | Deklarerat före utfallen i utvecklingsvärldar eller förhandsvalda världar; hypotesgenererande. |
| **EP** post hoc-explorativt | Analys som valdes efter att utfall hade blivit kända och därför märks som sådan. |
| **ST** strukturellt | Exakt egenskap hos den specificerade modellen, numeriskt verifierad. |

| Roll | Betydelse |
|:---|:---|
| **DS** beslutsvetenskap | Påståenden om själva beslutsproblemet. |
| **NM** numeriska metoder | Påståenden om estimatorer eller lösare; varje rad anger om interventionen var prospektiv och om den gäller en enda fixerad historia. |
| **ENG** teknisk verifiering | Validering och paritet; bygger tillit till koden, inte forskningsresultat i sig. |

Förkortningar: R = retention nedströms, S = synkronisering, C = regnkopula; F0 = U1-målet; F1-eco = U1 + $\lambda$ gånger ekologiskt underskott. Varje kvantitativt påstående har en namngiven källfil.

### Grupp A — Målens tillräcklighet och kausal representation

| # | Påstående (med namngivet kriterium) | Källa | Världar | Status / roll | Viktiga tal | Begränsningar |
|:---|:---|:---|:---|:---|:---|:---|
| A1 | Med deklarerad hypotetisk 50/50-viktning av R har **REP(R) (F0 på 111) lägre genomsnittlig U1** än COMP (F1-eco på 011) | F0-C primär; `f0c_confirmatory.json` | 40 oberoende testvärldar | C / DS | $\Delta=-1.112$ U1 [−1.737, −0.487], $t(39)=-3.60$, $p=0.00089$ | Precisionsmål missat (halvbredd 0,625); 30/40 negativa, från −6,10 till +4,92 (t18); approximativ t-inferens villkorad av generatorn |
| A2 | Samma kontrast för **U2** (U1 + påföljd för största kommunskadan): REP har lägre värde | F0-C sekundär | 40 | C / DS | −1,061 [−1,734, −0,388]; Holm-$p$ 0,0028 | U2 är inte ett heltäckande fördelningsmått; KI är ojusterade 95 %, p-värden Holm-justerade |
| A3 | För **ackumulerat våtmarksunderskott uppströms** är COMP bättre | F0-C sekundär | 40 | C / DS | +6,362 [+4,235, +8,489]; Holm-$p$ $1.3\times10^{-6}$ | Modellstorhet, inte fältindikator; samma KI/p-reservation som A2 |
| A4 | För **negativt terminalt våtmarksbestånd** är COMP bättre (dvs. mer våtmark) | F0-C sekundär | 40 | C / DS | +1,543 [+1,056, +2,030]; Holm-$p$ $5.6\times10^{-7}$ | Som A3 |
| A5 | BOTH(R), F1-eco på 111, har **högre U1** än REP(R) | F0-C sekundär | 40 | C / DS | +1,603 [+0,992, +2,214]; Holm-$p$ $9.6\times10^{-6}$ | BOTH:s ekologiska utfall ingick inte i testet |
| A6 | För den förhandsdefinierade REP(R)-mot-COMP-jämförelsen med hypotetisk 50/50-viktning pekar medelskillnaderna i **motsatta riktningar**: REP har lägre U1 och U2, COMP mindre underskott och mer terminal våtmark. **Ingen av dessa två policyer är entydigt bäst på alla namngivna kriterier** | A1–A4 tillsammans | 40 | **C-derived** / DS | — | Inte ett sjätte test; säger inget om andra strategier eller icke-dominans för varje värld |
| A7 | Den deklarerade deskriptiva jämförelsen fann en liten observerad genomsnittlig **U1-kontrast för utelämnad R under F1-eco (+0,014)** mot **+1,851 under F0**, med $m^*=111$, $s=0$, $\psi=0$ | F0-C deskriptiv; `f0c_descriptive.json` | 40 | PD / DS | F0 +1,851 [+0,80, +2,90]; F1-eco +0,014 [−0,17, +0,20]; F1-eco-fixed +0,094 [−0,21, +0,40] | **Inget ekvivalens- eller non-inferiority-test**; intervallet rymmer meningsfulla positiva och negativa värden; fast $\lambda$ testar bara normalisering; en mekanism och basmodell |
| A8 | F1-eco har ett **U1-pris när modellen är korrekt** (måltermen) | F0-C deskriptiv | 40 | PD / DS | +1,085 [+0,61, +1,56] | Måltermen är inte hela kostnaden för den använda policyn |
| A9 | Grenen där R saknas är också negativ (deskriptiv undergrupp). Utvecklingsdekompositionen **tyder på** att F1-eco:s U1-premium överstiger REP:s kostnad för fel modell; detta beror inte på att REP:s modell är korrekt. Motsvarande läsning av 40-världstabellerna är explorativ. | `f0c_confirmatory.json`; `F0DEV_RESULTS_v0.1.md` §5; bilaga B, T4 | 40 / 16 | PD / ED / EP | 011-gren −1,125 [−2,126, −0,124]; utveckling: 1,06 mot 2,42; testvärldar: 1,765 mot 2,890 | Målkontrast, inte kausal upptäckt eller konfirmerad mekanism |
| A10 | Kostnaden för att utelämna R under F0 är asymmetrisk och regnberoende | F0-dev-dekomposition; bilaga B T2/T4 | d00–d15 | ED / DS | 0,28 / 1,45 / 2,91 vid $\psi=-0.1/0/+0.1$ | Delvis tidigare studerade utvecklingsvärldar |
| A11 | F1-eco är **mindre känslig för fel i planeringsparametrar** än F0 enligt U1 | F0-dev-dekomposition; bilaga B T1 | d00–d15 | ED / DS | Parameter/skift-termer vid $s=0,25$: F0 1,3–1,9 mot F1-eco 0,5–0,7 | Utvecklingsresultat; testvärldsanalysen är explorativ |
| A12 | Korrekt representerade strategier domineras nästan aldrig på tvådimensionella fronter; målet väljer främst en punkt på U1–ekologi-fronten | F0-dev Pareto; bilaga B T6 | d00–d15 | ED / DS | Icke-dominerad andel 1,00 (ett fall 0,94) | Bara tvådimensionella fronter; inte alla tänkbara policyer |
| A13 | **Vikten av en utelämnad mekanism beror på parameterosäkerheten och omständigheterna.** Vid $s=0$ står R för största delen av F0:s U1-effekt; vid $s=0,25$, $\psi=0$ är effekten av utelämnad C större än utelämnad R | Gate C-pilotens faktoriella huvudeffekter på F0-ånger | 8 utvecklingsvärldar ($s=0$); 8 × 2 dragningar ($s=0,25$) | ED / DS | $s=0,\psi=0$: R +0,796, S −0,003, C +0,027. $s=0,\psi=+0,1$: R +2,046, S −0,011, C +0,016. $s=0,25,\psi=0$: **R +0,338, S −0,013, C +0,434**. $s=0,25,\psi=-0,1$: R −0,131, C +0,397 | Fysisk mask 111, planeringsmasker ablaterade: effekter i planeringen, inte fysiska effektstorlekar; litet tidigare undersökt urval, stora SD |
| A14 | I piloten kompenserade det ekologiska målet inte för U1-kostnaden av utelämnad struktur | Gate C-pilot `summary.txt` | 8 | ED / DS | Återvinningskvot cirka −0,31 till −0,37 ($s=0,\psi=0$) | Förenligt med A8 |

### Grupp B — Exponering och identifierbarhet

| # | Påstående | Källa | Världar | Status / roll | Viktiga tal | Begränsningar |
|:---|:---|:---|:---|:---|:---|:---|
| B1 | Utan våtmarker uppströms är **de specificerade mekanismvillkorade övergångslikelihoodarna identiska** med och utan R | E1-lite-inventering; G1-R V3; G3-kontroller | Alla | ST / DS | 100 % av oexponerade tillstånd–handlingspar är exakta nollfall; G3:s blinda log-BF är exakt 0 *för just den villkorliga likelihood som utvärderats* | Visar inte att fullständiga policy-/tillståndshistoriker saknar information under varje möjlig observationsmodell |
| B2 | **Exponeringsfällor:** under den valda passiva policyn förblir R oexponerad i vissa världar där mekanismen spelar roll (d05) | D1–D2; G3-supplement | d00–d07 samt syntetiska | ED / DS | 7 exakta fällor (värld × mekanism) i 6 världar (6 R, 1 S); d05-beläggning av R-exponering 0,000 | Förhandsvalda utvecklingsvärldar; stationär passiv drift från S0 |
| B3 | Exponering är nödvändig men inte tillräcklig: i d05 etablerar sonderingen våtmark men ger sällan urskiljbara övergångar inom tre år | E1-lite G2 | d05 | ED / DS | $P(\text{posteriorn ändrad})=0$ vid $k\le2$ och 0,15 vid $k=3$ (gemensam), trots etablerad våtmark på 77–99 % av banorna | Optimistiska, brusfria tillståndsobservationer |
| B4 | **Tidsordning:** ett ettårigt experiment kan inte informera den övergångsbaserade läraren eftersom första övergången börjar oexponerad | E1-lite G2 | Alla | ST / DS | Posteriorn vid $k=1$ är lika med priorn på varje historia | Specifikt för denna övergångsbaserade algoritm |

### Grupp C — Lärandets värde

| # | Påstående | Källa | Världar | Status / roll | Viktiga tal | Begränsningar |
|:---|:---|:---|:---|:---|:---|:---|
| C1 | **Fullständig förhandskunskap O\*** (känner R från period 0): gränsen relativt P0, $C(P0)-C(O^*)$, är betydande när R spelar roll och noll i kontroller. Detta är **inte** X\* | E0 och E0-korrigendum | d00, d05, d02; kontroller d03, d07 | ED / DS | d00 0,92 / 1,84 / 2,76; d05 0,59 / 1,18 / 1,77 vid $q=0,25/0,5/0,75$ | **Inte EVPI**; förhandsvalda världar |
| C2 | **Oraklet efter fast sondering X\***: nettomarginalen mot en begränsad meny av fasta policyer är sällan positiv | E0/E0.2 | Samma | ED / DS; E0.2-jämförelsen post hoc | X\* slår B_extended i **10/54** primära och **7/54** känslighetsceller med relevant R; **10/90** och **7/90** inklusive kontroller | B_extended är begränsad; X\* ger ett tak inom den valda sonderingen, inte universell EVPI eller en gräns för alla adaptiva policyer |
| C3 | En exakt bayesiansk lärandealgoritm med sondering och fast fortsättning återvinner högst cirka 18 % av **X\*:s marginal över B_extended** ($\kappa$); deklarerat kriterium uppnås inte | E1-lite G2 | Samma | ED / DS | $\kappa\ge0,5$ i 0/9 primära celler; bästa $\kappa=0,107$ primärt och 0,179 i känslighet | Känt tvåhypotesproblem, brusfritt tillstånd, engångsåtagande |
| C4 | Nästan hela algoritmens vinst mot samma väg med fast fortsättning kommer från tillståndsberoende val, inte posterioruppdatering | E1-lite G2.1 | Samma | ED / DS, deskriptiv uppdelning | Informationsvärde högst 0,069 U1; 2,1 % av större primära vinster | Gäller denna algoritm och jämförelse, inte alla lärandeprocesser |

### Grupp D — Numeriska metoder och teknisk verifiering

| # | Påstående | Källa | Status / roll | Huvudresultat | Räckvidd |
|:---|:---|:---|:---|:---|
| D1 | Slumpvandrings-SMC gav opålitliga evidensskattningar i den blinda 16-dimensionella diagnostiken; G3.2:s detektionsandelar kan inte tolkas | `G32_FINDINGS_v0.1.md` | EP / NM | Skilda replikat gav olika slutsatser i upp till 11/24 fall | Blind 16-D, D3a-paket |
| D2 | Validerade kvadraturreferenser: **1-D** via G3.3a (FAIL) och G3.3a-R (PASS); **2-D** via G3.3b-1 (48/48 referenser validerade) | G3.3a/G3.3a-R/G3.3b-1 | ED / NM | 1-D inom $10^{-3}$ nats (Simpson upp till $1.8\times10^{-5}$ men långsam); 2-D 48/48 och exakta nollfall | Specifika referensfall |
| D3 | En **evaluatorinformerad, prospektivt jämförd riktad uppdelning** minskade felet i evidensskattningen **på en enda fixerad syntetisk 2-D-historia**. Färre likelihoodberäkningar men **inte konsekvent lägre körtid** | G3.3b-1 → 1M → 1P → P3.1 → P3.1-R → P3.2 | ED / NM | Medelvärde $\lvert\log BF\text{-fel}\rvert$: 1,625→0,404 (512 partiklar), 0,457→0,181 (2 048). Partikelårskostnaden minskade; klocktid 136 mot 118 s vid 512 (långsammare), 274 mot 339 s vid 2 048 (snabbare) | Kräver känd posteriorgeometri; en historia; **inte** en utplacerbar blind högdimensionell estimator |
| D4 | F0-maskineriet verifierades: orakel, lexikografiska likheter, dekompositionsidentiteter, beläggningsutvärderare och Monte Carlo-kontroll | F0-V FAIL → F0-V-R PASS; F0-C validate-c PASS; sandboxparitet FAIL / workstationparitet PASS | ENG | Identiteter exakta; dokumenterade problem i teststatistik och plattformsberoende likhetsval | — |
| D5 | Valideringsstatistik kan förkasta korrekt kod (normalapproximation för sällsynta händelser; felaktig deklarerad olikhet) | E1-lite G1, F0-V | EP / NM | FAIL-poster bevarades och följdes av nya deklarerade korrigeringar | Metodlärdom |

