# Appendix A — Formella härledningar

Detta appendix tillhandahåller de matematiska härledningarna som ligger till grund för den legitimitetsviktade tillståndsrymdmodellen i Del II. Det definierar det kopplade aktiverings–observations-systemet, härleder Kalmanfiltrats försämring under fallande observations-legitimitet, formaliserar legitimitetsdynamiken med hysteresasymmetri och mekanismen för delat tillstånd med transparens, samt karakteriserar legitimitetsfällan som en sektorbegränsad ickelinjäritet i reglerslingan.

## A.1 Legitimitetsviktad tillståndsrymdmodell

Baslinjemodellen är det diskreta linjära systemet

\[
\begin{aligned}
\mathbf{x}(t+1) &= \mathbf{A}\,\mathbf{x}(t) + \mathbf{B}\,\mathbf{u}(t) + \mathbf{w}(t), \quad \mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{W}), \\[4pt]
\mathbf{y}(t)   &= \mathbf{C}\,\mathbf{x}(t) + \mathbf{v}(t), \quad \mathbf{v}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{V}_0),
\end{aligned}
\]

där \(\mathbf{x}(t) \in \mathbb{R}^n\) är det sanna tillståndet, \(\mathbf{u}(t) \in \mathbb{R}^m\) är styrsignalen, \(\mathbf{y}(t) \in \mathbb{R}^p\) är mätvärdet, och \(\mathbf{A}, \mathbf{B}, \mathbf{C}\) är de nominella dynamik-, aktiverings- och observationsmatriserna. Bruskovarianserna \(\mathbf{W}\) och \(\mathbf{V}_0\) representerar irreducibel process- och mätosäkerhet under perfekt legitimitet.

**Legitimitetsberoende kanaler.**  
Legitimitet modelleras som två skalära parametrar \(L_B(t), L_C(t) \in [0,1]\). De modifierar aktiverings- och observationskanalerna:

\[
\mathbf{B}_{\text{eff}}(t) = L_B(t)\,\mathbf{B}, \qquad
\mathbf{V}(t) = \frac{\mathbf{V}_0}{L_C(t)}.
\]

Det effektiva system som är tillgängligt för regulatorn är således

\[
\begin{aligned}
\mathbf{x}(t+1) &= \mathbf{A}\,\mathbf{x}(t) + L_B(t)\,\mathbf{B}\,\mathbf{u}(t) + \mathbf{w}(t), \\[4pt]
\mathbf{y}(t)   &= \mathbf{C}\,\mathbf{x}(t) + \mathbf{v}(t), \quad \mathbf{v}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{V}_0 / L_C(t)).
\end{aligned}
\]

När \(L_B = L_C = 1\) opererar regulatorn med sin fullständiga designade auktoritet och avkänningsprecision. När någon av parametrarna faller försvagas aktiveringen och mätbruset förstärks. De två kanalerna kopplas samman genom det gemensamma beroendet av \(L_B\) och \(L_C\) på det underliggande tillitstillståndet; i den skalära \(L\)-approximation som används i huvudtexten sätter vi \(L_B = L_C = L(t)\).

## A.2 Kalmanfiltrats försämring under fallande observations-legitimitet

En väldesignad regulator använder inte råa mätningar direkt utan filtrerar dem genom en tillståndsskattare. Under gaussiskt brus och linjär dynamik är den optimala skattaren Kalmanfiltret. Filtret propagerar en tillståndsskattning \(\hat{\mathbf{x}}(t)\) och en felkovarians \(\mathbf{P}(t)\) via två steg:

**Prediktion.**
\[
\hat{\mathbf{x}}(t|t-1) = \mathbf{A}\,\hat{\mathbf{x}}(t-1) + L_B(t-1)\,\mathbf{B}\,\mathbf{u}(t-1),
\]
\[
\mathbf{P}(t|t-1) = \mathbf{A}\,\mathbf{P}(t-1)\,\mathbf{A}^{\!\top} + \mathbf{W}.
\]

**Uppdatering.** Vid mottagandet av \(\mathbf{y}(t)\),
\[
\mathbf{K}(t) = \mathbf{P}(t|t-1)\,\mathbf{C}^{\!\top}\bigl(\mathbf{C}\,\mathbf{P}(t|t-1)\,\mathbf{C}^{\!\top} + \mathbf{V}(t)\bigr)^{-1},
\]
\[
\hat{\mathbf{x}}(t) = \hat{\mathbf{x}}(t|t-1) + \mathbf{K}(t)\bigl(\mathbf{y}(t) - \mathbf{C}\,\hat{\mathbf{x}}(t|t-1)\bigr),
\]
\[
\mathbf{P}(t) = \bigl(\mathbf{I} - \mathbf{K}(t)\,\mathbf{C}\bigr)\,\mathbf{P}(t|t-1).
\]

Kalmanförstärkningen \(\mathbf{K}(t)\) avgör hur mycket vikt filtret ger åt den nya mätningen relativt den modellbaserade förutsägelsen. Den beror omvänt på mätbruskovariansen \(\mathbf{V}(t) = \mathbf{V}_0 / L_C(t)\).

**Gränsbeteende då \(L_C \to 0\).**  
När observations-legitimiteten avklingar, \(L_C(t) \to 0\) och \(\mathbf{V}(t) \to \infty\) (dess egenvärden divergerar). Innovationskovariansen \(\mathbf{S}(t) = \mathbf{C}\mathbf{P}(t|t-1)\mathbf{C}^{\!\top} + \mathbf{V}(t)\) blir dominerad av \(\mathbf{V}(t)\), så

\[
\lim_{L_C \to 0} \mathbf{K}(t)
   = \lim_{\mathbf{V} \to \infty} \mathbf{P}(t|t-1)\,\mathbf{C}^{\!\top}\bigl(\mathbf{C}\mathbf{P}(t|t-1)\mathbf{C}^{\!\top} + \mathbf{V}\bigr)^{-1}
   = \mathbf{0}.
\]

Kalmanförstärkningen försvinner. Uppdateringssteget reduceras då till

\[
\hat{\mathbf{x}}(t) = \hat{\mathbf{x}}(t|t-1) = \mathbf{A}\,\hat{\mathbf{x}}(t-1) + L_B(t-1)\,\mathbf{B}\,\mathbf{u}(t-1),
\]

vilket är den interna modellens öppen-slinga-propagering. Filtret ignorerar alla inkommande mätningar. Regulatorns skattning av systemtillståndet drivs helt av dess förhandsuppfattning \(\mathbf{A}\) och dess egna tidigare kommandon, okorrigerat av verkligheten. Detta är den formella mekanismen för *dashboard-isolering*: en kollaps av observations-legitimitet tvingar regulatorn att operera blind, oavsett hur sofistikerad dess interna modell är.

## A.3 Legitimitetsdynamik med hysteresasymmetri

Legitimitet utvecklas som svar på regulatorns prestanda och transparens. Kärnuppdateringsekvationen för den sammansatta skalären \(L(t)\) är

\[
L(t+1) = \operatorname{clip}\!\Bigl(L(t) - \alpha(t)\,\|\mathbf{x}_{\text{rap}}(t)\|^2 + \beta\,T(t) - \gamma\,D(t) + \delta,\; 0,\; 1\Bigr),
\tag{A.1}
\]

där
- \(\mathbf{x}_{\text{rap}}(t)\) är tillståndet såsom det uppfattas av den styrda befolkningen (se nedan),
- \(T(t) \in [0,1]\) är regulatorns transparensnivå,
- \(D(t) \in \{0,1\}\) indikerar en avslöjandehändelse av svek,
- \(\delta > 0\) är en liten exogen drift som fångar långsam, sekulär ackumulation av institutionell tillit,
- \(\beta > 0\) och \(\gamma > 0\) är känslighetsparametrar.

**Hysteresasymmetrisk leveranskänslighet.**  
Parametern \(\alpha(t)\) är inte konstant. Den antar olika värden beroende på om prestandan förbättras eller försämras:

\[
\alpha(t) = 
\begin{cases}
\alpha_{\text{nedgång}}, & \text{om } \|\mathbf{x}_{\text{rap}}(t)\|^2 > \|\mathbf{x}_{\text{rap}}(t-1)\|^2, \\[6pt]
\alpha_{\text{återhämtning}}, & \text{om } \|\mathbf{x}_{\text{rap}}(t)\|^2 \le \|\mathbf{x}_{\text{rap}}(t-1)\|^2,
\end{cases}
\quad \alpha_{\text{nedgång}} \gg \alpha_{\text{återhämtning}} > 0.
\tag{A.2}
\]

Denna styckvisa definition fångar den empiriska regelbundenheten att förtroende förloras snabbare än det återuppbyggs. Ett försämrat leveransgap (positiv förändring i kvadrerat fel) producerar en stark negativ uppdatering; ett förbättrat leveransgap producerar endast en svag positiv uppdatering. Hysteresloopen i huvudtexten följer direkt från denna asymmetri.

**Delat-tillstånd-transparens och sveksmekanismen.**  
När regulatorn undertrycker information divergerar det rapporterade tillstånd som allmänheten ser från det sanna tillståndet. Vi modellerar detta med en undertryckningsparameter \(\lambda \in [0,1]\) och ett utlovat referenstillstånd \(\mathbf{x}_{\text{utlovat}}\) (typiskt målet \(\mathbf{0}\)):

\[
\mathbf{x}_{\text{rap}}(t) = \lambda\,\mathbf{x}(t) + (1-\lambda)\,\mathbf{x}_{\text{utlovat}}(t).
\tag{A.3}
\]

Full transparens motsvarar \(\lambda = 1\) (\(\mathbf{x}_{\text{rap}} = \mathbf{x}\)); fullständig fabricering motsvarar \(\lambda = 0\).  

Den dolda avvikelsen mellan sant och rapporterat tillstånd ackumuleras i en variabel

\[
E_{\text{svek}}(t+1) = E_{\text{svek}}(t) + \|\mathbf{x}(t) - \mathbf{x}_{\text{rap}}(t)\|^2,
\tag{A.4}
\]

med \(E_{\text{svek}}(0) = 0\). Sannolikheten att sveket avslöjas vid tid \(t\) modelleras som en hazard rate som ökar med \(E_{\text{svek}}\):

\[
\Pr(\text{avslöjande vid }t) = 1 - \exp\!\bigl(-h\,E_{\text{svek}}(t)\bigr),
\tag{A.5}
\]

där \(h > 0\) är hazardkoefficienten. Vid avslöjande sätts \(D(t)\) till \(1\) och \(\lambda\) tvingas till \(1\) därefter (regulatorn kan inte längre dölja). Sveksbestraffningen \(-\gamma D(t)\) slår då mot legitimitetsuppdateringen (A.1) med full kraft, och producerar den katastrofala kollaps som analyseras i texten.

## A.4 Legitimitetsfällan som en sektorbegränsad ickelinjäritet

När regulatorn använder en linjär tillståndsåterkopplingslag \(\mathbf{u}(t) = -\mathbf{K}\,\hat{\mathbf{x}}(t)\), utgör det fullständiga systemet — anläggning, skattare, regulator och legitimitetsdynamik — en ickelinjär återkopplingsslinga. Legitimitetstillståndet \(L(t)\) inträder som en *tillståndsberoende förstärkning* som multiplicerar \(\mathbf{B}\) och skalar mätbruset. Dessutom utvecklas \(L(t)\) självt enligt (A.1), vilket är en minneslös ickelinjär funktion av den senaste tillståndsbanan och regulatorns transparens. Denna struktur är just den hos ett **Lur’e-system** — en linjär tidsinvariant framåtväg med ett ickelinjärt, sektorbegränsat återkopplingselement.

**Cirkelkriteriets villkor.**  
Betrakta det förenklade fallet där framåtvägen (den linjära dynamiken med konstant \(L = \bar{L}\)) är stabil och legitimitetsuppdateringen approximeras som en statisk ickelinjäritet \(\phi(\cdot)\) som verkar på leveransgapet \(e(t) = \|\mathbf{x}_{\text{rap}}(t)\|^2\). Uppdateringen (A.1) kan skrivas som

\[
\Delta L(t) = -\phi(e(t)) + \beta T(t) - \gamma D(t) + \delta,
\]

där \(\phi(\cdot)\) är styckvis linjär med lutningar bestämda av \(\alpha_{\text{nedgång}}\) och \(\alpha_{\text{återhämtning}}\). Ickelinjäriteten \(\phi\) uppfyller ett sektorvillkor: det existerar konstanter \(k_1, k_2\) sådana att

\[
k_1 e \le \phi(e) \le k_2 e \quad \text{för alla } e \ge 0.
\]

I vårt fall är \(k_1 = \alpha_{\text{återhämtning}}\) och \(k_2 = \alpha_{\text{nedgång}}\) (lämpligt skalade). Cirkelkriteriet tillhandahåller ett tillräckligt villkor för den slutna slingans absoluta stabilitet: om Nyquistdiagrammet för den linjära delen (överföringsfunktionen från legitimitetsförstärkningsperturbationen till leveransgapet) inte skär eller innesluter en specifik cirkelskiva bestämd av \(k_1, k_2\), då är systemet stabilt för varje tidsvarierande förstärkning i den sektorn.

När sektorgränserna är smala — dvs. asymmetrin \(\alpha_{\text{nedgång}} / \alpha_{\text{återhämtning}}\) är liten och \(\gamma\) är måttlig — är stabilitetscirkelskivan stor, och villkoret är lätt uppfyllt: systemet är **absolut stabilt**, och legitimitetsdynamiken kan inte driva det till en låg-\(L\)-attraktor från något initialvillkor. Detta motsvarar en *byggd*-legitimitets-regim.

När sektorgränserna är breda — stort \(\alpha_{\text{nedgång}}\) i förhållande till \(\alpha_{\text{återhämtning}}\), och stort \(\gamma\) — krymper stabilitetscirkelskivan. Cirkelkriteriet kan vara överträtt, vilket innebär att det existerar förstärkningsbanor (legitimitetsvägar) som destabiliserar slingan. I det fallet är systemet endast **betingat stabilt**: en tillräckligt stor perturbation som driver \(L\) under ett kritiskt värde \(L_{\text{krit}}\) kommer att få slingan att divergera från hög-\(L\)-jämviktsläget och inträda i legitimitetsfällan. Detta motsvarar en *lånad*-legitimitets-regim, där den höga känsligheten för leveransmisslyckanden och den katastrofala sveksbestraffningen gör systemet sårbart för en självförstärkande kollaps.

Locus för \(L_{\text{krit}}\) är inte en universell konstant utan beror på de specifika parametrarna \(\alpha_{\text{nedgång}}, \alpha_{\text{återhämtning}}, \beta, \gamma, \delta\) och på anläggningens dynamiska karakteristik (egenvärdena för \(\mathbf{A}\)). I simuleringen i Del IV identifieras \(L_{\text{krit}}\) numeriskt som separatrisen för attraktionsbassängerna.

## A.5 Byggd vs. lånad legitimitet: Parameteruppsättningar

Distinktionen mellan byggd och lånad legitimitet operationaliseras genom distinkta parameterregimer i uppdateringsekvationen (A.1) och hazardmodellen (A.5).

| Parameter | Byggd legitimitet | Lånad legitimitet |
|-----------|------------------|----------------------|
| \(\alpha_{\text{nedgång}}\) | måttlig (t.ex. 0,12) | hög (t.ex. 0,25) |
| \(\alpha_{\text{återhämtning}}\) | måttlig (t.ex. 0,06) | låg (t.ex. 0,02) |
| \(\beta\) | måttlig (t.ex. 0,08) | låg (t.ex. 0,03) |
| \(\gamma\) | låg (t.ex. 0,5) | hög (t.ex. 3,0) |
| \(\delta\) | hög (t.ex. 0,005) | låg (t.ex. 0,001) |
| Hazardkoefficient \(h\) | låg (svek är svårare att upprätthålla) | hög (svek är mer sannolikt att avslöjas, men regimen är mer benägen att försöka) |

**Strukturell tolkning.**  
Byggd legitimitet karakteriseras av ett dämpat svar på leveransgap, substantiell lyhördhet för transparens, en liten sveksbestraffning (eftersom tillit är baserad på en lång historik av ärlighet) och en långsam exogen avklingningstakt. Sektorgränserna i det associerade Lur’e-systemet är smala, och uppfyller Cirkelkriteriet: hög-\(L\)-jämviktsläget är absolut stabilt.

Lånad legitimitet karakteriseras av en hyperkänslig respons på leveransmisslyckanden, svag lyhördhet för transparens, en katastrofal sveksbestraffning (eftersom tilliten är narrativbaserad och sårbar) och en snabb exogen avklingning när narrativet försvagas. Sektorgränserna är breda, och överträder Cirkelkriteriet: systemet är endast betingat stabilt, och en tillräckligt stor chock kan pressa det in i fällan.

Dessa parameteruppsättningar är inte oberoende. En regim som förlitar sig på lånad legitimitet kommer att tendera att undertrycka transparens (låg \(\beta\)), vilket tvingar den att förlita sig ännu tyngre på narrativet, vilket gör den utsökt känslig för varje leveransmisslyckande som genombryter det narrativet (hög \(\alpha_{\text{nedgång}}\), hög \(\gamma\)). Parameterregimen är självförstärkande tills kollapsen inträffar — exakt den dynamik som transparensfällan formaliserar.
