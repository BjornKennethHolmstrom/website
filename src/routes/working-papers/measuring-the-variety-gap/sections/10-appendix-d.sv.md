## Appendix D: Matematisk appendix

Denna appendix innehåller de formella härledningarna bakom det sammansatta varietetsgapindexet, de multiplikativa och additiva formuleringarna, den grundläggande parameterhierarkin och den metod för osäkerhetspropagering som beskrivs i avsnitt 5. Den formaliserar även den dynamiska utvidgning som introduceras i avsnitt 6. Notationen etableras först och följs av härledningarna i logisk ordning.

### D.1 Notation

Låt ett styrsystem karaktäriseras av åtta parametrar, var och en normaliserad till en dimensionslös form:

- **V_o** ∈ ℕ⁺ : Observationsarkitekturens effektiva dimensionalitet.
- **V_e** ∈ ℕ⁺ : Störningsmiljöns effektiva dimensionalitet.
- **τ** ∈ ℝ⁺ : Karakteristisk responslatens, mätt i månader.
- **σ** ∈ [0,1] : Signalens trohet, där σ = 0 representerar fullständig signalförstörelse och σ = 1 perfekt överföring.
- **p** ∈ [0,1] : Immunpermeabilitet, andelen reformer som uppnår strukturell implementering. Dess komplement (1 − p) är den symboliska anpassningstakten.
- **ω** ∈ ℝ⁺ : Oscillationsamplitud, mätt som variationskoefficienten för en relevant variabel för styrningsutfall.
- **β** ∈ [0,1] : Förbikopplingstäthet, där β = 0 innebär ingen förbikopplingsaktivitet och β = 1 fullständig dominans av förbikoppling.
- **ρ** ∈ [0,1] : Symbolisk‑till‑strukturell reformkvot, andelen annonserade reformer som är symboliska snarare än strukturella. Per definition gäller ρ = 1 − p.

Det sammansatta varietetsgapindexet betecknas **G**, och observerbarhetströskeln betecknas **G_krit**. Den dynamiska utvidgningen betecknas **dG/dt**.

### D.2 Det multiplikativa indexet

Samordningsmisslyckandets skatt (artikel V) fastställer att samtidiga arkitektoniska misslyckanden multipliceras snarare än adderas. Ett styrsystem med *n* misslyckanden, där vart och ett reducerar den effektiva kapaciteten med en andel fᵢ, opererar med den effektiva kapaciteten:

**C_eff = C₀ · ∏ᵢ₌₁ⁿ (1 − fᵢ)**

där C₀ är den baslinjekapacitet som skulle råda om alla observationskanaler vore intakta, alla latenser matchade störningarnas tidsskalor och alla reformer uppnådde strukturell implementering.

Varietetsgapet G definieras som kvoten mellan störningsmiljöns effektiva dimensionalitet och styrsystemets effektiva kapacitet att uppfatta och svara på den. Det multiplikativa indexet uttrycker detta som:

**G = (V_e / V_o) · (1 / f_τ) · (1 / g_σ) · (1 / h_p) · (1 / j_β) · (1 / k_ω)**

där funktionerna f_τ till k_ω transformerar respons- och emergenta parametrar till normaliserade kapacitetsmultiplikatorer begränsade till (0,1], där 1 innebär ingen försämring och värden som närmar sig 0 allvarlig försämring. Den symbolisk‑till‑strukturella kvoten ρ är per definition lika med 1 − p och förs därför inte som en oberoende term; dess bidrag inordnas under h_p = p, som bär en kombinerad exponent i den nivåviktade formuleringen (D.4) vilken återspeglar dess roller på både nivå 2 och nivå 3.

De specifika funktionsformerna är:

- **f_τ = exp(−τ / τ₀)** , där τ₀ är en referenslatens satt till 12 månader – den observerade medianresponslatensen bland de kalibreringsfall som bedömts ha genomförbara styrningsövergångar, och den latens vid vilken den exponentiella kapacitetsbestraffningen blir materiell (f_τ ≈ 0,37 vid τ = τ₀). När τ → 0, f_τ → 1 (ingen kapacitetsförlust på grund av latens). När τ → ∞, f_τ → 0 (total kapacitetsförlust på grund av oändlig latens).

- **g_σ = σ** (direkt användning av signalens trohet, redan normaliserad till [0,1]).

- **h_p = p** (immunpermeabilitet, andelen reformer som uppnår strukturell implementering).

- **j_β = 1 − β** (komplementet till förbikopplingstätheten; högre förbikopplingstäthet minskar den effektiva styrningskapaciteten).

- **k_ω = exp(−ω / ω₀)** , där ω₀ är en referensoscillationsamplitud satt till 0,20 – den observerade medianvariationskoefficienten för BNP-tillväxt bland högkapacitetsfallen i kalibreringen (Finland, Sverige, Tyskland), vilken representerar det amplitudriktmärke som är förenligt med adekvat styrning. När ω → 0, k_ω → 1. När ω → ∞, k_ω → 0.

Produktformen säkerställer att ett nollvärde på någon kapacitetsmultiplikator – fullständigt sammanbrott i signalens trohet (σ = 0), total immunimpermeabilitet (p = 0), oändlig latens (τ → ∞) – driver G mot oändligheten (G → ∞), vilket representerar ett system vars Varietetsgap är obegränsat stort. Denna egenskap återspeglar ramverkets strukturella påstående att ett enda katastrofalt arkitektoniskt misslyckande är tillräckligt för att göra ett styrsystem oförmöget att utföra sina funktioner.

I praktiken är parametrarna avgränsade från noll genom mätbegränsningar och genom överlevnadskravet att ett styrsystem måste upprätthålla någon minimal funktionalitet för att fortsätta existera som ett styrsystem. Det multiplikativa indexet beräknas i logaritmisk form för numerisk stabilitet:

**ln G = ln(V_e / V_o) − ln f_τ − ln g_σ − ln h_p − ln j_β − ln k_ω**

och exponentieras för att återfå G.

### D.3 Det additiva indexet (robusthetskontroll)

En additiv formulering av indexet tillhandahålls för jämförelse och som en robusthetskontroll. Det additiva indexet behandlar varje parameter som ett oberoende bidrag till det totala styrningsunderskottet:

**G_add = (V_e − V_o) / V_e + (τ / τ_max) + (1 − σ) + (1 − p) + β + (ω / ω_max) + ρ**

där τ_max och ω_max är normaliseringskonstanter satta till de maximala observerade värdena i kalibreringsurvalet (ungefär 36 månader för τ, 0,40 för ω). Varje term är begränsad till [0,1], och det totala G_add är begränsat till [0,8].

Den additiva formuleringen är enklare att beräkna och tolka än den multiplikativa formen. Den uppvisar inte egenskapen med en enskild felpunkt som den multiplikativa formen har – ett system med ett katastrofalt misslyckande och sju adekvata parametrar kan få ett måttligt värde på det additiva indexet medan det får ett extremt dåligt värde på det multiplikativa indexet. Den multiplikativa formen föredras eftersom den är strukturellt konsistent med Samordningsmisslyckandets skatt. Den additiva formen rapporteras vid sidan av den för att göra det möjligt för analytiker att bedöma känsligheten i den diagnostiska klassificeringen för valet av funktionsform. Betydande divergens mellan den multiplikativa och den additiva klassificeringen indikerar att systemets sårbarhet är koncentrerad till en enskild parameter och att den diagnostiska slutsatsen är känslig för den antagna interaktionsstrukturen.

### D.4 Grundläggande parameterhierarki och viktning

Alla åtta parametrar är inte strukturellt jämlika. Den grundläggande hierarki som beskrivs i avsnitt 5.2 implementeras genom exponenter som tillämpas på varje parameter i den multiplikativa produkten. Den allmänna viktade formen är:

**G = (V_e / V_o)^(w₁) · (1 / f_τ)^(w₂) · (1 / g_σ)^(w₁) · (1 / h_p)^(w₂ + w₃) · (1 / j_β)^(w₃) · (1 / k_ω)^(w₃)**

där:
- **w₁ = 1,5** för nivå 1‑parametrar (epistemiska): V_e/V_o, σ.
- **w₂ = 1,0** för nivå 2‑parametrar (respons): τ.
- **w₃ = 0,5** för nivå 3‑parametrar (emergenta): förbikopplingstäthet β, oscillationsamplitud ω.

Immunpermeabilitet p bär en kombinerad exponent av w₂ + w₃ = 1,5, vilket återspeglar dess dubbla strukturella roll: som mått på responskapacitet (nivå 2) vilken avgör hur systemet agerar på uppfattade signaler, och som källan till den symboliska anpassningsdynamiken (nivå 3) vilken definitionsmässigt är identisk med 1 − ρ. Denna konsolidering är matematiskt exakt: eftersom ρ = 1 − p skulle en nominellt separat term för ρ på nivå 3 innebära en dubbelräkning av samma storhet. Den kombinerade exponenten 1,5 är identisk med vad som skulle ha erhållits genom att inkludera både p vid w₂ = 1,0 och ρ vid w₃ = 0,5 – men anges transparent i stället för att skymmas av skenet av två oberoende parametrar.

Viktningsschemat återspeglar den kvalitativa kausala struktur som identifierats över de tjugoen fallen i serien: ett misslyckande på den epistemiska nivån (nivå 1) gör alla andra parameterskattningar otillförlitliga och vidgar varietetsgapet mer allvarligt än ett motsvarande misslyckande på respons- eller emergentnivån. De specifika exponentvärdena (1,5, 1,0, 0,5) härleds inte från första principer – någon sådan härledning existerar inte – utan representerar en sparsam parameterisering av den kausala hierarkin. Känslighetsanalys av viktningsschemat är okomplicerad: exponenterna kan varieras inom plausibla intervall (vanligtvis ±0,5 för nivå 1, ±0,3 för nivå 2, ±0,2 för nivå 3) och de resulterande diagnostiska klassificeringarna jämföras. Om klassificeringen är stabil under plausibla variationer av viktningsschemat är den diagnostiska slutsatsen robust mot viktningsantagandena. Om den är instabil bör känsligheten rapporteras tillsammans med den primära klassificeringen.

### D.5 Kalibrering av observerbarhetströskeln

Observerbarhetströskeln G_krit är det värde på varietetsgapindexet vid vilket signal-till-brusförhållandet i styrsystemets observationskanal faller under ett. Denna tröskel kan inte härledas från första principer för det sammansatta indexet – avbildningen mellan de åtta parametrarna och systemets effektiva signal-till-brusförhållande är för komplex för en analytisk lösning. Istället kalibreras G_krit empiriskt utifrån de tjugo fallen i serien.

Kalibreringsproceduren är:

1. För varje fall, klassificera styrsystemet som ”ovanför tröskeln” eller ”under tröskeln” baserat på den ursprungliga kvalitativa diagnosen: system som bedömts ha ”genomförbara” övergångsvägar och hanterbara arkitektoniska underskott klassificeras som ovanför tröskeln; system som bedömts som ”svåra”, ”omöjliga” eller havande allvarliga strukturella underskott klassificeras som under tröskeln. Fall som bedömts som ”möjliga” eller ”möjliga via sub-federala vägar” klassificeras som närmande sig tröskeln och utesluts ur kalibreringen.

2. Beräkna G för varje fall med det multiplikativa indexet med nivåviktade exponenter.

3. Identifiera det värde på G som maximerar andelen korrekta klassificeringar – andelen fall vars skattade G ligger på rätt sida om tröskeln enligt den kvalitativa klassificeringen.

Det resulterande G_krit är ungefär 2,0 för nationalstatsurvalet, med ett smalt intervall av värden (1,8–2,2) som ger liknande klassificeringsprecision. Tröskeln behandlas som provisorisk och föremål för revidering i takt med att kalibreringsurvalet utvidgas. För organisatoriska styrsystem kan en något lägre tröskel (ungefär 1,7) vara lämplig, vilket återspeglar dessa systems smalare mandat och mer begränsade störningsmiljöer. Domänspecifik tröskelkalibrering identifieras som en prioritet för framtida forskning.

### D.6 Osäkerhetspropagering

Varje parameterskattning bär med sig en osäkerhetsbedömning, så som specificerats i avsnitt 3. Det sammansatta indexet ärver dessa osäkerheter. Propageringsmetoden behandlar varje parameter inte som en punktskattning utan som en sannolikhetsfördelning och beräknar den resulterande fördelningen av G genom Monte Carlo‑simulering.

**Fördelningsantaganden:**

- **V_o och V_e** modelleras som log‑normalfördelningar, begränsade nedåt vid 1, med log‑medelvärdet satt till punktskattningen och log‑standardavvikelsen satt för att återspegla konfidensintervallets bredd. Log‑normalfördelningen väljs eftersom effektiv dimensionalitet är strikt positiv och högervriden – den verkliga dimensionaliteten är mer sannolikt högre än punktskattningen än lägre.

- **τ** modelleras som en normalfördelning trunkerad vid 0, med medelvärdet satt till punktskattningen och standardavvikelsen satt för att återspegla konfidensintervallet.

- **σ, p, β, ρ** modelleras som betafördelningar, begränsade till [0,1], med parametrar (α, β) valda för att matcha punktskattningen som modalvärde och konfidensintervallet som det centrala trovärdighetsintervallet. Betafördelningen väljs eftersom dessa parametrar är andelar med begränsat stöd.

- **ω** modelleras som en log‑normalfördelning, begränsad nedåt vid 0, med log‑medelvärdet satt till punktskattningen och log‑standardavvikelsen satt för att återspegla konfidensintervallet.

**Monte Carlo‑procedur:**

1. Dra N stickprov (vanligtvis N = 10 000) från den simultana fördelningen av de åtta parametrarna. Den simultana fördelningen inkluderar de korrelationer mellan parametrar som skattats från kalibreringsurvalet – specifikt de positiva korrelationerna mellan σ, p och ρ som Mätparadoxen förutsäger, och den negativa korrelationen mellan β och V_o som dynamiken för förbikopplingsarkitekturen implicerar.

2. För varje dragning, beräkna G med det multiplikativa indexet med nivåviktade exponenter.

3. Den resulterande fördelningen av G sammanfattas genom sin median och ett trovärdighetsintervall – vanligtvis 5:e till 95:e percentilen, även om andra intervall kan rapporteras efter vad som är lämpligt.

4. Tröskelklassificeringen baseras på den andel av posteriorfördelningen som ligger över eller under G_krit. Om mer än 90 % av posteriorfördelningens massa ligger under G_krit klassificeras systemet som Under tröskeln med hög konfidens. Om mer än 90 % ligger över G_krit klassificeras systemet som Ovanför tröskeln med hög konfidens. Om posteriorfördelningens massa sträcker sig över G_krit klassificeras systemet som Närmar sig tröskeln, och andelen massa på varje sida rapporteras.

**Justering för Mätparadoxen.** För system där Mätparadoxen bedöms vara aktiv justeras den simultana fördelningen för att återspegla den systematiska underskattningsbiasen. Specifikt förskjuts fördelningarna för σ, p och V_o nedåt (deras medelvärden reduceras med en andel som återspeglar paradoxens skattade allvarlighetsgrad), och fördelningarna för β, ρ och ω förskjuts uppåt. Justeringens storlek är ett strukturerat omdöme, som rapporteras separat från de ojusterade skattningarna, och den diagnostiska klassificeringens känslighet för justeringen bedöms.

### D.7 Dynamisk utvidgning: skattning av dG/dt

Den dynamiska utvidgningen skattar varietetsgapets förändringstakt utifrån uppkomsttakten för nya störningsdimensioner (α) och styrningsarkitekturens anpassningstakt (η · A(V)), där η är anpassningseffektiviteten och A(V) är anpassningsinsatsen. Den dynamiska ekvationen är:

**dG/dt = α − η · A(V)**

där:
- **α** skattas som maximum av tre proxyvariabler: den institutionella nyskapandetakten (α_inst), den akademiska identifieringstakten (α_akad) och krisnyhetstakten (α_kris), var och en uttryckt i enheter av nya störningsdimensioner per år.
- **A(V)** är anpassningsinsatsen, skattad som expansionstakten för V_o över observationsperioden: A(V) = ΔV_o / Δt.
- **η** är anpassningseffektiviteten, skattad som andelen annonserade reformer som uppnår strukturell implementering (p), justerad nedåt för system där Mätparadoxen är aktiv. (η används genomgående i avsnitt 6–8 i stället för symbolen β_adapt som använts i tidigare utkast, för att undvika notationskollision med förbikopplingstäthetsparametern β definierad i D.1.)

Den dynamiska skattningen rapporteras inte som ett precist numeriskt värde utan som en ban-klassificering med en tillhörande konfidensbedömning, så som beskrivs i avsnitt 6.4. Klassificeringen baseras på om centralestimatet för α överstiger centralestimatet för η · A(V) med en marginal som är större än den sammanlagda osäkerheten, och på känsligheten i denna jämförelse för valet av α‑proxy och för justeringen för Mätparadoxen.

### D.8 Den formella apparatens begränsningar

Det matematiska ramverk som beskrivs i denna appendix är en formalisering av strukturerat omdöme, inte en härledning från första principer. De funktionsformer som valts för f_τ, k_ω och de övriga parametertransformationerna är sparsamma och analytiskt hanterbara, men de är inte unika. Alternativa funktionsformer – sigmoida transformationer för latens, potenssamband för oscillationsamplitud – skulle kunna substitueras utan att förändra ramverkets kvalitativa beteende. Känsligheten i de diagnostiska klassificeringarna för dessa alternativa specifikationer bör bedömas vid varje tillämpning av ramverket.

Den grundläggande hierarkins vikter (1,5, 1,0, 0,5) är inte skattade från data. De är på förhand givna antaganden, grundade i seriens kvalitativa kausala struktur men inte empiriskt validerade. Den känslighetsanalys som beskrivs i D.4 erbjuder en partiell lösning, men den slutgiltiga valideringen av viktningsschemat kräver ett större kalibreringsurval med oberoende observerade styrningsutfall – den prospektiva panelstudie som beskrivs i avsnitt 9.2.

Observerbarhetströskeln G_krit är kalibrerad från ett urval om tjugo fall, vilka samtliga användes i ramverkets utveckling. Tröskeln är provisorisk, och dess stabilitet vid en utvidgning av kalibreringsurvalet är okänd. Ramverket bör tillämpas med förståelsen att tröskeln kan förskjutas i takt med att mer data blir tillgänglig, och att system som för närvarande klassificeras som ”närmar sig” tröskeln kan komma att omklassificeras när kalibreringen förbättras.

Den matematiska apparaten erbjuds inte som ett slutgiltigt uttalande utan som en strukturerad utgångspunkt – ett formellt språk i vilket de mätutmaningar som identifierats genom denna artikel kan göras precisa, och i vilket det empiriska forskningsprogram som kommer att testa, förfina eller vederlägga ramverkets påståenden kan bedrivas. Matematiken är byggnadsställningen. Det empiriska arbetet är byggnaden. Byggnadsställningen är utformad för att kunna modifieras i takt med att byggnaden tar form.
