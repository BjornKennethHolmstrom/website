**Appendix A — Formell utveckling och simulering**

**Konventioner.** Nivåerna följer serien: **[R]** rigorös, **[IP]** i princip, **[H]** heuristisk; ”**[R inom modellen]**” markerar resultat som är exakta eller bevisade för den angivna formella modellen, utan anspråk därutöver. Alla matrisderivatautsagor använder Frobenius inre produkt på vektoriserade operatorer, ${\langle U, V\rangle}_F = \operatorname{tr}(U^\top V)$ på $\operatorname{vec}(\cdot)$. Simuleringen är `paper_xviii_boundary_instability.py`, frö 20260703; varje siffra som citeras i detta appendix skrivs ut av det skriptets verifieringsblock. Figurer som refereras: `xviii_A_phase_cycle`, `xviii_A2_regime_map`, `xviii_B_early_warning`, `xviii_C_bandwidth_slice`, `xviii_C2_window_map`.

---

### A.1 Icke‑faktoriserbarhetsteoremet via gemensamma invariantunderrum

#### A.1.1 Uppställning

Tillstånd $\mathbf{x}\in\mathbb{R}^n$, parametrar $\theta\in\Theta\subseteq\mathbb{R}^p$, dynamik $\mathbf{x}(t{+}1)=\mathbf{A}(\theta(t))\,\mathbf{x}(t)$ med $\mathbf{A}$ glatt i $\theta$, och inlärning $\theta(t{+}1)=\theta(t)+\eta\,\mathbf{L}(\mathbf{x}(t),\theta(t))$, $\eta>0$. En *jurisdiktionell delning* är en ortogonal dekomposition $\mathbb{R}^n=\mathcal{S}\oplus\mathcal{S}^\perp$ med $\dim\mathcal{S}=d$, $0<d<n$, och projektion $\mathbf{\Pi}$ på $\mathcal{S}$.

**Definition (faktoriserbarhet).** Delningen $\mathbf{\Pi}$ *faktoriserar* dynamiken vid $\theta$ om båda blocken av korspåverkan försvinner:
$$\mathbf{\Pi}\,\mathbf{A}(\theta)\,(\mathbf{I}-\mathbf{\Pi})=\mathbf{0}\quad\text{och}\quad(\mathbf{I}-\mathbf{\Pi})\,\mathbf{A}(\theta)\,\mathbf{\Pi}=\mathbf{0},$$
dvs. både $\mathcal{S}$ och $\mathcal{S}^\perp$ är invarianta underrum till $\mathbf{A}(\theta)$. (Det svagare blocktriangulära villkoret — ett invariant underrum, envägspåverkan — medger en exakt analog behandling; styrningsseparation i den mening som avses i Rapport XII kräver den tvåsidiga formen, och vi anger allt för den.) En *fast dekomposition längs en trajektoria* är ett enda $\mathbf{\Pi}$ som faktoriserar $\mathbf{A}(\theta(t))$ för alla $t$: ett gemensamt invariant‑underrumspar till matrisfamiljen $\{\mathbf{A}(\theta(t))\}_t$.

För ett fixt $\mathbf{\Pi}$ definieras *kompatibilitetsvarieteten*
$$\mathcal{V}_\mathbf{\Pi}=\{\theta\in\Theta:\ \mathbf{\Pi}\mathbf{A}(\theta)(\mathbf{I}-\mathbf{\Pi})=\mathbf{0},\ (\mathbf{I}-\mathbf{\Pi})\mathbf{A}(\theta)\mathbf{\Pi}=\mathbf{0}\},$$
nollställemängden av $2d(n-d)$ glatta skalära funktioner av $\theta$. Faktoriserbarhet längs trajektorian är just inneslutning: $\theta(t)\in\mathcal{V}_\mathbf{\Pi}$ för alla $t$.

**Definition (kopplingskänslighet).** $\partial\mathbf{\Delta}/\partial\theta$ betecknar derivatan av de icke‑diagonala blocken, dvs. av avbildningen $\theta\mapsto\big(\mathbf{\Pi}\mathbf{A}(\theta)(\mathbf{I}-\mathbf{\Pi}),\,(\mathbf{I}-\mathbf{\Pi})\mathbf{A}(\theta)\mathbf{\Pi}\big)$, som en linjär avbildning $\mathbb{R}^p\to\mathbb{R}^{2d(n-d)}$ under vektorisering.

#### A.1.2 Teorem

**Teorem A.1 (Icke‑faktoriserbarhet, [R inom modellen]).** Fixera en delning $\mathbf{\Pi}$ och antag:

**(i) Icke‑degeneration.** $\partial\mathbf{\Delta}/\partial\theta$ har rang $\geq 1$ i varje punkt av $\mathcal{V}_\mathbf{\Pi}$ som besöks av trajektorian, så att $\mathcal{V}_\mathbf{\Pi}$ lokalt är en delmångfald av $\Theta$ med kodimension $\geq 1$.

**(ii) Transversalitet.** Det medelvärdesbildade inlärningsfältet $\bar{\mathbf{L}}(\theta)=\mathbb{E}_{\mathbf{x}}[\mathbf{L}(\mathbf{x},\theta)]$ är inte tangent till $\mathcal{V}_\mathbf{\Pi}$ på någon relativt öppen delmängd av $\mathcal{V}_\mathbf{\Pi}$: ekvivalent, ${\big\langle \partial\mathbf{\Delta}/\partial\theta\,[\bar{\mathbf{L}}(\theta)],\,\cdot\,\big\rangle}_F\not\equiv 0$ där.

**(iii) Persistens.** Trajektorian konvergerar inte till en stationär punkt för inlärningsdynamiken som ligger inuti $\mathcal{V}_\mathbf{\Pi}$.

Då lämnar $\theta(t)$ $\mathcal{V}_\mathbf{\Pi}$ i ändlig tid. Eftersom argumentet gäller för *varje* tillåten delning, förblir ingen fast dekomposition av tillståndsrummet exakt längs en inlärningstrajektoria som uppfyller (i)–(iii): faktoriserbarhet är inte en strukturell invariant hos inlärningssystemet utan en trajektorieberoende, transient egenskap.

**Stokastisk form.** Om inlärningsuppdateringen bär brus vars fördelning är absolutkontinuerlig på $\mathbb{R}^p$ (som i simuleringen, där $\mathbf{L}$ ärver processbruset genom $\mathbf{x}$), så är flykt från $\mathcal{V}_\mathbf{\Pi}$ nästan säker oberoende av (ii), eftersom $\mathcal{V}_\mathbf{\Pi}$ har Lebesguemått noll under (i) och övergångskärnan i ett steg tilldelar den sannolikhet noll. Det deterministiska uttalandet använder transversalitet; det stokastiska uttalandet använder mått. Rapporten använder den hypotes som passar sammanhanget och blandar inte vokabulärerna.

**Bevis.** Antag att $\theta(t)\in\mathcal{V}_\mathbf{\Pi}$ för alla $t$. Då förbinder varje inkrement $\theta(t{+}1)-\theta(t)=\eta\mathbf{L}$ punkter i $\mathcal{V}_\mathbf{\Pi}$; genom att övergå till det medelvärdesbildade flödet (giltigt för $\eta$ litet på den relevanta horisonten; för det diskreta argumentet ersätt tangens med ”inkrementen stannar i en tubulär omgivning som krymper med $\eta$”), kräver inneslutning att $\bar{\mathbf{L}}(\theta(t))\in T_{\theta(t)}\mathcal{V}_\mathbf{\Pi}$ längs hela den besökta mängden. Enligt (iii) är den besökta mängden inte en enda stationär punkt, och innehåller därmed en relativt öppen bit av en bana i $\mathcal{V}_\mathbf{\Pi}$; (ii) förnekar tangens på varje sådan bit. Motsägelse; trajektorian lämnar. Det stokastiska fallet följer omedelbart av absolut kontinuitet. $\square$

#### A.1.3 Vad teoremet säger och inte säger

Tre avsiktliga begränsningar. *För det första*, teoremet är villkorat av (ii): en inlärningsregel konstruerad för att verka endast genom blockrespekterande kanaler — $\bar{\mathbf{L}}\in T\mathcal{V}_\mathbf{\Pi}$ genom design — bevarar faktoriserbarhet för alltid. Teoremets innehåll är att denna inriktning är ett kodimensionsvillkor, inte ett standardfall: generisk inlärning som verkar genom någon kopplingsrelevant kanal bryter varje fast delning. Designprinciperna i §6 är, i denna exakta mening, försök att konstruera (ii):s misslyckande — att begränsa inlärningen till tangentknippet av en vald dekomposition. *För det andra*, ”lämnar $\mathcal{V}_\mathbf{\Pi}$” betyder att dekompositionen upphör att vara exakt; hur *snabbt* de icke‑diagonala blocken sedan växer, och huruvida M–Δ-slingförstärkningen från Rapport XII överskrider ett, är en kvantitativ fråga som teoremet inte besvarar — det är arbetet i §A.2–A.3. *För det tredje*, omfångsasymmetrin i §1 inträder här och inte som en följdsats: ingenting i matematiken hindrar (i)–(iii) från att hålla i ett självreferentiellt symboliskt system. Asymmetrin är att ett sådant system kan *omdefiniera* $\mathbf{\Pi}$ genom konvention allteftersom trajektorian rör sig — återfaktorisering är gratis när fakta på båda sidor om delningen är konventioner — medan ett världskopplat system måste kompensera drift det inte kan byta namn på. Flykt från en fast $\mathcal{V}_\mathbf{\Pi}$ är ett teorem; kostnaden för att återfixera $\mathbf{\Pi}$ är vad som skiljer domänerna. **[IP]** för domänseparationen, enligt Rapport XVII:s omfångsgräns.

**Följdsats A.1.1 (Spektraldrift, [R inom modellen]).** Varje stabilitetscertifikat utvärderat vid $\theta(0)$ — i synnerhet small gain-villkoret $\lVert\mathbf{M}\rVert\lVert\mathbf{\Delta}\rVert<1$ från Rapport XII — är inte invariant under inlärning som uppfyller (i)–(iii). Stabilitet är en egenskap hos den gemensamma (anläggning + regulator + inlärningsregel) trajektorian.

**Följdsats A.1.2 (Miljö som fält, [R inom modellen]).** Längs en sådan trajektoria är $\mathbf{\Delta}=\mathbf{\Delta}(\theta(t))$ ett policiberoende interaktionsfält; att behandla det som en exogen operator felspecificerar stabilitetsproblemet från första steget.

---

### A.2 Den reflexiva gränscykeln: reduktion och simulering

#### A.2.1 Modellen

Såsom specificerad i §3.1, med de implementationsval som deklarerades där och i simulatorhuvudet: två skalära delsystem
$$x_i(t{+}1)=(a_t-k_i)\,x_i+\varepsilon(t)\,x_j+w_i,\qquad w_i\sim\mathcal{N}(0,\sigma_w^2),$$
mjukt mättade vid $X_{\text{sat}}$; koppling $\varepsilon=\varepsilon_0+\alpha(1-b)+\beta c$ med *lagret* $c(t{+}1)=(1-\mu)c+\mu\,x_1x_2+\nu(|\Delta k_1|+|\Delta k_2|)$; residualer från sluten modell $r_i=x_i(t{+}1)-(a_0-k_i)x_i=(a_t-a_0)x_i+\varepsilon x_j+w_i$; gradientinlärning med läckage, $k_i\leftarrow(1-\lambda)k_i+\eta\,x_i r_i$; gränsklarhet $b\leftarrow\sigma\!\big(\gamma(1-\overline{|r|}/R)-\delta|\varepsilon|+h(b-\tfrac12)\big)$. Notera två strukturella fakta som reduktionen använder. Residualen är *oberoende av $k_i$*: varje lokal modell bär sin egen förstärkning korrekt, så vad inlärningen ser är exakt det omodellerade innehållet — driftföråldring plus koppling plus brus. Och $\theta=(k_1,k_2)$ når $\mathbf{\Delta}$ genom två kanaler: indirekt genom tillstånden (termen $\mu\,x_1x_2$) och direkt genom policihastighet (termen $\nu$), där den senare är modellens bokstavliga $\partial\mathbf{\Delta}/\partial\theta\neq 0$.

#### A.2.2 Snabbdelsystemets statistik i sluten form

Håll $(\varepsilon,k_1{=}k_2{=}k,b)$ fixerade och ta den omättade linjära regimen. I modkoordinaterna $s=(x_1{+}x_2)/\sqrt2$, $d=(x_1{-}x_2)/\sqrt2$ frikopplas dynamiken med polerna $p_\pm=a-k\pm\varepsilon$, vilket ger stationära varianser $\sigma_w^2/(1-p_\pm^2)$ och därmed, exakt,
$$q(\varepsilon,k):=\mathbb{E}[x_1x_2]=\frac{\sigma_w^2}{2}\left[\frac{1}{1-p_+^{\,2}}-\frac{1}{1-p_-^{\,2}}\right],\qquad
\sigma_x^2=\frac{\sigma_w^2}{2}\left[\frac{1}{1-p_+^{\,2}}+\frac{1}{1-p_-^{\,2}}\right].$$
**[R inom modellen.]** $q$ är positivt för $\varepsilon>0$, växande i $\varepsilon$, och divergerar då $p_+\to 1$: det symmetriska modet förlorar stabilitet vid
$$\varepsilon_{\text{inst}}(k)=1-(a-k),$$
linjen som markerats i Figur `xviii_A_phase_cycle`. Denna divergens är kollapsmekanismen: den interaktionsstatistika som matar lagret exploderar just när kopplingen närmar sig den marginal som de lokala förstärkningarna lämnar öppen.

#### A.2.3 Det medelvärdesbildade långsamma systemet och cykelns anatomi

Tidsskalseparationen i den lugna fasen är ungefär: snabba tillstånd (blandningstid $(1-|p_\pm|)^{-1}\sim 10$–$25$ steg), långsamt lager ($\mu^{-1}=50$), långsamma förstärkningar ($\lambda^{-1}=100$), med $b$ som en snabb switch slavad till $(\overline{|r|},\varepsilon)$ utom i sitt bistabila band. Medelvärdesbildning över de snabba tillstånden (ersätt $x$-statistik med deras stationära värden) ger ett plant långsamt system i $(c,b)$ med förstärkningarna slavade av inlärnings–läckagebalansen $\lambda k^\ast=\eta\big[(a_t-a_0)\sigma_x^2+\varepsilon\,q\big]$:
$$c^{+}=(1-\mu)c+\mu\,q\big(\varepsilon(c,b),k^\ast\big)+2\nu\eta\,\mathbb{E}|x_ir_i|,\qquad
b^{+}=\sigma\!\Big(\gamma\big(1-\tfrac{\mathbb{E}|r|}{R}\big)-\delta\,\varepsilon(c,b)+h(b-\tfrac12)\Big),$$
med $\mathbb{E}|r|\approx\sqrt{2/\pi}\,(\varepsilon^2\sigma_x^2+\sigma_w^2)^{1/2}$ och $\mathbb{E}|x_ir_i|\approx(2/\pi)\,\sigma_x\sigma_r$ upp till en korrelationsberoende faktor av storleksordning ett (simuleringen, inte dessa approximationer, bär den kvantitativa bördan).

Relaxationsoscillationens anatomi läses direkt av detta par. På den klara grenen ($b\approx1$) rampar lagret långsamt mot $q$-divergensen — *dold ackumulation*, dold eftersom $\mathbb{E}|r|$ växer endast med $\varepsilon^2$ medan $q$:s återkoppling sammansätts. Divergensen av $q$ är vecket: $c$ och $\varepsilon$ rusar iväg på den snabba tidsskalan — *kollaps* — tills mättnad begränsar exkursionen och den nu stora inlärningssignalen driver $k$ upp på vad som har blivit en snabb tidsskala, vilket bryter separationen; det medelvärdesbildade systemet är därför giltigt i ackumulationsfasen och heuristiskt över exkursionen, och vi säger det snarare än påstår något annat. Hög $\overline{|r|}$ och $|\varepsilon|$ kastar $b$ till dess upplösta gren. Förstärkningstillväxt dödar $q$; lagret avklingar; lugn återvänder; $b$:s minnesterm frisläpper; läckaget blöder sedan $k$ tillbaka nedåt, och återbeväpnar instabiliteten — *felkalibrerat återinträde*. Ett rigoröst gränscykelbevis skulle kräva den kontinuerliga plana limesen av den medelvärdesbildade avbildningen, en verifierad fångstregion, och Poincaré–Bendixson på den reduktionen; **vi gör inte anspråk på det**. Reduktionen förklarar cykelns anatomi **[R inom modellen]** för A.2.2:s statistik och **[H]** för exkursionsfasen; existensen av cykeln fastställs numeriskt.

#### A.2.4 Simuleringsresultat: P1

Uppvisningskörning ($T=6000$, baslinjeparametrar): **9** kollaps–återhämtningshändelser, med de fyra faserna synliga i Figur `xviii_A_phase_cycle` — lagerrampen under ett tyst $b$, $\varepsilon$-exkursionen förbi $1-a_0$, förstärkningsspiken, $b$-kollapsen och förskjuten återhämtning. Regimkarta (Figur `xviii_A2_regime_map`; $12\times12$-rutnät, $\beta\in[0.2,2.4]$, $\eta\in[0.005,0.5]$ log-spaced, 2 frön): **36%** av rutnätet upprätthåller cykeln. Den cyklande regionen begränsas på ena sidan av en *vilande* regim (reflexivitet för svag för att nå vecket) och på den andra av en *låst icke‑faktoriserbar* regim, inte förutsedd i skissen och rapporterad som ett fynd: vid hög $\beta$ är kopplingsgolvet efter kollaps $\varepsilon_0+\alpha(1-b)$ i sig självt tillräckligt högt för att hålla $b$ vid noll permanent — gränsen återhämtar sig aldrig, och systemet slår sig till ro i permanent NF-residens snarare än oscillation. **P1: stöds** — en ihållande oscillation existerar i en icke‑degenererad parameterregion, och fyrfasberättelsen i §3.2 beskriver den; berättelsen måste dessutom erkänna den låsta regimen som cykelns högreflexiva slutstation. **[R inom modellen.]**

#### A.2.5 Simuleringsresultat: P2, och det registrerade indexets misslyckande

Det registrerade indexet — $\rho_{\text{boundary}}$ som det största singularvärdet av korrelationsblocket för gränsöverskridande *prediktionsfel*, här med en övervakad variabel per sida som reduceras till $|\text{rullande corr}(r_1,r_2)|$, fönster 150 — testades mot en tillståndsbaserad variant $|\text{rullande corr}(x_1,x_2)|$ och dess detrendade form (nivå minus löpande 400-stegs median). Ett första, naivt test (tröskelpassageräkning) verkade stödja båda varianterna — 86–94 % av händelserna ”varnade”, medianframförhållningar $\approx$ 390 steg — och **förkastades av sin egen diagnostik**: framförhållningarna närmade sig hela cykellängden, och det tillståndsbaserade indexet låg över tröskeln under 45 % av *djup-lugn*-tiden. Ett index som helt enkelt ”ofta är på” varnar för allt och därmed för ingenting. Det ärliga instrumentet är en detektion/falsklarm-studie: detektion = överskridande i $[t_0{-}300,t_0{-}10]$ före en kollaps vid $t_0$ medan instrumentpanelen fortfarande är grön ($b>0.9$); falsklarm = överskridande i djup lugn ($b>0.9$, $>400$ steg från nästa kollaps). Över 85 händelser, vid en falsklarmbudget på 10 % (Figur `xviii_B_early_warning`):

| detektor | detektion | FA | medianframförhållning |
|---|---|---|---|
| felbaserad ($\rho_{\text{boundary}}$ som registrerad i §5) | **0.21** | 0.09 | 281 |
| tillståndsbaserad, nivå | 0.46 | 0.08 | 87 |
| tillståndsbaserad, detrendad | 0.60 | 0.09 | 56 |

**P2: falsifierad som registrerad.** Den registrerade konsekvensen binder: §5 revideras, och §6.1:s övervakningsprincip försvagas till ett graderat påstående. Mekanismen bakom misslyckandet är i sig ett resultat, och utan tvekan det mest seriekarakteristiska i rapporten: den lokala residualen är den enda signal som lokal anpassning *aktivt minimerar*. Inlärningen absorberar kopplingen i förstärkning, så bevisen för gränsupplösning tvättas bort ur varje sidas egna prediktionsfel just under den fas ett index för tidig varning är avsett att belysa — Goodharts lag tillämpad på själva diagnostiken, och den dynamiska släktingen till Rapport XV:s effektiva‑men‑självblindande regim. Kopplingen förblir synlig där inget lokalt mål skrubbar den: i den råa gränsöverskridande tillståndskovariansen. Även där är diskriminationen partiell (0.46–0.60 vid strikta budgetar), eftersom ackumulationens slutliga närmande är snabbt — merparten av den diskriminativa signalen är sammanpressad i de sista $\sim$100 stegen. Den reviderade §5 måste därför (a) definiera $\rho_{\text{boundary}}$ på gränsöverskridande *tillstånds*kovarianser, (b) ange tvättresultatet som skälet till att felbaserad övervakning är strukturellt missvisande, och (c) presentera gränshälsoövervakning som ledtidsbegränsad snarare än som en tillförlitlig snubbeltråd. **[R inom modellen]** för jämförelsen; **[IP]** för den institutionella tolkningen.

---

### A.3 Den kritiska inlärningsbandbredden

#### A.3.1 Den undre gränsen

Under drift $a_t=a_0+r_{\text{env}}t$ är residualen $r_i=(a_t-a_0)x_i+\varepsilon x_j+w_i$, så det medelvärdesbildade förstärkningsflödet är
$$\dot k=-\lambda k+\eta\big[(a_t-a_0)\,\sigma_x^2+\varepsilon\,q\big].$$
Skriv $e_k=(a_t-a_0)-k$ för den icke‑absorberade driften; den effektiva polen är $a_0+e_k$ (plus koppling), och livsduglighet kräver $e_k<m:=1-a_0-\varepsilon-$ (stabilitetsmarginal). På den ramp‑följande lösningen $\dot k\approx r_{\text{env}}$,
$$e_k\;\approx\;\frac{r_{\text{env}}+\lambda\,(a_t-a_0)}{\eta\,\sigma_x^2},\qquad\text{följaktligen}\qquad
\eta_{\min}(t)\;\approx\;\frac{r_{\text{env}}+\lambda\,(a_t-a_0)}{\sigma_x^2\,m}.$$
**[R inom modellen]** för den medelvärdesbildade balansen. Två tolkningar. Drifthastigheten inträder som väntat — detta är Rapport XV:s undre gräns i lokal form. Mindre väntat: *läckage*termen får $\eta_{\min}$ att växa med den ackumulerade driften $(a_t-a_0)$ även vid konstant $r_{\text{env}}$ — med avklingande auktoritet kostar blotta *upprätthållandet* av en absorberad anpassning inlärningshastighet. När långsam inlärning misslyckas, misslyckas den genom tillståndsdivergens: i svepet vid $(r_{\text{env}},\nu)=(5\times10^{-5},0.15)$ visar den långsamma änden mättnadslåsning och NF-residens 1.00.

#### A.3.2 Den övre gränsen

Snabb inlärning misslyckas genom den direkta reflexiva kanalen. I lugn är den förväntade policihastigheten $\mathbb{E}|\Delta k_i|=\eta\,\mathbb{E}|x_ir_i|\approx(2/\pi)\,\eta\,\sigma_x\sigma_r$, så lagret jämviktar vid
$$c^\ast\;=\;q+\frac{2\nu\eta}{\mu}\,\mathbb{E}|x_ir_i|,$$
och den klara grenen av gränsomkopplingen överlever endast så länge $\varepsilon(c^\ast)=\varepsilon_0+\beta c^\ast<\varepsilon_{\text{crit}}$, där $\varepsilon_{\text{crit}}(\overline{|r|}):=\delta^{-1}\big[\gamma(1-\overline{|r|}/R)+h/2-s^{-1}\ln\frac{b_h}{1-b_h}\big]$ är den koppling vid vilken den höga fixpunkten $b_h$ för sigmoiden försvinner. Lösning ger,
$$\boxed{\;\eta_{\max}\;\approx\;\frac{\mu\,\big(\varepsilon_{\text{crit}}-\varepsilon_0-\beta q\big)}{2\nu\beta\,\mathbb{E}|x_ir_i|/\eta}\;=\;\frac{\mu\,\big(\varepsilon_{\text{crit}}-\varepsilon_0-\beta q\big)}{(4/\pi)\,\nu\beta\,\sigma_x\sigma_r}\;}$$
**[R inom modellen]**, medelvärdesbildad. Strukturen är det transponerade långsam‑anpassningsvillkoret från adaptiv reglering: anpassning måste vara långsam i förhållande till den tidsskala på vilken dess egen aktivitet omformar den omodellerade dynamiken — här, långsam i förhållande till lagrets relaxation $\mu$ skalad med den reflexiva förstärkningen $\nu\beta$. Rohrs‑prejudikatet (§4) citeras för den strukturella insikten, inte formeln; formeln är denna modells egen. Den empiriska signaturen i den snabba änden är den särpräglade: vid $\eta=5$ *följer systemet perfekt* (medelkvadrattillstånd $\sim0.006$) medan det befinner sig i NF 89 % av tiden — en grön instrumentpanel över en upplöst gräns, gränsdomäntvillingen till Rapport XV:s Simulering D.

#### A.3.3 Den dynamiska klämningen och fönstrets stängning

Täljaren i $\eta_{\max}$ är en *kopplingsmarginal*, och den är tillståndsberoende: ackumulation höjer $q$, gränssvikt höjer $\varepsilon$ genom $\alpha(1-b)$ och höjer $\overline{|r|}$, vilket allt krymper $(\varepsilon_{\text{crit}}-\varepsilon_0-\beta q)$. Så $\eta_{\max}$ faller när systemet driver mot vecket — medan $\eta_{\min}$ stiger med ackumulerad drift genom läckagetermen. Fönstret klämmer endogent, från båda ändar, snabbast precis när systemet redan är i trubbel. **[R inom modellen]** för den komparativa statistiken av de två formlerna.

**Simuleringsresultat: P3.** Snitt vid $(r_{\text{env}},\nu)=(5\times10^{-5},0.15)$, Figur `xviii_C_bandwidth_slice`: NF-residens är 1.00 i den långsamma änden, faller till ett minimum på 0.05 i det inre, stiger till 0.89 i den snabba änden — de två fellägena är artskilda (tillståndsfel vs. gränsfel), inte bara i riktning. Fönsterkarta över $(r_{\text{env}},\nu)$, Figur `xviii_C2_window_map` (livsduglighet = mättnadsandel $<0.05$, medelkvadrattillstånd $<0.5$, NF-residens $<0.2$, över ett 13-punkters log-$\eta$-rutnät): det livsdugliga fönstret smalnar i båda koordinaterna och **stängs på 36 % av rutnätet**; stängningskonturen är den empiriska Dekomponerbarhetsfronten. **P3: stöds.** Noll‑livsduglighet är en realiserad region av parameterrummet, inte ett gränsfall. **[R inom modellen.]**

---

### A.4 Regressterminering inom modellen

Betrakta en hierarki: nivå 0 håller basparametrarna $\theta^{(0)}=(k_1,k_2)$; nivå 1 håller metaparametrar $\theta^{(1)}$ (t.ex. inlärningshastigheten, läckaget, gränströsklarna) justerade av en metainlärningsregel på nivå‑0‑prestanda; och så vidare till nivå $M$. Varje intern ”stoppregel” — ett tak, en konstitution, en översynströskel — är, genom konstruktion, en komponent av något $\theta^{(m)}$.

**Proposition A.4.1 (Nödvändighet, [R inom modellen]).** Om metainlärningsregeln på nivå $m$ uppfyller hypoteserna (i)–(iii) i Teorem A.1 med avseende på de kopplingsrelevanta riktningarna av $\theta^{(m)}$ — dess justeringar har en nollskild projektion, direkt eller genom tillstånden, på $\partial\mathbf{\Delta}/\partial\theta^{(m)}$ — så återkommer gränsdriften på nivå $m$. Genom induktion uppvisar en hierarki där varje nivå lär genom kopplingsrelevanta kanaler drift på sin toppnivå; att lägga till nivåer omlokaliserar driften, den avlägsnar den inte. Endast en *$\theta$-oberoende* term i dynamiken — en begränsning som inte är justerbar på någon nivå — stoppar drift.

**Proposition A.4.2 (Riktningsmässig tillräcklighet, [R inom modellen]).** Ett $\theta$-oberoende ankare är en delmångfald $\Theta_{\text{anch}}\subset\Theta$ på vars tangentknippe inlärningsfältet projiceras. Ankaret förhindrar flykt från $\mathcal{V}_\mathbf{\Pi}$ **omm** de normalriktningar till $\mathcal{V}_\mathbf{\Pi}$ som exciteras av inlärningsfältet är bland de riktningar ankaret begränsar. Tillräckligheten är *riktningsmässig*: drift fortsätter fritt i det obegränsade komplementet. Ett ankare som låser fel riktningar förändrar ingenting.

Relationen till Rapport XVII är en av nivådisciplinerad citering i båda riktningarna. Proposition A.4.1 är denna modells eget resultat: inom formalismen är en exogen term *nödvändig* för att stoppa meta‑adaptiv drift. Rapport XVII:s certifieringsgolv är den **[IP]**-nivå, tvärvetenskapliga identifieringen av vad sådana exogena termer institutionellt kan vara — och dess omlokaliseringsinvariant är den stående varningen att de flesta skenbara ankare vid inspektion är parametrar på en högre nivå, vilket är just den regress A.4.1 formaliserar. Dess designhävstång — minimera, diskretisera och kostnadshärda certifieringslänken — är vad §6.4 antar. Ingetdera resultatet ärver den andres nivå: propositionen gör inte certifieringsgolvet **[R]**, och golvets institutionella bredd utsträcker inte propositionen bortom den linjära modellen. A.4.2:s riktningsvillkor är det modellmässiga innehållet bakom §6.4:s krav att ankare begränsar de *kopplingsrelevanta* riktningarna: en revision som certifierar en variabel ortogonal mot den drivande kopplingen uppfyller bokstaven av ”externt ankare” och ingen av dess funktion.

---
