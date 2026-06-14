# Del II — Formellt ramverk: Dual reglering och avvägningen mellan exploration och exploatering

De föregående rapporterna i denna serie har behandlat styrning som ett kontrollproblem där systemdynamiken är känd för regulatorn, åtminstone upp till statistiskt välkarakteriserat brus. Regulatorn observerar tillståndet, beräknar en optimal respons och tillämpar den. Slingan sluts. Prestandan försämras när observationskanalen korrumperas, aktueringskedjan försvagas eller gränsen är missanpassad — men regulatorns modell av systemet behandlas i alla dessa analyser som given.

Detta papper luckrar upp det antagandet. Regulatorn känner inte till systemets dynamik med säkerhet. Den måste lära sig den. Och de handlingar den vidtar för att lära sig kan skilja sig från de handlingar den skulle vidta om den redan visste. Detta är domänen för dual reglerteori, och det är det formella hemmet för den fråga detta papper ställer: kan ett styrsystem utformas för att lära sig vad det inte vet, utan att själva inlärningen destabiliserar det system det försöker styra?

## 2.1 Dual reglerteori

En standardåterkopplingsregulator löser *regleringsproblemet*: givet en modell av systemet, välj insignaler som driver tillståndet mot ett mål. Regulatorns modell — matriserna **A**, **B** och **C**, bruskovarianserna **W** och **V**, störningsstrukturen — antas vara tillräckligt korrekt för att den optimala policy som beräknas från den ska vara adekvat. Om modellen är felaktig försämras prestandan, men regulatorn har ingen mekanism för att upptäcka felaktigheten eller korrigera den.

En *dual* regulator löser två problem samtidigt. Det första är regleringsproblemet: givet den nuvarande bästa skattningen av systemmodellen, välj insignaler som håller tillståndet nära målet. Detta är *exploatering* — att göra bästa möjliga bruk av vad regulatorn för närvarande tror. Det andra är *identifieringsproblemet*: välj insignaler som genererar observationer från vilka modellen kan förbättras. Detta är *exploration* — att agera för att förvärva bättre kunskap.

De två målen står i spänning. En insignal som är optimal för reglering givet den nuvarande modellen kan vara oinformativ för modellförbättring — den kan upprepa vad regulatorn redan har gjort, och bekräfta den befintliga skattningen utan att utmana den. En insignal som är informativ för modellförbättring kan vara suboptimal för reglering — den kan innebära medveten avvikelse från den säkerhetsekvivalenta handlingen, och introducera varians i systemets bana i utbyte mot information om hur systemet svarar.

Spänningen är inte ett designfel. Den är ett strukturellt drag hos varje regulator som måste lära sig medan den agerar. Den optimala lösningen, som först karakteriserades av Feldbaum 1960–61, är en policy som balanserar de två målen: regulatorn tillämpar en styrsignal som inkluderar både en säkerhetsekvivalent komponent (den handling som skulle vara optimal om den nuvarande modellen vore korrekt) och en explorationskomponent (en medveten perturbation vars magnitud och riktning väljs för att maximera den information som förvärvas om de parametrar som är mest betydelsefulla för framtida beslut). Balansen är dynamisk: när regulatorns osäkerhet är stor är explorationskomponenten större; när modellen är väletablerad konvergerar regulatorn mot ren exploatering.

Styrningsanalogin är direkt. Varje policyintervention är samtidigt en handling och ett experiment. En skattereform förändrar skattelagstiftningen och avslöjar därigenom elasticiteten i den beskattningsbara inkomsten — en parameter som bestämmer intäktskonsekvenserna av framtida skattesatsförändringar. En regelförändring förändrar efterlevnadsbeteendet och avslöjar därigenom den reglerade befolkningens responsivitet — en parameter som avgör om striktare eller lösare reglering kommer att vara effektiv. Ett offentligt investeringsprojekt levererar infrastruktur och avslöjar därigenom statens implementeringskapacitet — en parameter som avgör den genomförbara skalan och takten för framtida projekt.

Ett styrsystem som behandlar sina interventioner endast som handlingar kastar systematiskt bort den information de skulle kunna tillhandahålla. Det opererar som en säkerhetsekvivalent regulator: agerar som om dess modell av ekonomin, befolkningen och dess egen kapacitet vore korrekt, och avstår från möjligheten att upptäcka huruvida den har fel. Över tid, i takt med att miljön förändras, glider modellen bort från verkligheten. Regulatorn fortsätter att tillämpa interventioner som var optimala för världen sådan den var, inte för världen sådan den är. Prestandaförsämringen är gradvis, och den är osynlig för regulatorns egna övervakningssystem — eftersom dessa system är byggda på samma modell som glider.

Ett styrsystem som däremot behandlar sina interventioner som experiment utformar dem för att ge information. Det varierar policyparametrar över jurisdiktioner och följer differentiella utfall. Det piloterar program innan de skalas upp, inte primärt för att minska implementeringsrisken utan för att mäta programmets effektivitet. Det upprätthåller variation i sina egna operativa rutiner — olika upphandlingsmodeller, olika regulatoriska ansatser, olika mekanismer för tjänsteleverans — inte därför att det inte kan avgöra vilken som är bäst, utan därför att det behöver variationen för att *upptäcka* vilken som är bäst i takt med att förhållandena förändras. Detta är inte en lyx. Det är det strukturella kravet för att förbli kalibrerat mot en föränderlig miljö.

## 2.2 Den duala Bellman-ekvationen för styrning

Det duala kontrollproblemet kan formuleras formellt. Låt styrsystemets dynamik vara

\[
\mathbf{x}(t+1) = \mathbf{f}\bigl(\mathbf{x}(t), \mathbf{u}(t), \boldsymbol{\theta}\bigr) + \mathbf{w}(t),
\]

där \(\mathbf{x}(t)\) är tillståndsvektorn (ekonomiska förhållanden, miljökvalitet, sociala indikatorer), \(\mathbf{u}(t)\) är styrvektorn (policyinstrument, regulatoriska inställningar, budgetallokeringar), \(\boldsymbol{\theta}\) är en vektor av okända parametrar (policymultiplikatorer, efterlevnadselasticiteter, implementeringskapaciteter), och \(\mathbf{w}(t)\) är stokastiskt brus.

Regulatorn känner inte till \(\boldsymbol{\theta}\). Den upprätthåller en trosfördelning \(p_t(\boldsymbol{\theta})\) över parametrarna, uppdaterad via Bayes regel i takt med att observationer ackumuleras:

\[
p_{t+1}(\boldsymbol{\theta}) \propto p_t(\boldsymbol{\theta})\, p\bigl(\mathbf{y}(t) \mid \mathbf{x}(t), \mathbf{u}(t), \boldsymbol{\theta}\bigr),
\]

där \(\mathbf{y}(t)\) är det observerade utfallet (vilket kan avvika från det sanna tillståndet på grund av mätbrus, modulerat av observations-legitimitetsparametern i teknisk rapport XIII).

Regulatorns mål är att minimera den förväntade kumulativa diskonterade kostnaden över en horisont \(T\):

\[
J = \mathbb{E}\!\left[ \sum_{t=0}^{T} \gamma^t\, c\bigl(\mathbf{x}(t), \mathbf{u}(t)\bigr) \right],
\]

där \(c(\cdot)\) bestraffar avvikelser från måltillståndet och överdriven styrinsats, och \(\gamma \in (0,1]\) är diskonteringsfaktorn.

Den optimala policyn för detta problem uppfyller Bellman-ekvationen:

\[
V_t(b) = \min_{\mathbf{u}} \mathbb{E}_{\mathbf{x},\boldsymbol{\theta}}\!\Bigl[ c(\mathbf{x}, \mathbf{u}) + \gamma\, V_{t+1}(b') \;\Big|\; b, \mathbf{u} \Bigr],
\]

där \(b = \bigl(\hat{\mathbf{x}}, p(\boldsymbol{\theta})\bigr)\) är tros-tillståndet — regulatorns bästa skattning av systemtillståndet och dess osäkerhet om parametrarna. Förväntan tas över det sanna tillståndet \(\mathbf{x}\), de okända parametrarna \(\boldsymbol{\theta}\) och det stokastiska bruset, givet den aktuella tron.

Det kritiska draget hos denna Bellman-ekvation är att valet av \(\mathbf{u}\) påverkar inte bara den omedelbara kostnaden \(c(\mathbf{x}, \mathbf{u})\) utan också det *framtida tros-tillståndet* \(b'\) — eftersom observationen \(\mathbf{y}(t)\) som kommer att användas för att uppdatera \(p(\boldsymbol{\theta})\) beror på den vidtagna handlingen. En handling som producerar ett större utslag — ett högre signal-till-brus-förhållande i systemets utsignal — tillhandahåller mer information om \(\boldsymbol{\theta}\), reducerar framtida osäkerhet och möjliggör bättre framtida beslut. Den optimala policyn inkluderar därför en *explorationsbonus*: handlingar lutas mot sådana som utlovar att reducera osäkerhet om parametrar som är betydelsefulla för framtida prestanda.

Detta kan explicitgöras genom att dekomponera värdefunktionen. Under vissa approximationer kan den optimala styrningen skrivas som

\[
\mathbf{u}^*(t) = \mathbf{u}_{\text{SE}}(t) + \mathbf{u}_{\text{explore}}(t),
\]

där \(\mathbf{u}_{\text{SE}}(t)\) är den säkerhetsekvivalenta handlingen — den handling som skulle vara optimal om den nuvarande parameterskattningen \(\hat{\boldsymbol{\theta}}\) vore sanningen — och \(\mathbf{u}_{\text{explore}}(t)\) är en medveten perturbation vars magnitud skalar med regulatorns osäkerhet och med känsligheten i framtida prestanda för de okända parametrarna. När osäkerheten är stor är explorationskomponenten större. När parametrarna är precist skattade avklingar explorationskomponenten mot noll och regulatorn blir i praktiken säkerhetsekvivalent.

Styrningsimplikationen är att ett väldesignat inlärningssystem inte bara implementerar den policy som framstår som bäst givet aktuell kunskap. Det varierar medvetet sina handlingar — över jurisdiktioner, över tid, över policydomäner — på sätt som är informativa om de parametrar som är mest betydelsefulla. Variationen är inte en eftergift till politisk kompromiss eller administrativ oförmåga. Den är det strukturella uttrycket för explorationsbonusen i det duala kontrollmålet.

## 2.3 Explorationssvältsfällan

En regulator som löser det fullständiga duala kontrollproblemet balanserar exploration och exploatering optimalt, per konstruktion. Men verkliga styrsystem löser inte Bellman-ekvationer. De svarar på politiska incitament, institutionella tryck och de kognitiva begränsningarna hos de människor som driver dem. Och dessa incitament bestraffar systematiskt exploration.

Exploration involverar varians. Att prova något nytt — en annan upphandlingsmodell, en reformerad regulatorisk ansats, en experimentell programdesign — introducerar möjligheten till misslyckande. På kort sikt är den förväntade prestandan för en explorativ handling vanligtvis sämre än den förväntade prestandan för den kända, säkerhetsekvivalenta handlingen, eftersom den explorativa handlingen inte är optimerad för det aktuella tillståndet. Nyttan av exploration realiseras i framtiden — i form av bättre modeller, bättre kalibrerade interventioner och bättre utfall längre fram — men kostnaden bärs i nuet.

En regulator som utvärderas på kortsiktiga utfall — en vald regering som står inför nästa val, en utnämnd tjänsteman som står inför nästa prestationsgenomgång, en minister som försvarar budgeten inför parlamentet — kommer därför att tendera att undertrycka exploration. Den politiska kostnaden för ett misslyckat experiment är omedelbar och synlig. Den politiska nyttan av den förvärvade kunskapen är diffus, fördröjd och tillskrivs ofta den efterträdare som implementerar den förbättrade policyn. Incitamentsgradienten pekar mot säkerhetsekvivalens: agera som om den nuvarande modellen är korrekt, undvik varians och låt framtiden ta hand om sig själv.

Konsekvensen är *explorationssvältsfällan*. Regulatorn upphör att sondera bortom sin nuvarande modell. Den tillämpar samma policyinstrument på samma sätt, cykel efter cykel, och observerar utfall som är konsistenta med modellen — eftersom regulatorn inte genererar den variation som skulle avslöja huruvida modellen är felaktig. Modellen glider bort från verkligheten i takt med att miljön förändras. Varietetsgapet (teknisk rapport VI) vidgas. Men vidgningen är osynlig för regulatorn, eftersom regulatorn har slutat generera den information som skulle upptäcka den.

Prestandan börjar försämras — långsamt till en början, sedan snabbare i takt med att gapet mellan modellen och verkligheten vidgas. Regulatorn, som observerar försämringen, står inför ett grymt val. Den kan utforska — introducera variation, prova nya ansatser, acceptera risken för synligt misslyckande — i just det ögonblick när dess politiska kapital är som mest utarmat av de försämrade utfallen. Eller så kan den fördubbla exploateringen — tillämpa den befintliga modellen mer aggressivt, dra åt de befintliga instrumenten, kräva mer ansträngning från de befintliga institutionerna — och hoppas att försämringen är tillfällig.

Fällan sluter sig. Det system som mest behöver lära sig är det system som minst har råd med de experiment som inlärning kräver. Exploration skjuts upp till nästa kris, nästa administration, nästa budgetcykel. Modellen fortsätter att glida. Försämringen fortsätter. Så småningom överskrider gapet en kriströskel — det finansiella systemet kollapsar, pandemin överväldigar hälsosystemet, miljöförstöringen blir irreversibel — och systemet tvingas lära sig allt på en gång, under de sämsta tänkbara förhållandena, med utarmad legitimitet och minskad kapacitet.

Explorationssvältsfällan är inte hypotetisk. Det är den strukturella logiken bakom det sena Sovjetunionens oförmåga att uppfatta sin egen ekonomiska stagnation, bakom ihållandet av misslyckade narkotikapolicies över årtionden och jurisdiktioner, bakom det upprepade misslyckandet hos finansiella regulatoriska modeller att förutse systemiska kriser, och bakom det kalibreringsunderskott som serien diagnostiserade i det kinesiska styrsystemet efter 2012. I varje fall hade systemet den formella kapaciteten att lära sig. Vad det saknade var det institutionaliserade skyddet för den exploration som inlärning kräver.

## 2.4 Villkoret om ihållande excitation

Det duala reglerramverket identifierar *att* exploration är nödvändig. Systemidentifieringsteori specificerar *hur mycket* exploration som är nödvändig för att inlärning ska vara möjlig.

I standardformuleringen kan parametrarna för ett linjärt system skattas från insignal-utsignal-data endast om insignalen är *ihållande exciterande*. Formellt är en signal \(u(t)\) ihållande exciterande av ordning \(n\) om det existerar \(\alpha > 0\) och ett heltal \(m\) sådana att, för alla \(t\),

\[
\alpha \mathbf{I} \preceq \sum_{k=t}^{t+m} \boldsymbol{\phi}(k)\boldsymbol{\phi}(k)^\top,
\]

där \(\boldsymbol{\phi}(t)\) är regressorvektorn konstruerad från tidigare insignaler och utsignaler. Villkoret säkerställer att insignalen varierar tillräckligt — i amplitud, frekvens och riktning — för att excitera systemets alla moder, vilket gör det möjligt att unikt bestämma de parametrar som styr varje mod.

Om insignalen är konstant, eller varierar endast inom ett smalt band, blir matrisen på höger sida rangdefekt: vissa parametrar kan inte skattas från de tillgängliga data, oavsett hur långt observationsfönstret är. Regulatorn kan observera systemet i oändlighet och aldrig lära sig de parametrar som bestämmer dess respons på förhållanden den aldrig har mött.

Styrningsanalogin är direkt och betydelsefull. Ett styrsystem som bara någonsin gör vad det redan vet hur man gör — som tillämpar samma policyinstrument vid samma inställningar, år efter år — genererar en insignal av otillräcklig variation för att identifiera sina egna driftparametrar. Det kan inte lära sig elasticiteten i beskattningsbar inkomst om det aldrig varierar skattesatserna. Det kan inte lära sig effektiviteten hos olika pedagogiska ansatser om det aldrig varierar läroplan eller undervisningsmetoder. Det kan inte lära sig kapaciteten i sin egen implementeringskedja om det aldrig försöker sig på projekt av olika skalor eller komplexiteter. Det kan inte lära sig den reglerade befolkningens responsivitet om det aldrig varierar regleringens stränghet eller tillsynsstil.

Villkoret om ihållande excitation ger rigoröst innehåll åt det antifragilitetsbegrepp som har åberopats, ofta löst, i styrningsdiskursen. Ett system som aldrig upplever stress kan inte lära sig de parametrar som bestämmer dess respons på stress. Ett system som undertrycker all varians — alla protester, alla policymisslyckanden, alla externa chocker — är inte maximalt stabilt; det är maximalt sårbart, eftersom det har eliminerat den excitation som modellidentifieringen är beroende av. Systemets skenbara stabilitet är stabiliteten hos en regulator som opererar på en modell som aldrig har utmanats — en modell vars överensstämmelse med verkligheten är okänd och, eftersom excitationen har undertryckts, omöjlig att känna.

Designimplikationen är att exploration inte kan vara episodisk. Den kan inte vara något systemet bara gör när en kris tvingar fram det, eller bara när en reforminriktad ledare råkar ha makten. Den måste vara kontinuerlig och institutionaliserad — inbyggd i arkitekturen som ett permanent drag i reglerslingan, skyddad från de kortsiktiga incitament som skulle släcka den. Regulatorn måste upprätthålla en *ihållande excitationssignal*: ett uthålligt, medvetet program av experimenterande, variation och exponering för nya förhållanden som håller systemets parametrar identifierbara.

Detta är den strukturella rollen för de skyddade experimentutrymmen som serien har identifierat, över flera rapporter och flera landfall, som det konvergerande första steget i livskraftig reform. Det kommunala laboratoriet, sandlådestaten, den särskilda ekonomiska zonen, pilotprogrammet med randomiserad utvärdering — var och en är en mekanism för att injicera ihållande excitation i styrsystemets insignal. Var och en genererar den variation som gör inlärning möjlig. Och var och en är sårbar för explorationssvältsfällan: när budgetarna är strama, när det politiska trycket ökar, när den befintliga modellen tycks fungera adekvat, är experimentutrymmena det första som skärs bort. Villkoret om ihållande excitation förklarar varför nedskärning av dem inte är en harmlös effektivitetsåtgärd utan styrsystemets gradvisa självförblindning — den tysta elimineringen av den signal som dess fortsatta livskraft är beroende av.

Återstoden av detta papper handlar om vad som händer när exploration upprätthålls, vad som händer när den svälts ut, och hur man utformar arkitekturer som håller den vid liv. Simuleringen i Del IV demonstrerar dynamiken. De empiriska illustrationerna i Del V grundar dem i fall. Konstruktionsprinciperna i Del VI specificerar det institutionella maskineriet. Men den formella kärnan är här: varje policyintervention är ett experiment, vare sig regulatorn erkänner det eller inte; den regulator som utformar sina interventioner för att vara informativa överlever; den regulator som undertrycker informationen i sina egna handlingar upptäcker förr eller senare, för sent, att den har styrt en fantom.
