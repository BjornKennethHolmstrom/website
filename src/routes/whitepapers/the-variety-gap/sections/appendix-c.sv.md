## Appendix C: Simuleringsarkitektur för värdefunktionskollaps

Detta appendix definierar en minimal dynamisk modell som gör Goodhart–Ashby-syntesen och variationsgapet konkret synliga. Simuleringen är medvetet enkel så att den strukturella mekanismen förblir transparent.

### C.1 Systembeskrivning

Betrakta ett samhälle med två kopplade tillståndsvariabler:

- **W(t)** : ekonomisk produktion (välstånd), den *observerade dimensionen*.
- **E(t)** : miljömässig integritet (ekosystemhälsa), den *exkluderade dimensionen*.

Systemet utvecklas i diskreta tidssteg enligt:

W(t+1) = W(t) + α · E(t) · I(t) − δ_W · W(t)
E(t+1) = E(t) − β · I(t) + γ · (E₀ − E(t)) + η · W(t)

där:

- **I(t)** är styrinsatsen (ekonomisk investering) vald av policysystemet.
- **α** översätter aktuell miljökvalitet till investeringens produktivitet. När E degraderas ger samma I mindre W i framtiden.
- **δ_W** är välståndets naturliga depreciering.
- **β** är miljökostnaden per investeringsenhet.
- **γ** är miljöns naturliga regenereringshastighet mot dess baslinje E₀.
- **η** fångar en fördröjd negativ återkoppling: högt tidigare välstånd (vilket implicerar tidigare investeringar) eroderar så småningom miljön ytterligare (t.ex. genom ackumulerad förorening, resursutarmning).

Avgörande är att kopplingen verkar i båda riktningarna: **E** stödjer **W**, men jakten på **W** degraderar **E**, och en degraderad **E** reducerar så småningom framtida **W**.

### C.2 Värderingsarkitekturer (Styrenheter)

Vi jämför två styrningsarkitekturer som endast skiljer sig åt i sin *värdefunktionsdimensionalitet*, inte i sin kompetens.

**Arkitektur 1D (Endast BNP)**
- Målfunktion: **J₁ = W(t)**.
- Styrenheten observerar **W(t)** (med visst brus) och observerar inte **E(t)**. Den tror att maximering av W alltid är bra.
- Styrlag: I(t) = I₀ + K · (W_mål − W_obs(t)), där I₀ är en baslinje och K är en förstärkning. Styrenheten investerar mer när W ligger under det önskade målet och försöker driva W uppåt.

**Arkitektur 2D (Välmåendemedveten)**
- Målfunktion: **J₂ = W(t) + λ · E(t)** (med λ > 0).
- Styrenheten observerar både **W(t)** och **E(t)**. Den erkänner att E har värde och att degradering av E skadar framtida W.
- Styrlag: I(t) väljs för att hålla båda variablerna inom en önskad region. Konkret dämpas investeringen när E faller under ett tröskelvärde: I(t) = I₀ + K · (W_mål − W_obs(t)) · f(E), där f(E) är en sigmoid som reducerar investeringen när E sjunker, vilket förhindrar att den skadliga återkopplingsslingan utlöses.

Båda styrenheterna har tillgång till samma finansiella resurser; den enda skillnaden är dimensionaliteten i deras värderingsarkitektur.

### C.3 Parameterisering

| Parameter | Värde | Betydelse |
|-----------|-------|-----------|
| α | 0,3 | Investeringsproduktivitet per enhet av E |
| δ_W | 0,05 | Välståndsdepreciering |
| β | 0,25 | Miljökostnad per enhet av I |
| γ | 0,1 | Miljöns regenereringshastighet |
| η | 0,02 | Fördröjd skada från tidigare välstånd |
| E₀ | 100 | Miljömässig baslinjeintegritet |
| W_mål | 120 | Önskad välståndsnivå |
| I₀ | 5 | Baslinjeinvestering |
| K | 2,0 | Förstärkning (identisk för båda arkitekturerna) |
| λ | 1,5 | Vikt för miljö i 2D-målfunktionen |
| Brus σ_W, σ_E | 1,0, 0,5 | Observationsbrus (1D observerar endast W) |

Initialtillstånd: **W(0)=60, E(0)=90**.

### C.4 Förväntat beteende

**Arkitektur 1D** lyckas initialt: investering höjer W, och eftersom E fortfarande är frisk är produktiviteten hög. Styrenheten "lär sig" att investering är effektiv och fortsätter att driva W mot målet. Under tiden degraderas E tyst eftersom den inte observeras. När E faller sjunker investeringsproduktiviteten (α·E minskar), så mer I behövs för att upprätthålla W, vilket accelererar E:s nedgång. Så småningom utlöser den ackumulerade miljöskulden ett kraftigt fall i W som styrenheten inte kan förstå — dess egna handlingar orsakade kollapsen, men dess värderingsarkitektur gav den ingen kategori i vilken den kunde uppfatta E som en relevant variabel. Banan visar ett klassiskt överskridnings-och-kollapsmönster.

**Arkitektur 2D**, som observerar E, börjar moderera investeringen när E närmar sig farliga nivåer. W växer långsammare men kollapsar aldrig. Systemet når ett stabilt, lägre jämviktstillstånd där båda dimensionerna är balanserade.

### C.5 Relevans för variationsgapet

Denna simulering är en direkt instansiering av Goodhart–Ashby-syntesen:

- Den 1D målfunktionen är en observationskanal med dimensionaliteten **dim(V)=1**. Den projicerar det fulla tillståndsrummet (W, E) på en enda axel.
- Den exkluderade dimensionen E är kausalt kopplad till målvariabeln W. Att optimera proxyvariabeln W utan att övervaka E förstör så småningom den korrelation som gjorde W till en bra proxy.
- Kollapsen följer variationsgapets logik: **G = dim(R) − dim(V) = 2 − 1 = 1 > 0**. Gapet växer när E försämras, och när kopplingen slår tillbaka skapade systemets egen optimeringslogik den kris det inte kunde förutse.

Samma mekanism ligger till grund för de misslyckanden på landsnivå som beskrivs i Del V: varje fall är en högre dimensionell version av denna grundläggande loop.

### C.6 Reproducerbarhet

Python-skriptet som genererar simuleringen och visualiseringen finns tillgängligt i det medföljande repositoriet (se "Simulation Code" i det kompletterande materialet). Skriptet använder standard NumPy och Matplotlib; inga proprietära paket krävs.

**Figur C.1: Värdefunktionskollaps i ett minimalt tvåtillståndssystem**

![Figur C.1](/whitepapers/images/the-variety-gap/appendix-c-simulation.png)

1D-styrenheten (som endast observerar W) lyckas initialt och driver välståndet till ~1000 genom aggressiv investering. Detta utarmar miljöintegriteten E till nära noll. När E väl kollapsar försvinner produktiviteten (α·E·I) och systemet går in i en terminal nedgång — W faller till noll trots fortsatt styrinsats. Styrenheten kan inte uppfatta den miljöförstöring som orsakade dess eget misslyckande; den exkluderade dimensionen återvänder som oförklarlig kollaps.

2D-styrenheten (som observerar både W och E) modererar investeringen när E sjunker och upprätthåller båda variablerna på degraderade men stabila nivåer (W≈37, E≈11). Systemet når aldrig 1D-målet på W=120, men det överlever.

Fasporträttet (nederst till vänster) visar banorna i tillståndsrummet: 1D spiralerar mot systemdöd i origo, medan 2D hittar en låg-jämviktsattraktor. Det kritiska fyndet (överst till höger): även mätt med 1D-målfunktionen (endast W) presterar 2D-arkitekturen bättre efter t≈100. BNP-systemet optimerar bort sin egen förmåga att generera BNP.

Detta är Goodhart–Ashby-syntesen i sin enklaste form: en värderingsarkitektur med dim(V)=1 kan inte upprätthålla stabilitet i ett system med dim(R)=2 när dimensionerna är kausalt kopplade. Hysteresmekanismen (degraderade ekosystem regenererar med 20% av normal hastighet) återspeglar den ekologiska verkligheten och säkerställer att differentieringen är permanent, inte övergående.
