Här är översättningen av det sista appendixet till svenska:

---

# Appendix C: Referenstabell för störningstidsskalor

Simuleringen använder illustrativa störningsperioder (30, 45 och 120 tidssteg) valda för analytisk tydlighet snarare än empirisk kalibrering. Detta appendix tillhandahåller uppskattade verkliga tidsskalor för styrningsrelevanta störningar, organiserade efter frekvensband. Dessa uppskattningar är hämtade från den litteratur som identifierats genom den AI-förmedlade forskningsprocess som beskrivs i appendix D; de är indikativa snarare än auktoritativa och tillhandahålls för att stödja översättningen från simuleringsparametrar till verkliga kontexter för institutionell design.

Där ett tidssteg i simuleringen motsvarar en vecka av verklig styrningstid, representerar simuleringens körning på 150 steg ungefär tre år — en rimlig planeringshorisont för kommunal krishantering. Parameterförhållandena (snabb period ≈ 30 steg, medellång ≈ 45 steg, långsam ≈ 120 steg) skulle då motsvara ungefär 7 månader, 10 månader respektive 2,3 år — rimligt för de störningstyper som beskrivs nedan.

---

## Snabba störningar (dagar till veckor)

Dessa störningar kräver svar snabbare än vad de flesta nationella policycykler kan leverera. De utgör det primära argumentet för genuin lokal beslutsbefogenhet med minimal godkännandelatens.

| Störningstyp | Typisk tid från start till kulmen | Anteckningar |
| --- | --- | --- |
| Akut brottsvåg / civil oro | 1–7 dagar | Kräver lokal autonomi för brottsbekämpning; nationellt policysvar anländer efter kulmen |
| Lokal störning i leveranskedjan | 3–14 dagar | Brist på mat, bränsle, medicinsk utrustning på kommunal nivå |
| Akut folkhälsoutbrott | 3–21 dagar | Fönstret för tidig inneslutning stängs inom dagar; nationellt tillkännagivande släpar vanligtvis efter med 1–3 veckor |
| Översvämning / akut väderhändelse | Timmar–7 dagar | Krisinsatser måste vara förpositionerade; centralt godkännande är för långsamt |
| Lokalt infrastrukturhaveri | 1–14 dagar | Avbrott i el, vatten, transport; reparationsbeslut måste fattas lokalt |
| Plötslig förflyttningshändelse | 1–14 dagar | Flyktingtillströmning, evakuering; beslut om mottagningskapacitet är lokala |

Uppskattad styrningslatens till svar under centraliserad arkitektur: 2–8 veckor (krisdetektering, eskalering, politiskt beslut, budgetallokering, implementering). Under lokal arkitektur med förhandsgodkända svarsprotokoll: 1–5 dagar.

---

## Medellånga störningar (månader till två år)

Dessa störningar verkar på samma skala som årliga budgetcykler och regional ekonomisk dynamik. De är för ihållande för att behandlas som nödsituationer och för snabba för att långsamma nationella policyinstrument ska kunna följa dem effektivt utan regionala mellanhänder.

| Störningstyp | Typisk varaktighet | Anteckningar |
| --- | --- | --- |
| Säsongsmässig arbetslöshetsfluktuation | 3–9 månader | Regional arbetsmarknadsdynamik; nationella genomsnitt döljer regional variation |
| Regionalt tryck på bostadsmarknaden | 6–24 månader | Lokal obalans mellan tillgång och efterfrågan; nationell bostadspolitik anpassar sig för långsamt och för enhetligt |
| Epidemisk våg (endemisk, återkommande) | 2–6 månader | Årlig influensa, säsongsvågor av covid; regional variation i allvarlighetsgrad kräver regional svarskalibrering |
| Regional infrastrukturförsämring | 6–36 månader | Ackumulerat eftersatt underhåll; regional synlighet före nationell statistisk signal |
| Kommunal finansiell stress | 6–24 månader | Obalans mellan intäkter och utgifter som byggs upp över budgetcykler; synlig på kommunal nivå före nationell |
| Jordbruks-/miljömässigt säsongstryck | 3–12 månader | Torka, missväxt, översvämningscykel; regional synlighet, regionalt svar |

Uppskattad styrningslatens under regional arkitektur: 1–3 månader (regional övervakning, regionalt verkställande beslut, regional budgetomfördelning). Under endast nationell arkitektur: 6–18 månader från regional signal till nationell policyimplementering.

---

## Långsamma störningar (år till decennier)

Dessa störningar är strukturellt osynliga för lokala regulatorer och kräver den långa tidsmässiga medelvärdesbildning som endast ett globalt eller nationellt lager med bred spatial räckvidd kan tillhandahålla. De utgör den legitima domänen för långsam global styrning med hög latens.

| Störningstyp | Typisk tidsskala | Anteckningar |
| --- | --- | --- |
| Sekulärt demografiskt skifte | 10–30 år | Befolkningens åldrande, urbanisering, fruktsamhetstrender; endast synliga i aggregerad långtidsstatistik |
| Långsiktig arbetsmarknadstransformation | 5–20 år | Undanträngning genom automatisering, sektoriell övergång; ingen lokal signal förrän krisen är långt framskriden |
| Kumulativ ekologisk nedbrytning | 10–50 år | Förlust av biologisk mångfald, utarmning av jord, sänkning av grundvattennivåer; under tröskelvärdet lokalt, kritiskt globalt |
| Baslinjeförskjutning på grund av klimatförändringar | 20–100 år | Förändring i temperatur och nederbördsmönster; kräver dataaggregering över flera decennier för att särskiljas från naturlig varians |
| Urholkning av institutionellt förtroende | 10–30 år | Minskande medborgerligt deltagande, ökande anti-institutionella stämningar; långsamt rörligt, systemövergripande |
| Långsiktig skuldackumulering | 10–30 år | Strukturell finansiell obalans som byggs upp över politiska cykler; nationell och överstatlig synlighet |
| Övergång av teknologisk infrastruktur | 10–20 år | Övergångar i energisystem, transport, kommunikationsnätverk; kräver samordning med lång horisont bortom någon enskild jurisdiktion |

Uppskattad styrningslatens för upptäckt och svar under global/nationell arkitektur: 3–10 år från trendens början till samordnat policysvar. Detta är lämpligt för störningar med perioder på decennieskala; det är strukturellt för långsamt för störningar i de snabba eller medellånga banden.

---

## Kartläggning av simuleringsparametrar mot verkliga tidsskalor

Om ett tidssteg i simuleringen representerar en vecka:

| Simulering | Steg | Verklig tid | Lämpligt styrningslager |
| --- | --- | --- | --- |
| Snabb störningsperiod | 30 | ~7 månader | Lokal |
| Medellång störningsperiod | 45 | ~10 månader | Regional |
| Långsam störningsperiod | 120 | ~2,3 år | Nationell / global |
| Lokal regulators latens τ_l = 2 | 2 | ~2 veckor | Kommunalt verkställande beslut |
| Regional regulators latens τ_r = 6 | 6 | ~6 veckor | Regional beslutscykel |
| Global regulators latens τ_g = 12 | 12 | ~3 månader | Nationell / överstatlig policycykel |

Om ett tidssteg i simuleringen representerar en månad:

| Simulering | Steg | Verklig tid | Lämpligt styrningslager |
| --- | --- | --- | --- |
| Snabb störningsperiod | 30 | ~2,5 år | Regional |
| Medellång störningsperiod | 45 | ~3,75 år | Nationell |
| Långsam störningsperiod | 120 | ~10 år | Global |
| Lokal regulators latens τ_l = 2 | 2 | ~2 månader | Regionalt verkställande beslut |
| Regional regulators latens τ_r = 6 | 6 | ~6 månader | Nationell policycykel |
| Global regulators latens τ_g = 12 | 12 | ~1 år | Överstatlig samordning |

Modellen är skalinvariant i denna bemärkelse: de strukturella relationerna gäller oavsett den absoluta tidsskalan, förutsatt att förhållandena mellan störningsperioder och regulatorlatenser bevaras. Vad som spelar roll är inte den absoluta hastigheten på styrningen, utan om styrningsarkitekturen matchar frekvensspektrumet för de störningar den möter.

---

## En notering om empirisk kalibrering

Värdena i denna tabell är uppskattningar sammanställda från allmän kunskap om tidsskalor för styrning och policy. En rigorös empirisk kalibrering — att mäta faktiska latensfördelningar i specifika styrningssystem, spåra verkliga tidsskalor från start till kulmen för störningar över olika kristyper — skulle avsevärt stärka ramverkets tillämplighet på institutionell design.

Detta kalibreringsarbete är hanterbart. Dataset för krissvar, register över policyimplementering och administrativa beslutsloggar innehåller de latensdata som krävs. Data för störningars tidsskalor finns tillgängliga i epidemiologiska, ekonomiska och miljömässiga övervakningsregister. Det primära hindret är inte datatillgänglighet, utan avsaknaden av ett standardiserat analytiskt ramverk för att organisera och tolka dessa data i reglertekniska termer — vilket är precis vad denna rapport föreslår att tillhandahålla.
