## Appendix G: Operationella definitioner och mätprotokoll

Detta appendix tillhandahåller konkreta mätprotokoll för ramverkets centrala variabler, specificerar när termer används rigoröst respektive heuristiskt samt upprättar en mätstege från mest till minst operationaliserad.

### G.1 Operationaliseringsutmaningen

Ramverkets kärnvariabler – dim(V), dim(R), G, G_crit – definieras formellt i bilagorna A och B med hjälp av linjär algebra (rang av observationsmatriser, störningsrymder). Dessa definitioner är matematiskt precisa men inte direkt mätbara i verkliga styrsystem. Detta appendix överbryggar gapet mellan formell definition och empirisk mätning.

**Den epistemiska strukturen i tre nivåer:**

1. **Rigoröst operationaliserad**: Mätbar från administrativa data med definierade protokoll
2. **Operationaliserbar i princip**: Tydligt mätförfarande existerar men kräver resurser/åtkomst som för närvarande inte är tillgänglig
3. **Heuristisk**: Används för att organisera kvalitativ evidens; endast storleksordningsuppskattningar

I hela huvudtexten markerar vi nu vilken nivå varje användning tillhör.

---

### G.2 Dimension av värdearkitektur – dim(V)

**Formell definition (Appendix A):** Rang av observationsmatrisen C i y = Cx + ε, där y är signalen som når beslutsfattare.

**Operationellt protokoll 1 — Räkning av policymål (Nivå 1: Rigorös)**

För ett styrsystem med explicita policymål:

```
dim(V) ≥ antal oberoende mål som följs upp i:
  - Budgetkategorier som tilldelas >1 % av total budget
  - Prestationsindikatorer som övervakas i årsrapporter
  - Lagstadgade uppdrag i möjliggörande lagstiftning
  - Explicita mål i koalitionsavtal / partiprogram
```

**Oberoendetest:** Två mål är oberoende om en förändring av det ena inte mekaniskt bestämmer det andra. BNP-tillväxt och arbetslöshet är korrelerade men oberoende (båda kan förändras). "Minska fattigdom" och "öka medianinkomsten" är inte helt oberoende – det första bestämmer delvis det andra.

**Genomarbetat exempel — UK Treasury:**
- Finansiell hållbarhet (skuldkvot i förhållande till BNP) — 1 dimension
- Ekonomisk tillväxt (BNP-tillväxttakt) — 1 dimension  
- Sysselsättning (arbetslöshet) — 1 dimension
- Inflationsmål (KPI) — 1 dimension

Uppskattad dim(V) = 4 för den ekonomiska politiken.

Men detta *överskattar* sannolikt den effektiva dimensionaliteten eftersom:
- Alla fyra är underordnade "bevara City of Londons förtroende"
- Avvägningar löses av ett enda meta-mål (finansiell stabilitet)
- Effektiv dim(V) snarare kring 2

**Operationellt protokoll 2 — Principalkomponentanalys på tidsserier (Nivå 2: I princip)**

För ett styrsystem med observerbara policyutfall över tid:

```
1. Konstruera tidsserier för n policyvariabler (budgetallokeringar, 
   index för regleringsstränghet, verkställighetsåtgärder) över T tidsperioder
2. Beräkna korrelationsmatris
3. Utför PCA, behåll komponenter som förklarar >5 % av variansen
4. dim(V) = antal behållna principalkomponenter
```

Detta avslöjar de effektiva frihetsgraderna i hur systemet faktiskt varierar sina utfall, inte bara vad det påstår sig optimera.

**Operationellt protokoll 3 — Informationsteoretiskt (Nivå 2: I princip)**

För ett styrsystem med diskreta beslutstillstånd:

```
dim(V) ≈ log₂(antal urskiljbara beslutstillstånd) / log₂(antal inflödestillstånd)
```

Detta fångar hur mycket systemets utflöden komprimerar dess inflöden – den informationsflaskhals som värdearkitekturen skapar.

**Nuvarande användning i uppsatsen:** De flesta landfall använder Protokoll 1 (målräkning) heuristiskt, vilket ger dim(V) = 1 eller 2. Dessa bör markeras som "storleksordningsuppskattningar" snarare än precisa mätningar.

---

### G.3 Dimension av störningsrymd – dim(D) eller dim(R)

**Formell definition (Appendix A):** Rang av störningsrymden D – antalet oberoende sätt systemet kan knuffas bort från sitt mål.

**Operationellt protokoll 1 — Historisk chockdekomponering (Nivå 2: I princip)**

För ett styrsystem med tidsseriedata om kriser:

```
1. Katalogisera n styrmisslyckanden / kriser över T tidsperioder
2. För varje kris, koda störningstyp över kandidatdimensioner:
   - Ekonomisk (recession, inflation, skuldkris)
   - Social (protester, strejker, demografisk förskjutning)
   - Ekologisk (torka, översvämning, resursutarmning)
   - Geopolitisk (krig, sanktioner, migration)
   - Teknologisk (automatisering, cyber, epistemisk)
   - Institutionell (korruption, legitimitet, kapacitet)
3. Utför faktoranalys för att identifiera latenta störningsdimensioner
4. dim(D) = antal faktorer med egenvärde > 1
```

**Genomarbetat exempel — Eurozonen 2008-2023:**
- Finansiell smitta (statsskuld) — Faktor 1
- Institutionell fragmentering (Nord-Syd-klyfta) — Faktor 2  
- Demokratisk legitimitet (populism, röstnedgång) — Faktor 3
- Geopolitisk (energiberoende, migration) — Faktor 4
- Uppskattad dim(D) ≈ 4

**Operationellt protokoll 2 — Policydomänuppräkning (Nivå 3: Heuristisk)**

För system utan tillräckliga tidsseriedata:

```
dim(D) ≥ antal oberoende policydomäner som kräver aktiv styrning:
  - Ekonomisk förvaltning
  - Social sammanhållning
  - Ekologisk integritet
  - Demokratisk legitimitet
  - Geopolitisk säkerhet
  - Teknologisk anpassning
  Varje domän poängsätts med 1 om den genererar störningar som inte är förutsägbara från de andra
```

**Operationellt protokoll 3 — Scenarioplaneringsexpertelicitering (Nivå 2: I princip)**

Strukturerad expertelicitering:

```
1. Samla panel av domänexperter
2. Generera 50+ "plausibla framtider" över 20-årshorisont
3. Klustra scenarier efter underliggande störningsfaktorer
4. dim(D) ≈ antal oberoende kluster
```

Detta fångar den effektiva dimensionaliteten i det osäkerhetsutrymme systemet måste navigera.

**Nuvarande användning i uppsatsen:** Landfallen använder Protokoll 2 (domänuppräkning) heuristiskt. Appendix D tabell uppskattar dim(R) - dim(G) i intervallet 2-4 för de flesta fall. Dessa är grova uppskattningar, inte mätningar.

---

### G.4 Variationsgapet — G

**Formell definition (Del III):** G = dim(R) - dim(G) - dim(V)

**Operationellt protokoll (Nivå 2: I princip):**

Givet mätningar av dim(R) och dim(V):

```
G = dim(R) - dim(V)   (förutsatt att dim(G) är liten / försumbar)

Tolkning:
  G = 0: Värdearkitekturen täcker störningsrymden
  G = 1-2: Måttligt gap, systemet är blint för 1-2 större störningsklasser
  G = 3+: Stort gap, systemet är strukturellt sårbart
  G > G_crit: Konstitutionell icke-observerbarhet (se nedan)
```

**Valideringskontroll:**

Ett styrsystem med variationsgap G bör uppvisa:
- Återkommande kriser i de uteslutna dimensionerna
- Policyresponser som konsekvent missar den faktiska störningskällan
- Mönster av "oförklarade" misslyckanden i retrospektiv analys

**Nuvarande användning i uppsatsen:** G uppskattas heuristiskt i landfallen. För de flesta fall är uppskattat G = 2-3, markerat som "närmar sig eller överskrider G_crit." Dessa bör uttryckligen etiketteras som "indikativa, inte uppmätta."

---

### G.5 Kritisk upplösningströskel — G_crit

**Formell definition (Appendix B):** Värde av G vid vilket signal-brusförhållandet faller under ett: I(x;y) ≤ I(ε;y)

**Operationellt protokoll (Nivå 2: I princip):**

För Gaussiska kanaler:

```
G_crit nås när:
  Var(signal från observerade dimensioner) ≤ Var(brus från icke-observerade dimensioner)

Mätning:
1. Uppskatta varians i observerade policyindikatorer (Var_obs)
2. Uppskatta varians i residualutfall som inte förklaras av policy (Var_oförklarad)
3. Om Var_oförklarad / Var_obs > 1 har systemet passerat G_crit
```

**Empirisk signatur för passerande av G_crit:**

System bortom tröskeln uppvisar:
- Policyinterventioner producerar utfall okorrelerade med avsikt
- "Oförklarad" varians dominerar förklarad varians i utfallsmodeller
- Styrning blir reaktiv mot fantomsignaler (brusspårning)
- Mönstret matchar Rapport III:s SNR `<` 1-villkor för representationskedjor

**Uppskattat värde:**

Från Rapport III:s analys av representationskedjor: tröskeln passeras vid 2-3 lager för realistiska brusparametrar. I analogi, för värdearkitekturer:

```
Provisorisk uppskattning: G_crit ≈ 2-3 för de flesta styrkontexter
```

Detta är högst osäkert och bör endast behandlas som storleksordning.

**Nuvarande användning i uppsatsen:** G_crit används som en kvalitativ tröskel. Landfall markerade som "närmar sig" eller "överskrider" G_crit baserat på mönstermatchning mot förväntade misslyckandesignaturer, inte direkt SNR-mätning.

---

### G.6 Störningsemergenshastighet — α

**Formell definition (Appendix B):** α(t) är den momentana hastigheten för emergens av nya störningsdimensioner: dim(D)(t) = dim(D)(0) + ∫α(s)ds

**Operationellt protokoll (Nivå 3: Heuristisk):**

```
α ≈ (antal nya större policydomäner under period T) / T

Där "ny större policydomän" innebär:
- Kräver dedicerad institutionell kapacitet (nytt departement/ny myndighet)
- Genererar störningar som inte är förutsägbara från befintliga domäner
- Förbrukar >0,5 % av policybandbredd (lagstiftningstid, budget)

Exempel:
- Klimatanpassning (uppstod ~1990-talet)
- Cybersäkerhet (uppstod ~2000-talet)  
- Epistemisk integritet / desinformation (uppstod ~2010-talet)
- AI-styrning (växer fram ~2020-talet)
```

**Uppskattade värden:**

Baserat på OECD:s policymässiga domäntillväxt 1980-2020:

```
Långsam förändringstakt: α ≈ 0,1-0,2 nya dimensioner per decennium
Snabb förändringstakt: α ≈ 0,5-1,0 nya dimensioner per decennium
```

**Nuvarande användning i uppsatsen:** α används i den dynamiska modellen dG/dt = α - β·A(V) som en konceptuell parameter, inte en uppmätt kvantitet. Texten bör klargöra att den är illustrativ.

---

### G.7 Anpassningseffektivitet — β

**Formell definition (Appendix B):** β(t) är den andel av anpassningsansträngning som framgångsrikt översätts till ökad dim(V)

**Operationellt protokoll (Nivå 3: Heuristisk):**

```
β = (faktisk ökning av dim(V) över period T) / (avsedd ökning av dim(V))

Mätutmaningar:
- "Avsedd ökning" kräver tydliga policyuttalanden
- Institutionella reformer påstår sig ofta lägga till dimensioner utan att göra det
- Infångning/utspädning kan reducera effektiv β till nära noll
```

**Uppskattade intervall:**

```
Högfungerande adaptivt system: β ≈ 0,5-0,8
  (Sveriges konsensusmodell, Finlands framsynskapacitet)

Måttlig institutionell friktion: β ≈ 0,2-0,4
  (Tysklands koalitionskonsensus, Frankrikes reformcykler)

Hög infångning / hög rigiditet: β ≈ 0,0-0,1
  (Rysslands vertikal, Japans kontinuitetsfälla, Brasiliens koalitionsfilter)
```

**Nuvarande användning i uppsatsen:** β används konceptuellt i den dynamiska modellen, inte uppmätt empiriskt.

---

### G.8 Användningsriktlinjer för huvudtexten

För att upprätthålla epistemisk stringens bör uppsatsen markera variabelanvändning med nivåannoteringar:

**Nivå 1 (Rigorös):**
"UK Treasurys värdearkitektur följer fyra primära mål [Protokoll G.2.1], vilket ger dim(V) = 4 (rigorös)."

**Nivå 2 (I princip):**
"Uppskattad dim(D) för eurozonen 2008-2023 är ungefär 4 större störningsdimensioner [Protokoll G.3.1], men detta kräver validering genom formell faktoranalys (i princip)."

**Nivå 3 (Heuristisk):**
"Vi uppskattar dim(V) ≈ 1 för Rysslands kontrollarkitektur (heuristisk). Detta är en storleksordningsbedömning baserad på kvalitativ analys, inte en mätning."

**För landfallen i Del V:**

Alla variationsgapsuppskattningar är för närvarande Nivå 3 (heuristiska). Texten bör uttryckligen ange detta:

```
"Variationsgapsuppskattningarna i detta avsnitt är illustrativa, baserade på 
kvalitativ mönstermatchning mot ramverkets förutsagda misslyckandesignaturer. 
Empirisk validering skulle kräva de mätprotokoll som specificeras 
i Appendix G."
```

---

### G.9 Valideringskriterier

Ett påstående om att dim(V), dim(D) eller G har "uppmätts" snarare än "uppskattats" kräver:

**För dim(V):**
- Uppräkning av explicita policymål från primärkällor
- Oberoendetest som visar att målen inte mekaniskt bestäms av varandra
- Eller: PCA på tidsseriedata av policyutfall som visar behållna komponenter

**För dim(D):**
- Historisk katalog över styrmisslyckanden/kriser
- Faktoranalys eller expertelicitering som visar oberoende störningsdimensioner
- Eller: Scenarioklustring som visar osäkerhetsrymdens dimensionalitet

**För G:**
- Både dim(V) och dim(D) uppmätta (inte uppskattade)
- Explicit beräkning G = dim(D) - dim(V)

**För passage av G_crit:**
- Variansdekomponering som visar Var(oförklarad) `>` Var(förklarad)
- Eller: Mönstermatchning mot förväntade signaturer (reaktiv styrning, fantomsignalspårning, okorrelerade policy-utfalls-relationer) med explicit reservation att detta är indikativt, inte bevis

---

### G.10 Forskningsprioriteringar

För att flytta ramverket från heuristiskt till empiriskt:

**Prioritet 1:** Implementera Protokoll G.2.2 (PCA på policy-tidsserier) för 3-5 länder med tillräcklig data

**Prioritet 2:** Implementera Protokoll G.3.1 (historisk chockfaktoranalys) för EU, Storbritannien, Japan

**Prioritet 3:** Utveckla automatiserad mätning av dim(V) från budgetdokument och lagstiftningstext med hjälp av NLP

**Prioritet 4:** Testa om uppskattad G korrelerar med frekvensen av styrmisslyckanden i paneldata över länder

**Prioritet 5:** Empiriskt kalibrera G_crit genom att identifiera SNR-trösklar i historiska styrellapskollapser

Tills dessa är fullbordade förblir ramverket en diagnostisk lins snarare än en validerad prediktiv modell.
