## Appendix A. Miljö, agent och hyperparametrar

**Miljö.** En 17×15 rutvärld (interiör 11×15) med layouten nedan, där `S` är starten, `1` träningsmålet (G1), `#` väggar, `g` och `2` de tretton perifera målen, ängen som upptar raderna 1–7 och periferin raderna 8–15. En enda öppning i rad 8 (flaskhalsen) och en enda dörr in i det inhägnade fjärrområdet är de enda vägarna till periferin.

```
###############
#.............#
#.............#
#......1......#
#.....S.......#
#.............#
#.............#
#.............#
#######.#######
#.............#
#.###########.#
#.#gg.....gg#.#
#..gg..2..gg#.#
#.#gg.....gg#.#
#.###########.#
#.............#
###############
```

Fyra deterministiska handlingar (upp, ner, vänster, höger); väggar blockerar; övergången är i övrigt identitet-plus-förflyttning. Centrala och perifera regioner definieras av rad: ängsrader ≤ 7, perifera rader ≥ 8.

**Agent.** Tabulär Q-inlärning, γ = 0,99, α = 0,5, ε-girigt beteende med ε = 0,15 om inte annat sveps, 4000 episoder om upp till 120 steg, fast start om inte den strukturella regimen används. Basbelöning är −0,01 per steg och +1 vid G1; Experiment 2 lägger till −c_b per steg som tas i periferin. Tabulär (snarare än en neural agent) är ett medvetet val så att varje förlust av räckvidd kan tillskrivas målet snarare än funktionsapproximation.

**Proxy och dess optimering.** Proxyn är Shannon-entropin (nats) för agentens besöksfördelning över rutor. Den snedvridna tilingen löser upp ängen vid m_meadow kategorier (en per cell i Experiment 1; m_meadow = 13 i Experiment 2) och periferin vid k_far kategorier (en i Experiment 1; svept i Experiment 2), tilldelade genom sammanhängande uppdelning om inte den slumpmässiga partitionskontrollen används. Arm B lägger till en intrinsisk belöning λ_t · (antal(ruta) + 1)^(−1/2), där antalet är kumulativt och λ_t avklingar linjärt till noll vid 70 % av träningen, så att agenten förblir en kompetent lösare av G1 (verifierat per betingelse).

**Utövbar räckvidd.** Efter träning bildar agentens upplevda övergångar en riktad graf; ett perifert mål är *utövbart* omm en riktad väg till det existerar från den gemensamma starten enbart med användning av upplevda övergångar. Eftersom miljön är deterministisk och den inlärda modellen är exakt på upplevda övergångar, är grafnåbarhet från starten ekvivalent med en planerbar-och-utförbar rutt. Räckvidd är andelen av de tretton perifera målen som är nåbara på detta sätt.

**OOD-anpassning (Experiment 1).** Målet flyttas till ett perifert tillstånd och varje arm anpassar sig från den gemensamma starten genom Dyna-Q varmstartad med sin bevarade övergångsmodell (planeringsbudget 10 säkerhetskopior per verkligt steg, ε = 0,2, stegbudget 20000). Den rapporterade kostnaden är antalet verkliga miljösteg för att först nå det skiftade målet.

**Strukturell regim.** Episoder påbörjas från tillstånd dragna likformigt över det fria tillståndsrummet snarare än från den fasta starten; uppgiftsbelöningen är oförändrad och proxyn optimeras inte.

**Inlärd representation (Experiment 3).** Besöksantal samlas in under varje dataregim (enbart-uppgift ε = 0,15 från den fasta starten; passiv ε = 0,9; strukturell likformig-slumpmässig start; blandad alternerande), därefter producerar en viktad k-means (viktad k-means++-initialisering, upp till 60 Lloyd-iterationer) över cellkoordinater med vikter lika med besöksantal K kategori-etiketter. Etiketterna blir tilingen; effektiv perifer upplösning är antalet distinkta etiketter bland perifera celler. K ∈ {52, 78, 104} testades; huvudfiguren använder K = 78.

**Frön.** Sex frön per betingelse i upplösningssvepet och Experiment 3; tolv i de utövbara räckvidds- och anpassningskörningarna i Experiment 1; åtta i de regenererade panelerna för passiv/optimeringsfigur. Mättade och tomma betingelser är i praktiken fröinvarianta; övergångsbetingelser är det inte, och deras intervall rapporteras i enlighet därmed.

---

