# §4 — Den registrerade demonstrationen: en certifieringskris

**Alla fyra registrerade förutsägelser misslyckas.** Likaså misslyckas två registrerade försök att bygga den regulator som demonstrationen var utformad kring. Vad som överlever är en mekanism vi inte förutsåg, bekräftad i en ny registrerad körning, och den är mer användbar för argumentet i §3 än ett rent godkännande hade varit — eftersom den falsifierar §3.4:s specifika förutsägelse samtidigt som den, starkare än vi hade någon rätt att förvänta oss, bekräftar det påstående som förutsägelsen var tänkt att tjäna.

Detta avsnitt rapporterar misslyckandena först och i sin helhet, eftersom misslyckandena är det som licensierar mekanismen.

## 4.1 Miljön, och två defekter som upptäcktes i den

Tre agenter på ett 5×5-rutnät. Agent 0 skördar resurs A och kan inte skörda B; agent 1 skördar B och kan inte skörda A; agent 2 skördar båda, ineffektivt. Konsumtion kräver en enhet av *varje*. Så de två specialisterna kan inte överleva utan gåvor, och gåvor styrs av en **certifieringskanal**: varje agent sänder ut en behovssignal, och en agent med överskott ger till en angränsande granne som signalerar behov av det den har.

Den kanalen är certifieringskärnan i §3, i miniatyr. Det är den procedur genom vilken systemet fastställer att ett externt faktum — *denna agent behöver A* — förelåg.

Två defekter måste åtgärdas innan något kunde mätas, och båda rapporteras eftersom båda var levande i tidigare arbete.

**Utvärderingshorisonten överskred världens bärkraft.** Den första registrerade körningen utvärderade under 500 steg och dess insläppsgrind (§4.3) utlöste omedelbart: baslinjen utan kris visade 0,000 informerat givande i det sena fönstret. Skriptade agenter — en fast policy utan något att avlära — gick från 99,4% överlevnad till total utrotning under *ingen kris alls*, och varje kristillstånd returnerade identiska medianer eftersom alla mätte en död population.

**Orsaken var en degenererad handling, inte knapphet.** Skörd lyckades närhelst cellen innehöll någon resurs alls; eftersom kapacitetskartan är klippt vid ett golv på 0,01 och återväxer varje steg, är det villkoret sant på *varje* cell, alltid. En agent som drev in på en kal cell kunde skörda den för evigt, och skrapa hundradelar av en enhet, och aldrig resa hem. Spårning bekräftade det: A-specialisten tillbringade sina sista 120 steg parkerad på en cell med en A-kapacitet på 0,01, skördade 112 gånger, och svalt där medan rutnätet låg mättat. Baslinjekalibrering visade sedan att kollapsen var okänslig för en femfaldig förändring i återväxt — vilket är vad som uteslöt knapphet, och vad som identifierade attraktorn.

Lösningen är en **regel**, inte en parameter: skörd kräver en cell som innehåller minst 0,5 av resursen. Återväxt och konsumtionsvinst lämnades vid sina ursprungliga värden. Ingenting rattades mot ett utfall; en degenererad handling togs bort, och världen visade sig ha varit stationär hela tiden.

**Detta retrospektivdiagnostiserar tidigare arbete.** `13-certification-crisis`-piloterna utvärderade till 400 steg och visade vad som protokollfördes som en "instabil sen baslinje", då läst som en trimningsvackling. Det var ingen vackling. Det var denna kollaps, ett fönster tidigare. **Piloternas resultat mättes därför på en döende population, och den signatur av missad certifiering som vi hade ärvt från dem som motivation för C2 var inte tolkningsbar.** Det är därför C2 återregistreras nedan snarare än antas, och, som det visar sig, varför den misslyckas.

## 4.2 Betingelser

| betingelse | vad som är trasigt |
|---|---|
| `no_crisis` | ingenting (baslinje) |
| `ordinary_disturbance` | resurslandskapet (återväxten halverad under 100 steg); certifieringen intakt |
| `cert_crisis_used_channel` | agent 1:s A-behovssignal är **inverterad**: den signalerar behov av A precis när den *har* A |
| `cert_crisis_unused_channel` | agent 1:s B-behovssignal är inverterad — en kanal som pilotens inlärda policy inte agerade på |
| `reset_d ∈ {10, 25, 50, 100}` | kris, därefter repareras kärnan efter fördröjning *d* |

Kris vid steg 200. Fönster: före [0, 200), efter1 [200, 250), sent [400, 500). Tjugo frön. Medianer och IQR genomgående.

## 4.3 Insläppsgrinden, och regulatorn vi inte kunde bygga

Grinden registrerades i förväg: **krisjämförelsen tolkas överhuvudtaget inte om inte baslinjen utan kris först är stationär** — överlevnad, samarbetsgrad och sann-informerat givande platta över horisonten. Ett grindmisslyckande är ett rapporterbart utfall, inte ett hinder.

Den utlöste tre gånger.

| regulator | grind |
|---|---|
| skriptad (fast regel) | **17/20 — godkänd** |
| DQN, frusen vid utvärdering | 4/20 |
| DQN, adaptiv under utvärdering | 0/20 |
| DQN, adaptiv, med reparerat utforskningsschema | 0/20 |

Den inlärda regulatorn **kollapsar till en jämvikt utan handel**. I den frusna konfigurationen landar fjorton av tjugo frön på exakt 33,3% överlevnad — en agent av tre — och den överlevande är generalisten, som skördar båda resurserna och inte behöver någon. Båda specialisterna svälter. Under de adaptiva konfigurationerna dör vanligtvis även generalisten.

Vi försökte detta två gånger och slutade sedan, under en stoppregel fastställd före det andra försöket. Anledningen till att sluta betyder mer än misslyckandet. **Varje ytterligare konfiguration skulle ha varit ett sökande efter en baslinje som producerar det resultat artikeln vill ha, och vid den punkten är förhandsregistreringen dekoration.** Två registrerade inlärarmisslyckanden rapporteras som resultat.

Detta har en konsekvens som sträcker sig in i §3, och vi tar upp den i §4.6: demonstrationen genomförs därför på en **regelföljande** institution, inte en lärande, och det finns saker en regelföljare strukturellt inte kan visa.

*(En parentes värd en mening, eftersom det är ett litet skämt på denna artikels bekostnad. Inläraren överlevde* bättre *under en feljusterad belöning — en platt bonus för konsumtion, oavsett faktiskt erhållen energi — än under den korrigerade som endast betalar vad som erhålls. Proxyvariabeln var en bättre träningssignal än målet, eftersom den var tätare. Vi rapporterar detta eftersom det roade oss och eftersom Goodhart, som §5 i Rapport XX härleder, skulle ha förväntat sig det.)*

## 4.4 De fyra registrerade förutsägelserna, och deras misslyckande

### C1 — en certifieringskris är inte en vanlig störning. **UNDERKÄND, 0/20.**

*Registrerad:* ocertifierat-verkligt-behov stiger under `cert_crisis_used_channel` och inte under `ordinary_disturbance`, med ≥ 0,10, i ≥ 16/20 frön.

| ocertifierat-verkligt-behov (efter1) | |
|---|---|
| no_crisis | 0,000 [0,000, 0,000] |
| ordinary_disturbance | 0,000 [0,000, 0,000] |
| **cert_crisis_used_channel** | **0,000 [0,000, 0,000]** |

Certifieringskrisen producerar **inget ouppfyllt behov överhuvudtaget**. Detta är inte en svag effekt eller en effekt under tröskeln; det är en exakt nolla, i varje frö. Förutsägelsen är inte bara ouppfylld — den storhet den handlade om rör sig inte alls.

### C2 — signaturen är missad certifiering, inte falsk certifiering. **UNDERKÄND, 0/20, och inverterad.**

*Registrerad:* ökningen i ocertifierat-verkligt-behov överstiger ökningen i falskt-certifierat givande, i ≥ 15/20 frön.

| ökning vs. no_crisis (efter1) | |
|---|---|
| ocertifierat-verkligt-behov | **0,000** [0,000, 0,000] |
| falskt-certifierat givande | **0,732** [0,583, 0,808] |

Resultatet är inte en nära miss i den registrerade riktningen. Det är den **exakta motsatsen**, i full styrka. Den korrupta kärnan producerar *endast* falsk certifiering och *ingen* missad certifiering. Fyndet som ärvdes från piloterna — att ett system i certifieringsmisslyckande förlorar förmågan att känna igen verkligt behov snarare än att handla på lögner — var en artefakt av en kollapsande population, och det överlever inte en fungerande baslinje. §4.5 förklarar varför, och förklaringen är avsnittets verkliga resultat.

### C3 — det finns ett återhämtningsfönster. **UNDERKÄND.**

*Registrerad:* sann-informerat givande i det sena fönstret avtar monotont med återställningsfördröjning, och återställning vid fördröjning 100 är oskiljbar från ingen återställning.

| | överlevnad (sent) | sann-informerat (sent) |
|---|---|---|
| ingen kris | 100,0 | 1,000 [0,885, 1,000] |
| kris, ingen återställning | 100,0 | 0,472 [0,409, 0,552] |
| återställning vid +10 | 100,0 | 1,000 [0,875, 1,000] |
| återställning vid +25 | 100,0 | 1,000 [0,875, 1,000] |
| återställning vid +50 | 100,0 | 1,000 [0,875, 1,000] |
| återställning vid +100 | 100,0 | 1,000 [0,875, 1,000] |

ρ(fördröjning, återhämtning) = **0,046**. |återställning@100 − ingen återställning| = 0,528, mot en registrerad ribba på < 0,10.

**Reparation fungerar perfekt, vid varje testad fördröjning.** Ingen dör, och i samma ögonblick som kanalen återställs återupptas korrekt givande i full utsträckning. Det finns inget fönster. Detta var det enda genuint nya påstående som artikeln hade, och nollhypotesen gäller utan förbehåll.

Anledningen är strukturell, och §4.6 drar ut den: **en regelföljare har ingen tillit att förlora.** Dess givande är en funktion av den signal den ser nu, inte av någon historia med signalen. Den kan inte vilseledas till misstro, eftersom den inte litar — den efterlever. Policyhysteres kräver en policy som *lär sig*, och inläraren är det vi inte kunde bygga.

### C4 — en kris på en oanvänd kanal är inert. **UNDERKÄND, 1/20.**

*Registrerad:* `cert_crisis_unused_channel` är oskiljbar från `no_crisis` på alla certifieringsmått i det sena fönstret.

| sent fönster | no_crisis | oanvänd-kanal-kris |
|---|---|---|
| sann-informerat givande | 1,000 [0,885, 1,000] | 0,667 [0,576, 0,727] |
| certifieringsfel | 0,000 [0,000, 0,115] | 0,333 [0,273, 0,424] |

Den "oanvända" kanalen visar sig vara använd. Och anledningen är värd mer än kontrollen var: **huruvida en certifieringskanal är "använd" är en egenskap hos policyn, inte hos arkitekturen.** Kanalen identifierades som oanvänd eftersom *pilotens inlärda policy* inte agerade på den — DQN:n hade lärt sig att inte ge B till B-specialisten, som uppenbarligen har gott om B. Den skriptade policyn har inte lärt sig någonting. Den ger på *varje* certifierad signal för vilken den har överskott, och så är den exponerad på varje kanal som arkitekturen tillhandahåller.

Det generaliserar, och vi anger det som en institutionell läsning snarare än ett teorem:

> **En regelföljande institution är mer exponerad för certifieringskorruption än en lärande, eftersom den inte har någon inlärd skepticism.** Efterlevnad är en större attackyta än omdöme. Varje kanal en regelföljare är skyldig att agera på är en kanal genom vilken den kan felstyras; en inlärare beskär de kanaler som erfarenheten har lärt den att ignorera, och gör därmed ytan smalare — till priset av den rigiditet som Rapport XXI:s §3 varnade för. **[IP]**

## 4.5 Vad som faktiskt hände: översvämningsmekanismen **[R inom modellen]**

De fyra misslyckandena hänger samman. Ocertifierat verkligt behov är exakt noll under en kris som inverterar behovssignalen — vilket är absurt, tills man frågar vad inversionen faktiskt gör.

Agent 1:s A-signal är inverterad: den signalerar behov av A precis när den *har* A. De andra agenterna efterkommer. De ger den mer A. Dess lager av A *stiger* därför, och efter att ha stigit faller det aldrig under behovströskeln. **Den korrupta kanalen svälter inte specialisten. Den översvämmar den.**

Detta upptäcktes i efterhand, så det återregistrerades som en ny riktningsförutsägelse och kördes på tjugo nya frön: *under krisen stiger agent 1:s genomsnittliga lager av A och dess tid i verkligt behov faller.*

| agent 1 (B-specialist) | medellager-A, före | medellager-A, efter | steg i verkligt behov, före → efter |
|---|---|---|---|
| no_crisis | 0,930 | 0,980 | 24,6 → 18,4 |
| **kris** | 0,930 | **2,763** | 24,6 → **10,0** |

Bekräftat. Krisen nästan **tredubblar** specialistens lager av den resurs den inte kan skörda, och **halverar** dess tid i genuint behov.

Så nollan i C1 är inte en frånvaro av skada. Det är skada av ett slag som instrumentet inte kan se:

> **Den falska certifieringen föregriper det verkliga behov som den annars skulle ha maskerat.** Resurser felallokeras till en agent som inte behöver dem; eftersom den är överförsörjd slutar den agenten att registreras som behövande; och så löser systemets egen behovsdetektion aldrig ut. Patologin förstör evidensen för sig själv.

Styrningskonsekvensen är det skarpaste i denna artikel, och det är inte den vi föresatte oss att demonstrera:

> **Det mått en revisor skulle sträcka sig efter — *går någons verkliga behov ouppfyllt?* — avläses som en perfekt nolla medan certifieringskärnan är inverterad och resurser systematiskt felstyrs.** Institutionen misslyckas inte bara osynligt. Den misslyckas på ett sätt som får dess hälsoindikatorer att *förbättras*.

Detta är bekräftelsen av §3.4:s underliggande påstående, och det är starkare än den förutsägelse §3.4 faktiskt gjorde. §3.4 sade att protokollet skulle förbli intakt medan den kartläggning det protokollförde upphörde att motsvara världen — att en institution i certifieringsmisslyckande skulle se ut, inifrån, exakt som en institution i god ordning. Vad demonstrationen visar är värre: misslyckandet lämnar inte bara diagnostiken intakt, det *föder* den. Den specifika signatur §3.4 förutsåg (missad certifiering) är falsifierad. Det påstående som signaturen var tänkt att tjäna bekräftas av sin egen falsifiering.

## 4.6 Räckvidd: vad denna demonstration gör och inte gör anspråk på

Fastställt i §3.5 före körningen, och hedrat här.

**Den konverterar inte §3 från `[IP]` till `[R]`.** Kärnan korrumperas **exogent** — experimentatorn inverterar signalen. Demonstrationen visar vad som händer *när* en certifieringskärna misslyckas. Den visar inte ett system som genererar sitt eget kärnmisslyckande, och endogen generering är krav (b) i §3.2, på vilket hela Gödel-analogin står eller faller. §3 förblir `[IP]` och detta avsnitt tvättar det inte.

**Den kan inte testa policyhysteres överhuvudtaget.** C3:s nollresultat är verkligt men snävt: det säger att ett *regelföljande* system återhämtar sig omedelbart vid varje fördröjning. Det säger ingenting om huruvida ett *lärande* system, efter att ha lärts att dess certifieringskanal ljuger, kan läras om att den talar sanning — och huruvida det finns en fördröjning bortom vilken det inte kan. Det är den fråga §3.4 egentligen handlar om, det är den fråga som skulle ha gjort C3 till ett styrningsfynd snarare än ett mekaniskt sådant, och **vi kunde inte ställa den, eftersom vi inte kunde bygga en regulator som lär sig att samarbeta från första början.** De registrerade inlärarmisslyckandena (§4.3) är därför inte en fotnot till C3. De är anledningen till att C3 är icke-informativ.

**Korruptionen är total, inte brusig.** Signalen är inverterad, inte degraderad. En partiellt otillförlitlig kanal — en som är rätt 70% av tiden — skulle kunna bete sig helt annorlunda, och skulle mycket väl kunna producera den missade certifiering som inversion inte gör. Ingenting här talar till det.

**En miljö, tre agenter, en kanal, en specialiseringsstruktur.** Översvämningsmekanismen beror på att mottagaren är *oförmögen* att skörda det den får för mycket av. Huruvida den generaliserar till rikare komplementaritetsstrukturer är en förmodan som detta resultat stöder, inte ett påstående det bevisar.

## 4.7 Sammanfattning av registrerade utfall

| | registrerad förutsägelse | utfall |
|---|---|---|
| GRIND | baslinje stationär, adaptiv regulator | **UNDERKÄND ×2** — jämvikt utan handel; skriptad gren substituerad |
| C1 | kris ≠ vanlig störning | **UNDERKÄND** 0/20 — inget ouppfyllt behov alls |
| C2 | signatur är missad certifiering | **UNDERKÄND** 0/20 — inverterad; signaturen är *falsk* certifiering |
| C3 | det finns ett återhämtningsfönster | **UNDERKÄND** — reparation fungerar vid varje fördröjning; ρ = 0,046 |
| C4 | oanvänd kanal är inert | **UNDERKÄND** 1/20 — "oanvänd" är en egenskap hos policyn, inte arkitekturen |
| — | *(post‑hoc, återregistrerad, 20 nya frön)* översvämning | **BEKRÄFTAD** — medellager-A 0,93 → 2,76; verkligt behov halverat |

Fem registrerade misslyckanden och en bekräftad mekanism. Vi rapporterar hellre detta än en demonstration som höll med oss, och anledningen ryms i resultatet: **en apparat som rapporterar perfekt hälsa under en korrupt kärna är exakt det objekt denna artikel handlar om.** Vi byggde en av misstag, och trodde den sedan nästan.# §4 — Den registrerade demonstrationen: en certifieringskris

**Alla fyra registrerade förutsägelser misslyckas.** Likaså misslyckas två registrerade försök att bygga den regulator som demonstrationen var utformad kring. Vad som överlever är en mekanism vi inte förutsåg, bekräftad i en ny registrerad körning, och den är mer användbar för argumentet i §3 än ett rent godkännande hade varit — eftersom den falsifierar §3.4:s specifika förutsägelse samtidigt som den, starkare än vi hade någon rätt att förvänta oss, bekräftar det påstående som förutsägelsen var tänkt att tjäna.

Detta avsnitt rapporterar misslyckandena först och i sin helhet, eftersom misslyckandena är det som licensierar mekanismen.

## 4.1 Miljön, och två defekter som upptäcktes i den

Tre agenter på ett 5×5-rutnät. Agent 0 skördar resurs A och kan inte skörda B; agent 1 skördar B och kan inte skörda A; agent 2 skördar båda, ineffektivt. Konsumtion kräver en enhet av *varje*. Så de två specialisterna kan inte överleva utan gåvor, och gåvor styrs av en **certifieringskanal**: varje agent sänder ut en behovssignal, och en agent med överskott ger till en angränsande granne som signalerar behov av det den har.

Den kanalen är certifieringskärnan i §3, i miniatyr. Det är den procedur genom vilken systemet fastställer att ett externt faktum — *denna agent behöver A* — förelåg.

Två defekter måste åtgärdas innan något kunde mätas, och båda rapporteras eftersom båda var levande i tidigare arbete.

**Utvärderingshorisonten överskred världens bärkraft.** Den första registrerade körningen utvärderade under 500 steg och dess insläppsgrind (§4.3) utlöste omedelbart: baslinjen utan kris visade 0,000 informerat givande i det sena fönstret. Skriptade agenter — en fast policy utan något att avlära — gick från 99,4% överlevnad till total utrotning under *ingen kris alls*, och varje kristillstånd returnerade identiska medianer eftersom alla mätte en död population.

**Orsaken var en degenererad handling, inte knapphet.** Skörd lyckades närhelst cellen innehöll någon resurs alls; eftersom kapacitetskartan är klippt vid ett golv på 0,01 och återväxer varje steg, är det villkoret sant på *varje* cell, alltid. En agent som drev in på en kal cell kunde skörda den för evigt, och skrapa hundradelar av en enhet, och aldrig resa hem. Spårning bekräftade det: A-specialisten tillbringade sina sista 120 steg parkerad på en cell med en A-kapacitet på 0,01, skördade 112 gånger, och svalt där medan rutnätet låg mättat. Baslinjekalibrering visade sedan att kollapsen var okänslig för en femfaldig förändring i återväxt — vilket är vad som uteslöt knapphet, och vad som identifierade attraktorn.

Lösningen är en **regel**, inte en parameter: skörd kräver en cell som innehåller minst 0,5 av resursen. Återväxt och konsumtionsvinst lämnades vid sina ursprungliga värden. Ingenting rattades mot ett utfall; en degenererad handling togs bort, och världen visade sig ha varit stationär hela tiden.

**Detta retrospektivdiagnostiserar tidigare arbete.** `13-certification-crisis`-piloterna utvärderade till 400 steg och visade vad som protokollfördes som en "instabil sen baslinje", då läst som en trimningsvackling. Det var ingen vackling. Det var denna kollaps, ett fönster tidigare. **Piloternas resultat mättes därför på en döende population, och den signatur av missad certifiering som vi hade ärvt från dem som motivation för C2 var inte tolkningsbar.** Det är därför C2 återregistreras nedan snarare än antas, och, som det visar sig, varför den misslyckas.

## 4.2 Betingelser

| betingelse | vad som är trasigt |
|---|---|
| `no_crisis` | ingenting (baslinje) |
| `ordinary_disturbance` | resurslandskapet (återväxten halverad under 100 steg); certifieringen intakt |
| `cert_crisis_used_channel` | agent 1:s A-behovssignal är **inverterad**: den signalerar behov av A precis när den *har* A |
| `cert_crisis_unused_channel` | agent 1:s B-behovssignal är inverterad — en kanal som pilotens inlärda policy inte agerade på |
| `reset_d ∈ {10, 25, 50, 100}` | kris, därefter repareras kärnan efter fördröjning *d* |

Kris vid steg 200. Fönster: före [0, 200), efter1 [200, 250), sent [400, 500). Tjugo frön. Medianer och IQR genomgående.

## 4.3 Insläppsgrinden, och regulatorn vi inte kunde bygga

Grinden registrerades i förväg: **krisjämförelsen tolkas överhuvudtaget inte om inte baslinjen utan kris först är stationär** — överlevnad, samarbetsgrad och sann-informerat givande platta över horisonten. Ett grindmisslyckande är ett rapporterbart utfall, inte ett hinder.

Den utlöste tre gånger.

| regulator | grind |
|---|---|
| skriptad (fast regel) | **17/20 — godkänd** |
| DQN, frusen vid utvärdering | 4/20 |
| DQN, adaptiv under utvärdering | 0/20 |
| DQN, adaptiv, med reparerat utforskningsschema | 0/20 |

Den inlärda regulatorn **kollapsar till en jämvikt utan handel**. I den frusna konfigurationen landar fjorton av tjugo frön på exakt 33,3% överlevnad — en agent av tre — och den överlevande är generalisten, som skördar båda resurserna och inte behöver någon. Båda specialisterna svälter. Under de adaptiva konfigurationerna dör vanligtvis även generalisten.

Vi försökte detta två gånger och slutade sedan, under en stoppregel fastställd före det andra försöket. Anledningen till att sluta betyder mer än misslyckandet. **Varje ytterligare konfiguration skulle ha varit ett sökande efter en baslinje som producerar det resultat artikeln vill ha, och vid den punkten är förhandsregistreringen dekoration.** Två registrerade inlärarmisslyckanden rapporteras som resultat.

Detta har en konsekvens som sträcker sig in i §3, och vi tar upp den i §4.6: demonstrationen genomförs därför på en **regelföljande** institution, inte en lärande, och det finns saker en regelföljare strukturellt inte kan visa.

*(En parentes värd en mening, eftersom det är ett litet skämt på denna artikels bekostnad. Inläraren överlevde* bättre *under en feljusterad belöning — en platt bonus för konsumtion, oavsett faktiskt erhållen energi — än under den korrigerade som endast betalar vad som erhålls. Proxyvariabeln var en bättre träningssignal än målet, eftersom den var tätare. Vi rapporterar detta eftersom det roade oss och eftersom Goodhart, som §5 i Rapport XX härleder, skulle ha förväntat sig det.)*

## 4.4 De fyra registrerade förutsägelserna, och deras misslyckande

### C1 — en certifieringskris är inte en vanlig störning. **UNDERKÄND, 0/20.**

*Registrerad:* ocertifierat-verkligt-behov stiger under `cert_crisis_used_channel` och inte under `ordinary_disturbance`, med ≥ 0,10, i ≥ 16/20 frön.

| ocertifierat-verkligt-behov (efter1) | |
|---|---|
| no_crisis | 0,000 [0,000, 0,000] |
| ordinary_disturbance | 0,000 [0,000, 0,000] |
| **cert_crisis_used_channel** | **0,000 [0,000, 0,000]** |

Certifieringskrisen producerar **inget ouppfyllt behov överhuvudtaget**. Detta är inte en svag effekt eller en effekt under tröskeln; det är en exakt nolla, i varje frö. Förutsägelsen är inte bara ouppfylld — den storhet den handlade om rör sig inte alls.

### C2 — signaturen är missad certifiering, inte falsk certifiering. **UNDERKÄND, 0/20, och inverterad.**

*Registrerad:* ökningen i ocertifierat-verkligt-behov överstiger ökningen i falskt-certifierat givande, i ≥ 15/20 frön.

| ökning vs. no_crisis (efter1) | |
|---|---|
| ocertifierat-verkligt-behov | **0,000** [0,000, 0,000] |
| falskt-certifierat givande | **0,732** [0,583, 0,808] |

Resultatet är inte en nära miss i den registrerade riktningen. Det är den **exakta motsatsen**, i full styrka. Den korrupta kärnan producerar *endast* falsk certifiering och *ingen* missad certifiering. Fyndet som ärvdes från piloterna — att ett system i certifieringsmisslyckande förlorar förmågan att känna igen verkligt behov snarare än att handla på lögner — var en artefakt av en kollapsande population, och det överlever inte en fungerande baslinje. §4.5 förklarar varför, och förklaringen är avsnittets verkliga resultat.

### C3 — det finns ett återhämtningsfönster. **UNDERKÄND.**

*Registrerad:* sann-informerat givande i det sena fönstret avtar monotont med återställningsfördröjning, och återställning vid fördröjning 100 är oskiljbar från ingen återställning.

| | överlevnad (sent) | sann-informerat (sent) |
|---|---|---|
| ingen kris | 100,0 | 1,000 [0,885, 1,000] |
| kris, ingen återställning | 100,0 | 0,472 [0,409, 0,552] |
| återställning vid +10 | 100,0 | 1,000 [0,875, 1,000] |
| återställning vid +25 | 100,0 | 1,000 [0,875, 1,000] |
| återställning vid +50 | 100,0 | 1,000 [0,875, 1,000] |
| återställning vid +100 | 100,0 | 1,000 [0,875, 1,000] |

ρ(fördröjning, återhämtning) = **0,046**. |återställning@100 − ingen återställning| = 0,528, mot en registrerad ribba på < 0,10.

**Reparation fungerar perfekt, vid varje testad fördröjning.** Ingen dör, och i samma ögonblick som kanalen återställs återupptas korrekt givande i full utsträckning. Det finns inget fönster. Detta var det enda genuint nya påstående som artikeln hade, och nollhypotesen gäller utan förbehåll.

Anledningen är strukturell, och §4.6 drar ut den: **en regelföljare har ingen tillit att förlora.** Dess givande är en funktion av den signal den ser nu, inte av någon historia med signalen. Den kan inte vilseledas till misstro, eftersom den inte litar — den efterlever. Policyhysteres kräver en policy som *lär sig*, och inläraren är det vi inte kunde bygga.

### C4 — en kris på en oanvänd kanal är inert. **UNDERKÄND, 1/20.**

*Registrerad:* `cert_crisis_unused_channel` är oskiljbar från `no_crisis` på alla certifieringsmått i det sena fönstret.

| sent fönster | no_crisis | oanvänd-kanal-kris |
|---|---|---|
| sann-informerat givande | 1,000 [0,885, 1,000] | 0,667 [0,576, 0,727] |
| certifieringsfel | 0,000 [0,000, 0,115] | 0,333 [0,273, 0,424] |

Den "oanvända" kanalen visar sig vara använd. Och anledningen är värd mer än kontrollen var: **huruvida en certifieringskanal är "använd" är en egenskap hos policyn, inte hos arkitekturen.** Kanalen identifierades som oanvänd eftersom *pilotens inlärda policy* inte agerade på den — DQN:n hade lärt sig att inte ge B till B-specialisten, som uppenbarligen har gott om B. Den skriptade policyn har inte lärt sig någonting. Den ger på *varje* certifierad signal för vilken den har överskott, och så är den exponerad på varje kanal som arkitekturen tillhandahåller.

Det generaliserar, och vi anger det som en institutionell läsning snarare än ett teorem:

> **En regelföljande institution är mer exponerad för certifieringskorruption än en lärande, eftersom den inte har någon inlärd skepticism.** Efterlevnad är en större attackyta än omdöme. Varje kanal en regelföljare är skyldig att agera på är en kanal genom vilken den kan felstyras; en inlärare beskär de kanaler som erfarenheten har lärt den att ignorera, och gör därmed ytan smalare — till priset av den rigiditet som Rapport XXI:s §3 varnade för. **[IP]**

## 4.5 Vad som faktiskt hände: översvämningsmekanismen **[R inom modellen]**

De fyra misslyckandena hänger samman. Ocertifierat verkligt behov är exakt noll under en kris som inverterar behovssignalen — vilket är absurt, tills man frågar vad inversionen faktiskt gör.

Agent 1:s A-signal är inverterad: den signalerar behov av A precis när den *har* A. De andra agenterna efterkommer. De ger den mer A. Dess lager av A *stiger* därför, och efter att ha stigit faller det aldrig under behovströskeln. **Den korrupta kanalen svälter inte specialisten. Den översvämmar den.**

Detta upptäcktes i efterhand, så det återregistrerades som en ny riktningsförutsägelse och kördes på tjugo nya frön: *under krisen stiger agent 1:s genomsnittliga lager av A och dess tid i verkligt behov faller.*

| agent 1 (B-specialist) | medellager-A, före | medellager-A, efter | steg i verkligt behov, före → efter |
|---|---|---|---|
| no_crisis | 0,930 | 0,980 | 24,6 → 18,4 |
| **kris** | 0,930 | **2,763** | 24,6 → **10,0** |

Bekräftat. Krisen nästan **tredubblar** specialistens lager av den resurs den inte kan skörda, och **halverar** dess tid i genuint behov.

Så nollan i C1 är inte en frånvaro av skada. Det är skada av ett slag som instrumentet inte kan se:

> **Den falska certifieringen föregriper det verkliga behov som den annars skulle ha maskerat.** Resurser felallokeras till en agent som inte behöver dem; eftersom den är överförsörjd slutar den agenten att registreras som behövande; och så löser systemets egen behovsdetektion aldrig ut. Patologin förstör evidensen för sig själv.

Styrningskonsekvensen är det skarpaste i denna artikel, och det är inte den vi föresatte oss att demonstrera:

> **Det mått en revisor skulle sträcka sig efter — *går någons verkliga behov ouppfyllt?* — avläses som en perfekt nolla medan certifieringskärnan är inverterad och resurser systematiskt felstyrs.** Institutionen misslyckas inte bara osynligt. Den misslyckas på ett sätt som får dess hälsoindikatorer att *förbättras*.

Detta är bekräftelsen av §3.4:s underliggande påstående, och det är starkare än den förutsägelse §3.4 faktiskt gjorde. §3.4 sade att protokollet skulle förbli intakt medan den kartläggning det protokollförde upphörde att motsvara världen — att en institution i certifieringsmisslyckande skulle se ut, inifrån, exakt som en institution i god ordning. Vad demonstrationen visar är värre: misslyckandet lämnar inte bara diagnostiken intakt, det *föder* den. Den specifika signatur §3.4 förutsåg (missad certifiering) är falsifierad. Det påstående som signaturen var tänkt att tjäna bekräftas av sin egen falsifiering.

## 4.6 Räckvidd: vad denna demonstration gör och inte gör anspråk på

Fastställt i §3.5 före körningen, och hedrat här.

**Den konverterar inte §3 från `[IP]` till `[R]`.** Kärnan korrumperas **exogent** — experimentatorn inverterar signalen. Demonstrationen visar vad som händer *när* en certifieringskärna misslyckas. Den visar inte ett system som genererar sitt eget kärnmisslyckande, och endogen generering är krav (b) i §3.2, på vilket hela Gödel-analogin står eller faller. §3 förblir `[IP]` och detta avsnitt tvättar det inte.

**Den kan inte testa policyhysteres överhuvudtaget.** C3:s nollresultat är verkligt men snävt: det säger att ett *regelföljande* system återhämtar sig omedelbart vid varje fördröjning. Det säger ingenting om huruvida ett *lärande* system, efter att ha lärts att dess certifieringskanal ljuger, kan läras om att den talar sanning — och huruvida det finns en fördröjning bortom vilken det inte kan. Det är den fråga §3.4 egentligen handlar om, det är den fråga som skulle ha gjort C3 till ett styrningsfynd snarare än ett mekaniskt sådant, och **vi kunde inte ställa den, eftersom vi inte kunde bygga en regulator som lär sig att samarbeta från första början.** De registrerade inlärarmisslyckandena (§4.3) är därför inte en fotnot till C3. De är anledningen till att C3 är icke-informativ.

**Korruptionen är total, inte brusig.** Signalen är inverterad, inte degraderad. En partiellt otillförlitlig kanal — en som är rätt 70% av tiden — skulle kunna bete sig helt annorlunda, och skulle mycket väl kunna producera den missade certifiering som inversion inte gör. Ingenting här talar till det.

**En miljö, tre agenter, en kanal, en specialiseringsstruktur.** Översvämningsmekanismen beror på att mottagaren är *oförmögen* att skörda det den får för mycket av. Huruvida den generaliserar till rikare komplementaritetsstrukturer är en förmodan som detta resultat stöder, inte ett påstående det bevisar.

## 4.7 Sammanfattning av registrerade utfall

| | registrerad förutsägelse | utfall |
|---|---|---|
| GRIND | baslinje stationär, adaptiv regulator | **UNDERKÄND ×2** — jämvikt utan handel; skriptad gren substituerad |
| C1 | kris ≠ vanlig störning | **UNDERKÄND** 0/20 — inget ouppfyllt behov alls |
| C2 | signatur är missad certifiering | **UNDERKÄND** 0/20 — inverterad; signaturen är *falsk* certifiering |
| C3 | det finns ett återhämtningsfönster | **UNDERKÄND** — reparation fungerar vid varje fördröjning; ρ = 0,046 |
| C4 | oanvänd kanal är inert | **UNDERKÄND** 1/20 — "oanvänd" är en egenskap hos policyn, inte arkitekturen |
| — | *(post‑hoc, återregistrerad, 20 nya frön)* översvämning | **BEKRÄFTAD** — medellager-A 0,93 → 2,76; verkligt behov halverat |

Fem registrerade misslyckanden och en bekräftad mekanism. Vi rapporterar hellre detta än en demonstration som höll med oss, och anledningen ryms i resultatet: **en apparat som rapporterar perfekt hälsa under en korrupt kärna är exakt det objekt denna artikel handlar om.** Vi byggde en av misstag, och trodde den sedan nästan.
