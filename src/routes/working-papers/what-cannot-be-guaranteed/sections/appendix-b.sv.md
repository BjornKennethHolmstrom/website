# Appendix B — Empiriskt

## B.1 Miljöspecifikation

**Rutnät och agenter.** Ett 5×5-rutnät. Tre agenter, var och en med en hemcell: agent 0 vid (1,1), agent 1 vid (1,3), agent 2 vid (2,2). Två resurser, A och B. Inga två agenter får befinna sig på samma cell.

**Specialisering.** Skördeeffektivitet (rader = agent, kolumner = resurs):

| | A | B |
|---|---|---|
| agent 0 (A-specialist) | 2,0 | **0,0** |
| agent 1 (B-specialist) | **0,0** | 2,0 |
| agent 2 (generalist) | 1,2 | 1,2 |

Nollorna är hela designen. **En specialist kan inte skörda sin komplementära resurs överhuvudtaget.** Konsumtion kräver en enhet av varje. Så specialisterna kan inte överleva utan gåvor, och generalisten kan överleva utan någon. Den asymmetrin är vad som gör samarbete nödvändigt — och, som det visar sig (§4.3), vad som gör det svårt att lära sig.

**Resursfält.** Kapacitet vid cell $(r,c)$, med $d_i$ som det euklidiska avståndet till agent $i$:s hem:

$$\mathrm{kap}_A(r,c) = \mathrm{klipp}\Big(0,\!05 + 2,\!5e^{-d_0^2/1,\!2} - 0,\!3e^{-d_1^2/1,\!2} + 0,\!5e^{-d_2^2/2,\!0},\ 0,\!01,\ 3\Big)$$

med $\mathrm{kap}_B$ som spegelbilden (index 0 och 1 utbytta). Varje specialists hem är rikt på sin egen resurs, fattigt på den andra; centrum är måttligt rikt på båda. Resurser återväxer mot kapacitet med 0,12 per steg. **Klippgolvet på 0,01 är inte kosmetiskt — se B.3.**

**Handlingar** (16): förflytta ×4, vänta, skörda A, skörda B, konsumera, ge A ×4 riktningar, ge B ×4 riktningar.

**Energi.** Start 15, maximum 20, metabolisk kostnad 0,4/steg, konsumtion ger upp till +12 (kräver 1 A **och** 1 B), givande kostar 0,3. Lagertak 3 per resurs. Initiala lager: agent 0 = (2, 0), agent 1 = (0, 2), agent 2 = (1, 1).

**Skördeförhandsvillkor (korrigeringen från B.3).** Skörd lyckas endast på en cell som innehåller ≥ **0,5** av resursen. Därunder misslyckas handlingen och kostar 0,05. Detta är en *världsregel*, bindande för varje agenttyp.

**Certifieringskanalen — studieobjektet.** Varje agent sänder ut en tvåbitars behovssignal, och under normal drift gäller

$$\mathrm{signal}_i[\mathrm{res}] = 1 \iff \mathrm{lager}_i[\mathrm{res}] < 1$$

En agent med överskott (> 1) av en resurs, som är granne med en granne som signalerar behov av den, får ge. **Detta är certifieringskärnan i §3 i miniatyr**: den procedur genom vilken systemet fastställer att ett externt faktum — *denna agent behöver A* — förelåg.

## B.2 Förhandsregistreringen, så som den fastställdes

Återgiven som fastställd **före någon körning**. §9.4 ber läsaren acceptera ett grenbyte som licensierat snarare än bekvämt; den begäran är tom om inte läsaren kan kontrollera vad som fastställdes i förväg.

### Betingelser

| betingelse | manipulation |
|---|---|
| `no_crisis` | ingen |
| `ordinary_disturbance` | återväxten halverad för steg 200–300; **certifieringen intakt** |
| `cert_crisis_used_channel` | från steg 200, agent 1:s A-signal **inverterad**: signalerar A-behov omm lager$_A \geq 1$ |
| `cert_crisis_unused_channel` | från steg 200, agent 1:s **B**-signal inverterad: signalerar B-behov omm lager$_B \geq 2$ |
| `reset_d` för $d \in \{10, 25, 50, 100\}$ | använd-kanal-kris vid 200, kärnan reparerad vid $200 + d$ |

Kris vid steg 200. Fönster: före [0, 200), efter1 [200, 250), sent [400, 500). Tjugo frön, vart och ett oberoende tränat. Medianer och IQR rapporteras; aldrig trajektorior.

### Insläppsgrinden

**Registrerad som ett möjligt utfall, inte som ett hinder som antas vara klarat.** Krisjämförelsen tolkas överhuvudtaget inte om inte `no_crisis`-baslinjen först är stationär över utvärderingshorisonten:

- överlevnad(sent) ≥ 0,90 × överlevnad(före), **och**
- samarbets**takt** (sent) ≥ 0,70 × samarbets**takt** (före), **och**
- sann-informerat givande (sent) ≥ 0,60

i ≥ 16 av 20 frön. **Om grinden misslyckas, är det det rapporterade resultatet och C1–C4 hålls tillbaka.**

*(En defekt i vår egen grind, rapporterad för att den nästan kostade oss körningen: den första versionen jämförde samarbete som ett rått **antal** över fönster av olika längd — 200 steg mot 100. Normaliserat till en takt var förhållandet före→sent 0,82, bekvämt över ribban på 0,70. Världen var närmare att passera än vad vårt eget test kunde se.)*

### De fyra förutsägelserna

| | registrerat påstående | tröskel | registrerad nollhypotes |
|---|---|---|---|
| **C1** | ocertifierat-verkligt-behov stiger under använd-kanal-krisen och inte under vanlig störning | ≥ 0,10 marginal, ≥ 16/20 frön | båda störningarna skadar kanalen lika mycket; misslyckandet är generiskt |
| **C2** | ökningen i ocertifierat-verkligt-behov överstiger ökningen i falskt-certifierat givande | ≥ 15/20 frön | misslyckandet är symmetriskt, eller falsk-certifieringsdominerat |
| **C3** | sann-informerat givande (sent) avtar monotont med återställningsfördröjning, och återställning vid +100 är oskiljbar från ingen återställning | ρ ≤ −0,50; \|diff\| < 0,10 | återställningsfördröjning har ingen effekt — reparation fungerar alltid, eller aldrig |
| **C4** | den oanvända-kanal-krisen är oskiljbar från ingen kris på alla sena certifieringsmått | inom 0,10, ≥ 16/20 frön | varje signalkorruption skadar samordning — vilket försvagar C1 |

**Registrerad gren: den inlärda (DQN) regulatorn.** Den skriptade grenen var utsedd till *en robusthetskontroll, inte ett registrerat utfall*.

C2 flaggades vid registreringen som ärvd från piloter som hade körts på en instabil baslinje, och som därför sannolikt skulle misslyckas. Det gjorde den.

### Avvikelsen

Den registrerade grenen misslyckades med insläppsgrinden över tre konfigurationer (B.4). Den **skriptade** grenen, som passerar vid 17/20, substituerades. Grinden är endast baslinje — den testar `no_crisis` och inget annat, och ingen krisarm ingår i den — och C1–C4 hade **inte beräknats på den skriptade grenen** vid tiden för bytet, vilket deklarerades innan de beräknades. Vi håller detta för licensierat; §9.4 anger varför, och anger vad vi inte kan påstå.

## B.3 Miljödefekten: en kalcell-attraktor

**Symptom.** Den första registrerade körningens grind utlöste omedelbart: `no_crisis` sent-fönster sann-informerat givande på 0,000 [0,000, 0,000]. Skriptade agenter — en fast policy, inget att avlära — gick **99,4% → 58,7% → 0,0%** överlevnad över före/efter1/sent under ingen kris alls. Varje kristillstånd returnerade identiska medianer, eftersom alla mätte en död population.

**Knapphet utesluten.** En baslinjekalibreringssvepning över återväxt × konsumtionsvinst, skriptade agenter, endast `no_crisis`:

| återväxt | 0,12 | 0,20 | 0,30 | 0,45 | 0,60 |
|---|---|---|---|---|---|
| överlevnad, före → sent | 100 → 0 | 100 → 0 | 100 → 0 | 100 → 0 | 100 → 0 |

**Total okänslighet för en femfaldig förändring i återväxt.** Agenterna led inte brist på resurser.

**Orsak.** Skörd lyckades närhelst `resources[r,c,res] > 0`. Eftersom kapacitetskartan är klippt vid ett golv på **0,01** och återväxer varje steg, är det villkoret sant på **varje cell, alltid**. En agent som drev in på en kal cell kunde skörda den för evigt och aldrig resa hem.

Spårningen (frö 0, steg 260–380):

| agent | position | A-kapacitet där | handlingar i fönstret | utfall |
|---|---|---|---|---|
| 0 (A-specialist) | parkerad vid (1,4) | **0,01** | skörda ×112, ge ×4, konsumera ×3 | svalt, slutligt lager-A 0,96 |
| 2 (generalist) | parkerad vid (1,3) | **0,023** | skörda ×57 | svalt |

Total A på rutnätet hölls konstant vid 12,4 genomgående — **mättat**. Agenterna svalt på de enda cellerna i rutnätet som inte hade något, medan resten av världen låg full.

**Korrigering.** `HARVEST_MIN = 0,5` — en **regel**, inte en parameter. Återväxt (0,12) och konsumtionsvinst (12,0) lämnades vid sina ursprungliga värden. Ingenting rattades mot ett utfall; en degenererad handling togs bort. Under korrigeringen är baslinjen stationär vid den *ursprungliga* återväxten:

| | före | sent | kvot |
|---|---|---|---|
| överlevnad | 100,0 | 100,0 | 1,00 |
| samarbete / steg | 0,0975 | 0,0800 | 0,82 |
| sann-informerat givande | — | 1,000 | — |

**Skuld att betala (§9.8).** Samma degenererade handling existerar i de samordningssimuleringar som sår multi-agent-linjen av arbete. Deras kortare episoder maskerar den. **Dessa resultat bör granskas på nytt innan något byggs på dem.**

**Och den retrospektivdiagnostiserar piloterna.** `13-certification-crisis`-piloterna utvärderade till 400 steg och protokollförde en "instabil sen baslinje", då läst som en trimningsvackling. Det var denna kollaps, ett fönster tidigare. Piloternas resultat mättes på en döende population, och den signatur av missad certifiering som vi ärvde från dem som C2:s motivation var aldrig tolkningsbar.

## B.4 Inläraren: tre konfigurationer, tre misslyckanden

Den registrerade grenen var den inlärda regulatorn. Vi kunde inte bygga en som klarar baslinjegrinden.

| | v2 (frusen) | v3 (adaptiv) | v4 (adaptiv + utforskning fixad) |
|---|---|---|---|
| utvärdering | frusen, ε = 0, ingen repris | lär sig, ε = 0,05, repris varje steg | lär sig, ε = 0,05, repris varje steg |
| konsumtionsbelöning | platt **+12** | energi faktiskt erhållen | energi faktiskt erhållen |
| dödsstraff | inget | −20 | −20 |
| överlevnadsbonus | ingen | ingen | +0,1 / steg vid liv |
| diskontering γ | 0,95 (~20-stegs horisont) | 0,99 | 0,99 |
| ε-schema | *bieffekt av reprisantall* | *bieffekt av reprisantall* | **explicit: linjärt 1,0 → 0,05 över 70% av episoderna** |
| episoder × steg | 600 × 500 | 600 × 600 | 1000 × 600 |
| **GRIND** | **4/20** | **0/20** | **0/20** |
| överlevnad, före (median) | 100,0 | 45,7 | 45,3 |
| samarbete / steg, före | 0,307 | 0,005 | 0,005 |

**v2 — jämvikten utan handel.** Fjorton av tjugo frön landar på **exakt 33,3% överlevnad** — en agent av tre. Den överlevande är generalisten. Båda specialisterna svälter. Sex frön upprätthåller samarbete på obestämd tid. Fördelningen är bimodal, inte brusig: inläraren finner antingen handel eller inte.

**v3 — utforskningsfelet, som var vårt.** `replay()` minskade ε med 0,997 per anrop. Att nå golvet på 0,02 tar ≈ 1 300 anrop. v2 anropade repris 25× per episod → golv vid ≈ **52 episoder** av 600. v3 anropade det var 8:e steg av en 600-stegs episod, dvs. 75× → golv vid ≈ **17 episoder av 600**. Att höja reprisfrekvensen kapade i tysthet utforskningsschemat med två tredjedelar. **Utforskningsschemat var aldrig ett schema; det var en bieffekt av en orelaterad hyperparameter.**

Därtill: v3:s konsumtionsbelöningskorrigering är *korrekt* men gör inlärningssignalen glesare och tillståndsberoende. En platt +12 är en fyrbåk; `min(12, E_max − E)` är det inte. Korrekt och svårare — överlevbart med utforskning, ödesdigert utan den.

**v4 — korrigeringen, och misslyckandet.** ε blev ett explicit per-episod-schema, frikopplat från repris helt; en tät överlevnadsbonus kodade livskraftighetsmålet. Inte rört: givarkreditens magnitud, inlärningshastighet, dödsstraffets magnitud, nätverksstorlek, γ, krismanipulationerna, varje registrerad tröskel. **Resultat: 0/20**, och sämre än v2 även vid överlevnad — generalisten dör nu i 80% av fröna.

| v4, vem överlever (av 20 frön) | |
|---|---|
| A-specialist | 0% |
| B-specialist | 0% |
| generalist | 20% |
| alla tre | **0%** |

**En fotnot på denna artikels bekostnad.** v2:s *feljusterade* belöning — en platt +12 för konsumtion, oavsett erhållen energi — producerade **bättre överlevnad** än v4:s justerade, som endast betalar vad som faktiskt erhålls. Proxyvariabeln var en bättre träningssignal än målet, eftersom den var tätare. Vi protokollför detta eftersom Rapport XX härleder Goodharts lag från begränsad representation, och Goodhart skulle ha förväntat sig det.

**Stoppregeln, fastställd innan v4 kördes.** Om v4:s grind misslyckades, skulle vi stoppa, rapportera båda misslyckandena som resultat, och falla tillbaka på den skriptade grenen. Den misslyckades. Vi stoppade.

> En fjärde konfiguration skulle ha varit ett sökande efter den baslinje som producerar det resultat artikeln vill ha, och vid den punkten är förhandsregistreringen dekoration.

## B.5 Bekräftelsekörningen för översvämning

**Proveniens, angiven för att den spelar roll.** Översvämningsmekanismen (§4.5) fanns **efter** att C1–C4 hade misslyckats, genom att fråga varför ocertifierat-verkligt-behov var en exakt nolla under en kris som inverterar behovssignalen. Den är därför **post‑hoc**. För att undvika att presentera den som ett förhandsregistrerat fynd, omformulerades den som en ny riktningsförutsägelse och kördes på tjugo nya frön innan den skrevs ner.

**Förutsägelsen, registrerad före denna körning.** Under den använda-kanal-krisen blir agent 1 (B-specialisten, vars A-behovssignal är inverterad) **översvämmad** med A, inte svulten:

> medellager-A stiger efter krisen, och tid i verkligt A-behov faller.

**Seldon.** Skriptade agenter; endast `no_crisis` och `cert_crisis_used_channel`; 400 steg, kris vid 200; 20 frön. Återställnings- och vanlig-störning-armar kördes inte — detta är ett mekanismtest, inte en upprepning av §4. Mätt: agent 1:s medellager-A före och efter, dess stegräkning under behovströskeln, och A-gåvor mottagna efter krisen.

**Resultat.**

| | medellager-A (före) | medellager-A (efter) | steg i verkligt A-behov, före → efter | A-gåvor mottagna (efter) |
|---|---|---|---|---|
| `no_crisis` | 0,930 | 0,980 | 24,6 → 18,4 | 6,7 |
| **kris** | 0,930 | **2,763** | 24,6 → **10,0** | 7,5 |

**Bekräftat.** Den korrupta kanalen nästan **tredubblar** specialistens lager av den resurs den inte kan skörda, och **halverar** dess tid i genuint behov.

**Läsning.** Specialisten signalerar behov av A precis när den *har* A; de andra efterkommer och ger den mer; dess lager stiger; efter att ha stigit slutar det att falla ner i behov. Så den exakta nollan i C1 är inte en frånvaro av skada — det är skada som instrumentet inte kan se, eftersom instrumentets nämnare är *verkligt behov*, och patologin har eliminerat verkligt behov genom att överserva den part den felidentifierade.

> **Den falska certifieringen föregriper det verkliga behov som den annars skulle ha maskerat.**

**Nivå: `[R inom modellen]`**, med ovanstående proveniens bifogad. Det är inte ett förhandsregistrerat fynd och §4 presenterar det inte som ett.# Appendix B — Empiriskt

## B.1 Miljöspecifikation

**Rutnät och agenter.** Ett 5×5-rutnät. Tre agenter, var och en med en hemcell: agent 0 vid (1,1), agent 1 vid (1,3), agent 2 vid (2,2). Två resurser, A och B. Inga två agenter får befinna sig på samma cell.

**Specialisering.** Skördeeffektivitet (rader = agent, kolumner = resurs):

| | A | B |
|---|---|---|
| agent 0 (A-specialist) | 2,0 | **0,0** |
| agent 1 (B-specialist) | **0,0** | 2,0 |
| agent 2 (generalist) | 1,2 | 1,2 |

Nollorna är hela designen. **En specialist kan inte skörda sin komplementära resurs överhuvudtaget.** Konsumtion kräver en enhet av varje. Så specialisterna kan inte överleva utan gåvor, och generalisten kan överleva utan någon. Den asymmetrin är vad som gör samarbete nödvändigt — och, som det visar sig (§4.3), vad som gör det svårt att lära sig.

**Resursfält.** Kapacitet vid cell $(r,c)$, med $d_i$ som det euklidiska avståndet till agent $i$:s hem:

$$\mathrm{kap}_A(r,c) = \mathrm{klipp}\Big(0,\!05 + 2,\!5e^{-d_0^2/1,\!2} - 0,\!3e^{-d_1^2/1,\!2} + 0,\!5e^{-d_2^2/2,\!0},\ 0,\!01,\ 3\Big)$$

med $\mathrm{kap}_B$ som spegelbilden (index 0 och 1 utbytta). Varje specialists hem är rikt på sin egen resurs, fattigt på den andra; centrum är måttligt rikt på båda. Resurser återväxer mot kapacitet med 0,12 per steg. **Klippgolvet på 0,01 är inte kosmetiskt — se B.3.**

**Handlingar** (16): förflytta ×4, vänta, skörda A, skörda B, konsumera, ge A ×4 riktningar, ge B ×4 riktningar.

**Energi.** Start 15, maximum 20, metabolisk kostnad 0,4/steg, konsumtion ger upp till +12 (kräver 1 A **och** 1 B), givande kostar 0,3. Lagertak 3 per resurs. Initiala lager: agent 0 = (2, 0), agent 1 = (0, 2), agent 2 = (1, 1).

**Skördeförhandsvillkor (korrigeringen från B.3).** Skörd lyckas endast på en cell som innehåller ≥ **0,5** av resursen. Därunder misslyckas handlingen och kostar 0,05. Detta är en *världsregel*, bindande för varje agenttyp.

**Certifieringskanalen — studieobjektet.** Varje agent sänder ut en tvåbitars behovssignal, och under normal drift gäller

$$\mathrm{signal}_i[\mathrm{res}] = 1 \iff \mathrm{lager}_i[\mathrm{res}] < 1$$

En agent med överskott (> 1) av en resurs, som är granne med en granne som signalerar behov av den, får ge. **Detta är certifieringskärnan i §3 i miniatyr**: den procedur genom vilken systemet fastställer att ett externt faktum — *denna agent behöver A* — förelåg.

## B.2 Förhandsregistreringen, så som den fastställdes

Återgiven som fastställd **före någon körning**. §9.4 ber läsaren acceptera ett grenbyte som licensierat snarare än bekvämt; den begäran är tom om inte läsaren kan kontrollera vad som fastställdes i förväg.

### Betingelser

| betingelse | manipulation |
|---|---|
| `no_crisis` | ingen |
| `ordinary_disturbance` | återväxten halverad för steg 200–300; **certifieringen intakt** |
| `cert_crisis_used_channel` | från steg 200, agent 1:s A-signal **inverterad**: signalerar A-behov omm lager$_A \geq 1$ |
| `cert_crisis_unused_channel` | från steg 200, agent 1:s **B**-signal inverterad: signalerar B-behov omm lager$_B \geq 2$ |
| `reset_d` för $d \in \{10, 25, 50, 100\}$ | använd-kanal-kris vid 200, kärnan reparerad vid $200 + d$ |

Kris vid steg 200. Fönster: före [0, 200), efter1 [200, 250), sent [400, 500). Tjugo frön, vart och ett oberoende tränat. Medianer och IQR rapporteras; aldrig trajektorior.

### Insläppsgrinden

**Registrerad som ett möjligt utfall, inte som ett hinder som antas vara klarat.** Krisjämförelsen tolkas överhuvudtaget inte om inte `no_crisis`-baslinjen först är stationär över utvärderingshorisonten:

- överlevnad(sent) ≥ 0,90 × överlevnad(före), **och**
- samarbets**takt** (sent) ≥ 0,70 × samarbets**takt** (före), **och**
- sann-informerat givande (sent) ≥ 0,60

i ≥ 16 av 20 frön. **Om grinden misslyckas, är det det rapporterade resultatet och C1–C4 hålls tillbaka.**

*(En defekt i vår egen grind, rapporterad för att den nästan kostade oss körningen: den första versionen jämförde samarbete som ett rått **antal** över fönster av olika längd — 200 steg mot 100. Normaliserat till en takt var förhållandet före→sent 0,82, bekvämt över ribban på 0,70. Världen var närmare att passera än vad vårt eget test kunde se.)*

### De fyra förutsägelserna

| | registrerat påstående | tröskel | registrerad nollhypotes |
|---|---|---|---|
| **C1** | ocertifierat-verkligt-behov stiger under använd-kanal-krisen och inte under vanlig störning | ≥ 0,10 marginal, ≥ 16/20 frön | båda störningarna skadar kanalen lika mycket; misslyckandet är generiskt |
| **C2** | ökningen i ocertifierat-verkligt-behov överstiger ökningen i falskt-certifierat givande | ≥ 15/20 frön | misslyckandet är symmetriskt, eller falsk-certifieringsdominerat |
| **C3** | sann-informerat givande (sent) avtar monotont med återställningsfördröjning, och återställning vid +100 är oskiljbar från ingen återställning | ρ ≤ −0,50; \|diff\| < 0,10 | återställningsfördröjning har ingen effekt — reparation fungerar alltid, eller aldrig |
| **C4** | den oanvända-kanal-krisen är oskiljbar från ingen kris på alla sena certifieringsmått | inom 0,10, ≥ 16/20 frön | varje signalkorruption skadar samordning — vilket försvagar C1 |

**Registrerad gren: den inlärda (DQN) regulatorn.** Den skriptade grenen var utsedd till *en robusthetskontroll, inte ett registrerat utfall*.

C2 flaggades vid registreringen som ärvd från piloter som hade körts på en instabil baslinje, och som därför sannolikt skulle misslyckas. Det gjorde den.

### Avvikelsen

Den registrerade grenen misslyckades med insläppsgrinden över tre konfigurationer (B.4). Den **skriptade** grenen, som passerar vid 17/20, substituerades. Grinden är endast baslinje — den testar `no_crisis` och inget annat, och ingen krisarm ingår i den — och C1–C4 hade **inte beräknats på den skriptade grenen** vid tiden för bytet, vilket deklarerades innan de beräknades. Vi håller detta för licensierat; §9.4 anger varför, och anger vad vi inte kan påstå.

## B.3 Miljödefekten: en kalcell-attraktor

**Symptom.** Den första registrerade körningens grind utlöste omedelbart: `no_crisis` sent-fönster sann-informerat givande på 0,000 [0,000, 0,000]. Skriptade agenter — en fast policy, inget att avlära — gick **99,4% → 58,7% → 0,0%** överlevnad över före/efter1/sent under ingen kris alls. Varje kristillstånd returnerade identiska medianer, eftersom alla mätte en död population.

**Knapphet utesluten.** En baslinjekalibreringssvepning över återväxt × konsumtionsvinst, skriptade agenter, endast `no_crisis`:

| återväxt | 0,12 | 0,20 | 0,30 | 0,45 | 0,60 |
|---|---|---|---|---|---|
| överlevnad, före → sent | 100 → 0 | 100 → 0 | 100 → 0 | 100 → 0 | 100 → 0 |

**Total okänslighet för en femfaldig förändring i återväxt.** Agenterna led inte brist på resurser.

**Orsak.** Skörd lyckades närhelst `resources[r,c,res] > 0`. Eftersom kapacitetskartan är klippt vid ett golv på **0,01** och återväxer varje steg, är det villkoret sant på **varje cell, alltid**. En agent som drev in på en kal cell kunde skörda den för evigt och aldrig resa hem.

Spårningen (frö 0, steg 260–380):

| agent | position | A-kapacitet där | handlingar i fönstret | utfall |
|---|---|---|---|---|
| 0 (A-specialist) | parkerad vid (1,4) | **0,01** | skörda ×112, ge ×4, konsumera ×3 | svalt, slutligt lager-A 0,96 |
| 2 (generalist) | parkerad vid (1,3) | **0,023** | skörda ×57 | svalt |

Total A på rutnätet hölls konstant vid 12,4 genomgående — **mättat**. Agenterna svalt på de enda cellerna i rutnätet som inte hade något, medan resten av världen låg full.

**Korrigering.** `HARVEST_MIN = 0,5` — en **regel**, inte en parameter. Återväxt (0,12) och konsumtionsvinst (12,0) lämnades vid sina ursprungliga värden. Ingenting rattades mot ett utfall; en degenererad handling togs bort. Under korrigeringen är baslinjen stationär vid den *ursprungliga* återväxten:

| | före | sent | kvot |
|---|---|---|---|
| överlevnad | 100,0 | 100,0 | 1,00 |
| samarbete / steg | 0,0975 | 0,0800 | 0,82 |
| sann-informerat givande | — | 1,000 | — |

**Skuld att betala (§9.8).** Samma degenererade handling existerar i de samordningssimuleringar som sår multi-agent-linjen av arbete. Deras kortare episoder maskerar den. **Dessa resultat bör granskas på nytt innan något byggs på dem.**

**Och den retrospektivdiagnostiserar piloterna.** `13-certification-crisis`-piloterna utvärderade till 400 steg och protokollförde en "instabil sen baslinje", då läst som en trimningsvackling. Det var denna kollaps, ett fönster tidigare. Piloternas resultat mättes på en döende population, och den signatur av missad certifiering som vi ärvde från dem som C2:s motivation var aldrig tolkningsbar.

## B.4 Inläraren: tre konfigurationer, tre misslyckanden

Den registrerade grenen var den inlärda regulatorn. Vi kunde inte bygga en som klarar baslinjegrinden.

| | v2 (frusen) | v3 (adaptiv) | v4 (adaptiv + utforskning fixad) |
|---|---|---|---|
| utvärdering | frusen, ε = 0, ingen repris | lär sig, ε = 0,05, repris varje steg | lär sig, ε = 0,05, repris varje steg |
| konsumtionsbelöning | platt **+12** | energi faktiskt erhållen | energi faktiskt erhållen |
| dödsstraff | inget | −20 | −20 |
| överlevnadsbonus | ingen | ingen | +0,1 / steg vid liv |
| diskontering γ | 0,95 (~20-stegs horisont) | 0,99 | 0,99 |
| ε-schema | *bieffekt av reprisantall* | *bieffekt av reprisantall* | **explicit: linjärt 1,0 → 0,05 över 70% av episoderna** |
| episoder × steg | 600 × 500 | 600 × 600 | 1000 × 600 |
| **GRIND** | **4/20** | **0/20** | **0/20** |
| överlevnad, före (median) | 100,0 | 45,7 | 45,3 |
| samarbete / steg, före | 0,307 | 0,005 | 0,005 |

**v2 — jämvikten utan handel.** Fjorton av tjugo frön landar på **exakt 33,3% överlevnad** — en agent av tre. Den överlevande är generalisten. Båda specialisterna svälter. Sex frön upprätthåller samarbete på obestämd tid. Fördelningen är bimodal, inte brusig: inläraren finner antingen handel eller inte.

**v3 — utforskningsfelet, som var vårt.** `replay()` minskade ε med 0,997 per anrop. Att nå golvet på 0,02 tar ≈ 1 300 anrop. v2 anropade repris 25× per episod → golv vid ≈ **52 episoder** av 600. v3 anropade det var 8:e steg av en 600-stegs episod, dvs. 75× → golv vid ≈ **17 episoder av 600**. Att höja reprisfrekvensen kapade i tysthet utforskningsschemat med två tredjedelar. **Utforskningsschemat var aldrig ett schema; det var en bieffekt av en orelaterad hyperparameter.**

Därtill: v3:s konsumtionsbelöningskorrigering är *korrekt* men gör inlärningssignalen glesare och tillståndsberoende. En platt +12 är en fyrbåk; `min(12, E_max − E)` är det inte. Korrekt och svårare — överlevbart med utforskning, ödesdigert utan den.

**v4 — korrigeringen, och misslyckandet.** ε blev ett explicit per-episod-schema, frikopplat från repris helt; en tät överlevnadsbonus kodade livskraftighetsmålet. Inte rört: givarkreditens magnitud, inlärningshastighet, dödsstraffets magnitud, nätverksstorlek, γ, krismanipulationerna, varje registrerad tröskel. **Resultat: 0/20**, och sämre än v2 även vid överlevnad — generalisten dör nu i 80% av fröna.

| v4, vem överlever (av 20 frön) | |
|---|---|
| A-specialist | 0% |
| B-specialist | 0% |
| generalist | 20% |
| alla tre | **0%** |

**En fotnot på denna artikels bekostnad.** v2:s *feljusterade* belöning — en platt +12 för konsumtion, oavsett erhållen energi — producerade **bättre överlevnad** än v4:s justerade, som endast betalar vad som faktiskt erhålls. Proxyvariabeln var en bättre träningssignal än målet, eftersom den var tätare. Vi protokollför detta eftersom Rapport XX härleder Goodharts lag från begränsad representation, och Goodhart skulle ha förväntat sig det.

**Stoppregeln, fastställd innan v4 kördes.** Om v4:s grind misslyckades, skulle vi stoppa, rapportera båda misslyckandena som resultat, och falla tillbaka på den skriptade grenen. Den misslyckades. Vi stoppade.

> En fjärde konfiguration skulle ha varit ett sökande efter den baslinje som producerar det resultat artikeln vill ha, och vid den punkten är förhandsregistreringen dekoration.

## B.5 Bekräftelsekörningen för översvämning

**Proveniens, angiven för att den spelar roll.** Översvämningsmekanismen (§4.5) fanns **efter** att C1–C4 hade misslyckats, genom att fråga varför ocertifierat-verkligt-behov var en exakt nolla under en kris som inverterar behovssignalen. Den är därför **post‑hoc**. För att undvika att presentera den som ett förhandsregistrerat fynd, omformulerades den som en ny riktningsförutsägelse och kördes på tjugo nya frön innan den skrevs ner.

**Förutsägelsen, registrerad före denna körning.** Under den använda-kanal-krisen blir agent 1 (B-specialisten, vars A-behovssignal är inverterad) **översvämmad** med A, inte svulten:

> medellager-A stiger efter krisen, och tid i verkligt A-behov faller.

**Seldon.** Skriptade agenter; endast `no_crisis` och `cert_crisis_used_channel`; 400 steg, kris vid 200; 20 frön. Återställnings- och vanlig-störning-armar kördes inte — detta är ett mekanismtest, inte en upprepning av §4. Mätt: agent 1:s medellager-A före och efter, dess stegräkning under behovströskeln, och A-gåvor mottagna efter krisen.

**Resultat.**

| | medellager-A (före) | medellager-A (efter) | steg i verkligt A-behov, före → efter | A-gåvor mottagna (efter) |
|---|---|---|---|---|
| `no_crisis` | 0,930 | 0,980 | 24,6 → 18,4 | 6,7 |
| **kris** | 0,930 | **2,763** | 24,6 → **10,0** | 7,5 |

**Bekräftat.** Den korrupta kanalen nästan **tredubblar** specialistens lager av den resurs den inte kan skörda, och **halverar** dess tid i genuint behov.

**Läsning.** Specialisten signalerar behov av A precis när den *har* A; de andra efterkommer och ger den mer; dess lager stiger; efter att ha stigit slutar det att falla ner i behov. Så den exakta nollan i C1 är inte en frånvaro av skada — det är skada som instrumentet inte kan se, eftersom instrumentets nämnare är *verkligt behov*, och patologin har eliminerat verkligt behov genom att överserva den part den felidentifierade.

> **Den falska certifieringen föregriper det verkliga behov som den annars skulle ha maskerat.**

**Nivå: `[R inom modellen]`**, med ovanstående proveniens bifogad. Det är inte ett förhandsregistrerat fynd och §4 presenterar det inte som ett.
