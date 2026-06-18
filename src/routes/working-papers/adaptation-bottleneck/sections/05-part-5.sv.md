### Del V — Simulering

## 5.0 Syfte och konventioner

Simuleringarna nedan testar inte teorin mot världen; de bekräftar att de formella påståendena i Del II håller i en fungerande modell och uppvisar de två storheter som Del II avstod från att påstå i sluten form — den optimala allokeringens form (§2.2) och genomströmningens funktionella beroende av slutningsfördröjningen (§2.5). De fastställer intern konsistens, inte empirisk adekvans. Alla fyra är deterministiska givet fröet (20260618) och körs från ett enda fristående skript; omvandlingseffektiviteterna är fixerade vid \(\rho_{SL}=0,6\) och \(\rho_{LE}=0,5\) genomgående. Dessa värden är illustrativa. Flaskhalsteoremet kräver endast att båda effektiviteterna ligger under ett; deras magnituder sätter allvarlighetsgraden hos en flaskhals, inte dess existens, och inget resultat nedan beror på de särskilda siffror som valts.

## 5.1 Simulering A — Allokeringsoptimum

Den första simuleringen bekräftar följdsatsen i §2.2: under en hypotetisk fast total kapacitet maximeras effektiv genomströmning genom att utjämna de *effektivitetsskalade* stegtakterna snarare än genom lika ansträngning. Med en total kapacitet \(R=1\) fördelad över de tre stegen, lokaliserar en rutnätssökning över allokeringssimplexet maximum för \(T_{\text{eff}}=\min(\rho_{SL}\rho_{LE}\,r_S,\ \rho_{LE}\,r_L,\ r_E)\) vid \((r_S, r_L, r_E)=(0,526,\,0,316,\,0,158)\), vilket med tre decimalers precision matchar den analytiska balanspunkt där alla tre skalade takter sammanfaller. Genomströmningen där är \(T_{\text{eff}}=0,158\). En lika‑ansträngning‑allokering — en tredjedel av totalen till varje steg — ger \(T_{\text{eff}}=0,100\): den balanserade allokeringen levererar femtioåtta procent mer adaptiv genomströmning från samma total, utan att något steg arbetar mer, endast arbetet fördelat för att matcha slingan. Egenskapen noll‑marginal‑avkastning bekräftas direkt: med utgångspunkt från en verkställandebindande allokering och tillförande av ytterligare en femtedel av totalen till det icke‑bindande avkänningssteget flyttar \(T_{\text{eff}}\) med exakt noll. **[R inom modellen.]** Kapacitet som hälls i ett steg som inte är flaskhalsen accelererar inte anpassningen; den omvandlas, i de dynamiska termerna från §2.2, till eftersläpning snarare än till genomströmning.

![Figur xv_A_allokering](/working-papers/images/adaptation-bottleneck/xv_A_allocation.png)

*(Figur: `xv_A_allocation.png` — genomströmning längs en endimensionell skärning genom optimum, med det balanserade maximum och den lägre lika‑ansträngning‑punkten markerade.)*

## 5.2 Simulering B — De tre eftersläpningarna

Den andra simuleringen kör slingan som en explicit kömodell och bekräftar att varje taktskillnad odlar exakt en eftersläpning medan de andra förblir begränsade. Tre regimer kördes. När avkänning springer ifrån lärande (\(r_S=0,60,\,r_L=0,10\)) växer informationseftersläpningen \(B_I\) linjärt med 0,26 per steg medan \(B_N\) och \(B_R\) förblir vid noll. När lärande springer ifrån verkställande (\(r_L=0,50,\,r_E=0,05\)) växer innovationseftersläpningen \(B_N\) med 0,13 per steg och de andra förblir plana. När världsförändring springer ifrån åter‑observation växer verklighets‑eftersläpningen \(B_R\) med 0,17 per steg ensam. **[R inom modellen.]** De tre felsignaturerna i Del III är således separerbara: var och en är ackumulationen bakom ett specifikt ben, och ett system kan diagnostiseras genom vilken av dess eftersläpningar som växer.

Den tredje regimen krävde en detalj som själv är ett resultat värt att notera. I modellen är världsförändring från kontrollantens eget verkställande \(g\cdot\tilde r_E\), där \(g\) representerar amplifieringen av en handlings konsekvenser bortom dess omedelbara fotavtryck — hävstång, i §1.1:s finansiella register. Utan amplifiering (\(g=1\)) och utan exogen störning kan verklighets‑eftersläpningen inte växa alls, eftersom slingans egen verkställandetakt begränsas av \(\tilde r_E \le \rho_{SL}\rho_{LE}\,r_S = 0,30\,r_S < r_S\): ett systems oförstärkta handling kan aldrig springa ifrån dess egen avkänning, eftersom omvandlingsförlusterna garanterar att mindre når världen än vad avkänningssteget tog in. Verklighets‑eftersläpningen har därför exakt tre drivkrafter, och rå upptagenhet finns inte bland dem: en snabbt föränderlig värld (stort exogent \(d\)), handling vars konsekvenser är förstärkta bortom sitt fotavtryck (\(g>1\)), eller — det fall Simulering D isolerar — avkänningskapacitet som avletts till ett mål medan handlingens konsekvenser ackumuleras oobserverade på annat håll. Detta skärper "verkställ mindre"‑åtgärden från §2.1: att strypa verkställande lättar en verklighets‑eftersläpning endast i den mån verkställande, genom amplifiering, är det som springer ifrån åter‑observation; mot en snabbt föränderlig värld gör det ingenting, och endast avkänningskapacitet eller en snävare gräns tjänar.

![Figur xv_B_eftersläpningar](/working-papers/images/adaptation-bottleneck/xv_B_backlogs.png)

*(Figur: `xv_B_backlogs.png` — tre paneler, en per regim, var och en visande en enda eftersläpning som växer.)*

## 5.3 Simulering C — Rekursionen drar genomströmningen under minimum

Den tredje simuleringen fastställer det rekursionsspecifika resultat som §2.5 sköt upp. Den råa stegbegränsade genomströmningen för slingan — den takt med vilken en *öppen*, framåtmatande pipeline med dessa takter skulle leverera anpassning — är \(T_{\text{rå}}=0,158\), den bindande skalade takten från Simulering A. Men slingan är inte öppen: en korrigerande cykel kan inte vara fullständigt informerad förrän den föregående verkställighetens effekter har åter‑observerats, en fördröjning \(\tau\) senare. Svepande slutningsfördröjningen och mätande den takt med vilken fullbordade adaptiva cykler ackumuleras, faller den simulerade takten under \(T_{\text{rå}}\) och matchar den slutna formen

\[
T_{\text{eff}}^{\,\text{rek}} = \frac{T_{\text{rå}}}{1 + \tau\,T_{\text{rå}}}
\]

till inom maskinprecision (maximal residual \(\sim 3\times10^{-17}\) över \(\tau\in[0,12]\)). **[R inom modellen.]** Formen återvanns ur slingan, inte antogs: det är vad man erhåller när varje cykel kostar en bearbetningstid \(1/T_{\text{rå}}\) vid flaskhalsen plus en fördröjning \(\tau\) vid slutningen, så att fullbordandetakten är \(1/(1/T_{\text{rå}}+\tau)\). Genomströmningen halveras när \(\tau = 1/T_{\text{rå}}\) — när åter‑observationsfördröjningen är lika med flaskhalsens egen cykeltid. Detta bekräftar den kvalitativa förväntan i §2.5 med ett specifikt beroende, och det ger rekursionen dess kvantitativa innehåll: en styrningsslinga med en kapabel pipeline men en långsam slutning — ett system som agerar kompetent men åter‑observerar konsekvenserna av sin handling först efter lång fördröjning — anpassar sig i en takt strikt under vad dess stegkapaciteter ensamma skulle antyda, och underskottet sätts helt av slutningsfördröjningen.

![Figur xv_C_slutningsfördröjning](/working-papers/images/adaptation-bottleneck/xv_C_closure_delay.png)

*(Figur: `xv_C_closure_delay.png` — uppmätt takt mot \(\tau\), med den slutna formen och det råa minimum överlagrade.)*

## 5.4 Simulering D — Effektivt och självförblindande

Den fjärde simuleringen isolerar det fall §2.4 namngav: ett system där verkställande är det bindande steget men slingan ändå anpassar sig snabbare än miljön glider, så att systemet följer den komponent det åter‑observerar medan det ackumulerar en verklighets‑eftersläpning från de konsekvenser det inte gör. Kontrollanten följer ett mål som glider vid \(r_{\text{miljö}}=0,02\), och på den åter‑observerade komponenten håller den ett stabilt spårningsfel på 0,020 — platt över körningen, bilden av ett system som presterar enligt specifikation. Samtidigt genererar dess eget verkställande konsekvenser i en takt som dess mättade avkänning inte kan fånga, och verklighets‑eftersläpningen \(B_R\) klättrar linjärt till 12,0 över sexhundra steg, en tillväxt på 0,020 per steg som spårningsmåttet aldrig registrerar. **[R inom modellen]** för dynamiken; **[IP]** för den institutionella läsningen. De två kurvorna är det formella porträttet av ett system som samtidigt är effektivt och självförblindande: varje mått det kör rapporterar hälsa, eftersom varje mått det kör är byggt på den komponent det fortfarande observerar, medan gapet mellan den värld det skapar och den värld det modellerar växer oläst. Detta är den strukturella släktingen till Själv II:s uppfattad‑kontra‑sann legitimitet‑gap, där uppfattad självtillit håller sig stabil medan det sanna tillstånd den döljer urholkas under den; här kräver döljandet inget självbedrägeri, bara en avkänningskapacitet som spenderas helt på målet och ingen kvar för kölvattnet.

![Figur xv_D_självförblindande](/working-papers/images/adaptation-bottleneck/xv_D_self_blinding.png)

*(Figur: `xv_D_self_blinding.png` — platt spårningsfel på en axel, linjärt växande verklighets‑eftersläpning på den andra.)*

## 5.5 Vad simuleringarna fastställer och inte fastställer

Simuleringarna fastställer att flaskhalsteoremet, de tre separerbara eftersläpningarna, slutningsfördröjningslagen och den effektiva‑men‑självförblindande regimen är internt konsistenta och beter sig som Del II beskriver; de två storheter Del II lämnade till simulering — det balanserade allokeringsoptimumet och formen \(T_{\text{rå}}/(1+\tau T_{\text{rå}})\) — är nu i handen. De fastställer ingenting om något verkligt styrsystem. Takterna, omvandlingseffektiviteterna, amplifieringsfaktorn, och glidnings- och fördröjningsparametrarna är stipulerade, inte mätta; §2.4:s erkännande står, att inget fältinstrument erbjuds för någon av dem. Vad simuleringarna bekräftar är att den formella grammatiken är koherent och att dess centrala påståenden inte är artefakter av en särskild läsning — att ett system som allokerar kapacitet genom lika ansträngning lämnar genomströmning på bordet, att de tre eftersläpningarna är diagnostiserbara separat, att en långsam slutning sänker anpassningen under stegminimum, och att ett system kan klara varje test det sätter för sig självt medan det förlorar kontakten med vad dess handlingar gör. Huruvida någon institution uppvisar dessa signaturer, och vid vilka takter, är den empiriska fasens arbete, inte detta pappers.

*(Simuleringsskript: `gae-simulator-v17-adaptation-bottleneck.py`, frö 20260618.)*

---
