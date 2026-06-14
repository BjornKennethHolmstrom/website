# Appendix A — Formella härledningar

Detta appendix tillhandahåller de matematiska härledningar som ligger till grund för det duala regleringsramverket i Del II. Det formaliserar det duala regleringsproblemet för styrning som ett stokastiskt dynamiskt programmeringsproblem, härleder villkoret om ihållande excitation för identifierbarhet av styrningsparametrar och analyserar den glömskodynamik som styr institutionellt minnesförfall.

## A.1 Dual regleringsformulering för styrsystem

Betrakta ett styrsystem vars sanna dynamik ges av

\[
\mathbf{x}(t+1) = \mathbf{f}\bigl(\mathbf{x}(t), \mathbf{u}(t), \boldsymbol{\theta}\bigr) + \mathbf{w}(t), \qquad \mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{W}),
\]

där \(\mathbf{x}(t) \in \mathbb{R}^n\) är tillståndsvektorn, \(\mathbf{u}(t) \in \mathbb{R}^m\) är styrsignalen, \(\boldsymbol{\theta} \in \mathbb{R}^p\) är en vektor av okända parametrar, och \(\mathbf{w}(t)\) är processbrus. Regulatorn observerar

\[
\mathbf{y}(t) = \mathbf{C}\,\mathbf{x}(t) + \mathbf{v}(t), \qquad \mathbf{v}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{V}),
\]

och upprätthåller en trosfördelning \(b_t = p(\boldsymbol{\theta} \mid \mathcal{I}_t)\), där \(\mathcal{I}_t = \{\mathbf{y}(0), \mathbf{u}(0), \dots, \mathbf{y}(t-1), \mathbf{u}(t-1), \mathbf{y}(t)\}\) är den information som finns tillgänglig vid tid \(t\). Tron uppdateras via Bayes regel:

\[
p(\boldsymbol{\theta} \mid \mathcal{I}_{t+1}) \propto p(\boldsymbol{\theta} \mid \mathcal{I}_t)\, p\bigl(\mathbf{y}(t+1) \mid \mathbf{x}(t), \mathbf{u}(t), \boldsymbol{\theta}\bigr).
\]

Regulatorns mål är att minimera den förväntade kumulativa diskonterade kostnaden över en horisont \(T\):

\[
J = \mathbb{E}\!\left[ \sum_{t=0}^{T} \gamma^t\, c\bigl(\mathbf{x}(t), \mathbf{u}(t)\bigr) \right],
\]

där \(c(\cdot)\) bestraffar avvikelser från måltillståndet och överdriven styrinsats, och \(\gamma \in (0,1]\) är diskonteringsfaktorn.

Den optimala policyn för detta problem uppfyller Bellman-ekvationen:

\[
V_t(b) = \min_{\mathbf{u}} \mathbb{E}_{\mathbf{x},\boldsymbol{\theta}}\!\Bigl[ c(\mathbf{x}, \mathbf{u}) + \gamma\, V_{t+1}(b') \;\Big|\; b, \mathbf{u} \Bigr],
\tag{A.1}
\]

där \(b'\) är den posteriora tron efter att ha observerat utfallet av handlingen \(\mathbf{u}\). Förväntan tas över det aktuella tillståndet \(\mathbf{x}\), de okända parametrarna \(\boldsymbol{\theta}\) samt process- och mätbruset.

Det kritiska draget hos (A.1) är att valet av \(\mathbf{u}\) påverkar inte bara den omedelbara kostnaden utan också det *framtida tros-tillståndet* \(b'\). Detta är den duala effekten: styrhandlingen påverkar både tillståndsutvecklingen (reglering) och informativiteten hos framtida observationer (identifiering). Den optimala policyn inkluderar därför ett explicit explorationsincitament.

**Säkerhetsekvivalens och explorationsbonusen.**  
När systemet är linjärt och kostnaden är kvadratisk, och när parameterosäkerheten är liten, kan den optimala duala regleringen approximeras genom att dekomponera värdefunktionen. Låt \(\hat{\boldsymbol{\theta}} = \mathbb{E}[\boldsymbol{\theta} \mid b]\) vara den aktuella parameterskattningen, och låt \(\mathbf{P} = \text{Cov}[\boldsymbol{\theta} \mid b]\) vara skattningsfelets kovarians. Värdefunktionen kan expanderas kring det säkerhetsekvivalenta värdet:

\[
V(b) \approx V^{\text{SE}}(\hat{\boldsymbol{\theta}}) + \text{tr}\bigl(\mathbf{P}\,\mathbf{H}(\hat{\boldsymbol{\theta}})\bigr),
\]

där \(V^{\text{SE}}\) är värdet av den optimala policyn när \(\hat{\boldsymbol{\theta}}\) antas vara sanningen, och \(\mathbf{H}\) är en positivt semidefinit matris som kvantifierar känsligheten i framtida prestanda för parameterosäkerhet. Den andra termen är *osäkerhetskostnaden*: den förväntade prestandaförsämringen till följd av att inte känna till de sanna parametrarna.

Den optimala handlingen kan då skrivas som

\[
\mathbf{u}^*(t) = \mathbf{u}_{\text{SE}}(t) + \mathbf{u}_{\text{explore}}(t),
\]

där \(\mathbf{u}_{\text{SE}}(t)\) minimerar den säkerhetsekvivalenta kostnaden och \(\mathbf{u}_{\text{explore}}(t)\) är en perturbation vald för att reducera \(\mathbf{P}\) i de riktningar som är mest betydelsefulla för framtida prestanda — dvs. de riktningar i vilka \(\mathbf{H}\) är störst. Magnituden av \(\mathbf{u}_{\text{explore}}\) skalar med den aktuella osäkerheten \(\mathbf{P}\) och med känsligheten \(\mathbf{H}\). När osäkerheten är stor är explorationen mer aggressiv; i takt med att parametrarna lärs in avklingar explorationen och regulatorn konvergerar mot säkerhetsekvivalens.

I simuleringen i Del IV implementeras denna struktur med en konstant explorationsvarians \(\sigma^2_\eta\) för hanterbarhet. Den konstanta-varians-approximationen fångar den essentiella avvägningen — uthållig exploration är nödvändig när miljön fortsätter att förändras — samtidigt som den abstraherar från den optimala schemaläggningen av explorationsintensiteten.

## A.2 Ihållande excitation och identifierbarhet

För det linjära specialfallet \(\mathbf{x}(t+1) = \mathbf{A}\,\mathbf{x}(t) + \mathbf{B}\,\mathbf{u}(t) + \mathbf{w}(t)\) med okända matriser \(\mathbf{A}, \mathbf{B}\) kan parametrarna skattas från insignal–utsignal-data endast om insignalen uppfyller ett villkor om *ihållande excitation*.

Låt \(\boldsymbol{\phi}(t) = [\mathbf{x}(t)^\top, \mathbf{u}(t)^\top]^\top \in \mathbb{R}^{n+m}\) vara regressorvektorn. Systemdynamiken kan skrivas som

\[
\mathbf{x}(t+1)^\top = \boldsymbol{\phi}(t)^\top \boldsymbol{\Theta} + \mathbf{w}(t)^\top,
\]

där \(\boldsymbol{\Theta} = [\mathbf{A} \mid \mathbf{B}]^\top \in \mathbb{R}^{(n+m) \times n}\) är parametermatrisen. Minsta-kvadrat-estimatorn av \(\boldsymbol{\Theta}\) efter \(T\) observationer löser

\[
\hat{\boldsymbol{\Theta}}_T = \bigl(\boldsymbol{\Phi}_T^\top \boldsymbol{\Phi}_T\bigr)^{-1} \boldsymbol{\Phi}_T^\top \mathbf{X}_T,
\]

där \(\boldsymbol{\Phi}_T = [\boldsymbol{\phi}(0), \dots, \boldsymbol{\phi}(T-1)]^\top\) och \(\mathbf{X}_T = [\mathbf{x}(1), \dots, \mathbf{x}(T)]^\top\). Estimatorn existerar och är unik endast om \(\boldsymbol{\Phi}_T^\top \boldsymbol{\Phi}_T\) är inverterbar. Mer allmänt är parametrarna *identifierbara* om informationsmatrisen växer linjärt med \(T\).

Insignalen \(\mathbf{u}(t)\) är *ihållande exciterande* av ordning \(d\) om det existerar \(\alpha > 0\) och ett heltal \(m\) sådana att, för alla \(t\),

\[
\alpha \mathbf{I} \preceq \sum_{k=t}^{t+m} \boldsymbol{\phi}(k)\boldsymbol{\phi}(k)^\top.
\tag{A.2}
\]

Villkor (A.2) säkerställer att regressorvektorn varierar tillräckligt i alla riktningar för att unikt bestämma parametrarna. Om insignalen är konstant eller varierar endast inom ett underrum av \(\mathbb{R}^{n+m}\) blir informationsmatrisen rangdefekt och vissa parametrar är oidentifierbara oavsett observationslängden.

Styrningsanalogin är direkt. Betrakta ett styrsystem med \(p\) okända policyrelevanta parametrar — elasticiteter, multiplikatorer, efterlevnadsgrader, implementeringskapaciteter. För att identifiera dessa parametrar måste policyvektorn \(\mathbf{u}(t)\) variera över minst \(p\) oberoende riktningar över varje tillräckligt långt fönster. Ett system som tillämpar samma policyinstrument vid samma inställningar, år efter år, genererar en regressormatris vars kolumner är nästan kolinjära. De parametrar som styr systemets respons på förhållanden det aldrig har mött — responsen på en ny kris, effektiviteten hos ett oprövat instrument, kapaciteten hos en otestad leveranskedja — är oidentifierade. Regulatorn kan observera systemet i oändlighet och aldrig lära sig dessa parametrar.

Den minimala explorationsvarians som krävs för identifierbarhet skalar med brusnivån \(\|\mathbf{W}\|\) och med den okända parametervektorns dimension. I simuleringen i Del IV måste explorationsdithret \(\sigma^2_\eta\) vara tillräckligt stort i förhållande till processbruset för att säkerställa att informationsmatrisen \(\boldsymbol{\Phi}^\top \boldsymbol{\Phi}\) förblir välkonditionerad. När \(\sigma^2_\eta\) faller under denna tröskel driver parameterskattningarna bort från de sanna värdena utan att regulatorn kan upptäcka glidningen — den formella mekanismen för explorationssvältsfällan.

## A.3 Glömska och den effektiva urvalsstorleken

I en icke-stationär miljö måste regulatorn följa långsamt föränderliga parametrar. Standardmetoden är rekursiv minsta kvadrat med en glömskefaktor. Estimatorn uppdaterar parameterskattningen \(\hat{\boldsymbol{\theta}}(t)\) och den inversa informationsmatrisen \(\mathbf{P}(t)\) som

\[
\begin{aligned}
\mathbf{K}(t) &= \frac{\mathbf{P}(t-1)\,\boldsymbol{\phi}(t)}{\lambda_f + \boldsymbol{\phi}(t)^\top \mathbf{P}(t-1)\,\boldsymbol{\phi}(t)}, \\[4pt]
\hat{\boldsymbol{\theta}}(t) &= \hat{\boldsymbol{\theta}}(t-1) + \mathbf{K}(t)\bigl(y(t) - \boldsymbol{\phi}(t)^\top \hat{\boldsymbol{\theta}}(t-1)\bigr), \\[4pt]
\mathbf{P}(t) &= \frac{1}{\lambda_f}\bigl(\mathbf{I} - \mathbf{K}(t)\,\boldsymbol{\phi}(t)^\top\bigr)\,\mathbf{P}(t-1),
\end{aligned}
\]

där \(\lambda_f \in (0,1]\) är glömskefaktorn. När \(\lambda_f = 1\) viktas alla tidigare observationer lika; den effektiva urvalsstorleken växer utan gräns, och estimatorn konvergerar mot de sanna parametrarna (om miljön är stationär). När \(\lambda_f < 1\) nedviktas tidigare observationer exponentiellt med en halveringstid på ungefär \(1/(1-\lambda_f)\) tidssteg.

Den effektiva urvalsstorleken — antalet observationer som bidrar meningsfullt till den aktuella skattningen — begränsas uppåt av

\[
N_{\text{eff}} \leq \frac{1}{1 - \lambda_f}.
\tag{A.3}
\]

När \(\lambda_f = 0.99\) är det effektiva minnet ungefär 100 tidssteg. När \(\lambda_f = 0.90\) är det effektiva minnet ungefär 10 tidssteg — regulatorn minns endast det senaste årtiondets erfarenhet, och all inlärning från tiden före det är i praktiken bortglömd.

Nettoinlärningsvillkoret följer. Låt \(r_l\) vara informationsanskaffningstakten — den takt med vilken nya observationer reducerar parameterosäkerheten \(\text{tr}(\mathbf{P})\). Låt \(r_f = 1 - \lambda_f\) vara glömskotakten — den takt med vilken gammal information avklingar. Den stationära osäkerheten uppfyller

\[
\lim_{t \to \infty} \text{tr}(\mathbf{P}(t)) \approx \frac{\text{tr}(\mathbf{W})}{r_l - r_f},
\]

när \(r_l > r_f\). När \(r_l \leq r_f\) divergerar osäkerheten: systemet glömmer snabbare än det lär sig, och parameterskattningarna konvergerar aldrig.

Styrningsanalogin är att den institutionella glömskotakten bestäms av personalomsättning, organisatorisk omstrukturering och förfallet av infrastrukturen för kunskapshantering. Den effektiva urvalsstorleken för institutionellt minne är antalet tidigare administrationer, reformcykler eller programutvärderingar vars inlärning förblir tillgänglig för nuvarande beslutsfattare. När denna effektiva urvalsstorlek är mindre än antalet observationer som krävs för att identifiera systemets nyckelparametrar — givet bruset i styrningsmiljön och miljöförändringstakten — befinner sig systemet i glömska-utan-inlärningsfällan.

Mappningen mellan den formella parametern \(\lambda_f\) och institutionella karakteristika är inte exakt. Men den strukturella riktningen är tydlig. Demokratier med korta valcykler, hög ministeromsättning och svag ämbetsmannakontinuitet opererar med en låg effektiv \(\lambda_f\). System med starka karriärsbyråkratier, institutionaliserade utvärderingsarkiv och obligatoriska kunskapsöverföringsprotokoll opererar med en högre effektiv \(\lambda_f\). Skillnaden i \(\lambda_f\) avgör om systemet kan ackumulera den kunskap som krävs för att förbli kalibrerat mot en föränderlig miljö, eller om varje generation av beslutsfattare måste återupptäcka vad dess föregångare redan lärde sig.
