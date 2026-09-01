## 4. Fasdiagram och robusthet hos tillslutningsfällan

Den analytiska strukturen i avsnitt 3 indikerar att bistabilitet bör uppträda för ett intervall av parametrar, men den fastställer inte i sig hur stort eller robust detta intervall är. För att besvara detta genomförde vi systematiska simuleringar över ett rutnät av insatser \(s\), toleranströskel \(\theta\) och permeabilitetsanpassningshastighet \(\rho_P\). Resultaten visar att tillslutningsfällan är ett generiskt drag hos modellen, inte en artefakt av ett snävt parameterval.

### 4.1 Design av parametersvep

Vi svepte de två parametrar som mest direkt styr avvägningen mellan gränser och tillit:

- \(s\) (insats-/osäkerhetsmultiplikator): 20 värden från \(0{,}5\) till \(1{,}8\)
- \(\theta\) (toleranströskel för upplevd osäkerhet): 20 värden från \(0{,}08\) till \(0{,}32\)

För vart och ett av fyra värden på den långsamma permeabilitetsanpassningshastigheten \(\rho_P \in \{0{,}01, 0{,}02, 0{,}05, 0{,}10\}\) körde vi den deterministiska femvariabelmodellen från två initialvillkor:

- **Öppen start:** \(U=0{,}2,\ B=0{,}02,\ T=0{,}95,\ E=0{,}90,\ P=0{,}9\)
- **Sluten start:** \(U=0{,}8,\ B=0{,}90,\ T=0{,}02,\ E=0{,}05,\ P=0{,}1\)

Varje simulering integrerades till \(t=180\) med \(dt=0{,}05\), och det slutliga \(B\) medelvärdesbildades över de sista 200 tidsstegen. Sluttillståndet klassificerades med följande regler:

- **Öppen:** \(B_{\text{final}} < 0{,}20\)
- **Sluten:** \(B_{\text{final}} > 0{,}55\)
- **Mellanliggande:** \(0{,}20 \leq B_{\text{final}} \leq 0{,}55\)
- **Oscillerande:** standardavvikelsen för \(B\) över slutet \(> 0{,}05\)

Två begrepp för bistabilitet beräknades:

- **Svag bistabilitet:** de två initialvillkoren leder till olika slutliga klassificeringar (varje skillnad).
- **Stark bistabilitet:** den öppna starten slutar öppen (\(B<0{,}2\)) och den slutna starten slutar sluten (\(B>0{,}55\)).

Simuleringarna är deterministiska; alla resultat som rapporteras här är **[R inom modell]** för det angivna parameterrutnätet och klassificeringströsklarna.

### 4.2 Kvalitativ struktur hos fasdiagrammet

Fasdiagrammet för varje \(\rho_P\) uppvisar samma tre-regionstruktur. Figur 1 visar en representativ värmekarta för \(\rho_P=0{,}02\).

![Figur 1: Fasdiagram för enpopulationsmodellen för rhoP = 0,02. Färgerna anger den slutliga regimklassificeringen från öppna och slutna initialvillkor, sammanvägd till svaga bistabilitetskategorier. Det breda diagonala bandet visar området för stigberoende institutionella utfall.](/working-papers/images/closure-adaptation/figure1_phase_diagram_rhoP_002.png)

**Figur 1:** Fasdiagram för enpopulationsmodellen för \(\rho_P=0{,}02\). Färgerna anger den slutliga regimklassificeringen från öppna och slutna initialvillkor, sammanvägd till svaga bistabilitetskategorier. Det breda diagonala bandet visar området för stigberoende institutionella utfall.

Tre regioner framträder:

1. **Låga insatser, hög tolerans:** systemet är öppet oavsett initialvillkor. Denna region upptar den övre vänstra delen av \((s,\theta)\)-planet, där upplevd osäkerhet sällan överstiger gränströskeln och tillit och utforskande är självbärande.

2. **Höga insatser, låg tolerans:** systemet är slutet oavsett initialvillkor. Denna region är liten och upptar endast cirka 2–3 % av det testade rutnätet. Under dessa förhållanden är den upplevda osäkerheten så hög att inte ens ett system med stark tillit kan förhindra gränseskalering.

3. **Ett brett diagonalt band av bistabilitet:** mellan dessa ytterligheter kan samma \((s,\theta)\)-par bära antingen den öppna eller den slutna attraktorn, beroende på initial historia. Detta band är modellens representation av stigberoende institutionella val: två samhällen som står inför identiska miljöförhållanden kan hamna i mycket olika regimer på grund av skillnader i sin initiala tillit, gränsstyrka eller permeabilitet.

Övergången från öppen till sluten är inte abrupt; den sker genom en mellanzon där den öppna startgrenen kan stabilisera sig vid måttligt \(B\) innan den slutna startgrenen blir verkligt sluten. Detta är skälet till att svag bistabilitet täcker en större del av parameterrummet än stark bistabilitet.

### 4.3 Kvantifiering av robusthet: svag och stark stigbundenhet

Tabell 4.1 sammanfattar andelarna av det testade parameterrummet i varje regim, och Figur 2 visar samma information grafiskt.

![Figur 2: Bistabila andelar över permeabilitetsanpassningshastigheter. Svag bistabilitet (varje skillnad i slutlig klassificering) täcker ungefär 57–59 % av det testade parameterrummet, medan stark bistabilitet (öppen mot sluten) täcker ungefär 32–33 %.](/working-papers/images/closure-adaptation/figure2_bistable_fractions.png)

**Figur 2:** Bistabila andelar över permeabilitetsanpassningshastigheter. Svag bistabilitet (varje skillnad i slutlig klassificering) täcker ungefär 57–59 % av det testade parameterrummet, medan stark bistabilitet (öppen mot sluten) täcker ungefär 32–33 %.

**Tabell 4.1: Fasdiagramandelar per regim och permeabilitetsanpassningshastighet**

| \(\rho_P\) | Svag bistabilitet | Stark bistabilitet | Båda öppna | Båda slutna |
|---:|---:|---:|---:|---:|
| 0,01 | 0,588 | 0,328 | 0,380 | 0,020 |
| 0,02 | 0,585 | 0,330 | 0,378 | 0,023 |
| 0,05 | 0,578 | 0,325 | 0,383 | 0,023 |
| 0,10 | 0,568 | 0,323 | 0,383 | 0,030 |

Huvudfyndet är att stark stigbundenhet – samexistensen av ett verkligt öppet och ett verkligt slutet utfall för samma parametrar – uppträder i ungefär en tredjedel av det testade parameterrummet. Svag stigbundenhet, inklusive mellanliggande fall, täcker nästan 60 %. Endast en liten del av rutnätet tvingar fram ovillkorlig slutenhet; större delen av parameterrummet förblir antingen öppet eller historiskt kontingent.

Detta resultat besvarar robusthetsfrågan direkt: tillslutningsfällan är inte begränsad till en smal remsa av parameterrummet. Den är en strukturell egenskap hos dynamiken över ett brett spektrum av insatser, toleransnivåer och permeabilitetsanpassningshastigheter.

### 4.4 Effekt av permeabilitetsanpassningshastighet

Sammanfattningen visar också en måttlig men konsekvent effekt av \(\rho_P\): när permeabilitetsanpassningshastigheten ökar, minskar andelen starkt bistabila punkter något, från \(0{,}328\) vid \(\rho_P=0{,}01\) till \(0{,}323\) vid \(\rho_P=0{,}10\), och andelen båda-slutna punkter stiger från \(0{,}020\) till \(0{,}030\). Den genomsnittliga kollapströskeln förskjuts också nedåt med ungefär \(0{,}015\) över samma intervall (Tabell 4.2).

Detta antyder att snabbare permeabilitetsanpassning inte räddar systemet. Tvärtom, inom det testade intervallet ökar en mer responsiv permeabilitetsvariabel något det öppna tillståndets bräcklighet. Den troliga mekanismen är att när upplevd osäkerhet stiger, tillåter ett snabbare \(\rho_P\) att \(P\) faller snabbare under en transient, vilket fördjupar undertryckningen av tillit och utforskande innan systemet hinner återhämta sig. I styrningstermer motsvarar detta faran med snabb institutionell erosion under stress: rättsliga och transparensskydd som snabbt kan monteras ned är mindre skyddande än sådana som är långsamma och därmed svårare att försämra under panik.

### 4.5 Hysteresbredd

Tabell 4.2 rapporterar de genomsnittliga kollaps- och återhämtningströsklar som beräknats från fasdiagramrutnätet, tillsammans med den implicerade hysteresbredden. Figur 3 visar en representativ endimensionell hysteresloop för \(\rho_P=0{,}02\), med hjälp av modellen med dynamisk permeabilitet.

![Figur 3: Hysteresloop för gränsstyrka B när insatserna s långsamt ökas (uppåtsvep, öppen start) och sedan minskas (nedåtsvep, sluten start) vid rhoP = 0,02. Separationen mellan grenarna visar att återhämtning kräver väsentligt lägre insatser än kollapspunkten.](/working-papers/images/closure-adaptation/figure3_hysteresis_loop.png)

**Figur 3:** Hysteresloop för gränsstyrka \(B\) när insatserna \(s\) långsamt ökas (uppåtsvep, öppen start) och sedan minskas (nedåtsvep, sluten start) vid \(\rho_P = 0{,}02\). Separationen mellan grenarna visar att återhämtning kräver väsentligt lägre insatser än kollapspunkten.

**Tabell 4.2: Genomsnittliga trösklar och hysteresbredd**

| \(\rho_P\) | Genomsnittlig kollaps \(s\) | Genomsnittlig återhämtning \(s\) | Genomsnittlig hysteresbredd |
|---:|---:|---:|---:|
| 0,01 | 1,002 | 0,979 | 0,289 |
| 0,02 | 1,002 | 0,979 | 0,274 |
| 0,05 | 0,994 | 0,986 | 0,243 |
| 0,10 | 0,987 | 0,989 | 0,220 |

Hysteresbredden är positiv för alla testade \(\rho_P\), vilket bekräftar att trösklarna för kollaps och återhämtning skiljer sig åt. Ett system som har fallit in i det slutna tillståndet kräver att förhållandena blir märkbart säkrare innan det kan öppnas igen, jämfört med de förhållanden under vilka det ursprungligen kollapsade. Bredden minskar något med ökande \(\rho_P\), i enlighet med tolkningen ovan: snabbare permeabilitetsanpassning minskar gapet, men eliminerar det inte.

Dessa aggregerade tal är medelvärden över ett intervall av \(\theta\) och \(s\), och bör inte misstas för en enda universell tröskel. De endimensionella hysteresvep som rapporterats i tidigare utforskande arbete visar en skarpare separation, där återhämtning inträffar först efter att \(s\) sjunkit klart under kollapsvärdet. Den aggregerade tabellen bekräftar effektens riktning och robusthet, medan spridningen över \(\theta\) rapporteras i tilläggsdata.

### 4.6 Tolkning

Fasdiagramresultaten ger formellt innehåll åt den intuitiva tanken att civilisationer systematiskt överproducerar gränsstrukturer när osäkerheten överstiger deras förmåga till tillit. Det breda bistabilitetsområdet innebär att överproduktion inte är en universell lag utan en stigberoende möjlighet: för samma yttre förhållanden kan ett system förbli öppet medan ett annat låser sig. Skillnaden ligger i systemets historia – dess ackumulerade tillit, dess initiala gränsstyrka och dess permeabilitet.

Detta är den dynamiska motsvarigheten till den avvägning mellan gränser och tillit som förebådades i tidigare arbete. Den ger en konkret mekanism för varför samhällen med hög respektive låg tillit kan bestå sida vid sida i liknande miljöer, och varför en kris som driver ett samhälle in i slutenhet kanske inte påverkar ett annat med en annan initial konfiguration.

Nästa avsnitt vänder sig till brusets roll. Fasdiagrammet är deterministiskt; verkliga styrsystem möter stokastiska chocker, perceptuella fel och transienta störningar. Vi undersöker om brus kan flytta ett system över separatrisen och hur robust det öppna tillståndet är mot sådana störningar.
