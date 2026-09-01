## 5. Stokastisk dynamik: brusinducerad tippning och kvarvarande skörhet

Den deterministiska analysen i avsnitt 3 och 4 fastställer att de öppna och slutna regimerna samexisterar över ett brett parameterområde, åtskilda av en separatrix. I varje verkligt styrsystem är perceptionen av miljön brusig. Hotbedömningar är osäkra, information anländer med fel, och transienta chocker stör systemet bort från dess deterministiska bana. Detta avsnitt undersöker om sådant brus kan flytta systemet över separatrisen och förvandla ett motståndskraftigt öppet samhälle till ett permanent slutet.

### 5.1 Brus i den upplevda osäkerheten

Vi introducerar brus i modellen genom den upplevda osäkerhet som driver gränsinvesteringen. Gränsekvationen blir:

\[
\dot B = \rho_B \, \sigma\!\big(k_B (F + \sigma \xi(t) - \theta)\big) - d_B B,
\]

där \(\xi(t)\) är gaussiskt vitt brus med enhetsvarians och \(\sigma\) är brusintensiteten. De övriga ekvationerna förblir oförändrade. Detta är en avsiktligt minimal modifiering: brus kommer in endast genom perceptionen av hur osäker eller hotfull världen är, inte genom den underliggande tillståndsdynamiken. Den fångar tanken att regeringar och institutioner ofta överreagerar inte för att miljön har förändrats, utan för att deras avkänningsapparat har blivit brusig, snedvriden eller otillförlitlig.

Alla stokastiska simuleringar använder den fullständiga femdimensionella modellen med långsam permeabilitetsdynamik. Varje körning startar från den öppna attraktorn vid aktuella \(s\) och \(\theta\), och brus appliceras genom hela integrationen. Utfallet klassificeras som ”sluten” om den slutliga gränsstyrkan \(B\) överstiger \(0{,}5\).

### 5.2 Stokastiskt svep över insatser och brusintensitet

Vi genomförde ett Monte Carlo-svep över \(s \in [0{,}7, 1{,}5]\) och \(\sigma \in [0{,}0, 0{,}3]\), med \(\theta\) fast vid \(0{,}196\) och \(\rho_P = 0{,}02\). För varje parameterpar utfördes 30 oberoende körningar, var och en med start från det öppna tillståndet och integration under 200 tidsenheter. Sannolikheten för att sluta sluten registrerades.

Figur 4 visar den fullständiga sannolikhetskartan över det testade området.

![Figur 4: Stokastisk sannolikhet för slutenhet (öppen start) som funktion av insatser s och brusintensitet sigma, för theta = 0,196 och rhoP = 0,02. Det öppna tillståndet är robust över större delen av området; ett litet högriskhörn uppträder vid höga insatser och högt brus.](/working-papers/images/closure-adaptation/figure4_stochastic_heatmap.png)

**Figur 4:** Stokastisk sannolikhet för slutenhet (öppen start) som funktion av insatser \(s\) och brusintensitet \(\sigma\), för \(\theta = 0{,}196\) och \(\rho_P = 0{,}02\). Det öppna tillståndet är robust över större delen av området; ett litet högriskhörn uppträder vid höga insatser och högt brus.

Resultaten visas i Tabell 5.1 för utvalda \(s\) och \(\sigma\). Det fullständiga rutnätet rapporteras i tilläggsdata.

**Tabell 5.1: Sannolikhet för slutenhet från en öppen start, utvalda parameterpunkter**

| \(s\) | \(\sigma = 0{,}0\) | \(\sigma = 0{,}1\) | \(\sigma = 0{,}2\) | \(\sigma = 0{,}3\) |
|---:|---:|---:|---:|---:|
| 0,7 | 0,00 | 0,00 | 0,00 | 0,00 |
| 1,0 | 0,00 | 0,00 | 0,00 | 0,00 |
| 1,15 | 0,00 | 0,00 | 0,00 | 0,03 |
| 1,3 | 0,00 | 0,00 | 0,00 | 0,03 |
| 1,5 | 0,00 | 0,00 | 0,10 | 0,10 |

Två egenskaper framträder.

För det första är det öppna tillståndet anmärkningsvärt robust mot brus över större delen av det testade området. Även vid de högsta insatserna \(s=1{,}5\) och måttligt brus \(\sigma=0{,}1\) föll inte en enda körning av 30 in i slutenhet. Detta är en följd av den långsamma permeabilitetsdynamiken: när en brustopp tillfälligt höjer den upplevda osäkerheten, kollapsar inte systemets permeabilitet \(P\) omedelbart. Tillit–utforskandeslingan förblir intakt, och systemet återvänder till den öppna attraktorn när toppen passerat.

För det andra uppträder vid parameterrummets extrema hörn – höga insatser och högt brus – en liten men nollskild sannolikhet för slutenhet. Vid \(\sigma=0{,}2\) och \(s=1{,}5\) slutade 10 % av körningarna slutna; vid \(\sigma=0{,}3\) och \(s=1{,}15\) eller \(1{,}3\) ungefär 3 %. Standardavvikelsen för slutligt \(B\) ökar med brus, vilket återspeglar större exkursioner mot separatrisen. Ibland är dessa exkursioner tillräckligt stora för att korsa den, varefter den slutna attraktorn tar över.

Denna kvarvarande bräcklighet är viktig. Den visar att det öppna tillståndet inte är oändligt robust. Det finns ett begränsat band av förhållanden – höga insatser och högt perceptuellt brus – där slumpmässig feltolkning permanent kan tippa ett system in i slutenhet. När systemet väl tippats driver den långsamma permeabilitetsdynamiken \(P\) nedåt, vilket gör det slutna tillståndet självförstärkande och återhämtning osannolik utan en väsentlig förbättring av förhållandena.

### 5.3 Jämförelse med beteendet vid fast permeabilitet

Kontrasten mellan detta resultat och beteendet hos en modell med fast, låg permeabilitet är instruktiv. I tidigare utforskande arbete med en fyravariabelmodell där \(P\) hölls konstant på ett lågt värde, räckte brus på \(\sigma=0{,}05\) för att producera 100 % slutenhet vid \(s=1{,}15\). Skillnaden beror helt på den långsamma permeabilitetsdynamiken.

När \(P\) är fast låg, höjer en brustopp omedelbart den upplevda osäkerheten, vilket utlöser gränsinvestering. Gränsen undertrycker därefter tillit och utforskande, höjer den faktiska osäkerheten, vilket ytterligare höjer den upplevda osäkerheten. Systemet faller snabbt in i den slutna attraktorn.

När \(P\) tillåts anpassa sig fungerar den som en buffert. En enskild brustopp kan inte omedelbart förstöra systemets öppenhet eftersom \(P\) endast förändras långsamt. Systemet absorberar störningen och återvänder till det öppna tillståndet. Endast ihållande brus med stor amplitud vid höga insatser kan övervinna denna buffert. Detta fynd förfinar den tidigare statiska analysen: gränskvalitet är inte bara en designparameter; dess **tidsmässiga responsivitet** är i sig en nyckelbestämningsfaktor för motståndskraft.

### 5.4 Institutionell tolkning

I styrningstermer antyder brusrobusthetsresultatet att samhällen med långsamma, förankrade skydd för transparens och informationsflöde är mer motståndskraftiga mot övergående panik än samhällen vars skydd snabbt kan eroderas. Modellen identifierar en specifik mekanism: om de institutioner som upprätthåller \(P\) själva är långsamma att förändra, fungerar de som ett lågpassfilter som jämnar ut de rädslotoppar som annars skulle driva överreaktion.

Den kvarvarande bräckligheten vid höga insatser och högt brus bär en varning. I miljöer där insatserna är verkligt existentiella och avkänningsapparaten är brusig – till exempel under en snabbt utvecklande pandemi eller ett nytt säkerhetshot – möter även väletablerade öppna samhällen en liten men nollskild risk för permanent slutenhet. Modellen förutsäger inte när detta inträffar, men den visar att risken inte är noll, och att den växer med kombinationen av höga insatser och dålig signaltrohet.

Detta knyter direkt an till Paper I, som fastställde att latens och signaltrohet sätter hårda tak för responsivitet. Här är låg signaltrohet (högt \(\sigma\)) inte bara en felkälla; den är en potentiell utlösare av regimförändring. Ett styrsystem som inte kan skilja signal från brus i sin hotuppfattning kan i ett ögonblick av tvetydighet låsa in sig i en konfiguration som det inte lätt kan lämna.

### 5.5 Sammanfattning

Den stokastiska analysen bekräftar det deterministiska fyndet om robust bistabilitet och tillför två förfiningar. För det första är det öppna tillståndet mycket stabilare under brus när gränspermeabiliteten tillåts anpassa sig långsamt, eftersom den långsamma variabeln filtrerar bort övergående störningar. För det andra finns en kvarvarande risk för brusinducerad tippning vid extrema värden på höga insatser och högt brus, där ett fåtal banor korsar separatrisen och fastnar i slutenhet. Detta är modellens formella representation av institutionell panik: inte en vanlig händelse, men en verklig sådan när rädsla och förvirring kulminerar tillsammans.

Nästa avsnitt utvidgar modellen till två kopplade populationer och undersöker om en stängningshändelse i den ena kan sprida sig till den andra, vilket producerar polarisering eller systemomfattande kollaps.
