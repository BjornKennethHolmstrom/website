# Appendix C — Fallkodningsprotokoll

---

## C.1 Syfte och registreringsdisciplin

Detta protokoll styr den lilla‑N‑kodningsstudien i Del VI. Dess disciplin, registrerad i §6.0, implementeras här som fyra regler:

1. Protokollversionen, fallistan och variabeldefinitionerna fryses, med datum, innan något trohetsvärde tilldelas.
2. Kodningen fortskrider i den blindade ordningen i C.6.
3. Varje upptaget fall rapporteras i den publicerade tabellen, inklusive fall vars värden generar förutsägelsen.
4. Avvikelser från protokollet tillåts endast med en loggad post i C.9 som anger vad som ändrades, när och varför — innan ändringen tillämpas.

## C.2 Fallupptagning

Ett fall är ett policydirektiv som uppfyller samtliga av:

1. **Fast innehåll:** en identifierbar myndighet fastställde direktivets operativa innehåll vid ett daterbart tillfälle (författning, programbeslut, centralbankslanseringsbeslut).
2. **Kvantifierat mål:** direktivet anger, eller officiella dokument samtida med det anger, ett kvantifierat mål (jobb, tjänster, täckning, arbetsdagar) mot vilket leverans kan mätas. Där målet uttryckligen förklarades omätbart av revisionsinstitutionen (Universal Credits sysselsättningsmål), är fallet upptagbart endast med de ersättningsmått för leverans som namnges vid upptagning (C.4, Tabell C-1).
3. **Tredjeparts utfallsdokumentation:** minst en källa från nivåerna 1–3 i källhierarkin (C.4) existerar.
4. **Rekonstruerbar kedja:** implementeringsvägen kan dokumenteras från offentliga organisations- och processdokument för mätfönstret.

Upptagning beslutas på kriterierna 1–4 *innan* utfallsmagnituder granskas; ett fall får inte tas bort efter att dess trohetsvärde är känt. Listmål: sex till tio fall som spänner över djupskalan, minst två med kodat djup ≤ 2.

## C.3 Variabel 1 — Delegationsdjup (n), med godkännandebredd (w)

**Definition.** n är antalet organisatoriskt distinkta lager på den modala leveransvägen som måste ta emot, översätta och återöverföra eller tillämpa direktivet mellan den innehållsfastställande myndigheten (startnod) och leveranstransaktionen (slutnod). Startnoden är den nivå där operativt innehåll färdigställdes — inte nödvändigtvis den legislativa församlingen; slutnoden är den medborgar- eller företagsvända transaktionen.

**Räkneregler:**

1. Ett lager räknas när det är organisatoriskt distinkt (egen ledning, budgetlinje eller författningsidentitet) OCH utför översättning — omformatering av direktivet till sina egna instrument, kategorier, planer eller system — på den modala vägen.
2. **Seriella kontra parallella:** enheter som verkar parallellt på samma nivå (medgodkännare, medundertecknare, samtidiga godkännanden) läggs inte till n. De registreras i en separat variabel, **godkännandebredd w_i** — antalet distinkta godkännanden som krävs på nivå i — med W = Σ w_i som fallets totala godkännandeantal. Djup n fångar kedjemodellens seriella sammansättning; W fångar Pressman och Wildavskys gemensam-handling-antal, vilket blandade de två. Oaklands sjuttio godkännanden över trettio beslutspunkter är den kanoniska illustrationen av varför distinktionen måste kodas snarare än antas. Analysen behandlar n som primär och W som explorativ.
3. **Rena kanaler:** en enhet som passerar direktivet eller dess medel utan översättning räknas till n endast om den har fördröjnings- eller vetokapacitet; flagga sådana lager `kanal`.
4. **Automatiserade lager:** ett digitalt system på den modala vägen räknas som ett lager, flaggat `automatiserat`, med en not om vad det kan och inte kan uttrycka (matar Variabel 4).
5. **Variation inom fall:** där ett direktiv färdas nedåt genom flera distinkta kedjor (MGNREGA:s delstater), är varje kedja ett delfall med sitt eget n, kodat från sin egen dokumentation (C.7).
6. **Evidens och fönster:** n kodas från organogram, författningar, programriktlinjer och processdokumentation *som de såg ut vid mätfönstret*, med en källa citerad per lager. Prestandainformation är otillåten som evidens för n (detta är brandväggen mot att smuggla in kapacitet i djup).

## C.4 Variabel 2 — Implementeringstrohet (F)

**Definition.** F = levererat utfall / angivet kvantifierat mål, mätt vid horisonten, begränsat till [0, 1]. Horisonten är direktivets egen tidsfrist där en sådan existerar (OZG: 2022-12-31); annars fem år från operativ start. Både den råa kvoten och eventuell horisontjustering rapporteras.

**Källhierarki.** Värden tas från den högsta tillgängliga nivån; lägre nivåer är tillåtna endast när högre nivåer är tysta:

1. Riksrevisionsverk och författningsenliga revisorer (NAO, Bundesrechnungshof, CAG of India).
2. Randomiserade eller kvasiexperimentella utvärderingar.
3. Officiell statistik med oberoende verifiering — inklusive survey-mot-register-designen, där en oberoende hushållsundersökning jämförs med den administrativa leveransdatabasen; bekräftelsekvoten är själv ett trohetsinstrument (MGNREGA Bihar: 59 procent av officiellt registrerade arbetande hushåll bekräftade av survey).
4. Expertgranskade observationella utvärderingar.

Medierapporter är endast bakgrund; inget F-värde vilar på dem. Där tillåtna källor är i konflikt, koda F som ett intervall [F_låg, F_hög] och kör analysen vid båda ändarna.

**Tabell C-1 — operationalisering per fall (fastställd vid upptagning):**

| Fall | Målgrund | F täljare / nämnare | Primärkällor |
|---|---|---|---|
| Oakland EDA | Utlovade jobb; anslagna medel | Levererade jobb / utlovade; produktivt utbetalda medel / anslagna | P&W 1973 (bok; lös 80%-radens aritmetik mot den tryckta tabellen) |
| MGNREGA (delfall delstat) | Författningsenlig rättighet; arbete på begäran | Hushåll som får arbete / hushåll som söker; persondagar per efterfrågande hushåll / rättighet; survey–register-bekräftelsekvot där tillgänglig | NSS-baserade studier (Dutta et al.); CAG-revisioner; NBER w22803 |
| Universal Credit | Ersättningsmått för leverans (enligt C.2.2) | Första betalningar i tid / totalt; onlineverifiering uppnådd / 90 % plan | NAO 2018, 2020 |
| OZG | 575 tjänster online före 2022-12-31 | Tjänster online enligt specifikation / 575 (4 % per BRH); valfri form online / 575 (19 %; ~105 per Förbundsdagen) | Bundesrechnungshof; Förbundsdagen; NKR Monitor |
| PIX | Täckning/upptag (inget kvantifierat ex ante-mål — flagga; existensbevispost) | Vuxenbefolkningsadoption vid horisont | BCB-statistik; expertgranskade studier |
| [Frankrike / Estland / tillägg] | [vid upptagning] | [vid upptagning] | [endast nivå 1–3] |

## C.5 Variablerna 3 och 4 — Hot (T) och Uppgiftsvariation (V)

**T (diskriminatorkolumn, per §4.1):** låg / medel / hög — den dokumenterade materiella insatsen för aktörer i implementeringslagren i direktivets misslyckande eller förvrängning (räntor, budgetar, auktoritet, positioner hotade av trogen leverans). Evidensgrund registrerad per fall (t.ex. MGNREGA-litteraturen om politisk ekonomi; dokumentation av upphandlingsräntor). T är en egenskap hos de implementerande lagrens intressen, inte hos offentlig kontrovers.

**V (uppgiftsvariation, per §2.5 och §4.3):** låg / medel / hög — leveransuppgiftens inneboende dimensionalitet: hur mycket legitim fall-till-fall-variation trogen leverans kräver. Betalningar är låg-V; komplex bedömning av personliga omständigheter är hög-V. V kodas från uppgiftens natur, aldrig från leveransprestanda. V är vad som tillåter djup-för-rang-analysen: modellen förutsäger att grunt+automatiserat räcker vid låg V (PIX) och misslyckas vid hög V (Universal Credit), och listan får inte behandla dessa två som utbytbara datapunkter.

## C.6 Kodningsordning och blinding

1. Frys protokoll och lista (C.1, C.2).
2. Koda n, w, T, V för alla fall från enbart strukturella och dokumentära källor — trohetskällor oöppnade. Logga färdigställandedatum.
3. Koda F per Tabell C-1.
4. **Andrakodare:** om en mänsklig andrakodare inte är tillgänglig, körs en andra kodning av ett AI‑system som endast får detta protokoll och källdokumenten per fall, blind för den första kodarens värden och för papprets förutsägelse; oenigheter avgörs av Björn med en dokumenterad motivering per oenighet; överensstämmelsestatistik rapporteras. Om ingen andra kodning sker, säger pappret det i §6.1 snarare än att antyda motsatsen.

## C.7 MGNREGA Delprotokoll

1. **Regel för val av delfall (fastställd i förväg; välj en och logga den):** (a) alla delstater som täcks av Dutta–Murgai–Ravallion–van de Walles NSS-analys, eller (b) alla delstater över ett tröskelvärde för hushåll på landsbygden. Inga diskretionära tillägg efter att trohetsdata har setts.
2. **Mätfönster:** primärt fönster som matchar den NSS-baserade litteraturen (2009–2012); ett andra fönster efter elektronisk medelshanteringsutrullning kodat för robusthet, separat, eftersom tekniken förändrade själva kedjan.
3. **Djup per delstat:** från delstatsspecifika implementeringsstrukturer (Gram Panchayat → blockprogramansvarig → distriktsprogramsamordnare → delstatsdepartement, plus delstatsspecifika nivåer och parallella organ), varje lager källbelagt; delstater skiljer sig i både n och w, vilket är designens poäng.
4. **Trohet per delstat:** instrumenten i Tabell C-1; ransoneringsgrad (sökt-men-inte-erhållet) inverterad till efterfrågeuppfyllelsekvoten.
5. **Kovariater registrerade, inte absorberade:** delstatlig kapacitet (rivalförklaringen) kodad separat från publicerade index så att djup–kapacitet-korrelationen kan rapporteras snarare än döljas; T från den politisk-ekonomiska litteraturen per delstat där dokumenterad.
6. **Lokaliseringstest (Förutsägelse 2):** där socialrevisionsdata tillskriver avvikelser till administrativa nivåer, koda avvikelsemassans nivåfördelning; förutsägelsen är koncentration mot leveransänden.
7. **Experimentell post:** Bihar-medelflödesrandomiseringen är en separat rad flaggad `experimentell` — den enda manipulerat-djup-observationen i listan.

## C.8 Analysplan (registrerad)

1. **Primär:** Spearmans rangkorrelation av F mot n över listan (delfall viktade så att MGNREGA inte dominerar till antalet; viktningsregel fastställd vid frysning). Permutationsbaserat p-värde givet litet N. Intervallkodad F analyserad vid båda ändarna.
2. **Diskriminator:** F–n-relationen rapporterad inom strata av T; det kontrasterande mönstret (F följer T, inte n) rapporteras som evidens för den antagonistiska mekanismen per §6.4(3).
3. **Djup–rang-mönster:** (n, V, F)-konfigurationen granskad kvalitativt mot §4.3:s förutsägelse; med detta N är det en mönsterkontroll, inte ett test, och är märkt som sådan.
4. **Explorativt:** W, och den sammansatta n×W, mot F; lokaliseringsfördelningen (C.7.6).
5. **Styrkeärlighet:** med sex till tio fall är endast stora effekter detekterbara; studien är närmare ett teckentest än en estimation, och pappret säger det. Den fullständiga studien (färdplan Fas 2, Studie 3) ärver detta protokoll med det N det förtjänar.
6. **Nollor:** rapporterade per §6.4(4), med konstrukt-revideringskonsekvensen angiven.

## C.9 Avvikelselogg

| Datum | Avsnitt | Ändring | Skäl | Före/efter trohetskodning? |
|---|---|---|---|---|
| — | — | — | — | — |

*(Loggen levereras med pappret. En tom logg är ett resultat.)*
