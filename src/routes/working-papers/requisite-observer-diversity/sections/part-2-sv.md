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

---

Återstoden av detta papper spårar den dynamik som driver ρ mot ett — selektionsgradienterna, ansvarsstrukturerna och konsolideringens självförstärkande logik — och specificerar de arkitektoniska villkor under vilka ρ kan hållas under den tröskel där ensemblens skyddande kapacitet går förlorad. Del III modellerar kollapsdynamiken. Del IV undersöker existensbevis där mångfald har upprätthållits. Del V och VI specificerar konstruktionsprinciper och demonstrerar felsättet i simulering. Del VII avslutar med implikationerna för seriens grammatik och mätutmaningen framöver.
