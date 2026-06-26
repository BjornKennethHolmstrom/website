# Appendix B: Arvsasymmetrin

Resultaten nedan är exakta inom den formationsmodell som specificeras i avsnittet. Modellen är en medvetet minimal representation av en mekanism — den externa stöttningen av dimensioner som kan uppmärksammas — och härledningarna ärver den statusen: de är rigorösa givet modellen **[R, inom modellen]**, medan modellen själv förblir en tolkningsrepresentation **[I]** av formation. Matematiken är elementär. Det är lämpligt för påståendet, som är en strukturell konsekvens av tillägnansregeln snarare än ett djupt teorem, och appendixet framställer det som sådant snarare än att klä det på annat sätt.

## B.1 Modellen

Ett tillståndsrum med **D** dimensioner. En formativ källa **S** varseblir en fast observerbar mängd; en dimension är *innanför* om S varseblir den och *utanför* om den inte gör det. Barnet når S (alltid) och **k** av **N** alternativa källor, där **k = round((1 − L)·N)** och **L ∈ [0, 1]** är låsstyrkan: **L = 0** är den öppna regimen (**k = N**), **L = 1** är enkälleregimen (**k = 0**).

Varje alternativ källa observerar en given dimension oberoende. Med sannolikhet **ρ** kopierar den S:s status för den dimensionen; annars observerar den dimensionen med sannolikhet **q**. Följaktligen observerar en alternativ källa en innanför-dimension med sannolikhet

> **q_in = ρ + (1 − ρ)q,**

och en utanför-dimension med sannolikhet

> **q_out = (1 − ρ)q.**

Varje nåbar källa som observerar en dimension sänder den oberoende med sannolikhet **t**. Barnet *tillägnar sig* en dimension om och endast om minst en nåbar observerande källa sänder den.

## B.2 Tillägnanslagar

Fixa en dimension och låt **n** vara antalet nåbara källor som observerar den. Tillägnan är OR av **n** oberoende Bernoulli(**t**)-sändningar, så

> **P(tillägna | n) = 1 − (1 − t)ⁿ.**  (1)

För en **utanför**-dimension observerar S den inte, så **n = B** med **B ~ Binomial(k, q_out)**. Genom att tillämpa den binomiala genererande identiteten **E[sᴮ] = (1 − q_out + q_out·s)ᵏ** med **s = 1 − t** får vi

> **a_out(k) = 1 − E[(1 − t)ᴮ] = 1 − (1 − q_out·t)ᵏ.**  (2)

För en **innanför**-dimension observerar S den, så **n = 1 + B′** med **B′ ~ Binomial(k, q_in)**. Den garanterade källtermen faktoriseras ut ur väntevärdet:

> **a_in(k) = 1 − (1 − t)·(1 − q_in·t)ᵏ.**  (3)

## B.3 Golvet, och asymmetrin som en gräns

Skriv *miss*-sannolikheterna — sannolikheten att barnet misslyckas med att tillägna sig dimensionen:

> **miss_in(k) = (1 − t)(1 − q_in·t)ᵏ,  miss_out(k) = (1 − q_out·t)ᵏ.**

Eftersom **(1 − q_in·t)ᵏ ≤ 1**,

> **miss_in(k) ≤ 1 − t  för alla k.**  (4)

Barnet misslyckas att varsebli en *källsynlig* dimension med sannolikhet högst **1 − t**, oavsett hur fullständig låsningen är, eftersom källan ensam garanterar tillägnan med sannolikhet minst **t**. För en *källosynlig* dimension finns ingen sådan garanti, och

> **miss_out(k) → 1  då  k → 0.**  (5)

Detta är asymmetrin, exakt. Dess ursprung är den enda garanterade term S bidrar med i innanför-fallet och undanhåller i utanför-fallet — faktorn **(1 − t)** i (3) som sätter ett tak för innanför-missen, utan motsvarighet i (2). Asymmetrin är därför en följdsats av tillägnanslagen, inte ett självständigt resultat. I enkällegränsen är gapet **a_in(0) − a_out(0) = t − 0 = t**: syn ärvs med ett golv på **t**, blindhet ärvs utan något.

## B.4 Inneslutning (arv av oobserverbarhet)

Den förväntade andelen av S:s blinda mängd som barnet också misslyckas att varsebli är **miss_out(k)**:

> **överlappning(k) = (1 − q_out·t)ᵏ.**  (6)

I enkällegränsen är **överlappning(0) = 1**: varje utanför-dimension missas med sannolikhet ett, så barnets oobserverbara underrum innehåller S:s med säkerhet. För **k > 0** är inneslutningen partiell, med förväntad kvarvarande överlappning given av (6). Detta ger processen bakom Ärvd Oobserverbarhet: barnet råkar inte bara dela källans blinda mängd; den blinda mängden är vad som överlever sändning när de dekorrelerade alternativen avlägsnas.

Inneslutningen är enkelriktad. Barnet ärver all S:s blindhet och, eftersom sändning även av synliga dimensioner är ofullkomlig (**t < 1**), lägger generiskt till en del egen: enligt (4) missar barnet varje källsynlig dimension med sannolikhet upp till **1 − t**. Formation reproducerar inte källans observatör. Den reproducerar källans blinda mängd och försämrar dess syn — så varje generation är i förväntan svagare blind än den som formade den, i avsaknad av dekorrelerade källor som kompenserar förlusten.

## B.5 Ingen kritisk låsning

Genom att substituera **k = (1 − L)·N** har varje storhet ovan formen **1 − (1 − c·t)^{(1−L)N}** för en konstant **c ∈ {q_in, q_out}**. Var och en är jämn och monoton i **L** på **[0, 1]**, utan någon inre punkt där tillägnan kollapsar; brantningen nära **L = 1** är den vanliga accelerationen av **(1 − c·t)ᵏ** när **k → 0**, inte en fasövergång. En kritisk låsstyrka skulle kräva en annan tillägnansregel — ett täckningsfullständighetskriterium (tillägna *hela* mängden) eller ett *m‑av‑n*-stöttningskrav (en dimension behöver minst **m** bekräftande källor). Under den ≥ 1-regel som antas här tvingas jämnhet fram, och fenomenet är asymmetrin, inte ett tröskelvärde. Den fullständighetsstatistik som rapporteras i simuleringen, **≈ a_out(k)^{(1−f)D}**, är skarp i **a_out** men ärver **a_out**:s jämnhet i **L**; vid simuleringsparametrarna är den **≈ 0,94⁶⁰ ≈ 0,02** genomgående, vilket bekräftar att dess egen stränghet, inte någon kritisk låsning, undertrycker den.

## B.6 Dekorrelation bär den blinda mängden

I den öppna regimen (**k = N**), sätt in **q_out = (1 − ρ)q** i (2):

> **a_out(N) = 1 − (1 − (1 − ρ)·q·t)ᴺ.**  (7)

Den avtar med **ρ** till **a_out(N) = 0** vid **ρ = 1**: alternativ som kopierar källans observerbara mängd delar dess blinda fläckar och bidrar inget till utanför-tillägnan, oavsett hur många barnet når. Endast den dekorrelerade täckningen **(1 − ρ)q** fyller källans blinda mängd. Ekvation (7) är ensemble-dekorrelationsresultatet från perceptions-tröskelartikeln lokaliserat till en enskild formation: en mängd observatörer kan varsebli vad någon av dem missar endast i den utsträckning deras observerbara mängder är dekorrelerade.

## B.7 Överensstämmelse med simuleringen

Vid simuleringens parametrar (**D = 120, f = 0,5, N = 30, q = 0,15, t = 0,6**, **ρ = 0** såvida den inte sveps), ger ekvationerna (2), (3), (6)

> **a_in(N) = 1 − 0,4·(1 − 0,09)³⁰ = 0,976,**
> **a_out(N) = 1 − (1 − 0,09)³⁰ = 0,941,**
> **överlappning(N) = (1 − 0,09)³⁰ = 0,059,**

tillsammans med gränsvärdena **a_in(0) = t = 0,600**, **a_out(0) = 0**, **överlappning(0) = 1**, och **a_out(N) = 0** vid **ρ = 1**. Dessa stämmer överens med Monte Carlo-körningen med tre decimaler — den överensstämmelse som serien kräver mellan ett appendix och den simulering det formaliserar.
