### Appendix A — Simuleringsspecifikation

Detta appendix specificerar simuleringen som refereras i Del IV.5. Det definierar modellen, den enda svepta parametern, legitimitetsdynamiken och utdatan. Specifikationen är tillräcklig för att oberoende reimplementera simuleringen; implementationen är en enda fil, `self_iii_operator.py`, deponerad i seriens repositorium med commit-hash registrerad i den publicerade versionen. Figurer skrivs till `outputs/` och reproduceras inte här.

#### A.1 Härkomst

Simuleringen introducerar ingen ny dynamik. Anläggningen, Kalmanfiltret, den legitimitetsviktade kontrollslingan och legitimitetsuppdateringslagen återanvänds ordagrant från Rapport XIII, Appendix B, i dess parameterregim för byggd legitimitet. Operatören inträder genom exakt två tillägg, båda specificerade nedan: en ihållande inre störning, och en försvagande operatörsnod på den inre mätningen. Denna begränsning är medveten och följer disciplinen i Del V — simuleringen uppvisar en konsekvens av befintliga resultat snarare än en nyligen modellerad effekt, och varje dynamik den uppvisar måste vara härledbar ur maskineri som serien redan har validerat.

#### A.2 Modell

Styrsystemet kontrollerar ett tvådimensionellt tillstånd **x**(t) = [x₁(t), x₂(t)]ᵀ, där x₁ är en externt instrumenterad dimension och x₂ den inre dimension som når institutionen endast genom operatörsnoden. Den sanna dynamiken är den i Rapport XIII, med en tillagd term:

**x**(t+1) = **A x**(t) + L(t) **B u**(t) + **w**(t) + **e**₂ d_int,  **w**(t) ~ 𝒩(**0**, **W**),

där **A** = 0,95 **I**₂, **B** = **I**₂, **W** = 0,01 **I**₂, **e**₂ = [0, 1]ᵀ, och d_int = 0,10 är en konstant inre störning som enbart inträder i den inre dimensionen. Termen d_int representerar det stående generativa trycket från Del IV — missnöje, sårad ställning, de inre förhållanden som inte avklingar av sig själva och som aktivt måste uppfattas för att motverkas. Det är det enda element i modellen som motiveras av operatörsargumentet snarare än ärvs från Rapport XIII.

Observation bär operatörsnoden. Den sanna mätningen är

**y**(t) = **C**_nod **x**(t) + **v**(t),  **C**_nod = diag(1, φ),  **v**(t) ~ 𝒩(**0**, **V**₀ / L(t)),

med **V**₀ = 0,05 **I**₂ som i Rapport XIII. Skalären φ ∈ [0, 1] är operatörens inre trohet: φ = 1 överför den inre dimensionen intakt (upp till brus), φ → 0 driver den in i mätningens nollrum. Institutionens estimator kör emellertid på den nominella **C** = **I**₂ — den tar nodens dämpade läsning för given, omedveten om att den inre dimensionen har försvagats. Denna felanpassning mellan nodens överföring (φ·x₂) och institutionens tro (x₂) är simuleringens realisering av ärvd oobserverbarhet: kedjan kan inte uppfatta vad noden inte överför, och kan inte veta att den inte uppfattar det.

Regulatorn tillämpar **u**(t) = −**K x̂**(t), med **K** den oändliga-horisontens LQR-förstärkning för det nominella designsystemet (**A**, **B**, **Q**, **R**), **Q** = **I**₂, **R** = 0,1 **I**₂. Lösning av den diskreta algebraiska Riccati-ekvationen ger **K** ≈ 0,870 **I**₂ för dessa kostnader. Tillståndsskattningen **x̂**(t) produceras av standardrekursionen för Kalmanfiltret i Rapport XIII, Appendix A.2, med den legitimitetskalade bruskovariansen **V**(t) = **V**₀ / L(t) och den effektiva aktiveringen **B**_eff(t) = L(t) **B**; regulatorn ges sin egen aktuella legitimitet, som i Rapport XIII.

#### A.3 Legitimitetsdynamik

Den sammansatta legitimiteten L(t) = L_B(t) = L_C(t) utvecklas enligt Rapport XIII:s uppdatering (Appendix A.1):

L(t+1) = clip( L(t) − α(t) ‖**x**_rap(t)‖² + β T(t) − γ D(t) + δ, 0, 1 ),

med parametrarna för byggd legitimitet α_nedgång = 0,12, α_återhämtning = 0,03 (4:1 hysteres på om leveransgapet försämras eller förbättras), β = 0,08, γ = 0,5, δ = 0,005, och L(0) = 0,90. Transparens hålls vid full genomgående, T(t) = 1 och undertryckningsparametern λ = 1, så det rapporterade tillståndet är lika med det sanna tillståndet, **x**_rap(t) = **x**(t), och inget svek ackumuleras, D(t) = 0 för alla t. Att hålla transparens- och sveksmekanismerna inerta isolerar den effekt som studeras: den enda storhet som varierar över experimentet är operatörstroheten φ, och varje rörelse i L är därför hänförlig enbart till φ, inte till något arkitektoniskt eller transparensval.

#### A.4 Svep och utdata

Horisonten är T = 300 steg med en 20-stegs inkörningsperiod; det stationära legitimitetsmåttet är medelvärdet av L över de sista 100 stegen. φ sveps över 31 punkter på [0, 1]; varje punkt körs över 100 Monte Carlo-frön, och resultaten rapporteras som medianer med 5:e–95:e percentilband. Alla slumpmässiga element genereras från fixerade frön som registreras i implementationen.

Simuleringen producerar tre figurer, deponerade i repositoriet:

- `self3-phi-sweep.png` — stationär legitimitet mot operatörstrohet φ, median och 5:e–95:e percentilband. Detta är det centrala utfallet: hög-legitimitets-jämvikten är solitt stabil för φ över ungefär 0,6, låg-legitimitets-attraktorn nås solitt för φ under ungefär 0,25, och medianen korsar mittpunkten vid φ\* ≈ 0,33. Percentilbandet vidgas kraftigt över övergången — detta är bassäng-separatrisen, den φ-drivna motsvarigheten till det L_krit som Rapport XIII identifierar numeriskt som gränsen mellan attraktionsbassänger.
- `self3-legitimacy-trajectories.png` — legitimitet över tid för en trohet över tröskeln (φ = 1,0) och en under den (φ = 0,15), som illustrerar ansatsen och ihållandet av den operatörssådda spiralen.
- `self3-interior-and-gap.png` — det inre tillståndet x₂(t) och leveransgapet ‖**x**_rap(t)‖² för samma två troheter, som uppvisar mekanismen: den under-uppfattade inre dimensionen driver okontrollerat, det stående leveransgapet växer, och gapet matar legitimitetsnedgången.

#### A.5 Omfång

Tröskeln φ\* ≈ 0,33 är inte en konstant. Dess placering beror på den inre störningens magnitud d_int, på styrningsauktoriteten **K**, och på legitimitets-parametrarna; d_int = 0,10 valdes så att separatrisen hamnar i det inre av trohetsintervallet, där den är läsbar, snarare än vid en extrem. Vad simuleringen fastställer är inte tröskelns värde utan dess existens och dess orsak: att en primitiv-komplett, legitimitets-säker arkitektur besitter en trohetströskel under vilken den inträder i låg-legitimitets-attraktorn, och att den parameter som bär den över tröskeln är operatörens inre trohet och ingen arkitektonisk storhet. Detta är ett strukturellt påstående, och simuleringen är dess illustration, inte dess mätning.

Simuleringen realiserar operatörstrohet som ren försvagning av den inre mätningen. Den demonstrerar därför den rigorösa täckningsförlust-kärnan i ärvd oobserverbarhet — φ → 0 avlägsnar den inre dimensionen från vad kedjan kan uppfatta — och inte den tolkande substitutionsmekanismen i Del III, där en operatör rapporterar en tillförsiktligt felaktig inre dimension i stället för den sanna. Försvagning följer av den kanalalgebra serien redan har etablerat; biaserad substitution vore ett ytterligare modelleringsval som hävdar mer än apparaten härleder, och den namnges i Del III och lämnas medvetet osimulerad. Simuleringen är evidens för [R]-mekanismen, inte [I]-mekanismen.

---
