# Del II — Formalisering av observatörsmångfald

Serien *Governance as Engineering* har under nio rapporter analyserat de strukturella begränsningarna för varje enskild styrningsregulator: dess observationsmatris, dess latens, dess dimensionalitet, dess målfunktion. Detta avsnitt utvidgar analysen från individen till ensemblen. Det behandlar populationen av observatörer — de institutioner, modeller och avkänningsinfrastrukturer som kollektivt informerar styrning — som en sammansatt sensor med egenskaper som inte kan reduceras till dem hos någon enskild medlem. Det centrala påståendet är att den effektiva variationen hos denna sammansatta sensor inte beror på antalet nominella observatörer utan på deras strukturella oberoende, och att förlusten av detta oberoende producerar ett felsätt som seriens befintliga primitiver inte kan diagnostisera.

## 2.1 Observatörsensemblen som en sammansatt sensor

Betrakta ett styrsystem — en nationell administration, ett planetärt samordningsorgan, ett regulatoriskt nätverk — som måste uppskatta någon latent tillståndsvektor **X**(*t*) ∈ ℝᵈ. Tillståndet inkluderar de dimensioner som är av betydelse för policy: ekonomisk aktivitet, ekologisk integritet, social sammanhållning, teknologisk bana och kopplingarna mellan dem. Systemet observerar inte **X**(*t*) direkt. Det tar emot signaler från en population av *N* observatörsorganisationer, som var och en producerar en uppskattning baserad på sin egen avkänningsinfrastruktur, sina egna analytiska modeller och sin egen institutionella position.

Låt den *i*:te observatörens observationsekvation vara:

**y**_i(*t*) = **C**_i · **X**(*t*) + **ε**_i(*t*)

där **C**_i är observatörens observationsmatris — en linjär projektion från den fullständiga tillståndsrymden till det underrum observatören kan särskilja — och **ε**_i(*t*) är en brusterm med kovarians Σ_i. Matrisen **C**_i fångar observatörens *strukturella perspektiv*: vilka dimensioner av **X** den kan uppfatta, och med vilken upplösning. Bruset **ε**_i fångar observatörens *mätfel*: de slumpmässiga och systematiska avvikelserna mellan signalen den tar emot och den sanna projektionen av tillståndet på dess observationsunderrum.

*Observatörsensemblen* är den sammansatta sensor som bildas genom att stapla de individuella observationsekvationerna. Definiera ensemblens observationsmatris:

**C**_ens = [**C**_1; **C**_2; …; **C**_N]

och ensemblens brusvektor **ε**_ens = [**ε**_1; **ε**_2; …; **ε**_N]. Ensemblens observation är då:

**y**_ens(*t*) = **C**_ens · **X**(*t*) + **ε**_ens(*t*)

Två egenskaper hos denna sammansatta sensor bestämmer dess kapacitet att informera styrning. Den första är dess *effektiva rang*, betecknad *r*_ens: rangen av **C**_ens, vilket är antalet oberoende dimensioner av **X** som ensemblen kollektivt kan särskilja. När *r*_ens är mindre än dimensionaliteten hos **X** existerar tillståndsdimensioner som är osynliga för hela ensemblen — varje observatör delar en blind fläck, och den blinda fläcken är oupptäckbar genom korsreferering eftersom ingen observatör har oberoende tillgång till den saknade dimensionen.

Den andra egenskapen är ensemblens *felkovariansstruktur*. Kovariansmatrisen Σ_ens fångar hur observatörernas fel är relaterade. Av särskild betydelse är den parvisa felkorrelationen ρ_ij mellan observatörerna *i* och *j*. När ρ_ij är nära noll är observatörernas fel dekorrelerade: de gör olika misstag, och medelvärdesbildning över dem minskar bruset. När ρ_ij är nära ett är observatörernas fel perfekt korrelerade: de gör samma misstag, och medelvärdesbildning över dem ger ingen brusreduktion. Strukturen hos Σ_ens — inte enbart det nominella antalet observatörer — avgör huruvida ensemblen drar nytta av distribuerad avkänning eller bara replikerar ett enda perspektiv.

Detta är den kritiska distinktionen. Ett styrsystem som konsulterar tjugo observatörsorganisationer har inte tjugo oberoende observationskanaler om dessa organisationer alla delar en gemensam modelleringsinfrastruktur, en gemensam datapipeline eller ett gemensamt metodologiskt ramverk som bäddar in samma systematiska snedvridningar. Ensemblens effektiva observationskapacitet bestäms av rangen av **C**_ens och dekorrelationsstrukturen hos Σ_ens, inte av organisationsschemat.

## 2.2 Nödvändig observatörsmångfald

Seriens organiserande princip är Ashbys lag om nödvändig variation: en regulator kan endast stabilisera ett system vars variation den kan matcha. Teknisk rapport VI utvidgade denna princip till värdearkitekturer: målfunktionens dimensionalitet måste matcha störningsmiljöns dimensionalitet. Det föreliggande pappret utvidgar den ytterligare, till populationen av observatörer.

Definiera *osäkerhetsrymden* **U** som den uppsättning dimensioner av **X** längs vilka systemets bana inte är deterministiskt förutsägbar. Dessa är de dimensioner där modellfel spelar roll — där skillnaden mellan systemets förväntade tillstånd och dess faktiska tillstånd, givet den nuvarande policybanan, är tillräckligt stor för att ha betydelse för styrningsutfall, och där ingen enskild modell kan förutsäga utvecklingen på ett tillförlitligt sätt. Dimensionaliteten hos osäkerhetsrymden, betecknad dim(**U**), är antalet oberoende dimensioner av irreducibel okunskap som styrsystemet måste navigera.

*Nödvändig observatörsmångfald* är villkoret att observatörsensemblens effektiva rang måste motsvara eller överstiga osäkerhetsrymdens dimensionalitet:

*r*_ens ≥ dim(**U**)

När detta villkor är uppfyllt kan ensemblen i princip särskilja alla de tillståndsdimensioner som är av betydelse för att upptäcka modellfel. Ingen blind fläck delas av varje observatör. Om en observatörs modell är systematiskt felaktig beträffande en specifik dimension — takten i ekologiska regimskiften, de fördelningsmässiga konsekvenserna av en penningpolitik, svansrisken hos en konstruerad patogen — har någon annan observatör i ensemblen oberoende tillgång till den dimensionen och kan producera en signal som avviker från konsensus. Avvikelsen är informationen: den avslöjar osäkerhet som annars skulle vara osynlig.

När *r*_ens `<` dim(**U**) är ensemblen konstitutionellt blind för vissa dimensioner av osäkerhetsrymden. Varje observatör delar en blind fläck — en tillståndsdimension som ingen av deras observationsmatriser projicerar på, eller som alla projicerar på på samma systematiskt snedvridna sätt. Den blinda fläcken är oupptäckbar genom korsreferering, eftersom ingen observatör har oberoende tillgång till den saknade dimensionen. Konsensus kommer att vara enhällig, och konsensus kommer att vara felaktig, och felet kommer att ackumuleras osynligt tills den uteslutna dimensionen tvingar sig till synlighet genom en kris som inget instrument förutsåg.

Detta är Ashbys lag omformulerad för den observerande populationen. Precis som en enskild regulator med otillräcklig variation inte kan stabilisera det system den styr, kan en observatörsensembl med otillräcklig variation inte övervaka den osäkerhet den måste navigera. Misslyckandet är strukturellt, inte parametriskt. Det kan inte avhjälpas genom att förbättra kvaliteten hos någon enskild observatör, eftersom underskottet inte ligger i observatörernas kompetens utan i den kollektiva arkitekturen för deras observation: de delar en gemensam blind fläck, och ingen mängd förfining inom den arkitekturen kan göra den blinda fläcken synlig.

## 2.3 Korrelerade kontra dekorrelerade fel — formalisering av ensemblens varians

Begreppet effektiv rang fångar huruvida ensemblen täcker de relevanta dimensionerna av tillståndsrymden. Men även när *r*_ens är adekvat beror *kvaliteten* på ensemblens uppskattning på korrelationsstrukturen hos observatörernas fel. Två observatörer med identiska **C**-matriser men oberoende brus är ingen diversifierad ensemble; de dubbelsamplar samma projektion. Mångfald kräver dekorrelation av systematiska snedvridningar: **C**_i-matriserna måste spänna över olika underrum av **X**, och felen **ε**_i måste härröra från källor som är strukturellt oberoende, så att en snedvridning i en observatörs uppskattning inte är en snedvridning i en annans.

Den vanliga statistiska nyttan av distribuerad avkänning fångas av ett välbekant resultat: för *N* observatörer med individuell felvarians σ² och fel som är oberoende och identiskt fördelade är variansen för ensemblens medelvärde σ²/*N*. Medelvärdesbildning över observatörer reducerar bruset, och reduktionen skalar linjärt med antalet observatörer. Detta är den matematiska grunden för intuitionen att "fler observatörer är bättre."

Men detta resultat förutsätter att observatörernas fel är oberoende. När fel är korrelerade minskar nyttan av antal, och i gränsen för perfekt korrelation försvinner den helt.

Låt de *N* observatörerna ha individuell felvarians σ² (för enkelhet antagen lika över observatörerna) och parvis felkorrelation ρ, där 0 ≤ ρ ≤ 1. Variansen för ensemblens medelvärde är inte σ²/*N* utan:

Var(ensemblens medelvärde) = σ² ((1 − ρ)/*N* + ρ)

När ρ = 0 — felen är fullständigt dekorrelerade — reduceras variansen till σ²/*N*, standardresultatet. När ρ = 1 — felen är perfekt korrelerade, alla observatörer gör identiska misstag — är variansen σ², oberoende av *N*. Ensemblen har kvar *N* nominella observatörer men får den statistiska nyttan av en. Den konsulterar i praktiken en enda observatör *N* gånger och misstar upprepning för bekräftelse.

Det mellanliggande området är lika lärorikt. När ρ = 0,5 är variansen σ²(0,5/*N* + 0,5), vilket närmar sig σ²/2 när *N* växer sig stort. Oavsett hur många observatörer som läggs till kan ensemblens varians inte falla under hälften av den individuella felvariansen, eftersom den delade felkomponenten — den systematiska snedvridning som är gemensam för alla observatörer — sätter ett irreducibelt brusgolv. Ensemblen betalar omkostnaden för att upprätthålla *N* observatörer men får skyddet av endast två oberoende kanaler.

Detta antyder en naturlig definition av det *effektiva antalet oberoende observatörer*, *N*_eff. Sätt ensemblens varians lika med σ²/*N*_eff och lös ut:

*N*_eff = 1 / ((1 − ρ)/*N* + ρ)

När ρ = 0 är *N*_eff = *N*. När ρ = 0,5 närmar sig *N*_eff 2 när *N* växer. När ρ → 1 är *N*_eff → 1. Det nominella antalet observatörer är en dålig vägledning för ensemblens effektiva kapacitet; vad som är av betydelse är korrelationsstrukturen.

Definitionen generaliseras till en viktad ensemble $\hat{x} = \sum_i w_i y_i$ ($w \ge 0$, $\mathbf{1}^\top w = 1$). Genom att skriva det effektiva antalet som det värde som reproducerar den realiserade variansen under oberoende, $w^\top \Sigma\, w \equiv \sigma^2 / N_{\text{eff}}(w)$, får man
$$N_{\text{eff}}(w) = \frac{\big(\sum_i w_i \sigma_i\big)^2}{w^\top \Sigma\, w},$$
vilket återfår $N_{\text{eff}} = N/(1+(N-1)\rho)$ vid $w = \mathbf{1}/N$ med lika $\sigma$. Täljaren är den kvadrerade $\sigma$-viktade massa som estimatorn binder; nämnaren är vad detta åtagande faktiskt kostar givet korrelationsstrukturen. Att välja $w$ för att maximera $N_{\text{eff}}(w)$ är det minsta-varians-program som tas upp i §2.5. **[R]**

Detta resultat är inte originellt för det föreliggande pappret. Uttrycket är algebraiskt ekvivalent med *N*_eff = *N* / (1 + (*N*−1)ρ), vilket är standardkorrektionen för effektiv urvalsstorlek under intraklasskorrelation — Kishs *designeffekt* inom surveystatistik (Kish, 1965), med samma struktur som uppträder i portföljdiversifiering under korrelerad avkastning och i analysen av ensemblemetoder inom maskininlärning. Bidraget här är inte ekvationen utan dess tillämpning: att behandla en civilisations observatörsorganisationer som ett korrelerat urval av det latenta tillståndet, och att läsa designeffekten som en diagnos av styrningskapacitet snarare än av surveyeffektivitet.

Detta har en direkt och obekväm implikation för samtida styrning. När alla större observatörer konsulterar samma grundmodell, när alla tillsynsmyndigheter tillämpar samma harmoniserade bedömningsmetodik, när alla klimatmodeller delar samma parameterisering av molnåterkopplingar, närmar sig den parvisa felkorrelationen ρ ett. *N* är stort — dussintals myndigheter, hundratals modellkörningar, tusentals publicerade studier — men det effektiva *N*_eff är nära ett. Civilisationen betalar den fulla kostnaden för sin epistemiska infrastruktur — satelliterna, superdatorerna, konferenserna, de expertgranskade tidskrifterna — medan den får observationsskyddet av en enda sensor. Och sensorn har blinda fläckar som ingen kan se eftersom varje instrument de skulle kunna kontrollera mot delar samma arkitektur.

Ensemblens varians‑ekvation — standardstatistik, tillämpad på en icke‑standardpopulation — är det formella ankaret för detta papper. Den gör precist vad "epistemisk monokultur" betyder i operationella termer: det är det tillstånd under vilket ρ → 1, *N*_eff → 1, och observatörsensemblen förlorar den statistiska nyttan av distribuerad avkänning. Den tillhandahåller en diagnos som kan uppskattas från observerbara data — parvisa prediktionskorrelationer över observatörsorganisationer — utan att kräva kunskap om det sanna tillståndet **X**, vilket definitionsmässigt är oobserverat. Och den gör klart att det relevanta måttet för ett epistemiskt system inte är antalet observatörer det konsulterar utan det effektiva oberoendet hos de observatörer det upprätthåller.

## 2.4 Modellmonokultur och datamonokultur — de två vägarna till ρ → 1

Ensemblens varians‑ekvation i avsnitt 2.3 behandlar den parvisa felkorrelationen ρ som en skalär sammanfattning av observatörsensemblens beroendestruktur. Men ρ kan närma sig ett genom två distinkta vägar, och distinktionen har konsekvenser för både diagnos och botemedel.

*Modellbaserad monokultur* uppstår när observatörer delar en gemensam modellarkitektur. Två myndigheter kan använda oberoende insamlade data, men om båda bearbetar dessa data genom samma grundmodell, samma parameterisering av fysikaliska processer eller samma analytiska ramverk, kommer deras fel att vara korrelerade. Den delade arkitekturen bäddar in induktiva snedvridningar — känslighet för vissa drag, blindhet för andra — som är identiska över alla användare. Korrelationen uppstår från *bearbetningen* av information, inte från dess källa.

*Databaserad monokultur* uppstår när observatörer delar en gemensam träningskorpus eller ett gemensamt observationsunderlag. Även med olika modellarkitekturer, om alla observatörer tränar på samma skrapade internetdata, samma IPCC-scenarioensembl eller samma satellitbearbetningspipeline, kommer deras modeller att konvergera mot samma empiriska regelbundenheter och samma luckor. Korrelationen uppstår från att *informationen* i sig är systematiskt trunkerad eller snedvriden innan någon observatör bearbetar den.

I samtida AI-driven styrning verkar dessa två vägar samtidigt och ackumuleras. Samma få grundmodellarkitekturer tränas på överlappande webbskalekorpora, finjusteras med liknande RLHF‑preferensdata och konsulteras sedan av tusentals institutioner som behandlar deras utdata som oberoende bedömningar. Den totala korrelationen ρ_total kan approximeras som:

ρ_total ≈ 1 − (1 − ρ_model)(1 − ρ_data)

där ρ_model fångar felkorrelationen som kan tillskrivas delad arkitektur och ρ_data fångar korrelationen som kan tillskrivas delad träningsfördelning. När både ρ_model och ρ_data är icke‑försumbara drivs ρ_total mot ett även om varje enskild väg endast är måttligt begränsande. De två mekanismerna är multiplikativa i sin effekt på *N*_eff.

Den praktiska implikationen är att upprätthållande av enbart modellmångfald — att använda olika arkitekturer — är otillräckligt om alla arkitekturer tränas på samma data. Omvänt är upprätthållande av enbart datamångfald — olika träningsmängder — otillräckligt om alla observatörer bearbetar sina data genom samma grundmodell. Att institutionalisera observatörsmångfald kräver att båda vägarna adresseras: strukturellt oberoende observationsmatriser (olika **C**-matriser, per avsnitt 2.1) *och* strukturellt oberoende datakällor. Konstruktionsprinciperna i Del V adresserar modellvägen genom ensemblemetoder (avsnitt 5.2) och datavägen genom observationssubsidiaritet (avsnitt 5.3), vilka var och en måste vara närvarande för att den andra ska ge sin fullständiga skyddande nytta.

## 2.5 Viktad allokering och exponeringsinversionen

Avsnitt 2.3 slog samman ensemblen med lika vikter. I praktiken är en ensemble *viktad*: en estimator $\hat{x} = \sum_i w_i y_i$ med $w \ge 0$, $\mathbf{1}^\top w = 1$, och det naturliga konstruktionsdraget är att välja $w$ för att minimera felvariansen,
$$\sigma^2_{\text{eff}}(w) = w^\top \Sigma\, w,$$
vilket återfår §2.3 vid $w = \mathbf{1}/N$ och är ett konvext kvadratiskt program – den lång-enbart global-minimum-varians-allokeringen (GMV), strukturellt identisk med minsta-varians-portföljval. Detta avsnitt visar att variansoptimal viktning, tillämpad på den kovarians man faktiskt kan *skatta*, är den allokering som är mest exponerad mot den korrelation den inte kan skatta. **[R]** för algebran; **[IP]** för styrningstolkningen.

**Gapet mellan skattning och verklighet.** Avsnitt 7.3 medger redan att $\Sigma$ är latent och måste skattas från observerbara proxier – delade arkitekturer, korpusar, finansiärer, jurisdiktioner. Kalla den skattningen $\Sigma_{\text{est}}$. Varje beroende som *inte* är synligt i proxierna är per konstruktion frånvarande från $\Sigma_{\text{est}}$. Låt en sådan dold gemensam indata (en delad återanalysprodukt, en delad tidssignal) belasta en delmängd $K$ av kanaler, så att den sanna kovariansen är $\Sigma_0 = \Sigma_{\text{est}} + a a^\top$ med $a$ med stöd på $K$, medan $\Sigma_{\text{est}}$ behandlar $K$ som oberoende. En antagonist – eller enbart en korrelerad chock – som förstärker denna indata injicerar en delad felkomponent,
$$\Sigma_{\text{true}}(s) = \Sigma_0 + s\,v v^\top, \qquad v_i = \sigma_i \ (i \in K),\ 0 \ \text{annars},$$
vilket ger realiserad varians
$$\sigma^2_{\text{eff}}(w,s) = w^\top \Sigma_0\, w \;+\; s\,(w^\top v)^2 .$$
Attacktermen styrs helt av **spoof-exponeringen** $E(w) = (w^\top v)^2 = \big(\sum_{i\in K} w_i \sigma_i\big)^2$: den $\sigma$-viktade massa allokeringen placerar på $K$.

**Proposition (exponeringsinversion).** Ta den tvåblocksensemble som isolerar mekanismen: ett *crowd*-block $C$ ($n_C$ kanaler, varians $\sigma_C^2$, inbördes korrelation $\rho_C>0$ i $\Sigma_{\text{est}}$) och ett *rent* block $K$ ($n_K$ kanaler, varians $\sigma_K^2 \le \sigma_C^2$, som framstår som ömsesidigt okorrelerade i $\Sigma_{\text{est}}$ men delar den dolda indatan). Då placerar GMV-allokeringen på $\Sigma_{\text{est}}$ strikt större $\sigma$-viktad massa på $K$ än den likaviktade allokeringen, och har följaktligen strikt högre spoof-exponering:
$$\frac{W_K^{\text{GMV}}}{W_K^{\text{flat}}} = \frac{N\,a_K}{n_C a_C + n_K a_K} > 1, \qquad a_K = \frac{1}{\sigma_K^2},\ \ a_C = \frac{1}{\sigma_C^2\,[\,1+(n_C-1)\rho_C\,]} ,$$
med det överskjutande realiserade variansen under spoofen lika med
$s\big(E_{\text{GMV}} - E_{\text{flat}}\big) = s\,\sigma_K^2\big((W_K^{\text{GMV}})^2 - (W_K^{\text{flat}})^2\big) > 0.$

*Bevis.* Med $\Sigma_{\text{est}} = \mathrm{blkdiag}(\Sigma_C, \sigma_K^2 I)$ och $\Sigma_C = \sigma_C^2[(1-\rho_C)I + \rho_C \mathbf{1}\mathbf{1}^\top]$ är vektorn $\mathbf{1}$ en egenvektor till $\Sigma_C$ med egenvärde $\sigma_C^2[1+(n_C-1)\rho_C]$, så $\Sigma_C^{-1}\mathbf{1} = a_C \mathbf{1}$. GMV-vikterna $w^\star \propto \Sigma_{\text{est}}^{-1}\mathbf{1}$ är därför likformiga inom varje block: $a_C$ per crowd-kanal, $a_K$ per ren kanal. Efter normering är $W_K^{\text{GMV}} = n_K a_K / (n_C a_C + n_K a_K)$, och $W_K^{\text{GMV}} > n_K/N = W_K^{\text{flat}} \iff a_K > a_C$, vilket gäller närhelst $\rho_C>0$ eller $\sigma_C^2 > \sigma_K^2$. Båda blocken viktar $K$ likformigt, så $\sum_{i\in K} w_i \sigma_i = W_K \sigma_K$ för varje allokering, vilket ger $E_{\text{GMV}}/E_{\text{flat}} = (W_K^{\text{GMV}}/W_K^{\text{flat}})^2$. $\square$

Överviktsfaktorn $a_K/a_C = (\sigma_C^2/\sigma_K^2)[1+(n_C-1)\rho_C]$ är crowd-blockets designeffekt gånger dess varianskvot: **ju mer korrelerad och ju större den synliga crowd:en är, desto hårdare flyr GMV den och desto mer koncentreras allokeringen på det rena blocket** – så exponeringen växer med exakt den synliga korrelation som §2.3 säger åt oss att undvika. I den starka crowd-gränsen $W_K^{\text{GMV}} \to 1$ och exponeringskvoten närmar sig $(N/n_K)^2$. Detta är inversionen: de egenskaper som gör $K$ attraktivt för variansminimering (skenbar dekorrelation, låg varians) är just de som maximerar dess skada när den dolda korrelationen väl har aktiverats. Den allokering som är bäst före chocken är sämst efter den.

**Korollarium (robusthet mot uppmätt beroende hjälper inte).** Låt den $\Gamma$-medvetna robusta allokeringen minimera $\max_{f\in F}\,[\,w^\top \Sigma_{\text{est}} w + s(w^\top v_f)^2\,]$ över de *observerbara* faktorerna $f$ (alla med stöd på $C$). Att straffa $(w^\top v_f)^2$ för crowd-stödda $f$ trycker vikten ännu längre bort från $C$ och över på $K$, så $W_K^{\text{robust}} \ge W_K^{\text{GMV}}$ och därmed $E_{\text{robust}} \ge E_{\text{GMV}} > E_{\text{flat}}$. Att hårdna mot den korrelation man kan se minskar strikt sett inte – och ökar generiskt – exponeringen mot den korrelation man inte kan se. Detta är det operationella innehållet i att "mäta beroende, inte certifiera oberoende" är *nödvändigt men inte tillräckligt*: mätbart strukturellt överlapp ($\Gamma$) är inte realiserad felkorrelation ($\Sigma$), och att optimera mot det förra skulpterar ensemblen till det senares ideala måltavla.

Konstruktionstolkningen är snäv och skär mot den uppenbara hävstången. Att maximera $N_{\text{eff}}$ genom variansoptimal viktning är säkert endast i den mån $\Sigma_{\text{est}}$ är fullständig; under den mätlatens som §7.3 redan beviljar är den det inte, och optimumet koncentrerar vikten precis där skattningen är blind. Den skyddande allokeringen är inte den som minimerar den skattade variansen, utan den som begränsar $\sup_{K}(w^\top v_K)^2$ över *kandidatmängder* av omätta gemensamma indata – dvs. som sätter ett tak för per-delmängd $\sigma$-viktad koncentration. Likaviktning är den grova versionen av detta tak; "subventionera ortogonalitet" (Del V) är den skarpa. **[IP]**

*(Verifierat numeriskt i `paper_x_echo_adversarial_fragility.py`: vid $n_C{=}24,\,n_K{=}12$ placerar GMV och robust $0{,}97$–$0{,}99$ av vikten på $K$ mot $0{,}33$ för flat, och båda passerar flat:s realiserade fel vid spoof-styrka $s\approx0{,}75$, och når $\sim\!4\times$ vid $s{=}8$, samtidigt som de förblir immuna mot attacker på de observerbara faktorerna.)*

---

Återstoden av detta papper spårar den dynamik som driver ρ mot ett — selektionsgradienterna, ansvarsstrukturerna och konsolideringens självförstärkande logik — och specificerar de arkitektoniska villkor under vilka ρ kan hållas under den tröskel där ensemblens skyddande kapacitet går förlorad. Del III modellerar kollapsdynamiken. Del IV undersöker existensbevis där mångfald har upprätthållits. Del V och VI specificerar konstruktionsprinciper och demonstrerar felsättet i simulering. Del VII avslutar med implikationerna för seriens grammatik och mätutmaningen framöver.
