### Appendix A — Formella härledningar

Detta appendix ger härledningarna som ligger till grund för Del II. Det anger den rekursiva förlustbringande slingmodellen precist, bevisar flaskhalsteoremet och dess följdsats om noll‑marginal‑avkastning, härleder det balanserade allokeringsoptimumet och dess slutna form, härleder slutningsfördröjningslagen som §2.5 sköt upp till simulering, bevisar den gräns under vilken verklighets‑eftersläpningen inte kan uppstå ur ett systems egen oförstärkta handling, och omformulerar flaskhalsen i varietets‑termerna från §2.3. Påståenden är nivåindelade som inom modellen; styrningsanalogierna som följer varje resultat är tolkande, **[IP]**, och argumenteras i brödtexten snarare än fastställs här.

## A.1 Den rekursiva förlustbringande slingan

Låt de tre stegtakterna vara \(r_S, r_L, r_E \ge 0\), i enheter arbete per tidsenhet, och låt de två inre omvandlingseffektiviteterna vara \(\rho_{SL}, \rho_{LE} \in (0,1)\). De realiserade takterna längs pipelinen är nästlade minima — varje steg bearbetar högst sin egen kapacitet och tar inte emot mer än vad det föregående steget levererar efter omvandling:

\[
\tilde r_L = \min\!\big(\rho_{SL}\, r_S,\; r_L\big), \qquad
\tilde r_E = \min\!\big(\rho_{LE}\, \tilde r_L,\; r_E\big).
\tag{A.1}
\]

Den effektiva adaptiva genomströmningen är den realiserade verkställandetakten, vilken genom substitution är ett enda nästlat minimum av tre positivt skalade stegtakter:

\[
T_{\text{eff}} = \tilde r_E
= \min\!\big(\underbrace{\rho_{SL}\rho_{LE}\, r_S}_{a},\;
              \underbrace{\rho_{LE}\, r_L}_{b},\;
              \underbrace{r_E}_{c}\big).
\tag{A.2}
\]

Slutningsbenet bär ingen omvandling. Verkställande förändrar världen i takten

\[
w = g\,\tilde r_E + d, \qquad g \ge 1,\; d \ge 0,
\tag{A.3}
\]

där \(d\) är den exogena störningstakten och \(g\) är konsekvens‑amplifieringsfaktorn från §2.1. Åter‑observation sker i avkänningstakten \(r_S\), och verklighets‑eftersläpningen ackumuleras som den otillfredsställda världsförändringen:

\[
\dot B_R = \max\!\big(0,\; w - r_S\big).
\tag{A.4}
\]

Avkänningstakten \(r_S\) uppträder i både (A.2) och (A.4): den matar slingans framände och begränsar åter‑observationen vid slutet. Denna dubbla förekomst är rekursionens formella innehåll och källan till varje slutningsspecifikt resultat nedan.

## A.2 Flaskhalsteoremet

Skriv \(a = \rho_{SL}\rho_{LE}\,r_S\), \(b = \rho_{LE}\,r_L\), \(c = r_E\), så att \(T_{\text{eff}} = \min(a,b,c)\) från (A.2).

> **Teorem A.1 (flaskhals).** *\(T_{\text{eff}}\) är icke‑avtagande i var och en av \(r_S, r_L, r_E\), och är strikt växande i \(r_i\) endast när den skalade takt som hör till \(r_i\) är den unika minimeraren av \(\{a,b,c\}\). För varje steg vars skalade takt inte är den unika minimeraren, \(\partial T_{\text{eff}}/\partial r_i = 0\): kapacitet som tillförs där lämnar den adaptiva takten oförändrad och omvandlas till eftersläpning på det ben som tar emot den.* **[R inom modellen.]**

*Bevis.* Var och en av \(a, b, c\) är en strikt växande linjär funktion av sin egen stegtakt och konstant i de andra två. Minimum av en ändlig uppsättning funktioner är deriverbart därhelst minimeraren är unik, med gradient lika med den för den aktiva (minimerande) funktionen; gradienten med avseende på varje icke‑aktivt argument är noll. Följaktligen, om \(c < \min(a,b)\) — verkställande bindande — då är \(\partial_{r_S} T_{\text{eff}} = \partial_{r_L} T_{\text{eff}} = 0\) och \(\partial_{r_E} T_{\text{eff}} = 1\); symmetriskt för de andra bindande fallen. Icke‑negativitet hos varje partiell derivata ger monotonicitet. ∎

Överskottet som den tillförda kapaciteten blir är en eftersläpning, lokaliserad av (A.1). Informationseftersläpningen på benet Avkänna → Lära växer just när ankomster överstiger inlärningskapaciteten, \(\rho_{SL} r_S > r_L\), ekvivalent \(a > b\); innovationseftersläpningen på benet Lära → Verkställa växer när \(\rho_{LE}\tilde r_L > r_E\); och verklighets‑eftersläpningen växer enligt (A.4) när \(w > r_S\). Att tillföra kapacitet till ett steg vars skalade takt redan ligger över minimum driver mer arbete till det ben som ligger nedströms om det utan att höja \(T_{\text{eff}}\) — det formella uttalandet att ansträngning som läggs utanför flaskhalsen omvandlas till kö snarare än till genomströmning.

Resultatet är den dynamiska dualen till den statiska ackumuleringen i Rapport V: där inträder arkitekturens underskott i en produkt, här inträder dess kapaciteter i ett minimum. Minimumstrukturen själv är det gemensamma innehållet i lagen om minimum, köteori och teorin om begränsningar; vad som är specifikt för slingan är rekursionen i A.1 och grundningen av \(\rho_{SL}, \rho_{LE}\) i seriens tidigare resultat.

## A.3 Det balanserade allokeringsoptimumet

Betrakta det hypotetiska problemet med fast total i §2.2:

\[
\max_{r_S, r_L, r_E \ge 0} \; \min(a,b,c)
\quad \text{under bivillkoret} \quad r_S + r_L + r_E = R.
\tag{A.5}
\]

> **Proposition A.2.** *Maximeraren av (A.5) utjämnar de skalade takterna, \(a=b=c\), och är*
> \[
> r_S^\* = \frac{R}{1 + \rho_{SL} + \rho_{SL}\rho_{LE}}, \quad
> r_L^\* = \rho_{SL}\,r_S^\*, \quad
> r_E^\* = \rho_{SL}\rho_{LE}\,r_S^\*,
> \]
> *med optimal genomströmning*
> \[
> T_{\text{eff}}^\* = \frac{R\,\rho_{SL}\rho_{LE}}{1 + \rho_{SL} + \rho_{SL}\rho_{LE}}.
> \]
> **[R inom modellen.]**

*Bevis.* Antag att vid en tillåten punkt är de skalade takterna inte alla lika; låt \(S\) vara mängden av steg som uppnår minimum och låt steg \(j \notin S\). Eftersom \(j\) inte är bindande, \(r_j > 0\) (ett steg vid noll takt skulle ha skalad takt noll, alltså vara i minimerarmängden), så en kvantitet \(\varepsilon > 0\) av budgeten kan flyttas från \(j\) till ett bindande steg. Detta höjer strikt det bindande stegets skalade takt medan \(j\) förblir icke‑bindande för \(\varepsilon\) litet, alltså höjs \(\min(a,b,c)\) strikt. Därför är ingen tillåten punkt med olika skalade takter optimal, och optimum uppfyller \(a=b=c\). Att lösa \(a=b\) ger \(r_L = \rho_{SL} r_S\); \(b=c\) ger \(r_E = \rho_{LE} r_L = \rho_{SL}\rho_{LE} r_S\); att substituera i budgeten ger \(r_S^\*\), och \(T_{\text{eff}}^\* = c = \rho_{SL}\rho_{LE} r_S^\*\). ∎

Optimum allokerar *mer* rå kapacitet till de uppströms liggande stegen, \(r_S^\* > r_L^\* > r_E^\*\), eftersom varje nedströms steg endast behöver matcha det försvagade flöde som når det; lika *ansträngning* över stegen är därför strikt suboptimalt närhelst \(\rho_{SL}, \rho_{LE} < 1\). Vid de illustrativa värdena \(\rho_{SL}=0,6, \rho_{LE}=0,5, R=1\): \(r_S^\*, r_L^\*, r_E^\* = 0,526, 0,316, 0,158\), \(T_{\text{eff}}^\* = 0,158\), mot \(T_{\text{eff}} = 0,100\) vid lika tredjedelar — bekräftat genom rutnätssökning i Appendix B.

## A.4 Slutningsfördröjningslagen

Genomströmningen (A.2) är den takt med vilken en *öppen* pipeline med dessa takter skulle leverera anpassning. Slingan är inte öppen: genom rekursionen i A.1 kan en korrigerande cykel inte vara informerad förrän den föregående verkställighetens effekter har åter‑observerats, en fördröjning \(\tau\) efter att de producerats. Under den strikta slutningsläsningen — kontrollanten tillgodoräknar sig en adaptiv cykel först när dess föregångares konsekvenser har återkommit genom (A.4), så att den inte agerar på icke‑åter‑observerad förändring — är tiden för att fullborda en informerad cykel flaskhalsens bearbetningstid plus slutningsfördröjningen, i serie:

\[
T_{\text{cykel}} = \frac{1}{T_{\text{rå}}} + \tau, \qquad T_{\text{rå}} \equiv \min(a,b,c).
\]

Den fullbordade cykeltakten är reciproken, vilket ger den slutna formen

\[
T_{\text{eff}}^{\,\text{rek}} = \frac{1}{\,T_{\text{cykel}}\,}
= \frac{T_{\text{rå}}}{1 + \tau\,T_{\text{rå}}}.
\tag{A.6}
\]

Denna är strikt under \(T_{\text{rå}}\) för varje \(\tau > 0\), avtar monotont i \(\tau\), går mot \(T_{\text{rå}}\) när \(\tau \to 0\) och mot \(1/\tau\) när \(\tau \to \infty\). Den halveras när \(\tau = 1/T_{\text{rå}}\) — när åter‑observationsfördröjningen är lika med flaskhalsens egen cykeltid. Appendix B bekräftar (A.6) mot den simulerade slingan till maskinprecision. Den strikta slutningsläsningen är ett modelleringsval och det konservativa: om successiva cykler kan pipelineas — en ny korrigering påbörjad innan den föregåendes konsekvenser återkommer — är sänkningen mindre, och (A.6) är då en övre gräns för förlusten. Den läsning som är lämplig för en kontrollant som inte får agera på konsekvenser den ännu inte har åter‑observerat är den strikta.

## A.5 Gränsen för den endogena verklighets‑eftersläpningen

> **Proposition A.3.** *Med oförstärkta konsekvenser (\(g=1\)) och ingen exogen störning (\(d=0\)) kan verklighets‑eftersläpningen inte växa: \(\dot B_R = 0\) för alla taktallokeringar.* **[R inom modellen.]**

*Bevis.* Från (A.1), \(\tilde r_E = \min(\rho_{LE}\tilde r_L, r_E) \le \rho_{LE}\tilde r_L \le \rho_{LE}\rho_{SL} r_S\), med användning av \(\tilde r_L \le \rho_{SL} r_S\). Eftersom \(\rho_{SL}, \rho_{LE} \in (0,1)\), är produkten \(\rho_{SL}\rho_{LE} < 1\), så \(\tilde r_E < r_S\). Med \(g=1, d=0\) ger (A.3) \(w = \tilde r_E < r_S\), och (A.4) ger \(\dot B_R = \max(0, w - r_S) = 0\). ∎

Verklighets‑eftersläpningen har därför exakt tre källor, och rå aktivitet finns inte bland dem. Den växer endast genom en snabbt föränderlig värld (\(d\) stort), konsekvenser förstärkta bortom sitt fotavtryck (\(g>1\), så att \(g\tilde r_E\) kan överstiga \(r_S\)), eller avkänningskapacitet avledd till ett mål så att den takt som effektivt finns tillgänglig för att åter‑observera handlingens konsekvenser ligger under den nominella \(r_S\) — det fall som isolerades i Simulering D, där kontrollantens avkänning är helt konsumerad av att följa ett glidande mål. Asymmetrin mellan de två eftersläpningsåtgärderna följer: att sänka \(\tilde r_E\) avlägsnar eftersläpningen endast när \(g>1\) är dess drivkraft; mot exogent \(d\) gör det ingenting, och endast att höja \(r_S\) eller snäva av gränsen så att färre konsekvenser faller utanför åter‑observationen tjänar.

## A.6 Flaskhalsen i varietets‑termer

Låt \(V_d\) vara den störningsvariation arkitekturen möter, netto av vad dess målfunktion når, och låt \(V_S, V_L, V_E\) vara den variation varje steg kan bära — antalet oberoende distinktioner det kan registrera, representera, eller aktivera. Nödvändig variation (Ashby) kräver att varje steg bär minst \(V_d\) för att slingan ska absorbera störningen. Omvandlingarna mellan stegen försvagar variationen såsom effektiviteterna försvagar takten: endast en bråkdel av avkända distinktioner överlever in i modellen, och endast en bråkdel av modellerade distinktioner överlever in i handling. Slingans absorberbara variation är därför minimum av de försvagade stegvariationerna,

\[
V_{\text{slinga}} = \min\!\big(V_S,\; \sigma_{SL} V_L,\; \sigma_{SL}\sigma_{LE} V_E\big),
\]

med \(\sigma_{SL}, \sigma_{LE} \in (0,1)\) de varietets‑teoretiska motsvarigheterna till takteffektiviteterna. **[IP].** Flaskhalsteoremet i denna valuta lyder: en slinga absorberar en störningsvariation lika med sin minsta stegvariation, hur mycket variation dess andra steg än behärskar. Detta är samma Ashbyanska krav som Rapport IV lokaliserade vid kontaktpunkten, här fördelat över de tre process‑stegen snarare än över rummet; de två är distinkta axlar av ett krav, och ingetdera inordnar det andra (§2.3).

---
