# 6. Simuleringsarkitektur

De formella påståendena i Del II till V är teoretiska. De beskriver mekanismer — förbikopplingsfällan, övergångsvarietetskvoten, övergångsbandbreddsfällan — som, om teorin är sund, bör producera karakteristiska dynamiska signaturer under specificerade förhållanden. Beräkningssimulering tillhandahåller ett disciplinerat sätt att testa huruvida dessa signaturer faktiskt uppstår ur de postulerade mekanismerna, och att kartlägga gränserna för de parameterregimer inom vilka de gäller. Simuleringarna är inga bevis, och de är inga empiriska valideringar. De är *existensdemonstrationer*: de visar att en given strukturell logik, när den implementeras som ett minimalt dynamiskt system, genererar det förutsagda beteendet. Om beteendet inte uppstår kräver logiken revidering. Om det gör det förtjänar logiken rätten att testas mot empiriska data.

Serien har etablerat en simuleringsmetodologi: minimala modeller med transparenta parametrar, jämförelse av två eller flera arkitekturer under identiska störningsförhållanden, och utdata visualiserad genom värmekartor, fasporträtt och sammanfattande mått. Detta papper utvidgar den metodologin i ett viktigt avseende. I enlighet med rekommendationen att stärka seriens epistemiska nivåindelning körs alla tre simuleringarna nedan med Monte Carlo‑replikering (50–100 frön, fördelningar rapporterade snarare än enstaka anekdoter) och inkluderar minst en parametersveps‑värmekarta som demonstrerar att det kvalitativa resultatet är robust över en region av parameterrymden, inte en artefakt av en enskild parameterisering. Koden är öppen, dokumenterad och utformad för replikation.

## 6.1 Simulering A: Förbikopplingsfällans dynamik

Denna simulering operationaliserar den förbikopplingsfälla som modellerades i avsnitt 3.1 och den solnedgångskopplade flyktmekanismen från avsnitt 4.2. Systemet består av två tillståndsvariabler som utvecklas i diskret tid över *T* = 200 steg.

**Tillståndsvariabler.**
- *D*(*t*) ∈ [0, 1]: dysfunktionen hos den oreformerade grunden, där 0 är full funktionalitet och 1 är totalt haveri.
- *B*(*t*) ∈ [0, *B*_max(*D*)]: förbikopplingens kapacitet att leverera utfall. Taket *B*_max(*D*) = 1 − *c*_tak · *D*, där *c*_tak ∈ [0, 1] fångar hur allvarligt grundens dysfunktion begränsar förbikopplingens effektivitet. När *c*_tak är högt kan förbikopplingen inte fullt ut kompensera för en dysfunktionell grund.

**Dynamik.**
Grundens dysfunktion utvecklas enligt:

*D*(*t*+1) = *D*(*t*) + α · *D*(*t*) · (1 − *D*(*t*)) − β · *R*(*t*) + ε_D

där α fångar dysfunktionens naturliga tendens att fördjupas när den lämnas okontrollerad (logistisk tillväxt mot 1), *R*(*t*) är det reformtryck som appliceras på grunden, och ε_D är en liten brusterm. Reformtrycket är proportionellt mot *synlig* dysfunktion:

*R*(*t*) = *K*_R · *D*_syn(*t*)

*D*_syn(*t*) = *D*(*t*) · (1 − *c*_syn · *B*(*t*))

Synlighetskoefficienten *c*_syn bestämmer hur mycket förbikopplingen maskerar den underliggande dysfunktionen: när *B* ökar avtar den synliga signalen av dysfunktion även om *D* förblir hög.

Förbikopplingskapaciteten utvecklas enligt:

*B*(*t*+1) = *B*(*t*) + γ · *R*_B(*t*) · (1 − *B*(*t*)/*B*_max(*D*(*t*))) − δ · *B*(*t*) + ε_B

där *R*_B(*t*) är investering i förbikopplingens expansion, γ är dess effektivitet, och δ är en avklingningstakt som representerar den entropi som påverkar varje institutionell mekanism. Taket *B*_max kopplar förbikopplingen till grunden: en allvarligt dysfunktionell grund sätter ett tak för vad förbikopplingen kan uppnå.

**Scenarier.**
Tre scenarier jämförs, vart och ett med identiska initialvillkor (*D*(0) = 0,4, *B*(0) = 0,1) och identiska parameterdragningar över frön.

1. **Ingen förbikoppling.** *B* är permanent noll; allt reformtryck riktas direkt mot grunden.
2. **Permanent förbikoppling.** *R*_B(*t*) är positiv och konstant; förbikopplingen expanderar men kopplas aldrig tillbaka till reform av grunden.
3. **Solnedgångskopplad förbikoppling.** *R*_B(*t*) är positiv, men när *B*(*t*) överstiger ett tröskelvärde *B*_solnedgång ökas kopplingsparametern *c*_syn — förbikopplingens framgång görs medvetet så att den *ökar* synligheten av kvarvarande dysfunktion, vilket överför tryck tillbaka till grunden. Detta är den strukturella mekanismen från avsnitt 4.2.

**Förväntade utdata.**
- *Tidsseriepaneler*: *D*(*t*), *B*(*t*) och *D*_syn(*t*) för varje scenario, med fördelningar från Monte Carlo‑ensemblen.
- *Fasporträtt*: (*D*, *B*)-banan, som visar den stabila attraktorn under den permanenta förbikopplingen och flyktbanan under solnedgångskopplingen.
- *Parametersveps‑värmekarta*: slutligt *D* vid *t* = 200 som en funktion av *c*_syn och *c*_tak, som demonstrerar den region där fällan är stabil och den region där solnedgångskopplingen bryter den.

Den kritiska förutsägelsen är att den permanenta förbikopplingen stabiliserar en lågprestations‑attraktor (*D* hög, *B* måttlig, *D*_syn låg), medan den solnedgångskopplade förbikopplingen undkommer den attraktorn genom att göra framgången själv till utlösaren för förnyat tryck på den oreformerade grunden.

## 6.2 Simulering B: Latensasymmetri mellan reform och etablerad

Denna simulering operationaliserar den omstridda kontrollmodellen från Del II. Två regulatorer — en reformkoalition **R** och en etablerad koalition **I** — verkar på samma arkitektoniska tillståndsvektor, med asymmetriska latenser och observationsdimensionaliteter. Syftet är att kartlägga övergångsutfallens fasdiagram och avgöra huruvida det heuristiska villkoret Ω ≥ 1 (övergångsvarietetskvoten) fungerar som en tröskel.

**Tillståndsrymd.**
Arkitekturen representeras av en tillståndsvektor **X**(*t*) ∈ ℝ⁴, vars fyra komponenter motsvarar latenta strukturella dimensioner: aggregeringskvot, representationskedjedjup, målfunktionens dimensionalitet och återkopplingsskydd. Målarkitekturen **X*** är en vektor med lägre aggregering, kortare kedjor, högre dimensionalitet och starkare återkopplingsskydd. Den etablerades föredragna tillstånd är **X**_I = **X**(0), den initiala arkitekturen.

**Dynamik.**
Tillståndet utvecklas som:

**X**(*t*+1) = **A** · **X**(*t*) + **B**_R · **u**_R(*t* − τ_R) + **B**_I · **u**_I(*t* − τ_I) + **d**(*t*)

där **A** är en tröghetsmatris (diagonal med värden nära 1), **B**_R och **B**_I är identitetsmatriser skalade med aktiveringseffektivitet, och **d**(*t*) är en liten exogen chock. Styrsignalerna är proportionell återkoppling:

**u**_R(*t*) = **K**_R · (**X*** − **Ŷ**_R(*t*))
**u**_I(*t*) = **K**_I · (**X**_I − **Ŷ**_I(*t*))

där **Ŷ**_R och **Ŷ**_I är de brusiga observationer som är tillgängliga för varje regulator:

**Ŷ**_R(*t*) = **C**_R · **X**(*t*) + **ε**_R,   **Ŷ**_I(*t*) = **C**_I · **X**(*t*) + **ε**_I

**Observationsmatriser.** Rangen av **C**_R definierar reformkoalitionens effektiva observationsvariation dim(**R**); rangen av **C**_I definierar den etablerades dim(**I**). Simuleringen sveper över rang(**C**_R) ∈ {1, 2, 3, 4} och rang(**C**_I) ∈ {1, 2, 3, 4}, vilket producerar ett 4×4 rutnät av Ω = dim(**R**)/dim(**I**)-värden.

**Latenssvep.** Oberoende av detta sveps kvoten τ_R/τ_I från 1 (symmetrisk) till 10 (extrem asymmetri), med τ_I = 1 fixt.

**Förstärkningsbegränsning.** Reformförstärkningen **K**_R begränsas uppåt av det latens‑påtvingade taket **K**_max ≈ 1/(τ_R · |**A**|), där |**A**| är spektralnormen av **A**. När **K**_R överstiger detta tak förutsägs oscillation.

**Utfallsklassificering.** För varje parameterkombination klassificerar simuleringen utfallet efter *T* = 150 steg:
- *Reformframgång*: **X**(*T*) ligger inom målmängden **G** (euklidiskt avstånd till **X*** under ett tröskelvärde).
- *Reformabsorption*: **X**(*T*) ligger närmare **X**_I än **X***, och reformsignalen har neutraliserats.
- *Oscillation/motreaktion*: **X**(*t*) uppvisar ihållande cykler med stor amplitud, vilket indikerar överträdelse av förstärkningstaket.

**Förväntade utdata.**
- *Fasdiagram*: utfallsklass som en funktion av Ω och τ_R/τ_I, visualiserat som en färgkodad värmekarta över 4×4 × N_latens‑rutnätet.
- *Representativa banor*: **X**(*t*)-projektioner för tre illustrativa parameterkombinationer (framgång, absorption, oscillation).
- *Bekräftelse av förstärkningstak*: överlagring av oscillationsutfall på **K**_R mot 1/(τ_R · |**A**|)-planet, som testar huruvida det förutsagda taket sammanfaller med observerad instabilitet.

Det kritiska syftet med denna simulering är att disciplinera de formella påståendena i avsnitt 2.2. Om en ren tröskel vid Ω = 1 framträder — det vill säga om utfallen övervägande är *framgång* eller *oscillation* när Ω ≥ 1 och *absorption* när Ω `<` 1, över ett intervall av latenskvoter — förtjänar den heuristiska olikheten sin plats i pappret. Om gränsen är oskarp, med framgång och absorption inflätade i Ω ≥ 1‑regionen, måste pappret mjuka upp sitt formella språk och presentera Ω som en diagnostisk indikator snarare än ett tröskelvillkor. Simuleringen körs *innan* den slutliga versionen av avsnitt 2.2 skrivs, inte efter.

## 6.3 Simulering C: Kapplöpningen om övergångsbandbredd

Denna simulering operationaliserar den dynamiska modellen från avsnitt 5.3, inklusive den kritiska kopplingen mellan varietetsgap och effektiv övergångsbandbredd som producerar tvåtröskelfällan.

**Tillståndsvariabler.**
- *G*(*t*): varietetsgapet (dimensionslöst, ≥ 0).
- *C*(*t*): andelen institutionell kapacitet som ägnas åt krishantering, ∈ [0, 1].
- β_nominell: systemets maximala övergångsbandbredd när ingen krishantering krävs.

**Dynamik.**
Gapet utvecklas enligt ekvation (1) från avsnitt 5.3:

*G*(*t*+1) = *G*(*t*) + α(*t*) − β_effektiv(*t*) + ε_G

där α(*t*) är den krävda arkitektoniska förändringstakten. I basscenariot är α konstant; i det accelererade scenariot ökar α linjärt efter en tröskeltidpunkt, vilket representerar den AI-drivna accelerationen från avsnitt 5.4.

Den effektiva övergångsbandbredden ges av ekvation (2):

β_effektiv(*t*) = β_nominell · *f*(*G*(*t*))

där *f*(*G*) = max(0, 1 − *c*_koppling · *G*). När gapet vidgas avleds en större andel av institutionell kapacitet till krishantering, vilket reducerar β_effektiv. Parametern *c*_koppling styr styrkan i denna återkoppling.

Krishanteringsandelen utvecklas som:

*C*(*t*) = min(1, *G*(*t*) / *G*_krit)

där *G*_krit är tröskeln för konstitutionell oobserverbarhet från teknisk rapport III och VI. När *G* ≥ *G*_krit konsumeras all kapacitet av krishantering, och β_effektiv faller till noll.

**Kritiska trösklar.**
- **Övergångsbandbreddsfällans tröskel** *G*_fälla: värdet på *G* vid vilket β_effektiv faller under α (den krävda anpassningstakten). När *G* överstiger *G*_fälla växer gapet autonomt eftersom systemet inte längre kan anpassas tillräckligt snabbt för att stänga det. Denna tröskel nås *före* *G*_krit närhelst α `>` 0 och *c*_koppling `>` 0.
- **Upplösningströskeln** *G*_krit: värdet vid vilket systemets observationskanaler blir konstitutionellt oinformativa. Detta är punkten utan perceptuell återvändo; före den kan systemet fortfarande se att det sviktar; efter den blir själva misslyckandet osynligt.

Tvåtröskelstrukturen — *G*_fälla `<` *G*_krit — är simuleringens centrala förutsägelse. Ett system korsar *G*_fälla först och förlorar kapaciteten för fredlig självomgestaltning medan det fortfarande framstår som operativt funktionellt. *G*_krit följer senare, och upplösning är då oundviklig.

**Parameteriseringar.**
Tre systemprofiler jämförs, var och en med identiska α-banor och identiskt initialt *G*(0) = 0,2, men olika värden på β_nominell och *c*_koppling:

1. **Högbandbreddsfederation.** β_nominell = 0,08, *c*_koppling = 0,3 (låg koppling: systemets deliberativa infrastruktur buffrar krisens konsumtion av reformkapacitet).
2. **Låst regim.** β_nominell = 0,02, *c*_koppling = 0,9 (hög koppling: kriser överväldigar den smala beslutsapparaten och konsumerar reformkapacitet snabbt).
3. **Förbikopplingstungt system.** β_nominell = 0,05, *c*_koppling = 0,5, men med det ytterligare draget att *G* initialt *underskattas* med 40 % — förbikopplingen maskerar det sanna gapet, en direkt implementering av läsbarhetsproblemet.

**Förväntade utdata.**
- *Tidsseriepaneler*: *G*(*t*), β_effektiv(*t*) och *C*(*t*) för varje profil, med vertikala linjer som markerar *G*_fälla och *G*_krit.
- *Fasdiagram*: bana i (*G*, β_effektiv)-planet, som visar tvåtröskelstrukturen och den irreversibla korsningen av *G*_fälla.
- *Parametersveps‑värmekarta*: tid till upplösning (första korsning av *G*_krit) som en funktion av β_nominell och *c*_koppling, som demonstrerar den region av parameterrymden där tvåtröskelfällan existerar och den region där systemet kan undvika den.
- *Accelerationsscenario*: en andra körning där α ökar linjärt från 0,03 till 0,10 över de sista 50 tidsstegen, vilket simulerar en AI-driven acceleration. Jämförelsen visar vilka profiler som överlever accelerationen och vilka som pressas in i fällan.

Det kritiska fyndet, om det framträder, är *övergångsbandbreddsfällan*: ett system som fortfarande fungerar operativt — *G* under *G*_krit, tjänster levererade — men som redan har förlorat kapaciteten att omforma sig självt. Gapet växer, och systemet kan inte stoppa det. Detta är det dynamiska tillstånd som avsnitt 5.3 och 5.4 beskriver kvalitativt; simuleringen gör det kvantitativt och visuellt explicit.

## 6.4 Metodologiska åtaganden

Alla simuleringar delar en uppsättning åtaganden som återspeglar seriens epistemiska hållning. Koden är öppen källkod, skriven i Python med standardiserade vetenskapliga bibliotek (NumPy, SciPy, Matplotlib) och tillgänglig i ett åtföljande repositorium. Manuskriptet refererar till repositoriet och den specifika commit‑hash som användes för att generera de publicerade figurerna. Parametrar deklareras i en enda konfigurationsfil, och simuleringen inkluderar ett reproducerbarhetsskript som regenererar alla figurer från början.

Varje simulering använder Monte Carlo‑replikering: 100 oberoende frön för Simulering A och C, och 50 frön per rutnätscell för Simulering B (givet det större parametersvepet, för att hålla beräkningen hanterbar). Resultat rapporteras som fördelningar (median, kvartilavstånd) snarare än enstaka körningars banor. Varje simulering inkluderar minst en parametersveps‑värmekarta som demonstrerar det kvalitativa resultatets robusthet över ett plausibelt intervall av parametervärden.

Simuleringarna är inte kalibrerade mot empiriska data. De är teoretiska instrument vars parametrar är illustrativa snarare än uppskattade. Pappret gör inte anspråk på att de specifika numeriska trösklarna — det exakta värdet på *G*_fälla, den exakta latenskvot vid vilken oscillation inträffar — överförs till något verkligt styrsystem. Påståendet är att de *kvalitativa mönstren* — den stabila attraktorn under en permanent förbikoppling, fasövergången kring Ω = 1, tvåtröskelfällan — är strukturella konsekvenser av de modellerade mekanismerna och bör vara observerbara i varje system som instansierar dessa mekanismer med tillräcklig trohet. Huruvida verkliga styrsystem faktiskt instansierar dem, och med vilka parametervärden, är den empiriska fråga som mätramverket från teknisk rapport VIII är utformat för att adressera.

---

Del VII avslutar pappret genom att sammanfatta dess begränsningar, erkänna analysens randvillkor och identifiera de öppna frågor som definierar forskningsfronten. Övergången från kvalitativ diagnos till formell modell är nu i allt väsentligt fullbordad; återstoden av pappret specificerar vad modellen ännu inte kan göra, och vilket arbete som återstår för dem som vill testa, förfina eller ersätta den.
