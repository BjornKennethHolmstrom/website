# Bilaga E
## De strukturella begränsningarnas logik: En kort teknisk introduktion

Denna boks argumentation vilar på en uppsättning formella resultat från reglerteknik, informationsteori och cybernetik. Dessa resultat är inte metaforer eller analogier. De är matematiska begränsningar som styr varje system – vare sig det är konstruerat, biologiskt eller institutionellt – som måste uppfatta en miljö, bearbeta information och agera på den. Denna bilaga tillhandahåller en koncis, icke-teknisk sammanfattning av kärnresultaten för läsare som vill förstå de logiska grundvalarna för bokens diagnostiska ramverk utan att arbeta sig igenom de fullständiga Governance as Engineering-rapporterna. Resultaten presenteras i den ordning de förekommer i argumentationen.

---

### E.1 Ashbys lag om nödvändig variation

**Det formella resultatet.** W. Ross Ashby fastställde 1956 att en regulator endast kan stabilisera ett system om regulatorns variation – antalet distinkta tillstånd den kan diskriminera och svara på – matchar eller överstiger variationen hos de störningar systemet möter. Formellt, för en regulator R, ett störningsrum D och en måluppsättning G: V(R) ≥ V(D) − V(G). Om regulatorns variation är otillräcklig framträder den oabsorberade variationen som okontrollerad varians i utfallen. Detta är ett teorem, inte en riktlinje.

**Vad det innebär för styrning.** Styrsystemet är regulatorn. Dess variation är antalet oberoende dimensioner som dess observationskanaler kan uppfatta och svara på. Störningsmiljön är det fulla spektrum av tillstånd som kan driva det styrda systemet bort från önskade tillstånd. När observationsarkitekturen har färre dimensioner än störningsmiljön upphör de uteslutna dimensionerna inte att verka. De ackumuleras som externaliteter tills de tvingar sig till synlighet genom kris. Varietetsgapet – bokens centrala diagnosverktyg – är operationaliseringen av Ashbys lag för institutionell analys.

**Var den förekommer.** Kapitel 3 (Varietetsgapet), kapitel 8 (Samordningsmisslyckandets skatt), kapitel 17 (de strukturella begränsningarnas logik).

---

### E.2 Frekvens–latens-begränsningen

**Det formella resultatet.** Inom reglertekniken kan en återkopplingsregulator med responslatens τ inte stabilisera störningar snabbare än f_max ≈ 1/(2τ). Latensen sätter ett hårt tak för den maximala förstärkning regulatorn kan använda: K_max ≈ 1/(τ · |A|), där A fångar systemets naturliga dynamik. Försök att öka förstärkningen bortom detta tak producerar oscillation och instabilitet. Begränsningen är topologisk, inte parametrisk – den kan inte kringgås genom att förbättra regulatorns interna kvalitet.

**Vad det innebär för styrning.** Varje styrsystem har en karakteristisk responslatens – tiden från att en störning uppstår till att en korrigerande åtgärd får effekt. Denna latens bestämmer den maximala störningsfrekvens som systemet kan styra. Problem som rör sig snabbare än detta tak (finansiell smitta, pandemispridning, algoritmisk marknadsdynamik) är strukturellt ostyrbara för det systemet. Problem som rör sig långsammare (klimatförändringar, demografisk omställning, infrastrukturförfall) hanteras också fel, eftersom interventioner är alltför diskontinuerliga – accelererade och reverserade av politiska cykler – för att upprätthålla den konsekventa, långsiktiga handling de kräver. Ingen enskalig arkitektur kan täcka hela störningsspektrumet. Den enda arkitektur som kan det är flerskalig: nästlade regulatorer, var och en matchad till det frekvensband dess latens tillåter den att nå.

**Var den förekommer.** Kapitel 2 (det historiska argumentet), kapitel 8 (Samordningsmisslyckandets skatt), kapitel 14 (demokratier och auktoritära system), kapitel 18 (flerskalig adaptiv styrning).

---

### E.3 Tröskeln för konstitutionell oobserverbarhet

**Det formella resultatet.** Informationsteorin, såsom den fastställdes av Claude Shannon 1948, demonstrerar att varje kommunikationskanal har en maximal kapacitet. När information färdas genom en kedja av aggregeringslager – som den gör i representationskedjor, rapporteringshierarkier eller administrativ filtrering – dividerar varje lager den överlevande signalvariansen med sin aggregeringskvot samtidigt som det tillför oberoende brus. Efter ett tillräckligt antal lager överstiger brusvariansen den överlevande signalvariansen. Signal-till-brusförhållandet vid det sista lagret är:

SNR(K) = Var_överlevande(K) / Var_brus(K)

När SNR `<` 1 domineras informationen som når beslutsfattningslagret av transmissionmaskineriets egenskaper snarare än av egenskaperna hos det system kanalen var avsedd att representera. Systemet är konstitutionellt oobserverbart.

**Vad det innebär för styrning.** För demokratisk representation korsas tröskeln vid ungefär två till tre lager under realistiska brusparametrar. De flesta samtida demokratier opererar kedjor om tre till fem lager (väljare → lokal representant → regionalt organ → nationell lagstiftande församling → verkställande makt). De opererar därmed under observerbarhetströskeln för preferensöverföring. Policylagret kan inte återskapa fördelningen av medborgarpreferenser från de signaler det mottar, oavsett institutionell kvalitet. Samma logik gäller för varje styrsystem där information måste färdas genom flera mellanliggande lager: rapporteringskedjor i auktoritära stater, administrativa hierarkier i sjukvården, publicerings- och citeringskedjor i universitet. Förbättringar av institutionell kvalitet inom det befintliga kedjedjupet kan inte återställa den signal som förstördes i aggregeringen innan den nådde fram.

**Var den förekommer.** Kapitel 4 (varför smarta människor inte kan se misslyckandet), kapitel 5 (observationskanaler), kapitel 8 (Samordningsmisslyckandets skatt), kapitel 14 (demokratier och auktoritära system).

---

### E.4 Goodhart–Ashby-syntesen

**Det formella resultatet.** Goodharts lag säger att när ett mått blir ett mål upphör det att vara ett bra mått. Ashby-utvidgningen identifierar den arkitektoniska mekanismen: en målfunktion med lägre dimensionalitet än variationen i det system den styr kommer så småningom att optimera bort sin egen förmåga att uppfatta systemets verkliga tillstånd. Proxyn avviker från målet i första hand inte genom spelande utan genom att komprimeringsmekanismen systematiskt förstör den korrelationsstruktur som gjorde proxyn informativ. Proxy–mål-divergensen är en icke-observerbar dimension – osynlig för det mått som skulle upptäcka den. Systemet fortsätter att optimera proxyn, blint för det växande gapet, tills gapet manifesterar sig som en kris som måttet inte kan förklara.

**Vad det innebär för styrning.** Varje styrsystem optimerar för något – BNP, inflation, genomströmning, citeringsantal, kapacitetsriktmärken. Valet av vad man optimerar för är samtidigt valet av vad man blir blind inför. Goodhart–Ashby-syntesen förklarar varför tillägg av nya mått till en institutions instrumentbräda, utan att förändra den arkitektur som avgör vilka mått som blir mål, är självförgörande: de nya måtten kommer att absorberas, optimeras mot och göras lika oinformativa som de de ersatte. Syntesen identifierar också den strukturella förutsättningen för att sluta Varietetsgapet: målfunktionen måste ha tillräcklig dimensionalitet för att fånga de kausalt relevanta dimensionerna hos det system den styr, och institutionen måste upprätthålla kapaciteten att utvidga denna dimensionalitet i takt med att nya dimensioner uppstår.

**Var den förekommer.** Kapitel 3 (Varietetsgapet), kapitel 5 (Dataillusionen), kapitel 6 (symbolisk anpassning), kapitel 17 (de strukturella begränsningarnas logik).

---

### E.5 Samordningsmisslyckandets skatt

**Det formella resultatet.** De fyra felsätt som identifierats genom Governance as Engineering-rapporterna – rumslig blindhet, frekvensgap, preferensosynlighet och observationsbrist – adderas inte; de multipliceras. När ett styrsystem uppvisar flera samtidiga arkitektoniska misslyckanden är den effektiva styrningskapaciteten produkten av vad varje misslyckande lämnar intakt:

G_effektiv = G_baslinje × (1 − f₁) × (1 − f₂) × (1 − f₃) × (1 − f₄)

Ett system med fyra misslyckanden, vart och ett förstör 50 % av kapaciteten i sin dimension, opererar inte vid noll utan vid ungefär 6,25 % av baslinjen. Misslyckandena förstärker varandra eftersom varje verkar på de redan degraderade utflödena från de andra i den kausala kedjan.

**Vad det innebär för styrning.** Samordningsmisslyckandets skatt är den strukturella förklaringen till varför parametriska reformer konsekvent gör en besviken: att adressera ett felsätt medan andra lämnas orörda producerar vinster som den kvarvarande misslyckandemultiplikationen absorberar. Det är också det strukturella argumentet för bredd framför djup i reformstrategi: måttliga förbättringar över flera felsätt samtidigt ger oproportionerlig avkastning eftersom multiplikationen verkar åt båda hållen. Ett system som reducerar vart och ett av fyra felsätt från 50 % till 40 % kapacitetsförlust mer än fördubblar sin effektiva styrningskapacitet.

**Var den förekommer.** Kapitel 8 (Samordningsmisslyckandets skatt), kapitel 17 (de strukturella begränsningarnas logik), och genom hela del III som förklaringen till varför misslyckanden i olika domäner förstärker varandra.

---

### E.6 Relationen mellan resultaten

De fyra begränsningarna är inte en samling oberoende fynd från olika discipliner. De är uttryck för en enda underliggande princip: styrningskapacitet är begränsad av strukturen hos de kanaler genom vilka styrningen uppfattar och agerar. Ashbys lag uttrycker principen i termer av variation. Frekvens–latens-begränsningen uttrycker den i termer av tid. Tröskeln för konstitutionell oobserverbarhet uttrycker den i termer av information. Goodhart–Ashby-syntesen uttrycker den i termer av optimering. Samordningsmisslyckandets skatt beskriver hur överträdelser av dessa begränsningar samverkar.

Begränsningarnas enhet är bokens teoretiska grundval. Det är anledningen till att samma strukturella grundbegrepp återkommer över domäner. Det är anledningen till att designprinciperna i del IV – flerskalig observation, matchad auktoritet, integration utan komprimering, immunsystemsdiskrimination, designad evolvbarhet – inte är en önskelista utan de nödvändiga arkitektoniska svaren på de begränsningar som varje livskraftigt styrsystem måste tillfredsställa. Begränsningarna är hårda, men de är också precisa. De identifierar vad som måste förändras. Resten är en fråga om att bygga.
