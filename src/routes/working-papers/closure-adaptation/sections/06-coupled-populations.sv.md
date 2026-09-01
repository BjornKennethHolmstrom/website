## 6. Kopplade populationer: polarisering och kaskadkollaps

Enpopulationsmodellen behandlar ett styrsystem som internt homogent. Verkliga styrsystem är heterogena: olika grupper, regioner eller institutioner inom ett samhälle delar en miljö men kan ha olika tillitskapacitet, gränsstyrka och permeabilitetsnivåer. Detta avsnitt utvidgar modellen till två kopplade populationer som delar en gemensam miljöosäkerhet \(U\). Utvidgningen gör det möjligt att ställa två frågor som enpopulationsmodellen inte kan besvara:

1. **Polarisering:** Kan två populationer som står inför samma yttre förhållanden hamna i olika regimer – en öppen, en sluten – på grund av olika initialvillkor?

2. **Kaskadkollaps:** Kan en chock som driver en population in i slutenhet dra även den andra in i slutenhet, trots att den andra populationen inte drabbades direkt?

Båda frågorna är direkt relevanta för styrningen av heterogena samhällen, där öppenhet och slutenhet ofta samexisterar och där lokala kriser kan få systemiska konsekvenser.

### 6.1 Tvåpopulationsmodell

Tvåpopulationsmodellen består av en delad osäkerhetsvariabel \(U\) och två kopior av de fyra snabba variablerna \((B,T,E,P)\), en för varje population. Ekvationerna är:

\[
\begin{aligned}
\dot U &= n(1-U) - \alpha \big( E_1(1-\beta Q_1) + E_2(1-\beta Q_2) \big) U, \\
\dot B_i &= \rho_B \, \sigma\!\big(k_B(F_i-\theta)\big) - d_B B_i, \\
\dot T_i &= \rho_T E_i (1-\beta_T Q_i) - d_T T_i - \gamma Q_i T_i, \\
\dot E_i &= \rho_E \, \sigma\!\Big( k_E \big( \frac{\alpha U}{1+\eta Q_i} - c_E \big) \Big) - d_E E_i, \\
\dot P_i &= \rho_P \left( 1 - \sigma\!\big( k_P(F_i-\theta_P) \big) - P_i \right),
\end{aligned}
\]

för \(i=1,2\), där

\[
Q_i = (1-P_i) B_i, \qquad
F_i = \frac{s U}{(1+\lambda T_i)(1+\mu B_i)}.
\]

De två populationerna är kopplade endast genom den delade osäkerheten \(U\). Varje population upplever samma faktiska osäkerhet men kan uppleva olika upplevd osäkerhet på grund av sin egen tillit och gränsstyrka. Kopplingen är indirekt: om en population minskar sitt utforskande stiger \(U\), vilket ökar den upplevda osäkerheten för båda populationerna.

Detta är en avsiktligt minimal form av koppling. Den fångar tanken att grupper inom ett samhälle delar en gemensam miljö även när de inte direkt interagerar eller samordnar sig. Den utesluter också, för denna analys, mer direkta former av koppling såsom handel, migration eller informationsutbyte. Senare arbete kan lägga till dessa kanaler.

### 6.2 Polarisering som utgångsläge

Vi körde först tvåpopulationsmodellen från asymmetriska initialvillkor vid \(s=1,5\):

- **Population 1 (öppen start):** \(B_1=0,02,\ T_1=0,95,\ E_1=0,90,\ P_1=0,9\)
- **Population 2 (sluten start):** \(B_2=0,90,\ T_2=0,02,\ E_2=0,05,\ P_2=0,1\)

Modellen integrerades under 500 tidsenheter.

Sluttillståndet var:

| Population | \(B\) | \(T\) | \(P\) |
|---:|---:|---:|---:|
| 1 (öppen start) | 0,147 | 1,000 | 0,698 |
| 2 (sluten start) | 0,764 | 0,003 | 0,232 |
| Delad \(U\) | 0,339 | | |

Figur 5 visar tidsutvecklingen av gränsstyrkorna för de två populationerna. Divergensen är stabil och ihållande: Population 1 stabiliseras i den öppna attraktorn med lågt \(B\), medan Population 2 förblir i ett slutet tillstånd med högt \(B\).

![Figur 5: Polarisering: två populationer med identiska parametrar men olika initialtillstånd. Population 1 (öppen start) konvergerar mot en öppen regim med låg gränsstyrka, hög tillit och hög permeabilitet; Population 2 (sluten start) förblir i en sluten regim med hög gränsstyrka, låg tillit och låg permeabilitet. Den delade osäkerheten U stabiliseras på en mellannivå.](/working-papers/images/closure-adaptation/figure5_polarization_time_series.png)

**Figur 5:** Polarisering: två populationer med identiska parametrar men olika initialtillstånd. Population 1 (öppen start) konvergerar mot en öppen regim med låg gränsstyrka, hög tillit och hög permeabilitet; Population 2 (sluten start) förblir i en sluten regim med hög gränsstyrka, låg tillit och låg permeabilitet. Den delade osäkerheten \(U\) stabiliseras på en mellannivå.

De två populationerna hamnade i olika attraktorer och stannade där. Population 1 återhämtade sig till det öppna tillståndet med låg gräns, hög tillit och hög permeabilitet. Population 2 förblev i ett slutet tillstånd med hög gräns, nära noll tillit och låg permeabilitet, även om dess gränsstyrka inte var maximal eftersom den delade osäkerheten hölls nere av Population 1:s utforskande.

Detta är en formell representation av **stabil polarisering**. De två populationerna är identiska i sina parametrar och möter samma miljö. De skiljer sig endast i sina initialvillkor. Ändå förstärks dessa initiala skillnader av dynamiken, och populationerna hamnar i markant olika institutionella regimer. Den öppna populationen drar inte den slutna populationen öppen, och den slutna populationen drar inte den öppna populationen sluten. De samexisterar.

Mekanismen är samma positiva återkoppling som identifierades i enpopulationsmodellen: hög tillit håller den upplevda osäkerheten låg, vilket håller gränserna små och permeabiliteten hög; låg tillit gör det motsatta. När populationerna är kopplade endast genom \(U\) kan dessa återkopplingar verka i stort sett oberoende inom varje population, förutsatt att den delade \(U\) förblir inom ett intervall som stöder båda attraktorerna.

### 6.3 Kaskadkollaps

Det andra experimentet frågade om en allvarlig chock mot en population kan sprida sig till den andra. Båda populationerna började öppna vid \(s=1,5\):

\[
B_1=B_2=0,02,\quad T_1=T_2=0,95,\quad E_1=E_2=0,90,\quad P_1=P_2=0,9.
\]

Vid tiden \(t=100\) utsattes Population 1 för en kombinerad chock under 30 tidsenheter:

- \(s\) höjdes från \(1,5\) till \(3,0\) för hela systemet, vilket ökade den upplevda osäkerheten för båda populationerna;
- \(P_1\) tvingades ned till \(0,02\), medan \(P_2\) lämnades fri att utvecklas normalt.

Efter chocken återgick \(s\) till \(1,5\) och tvånget på \(P_1\) togs bort.

Sluttillståndet, efter 500 tidsenheter, var:

| Population | \(B\) | \(T\) | \(P\) |
|---:|---:|---:|---:|
| 1 (chockad) | 1,000 | 0,022 | 0,010 |
| 2 (icke chockad) | 1,000 | 0,022 | 0,010 |
| Delad \(U\) | 0,765 | | |

Figur 6 visar kaskaddynamiken. Båda gränsstyrkorna stiger och låser sig vid 1,0, och båda tillitsnivåerna kollapsar till nära noll, trots att Population 2 aldrig utsattes för någon direkt permeabilitetschock.

![Figur 6: Kaskadkollaps: båda populationerna startar öppna. Population 1 utsätts för en kombinerad chock (höjt s och tvingat lågt P) vid t=100. Population 2, som inte tvingas direkt, kollapsar ändå in i slutenhet genom den delade ökningen av faktisk osäkerhet U. Båda populationerna slutar med B=1,0 och nära noll tillit.](/working-papers/images/closure-adaptation/figure6_cascade_collapse_time_series.png)

**Figur 6:** Kaskadkollaps: båda populationerna startar öppna. Population 1 utsätts för en kombinerad chock (höjt \(s\) och tvingat lågt \(P\)) vid \(t=100\). Population 2, som inte tvingas direkt, kollapsar ändå in i slutenhet genom den delade ökningen av faktisk osäkerhet \(U\). Båda populationerna slutar med \(B=1,0\) och nära noll tillit.

Båda populationerna kollapsade in i slutenhet, trots att Population 2 aldrig direkt tvingades till låg permeabilitet.

Kaskaden sker genom den delade osäkerhetsvariabeln. Under chocken gör Population 1:s påtvingade opacitet att dess gränsstyrka stiger snabbt och att dess utforskande kollapsar. Eftersom Population 1 inte längre bidrar till osäkerhetsminskningen stiger \(U\). Den förhöjda \(U\) ökar den upplevda osäkerheten för Population 2, även om Population 2:s egen permeabilitet och tillit inledningsvis är intakta. När Population 2:s upplevda osäkerhet korsar dess gränströskel börjar den bygga gränser. Dess utforskande avtar, vilket höjer \(U\) ytterligare. De två populationerna drar sedan ned varandra.

Detta är en formell modell av **smitta av slutenhet**. En lokal kollaps av öppenhet kan genom den delade miljön förstöra förutsättningarna för öppenhet på annat håll. Den icke chockade populationen är inte ett passivt offer; den reagerar rationellt på den ökade osäkerhet som den chockade populationen orsakat, men dess respons – att bygga gränser – gör situationen värre för båda.

### 6.4 Jämförelse med enpopulationsresultaten

Resultatet för kaskadkollaps är förenligt med experimentet med kombinerad chock i enpopulationsmodellen, men det tillför en ny mekanism. I enpopulationsfallet kan ett system förbli öppet även vid högt \(s\) om dess permeabilitet förblir hög. I tvåpopulationsfallet hade Population 2 inledningsvis hög permeabilitet, men den kollapsade ändå eftersom stigningen i \(U\) orsakad av Population 1 var tillräckligt stor för att överväldiga dess tillit–utforskandeslinga.

Detta antyder att i ett kopplat system beror öppenheten hos en enskild komponent inte bara på dess egen interna tillit och permeabilitet, utan också på systemets samlade utforskandekapacitet. Om en komponent fallerar kan den resulterande ökningen av delad osäkerhet driva andra förbi deras tipppunkt. Detta är den dynamiska motsvarigheten till Paper X:s korrelationsfel: ett system av kopplade observatörer kan fallera tillsammans inte för att de är identiska, utan för att de delar en miljö vars osäkerhet produceras av deras samlade agerande.

### 6.5 Institutionell tolkning

Polariseringsresultatet ger formellt stöd åt observationen att öppna och slutna samhällen kan samexistera i samma internationella miljö. Två regioner eller grupper med olika historia, även med identiska formella regler, kan hamna i olika institutionella jämvikter. Detta är inte ett bevis för att institutioner inte spelar någon roll; snarare visar det att historiskt stigberoende kan dominera marginella institutionella skillnader.

Kaskadresultatet är mer oroande. Det antyder att en allvarlig stängningshändelse i en del av ett system – en plötslig auktoritär vändning, en kollaps av pressfriheten, en panikdriven försegling av gränser – kan sprida sig till andra delar genom den delade osäkerhet den genererar. Mekanismen är inte direkt tvång eller imitation; det är den ökade tvetydighet och oförutsägbarhet som den första stängningen ålägger andra.

Detta har konsekvenser för styrningsdesign. Om öppenhet är en kollektiv nyttighet inom ett kopplat system, beror bevarandet av öppenhet i en del delvis på de andras öppenhet. Ett system som vill förbli öppet måste därför investera inte bara i sin egen tillit och permeabilitet, utan också i att buffra sig mot den osäkerhet som produceras av stängningar på annat håll. Några konkreta åtgärder som följer av modellen:

- **Redundans i utforskandekapacitet:** upprätthåll flera oberoende kanaler för osäkerhetsminskning så att en kanals fall inte höjer \(U\) till farliga nivåer för resten.
- **Delade tidiga varningssystem:** om populationer kan övervaka varandras permeabilitets- och gränsdynamik kan de förutse en stängningskaskad och stärka sina egna buffertar innan \(U\) stiger.
- **Isolering från gemensamma chocker:** eftersom chocken överfördes genom \(s\), som applicerades på båda populationerna, kan modellen inte skilja mellan ett verkligt gemensamt miljöhot och ett hot som är lokalt men höjer osäkerheten för alla. Styrsystem som kan skilja dessa fall åt kan vara bättre på att undvika överreaktion.

Dessa är principiella tolkningar av modellen, inte empiriska påståenden. De följer av kopplingens struktur och attraktorernas form.

### 6.6 Sammanfattning

Tvåpopulationsutvidgningen visar att tillslutnings–anpassningsdynamiken från enpopulationsmodellen generaliseras till ett heterogent system på två viktiga sätt. För det första kan populationer med olika historia stabilt polariseras i öppna och slutna regimer under identiska yttre förhållanden. För det andra kan en allvarlig stängningshändelse i en population kaskadera till andra genom den delade osäkerhet den skapar, vilket leder till systemomfattande kollaps. Dessa resultat kopplar modellen till styrningen av pluralistiska samhällen och till de systemrisker som skapas av lokala institutionella misslyckanden.

Nästa avsnitt återvänder till enpopulationsmodellen och frågar om en enkel styrningsdesignregel – ett konstitutionellt minimum för gränspermeabilitet – kan förhindra tillslutningsfällan och dess kaskadkonsekvenser.
