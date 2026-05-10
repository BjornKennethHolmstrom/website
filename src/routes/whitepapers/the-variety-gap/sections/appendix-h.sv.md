### Appendix H: Testbara förutsägelser och falsifieringsprotokoll

Detta appendix operationaliserar ramverkets centrala förutsägelser för empirisk testning. Varje post specificerar förutsägelsen, de inblandade variablerna, mätansats, datakällor, statistiskt test och falsifieringsvillkor.

#### H.1 Förutsägelse 1: Variationsgap och krisfrekvens

**Förutsägelse:** System med större uppskattade variationsgap (G) kommer att uppleva fler styrningskriser under en given tidsperiod än system med mindre G, kontrollerat för BNP per capita och regimtyp. Kriser i de uteslutna dimensionerna kommer att vara oproportionerligt förhöjda.

**Variabler:**
- Oberoende: G = dim(D) − dim(V), uppskattat heuristiskt via protokollen i Appendix G.
- Beroende: Antal styrningskriser över ett 20-årsfönster (2000‑2020).
- Samvariabel: Krisantal i "uteslutna" respektive "uppföljda" dimensioner (kodade per lands värdearkitektur).
- Kontroller: BNP per capita, Polity IV / V‑Dem regimpoäng, befolkningsstorlek.

**Datakällor:** Cross‑National Time‑Series Data Archive, V‑Dem krisindikatorer, landsspecifik värdearkitekturkodning (Appendix G-protokoll).

**Test:** Negativ binomial regression med krisantal som utfall, G som prediktor och kontroller. En andra modell testar om G‑krisrelationen är starkare för uteslutna dimensionskriser än för uppföljda dimensionskriser (interaktionsterm G × uteslutningsdummy).

**Falsifiering:** Ingen signifikant positiv koefficient på G, eller koefficienten negativ. Alternativt ingen signifikant interaktion med uteslutningsdummyn.

---

#### H.2 Förutsägelse 2: Gaptillväxt och institutionell rigiditet

**Förutsägelse:** Länder med högre institutionell rigiditet kommer att uppvisa snabbare variationsgaptillväxt (dG/dt) över ett 20–30‑årsfönster än mer adaptiva system.

**Variabler:**
- Oberoende: Institutionell rigiditetsindex (sammansatt av vetospelare, svårighetsgrad för grundlagsändring, genomsnittlig regeringslängd).
- Beroende: dG/dt ≈ (förändring i antal framträdande policydomäner) − (förändring i antal oberoende uppföljda mål) över perioden.
- Kontroller: BNP‑tillväxt, civilsamhällestäthet, medie‑frihet.

**Datakällor:** V‑Dem, Comparative Political Data Set, OECD Government at a Glance, egen kodning av policydomäner (Appendix G.6).

**Test:** Linjär regression av dG/dt på rigiditetsindex med kontroller. Alternativt tvågruppsjämförelse: hög‑ vs. låg‑rigiditetsländer, skillnad i genomsnittlig dG/dt.

**Falsifiering:** Ingen signifikant skillnad i dG/dt mellan hög‑ och låg‑rigiditetsgrupper, eller adaptiva system visar snabbare gaptillväxt.

---

#### H.3 Förutsägelse 3: Signaturmönster vid G_crit

**Förutsägelse:** I fall där ett styrsystem plausibelt passerade G_crit kommer tidsserieanalys att avslöja (a) sammanbrott av Granger‑kausalitet från policyinsatser till utfall, (b) ökad policyvarians i förhållande till utfallsvarians, (c) spektrala belägg för att policy svarar på högfrekvent brus snarare än lågfrekvent signal.

**Variabler:**
- Policyinsatstidsserie (t.ex. budgetallokeringar, regleringsförändringar).
- Utfallstidsserie (t.ex. relevanta välbefinnandeindikatorer).
- SNR‑proxy: kvot mellan förklarad och oförklarad varians i policy‑utfallsmodeller före jämfört med efter det uppskattade överskridandet.

**Datakällor:** Landsspecifika administrativa data, rekonstruerade för historiska fall (t.ex. Sovjetunionen 1985‑1991, brittiska finanstjänster 2005‑2010, Venezuela 2005‑2015).

**Test:** Inom‑fallsdesign med avbruten tidsserie. Jämför perioder före och efter uppskattad G_crit avseende: Granger‑kausalitetstester, varianskvoter, spektral koherens.

**Falsifiering:** Ingen signifikant förändring i dessa indikatorer över den uppskattade G_crit‑gränsen, eller förändringar i motsatt riktning (förbättrad policy‑utfallskoppling efter överskridande).

---

#### H.4 Förutsägelse 4: Flerdimensionella värdearkitekturer och krisreduktion

**Förutsägelse:** Regeringar eller regioner som institutionellt har antagit flerdimensionella välbefinnanderamverk i minst fem år kommer att uppleva färre kriser i dimensioner som traditionellt utesluts av BNP‑centrerade arkitekturer (hälsa, social sammanhållning, ekologisk integritet) jämfört med matchade kontroller.

**Variabler:**
- Behandling: Antagande av ett flerdimensionellt välbefinnanderamverk (binär, med implementerings‑eftersläpnings‑tröskel på 5 år).
- Beroende: Antal krishändelser i uteslutna dimensioner.
- Matchningsvariabler: BNP per capita, befolkningsstorlek, regimtyp, baslinjekrisfrekvens.

**Datakällor:** Wellbeing Economy Alliance (WEAll) fallstudier, nationella statistikbyråer, EM‑DAT katastrofdatabas, V‑Dem.

**Test:** Matchad fall‑kontrolldesign. För varje behandlingsenhet väljs 2–3 kontrollenheter matchade på förperiodskarakteristika. Krisantal i uteslutna dimensioner under efterimplementeringsfönstret jämförs med betingad Poisson‑regression.

**Falsifiering:** Ingen signifikant skillnad i krisfrekvens, eller behandlingsenheter presterar sämre.

---

#### H.5 Förutsägelse 5: Värdegranskningar och gapminskning

**Förutsägelse:** Organisationer (t.ex. kommuner) som slumpmässigt tilldelas att genomföra årliga strukturerade värdegranskningar kommer under en 3–5‑årsperiod att (a) lägga till fler dimensioner till sina uttryckligen uppföljda mål och (b) uppleva färre "oväntade" negativa händelser (budgetöverskridanden, tjänsteleveransmisslyckanden som inte förutsågs av befintliga indikatorer) än kontrollorganisationer.

**Variabler:**
- Behandling: Slumpmässig tilldelning till värdegranskningsprotokoll (strukturerad granskning av måldimensionalitet, framväxande störningsdimensioner).
- Beroende 1: Förändring i antal oberoende uppföljda prestationsindikatorer.
- Beroende 2: Antal oförutsedda negativa händelser (operationaliserade som händelser som inte förutsågs av befintliga indikatorer inom planeringscykeln).

**Datakällor:** Kommunala administrativa data, egen datainsamling via intervention.

**Test:** Randomiserad kontrollerad studie med difference‑in‑differences‑specifikation för kontinuerliga utfall och Poisson‑regression för antalsutfall.

**Falsifiering:** Ingen signifikant behandlingseffekt på något av utfallen.

---

#### H.6 Förutsägelse 6: Goodhart–Ashby‑simulatorkalibrering

**Förutsägelse:** I 3–5 väldokumenterade historiska fall av måttfixeringskollaps kommer en kalibrerad version av Appendix C:s värdefunktionskollapssimulator att producera out‑of‑sample‑förutsägelser av kollapsbanan som överträffar en naiv extrapoleringsmodell (t.ex. linjär trend, ARIMA).

**Variabler:**
- Simulatorparametrar: α (produktivitet hos den uppföljda dimensionen från den uteslutna dimensionen), β (kostnad för att optimera måttet för den uteslutna dimensionen), γ (regenereringstakt), η (fördröjd skada), skattade från data före kollaps.
- Beroende: Out‑of‑sample rotmedelkvadratfel (RMSE) för kollapsbanan.
- Baslinjejämförelse: ARIMA eller linjär trend anpassad till data före kollaps, framskriven.

**Datakällor:** Historiska tidsserier för mått och utesluten dimension (t.ex. väntetidsmål och kliniska utfall i NHS‑sjukhus; provresultat och läranderesultat i utbildningssystem; fiskekvoter och beståndsbiomassa).

**Test:** För varje fall, anpassa båda modellerna till data före kollaps, projicera kollapsperioden, beräkna RMSE. Jämför med ett enkelt teckentest över fallen (i hur många fall överträffar simulatorn baslinjen?).

**Falsifiering:** Simulatorn överträffar inte den naiva modellen i en majoritet av fallen.

---

#### H.7 Förutsägelse 7: Representationskedjedjup och demokratisk tillfredsställelse

**Förutsägelse:** Demokratier med effektiva representationskedjor som överstiger 2–3 lager kommer att uppvisa signifikant lägre medborgerlig tillfredsställelse med demokratin och svagare preferens‑politiköverensstämmelse än de med kortare kedjor, kontrollerat för ekonomisk prestation.

**Variabler:**
- Oberoende: Effektiv representationskedjedjup (federal/enhetlig × tvåkammar/enkammar × antal valda nivåer).
- Beroende 1: Genomsnittlig demokratisk tillfredsställelse (ESS, CSES).
- Beroende 2: Preferens‑politiköverensstämmelse (skattad från CSES eller replikation av Gilens & Page‑metodik för icke‑amerikanska fall).

**Datakällor:** European Social Survey, Comparative Study of Electoral Systems, World Values Survey, kodning av institutionell struktur från V‑Dem eller Comparative Political Data Set.

**Test:** Tvågruppsjämförelse: grund‑kedje‑ (≤2 effektiva lager) vs. djup‑kedje‑ (≥3 lager) demokratier. t‑test på genomsnittlig tillfredsställelse och överensstämmelse. Regression med demokratisk tillfredsställelse som utfall, lagerantal som prediktor (kategorisk: 1‑2 vs. 3+), och BNP per capita och valsystemstyp som kontroller. Testa för en tröskeleffekt vid 2‑3‑lagergränsen snarare än ett linjärt samband.

**Falsifiering:** Ingen signifikant skillnad i tillfredsställelse eller överensstämmelse mellan grund‑ och djup‑kedjegrupperna, eller djup‑kedjesystem visar högre tillfredsställelse.

---

#### H.8 Prioriteringsordning för forskning

Förutsägelserna är ordnade efter genomförbarhet för testning på nära sikt:

- **Genomförbart nu (sekundärdataanalys):** Förutsägelser 1, 4 och 7 (tvärsnitt, med befintliga datamängder och heuristisk G‑uppskattning).
- **Genomförbart med måttlig investering:** Förutsägelser 2 och 3 (longitudinell datainsamling och inom‑falls‑tidsserieanalys).
- **Kräver ny datainsamling:** Förutsägelser 5 och 6 (RCT för värdegranskningar; simulatorkalibrering som kräver detaljerade fallspecifika parametrar).

Ramverkets empiriska trovärdighet kommer att byggas stegvis, med början i tvärsnittstester som kan genomföras med befintliga data och heuristiska operationaliseringar, och fortskrida mot mer krävande designer i takt med att initiala resultat motiverar det.
