## 4. Resultat

### 4.1 Validering

Samtliga åtta förpliktelser uppfylldes (Tabell 1). m = 0-identiteten höll till maskinprecision (0 misslyckanden över panelen), vilket bekräftar att den förskjutna lösaren reduceras exakt till Grind 1 och att modifieringen är begränsad till förskjutet beteende. Dominans höll med noll paritetsöverträdelser. De exakt-inerta planen returnerade A_π = 0 till maskinprecision för alla m och båda geometrierna. Den oberoende H = 2-uppräkningen gav en modellkonjugeringsspridning på 4 × 10⁻¹⁶ — modellen är exakt permutationssymmetrisk — medan den interpolerade lösarens konjugeringsspridning, trots att den inte var maskinnoll (Kuhn-interpolationen är koordinatordningsberoende), krympte med förfining (3,97 × 10⁻² → 1,73 × 10⁻² → 1,69 × 10⁻³ vid G = 18/27/40 på ankaret vid m = ½) och låg ungefär tre storleksordningar under symmetrienveloppen. Reduktionen till en representant per geometri är därför giltig, och lösarens spridning bekräftas som interpolationsbias snarare än en bruten modellsymmetri.

![Grind-1 aktiveringsyta för återkoppling](/working-papers/images/requisite-alignment/gate1-activation-surface.png)

**Figur 1.** Grind-1 aktiveringsyta på snittet (signaltillförlitlighet r × återkopplingskostnad c) vid p = 0,94, q = 1,0. Köpt återkoppling har löst positivt värde (aktiv) över en sammanhängande hög-tillförlitlighetsregion; när anskaffningskostnaden stiger faller värdet under upplösning (nollkompatibel) eller cellen är ett strukturellt plan (exakt-inert). Detta fastställer den baslinje som förskjutningsstudien betingar på: en betydande region där matchad återkoppling är värd sin kostnad.

**Tabell 1. Valideringsförpliktelser (V1–V8) och utfall.**

| # | Förpliktelse | Utfall |
|---|---|---|
| V1 | m = 0 reduceras exakt till den matchade Grind-1-lösningen | GODKÄND — 0 misslyckanden över panelen; förskjuten lösare = matchad baslinje till maskinprecision vid m = 0 |
| V2 | Dominans A_π ≥ 0 (löst paritet kräver intervall A_π + ε < 0) | GODKÄND — 0 paritetsöverträdelser; min marginal A_π + ε_D = +0,0014 |
| V3 | Exakt-inerta plan förblir A_π = 0 ∀m, båda geometrierna | GODKÄND — max \|A_π\| = 0 över planets delmängd × geometrier × m, beräknad genom kanalkoden |
| V4 | Implementerade likelihoods reproducerar den analytiska formen | GODKÄND — tre nivåer för m ∈ (0,1)\\{½}, två-nivåers partition vid m = ½, matchad två-nivå vid m = 0; maskinprecision |
| V5 | Icke-representerbarhet med någon skalär tillförlitlighet q | GODKÄND — instansierad vid m = 0,25 (tre nivåer) och m = ½ ({a, π(a)} mot resten) |
| V6 | Konjugeringssymmetrispridning inom den förskjutna policy-enveloppen | GODKÄND — lösarens spridning krymper med förfining (3,97e-2 → 1,73e-2 → 1,69e-3 vid G = 18/27/40) och ligger ~10³× under σ_sym |
| V7 | Oberoende exakt H = 2-uppräkning (ingen delad interpolationskärna) | GODKÄND — modellkonjugeringsspridning 4,4e-16 (exakt symmetrisk); q = ½-celler A = 0 |
| V8 | Ankar-och-plan-pilot före interiörkörningen | GODKÄND — S1 och V3 exakt på pilot |

### 4.2 Det primära utfallet: dämpning, enhällig där den är löst

Över den kvalificerade mängden om 592 betingelser (74 celler × 4 förskjutningsnivåer skilda från noll × 2 geometrier) visade **486 (82,1 %) löst, substantiell dämpning; 0 visade berikning; 0 visade praktisk ekvivalens; och 106 (17,9 %) var numeriskt icke-konvergenta** (Tabell 2). Under den registrerade klassificeraren är detta otvetydigt ett **enbart-dämpnings**-utfall (f_att = 0,821, f_enr = 0). De 106 olösta betingelserna är, utan undantag, icke-konvergenta policylösningar snarare än konvergerade men tvetydiga effekter: **bland de 486 betingelser vars numerik löstes är dämpningen enhällig (486/486).** Ingen löst betingelse visade att värdet av förskjuten återkoppling höll sig stabilt eller ökade.

Förskjuten återkoppling som förblir informativ — bevisligen icke-reducerbar till en förändring av kanaltillförlitligheten (§3.4) — förlorar icke desto mindre betydande beslutsvärde när den utvärderar fel mål. Detta är en distinkt effekt från Grind 1:s tillförlitlighetsaxel, inte en omhärledning av den.

![D_π över panelen](/working-papers/images/requisite-alignment/dpi-panel-heatmap.png)

**Figur 2.** Tecknad fördelsförändring D_π över panelen (π₄), celler ordnade efter matchat värde (högt till lågt), kolumner de fyra förskjutningsnivåerna; grått markerar icke-konvergenta eller olösta betingelser. Dämpning (D_π < 0) fördjupas med förskjutningen över i princip hela panelen, utan någon löst cell som visar D_π ≥ 0.

**Tabell 2. Utfallsklassificering över den kvalificerade mängden (E = 592 = 74 celler × 4 förskjutningsnivåer × 2 geometrier).**

| Klass | Antal | Andel av E |
|---|---|---|
| Dämpning-substantiell (D_π + ε_D ≤ −δ_min) | 486 | 82,1 % |
| Berikning-substantiell (D_π − ε_D ≥ +δ_min) | 0 | 0 % |
| Praktiskt ekvivalent (\|D_π\| + ε_D < δ_min) | 0 | 0 % |
| Effekt-olöst (konvergerad, intervall spänner över δ_min) | 0 | 0 % |
| Numeriskt-olöst-icke-konvergent | 106 | 17,9 % |
| **Bland lösta betingelser** | **486 / 486 dämpning** | **100 %** |

δ_min = 0,05 · median(A över panelen) = 0,648. Globalt utfall: **enbart-dämpning** (f_att = 0,821 ≥ 0,1, f_enr = 0).

De 106 icke-konvergenta betingelserna är jämnt fördelade över förskjutningsnivåerna (26/26/24/30 vid m = 0,25/0,5/0,75/1,0) och balanserade över geometrierna (π₄ 51, π₂₊₂ 55), och berör 19 av de 74 cellerna. En pluralitet — 50 av 106 (47 %) — faller i de två lägsta signal-tillförlitlighetsraderna (r = 0,25, 0,57): raderna där den *matchade* Grind-1-baslinjen själv var minst löst. Den förskjutna icke-konvergensen koncentreras således där det underliggande problemet redan var numeriskt svårast, inte där förskjutningen är störst — fördelningen per m (26/26/24/30 över m = 0,25/0,5/0,75/1,0) är nästan platt och uppdelningen per geometri (π₄ 51, π₂₊₂ 55) är balanserad. Detta är signaturen för ärvd svårighet snarare än en förskjutningsspecifik artefakt: de förskjutna lösningarna misslyckas med att konvergera i samma region som de matchade lösningarna ansträngdes, och jämnt över den parameter vars effekt är under studie. Enligt den frusna icke-eskaleringsdisciplinen censureras dessa betingelser, de drivs inte till finare rutnät, och de stöder ingen slutsats åt något håll.

### 4.3 Värdeprofilen är icke-monoton i förskjutning

Den tecknade fördelsförändringen D_π(m) är inte monoton i m. Över panelen sjunker den till ett minimum nära m = 0,5 — den maximalt tvetydiga blandningen, där jämförelsen är lika sannolik att utvärdera a eller π(a) — och återhämtar sig delvis mot m = 1, där kanalen blir en ren tillförlitlighets-q-signal om den enda förskjutna klassen π(a) och därmed återvinner informativitet om ett fast (om än felaktigt) mål. Till exempel, vid cell (1,6,6,3) ger 4-cykeln D_π = −11,5, −24,4, −20,7, −8,6 vid m = 0,25, 0,5, 0,75, 1,0 (Figur, höger panel). Monoton avklingning antogs varken eller observerades; återhämtningen mot full förskjutning är en direkt konsekvens av mekanismens struktur och registrerades som en möjlig form i förväg.

### 4.4 Förskjutningens geometri spelar roll, med en teckenvändning

Geometriberoendet är **fastställt** genom det registrerade kriteriet: kontrasten G(m) = D_π₄ − D_π₂₊₂ klarar δ_min på fem angränsande cellpar, varav tre vid m = 0,5 — (1,5,6,3)↔(1,6,6,3), (1,6,6,3)↔(2,6,6,3), och (1,6,4,0)↔(1,6,4,1) — med mönstret replikerat vid m = 0,25 och m = 0,75. Effekten är rumsligt koherent, inte en spridning av isolerade betingelser.

Dess struktur är artikelns centrala fynd. Tecknet för geometrikontrasten **vänder med förskjutningssannolikheten** (Figur, vänster panel): bland lösta betingelser är det enhälligt positivt vid låg förskjutning (3 av 3 vid m = 0,25; 6 av 6 vid m = 0,5 — 4-cykeln bevarar mer värde än dubbeltranspositionen), därefter enhälligt negativt vid m = 0,75 (0 av 2 positiva), och splittrat vid m = 1,0. Mekanismen är synlig i de parade D_π(m)-profilerna: båda geometrierna dippar till en dal vid m = 0,5 men dubbeltranspositionen dippar djupare (π₄ −24,4 mot π₂₊₂ −28,4 vid cell (1,6,6,3)), och när förskjutningen löses mot en ren enkelmåls-kanal korsar de två profilerna varandra. Två förskjutningar av *lika sannolikhet men olika geometri* medför således olika — och, över förskjutningsintervallet, motsatt ordnade — kostnader för återkopplingens värde.

Värdet av en informativ signal beror på geometrin hos den latenta distinktion den rapporterar, inte bara på hur tillförlitligt eller hur ofta den rapporterar. En signal kan bära oförminskad information och förbli korrekt modellerad av en optimal regulator, men ändå förlora sitt värde eftersom den partitionerar det dolda tillståndet relativt fel interventionsmål — och formen på den förlusten beror på *vilket* fel mål, med en överkorsning när förskjutningen fördjupas.

![Geometrikontrast och förskjutningsprofiler](/working-papers/images/requisite-alignment/geometry-signflip.png)

**Figur 3.** *(Vänster)* Tecken för geometrikontrasten G(m) = D_π₄ − D_π₂₊₂ per förskjutningssannolikhet, räknat över löst-substantiella betingelser: enhälligt positiv vid m = 0,25 och 0,5 (fyrcykeln bevarar mer värde), vänder till negativ vid m = 0,75, splittrad vid m = 1,0. *(Höger)* Representativa tecknade fördelsförändringsprofiler D_π(m) för cell (1,6,6,3), båda geometrierna, som visar den icke-monotona dalen vid m = 0,5 och överkorsningen när förskjutningen löses mot en enkelmåls-kanal. Data frusna i `es22_gate2_adjudicated.json`.

### 4.5 Berikning var möjlig men inträffade inte

Designen tillät berikning — Blackwell-ojämförbarheten hos de förskjutna och matchade kanalerna innebär att förskjuten återkoppling i princip skulle kunna bära mer beslutsrelevant information än matchad återkoppling om någon sekundär latent variabel, vilket ger A_π > A_matchad. Ingen löst betingelse på denna panel visade det. Detta är ett ärligt negativt utfall på en registrerad möjlighet, inte ett utfall som designen uteslöt: den ojämförbarhet som gör berikning *möjlig* gör inte att den *inträffar* i detta kontrollproblem under dessa förluster.

---
