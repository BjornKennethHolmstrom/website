## 5. Experiment B5: information är användbar, men lärande är en handling

### 5.1 Vad är det planeraren inte vet?

B5 utgår från den överraskande styrkan hos B:s kontroll med likformig föreställning om framtida mål. I stället för att anta att samma 30 mål kan uppstå i varje värld drar B5 en latent stödmängd $S$ av storlek $k\in\{2,3,4,6,8,12\}$, likformigt från en universalmängd om 30 mål, och tilldelar därefter stödet Dirichletvikter med koncentration $\alpha\in\{0.3,1,3\}$. Med denna symmetriska hierarkiska prior är den prediktiva priorfördelningen över mål *exakt likformig*. Planeraren känner priorfamiljen men inte den enskilda världens stöd eller vikter.

Tre referensvärden isolerar informationskällan:

$$
I=V_{\mathrm{inf}}-V_{\mathrm{flat}}
=(V_S-V_{\mathrm{flat}})+(V_{\mathrm{inf}}-V_S).
$$

Här är $V_S$ värdet av en policy som optimerats med en likformig prediktiv fördelning *inom det sanna stödet*, medan $V_{\mathrm{inf}}$ använder de faktiska sannolikhetsvikterna. Detta är en redovisningsmässig uppdelning av värde, inte ett allmänt påstående om att en informationsform alltid är viktigare än en annan.

Den fysiska världen reduceras till **324 tillstånd** för att möjliggöra exakt planering över upp till **496 belief-tillstånd för observationshistorik**. Planeraren kan få ett enkätsvar som samplar den sanna fördelningen av framtida mål, med tillsatt känd likformig brusnivå. Observationerna uppdaterar en explicit härledd bayesiansk posterior, i traditionen av Bayesadaptiv planering (Guez, Silver & Dayan, 2012). B5 gör därefter en avgörande åtskillnad mellan *lärande som tränger undan produktiv verksamhet* och *lärande som sker parallellt med produktiv verksamhet*.

### 5.2 Vad som faktiskt förhandsregistrerades [R, konfirmerande]

Det ursprungliga **villkor E** krävde att en enkät upptog en hel beslutsperiod. Produktion eller investering upphör, normalt förmågeförfall fortsätter och enkäten kan förbruka reserver. Den Bayesadaptiva planeraren väljer själv om den ska genomföra enkäten och kan avstå.

| Fryst hypotes | Skattning | Justerat intervall | Utslag |
|:---|---:|:---|:---|
| **H5-1**: kunskap om stöd återvinner minst hälften av $I$ | **0,591** | [0,488; 0,682] | **Inkonklusivt** |
| **H5-2**: optimalt exklusivt enkätlärande återvinner minst 5 % av $I$ | ≈0,000 | [−0,000008; 0,0000004] | **Förkastat: försumbart** |
| **H5-3**: riktade samband med brus, stödstorlek och tid | — | Alla omfattar noll | **Samtliga inkonklusiva** |

Påståendet om halva informationsvärdet är **inte bekräftat** bara för att punktskattningen är 59,1 %. Den förhandsregistrerade, justerade undre gränsen är **0,488**, under tröskeln **0,5**. Ett lika viktigt negativt resultat är att en optimal lärande planerare nästan aldrig väljer den ursprungliga enkätåtgärden: bara **9 av 800** testvärldar uppvisar någon positiv sannolikhet för enkäter, och den sammanlagda sannolikhetsmassan är mycket liten. När nästan alla vinster är noll är de formellt skattbara korrelationerna för H5-3 inte särskilt informativa i sak. Den explorativa H5-4 finner i stort sett ingen förändring i förmågor som finns kvar när målet avslöjas.

De inbyggda kontrollerna av optimalitet och kalibrering passerade. De visar överensstämmelse med den matematiska modellen och den samplade priorn; de intygar inte att modellen realistiskt beskriver folkopinion eller framtida samhällsbehov.

### 5.3 Ett dokumenterat tillägg som ändrade tolkningen, inte utslaget [R, explorativt]

Tester i verifieringsfasen visade att en enkät som tar en hel period var orimligt kostsam. Innan pilot- och testpoolerna genererades **bevarade** ett dokumenterat tillägg, B5-0.1, E:s frysta hypoteser och lade till två explorativa jämförelser: **C**, där en enkät kan genomföras parallellt med en normal fysisk handling mot en fast belöningskostnad, och **F**, där en gratis observation anländer före den första handlingen. Kostnaderna för samtidiga enkäter fixerades till **0**, **0,075** och **0,375** belöningsenheter. Det motsvarar noll, en tiondel respektive hälften av **belöningen i fas 1 för en periods produktion i aktivitet 1 på förmågenivå 1** ($u_P=0.75$ belöningsenheter), lika i alla världar. När denna regel fastställdes visste forskarna att en diagnostisk gratis observation i en verifieringsvärld hade ett genomsnittligt värde på **0,092**; detta ingår i redovisningen. **Testpoolens** konfirmerande resultat för E beräknades och låstes innan något C- eller F-värde från **utvecklings- eller testvärldarna** hade granskats. Före denna låsning hade däremot flaggor för C:s enkätfrekvens setts i 16 verifieringsvärldar och 50 pilotvärldar, och C/F-värden hade förekommit i ett fåtal verifieringsvärldars funktionella röktester. Inga C- eller F-resultat från utvecklings- eller testpoolerna hade granskats före E:s låsning.

![Resultat om informationsinhämtning i B5, explorativa](figures/b5_learning_cost_sv.png)

*Figur 1.* Explorativa 95-procentiga parade bootstrapintervall från `figures/b5_learning_cost_sv.png` (svensk omritning av originalfigurens oförändrade data; originalets figurgenerator: `wp0_build/figure.py`, se källpaketet). E:s intervall [−0,000007; 0,0000002] är alltför smalt för att synas i denna skala. De konfirmerande H5-testerna använder justerade 97,5-procentiga intervall, **inte** dessa explorativa intervall.

| Informationsvillkor | Återvunnen andel av $I$ | Världar där lärande sker | Förväntat antal enkäter per värld |
|:---|---:|---:|---:|
| **E:** enkäten tränger undan en period | ≈0,000 | 1,1 % | ≈0,000005 |
| **C:** parallellt med handling, kostnad 0,375 | −0,001 | 3,1 % | 0,009 |
| **C:** parallellt med handling, kostnad 0,075 | **0,105** | 60,9 % | 0,327 |
| **C:** parallellt med handling, gratis | **0,209** | 100 % | 1,600 |
| **F:** en gratis observation före handling | **0,219** | 100 % | 1,000 |
| **Stödet exakt känt** | **0,591** | Inte en policy för informationsinhämtning | — |

Detta är **explorativa** kvoter mellan genomsnittliga förbättringar gentemot den likformiga planeraren och genomsnittligt $I$ över 800 testvärldar, inte nya konfirmerande utslag. Det genomsnittliga ex ante-värdet av en gratis observation är **0,087** belöningsenheter (95-procentigt intervall [0,078; 0,096]) och positivt i samtliga 800 världar. Ändå köps en observation som tränger undan en hel period nästan aldrig. Redan en marginalkostnad på 0,075 halverar ungefär det realiserade värdet av gratis lärande parallellt med handlingar; vid 0,375 försvinner fördelen nästan helt.

Tidpunkten spelar också roll. En observation före handling (F) återvinner ungefär lika mycket som upp till två enkäter parallellt med produktionen (C utan kostnad). Detta är inte ett allmänt dominanspåstående om tidig information jämfört med två senare signaler, utan beskriver den valda målfamiljen och handlingarnas tidshorisont.

I **ett separat, oparat urval med ytterligare 200 världar där stöden är klustrade i stället för likformigt valda** återvinner kunskap om stödet omkring **0,914** av fullinformationsgapet, medan gratis samtidigt lärande återvinner **0,263** och en gratis tidig observation **0,280**. Det genomsnittliga gapet mellan informerad och likformig planerare är större där (0,640 jämfört med 0,438), och vinsten av gratis parallellt lärande är cirka 0,168 i stället för 0,091 belöningsenheter. Denna enda regim med felspecificerad prior visar att kalibrering mot den egna priorn inte generellt ger en övre gräns för *förbättringen över en likformig baslinje*. Det är inte ett generellt påstående om felaktiga priorer. Delstudien är explorativ och tillåter inte någon efterhandsjustering av posteriorn.

### 5.4 Den avgörande skillnaden [IP]

B5 visar inte att forskning är olönsam. Det visar att **en viss informationskälla, som köps genom ett visst avbrott, inte är värd sin kostnad under dessa modellparametrar**. Den bayesianska lärande planeraren är inte irrationell: information höjer den förväntade beslutskvaliteten, men att skaffa den kan förstöra en ännu värdefullare möjlighet. En policy som kan observera samtidigt som den handlar möter en annan begränsning och kan därför rationellt välja att lära sig.

En undersöknings förväntade marginalvärde beror på beslutssituationen. En signal kan förutsäga det framtida målet noggrant men ändå sakna betydelse om varje möjlig posterior leder till samma handling. Omvänt kan en grov signal bli avgörande om den förändrar ett irreversibelt tidigt val. Detta ligger i linje med bayesiansk beslutsteori och sekventiell preferensinhämtning (Blackwell, 1953; Boutilier, 2002). Kostnaden för lärande är inte alltid monetär: fördröjning, utebliven produktion, samordningsbörda och förfall hos oanvända förmågor spelar också roll.

**[IP — Lärandets arkitektur spelar roll.]** Det kan vara mer produktivt att fråga *om information kan inhämtas utan att verksamheten måste avbrytas* än att fråga om information har ett positivt abstrakt värde. B5 ger ett modellbaserat skäl att undersöka denna designvariabel. Det **bevisar inte** att dedikerad forskning, överläggning eller demokratisk konsultation bör underordnas löpande produktion.
