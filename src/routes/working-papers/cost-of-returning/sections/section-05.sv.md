## 5. Institutionell tid och flyktfaran

### 5.1 Tröskeln är protokollberoende, och den första lagen som föreslogs för den misslyckades

Flyktstege-satsen i §3 är deterministisk: den ger det $\theta$ under vilket kaskaden *kan* löpa. Det simulerade systemet, likt varje institution, är stokastiskt och ändligt i tid, och dess uppmätta utträde beror på hur länge det dröjer sig kvar vid varje betingelse. När $\theta$ sveps nedåt med $T$ utvärderingar per steg i Artikel X-skaleregimen ($N = 20$, $h = 0,\!15$, avklingning och spärr på), rör sig det observerade medianutträdet från $-1,\!130$ vid $T = 10$ till $-1,\!050$ vid $T = 300$: en institution som ges mer tid vid varje betingelse flyr under svagare tryck. Den första registrerade redogörelsen för detta — en affin lag i $\ln T$ — misslyckades med sitt förhandsregistrerade kriterium ($R^2 = 0,\!9314$ mot ett registrerat $0,\!95$): skiftet per log-tidsenhet krymper vid lång uppehållstid, och en obegränsad logaritm kan inte mättas. Misslyckandet behålls i bokslutet (§7.4) och tvingade fram den ersättning som följer, vilken inte anpassar någonting.

### 5.2 Uppmätta faror

Istället för att anpassa en uppehållslag mäter den slutliga studien flyktprocessen direkt. Vid varje fast $\theta$ på ett rutnät som spänner över övergångsregionen körs populationer som hålls i full konsolidering tills första flykt, många försök per population, och en enkel-rate (exponentiell) överlevnadsmodell skattas per population på hälften av försöken och testas på den undanhållna hälften. Det registrerade kriteriet tillämpades på det övergripande undanhållna överlevnadskurvans medelabsolutfel och passerade komfortabelt: $0,\!0538 < 0,\!12$ **[R inom modellen]**. Den skattade faran är brant i den institutionella miljön: $\lambda \approx 2,\!7\times10^{-4}$ per utvärdering vid $\theta = -1,\!02$, $6,\!8\times10^{-3}$ vid $-1,\!10$, och $0,\!176$ vid $-1,\!17$ — tre storleksordningar över $0,\!15$ i $\theta$, vilket är anledningen till att den deterministiska stegtröskeln förblir det rätta första ordningens objekt trots att det observerade utträdet är en första-passage-storhet.

![Flyktfara vid fast theta](/working-papers/images/cost-of-returning/final-hazard-curves.png)
*Figur 5.1 — Flyktfara per utvärdering vid fast $\theta$ (median över populationer, interkvartilband). Faran spänner över tre storleksordningar över övergångsregionen.*

Punktvist fel når ändå en topp på $0,\!119$ nära $\theta = -1,\!05$, den grunda kanten av regionen. Den toppen var inte en separat registrerad tröskel, men dess placering är diagnostiskt viktig, och den är förenlig med det förväntade felmodet för en enkel-rate-reduktion: nära den grunda gränsen involverar flykt misslyckade nukleationer och partiella kaskader, så väntetider behöver inte vara exponentiella, och tidig överlevnad kan vara plattare än vad en enda rate tillåter. Exponentialen är därför en operationell reduktion med en angiven räckvidd — tillförlitlig i den branta regionen, försämras förutsägbart mot taket — och artikeln hävdar den som inget mer.

![Validering av undanhållen fara](/working-papers/images/cost-of-returning/final-hazard-validation.png)
*Figur 5.2 — Undanhållet överlevnadskurvfel för exponentialreduktionen över $\theta$-rutnätet, mot den registrerade gränsen för det övergripande medelvärdet. Punktvist fel når en topp vid den grunda kanten, där flykt är flerstegs.*

### 5.3 Sammansättning: svepet som ackumulerad möjlighet

Om institutionell tid verkar som ackumulerad flyktmöjlighet och inget annat, måste de uppmätta fasta-$\theta$-farorna *sammansättas* till de svepta trösklarna i §5.1 utan ytterligare anpassning. För ett nedåtgående svep som besöker $\theta_1 > \theta_2 > \cdots$ med $T$ utvärderingar vardera, är den kumulativa faran efter steg $j$

$$
H_j(T) = T \sum_{m \le j} \lambda(\theta_m),
\tag{11}
$$

och det förutsagda medianutträdet är det första $\theta_j$ vid vilket $H_j \ge \ln 2$. Två registrerade tester tillämpar detta. Det *populationsbetingade* testet sammansätter varje populations egen farakurva till sitt eget förutsagda utträde och jämför per population: medelabsolutfel $0,\!0029$ i $\theta$. *Ny-populations*-testet sammansätter likaså varje träningspopulations egen farakurva till ett förutsagt utträde, tar medianen av dessa populationsspecifika förutsägelser, och jämför den med medianutträdet för helt nya populationsdragningar: fel $0,\!0050$ — exakt vid uppehållstid 10 och 30, ett rutnätsintervall grunt vid uppehållstid 100 och 300. Eftersom rutnätskvantisering får medianen av per-populations-förutsägelserna att numeriskt sammanfalla med den förutsägelse som erhålls från en medianfarakurva, uppträder aggregeringskorrektionen i fördelningen av förutsagda utträden snarare än i punktmedianen. **[R inom modellen]**

![Farosammansatt svepförutsägelse](/working-papers/images/cost-of-returning/final-sweep-composition.png)
*Figur 5.3 — Fasta-$\theta$-faror, uppmätta oberoende och sammansatta per population utan några anpassade uppehållsparametrar, mot observerade medianer på nya populationsdragningar.*

Den residuala lång-uppehållstid-biasen är förenlig med två effekter av samma tecken — icke-exponentiella väntetider i den grunda regionen (§5.2), och ändligt-sampel-populationsbräcklighet, eftersom de populationer som fortfarande är konsoliderade vid lång uppehållstid selektivt är de med låg fara. Deras bidrag är inte separat identifierade här; det populationsbetingade testet, som avlägsnar samplingsvariation över populationer, är det rena uttalandet av avsnittets påstående:

> Institutionell tid förändrar den observerade återgångströskeln genom att ackumulera flyktmöjlighet. Den deterministiska stegen rör sig inte; vad som rör sig är sannolikheten att ha använt den.
